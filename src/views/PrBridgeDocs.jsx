import { useI18n } from '../i18n';

const API_MODULES = [
  ['core', 14], ['locale', 8], ['cache', 10], ['debug', 9], ['framework', 169],
  ['inventory', 180], ['notification', 5], ['menu', 15], ['target', 42], ['phone', 23],
  ['progressbar', 4], ['weather', 2], ['database', 40], ['fuel', 3], ['vehicle_key', 41],
  ['banking', 10], ['textui', 5], ['callback', 10], ['ace', 17], ['addCommand', 8],
  ['addKeybind', 3], ['translator', 8], ['github', 3], ['utils', 7], ['math', 40],
  ['table', 14], ['ids', 2], ['raycast', 4], ['net', 12], ['ui', 6], ['dui', 60],
  ['tuning', 17], ['drawtext', 17], ['vehicleProperties', 8], ['streaming', 50],
  ['objects', 52], ['vehicleCache', 10], ['blips', 16], ['devtools', 14], ['fivem aliases', 28],
];

const PROVIDERS = {
  frameworks: ['TMC / core', 'ND Core', 'ox_core', 'ESX', 'QBX', 'QBCore', 'Custom'],
  inventories: ['ox_inventory', 'tgiann-inventory', 'core_inventory', 'ps-inventory', 'ak47_inventory', 'jaksam_inventory', 'qs-inventory', 'codem/minventory', 'origen_inventory', 'qb-inventory'],
  notifications: ['ox_lib', 'okokNotify', 'mythic_notify', 'pNotify', '17mov_Hud', 'codem-notification', 'ESX', 'QBCore'],
  targets: ['ox_target', 'core_focus', 'qb-target', 'default'],
  textui: ['ox_lib', 'jg-textui', 'okokTextUI', 'cd_drawtextui', 'codem-textui', 'brutal_textui', 'default'],
  banking: ['Renewed-Banking', 'qb-banking', 'okokBanking', 'tgiann-bank', 'kartik-banking', 'fd_banking'],
  phones: ['qs-smartphone-pro', 'lb-phone', 'okokPhone', 'yseries'],
  database: ['oxmysql', 'ghmattimysql', 'mysql-async'],
  fuel: ['cdn-fuel', 'lc_fuel', 'LegacyFuel'],
  vehicleKeys: ['mm_carkeys', 'mri_Qcarkeys', 'qb-vehiclekeys', 'qbx_vehiclekeys', 'wasabi_carlock'],
};

