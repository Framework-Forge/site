import { useI18n } from '../i18n';
import PrBridgeFunctionCatalog from '../components/PrBridgeFunctionCatalog';
import PrBridgeSourceAudit, { PR_BRIDGE_SOURCE_AUDIT_STATS } from '../components/PrBridgeSourceAudit';
import LuaCodeBlock from '../components/LuaCodeBlock';
import { PR_BRIDGE_API, PR_BRIDGE_API_COUNT, PR_BRIDGE_MODULES, PR_BRIDGE_SOURCE_VERSION } from '../data/prBridgeApi.generated';

const PROVIDERS = {
  Frameworks: ['TMC / core','ND Core','ox_core','ESX','QBX','QBCore','Custom'],
  Inventories: ['ox_inventory','tgiann-inventory','core_inventory','ps-inventory','ak47_inventory','jaksam_inventory','qs-inventory','codem/minventory','origen_inventory','qb-inventory'],
  Notifications: ['ox_lib','okokNotify','mythic_notify','pNotify','17mov_Hud','codem-notification','ESX','QBCore'],
  Targets: ['pr_bridge native','ox_target','core_focus','qb-target'],
  TextUI: ['ox_lib','jg-textui','okokTextUI','cd_drawtextui','codem-textui','brutal_textui','default'],
  Banking: ['Renewed-Banking','qb-banking','okokBanking','tgiann-bank','kartik-banking','fd_banking'],
  Phones: ['qs-smartphone-pro','lb-phone','okokPhone','yseries'],
  Progressbars: ['pr_bridge native','ox_lib','qb-core','es_extended'],
  Minigames: ['glitch-minigames','glitch-minigame','mhacking','ox_lib'],
  Weather: ['Renewed-Weathersync','cd_easytime','qb-weathersync','default'],
  Database: ['oxmysql','ghmattimysql','mysql-async'],
  Fuel: ['cdn-fuel','lc_fuel','LegacyFuel'],
  'Vehicle Keys': ['mm_carkeys','pr_carkeys','mri_Qcarkeys','qb-vehiclekeys','qbx_vehiclekeys','wasabi_carlock'],
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
    apiTitle:'API catalog synchronized from the current development source.', apiP:'The catalog is rebuilt from the current PR Bridge development source and its audited detailed-function document, then supplemented with public APIs present in the current runtime that are not yet listed in that document. The catalog below groups the callable surface by namespace.',
    noteRadial:'PR Bridge exposes a dedicated pr_lib.interact namespace with its own world-interaction runtime and NUI. Radial-menu helpers are exposed through the interface module and convenience aliases.', production:'Production guidance',
    source:'This documentation is audited against the current PR Bridge development source (v1.3.1). Public repository links remain under Framework-Forge/pr_bridge.'
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
    apiTitle:'Catálogo da API sincronizado com a fonte atual de desenvolvimento.', apiP:'O catálogo foi reconstruído a partir da fonte atual de desenvolvimento do PR Bridge e do documento auditado de funções detalhadas, complementado pelas APIs públicas presentes no runtime atual que ainda não constam nesse documento. O catálogo abaixo agrupa a superfície chamável por namespace.',
    noteRadial:'O PR Bridge expõe um namespace pr_lib.interact dedicado, com runtime próprio de interação no mundo e NUI. O menu radial é exposto pela interface e por aliases de conveniência.', production:'Boas práticas de produção',
    source:'Esta documentação foi auditada contra a fonte atual de desenvolvimento do PR Bridge (v1.3.1). Os links públicos continuam apontando para Framework-Forge/pr_bridge.'
  },
  es: {
    kicker:'Plataforma standalone de compatibilidad y desarrollo', lead:'PR Bridge es una plataforma independiente para FiveM. No depende de Forge Framework: cualquier recurso puede usarla para normalizar frameworks, inventarios, bases de datos, targets, menús, notificaciones, teléfonos, banking, vehículos y utilidades nativas mediante pr_lib.', repo:'Repositorio',api:'API_FUNCTIONS.md',version:'Versión',calls:'Llamadas documentadas',contexts:'Contextos',architecture:'Arquitectura',
    overviewTitle:'Una API estable entre tu recurso y toda la stack FiveM.', overviewP1:'El core carga sin framework u ox_lib; adapters opcionales se eligen en runtime.', overviewP2:'La lógica usa namespaces pr_lib sin ramas específicas del provider.', overviewP3:'También incluye callbacks, comandos, keybinds, ACE, loaders, cache, traducción, DUI, streaming, raycast, vehículos y devtools.',
    installTitle:'Instala una vez y úsalo desde cualquier recurso.', installP1:'Inicia pr_bridge antes e importa @pr_bridge/init.lua; Lua 5.4 es obligatorio.', installP2:'El import crea pr_lib por recurso y detecta providers activos.', architectureTitle:'Loader, detección, normalización y utilidades son capas separadas.', adaptersTitle:'Providers autodetectados y extensión custom.', adaptersP:'La prioridad vive en bridge/config.lua; framework/DB pueden forzarse o quedar en auto.',
    frameworkTitle:'API Framework: jugador, jobs, dinero y metadata.', frameworkP:'Normaliza QB/QBX, ESX, OX, ND, TMC y custom.', inventoryTitle:'API Inventario: items, slots, metadata, stashes y shops.', inventoryP:'Normaliza count/amount, metadata/info y slots, con ciclo completo de inventario.', databaseTitle:'API Database sobre oxmysql, ghmattimysql y mysql-async.', databaseP:'Normaliza queries y añade backups SQL.', uiTitle:'UI y menús independientes del provider.', uiP:'Context menus, input, alerts, notifications, TextUI y progress.', targetTitle:'Target e interacción mediante una API.', targetP:'Zones, modelos, entidades, players, peds y vehículos con ox_target/core_focus/qb-target.', cacheTitle:'Cache con memoización e invalidación.', cacheP:'set/get, clearPrefix, remember, onChange, player metadata y vehicleCache.', callbacksTitle:'Callbacks request-response.', callbacksP:'await/trigger/cancel/pending en client/server.', securityTitle:'Commands, keybinds y permisos.', securityP:'Tipos, ACE, whitelist, jobs/groups y combos de teclas.', devTitle:'Herramientas dev.', devP:'Placement, zones, gizmo, laser y debugging.', fivemTitle:'Utilidades FiveM.', fivemP:'Streaming, vehículos, queries del mundo, blips, raycasts y UI.', duiTitle:'DUI y texturas interactivas.', duiP:'Browser surfaces, sprites, poly, render targets, replacement textures y mouse/focus.', extendTitle:'Extender PR Bridge sin cambiar consumidores.', extendP:'Añade adapters bajo bridge/<category>/<provider>/<context>.lua.', apiTitle:'Catálogo API sincronizado con la fuente actual de desarrollo.', apiP:'El catálogo se reconstruye desde la fuente actual de desarrollo y el documento auditado de funciones, complementado con APIs públicas presentes en el runtime actual.', noteRadial:'PR Bridge expone pr_lib.interact con runtime/NUI propios y helpers de menú radial mediante la interfaz.', production:'Producción', source:'Auditado contra la fuente actual de desarrollo de PR Bridge (v1.3.1), manteniendo los enlaces públicos de Framework-Forge/pr_bridge.'
  },
  fr: {
    kicker:'Plateforme standalone de compatibilité et développement', lead:'PR Bridge est une plateforme indépendante pour FiveM. Elle n’est pas liée à Forge Framework : toute ressource peut normaliser frameworks, inventaires, DB, targets, menus, notifications, téléphones, banking, véhicules et outils natifs via pr_lib.', repo:'Dépôt',api:'API_FUNCTIONS.md',version:'Version',calls:'Appels documentés',contexts:'Contextes',architecture:'Architecture',
    overviewTitle:'Une API stable entre votre ressource et toute la stack FiveM.', overviewP1:'Le core charge sans framework ni ox_lib ; les adapters sont choisis au runtime.', overviewP2:'La logique consomme pr_lib sans branches propres au provider.', overviewP3:'Callbacks, commands, keybinds, ACE, loaders, cache, traduction, DUI, streaming, raycast, véhicules et devtools sont inclus.', installTitle:'Installez une fois, utilisez partout.', installP1:'Démarrez pr_bridge puis importez @pr_bridge/init.lua ; Lua 5.4 est requis.', installP2:'L’import crée pr_lib par ressource et détecte les providers actifs.', architectureTitle:'Loader, détection, normalisation et utilitaires sont séparés.', adaptersTitle:'Providers auto-détectés et extension custom.', adaptersP:'La priorité est dans bridge/config.lua ; framework/DB peuvent être forcés.', frameworkTitle:'API Framework : joueur, jobs, argent et metadata.', frameworkP:'Normalise QB/QBX, ESX, OX, ND, TMC et custom.', inventoryTitle:'API Inventaire : items, slots, metadata, stashes et shops.', inventoryP:'Normalise count/amount, metadata/info et slots.', databaseTitle:'API Database pour oxmysql, ghmattimysql et mysql-async.', databaseP:'Normalise les requêtes et ajoute les backups SQL.', uiTitle:'UI et menus indépendants du provider.', uiP:'Context menus, input, alerts, notifications, TextUI et progress.', targetTitle:'Target et interaction via une API.', targetP:'Zones, modèles, entités, players, peds, véhicules avec ox_target/core_focus/qb-target.', cacheTitle:'Cache avec memoization et invalidation.', cacheP:'set/get, clearPrefix, remember, onChange, player metadata et vehicleCache.', callbacksTitle:'Callbacks request-response.', callbacksP:'await/trigger/cancel/pending côté client/serveur.', securityTitle:'Commands, keybinds et permissions.', securityP:'Types, ACE, whitelist, jobs/groups et combinaisons.', devTitle:'Outils dev.', devP:'Placement, zones, gizmo, laser et debug.', fivemTitle:'Utilitaires FiveM.', fivemP:'Streaming, véhicules, world queries, blips, raycasts et UI.', duiTitle:'DUI et textures interactives.', duiP:'Browser surfaces, sprites, polys, render targets, replacement textures, souris/focus.', extendTitle:'Étendre PR Bridge sans changer les consommateurs.', extendP:'Ajoutez les adapters sous bridge/<category>/<provider>/<context>.lua.', apiTitle:'Catalogue API synchronisé avec la source de développement actuelle.', apiP:'Le catalogue est reconstruit depuis la source de développement actuelle et le document audité des fonctions, complété par les APIs publiques présentes dans le runtime actuel.', noteRadial:'PR Bridge expose pr_lib.interact avec son propre runtime/NUI et des helpers de menu radial via l’interface.', production:'Production', source:'Audité contre la source de développement actuelle de PR Bridge (v1.3.1), tout en conservant les liens publics Framework-Forge/pr_bridge.'
  }
};

