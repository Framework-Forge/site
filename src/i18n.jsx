import { createContext, useContext, useEffect, useMemo, useRef, useState } from 'react';

const LanguageContext = createContext(null);

export const LANGUAGES = [
  { code: 'en', label: 'EN', name: 'English' },
  { code: 'pt-BR', label: 'PT', name: 'Português (BR)' },
  { code: 'es', label: 'ES', name: 'Español' },
  { code: 'fr', label: 'FR', name: 'Français' },
];

const copy = {
  en: {
    intro: 'Introduction', about: 'About the project', reference: 'Reference',
    fundamentals: 'Fundamental elements', reusable: 'Reusable compositions',
    gameplay: 'Gameplay interfaces', complete: 'Complete interface blocks',
    openSource: 'Open Source', brazilWorld: 'Built in Brazil for the world',
    footer: 'Forge Project • Open ecosystem', reusableKit: 'Reusable Forge ecosystem components, organized by category.',
    heroEyebrow: 'Open source • Built in Brazil', heroTitleA: 'Forge', heroTitleB: 'Project',
    heroLead: 'An open-source framework team building a modern, scalable and well-documented ecosystem for the Rockstar modding community — from today’s platforms to the next generation.',
    explore: 'Explore the UI Kit', github: 'Forge on GitHub', heroCaption: 'Brazilian engineering. Global ambition.',
    bridgeAnnouncementEyebrow: 'Featured tool', bridgeAnnouncementTitle: 'PR Bridge — one compatibility layer for the entire FiveM stack.', bridgeAnnouncementDesc: 'A standalone and extensible developer platform for frameworks, inventories, databases, target, Interact, native UI, callbacks, caching, FiveM utilities and custom adapters — all exposed through a consistent pr_lib API.', bridgeAnnouncementButton: 'Explore PR Bridge',
    whoLabel: 'Who we are', whoTitle: 'A Brazilian team building in public.',
    whoP1: 'Forge is an independent open-source engineering team focused on raising the technical standard of the FiveM ecosystem through clear architecture, reusable tooling and long-term maintainability.',
    whoP2: 'Our goal is to build technology that starts in Brazil and can be adopted, audited and improved by developers anywhere in the world.',
    visionLabel: 'Our vision', visionTitle: 'One ecosystem, multiple generations.',
    legacyTitle: 'Legacy', legacyDesc: 'A stable and mature foundation for today’s FiveM servers and resources.',
    enhancedTitle: 'Enhanced', enhancedDesc: 'A forward-looking architecture prepared for GTA V Enhanced and its evolving ecosystem.',
    sixmTitle: 'SixM', sixmDesc: 'A long-term path for the next generation, when the platform and community are ready.',
    objectiveLabel: 'Our objective', objectiveTitle: 'Become a Brazilian open-source reference at global scale.',
    clarity: 'Clarity', clarityD: 'Predictable APIs, direct documentation and a structure developers can understand quickly.',
    performance: 'Performance', performanceD: 'Low overhead, deliberate networking and systems designed for real server workloads.',
    modularity: 'Modularity', modularityD: 'Use only what your project needs and replace parts without breaking the whole stack.',
    extensibility: 'Extensibility', extensibilityD: 'Build new systems on top of the framework without constantly modifying the core.',
    compatibility: 'Compatibility', compatibilityD: 'Integrate with the tools and resources already used across the wider ecosystem.',
    community: 'Community', communityD: 'Open development, review, contribution and shared technical knowledge.',
    nextLabel: 'Forge ecosystem', nextTitle: 'Made to evolve with the community.',
    nextDesc: 'The documentation will grow with installation guides, architecture, modules, APIs, events, exports, developer tooling, migration paths and platform-specific references.',
    legal: 'Forge is an independent community project and is not affiliated with Rockstar Games or Cfx.re.',
  },
  'pt-BR': {
    intro: 'Introdução', about: 'Sobre o projeto', reference: 'Referência',
    fundamentals: 'Elementos fundamentais', reusable: 'Composições reutilizáveis',
    gameplay: 'Interfaces para gameplay', complete: 'Blocos completos de interface',
    openSource: 'Open Source', brazilWorld: 'Feito no Brasil para o mundo',
    footer: 'Forge Project • Ecossistema aberto', reusableKit: 'Componentes reutilizáveis do ecossistema Forge, organizados por categoria.',
    heroEyebrow: 'Open source • Feito no Brasil', heroTitleA: 'Forge', heroTitleB: 'Project',
    heroLead: 'Uma equipe open source construindo um ecossistema moderno, escalável e bem documentado para a comunidade de modding da Rockstar — das plataformas atuais à próxima geração.',
    explore: 'Explorar o UI Kit', github: 'Forge no GitHub', heroCaption: 'Engenharia brasileira. Ambição global.',
    bridgeAnnouncementEyebrow: 'Ferramenta em destaque', bridgeAnnouncementTitle: 'PR Bridge — uma camada de compatibilidade para todo o ecossistema FiveM.', bridgeAnnouncementDesc: 'Uma plataforma standalone e expansível para frameworks, inventários, banco de dados, target, Interact, interface nativa, callbacks, cache, utilitários FiveM e adapters personalizados — tudo através de uma API pr_lib consistente.', bridgeAnnouncementButton: 'Explorar o PR Bridge',
    whoLabel: 'Quem somos', whoTitle: 'Uma equipe brasileira construindo em público.',
    whoP1: 'A Forge é uma equipe independente de engenharia open source focada em elevar o padrão técnico do ecossistema FiveM com arquitetura clara, ferramentas reutilizáveis e manutenção de longo prazo.',
    whoP2: 'Nosso objetivo é construir tecnologia que nasce no Brasil e pode ser adotada, auditada e aprimorada por desenvolvedores de qualquer lugar do mundo.',
    visionLabel: 'Nossa visão', visionTitle: 'Um ecossistema, múltiplas gerações.',
    legacyTitle: 'Legacy', legacyDesc: 'Uma base estável e madura para os servidores e recursos FiveM de hoje.',
    enhancedTitle: 'Enhanced', enhancedDesc: 'Uma arquitetura preparada para GTA V Enhanced e para a evolução do seu ecossistema.',
    sixmTitle: 'SixM', sixmDesc: 'Um caminho de longo prazo para a próxima geração, quando a plataforma e a comunidade estiverem prontas.',
    objectiveLabel: 'Nosso objetivo', objectiveTitle: 'Ser uma referência brasileira open source em escala global.',
    clarity: 'Clareza', clarityD: 'APIs previsíveis, documentação direta e uma estrutura que o desenvolvedor entende rapidamente.',
    performance: 'Performance', performanceD: 'Baixo overhead, rede planejada e sistemas desenhados para cargas reais de servidor.',
    modularity: 'Modularidade', modularityD: 'Use apenas o que seu projeto precisa e substitua partes sem quebrar todo o ecossistema.',
    extensibility: 'Extensibilidade', extensibilityD: 'Crie novos sistemas sobre a framework sem precisar modificar o core o tempo todo.',
    compatibility: 'Compatibilidade', compatibilityD: 'Integre com as ferramentas e recursos já usados pelo ecossistema.',
    community: 'Comunidade', communityD: 'Desenvolvimento aberto, revisão, contribuição e conhecimento técnico compartilhado.',
    nextLabel: 'Ecossistema Forge', nextTitle: 'Feito para evoluir com a comunidade.',
    nextDesc: 'A documentação crescerá com guias de instalação, arquitetura, módulos, APIs, eventos, exports, ferramentas de desenvolvimento, migração e referências específicas por plataforma.',
    legal: 'Forge é um projeto comunitário independente e não possui afiliação com Rockstar Games ou Cfx.re.',
  },
  es: {
    intro: 'Introducción', about: 'Sobre el proyecto', reference: 'Referencia',
    fundamentals: 'Elementos fundamentales', reusable: 'Composiciones reutilizables',
    gameplay: 'Interfaces de gameplay', complete: 'Bloques completos de interfaz',
    openSource: 'Open Source', brazilWorld: 'Hecho en Brasil para el mundo',
    footer: 'Forge Project • Ecosistema abierto', reusableKit: 'Componentes reutilizables del ecosistema Forge, organizados por categoría.',
    heroEyebrow: 'Open source • Hecho en Brasil', heroTitleA: 'Forge', heroTitleB: 'Project',
    heroLead: 'Un equipo open source que construye un ecosistema moderno, escalable y bien documentado para la comunidad de modding de Rockstar, desde las plataformas actuales hasta la próxima generación.',
    explore: 'Explorar el UI Kit', github: 'Forge en GitHub', heroCaption: 'Ingeniería brasileña. Ambición global.',
    bridgeAnnouncementEyebrow: 'Herramienta destacada', bridgeAnnouncementTitle: 'PR Bridge — una capa de compatibilidad para todo el ecosistema FiveM.', bridgeAnnouncementDesc: 'Una plataforma standalone y extensible para frameworks, inventarios, bases de datos, target, Interact, interfaz nativa, callbacks, caché, utilidades FiveM y adapters personalizados mediante una API pr_lib consistente.', bridgeAnnouncementButton: 'Explorar PR Bridge',
    whoLabel: 'Quiénes somos', whoTitle: 'Un equipo brasileño construyendo en público.',
    whoP1: 'Forge es un equipo independiente de ingeniería open source enfocado en elevar el nivel técnico del ecosistema FiveM mediante arquitectura clara, herramientas reutilizables y mantenimiento a largo plazo.',
    whoP2: 'Nuestro objetivo es crear tecnología que nace en Brasil y puede ser adoptada, auditada y mejorada por desarrolladores de todo el mundo.',
    visionLabel: 'Nuestra visión', visionTitle: 'Un ecosistema, múltiples generaciones.',
    legacyTitle: 'Legacy', legacyDesc: 'Una base estable y madura para los servidores y recursos FiveM actuales.',
    enhancedTitle: 'Enhanced', enhancedDesc: 'Una arquitectura preparada para GTA V Enhanced y la evolución de su ecosistema.',
    sixmTitle: 'SixM', sixmDesc: 'Un camino a largo plazo para la próxima generación cuando la plataforma y la comunidad estén listas.',
    objectiveLabel: 'Nuestro objetivo', objectiveTitle: 'Ser una referencia brasileña open source a escala global.',
    clarity: 'Claridad', clarityD: 'APIs previsibles, documentación directa y una estructura fácil de comprender.',
    performance: 'Rendimiento', performanceD: 'Bajo overhead, red planificada y sistemas diseñados para cargas reales.',
    modularity: 'Modularidad', modularityD: 'Usa solo lo que tu proyecto necesita y sustituye partes sin romper todo el ecosistema.',
    extensibility: 'Extensibilidad', extensibilityD: 'Construye nuevos sistemas sobre la framework sin modificar constantemente el core.',
    compatibility: 'Compatibilidad', compatibilityD: 'Integra herramientas y recursos que ya se usan en el ecosistema.',
    community: 'Comunidad', communityD: 'Desarrollo abierto, revisión, contribución y conocimiento técnico compartido.',
    nextLabel: 'Ecosistema Forge', nextTitle: 'Hecho para evolucionar con la comunidad.',
    nextDesc: 'La documentación crecerá con instalación, arquitectura, módulos, APIs, eventos, exports, herramientas de desarrollo, migración y referencias específicas por plataforma.',
    legal: 'Forge es un proyecto comunitario independiente y no está afiliado con Rockstar Games ni Cfx.re.',
  },
  fr: {
    intro: 'Introduction', about: 'À propos du projet', reference: 'Référence',
    fundamentals: 'Éléments fondamentaux', reusable: 'Compositions réutilisables',
    gameplay: 'Interfaces de gameplay', complete: 'Blocs d’interface complets',
    openSource: 'Open Source', brazilWorld: 'Conçu au Brésil pour le monde',
    footer: 'Forge Project • Écosystème ouvert', reusableKit: 'Composants réutilisables de l’écosystème Forge, organisés par catégorie.',
    heroEyebrow: 'Open source • Conçu au Brésil', heroTitleA: 'Forge', heroTitleB: 'Project',
    heroLead: 'Une équipe open source qui construit un écosystème moderne, évolutif et bien documenté pour la communauté de modding Rockstar, des plateformes actuelles à la prochaine génération.',
    explore: 'Explorer le UI Kit', github: 'Forge sur GitHub', heroCaption: 'Ingénierie brésilienne. Ambition mondiale.',
    bridgeAnnouncementEyebrow: 'Outil à la une', bridgeAnnouncementTitle: 'PR Bridge — une couche de compatibilité pour tout l’écosystème FiveM.', bridgeAnnouncementDesc: 'Une plateforme standalone et extensible pour frameworks, inventaires, bases de données, target, Interact, interface native, callbacks, cache, utilitaires FiveM et adapters personnalisés via une API pr_lib cohérente.', bridgeAnnouncementButton: 'Explorer PR Bridge',
    whoLabel: 'Qui sommes-nous', whoTitle: 'Une équipe brésilienne qui construit publiquement.',
    whoP1: 'Forge est une équipe indépendante d’ingénierie open source qui vise à élever le niveau technique de l’écosystème FiveM grâce à une architecture claire, des outils réutilisables et une maintenance durable.',
    whoP2: 'Notre objectif est de créer une technologie née au Brésil, adoptable, auditable et améliorable par des développeurs du monde entier.',
    visionLabel: 'Notre vision', visionTitle: 'Un écosystème, plusieurs générations.',
    legacyTitle: 'Legacy', legacyDesc: 'Une base stable et mature pour les serveurs et ressources FiveM actuels.',
    enhancedTitle: 'Enhanced', enhancedDesc: 'Une architecture tournée vers GTA V Enhanced et l’évolution de son écosystème.',
    sixmTitle: 'SixM', sixmDesc: 'Une trajectoire à long terme pour la prochaine génération lorsque la plateforme et la communauté seront prêtes.',
    objectiveLabel: 'Notre objectif', objectiveTitle: 'Devenir une référence open source brésilienne à l’échelle mondiale.',
    clarity: 'Clarté', clarityD: 'Des API prévisibles, une documentation directe et une structure facile à comprendre.',
    performance: 'Performance', performanceD: 'Peu de surcharge, un réseau maîtrisé et des systèmes conçus pour des charges réelles.',
    modularity: 'Modularité', modularityD: 'N’utilisez que ce dont votre projet a besoin et remplacez des parties sans casser l’ensemble.',
    extensibility: 'Extensibilité', extensibilityD: 'Construisez de nouveaux systèmes sans modifier constamment le core.',
    compatibility: 'Compatibilité', compatibilityD: 'Intégrez les outils et ressources déjà utilisés dans l’écosystème.',
    community: 'Communauté', communityD: 'Développement ouvert, revue, contribution et partage des connaissances techniques.',
    nextLabel: 'Écosystème Forge', nextTitle: 'Conçu pour évoluer avec la communauté.',
    nextDesc: 'La documentation s’enrichira avec l’installation, l’architecture, les modules, API, événements, exports, outils de développement, migrations et références propres à chaque plateforme.',
    legal: 'Forge est un projet communautaire indépendant et n’est affilié ni à Rockstar Games ni à Cfx.re.',
  },
};


