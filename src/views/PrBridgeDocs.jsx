import { useI18n } from '../i18n';

const API_MODULES = [
  ['core',14],['locale',8],['cache',10],['debug',9],['framework',169],['inventory',180],
  ['notification',5],['menu',15],['target',42],['phone',23],['progressbar',4],['weather',2],
  ['database',40],['fuel',3],['vehicle_key',41],['banking',10],['textui',5],['callback',10],
  ['ace',17],['addCommand',8],['addKeybind',3],['translator',8],['github',3],['utils',7],
  ['math',40],['table',14],['ids',2],['raycast',4],['net',12],['ui',6],['dui',60],
  ['tuning',17],['drawtext',17],['vehicleProperties',8],['streaming',50],['objects',52],
  ['vehicleCache',10],['blips',16],['devtools',14],['fivem aliases',28],
];

const PROVIDERS = {
  Frameworks: ['TMC / core','ND Core','ox_core','ESX','QBX','QBCore','Custom'],
  Inventories: ['ox_inventory','tgiann-inventory','core_inventory','ps-inventory','ak47_inventory','jaksam_inventory','qs-inventory','codem/minventory','origen_inventory','qb-inventory'],
  Notifications: ['ox_lib','okokNotify','mythic_notify','pNotify','17mov_Hud','codem-notification','ESX','QBCore'],
  Targets: ['ox_target','core_focus','qb-target','default'],
  TextUI: ['ox_lib','jg-textui','okokTextUI','cd_drawtextui','codem-textui','brutal_textui','default'],
  Banking: ['Renewed-Banking','qb-banking','okokBanking','tgiann-bank','kartik-banking','fd_banking'],
  Phones: ['qs-smartphone-pro','lb-phone','okokPhone','yseries'],
  Database: ['oxmysql','ghmattimysql','mysql-async'],
  Fuel: ['cdn-fuel','lc_fuel','LegacyFuel'],
  'Vehicle Keys': ['mm_carkeys','mri_Qcarkeys','qb-vehiclekeys','qbx_vehiclekeys','wasabi_carlock'],
};

