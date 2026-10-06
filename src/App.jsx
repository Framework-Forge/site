import { useState } from 'react';
import { NotificationProvider } from './components/NotificationCenter';
import ComponentShowcase from './views/ComponentShowcase';
import About from './views/About';
import forgeLegacyLogo from './assets/forge_legacy_logo.png';
import './docs.css';

const UI_GROUPS = [
  { id: 'atoms', label: 'Atoms', description: 'Elementos fundamentais' },
  { id: 'molecules', label: 'Molecules', description: 'Composições reutilizáveis' },
  { id: 'hud', label: 'HUD', description: 'Interfaces para gameplay' },
  { id: 'organisms', label: 'Organisms', description: 'Blocos completos de interface' },
];

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

export default function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [uiMenuOpen, setUiMenuOpen] = useState(true);
  const [activeUiGroup, setActiveUiGroup] = useState('atoms');

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
            <img src={forgeLegacyLogo} className="showcase-logo-icon docs-brand-logo" alt="Forge Legacy" />
            <div className="docs-brand-copy">
              <strong>FORGE</strong>
              <span>LEGACY</span>
            </div>
          </button>

          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">Introdução</h3>
            <ul className="showcase-menu-list">
              <li>
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'home' ? 'active' : ''}`}
                  onClick={() => setCurrentSection('home')}
                >
                  <HomeIcon />
                  <span className="showcase-menu-item-text">Sobre o projeto</span>
                </button>
              </li>
            </ul>
          </div>

          <div className="showcase-menu-group">
            <h3 className="showcase-menu-title">Referência</h3>
            <ul className="showcase-menu-list">
              <li>
                <button
                  type="button"
                  className={`showcase-menu-item docs-menu-button ${currentSection === 'uikit' ? 'active' : ''}`}
                  onClick={() => {
                    setUiMenuOpen((value) => !value);
                    if (currentSection !== 'uikit') openUIKit(activeUiGroup);
                  }}
                  aria-expanded={uiMenuOpen}
                >
                  <GridIcon />
                  <span className="showcase-menu-item-text">Forge UI Kit</span>
                  <ChevronIcon open={uiMenuOpen} />
                </button>

                {uiMenuOpen && (
                  <div className="docs-submenu">
                    {UI_GROUPS.map((group) => (
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
                <strong>Open Source</strong>
                <small>Feito no Brasil para o mundo</small>
              </div>
            </div>
            <p>Forge Legacy • GTA V Legacy</p>
          </div>
        </aside>

        <main className="showcase-content docs-content">
          {currentSection === 'home' && <About onOpenUIKit={() => openUIKit('atoms')} />}
          {currentSection === 'uikit' && (
            <>
              <div className="docs-uikit-context">
                <span>Forge UI Kit</span>
                <strong>{UI_GROUPS.find((group) => group.id === activeUiGroup)?.label}</strong>
                <p>Componentes reutilizáveis do ecossistema Forge, organizados por categoria.</p>
              </div>
              <ComponentShowcase initialGroup={activeUiGroup} />
            </>
          )}
        </main>
      </div>
    </NotificationProvider>
  );
}