const projectCopy = {
  en: {
    projects: 'Projects', tools: 'Tools', prBridgeTopicOverview: 'Overview', prBridgeTopicInstall: 'Installation', prBridgeTopicArchitecture: 'Architecture', prBridgeTopicAdapters: 'Adapters', prBridgeTopicFramework: 'Framework API', prBridgeTopicInventory: 'Inventory API', prBridgeTopicDatabase: 'Database API', prBridgeTopicUi: 'UI & menus', prBridgeTopicTarget: 'Target & interaction', prBridgeTopicCache: 'Cache', prBridgeTopicCallbacks: 'Callbacks & events', prBridgeTopicSecurity: 'Commands & permissions', prBridgeTopicDev: 'Developer tools', prBridgeTopicFiveM: 'FiveM utilities', prBridgeTopicDui: 'DUI', prBridgeTopicExpand: 'Extending PR Bridge', prBridgeTopicApi: 'API catalog', prBridgeTopicSourceAudit: 'Source audit', prBridgeNavDescription: 'Standalone compatibility, APIs and developer tooling', forgeLegacyOverviewNav: 'Overview', forgeLegacyNavDesc: 'Framework, resources and Forge Legacy architecture', xtNavDescription: 'Complete prison system documentation', elevatorNavDescription: 'Elevators, access control, DUI keypads and creator API', bankingNavDescription: 'Banking, shared accounts, admin panel, transactions and PR Bridge integration', dispatchNavDescription: 'Emergency dispatch, critical incidents, plate checks, in-game preferences and PR Bridge integration',
    legacyProjectEyebrow: 'Forge project • GTA V Legacy', legacyProjectLead: 'Forge Legacy is the Forge ecosystem for GTA V Legacy on FiveM: a framework, native resources and developer tooling designed to work together with a consistent architecture.',
    legacyProjectGithub: 'View on GitHub', legacyProjectExplore: 'Explore the framework', legacyProjectIdentity: 'Project identity', legacyProjectIdentityDesc: 'The Legacy branch of the Forge ecosystem, focused on the current GTA V/FiveM generation.',
    legacyFrameworkLabel: 'Framework', legacyFrameworkTitle: 'A technical foundation for building complete FiveM servers.',
    legacyFrameworkP1: 'Forge Legacy combines the core framework with a collection of resources that follow the same conventions for APIs, events, exports, interfaces and data flow.',
    legacyFrameworkP2: 'The goal is to reduce duplicated infrastructure between scripts and give server developers a predictable base that can be extended without constantly modifying the core.',
    legacyCoreTitle: 'Framework core', legacyCoreDesc: 'The central layer responsible for shared conventions, player services, data flow and integration points used by Forge resources.',
    legacyScriptsTitle: 'Native scripts', legacyScriptsDesc: 'Resources designed around the same architecture instead of isolated systems that reinvent state, interfaces and integrations.',
    legacyToolsTitle: 'Developer tooling', legacyToolsDesc: 'Reusable UI, debugging utilities, bridges and development conventions that make resources easier to build and maintain.',
    legacyScriptsLabel: 'Forge resources', legacyScriptsSectionTitle: 'Scripts designed as parts of one ecosystem.',
    legacyGameplayTitle: 'Gameplay systems', legacyGameplayDesc: 'Jobs, interactions, activities, vehicles, characters and other resources that shape the player experience.',
    legacySystemsTitle: 'Server systems', legacySystemsDesc: 'Administrative, persistence, synchronization and infrastructure resources built to operate alongside the framework.',
    legacyUiTitle: 'Interfaces and applications', legacyUiDesc: 'NUI experiences, HUD elements, applications and reusable components using the Forge visual language.',
    legacyIntegrationTitle: 'Bridges and integrations', legacyIntegrationDesc: 'Compatibility layers that connect Forge resources to external libraries and existing FiveM ecosystems.',
    legacyArchitectureLabel: 'Architecture', legacyArchitectureTitle: 'A layered ecosystem instead of disconnected scripts.',
    legacyStackCore: 'Provides the shared runtime, conventions and services used across the project.', legacyStackResources: 'Gameplay and server resources consume the core through stable interfaces.',
    legacyStackUi: 'Provides a common visual system and reusable NUI components.', legacyStackCommunityTitle: 'Community extensions', legacyStackCommunity: 'Projects can add their own resources while following the same documented contracts.',
    legacyOpenLabel: 'Open source', legacyOpenTitle: 'Built in public and designed to be extended.', legacyOpenDesc: 'Forge Legacy is intended to be inspected, learned from, contributed to and adapted by the community.',
    legacyCatalogLabel: 'Resources', legacyCatalogTitle: 'Forge Legacy projects and scripts.', legacyXtPrisonDesc: 'A complete prison resource with sentencing, inventory confiscation, roster, prison services, dynamic editor and configurable prison-break environments.', legacyPrElevatorDesc: 'A physical elevator system with DUI keypads, per-floor access control, keycards, passwords, group permissions, in-game placement tools and reusable creator/keypad exports.', legacyRenewedBankingDesc: 'A complete banking system with personal, job, gang and shared accounts, transactions, member management, admin configuration and integration exports.', legacyPsDispatchDesc: 'A Forge-enhanced emergency dispatch fork with critical priorities, call merging, hotspots, major incidents, plate-check history, personal in-game settings and PR Bridge integration.', legacyOpenDocs: 'Open docs',

    xtLead: 'A complete prison system for FiveM, integrated through PR Bridge, with sentencing, confiscated inventory, prisoner roster, prison jobs integration, dynamic configuration and a multi-environment prison-break system.',
    xtGithub: 'Repository', xtInstallButton: 'Installation', xtVersion: 'Version', xtDependency: 'Dependency', xtPlatforms: 'Frameworks', xtStorage: 'Storage',
    xtNavOverview: 'Overview', xtNavInstall: 'Install', xtNavConfig: 'Configuration', xtNavJail: 'Jail flow', xtNavBreak: 'Prison break', xtNavEditor: 'Editor', xtNavApi: 'API', xtNavDb: 'Database',
    xtOverviewLabel: 'Overview', xtOverviewTitle: 'One resource covering the complete prison lifecycle.',
    xtOverviewP1: 'xt-prison manages the full sentence lifecycle: applying a sentence, moving the player into prison, removing jobs when configured, confiscating inventory, tracking time, restoring allowed items and releasing the character.',
    xtOverviewP2: 'The resource was migrated to PR Bridge so framework, database, inventory, target, menus, notifications, emotes and minigames are consumed through a shared abstraction rather than framework-specific code scattered through the script.',
    xtFeatureSentence: 'Minutes, hours and days with real-time or game-time clocks, persistence across reconnects and a lifer mode.',
    xtFeatureInventory: 'Stores the original inventory in the database, clears it on entry and restores it on release while preserving allowed prison items.',
    xtFeatureRoster: 'Authorized staff can list prisoners, inspect remaining time, change sentences and release players.',
    xtFeatureBreak: 'Configurable hack terminals, required items, police requirements, alarms, cooldowns and door control.',
    xtFeatureEditor: 'An in-game administrative editor for prison locations, NPCs, sentence rules, doors, alarms and escape environments.',
    xtFeatureBridge: 'Framework and shared-service integration is handled exclusively through PR Bridge.',
    xtInstallLabel: 'Installation', xtInstallTitle: 'Install PR Bridge first, then xt-prison.', xtRequirementsTitle: 'Requirements',
    xtRequirementsP: 'The manifest declares pr_bridge as the only hard dependency. Framework, inventory, target, menus, notifications, database and other providers are resolved by PR Bridge.',
    xtImportant: 'Important', xtRestartNote: 'Start or restart pr_bridge before xt-prison. For door/editor changes, a full server restart is preferable when other resources also depend on the bridge.',
    xtFrameworksTitle: 'Integration layer', xtFrameworksP: 'Framework identity, character identifiers, jobs and shared services are resolved exclusively through PR Bridge.',
    xtDatabaseAutoTitle: 'Automatic database setup', xtDatabaseAutoP: 'On startup, the resource creates and validates its three tables. Existing legacy jailtime columns can be imported without deleting the original data.',
    xtConfigLabel: 'Configuration', xtConfigTitle: 'Static defaults plus a persistent in-game configuration layer.',
    xtConfigClient: 'Freedom point, checkout zone, prison entry alert, spawn points, uniforms, canteen, infirmary, emotes, dispatch and client behavior.',
    xtConfigServer: 'Jail command, unemployed job, canteen items, items allowed after release, police jobs, lifer identifiers and custom ban hook.',
    xtConfigBreak: 'Door group, prison boundary, terminals, required items, hack timing, alarm chances, item-removal chances, police requirement and minigame provider.',
    xtConfigJson: 'Verified runtime copy of the current settings. In database mode it is not the source of truth; in file mode it becomes the explicit storage source.',
    xtDynamicConfigTitle: 'Runtime configuration storage', xtDynamicConfigP: 'The default mode is database using xt_prison_settings with id=global. File mode can be selected through the xt-prison:settingsStorage convar and keeps a backup before writing.',
    xtJailLabel: 'Sentence lifecycle', xtJailTitle: 'Server-owned state with rollback, persistence and reconnect recovery.',
    xtFlowSentence: 'Sentence', xtFlowSentenceD: 'Police or administrators define amount, unit and clock. Server validation applies the sentence and persists it before client entry.',
    xtFlowEnter: 'Entry', xtFlowEnterD: 'The client removes the configured job, teleports to a random prison spawn, applies clothing, starts the entry flow and confiscates inventory after successful positioning.',
    xtFlowServe: 'Serve time', xtFlowServeD: 'Remaining time is stored per character. Real-time sentences continue while offline; game-time sentences tick using the configured seconds-per-minute value.',
    xtFlowRelease: 'Release', xtFlowReleaseD: 'The server confirms zero remaining time before the client returns the player to freedom and restores confiscated inventory.',
    xtSentenceClocks: 'Real time vs. game time', xtSentenceClocksP: 'Real-time sentences use an end timestamp and keep progressing while disconnected. Game-time sentences decrement while the prison loop is active, using gameMinuteSeconds.',
    xtPrisonLife: 'Prison services', xtPrisonLifeP: 'The prison includes checkout/time checking, a canteen NPC, infirmary/doctor NPC, roster, optional prison uniform, entry sound/emote and xt-prisonjobs hooks when that resource is running.',
    xtBreakLabel: 'Prison break', xtBreakTitle: 'Independent terminals, escape environments, alarms and door ownership.',
    xtBreakP1: 'Each terminal has server-owned busy/hacked state. The server validates distance, required item, police count, terminal ownership and configured door set before committing a successful hack.',
    xtBreakP2: 'Escape environments can own doors and alarm points independently. Multiple terminals may control the same door inside one environment; cooldown logic avoids relocking while another terminal still keeps it open.',
    xtBreakTargets: 'Sphere or polygon target zones are rebuilt when configuration changes and cleaned up on unload/restart.',
    xtBreakValidation: 'Distance, item quantity, police count, terminal reservation and player ownership are checked server-side.',
    xtBreakAlarms: 'Failure/success alarm probabilities and per-environment alarm duration are configurable; GTA alarm state is synchronized to clients.',
    xtBreakDoors: 'Door state goes through the PR Bridge doorlock adapter. Existing registered locks are reused; captured missing doors can be created in the forge-prison group.',
    xtBreakCooldown: 'Every terminal has an independent cooldown. Reservations are released on cancel, disconnect and unload.',
    xtBreakMinigames: 'The editor supports Circuit Breaker, Data Crack, Brute Force, Plasma Drilling and Fleeca Drilling through the Glitch minigame bridge.',
    xtEditorLabel: 'Administration', xtEditorTitle: 'Configure the prison from inside the game with /prisonconfig.',
    xtEditorP1: 'The editor uses PR Bridge context menus, input dialogs, draw-laser capture and positioning tools. Changes are normalized on the server, persisted and broadcast to connected clients without requiring a relog.',
    xtEditorP2: 'The system supports multiple escape environments, multiple canteen/doctor NPCs, door capture, terminal animation positions, alarm points and sphere/poly prison boundaries.',
    xtEditorGeneral: 'General options', xtEditorSentence: 'Sentence rules', xtEditorLocations: 'Locations and checkout', xtEditorNpcs: 'Canteen and doctor NPCs', xtEditorBoundary: 'Prison boundary', xtEditorEscapes: 'Escape environments', xtEditorDoors: 'Doors and locks', xtEditorTerminals: 'Hack terminals', xtEditorAlarms: 'Alarm points and tests',
    xtValidationStatus: 'Validation status', xtValidationStatusP: 'The repository documents Lua/unit-test validation for these editor and escape flows. Some notes still explicitly mark final in-FiveM homologation as pending, so production deployment should be tested on the target server.',
    xtCommandsLabel: 'Commands', xtCommandsTitle: 'Player, police and administration commands.',
    xtCmdJailtime: 'Shows the player remaining sentence time or lifer status.', xtCmdPrisoners: 'Opens the prisoner roster for authorized police/admin users.',
    xtCmdJail: 'Opens the jail input flow. Police can jail nearby players; admins may also jail themselves for testing.', xtCmdUnjail: 'Releases a player from prison when the actor is authorized.',
    xtCmdConfig: 'Opens the administrative prison configuration editor.', xtPermissionsTitle: 'Permissions',
    xtPermissionsP: 'Prison management is available to configured police jobs or administrators. Administrative access recognizes PR Bridge admin whitelist/ACE, xt-prison.admin, admin, group.admin, god and framework admin/god permission paths.',
    xtApiTitle: 'Server exports and integration surface.', xtExportJailPlayer: 'Applies a validated sentence using the same authoritative action flow used by commands and roster.',
    xtExportReleasePlayer: 'Releases a character through the authoritative release flow.', xtExportStatus: 'Returns jailed state, remaining minutes, sentence data, clock and configured maximum amount.',
    xtExportSetTime: 'Low-level compatibility setter for jail time/metadata.', xtExportCache: 'Returns the prison cache for a server player, or the local player cache on the client.',
    xtExportLifer: 'Checks whether a player identifier is configured as a lifer.', xtExportSettings: 'Returns a clone of the current normalized runtime settings.',
    xtExamples: 'Examples', xtCompatTitle: 'Integration events', xtCompatP: 'Legacy resource events remain available where needed, while new trusted integrations should prefer the documented server exports and PR Bridge services.',
    xtDbLabel: 'Database', xtDbTitle: 'Three tables owned by xt-prison.', xtDbPrison: 'Stores identifier, remaining jailtime and serialized sentence metadata.',
    xtDbItems: 'Stores confiscated inventory JSON by character owner until a complete restore succeeds.', xtDbSettings: 'Stores normalized configuration JSON in the global row and tracks updated_at.',
    xtMigrationP: 'The installer verifies table availability, adds the sentence column when needed and can import old framework jailtime values with INSERT IGNORE, preserving existing records and the original framework column.',
    xtIntegrationsLabel: 'Integrations', xtIntegrationsTitle: 'Built to work through shared providers rather than hard-coded framework dependencies.',
    xtPrBridgeP: 'Framework identity, jobs, database, inventory, interactions, UI, notifications, emotes, minigames, cache and door control are consumed exclusively through PR Bridge services.',
    xtDoorlockP: 'Door control, synchronization and lifecycle are handled through the PR Bridge door service while preserving geometry and resource IDs.',
    xtPrisonJobsP: 'When xt-prisonjobs is running, the resource calls its initialization and cleanup exports on prison entry/release.',
    xtMedicalTitle: 'Medical / dispatch / appearance', xtMedicalP: 'Client configuration exposes hooks for healing/revive behavior, dispatch alerts, emotes and restoring the player appearance so servers can plug in their preferred resources.',
    xtSourceLabel: 'Source review', xtSourceTitle: 'Documentation generated from the current Forge repository.', xtSourceP: 'This page reflects version 1.4.8 and the current source tree, including the PR Bridge migration, persistent settings editor, cache layer, door integration and prison-break environment work.',
  },

  'pt-BR': {
    projects: 'Projetos', tools: 'Ferramentas', prBridgeTopicOverview: 'Visão geral', prBridgeTopicInstall: 'Instalação', prBridgeTopicArchitecture: 'Arquitetura', prBridgeTopicAdapters: 'Adapters', prBridgeTopicFramework: 'API de Framework', prBridgeTopicInventory: 'API de Inventário', prBridgeTopicDatabase: 'API de Banco', prBridgeTopicUi: 'UI e menus', prBridgeTopicTarget: 'Target e interação', prBridgeTopicCache: 'Cache', prBridgeTopicCallbacks: 'Callbacks e eventos', prBridgeTopicSecurity: 'Comandos e permissões', prBridgeTopicDev: 'Ferramentas dev', prBridgeTopicFiveM: 'Utilitários FiveM', prBridgeTopicDui: 'DUI', prBridgeTopicExpand: 'Expandindo o PR Bridge', prBridgeTopicApi: 'Catálogo da API', prBridgeTopicSourceAudit: 'Auditoria do código', prBridgeNavDescription: 'Compatibilidade standalone, APIs e ferramentas para desenvolvimento', forgeLegacyOverviewNav: 'Visão geral', forgeLegacyNavDesc: 'Framework, recursos e arquitetura Forge Legacy', xtNavDescription: 'Documentação completa do sistema prisional', elevatorNavDescription: 'Elevadores, controle de acesso, teclados DUI e API de criação', bankingNavDescription: 'Banco, contas compartilhadas, painel admin, transações e integração PR Bridge', dispatchNavDescription: 'Dispatch de emergência, incidentes críticos, consultas de placa, preferências in-game e integração PR Bridge',
    legacyProjectEyebrow: 'Projeto Forge • GTA V Legacy', legacyProjectLead: 'Forge Legacy é o ecossistema da Forge para GTA V Legacy no FiveM: uma framework, recursos nativos e ferramentas para desenvolvedores criados para trabalhar juntos com uma arquitetura consistente.',
    legacyProjectGithub: 'Ver no GitHub', legacyProjectExplore: 'Explorar a framework', legacyProjectIdentity: 'Identidade do projeto', legacyProjectIdentityDesc: 'A vertente Legacy do ecossistema Forge, focada na geração atual de GTA V/FiveM.',
    legacyFrameworkLabel: 'Framework', legacyFrameworkTitle: 'Uma base técnica para construir servidores FiveM completos.',
    legacyFrameworkP1: 'Forge Legacy combina a framework principal com uma coleção de recursos que seguem as mesmas convenções de APIs, eventos, exports, interfaces e fluxo de dados.',
    legacyFrameworkP2: 'O objetivo é reduzir infraestrutura duplicada entre scripts e oferecer ao desenvolvedor uma base previsível que possa ser estendida sem modificar o core constantemente.',
    legacyCoreTitle: 'Core da framework', legacyCoreDesc: 'A camada central responsável por convenções compartilhadas, serviços do player, fluxo de dados e pontos de integração usados pelos recursos Forge.',
    legacyScriptsTitle: 'Scripts nativos', legacyScriptsDesc: 'Recursos desenvolvidos sobre a mesma arquitetura, evitando sistemas isolados que recriam estados, interfaces e integrações.',
    legacyToolsTitle: 'Ferramentas para desenvolvedores', legacyToolsDesc: 'UI reutilizável, utilitários de debug, bridges e convenções que facilitam criar e manter recursos.',
    legacyScriptsLabel: 'Recursos Forge', legacyScriptsSectionTitle: 'Scripts desenvolvidos como partes de um único ecossistema.',
    legacyGameplayTitle: 'Sistemas de gameplay', legacyGameplayDesc: 'Empregos, interações, atividades, veículos, personagens e outros recursos que moldam a experiência do jogador.',
    legacySystemsTitle: 'Sistemas de servidor', legacySystemsDesc: 'Recursos administrativos, persistência, sincronização e infraestrutura desenvolvidos para operar junto da framework.',
    legacyUiTitle: 'Interfaces e aplicativos', legacyUiDesc: 'NUIs, HUDs, aplicativos e componentes reutilizáveis usando a linguagem visual da Forge.',
    legacyIntegrationTitle: 'Bridges e integrações', legacyIntegrationDesc: 'Camadas de compatibilidade que conectam os recursos Forge a bibliotecas externas e ecossistemas FiveM existentes.',
    legacyArchitectureLabel: 'Arquitetura', legacyArchitectureTitle: 'Um ecossistema em camadas, não uma coleção de scripts desconectados.',
    legacyStackCore: 'Fornece o runtime compartilhado, convenções e serviços usados em todo o projeto.', legacyStackResources: 'Recursos de gameplay e servidor consomem o core por interfaces estáveis.',
    legacyStackUi: 'Fornece um sistema visual comum e componentes NUI reutilizáveis.', legacyStackCommunityTitle: 'Extensões da comunidade', legacyStackCommunity: 'Projetos podem adicionar seus próprios recursos seguindo os mesmos contratos documentados.',
    legacyOpenLabel: 'Open source', legacyOpenTitle: 'Desenvolvido em público e criado para ser estendido.', legacyOpenDesc: 'Forge Legacy foi pensado para ser estudado, auditado, aprimorado e adaptado pela comunidade.',
    legacyCatalogLabel: 'Recursos', legacyCatalogTitle: 'Projetos e scripts do Forge Legacy.', legacyXtPrisonDesc: 'Um sistema prisional completo com sentenças, apreensão de inventário, roster, serviços da prisão, editor dinâmico e ambientes configuráveis de fuga.', legacyPrElevatorDesc: 'Um sistema físico de elevadores com teclados DUI, controle de acesso por andar, cartões, senhas, permissões por grupo, posicionamento in-game e exports reutilizáveis de criação/keypad.', legacyRenewedBankingDesc: 'Sistema bancário completo com contas pessoais, jobs, gangs e compartilhadas, transações, gestão de membros, painel administrativo e exports de integração.', legacyPsDispatchDesc: 'Fork de dispatch aprimorado pela Forge com prioridade crítica, agrupamento de chamadas, hotspots, grandes incidentes, histórico de placas, configurações pessoais in-game e integração PR Bridge.', legacyOpenDocs: 'Abrir documentação',

    xtLead: 'Um sistema prisional completo para FiveM, integrado pelo PR Bridge, com sentenças, inventário apreendido, roster de presos, integração com jobs, configuração dinâmica e sistema de fuga com múltiplos ambientes.',
    xtGithub: 'Repositório', xtInstallButton: 'Instalação', xtVersion: 'Versão', xtDependency: 'Dependência', xtPlatforms: 'Frameworks', xtStorage: 'Persistência',
    xtNavOverview: 'Visão geral', xtNavInstall: 'Instalação', xtNavConfig: 'Configuração', xtNavJail: 'Fluxo da prisão', xtNavBreak: 'Fuga', xtNavEditor: 'Editor', xtNavApi: 'API', xtNavDb: 'Banco',
    xtOverviewLabel: 'Visão geral', xtOverviewTitle: 'Um recurso cobrindo todo o ciclo prisional.',
    xtOverviewP1: 'O xt-prison gerencia o ciclo completo da pena: aplicar sentença, mover o player para a prisão, remover emprego quando configurado, apreender inventário, controlar o tempo, preservar itens permitidos e liberar o personagem.',
    xtOverviewP2: 'O recurso foi migrado para o PR Bridge, então framework, banco, inventário, target, menus, notificações, emotes e minigames são consumidos por uma abstração compartilhada em vez de código específico espalhado pelo script.',
    xtFeatureSentence: 'Minutos, horas e dias com relógio em vida real ou tempo de jogo, persistência após reconnect e suporte a pena perpétua.',
    xtFeatureInventory: 'Salva o inventário original no banco, limpa na entrada e restaura na saída preservando os itens da prisão permitidos.',
    xtFeatureRoster: 'Policiais e administradores autorizados podem listar presos, ver tempo, alterar pena e soltar jogadores.',
    xtFeatureBreak: 'Terminais configuráveis, itens exigidos, quantidade mínima de policiais, alarmes, cooldowns e controle de portas.',
    xtFeatureEditor: 'Editor administrativo dentro do jogo para locais, NPCs, regras de pena, portas, alarmes e ambientes de fuga.',
    xtFeatureBridge: 'Framework e serviços compartilhados são integrados exclusivamente pelo PR Bridge.',
    xtInstallLabel: 'Instalação', xtInstallTitle: 'Instale o PR Bridge antes do xt-prison.', xtRequirementsTitle: 'Requisitos',
    xtRequirementsP: 'O manifest declara pr_bridge como única dependência obrigatória. Framework, inventário, target, menus, notificações, banco e outros providers são resolvidos pelo PR Bridge.',
    xtImportant: 'Importante', xtRestartNote: 'Inicie ou reinicie pr_bridge antes de xt-prison. Para alterações de porta/editor, é preferível reiniciar a base quando outros recursos também dependem do bridge.',
    xtFrameworksTitle: 'Camada de integração', xtFrameworksP: 'Identidade, identificadores, jobs e serviços compartilhados são resolvidos exclusivamente pelo PR Bridge.',
    xtDatabaseAutoTitle: 'Instalação automática do banco', xtDatabaseAutoP: 'Na inicialização, o recurso cria e valida suas três tabelas. Valores antigos de jailtime podem ser importados sem apagar a coluna ou os dados originais.',
    xtConfigLabel: 'Configuração', xtConfigTitle: 'Defaults estáticos mais uma camada persistente de configuração dentro do jogo.',
    xtConfigClient: 'Ponto de liberdade, checkout, alerta de entrada, spawns, uniforme, cantina, enfermaria, emotes, dispatch e comportamento client-side.',
    xtConfigServer: 'Comando de prisão, emprego desempregado, itens da cantina, itens permitidos após soltura, empregos policiais, lifers e hook de ban.',
    xtConfigBreak: 'Grupo de portas, limite da prisão, terminais, itens, duração do hack, chances de alarme/consumo, policiais mínimos e provider de minigame.',
    xtConfigJson: 'Cópia verificada das configurações atuais. Em modo database não é a fonte principal; em modo file passa a ser a origem explícita.',
    xtDynamicConfigTitle: 'Armazenamento dinâmico', xtDynamicConfigP: 'O padrão é database usando xt_prison_settings com id=global. O modo file pode ser selecionado pela convar xt-prison:settingsStorage e cria backup antes da escrita.',
    xtJailLabel: 'Ciclo da pena', xtJailTitle: 'Estado controlado pelo servidor com rollback, persistência e recuperação após reconnect.',
    xtFlowSentence: 'Sentença', xtFlowSentenceD: 'Policial ou admin define quantidade, unidade e relógio. O servidor valida, aplica e persiste antes da entrada client-side.',
    xtFlowEnter: 'Entrada', xtFlowEnterD: 'O cliente remove o emprego configurado, teleporta para um spawn aleatório, aplica roupa, executa o fluxo visual e só então apreende o inventário.',
    xtFlowServe: 'Cumprimento', xtFlowServeD: 'O tempo fica vinculado ao personagem. Vida real continua avançando offline; tempo do jogo reduz usando os segundos por minuto configurados.',
    xtFlowRelease: 'Soltura', xtFlowReleaseD: 'O servidor confirma tempo zero antes de devolver o player à liberdade e restaurar o inventário apreendido.',
    xtSentenceClocks: 'Vida real x tempo do jogo', xtSentenceClocksP: 'Vida real usa timestamp final e continua correndo desconectado. Tempo do jogo reduz enquanto o loop prisional está ativo, usando gameMinuteSeconds.',
    xtPrisonLife: 'Serviços da prisão', xtPrisonLifeP: 'Inclui checkout/consulta de tempo, NPC da cantina, médico, roster, uniforme opcional, som/emote de entrada e hooks para xt-prisonjobs quando iniciado.',
    xtBreakLabel: 'Fuga da prisão', xtBreakTitle: 'Terminais independentes, ambientes de fuga, alarmes e ownership de portas.',
    xtBreakP1: 'Cada terminal possui estado isBusy/isHacked controlado pelo servidor. O servidor valida distância, item, policiais, autoria da tentativa e portas antes de confirmar o hack.',
    xtBreakP2: 'Ambientes de fuga podem possuir portas e alarmes próprios. Vários terminais no mesmo ambiente podem controlar a mesma porta; o cooldown evita fechá-la enquanto outro terminal ainda a mantém aberta.',
    xtBreakTargets: 'As zonas de interação são recriadas pelo PR Bridge quando a configuração muda e removidas em unload/restart.',
    xtBreakValidation: 'Distância, quantidade de item, policiais, reserva do terminal e autoria da tentativa são validados no servidor.',
    xtBreakAlarms: 'Probabilidades de alarme em falha/sucesso e duração por ambiente são configuráveis e sincronizadas para os clientes.',
    xtBreakDoors: 'O estado das portas passa pelo adapter doorlock do PR Bridge. Trancas existentes são reutilizadas e portas faltantes podem ser capturadas no grupo forge-prison.',
    xtBreakCooldown: 'Cada terminal possui cooldown independente. Reservas são liberadas em cancelamento, disconnect e unload.',
    xtBreakMinigames: 'O editor suporta Circuit Breaker, Data Crack, Brute Force, Plasma Drilling e Fleeca Drilling pelo bridge de minigames Glitch.',
    xtEditorLabel: 'Administração', xtEditorTitle: 'Configure a prisão dentro do jogo com /prisonconfig.',
    xtEditorP1: 'O editor usa context menus, dialogs, Draw Laser e ferramentas de posicionamento do PR Bridge. Alterações são normalizadas no servidor, persistidas e publicadas para os clientes conectados sem relogar.',
    xtEditorP2: 'Há suporte a múltiplos ambientes de fuga, vários NPCs de cantina/médico, captura de portas, posição de animação dos terminais, pontos de alarme e limites sphere/poly.',
    xtEditorGeneral: 'Opções gerais', xtEditorSentence: 'Regras da pena', xtEditorLocations: 'Locais e checkout', xtEditorNpcs: 'NPCs da cantina e médico', xtEditorBoundary: 'Limite da prisão', xtEditorEscapes: 'Ambientes de fuga', xtEditorDoors: 'Portas e trancas', xtEditorTerminals: 'Terminais de hack', xtEditorAlarms: 'Alarmes e testes',
    xtValidationStatus: 'Status de validação', xtValidationStatusP: 'O repositório documenta validação em Lua/testes isolados dos fluxos de editor e fuga. Algumas notas ainda marcam homologação final dentro do FiveM como pendente, então o deploy de produção deve ser testado na base alvo.',
    xtCommandsLabel: 'Comandos', xtCommandsTitle: 'Comandos para jogador, polícia e administração.',
    xtCmdJailtime: 'Mostra o tempo restante da própria pena ou status de lifer.', xtCmdPrisoners: 'Abre o roster de presos para policiais/admins autorizados.',
    xtCmdJail: 'Abre o fluxo de prisão. Policiais prendem players próximos; admins também podem prender a si mesmos para teste.', xtCmdUnjail: 'Libera um jogador quando o executor possui autorização.',
    xtCmdConfig: 'Abre o editor administrativo da prisão.', xtPermissionsTitle: 'Permissões',
    xtPermissionsP: 'Gestão prisional aceita empregos policiais configurados ou administradores. O acesso admin reconhece whitelist/ACE do PR Bridge, xt-prison.admin, admin, group.admin, god e permissões admin/god da framework.',
    xtApiTitle: 'Exports de servidor e superfície de integração.', xtExportJailPlayer: 'Aplica sentença validada usando o mesmo fluxo autoritativo dos comandos e roster.',
    xtExportReleasePlayer: 'Libera um personagem pelo fluxo autoritativo de soltura.', xtExportStatus: 'Retorna status de prisão, minutos restantes, sentença, relógio e limite configurado.',
    xtExportSetTime: 'Setter de baixo nível mantido para compatibilidade de jailtime/metadata.', xtExportCache: 'Retorna o cache prisional de um player no servidor ou a visão local no cliente.',
    xtExportLifer: 'Verifica se o identificador do jogador está configurado como pena perpétua.', xtExportSettings: 'Retorna uma cópia das configurações normalizadas atuais.',
    xtExamples: 'Exemplos', xtCompatTitle: 'Eventos de integração', xtCompatP: 'Eventos legados do resource permanecem disponíveis quando necessários; novas integrações confiáveis devem preferir os exports documentados e os serviços do PR Bridge.',
    xtDbLabel: 'Banco de dados', xtDbTitle: 'Três tabelas pertencentes ao xt-prison.', xtDbPrison: 'Armazena identifier, jailtime restante e dados serializados da sentença.',
    xtDbItems: 'Armazena inventário apreendido em JSON por personagem até uma restauração completa.', xtDbSettings: 'Armazena as configurações normalizadas na linha global e controla updated_at.',
    xtMigrationP: 'O instalador valida as tabelas, adiciona a coluna sentence quando necessário e pode importar jailtime antigo com INSERT IGNORE, preservando registros existentes e a coluna original da framework.',
    xtIntegrationsLabel: 'Integrações', xtIntegrationsTitle: 'Construído sobre providers compartilhados, não dependências hard-coded de framework.',
    xtPrBridgeP: 'Identidade, jobs, banco, inventário, interações, UI, notificações, emotes, minigames, cache e controle de portas são consumidos exclusivamente pelos serviços do PR Bridge.',
    xtDoorlockP: 'Controle de portas, sincronização e lifecycle passam pelo serviço de portas do PR Bridge, preservando geometria e IDs do resource.',
    xtPrisonJobsP: 'Quando xt-prisonjobs está iniciado, o recurso chama exports de inicialização e limpeza na entrada/soltura.',
    xtMedicalTitle: 'Médico / dispatch / aparência', xtMedicalP: 'A configuração client expõe hooks para cura/revive, alertas de dispatch, emotes e restauração da aparência para integrar os recursos preferidos da base.',
    xtSourceLabel: 'Análise do código', xtSourceTitle: 'Documentação gerada a partir do repositório Forge atual.', xtSourceP: 'Esta página reflete a versão 1.4.8 e a árvore atual, incluindo migração para PR Bridge, editor persistente, cache, integração de portas e ambientes de fuga.',
  },

  es: {
    projects: 'Proyectos', tools: 'Herramientas', prBridgeTopicOverview: 'Visión general', prBridgeTopicInstall: 'Instalación', prBridgeTopicArchitecture: 'Arquitectura', prBridgeTopicAdapters: 'Adapters', prBridgeTopicFramework: 'API de Framework', prBridgeTopicInventory: 'API de Inventario', prBridgeTopicDatabase: 'API de Base de datos', prBridgeTopicUi: 'UI y menús', prBridgeTopicTarget: 'Target e interacción', prBridgeTopicCache: 'Cache', prBridgeTopicCallbacks: 'Callbacks y eventos', prBridgeTopicSecurity: 'Comandos y permisos', prBridgeTopicDev: 'Herramientas dev', prBridgeTopicFiveM: 'Utilidades FiveM', prBridgeTopicDui: 'DUI', prBridgeTopicExpand: 'Extender PR Bridge', prBridgeTopicApi: 'Catálogo API', prBridgeTopicSourceAudit: 'Auditoría del código', prBridgeNavDescription: 'Compatibilidad standalone, APIs y herramientas de desarrollo', forgeLegacyOverviewNav: 'Visión general', forgeLegacyNavDesc: 'Framework, recursos y arquitectura Forge Legacy', xtNavDescription: 'Documentación completa del sistema penitenciario', elevatorNavDescription: 'Ascensores, control de acceso, teclados DUI y API de creación', bankingNavDescription: 'Banco, cuentas compartidas, panel admin, transacciones e integración PR Bridge', dispatchNavDescription: 'Dispatch de emergencias, incidentes críticos, consultas de matrículas, preferencias in-game e integración PR Bridge',
    legacyProjectEyebrow: 'Proyecto Forge • GTA V Legacy', legacyProjectLead: 'Forge Legacy es el ecosistema de Forge para GTA V Legacy en FiveM: un framework, recursos nativos y herramientas diseñados para trabajar juntos con una arquitectura consistente.',
    legacyProjectGithub: 'Ver en GitHub', legacyProjectExplore: 'Explorar el framework', legacyProjectIdentity: 'Identidad del proyecto', legacyProjectIdentityDesc: 'La rama Legacy del ecosistema Forge para la generación actual de GTA V/FiveM.',
    legacyFrameworkLabel: 'Framework', legacyFrameworkTitle: 'Una base técnica para crear servidores FiveM completos.', legacyFrameworkP1: 'Forge Legacy combina el framework principal con recursos que siguen las mismas convenciones de APIs, eventos, exports, interfaces y flujo de datos.', legacyFrameworkP2: 'El objetivo es reducir infraestructura duplicada y ofrecer una base predecible que pueda ampliarse sin modificar constantemente el core.',
    legacyCoreTitle: 'Core del framework', legacyCoreDesc: 'Capa central de convenciones, servicios, datos e integraciones.', legacyScriptsTitle: 'Scripts nativos', legacyScriptsDesc: 'Recursos diseñados sobre la misma arquitectura en lugar de sistemas aislados.', legacyToolsTitle: 'Herramientas de desarrollo', legacyToolsDesc: 'UI reutilizable, utilidades, bridges y convenciones para crear y mantener recursos.',
    legacyScriptsLabel: 'Recursos Forge', legacyScriptsSectionTitle: 'Scripts diseñados como partes de un único ecosistema.', legacyGameplayTitle: 'Sistemas de gameplay', legacyGameplayDesc: 'Trabajos, interacciones, actividades, vehículos y personajes.', legacySystemsTitle: 'Sistemas de servidor', legacySystemsDesc: 'Administración, persistencia, sincronización e infraestructura.', legacyUiTitle: 'Interfaces y aplicaciones', legacyUiDesc: 'NUI, HUD, aplicaciones y componentes reutilizables.', legacyIntegrationTitle: 'Bridges e integraciones', legacyIntegrationDesc: 'Capas de compatibilidad con bibliotecas y ecosistemas FiveM.',
    legacyArchitectureLabel: 'Arquitectura', legacyArchitectureTitle: 'Un ecosistema en capas, no scripts desconectados.', legacyStackCore: 'Runtime, convenciones y servicios compartidos.', legacyStackResources: 'Recursos consumen el core mediante interfaces estables.', legacyStackUi: 'Sistema visual y componentes NUI reutilizables.', legacyStackCommunityTitle: 'Extensiones de la comunidad', legacyStackCommunity: 'Los proyectos pueden añadir recursos siguiendo contratos documentados.', legacyOpenLabel: 'Open source', legacyOpenTitle: 'Desarrollado en público y extensible.', legacyOpenDesc: 'Forge Legacy está pensado para ser estudiado, auditado, mejorado y adaptado.', legacyRenewedBankingDesc: 'Sistema bancario completo con cuentas personales, trabajos, gangs y compartidas, transacciones, gestión de miembros, panel administrativo y exports de integración.', legacyPsDispatchDesc: 'Fork de dispatch mejorado por Forge con prioridad crítica, agrupación de llamadas, hotspots, incidentes mayores, historial de matrículas, ajustes in-game e integración PR Bridge.',
    xtLead: 'Sistema penitenciario completo para FiveM integrado mediante PR Bridge, con sentencias, inventario confiscado, roster, configuración dinámica y fugas con múltiples entornos.', xtGithub: 'Repositorio', xtInstallButton: 'Instalación', xtVersion: 'Versión', xtDependency: 'Dependencia', xtPlatforms: 'Frameworks', xtStorage: 'Persistencia',
    xtNavOverview: 'Visión general', xtNavInstall: 'Instalación', xtNavConfig: 'Configuración', xtNavJail: 'Flujo de prisión', xtNavBreak: 'Fuga', xtNavEditor: 'Editor', xtNavApi: 'API', xtNavDb: 'Base de datos',
    xtOverviewLabel: 'Visión general', xtOverviewTitle: 'Un recurso para todo el ciclo penitenciario.', xtOverviewP1: 'xt-prison gestiona la sentencia, entrada, trabajo, confiscación de inventario, tiempo, devolución y liberación.', xtOverviewP2: 'La migración a PR Bridge centraliza framework, base de datos, inventario, target, menús, notificaciones, emotes y minijuegos.',
    xtFeatureSentence: 'Minutos, horas y días con reloj real o de juego, persistencia y cadena perpetua.', xtFeatureInventory: 'Guarda y restaura inventario conservando elementos permitidos.', xtFeatureRoster: 'Policía/admin puede listar, cambiar pena y liberar presos.', xtFeatureBreak: 'Terminales, requisitos, alarmas, cooldowns y puertas.', xtFeatureEditor: 'Editor in-game de ubicaciones, NPCs, reglas y fugas.', xtFeatureBridge: 'Framework y servicios compartidos se integran exclusivamente mediante PR Bridge.',
    xtInstallLabel: 'Instalación', xtInstallTitle: 'Instala PR Bridge antes de xt-prison.', xtRequirementsTitle: 'Requisitos', xtRequirementsP: 'pr_bridge es la única dependencia obligatoria del manifest; los demás providers se resuelven mediante el bridge.', xtImportant: 'Importante', xtRestartNote: 'Inicia/reinicia pr_bridge antes de xt-prison. Para cambios de puertas/editor se recomienda reinicio completo.',
    xtFrameworksTitle: 'Capa de integración', xtFrameworksP: 'Identidad, jobs y servicios compartidos se resuelven exclusivamente mediante PR Bridge.', xtDatabaseAutoTitle: 'Base de datos automática', xtDatabaseAutoP: 'Crea y valida tres tablas e importa jailtime legado sin borrar la columna original.',
    xtConfigLabel: 'Configuración', xtConfigTitle: 'Defaults estáticos y configuración persistente in-game.', xtConfigClient: 'Libertad, checkout, alertas, spawns, uniforme, cantina, médico, emotes y dispatch.', xtConfigServer: 'Comandos, trabajo desempleado, items, policías, lifers y hook de ban.', xtConfigBreak: 'Puertas, límites, terminales, items, tiempos, alarmas, policías y minijuego.', xtConfigJson: 'Copia verificada de settings; puede ser origen sólo en modo file.', xtDynamicConfigTitle: 'Persistencia dinámica', xtDynamicConfigP: 'Por defecto usa xt_prison_settings; file se habilita con xt-prison:settingsStorage.',
    xtJailLabel: 'Ciclo de sentencia', xtJailTitle: 'Estado autoritativo del servidor con persistencia y rollback.', xtFlowSentence: 'Sentencia', xtFlowSentenceD: 'Cantidad, unidad y reloj se validan y guardan en servidor.', xtFlowEnter: 'Entrada', xtFlowEnterD: 'Teleporte, ropa, cambio de job y confiscación después de entrar correctamente.', xtFlowServe: 'Cumplimiento', xtFlowServeD: 'Tiempo por personaje con reloj real offline o reloj de juego.', xtFlowRelease: 'Liberación', xtFlowReleaseD: 'Confirma tiempo cero y restaura inventario.', xtSentenceClocks: 'Tiempo real vs. juego', xtSentenceClocksP: 'El tiempo real usa endAt; el de juego usa gameMinuteSeconds.', xtPrisonLife: 'Servicios', xtPrisonLifeP: 'Checkout, cantina, médico, roster, uniforme, sonido/emote y hooks para xt-prisonjobs.',
    xtBreakLabel: 'Fuga', xtBreakTitle: 'Terminales, entornos, alarmas y puertas.', xtBreakP1: 'Servidor valida distancia, item, policías, ownership y puertas antes del éxito.', xtBreakP2: 'Los entornos separan puertas/alarmas y coordinan cooldowns.', xtBreakTargets: 'Sphere/Poly targets se reconstruyen con la configuración.', xtBreakValidation: 'Validación server-side de requisitos y autoría.', xtBreakAlarms: 'Probabilidades y duración por entorno.', xtBreakDoors: 'Adapter doorlock PR Bridge, reutilización/captura de puertas.', xtBreakCooldown: 'Cooldown independiente por terminal.', xtBreakMinigames: 'Circuit Breaker, Data Crack, Brute Force, Plasma y Fleeca Drilling.',
    xtEditorLabel: 'Administración', xtEditorTitle: 'Configura la prisión con /prisonconfig.', xtEditorP1: 'Usa menús, dialogs, Draw Laser y herramientas de posicionamiento de PR Bridge, persiste y sincroniza cambios.', xtEditorP2: 'Soporta múltiples fugas, NPCs, puertas, animaciones, alarmas y límites.', xtEditorGeneral: 'Opciones generales', xtEditorSentence: 'Reglas de sentencia', xtEditorLocations: 'Ubicaciones', xtEditorNpcs: 'NPCs', xtEditorBoundary: 'Límite', xtEditorEscapes: 'Entornos de fuga', xtEditorDoors: 'Puertas', xtEditorTerminals: 'Terminales', xtEditorAlarms: 'Alarmas', xtValidationStatus: 'Estado de validación', xtValidationStatusP: 'El repositorio documenta pruebas aisladas; algunas notas aún marcan homologación final en FiveM como pendiente.',
    xtCommandsLabel: 'Comandos', xtCommandsTitle: 'Comandos de jugador, policía y administración.', xtCmdJailtime: 'Muestra tiempo restante/lifer.', xtCmdPrisoners: 'Abre roster para autorizados.', xtCmdJail: 'Flujo para encarcelar jugadores cercanos; admin puede probar consigo mismo.', xtCmdUnjail: 'Libera un jugador autorizado.', xtCmdConfig: 'Abre editor administrativo.', xtPermissionsTitle: 'Permisos', xtPermissionsP: 'Police jobs configurados o admin vía PR Bridge/ACE/framework.',
    xtApiTitle: 'Exports de servidor e integración.', xtExportJailPlayer: 'Aplica sentencia validada.', xtExportReleasePlayer: 'Libera mediante flujo autoritativo.', xtExportStatus: 'Devuelve estado, tiempo y sentencia.', xtExportSetTime: 'Setter de integración.', xtExportCache: 'Devuelve cache de prisión.', xtExportLifer: 'Comprueba cadena perpetua.', xtExportSettings: 'Devuelve settings normalizados.', xtExamples: 'Ejemplos', xtCompatTitle: 'Integración', xtCompatP: 'Los eventos heredados del resource siguen disponibles cuando son necesarios; las nuevas integraciones deben preferir exports documentados y servicios PR Bridge.',
    xtDbLabel: 'Base de datos', xtDbTitle: 'Tres tablas propias.', xtDbPrison: 'Sentencia y tiempo por identifier.', xtDbItems: 'Inventario confiscado en JSON.', xtDbSettings: 'Configuración global y updated_at.', xtMigrationP: 'Valida tablas, añade sentence e importa valores legados sin sobrescribir.',
    xtIntegrationsLabel: 'Integraciones', xtIntegrationsTitle: 'Providers compartidos en lugar de dependencias hard-coded.', xtPrBridgeP: 'Identidad, jobs, base de datos, inventario, interacciones, UI, notificaciones, emotes, minijuegos, cache y puertas se consumen exclusivamente mediante PR Bridge.', xtDoorlockP: 'Control, sincronización y lifecycle de puertas mediante el servicio de PR Bridge.', xtPrisonJobsP: 'Inicializa/limpia xt-prisonjobs al entrar/salir.', xtMedicalTitle: 'Médico / dispatch / apariencia', xtMedicalP: 'Hooks configurables para integrar recursos del servidor.', xtSourceLabel: 'Revisión del código', xtSourceTitle: 'Documentación basada en el repositorio Forge actual.', xtSourceP: 'Refleja v1.4.8, migración PR Bridge, editor, cache, puertas y fugas.',
  },

  fr: {
    projects: 'Projets', tools: 'Outils', prBridgeTopicOverview: 'Vue d’ensemble', prBridgeTopicInstall: 'Installation', prBridgeTopicArchitecture: 'Architecture', prBridgeTopicAdapters: 'Adapters', prBridgeTopicFramework: 'API Framework', prBridgeTopicInventory: 'API Inventaire', prBridgeTopicDatabase: 'API Base de données', prBridgeTopicUi: 'UI et menus', prBridgeTopicTarget: 'Target et interaction', prBridgeTopicCache: 'Cache', prBridgeTopicCallbacks: 'Callbacks et événements', prBridgeTopicSecurity: 'Commandes et permissions', prBridgeTopicDev: 'Outils dev', prBridgeTopicFiveM: 'Utilitaires FiveM', prBridgeTopicDui: 'DUI', prBridgeTopicExpand: 'Étendre PR Bridge', prBridgeTopicApi: 'Catalogue API', prBridgeTopicSourceAudit: 'Audit du code', prBridgeNavDescription: 'Compatibilité standalone, APIs et outils de développement', forgeLegacyOverviewNav: 'Vue d’ensemble', forgeLegacyNavDesc: 'Framework, ressources et architecture Forge Legacy', xtNavDescription: 'Documentation complète du système pénitentiaire', elevatorNavDescription: 'Ascenseurs, contrôle d’accès, claviers DUI et API de création', bankingNavDescription: 'Banque, comptes partagés, panneau admin, transactions et intégration PR Bridge', dispatchNavDescription: 'Dispatch d’urgence, incidents critiques, contrôles de plaques, préférences in-game et intégration PR Bridge',
    legacyProjectEyebrow: 'Projet Forge • GTA V Legacy', legacyProjectLead: 'Forge Legacy est l’écosystème Forge pour GTA V Legacy sur FiveM : framework, ressources natives et outils conçus pour fonctionner ensemble avec une architecture cohérente.',
    legacyProjectGithub: 'Voir sur GitHub', legacyProjectExplore: 'Explorer le framework', legacyProjectIdentity: 'Identité du projet', legacyProjectIdentityDesc: 'La branche Legacy de Forge pour la génération actuelle GTA V/FiveM.',
    legacyFrameworkLabel: 'Framework', legacyFrameworkTitle: 'Une base technique pour construire des serveurs FiveM complets.', legacyFrameworkP1: 'Forge Legacy combine le framework et des ressources suivant les mêmes conventions API, événements, exports, interfaces et flux de données.', legacyFrameworkP2: 'L’objectif est de réduire l’infrastructure dupliquée et de fournir une base prévisible et extensible.',
    legacyCoreTitle: 'Core du framework', legacyCoreDesc: 'Couche centrale de conventions, services, données et intégrations.', legacyScriptsTitle: 'Scripts natifs', legacyScriptsDesc: 'Ressources construites sur la même architecture.', legacyToolsTitle: 'Outils développeur', legacyToolsDesc: 'UI réutilisable, debug, bridges et conventions.', legacyScriptsLabel: 'Ressources Forge', legacyScriptsSectionTitle: 'Des scripts comme parties d’un seul écosystème.', legacyGameplayTitle: 'Systèmes gameplay', legacyGameplayDesc: 'Métiers, interactions, activités, véhicules et personnages.', legacySystemsTitle: 'Systèmes serveur', legacySystemsDesc: 'Administration, persistance, synchronisation et infrastructure.', legacyUiTitle: 'Interfaces et applications', legacyUiDesc: 'NUI, HUD, applications et composants réutilisables.', legacyIntegrationTitle: 'Bridges et intégrations', legacyIntegrationDesc: 'Compatibilité avec bibliothèques et écosystèmes FiveM.',
    legacyArchitectureLabel: 'Architecture', legacyArchitectureTitle: 'Un écosystème en couches plutôt que des scripts isolés.', legacyStackCore: 'Runtime, conventions et services partagés.', legacyStackResources: 'Les ressources consomment le core via des interfaces stables.', legacyStackUi: 'Système visuel commun et composants NUI.', legacyStackCommunityTitle: 'Extensions communautaires', legacyStackCommunity: 'Les projets ajoutent leurs ressources selon les contrats documentés.', legacyOpenLabel: 'Open source', legacyOpenTitle: 'Développé publiquement et extensible.', legacyOpenDesc: 'Forge Legacy est conçu pour être étudié, audité, amélioré et adapté.', legacyRenewedBankingDesc: 'Système bancaire complet avec comptes personnels, métiers, gangs et partagés, transactions, gestion des membres, panneau admin et exports d’intégration.', legacyPsDispatchDesc: 'Fork de dispatch amélioré par Forge avec priorité critique, fusion des appels, hotspots, incidents majeurs, historique des plaques, réglages in-game et intégration PR Bridge.',
    xtLead: 'Système pénitentiaire complet pour FiveM intégré via PR Bridge, avec peines, inventaire confisqué, roster, configuration dynamique et évasions multi-environnements.', xtGithub: 'Dépôt', xtInstallButton: 'Installation', xtVersion: 'Version', xtDependency: 'Dépendance', xtPlatforms: 'Frameworks', xtStorage: 'Persistance',
    xtNavOverview: 'Vue d’ensemble', xtNavInstall: 'Installation', xtNavConfig: 'Configuration', xtNavJail: 'Cycle de peine', xtNavBreak: 'Évasion', xtNavEditor: 'Éditeur', xtNavApi: 'API', xtNavDb: 'Base de données',
    xtOverviewLabel: 'Vue d’ensemble', xtOverviewTitle: 'Une ressource pour tout le cycle pénitentiaire.', xtOverviewP1: 'xt-prison gère sentence, entrée, emploi, confiscation, temps, restitution et libération.', xtOverviewP2: 'La migration PR Bridge centralise framework, base de données, inventaire, target, menus, notifications, emotes et mini-jeux.',
    xtFeatureSentence: 'Minutes, heures, jours, temps réel/jeu, persistance et perpétuité.', xtFeatureInventory: 'Sauvegarde/restaure l’inventaire avec objets autorisés.', xtFeatureRoster: 'Police/admin peut lister, modifier les peines et libérer.', xtFeatureBreak: 'Terminaux, prérequis, alarmes, cooldowns et portes.', xtFeatureEditor: 'Éditeur in-game des lieux, NPC, règles et évasions.', xtFeatureBridge: 'Framework et services partagés sont intégrés exclusivement via PR Bridge.',
    xtInstallLabel: 'Installation', xtInstallTitle: 'Installez PR Bridge avant xt-prison.', xtRequirementsTitle: 'Prérequis', xtRequirementsP: 'pr_bridge est la seule dépendance obligatoire du manifest ; les autres providers passent par le bridge.', xtImportant: 'Important', xtRestartNote: 'Démarrez/redémarrez pr_bridge avant xt-prison. Un redémarrage complet est recommandé pour les changements de portes/éditeur.',
    xtFrameworksTitle: 'Couche d’intégration', xtFrameworksP: 'Identité, jobs et services partagés sont résolus exclusivement via PR Bridge.', xtDatabaseAutoTitle: 'Base automatique', xtDatabaseAutoP: 'Crée et valide trois tables et importe jailtime legacy sans supprimer la colonne d’origine.',
    xtConfigLabel: 'Configuration', xtConfigTitle: 'Valeurs statiques et configuration persistante in-game.', xtConfigClient: 'Liberté, checkout, alertes, spawns, uniforme, cantine, médecin, emotes, dispatch.', xtConfigServer: 'Commandes, job chômeur, items, police, perpétuité et ban hook.', xtConfigBreak: 'Portes, limites, terminaux, items, timings, alarmes, police et mini-jeu.', xtConfigJson: 'Copie vérifiée des settings ; source uniquement en mode file.', xtDynamicConfigTitle: 'Persistance dynamique', xtDynamicConfigP: 'Par défaut xt_prison_settings ; mode file via xt-prison:settingsStorage.',
    xtJailLabel: 'Cycle de peine', xtJailTitle: 'État autoritatif serveur avec persistance et rollback.', xtFlowSentence: 'Sentence', xtFlowSentenceD: 'Quantité, unité et horloge validées/persistées serveur.', xtFlowEnter: 'Entrée', xtFlowEnterD: 'Téléportation, tenue, job et confiscation après positionnement réussi.', xtFlowServe: 'Peine', xtFlowServeD: 'Temps par personnage, temps réel hors ligne ou temps de jeu.', xtFlowRelease: 'Libération', xtFlowReleaseD: 'Confirme zéro puis restaure l’inventaire.', xtSentenceClocks: 'Temps réel vs jeu', xtSentenceClocksP: 'Temps réel via endAt ; temps de jeu via gameMinuteSeconds.', xtPrisonLife: 'Services', xtPrisonLifeP: 'Checkout, cantine, médecin, roster, tenue, son/emote et hooks xt-prisonjobs.',
    xtBreakLabel: 'Évasion', xtBreakTitle: 'Terminaux, environnements, alarmes et portes.', xtBreakP1: 'Le serveur valide distance, item, policiers, propriété de tentative et portes.', xtBreakP2: 'Les environnements isolent portes/alarmes et coordonnent les cooldowns.', xtBreakTargets: 'Targets Sphere/Poly reconstruits avec la configuration.', xtBreakValidation: 'Validation serveur des prérequis.', xtBreakAlarms: 'Probabilités et durée par environnement.', xtBreakDoors: 'Adapter doorlock PR Bridge, réutilisation/capture des portes.', xtBreakCooldown: 'Cooldown indépendant par terminal.', xtBreakMinigames: 'Circuit Breaker, Data Crack, Brute Force, Plasma et Fleeca Drilling.',
    xtEditorLabel: 'Administration', xtEditorTitle: 'Configurez la prison avec /prisonconfig.', xtEditorP1: 'Menus, dialogs, Draw Laser et outils PR Bridge avec persistance/synchronisation.', xtEditorP2: 'Plusieurs évasions, NPC, portes, animations, alarmes et limites.', xtEditorGeneral: 'Options générales', xtEditorSentence: 'Règles de peine', xtEditorLocations: 'Emplacements', xtEditorNpcs: 'NPC', xtEditorBoundary: 'Limite', xtEditorEscapes: 'Environnements d’évasion', xtEditorDoors: 'Portes', xtEditorTerminals: 'Terminaux', xtEditorAlarms: 'Alarmes', xtValidationStatus: 'État de validation', xtValidationStatusP: 'Le dépôt documente des tests isolés ; certaines notes indiquent encore une homologation FiveM finale en attente.',
    xtCommandsLabel: 'Commandes', xtCommandsTitle: 'Commandes joueur, police et administration.', xtCmdJailtime: 'Affiche le temps restant/perpétuité.', xtCmdPrisoners: 'Ouvre le roster autorisé.', xtCmdJail: 'Flux de mise en prison des joueurs proches ; admin peut se tester.', xtCmdUnjail: 'Libère un joueur.', xtCmdConfig: 'Ouvre l’éditeur.', xtPermissionsTitle: 'Permissions', xtPermissionsP: 'Jobs police configurés ou admin via PR Bridge/ACE/framework.',
    xtApiTitle: 'Exports serveur et intégration.', xtExportJailPlayer: 'Applique une sentence validée.', xtExportReleasePlayer: 'Libère via le flux autoritatif.', xtExportStatus: 'Retourne état, temps et sentence.', xtExportSetTime: 'Setter d’intégration.', xtExportCache: 'Retourne le cache prison.', xtExportLifer: 'Vérifie la perpétuité.', xtExportSettings: 'Retourne les settings normalisés.', xtExamples: 'Exemples', xtCompatTitle: 'Intégration', xtCompatP: 'Les événements historiques de la ressource restent disponibles si nécessaire ; les nouvelles intégrations doivent préférer les exports documentés et les services PR Bridge.',
    xtDbLabel: 'Base de données', xtDbTitle: 'Trois tables propres.', xtDbPrison: 'Sentence et temps par identifiant.', xtDbItems: 'Inventaire confisqué JSON.', xtDbSettings: 'Configuration globale et updated_at.', xtMigrationP: 'Valide les tables, ajoute sentence et importe les anciennes valeurs sans écraser.',
    xtIntegrationsLabel: 'Intégrations', xtIntegrationsTitle: 'Providers partagés plutôt que dépendances framework codées en dur.', xtPrBridgeP: 'Framework, jobs, DB, inventaire, target, UI, notifications, emotes, mini-jeux, cache et doorlock via PR Bridge.', xtDoorlockP: 'Contrôle, synchronisation et cycle de vie des portes via le service PR Bridge.', xtPrisonJobsP: 'Initialise/nettoie xt-prisonjobs à l’entrée/sortie.', xtMedicalTitle: 'Médical / dispatch / apparence', xtMedicalP: 'Hooks configurables pour les ressources du serveur.', xtSourceLabel: 'Revue du code', xtSourceTitle: 'Documentation basée sur le dépôt Forge actuel.', xtSourceP: 'Reflète v1.4.8, migration PR Bridge, éditeur, cache, portes et évasions.',
  },
};

