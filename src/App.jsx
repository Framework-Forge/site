import React, { useState } from 'react';
import { NotificationProvider } from './components/NotificationCenter';
import ComponentShowcase from './views/ComponentShowcase';
import About from './views/About';
import ForgeLegacy from './views/ForgeLegacy';
import Scripts from './views/Scripts';
import XtPrisonDocs from './views/XtPrisonDocs';
import PrElevatorDocs from './views/PrElevatorDocs';
import RenewedBankingDocs from './views/RenewedBankingDocs';
import PsDispatchDocs from './views/PsDispatchDocs';
import ForgeCraftingDocs from './views/ForgeCraftingDocs';
import ForgeGymDocs from './views/ForgeGymDocs';
import ForgeGarageDocs from './views/ForgeGarageDocs';
import ForgeDocumentDocs from './views/ForgeDocumentDocs';
import Pr3dSoundDocs from './views/Pr3dSoundDocs';
import PrBridgeDocs from './views/PrBridgeDocs';
import { npwdNavigation } from './data/forgeNpwdNavigation';
import forgeLogo from './assets/forge_legacy_logo.png';
import { AutoTranslate, LanguageProvider, LANGUAGES, useI18n } from './i18n';
import './docs.css';

const ForgeNpwdDocs = React.lazy(() => import('./views/ForgeNpwdDocs'));
const isScriptSection = section => ['scripts', 'pr-elevator', 'forge-crafting', 'forge-gym', 'forge-garage', 'forge-npwd', 'forge-dk', 'pr-3dsound'].includes(section);

function PhoneIcon() {
  return <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="docs-submenu-icon" aria-hidden="true"><rect x="6" y="2" width="12" height="20" rx="3"/><path d="M10 5h4M11 18h2"/></svg>;
}

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

function SwissArmyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="showcase-menu-item-icon" aria-hidden="true">
      <path d="M7.5 4.5h7.7a2.3 2.3 0 0 1 2.3 2.3v10.4a2.3 2.3 0 0 1-2.3 2.3H7.5a3 3 0 0 1-3-3v-9a3 3 0 0 1 3-3Z" />
      <path d="M7.5 4.5v15" />
      <circle cx="6" cy="16.5" r=".9" />
      <path d="m12 8 1.2 1.2L16 6.4" />
      <path d="M10.5 12.5h4.8" />
      <path d="m11.4 15.8 3.8-3.8" />
      <path d="m14.8 15.8-3.4-3.4" />
    </svg>
  );
}

function ForgeLegacyIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="showcase-menu-item-icon" aria-hidden="true">
      <rect x="3" y="4" width="18" height="15" rx="2" />
      <path d="M3 8h18" />
      <path d="m9 11-2 2 2 2" />
      <path d="m15 11 2 2-2 2" />
      <path d="m13 10-2 6" />
    </svg>
  );
}

function CodeIcon({ className = 'showcase-menu-item-icon' }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className={className} aria-hidden="true">
      <path d="m8 8-4 4 4 4" />
      <path d="m16 8 4 4-4 4" />
      <path d="m14 5-4 14" />
    </svg>
  );
}

function ElevatorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="docs-submenu-icon" aria-hidden="true">
      <rect x="5" y="3" width="14" height="18" rx="2" />
      <path d="M12 7V17" />
      <path d="m9.5 9.5 2.5-2.5 2.5 2.5" />
      <path d="m9.5 14.5 2.5 2.5 2.5-2.5" />
    </svg>
  );
}

function AnvilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="docs-submenu-icon" aria-hidden="true">
      <path d="M3 8h11l3 3h4v3h-7c-.7 2.3-2.2 3.7-4.5 4.2V21H6v-2.8C4 17.6 3 16.2 3 14V8Z" />
      <path d="m14 4 5 5" />
      <path d="m17 3 3 3-2 2-3-3 2-2Z" />
    </svg>
  );
}

function DumbbellIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9" className="docs-submenu-icon" aria-hidden="true">
      <path d="M7 9v6M17 9v6M4 8v8M20 8v8M7 12h10M2 10v4M22 10v4" />
    </svg>
  );
}

function GarageIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="docs-submenu-icon" aria-hidden="true">
      <path d="M3 20V8l9-5 9 5v12" />
      <path d="M6 20v-8h12v8" />
      <path d="M7.5 16h9" />
      <path d="M8.5 13.5h7l1.2 2.5H7.3l1.2-2.5Z" />
      <circle cx="9" cy="17.5" r=".8" />
      <circle cx="15" cy="17.5" r=".8" />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="docs-submenu-icon" aria-hidden="true">
      <path d="M6 3h8l4 4v14H6z" />
      <path d="M14 3v5h5" />
      <circle cx="10" cy="12" r="2" />
      <path d="M7.8 17c.8-1.8 3.6-2.4 4.7-.7M14.5 12H17M14.5 15H17" />
    </svg>
  );
}

function SoundWaveIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" className="docs-submenu-icon" aria-hidden="true">
      <path d="M4 10v4M8 7v10M12 4v16M16 7v10M20 10v4" />
    </svg>
  );
}

function RulerPencilIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" className="showcase-menu-item-icon" aria-hidden="true">
      <path d="M4 19 19 4l2 2L6 21H4v-2Z" />
      <path d="m14 5 5 5" />
      <path d="M3 5h8v4H7v4H3V5Z" />
      <path d="M5 7h2M5 10h2" />
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
  const [open, setOpen] = useState(false);
  const rootRef = React.useRef(null);
  const activeLanguage = LANGUAGES.find((language) => language.code === locale) || LANGUAGES[0];

  React.useEffect(() => {
    if (!open) return undefined;

    const closeOnOutside = (event) => {
      if (!rootRef.current?.contains(event.target)) setOpen(false);
    };

    const closeOnEscape = (event) => {
      if (event.key === 'Escape') setOpen(false);
    };

    document.addEventListener('pointerdown', closeOnOutside);
    document.addEventListener('keydown', closeOnEscape);

    return () => {
      document.removeEventListener('pointerdown', closeOnOutside);
      document.removeEventListener('keydown', closeOnEscape);
    };
  }, [open]);

  return (
    <div className={`docs-language-switcher ${open ? 'open' : ''}`} ref={rootRef}>
      <button
        type="button"
        className="docs-language-trigger"
        onClick={() => setOpen((value) => !value)}
        aria-label="Language selector"
        aria-haspopup="menu"
        aria-expanded={open}
        title={activeLanguage.name}
      >
        <span className="docs-language-trigger-flag" aria-hidden="true">{activeLanguage.flag}</span>
        <span className="docs-language-trigger-copy">
          <strong>{activeLanguage.label}</strong>
          <small>{activeLanguage.name}</small>
        </span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="docs-language-dropdown" role="menu" aria-label="Language selector">
          {LANGUAGES.map((language) => (
            <button
              type="button"
              key={language.code}
              role="menuitemradio"
              aria-checked={locale === language.code}
              className={locale === language.code ? 'active' : ''}
              onClick={() => {
                setLocale(language.code);
                setOpen(false);
              }}
            >
              <span className="docs-language-option-flag" aria-hidden="true">{language.flag}</span>
              <span className="docs-language-option-copy">
                <strong>{language.name}</strong>
                <small>{language.label}</small>
              </span>
              {locale === language.code && <span className="docs-language-option-check" aria-hidden="true">✓</span>}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

function ForgeDocs() {
  const { t, locale } = useI18n();
  const [currentSection, setCurrentSection] = useState(() => window.location.hash.startsWith('#forge-npwd/') ? 'forge-npwd' : localStorage.getItem('forge-current-section') || 'home');
  const [uiMenuOpen, setUiMenuOpen] = useState(false);
  const [scriptsMenuOpen, setScriptsMenuOpen] = useState(false);
  const [bridgeMenuOpen, setBridgeMenuOpen] = useState(false);
  const [activeBridgeTopic, setActiveBridgeTopic] = useState(() => localStorage.getItem('forge-pr-bridge-topic') || 'bridge-overview');
  const [sidebarCollapsed, setSidebarCollapsed] = useState(() => localStorage.getItem('forge-sidebar-collapsed') === 'true');
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const [activeUiGroup, setActiveUiGroup] = useState(() => localStorage.getItem('forge-ui-group') || 'atoms');
  const [collapsedFlyout, setCollapsedFlyout] = useState(null);
  const collapsedFlyoutOpenTimer = React.useRef(null);
  const collapsedFlyoutCloseTimer = React.useRef(null);

  React.useEffect(() => {
    const openDeepLink = () => { if (window.location.hash.startsWith('#forge-npwd/')) setCurrentSection('forge-npwd'); };
    window.addEventListener('hashchange', openDeepLink);
    return () => window.removeEventListener('hashchange', openDeepLink);
  }, []);

  React.useEffect(() => {
    localStorage.setItem('forge-current-section', currentSection);
    if (currentSection !== 'forge-npwd' && window.location.hash.startsWith('#forge-npwd/')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
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

  React.useEffect(() => {
    if (!sidebarCollapsed) setCollapsedFlyout(null);

    return () => {
      if (collapsedFlyoutOpenTimer.current) clearTimeout(collapsedFlyoutOpenTimer.current);
      if (collapsedFlyoutCloseTimer.current) clearTimeout(collapsedFlyoutCloseTimer.current);
    };
  }, [sidebarCollapsed]);

  const scheduleCollapsedFlyout = (name, event) => {
    if (!sidebarCollapsed) return;

    const host = event?.currentTarget;
    if (host) {
      const rect = host.getBoundingClientRect();
      document.documentElement.style.setProperty('--forge-flyout-top', `${Math.max(8, rect.top - 8)}px`);
    }

    if (collapsedFlyoutCloseTimer.current) {
      clearTimeout(collapsedFlyoutCloseTimer.current);
      collapsedFlyoutCloseTimer.current = null;
    }

    if (collapsedFlyoutOpenTimer.current) {
      clearTimeout(collapsedFlyoutOpenTimer.current);
      collapsedFlyoutOpenTimer.current = null;
    }

    if (collapsedFlyout && collapsedFlyout !== name) {
      setCollapsedFlyout(null);
    }

    if (collapsedFlyout === name) return;

    collapsedFlyoutOpenTimer.current = setTimeout(() => {
      setCollapsedFlyout(name);
      collapsedFlyoutOpenTimer.current = null;
    }, 500);
  };

  const keepCollapsedFlyout = (name) => {
    if (!sidebarCollapsed) return;

    if (collapsedFlyoutOpenTimer.current) {
      clearTimeout(collapsedFlyoutOpenTimer.current);
      collapsedFlyoutOpenTimer.current = null;
    }

    if (collapsedFlyoutCloseTimer.current) {
      clearTimeout(collapsedFlyoutCloseTimer.current);
      collapsedFlyoutCloseTimer.current = null;
    }

    if (collapsedFlyout !== name) setCollapsedFlyout(name);
  };

  const closeCollapsedFlyout = () => {
    if (!sidebarCollapsed) return;

    if (collapsedFlyoutOpenTimer.current) {
      clearTimeout(collapsedFlyoutOpenTimer.current);
      collapsedFlyoutOpenTimer.current = null;
    }

    if (collapsedFlyoutCloseTimer.current) clearTimeout(collapsedFlyoutCloseTimer.current);

    collapsedFlyoutCloseTimer.current = setTimeout(() => {
      setCollapsedFlyout(null);
      collapsedFlyoutCloseTimer.current = null;
    }, 120);
  };

  const isUiMenuOpen = uiMenuOpen;
  const isScriptsMenuOpen = scriptsMenuOpen;
  const isBridgeMenuOpen = bridgeMenuOpen;

  const groups = [
    { id: 'atoms', label: 'Atoms', description: t('fundamentals') },
    { id: 'molecules', label: 'Molecules', description: t('reusable') },
    { id: 'hud', label: 'HUD', description: t('gameplay') },
    { id: 'organisms', label: 'Organisms', description: t('complete') },
  ];

  const navigateTo = (section) => {
    if (section !== 'forge-npwd' && window.location.hash.startsWith('#forge-npwd/')) {
      window.history.replaceState(null, '', window.location.pathname + window.location.search);
    }
    setCurrentSection(section);
    setMobileSidebarOpen(false);
  };

  const closeMainSubmenus = () => {
    setScriptsMenuOpen(false);
    setBridgeMenuOpen(false);
    setUiMenuOpen(false);
  };

  const goHome = () => {
    closeMainSubmenus();
    navigateTo('home');
  };

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
    ['bridge-source-audit', t('prBridgeTopicSourceAudit')],
  ];

  const openBridgeTopic = (topicId = 'bridge-overview') => {
    setActiveBridgeTopic(topicId);
    setScriptsMenuOpen(false);
    setUiMenuOpen(false);
    setBridgeMenuOpen(true);
    setCurrentSection('pr-bridge');
    setMobileSidebarOpen(false);

    requestAnimationFrame(() => {
      document.querySelector('.showcase-content.docs-content')?.scrollTo({ top: 0, behavior: 'auto' });
    });
  };

  const openUIKit = (group = 'atoms') => {
    setActiveUiGroup(group);
    setScriptsMenuOpen(false);
    setBridgeMenuOpen(false);
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
            <button type="button" className="showcase-logo docs-brand" onClick={goHome} title="Forge Project — Home">
            <img src={forgeLogo} className="showcase-logo-icon docs-brand-logo" alt="Forge" />
            <div className="docs-brand-copy">
              <strong>FORGE</strong>
              <span>PROJECT</span>
            </div>
            </button>

            <button
              type="button"
              className="docs-sidebar-collapse"
              onClick={() => {
                setCollapsedFlyout(null);
                setSidebarCollapsed((value) => !value);
              }}
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
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'legacy' ? 'active' : ''}`}
                  onClick={() => {
                    closeMainSubmenus();
                    navigateTo('legacy');
                  }}
                  title="Forge Legacy"
                >
                  <ForgeLegacyIcon />
                  <span className="showcase-menu-item-text">Forge Legacy</span>
                </button>
              </li>

              <li
                className="docs-flyout-host"
                onMouseEnter={(event) => scheduleCollapsedFlyout('scripts', event)}
                onMouseLeave={closeCollapsedFlyout}
                onFocus={(event) => scheduleCollapsedFlyout('scripts', event)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) closeCollapsedFlyout();
                }}
              >
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${isScriptSection(currentSection) ? 'active' : ''}`}
                  onClick={() => {
                    if (scriptsMenuOpen) {
                      setScriptsMenuOpen(false);
                      return;
                    }

                    setBridgeMenuOpen(false);
                    setUiMenuOpen(false);
                    setScriptsMenuOpen(true);

                    if (!isScriptSection(currentSection)) {
                      navigateTo('scripts');
                    }
                  }}
                  aria-expanded={isScriptsMenuOpen}
                  title={t('scriptsTitle')}
                >
                  <CodeIcon />
                  <span className="showcase-menu-item-text">{t('scriptsTitle')}</span>
                  <ChevronIcon open={isScriptsMenuOpen} />
                </button>

                {(sidebarCollapsed ? collapsedFlyout === 'scripts' : isScriptsMenuOpen) && (
                  <div
                    className="docs-submenu docs-submenu--icons"
                    onMouseEnter={() => keepCollapsedFlyout('scripts')}
                  >
                    <button
                      type="button"
                      className={`docs-submenu-item docs-submenu-item--icon ${currentSection === 'pr-elevator' ? 'active' : ''}`}
                      onClick={() => {
                        setBridgeMenuOpen(false);
                        setUiMenuOpen(false);
                        setScriptsMenuOpen(true);
                        navigateTo('pr-elevator');
                      }}
                    >
                      <ElevatorIcon />
                      <span className="docs-submenu-copy">
                        <span>pr_elevator</span>
                        <small>{t('elevatorNavDescription')}</small>
                      </span>
                    </button>
                    <button type="button" className={`docs-submenu-item docs-submenu-item--icon ${currentSection === 'forge-npwd' ? 'active' : ''}`} onClick={() => {
                        setBridgeMenuOpen(false);
                        setUiMenuOpen(false);
                        setScriptsMenuOpen(true);
                        navigateTo('forge-npwd');
                      }}>
                      <PhoneIcon/><span className="docs-submenu-copy"><span>forge-npwd</span><small>{npwdNavigation[locale]}</small></span>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item docs-submenu-item--icon ${currentSection === 'forge-crafting' ? 'active' : ''}`}
                      onClick={() => {
                        setBridgeMenuOpen(false);
                        setUiMenuOpen(false);
                        setScriptsMenuOpen(true);
                        navigateTo('forge-crafting');
                      }}
                    >
                      <AnvilIcon />
                      <span className="docs-submenu-copy">
                        <span>forge-crafting</span>
                        <small>{t('craftingNavDescription')}</small>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item docs-submenu-item--icon ${currentSection === 'forge-gym' ? 'active' : ''}`}
                      onClick={() => {
                        setBridgeMenuOpen(false);
                        setUiMenuOpen(false);
                        setScriptsMenuOpen(true);
                        navigateTo('forge-gym');
                      }}
                    >
                      <DumbbellIcon />
                      <span className="docs-submenu-copy">
                        <span>forge-gym</span>
                        <small>{t('gymNavDescription')}</small>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item docs-submenu-item--icon ${currentSection === 'forge-garage' ? 'active' : ''}`}
                      onClick={() => {
                        setBridgeMenuOpen(false);
                        setUiMenuOpen(false);
                        setScriptsMenuOpen(true);
                        navigateTo('forge-garage');
                      }}
                    >
                      <GarageIcon />
                      <span className="docs-submenu-copy">
                        <span>forge-garage</span>
                        <small>{t('garageNavDescription')}</small>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item docs-submenu-item--icon ${currentSection === 'forge-dk' ? 'active' : ''}`}
                      onClick={() => {
                        setBridgeMenuOpen(false);
                        setUiMenuOpen(false);
                        setScriptsMenuOpen(true);
                        navigateTo('forge-dk');
                      }}
                    >
                      <DocumentIcon />
                      <span className="docs-submenu-copy">
                        <span>forge-dk</span>
                        <small>{t('documentNavDescription')}</small>
                      </span>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item docs-submenu-item--icon ${currentSection === 'pr-3dsound' ? 'active' : ''}`}
                      onClick={() => {
                        setBridgeMenuOpen(false);
                        setUiMenuOpen(false);
                        setScriptsMenuOpen(true);
                        navigateTo('pr-3dsound');
                      }}
                    >
                      <SoundWaveIcon />
                      <span className="docs-submenu-copy">
                        <span>pr_3dsound</span>
                        <small>{t('soundNavDescription')}</small>
                      </span>
                    </button>
                  </div>
                )}
              </li>
            </ul>
          </div>

          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">{t('tools')}</h3>
            <ul className="showcase-menu-list">
              <li
                className="docs-flyout-host"
                onMouseEnter={(event) => scheduleCollapsedFlyout('bridge', event)}
                onMouseLeave={closeCollapsedFlyout}
                onFocus={(event) => scheduleCollapsedFlyout('bridge', event)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) closeCollapsedFlyout();
                }}
              >
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'pr-bridge' ? 'active' : ''}`}
                  onClick={() => {
                    if (bridgeMenuOpen) {
                      setBridgeMenuOpen(false);
                      return;
                    }

                    setScriptsMenuOpen(false);
                    setUiMenuOpen(false);
                    setBridgeMenuOpen(true);

                    if (currentSection !== 'pr-bridge') {
                      openBridgeTopic(activeBridgeTopic);
                    }
                  }}
                  aria-expanded={isBridgeMenuOpen}
                  title="PR Bridge"
                >
                  <SwissArmyIcon />
                  <span className="showcase-menu-item-text">PR Bridge</span>
                  <ChevronIcon open={isBridgeMenuOpen} />
                </button>

                {(sidebarCollapsed ? collapsedFlyout === 'bridge' : isBridgeMenuOpen) && (
                  <div
                    className="docs-submenu docs-submenu-topics"
                    onMouseEnter={() => keepCollapsedFlyout('bridge')}
                  >
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
              <li
                className="docs-flyout-host"
                onMouseEnter={(event) => scheduleCollapsedFlyout('uikit', event)}
                onMouseLeave={closeCollapsedFlyout}
                onFocus={(event) => scheduleCollapsedFlyout('uikit', event)}
                onBlur={(event) => {
                  if (!event.currentTarget.contains(event.relatedTarget)) closeCollapsedFlyout();
                }}
              >
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'uikit' ? 'active' : ''}`}
                  onClick={() => {
                    if (uiMenuOpen) {
                      setUiMenuOpen(false);
                      return;
                    }

                    setScriptsMenuOpen(false);
                    setBridgeMenuOpen(false);
                    setUiMenuOpen(true);

                    if (currentSection !== 'uikit') {
                      openUIKit(activeUiGroup);
                    }
                  }}
                  aria-expanded={isUiMenuOpen}
                  title="Forge UI Kit"
                >
                  <RulerPencilIcon />
                  <span className="showcase-menu-item-text">Forge UI Kit</span>
                  <ChevronIcon open={isUiMenuOpen} />
                </button>

                {(sidebarCollapsed ? collapsedFlyout === 'uikit' : isUiMenuOpen) && (
                  <div
                    className="docs-submenu docs-submenu--no-line"
                    onMouseEnter={() => keepCollapsedFlyout('uikit')}
                  >
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
          {currentSection === 'home' && (
            <About
              onOpenUIKit={() => openUIKit('atoms')}
              onOpenPrBridge={() => openBridgeTopic('bridge-overview')}
              onOpenLegacy={() => {
                closeMainSubmenus();
                navigateTo('legacy');
              }}
            />
          )}
          {currentSection === 'legacy' && <ForgeLegacy onOpenPrElevator={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('pr-elevator'); }} onOpenForgeCrafting={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('forge-crafting'); }} onOpenForgeGym={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('forge-gym'); }} />}
          {currentSection === 'scripts' && <Scripts onOpenPrElevator={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('pr-elevator'); }} onOpenForgeCrafting={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('forge-crafting'); }} onOpenForgeGym={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('forge-gym'); }} onOpenForgeGarage={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('forge-garage'); }} onOpenForgeNpwd={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('forge-npwd'); }} onOpenForgeDocument={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('forge-dk'); }} onOpenPr3dSound={() => { setBridgeMenuOpen(false); setUiMenuOpen(false); setScriptsMenuOpen(true); navigateTo('pr-3dsound'); }} />}
          {currentSection === 'forge-npwd' && <React.Suspense fallback={<p role="status" style={{ padding: 30 }}>Forge NPWD…</p>}><ForgeNpwdDocs/></React.Suspense>}
          {currentSection === 'xt-prison' && <XtPrisonDocs />}
          {currentSection === 'pr-elevator' && <PrElevatorDocs />}
          {currentSection === 'renewed-banking' && <RenewedBankingDocs />}
          {currentSection === 'ps-dispatch' && <PsDispatchDocs />}
          {currentSection === 'forge-crafting' && <ForgeCraftingDocs />}
          {currentSection === 'forge-gym' && <ForgeGymDocs />}
          {currentSection === 'forge-garage' && <ForgeGarageDocs />}
          {currentSection === 'forge-dk' && <ForgeDocumentDocs />}
          {currentSection === 'pr-3dsound' && <Pr3dSoundDocs />}
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