const T = {
  en: {
    kicker:'Standalone compatibility & developer platform',
    lead:'PR Bridge is an independent FiveM compatibility and developer platform. It is not tied to Forge Framework: any resource can use it to normalize frameworks, inventories, databases, targets, menus, notifications, phones, banking, vehicle systems and native FiveM tooling behind one stable pr_lib API.',
    repo:'Repository', api:'API_FUNCTIONS.md', version:'Version', calls:'Documented calls', contexts:'Contexts', architecture:'Architecture',
    overviewTitle:'One stable API between your resource and the entire FiveM stack.',
    overviewP1:'The core loads without ox_lib, qb-core, qbx_core or any roleplay framework. Optional adapters are selected at runtime from the resources that are actually started.',
    overviewP2:'That means business logic can call pr_lib.framework, pr_lib.inventory, pr_lib.db, pr_lib.target, pr_lib.notifications and the rest without embedding provider-specific branches throughout the resource.',
    overviewP3:'The bridge is also a developer library: callbacks, typed commands, keybinds, ACE helpers, JSON/module loading, cache, translation, DUI, streaming, raycasts, object queries, vehicle utilities and placement tools are part of the same platform.',
    installTitle:'Install once, consume from any resource.', installP1:'Start pr_bridge before consumers and import @pr_bridge/init.lua as a shared script. Lua 5.4 is required by the importer.', installP2:'The importer builds a per-resource pr_lib facade, detects the active provider set and exposes normalized APIs plus native utilities.',
    architectureTitle:'Loader, provider detection, normalizers and native utilities are separate layers.', adaptersTitle:'Auto-detected providers with safe fallbacks and custom extension points.', adaptersP:'Provider priority is declared in bridge/config.lua. Framework and database can be forced, or left on auto. If no optional provider exists, the bridge falls back to its default implementation when available.',
    frameworkTitle:'Framework API: player, jobs, money, metadata and common framework contracts.', frameworkP:'The framework normalizer exposes a broad compatibility layer over QB/QBX, ESX, OX, ND, TMC and custom implementations. Inventory/banking helpers can also fill framework aliases when the selected framework does not provide them directly.',
    inventoryTitle:'Inventory API: items, slots, metadata, stashes, shops and inventory lifecycle.', inventoryP:'Inventory normalization handles naming differences such as count/amount, metadata/info and slot formats. The shared contract contains item checks, adds/removes, slot search, stashes, shops, drops, confiscation, restoration and metadata updates.',
    databaseTitle:'Database API: one contract over oxmysql, ghmattimysql and mysql-async.', databaseP:'Server-side database helpers normalize query/single/scalar/insert/update/transaction style calls. A backup subsystem can create/export SQL backups through the active adapter.',
    uiTitle:'UI & menus: provider-independent presentation primitives.', uiP:'Menus, notifications, TextUI, progress feedback and native DrawText helpers are separated from gameplay logic. Consumers can request a context menu, input dialog or notification without importing the provider directly.',
    targetTitle:'Target & interaction: zones and entity targeting through one API.', targetP:'Sphere, box and poly zones plus models, local/network entities, global players, peds, vehicles and objects are supported. Current providers include ox_target, core_focus and qb-target.',
    cacheTitle:'Cache: memoization, invalidation and player metadata caching.', cacheP:'Generic cache supports set/get, prefix clears, remember/call with timed invalidation and onChange listeners. GetPlayer/GetMetadata build on it, while vehicleCache manages per-vehicle snapshots and persistent metadata.',
    callbacksTitle:'Callbacks & events: request-response without framework-specific callbacks.', callbacksP:'Client and server namespaces support await, trigger, cancel and pending request inspection. Server code can also await/trigger callbacks on a specific client.',
    securityTitle:'Commands, keybinds & permissions.', securityP:'Typed commands understand strings, numbers, booleans, players and long strings; ACE/whitelist/job/group rules can gate execution. Keybinds support combinations and secondary mappings.',
    devTitle:'Developer tools: placement, zones, gizmo, laser and debug workflows.', devP:'The devtools layer creates objects/peds/vehicles, sphere/poly zones and interactive placement workflows. Gizmo and developer-laser modules are also exposed through pr_lib aliases.',
    fivemTitle:'FiveM utilities: streaming, vehicles, world queries, blips and raycasts.', fivemP:'The native layer covers asset streaming, entity creation, animations/interactions, vehicle properties/tuning, network resolution, radius searches, object pools, blip metadata and UI drawing.',
    duiTitle:'DUI: browser surfaces, render targets and interactive textures.', duiP:'The DUI API creates browser-backed surfaces and can render them as sprites, polys, render targets or replacement textures. It also forwards mouse events, controls focus and updates URL/opacity/brightness.',
    extendTitle:'Extending PR Bridge: add providers without changing downstream scripts.', extendP:'New adapters follow bridge/<category>/<provider>/<context>.lua. Add provider detection to ConfigBridge and implement the normalized contract. Custom framework stubs and normalizers let an adapter start small and grow incrementally.',
    apiTitle:'API catalog: 987 callable entries across 40 families.', apiP:'The repository index currently advertises 988 categorized calls; parsing the callable rows produces 987 function entries. The catalog below groups the callable surface by namespace.',
    noteRadial:'The current main/API index does not publish dedicated pr_lib.radial or pr_lib.interact namespaces. Target/focus, menus and interaction-animation APIs are documented exactly as they exist in source.', production:'Production guidance',
    source:'This page reflects Framework-Forge/pr_bridge main, fxmanifest version 1.0.9 and the current API_FUNCTIONS.md index.'
  },
  'pt-BR': {
    kicker:'Plataforma standalone de compatibilidade e desenvolvimento',
    lead:'PR Bridge é uma plataforma independente de compatibilidade e desenvolvimento para FiveM. Ela não depende da Forge Framework: qualquer resource pode usá-la para normalizar frameworks, inventários, bancos, targets, menus, notificações, telefones, banking, sistemas veiculares e ferramentas nativas do FiveM através de uma API pr_lib estável.',
    repo:'Repositório', api:'API_FUNCTIONS.md', version:'Versão', calls:'Chamadas documentadas', contexts:'Contextos', architecture:'Arquitetura',
    overviewTitle:'Uma API estável entre o seu resource e toda a stack FiveM.', overviewP1:'O core carrega sem ox_lib, qb-core, qbx_core ou qualquer framework RP. Adapters opcionais são escolhidos em runtime de acordo com os resources realmente iniciados.', overviewP2:'Assim, a regra de negócio pode usar pr_lib.framework, pr_lib.inventory, pr_lib.db, pr_lib.target, pr_lib.notifications e outros namespaces sem espalhar condicionais específicas de provider pelo código.', overviewP3:'O bridge também funciona como biblioteca de desenvolvimento: callbacks, comandos tipados, keybinds, ACE, loaders de JSON/módulos, cache, tradução, DUI, streaming, raycast, consultas de mundo, utilitários veiculares e placement fazem parte da mesma plataforma.',
    installTitle:'Instale uma vez e consuma de qualquer resource.', installP1:'Inicie pr_bridge antes dos consumidores e importe @pr_bridge/init.lua como shared script. O importador exige Lua 5.4.', installP2:'O import monta uma fachada pr_lib por resource, detecta os providers ativos e expõe APIs normalizadas junto das ferramentas nativas.',
    architectureTitle:'Loader, detecção de providers, normalizers e utilitários nativos são camadas separadas.', adaptersTitle:'Providers autodetectados, fallbacks seguros e pontos de expansão.', adaptersP:'A prioridade fica em bridge/config.lua. Framework e database podem ser forçados ou permanecer em auto. Na ausência de provider opcional, o bridge usa o adapter default quando disponível.',
    frameworkTitle:'API de Framework: player, jobs, dinheiro, metadata e contratos comuns.', frameworkP:'O framework normalizer cria uma camada de compatibilidade sobre QB/QBX, ESX, OX, ND, TMC e implementações custom. Helpers de inventory/banking também podem preencher aliases da framework quando o provider não oferece a função diretamente.',
    inventoryTitle:'API de Inventário: itens, slots, metadata, stashes, shops e lifecycle.', inventoryP:'A normalização trata diferenças como count/amount, metadata/info e formatos de slot. O contrato inclui checks, add/remove, busca por slot, stashes, shops, drops, apreensão, restauração e atualização de metadata.',
    databaseTitle:'API de Banco: um contrato sobre oxmysql, ghmattimysql e mysql-async.', databaseP:'Helpers server-side normalizam query/single/scalar/insert/update/transaction. Um subsistema de backup pode gerar/exportar backups SQL através do adapter ativo.',
    uiTitle:'UI e menus: primitivas visuais independentes do provider.', uiP:'Menus, notificações, TextUI, progress e DrawText ficam separados da regra de gameplay. O consumidor pede context menu, input dialog ou notify sem importar o provider.',
    targetTitle:'Target e interação: zones e targeting de entidades por uma API.', targetP:'Sphere, box e poly zones, models, entidades locais/network, players, peds, veículos e objetos globais são suportados. Providers atuais: ox_target, core_focus e qb-target.',
    cacheTitle:'Cache: memoização, invalidação e cache de player/metadata.', cacheP:'O cache genérico oferece set/get, clear por prefixo, remember/call com invalidação temporizada e listeners onChange. GetPlayer/GetMetadata reutilizam essa camada; vehicleCache cuida de snapshots e metadata persistente de veículos.',
    callbacksTitle:'Callbacks e eventos: request-response sem callback específico de framework.', callbacksP:'Client/server suportam await, trigger, cancel e inspeção de pendências. No servidor também é possível await/trigger diretamente em um client específico.',
    securityTitle:'Comandos, keybinds e permissões.', securityP:'Comandos tipados entendem string, number, boolean, player e longString; ACE/whitelist/job/group podem controlar execução. Keybinds suportam combos e mapping secundário.',
    devTitle:'Ferramentas dev: placement, zones, gizmo, laser e debug.', devP:'Devtools cria objects/peds/vehicles, sphere/poly zones e workflows de placement. Gizmo e developer laser também são expostos por aliases do pr_lib.',
    fivemTitle:'Utilitários FiveM: streaming, veículos, world queries, blips e raycast.', fivemP:'A camada nativa cobre streaming de assets, criação de entidade, animações/interações, propriedades/tuning, resolução network, buscas por raio/pool, blips e desenho UI.',
    duiTitle:'DUI: browser surfaces, render targets e texturas interativas.', duiP:'A API DUI cria surfaces baseadas em browser e renderiza como sprite, poly, render target ou replacement texture. Também encaminha mouse events, foco e mudanças de URL/opacidade/brilho.',
    extendTitle:'Expandindo o PR Bridge: adicione providers sem alterar scripts consumidores.', extendP:'Novos adapters seguem bridge/<categoria>/<provider>/<context>.lua. Adicione a detecção em ConfigBridge e implemente o contrato normalizado. Stubs de framework custom e normalizers permitem começar pequeno e evoluir.',
    apiTitle:'Catálogo da API: 987 entradas chamáveis em 40 famílias.', apiP:'O índice do repositório declara 988 chamadas categorizadas; o parsing das linhas chamáveis produz 987 funções. O catálogo abaixo agrupa a superfície real por namespace.',
    noteRadial:'A main/API atual não publica namespaces dedicados pr_lib.radial ou pr_lib.interact. Target/focus, menus e interaction animations são documentados exatamente como existem no código.', production:'Boas práticas de produção',
    source:'Esta página reflete Framework-Forge/pr_bridge main, fxmanifest versão 1.0.9 e o API_FUNCTIONS.md atual.'
  },
  es: {
    kicker:'Plataforma standalone de compatibilidad y desarrollo', lead:'PR Bridge es una plataforma independiente para FiveM. No depende de Forge Framework: cualquier recurso puede usarla para normalizar frameworks, inventarios, bases de datos, targets, menús, notificaciones, teléfonos, banking, vehículos y utilidades nativas mediante pr_lib.', repo:'Repositorio',api:'API_FUNCTIONS.md',version:'Versión',calls:'Llamadas documentadas',contexts:'Contextos',architecture:'Arquitectura',
    overviewTitle:'Una API estable entre tu recurso y toda la stack FiveM.', overviewP1:'El core carga sin framework u ox_lib; adapters opcionales se eligen en runtime.', overviewP2:'La lógica usa namespaces pr_lib sin ramas específicas del provider.', overviewP3:'También incluye callbacks, comandos, keybinds, ACE, loaders, cache, traducción, DUI, streaming, raycast, vehículos y devtools.',
    installTitle:'Instala una vez y úsalo desde cualquier recurso.', installP1:'Inicia pr_bridge antes e importa @pr_bridge/init.lua; Lua 5.4 es obligatorio.', installP2:'El import crea pr_lib por recurso y detecta providers activos.', architectureTitle:'Loader, detección, normalización y utilidades son capas separadas.', adaptersTitle:'Providers autodetectados y extensión custom.', adaptersP:'La prioridad vive en bridge/config.lua; framework/DB pueden forzarse o quedar en auto.',
    frameworkTitle:'API Framework: jugador, jobs, dinero y metadata.', frameworkP:'Normaliza QB/QBX, ESX, OX, ND, TMC y custom.', inventoryTitle:'API Inventario: items, slots, metadata, stashes y shops.', inventoryP:'Normaliza count/amount, metadata/info y slots, con ciclo completo de inventario.', databaseTitle:'API Database sobre oxmysql, ghmattimysql y mysql-async.', databaseP:'Normaliza queries y añade backups SQL.', uiTitle:'UI y menús independientes del provider.', uiP:'Context menus, input, alerts, notifications, TextUI y progress.', targetTitle:'Target e interacción mediante una API.', targetP:'Zones, modelos, entidades, players, peds y vehículos con ox_target/core_focus/qb-target.', cacheTitle:'Cache con memoización e invalidación.', cacheP:'set/get, clearPrefix, remember, onChange, player metadata y vehicleCache.', callbacksTitle:'Callbacks request-response.', callbacksP:'await/trigger/cancel/pending en client/server.', securityTitle:'Commands, keybinds y permisos.', securityP:'Tipos, ACE, whitelist, jobs/groups y combos de teclas.', devTitle:'Herramientas dev.', devP:'Placement, zones, gizmo, laser y debugging.', fivemTitle:'Utilidades FiveM.', fivemP:'Streaming, vehículos, queries del mundo, blips, raycasts y UI.', duiTitle:'DUI y texturas interactivas.', duiP:'Browser surfaces, sprites, poly, render targets, replacement textures y mouse/focus.', extendTitle:'Extender PR Bridge sin cambiar consumidores.', extendP:'Añade adapters bajo bridge/<category>/<provider>/<context>.lua.', apiTitle:'Catálogo API: 987 entradas en 40 familias.', apiP:'El índice anuncia 988; el parsing invocable produce 987.', noteRadial:'La main actual no publica pr_lib.radial o pr_lib.interact dedicados.', production:'Producción', source:'Basado en main v1.0.9 y API_FUNCTIONS.md actual.'
  },
  fr: {
    kicker:'Plateforme standalone de compatibilité et développement', lead:'PR Bridge est une plateforme indépendante pour FiveM. Elle n’est pas liée à Forge Framework : toute ressource peut normaliser frameworks, inventaires, DB, targets, menus, notifications, téléphones, banking, véhicules et outils natifs via pr_lib.', repo:'Dépôt',api:'API_FUNCTIONS.md',version:'Version',calls:'Appels documentés',contexts:'Contextes',architecture:'Architecture',
    overviewTitle:'Une API stable entre votre ressource et toute la stack FiveM.', overviewP1:'Le core charge sans framework ni ox_lib ; les adapters sont choisis au runtime.', overviewP2:'La logique consomme pr_lib sans branches propres au provider.', overviewP3:'Callbacks, commands, keybinds, ACE, loaders, cache, traduction, DUI, streaming, raycast, véhicules et devtools sont inclus.', installTitle:'Installez une fois, utilisez partout.', installP1:'Démarrez pr_bridge puis importez @pr_bridge/init.lua ; Lua 5.4 est requis.', installP2:'L’import crée pr_lib par ressource et détecte les providers actifs.', architectureTitle:'Loader, détection, normalisation et utilitaires sont séparés.', adaptersTitle:'Providers auto-détectés et extension custom.', adaptersP:'La priorité est dans bridge/config.lua ; framework/DB peuvent être forcés.', frameworkTitle:'API Framework : joueur, jobs, argent et metadata.', frameworkP:'Normalise QB/QBX, ESX, OX, ND, TMC et custom.', inventoryTitle:'API Inventaire : items, slots, metadata, stashes et shops.', inventoryP:'Normalise count/amount, metadata/info et slots.', databaseTitle:'API Database pour oxmysql, ghmattimysql et mysql-async.', databaseP:'Normalise les requêtes et ajoute les backups SQL.', uiTitle:'UI et menus indépendants du provider.', uiP:'Context menus, input, alerts, notifications, TextUI et progress.', targetTitle:'Target et interaction via une API.', targetP:'Zones, modèles, entités, players, peds, véhicules avec ox_target/core_focus/qb-target.', cacheTitle:'Cache avec memoization et invalidation.', cacheP:'set/get, clearPrefix, remember, onChange, player metadata et vehicleCache.', callbacksTitle:'Callbacks request-response.', callbacksP:'await/trigger/cancel/pending côté client/serveur.', securityTitle:'Commands, keybinds et permissions.', securityP:'Types, ACE, whitelist, jobs/groups et combinaisons.', devTitle:'Outils dev.', devP:'Placement, zones, gizmo, laser et debug.', fivemTitle:'Utilitaires FiveM.', fivemP:'Streaming, véhicules, world queries, blips, raycasts et UI.', duiTitle:'DUI et textures interactives.', duiP:'Browser surfaces, sprites, polys, render targets, replacement textures, souris/focus.', extendTitle:'Étendre PR Bridge sans changer les consommateurs.', extendP:'Ajoutez les adapters sous bridge/<category>/<provider>/<context>.lua.', apiTitle:'Catalogue API : 987 entrées dans 40 familles.', apiP:'L’index annonce 988 ; le parsing des appels donne 987.', noteRadial:'La main actuelle ne publie pas de pr_lib.radial ou pr_lib.interact dédié.', production:'Production', source:'Basé sur main v1.0.9 et API_FUNCTIONS.md actuel.'
  }
};