const Code=({children})=><LuaCodeBlock>{children}</LuaCodeBlock>;
const Card=({k,title,children})=><article className="bridge-card"><span>{k}</span><h3>{title}</h3><p>{children}</p></article>;

const TOPICS = [
  'bridge-overview','bridge-install','bridge-architecture','bridge-adapters','bridge-framework','bridge-inventory',
  'bridge-database','bridge-ui','bridge-target','bridge-cache','bridge-callbacks','bridge-security',
  'bridge-dev','bridge-fivem','bridge-dui','bridge-expand','bridge-api','bridge-source-audit'
];

const TOPIC_MODULES = {
  'bridge-architecture': ['core','locale','utils','math','table','ids'],
  'bridge-framework': ['framework'],
  'bridge-inventory': ['inventory'],
  'bridge-database': ['database'],
  'bridge-ui': ['notification','menu','radial','progressbar','textui_adapter','fivem.ui','fivem.drawtext'],
  'bridge-target': ['target','interact'],
  'bridge-cache': ['cache','fivem.vehicleCache'],
  'bridge-callbacks': ['callback','events'],
  'bridge-security': ['ace','addcommand','addkeybind'],
  'bridge-dev': ['fivem.devtools','fivem.editorCamera','fivem.gizmo','fivem.devlaser','fivem.instructionalButtons','fivem.identifiers','debug','github','translator'],
  'bridge-fivem': ['fivem.raycast','fivem.net','fivem.tuning','fivem.vehicleProperties','fivem.streaming','fivem.objects','fivem.blips','fuel','vehicle_key','weather','phone','banking'],
  'bridge-dui': ['fivem.dui'],
};

