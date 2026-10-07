import React, { useState } from 'react';
import { NotificationProvider } from './components/NotificationCenter';
import ComponentShowcase from './views/ComponentShowcase';
import About from './views/About';
import ForgeLegacy from './views/ForgeLegacy';
import XtPrisonDocs from './views/XtPrisonDocs';
import PrElevatorDocs from './views/PrElevatorDocs';
import PrBridgeDocs from './views/PrBridgeDocs';
import forgeLogo from './assets/forge_legacy_logo.png';
import { AutoTranslate, LanguageProvider, LANGUAGES, useI18n } from './i18n';
import './docs.css';

function HomeIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="showcase-menu-item-icon">
      <path d="M3 11.5 12 4l9 7.5" />
      <path d="M5.5 10.5V20h13v-9.5" />
      <path d="M9.5 20v-6h5v6" />
    </svg>
  );
}

function GridIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="showcase-menu-item-icon">
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

function SidebarIcon({ close = false }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      {close ? (
        <>
          <path d="M6 6l12 12" />
          <path d="M18 6 6 18" />
        </>
      ) : (
        <>
          <path d="M4 6h16" />
          <path d="M4 12h16" />
          <path d="M4 18h16" />
        </>
      )}
    </svg>
  );
}

function CollapseIcon({ collapsed }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
      <path d={collapsed ? 'm9 6 6 6-6 6' : 'm15 6-6 6 6 6'} />
    </svg>
  );
}

function ChevronIcon({ open }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={`docs-chevron ${open ? 'open' : ''}`}>
      <path d="m9 18 6-6-6-6" />
    </svg>
  );
}

function LanguageSwitcher() {
  const { locale, setLocale } = useI18n();
  return (
    <div className="docs-language-switcher" aria-label="Language selector">
      {LANGUAGES.map((language) => (
        <button
          type="button"
          key={language.code}
          className={locale === language.code ? 'active' : ''}
          onClick={() => setLocale(language.code)}
          title={language.name}
          aria-label={language.name}
        >
          {language.label}
        </button>
      ))}
    </div>
  );
}

