import { useNotification } from '../components/NotificationContext';
import brandBoard from '../assets/brand_board.png';
import logoSimple from '../assets/logo_simple.png';
import logoTagline from '../assets/logo_tagline.png';
import mascotForgie from '../assets/forgebox_mascot.jpg';

// Ícones SVG Inline com visual Outlined e Neon Orange
const SVGIcons = {
  dashboard: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <rect x="3" y="3" width="7" height="9" />
      <rect x="14" y="3" width="7" height="5" />
      <rect x="14" y="12" width="7" height="9" />
      <rect x="3" y="16" width="7" height="5" />
    </svg>
  ),
  modules: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
    </svg>
  ),
  players: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  ),
  resources: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  settings: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <circle cx="12" cy="12" r="3" />
      <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
    </svg>
  ),
  database: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <ellipse cx="12" cy="5" rx="9" ry="3" />
      <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
      <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
    </svg>
  ),
  backup: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M17 8l-5-5-5 5M12 3v12" />
    </svg>
  ),
  logs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
      <polyline points="14 2 14 8 20 8" />
      <line x1="16" y1="13" x2="8" y2="13" />
      <line x1="16" y1="17" x2="8" y2="17" />
      <polyline points="10 9 9 9 8 9" />
    </svg>
  ),
  terminal: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <polyline points="4 17 10 11 4 5" />
      <line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
  monitor: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </svg>
  ),
  store: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 0 1-8 0" />
    </svg>
  ),
  packages: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  ),
  updates: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67" />
    </svg>
  ),
  support: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="showcase-menu-item-icon">
      <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
      <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
    </svg>
  )
};