const Code=({children})=><pre className="bridge-code"><code>{children}</code></pre>;
const Card=({k,title,children})=><article className="bridge-card"><span>{k}</span><h3>{title}</h3><p>{children}</p></article>;

export default function PrBridgeDocs(){
  const {locale}=useI18n();
  const d=T[locale]||T.en;
  const total=API_MODULES.reduce((n,[,c])=>n+c,0);

  return <div className="bridge-docs">
    <header className="bridge-hero">
      <div>
        <div className="docs-eyebrow"><span className="docs-eyebrow-dot"/>{d.kicker}</div>
        <h1><span>PR</span> Bridge</h1>
        <p>{d.lead}</p>
        <div className="bridge-actions">
          <a className="docs-primary-button" href="https://github.com/Framework-Forge/pr_bridge" target="_blank" rel="noreferrer">{d.repo}</a>
          <a className="docs-secondary-button" href="https://github.com/Framework-Forge/pr_bridge/blob/main/API_FUNCTIONS.md" target="_blank" rel="noreferrer">{d.api}</a>
        </div>
        <div className="bridge-pill-row"><span>standalone</span><span>framework agnostic</span><span>expandable</span><span>developer toolkit</span></div>
      </div>
      <aside className="bridge-summary">
        <div className="bridge-summary-logo"><b>PR</b><strong>BRIDGE</strong></div>
        <dl>
          <div><dt>{d.version}</dt><dd>1.0.9</dd></div><div><dt>{d.calls}</dt><dd>{total}</dd></div>
          <div><dt>{d.contexts}</dt><dd>shared / server / client</dd></div><div><dt>{d.architecture}</dt><dd>standalone + adapters</dd></div>
        </dl>
      </aside>
    </header>

    <section className="bridge-section" id="bridge-overview">
      <div className="bridge-section-head"><span>01</span><div><p>PR Bridge</p><h2>{d.overviewTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.overviewP1}</p><p>{d.overviewP2}</p><p>{d.overviewP3}</p></div>
      <div className="bridge-stat-grid"><article><strong>987</strong><p>Callable API entries</p></article><article><strong>40</strong><p>API families</p></article><article><strong>3</strong><p>Runtime contexts</p></article><article><strong>0</strong><p>Required RP frameworks</p></article></div>
    </section>

    <section className="bridge-section" id="bridge-install">
      <div className="bridge-section-head"><span>02</span><div><p>Setup</p><h2>{d.installTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.installP1}</p><p>{d.installP2}</p></div>
      <Code>{"-- server.cfg\nensure pr_bridge\nensure my_resource\n\n-- my_resource/fxmanifest.lua\nfx_version 'cerulean'\ngame 'gta5'\nlua54 'yes'\n\nshared_scripts {\n    '@pr_bridge/init.lua',\n}\n\n-- anywhere after import\nprint(pr_lib.name)\nprint(pr_lib.context)\nprint(json.encode(pr_lib.activeBridges))"}</Code>
    </section>

    <section className="bridge-section" id="bridge-architecture">
      <div className="bridge-section-head"><span>03</span><div><p>Runtime</p><h2>{d.architectureTitle}</h2></div></div>
      <div className="bridge-card-grid">
        <Card k="LOAD" title="Resource loader">Loads Lua/JSON modules from the consumer or external resources and builds the local pr_lib facade.</Card>
        <Card k="DETECT" title="Provider detection">Reads ConfigBridge in priority order and records active providers in pr_lib.activeBridges.</Card>
        <Card k="NORMALIZE" title="API normalizers">Fills aliases and converts provider differences into a stable contract.</Card>
        <Card k="NATIVE" title="FiveM utilities">Exposes framework-independent streaming, entities, DUI, raycast, cache and dev workflows.</Card>
      </div>
      <div className="bridge-architecture-flow"><span>resource</span><b>→</b><span>@pr_bridge/init.lua</span><b>→</b><span>detect</span><b>→</b><span>normalize</span><b>→</b><span>pr_lib.*</span></div>
    </section>

    <section className="bridge-section" id="bridge-adapters">
      <div className="bridge-section-head"><span>04</span><div><p>Compatibility</p><h2>{d.adaptersTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.adaptersP}</p></div>
      <div className="bridge-provider-grid">{Object.entries(PROVIDERS).map(([name,items])=><article key={name}><h3>{name}</h3><div>{items.map(x=><span key={x}>{x}</span>)}</div></article>)}</div>
      <Code>{"Config = {\n    Framework = 'auto',\n    Database = 'auto',\n    Debug = false,\n    VersionCheck = true,\n}"}</Code>
    </section>

    <section className="bridge-section" id="bridge-framework">
      <div className="bridge-section-head"><span>05</span><div><p>pr_lib.framework</p><h2>{d.frameworkTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.frameworkP}</p></div>
      <div className="bridge-api-list"><code>GetPlayer / GetPlayerData / GetPlayerIdentifier</code><code>GetPlayerJob / PlayerHasJob / SetPlayerJob</code><code>GetPlayerMetadata / SetPlayerMetadata</code><code>GetAccountBalance / AddPlayerAccountBalance / RemovePlayerAccountBalance</code><code>GetClosestPlayer / GetClosestVehicle</code><code>RegisterUsableItem / RegisterCallback</code></div>
      <Code>{"local player = pr_lib.framework.GetPlayer(source)\nlocal identifier = pr_lib.framework.GetPlayerIdentifier(source)\nlocal job = pr_lib.framework.GetPlayerJob(source)\n\nif pr_lib.framework.PlayerHasJob(source, 'police', 2) then\n    pr_lib.framework.SetPlayerMetadata(source, 'clearance', 3)\nend\n\nlocal cash = pr_lib.framework.GetAccountBalance(source, 'cash')\npr_lib.framework.AddPlayerAccountBalance(source, 'bank', 500, 'mission_reward')"}</Code>
    </section>

    <section className="bridge-section" id="bridge-inventory">
      <div className="bridge-section-head"><span>06</span><div><p>pr_lib.inventory</p><h2>{d.inventoryTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.inventoryP}</p></div>
      <div className="bridge-card-grid two"><Card k="ITEMS" title="Items & metadata">HasItem, GetItemCount, GetItem, GetItemBySlot, labels, images and metadata aliases.</Card><Card k="MUTATION" title="Add / remove / clear">AddItem, RemoveItem, ClearInventory, SetMetadata, SetDurability and weight/slot controls.</Card><Card k="STORAGE" title="Stashes & shops">RegisterStash, OpenStash, AddStashItems, RegisterShop, OpenShop and temporary stashes.</Card><Card k="LIFECYCLE" title="Confiscation & restore">ConfiscateInventory, ReturnInventory, SaveInventory, LoadInventory, drops and vehicle inventory updates.</Card></div>
      <Code>{"if not pr_lib.inventory.CanCarryItem(source, 'repairkit', 1) then return end\n\npr_lib.inventory.AddItem(source, 'repairkit', 1, {\n    quality = 100,\n    serial = ('RK-%s'):format(source)\n})\n\nlocal count = pr_lib.inventory.GetItemCount(source, 'repairkit')\nlocal slot = pr_lib.inventory.GetSlotWithItem(source, 'repairkit')\n\nif slot then\n    pr_lib.inventory.SetMetadata(source, slot.slot, { quality = 85 })\nend"}</Code>
    </section>

    <section className="bridge-section" id="bridge-database">
      <div className="bridge-section-head"><span>07</span><div><p>pr_lib.db / pr_lib.database</p><h2>{d.databaseTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.databaseP}</p></div>
      <div className="bridge-api-list"><code>query / fetchAll / read</code><code>single</code><code>scalar</code><code>insert</code><code>update / execute / write</code><code>transaction</code><code>backup.create / export</code></div>
      <Code>{"local rows = pr_lib.db.query('SELECT * FROM garages WHERE owner = ?', { identifier })\nlocal garage = pr_lib.db.single('SELECT * FROM garages WHERE id = ?', { garageId })\nlocal count = pr_lib.db.scalar('SELECT COUNT(*) FROM garages')\n\nlocal id = pr_lib.db.insert(\n    'INSERT INTO garages (owner, name) VALUES (?, ?)',\n    { identifier, 'Downtown' }\n)"}</Code>
    </section>

    <section className="bridge-section" id="bridge-ui">
      <div className="bridge-section-head"><span>08</span><div><p>Menus / Notify / TextUI</p><h2>{d.uiTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.uiP}</p></div>
      <Code>{"pr_lib.menus.RegisterContext({\n    id = 'vehicle_menu',\n    title = 'Vehicle',\n    options = {\n        { title = 'Repair', onSelect = function() TriggerServerEvent('garage:repair') end },\n        { title = 'Store', onSelect = function() TriggerEvent('garage:store') end },\n    }\n})\npr_lib.menus.ShowContext('vehicle_menu')\n\nlocal result = pr_lib.menus.InputDialog('Create garage', {\n    { type = 'input', label = 'Name', required = true },\n})\n\npr_lib.notifications.Notify({ title='Garage', description='Saved', type='success' })"}</Code>
    </section>

    <section className="bridge-section" id="bridge-target">
      <div className="bridge-section-head"><span>09</span><div><p>pr_lib.target</p><h2>{d.targetTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.targetP}</p></div>
      <div className="bridge-api-list"><code>addSphereZone</code><code>addBoxZone</code><code>addPolyZone</code><code>addModel</code><code>addLocalEntity</code><code>addEntity</code><code>addGlobalPlayer</code><code>addGlobalVehicle</code><code>remove*</code></div>
      <Code>{"local zoneId = pr_lib.target.addSphereZone({\n    name = 'mechanic_bench',\n    coords = vec3(-340.0, -136.0, 39.0),\n    radius = 1.5,\n    options = {{\n        name = 'open_bench',\n        label = 'Open workbench',\n        icon = 'fa-solid fa-wrench',\n        onSelect = function() OpenWorkbench() end,\n    }}\n})\n\npr_lib.target.removeZone(zoneId)"}</Code>
      <div className="bridge-note warning"><strong>radial / interact</strong><p>{d.noteRadial}</p></div>
    </section>

    <section className="bridge-section" id="bridge-cache">
      <div className="bridge-section-head"><span>10</span><div><p>pr_lib.cache</p><h2>{d.cacheTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.cacheP}</p></div>
      <Code>{"local profile = pr_lib.cache.remember(('profile:%s'):format(source), function()\n    return pr_lib.db.single('SELECT * FROM profiles WHERE owner = ?', { identifier })\nend, 5000)\n\npr_lib.cache.onChange(('profile:%s'):format(source), function(newValue, oldValue)\n    print('profile cache changed')\nend)\n\npr_lib.cache.clearPrefix('profile:')\npr_lib.cache.InvalidatePlayer(source)\n\npr_lib.fivem.vehicleCache.set(vehicle, { plate = plate, props = props })\nlocal byPlate = pr_lib.fivem.vehicleCache.getByPlate(plate)"}</Code>
    </section>

    <section className="bridge-section" id="bridge-callbacks">
      <div className="bridge-section-head"><span>11</span><div><p>pr_lib.callback</p><h2>{d.callbacksTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.callbacksP}</p></div>
      <Code>{"-- server.lua\npr_lib.callback.register('garage:getVehicle', function(source, plate)\n    return pr_lib.db.single('SELECT * FROM vehicles WHERE plate = ?', { plate })\nend)\n\n-- client.lua\nlocal vehicle = pr_lib.callback.await('garage:getVehicle', 5000, plate)\n\n-- server -> client\nlocal clientValue = pr_lib.callback.awaitClient(source, 'garage:getLocalState', 3000)"}</Code>
    </section>

    <section className="bridge-section" id="bridge-security">
      <div className="bridge-section-head"><span>12</span><div><p>Commands / ACE / Keybinds</p><h2>{d.securityTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.securityP}</p></div>
      <Code>{"pr_lib.addCommand('setgarage', {\n    help = 'Assign a garage to a player',\n    jobs = { police = 3 },\n    params = {\n        { name='player', type='playerId' },\n        { name='garage', type='string' },\n    }\n}, function(source, params)\n    local target = params.values.player\n    local garage = params.values.garage\nend)\n\nif pr_lib.ace.canAccess(source, {\n    ace = 'garage.admin',\n    groups = { admin = 1 },\n    jobs = { police = 4 },\n}) then\n    -- authorized\nend\n\npr_lib.addKeybind({\n    name='garage_quick_menu',\n    description='Open garage quick menu',\n    keys='CTRL + G',\n    secondaryKey='F7',\n    onPressed=function() OpenGarageMenu() end,\n})"}</Code>
    </section>

    <section className="bridge-section" id="bridge-dev">
      <div className="bridge-section-head"><span>13</span><div><p>pr_lib.devtools</p><h2>{d.devTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.devP}</p></div>
      <Code>{"pr_lib.devtools.placeObject('prop_tool_bench02', 1, function(result)\n    if not result then return end\n    print(json.encode(result))\nend)\n\npr_lib.devtools.createSphereZone({ radius = 2.0, debug = true }, function(zone)\n    print(json.encode(zone))\nend)\n\nlocal gizmo = pr_lib.gizmo\nlocal laser = pr_lib.devlaser"}</Code>
    </section>

    <section className="bridge-section" id="bridge-fivem">
      <div className="bridge-section-head"><span>14</span><div><p>pr_lib.fivem</p><h2>{d.fivemTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.fivemP}</p></div>
      <div className="bridge-card-grid two"><Card k="STREAMING" title="Assets & entities">requestModel, requestAnimDict, createObject/Ped/Vehicle, setEntityTransform, playAction and playInteraction.</Card><Card k="VEHICLES" title="Properties & tuning">Network resolve, vehicle properties, mods, extras, neon, xenon, fuel, repair, snapshot and restore.</Card><Card k="WORLD" title="Objects & radius queries">Find objects, peds, pickups and vehicles by pool/model/radius and resolve closest entities.</Card><Card k="VISUAL" title="Blips, UI & raycast">Sprite/color metadata, asset URLs, camera raycasts and native 2D/3D drawing.</Card></div>
      <Code>{"local model = GetHashKey('sultan')\nlocal vehicle = pr_lib.fivem.streaming.createVehicle(model, vec3(0,0,72), 90.0, {\n    networked = true,\n})\n\nlocal props = pr_lib.vehicleProperties.get(vehicle)\nlocal snapshot = pr_lib.fivem.tuning.snapshot(vehicle)\npr_lib.fivem.tuning.setNeon(vehicle, true, { 255, 122, 26 })\n\nlocal closest = pr_lib.fivem.objects.getClosestVehicle(GetEntityCoords(PlayerPedId()), 25.0)"}</Code>
    </section>

    <section className="bridge-section" id="bridge-dui">
      <div className="bridge-section-head"><span>15</span><div><p>pr_lib.dui</p><h2>{d.duiTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.duiP}</p></div>
      <div className="bridge-api-list"><code>create / destroy</code><code>createSprite / startSprite</code><code>createPoly / startPoly</code><code>createRenderTarget</code><code>createReplaceTexture</code><code>sendMessage</code><code>enableMouse / focus</code><code>setUrl / opacity / brightness</code></div>
      <Code>{"local dui = pr_lib.dui.create({\n    id = 'garage_screen',\n    url = pr_lib.dui.url('ui/index.html'),\n    width = 1024,\n    height = 512,\n})\n\npr_lib.dui.sendMessage(dui, {\n    action = 'setVehicle',\n    vehicle = { name='Sultan', plate='FORGE' }\n})\n\npr_lib.dui.enableMouse(dui)\npr_lib.dui.sendMouseMove(dui, 512, 256)\npr_lib.dui.setOpacity(dui, 0.95)"}</Code>
    </section>

    <section className="bridge-section" id="bridge-expand">
      <div className="bridge-section-head"><span>16</span><div><p>Adapters</p><h2>{d.extendTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.extendP}</p></div>
      <Code>{"bridge/\n└── frameworks/\n    └── my_framework/\n        ├── client.lua\n        └── server.lua\n\n-- bridge/config.lua\nframeworks = {\n    { resource = 'my_framework', folder = 'my_framework' },\n}\n\n-- server.lua\nlocal framework = {}\nfunction framework.GetResourceName() return 'my_framework' end\nfunction framework.GetPlayer(source) return exports.my_framework:GetPlayer(source) end\nreturn framework"}</Code>
    </section>

    <section className="bridge-section" id="bridge-api">
      <div className="bridge-section-head"><span>17</span><div><p>API_FUNCTIONS.md</p><h2>{d.apiTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.apiP}</p></div>
      <div className="bridge-api-grid">{API_MODULES.map(([name,count])=><article key={name}><code>pr_lib.{name}</code><strong>{count}</strong><span>calls</span></article>)}</div>
      <div className="bridge-production"><h3>{d.production}</h3><div><span>01</span><p>Keep provider detection inside PR Bridge instead of branching on resource names inside business logic.</p></div><div><span>02</span><p>Validate money, inventory, permissions and protected state on the server; use client helpers for presentation and local FiveM behavior.</p></div><div><span>03</span><p>Invalidate cached authorization data when authoritative metadata changes.</p></div><div><span>04</span><p>Implement the smallest reliable normalized adapter contract first and let normalizers provide aliases where possible.</p></div></div>
    </section>

    <section className="bridge-source-note"><span>PR BRIDGE</span><h2>Source review</h2><p>{d.source}</p></section>
  </div>;
}