const COPY = {
  en: {
    kicker: 'Standalone compatibility & developer platform',
    lead: 'PR Bridge is not a Forge Framework component. It is a standalone, expandable FiveM compatibility and developer platform designed to sit between any resource and the ecosystem around it: frameworks, inventories, databases, targets, menus, notifications, phones, banking, vehicle systems and native FiveM tooling.',
    repository: 'Repository', apiFile: 'API_FUNCTIONS.md', version: 'Version', functions: 'Documented calls', contexts: 'Contexts', mode: 'Architecture',
    standalone: 'Standalone core', expandable: 'Expandable adapters', normalized: 'Normalized APIs', tooling: 'Developer platform',
    navOverview: 'Overview', navInstall: 'Install', navArchitecture: 'Architecture', navAdapters: 'Adapters', navCore: 'Core API', navUi: 'UI & interaction', navCache: 'Cache', navDev: 'Developer tools', navFiveM: 'FiveM toolkit', navExtensibility: 'Extensibility', navApi: 'API catalog',
    overviewTitle: 'One API surface between your script and the rest of the FiveM stack.',
    overviewP1: 'The library core loads without ox_lib, qb-core, qbx_core or another framework. Optional adapters are selected at runtime according to resources that are actually started, so consuming scripts can call pr_lib without embedding provider-specific branches everywhere.',
    overviewP2: 'The same resource can therefore run on different stacks while keeping one internal contract. Framework data, inventory operations, database calls, notifications, menus, targets, banking, phones, fuel, vehicle keys and other systems are normalized behind stable namespaces.',
    overviewP3: 'PR Bridge also goes beyond compatibility: it ships callbacks, permissions, typed commands, keybinds, JSON/module loaders, cache primitives, translation helpers, DUI, streaming, vehicle tooling, object queries, raycasts, placement tools and diagnostics.',
    statCalls: '987 callable entries parsed from the current API_FUNCTIONS.md index.', statModules: '40 API families covering shared, client and server contexts.', statNoFramework: 'No framework is required to load the core.', statAliases: 'Compatibility aliases reduce migration friction between naming conventions.',
    installTitle: 'Consume PR Bridge as a library from any resource.',
    installP1: 'Start pr_bridge before the resources that consume it, then import @pr_bridge/init.lua as a shared script. The importer exposes a per-resource pr_lib instance while reusing the bridge core and the currently selected adapters.',
    installP2: 'Lua 5.4 is required by the importer. Loading fails explicitly when pr_bridge is not started, when the library is imported twice, or when the consumer does not run Lua 5.4.',
    quickStart: 'Quick start',
    architectureTitle: 'Provider detection, normalization and utility layers are independent concerns.',
    archLoader: 'Loader', archLoaderD: 'Detects server/client context, loads modules and JSON from the current or another resource and creates the public pr_lib surface.',
    archDetection: 'Adapter detection', archDetectionD: 'ConfigBridge checks supported resources in priority order. Framework and database can be forced or left on auto; unsupported stacks fall back to defaults.',
    archNormalization: 'Normalization', archNormalizationD: 'Framework, inventory, target, text UI, banking, notification and database APIs are normalized so providers with different names and return shapes expose a consistent contract.',
    archUtilities: 'Native utilities', archUtilitiesD: 'Cache, callback, locale, translator, debug, commands, keybinds, permissions and FiveM helpers do not depend on a specific roleplay framework.',
    archAliases: 'Aliases', archAliasesD: 'Namespaces such as inventory/inventories, notify/notifications, menu/menus, target/targets, db/sql and developerTools/devtools reduce migration costs.',
    adaptersTitle: 'A broad adapter matrix with standalone fallbacks.',
    adaptersP: 'The current main branch explicitly declares the following integrations. Auto-detection uses the first started resource in each priority list.',
    customTitle: 'Custom framework contract', customP: 'Set Config.Framework = "custom" and implement bridge/frameworks/custom/client.lua and server.lua. The repository already provides safe stubs and the normalizer fills compatible helpers where possible.',
    coreTitle: 'The core is useful even before a framework adapter is selected.',
    coreLoaders: 'Module & JSON loading', coreLoadersD: 'Load Lua modules and JSON from the current resource or @another_resource paths; save, update, merge and invalidate JSON files through one API.',
    coreLocale: 'Locale & translation', coreLocaleD: 'Per-resource locale objects support extend, replace, delete and substitution. Translator helpers can translate text, batches, menus and optionally notifications.',
    coreCallbacks: 'Callbacks', coreCallbacksD: 'Client/server request-response helpers support await, trigger, registration, cancellation and pending-request inspection.',
    coreCommands: 'Commands & keybinds', coreCommandsD: 'Typed command parsing supports strings, numbers, booleans, players and long strings plus ACE/framework access rules. Keybinds support multi-key combinations and secondary mappings.',
    corePermissions: 'ACE & permissions', corePermissionsD: 'Helpers cover identifiers, principals, ACE creation/removal, whitelists, command ACEs and framework-aware job/group permission checks.',
    coreDatabase: 'Database & backups', coreDatabaseD: 'Server database helpers normalize oxmysql, ghmattimysql and mysql-async, while the backup subsystem can create/export SQL backups from the active adapter.',
    uiTitle: 'UI and interaction primitives let resources stop caring which presentation provider is installed.',
    uiMenus: 'Menus', uiMenusD: 'Context menus, registered menus, input dialogs and alert dialogs normalize through the menus namespace. ox_lib is supported directly and a safe default adapter prevents hard crashes when no menu provider is present.',
    uiNotify: 'Notifications & TextUI', uiNotifyD: 'Notification and TextUI adapters normalize multiple ecosystems, with optional translation of notification title/description through the translator layer.',
    uiTarget: 'Target / focus interaction', uiTargetD: 'Box, sphere and poly zones plus model, entity, player, vehicle, ped and object targets share one target API. Current providers include ox_target, core_focus and qb-target.',
    uiProgress: 'Progress & feedback', uiProgressD: 'Progress bars/circles, DrawText helpers, 2D/3D UI drawing and notification primitives can be consumed independently from framework logic.',
    uiDui: 'DUI surfaces', uiDuiD: 'Create browser-backed surfaces, sprites, render targets, texture replacements and poly rendering; send NUI messages and mouse events; control focus, URL, opacity and brightness.',
    uiNoteTitle: 'Radial/interact note', uiNote: 'The current main branch and API_FUNCTIONS.md expose target/focus interaction and menu APIs, but do not publish a dedicated pr_lib.radial or pr_lib.interact namespace. This documentation does not invent callable namespaces that are not present in the source index.',
    cacheTitle: 'Cache is a first-class runtime primitive, not an afterthought.',
    cacheP1: 'pr_lib.cache provides generic key/value storage with fallback values, prefix invalidation, remember/call memoization, TTL-style expiry and onChange listeners.',
    cacheP2: 'Player and metadata helpers build on that store so framework lookups can be memoized briefly and invalidated explicitly. A separate vehicleCache namespace stores vehicle snapshots, plate lookups, persistent metadata and statebag-backed values.',
    cacheGuidance: 'Use local cache for heavy or temporary work data. Use replicated statebags only for compact metadata that other clients need to observe; vehicle property statebag fallback is disabled by default.',
    devTitle: 'Developer tooling turns common FiveM authoring tasks into reusable workflows.',
    devPlacement: 'Entity placement', devPlacementD: 'Place objects, peds and vehicles with placement helpers and callbacks. The devtools module also exposes sphere/polyzone creation workflows.',
    devGizmo: 'Gizmo & laser', devGizmoD: 'Dedicated gizmo and developer-laser modules are exposed under pr_lib.fivem and aliased on pr_lib for editor-style resource builders.',
    devStreaming: 'Streaming & interactions', devStreamingD: 'Request/release models, anim dicts, anim sets, ptfx, scaleforms, texture dicts and weapon assets; create entities and play actions, animations and interaction sequences.',
    devDebug: 'Debug & versioning', devDebugD: 'Structured debug helpers, dependency checks and GitHub version checks support resource diagnostics and compatibility gates.',
    fivemTitle: 'A native FiveM utility layer sits beside the compatibility adapters.',
    fivemVehicle: 'Vehicles', fivemVehicleD: 'Network resolution, vehicle properties, tuning, fuel, extras, neon, xenon, plate handling, ownership and radius searches.',
    fivemWorld: 'World queries', fivemWorldD: 'Find objects, peds, pickups and vehicles by pool/model/radius; resolve closest entities and networked objects; freeze matching models.',
    fivemVisual: 'Visual assets', fivemVisualD: 'Blip metadata and asset URL helpers cover sprites, colors, markers, checkpoints, peds, vehicles and weapons.',
    fivemRaycast: 'Raycast & UI', fivemRaycastD: 'Camera/coordinate raycasts plus 2D/3D text and rectangle drawing support editor, targeting and debugging experiences.',
    expandTitle: 'The project is designed to be extended without forcing downstream scripts to change.',
    expandP1: 'New providers follow the existing folder convention: bridge/<category>/<provider>/<context>.lua. Add detection metadata to ConfigBridge, implement the normalized contract, and downstream resources keep calling the same pr_lib namespace.',
    expandP2: 'Custom framework adapters are first-class. Inventory and framework normalizers can synthesize missing helper aliases from available primitives, which makes partial adapters easier to evolve incrementally.',
    expandP3: 'This architecture also makes migrations reversible: a server can replace an inventory, target, database or notification provider without rewriting every resource that was built against PR Bridge.',
    apiTitle: 'Professional API inventory from the current source index.',
    apiP: 'API_FUNCTIONS.md currently states 988 categorized calls; parsing the function rows yields 987 callable entries. The difference comes from the document header itself being formatted as a level-two heading. The catalog below uses the parsed callable count and groups aliases exactly as published.',
    contextsTitle: 'Context model', contextsP: 'Functions are explicitly grouped as shared, server or client. Some namespaces intentionally expose the same operation in more than one context with context-appropriate behavior.',
    examplesTitle: 'Representative usage',
    prodTitle: 'Production guidance',
    prod1: 'Keep provider selection centralized in PR Bridge instead of branching on framework/resource names inside business logic.',
    prod2: 'Prefer server-side authorization for money, inventory, permissions and protected state; use client helpers for presentation and local FiveM operations.',
    prod3: 'Use cache invalidation deliberately when authoritative player metadata changes; short memoization is useful, stale authorization is not.',
    prod4: 'When creating a new adapter, implement the smallest reliable provider contract first and let normalizers supply aliases where possible.',
    sourceTitle: 'Source review', sourceP: 'This documentation reflects the current main branch, fxmanifest version 1.0.9 and the API_FUNCTIONS.md index inspected from Framework-Forge/pr_bridge.'
  },
  'pt-BR': {
    kicker: 'Plataforma independente de compatibilidade e desenvolvimento',
    lead: 'PR Bridge não é um componente da Forge Framework. É uma plataforma standalone, expansível, de compatibilidade e desenvolvimento para FiveM, criada para ficar entre qualquer resource e o ecossistema ao redor dele: frameworks, inventários, bancos, targets, menus, notificações, telefones, banking, sistemas veiculares e ferramentas nativas do FiveM.',
    repository: 'Repositório', apiFile: 'API_FUNCTIONS.md', version: 'Versão', functions: 'Chamadas documentadas', contexts: 'Contextos', mode: 'Arquitetura',
    standalone: 'Core standalone', expandable: 'Adapters expansíveis', normalized: 'APIs normalizadas', tooling: 'Plataforma dev',
    navOverview: 'Visão geral', navInstall: 'Instalação', navArchitecture: 'Arquitetura', navAdapters: 'Adapters', navCore: 'Core API', navUi: 'UI e interação', navCache: 'Cache', navDev: 'Ferramentas dev', navFiveM: 'Toolkit FiveM', navExtensibility: 'Expansibilidade', navApi: 'Catálogo API',
    overviewTitle: 'Uma única superfície de API entre seu script e todo o restante da stack FiveM.',
    overviewP1: 'O core carrega sem ox_lib, qb-core, qbx_core ou qualquer outra framework. Adapters opcionais são selecionados em runtime conforme os resources realmente iniciados, permitindo que o script consumidor use pr_lib sem espalhar condicionais específicas de provider.',
    overviewP2: 'Assim, o mesmo resource pode rodar em stacks diferentes mantendo um contrato interno único. Dados de framework, inventário, banco, notificações, menus, targets, banking, phones, combustível, chaves e outros sistemas são normalizados atrás de namespaces estáveis.',
    overviewP3: 'PR Bridge também vai além de compatibilidade: inclui callbacks, permissões, comandos tipados, keybinds, loaders de JSON/módulos, cache, tradução, DUI, streaming, ferramentas veiculares, consultas de mundo, raycasts, placement e diagnóstico.',
    statCalls: '987 entradas chamáveis parseadas do índice API_FUNCTIONS.md atual.', statModules: '40 famílias de API cobrindo shared, client e server.', statNoFramework: 'Nenhuma framework é necessária para carregar o core.', statAliases: 'Aliases de compatibilidade reduzem atrito em migrações.',
    installTitle: 'Consuma o PR Bridge como biblioteca em qualquer resource.',
    installP1: 'Inicie pr_bridge antes dos resources consumidores e importe @pr_bridge/init.lua como shared script. O importador expõe uma instância pr_lib por resource reutilizando o core e os adapters selecionados.',
    installP2: 'Lua 5.4 é obrigatório no consumidor. O loader falha explicitamente se pr_bridge não estiver iniciado, se for importado duas vezes ou se o resource não estiver em Lua 5.4.',
    quickStart: 'Início rápido',
    architectureTitle: 'Detecção de provider, normalização e utilitários são camadas independentes.',
    archLoader: 'Loader', archLoaderD: 'Detecta client/server, carrega módulos e JSON do resource atual ou externo e monta a superfície pública pr_lib.',
    archDetection: 'Detecção de adapters', archDetectionD: 'ConfigBridge verifica resources em ordem de prioridade. Framework e banco podem ser forçados ou ficar em auto; stacks ausentes usam fallbacks seguros.',
    archNormalization: 'Normalização', archNormalizationD: 'Framework, inventário, target, TextUI, banking, notification e database são normalizados para expor contratos consistentes apesar de nomes e retornos diferentes.',
    archUtilities: 'Utilitários nativos', archUtilitiesD: 'Cache, callback, locale, translator, debug, comandos, keybinds, permissões e helpers FiveM não dependem de framework RP.',
    archAliases: 'Aliases', archAliasesD: 'Namespaces como inventory/inventories, notify/notifications, menu/menus, target/targets, db/sql e developerTools/devtools reduzem custo de migração.',
    adaptersTitle: 'Uma matriz ampla de adapters com fallbacks standalone.',
    adaptersP: 'A main atual declara explicitamente as integrações abaixo. A autodetecção usa o primeiro resource iniciado na lista de prioridade de cada categoria.',
    customTitle: 'Contrato de framework custom', customP: 'Defina Config.Framework = "custom" e implemente bridge/frameworks/custom/client.lua e server.lua. O repositório já fornece stubs seguros e o normalizer completa helpers compatíveis quando possível.',
    coreTitle: 'O core já é útil antes mesmo de selecionar uma framework.',
    coreLoaders: 'Loaders de módulo e JSON', coreLoadersD: 'Carregue Lua e JSON do resource atual ou de caminhos @outro_resource; salve, atualize, mescle e invalide JSON por uma API única.',
    coreLocale: 'Locale e tradução', coreLocaleD: 'Objetos de locale por resource suportam extend, replace, delete e substituições. Translator pode traduzir textos, lotes, menus e opcionalmente notificações.',
    coreCallbacks: 'Callbacks', coreCallbacksD: 'Helpers request-response client/server suportam await, trigger, registro, cancelamento e inspeção de requests pendentes.',
    coreCommands: 'Comandos e keybinds', coreCommandsD: 'Parsing tipado suporta string, number, boolean, player e longString, com regras ACE/framework. Keybinds suportam combinações de teclas e mapping secundário.',
    corePermissions: 'ACE e permissões', corePermissionsD: 'Helpers cobrem identifiers, principals, criação/remoção de ACE, whitelist, command ACE e checks framework-aware de job/group.',
    coreDatabase: 'Banco e backups', coreDatabaseD: 'No server, database normaliza oxmysql, ghmattimysql e mysql-async; o subsistema de backup cria/exporta backups SQL usando o adapter ativo.',
    uiTitle: 'Primitivas de UI e interação evitam que o resource precise saber qual provider visual está instalado.',
    uiMenus: 'Menus', uiMenusD: 'Context menus, menus registrados, input dialogs e alert dialogs passam por menus. ox_lib é suportado diretamente e o adapter default falha de modo seguro quando não existe provider.',
    uiNotify: 'Notificações e TextUI', uiNotifyD: 'Adapters de notification e TextUI normalizam múltiplos ecossistemas, com tradução opcional de título/descrição através do translator.',
    uiTarget: 'Target / focus interaction', uiTargetD: 'Box, sphere e poly zones, além de model, entity, player, vehicle, ped e object targets, usam uma única API. Providers atuais: ox_target, core_focus e qb-target.',
    uiProgress: 'Progress e feedback', uiProgressD: 'Progress bars/circles, DrawText, desenho 2D/3D e notificações podem ser consumidos sem acoplamento à framework.',
    uiDui: 'Superfícies DUI', uiDuiD: 'Crie superfícies browser, sprites, render targets, replace textures e polys; envie NUI/mouse events; controle foco, URL, opacidade e brilho.',
    uiNoteTitle: 'Nota sobre radial/interact', uiNote: 'A main atual e API_FUNCTIONS.md expõem target/focus interaction e menu APIs, mas não publicam um namespace pr_lib.radial ou pr_lib.interact dedicado. Esta documentação não inventa namespaces chamáveis que não aparecem no índice atual.',
    cacheTitle: 'Cache é uma primitiva de runtime de primeira classe.',
    cacheP1: 'pr_lib.cache oferece key/value, fallback, invalidação por prefixo, memoização remember/call, expiração estilo TTL e listeners onChange.',
    cacheP2: 'Helpers de player/metadata usam esse store para memoizar brevemente consultas da framework e permitir invalidação explícita. vehicleCache separado armazena snapshots, busca por placa, metadata persistente e valores de statebag.',
    cacheGuidance: 'Use cache local para payload pesado ou trabalho temporário. Use statebags replicadas apenas para metadata compacta que outros clients precisam observar; o fallback de vehicle properties via statebag vem desativado por padrão.',
    devTitle: 'Ferramentas dev transformam tarefas comuns de autoria FiveM em workflows reutilizáveis.',
    devPlacement: 'Entity placement', devPlacementD: 'Posicione objects, peds e vehicles com helpers/callbacks. Devtools também expõe criação de sphere/polyzone.',
    devGizmo: 'Gizmo e laser', devGizmoD: 'Módulos dedicados de gizmo e developer laser são expostos em pr_lib.fivem e também por aliases diretos em pr_lib.',
    devStreaming: 'Streaming e interações', devStreamingD: 'Request/release de models, anim dicts, anim sets, ptfx, scaleforms, texture dicts e weapon assets; criação de entidades e sequências de ação/animação/interação.',
    devDebug: 'Debug e versionamento', devDebugD: 'Debug estruturado, dependency checks e version check do GitHub ajudam diagnóstico e gates de compatibilidade.',
    fivemTitle: 'Uma camada de utilidades FiveM nativas acompanha os adapters.',
    fivemVehicle: 'Veículos', fivemVehicleD: 'Resolução de network entity, propriedades, tuning, combustível, extras, neon, xenon, placa, ownership e buscas por raio.',
    fivemWorld: 'Consultas de mundo', fivemWorldD: 'Busque objects, peds, pickups e vehicles por pool/model/radius; resolva entidades próximas/networked e congele modelos.',
    fivemVisual: 'Assets visuais', fivemVisualD: 'Helpers de blips e URLs cobrem sprites, cores, markers, checkpoints, peds, veículos e armas.',
    fivemRaycast: 'Raycast e UI', fivemRaycastD: 'Raycasts por câmera/coordenadas e desenho de texto 2D/3D/retângulos dão base para editores, targets e debug.',
    expandTitle: 'O projeto foi desenhado para crescer sem obrigar scripts consumidores a mudar.',
    expandP1: 'Novos providers seguem bridge/<categoria>/<provider>/<context>.lua. Adicione detecção em ConfigBridge, implemente o contrato normalizado e os resources continuam chamando o mesmo namespace pr_lib.',
    expandP2: 'Framework custom é first-class. Normalizers de inventory/framework conseguem sintetizar aliases e helpers a partir de primitivas já implementadas, facilitando evolução incremental.',
    expandP3: 'Isso também torna migrações reversíveis: trocar inventário, target, banco ou notificações não exige reescrever todos os scripts que nasceram em PR Bridge.',
    apiTitle: 'Inventário profissional da API baseado no índice atual.',
    apiP: 'API_FUNCTIONS.md declara 988 chamadas categorizadas; o parsing das linhas de função produz 987 entradas chamáveis. A diferença vem do próprio cabeçalho do documento estar formatado como heading de nível 2. O catálogo usa o total parseado.',
    contextsTitle: 'Modelo de contexto', contextsP: 'Funções são separadas em shared, server e client. Alguns namespaces oferecem a mesma operação em mais de um contexto com comportamento adequado ao lado executado.',
    examplesTitle: 'Uso representativo',
    prodTitle: 'Boas práticas de produção',
    prod1: 'Centralize seleção de providers no PR Bridge em vez de usar if framework/resource dentro da regra de negócio.',
    prod2: 'Autorize money, inventory, permissions e estados protegidos no servidor; use helpers client para apresentação e operações locais do FiveM.',
    prod3: 'Invalide cache de forma deliberada quando metadata autoritativa mudar; memoização curta é útil, autorização obsoleta não.',
    prod4: 'Ao criar adapter novo, implemente primeiro o menor contrato confiável e deixe os normalizers fornecerem aliases quando possível.',
    sourceTitle: 'Análise do código', sourceP: 'Esta documentação reflete a main atual, fxmanifest versão 1.0.9 e o índice API_FUNCTIONS.md analisado em Framework-Forge/pr_bridge.'
  },
  es: {
    kicker: 'Plataforma independiente de compatibilidad y desarrollo',
    lead: 'PR Bridge no es un componente de Forge Framework. Es una plataforma standalone y extensible de compatibilidad/desarrollo para FiveM que desacopla cualquier recurso de frameworks, inventarios, bases de datos, targets, menús, notificaciones, teléfonos, banking, vehículos y utilidades nativas.',
    repository: 'Repositorio', apiFile: 'API_FUNCTIONS.md', version: 'Versión', functions: 'Llamadas documentadas', contexts: 'Contextos', mode: 'Arquitectura',
    standalone: 'Core standalone', expandable: 'Adapters extensibles', normalized: 'APIs normalizadas', tooling: 'Plataforma dev',
    navOverview: 'Visión general', navInstall: 'Instalación', navArchitecture: 'Arquitectura', navAdapters: 'Adapters', navCore: 'Core API', navUi: 'UI e interacción', navCache: 'Cache', navDev: 'Herramientas dev', navFiveM: 'Toolkit FiveM', navExtensibility: 'Extensibilidad', navApi: 'Catálogo API',
    overviewTitle: 'Una única superficie API entre tu script y toda la stack FiveM.',
    overviewP1: 'El core carga sin ox_lib, qb-core, qbx_core ni otro framework. Los adapters se seleccionan en runtime según recursos iniciados.', overviewP2: 'Framework, inventario, DB, notificaciones, menús, targets, banking, teléfonos, fuel y keys quedan detrás de contratos estables.', overviewP3: 'También incluye callbacks, permisos, comandos tipados, keybinds, loaders, cache, traducción, DUI, streaming, vehículos, mundo, raycasts y herramientas dev.',
    statCalls: '987 entradas invocables parseadas del índice actual.', statModules: '40 familias API shared/client/server.', statNoFramework: 'No requiere framework para cargar el core.', statAliases: 'Aliases reducen fricción de migración.',
    installTitle: 'Consume PR Bridge como biblioteca desde cualquier resource.', installP1: 'Inicia pr_bridge antes e importa @pr_bridge/init.lua como shared script.', installP2: 'Lua 5.4 es obligatorio; el loader valida inicio y doble importación.', quickStart: 'Inicio rápido',
    architectureTitle: 'Detección, normalización y utilidades son capas independientes.', archLoader: 'Loader', archLoaderD: 'Carga módulos/JSON y monta pr_lib.', archDetection: 'Detección', archDetectionD: 'ConfigBridge prioriza providers iniciados y admite forcing de framework/DB.', archNormalization: 'Normalización', archNormalizationD: 'Unifica contratos divergentes.', archUtilities: 'Utilidades', archUtilitiesD: 'Cache, callback, locale, translator, debug, commands, keybinds y FiveM helpers.', archAliases: 'Aliases', archAliasesD: 'Nombres compatibles reducen migraciones.',
    adaptersTitle: 'Matriz amplia de adapters y fallbacks standalone.', adaptersP: 'La main actual declara estas integraciones y usa el primer provider iniciado.', customTitle: 'Framework custom', customP: 'Config.Framework="custom" usa los stubs client/server y normalizers.',
    coreTitle: 'El core ya aporta valor sin framework.', coreLoaders: 'Módulos y JSON', coreLoadersD: 'Carga/guarda/actualiza/mezcla datos.', coreLocale: 'Locale y traducción', coreLocaleD: 'Locales por recurso y traducción de texto/lotes/menús/notificaciones.', coreCallbacks: 'Callbacks', coreCallbacksD: 'await/trigger/register/cancel/pending.', coreCommands: 'Commands & keybinds', coreCommandsD: 'Parámetros tipados, permisos y combos.', corePermissions: 'ACE', corePermissionsD: 'Identifiers, principals, whitelist y checks de jobs/groups.', coreDatabase: 'DB y backups', coreDatabaseD: 'oxmysql/ghmattimysql/mysql-async y backups SQL.',
    uiTitle: 'UI e interacción desacopladas del provider.', uiMenus: 'Menús', uiMenusD: 'Context/menu/input/alert normalizados.', uiNotify: 'Notify & TextUI', uiNotifyD: 'Múltiples providers y traducción opcional.', uiTarget: 'Target / focus', uiTargetD: 'Zones, models, entities, players y vehicles mediante ox_target/core_focus/qb-target.', uiProgress: 'Progress', uiProgressD: 'Progress, DrawText y UI 2D/3D.', uiDui: 'DUI', uiDuiD: 'Browser surfaces, sprites, render targets, replace textures, mouse/focus.', uiNoteTitle: 'Radial/interact', uiNote: 'La main/API actual no publica namespace pr_lib.radial o pr_lib.interact dedicado; no se inventan APIs ausentes.',
    cacheTitle: 'Cache como primitiva de runtime.', cacheP1: 'Key/value, prefix clear, remember, TTL y onChange.', cacheP2: 'Player/metadata memoizados y vehicleCache separado.', cacheGuidance: 'Cache local para payload pesado; statebags sólo para metadata pequeña replicada.',
    devTitle: 'Herramientas dev reutilizables.', devPlacement: 'Placement', devPlacementD: 'Objects/peds/vehicles y zonas.', devGizmo: 'Gizmo y laser', devGizmoD: 'Módulos de edición expuestos.', devStreaming: 'Streaming', devStreamingD: 'Assets, entidades, acciones y animaciones.', devDebug: 'Debug/versiones', devDebugD: 'Logs, dependency checks y GitHub version check.',
    fivemTitle: 'Toolkit nativo FiveM.', fivemVehicle: 'Vehículos', fivemVehicleD: 'Net, properties, tuning, fuel y búsquedas.', fivemWorld: 'Mundo', fivemWorldD: 'Pools, radius y modelos.', fivemVisual: 'Visual', fivemVisualD: 'Blips y URLs de assets.', fivemRaycast: 'Raycast/UI', fivemRaycastD: 'Raycasts y dibujo 2D/3D.',
    expandTitle: 'Extensible sin cambiar recursos consumidores.', expandP1: 'Añade providers bajo bridge/<category>/<provider>/<context>.lua y ConfigBridge.', expandP2: 'Custom framework y normalizers permiten evolución incremental.', expandP3: 'Cambiar inventory/target/DB/notify no obliga a reescribir scripts.',
    apiTitle: 'Inventario profesional de API.', apiP: 'API_FUNCTIONS.md declara 988; el parsing de funciones da 987 llamadas. El catálogo usa el total invocable.', contextsTitle: 'Contextos', contextsP: 'Shared/server/client según cada namespace.', examplesTitle: 'Uso representativo',
    prodTitle: 'Producción', prod1: 'Centraliza providers en PR Bridge.', prod2: 'Autoriza estados sensibles server-side.', prod3: 'Invalida cache cuando cambie autoridad.', prod4: 'Adapters pequeños y normalizados primero.',
    sourceTitle: 'Revisión de código', sourceP: 'Refleja main, fxmanifest 1.0.9 y API_FUNCTIONS.md actuales.'
  },
  fr: {
    kicker: 'Plateforme indépendante de compatibilité et développement',
    lead: 'PR Bridge n’est pas un composant de Forge Framework. C’est une plateforme standalone et extensible pour FiveM qui découple toute ressource des frameworks, inventaires, bases de données, targets, menus, notifications, téléphones, banking, véhicules et outils natifs.',
    repository: 'Dépôt', apiFile: 'API_FUNCTIONS.md', version: 'Version', functions: 'Appels documentés', contexts: 'Contextes', mode: 'Architecture',
    standalone: 'Core standalone', expandable: 'Adapters extensibles', normalized: 'APIs normalisées', tooling: 'Plateforme dev',
    navOverview: 'Vue d’ensemble', navInstall: 'Installation', navArchitecture: 'Architecture', navAdapters: 'Adapters', navCore: 'Core API', navUi: 'UI & interaction', navCache: 'Cache', navDev: 'Outils dev', navFiveM: 'Toolkit FiveM', navExtensibility: 'Extensibilité', navApi: 'Catalogue API',
    overviewTitle: 'Une seule surface API entre votre script et toute la stack FiveM.',
    overviewP1: 'Le core charge sans ox_lib, qb-core, qbx_core ni framework. Les adapters sont choisis au runtime selon les ressources démarrées.', overviewP2: 'Framework, inventaire, DB, notifications, menus, targets, banking, téléphone, fuel et clés passent par des contrats stables.', overviewP3: 'Le projet inclut aussi callbacks, permissions, commandes typées, keybinds, loaders, cache, traduction, DUI, streaming, véhicules, monde, raycasts et devtools.',
    statCalls: '987 entrées appelables analysées dans l’index actuel.', statModules: '40 familles API shared/client/server.', statNoFramework: 'Aucun framework requis pour charger le core.', statAliases: 'Aliases pour réduire le coût de migration.',
    installTitle: 'Consommez PR Bridge comme bibliothèque depuis n’importe quelle ressource.', installP1: 'Démarrez pr_bridge avant les consommateurs et importez @pr_bridge/init.lua en shared script.', installP2: 'Lua 5.4 est obligatoire et le loader vérifie le démarrage/double import.', quickStart: 'Démarrage rapide',
    architectureTitle: 'Détection, normalisation et utilitaires sont des couches distinctes.', archLoader: 'Loader', archLoaderD: 'Charge modules/JSON et construit pr_lib.', archDetection: 'Détection', archDetectionD: 'ConfigBridge choisit les providers démarrés et permet de forcer framework/DB.', archNormalization: 'Normalisation', archNormalizationD: 'Unifie des contrats hétérogènes.', archUtilities: 'Utilitaires', archUtilitiesD: 'Cache, callback, locale, translator, debug, commands, keybinds et FiveM.', archAliases: 'Aliases', archAliasesD: 'Noms compatibles pour faciliter les migrations.',
    adaptersTitle: 'Large matrice d’adapters avec fallbacks standalone.', adaptersP: 'La branche main déclare les intégrations suivantes et choisit le premier provider actif.', customTitle: 'Framework custom', customP: 'Config.Framework="custom" utilise les stubs client/server et les normalizers.',
    coreTitle: 'Le core reste utile sans framework.', coreLoaders: 'Modules & JSON', coreLoadersD: 'Chargement/sauvegarde/update/merge.', coreLocale: 'Locale & traduction', coreLocaleD: 'Locales par ressource et traduction texte/batch/menu/notify.', coreCallbacks: 'Callbacks', coreCallbacksD: 'await/trigger/register/cancel/pending.', coreCommands: 'Commands & keybinds', coreCommandsD: 'Paramètres typés, permissions et combinaisons.', corePermissions: 'ACE', corePermissionsD: 'Identifiers, principals, whitelist et jobs/groups.', coreDatabase: 'DB & backups', coreDatabaseD: 'oxmysql/ghmattimysql/mysql-async et backups SQL.',
    uiTitle: 'UI et interaction découplées du provider.', uiMenus: 'Menus', uiMenusD: 'Context/menu/input/alert normalisés.', uiNotify: 'Notify & TextUI', uiNotifyD: 'Plusieurs providers avec traduction optionnelle.', uiTarget: 'Target / focus', uiTargetD: 'Zones, modèles, entités, joueurs et véhicules via ox_target/core_focus/qb-target.', uiProgress: 'Progress', uiProgressD: 'Progress, DrawText et UI 2D/3D.', uiDui: 'DUI', uiDuiD: 'Surfaces browser, sprites, render targets, texture replacement et souris/focus.', uiNoteTitle: 'Radial/interact', uiNote: 'La main/API actuelle ne publie pas de namespace pr_lib.radial ou pr_lib.interact dédié ; aucune API absente n’est inventée.',
    cacheTitle: 'Cache comme primitive runtime.', cacheP1: 'Key/value, clear prefix, remember, TTL et onChange.', cacheP2: 'Player/metadata memoized et vehicleCache séparé.', cacheGuidance: 'Cache local pour payload lourd ; statebags seulement pour petite metadata répliquée.',
    devTitle: 'Outils dev réutilisables.', devPlacement: 'Placement', devPlacementD: 'Objects/peds/vehicles et zones.', devGizmo: 'Gizmo & laser', devGizmoD: 'Modules d’édition exposés.', devStreaming: 'Streaming', devStreamingD: 'Assets, entités, actions et animations.', devDebug: 'Debug/versions', devDebugD: 'Logs, dependency checks et GitHub version check.',
    fivemTitle: 'Toolkit natif FiveM.', fivemVehicle: 'Véhicules', fivemVehicleD: 'Net, properties, tuning, fuel et recherches.', fivemWorld: 'Monde', fivemWorldD: 'Pools, radius et modèles.', fivemVisual: 'Visuel', fivemVisualD: 'Blips et URLs assets.', fivemRaycast: 'Raycast/UI', fivemRaycastD: 'Raycasts et dessin 2D/3D.',
    expandTitle: 'Extensible sans modifier les consommateurs.', expandP1: 'Ajoutez un provider sous bridge/<category>/<provider>/<context>.lua et ConfigBridge.', expandP2: 'Framework custom et normalizers facilitent l’évolution.', expandP3: 'Changer inventory/target/DB/notify ne réécrit pas les scripts.',
    apiTitle: 'Inventaire professionnel API.', apiP: 'API_FUNCTIONS.md annonce 988 ; le parsing donne 987 appels réels. Le catalogue utilise le total appelable.', contextsTitle: 'Contextes', contextsP: 'Shared/server/client selon le namespace.', examplesTitle: 'Utilisation représentative',
    prodTitle: 'Production', prod1: 'Centralisez les providers dans PR Bridge.', prod2: 'Autorisez les états sensibles côté serveur.', prod3: 'Invalidez le cache quand l’autorité change.', prod4: 'Commencez par un petit contrat adapter fiable.',
    sourceTitle: 'Revue du code', sourceP: 'Reflète main, fxmanifest 1.0.9 et API_FUNCTIONS.md actuels.'
  }
};

