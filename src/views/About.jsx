import forgeLegacyLogo from '../assets/forge_legacy_logo.png';

export default function About({ onOpenUIKit }) {
  return (
    <div className="docs-home">
      <section className="docs-hero">
        <div className="docs-hero-copy">
          <div className="docs-eyebrow">
            <span className="docs-eyebrow-dot" />
            Open source • Brasil
          </div>

          <h1>Forge <span>Legacy</span></h1>

          <p className="docs-hero-lead">
            Uma framework brasileira para GTA V Legacy criada para oferecer uma base moderna,
            organizada e escalável para servidores FiveM — com documentação clara, APIs consistentes
            e desenvolvimento aberto à comunidade.
          </p>

          <div className="docs-hero-actions">
            <button type="button" className="docs-primary-button" onClick={onOpenUIKit}>
              Explorar o UI Kit
            </button>
            <a className="docs-secondary-button" href="https://github.com/Framework-Forge" target="_blank" rel="noreferrer">
              GitHub da Forge
            </a>
          </div>
        </div>

        <div className="docs-hero-mark" aria-hidden="true">
          <div className="docs-logo-glow" />
          <img src={forgeLegacyLogo} alt="" />
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>01</span>
          <div>
            <p>Quem somos</p>
            <h2>Uma equipe brasileira construindo em público.</h2>
          </div>
        </div>
        <div className="docs-prose">
          <p>
            A <strong>Forge</strong> é uma equipe independente de desenvolvimento que acredita que
            projetos open source podem elevar o padrão técnico do ecossistema FiveM.
          </p>
          <p>
            A <strong>Forge Legacy</strong> é a edição da nossa framework voltada ao GTA V Legacy.
            O projeto nasce no Brasil, mas foi pensado desde o início para atender desenvolvedores e
            comunidades de qualquer lugar do mundo.
          </p>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>02</span>
          <div>
            <p>Nosso objetivo</p>
            <h2>Transformar uma iniciativa brasileira em um projeto de escala global.</h2>
          </div>
        </div>

        <div className="docs-mission-grid">
          <article className="docs-info-card">
            <span>Brasil</span>
            <h3>Origem brasileira</h3>
            <p>
              Nosso objetivo é consolidar uma framework de grande escala mantida por uma equipe
              brasileira, demonstrando a capacidade técnica da nossa comunidade.
            </p>
          </article>

          <article className="docs-info-card">
            <span>Open Source</span>
            <h3>Desenvolvimento aberto</h3>
            <p>
              Código, decisões técnicas e evolução do ecossistema devem ser acessíveis, auditáveis
              e colaborativos.
            </p>
          </article>

          <article className="docs-info-card">
            <span>Global</span>
            <h3>Feita para o mundo</h3>
            <p>
              A arquitetura e a documentação são pensadas para permitir adoção internacional,
              integrações previsíveis e contribuição de diferentes comunidades.
            </p>
          </article>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>03</span>
          <div>
            <p>Por que Legacy?</p>
            <h2>Um nome que identifica claramente a plataforma suportada.</h2>
          </div>
        </div>
        <div className="docs-prose">
          <p>
            <strong>Forge Core</strong> continua sendo o núcleo e a identidade técnica da framework.
            O nome <strong>Forge Legacy</strong> identifica a distribuição e a documentação destinadas
            ao ambiente <strong>GTA V Legacy</strong>.
          </p>
          <p>
            Essa separação deixa a compatibilidade explícita e prepara o ecossistema Forge para
            evoluir sem misturar gerações diferentes do jogo.
          </p>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>04</span>
          <div>
            <p>Princípios</p>
            <h2>O que guia a Forge Legacy.</h2>
          </div>
        </div>

        <div className="docs-principles">
          <article><strong>Clareza</strong><p>APIs, configurações e documentação devem ser fáceis de entender e previsíveis.</p></article>
          <article><strong>Performance</strong><p>Recursos devem evitar processamento, loops e tráfego de rede desnecessários.</p></article>
          <article><strong>Modularidade</strong><p>Cada servidor deve usar apenas os sistemas de que realmente precisa.</p></article>
          <article><strong>Extensibilidade</strong><p>Desenvolvedores devem conseguir expandir a framework sem depender de alterações no core.</p></article>
          <article><strong>Compatibilidade</strong><p>O ecossistema deve facilitar integrações com recursos e ferramentas já usados no FiveM.</p></article>
          <article><strong>Comunidade</strong><p>Contribuições, revisão e conhecimento compartilhado fazem parte do projeto.</p></article>
        </div>
      </section>

      <section className="docs-callout">
        <img src={forgeLegacyLogo} alt="Logo Forge Legacy" />
        <div>
          <span>Forge Legacy</span>
          <h2>Do Brasil para a comunidade FiveM mundial.</h2>
          <p>
            Esta documentação vai reunir instalação, configuração, arquitetura, módulos, APIs,
            eventos, exports, ferramentas de desenvolvimento e guias de migração.
          </p>
        </div>
      </section>

      <p className="docs-legal-note">
        Forge Legacy é um projeto comunitário independente. O nome “Legacy” indica a edição alvo do
        GTA V e não representa afiliação oficial com Rockstar Games ou Cfx.re.
      </p>
    </div>
  );
}