const TOPIC_NAMES = {
  'bridge-overview':'Overview','bridge-install':'Installation','bridge-architecture':'Architecture','bridge-adapters':'Adapters',
  'bridge-framework':'Framework API','bridge-inventory':'Inventory API','bridge-database':'Database API','bridge-ui':'UI & menus',
  'bridge-target':'Target & interaction','bridge-cache':'Cache','bridge-callbacks':'Callbacks & events',
  'bridge-security':'Commands & permissions','bridge-dev':'Developer tools','bridge-fivem':'FiveM utilities',
  'bridge-dui':'DUI','bridge-expand':'Extending PR Bridge','bridge-api':'API catalog','bridge-source-audit':'Source audit'
};

function ReferenceBlock({ locale, modules, searchable = false, extraSignatures = [] }) {
  if (!modules && !searchable) return null;
  return (
    <div className="bridge-reference-block">
      <div className="bridge-reference-heading">
        <span>FUNCTION REFERENCE</span>
        <h3>{searchable ? 'Complete PR Bridge API' : 'Functions in this topic'}</h3>
        <p>{locale === 'pt-BR'
          ? 'Cada função abaixo é catalogada com assinatura, contexto de execução, parâmetros, comportamento esperado e um exemplo individual de chamada.'
          : locale === 'es'
            ? 'Cada función se cataloga con firma, contexto, parámetros, comportamiento esperado y un ejemplo individual.'
            : locale === 'fr'
              ? 'Chaque fonction est cataloguée avec signature, contexte, paramètres, comportement attendu et exemple individuel.'
              : 'Every function below is cataloged with signature, runtime context, parameters, expected behavior and an individual usage example.'}</p>
      </div>
      <PrBridgeFunctionCatalog locale={locale} modules={modules} searchable={searchable} extraSignatures={extraSignatures} />
    </div>
  );
}

function TopicNav({ topic, onNavigateTopic }) {
  const index = TOPICS.indexOf(topic);
  const prev = index > 0 ? TOPICS[index - 1] : null;
  const next = index < TOPICS.length - 1 ? TOPICS[index + 1] : null;
  return (
    <nav className="bridge-page-nav">
      {prev ? <button type="button" onClick={() => onNavigateTopic?.(prev)}><span>← Previous</span><strong>{TOPIC_NAMES[prev]}</strong></button> : <span />}
      {next ? <button type="button" onClick={() => onNavigateTopic?.(next)}><span>Next →</span><strong>{TOPIC_NAMES[next]}</strong></button> : <span />}
    </nav>
  );
}

function TopicHeader({ number, eyebrow, title, text }) {
  return (
    <header className="bridge-topic-header">
      <div className="bridge-section-head">
        <span>{number}</span>
        <div><p>{eyebrow}</p><h1>{title}</h1></div>
      </div>
      {text && <p className="bridge-topic-lead">{text}</p>}
    </header>
  );
}

