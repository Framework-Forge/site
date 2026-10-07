import { useI18n } from '../i18n';

const Code = ({ children }) => <pre className="xt-code"><code>{children}</code></pre>;
const Info = ({ label, children }) => <div className="xt-info"><span>{label}</span><strong>{children}</strong></div>;

export default function XtPrisonDocs() {
  const { t } = useI18n();

  const commands = [
    ['/jailtime', t('xtCmdJailtime')],
    ['/prisoners', t('xtCmdPrisoners')],
    ['/jail', t('xtCmdJail')],
    ['/unjail <id>', t('xtCmdUnjail')],
    ['/prisonconfig', t('xtCmdConfig')],
  ];

  const exportsList = [
    ['JailPlayer(source, sentence)', t('xtExportJailPlayer')],
    ['ReleasePlayer(source)', t('xtExportReleasePlayer')],
    ['GetPrisonStatus(source)', t('xtExportStatus')],
    ['SetJailTime(source, minutes)', t('xtExportSetTime')],
    ['GetPrisonCache(source?)', t('xtExportCache')],
    ['isLifer(source)', t('xtExportLifer')],
    ['GetSettings()', t('xtExportSettings')],
  ];

  return (
    <div className="xt-docs">
      <header className="xt-hero">
        <div>
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Legacy • Resource</div>
          <h1><span>xt-</span>prison</h1>
          <p>{t('xtLead')}</p>
          <div className="xt-hero-actions">
            <a className="docs-primary-button" href="https://github.com/Framework-Forge/xt-prison" target="_blank" rel="noreferrer">{t('xtGithub')}</a>
            <a className="docs-secondary-button" href="#xt-install">{t('xtInstallButton')}</a>
          </div>
        </div>
        <div className="xt-summary-card">
          <div className="xt-summary-top"><span>XT</span><strong>PRISON</strong></div>
          <Info label={t('xtVersion')}>1.4.8</Info>
          <Info label={t('xtDependency')}>pr_bridge</Info>
          <Info label={t('xtPlatforms')}>PR Bridge</Info>
          <Info label={t('xtStorage')}>MariaDB + PR Bridge</Info>
        </div>
      </header>

      <nav className="xt-toc">
        <a href="#xt-overview">{t('xtNavOverview')}</a><a href="#xt-install">{t('xtNavInstall')}</a>
        <a href="#xt-config">{t('xtNavConfig')}</a><a href="#xt-jail">{t('xtNavJail')}</a>
        <a href="#xt-break">{t('xtNavBreak')}</a><a href="#xt-editor">{t('xtNavEditor')}</a>
        <a href="#xt-api">{t('xtNavApi')}</a><a href="#xt-db">{t('xtNavDb')}</a>
      </nav>

      <section className="docs-section" id="xt-overview">
        <div className="docs-section-heading"><span>01</span><div><p>{t('xtOverviewLabel')}</p><h2>{t('xtOverviewTitle')}</h2></div></div>
        <div className="docs-prose"><p>{t('xtOverviewP1')}</p><p>{t('xtOverviewP2')}</p></div>
        <div className="xt-feature-grid">
          {[
            ['Sentence', t('xtFeatureSentence')], ['Inventory', t('xtFeatureInventory')],
            ['Roster', t('xtFeatureRoster')], ['Prison Break', t('xtFeatureBreak')],
            ['Editor', t('xtFeatureEditor')], ['Bridge', t('xtFeatureBridge')],
          ].map(([name, desc]) => <article key={name}><span>{name}</span><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="xt-install">
        <div className="docs-section-heading"><span>02</span><div><p>{t('xtInstallLabel')}</p><h2>{t('xtInstallTitle')}</h2></div></div>
        <div className="xt-two-col">
          <div>
            <h3>{t('xtRequirementsTitle')}</h3><p>{t('xtRequirementsP')}</p>
            <Code>{"ensure pr_bridge\nensure xt-prison"}</Code>
            <div className="xt-note"><strong>{t('xtImportant')}</strong><p>{t('xtRestartNote')}</p></div>
          </div>
          <div>
            <h3>{t('xtFrameworksTitle')}</h3>
            <div className="xt-pill-row"><span>PR Bridge</span></div>
            <p>{t('xtFrameworksP')}</p>
            <h3>{t('xtDatabaseAutoTitle')}</h3><p>{t('xtDatabaseAutoP')}</p>
          </div>
        </div>
      </section>

      <section className="docs-section" id="xt-config">
        <div className="docs-section-heading"><span>03</span><div><p>{t('xtConfigLabel')}</p><h2>{t('xtConfigTitle')}</h2></div></div>
        <div className="xt-config-grid">
          <article><strong>configs/client.lua</strong><p>{t('xtConfigClient')}</p></article>
          <article><strong>configs/server.lua</strong><p>{t('xtConfigServer')}</p></article>
          <article><strong>configs/prisonbreak.lua</strong><p>{t('xtConfigBreak')}</p></article>
          <article><strong>data/settings.json</strong><p>{t('xtConfigJson')}</p></article>
        </div>
        <div className="xt-note"><strong>{t('xtDynamicConfigTitle')}</strong><p>{t('xtDynamicConfigP')}</p></div>
        <Code>{"# Default: database\nset xt-prison:settingsStorage database\n\n# Optional: JSON file\nset xt-prison:settingsStorage file"}</Code>
      </section>

      <section className="docs-section" id="xt-jail">
        <div className="docs-section-heading"><span>04</span><div><p>{t('xtJailLabel')}</p><h2>{t('xtJailTitle')}</h2></div></div>
        <div className="xt-flow">
          <div><span>1</span><strong>{t('xtFlowSentence')}</strong><p>{t('xtFlowSentenceD')}</p></div>
          <div><span>2</span><strong>{t('xtFlowEnter')}</strong><p>{t('xtFlowEnterD')}</p></div>
          <div><span>3</span><strong>{t('xtFlowServe')}</strong><p>{t('xtFlowServeD')}</p></div>
          <div><span>4</span><strong>{t('xtFlowRelease')}</strong><p>{t('xtFlowReleaseD')}</p></div>
        </div>
        <div className="xt-two-col">
          <div><h3>{t('xtSentenceClocks')}</h3><p>{t('xtSentenceClocksP')}</p></div>
          <div><h3>{t('xtPrisonLife')}</h3><p>{t('xtPrisonLifeP')}</p></div>
        </div>
      </section>

      <section className="docs-section" id="xt-break">
        <div className="docs-section-heading"><span>05</span><div><p>{t('xtBreakLabel')}</p><h2>{t('xtBreakTitle')}</h2></div></div>
        <div className="docs-prose"><p>{t('xtBreakP1')}</p><p>{t('xtBreakP2')}</p></div>
        <div className="xt-feature-grid">
          <article><span>Targets</span><p>{t('xtBreakTargets')}</p></article>
          <article><span>Validation</span><p>{t('xtBreakValidation')}</p></article>
          <article><span>Alarms</span><p>{t('xtBreakAlarms')}</p></article>
          <article><span>Doors</span><p>{t('xtBreakDoors')}</p></article>
          <article><span>Cooldown</span><p>{t('xtBreakCooldown')}</p></article>
          <article><span>Minigames</span><p>{t('xtBreakMinigames')}</p></article>
        </div>
      </section>

      <section className="docs-section" id="xt-editor">
        <div className="docs-section-heading"><span>06</span><div><p>{t('xtEditorLabel')}</p><h2>{t('xtEditorTitle')}</h2></div></div>
        <div className="docs-prose"><p>{t('xtEditorP1')}</p><p>{t('xtEditorP2')}</p></div>
        <div className="xt-editor-grid">
          {[t('xtEditorGeneral'),t('xtEditorSentence'),t('xtEditorLocations'),t('xtEditorNpcs'),t('xtEditorBoundary'),t('xtEditorEscapes'),t('xtEditorDoors'),t('xtEditorTerminals'),t('xtEditorAlarms')].map((item,i)=><span key={item}><b>{String(i+1).padStart(2,'0')}</b>{item}</span>)}
        </div>
        <div className="xt-note warning"><strong>{t('xtValidationStatus')}</strong><p>{t('xtValidationStatusP')}</p></div>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading"><span>07</span><div><p>{t('xtCommandsLabel')}</p><h2>{t('xtCommandsTitle')}</h2></div></div>
        <div className="xt-api-table">{commands.map(([name,desc])=><div key={name}><code>{name}</code><p>{desc}</p></div>)}</div>
        <div className="xt-note"><strong>{t('xtPermissionsTitle')}</strong><p>{t('xtPermissionsP')}</p></div>
      </section>

      <section className="docs-section" id="xt-api">
        <div className="docs-section-heading"><span>08</span><div><p>API</p><h2>{t('xtApiTitle')}</h2></div></div>
        <div className="xt-api-table">{exportsList.map(([name,desc])=><div key={name}><code>{name}</code><p>{desc}</p></div>)}</div>
        <h3 className="xt-subheading">{t('xtExamples')}</h3>
        <Code>{"-- Server: jail a player\nlocal ok, reason = exports['xt-prison']:JailPlayer(source, {\n    amount = 30,\n    unit = 'minutes',\n    clock = 'real'\n})\n\n-- Server: release\nlocal ok, reason = exports['xt-prison']:ReleasePlayer(source)\n\n-- Server: read status\nlocal status = exports['xt-prison']:GetPrisonStatus(source)\n\n-- Server/client: cache\nlocal prison = exports['xt-prison']:GetPrisonCache(source)"}</Code>
        <div className="xt-note warning"><strong>{t('xtCompatTitle')}</strong><p>{t('xtCompatP')}</p></div>
      </section>

      <section className="docs-section" id="xt-db">
        <div className="docs-section-heading"><span>09</span><div><p>{t('xtDbLabel')}</p><h2>{t('xtDbTitle')}</h2></div></div>
        <div className="xt-db-grid">
          <article><code>xt_prison</code><p>{t('xtDbPrison')}</p></article>
          <article><code>xt_prison_items</code><p>{t('xtDbItems')}</p></article>
          <article><code>xt_prison_settings</code><p>{t('xtDbSettings')}</p></article>
        </div>
        <Code>{"SELECT identifier, jailtime, sentence FROM xt_prison;\nSELECT owner, data FROM xt_prison_items;\nSELECT id, data, updated_at FROM xt_prison_settings;"}</Code>
        <p className="xt-muted">{t('xtMigrationP')}</p>
      </section>

      <section className="docs-section">
        <div className="docs-section-heading"><span>10</span><div><p>{t('xtIntegrationsLabel')}</p><h2>{t('xtIntegrationsTitle')}</h2></div></div>
        <div className="xt-two-col">
          <div><h3>PR Bridge</h3><p>{t('xtPrBridgeP')}</p></div>
          <div><h3>Doorlock</h3><p>{t('xtDoorlockP')}</p></div>
          <div><h3>xt-prisonjobs</h3><p>{t('xtPrisonJobsP')}</p></div>
          <div><h3>{t('xtMedicalTitle')}</h3><p>{t('xtMedicalP')}</p></div>
        </div>
      </section>

      <section className="xt-final-note">
        <span>{t('xtSourceLabel')}</span><h2>{t('xtSourceTitle')}</h2><p>{t('xtSourceP')}</p>
      </section>
    </div>
  );
}
