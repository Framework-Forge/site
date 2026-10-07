import forgeLogo from '../assets/forge_legacy_logo.png';
import { useI18n } from '../i18n';

function FeatureIcon({ type }) {
  const paths = {
    core: 'M12 3 4.5 7.2v9.6L12 21l7.5-4.2V7.2L12 3Zm0 0v18M4.5 7.2 12 12l7.5-4.8',
    scripts: 'M8 8 4 12l4 4M16 8l4 4-4 4M14 5l-4 14',
    tools: 'M14.7 6.3a4 4 0 0 0-5 5L4 17l3 3 5.7-5.7a4 4 0 0 0 5-5l-2.2 2.2-3-3 2.2-2.2Z',
  };

  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
      <path d={paths[type]} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function ForgeLegacy({ onOpenXtPrison, onOpenPrElevator, onOpenRenewedBanking, onOpenPsDispatch }) {
  const { t } = useI18n();

  return (
    <div className="legacy-page">
      <section className="legacy-hero">
        <div className="legacy-hero-copy">
          <div className="docs-eyebrow">
            <span className="docs-eyebrow-dot" />
            {t('legacyProjectEyebrow')}
          </div>

          <h1>Forge <span>Legacy</span></h1>
          <p className="legacy-hero-lead">{t('legacyProjectLead')}</p>

          <div className="legacy-hero-actions">
            <a
              className="docs-primary-button"
              href="https://github.com/Framework-Forge"
              target="_blank"
              rel="noreferrer"
            >
              {t('legacyProjectGithub')}
            </a>
            <a className="docs-secondary-button" href="#legacy-framework">
              {t('legacyProjectExplore')}
            </a>
          </div>

          <div className="legacy-meta">
            <span>GTA V Legacy</span>
            <span>FiveM</span>
            <span>Open Source</span>
          </div>
        </div>

        <div className="legacy-hero-card">
          <div className="legacy-logo-shell">
            <img src={forgeLogo} alt="Forge Legacy" />
          </div>
          <div className="legacy-hero-card-copy">
            <span>{t('legacyProjectIdentity')}</span>
            <strong>Forge Legacy</strong>
            <p>{t('legacyProjectIdentityDesc')}</p>
          </div>
        </div>
      </section>

      <section className="docs-section" id="legacy-framework">
        <div className="docs-section-heading">
          <span>01</span>
          <div>
            <p>{t('legacyFrameworkLabel')}</p>
            <h2>{t('legacyFrameworkTitle')}</h2>
          </div>
        </div>

        <div className="docs-prose">
          <p>{t('legacyFrameworkP1')}</p>
          <p>{t('legacyFrameworkP2')}</p>
        </div>

        <div className="legacy-feature-grid">
          <article className="legacy-feature-card">
            <div className="legacy-feature-icon"><FeatureIcon type="core" /></div>
            <span>CORE</span>
            <h3>{t('legacyCoreTitle')}</h3>
            <p>{t('legacyCoreDesc')}</p>
          </article>

          <article className="legacy-feature-card">
            <div className="legacy-feature-icon"><FeatureIcon type="scripts" /></div>
            <span>RESOURCES</span>
            <h3>{t('legacyScriptsTitle')}</h3>
            <p>{t('legacyScriptsDesc')}</p>
          </article>

          <article className="legacy-feature-card">
            <div className="legacy-feature-icon"><FeatureIcon type="tools" /></div>
            <span>DX</span>
            <h3>{t('legacyToolsTitle')}</h3>
            <p>{t('legacyToolsDesc')}</p>
          </article>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>02</span>
          <div>
            <p>{t('legacyScriptsLabel')}</p>
            <h2>{t('legacyScriptsSectionTitle')}</h2>
          </div>
        </div>

        <div className="legacy-resource-list">
          <article>
            <span>01</span>
            <div>
              <h3>{t('legacyGameplayTitle')}</h3>
              <p>{t('legacyGameplayDesc')}</p>
            </div>
          </article>
          <article>
            <span>02</span>
            <div>
              <h3>{t('legacySystemsTitle')}</h3>
              <p>{t('legacySystemsDesc')}</p>
            </div>
          </article>
          <article>
            <span>03</span>
            <div>
              <h3>{t('legacyUiTitle')}</h3>
              <p>{t('legacyUiDesc')}</p>
            </div>
          </article>
          <article>
            <span>04</span>
            <div>
              <h3>{t('legacyIntegrationTitle')}</h3>
              <p>{t('legacyIntegrationDesc')}</p>
            </div>
          </article>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>03</span>
          <div>
            <p>{t('legacyCatalogLabel')}</p>
            <h2>{t('legacyCatalogTitle')}</h2>
          </div>
        </div>

        <div className="legacy-project-catalog">
          <article className="legacy-project-item">
            <div className="legacy-project-badge">XT</div>
            <div className="legacy-project-copy">
              <span>Forge Legacy Resource</span>
              <h3>xt-prison</h3>
              <p>{t('legacyXtPrisonDesc')}</p>
              <div className="legacy-project-tags">
                <span>FiveM</span><span>PR Bridge</span><span>Config in-game</span><span>Persistência</span>
              </div>
            </div>
            <button type="button" className="docs-primary-button" onClick={onOpenXtPrison}>{t('legacyOpenDocs')}</button>
          </article>
          <article className="legacy-project-item">
            <div className="legacy-project-badge">PR</div>
            <div className="legacy-project-copy">
              <span>Forge Legacy Resource</span>
              <h3>pr_elevator</h3>
              <p>{t('legacyPrElevatorDesc')}</p>
              <div className="legacy-project-tags">
                <span>FiveM</span><span>PR Bridge</span><span>DUI</span><span>MariaDB</span><span>Keycards</span><span>Access Control</span>
              </div>
            </div>
            <button type="button" className="docs-primary-button" onClick={onOpenPrElevator}>{t('legacyOpenDocs')}</button>
          </article>
          <article className="legacy-project-item">
            <div className="legacy-project-badge">RB</div>
            <div className="legacy-project-copy">
              <span>Forge Legacy Resource</span>
              <h3>Renewed-Banking</h3>
              <p>{t('legacyRenewedBankingDesc')}</p>
              <div className="legacy-project-tags">
                <span>Banking</span><span>PR Bridge</span><span>MariaDB</span><span>Admin</span>
              </div>
            </div>
            <button type="button" className="docs-primary-button" onClick={onOpenRenewedBanking}>{t('legacyOpenDocs')}</button>
          </article>
          <article className="legacy-project-item">
            <div className="legacy-project-badge">PD</div>
            <div className="legacy-project-copy">
              <span>Forge Legacy Resource</span>
              <h3>ps-dispatch</h3>
              <p>{t('legacyPsDispatchDesc')}</p>
              <div className="legacy-project-tags">
                <span>Dispatch</span><span>PR Bridge</span><span>Incidents</span><span>In-game Settings</span>
              </div>
            </div>
            <button type="button" className="docs-primary-button" onClick={onOpenPsDispatch}>{t('legacyOpenDocs')}</button>
          </article>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>04</span>
          <div>
            <p>{t('legacyArchitectureLabel')}</p>
            <h2>{t('legacyArchitectureTitle')}</h2>
          </div>
        </div>

        <div className="legacy-architecture">
          <div className="legacy-stack-row">
            <span>01</span>
            <strong>Forge Core</strong>
            <p>{t('legacyStackCore')}</p>
          </div>
          <div className="legacy-stack-line" />
          <div className="legacy-stack-row">
            <span>02</span>
            <strong>Forge Resources</strong>
            <p>{t('legacyStackResources')}</p>
          </div>
          <div className="legacy-stack-line" />
          <div className="legacy-stack-row">
            <span>03</span>
            <strong>Forge UI Kit</strong>
            <p>{t('legacyStackUi')}</p>
          </div>
          <div className="legacy-stack-line" />
          <div className="legacy-stack-row">
            <span>04</span>
            <strong>{t('legacyStackCommunityTitle')}</strong>
            <p>{t('legacyStackCommunity')}</p>
          </div>
        </div>
      </section>

      <section className="legacy-callout">
        <div>
          <span>{t('legacyOpenLabel')}</span>
          <h2>{t('legacyOpenTitle')}</h2>
          <p>{t('legacyOpenDesc')}</p>
        </div>
        <a
          className="docs-primary-button"
          href="https://github.com/Framework-Forge"
          target="_blank"
          rel="noreferrer"
        >
          {t('legacyProjectGithub')}
        </a>
      </section>
    </div>
  );
}