function ForgeDocs() {
  const { t } = useI18n();
  const [currentSection, setCurrentSection] = useState(() => localStorage.getItem('forge-current-section') || 'home');
  const [uiMenuOpen, setUiMenuOpen] = useState(false);
  const [legacyMenuOpen, setLegacyMenuOpen] = useState(false);
  const [bridgeMenuOpen, setBridgeMenuOpen] = useState(false);
  const [activeBridgeTopic, setActiveBridgeTopic] = useState(() => localStorage.getItem('forge-pr-bridge-topic') || 'bridge-overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => localStorage.getItem('forge-sidebar-collapsed') === 'true');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeUiGroup, setActiveUiGroup] = useState(() => localStorage.getItem('forge-ui-group') || 'atoms');

  React.useEffect(() => {
    localStorage.setItem('forge-current-section', currentSection);
  }, [currentSection]);

  React.useEffect(() => {
    localStorage.setItem('forge-ui-group', activeUiGroup);
  }, [activeUiGroup]);

  React.useEffect(() => {
    localStorage.setItem('forge-sidebar-collapsed', String(sidebarCollapsed));
  }, [sidebarCollapsed]);

  React.useEffect(() => {
    localStorage.setItem('forge-pr-bridge-topic', activeBridgeTopic);
  }, [activeBridgeTopic]);

  React.useEffect(() => {
    setMobileSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [currentSection]);

  const isUiMenuOpen = currentSection === 'uikit' || uiMenuOpen;
  const isLegacyMenuOpen = currentSection === 'legacy' || currentSection === 'xt-prison' || currentSection === 'pr-elevator' || legacyMenuOpen;
  const isBridgeMenuOpen = currentSection === 'pr-bridge' || bridgeMenuOpen;

  const groups = [
    { id: 'atoms', label: 'Atoms', description: t('fundamentals') },
    { id: 'molecules', label: 'Molecules', description: t('reusable') },
    { id: 'hud', label: 'HUD', description: t('gameplay') },
    { id: 'organisms', label: 'Organisms', description: t('complete') },
  ];

  const navigateTo = (section) => {
    setCurrentSection(section);
    setMobileSidebarOpen(false);
  };

  const goHome = () => navigateTo('home');

  const bridgeTopics = [
    ['bridge-overview', t('prBridgeTopicOverview')],
    ['bridge-install', t('prBridgeTopicInstall')],
    ['bridge-architecture', t('prBridgeTopicArchitecture')],
    ['bridge-adapters', t('prBridgeTopicAdapters')],
    ['bridge-framework', t('prBridgeTopicFramework')],
    ['bridge-inventory', t('prBridgeTopicInventory')],
    ['bridge-database', t('prBridgeTopicDatabase')],
    ['bridge-ui', t('prBridgeTopicUi')],
    ['bridge-target', t('prBridgeTopicTarget')],
    ['bridge-cache', t('prBridgeTopicCache')],
    ['bridge-callbacks', t('prBridgeTopicCallbacks')],
    ['bridge-security', t('prBridgeTopicSecurity')],
    ['bridge-dev', t('prBridgeTopicDev')],
    ['bridge-fivem', t('prBridgeTopicFiveM')],
    ['bridge-dui', t('prBridgeTopicDui')],
    ['bridge-expand', t('prBridgeTopicExpand')],
    ['bridge-api', t('prBridgeTopicApi')],
  ];

  const openBridgeTopic = (topicId = 'bridge-overview') => {
    setActiveBridgeTopic(topicId);
    setBridgeMenuOpen(true);
    setCurrentSection('pr-bridge');
    setMobileSidebarOpen(false);

    requestAnimationFrame(() => {
      document.querySelector('.showcase-content.docs-content')?.scrollTo({ top: 0, behavior: 'auto' });
    });
  };

  const openUIKit = (group = 'atoms') => {
    setActiveUiGroup(group);
    setUiMenuOpen(true);
    setCurrentSection('uikit');
    setMobileSidebarOpen(false);
  };

  return (
    <NotificationProvider>
      <div className={`showcase-layout docs-layout ${sidebarCollapsed ? 'sidebar-collapsed' : ''} ${mobileSidebarOpen ? 'mobile-sidebar-open' : ''}`}>
        <button
          type="button"
          className="docs-mobile-menu-button"
          onClick={() => setMobileSidebarOpen(true)}
          aria-label="Open navigation"
          aria-expanded={mobileSidebarOpen}
        >
          <SidebarIcon />
        </button>

        <button
          type="button"
          className={`docs-mobile-overlay ${mobileSidebarOpen ? 'visible' : ''}`}
          onClick={() => setMobileSidebarOpen(false)}
          aria-label="Close navigation"
          tabIndex={mobileSidebarOpen ? 0 : -1}
        />

        <aside className="showcase-sidebar docs-sidebar">
          <div className="docs-sidebar-top">
            <button type="button" className="showcase-logo docs-brand" onClick={goHome} title="Forge Framework — Home">
            <img src={forgeLogo} className="showcase-logo-icon docs-brand-logo" alt="Forge" />
            <div className="docs-brand-copy">
              <strong>FORGE</strong>
              <span>FRAMEWORK</span>
            </div>
            </button>

            <button
              type="button"
              className="docs-sidebar-collapse"
              onClick={() => setSidebarCollapsed((value) => !value)}
              aria-label={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
              title={sidebarCollapsed ? 'Expand sidebar' : 'Collapse sidebar'}
            >
              <CollapseIcon collapsed={sidebarCollapsed} />
            </button>

            <button
              type="button"
              className="docs-sidebar-mobile-close"
              onClick={() => setMobileSidebarOpen(false)}
              aria-label="Close navigation"
            >
              <SidebarIcon close />
            </button>
          </div>

          <LanguageSwitcher />

          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">{t('intro')}</h3>
            <ul className="showcase-menu-list">
              <li>
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'home' ? 'active' : ''}`}
                  onClick={goHome}
                  title={t('about')}
                >
                  <HomeIcon />
                  <span className="showcase-menu-item-text">{t('about')}</span>
                </button>
              </li>
            </ul>
          </div>


          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">{t('projects')}</h3>
            <ul className="showcase-menu-list">
              <li>
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'legacy' || currentSection === 'xt-prison' || currentSection === 'pr-elevator' ? 'active' : ''}`}
                  onClick={() => {
                    if (currentSection === 'legacy' || currentSection === 'xt-prison' || currentSection === 'pr-elevator') return;
                    setLegacyMenuOpen((value) => !value);
                  }}
                  aria-expanded={isLegacyMenuOpen}
                  title="Forge Legacy"
                >
                  <GridIcon />
                  <span className="showcase-menu-item-text">Forge Legacy</span>
                  <ChevronIcon open={isLegacyMenuOpen} />
                </button>

                {isLegacyMenuOpen && (
                  <div className="docs-submenu">
                    <button
                      type="button"
                      className={`docs-submenu-item ${currentSection === 'legacy' ? 'active' : ''}`}
                      onClick={() => navigateTo('legacy')}
                    >
                      <span>{t('forgeLegacyOverviewNav')}</span>
                      <small>{t('forgeLegacyNavDesc')}</small>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item ${currentSection === 'xt-prison' ? 'active' : ''}`}
                      onClick={() => navigateTo('xt-prison')}
                    >
                      <span>xt-prison</span>
                      <small>{t('xtNavDescription')}</small>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item ${currentSection === 'pr-elevator' ? 'active' : ''}`}
                      onClick={() => navigateTo('pr-elevator')}
                    >
                      <span>pr_elevator</span>
                      <small>{t('elevatorNavDescription')}</small>
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">{t('tools')}</h3>
            <ul className="showcase-menu-list">
              <li>
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'pr-bridge' ? 'active' : ''}`}
                  onClick={() => {
                    if (currentSection === 'pr-bridge') {
                      setBridgeMenuOpen((value) => !value);
                      return;
                    }
                    openBridgeTopic(activeBridgeTopic);
                  }}
                  aria-expanded={isBridgeMenuOpen}
                  title="PR Bridge"
                >
                  <GridIcon />
                  <span className="showcase-menu-item-text">PR Bridge</span>
                  <ChevronIcon open={isBridgeMenuOpen} />
                </button>

                {isBridgeMenuOpen && (
                  <div className="docs-submenu docs-submenu-topics">
                    {bridgeTopics.map(([id, label]) => (
                      <button
                        type="button"
                        key={id}
                        className={`docs-submenu-item ${currentSection === 'pr-bridge' && activeBridgeTopic === id ? 'active' : ''}`}
                        onClick={() => openBridgeTopic(id)}
                      >
                        <span>{label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">{t('reference')}</h3>
            <ul className="showcase-menu-list">
              <li>
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'uikit' ? 'active' : ''}`}
                  onClick={() => {
                    if (currentSection === 'uikit') return;
                    setUiMenuOpen((value) => !value);
                  }}
                  aria-expanded={isUiMenuOpen}
                  title="Forge UI Kit"
                >
                  <GridIcon />
                  <span className="showcase-menu-item-text">Forge UI Kit</span>
                  <ChevronIcon open={isUiMenuOpen} />
                </button>

                {isUiMenuOpen && (
                  <div className="docs-submenu">
                    {groups.map((group) => (
                      <button
                        type="button"
                        key={group.id}
                        className={`docs-submenu-item ${currentSection === 'uikit' && activeUiGroup === group.id ? 'active' : ''}`}
                        onClick={() => openUIKit(group.id)}
                      >
                        <span>{group.label}</span>
                        <small>{group.description}</small>
                      </button>
                    ))}
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="showcase-footer docs-footer">
            <div className="docs-project-status">
              <span className="docs-status-dot" />
              <div>
                <strong>{t('openSource')}</strong>
                <small>{t('brazilWorld')}</small>
              </div>
            </div>
            <p>{t('footer')}</p>
          </div>
        </aside>

        <main className="showcase-content docs-content">
          {currentSection === 'home' && <About onOpenUIKit={() => openUIKit('atoms')} />}
          {currentSection === 'legacy' && <ForgeLegacy onOpenXtPrison={() => navigateTo('xt-prison')} onOpenPrElevator={() => navigateTo('pr-elevator')} />}
          {currentSection === 'xt-prison' && <XtPrisonDocs />}
          {currentSection === 'pr-elevator' && <PrElevatorDocs />}
          {currentSection === 'pr-bridge' && <PrBridgeDocs topic={activeBridgeTopic} onNavigateTopic={openBridgeTopic} />}
          {currentSection === 'uikit' && (
            <>
              <div className="docs-uikit-context">
                <span>Forge UI Kit</span>
                <strong>{groups.find((group) => group.id === activeUiGroup)?.label}</strong>
                <p>{t('reusableKit')}</p>
              </div>
              <AutoTranslate>
                <ComponentShowcase initialGroup={activeUiGroup} />
              </AutoTranslate>
            </>
          )}
        </main>
      </div>
    </NotificationProvider>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <ForgeDocs />
    </LanguageProvider>
  );
}