const Card=({eyebrow,title,text})=><article className="bridge-card"><span>{eyebrow}</span><h3>{title}</h3><p>{text}</p></article>;
const Code=({children})=><pre className="bridge-code"><code>{children}</code></pre>;

export default function PrBridgeDocs(){
  const { locale } = useI18n();
  const d=COPY[locale]||COPY.en;
  const total=API_MODULES.reduce((n,[,count])=>n+count,0);

  return <div className="bridge-docs">
    <header className="bridge-hero">
      <div>
        <div className="docs-eyebrow"><span className="docs-eyebrow-dot"/>{d.kicker}</div>
        <h1><span>PR</span> Bridge</h1>
        <p>{d.lead}</p>
        <div className="bridge-actions">
          <a className="docs-primary-button" href="https://github.com/Framework-Forge/pr_bridge" target="_blank" rel="noreferrer">{d.repository}</a>
          <a className="docs-secondary-button" href="https://github.com/Framework-Forge/pr_bridge/blob/main/API_FUNCTIONS.md" target="_blank" rel="noreferrer">{d.apiFile}</a>
        </div>
        <div className="bridge-pill-row"><span>{d.standalone}</span><span>{d.expandable}</span><span>{d.normalized}</span><span>{d.tooling}</span></div>
      </div>
      <aside className="bridge-summary">
        <div className="bridge-summary-logo"><b>PR</b><strong>BRIDGE</strong></div>
        <dl>
          <div><dt>{d.version}</dt><dd>1.0.9</dd></div>
          <div><dt>{d.functions}</dt><dd>{total}</dd></div>
          <div><dt>{d.contexts}</dt><dd>shared / server / client</dd></div>
          <div><dt>{d.mode}</dt><dd>standalone + adapters</dd></div>
        </dl>
      </aside>
    </header>

    <nav className="bridge-toc">
      {[[d.navOverview,'bridge-overview'],[d.navInstall,'bridge-install'],[d.navArchitecture,'bridge-architecture'],[d.navAdapters,'bridge-adapters'],[d.navCore,'bridge-core'],[d.navUi,'bridge-ui'],[d.navCache,'bridge-cache'],[d.navDev,'bridge-dev'],[d.navFiveM,'bridge-fivem'],[d.navExtensibility,'bridge-expand'],[d.navApi,'bridge-api']].map(([label,id])=><a key={id} href={'#'+id}>{label}</a>)}
    </nav>

    <section className="bridge-section" id="bridge-overview">
      <div className="bridge-section-head"><span>01</span><div><p>{d.navOverview}</p><h2>{d.overviewTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.overviewP1}</p><p>{d.overviewP2}</p><p>{d.overviewP3}</p></div>
      <div className="bridge-stat-grid">
        <article><strong>987</strong><p>{d.statCalls}</p></article>
        <article><strong>40</strong><p>{d.statModules}</p></article>
        <article><strong>0</strong><p>{d.statNoFramework}</p></article>
        <article><strong>↔</strong><p>{d.statAliases}</p></article>
      </div>
    </section>

    <section className="bridge-section" id="bridge-install">
      <div className="bridge-section-head"><span>02</span><div><p>{d.navInstall}</p><h2>{d.installTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.installP1}</p><p>{d.installP2}</p></div>
      <h3 className="bridge-subtitle">{d.quickStart}</h3>
      <Code>{"-- fxmanifest.lua\nlua54 'yes'\n\nshared_scripts {\n    '@pr_bridge/init.lua',\n}\n\n-- client or server\npr_lib.notifications.Notify({\n    title = 'Status',\n    description = 'Bridge ready',\n    type = 'success'\n})"}</Code>
    </section>

    <section className="bridge-section" id="bridge-architecture">
      <div className="bridge-section-head"><span>03</span><div><p>{d.navArchitecture}</p><h2>{d.architectureTitle}</h2></div></div>
      <div className="bridge-card-grid">
        <Card eyebrow="01" title={d.archLoader} text={d.archLoaderD}/>
        <Card eyebrow="02" title={d.archDetection} text={d.archDetectionD}/>
        <Card eyebrow="03" title={d.archNormalization} text={d.archNormalizationD}/>
        <Card eyebrow="04" title={d.archUtilities} text={d.archUtilitiesD}/>
        <Card eyebrow="05" title={d.archAliases} text={d.archAliasesD}/>
      </div>
      <div className="bridge-architecture-flow">
        <span>your_resource</span><b>→</b><span>@pr_bridge/init.lua</span><b>→</b><span>adapter detection</span><b>→</b><span>normalizers</span><b>→</b><span>pr_lib.*</span>
      </div>
    </section>

    <section className="bridge-section" id="bridge-adapters">
      <div className="bridge-section-head"><span>04</span><div><p>{d.navAdapters}</p><h2>{d.adaptersTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.adaptersP}</p></div>
      <div className="bridge-provider-grid">
        {Object.entries(PROVIDERS).map(([name,items])=><article key={name}><h3>{name}</h3><div>{items.map(item=><span key={item}>{item}</span>)}</div></article>)}
      </div>
      <div className="bridge-note"><strong>{d.customTitle}</strong><p>{d.customP}</p></div>
    </section>

    <section className="bridge-section" id="bridge-core">
      <div className="bridge-section-head"><span>05</span><div><p>{d.navCore}</p><h2>{d.coreTitle}</h2></div></div>
      <div className="bridge-card-grid two">
        <Card eyebrow="CORE" title={d.coreLoaders} text={d.coreLoadersD}/>
        <Card eyebrow="I18N" title={d.coreLocale} text={d.coreLocaleD}/>
        <Card eyebrow="RPC" title={d.coreCallbacks} text={d.coreCallbacksD}/>
        <Card eyebrow="DX" title={d.coreCommands} text={d.coreCommandsD}/>
        <Card eyebrow="SECURITY" title={d.corePermissions} text={d.corePermissionsD}/>
        <Card eyebrow="DATA" title={d.coreDatabase} text={d.coreDatabaseD}/>
      </div>
      <Code>{"local config = pr_lib.loadJson('@my_resource/data/config', true)\nlocal player = pr_lib.cache.GetPlayer(source)\nlocal rows = pr_lib.db.query('SELECT * FROM players WHERE citizenid = ?', { citizenid })\n\npr_lib.callback.register('my_resource:getData', function(source, id)\n    return GetMyData(source, id)\nend)"}</Code>
    </section>

    <section className="bridge-section" id="bridge-ui">
      <div className="bridge-section-head"><span>06</span><div><p>{d.navUi}</p><h2>{d.uiTitle}</h2></div></div>
      <div className="bridge-card-grid">
        <Card eyebrow="MENU" title={d.uiMenus} text={d.uiMenusD}/>
        <Card eyebrow="FEEDBACK" title={d.uiNotify} text={d.uiNotifyD}/>
        <Card eyebrow="TARGET" title={d.uiTarget} text={d.uiTargetD}/>
        <Card eyebrow="PROGRESS" title={d.uiProgress} text={d.uiProgressD}/>
        <Card eyebrow="DUI" title={d.uiDui} text={d.uiDuiD}/>
      </div>
      <div className="bridge-note warning"><strong>{d.uiNoteTitle}</strong><p>{d.uiNote}</p></div>
    </section>

    <section className="bridge-section" id="bridge-cache">
      <div className="bridge-section-head"><span>07</span><div><p>{d.navCache}</p><h2>{d.cacheTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.cacheP1}</p><p>{d.cacheP2}</p></div>
      <Code>{"local value = pr_lib.cache.remember('expensive:key', function()\n    return BuildExpensiveValue()\nend, 5000)\n\npr_lib.cache.onChange('expensive:key', function(newValue, oldValue)\n    print('cache changed', oldValue, newValue)\nend)\n\npr_lib.cache.clearPrefix('metadata:')\npr_lib.cache.InvalidatePlayer(source)"}</Code>
      <div className="bridge-note"><strong>Cache vs StateBag</strong><p>{d.cacheGuidance}</p></div>
    </section>

    <section className="bridge-section" id="bridge-dev">
      <div className="bridge-section-head"><span>08</span><div><p>{d.navDev}</p><h2>{d.devTitle}</h2></div></div>
      <div className="bridge-card-grid two">
        <Card eyebrow="PLACEMENT" title={d.devPlacement} text={d.devPlacementD}/>
        <Card eyebrow="EDITOR" title={d.devGizmo} text={d.devGizmoD}/>
        <Card eyebrow="STREAMING" title={d.devStreaming} text={d.devStreamingD}/>
        <Card eyebrow="DEBUG" title={d.devDebug} text={d.devDebugD}/>
      </div>
    </section>

    <section className="bridge-section" id="bridge-fivem">
      <div className="bridge-section-head"><span>09</span><div><p>{d.navFiveM}</p><h2>{d.fivemTitle}</h2></div></div>
      <div className="bridge-card-grid two">
        <Card eyebrow="VEHICLES" title={d.fivemVehicle} text={d.fivemVehicleD}/>
        <Card eyebrow="WORLD" title={d.fivemWorld} text={d.fivemWorldD}/>
        <Card eyebrow="ASSETS" title={d.fivemVisual} text={d.fivemVisualD}/>
        <Card eyebrow="RAYCAST" title={d.fivemRaycast} text={d.fivemRaycastD}/>
      </div>
    </section>

    <section className="bridge-section" id="bridge-expand">
      <div className="bridge-section-head"><span>10</span><div><p>{d.navExtensibility}</p><h2>{d.expandTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.expandP1}</p><p>{d.expandP2}</p><p>{d.expandP3}</p></div>
      <Code>{"bridge/\n└── frameworks/\n    └── my_framework/\n        ├── client.lua\n        └── server.lua\n\nConfigBridge.frameworks = {\n    { resource = 'my_framework', folder = 'my_framework' },\n    -- existing providers...\n}"}</Code>
    </section>

    <section className="bridge-section" id="bridge-api">
      <div className="bridge-section-head"><span>11</span><div><p>{d.navApi}</p><h2>{d.apiTitle}</h2></div></div>
      <div className="bridge-prose"><p>{d.apiP}</p><p><strong>{d.contextsTitle}.</strong> {d.contextsP}</p></div>
      <div className="bridge-api-grid">
        {API_MODULES.map(([name,count])=><article key={name}><code>pr_lib.{name}</code><strong>{count}</strong><span>calls</span></article>)}
      </div>

      <h3 className="bridge-subtitle">{d.examplesTitle}</h3>
      <Code>{"-- Framework-agnostic player data\nlocal player = pr_lib.framework.GetPlayer(source)\nlocal job = pr_lib.framework.GetPlayerJob(source)\n\n-- Inventory-agnostic item check\nif pr_lib.inventory.HasItem(source, 'radio', 1) then\n    pr_lib.notifications.NotifyPlayer(source, {\n        title = 'Radio',\n        description = 'Access granted',\n        type = 'success'\n    })\nend\n\n-- Target-agnostic zone\npr_lib.target.addSphereZone({\n    name = 'my_zone',\n    coords = vec3(0.0, 0.0, 72.0),\n    radius = 1.5,\n    options = {{ label = 'Use', onSelect = function() print('used') end }}\n})"}</Code>

      <div className="bridge-production">
        <h3>{d.prodTitle}</h3>
        {[d.prod1,d.prod2,d.prod3,d.prod4].map((x,i)=><div key={x}><span>{String(i+1).padStart(2,'0')}</span><p>{x}</p></div>)}
      </div>
    </section>

    <section className="bridge-source-note"><span>PR BRIDGE</span><h2>{d.sourceTitle}</h2><p>{d.sourceP}</p></section>
  </div>;
}