const uiText = {
  'Forgebox UI Kit': ['Forge UI Kit','Forge UI Kit','Forge UI Kit','Forge UI Kit'],
  'Componentes de UI': ['UI Components','Componentes de UI','Componentes de UI','Composants UI'],
  'Navegue por grupo e abra uma tela por componente.': ['Browse by group and open a page for each component.','Navegue por grupo e abra uma tela por componente.','Navega por grupo y abre una página por componente.','Parcourez les groupes et ouvrez une page par composant.'],
  'Docs': ['Docs','Docs','Docs','Docs'],
  'A area usa overflow para nao cortar os botoes como acontecia antes.': ['The area uses overflow so buttons are no longer clipped.','A área usa overflow para não cortar os botões como acontecia antes.','El área usa overflow para que los botones no se recorten.','La zone utilise overflow afin que les boutons ne soient plus coupés.'],
  'Badges simples': ['Simple badges','Badges simples','Badges simples','Badges simples'],
  'Ausente': ['Away','Ausente','Ausente','Absent'],
  'Indisponivel': ['Unavailable','Indisponível','No disponible','Indisponible'],
  'Text fields': ['Text fields','Campos de texto','Campos de texto','Champs texte'],
  'Nome do recurso': ['Resource name','Nome do recurso','Nombre del recurso','Nom de la ressource'],
  'Checks, radios e toggle': ['Checkboxes, radios and toggle','Checks, radios e toggle','Checks, radios y toggle','Cases, radios et toggle'],
  'Slider e segmented': ['Slider and segmented control','Slider e segmented','Slider y control segmentado','Slider et contrôle segmenté'],
  'Number, Range e Color': ['Number, Range and Color','Number, Range e Color','Number, Range y Color','Number, Range et Color'],
  'Upload e Tags': ['Upload and Tags','Upload e Tags','Upload y Tags','Upload et Tags'],
  'OTP e Phone': ['OTP and Phone','OTP e Phone','OTP y Phone','OTP et téléphone'],
  'Progress': ['Progress','Progresso','Progreso','Progression'],
  'Loading states': ['Loading states','Estados de loading','Estados de carga','États de chargement'],
  'TextUI e tooltip': ['TextUI and tooltip','TextUI e tooltip','TextUI y tooltip','TextUI et tooltip'],
  'Interagir': ['Interact','Interagir','Interactuar','Interagir'],
  'Toast e AlertBanner': ['Toast and AlertBanner','Toast e AlertBanner','Toast y AlertBanner','Toast et AlertBanner'],
  'ProgressToast e ConfirmDialog': ['ProgressToast and ConfirmDialog','ProgressToast e ConfirmDialog','ProgressToast y ConfirmDialog','ProgressToast et ConfirmDialog'],
  'Dashboard': ['Dashboard','Dashboard','Dashboard','Tableau de bord'],
  'Bloqueado': ['Blocked','Bloqueado','Bloqueado','Bloqué'],
  'ActionCard e EconomyCard': ['ActionCard and EconomyCard','ActionCard e EconomyCard','ActionCard y EconomyCard','ActionCard et EconomyCard'],
  'Garagem': ['Garage','Garagem','Garaje','Garage'],
  'Garagem Central': ['Central Garage','Garagem Central','Garaje central','Garage central'],
  'Menu editavel': ['Editable menu','Menu editável','Menú editable','Menu modifiable'],
  'Transparencia': ['Transparency','Transparência','Transparencia','Transparence'],
  'Compact': ['Compact','Compact','Compacto','Compact'],
  'Dialog de formulario no estilo Forge, com campos configuraveis e visual Forgebox.': ['Forge form dialog with configurable fields and Forge styling.','Dialog de formulário Forge com campos configuráveis e visual Forge.','Diálogo de formulario Forge con campos configurables y estilo Forge.','Dialogue de formulaire Forge avec champs configurables et style Forge.'],
  'Formulario configuravel': ['Configurable form','Formulário configurável','Formulario configurable','Formulaire configurable'],
  'Search': ['Search','Busca','Buscar','Recherche'],
  'Busca compacta, expansivel e command input para menus.': ['Compact, expandable search and command input for menus.','Busca compacta, expansível e command input para menus.','Búsqueda compacta, expandible y command input para menús.','Recherche compacte, extensible et command input pour les menus.'],
  'Expandir busca': ['Expand search','Expandir busca','Expandir búsqueda','Étendre la recherche'],
  'Digite um comando': ['Type a command','Digite um comando','Escribe un comando','Saisissez une commande'],
  'Pickers': ['Pickers','Seletores','Selectores','Sélecteurs'],
  'Date e Time': ['Date and Time','Data e Hora','Fecha y hora','Date et heure'],
  'Overlays': ['Overlays','Overlays','Overlays','Overlays'],
  'Dialog e Modal Clássico': ['Dialog and Classic Modal','Dialog e Modal Clássico','Dialog y modal clásico','Dialogue et modal classique'],
  'Modal Forgebox': ['Forge Modal','Modal Forge','Modal Forge','Modal Forge'],
  'Drawer e Popover': ['Drawer and Popover','Drawer e Popover','Drawer y Popover','Drawer et Popover'],
  'Atalho': ['Shortcut','Atalho','Atajo','Raccourci'],
  'Content': ['Content','Conteúdo','Contenido','Contenu'],
  'Card e SectionHeader': ['Card and SectionHeader','Card e SectionHeader','Card y SectionHeader','Card et SectionHeader'],
  'Resumo': ['Summary','Resumo','Resumen','Résumé'],
  'Status': ['Status','Status','Estado','Statut'],
  'Card compacto': ['Compact card','Card compacto','Card compacta','Card compacte'],
  'Tabs e Accordion': ['Tabs and Accordion','Tabs e Accordion','Tabs y Accordion','Tabs et Accordion'],
  'Sinais Vitais Interativos (Circular)': ['Interactive Vitals (Circular)','Sinais Vitais Interativos (Circular)','Vitales interactivos (Circular)','Constantes interactives (Circulaire)'],
  'Sinais Vitais em Grade Linear (Full)': ['Vitals in Linear Grid (Full)','Sinais Vitais em Grade Linear (Full)','Vitales en cuadrícula lineal (Full)','Constantes en grille linéaire (Full)'],
  'Gauges (Medidores)': ['Gauges','Gauges (Medidores)','Gauges (Medidores)','Jauges'],
  'Carga': ['Load','Carga','Carga','Charge'],
  'Aeronáutica e Náutica (Horizonte Artificial e Clinômetro)': ['Aviation and Nautical (Artificial Horizon & Clinometer)','Aeronáutica e Náutica (Horizonte Artificial e Clinômetro)','Aeronáutica y náutica (Horizonte artificial y clinómetro)','Aéronautique et nautisme (Horizon artificiel et clinomètre)'],
  'Shapes (Formas de HUD)': ['Shapes (HUD)','Shapes (Formas de HUD)','Shapes (Formas de HUD)','Shapes (HUD)'],
  'Regular Progresso das Shapes': ['Adjust Shape Progress','Regular Progresso das Shapes','Ajustar progreso de Shapes','Régler la progression des Shapes'],
  'Formas de Anel Progressivo (Rings)': ['Progressive Ring Shapes','Formas de Anel Progressivo (Rings)','Formas de anillo progresivo','Formes d’anneau progressif'],
  'Outros Estilos de Medição': ['Other Measurement Styles','Outros Estilos de Medição','Otros estilos de medición','Autres styles de mesure'],
  'Barra de NOS para HUD veicular, com estado ativo, critico e particulas de chama.': ['NOS bar for vehicle HUDs with active, critical and flame-particle states.','Barra de NOS para HUD veicular, com estado ativo, crítico e partículas de chama.','Barra NOS para HUD vehicular con estados activo, crítico y partículas de llama.','Barre NOS pour HUD véhicule avec états actif, critique et particules de flamme.'],
  'Estados do Nitro': ['Nitro States','Estados do Nitro','Estados del nitro','États du nitro'],
  'Simular NOS': ['Simulate NOS','Simular NOS','Simular NOS','Simuler le NOS'],
  'Contador animado de pontos, multiplicador e combo para corridas e eventos de drift.': ['Animated score, multiplier and combo counter for races and drift events.','Contador animado de pontos, multiplicador e combo para corridas e eventos de drift.','Contador animado de puntos, multiplicador y combo para carreras y drift.','Compteur animé de points, multiplicateur et combo pour courses et drift.'],
  'Pontuacao e combo': ['Score and combo','Pontuação e combo','Puntuación y combo','Score et combo'],
  'Simular pontos': ['Simulate points','Simular pontos','Simular puntos','Simuler les points'],
  'Indicador circular de marcha com zonas de RPM, neutro, reverso e redline.': ['Circular gear indicator with RPM zones, neutral, reverse and redline.','Indicador circular de marcha com zonas de RPM, neutro, reverso e redline.','Indicador circular de marcha con zonas RPM, neutro, reversa y redline.','Indicateur circulaire de rapport avec zones RPM, neutre, marche arrière et redline.'],
  'Marchas e RPM': ['Gears and RPM','Marchas e RPM','Marchas y RPM','Rapports et RPM'],
  'Simular RPM': ['Simulate RPM','Simular RPM','Simular RPM','Simuler les RPM'],
  'Barra superior com marca, acoes e usuario.': ['Top bar with brand, actions and user.','Barra superior com marca, ações e usuário.','Barra superior con marca, acciones y usuario.','Barre supérieure avec marque, actions et utilisateur.'],
  'Selecionar': ['Select','Selecionar','Seleccionar','Sélectionner'],
  'Breadcrumb e Stepper': ['Breadcrumb and Stepper','Breadcrumb e Stepper','Breadcrumb y Stepper','Breadcrumb et Stepper'],
  'TreeView e InfiniteScroll': ['TreeView and InfiniteScroll','TreeView e InfiniteScroll','TreeView y InfiniteScroll','TreeView et InfiniteScroll'],
  'Cards, timeline, heatmap e graficos SVG leves para dashboards do Forgebox.': ['Cards, timeline, heatmap and lightweight SVG charts for Forge dashboards.','Cards, timeline, heatmap e gráficos SVG leves para dashboards Forge.','Cards, timeline, heatmap y gráficos SVG ligeros para dashboards Forge.','Cards, timeline, heatmap et graphiques SVG légers pour les dashboards Forge.'],
  'StatCard e Sparkline': ['StatCard and Sparkline','StatCard e Sparkline','StatCard y Sparkline','StatCard et Sparkline'],
  'Timeline e HeatMap': ['Timeline and HeatMap','Timeline e HeatMap','Timeline y HeatMap','Timeline et HeatMap'],
  'PieChart e BarChart': ['PieChart and BarChart','PieChart e BarChart','PieChart y BarChart','PieChart et BarChart'],
  'Clique no titulo para alternar mes/ano. Use os botoes duplos para pular 10 anos.': ['Click the title to switch month/year. Use double buttons to jump 10 years.','Clique no título para alternar mês/ano. Use os botões duplos para pular 10 anos.','Haz clic en el título para alternar mes/año. Usa los botones dobles para saltar 10 años.','Cliquez sur le titre pour alterner mois/année. Utilisez les doubles boutons pour sauter 10 ans.'],
  'Frames e Stream': ['Frames and Stream','Frames e Stream','Frames y Stream','Frames et Stream'],
  'Salvar': ['Save','Salvar','Guardar','Enregistrer'],
  'Cancelar': ['Cancel','Cancelar','Cancelar','Annuler'],
  'Excluir': ['Delete','Excluir','Eliminar','Supprimer'],
  'Mais opcoes': ['More options','Mais opções','Más opciones','Plus d’options'],
  'Pequeno': ['Small','Pequeno','Pequeño','Petit'],
  'Grande': ['Large','Grande','Grande','Grand'],
  'Processando': ['Processing','Processando','Procesando','Traitement'],
  'Medio': ['Medium','Médio','Medio','Moyen'],
  'Perigo': ['Danger','Perigo','Peligro','Danger'],
  'Novo': ['New','Novo','Nuevo','Nouveau'],
  'Popular': ['Popular','Popular','Popular','Populaire'],
  'Abrir ConfirmDialog': ['Open ConfirmDialog','Abrir ConfirmDialog','Abrir ConfirmDialog','Ouvrir ConfirmDialog'],
  'Clique direito': ['Right click','Clique direito','Clic derecho','Clic droit'],
  'Abrir InputDialog': ['Open InputDialog','Abrir InputDialog','Abrir InputDialog','Ouvrir InputDialog'],
  'Ultimo submit': ['Last submit','Último envio','Último envío','Dernier envoi'],
  'Abrir Dialog': ['Open Dialog','Abrir Dialog','Abrir Dialog','Ouvrir Dialog'],
  'Abrir Modal': ['Open Modal','Abrir Modal','Abrir modal','Ouvrir le modal'],
  'Ajustar Todos os Vitais': ['Adjust All Vitals','Ajustar Todos os Vitais','Ajustar todos los vitales','Ajuster toutes les constantes'],
  'Conteúdo livre em modal.': ['Free content inside the modal.','Conteúdo livre em modal.','Contenido libre en el modal.','Contenu libre dans le modal.'],
  'Action Padrão': ['Default Action','Action Padrão','Acción predeterminada','Action par défaut'],
  'Action Aviso': ['Warning Action','Action Aviso','Acción de aviso','Action d’avertissement'],
  'Action Perigo': ['Danger Action','Action Perigo','Acción peligrosa','Action dangereuse'],
  'Esta ação aplica-se diretamente ao banco de dados operacional. Deseja realmente prosseguir?': ['This action applies directly to the operational database. Do you really want to continue?','Esta ação aplica-se diretamente ao banco de dados operacional. Deseja realmente prosseguir?','Esta acción se aplica directamente a la base de datos operativa. ¿Realmente deseas continuar?','Cette action s’applique directement à la base de données opérationnelle. Voulez-vous vraiment continuer ?'],
  'Abrir Drawer': ['Open Drawer','Abrir Drawer','Abrir Drawer','Ouvrir Drawer'],
  'Popover bottom': ['Popover bottom','Popover inferior','Popover inferior','Popover bas'],
  'Popover top': ['Popover top','Popover superior','Popover superior','Popover haut'],
  'Painel lateral com overflow controlado.': ['Side panel with controlled overflow.','Painel lateral com overflow controlado.','Panel lateral con overflow controlado.','Panneau latéral avec overflow contrôlé.'],
  'Status dos modulos.': ['Module status.','Status dos módulos.','Estado de los módulos.','Statut des modules.'],
  'Eventos recentes.': ['Recent events.','Eventos recentes.','Eventos recientes.','Événements récents.'],
  'Usuarios conectados.': ['Connected users.','Usuários conectados.','Usuarios conectados.','Utilisateurs connectés.'],
  'Tamanho Compacto (Padrão):': ['Compact Size (Default):','Tamanho Compacto (Padrão):','Tamaño compacto (Predeterminado):','Taille compacte (Par défaut) :'],
  'Tamanho Mini (Minimalista):': ['Mini Size (Minimal):','Tamanho Mini (Minimalista):','Tamaño mini (Minimalista):','Taille mini (Minimaliste) :'],
  'Aviso Crítico (< 20%):': ['Critical Warning (< 20%):','Aviso Crítico (< 20%):','Aviso crítico (< 20%):','Alerte critique (< 20 %) :'],
  'Estado de Morte (Caveira):': ['Death State (Skull):','Estado de Morte (Caveira):','Estado de muerte (Calavera):','État de mort (Crâne) :'],
  'Estilo Clássico (Agulha + Hodômetro):': ['Classic Style (Needle + Odometer):','Estilo Clássico (Agulha + Hodômetro):','Estilo clásico (Aguja + Odómetro):','Style classique (Aiguille + Odomètre) :'],
  'Estilo Arco Progressivo (RPM):': ['Progressive Arc Style (RPM):','Estilo Arco Progressivo (RPM):','Estilo arco progresivo (RPM):','Style arc progressif (RPM) :'],
  'Estilo Digital Puro:': ['Pure Digital Style:','Estilo Digital Puro:','Estilo digital puro:','Style numérique pur :'],
  'Horizonte Artificial:': ['Artificial Horizon:','Horizonte Artificial:','Horizonte artificial:','Horizon artificiel :'],
  'Clinômetro (Bolha de Escora PORT/STBD):': ['Clinometer (PORT/STBD Heel Bubble):','Clinômetro (Bolha de Escora PORT/STBD):','Clinómetro (Burbuja de escora PORT/STBD):','Clinomètre (Bulle de gîte PORT/STBD) :'],
  'Círculo': ['Circle','Círculo','Círculo','Cercle'],
  'Hexágono': ['Hexagon','Hexágono','Hexágono','Hexagone'],
  'Losango': ['Diamond','Losango','Rombo','Losange'],
  'Triângulo': ['Triangle','Triângulo','Triángulo','Triangle'],
  'Quadrado': ['Square','Quadrado','Cuadrado','Carré'],
  'Split Circle': ['Split Circle','Círculo dividido','Círculo dividido','Cercle séparé'],
  'Arqueado': ['Arched','Arqueado','Arqueado','Arqué'],
  'Pílula': ['Pill','Pílula','Píldora','Pilule'],
  'Distintivo': ['Badge','Distintivo','Distintivo','Insigne'],
  'Horizontal': ['Horizontal','Horizontal','Horizontal','Horizontal'],
  'Radial': ['Radial','Radial','Radial','Radial'],
  'Logs': ['Logs','Logs','Logs','Logs'],
  'Modulo': ['Module','Módulo','Módulo','Module'],
  'Novo modulo': ['New module','Novo módulo','Nuevo módulo','Nouveau module'],
  'Aplicativo GPS': ['GPS Application','Aplicativo GPS','Aplicación GPS','Application GPS'],
  'Descricao': ['Description','Descrição','Descripción','Description'],
  'Modulo ativo': ['Active module','Módulo ativo','Módulo activo','Module actif'],
  'Opcao 2': ['Option 2','Opção 2','Opción 2','Option 2'],
  'Dark mode': ['Dark mode','Modo escuro','Modo oscuro','Mode sombre'],
  'Faixa de ping': ['Ping range','Faixa de ping','Rango de ping','Plage de ping'],
  'Telefone': ['Phone','Telefone','Teléfono','Téléphone'],
  'Configuracao aplicada': ['Configuration applied','Configuração aplicada','Configuración aplicada','Configuration appliquée'],
  'Modulo salvo': ['Module saved','Módulo salvo','Módulo guardado','Module enregistré'],
  'Fila elevada': ['High queue','Fila elevada','Cola elevada','File élevée'],
  'Instalando pacote': ['Installing package','Instalando pacote','Instalando paquete','Installation du paquet'],
  'Modulos': ['Modules','Módulos','Módulos','Modules'],
  'Context menu Forge com metadata, progresso, checkbox, arrow e visual 100% editavel.': ['Forge context menu with metadata, progress, checkbox, arrow and a fully editable look.','Menu de contexto Forge com metadata, progresso, checkbox, arrow e visual 100% editável.','Menú contextual Forge con metadata, progreso, checkbox, flecha y visual totalmente editable.','Menu contextuel Forge avec métadonnées, progression, checkbox, flèche et apparence entièrement modifiable.'],
  'Mesmo componente em densidade menor.': ['Same component at a lower density.','Mesmo componente em densidade menor.','Mismo componente con menor densidad.','Même composant avec une densité réduite.'],
  'Esse e o menu pequeno; o RegisterContext continua separado.': ['This is the small menu; RegisterContext remains separate.','Esse é o menu pequeno; o RegisterContext continua separado.','Este es el menú pequeño; RegisterContext sigue separado.','Voici le petit menu ; RegisterContext reste séparé.'],
  'Search inputs': ['Search inputs','Inputs de busca','Inputs de búsqueda','Champs de recherche'],
  'CommandInput': ['CommandInput','CommandInput','CommandInput','CommandInput'],
  'Digite /': ['Type /','Digite /','Escribe /','Tapez /'],
  'Blip e Marker': ['Blip and Marker','Blip e Marker','Blip y Marker','Blip et Marker'],
  'Confirmar?': ['Confirm?','Confirmar?','¿Confirmar?','Confirmer ?'],
  'ActionModal (Novidade/Estilo MRI)': ['ActionModal (New/MRI Style)','ActionModal (Novidade/Estilo MRI)','ActionModal (Nuevo/Estilo MRI)','ActionModal (Nouveau/Style MRI)'],
  'Modais interativos baseados em gravidade/ações com variações e suporte a ícones.': ['Interactive modals based on gravity/actions with variants and icon support.','Modais interativos baseados em gravidade/ações com variações e suporte a ícones.','Modales interactivos basados en gravedad/acciones con variantes y soporte de iconos.','Modals interactifs basés sur gravité/actions avec variantes et prise en charge des icônes.'],
  'Demonstração visual do comportamento neon em estados alterados.': ['Visual demo of neon behavior in altered states.','Demonstração visual do comportamento neon em estados alterados.','Demostración visual del comportamiento neón en estados alterados.','Démo visuelle du comportement néon dans les états modifiés.'],
  'AnalogGauge (Velocímetro/Tacômetro)': ['AnalogGauge (Speedometer/Tachometer)','AnalogGauge (Velocímetro/Tacômetro)','AnalogGauge (Velocímetro/Tacómetro)','AnalogGauge (Compteur/Tachymètre)'],
  'Mostrador analógico completo com suporte a agulha física, preenchimento digital de arco ou exibição LCD de hodômetro.': ['Full analog display with physical needle, digital arc fill or LCD odometer display.','Mostrador analógico completo com suporte a agulha física, preenchimento digital de arco ou exibição LCD de hodômetro.','Display analógico completo con aguja física, arco digital o odómetro LCD.','Affichage analogique complet avec aiguille physique, arc numérique ou odomètre LCD.'],
  'Instrumentação específica para atitude de voo e indicador de escora (tubo curvo de bolha) para embarcações marítimas.': ['Specific instrumentation for flight attitude and heel indicator for marine vessels.','Instrumentação específica para atitude de voo e indicador de escora (tubo curvo de bolha) para embarcações marítimas.','Instrumentación específica para actitud de vuelo e indicador de escora para embarcaciones.','Instrumentation spécifique pour attitude de vol et indicateur de gîte des navires.'],
  'Geometrias vetorizadas neon compatíveis com o MRI HUD, suportando progresso dinâmico de borda (progressValue) e renderização de ícones.': ['Neon vector geometries compatible with MRI HUD, supporting dynamic border progress and icon rendering.','Geometrias vetorizadas neon compatíveis com o MRI HUD, suportando progresso dinâmico de borda (progressValue) e renderização de ícones.','Geometrías vectoriales neón compatibles con MRI HUD, con progreso dinámico de borde e iconos.','Géométries vectorielles néon compatibles MRI HUD, avec progression dynamique de bordure et icônes.'],
  'Breadcrumb, Stepper, TreeView, InfiniteScroll e SplitPane para telas densas de painel.': ['Breadcrumb, Stepper, TreeView, InfiniteScroll and SplitPane for dense dashboard screens.','Breadcrumb, Stepper, TreeView, InfiniteScroll e SplitPane para telas densas de painel.','Breadcrumb, Stepper, TreeView, InfiniteScroll y SplitPane para pantallas densas.','Breadcrumb, Stepper, TreeView, InfiniteScroll et SplitPane pour écrans denses.'],
  'ultima hora': ['last hour','última hora','última hora','dernière heure'],
  'sem erros': ['no errors','sem erros','sin errores','sans erreur'],
  'Mes, ano e decada': ['Month, year and decade','Mês, ano e década','Mes, año y década','Mois, année et décennie'],
  'Icones': ['Icons','Ícones','Iconos','Icônes'],
  'Novos Forms': ['Advanced Forms','Novos Forms','Formularios avanzados','Formulaires avancés'],
  'Novos Feedback': ['Advanced Feedback','Novos Feedback','Feedback avanzado','Feedback avancé'],
  'Acoes': ['Actions','Ações','Acciones','Actions'],
  'Imagem de usuario, fallback por iniciais, status e grupos sobrepostos para listas de equipe.': ['User image, initials fallback, status and overlapping groups for team lists.','Imagem de usuário, fallback por iniciais, status e grupos sobrepostos para listas de equipe.','Imagen de usuario, iniciales de respaldo, estado y grupos superpuestos para listas de equipo.','Image utilisateur, initiales de secours, statut et groupes superposés pour les listes d’équipe.'],
  'Com imagem': ['With image','Com imagem','Con imagen','Avec image'],
  'Foto, glow, status e cantos alternativos.': ['Photo, glow, status and alternate corners.','Foto, glow, status e cantos alternativos.','Foto, brillo, estado y esquinas alternativas.','Photo, lueur, statut et coins alternatifs.'],
  'Fallback por iniciais': ['Initials fallback','Fallback por iniciais','Respaldo por iniciales','Initiales de secours'],
  'Biblioteca visual para botoes, menus, HUDs e paineis administrativos.': ['Visual library for buttons, menus, HUDs and admin panels.','Biblioteca visual para botões, menus, HUDs e painéis administrativos.','Biblioteca visual para botones, menús, HUDs y paneles administrativos.','Bibliothèque visuelle pour boutons, menus, HUD et panneaux administratifs.'],
  'Grid principal': ['Main grid','Grid principal','Cuadrícula principal','Grille principale'],
  'Uso em acoes': ['Use in actions','Uso em ações','Uso en acciones','Utilisation dans les actions'],
  'Botoes de comando com variantes, tamanhos, loading e icones.': ['Command buttons with variants, sizes, loading states and icons.','Botões de comando com variantes, tamanhos, loading e ícones.','Botones de comando con variantes, tamaños, carga e iconos.','Boutons de commande avec variantes, tailles, chargement et icônes.'],
  'Variantes': ['Variants','Variantes','Variantes','Variantes'],
  'Tamanhos e icones': ['Sizes and icons','Tamanhos e ícones','Tamaños e iconos','Tailles et icônes'],
  'Etiquetas curtas para estados, avisos e metadados.': ['Short labels for states, notices and metadata.','Etiquetas curtas para estados, avisos e metadados.','Etiquetas cortas para estados, avisos y metadatos.','Étiquettes courtes pour états, alertes et métadonnées.'],
  'Campos de formulario e controles binarios/numericos.': ['Form fields and binary/numeric controls.','Campos de formulário e controles binários/numéricos.','Campos de formulario y controles binarios/numéricos.','Champs de formulaire et contrôles binaires/numériques.'],
  'Nome': ['Name','Nome','Nombre','Nom'], 'Descricao': ['Description','Descrição','Descripción','Description'],
  'Ativo': ['Active','Ativo','Activo','Actif'], 'Modulo ativo': ['Module active','Módulo ativo','Módulo activo','Module actif'],
  'Opcao 1': ['Option 1','Opção 1','Opción 1','Option 1'], 'Opcao 2': ['Option 2','Opção 2','Opción 2','Option 2'],
  'Intensidade': ['Intensity','Intensidade','Intensidad','Intensité'],
  'Inputs especializados para formularios de painel, cadastros e fluxos de seguranca.': ['Specialized inputs for dashboards, registration and security flows.','Inputs especializados para formulários de painel, cadastros e fluxos de segurança.','Inputs especializados para paneles, registros y flujos de seguridad.','Champs spécialisés pour tableaux de bord, inscriptions et flux de sécurité.'],
  'Prioridade': ['Priority','Prioridade','Prioridad','Priorité'], 'Faixa de ping': ['Ping range','Faixa de ping','Rango de ping','Plage de ping'],
  'Cor do modulo': ['Module color','Cor do módulo','Color del módulo','Couleur du module'],
  'Enviar imagem do recurso': ['Upload resource image','Enviar imagem do recurso','Subir imagen del recurso','Téléverser l’image de la ressource'],
  'Codigo de acesso': ['Access code','Código de acesso','Código de acceso','Code d’accès'], 'Telefone': ['Phone','Telefone','Teléfono','Téléphone'],
  'Loading, progresso, skeleton e texto de interface.': ['Loading, progress, skeleton and interface text.','Loading, progresso, skeleton e texto de interface.','Carga, progreso, skeleton y texto de interfaz.','Chargement, progression, skeleton et texte d’interface.'],
  'Avisos persistentes, toasts e confirmacoes para fluxos administrativos.': ['Persistent alerts, toasts and confirmations for admin flows.','Avisos persistentes, toasts e confirmações para fluxos administrativos.','Alertas persistentes, toasts y confirmaciones para flujos administrativos.','Alertes persistantes, toasts et confirmations pour les flux administratifs.'],
  'Salvo': ['Saved','Salvo','Guardado','Enregistré'], 'Configuracao aplicada': ['Configuration applied','Configuração aplicada','Configuración aplicada','Configuration appliquée'],
  'Fila alta': ['High queue','Fila alta','Cola alta','File d’attente élevée'],
  'As alteracoes foram aplicadas.': ['Changes were applied.','As alterações foram aplicadas.','Los cambios fueron aplicados.','Les modifications ont été appliquées.'],
  'Atualizacao disponivel': ['Update available','Atualização disponível','Actualización disponible','Mise à jour disponible'],
  'Revise os recursos antes de reiniciar o servidor.': ['Review resources before restarting the server.','Revise os recursos antes de reiniciar o servidor.','Revisa los recursos antes de reiniciar el servidor.','Vérifiez les ressources avant de redémarrer le serveur.'],
  'Jogadores aguardando entrada no servidor.': ['Players waiting to join the server.','Jogadores aguardando entrada no servidor.','Jugadores esperando para entrar al servidor.','Joueurs en attente de connexion au serveur.'],
  'Instalando': ['Installing','Instalando','Instalando','Installation'], 'Instalando pacote': ['Installing package','Instalando pacote','Instalando paquete','Installation du paquet'],
  'Reiniciar recurso?': ['Restart resource?','Reiniciar recurso?','¿Reiniciar recurso?','Redémarrer la ressource ?'],
  'Isso vai recarregar o recurso selecionado para todos os jogadores.': ['This will reload the selected resource for all players.','Isso vai recarregar o recurso selecionado para todos os jogadores.','Esto recargará el recurso seleccionado para todos los jugadores.','Cela rechargera la ressource sélectionnée pour tous les joueurs.'],
  'Controles compostos para dashboards e NUIs.': ['Composite controls for dashboards and NUIs.','Controles compostos para dashboards e NUIs.','Controles compuestos para dashboards y NUI.','Contrôles composites pour tableaux de bord et NUI.'],
  'Jogadores': ['Players','Jogadores','Jugadores','Joueurs'], 'Modulos': ['Modules','Módulos','Módulos','Modules'], 'Config': ['Settings','Config','Config','Paramètres'],
  'Gerencie veiculos': ['Manage vehicles','Gerencie veículos','Gestionar vehículos','Gérer les véhicules'],
  'Escolha uma acao para o veiculo selecionado.': ['Choose an action for the selected vehicle.','Escolha uma ação para o veículo selecionado.','Elige una acción para el vehículo seleccionado.','Choisissez une action pour le véhicule sélectionné.'],
  'Customizacao': ['Customization','Customização','Personalización','Personnalisation'],
  'Transparencia, blur e cor em tempo real.': ['Transparency, blur and color in real time.','Transparência, blur e cor em tempo real.','Transparencia, desenfoque y color en tiempo real.','Transparence, flou et couleur en temps réel.'],
  'Compacto': ['Compact','Compacto','Compacto','Compact'], 'Mesmo componente em densidade menor.': ['Same component at a lower density.','Mesmo componente em densidade menor.','Mismo componente con menor densidad.','Même composant avec une densité réduite.'],
  'Menu flutuante compacto inspirado no print, separado do RegisterContext e com subitens dentro.': ['Compact floating menu, separate from RegisterContext, with nested items.','Menu flutuante compacto, separado do RegisterContext, com subitens internos.','Menú flotante compacto, separado de RegisterContext, con subelementos.','Menu flottant compact, séparé de RegisterContext, avec sous-éléments.'],
  'Lista flutuante com submenus': ['Floating list with submenus','Lista flutuante com submenus','Lista flotante con submenús','Liste flottante avec sous-menus'],
  'Edicao rapida': ['Quick edit','Edição rápida','Edición rápida','Édition rapide'],
  'Criar personagem': ['Create character','Criar personagem','Crear personaje','Créer un personnage'],
  'Criar ficha do personagem': ['Create character profile','Criar ficha do personagem','Crear ficha del personaje','Créer la fiche du personnage'],
  'Preencha os dados principais antes de salvar no painel.': ['Fill in the main data before saving to the panel.','Preencha os dados principais antes de salvar no painel.','Completa los datos principales antes de guardar en el panel.','Renseignez les données principales avant d’enregistrer dans le panneau.'],
  'Buscar': ['Search','Buscar','Buscar','Rechercher'], 'Buscar jogador': ['Search player','Buscar jogador','Buscar jugador','Rechercher un joueur'],
  'Seletores de cor, blip, marcador, data e horario.': ['Color, blip, marker, date and time pickers.','Seletores de cor, blip, marcador, data e horário.','Selectores de color, blip, marcador, fecha y hora.','Sélecteurs de couleur, blip, marqueur, date et heure.'],
  'Dialog, drawer, modal e popover com exemplos isolados.': ['Dialog, drawer, modal and popover with isolated examples.','Dialog, drawer, modal e popover com exemplos isolados.','Dialog, drawer, modal y popover con ejemplos aislados.','Dialog, drawer, modal et popover avec exemples isolés.'],
  'Confirmar ação': ['Confirm action','Confirmar ação','Confirmar acción','Confirmer l’action'],
  'Deseja aplicar esta configuração?': ['Apply this configuration?','Deseja aplicar esta configuração?','¿Aplicar esta configuración?','Appliquer cette configuration ?'],
  'Salvar Alterações': ['Save Changes','Salvar Alterações','Guardar cambios','Enregistrer les modifications'],
  'Excluir Jogador': ['Delete Player','Excluir Jogador','Eliminar jugador','Supprimer le joueur'],
  'Configuracoes': ['Settings','Configurações','Configuraciones','Paramètres'],
  'Blocos de conteudo e navegacao local.': ['Content blocks and local navigation.','Blocos de conteúdo e navegação local.','Bloques de contenido y navegación local.','Blocs de contenu et navigation locale.'],
  'Resumo operacional': ['Operational summary','Resumo operacional','Resumen operativo','Résumé opérationnel'],
  'Status dos recursos ativos.': ['Status of active resources.','Status dos recursos ativos.','Estado de los recursos activos.','État des ressources actives.'],
  'Conteudo com altura natural, sem espaco vazio forcado.': ['Content with natural height, without forced empty space.','Conteúdo com altura natural, sem espaço vazio forçado.','Contenido con altura natural, sin espacio vacío forzado.','Contenu à hauteur naturelle, sans espace vide forcé.'],
  'HUD de vitais em formatos compactos, mini, completo e estado crítico/dead. Clique nos ícones para ajustar o valor individualmente via VitalAdjustModal.': ['Vitals HUD in compact, mini, full and critical/dead states. Click icons to adjust each value through VitalAdjustModal.','HUD de vitais em formatos compacto, mini, completo e crítico/dead. Clique nos ícones para ajustar individualmente via VitalAdjustModal.','HUD de vitales en formatos compacto, mini, completo y crítico/dead. Haz clic en los iconos para ajustar cada valor.','HUD de constantes en formats compact, mini, complet et critique/dead. Cliquez sur les icônes pour ajuster chaque valeur.'],
  'Demonstração interativa. Clique em qualquer ícone de vital para abrir o modal de ajuste individual.': ['Interactive demo. Click any vital icon to open the individual adjustment modal.','Demonstração interativa. Clique em qualquer ícone de vital para abrir o modal de ajuste individual.','Demostración interactiva. Haz clic en cualquier icono vital para abrir el ajuste individual.','Démo interactive. Cliquez sur une icône vitale pour ouvrir le réglage individuel.'],
  'Visual alternativo estilo barra de carregamento com glows gradientes de alto padrão.': ['Alternative loading-bar visual with high-end gradient glows.','Visual alternativo estilo barra de carregamento com glows gradientes de alto padrão.','Visual alternativo tipo barra de carga con brillos degradados.','Visuel alternatif type barre de chargement avec lueurs dégradées.'],
  'Estados Críticos e Simulação de Morte': ['Critical States and Death Simulation','Estados Críticos e Simulação de Morte','Estados críticos y simulación de muerte','États critiques et simulation de mort'],
  'Instrumentos analógicos e digitais de HUD para velocidade, rotação (RPM), náutica, aviação e off-road.': ['Analog and digital HUD instruments for speed, RPM, nautical, aviation and off-road use.','Instrumentos analógicos e digitais de HUD para velocidade, rotação (RPM), náutica, aviação e off-road.','Instrumentos HUD analógicos y digitales para velocidad, RPM, náutica, aviación y off-road.','Instruments HUD analogiques et numériques pour vitesse, RPM, nautisme, aviation et tout-terrain.'],
  'Simular Entrada de Dados': ['Simulate Data Input','Simular Entrada de Dados','Simular entrada de datos','Simuler l’entrée de données'],
  'Componentes interativos para cenas FiveM/NUI.': ['Interactive components for FiveM/NUI scenes.','Componentes interativos para cenas FiveM/NUI.','Componentes interactivos para escenas FiveM/NUI.','Composants interactifs pour scènes FiveM/NUI.'],
  'Fechar Radial': ['Close Radial','Fechar Radial','Cerrar radial','Fermer le radial'], 'Abrir Radial': ['Open Radial','Abrir Radial','Abrir radial','Ouvrir le radial'],
  'Abrir': ['Open','Abrir','Abrir','Ouvrir'], 'Fechar': ['Close','Fechar','Cerrar','Fermer'],
  'Barra superior com marca, acoes e usuario.': ['Top bar with brand, actions and user.','Barra superior com marca, ações e usuário.','Barra superior con marca, acciones y usuario.','Barre supérieure avec marque, actions et utilisateur.'],
  'Navegacao lateral e layout de painel sem cortes no preview.': ['Side navigation and panel layout without preview clipping.','Navegação lateral e layout de painel sem cortes no preview.','Navegación lateral y layout de panel sin cortes en la vista previa.','Navigation latérale et mise en page sans coupure dans l’aperçu.'],
  'Navegacao e Layout': ['Navigation and Layout','Navegação e Layout','Navegación y layout','Navigation et mise en page'],
  'Data e Visualizacao': ['Data and Visualization','Dados e Visualização','Datos y visualización','Données et visualisation'],
  'Online': ['Online','Online','En línea','En ligne'], 'ultima hora': ['last hour','última hora','última hora','dernière heure'],
  'Recursos': ['Resources','Recursos','Recursos','Ressources'], 'sem erros': ['no errors','sem erros','sin errores','sans erreur'],
  'Calendario com navegacao por mes, ano e decada.': ['Calendar with month, year and decade navigation.','Calendário com navegação por mês, ano e década.','Calendario con navegación por mes, año y década.','Calendrier avec navigation par mois, année et décennie.'],
  'Dias': ['Days','Dias','Días','Jours'], 'Mes, ano e decada': ['Month, year and decade','Mês, ano e década','Mes, año y década','Mois, année et décennie'],
  'Tabela paginada com componentes nas celulas.': ['Paginated table with components inside cells.','Tabela paginada com componentes nas células.','Tabla paginada con componentes en las celdas.','Tableau paginé avec composants dans les cellules.'],
  'Tabela padrao': ['Default table','Tabela padrão','Tabla predeterminada','Tableau par défaut'],
  'Molduras e displays imersivos para NUI.': ['Immersive frames and displays for NUI.','Molduras e displays imersivos para NUI.','Marcos y pantallas inmersivas para NUI.','Cadres et affichages immersifs pour NUI.'],
  'Central de notificacoes e demos de chamadas.': ['Notification center and call demos.','Central de notificações e demos de chamadas.','Centro de notificaciones y demos de llamadas.','Centre de notifications et démos d’appels.'],
};


