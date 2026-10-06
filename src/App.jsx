import React, { useState } from 'react';
import { NotificationProvider } from './components/NotificationCenter';
import ComponentShowcase from './views/ComponentShowcase';
import About from './views/About';
import ForgeLegacy from './views/ForgeLegacy';
import XtPrisonDocs from './views/XtPrisonDocs';
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
  const [activeUiGroup, setActiveUiGroup] = useState(() => localStorage.getItem('forge-ui-group') || 'atoms');

  React.useEffect(() => {
    localStorage.setItem('forge-current-section', currentSection);
  }, [currentSection]);

  React.useEffect(() => {
    localStorage.setItem('forge-ui-group', activeUiGroup);
  }, [activeUiGroup]);

  const isUiMenuOpen = currentSection === 'uikit' || uiMenuOpen;
  const isLegacyMenuOpen = currentSection === 'legacy' || currentSection === 'xt-prison' || legacyMenuOpen;

  const groups = [
    { id: 'atoms', label: 'Atoms', description: t('fundamentals') },
    { id: 'molecules', label: 'Molecules', description: t('reusable') },
    { id: 'hud', label: 'HUD', description: t('gameplay') },
    { id: 'organisms', label: 'Organisms', description: t('complete') },
  ];

  const openUIKit = (group = 'atoms') => {
    setActiveUiGroup(group);
    setUiMenuOpen(true);
    setCurrentSection('uikit');
  };

  return (
    <NotificationProvider>
      <div className="showcase-layout docs-layout">
        <aside className="showcase-sidebar docs-sidebar">
          <button type="button" className="showcase-logo docs-brand" onClick={() => setCurrentSection('home')}>
            <img src={forgeLogo} className="showcase-logo-icon docs-brand-logo" alt="Forge" />
            <div className="docs-brand-copy">
              <strong>FORGE</strong>
              <span>FRAMEWORK</span>
            </div>
          </button>

          <LanguageSwitcher />

          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">{t('intro')}</h3>
            <ul className="showcase-menu-list">
              <li>
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'home' ? 'active' : ''}`}
                  onClick={() => setCurrentSection('home')}
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
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'legacy' || currentSection === 'xt-prison' ? 'active' : ''}`}
                  onClick={() => {
                    if (currentSection === 'legacy' || currentSection === 'xt-prison') return;
                    setLegacyMenuOpen((value) => !value);
                  }}
                  aria-expanded={isLegacyMenuOpen}
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
                      onClick={() => setCurrentSection('legacy')}
                    >
                      <span>{t('forgeLegacyOverviewNav')}</span>
                      <small>{t('forgeLegacyNavDesc')}</small>
                    </button>
                    <button
                      type="button"
                      className={`docs-submenu-item ${currentSection === 'xt-prison' ? 'active' : ''}`}
                      onClick={() => setCurrentSection('xt-prison')}
                    >
                      <span>xt-prison</span>
                      <small>{t('xtNavDescription')}</small>
                    </button>
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
          {currentSection === 'legacy' && <ForgeLegacy />}
          {currentSection === 'xt-prison' && <XtPrisonDocs />}
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
