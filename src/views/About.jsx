import ForgeFlame3D from '../components/ForgeFlame3D';
import { useI18n } from '../i18n';

export default function About({ onOpenUIKit, onOpenPrBridge, onOpenLegacy }) {
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

      <section className="docs-home-announcement docs-home-announcement--featured" aria-label="PR Bridge featured announcement">
        <div className="docs-home-announcement-glow" aria-hidden="true" />
        <div className="docs-home-announcement-copy">
          <div className="docs-home-announcement-eyebrow">
            <span>PR BRIDGE</span>
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

        <div className="docs-platform-showcase">
          <article className="docs-home-announcement docs-platform-feature-card">
            <div className="docs-home-announcement-glow" aria-hidden="true" />
            <div className="docs-home-announcement-copy">
              <div className="docs-home-announcement-eyebrow">
                <span>GTA V</span>
                {t('legacyPlatformEyebrow')}
              </div>
              <h2>{t('legacyTitle')}</h2>
              <p>{t('legacyDesc')}</p>
              <div className="docs-home-announcement-tags">
                <span>Forge Legacy</span>
                <span>PR Bridge</span>
                <span>FiveM</span>
              </div>
            </div>
            <div className="docs-home-announcement-action">
              <div className="docs-home-announcement-mark docs-platform-mark" aria-hidden="true">
                <strong>FL</strong>
                <span>LEGACY</span>
              </div>
              <button type="button" className="docs-primary-button" onClick={onOpenLegacy}>
                {t('legacyPlatformButton')}
              </button>
            </div>
          </article>

          <article className="docs-home-announcement docs-platform-feature-card docs-platform-feature-card--soon" aria-disabled="true">
            <div className="docs-home-announcement-glow" aria-hidden="true" />
            <div className="docs-home-announcement-copy">
              <div className="docs-home-announcement-eyebrow">
                <span>GTA V</span>
                {t('comingSoon')}
              </div>
              <h2>{t('enhancedTitle')}</h2>
              <p>{t('enhancedDesc')}</p>
              <div className="docs-home-announcement-tags">
                <span>Enhanced</span>
                <span>{t('comingSoon')}</span>
              </div>
            </div>
            <div className="docs-home-announcement-action">
              <div className="docs-home-announcement-mark docs-platform-mark" aria-hidden="true">
                <strong>EN</strong>
                <span>ENHANCED</span>
              </div>
              <button type="button" className="docs-primary-button docs-primary-button--disabled" disabled>
                {t('comingSoon')}
              </button>
            </div>
          </article>

          <article className="docs-home-announcement docs-platform-feature-card docs-platform-feature-card--soon" aria-disabled="true">
            <div className="docs-home-announcement-glow" aria-hidden="true" />
            <div className="docs-home-announcement-copy">
              <div className="docs-home-announcement-eyebrow">
                <span>FUTURE</span>
                {t('comingSoon')}
              </div>
              <h2>{t('sixmTitle')}</h2>
              <p>{t('sixmDesc')}</p>
              <div className="docs-home-announcement-tags">
                <span>SixM</span>
                <span>{t('comingSoon')}</span>
              </div>
            </div>
            <div className="docs-home-announcement-action">
              <div className="docs-home-announcement-mark docs-platform-mark" aria-hidden="true">
                <strong>6M</strong>
                <span>FUTURE</span>
              </div>
              <button type="button" className="docs-primary-button docs-primary-button--disabled" disabled>
                {t('comingSoon')}
              </button>
            </div>
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