const uiTextRuntime = {
  'Falha ao copiar o codigo:': ['Failed to copy code:','Falha ao copiar o código:','Error al copiar el código:','Échec de la copie du code :'],
  'Copiado!': ['Copied!','Copiado!','¡Copiado!','Copié !'],
  'Copiar': ['Copy','Copiar','Copiar','Copier'],
  'Sucesso!': ['Success!','Sucesso!','¡Éxito!','Succès !'],
  'O recurso foi inicializado corretamente.': ['The resource started successfully.','O recurso foi inicializado corretamente.','El recurso se inició correctamente.','La ressource a démarré correctement.'],
  'Informação!': ['Information!','Informação!','¡Información!','Information !'],
  'Carregando atualizações do servidor...': ['Loading server updates...','Carregando atualizações do servidor...','Cargando actualizaciones del servidor...','Chargement des mises à jour du serveur...'],
  'Erro!': ['Error!','Erro!','¡Error!','Erreur !'],
  'Banco de dados offline. Tentando reconectar...': ['Database offline. Trying to reconnect...','Banco de dados offline. Tentando reconectar...','Base de datos sin conexión. Intentando reconectar...','Base de données hors ligne. Tentative de reconnexion...'],
  'Fechar': ['Close','Fechar','Cerrar','Fermer'],
  'Polícia': ['Police','Polícia','Policía','Police'],
  'Veículo': ['Vehicle','Veículo','Vehículo','Véhicule'],
  'Mecânico': ['Mechanic','Mecânico','Mecánico','Mécanicien'],
  'Voltar 10 anos': ['Back 10 years','Voltar 10 anos','Retroceder 10 años','Reculer de 10 ans'],
  'Voltar': ['Back','Voltar','Volver','Retour'],
  'Avancar': ['Next','Avançar','Avanzar','Suivant'],
  'Avancar 10 anos': ['Forward 10 years','Avançar 10 anos','Avanzar 10 años','Avancer de 10 ans'],
  'Conta Bancária': ['Bank Account','Conta Bancária','Cuenta bancaria','Compte bancaire'],
  'Digite um comando (ex: help, status)...': ['Type a command (e.g. help, status)...','Digite um comando (ex: help, status)...','Escribe un comando (ej. help, status)...','Saisissez une commande (ex. help, status)...'],
  'Buscar...': ['Search...','Buscar...','Buscar...','Rechercher...'],
  'Pesquisar...': ['Search...','Pesquisar...','Buscar...','Rechercher...'],
  'Aviso do Sistema': ['System Warning','Aviso do Sistema','Aviso del sistema','Avertissement système'],
  'Soltar arquivo aqui ou clicar para selecionar': ['Drop a file here or click to select','Soltar arquivo aqui ou clicar para selecionar','Suelta un archivo aquí o haz clic para seleccionar','Déposez un fichier ici ou cliquez pour sélectionner'],
  'Carregando mais itens...': ['Loading more items...','Carregando mais itens...','Cargando más elementos...','Chargement de plus d’éléments...'],
  'Input Dialog': ['Input Dialog','Input Dialog','Input Dialog','Input Dialog'],
  'Círculo Planal': ['Flat Circle','Círculo Planal','Círculo plano','Cercle plat'],
  'Anel Rotativo': ['Rotating Ring','Anel Rotativo','Anillo giratorio','Anneau rotatif'],
  'Hexágono': ['Hexagon','Hexágono','Hexágono','Hexagone'],
  'México': ['Mexico','México','México','Mexique'],
  'França': ['France','França','Francia','France'],
  'Japão': ['Japan','Japão','Japón','Japon'],
  'Índia': ['India','Índia','India','Inde'],
  'Brasil': ['Brazil','Brasil','Brasil','Brésil'],
  'EUA': ['USA','EUA','EE. UU.','États-Unis'],
  'Portugal': ['Portugal','Portugal','Portugal','Portugal'],
  'Argentina': ['Argentina','Argentina','Argentina','Argentine'],
  'Alemanha': ['Germany','Alemanha','Alemania','Allemagne'],
  'Reino Unido': ['United Kingdom','Reino Unido','Reino Unido','Royaume-Uni'],
  'Espanha': ['Spain','Espanha','España','Espagne'],
  'China': ['China','China','China','Chine'],
  'Buscar país...': ['Search country...','Buscar país...','Buscar país...','Rechercher un pays...'],
  'Fome': ['Hunger','Fome','Hambre','Faim'],
  'Sede': ['Thirst','Sede','Sed','Soif'],
  'Estresse': ['Stress','Estresse','Estrés','Stress'],
  'Fôlego': ['Breath','Fôlego','Aliento','Souffle'],
  'Carregando...': ['Loading...','Carregando...','Cargando...','Chargement...'],
  'Fácil': ['Easy','Fácil','Fácil','Facile'],
  'Médio': ['Medium','Médio','Medio','Moyen'],
  'Difícil': ['Hard','Difícil','Difícil','Difficile'],
  'Pressione ESPAÇO agora!': ['Press SPACE now!','Pressione ESPAÇO agora!','¡Pulsa ESPACIO ahora!','Appuyez sur ESPACE maintenant !'],
  'Online': ['Online','Online','En línea','En ligne'],
  'Offline': ['Offline','Offline','Fuera de línea','Hors ligne'],
  'Sucesso': ['Success','Sucesso','Éxito','Succès'],
  'Aviso': ['Warning','Aviso','Aviso','Avertissement'],
  'Erro': ['Error','Erro','Error','Erreur'],
  'Adicionar tag...': ['Add tag...','Adicionar tag...','Añadir etiqueta...','Ajouter une étiquette...'],
  'Jogador': ['Player','Jogador','Jugador','Joueur'],
  'Aplicar': ['Apply','Aplicar','Aplicar','Appliquer'],
  'Saúde (Vida)': ['Health','Saúde (Vida)','Salud','Santé'],
  'Colete (Armadura)': ['Armor','Colete (Armadura)','Armadura','Armure'],
  'Fome (Alimentação)': ['Hunger','Fome (Alimentação)','Hambre','Faim'],
  'Sede (Hidratação)': ['Thirst','Sede (Hidratação)','Sed','Soif'],
  'Estresse (Menta)': ['Stress','Estresse (Menta)','Estrés','Stress'],
  'Fome (Hunger)': ['Hunger','Fome','Hambre','Faim'],
  'Sede (Thirst)': ['Thirst','Sede','Sed','Soif'],
  'Estresse (Stress)': ['Stress','Estresse','Estrés','Stress'],
  'Fôlego (Breath)': ['Breath','Fôlego','Aliento','Souffle'],
  'Status Selecionado': ['Selected Status','Status Selecionado','Estado seleccionado','Statut sélectionné'],
  'Valor Atual': ['Current Value','Valor Atual','Valor actual','Valeur actuelle'],
  'Ajustador de Vitais (NUI Dev)': ['Vitals Adjuster (NUI Dev)','Ajustador de Vitais (NUI Dev)','Ajustador de vitales (NUI Dev)','Réglage des constantes (NUI Dev)'],
  'Anterior': ['Previous','Anterior','Anterior','Précédent'],
  'Próximo': ['Next','Próximo','Siguiente','Suivant'],
  'Passos': ['Steps','Passos','Pasos','Étapes'],
  'Texto demonstrativo': ['Demo text','Texto demonstrativo','Texto de demostración','Texte de démonstration'],
  'Descricao do personagem...': ['Character description...','Descrição do personagem...','Descripción del personaje...','Description du personnage...'],
  'Aviso Importante': ['Important Warning','Aviso Importante','Aviso importante','Avertissement important'],
  'Servidor iniciado': ['Server started','Servidor iniciado','Servidor iniciado','Serveur démarré'],
  'Todos os recursos principais carregaram.': ['All main resources loaded.','Todos os recursos principais carregaram.','Todos los recursos principales cargados.','Toutes les ressources principales sont chargées.'],
  'Snapshot automatico salvo no painel.': ['Automatic snapshot saved to the panel.','Snapshot automático salvo no painel.','Snapshot automático guardado en el panel.','Snapshot automatique enregistré dans le panneau.'],
  'Pico de jogadores': ['Player peak','Pico de jogadores','Pico de jugadores','Pic de joueurs'],
  'Fila ativa e 94 jogadores online.': ['Active queue and 94 players online.','Fila ativa e 94 jogadores online.','Cola activa y 94 jugadores en línea.','File active et 94 joueurs en ligne.'],
  'Abre configuracoes': ['Opens settings','Abre configurações','Abre configuraciones','Ouvre les paramètres'],
  'Reiniciar': ['Restart','Reiniciar','Reiniciar','Redémarrer'],
  'ESC fecha o menu - Enter confirma a opcao ativa': ['ESC closes the menu - Enter confirms the active option','ESC fecha o menu - Enter confirma a opção ativa','ESC cierra el menú - Enter confirma la opción activa','Échap ferme le menu - Entrée confirme l’option active'],
  'Guardar na garagem': ['Store in garage','Guardar na garagem','Guardar en el garaje','Ranger au garage'],
  'Sincroniza estado, dano e combustivel.': ['Synchronizes state, damage and fuel.','Sincroniza estado, dano e combustível.','Sincroniza estado, daño y combustible.','Synchronise l’état, les dégâts et le carburant.'],
  'Abre submenu de jogadores proximos.': ['Opens nearby players submenu.','Abre submenu de jogadores próximos.','Abre el submenú de jugadores cercanos.','Ouvre le sous-menu des joueurs proches.'],
  'Salvar ficha': ['Save profile','Salvar ficha','Guardar ficha','Enregistrer la fiche'],
  'Ativar personagem apos criar': ['Activate character after creation','Ativar personagem após criar','Activar personaje después de crearlo','Activer le personnage après création'],
  'Observacoes': ['Notes','Observações','Observaciones','Notes'],
  'Abrir dashboard': ['Open dashboard','Abrir dashboard','Abrir dashboard','Ouvrir le tableau de bord'],
  'Reiniciar modulo': ['Restart module','Reiniciar módulo','Reiniciar módulo','Redémarrer le module'],
  'Confirmar Atualização': ['Confirm Update','Confirmar Atualização','Confirmar actualización','Confirmer la mise à jour'],
  'Exclusão Permanente': ['Permanent Deletion','Exclusão Permanente','Eliminación permanente','Suppression définitive'],
  'Confirmar Ação': ['Confirm Action','Confirmar Ação','Confirmar acción','Confirmer l’action'],
  'Pode abrir para cima tambem': ['Can also open upward','Pode abrir para cima também','También puede abrir hacia arriba','Peut aussi s’ouvrir vers le haut'],
  'Historico de alteracoes.': ['Change history.','Histórico de alterações.','Historial de cambios.','Historique des modifications.'],
  'Defina um novo valor para este vital do jogador Forgie.': ['Set a new value for this Forgie player vital.','Defina um novo valor para este vital do jogador Forgie.','Define un nuevo valor para este vital del jugador Forgie.','Définissez une nouvelle valeur pour cette constante du joueur Forgie.'],
  'Painel administrativo': ['Admin panel','Painel administrativo','Panel administrativo','Panneau d’administration'],
  'Configurar': ['Configure','Configurar','Configurar','Configurer'],
  'Clique no titulo para escolher o mes.': ['Click the title to choose the month.','Clique no título para escolher o mês.','Haz clic en el título para elegir el mes.','Cliquez sur le titre pour choisir le mois.'],
  'Clique no ano para abrir a grade da decada.': ['Click the year to open the decade grid.','Clique no ano para abrir a grade da década.','Haz clic en el año para abrir la cuadrícula de la década.','Cliquez sur l’année pour ouvrir la grille de la décennie.'],
  'Use os botoes duplos para navegar por decadas.': ['Use the double buttons to navigate by decades.','Use os botões duplos para navegar por décadas.','Usa los botones dobles para navegar por décadas.','Utilisez les doubles boutons pour naviguer par décennies.'],
  'Aviso Crítico (&lt; 20%):': ['Critical Warning (< 20%):','Aviso Crítico (< 20%):','Aviso crítico (< 20%):','Alerte critique (< 20 %) :'],
  'Janeiro': ['January','Janeiro','Enero','Janvier'],
  'Fevereiro': ['February','Fevereiro','Febrero','Février'],
  'Marco': ['March','Março','Marzo','Mars'],
  'Abril': ['April','Abril','Abril','Avril'],
  'Maio': ['May','Maio','Mayo','Mai'],
  'Junho': ['June','Junho','Junio','Juin'],
  'Julho': ['July','Julho','Julio','Juillet'],
  'Agosto': ['August','Agosto','Agosto','Août'],
  'Setembro': ['September','Setembro','Septiembre','Septembre'],
  'Outubro': ['October','Outubro','Octubre','Octobre'],
  'Novembro': ['November','Novembro','Noviembre','Novembre'],
  'Dezembro': ['December','Dezembro','Diciembre','Décembre'],
  'Jan': ['Jan','Jan','Ene','Jan'],
  'Fev': ['Feb','Fev','Feb','Fév'],
  'Mar': ['Mar','Mar','Mar','Mar'],
  'Abr': ['Apr','Abr','Abr','Avr'],
  'Mai': ['May','Mai','May','Mai'],
  'Jun': ['Jun','Jun','Jun','Juin'],
  'Jul': ['Jul','Jul','Jul','Juil'],
  'Ago': ['Aug','Ago','Ago','Aoû'],
  'Set': ['Sep','Set','Sep','Sep'],
  'Out': ['Oct','Out','Oct','Oct'],
  'Nov': ['Nov','Nov','Nov','Nov'],
  'Dez': ['Dec','Dez','Dic','Déc'],
  'Dom': ['Sun','Dom','Dom','Dim'],
  'Seg': ['Mon','Seg','Lun','Lun'],
  'Ter': ['Tue','Ter','Mar','Mar'],
  'Qua': ['Wed','Qua','Mié','Mer'],
  'Qui': ['Thu','Qui','Jue','Jeu'],
  'Sex': ['Fri','Sex','Vie','Ven'],
  'Sab': ['Sat','Sáb','Sáb','Sam'],
};