export default function BrandIdentity() {
  const { triggerNotification } = useNotification();

  const colors = [
    { name: 'Laranja Primário', hex: '#FF7A1A', role: 'Cor de destaque principal, status ativo, botões primários e foco' },
    { name: 'Laranja Médio', hex: '#FF8C2A', role: 'Efeito hover dos botões e transições' },
    { name: 'Laranja Claro', hex: '#FF9F43', role: 'Badges especiais, avisos e tags secundárias' },
    { name: 'Branco Puro', hex: '#FFFFFF', role: 'Textos de leitura principal e títulos limpos' },
    { name: 'Cinza Escuro (Card)', hex: '#121214', role: 'Fundo dos cards de interface e sidebar principal' },
    { name: 'Preto Profundo (Fundo)', hex: '#0A0A0C', role: 'Fundo principal da tela, gerando contraste neon' }
  ];

  const handleCopyColor = (hex, name) => {
    navigator.clipboard.writeText(hex);
    triggerNotification('Cor Copiada!', `O código ${hex} (${name}) foi copiado.`, 'success', 2500);
  };

  const handleCopySVG = (key) => {
    // Obter o SVG em string de forma simples
    const svgEl = document.getElementById(`svg-icon-${key}`);
    if (svgEl) {
      const svgString = svgEl.outerHTML;
      navigator.clipboard.writeText(svgString);
      triggerNotification('SVG Copiado!', `Código SVG do ícone '${key}' pronto para uso.`, 'success', 2500);
    }
  };

  return (
    <div>
      <div className="showcase-header">
        <h1>Identidade Visual da Forgebox</h1>
        <p>Abaixo estão detalhados os elementos de design, as marcas oficiais, o mascote e a paleta de cores da plataforma Forgebox.</p>
      </div>

      {/* Grid de Cores */}
      <h2 style={{ fontFamily: 'var(--font-heading)', margin: '24px 0 16px', borderBottom: '1px solid var(--space-border-color)', paddingBottom: '8px' }}>
        Paleta de Cores Oficial
      </h2>
      <div className="component-grid">
        {colors.map((color) => (
          <div 
            key={color.hex} 
            className="showcase-card" 
            style={{ cursor: 'pointer' }}
            onClick={() => handleCopyColor(color.hex, color.name)}
          >
            <div 
              style={{ 
                height: '80px', 
                backgroundColor: color.hex, 
                borderRadius: 'var(--space-radius-md)', 
                marginBottom: '16px',
                border: '1px solid rgba(255,255,255,0.05)',
                boxShadow: color.hex === '#FF7A1A' ? '0 0 15px rgba(255, 122, 26, 0.4)' : 'none'
              }} 
            />
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <span style={{ fontWeight: 'bold', fontSize: '15px' }}>{color.name}</span>
              <code style={{ fontSize: '12px', color: 'var(--space-orange-primary)', backgroundColor: 'var(--space-bg-darkest)' }}>
                {color.hex}
              </code>
            </div>
            <p style={{ fontSize: '12px', color: 'var(--space-text-grey)', lineHeight: '1.4' }}>{color.role}</p>
          </div>
        ))}
      </div>

      {/* Logotipos e Mascote */}
      <h2 style={{ fontFamily: 'var(--font-heading)', margin: '40px 0 16px', borderBottom: '1px solid var(--space-border-color)', paddingBottom: '8px' }}>
        Recursos de Marca
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr 1fr', gap: '24px', marginBottom: '40px' }}>
        {/* Painel do Brandboard */}
        <div className="showcase-card">
          <div className="showcase-card-header">
            <span className="showcase-card-title">Quadro de Referência de Marca</span>
            <span className="showcase-card-badge design">Oficial</span>
          </div>
          <p className="showcase-card-description">
            A compilação completa da identidade visual, tipografia e botões oficiais da marca.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000', padding: '16px', borderRadius: 'var(--space-radius-md)' }}>
            <img src={brandBoard} alt="Forgebox Brand Board" style={{ maxWidth: '100%', height: 'auto', borderRadius: '4px' }} />
          </div>
        </div>

        {/* Painel de Logos */}
        <div className="showcase-card" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <div className="showcase-card-header">
              <span className="showcase-card-title">Logo Principal</span>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#050507', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-md)', display: 'flex', justifyContent: 'center' }}>
              <img src={logoTagline} alt="Forgebox Main Logo" style={{ height: '90px', objectFit: 'contain' }} />
            </div>
          </div>

          <div>
            <div className="showcase-card-header">
              <span className="showcase-card-title">Símbolo Compacto</span>
            </div>
            <div style={{ padding: '20px', backgroundColor: '#050507', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-md)', display: 'flex', justifyContent: 'center' }}>
              <img src={logoSimple} alt="Forgebox Symbol Logo" style={{ height: '90px', objectFit: 'contain' }} />
            </div>
          </div>
        </div>

        {/* Painel do Mascote Forgie */}
        <div className="showcase-card">
          <div className="showcase-card-header">
            <span className="showcase-card-title">Mascote Oficial: Forgie</span>
            <span className="showcase-card-badge design">Forgie</span>
          </div>
          <p className="showcase-card-description">
            O ferreiro anão da Forgebox que personifica a força, robustez e a criação manual de mods.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', backgroundColor: '#000', padding: '12px', borderRadius: 'var(--space-radius-md)' }}>
            <img src={mascotForgie} alt="Forgebox Mascote Forgie" style={{ maxWidth: '100%', height: '200px', objectFit: 'cover', borderRadius: '4px', filter: 'drop-shadow(0 0 6px rgba(255, 122, 26, 0.3))' }} />
          </div>
        </div>
      </div>

      {/* Tipografia */}
      <h2 style={{ fontFamily: 'var(--font-heading)', margin: '40px 0 16px', borderBottom: '1px solid var(--space-border-color)', paddingBottom: '8px' }}>
        Tipografia
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '40px' }}>
        {/* Space Grotesk */}
        <div className="showcase-card">
          <div className="showcase-card-header">
            <span className="showcase-card-title">Space Grotesk</span>
            <span className="showcase-card-badge design">Cabeçalhos</span>
          </div>
          <p className="showcase-card-description">
            Utilizada para títulos grandes, nomes de módulos, logotipos e elementos que requeiram alto impacto visual moderno e futurista.
          </p>
          <div style={{ backgroundColor: 'var(--space-bg-darkest)', padding: '20px', borderRadius: 'var(--space-radius-md)', border: '1px solid var(--space-border-color)' }}>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '32px', margin: '0 0 10px', color: '#FFF' }}>ABCDEFGHIJKL</h1>
            <h1 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '500', margin: '0 0 10px', color: 'var(--space-orange-primary)' }}>
              O Painel Modular para FiveM
            </h1>
            <p style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', color: 'var(--space-text-grey)' }}>
              Pesos suportados: Bold (700) / Semibold (600) / Medium (500)
            </p>
          </div>
        </div>

        {/* Inter */}
        <div className="showcase-card">
          <div className="showcase-card-header">
            <span className="showcase-card-title">Inter</span>
            <span className="showcase-card-badge design">Textos</span>
          </div>
          <p className="showcase-card-description">
            Utilizada para a maior parte do corpo de texto, labels, descrições, tabelas, logs e documentações devido à sua legibilidade em telas.
          </p>
          <div style={{ backgroundColor: 'var(--space-bg-darkest)', padding: '20px', borderRadius: 'var(--space-radius-md)', border: '1px solid var(--space-border-color)' }}>
            <h1 style={{ fontFamily: 'var(--font-body)', fontSize: '32px', margin: '0 0 10px', color: '#FFF', fontWeight: '400' }}>abcdefghijkl</h1>
            <h1 style={{ fontFamily: 'var(--font-body)', fontSize: '18px', fontWeight: '500', margin: '0 0 10px', color: '#EAEAEA' }}>
              Gerencie seus módulos sem complicações
            </h1>
            <p style={{ fontFamily: 'var(--font-body)', fontSize: '14px', color: 'var(--space-text-grey)', lineHeight: '1.5' }}>
              A Forgebox permite customizar a interface de acordo com suas necessidades, utilizando componentes pré-estilizados.
            </p>
          </div>
        </div>
      </div>

      {/* Catálogo de Ícones Outlined Neon */}
      <h2 style={{ fontFamily: 'var(--font-heading)', margin: '40px 0 16px', borderBottom: '1px solid var(--space-border-color)', paddingBottom: '8px' }}>
        Catálogo de Ícones Outlined (Copiar SVG)
      </h2>
      <p style={{ fontSize: '14px', color: 'var(--space-text-grey)', marginBottom: '20px' }}>
        Estes ícones foram inspirados diretamente na interface da Forgebox. Clique em qualquer card para copiar o código SVG completo.
      </p>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(140px, 1fr))', gap: '16px', marginBottom: '40px' }}>
        {Object.entries(SVGIcons).map(([key, svg]) => (
          <div 
            key={key} 
            className="showcase-card" 
            style={{ 
              alignItems: 'center', 
              cursor: 'pointer', 
              padding: '16px',
              border: '1px solid var(--space-border-color)',
              backgroundColor: 'var(--space-bg-darker)'
            }}
            onClick={() => handleCopySVG(key)}
          >
            <div 
              id={`svg-icon-${key}`}
              style={{ 
                color: 'var(--space-orange-primary)', 
                filter: 'drop-shadow(0 0 4px var(--space-orange-glow-light))',
                width: '32px', 
                height: '32px',
                marginBottom: '10px',
                display: 'flex',
                alignItems: 'center',
                justifycontent: 'center'
              }}
            >
              {svg}
            </div>
            <span style={{ fontSize: '12px', fontWeight: '500', textTransform: 'capitalize', color: 'var(--space-text-grey)' }}>
              {key === 'packages' ? 'Meus Pacotes' : key === 'updates' ? 'Atualizações' : key === 'backup' ? 'Backups' : key === 'store' ? 'Loja' : key}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
