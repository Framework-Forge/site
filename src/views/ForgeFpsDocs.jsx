import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Framework-Forge/forge-fps';

const SectionTitle = ({ number, label, title }) => (
  <div className="docs-section-heading">
    <span>{number}</span>
    <div><p>{label}</p><h2>{title}</h2></div>
  </div>
);

const Card = ({ eyebrow, title, children }) => (
  <article className="crafting-card">
    <span>{eyebrow}</span>
    <h3>{title}</h3>
    <p>{children}</p>
  </article>
);

const Info = ({ label, children }) => (
  <div className="xt-info"><span>{label}</span><strong>{children}</strong></div>
);

const categoryRows = [
  ['Gráficos', '8', 'Bloom, bokeh, motion blur e film grain.'],
  ['Testes de renderização', '5', 'Luzes LOD, coronas, iluminação distante, poças e luzes dos veículos.'],
  ['Monitor', '10', 'HUD, posição, escala, opacidade, frametime, 1% low, gráfico, amostras, ping e entidades.'],
  ['Interface', '8', 'Escala, backdrop, cor, janela/gráfico, animações, contraste e sons.'],
  ['Automação', '12', 'Ajuste automático, limites, alertas, pausa, AFK e interiores.'],
  ['Distância', '5', 'LOD global, decals, sombras e LOD de objetos locais.'],
  ['População', '16', 'Densidades, geração, ranges, geradores e bloqueios ambientes.'],
  ['Memória', '4', 'Orçamentos de modelos e população.'],
  ['Iluminação', '4', 'Blackout, veículos, luzes distantes e sirenes ambientes.'],
  ['Efeitos', '4', 'Rastros, pegadas, ondas e água plana.'],
];

const functionRows = [
  ['shared/catalog.lua', '4'],
  ['shared/settings.lua', '7'],
  ['shared/policy.lua', '8'],
  ['client/main.lua', '11'],
  ['client/performance.lua', '7'],
  ['client/graphics.lua', '5'],
  ['client/metrics.lua', '8'],
  ['client/diagnostics.lua', '1'],
  ['client/automation.lua', '1'],
  ['client/extras.lua', '8'],
  ['client/locale.lua', '2'],
  ['server/policy.lua', '4'],
];