const runtimePatterns = [
  {
    match: /^Mostrando (\d+) - (\d+) de (\d+)$/,
    render: {
      en: (m) => `Showing ${m[1]} - ${m[2]} of ${m[3]}`,
      'pt-BR': (m) => `Mostrando ${m[1]} - ${m[2]} de ${m[3]}`,
      es: (m) => `Mostrando ${m[1]} - ${m[2]} de ${m[3]}`,
      fr: (m) => `Affichage de ${m[1]} à ${m[2]} sur ${m[3]}`,
    },
  },
  {
    match: /^Tamanho máximo: (.+)$/,
    render: {
      en: (m) => `Maximum size: ${m[1]}`,
      'pt-BR': (m) => `Tamanho máximo: ${m[1]}`,
      es: (m) => `Tamaño máximo: ${m[1]}`,
      fr: (m) => `Taille maximale : ${m[1]}`,
    },
  },
  {
    match: /^"(.+)" excede (.+)$/,
    render: {
      en: (m) => `"${m[1]}" exceeds ${m[2]}`,
      'pt-BR': (m) => `"${m[1]}" excede ${m[2]}`,
      es: (m) => `"${m[1]}" supera ${m[2]}`,
      fr: (m) => `"${m[1]}" dépasse ${m[2]}`,
    },
  },
  {
    match: /^Ajustar Status de (.+)$/,
    render: {
      en: (m) => `Adjust ${m[1]}'s Status`,
      'pt-BR': (m) => `Ajustar Status de ${m[1]}`,
      es: (m) => `Ajustar estado de ${m[1]}`,
      fr: (m) => `Ajuster le statut de ${m[1]}`,
    },
  },
  {
    match: /^Novo valor para (.+)$/,
    render: {
      en: (m) => `New value for ${m[1]}`,
      'pt-BR': (m) => `Novo valor para ${m[1]}`,
      es: (m) => `Nuevo valor para ${m[1]}`,
      fr: (m) => `Nouvelle valeur pour ${m[1]}`,
    },
  },
  {
    match: /^(Janeiro|Fevereiro|Marco|Abril|Maio|Junho|Julho|Agosto|Setembro|Outubro|Novembro|Dezembro) (\d{4})$/,
    render: null,
  },
];

