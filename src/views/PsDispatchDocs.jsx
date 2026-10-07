import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const FORGE_REPO = 'https://github.com/Framework-Forge/ps-dispatch';
const UPSTREAM_REPO = 'https://github.com/Project-Sloth/ps-dispatch';

const SectionTitle = ({ number, label, title }) => (
  <div className="docs-section-heading">
    <span>{number}</span>
    <div><p>{label}</p><h2>{title}</h2></div>
  </div>
);

const Card = ({ eyebrow, title, children }) => (
  <article className="dispatch-card">
    <span>{eyebrow}</span>
    <h3>{title}</h3>
    <p>{children}</p>
  </article>
);

const Info = ({ label, children }) => (
  <div className="xt-info"><span>{label}</span><strong>{children}</strong></div>
);

export default function PsDispatchDocs() {
  const { locale } = useI18n();
  const isPt = locale === 'pt-BR';

  return (
    <div className="dispatch-docs">
      <header className="dispatch-hero">
        <div className="dispatch-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Legacy • Dispatch Resource</div>
          <h1>ps-<span>dispatch</span></h1>
          <p className="dispatch-lead">
            {isPt
              ? 'Fork aprimorado para o ecossistema Forge de um sistema de dispatch para FiveM, com quadro operacional em Svelte, alertas críticos, agrupamento inteligente de chamadas, hotspots, grandes incidentes, histórico privado de consultas de placa e configurações pessoais dentro do jogo.'
              : 'A Forge-enhanced fork of the FiveM dispatch system with a Svelte operations board, critical alerts, intelligent call merging, hotspots, major incidents, a private plate-check log and per-player in-game settings.'}
          </p>
          <div className="dispatch-hero-actions">
            <a className="docs-primary-button" href={FORGE_REPO} target="_blank" rel="noreferrer">Forge repository</a>
            <a className="docs-secondary-button" href={UPSTREAM_REPO} target="_blank" rel="noreferrer">{isPt ? 'Projeto original' : 'Upstream project'}</a>
            <a className="docs-secondary-button" href="#dispatch-install">{isPt ? 'Instalação' : 'Installation'}</a>
          </div>
          <div className="legacy-meta">
            <span>v3.0.0</span><span>FiveM</span><span>QB / QBX</span><span>Svelte</span><span>Open Source</span>
          </div>
        </div>

        <div className="xt-summary-card dispatch-summary-card">
          <div className="xt-summary-top"><span>PD</span><strong>DISPATCH</strong></div>
          <Info label={isPt ? 'Versão' : 'Version'}>3.0.0</Info>
          <Info label={isPt ? 'Frameworks' : 'Frameworks'}>QBCore / QBX</Info>
          <Info label={isPt ? 'Dependências' : 'Dependencies'}>ox_lib • PolyZone</Info>
          <Info label={isPt ? 'Interface' : 'Interface'}>Svelte NUI</Info>
          <Info label={isPt ? 'Persistência' : 'Storage'}>{isPt ? 'KVP por jogador' : 'Per-player KVP'}</Info>
        </div>
      </header>

      <nav className="xt-toc dispatch-toc">
        <a href="#dispatch-overview">{isPt ? 'Visão geral' : 'Overview'}</a>
        <a href="#dispatch-install">{isPt ? 'Instalação' : 'Install'}</a>
        <a href="#dispatch-architecture">{isPt ? 'Arquitetura' : 'Architecture'}</a>
        <a href="#dispatch-intelligence">{isPt ? 'Inteligência' : 'Alert intelligence'}</a>
        <a href="#dispatch-incidents">{isPt ? 'Incidentes' : 'Major incidents'}</a>
        <a href="#dispatch-plates">{isPt ? 'Placas' : 'Plate log'}</a>
        <a href="#dispatch-settings">{isPt ? 'Configurações in-game' : 'In-game settings'}</a>
        <a href="#dispatch-api">API / exports</a>
        <a href="#dispatch-config">{isPt ? 'Configuração' : 'Configuration'}</a>
      </nav>

      <section className="docs-section" id="dispatch-overview">
        <SectionTitle number="01" label={isPt ? 'Visão geral' : 'Overview'} title={isPt ? 'Um quadro operacional, não apenas uma fila de notificações.' : 'An operational board, not just a notification feed.'} />
        <div className="docs-prose">
          <p>{isPt ? 'O ps-dispatch recebe ocorrências de crimes e serviços, filtra quem deve recebê-las, cria blips e mantém uma lista compartilhada de chamadas abertas. Cada chamada pode reunir localização, veículo, placa real, arma, suspeito, unidade responsável, notas e prioridade.' : 'ps-dispatch receives service and crime reports, filters eligible responders, creates blips and maintains a shared list of open calls. A call can carry location, vehicle, real plate artwork, weapon, suspect, assigned units, notes and priority.'}</p>
          <p>{isPt ? 'A edição Forge amplia esse fluxo com uma camada operacional mais forte: prioridade crítica 0, merge de chamadas repetidas, hotspots, incidentes maiores, alertas aproximados sem vazar a coordenada real e preferências individuais persistidas fora da NUI.' : 'The Forge edition expands the operational layer with priority 0 critical traffic, repeated-call merging, hotspots, major incidents, approximate-position alerts that do not leak true coordinates, and personal preferences persisted outside the NUI.'}</p>
        </div>
        <div className="dispatch-feature-grid">
          <Card eyebrow="BOARD" title={isPt ? 'Quadro de chamadas' : 'Call board'}>{isPt ? 'Lista compartilhada com unidades anexadas, notas, chamadas não atendidas, fixação e atualização em tempo real.' : 'Shared list with attached units, notes, unattended-call status, pinning and live updates.'}</Card>
          <Card eyebrow="CRITICAL" title={isPt ? 'Prioridade crítica' : 'Critical priority'}>{isPt ? 'CodeNames configurados sobem para prioridade 0 sem renumerar integrações existentes que usam 1/2/3.' : 'Configured codeNames are promoted to priority 0 without renumbering existing 1/2/3 integrations.'}</Card>
          <Card eyebrow="MERGE" title={isPt ? 'Agrupamento inteligente' : 'Smart merging'}>{isPt ? 'Alertas iguais, próximos e dentro da janela configurada viram uma ocorrência com contador em vez de poluir o quadro.' : 'Nearby duplicate reports inside the configured window become one counted call instead of board spam.'}</Card>
          <Card eyebrow="HOTSPOT" title="Hotspots">{isPt ? 'Ocorrências separadas na mesma rua podem marcar a região como hotspot e mostrar a recorrência aos responders.' : 'Separate incidents on the same street can mark the area as a hotspot and expose recurrence to responders.'}</Card>
          <Card eyebrow="PLATES" title={isPt ? 'Histórico de placas' : 'Plate-check history'}>{isPt ? 'Cada policial mantém localmente seu próprio log de consultas, sem banco de dados e sem enviar o histórico ao servidor.' : 'Each officer keeps a private local lookup history with no database and no server-side plate-log archive.'}</Card>
          <Card eyebrow="SETTINGS" title={isPt ? 'Preferências in-game' : 'In-game preferences'}>{isPt ? 'Escala, posição, duração, alertas compactos, blips, som, motion e filtros podem ser alterados no próprio dispatch.' : 'Scale, position, duration, compact mode, blips, sound, motion and filters can be changed from the dispatch UI.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="dispatch-install">
        <SectionTitle number="02" label={isPt ? 'Instalação' : 'Installation'} title={isPt ? 'QBCore ou QBX, ox_lib e PolyZone como base de runtime.' : 'QBCore or QBX with ox_lib and PolyZone as the runtime base.'} />
        <div className="xt-two-col dispatch-spaced-grid">
          <div>
            <h3>{isPt ? 'Dependências principais' : 'Core dependencies'}</h3>
            <div className="xt-pill-row"><span>qb-core / qbx_core</span><span>ox_lib</span><span>PolyZone</span></div>
            <p>{isPt ? 'lsn-radar é recomendado para radar policial. ps-mdt integra consultas de placa e fornece a imagem de mapa usada pelos thumbnails quando configurada.' : 'lsn-radar is recommended for police radar. ps-mdt integrates plate checks and can provide the map image used by thumbnails when configured.'}</p>
          </div>
          <div>
            <h3>{isPt ? 'Build da interface' : 'Frontend build'}</h3>
            <LuaCodeBlock>{"cd ui\nnpm install\nnpm run build\n\n# server.cfg\nensure ps-dispatch"}</LuaCodeBlock>
          </div>
        </div>
        <div className="xt-note warning"><strong>{isPt ? 'Importante sobre html/' : 'Important: html/'}</strong><p>{isPt ? 'O diretório html é gerado pelo build e é limpo antes de recompilar. Assets permanentes devem ficar em ui/public, como as imagens de placas.' : 'The html directory is generated and cleared before each build. Persistent assets belong in ui/public, including plate artwork.'}</p></div>
      </section>

      <section className="docs-section" id="dispatch-architecture">
        <SectionTitle number="03" label={isPt ? 'Arquitetura' : 'Architecture'} title={isPt ? 'Servidor autoritativo para chamadas, cliente para apresentação e Svelte para operação.' : 'Authoritative server calls, client presentation and a Svelte operations UI.'} />
        <div className="dispatch-feature-grid">
          <Card eyebrow="SERVER" title={isPt ? 'Servidor' : 'Server'}>{isPt ? 'Normaliza prioridade, aplica rate limit, faz merge, calcula hotspots, filtra jobs/on-duty, mantém a lista de chamadas e controla incidentes maiores.' : 'Normalizes priority, rate-limits reports, merges calls, calculates hotspots, filters jobs/on-duty, stores the call list and controls major incidents.'}</Card>
          <Card eyebrow="CLIENT" title="Client runtime">{isPt ? 'Recebe chamadas elegíveis, cria blips, sons e popups, gerencia keybinds, captura placas e sincroniza preferências locais.' : 'Receives eligible calls, creates blips, sounds and popups, manages keybinds, captures plate checks and synchronizes local preferences.'}</Card>
          <Card eyebrow="NUI" title="Svelte UI">{isPt ? 'Exibe alertas, menu de chamadas, tabs, placas, incidentes, detalhes de veículo/arma/pessoa e modal de configurações.' : 'Renders alerts, call board, tabs, plates, incidents, vehicle/weapon/person details and the settings modal.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="dispatch-intelligence">
        <SectionTitle number="04" label={isPt ? 'Inteligência de alertas' : 'Alert intelligence'} title={isPt ? 'Menos ruído, mais contexto e posição aproximada que realmente protege a origem.' : 'Less noise, richer context and approximate positions that actually protect the source.'} />
        <div className="dispatch-priority-grid">
          <article><span>0</span><strong>{isPt ? 'Crítico' : 'Critical'}</strong><p>{isPt ? 'Officer down, distress, grandes roubos e prison break quando listados em CriticalCodes.' : 'Officer-down/distress, major robberies and prison break when listed in CriticalCodes.'}</p></article>
          <article><span>1</span><strong>{isPt ? 'Urgente' : 'Urgent'}</strong><p>{isPt ? 'Ocorrências prioritárias e chamadas que escalaram pelo volume de reports.' : 'Priority calls and reports escalated by repeated reports.'}</p></article>
          <article><span>2</span><strong>{isPt ? 'Rotina' : 'Routine'}</strong><p>{isPt ? 'Tráfego operacional comum.' : 'Normal operational traffic.'}</p></article>
          <article><span>3</span><strong>{isPt ? 'Baixa' : 'Low'}</strong><p>{isPt ? 'Informações de menor urgência.' : 'Lower-urgency information.'}</p></article>
        </div>
        <div className="xt-two-col dispatch-spaced-grid">
          <div><h3>{isPt ? 'Merge e escalonamento' : 'Merge and escalation'}</h3><p>{isPt ? 'CallMerge compara codeName, janela e raio. Quando a quantidade atinge EscalateAt, uma ocorrência de rotina pode subir para prioridade 1 — mas nunca para 0, que só é concedida pela lista crítica.' : 'CallMerge compares codeName, time window and radius. At EscalateAt a routine call can become priority 1, but never priority 0; critical status is explicitly granted.'}</p></div>
          <div><h3>{isPt ? 'Offset seguro' : 'Secure position offset'}</h3><p>{isPt ? 'Alertas com offset recebem uma posição de busca fixa por chamada e a coordenada real é removida dos pacotes enviados. A ocorrência permanece dentro do círculo e reports repetidos não permitem triangular o ponto real.' : 'Offset alerts receive one stable search position per call and the true coordinates are stripped from outgoing payloads. The incident remains inside the search circle and repeat reports cannot triangulate the real point.'}</p></div>
        </div>
      </section>

      <section className="docs-section" id="dispatch-incidents">
        <SectionTitle number="05" label={isPt ? 'Grandes incidentes' : 'Major incidents'} title={isPt ? 'Supervisores podem transformar uma chamada específica em incidente maior.' : 'Supervisors can promote a specific call into a major incident.'} />
        <div className="dispatch-callout">
          <div><span>MAJOR INCIDENT</span><h3>{isPt ? 'Pin global com redução seletiva de ruído' : 'Global pin with selective noise reduction'}</h3><p>{isPt ? 'O incidente é declarado a partir de uma chamada real, fica fixado no topo para todos e pode silenciar tráfego de rotina somente para as unidades anexadas àquele incidente.' : 'An incident is declared from a real call, pins to the top for everyone and can suppress routine traffic only for units attached to that incident.'}</p></div>
          <div className="dispatch-mini-grid">
            <article><strong>{isPt ? 'Permissão' : 'Permission'}</strong><p>{isPt ? 'Grade mínima por job; validação server-side em declare e stand-down.' : 'Minimum grade per job, revalidated server-side for declare and stand-down.'}</p></article>
            <article><strong>{isPt ? 'Duração' : 'Duration'}</strong><p>{isPt ? 'Expira automaticamente; redeclarar estende o incidente.' : 'Automatically expires; redeclaring extends it.'}</p></article>
            <article><strong>{isPt ? 'Limite' : 'Limit'}</strong><p>{isPt ? 'MaxActive evita um quadro inteiro marcado como major.' : 'MaxActive prevents every call from becoming major.'}</p></article>
            <article><strong>{isPt ? 'Exceções' : 'Carve-outs'}</strong><p>{isPt ? 'Prioridade 0/1, assignments e o próprio incidente continuam chegando.' : 'Priority 0/1, assigned traffic and the incident itself still come through.'}</p></article>
          </div>
        </div>
        <LuaCodeBlock>{"Config.MajorIncident = {\n    Enabled = true,\n    Grades = { police = 4, ambulance = 4 },\n    Duration = 1800,\n    QuietRoutine = true,\n    MaxActive = 2,\n}"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="dispatch-plates">
        <SectionTitle number="06" label={isPt ? 'Consultas de placa' : 'Plate checks'} title={isPt ? 'Uma segunda aba privada para o histórico operacional de cada policial.' : 'A private second tab for each officer’s operational lookup history.'} />
        <div className="docs-prose">
          <p>{isPt ? 'Consultas direcionadas, como PlateCheckAlert do ps-mdt, são capturadas pelo cliente que recebeu a resposta. O log não é uma lista global de dispatch e não toca o banco de dados.' : 'Targeted lookups such as ps-mdt PlateCheckAlert are captured by the client receiving the answer. The log is not a global dispatch list and never touches a database.'}</p>
          <p>{isPt ? 'O sistema tenta identificar a arte real da placa procurando no mundo um veículo com correspondência exata. Se não encontrar, usa um badge neutro em vez de inventar o design. Cada entrada pode ser dispensada, copiada ou escalada para Request Backup.' : 'The system attempts to identify the real plate design from an exact vehicle match in the world. If none is found it shows a neutral badge instead of guessing. Each hit can be dismissed, copied or escalated through Request Backup.'}</p>
        </div>
        <LuaCodeBlock>{"Config.PlateScanner = {\n    Enabled = true,\n    MaxHits = 40,\n    Jobs = { 'leo' },\n    CodeNames = { 'platecheck' },\n    BackupButton = true,\n    BackupCooldownMs = 60000,\n}"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="dispatch-settings">
        <SectionTitle number="07" label={isPt ? 'Configurações in-game' : 'In-game settings'} title={isPt ? 'Cada responder ajusta sua experiência sem editar config.lua.' : 'Each responder can tune their experience without editing config.lua.'} />
        <div className="dispatch-settings-grid">
          {[
            ['Interface Scale', isPt ? 'Escala visual para diferentes resoluções.' : 'Visual scale for different resolutions.'],
            ['Alert Position', isPt ? 'Posição dos cards de alerta na tela.' : 'Where alert cards appear on screen.'],
            ['Max Visible Alerts', isPt ? 'Quantidade simultânea antes de agrupar em +N.' : 'Visible stack size before collapsing into +N.'],
            ['Map Thumbnails', isPt ? 'Preview do mapa nas ocorrências quando a imagem está disponível.' : 'Scene-map previews when a map image is configured.'],
            ['Compact Alerts', isPt ? 'Oculta detalhes extensos de veículo/suspeito nos popups.' : 'Hides extended vehicle/suspect details in popups.'],
            ['Map Blips', isPt ? 'Ativa/desativa blips e raios de busca pessoais.' : 'Personal toggle for blips and search radii.'],
            ['Priority Alerts Only', isPt ? 'Silencia rotina, preservando assignments e tráfego prioritário.' : 'Silences routine traffic while preserving assignments and priority calls.'],
            ['Alert Duration', isPt ? 'Multiplicador 0.5×, 1×, 1.5× ou 2×.' : '0.5×, 1×, 1.5× or 2× duration multiplier.'],
            ['Reduced Motion', isPt ? 'Reduz animações e o custo visual em PCs mais fracos.' : 'Reduces animation and visual cost on weaker PCs.'],
            ['Alert Types', isPt ? 'Mute individual por codeName.' : 'Per-codeName muting.'],
            ['Alert Sounds', isPt ? 'Liga/desliga somente o áudio.' : 'Toggles dispatch audio only.'],
            ['Receive Alerts', isPt ? 'Master switch para popup, som e blip.' : 'Master switch for popup, audio and blips.'],
          ].map(([name, desc]) => <article key={name}><strong>{name}</strong><p>{desc}</p></article>)}
        </div>
        <div className="xt-note"><strong>KVP</strong><p>{isPt ? 'As preferências são salvas em SetResourceKvp com a chave psd_settings. Isso mantém as escolhas fora do browser/NUI e permite que sobrevivam a reloads da interface.' : 'Preferences are saved through SetResourceKvp under psd_settings. This keeps choices outside the browser/NUI and lets them survive UI reloads.'}</p></div>
      </section>

      <section className="docs-section" id="dispatch-api">
        <SectionTitle number="08" label="API / exports" title={isPt ? 'Integrações podem disparar alertas genéricos, direcionados ou presets prontos.' : 'Integrations can emit generic, targeted or preset alerts.'} />
        <h3 className="xt-subheading">CustomAlert</h3>
        <LuaCodeBlock>{"exports['ps-dispatch']:CustomAlert({\n    message = 'Suspicious vehicle',\n    codeName = 'suspicious',\n    code = '10-66',\n    priority = 2,\n    coords = GetEntityCoords(ped),\n    vehicle = 'Sultan RS',\n    plate = 'ABC123',\n    plateIndex = GetVehicleNumberPlateTextIndex(veh),\n    jobs = { 'leo' },\n})"}</LuaCodeBlock>

        <h3 className="xt-subheading">SendTargetedAlert</h3>
        <LuaCodeBlock>{"exports['ps-dispatch']:SendTargetedAlert({ src }, {\n    message = 'Plate Hit',\n    code = '10-28',\n    codeName = 'platecheck',\n    plate = 'ABC123',\n    footer = {\n        icon = 'fas fa-triangle-exclamation',\n        text = 'Comes back flagged',\n        tone = 'alert'\n    },\n})"}</LuaCodeBlock>

        <div className="dispatch-api-list">
          {[
            ['OfficerDown()', isPt ? 'Policial abatido.' : 'Officer-down preset.'],
            ['OfficerBackup()', isPt ? 'Pedido normal de apoio.' : 'Standard backup request.'],
            ['OfficerInDistress()', isPt ? 'Distress de alta prioridade.' : 'High-priority distress call.'],
            ['EmsDown()', isPt ? 'EMS abatido.' : 'EMS-down preset.'],
            ['Shooting()', isPt ? 'Disparo a pé.' : 'On-foot shooting alert.'],
            ['VehicleShooting(vehicle)', isPt ? 'Disparos a partir de veículo.' : 'Vehicle shooting alert.'],
            ['CarJacking(vehicle)', isPt ? 'Roubo de veículo.' : 'Carjacking alert.'],
            ['VehicleTheft(vehicle)', isPt ? 'Furto/roubo de veículo.' : 'Vehicle theft alert.'],
            ['Explosion()', isPt ? 'Explosão.' : 'Explosion alert.'],
            ['PrisonBreak()', isPt ? 'Fuga de prisão.' : 'Prison-break alert.'],
            ['FleecaBankRobbery(camId)', isPt ? 'Roubo Fleeca.' : 'Fleeca robbery preset.'],
            ['PacificBankRobbery(camId)', isPt ? 'Pacific Bank.' : 'Pacific Bank robbery preset.'],
            ['PaletoBankRobbery(camId)', isPt ? 'Banco de Paleto.' : 'Paleto bank robbery preset.'],
            ['VangelicoRobbery(camId)', isPt ? 'Joalheria Vangelico.' : 'Vangelico robbery preset.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
        <div className="xt-note warning"><strong>{isPt ? 'Servidor protegido' : 'Server protection'}</strong><p>{isPt ? 'ps-dispatch:server:notify possui rate limit por player. Integrações próprias ainda devem validar a origem e as regras do gameplay antes de emitir ocorrências sensíveis.' : 'ps-dispatch:server:notify is rate-limited per player. Custom integrations should still validate gameplay conditions and origin before emitting sensitive calls.'}</p></div>
      </section>

      <section className="docs-section" id="dispatch-config">
        <SectionTitle number="09" label={isPt ? 'Configuração' : 'Configuration'} title={isPt ? 'Config global para política operacional; preferências pessoais ficam na NUI/KVP.' : 'Global config defines operational policy; personal preferences live in NUI/KVP.'} />
        <div className="dispatch-config-grid">
          <article><strong>Config.Jobs</strong><p>{isPt ? 'Tipos/jobs que podem receber e abrir o dispatch.' : 'Job types/names allowed to receive and open dispatch.'}</p></article>
          <article><strong>FilteredBroadcast</strong><p>{isPt ? 'Envia somente para players elegíveis em vez de broadcast global.' : 'Sends only to eligible players instead of every client.'}</p></article>
          <article><strong>CriticalCodes</strong><p>{isPt ? 'Lista de codeNames que sobem para prioridade 0.' : 'CodeNames promoted to priority 0.'}</p></article>
          <article><strong>CallMerge</strong><p>{isPt ? 'Janela, raio e threshold de escalonamento.' : 'Merge window, radius and escalation threshold.'}</p></article>
          <article><strong>Hotspot</strong><p>{isPt ? 'Detecção de recorrência por rua.' : 'Same-street recurrence detection.'}</p></article>
          <article><strong>PinnedCodes</strong><p>{isPt ? 'Chamadas sempre fixadas no topo.' : 'Calls always pinned to the top.'}</p></article>
          <article><strong>CallLifetime</strong><p>{isPt ? 'Expiração automática do quadro.' : 'Automatic call-list expiry.'}</p></article>
          <article><strong>UnattendedAfter</strong><p>{isPt ? 'Marca chamadas sem unidades anexadas.' : 'Flags calls with no attached units.'}</p></article>
          <article><strong>AlertSounds</strong><p>{isPt ? 'Sons GTA separados para rotina, prioridade e crítico.' : 'Separate GTA sound pairs for routine, priority and critical traffic.'}</p></article>
          <article><strong>NotifyRateLimit</strong><p>{isPt ? 'Limite de eventos de notify por player.' : 'Per-player notify-event rate limit.'}</p></article>
          <article><strong>PhoneRequired</strong><p>{isPt ? 'Pode exigir item de telefone para /911 e /311.' : 'Can require a phone item for /911 and /311.'}</p></article>
          <article><strong>Config.Blips</strong><p>{isPt ? 'Sprite, cor, escala, duração, som, radius, offset e flash por codeName.' : 'Sprite, color, scale, duration, sound, radius, offset and flash per codeName.'}</p></article>
        </div>
      </section>

      <section className="docs-section">
        <SectionTitle number="10" label={isPt ? 'Localização e interface' : 'Localization & UI'} title={isPt ? 'Oito locales no Lua e frontend Svelte recompilável.' : 'Eight Lua locales and a rebuildable Svelte frontend.'} />
        <div className="dispatch-feature-grid">
          <Card eyebrow="LOCALES" title="8 locales">en · de · es · fr · nl · pt-br · tr · cs</Card>
          <Card eyebrow="PLATES" title={isPt ? 'Placas reais' : 'Real plate artwork'}>{isPt ? 'plateIndex seleciona a arte compatível com o design GTA; sem índice, usa fallback neutro.' : 'plateIndex selects matching GTA plate art; missing indices use a neutral fallback.'}</Card>
          <Card eyebrow="MAP" title={isPt ? 'Mapa contextual' : 'Context map'}>{isPt ? 'MdtMapImage permite thumbnails do local usando imagem do mapa do MDT ou outra URL NUI configurada.' : 'MdtMapImage enables scene thumbnails using the MDT map or another configured NUI URL.'}</Card>
        </div>
      </section>

      <section className="dispatch-source-note">
        <span>{isPt ? 'Origem e atribuição' : 'Origin & attribution'}</span>
        <h2>{isPt ? 'Forge mantém um fork modificado preservando a origem do ps-dispatch.' : 'Forge maintains a modified fork while preserving ps-dispatch attribution.'}</h2>
        <p>{isPt ? 'O fxmanifest atual credita Project Sloth & OK1ez. A edição Forge mantém a base do projeto e adiciona melhorias operacionais, segurança, interface e configuração in-game descritas nesta página.' : 'The current fxmanifest credits Project Sloth & OK1ez. The Forge edition keeps the project foundation and adds the operational, security, interface and in-game configuration improvements documented here.'}</p>
        <div className="dispatch-hero-actions">
          <a className="docs-primary-button" href={FORGE_REPO} target="_blank" rel="noreferrer">Framework-Forge/ps-dispatch</a>
          <a className="docs-secondary-button" href={UPSTREAM_REPO} target="_blank" rel="noreferrer">Project-Sloth/ps-dispatch</a>
        </div>
      </section>
    </div>
  );
}