export default function PrBridgeDocs({ topic = 'bridge-overview', onNavigateTopic }) {
  const {locale}=useI18n();
  const d=T[locale]||T.en;
  const total=PR_BRIDGE_API_COUNT;

  const commonFooter = (
    <>
      <TopicNav topic={topic} onNavigateTopic={onNavigateTopic} />
      <section className="bridge-source-note"><span>PR BRIDGE</span><h2>Source review</h2><p>{d.source}</p></section>
    </>
  );

  if (topic === 'bridge-overview') return <div className="bridge-docs bridge-docs-page">
    <header className="bridge-hero">
      <div>
        <div className="docs-eyebrow"><span className="docs-eyebrow-dot"/>{d.kicker}</div>
        <h1><span>PR</span> Bridge</h1>
        <p>{d.lead}</p>
        <div className="bridge-actions">
          <a className="docs-primary-button" href="https://github.com/Framework-Forge/pr_bridge" target="_blank" rel="noreferrer">{d.repo}</a>
        </div>
        <div className="bridge-pill-row"><span>standalone</span><span>framework agnostic</span><span>expandable</span><span>developer toolkit</span></div>
      </div>
      <aside className="bridge-summary">
        <div className="bridge-summary-logo"><b>PR</b><strong>BRIDGE</strong></div>
        <dl>
          <div><dt>{d.version}</dt><dd>{PR_BRIDGE_SOURCE_VERSION}</dd></div>
          <div><dt>{d.calls}</dt><dd>{total}</dd></div>
          <div><dt>{d.contexts}</dt><dd>shared / server / client</dd></div>
          <div><dt>{d.architecture}</dt><dd>standalone + adapters</dd></div>
        </dl>
      </aside>
    </header>
    <section className="bridge-page-body">
      <TopicHeader number="01" eyebrow="PR Bridge" title={d.overviewTitle} />
      <div className="bridge-prose"><p>{d.overviewP1}</p><p>{d.overviewP2}</p><p>{d.overviewP3}</p></div>
      <div className="bridge-stat-grid bridge-overview-stat-grid"><article><strong>{PR_BRIDGE_API_COUNT}</strong><p>Callable API entries</p></article><article><strong>{PR_BRIDGE_MODULES.length}</strong><p>API families</p></article><article><strong>3</strong><p>Runtime contexts</p></article><article><strong>0</strong><p>Required RP frameworks</p></article></div>
      <div className="bridge-card-grid two bridge-overview-feature-grid">
        <Card k="COMPAT" title="Compatibility layer">Resources depend on one contract while PR Bridge handles the active framework/provider underneath.</Card>
        <Card k="DX" title="Developer platform">The same import also provides cache, callbacks, commands, translation, streaming, DUI and editor-oriented utilities.</Card>
        <Card k="PORTABLE" title="Portable resources">Move a script between supported stacks without rewriting its business rules around provider names.</Card>
        <Card k="CUSTOM" title="Custom providers">Implement a new adapter or custom framework and keep downstream resources unchanged.</Card>
      </div>
    </section>
    {commonFooter}
  </div>;

  if (topic === 'bridge-install') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="02" eyebrow="Setup" title={d.installTitle} text={d.installP1} />
    <div className="bridge-prose"><p>{d.installP2}</p></div>
    <Code>{"-- server.cfg\nensure pr_bridge\nensure my_resource\n\n-- my_resource/fxmanifest.lua\nfx_version 'cerulean'\ngame 'gta5'\nlua54 'yes'\n\nshared_scripts {\n    '@pr_bridge/init.lua',\n}\n\n-- after import\nprint(pr_lib.name)\nprint(pr_lib.context)\nprint(json.encode(pr_lib.activeBridges))"}</Code>
    <div className="bridge-note"><strong>Load order</strong><p>pr_bridge must be started before every resource that imports @pr_bridge/init.lua. Importing twice or consuming it without Lua 5.4 is rejected by the loader.</p></div>
    {commonFooter}
  </div>;

  if (topic === 'bridge-architecture') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="03" eyebrow="Runtime" title={d.architectureTitle} />
    <div className="bridge-card-grid">
      <Card k="LOAD" title="Resource loader">Loads Lua/JSON modules from the consumer or external resources and builds the resource-local pr_lib facade.</Card>
      <Card k="DETECT" title="Provider detection">Reads bridge/config.lua in priority order and records active providers in pr_lib.activeBridges.</Card>
      <Card k="NORMALIZE" title="API normalizers">Converts provider naming and return-shape differences into stable contracts and compatibility aliases.</Card>
      <Card k="NATIVE" title="Native utilities">Keeps framework-independent helpers such as cache, locale, math, table, IDs and resource loading available everywhere.</Card>
    </div>
    <div className="bridge-architecture-flow"><span>resource</span><b>→</b><span>@pr_bridge/init.lua</span><b>→</b><span>detect</span><b>→</b><span>normalize</span><b>→</b><span>pr_lib.*</span></div>
    <Code>{"-- Shared utility examples\nlocal config = pr_lib.loadJson('@my_resource/data/config', true)\nlocal translated = pr_lib.locale('garage.open')\nlocal value = pr_lib.math.clamp(health, 0, 100)\nlocal copy = pr_lib.table.deepCopy(payload)"}</Code>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-adapters') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="04" eyebrow="Compatibility" title={d.adaptersTitle} text={d.adaptersP} />
    <div className="bridge-provider-grid">{Object.entries(PROVIDERS).map(([name,items])=><article key={name}><h3>{name}</h3><div>{items.map((item)=><span key={item}>{item}</span>)}</div></article>)}</div>
    <Code>{"Config = {\n    Framework = 'auto',\n    Database = 'auto',\n    Debug = false,\n    VersionCheck = true,\n}"}</Code>
    <div className="bridge-note"><strong>Selection model</strong><p>Auto mode walks each provider list in priority order and selects the first started compatible resource. Consumers continue to call the same pr_lib API.</p></div>
    {commonFooter}
  </div>;

  if (topic === 'bridge-framework') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="05" eyebrow="pr_lib.framework" title={d.frameworkTitle} text={d.frameworkP} />
    <div className="bridge-card-grid two">
      <Card k="PLAYER" title="Player identity & state">Resolve framework player objects, identifiers, source/player data, metadata, job/gang and framework-specific identity fields through one contract.</Card>
      <Card k="ECONOMY" title="Accounts & money">Read, add, remove and set balances without calling QB/ESX/OX APIs directly in business logic.</Card>
      <Card k="JOBS" title="Jobs, groups & grades">Inspect jobs/gangs, compare grades, update player groups and expose common permission helpers.</Card>
      <Card k="LIFECYCLE" title="Framework lifecycle">Register usable items/callbacks, access closest entities/players and bridge framework events through normalized helpers.</Card>
    </div>
    <Code>{"local player = pr_lib.framework.GetPlayer(source)\nlocal identifier = pr_lib.framework.GetPlayerIdentifier(source)\nlocal job = pr_lib.framework.GetPlayerJob(source)\n\nif pr_lib.framework.PlayerHasJob(source, 'police', 2) then\n    pr_lib.framework.SetPlayerMetadata(source, 'clearance', 3)\nend\n\nlocal cash = pr_lib.framework.GetAccountBalance(source, 'cash')\npr_lib.framework.AddPlayerAccountBalance(source, 'bank', 500, 'mission_reward')"}</Code>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-inventory') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="06" eyebrow="pr_lib.inventory" title={d.inventoryTitle} text={d.inventoryP} />
    <div className="bridge-card-grid two">
      <Card k="ITEMS" title="Items & metadata">Normalize item names, amounts/counts, slots, metadata/info fields, labels and images.</Card>
      <Card k="MUTATION" title="Add / remove / clear">Mutate player inventories while preserving the active provider contract.</Card>
      <Card k="STORAGE" title="Stashes & shops">Register/open stashes, temporary storage and shops through normalized operations.</Card>
      <Card k="LIFECYCLE" title="Confiscation & restore">Save, confiscate, restore and migrate inventory payloads without binding your script to one inventory resource.</Card>
    </div>
    <Code>{"if not pr_lib.inventory.CanCarryItem(source, 'repairkit', 1) then return end\n\npr_lib.inventory.AddItem(source, 'repairkit', 1, {\n    quality = 100,\n    serial = ('RK-%s'):format(source)\n})\n\nlocal count = pr_lib.inventory.GetItemCount(source, 'repairkit')\nlocal slot = pr_lib.inventory.GetSlotWithItem(source, 'repairkit')"}</Code>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-database') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="07" eyebrow="pr_lib.db / pr_lib.database" title={d.databaseTitle} text={d.databaseP} />
    <Code>{"local rows = pr_lib.db.query('SELECT * FROM garages WHERE owner = ?', { identifier })\nlocal garage = pr_lib.db.single('SELECT * FROM garages WHERE id = ?', { garageId })\nlocal count = pr_lib.db.scalar('SELECT COUNT(*) FROM garages')\nlocal id = pr_lib.db.insert('INSERT INTO garages (owner, name) VALUES (?, ?)', { identifier, 'Downtown' })"}</Code>
    <div className="bridge-note"><strong>Adapter boundary</strong><p>Keep SQL semantics in your resource, but keep driver-specific invocation details inside PR Bridge. This is what allows oxmysql, ghmattimysql and mysql-async to share one consumer API.</p></div>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-ui') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader
      number="08"
      eyebrow="Native UI / Menus / Radial / Notify / TextUI"
      title={d.uiTitle}
      text={locale === 'pt-BR'
        ? 'A interface do PR Bridge é uma camada própria, hospedada pelo próprio resource, com frontend Svelte/Vue e módulos para context menu, register menu, input, alert, notify, bubble, TextUI, radial menu, progress, skillcheck e configuração visual global.'
        : d.uiP}
    />

    <div className="bridge-card-grid two">
      <Card k="CONTEXT" title="Context & registered menus">RegisterContext/ShowContext e RegisterMenu/ShowMenu compartilham o host NUI e mantêm o resource consumidor desacoplado do provider visual.</Card>
      <Card k="INPUT" title="Input & Alert dialogs">InputDialog suporta input, number, checkbox, select, multi-select, slider, color, date, date-range, time e textarea, com validação e tamanhos configuráveis.</Card>
      <Card k="RADIAL" title="Radial menu">O menu radial possui registro de submenus, itens raiz, callbacks por resource, navegação, keepOpen, disable e estado do menu atual.</Card>
      <Card k="VISUAL" title="Global visual editor">O admin pode editar paleta, posições, target, interact e outros módulos; a configuração é persistida em interface/data/config.json e replicada via GlobalState.</Card>
    </div>

    <h3 className="bridge-subtitle">Context menu</h3>
    <Code>{"pr_lib.registerContext({\n    id = 'vehicle_menu',\n    title = 'Vehicle',\n    options = {\n        {\n            title = 'Repair',\n            icon = 'wrench',\n            onSelect = function()\n                TriggerServerEvent('garage:repair')\n            end,\n        },\n        {\n            title = 'Store',\n            icon = 'car-front-fill',\n            onSelect = function()\n                TriggerEvent('garage:store')\n            end,\n        },\n    }\n})\n\npr_lib.showContext('vehicle_menu')"}</Code>

    <h3 className="bridge-subtitle">Input dialog</h3>
    <Code>{"local values = pr_lib.inputDialog('Create garage', {\n    { type = 'input', label = 'Name', required = true },\n    { type = 'number', label = 'Slots', default = 10, min = 1, max = 100, step = 1 },\n    { type = 'color', label = 'Theme color', default = '#ff7a1a' },\n    {\n        type = 'select',\n        label = 'Access',\n        options = {\n            { value = 'public', label = 'Public' },\n            { value = 'private', label = 'Private' },\n        }\n    },\n    { type = 'checkbox', label = 'Enabled', checked = true },\n}, {\n    size = 'md',\n    allowCancel = true,\n})\n\nif not values then return end"}</Code>

    <h3 className="bridge-subtitle">Radial menu</h3>
    <Code>{"pr_lib.registerRadial({\n    id = 'vehicle_actions',\n    items = {\n        {\n            id = 'vehicle_lock',\n            label = 'Lock / Unlock',\n            icon = 'lock-fill',\n            onSelect = function(menuId, index)\n                ToggleVehicleLock()\n            end,\n        },\n        {\n            id = 'vehicle_engine',\n            label = 'Engine',\n            icon = 'power',\n            keepOpen = true,\n            onSelect = function()\n                ToggleEngine()\n            end,\n        },\n    }\n})\n\npr_lib.addRadialItem({\n    id = 'vehicle',\n    label = 'Vehicle',\n    icon = 'car-front-fill',\n    menu = 'vehicle_actions',\n})\n\n-- Remove only one root item later\npr_lib.removeRadialItem('vehicle')\n\n-- Or clear all radial items owned by this resource\npr_lib.clearRadialItems()"}</Code>

    <h3 className="bridge-subtitle">Notifications and TextUI</h3>
    <Code>{"pr_lib.Notify({\n    title = 'Garage',\n    description = 'Vehicle stored successfully.',\n    type = 'success',\n    duration = 3500,\n})\n\npr_lib.showTextUI('[E] Open garage', {\n    position = 'right-center',\n})\n\n-- later\npr_lib.hideTextUI()"}</Code>

    <div className="bridge-note">
      <strong>Radial controls and ownership</strong>
      <p>O host NUI mantém itens e submenus separados por resource. O menu padrão usa F1 através do keybind (pr_bridge) Menu radial; Escape/F1 fecha a interface. Itens podem abrir submenus ou executar callbacks/eventos registrados pelo resource que os criou.</p>
    </div>

    <div className="bridge-note">
      <strong>Svelte / Vue</strong>
      <p>Config.ui_interface seleciona a interface desejada. O host permanece centralizado no pr_bridge; recursos consumidores enviam ações para a mesma NUI em vez de criar browsers/interfaces duplicadas.</p>
    </div>

    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-target') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader
      number="09"
      eyebrow="pr_lib.target + pr_lib.interact"
      title={d.targetTitle}
      text={locale === 'pt-BR'
        ? 'Target e Interact são sistemas diferentes. Target trabalha com mira/seleção sobre entidades e zonas; Interact mantém pontos persistentes no mundo, renderiza sua própria interface NUI e executa a opção selecionada pela tecla configurável.'
        : locale === 'es'
          ? 'Target e Interact son sistemas distintos. Target usa selección por objetivo; Interact mantiene puntos persistentes en el mundo, renderiza su propia NUI y ejecuta opciones con una tecla configurable.'
          : locale === 'fr'
            ? 'Target et Interact sont deux systèmes distincts. Target utilise la sélection par visée ; Interact maintient des points persistants dans le monde avec sa propre NUI et une touche configurable.'
            : 'Target and Interact are separate systems. Target is aim/selection based; Interact keeps persistent world interactions, renders its own NUI and executes the selected option through a configurable key.'}
    />

    <div className="bridge-card-grid two">
      <Card k="TARGET" title="Target engine">Zones, models, entities, players, peds, vehicles, objects and pickups can be registered through the normalized target API. Native target is one supported provider alongside ox_target, core_focus and qb-target.</Card>
      <Card k="INTERACT" title="World Interact runtime">pr_lib.interact owns a separate persistent registry, proximity scanner, LOS checks, group filters, option selection and a dedicated world-space NUI.</Card>
      <Card k="NUI" title="Dedicated interface">Nearby points are projected to screen coordinates and rendered by WorldInteract.svelte. The active point shows the key and options; mouse wheel or up/down changes the selected option.</Card>
      <Card k="CLEANUP" title="Resource ownership">Every interaction records the creating resource. When that resource stops, its records are removed automatically by the central runtime.</Card>
    </div>

    <h3 className="bridge-subtitle">Target example</h3>
    <Code>{"local zoneId = pr_lib.target.addSphereZone({\n    name = 'mechanic_bench',\n    coords = vec3(-340.0, -136.0, 39.0),\n    radius = 1.5,\n    options = {{\n        name = 'open_bench',\n        label = 'Open workbench',\n        icon = 'fa-solid fa-wrench',\n        onSelect = function()\n            OpenWorkbench()\n        end,\n    }}\n})\n\npr_lib.target.removeZone(zoneId)"}</Code>

    <h3 className="bridge-subtitle">World Interact — coordinates</h3>
    <Code>{"local interactionId = pr_lib.interact.AddInteraction({\n    id = 'mechanic:counter',\n    name = 'mechanic-counter',\n    coords = vec3(-339.86, -137.02, 39.01),\n    distance = 8.0,\n    interactDst = 1.5,\n    groups = { mechanic = 0 },\n    options = {\n        {\n            name = 'mechanic:open',\n            label = 'Open workbench',\n            args = { bench = 'main' },\n            canInteract = function(entity, coords, args)\n                return not IsPedDeadOrDying(PlayerPedId(), true)\n            end,\n            action = function(entity, coords, args)\n                OpenWorkbench(args.bench)\n            end,\n        },\n        {\n            name = 'mechanic:stock',\n            label = 'Check stock',\n            serverEvent = 'mechanic:server:openStock',\n            args = { stash = 'mechanic_main' },\n        },\n    }\n})"}</Code>

    <h3 className="bridge-subtitle">Entity, bone and model interactions</h3>
    <Code>{"-- local entity\npr_lib.interact.AddLocalEntityInteraction({\n    entity = vehicle,\n    distance = 6.0,\n    interactDst = 1.2,\n    offset = vec3(0.0, -2.2, 0.4),\n    options = {\n        { name = 'trunk', label = 'Open trunk', event = 'garage:client:trunk' }\n    }\n})\n\n-- entity bone\npr_lib.interact.AddEntityBoneInteraction({\n    entity = vehicle,\n    bone = 'boot',\n    offset = vec3(0.0, 0.0, 0.15),\n    options = {\n        { name = 'inspect_boot', label = 'Inspect trunk', action = InspectTrunk }\n    }\n})\n\n-- any matching model\npr_lib.interact.AddModelInteraction({\n    models = { 'prop_atm_01', 'prop_atm_02' },\n    distance = 10.0,\n    interactDst = 1.4,\n    options = {\n        { name = 'atm', label = 'Use ATM', event = 'banking:client:openAtm' }\n    }\n})"}</Code>

    <h3 className="bridge-subtitle">Network and global interactions</h3>
    <Code>{"pr_lib.interact.AddEntityInteraction({\n    netId = NetworkGetNetworkIdFromEntity(vehicle),\n    distance = 7.0,\n    interactDst = 1.5,\n    options = {\n        { name = 'inspect_vehicle', label = 'Inspect vehicle', action = InspectVehicle }\n    }\n})\n\npr_lib.interact.AddGlobalVehicleInteraction({\n    distance = 5.0,\n    interactDst = 1.3,\n    options = {\n        { name = 'vehicle_info', label = 'Vehicle info', action = ShowVehicleInfo }\n    }\n})\n\npr_lib.interact.AddGlobalPlayerInteraction({\n    distance = 4.0,\n    interactDst = 1.2,\n    options = {\n        { name = 'player_id', label = 'Check player', action = InspectPlayer }\n    }\n})"}</Code>

    <h3 className="bridge-subtitle">Update, remove and disable</h3>
    <Code>{"pr_lib.interact.UpdateInteraction(interactionId, {\n    { name = 'updated', label = 'Updated option', action = UpdatedAction }\n})\n\npr_lib.interact.RemoveInteractionOption(interactionId, 'updated')\npr_lib.interact.RemoveInteraction(interactionId)\n\n-- Temporarily disables all Interact detection/UI for the local player.\npr_lib.interact.Disable(true)\npr_lib.interact.Disable(false)"}</Code>

    <div className="bridge-card-grid two">
      <Card k="FILTER" title="Groups & canInteract">groups accepts a group/job name, list or grade map. Each option may also define groups and canInteract(entity, coords, args).</Card>
      <Card k="DISPATCH" title="Option dispatch">An Interact option may execute action(entity, coords, args, serverId), serverEvent, event or command.</Card>
      <Card k="DISTANCE" title="Two distance levels">distance controls discovery range. interactDst controls when the point becomes actionable and its option list/key becomes active.</Card>
      <Card k="LOS" title="Walls & visibility">Line-of-sight checking is enabled by default and can be bypassed per record with ignoreLos. A record can hide only its NUI marker without disabling detection.</Card>
    </div>

    <div className="bridge-note">
      <strong>Interact controls</strong>
      <p>The default interaction key is E (convar pr_bridge:interact:defaultKey) and follows FiveM key mapping. Mouse wheel or the up/down controls switch between multiple options.</p>
    </div>

    <div className="bridge-note">
      <strong>Interact visual interface</strong>
      <p>WorldInteract.svelte provides the dedicated world UI. Current visual presets include blue_circle, gold_circle, green_square, glitch and obtaizen_ui. The global interface editor controls scale, pin/key/bullet sizes, option dimensions, colors, opacity, wall detection and automatic disable states.</p>
    </div>

    <div className="bridge-note warning">
      <strong>Important distinction</strong>
      <p>pr_lib.fivem.streaming.playInteraction/playAction is an animation/action helper and is not the PR Bridge Interact system. The public world-interaction API documented here is pr_lib.interact.</p>
    </div>

    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-cache') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="10" eyebrow="pr_lib.cache" title={d.cacheTitle} text={d.cacheP} />
    <Code>{"local profile = pr_lib.cache.remember(('profile:%s'):format(source), function()\n    return pr_lib.db.single('SELECT * FROM profiles WHERE owner = ?', { identifier })\nend, 5000)\n\npr_lib.cache.onChange(('profile:%s'):format(source), function(newValue, oldValue)\n    print('profile cache changed')\nend)\n\npr_lib.cache.clearPrefix('profile:')\npr_lib.cache.InvalidatePlayer(source)"}</Code>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-callbacks') {
    const callbackEntries = PR_BRIDGE_API.filter((entry) => entry.module === 'callback');
    return <div className="bridge-docs bridge-docs-page">
      <TopicHeader
        number="11"
        eyebrow="pr_lib.callback / legacy + secure"
        title={d.callbacksTitle}
        text={locale === 'pt-BR'
          ? 'O PR Bridge mantém dois runtimes de callback: legacy e secure. O modo secure adiciona register, call/callOx, awaitOx, estatísticas, cancelamento com motivo, limites de concorrência e validação da origem da resposta.'
          : d.callbacksP}
      />

      <div className="bridge-stat-grid">
        <article><strong>{callbackEntries.length}</strong><p>{locale === 'pt-BR' ? 'entradas públicas de callback catalogadas' : 'cataloged public callback entries'}</p></article>
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.callbackDefinitions}</strong><p>{locale === 'pt-BR' ? 'definições callback.* nos 4 runtimes' : 'callback.* definitions across 4 runtimes'}</p></article>
        <article><strong>4</strong><p>{locale === 'pt-BR' ? 'arquivos de runtime de callback' : 'callback runtime files'}</p></article>
        <article><strong>2</strong><p>legacy / secure</p></article>
      </div>

      <div className="bridge-card-grid two">
        <Card k="CLIENT" title="Client → Server">trigger/await enviam a requisição ao servidor. No modo secure também existem call, awaitOx, register, getStats e cancel com reason.</Card>
        <Card k="SERVER" title="Server → Client">triggerClient/awaitClient direcionam a chamada a um source. O secure valida expectedSource e limita pendências por jogador.</Card>
        <Card k="REGISTER" title="Bidirectional registration">No modo secure, callback.register existe em client e server. O handler server recebe source como primeiro argumento.</Card>
        <Card k="SECURE" title="Limits & forged-response protection">O runtime secure controla maxPending, maxPendingPerPlayer, maxInboundPerPlayer, timeout, rejeições, respostas forjadas e erros.</Card>
      </div>

      <h3 className="bridge-subtitle">Server callback registration</h3>
      <Code>{"pr_lib.callback.register('garage:getVehicle', function(source, plate)\n    return pr_lib.db.single(\n        'SELECT * FROM vehicles WHERE plate = ?',\n        { plate }\n    )\nend)\n\n-- client.lua\nlocal vehicle, err = pr_lib.callback.await(\n    'garage:getVehicle',\n    5000,\n    plate\n)"}</Code>

      <h3 className="bridge-subtitle">Server → client</h3>
      <Code>{"-- client.lua, secure mode\npr_lib.callback.register('garage:getLocalState', function(vehicleNetId)\n    local vehicle = NetToVeh(vehicleNetId)\n    if vehicle == 0 then return nil, 'vehicle_not_found' end\n    return {\n        engine = GetIsVehicleEngineRunning(vehicle),\n        body = GetVehicleBodyHealth(vehicle),\n    }\nend)\n\n-- server.lua\nlocal state, err = pr_lib.callback.awaitClient(\n    source,\n    'garage:getLocalState',\n    3000,\n    netId\n)"}</Code>

      <h3 className="bridge-subtitle">OX-compatible secure helpers</h3>
      <Code>{"-- client\nlocal result = pr_lib.callback.awaitOx('garage:list', 500, garageId)\n\n-- client async\npr_lib.callback.call('garage:list', 500, function(result)\n    print(json.encode(result))\nend, garageId)\n\n-- server\nlocal result = pr_lib.callback.awaitOx('garage:clientState', source, netId)\n\npr_lib.callback.callOx('garage:clientState', source, function(result)\n    print(json.encode(result))\nend, netId)"}</Code>

      <div className="bridge-note">
        <strong>{locale === 'pt-BR' ? 'A quantidade não diminuiu' : 'The callback surface did not shrink'}</strong>
        <p>{locale === 'pt-BR'
          ? 'A contagem anterior do site estava incompleta porque misturava a documentação antiga com o runtime atual. A auditoria do código atual encontrou os métodos legacy e os métodos adicionais do secure_client/secure_server; todos passam a aparecer no catálogo.'
          : 'The previous site count was incomplete because it mixed the older documentation with the current runtime. The current audit includes both legacy methods and the additional secure-client/server surface.'}</p>
      </div>

      <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
      {commonFooter}
    </div>;
  }

  if (topic === 'bridge-security') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="12" eyebrow="Commands / ACE / Keybinds" title={d.securityTitle} text={d.securityP} />
    <Code>{"pr_lib.addCommand('setgarage', {\n    help = 'Assign a garage to a player',\n    jobs = { police = 3 },\n    params = {\n        { name='player', type='playerId' },\n        { name='garage', type='string' },\n    }\n}, function(source, params)\n    local target = params.values.player\nend)\n\npr_lib.addKeybind({\n    name='garage_quick_menu',\n    keys='CTRL + G',\n    secondaryKey='F7',\n    onPressed=function() OpenGarageMenu() end,\n})"}</Code>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-dev') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="13" eyebrow="pr_lib.devtools" title={d.devTitle} text={d.devP} />
    <Code>{"pr_lib.devtools.placeObject('prop_tool_bench02', 1, function(result)\n    if not result then return end\n    print(json.encode(result))\nend)\n\npr_lib.devtools.createSphereZone({ radius = 2.0, debug = true }, function(zone)\n    print(json.encode(zone))\nend)\n\nlocal gizmo = pr_lib.gizmo\nlocal laser = pr_lib.devlaser"}</Code>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-fivem') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="14" eyebrow="pr_lib.fivem" title={d.fivemTitle} text={d.fivemP} />
    <div className="bridge-card-grid two">
      <Card k="STREAMING" title="Assets & entities">Models, animation dictionaries, texture dictionaries, particle FX, scaleforms, weapons and entity creation.</Card>
      <Card k="VEHICLES" title="Properties & tuning">Vehicle properties, tuning, mods, extras, neon, xenon, fuel and snapshots.</Card>
      <Card k="WORLD" title="Objects & network">Pool/radius searches, network IDs, closest entities and object/model utilities.</Card>
      <Card k="VISUAL" title="Blips, draw & raycast">Blip metadata, asset URLs, 2D/3D drawing and raycast helpers for editors/debug tools.</Card>
    </div>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-dui') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="15" eyebrow="pr_lib.dui" title={d.duiTitle} text={d.duiP} />
    <Code>{"local dui = pr_lib.dui.create({\n    id = 'garage_screen',\n    url = pr_lib.dui.url('ui/index.html'),\n    width = 1024,\n    height = 512,\n})\n\npr_lib.dui.sendMessage(dui, {\n    action = 'setVehicle',\n    vehicle = { name='Sultan', plate='FORGE' }\n})\n\npr_lib.dui.enableMouse(dui)\npr_lib.dui.setOpacity(dui, 0.95)"}</Code>
    <ReferenceBlock locale={locale} modules={TOPIC_MODULES[topic]} />
    {commonFooter}
  </div>;

  if (topic === 'bridge-expand') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="16" eyebrow="Adapters" title={d.extendTitle} text={d.extendP} />
    <Code>{"bridge/\n└── frameworks/\n    └── my_framework/\n        ├── client.lua\n        └── server.lua\n\n-- bridge/config.lua\nframeworks = {\n    { resource = 'my_framework', folder = 'my_framework' },\n}\n\n-- server.lua\nlocal framework = {}\nfunction framework.GetResourceName() return 'my_framework' end\nfunction framework.GetPlayer(source) return exports.my_framework:GetPlayer(source) end\nreturn framework"}</Code>
    <div className="bridge-card-grid two">
      <Card k="01" title="Detect">Add the provider/resource identity to the category priority table.</Card>
      <Card k="02" title="Implement">Implement only the category contract you can reliably support.</Card>
      <Card k="03" title="Normalize">Let framework/inventory normalizers fill aliases from primitives where possible.</Card>
      <Card k="04" title="Consume">Downstream scripts keep their existing pr_lib calls unchanged.</Card>
    </div>
    {commonFooter}
  </div>;

  if (topic === 'bridge-api') return <div className="bridge-docs bridge-docs-page">
    <TopicHeader number="17" eyebrow="Complete public reference" title={d.apiTitle} text={d.apiP} />
    <div className="bridge-stat-grid">
      <article><strong>{PR_BRIDGE_API_COUNT}</strong><p>Callable entries</p></article>
      <article><strong>{PR_BRIDGE_MODULES.length}</strong><p>Published module headings</p></article>
      <article><strong>3</strong><p>Runtime contexts</p></article>
      <article><strong>{PR_BRIDGE_API.filter((entry) => entry.module === 'callback').length}</strong><p>Callback API entries</p></article>
    </div>
    <ReferenceBlock locale={locale} searchable />
    <div className="bridge-production">
      <h3>{d.production}</h3>
      <div><span>01</span><p>Keep provider detection inside PR Bridge instead of branching on resource names inside business logic.</p></div>
      <div><span>02</span><p>Validate money, inventory, permissions and protected state on the server; use client helpers for presentation and local FiveM behavior.</p></div>
      <div><span>03</span><p>Invalidate cached authorization data when authoritative metadata changes.</p></div>
      <div><span>04</span><p>Use the Source audit page when you need the exact file, line and internal/runtime function instead of only the public pr_lib contract.</p></div>
    </div>
    {commonFooter}
  </div>;

  return <div className="bridge-docs bridge-docs-page">
    <TopicHeader
      number="18"
      eyebrow="File-by-file / function-by-function"
      title={locale === 'pt-BR' ? 'Auditoria completa do código-fonte' : 'Complete source-code audit'}
      text={locale === 'pt-BR'
        ? 'Índice gerado diretamente de todos os arquivos Lua do repositório de desenvolvimento. Ele lista arquivo por arquivo, função por função, além de callbacks NUI, callbacks registrados, net events, event handlers e exports.'
        : 'Index generated directly from every Lua file in the development repository. It lists each file and function plus NUI callbacks, registered callbacks, net events, event handlers and exports.'}
    />
    <div className="bridge-note">
      <strong>{locale === 'pt-BR' ? 'Escopo da auditoria' : 'Audit scope'}</strong>
      <p>{locale === 'pt-BR'
        ? 'Esta página inclui APIs públicas, adapters de providers, helpers locais e handlers internos. Por isso a contagem de definições do source audit é maior que a contagem da API pública pr_lib.'
        : 'This page includes public APIs, provider adapters, local helpers and internal handlers, so the source-definition count is larger than the public pr_lib API count.'}</p>
    </div>
    <PrBridgeSourceAudit locale={locale} />
    {commonFooter}
  </div>;

}