const langIndex = { en: 0, 'pt-BR': 1, es: 2, fr: 3 };

const translationReverseLookup = new Map();

function registerReverseTranslations(source) {
  Object.entries(source).forEach(([key, values]) => {
    translationReverseLookup.set(key, key);
    values.forEach((value) => {
      if (typeof value === 'string' && value) translationReverseLookup.set(value, key);
    });
  });
}

registerReverseTranslations(uiText);
registerReverseTranslations(uiTextRuntime);

function getCanonicalTranslationKey(value) {
  return translationReverseLookup.get(value) || value;
}

function translateLegacyText(value, locale) {
  const index = langIndex[locale] ?? 0;
  const canonicalValue = getCanonicalTranslationKey(value);
  const row = uiText[canonicalValue] || uiTextRuntime[canonicalValue];
  if (row) return row[index];

  for (const pattern of runtimePatterns) {
    const match = value.match(pattern.match);
    if (!match) continue;

    if (pattern.render) {
      const renderer = pattern.render[locale] || pattern.render.en;
      return renderer(match);
    }

    const translatedMonth = (uiTextRuntime[match[1]] || uiText[match[1]])?.[index] || match[1];
    return `${translatedMonth} ${match[2]}`;
  }

  return value;
}

function shouldSkip(node) {
  const el = node.nodeType === Node.ELEMENT_NODE ? node : node.parentElement;
  return !!el?.closest('pre, code, script, style, [data-no-translate="true"]');
}

