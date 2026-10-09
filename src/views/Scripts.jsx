import { useI18n } from '../i18n';
import { npwdNavigation } from '../data/forgeNpwdNavigation';

function ScriptIcon({ type }) {
  if (type === 'phone') return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 18h2"/></svg>;
  if (type === 'elevator') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <rect x="5" y="3" width="14" height="18" rx="2" />
        <path d="M12 7v10M9.5 9.5 12 7l2.5 2.5M9.5 14.5 12 17l2.5-2.5" />
      </svg>
    );
  }
  if (type === 'crafting') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
        <path d="M3 8h11l3 3h4v3h-7c-.7 2.3-2.2 3.7-4.5 4.2V21H6v-2.8C4 17.6 3 16.2 3 14V8Z" />
        <path d="m14 4 5 5M17 3l3 3-2 2-3-3 2-2Z" />
      </svg>
    );
  }
  if (type === 'garage') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M3 20V8l9-5 9 5v12" />
        <path d="M6 20v-8h12v8M7.5 16h9" />
        <path d="M8.5 13.5h7l1.2 2.5H7.3l1.2-2.5Z" />
        <circle cx="9" cy="17.5" r=".8" />
        <circle cx="15" cy="17.5" r=".8" />
      </svg>
    );
  }
  if (type === 'document') {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" aria-hidden="true">
        <path d="M6 3h8l4 4v14H6zM14 3v5h5" />
        <circle cx="10" cy="12" r="2" />
        <path d="M7.8 17c.8-1.8 3.6-2.4 4.7-.7M14.5 12H17M14.5 15H17" />
      </svg>
    );
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" aria-hidden="true">
      <path d="M7 9v6M17 9v6M4 8v8M20 8v8M7 12h10M2 10v4M22 10v4" />
    </svg>
  );
}

export default function Scripts({ onOpenPrElevator, onOpenForgeCrafting, onOpenForgeGym, onOpenForgeGarage, onOpenForgeNpwd, onOpenForgeDocument }) {
  const { t, locale } = useI18n();

  const entries = [
    {
      name: 'forge-npwd', type: 'phone', description: npwdNavigation[locale],
      tags: ['Phone', 'PR Bridge', 'PIN', 'Widgets', 'Forge Store'], onOpen: onOpenForgeNpwd,
    },
    {
      name: 'pr_elevator',
      type: 'elevator',
      description: t('legacyPrElevatorDesc'),
      tags: ['Elevator', 'PR Bridge', 'DUI', 'Access Control'],
      onOpen: onOpenPrElevator,
    },
    {
      name: 'forge-crafting',
      type: 'crafting',
      description: t('legacyForgeCraftingDesc'),
      tags: ['Crafting', 'PR Bridge', 'DUI 3D', 'Weapon Upgrades'],
      onOpen: onOpenForgeCrafting,
    },
    {
      name: 'forge-gym',
      type: 'gym',
      description: t('legacyForgeGymDesc'),
      tags: ['Gym', 'PR Bridge', 'Gizmo', 'Skills'],
      onOpen: onOpenForgeGym,
    },
    {
      name: 'forge-garage',
      type: 'garage',
      description: t('legacyForgeGarageDesc'),
      tags: ['Garage', 'PR Bridge', 'IPL', 'Parking', 'Keys', 'Persistence'],
      onOpen: onOpenForgeGarage,
    },
    {
      name: 'forge-dk',
      type: 'document',
      description: t('legacyForgeDocumentDesc'),
      tags: ['Identity', 'Documents', 'PR Bridge', 'NUI', 'Forgery', 'Verification'],
      onOpen: onOpenForgeDocument,
    },
  ];

  return (
    <div className="scripts-page">
      <section className="scripts-hero">
        <div>
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Project • Scripts</div>
          <h1>&lt;/&gt; <span>{t('scriptsTitle')}</span></h1>
          <p>{t('scriptsLead')}</p>
        </div>
        <div className="scripts-hero-mark" aria-hidden="true">
          <span>&lt;/&gt;</span>
          <small>FORGE SCRIPTS</small>
        </div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading">
          <span>01</span>
          <div>
            <p>{t('scriptsCatalogLabel')}</p>
            <h2>{t('scriptsCatalogTitle')}</h2>
          </div>
        </div>

        <div className="scripts-catalog">
          {entries.map((entry) => (
            <article className="scripts-card" key={entry.name}>
              <div className="scripts-card-icon"><ScriptIcon type={entry.type} /></div>
              <div className="scripts-card-copy">
                <span>Forge Script</span>
                <h3>{entry.name}</h3>
                <p>{entry.description}</p>
                <div className="legacy-project-tags">
                  {entry.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </div>
              <button type="button" className="docs-primary-button" onClick={entry.onOpen}>
                {t('legacyOpenDocs')}
              </button>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
