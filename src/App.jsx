import { useState } from 'react';
import { NotificationProvider } from './components/NotificationCenter';
import BrandIdentity from './views/BrandIdentity';
import ComponentShowcase from './views/ComponentShowcase';
import DashboardSimulator from './views/DashboardSimulator';
import LogoConverter from './views/LogoConverter';
import logoSimple from './assets/logo_simple_transparent.png';
import forgeboxMascot from './assets/forgebox_mascot_avatar.jpg';

function App() {
  const [currentSection, setCurrentSection] = useState('identidade'); // 'identidade' | 'componentes' | 'dashboard' | 'logos'

  // Ícone SVG para cada item de menu
  const menuIcons = {
    identidade: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="showcase-menu-item-icon">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    componentes: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="showcase-menu-item-icon">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
    dashboard: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="showcase-menu-item-icon">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="9" y1="3" x2="9" y2="21" />
        <line x1="9" y1="9" x2="21" y2="9" />
        <line x1="9" y1="15" x2="21" y2="15" />
      </svg>
    ),
    logos: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="showcase-menu-item-icon">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    )
  };

  return (
    <NotificationProvider>
      <div className="showcase-layout">
        
        {/* Barra Lateral do Showcase */}
        <aside className="showcase-sidebar">
          
          {/* Logo da Forgebox */}
          <div className="showcase-logo">
            <img 
              src={logoSimple} 
              className="showcase-logo-icon" 
              alt="Forgebox Logo"
              style={{ width: '32px', height: '32px', objectFit: 'contain' }}
            />
            <h1 className="showcase-logo-text">FORGE<span>BOX</span></h1>
          </div>

          {/* Grupo de Identidade */}
          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">Conceito</h3>
            <ul className="showcase-menu-list">
              <li 
                className={`showcase-menu-item ${currentSection === 'identidade' ? 'active' : ''}`}
                onClick={() => setCurrentSection('identidade')}
              >
                {menuIcons.identidade}
                <span className="showcase-menu-item-text">Identidade Visual</span>
              </li>
            </ul>
          </div>

          {/* Grupo de Componentes */}
          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">Desenvolvimento</h3>
            <ul className="showcase-menu-list">
              <li 
                className={`showcase-menu-item ${currentSection === 'componentes' ? 'active' : ''}`}
                onClick={() => setCurrentSection('componentes')}
              >
                {menuIcons.componentes}
                <span className="showcase-menu-item-text">Componentes de UI</span>
              </li>
            </ul>
          </div>

          {/* Grupo de Ferramentas */}
          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">Ferramentas</h3>
            <ul className="showcase-menu-list">
              <li 
                className={`showcase-menu-item ${currentSection === 'logos' ? 'active' : ''}`}
                onClick={() => setCurrentSection('logos')}
              >
                {menuIcons.logos}
                <span className="showcase-menu-item-text">Conversor de Logos</span>
              </li>
            </ul>
          </div>

          {/* Grupo de Simulação */}
          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">Sistemas</h3>
            <ul className="showcase-menu-list">
              <li 
                className={`showcase-menu-item ${currentSection === 'dashboard' ? 'active' : ''}`}
                onClick={() => setCurrentSection('dashboard')}
              >
                {menuIcons.dashboard}
                <span className="showcase-menu-item-text">Dashboard Admin</span>
              </li>
            </ul>
          </div>

          {/* Rodapé com Forgie Mascot */}
          <div className="showcase-footer">
            <div className="showcase-mascot-box">
              <img
                src={forgeboxMascot}
                alt="Forgie Mascote"
                className="showcase-mascot-img"
                style={{ borderRadius: '50%', objectFit: 'cover' }}
              />
              <div className="showcase-mascot-info">
                <h4>Forgie</h4>
                <p style={{ color: 'var(--color-success)', display: 'flex', alignItems: 'center', gap: '4px' }}>
                  <span style={{ display: 'inline-block', width: '6px', height: '6px', backgroundColor: 'var(--color-success)', borderRadius: '50%' }}></span>
                  Ferreiro Ativo
                </p>
              </div>
            </div>
            <div style={{ fontSize: '10px', color: 'var(--space-text-muted)', textAlign: 'center' }}>
              Forgebox UI Kit v1.0.0
            </div>
          </div>

        </aside>

        {/* Conteúdo do Visualizador */}
        <main className={`showcase-content ${currentSection === 'dashboard' ? 'showcase-content--dashboard' : ''}`}>
          {currentSection === 'identidade' && <BrandIdentity />}
          {currentSection === 'componentes' && <ComponentShowcase />}
          {currentSection === 'logos' && <LogoConverter />}
          {currentSection === 'dashboard' && <DashboardSimulator />}
        </main>

      </div>
    </NotificationProvider>
  );
}

export default App;