export default function ForgeFpsDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs fps-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Scripts • Performance</div>
          <h1>Forge <span>FPS</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Painel local de desempenho para FiveM com medição real de FPS/frametime, presets conservadores, benchmark antes/depois, HUD, automações e uma política administrativa server-side que define exatamente quais ajustes o jogador pode usar e quais mínimos são permitidos.'
              : 'A local FiveM performance panel with real FPS/frametime measurements, conservative presets, before/after benchmarking, HUD, automation and a server-side administrative policy that controls exactly which adjustments players may use and their minimum allowed values.'}
          </p>

          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório oficial' : 'Official repository'}</a>
            <a className="docs-secondary-button" href="#fps-admin">{pt ? 'Política administrativa' : 'Administrative policy'}</a>
            <a className="docs-secondary-button" href="#fps-api">API / Exports</a>
          </div>

          <div className="legacy-meta">
            <span>v1.3.1</span>
            <span>Svelte 5</span>
            <span>76 Controls</span>
            <span>10 Categories</span>
            <span>66 Lua Functions</span>
            <span>Admin Policy</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>FPS</span><strong>FORGE FPS</strong></div>
          <Info label={pt ? 'Controles' : 'Controls'}>76</Info>
          <Info label={pt ? 'Categorias' : 'Categories'}>10</Info>
          <Info label={pt ? 'Funções Lua nomeadas' : 'Named Lua functions'}>66</Info>
          <Info label={pt ? 'Exports client' : 'Client exports'}>4</Info>
          <Info label={pt ? 'Callbacks NUI' : 'NUI callbacks'}>8</Info>
          <Info label={pt ? 'Eventos de rede registrados' : 'Registered net events'}>6</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#fps-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#fps-architecture">{pt ? 'Arquitetura' : 'Architecture'}</a>
        <a href="#fps-install">{pt ? 'Instalação' : 'Installation'}</a>
        <a href="#fps-presets">Presets</a>
        <a href="#fps-controls">{pt ? '76 controles' : '76 controls'}</a>
        <a href="#fps-admin">{pt ? 'Administração' : 'Administration'}</a>
        <a href="#fps-exclusive">{pt ? 'Controle exclusivo' : 'Exclusive control'}</a>
        <a href="#fps-metrics">{pt ? 'Métricas reais' : 'Real metrics'}</a>
        <a href="#fps-benchmark">Benchmark</a>
        <a href="#fps-automation">{pt ? 'Automação' : 'Automation'}</a>
        <a href="#fps-persistence">{pt ? 'Persistência' : 'Persistence'}</a>
        <a href="#fps-functions">{pt ? 'Funções e eventos' : 'Functions & events'}</a>
        <a href="#fps-api">Exports</a>
        <a href="#fps-config">{pt ? 'Configuração' : 'Configuration'}</a>
        <a href="#fps-fairness">{pt ? 'Justiça visual' : 'Visual fairness'}</a>
        <a href="#fps-dev">{pt ? 'Desenvolvimento' : 'Development'}</a>
      </nav>

      <section className="docs-section" id="fps-overview">
        <SectionTitle number="01" label={pt ? 'Conceito' : 'Concept'} title={pt ? 'O Forge FPS otimiza de forma controlada: mede primeiro, respeita a política do servidor e restaura o que alterou.' : 'Forge FPS optimizes in a controlled way: measure first, respect server policy and restore what it changes.'} />

        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Medir' : 'Measure'}</strong><p>{pt ? 'FPS, frametime e 1% low são calculados com amostras locais reais, sem inventar CPU/GPU/RAM.' : 'FPS, frametime and 1% low come from real local samples, not invented CPU/GPU/RAM values.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Autorizar' : 'Authorize'}</strong><p>{pt ? 'O servidor publica a política com permissões, pisos e parâmetros de controle exclusivo.' : 'The server publishes permissions, minimums and exclusive-control parameters.'}</p></div>
          <div><span>03</span><strong>{pt ? 'Aplicar' : 'Apply'}</strong><p>{pt ? 'O player escolhe perfil ou ajuste customizado; opções bloqueadas retornam ao valor neutro.' : 'Players choose a preset or custom profile; blocked settings return to neutral values.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Restaurar' : 'Restore'}</strong><p>{pt ? 'Ao suspender, fechar testes ou parar o resource, o sistema tenta restaurar somente os estados que controla.' : 'When suspended, finishing tests or stopping the resource, it restores only the states it owns.'}</p></div>
        </div>

        <div className="crafting-feature-grid">
          <Card eyebrow="LOCAL" title={pt ? 'Preferência por computador' : 'Per-computer preference'}>{pt ? 'O perfil do jogador fica em KVP local versionado. Não depende de personagem, SQL ou conta.' : 'Player preferences live in versioned local KVP. No character, SQL or account dependency.'}</Card>
          <Card eyebrow="POLICY" title={pt ? 'Servidor decide os limites' : 'Server decides the limits'}>{pt ? 'Quarenta e seis controles possuem policy. O admin define allowed e, nos ranges, o menor valor permitido.' : 'Forty-six controls are policy-bound. Admins define allowed and, for ranges, the minimum allowed value.'}</Card>
          <Card eyebrow="SAFE DEFAULT" title="Original">{pt ? 'O perfil inicial não aplica otimização gráfica. É a referência neutra para reset e benchmark.' : 'The initial profile applies no graphical optimization and acts as the neutral reset/benchmark reference.'}</Card>
          <Card eyebrow="NO MAGIC" title={pt ? 'Sem promessa de FPS fixo' : 'No fixed FPS promise'}>{pt ? 'O resultado depende do gargalo real. CPU/servidor, streaming e outros scripts podem limitar qualquer ganho.' : 'Results depend on the real bottleneck. CPU/server load, streaming and other scripts may limit gains.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="fps-architecture">
        <SectionTitle number="02" label={pt ? 'Arquitetura' : 'Architecture'} title={pt ? 'Catálogo, política, aplicação, métricas e interface são módulos separados.' : 'Catalog, policy, application, metrics and UI are separated modules.'} />

        <div className="crafting-db-grid">
          <article><code>shared/catalog.lua</code><strong>{pt ? 'Catálogo central' : 'Central catalog'}</strong><p>{pt ? 'Define os 76 controles, grupos, limites, tipo, policy, optimize, exclusive e manualOnly.' : 'Defines all 76 controls, groups, ranges, type, policy, optimize, exclusive and manualOnly metadata.'}</p></article>
          <article><code>shared/settings.lua</code><strong>{pt ? 'Validação' : 'Validation'}</strong><p>{pt ? 'Defaults, presets, normalização, mínimos e rejeição de opções/valores inválidos.' : 'Defaults, presets, normalization, minimums and invalid setting/value rejection.'}</p></article>
          <article><code>shared/policy.lua</code><strong>{pt ? 'Contrato administrativo' : 'Administrative contract'}</strong><p>{pt ? 'Valida rules, baselines, revision, grants exclusivos e snapshot recebido do servidor.' : 'Validates rules, baselines, revision, exclusive grants and server snapshots.'}</p></article>
          <article><code>client/graphics.lua</code><strong>{pt ? 'Pós-processamento' : 'Post-processing'}</strong><p>{pt ? 'Bloom/bokeh e restauração com verificação de ownership/conflito.' : 'Bloom/bokeh and restoration with ownership/conflict checks.'}</p></article>
          <article><code>client/performance.lua</code><strong>{pt ? 'Natives de performance' : 'Performance natives'}</strong><p>{pt ? 'Densidades, população, LOD, iluminação, efeitos, budgets e ajustes exclusivos.' : 'Densities, population, LOD, lighting, effects, budgets and exclusive settings.'}</p></article>
          <article><code>client/metrics.lua</code><strong>{pt ? 'Medição' : 'Measurement'}</strong><p>{pt ? 'Janela de frametimes, histórico, captura de benchmark, média e 1% low.' : 'Frametime window, history, benchmark capture, averages and 1% low.'}</p></article>
          <article><code>client/main.lua</code><strong>Runtime</strong><p>{pt ? 'NUI, comando, keymap, sessão, save, benchmark, automação, exports e sincronização da policy.' : 'NUI, command, keymap, session, save, benchmark, automation, exports and policy synchronization.'}</p></article>
          <article><code>server/policy.lua</code><strong>{pt ? 'Autoridade server-side' : 'Server authority'}</strong><p>{pt ? 'ACE, rate limit, revisão concorrente, persistência e broadcast da política.' : 'ACE, rate limiting, concurrent revision control, persistence and policy broadcast.'}</p></article>
        </div>
      </section>

      <section className="docs-section" id="fps-install">
        <SectionTitle number="03" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'O resource já inclui a interface compilada; não precisa de Node/npm no servidor.' : 'The resource ships with compiled UI and does not require Node/npm on the server.'} />
        <LuaCodeBlock>{"ensure forge-fps"}</LuaCodeBlock>
        <div className="crafting-feature-grid">
          <Card eyebrow="COMMAND" title="/fps">{pt ? 'Comando padrão para abrir o painel. Pode ser alterado em Config.Command.' : 'Default command to open the panel. Configurable through Config.Command.'}</Card>
          <Card eyebrow="KEY" title="F10">{pt ? 'Keybind padrão. Config.Key vazio desativa a tecla, mantendo /fps.' : 'Default keybind. Empty Config.Key disables it while keeping /fps.'}</Card>
          <Card eyebrow="DATABASE" title={pt ? 'Sem banco' : 'No database'}>{pt ? 'A preferência do jogador é KVP local. A policy administrativa é JSON do próprio resource.' : 'Player preferences use local KVP. Administrative policy is a resource JSON file.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="fps-presets">
        <SectionTitle number="04" label="Presets" title={pt ? 'Seis perfis prontos, todos subordinados à política publicada pelo servidor.' : 'Six ready profiles, all subordinate to the server-published policy.'} />
        <div className="crafting-level-grid">
          {[
            ['Original','1.00 / 1.00',pt ? 'Neutro; nenhum ajuste Forge FPS.' : 'Neutral; no Forge FPS tuning.'],
            ['Leve','0.85 / 0.90',pt ? 'Redução discreta de bloom/bokeh.' : 'Light bloom/bokeh reduction.'],
            ['Equilibrado','0.65 / 0.75',pt ? 'Pisos conservadores padrão.' : 'Default conservative floors.'],
            ['Ultra leve','0.35 / 0.40',pt ? 'Strength 0.65 nas opções liberadas.' : 'Strength 0.65 on allowed settings.'],
            ['Notebook','0.15 / 0.20',pt ? 'Strength 0.85 nas opções liberadas.' : 'Strength 0.85 on allowed settings.'],
            ['Máximo permitido','0 / 0',pt ? 'Usa os mínimos administrativos, sem desbloquear nada.' : 'Uses administrative minimums without unlocking anything.'],
          ].map(([name,value,desc]) => <article key={name}><span>{value}</span><strong>{name}</strong><p>{desc}</p></article>)}
        </div>
        <div className="xt-note"><strong>{pt ? 'Importante' : 'Important'}</strong><p>{pt ? 'Os valores do preset não ignoram os mínimos do servidor. Se um admin autorizar apenas 65%, um preset que pedir 15% será normalizado para o piso permitido.' : 'Preset values never bypass server minimums. If the admin allows only 65%, a preset requesting 15% is normalized to the authorized floor.'}</p></div>
      </section>

      <section className="docs-section" id="fps-controls">
        <SectionTitle number="05" label={pt ? 'Catálogo' : 'Catalog'} title={pt ? '76 controles organizados em dez categorias.' : '76 controls organized into ten categories.'} />
        <div className="crafting-api-list">
          {categoryRows.map(([category,count,description]) => (
            <article key={category}><code>{category} · {count}</code><p>{description}</p></article>
          ))}
        </div>
        <div className="xt-note"><strong>46 policy-controlled</strong><p>{pt ? 'Todos os controles que alteram renderização/world state de forma sensível passam pela policy. Monitor, interface e automações locais não precisam de autorização para existir, mas não podem usar uma opção gráfica que a policy negou.' : 'All sensitive rendering/world-state controls pass through policy. Monitor, UI and local automation do not need policy to exist, but cannot use a graphical option denied by policy.'}</p></div>
      </section>

      <section className="docs-section" id="fps-admin">
        <SectionTitle number="06" label={pt ? 'Administração' : 'Administration'} title={pt ? 'O painel administrativo publica permissões e limites no servidor, não apenas esconde opções na NUI.' : 'The admin panel publishes permissions and limits server-side instead of merely hiding options in the UI.'} />

        <LuaCodeBlock>{"FpsServerConfig = {
    Ace = 'forge.fps.admin',
    InheritAce = 'forge-core.admin',
    PolicyFile = 'admin-policy.json',
    Rules = {
        -- pedDensity = { allowed = true, min = 0.5 },
        -- lodScale = { allowed = true, min = 0.7 },
    }
}"}</LuaCodeBlock>

        <div className="crafting-feature-grid">
          <Card eyebrow="ACE" title="forge.fps.admin">{pt ? 'Permissão administrativa específica do Forge FPS.' : 'Dedicated Forge FPS administrative permission.'}</Card>
          <Card eyebrow="INHERIT ACE" title="forge-core.admin">{pt ? 'Administradores Forge podem herdar acesso sem duplicar grupos ACE.' : 'Forge administrators may inherit access without duplicating ACE groups.'}</Card>
          <Card eyebrow="RULE" title="allowed">{pt ? 'Libera ou bloqueia cada opção que possui policy.' : 'Allows or denies each policy-controlled option.'}</Card>
          <Card eyebrow="RANGE" title="min">{pt ? 'Em controles numéricos, define o menor valor que o jogador poderá aplicar.' : 'For numeric settings, defines the smallest value a player may apply.'}</Card>
          <Card eyebrow="REVISION" title={pt ? 'Controle concorrente' : 'Concurrent control'}>{pt ? 'Salvar exige expected revision; se outro admin publicou antes, a gravação é recusada.' : 'Saving requires the expected revision; if another admin published first, the save is rejected.'}</Card>
          <Card eyebrow="PERSISTENCE" title="admin-policy.json">{pt ? 'A policy publicada sobrevive a restart e tem limite de 20 KB.' : 'Published policy survives restarts and is limited to 20 KB.'}</Card>
        </div>

        <div className="crafting-step-list">
          <article><span>1</span><div><strong>{pt ? 'Client solicita policy' : 'Client requests policy'}</strong><p>forge-fps:policy:request</p></div></article>
          <article><span>2</span><div><strong>{pt ? 'Servidor monta snapshot' : 'Server builds snapshot'}</strong><p>{pt ? 'Rules + revision + admin + exclusive grants + baselines.' : 'Rules + revision + admin + exclusive grants + baselines.'}</p></div></article>
          <article><span>3</span><div><strong>{pt ? 'Admin publica' : 'Admin publishes'}</strong><p>forge-fps:policy:save</p></div></article>
          <article><span>4</span><div><strong>{pt ? 'Servidor valida e salva' : 'Server validates and saves'}</strong><p>{pt ? 'ACE, rate limit, revision, schema e tamanho são verificados antes de SaveResourceFile.' : 'ACE, rate limit, revision, schema and size are checked before SaveResourceFile.'}</p></div></article>
          <article><span>5</span><div><strong>{pt ? 'Todos recebem a nova policy' : 'Everyone receives new policy'}</strong><p>{pt ? 'Ajustes revogados são normalizados/restaurados; nenhum preset é forçado ao player.' : 'Revoked settings are normalized/restored; no preset is forced on players.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="fps-exclusive">
        <SectionTitle number="07" label={pt ? 'Controle exclusivo' : 'Exclusive control'} title={pt ? 'Vinte parâmetros sem getter confiável só podem ser usados quando o administrador declara ownership e baseline.' : 'Twenty parameters without a reliable getter require administrator-declared ownership and baseline.'} />
        <div className="docs-prose">
          <p>{pt ? 'Para alguns natives, o GTA não fornece um getter que permita capturar com segurança o estado anterior. Nesses casos o Forge FPS não presume que conhece o valor original. O servidor precisa conceder exclusive=true através de server/config.lua e fornecer uma baseline válida.' : 'For some natives GTA provides no getter to safely capture previous state. Forge FPS therefore does not pretend it knows the original value. The server must grant exclusive ownership in server/config.lua and provide a valid baseline.'}</p>
        </div>
        <LuaCodeBlock>{"Exclusive = {
    distantCars = { enabled = true, baseline = true },
    filmGrain = { enabled = true, baseline = 1.0 },
    shadowMode = { enabled = true, baseline = 'CSM_ST_SOFT16' },
    pedPopulationBudget = { enabled = true, baseline = 3 },
    shadowDistance = { enabled = true, baseline = 1.0 },
}"}</LuaCodeBlock>
        <div className="xt-note warning"><strong>{pt ? 'Regra de segurança' : 'Safety rule'}</strong><p>{pt ? 'Se outro resource também controla um parâmetro exclusivo, não conceda ownership simultâneo sem coordenar os dois. A baseline é uma declaração do administrador, não uma captura automática.' : 'If another resource controls an exclusive parameter, do not grant simultaneous ownership without coordinating both. Baseline is an administrator declaration, not an automatic capture.'}</p></div>
      </section>

      <section className="docs-section" id="fps-metrics">
        <SectionTitle number="08" label={pt ? 'Métricas' : 'Metrics'} title={pt ? 'O painel separa FPS instantâneo, média da janela, frametime e 1% low.' : 'The panel separates instantaneous FPS, window average, frametime and 1% low.'} />
        <LuaCodeBlock>{"FPS do quadro = 1000 / frametime_ms

FPS médio do benchmark = frames / elapsed_seconds

1% low = 1000 / média dos 1% frametimes mais lentos"}</LuaCodeBlock>
        <div className="crafting-feature-grid">
          <Card eyebrow="FRAME" title={pt ? 'Até 250 ms no HUD' : 'Up to 250 ms HUD updates'}>{pt ? 'O contador fechado recebe atualizações compactas, sem copiar o catálogo inteiro.' : 'Closed HUD receives compact updates without copying the full catalog.'}</Card>
          <Card eyebrow="WINDOW" title="10s">{pt ? 'Config.WindowSeconds define a janela de amostras usada nas métricas correntes.' : 'Config.WindowSeconds defines the current metric sample window.'}</Card>
          <Card eyebrow="REAL PING" title={pt ? 'Ping do servidor' : 'Server ping'}>{pt ? 'Só é solicitado quando o contador correspondente está habilitado e possui rate limit server-side.' : 'Requested only when enabled and rate-limited server-side.'}</Card>
          <Card eyebrow="ENTITIES" title={pt ? 'Pools locais' : 'Local pools'}>{pt ? 'Contagens representam entidades carregadas no client, não o total global do servidor.' : 'Counts represent client-loaded pools, not total server entities.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="fps-benchmark">
        <SectionTitle number="09" label="Benchmark" title={pt ? 'A comparação mede Original e candidato na mesma cena e sempre restaura o ajuste anterior antes de oferecer aplicação.' : 'Comparison measures Original and candidate in the same scene and restores previous settings before offering apply.'} />
        <div className="crafting-step-list">
          <article><span>2s</span><div><strong>{pt ? 'Acomodação original' : 'Original settle'}</strong><p>{pt ? 'Espera streaming/render estabilizar antes da primeira coleta.' : 'Lets streaming/render settle before first capture.'}</p></div></article>
          <article><span>10s</span><div><strong>Original</strong><p>{pt ? 'Captura baseline com o Forge FPS restaurado.' : 'Captures baseline with Forge FPS restored.'}</p></div></article>
          <article><span>2s</span><div><strong>{pt ? 'Acomodação candidato' : 'Candidate settle'}</strong><p>{pt ? 'Aplica o candidato sem persistir e aguarda novamente.' : 'Applies candidate without persistence and settles again.'}</p></div></article>
          <article><span>10s</span><div><strong>{pt ? 'Candidato' : 'Candidate'}</strong><p>{pt ? 'Captura a segunda fase e calcula delta.' : 'Captures the second phase and calculates delta.'}</p></div></article>
          <article><span>↺</span><div><strong>{pt ? 'Restauração' : 'Restore'}</strong><p>{pt ? 'O perfil anterior volta automaticamente; usar o testado é uma ação explícita.' : 'Previous profile returns automatically; using tested settings is explicit.'}</p></div></article>
        </div>
        <div className="xt-note"><strong>{pt ? 'Cancelamento automático' : 'Automatic cancellation'}</strong><p>{pt ? 'O teste é cancelado por movimento maior que 3 m, giro de câmera acima de 15°, tiro, morte, outra câmera/menu, ESC ou /fps. O personagem não é congelado nem teleportado.' : 'The test cancels on movement over 3 m, camera rotation over 15°, shooting, death, another camera/menu, ESC or /fps. The player is not frozen or teleported.'}</p></div>
      </section>

      <section className="docs-section" id="fps-automation">
        <SectionTitle number="10" label={pt ? 'Automação' : 'Automation'} title={pt ? 'O modo automático é deliberadamente conservador e não vira uma policy dinâmica de população.' : 'Automatic mode is deliberately conservative and does not become a dynamic population policy.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="AUTO" title={pt ? 'Somente bloom' : 'Bloom only'}>{pt ? 'Depois de 5 leituras abaixo do floor, sobe um nível de economia; após 10 acima do ceiling, recupera qualidade.' : 'After 5 readings below floor it increases savings; after 10 above ceiling it restores quality.'}</Card>
          <Card eyebrow="COOLDOWN" title="15–120s">{pt ? 'O intervalo evita oscilações rápidas de qualidade.' : 'Interval prevents rapid quality oscillation.'}</Card>
          <Card eyebrow="AFK" title={pt ? 'Economia por inatividade' : 'Idle savings'}>{pt ? 'Depois do tempo configurado, reduz somente bloom ao piso autorizado e retorna ao detectar atividade.' : 'After configured idle time it reduces only bloom to the authorized floor and restores on activity.'}</Card>
          <Card eyebrow="INTERIOR" title={pt ? 'Economia em interiores' : 'Indoor savings'}>{pt ? 'Também atua somente no bloom; não apaga luzes ou população automaticamente.' : 'Also affects only bloom; does not automatically disable lights or population.'}</Card>
          <Card eyebrow="PAUSE" title={pt ? 'Pausa nativa' : 'Native pause'}>{pt ? 'Pode suspender ajustes e coleta enquanto o pause menu está ativo.' : 'Can suspend adjustments and frame collection during native pause.'}</Card>
          <Card eyebrow="ALERT" title={pt ? 'FPS baixo persistente' : 'Persistent low FPS'}>{pt ? 'Mostra aviso após permanecer abaixo do threshold pelo tempo definido; não troca preset sozinho.' : 'Shows warning after remaining below threshold for the configured time; does not change preset itself.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="fps-persistence">
        <SectionTitle number="11" label={pt ? 'Persistência' : 'Persistence'} title={pt ? 'Preferências do player e política do servidor são persistências diferentes.' : 'Player preferences and server policy use separate persistence layers.'} />
        <div className="crafting-db-grid">
          <article><code>forge-fps:preferences:v1</code><strong>KVP client</strong><p>{pt ? 'Salva settings locais do computador. Limite de leitura: 16 KB.' : 'Stores local computer settings. Read limit: 16 KB.'}</p></article>
          <article><code>admin-policy.json</code><strong>{pt ? 'Policy server' : 'Server policy'}</strong><p>{pt ? 'Rules publicadas pelo admin. O arquivo é carregado no start e validado antes de uso.' : 'Admin-published rules loaded and validated at resource start.'}</p></article>
          <article><code>revision</code><strong>{pt ? 'Concorrência' : 'Concurrency'}</strong><p>{pt ? 'Evita sobrescrever silenciosamente alteração feita por outro administrador.' : 'Prevents silently overwriting another administrator change.'}</p></article>
        </div>
      </section>

      <section className="docs-section" id="fps-functions">
        <SectionTitle number="12" label={pt ? 'Superfície técnica' : 'Technical surface'} title={pt ? 'O código atual possui 66 funções Lua nomeadas, além dos callbacks anônimos de eventos/NUI.' : 'Current code contains 66 named Lua functions, excluding anonymous event/NUI callbacks.'} />
        <div className="crafting-api-list">
          {functionRows.map(([file,count]) => <article key={file}><code>{file}</code><p>{count} {pt ? 'funções nomeadas' : 'named functions'}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Callbacks NUI registrados' : 'Registered NUI callbacks'}</h3>
        <LuaCodeBlock>{"ready
close
save
reset
preset
adminPolicyRefresh
adminPolicySave
benchmark"}</LuaCodeBlock>

        <h3 className="xt-subheading">{pt ? 'Eventos de rede registrados' : 'Registered network events'}</h3>
        <LuaCodeBlock>{"forge-fps:policy:request        -- server
forge-fps:policy:save           -- server
forge-fps:policy:updated        -- client
forge-fps:policy:reply          -- client
forge-fps:ping:request          -- server
forge-fps:ping:reply            -- client"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="fps-api">
        <SectionTitle number="13" label="API" title={pt ? 'Quatro exports client permitem abrir, consultar e coordenar o Forge FPS com outros resources.' : 'Four client exports let other resources open, inspect and coordinate Forge FPS.'} />
        <LuaCodeBlock>{"exports['forge-fps']:Open()

local settings = exports['forge-fps']:GetSettings()
local metrics = exports['forge-fps']:GetMetrics()

-- Outro resource assume temporariamente uma câmera/cena visual.
exports['forge-fps']:SetSuspended(true)

-- Ao finalizar a cena:
exports['forge-fps']:SetSuspended(false)"}</LuaCodeBlock>
        <div className="crafting-api-list">
          <article><code>Open()</code><p>{pt ? 'Abre o painel local.' : 'Opens the local panel.'}</p></article>
          <article><code>GetSettings()</code><p>{pt ? 'Retorna cópia das preferências atuais.' : 'Returns a copy of current preferences.'}</p></article>
          <article><code>GetMetrics()</code><p>{pt ? 'Retorna snapshot das métricas; ready=false quando ainda não existe coleta válida.' : 'Returns a metrics snapshot; ready=false until valid capture exists.'}</p></article>
          <article><code>SetSuspended(boolean)</code><p>{pt ? 'Suspensão identificada por GetInvokingResource. Cada resource controla apenas a própria suspensão.' : 'Suspension is keyed by GetInvokingResource. Each resource controls only its own suspension.'}</p></article>
        </div>
      </section>

      <section className="docs-section" id="fps-config">
        <SectionTitle number="14" label={pt ? 'Configuração' : 'Configuration'} title={pt ? 'Os defaults públicos ficam em config.lua; autoridade administrativa e baselines ficam em server/config.lua.' : 'Public defaults live in config.lua; administrative authority and baselines live in server/config.lua.'} />
        <LuaCodeBlock>{"Config = {
    Command = 'fps',
    Key = 'F10',
    StorageKey = 'forge-fps:preferences:v1',
    AllowBloom = true,
    AllowCinematicBlur = true,
    MinimumBloom = 0.65,
    MinimumCinematicBlur = 0.75,
    BenchmarkSeconds = 10,
    AutoCooldownSeconds = 20,
    WindowSeconds = 10,
}"}</LuaCodeBlock>
        <div className="xt-note"><strong>Config.TestEffects</strong><p>{pt ? 'Define somente o estado inicial de cinco testes de renderização em instalação nova. Depois que uma policy é publicada, o arquivo administrativo salvo prevalece.' : 'Only defines initial defaults for five rendering tests on fresh installs. Once policy is published, the saved administrative policy takes precedence.'}</p></div>
      </section>

      <section className="docs-section" id="fps-fairness">
        <SectionTitle number="15" label={pt ? 'Justiça visual' : 'Visual fairness'} title={pt ? 'O Forge FPS diferencia otimização cosmética de ajustes que podem afetar leitura competitiva.' : 'Forge FPS distinguishes cosmetic optimization from settings that may affect competitive visibility.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="SAFE" title={pt ? 'Não remove mapa' : 'Does not remove the map'}>{pt ? 'Não apaga props, vegetação, colisão, projéteis, evidências ou partículas como estratégia genérica de “boost”.' : 'Does not delete props, vegetation, collision, projectiles, evidence or particles as a generic boost strategy.'}</Card>
          <Card eyebrow="WEATHER" title={pt ? 'Não muda clima' : 'Does not change weather'}>{pt ? 'O resource não altera relógio/clima e não tenta substituir sistemas como Renewed-Weathersync.' : 'The resource does not change clock/weather and does not replace systems such as Renewed-Weathersync.'}</Card>
          <Card eyebrow="ADMIN" title={pt ? 'Ajustes sensíveis são policy' : 'Sensitive settings are policy-bound'}>{pt ? 'LOD, população, decals, sombras, iluminação e efeitos exigem autorização.' : 'LOD, population, decals, shadows, lighting and effects require authorization.'}</Card>
          <Card eyebrow="MANUAL" title={pt ? 'Memória/Entity LOD manual' : 'Memory/entity LOD manual'}>{pt ? 'Budgets de modelos e varredura de objetos locais não são ativados automaticamente por presets fortes.' : 'Model budgets and local object scanning are not automatically enabled by aggressive presets.'}</Card>
        </div>
        <div className="xt-note warning"><strong>{pt ? 'Não é anti-cheat' : 'Not anti-cheat'}</strong><p>{pt ? 'A policy ajuda o servidor a estabelecer limites, mas o Forge FPS não garante igualdade visual universal nem substitui fiscalização competitiva.' : 'Policy helps servers define limits, but Forge FPS does not guarantee universal visual equality or replace competitive enforcement.'}</p></div>
      </section>

      <section className="docs-section" id="fps-dev">
        <SectionTitle number="16" label={pt ? 'Interface e desenvolvimento' : 'UI and development'} title={pt ? 'A NUI original fica em web/src e o FiveM consome somente web/dist.' : 'Original NUI source lives in web/src while FiveM consumes only web/dist.'} />
        <LuaCodeBlock>{"cd web
npm ci --ignore-scripts
npm run check
npm run build"}</LuaCodeBlock>
        <div className="crafting-feature-grid">
          <Card eyebrow="SVELTE" title="Svelte 5">{pt ? 'Painel moderno compilado para assets estáticos.' : 'Modern panel compiled to static assets.'}</Card>
          <Card eyebrow="LOCALE" title="pt-BR / en-US / es / fr">{pt ? 'O client lê o locale existente do PR Bridge através de GetCachedState(\'locale\') quando o bridge está iniciado.' : 'Client reads the existing PR Bridge locale through GetCachedState(\'locale\') when the bridge is running.'}</Card>
          <Card eyebrow="RUNTIME" title={pt ? 'Sem CDN/telemetria' : 'No CDN/telemetry'}>{pt ? 'A interface não depende de fontes/CDNs ou chamadas HTTP de telemetria em runtime.' : 'The UI does not depend on fonts/CDNs or runtime telemetry HTTP calls.'}</Card>
        </div>

        <div className="crafting-source-note">
          <span>{pt ? 'Resumo técnico' : 'Technical summary'}</span>
          <h2>{pt ? 'Forge FPS é um sistema de medição + ajuste + governança, não apenas um “FPS booster”.' : 'Forge FPS is a measurement + tuning + governance system, not just an “FPS booster”.'}</h2>
          <p>{pt ? 'A combinação entre catálogo tipado, validação shared, política server-side, controle exclusivo, restauração, benchmark e exports foi desenhada para permitir otimizações sem transformar cada player em autoridade absoluta sobre renderização e população do servidor.' : 'The combination of typed catalog, shared validation, server-side policy, exclusive control, restoration, benchmark and exports is designed to allow tuning without making every player an unrestricted authority over rendering and world population.'}</p>
        </div>
      </section>
    </div>
  );
}