function translateTextNode(node, locale) {
  if (shouldSkip(node)) return;
  const current = node.nodeValue;
  const trimmed = current.trim();
  if (!trimmed) return;
  const translated = translateLegacyText(trimmed, locale);
  const leading = current.match(/^\s*/)?.[0] || '';
  const trailing = current.match(/\s*$/)?.[0] || '';
  const nextValue = leading + translated + trailing;
  if (current !== nextValue) node.nodeValue = nextValue;
}

function translateElementAttrs(el, locale) {
  if (shouldSkip(el)) return;
  const attrs = ['placeholder', 'title', 'aria-label'];
  attrs.forEach((name) => {
    if (!el.hasAttribute(name)) return;
    const current = el.getAttribute(name);
    const translated = translateLegacyText(current, locale);
    if (current !== translated) el.setAttribute(name, translated);
  });
}

function walk(root, locale) {
  if (!root) return;
  if (root.nodeType === Node.TEXT_NODE) {
    translateTextNode(root, locale);
    return;
  }
  if (root.nodeType !== Node.ELEMENT_NODE) return;
  translateElementAttrs(root, locale);
  root.childNodes.forEach((child) => walk(child, locale));
}

export function LanguageProvider({ children }) {
  const [locale, setLocale] = useState(() => {
    const saved = localStorage.getItem('forge-language');
    if (LANGUAGES.some((lang) => lang.code === saved)) return saved;
    const browser = navigator.language?.toLowerCase() || '';
    if (browser.startsWith('pt')) return 'pt-BR';
    if (browser.startsWith('es')) return 'es';
    if (browser.startsWith('fr')) return 'fr';
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('forge-language', locale);
    document.documentElement.lang = locale;
  }, [locale]);

  const value = useMemo(() => ({
    locale,
    setLocale,
    t: (key) => copy[locale]?.[key] ?? projectCopy[locale]?.[key] ?? copy.en[key] ?? projectCopy.en[key] ?? key,
  }), [locale]);

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useI18n() {
  return useContext(LanguageContext);
}

export function AutoTranslate({ children }) {
  const { locale } = useI18n();
  const ref = useRef(null);

  useEffect(() => {
    const root = ref.current;
    if (!root) return;

    let observer;
    let queued = false;

    const applyTranslations = () => {
      queued = false;
      if (!root) return;

      // Disconnect while mutating text/attributes so our own translations
      // do not recursively trigger the observer.
      observer?.disconnect();
      walk(root, locale);
      observer?.observe(root, {
        childList: true,
        subtree: true,
        characterData: true,
        attributes: true,
        attributeFilter: ['placeholder', 'title', 'aria-label'],
      });
    };

    const scheduleTranslations = () => {
      if (queued) return;
      queued = true;
      queueMicrotask(applyTranslations);
    };

    observer = new MutationObserver(scheduleTranslations);
    applyTranslations();

    return () => {
      queued = false;
      observer?.disconnect();
    };
  }, [locale]);

  return <div ref={ref} className="forge-translation-root">{children}</div>;
}

