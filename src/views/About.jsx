import ForgeFlame3D from '../components/ForgeFlame3D';
import { useI18n } from '../i18n';

export default function About({ onOpenUIKit, onOpenPrBridge }) {
  const { t } = useI18n();

  return (
    <div className="docs-home">
      <section className="docs-hero docs-hero--forge">
        <div className="docs-hero-copy">
          <div className="docs-eyebrow">
            <span className="docs-eyebrow-dot" />
            {t('heroEyebrow')}
          </div>

          <h1>
            {t('heroTitleA')} <span>{t('heroTitleB')}</span>
          </h1>

          <p className="docs-hero-lead">{t('heroLead')}</p>

          <div className="docs-hero-actions">
            <button type="button" className="docs-primary-button" onClick={onOpenUIKit}>
              {t('explore')}
            </button>
            <a
              className="docs-secondary-button"
              href="https://github.com/Framework-Forge"
              target="_blank"
              rel="noreferrer"
            >
              {t('github')}
            </a>
          </div>

          <p className="docs-hero-caption">{t('heroCaption')}</p>
        </div>

        <div className="docs-hero-visual">
          <ForgeFlame3D />
        </div>
      </section>

      <section className="docs-home-announcement">
        <div className="docs-home-announcement-glow" aria-hidden="true" />
        <div className="docs-home-announcement-copy">
          <div className="docs-home-announcement-eyebrow">
            <span>NEW</span>
            {t('bridgeAnnouncementEyebrow')}
          </div>

          <h2>{t('bridgeAnnouncementTitle')}</h2>
          <p>{t('bridgeAnnouncementDesc')}</p>

          <div className="docs-home-announcement-tags">
            <span>Framework agnostic</span>
            <span>Interact</span>
            <span>Target</span>
            <span>UI</span>
            <span>Callbacks</span>
            <span>Developer tools</span>
          </div>
        </div>

        <div className="docs-home-announcement-action">
          <div className="docs-home-announcement-mark" aria-hidden="true">
            <strong>PR</strong>
            <span>BRIDGE</span>
          </div>

          <button type="button" className="docs-primary-button" onClick={onOpenPrBridge}>
            {t('bridgeAnnouncementButton')}
          </button>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>01</span>
          <div>
            <p>{t('whoLabel')}</p>
            <h2>{t('whoTitle')}</h2>
          </div>
        </div>
        <div className="docs-prose">
          <p>{t('whoP1')}</p>
          <p>{t('whoP2')}</p>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>02</span>
          <div>
            <p>{t('visionLabel')}</p>
            <h2>{t('visionTitle')}</h2>
          </div>
        </div>

        <div className="docs-mission-grid docs-platform-grid">
          <article className="docs-info-card docs-platform-card">
            <span>GTA V</span>
            <h3>{t('legacyTitle')}</h3>
            <p>{t('legacyDesc')}</p>
          </article>

          <article className="docs-info-card docs-platform-card">
            <span>GTA V</span>
            <h3>{t('enhancedTitle')}</h3>
            <p>{t('enhancedDesc')}</p>
          </article>

          <article className="docs-info-card docs-platform-card docs-platform-card--future">
            <span>Future</span>
            <h3>{t('sixmTitle')}</h3>
            <p>{t('sixmDesc')}</p>
          </article>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>03</span>
          <div>
            <p>{t('objectiveLabel')}</p>
            <h2>{t('objectiveTitle')}</h2>
          </div>
        </div>

        <div className="docs-principles">
          <article><strong>{t('clarity')}</strong><p>{t('clarityD')}</p></article>
          <article><strong>{t('performance')}</strong><p>{t('performanceD')}</p></article>
          <article><strong>{t('modularity')}</strong><p>{t('modularityD')}</p></article>
          <article><strong>{t('extensibility')}</strong><p>{t('extensibilityD')}</p></article>
          <article><strong>{t('compatibility')}</strong><p>{t('compatibilityD')}</p></article>
          <article><strong>{t('community')}</strong><p>{t('communityD')}</p></article>
        </div>
      </section>

      <section className="docs-callout">
        <div className="docs-callout-mark" aria-hidden="true">
          <span className="docs-callout-flame">◆</span>
        </div>
        <div>
          <span>{t('nextLabel')}</span>
          <h2>{t('nextTitle')}</h2>
          <p>{t('nextDesc')}</p>
        </div>
      </section>

      <p className="docs-legal-note">{t('legal')}</p>
    </div>
  );
}
