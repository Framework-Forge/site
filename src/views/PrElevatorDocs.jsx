import { useI18n } from '../i18n';

const DOCS = {
  en: {
    lead: 'A configurable elevator and access-control system for FiveM with in-world DUI keypads, PR Bridge interactions, floor-level permissions, keycards, passwords, jobs/gangs, character identifiers and an in-game creator workflow.',
    repository: 'Repository', install: 'Installation', version: 'Version', dependency: 'Dependency', runtime: 'Runtime', locales: 'Locales',
    overview: 'Overview', architecture: 'Architecture', creation: 'Creation workflow', access: 'Access control', keypad: 'DUI keypad', interactions: 'Interactions', keycards: 'Keycards', api: 'API & exports', database: 'Database', settings: 'Settings', diagnostics: 'Diagnostics & tests',
    overviewTitle: 'A physical elevator experience instead of a simple teleport menu.',
    overviewP1: 'pr_elevator models elevators as persistent database entities with independent floors. Every floor stores its own destination, physical interaction panel placement, visual metadata and access policy.',
    overviewP2: 'At runtime the client loads all elevators and floors, creates a keypad prop for every floor, registers interaction providers through PR Bridge and opens a physical DUI keypad when the player interacts with the panel.',
    overviewP3: 'The selected floor is resolved from the keypad code, access is checked by the server for protected floors, the elevator wait sequence runs and the player is transported to the saved destination.',
    featurePhysical: 'Physical panels', featurePhysicalD: 'DUI keypad props exist in the world and can be positioned with the PR Bridge gizmo rather than relying on a generic list menu.',
    featureAccess: 'Per-floor access', featureAccessD: 'Public, group, character, keycard, password and combined policies can differ from one floor to another.',
    featureCreator: 'Creator tools', featureCreatorD: 'Elevators, floors, keypad placement, keycards and interaction settings can be configured from in-game menus.',
    featureBridge: 'PR Bridge first', featureBridgeD: 'Menus, callbacks, cache, JSON, notifications, gizmo, interactions, locale and other services are consumed through the shared bridge.',
    featureLocale: 'Four locales', featureLocaleD: 'Portuguese, English, Spanish and French ship with equivalent resource strings, including keypad states and diagnostics.',
    featurePersistence: 'Persistent data', featurePersistenceD: 'Elevator and floor definitions live in MariaDB while interaction preferences are synchronized from data/settings.json.',
    architectureTitle: 'Runtime responsibilities are split between database management, world rendering and server-side authorization.',
    architectureServer: 'Server layer', architectureServerD: 'Creates/migrates tables, returns elevators/floors/jobs, validates protected-floor access, persists creator changes, creates keycards and broadcasts refreshes.',
    architectureClient: 'Client runtime', architectureClientD: 'Normalizes stored coordinates, renders keypads, resolves player/group data, opens the floor keypad, runs the elevator wait sequence and refreshes props after changes.',
    architectureDui: 'DUI layer', architectureDuiD: 'Creates a browser-backed texture, replaces the GTA keypad texture, manages camera/button focus, sounds, display states and the authentication flow.',
    architectureSettings: 'Settings layer', architectureSettingsD: 'Synchronizes Target/Interact mode, wall visibility, panel front offset and interaction distance with revision protection against stale admin forms.',
    installTitle: 'Install PR Bridge first and let pr_elevator create its database schema.',
    installP1: 'The fxmanifest declares pr_bridge as the hard dependency. MariaDB access, menus, callbacks and shared services are expected through PR Bridge.',
    installP2: 'The resource creates and migrates pr_elevator_elevator and pr_elevator_floor on startup, including newer per-floor access columns.',
    installCards: 'Optional card items', installCardsD: 'install/install.lua defines three sample keycard items: key_card_gold, key_card_security and key_card_ilegal. The supplied PNG files can be copied to the inventory image directory used by your server.',
    installLocale: 'Locale source', installLocaleD: 'Resource language follows the current PR Bridge locale. The documented supported values are pt-br, en-us, es-es and fr-fr.',
    creationTitle: 'The creator separates the elevator identity from the behavior of each floor.',
    creationElevator: 'Create elevator', creationElevatorD: 'Creates the parent record and gives it a name. The current creator stores the parent as public; floor policies are the primary access-control layer.',
    creationSpawn: 'Capture destination', creationSpawnD: 'When a floor is created, the administrator stands at the destination and confirms the player spawn coordinates and heading.',
    creationPanel: 'Place keypad', creationPanelD: 'A physical keypad prop is spawned and PR Bridge gizmo is used to move/rotate it. Model, position, rotation and heading are serialized into interact_coords.',
    creationFloor: 'Configure floor', creationFloorD: 'Set display name/code, numeric order, interaction distance, theme colors, destination, access type and any required job, grade, password, card or character ID.',
    creationReorder: 'Reorder floors', creationReorderD: 'Editing a floor can swap its order with another floor so floor codes remain unique without manually rewriting multiple rows.',
    creationRefresh: 'Live refresh', creationRefreshD: 'Create, update and delete operations broadcast pr_elevator:client:refreshElevators so clients rebuild the runtime panels.',
    accessTitle: 'Protected floors are validated on the server before transport.',
    accessPublic: 'Public', accessPublicD: 'No restriction.',
    accessJob: 'Job / gang', accessJobD: 'Requires the configured group and minimum grade. Server resolution supports QBX, QBCore and ESX player data paths.',
    accessCitizen: 'Character identifier', accessCitizenD: 'Matches configured CitizenID/identifier values against known player identifiers; comma/semicolon-separated identifiers are supported server-side.',
    accessKeycard: 'Keycard', accessKeycardD: 'Requires the configured item/access key. Metadata aliases acesso, access_key, accessKey and access are recognized.',
    accessPassword: 'Password', accessPasswordD: 'The first server check requests authentication; the submitted password is then validated case-insensitively before transport.',
    accessCombined: 'Combined policies', accessCombinedD: 'job_keycard, job_password and job_citizenid require both sides of the policy.',
    accessServerNote: 'Security boundary', accessServerNoteD: 'Runtime floor authorization is server validated by pr_elevator:server:checkFloorAccess. The creator export has its own job/gang permission gate. For production, also review who can reach your management workflows and database-mutation events according to your server security model.',
    keypadTitle: 'The GTA keypad becomes a translated, browser-driven elevator terminal.',
    keypadP1: 'The DUI page is created at 512×1024 and replaces the configured keypad texture. The script preserves display text across page readiness, re-synchronizes after the CEF document reports ready and keeps the ordinary NUI page hidden while the DUI surface remains visible.',
    keypadP2: 'The camera is moved to the physical panel, mouse movement rotates the camera, ray-like angle checks highlight keypad buttons and clicks generate number, cancel, confirm and correction actions.',
    keypadStates: 'Authentication states', keypadStatesD: 'Floor prompt, password prompt, CHECKING, invalid floor, current floor, invalid password, ERROR and SUCCESS are explicit display states. Duplicate confirmation is blocked while a server request is pending.',
    keypadAnimation: 'Interaction animation', keypadAnimationD: 'Before opening the keypad, PR Bridge streaming.playInteraction can move the player to the panel, face the prop and play the configured mp_common/givetake1_a animation.',
    keypadTransport: 'Transport', keypadTransportD: 'After authorization, a configurable wait/progress sequence plays the GTA elevator idle animation before SetEntityCoords/heading moves the player to the destination.',
    interactionsTitle: 'Target and Interact can be selected independently or enabled together.',
    interactionsP1: 'Runtime settings allow target, interact or both. Both providers are registered through pr_bridge; no direct ox_target/interact dependency is required by the panel registration path.',
    interactionsP2: 'Respect Walls controls line-of-sight behavior. Front Offset moves the interaction point in front of the physical keypad and Distance controls how close the player must be.',
    interactionsFallback: 'Runtime fallback', interactionsFallbackD: 'A client proximity loop can still detect the nearest rendered keypad if a configured interaction provider is unavailable or the prop did not receive a registered target.',
    keycardsTitle: 'Keycards use an item plus an access-key metadata value.',
    keycardsP1: 'The default item catalog contains illegal, security and gold/VIP cards. Floors may require a specific card item or accept the configured resource card list.',
    keycardsP2: 'The creator can issue a keycard with metadata containing the access key. Runtime matching accepts multiple historical metadata field names for compatibility.',
    keycardsInventory: 'Inventory behavior', keycardsInventoryD: 'Client checks can use ox_inventory directly and PR Bridge inventory helpers. The authoritative server check currently has explicit ox_inventory lookup logic for protected keycard floors.',
    apiTitle: 'Exports expose both the creator workflow and the reusable keypad/DUI layer.',
    apiCreator: 'Creator exports', apiCreatorD: 'OpenCreatorMenu, OpenCreateElevatorMenu, OpenCreateFloorMenu and OpenCreateKeycardMenu let another resource open Forge creator flows with optional context/presets.',
    apiDui: 'DUI exports', apiDuiD: 'CreateDUI, CreateKeypad, CreateKeypadFromInteract, OpenKeypadEntity and DeleteKeypad make the physical keypad subsystem reusable outside the elevator runtime.',
    apiCreatorPermission: 'Creator permission', apiCreatorPermissionD: 'PR.ExportCreatorMenu.enabled controls availability. jobs/gangs maps can require a minimum grade; empty maps allow any player to open the export creator.',
    dbTitle: 'Two relational tables define elevators and floors.',
    dbElevator: 'Parent elevator', dbElevatorD: 'Stores id, name and legacy/default access fields. Deleting the parent cascades to its floors through the foreign key.',
    dbFloor: 'Floor record', dbFloorD: 'Stores display code/order, interaction distance, colors, destination JSON, keypad placement JSON and the complete per-floor access policy.',
    dbMigration: 'Automatic migrations', dbMigrationD: 'Startup checks existing columns, adds missing access/interaction fields and migrates legacy elevator-level restrictions into floor rows when per-floor access is introduced.',
    settingsTitle: 'Interaction settings are synchronized, validated and revisioned.',
    settingsMode: 'Mode', settingsModeD: 'target, interact or both.',
    settingsWalls: 'Respect walls', settingsWallsD: 'Controls line-of-sight flags; it does not remove collision or bypass floor permissions.',
    settingsOffset: 'Front offset', settingsOffsetD: 'Validated between 0.05 and 1.00 meter; default 0.18.',
    settingsDistance: 'Distance', settingsDistanceD: 'Validated between 0.5 and 5 meters; default 2.0.',
    settingsRevision: 'Revision protection', settingsRevisionD: 'The server rejects stale editor submissions so one administrator cannot silently overwrite a newer save. Clients ignore old/out-of-order settings revisions.',
    settingsPermission: 'Administrator access', settingsPermissionD: 'Settings save accepts PR Bridge admin whitelist, ACE pr_elevator.admin/admin/group.admin/god and framework admin/god permission checks.',
    diagnosticsTitle: 'The repository includes runtime diagnostics and focused regression tests.',
    diagnosticsCommands: 'Diagnostic commands', diagnosticsCommandsD: 'prelevator_refresh rebuilds runtime elevators. prelevator_dui_status prints DUI/native texture state. prelevator_dui_preview draws the current runtime texture for ten seconds. prelevator_dui_reset recovers camera/focus. createkeypad/testkeypad are keypad development helpers.',
    diagnosticsTests: 'Automated coverage', diagnosticsTestsD: 'settings_test validates settings persistence/revisions; interaction_provider_test verifies PR Bridge provider registration; runtime_password_test validates server-authenticated password flow; locale_test compares locale coverage; dui_flow_test and dui_page_test exercise keypad/DUI behavior.',
    diagnosticsStatus: 'In-game validation note', diagnosticsStatusD: 'Repository notes explicitly say some DUI visual confirmation remains dependent on real FiveM testing. Local Lua/Node tests are useful regression coverage but do not replace visual approval on the target server.',
    diagnosticsVersion: 'Version check', diagnosticsVersionD: 'PR.versionCheck enables PR Bridge version checking after startup. The current fxmanifest version is 1.1.2.',
    sourceTitle: 'Documentation reviewed against the current source tree.', sourceP: 'This page reflects the main branch inspected for version 1.1.2, including the per-floor access migration, export creator, DUI fixes, four locales and synchronized interaction settings.'
  },
  'pt-BR': {
    lead: 'Um sistema configurável de elevadores e controle de acesso para FiveM com teclados DUI físicos, interações pelo PR Bridge, permissões por andar, cartões, senhas, empregos/gangues, identificadores de personagem e criação dentro do jogo.',
    repository: 'Repositório', install: 'Instalação', version: 'Versão', dependency: 'Dependência', runtime: 'Runtime', locales: 'Idiomas',
    overview: 'Visão geral', architecture: 'Arquitetura', creation: 'Fluxo de criação', access: 'Controle de acesso', keypad: 'Teclado DUI', interactions: 'Interações', keycards: 'Cartões', api: 'API e exports', database: 'Banco de dados', settings: 'Configurações', diagnostics: 'Diagnóstico e testes',
    overviewTitle: 'Uma experiência física de elevador em vez de um simples menu de teleporte.',
    overviewP1: 'O pr_elevator modela elevadores como entidades persistentes no banco com andares independentes. Cada andar possui destino, posicionamento físico do painel, metadados visuais e política própria de acesso.',
    overviewP2: 'Em runtime o cliente carrega elevadores e andares, cria um prop de teclado em cada ponto, registra os providers de interação pelo PR Bridge e abre um teclado DUI físico quando o jogador usa o painel.',
    overviewP3: 'O andar é resolvido pelo código digitado, o servidor valida os acessos protegidos, a espera do elevador é executada e o jogador é transportado para o destino salvo.',
    featurePhysical: 'Painéis físicos', featurePhysicalD: 'Props DUI existem no mundo e podem ser posicionados com o gizmo do PR Bridge, sem depender de um menu genérico de andares.',
    featureAccess: 'Acesso por andar', featureAccessD: 'Público, grupo, personagem, cartão, senha e políticas combinadas podem ser diferentes em cada andar.',
    featureCreator: 'Ferramentas de criação', featureCreatorD: 'Elevadores, andares, posicionamento do painel, cartões e preferências de interação podem ser configurados dentro do jogo.',
    featureBridge: 'PR Bridge primeiro', featureBridgeD: 'Menus, callbacks, cache, JSON, notificações, gizmo, interações, locale e outros serviços passam pelo bridge compartilhado.',
    featureLocale: 'Quatro idiomas', featureLocaleD: 'Português, inglês, espanhol e francês acompanham o recurso com chaves equivalentes, inclusive estados do visor e diagnósticos.',
    featurePersistence: 'Dados persistentes', featurePersistenceD: 'Definições dos elevadores/andares ficam no MariaDB; preferências de interação são sincronizadas a partir de data/settings.json.',
    architectureTitle: 'As responsabilidades são separadas entre banco/gerenciamento, renderização no mundo e autorização server-side.',
    architectureServer: 'Camada servidor', architectureServerD: 'Cria/migra tabelas, retorna elevadores/andares/jobs, valida acesso a andares protegidos, persiste alterações do criador, gera cartões e transmite refresh.',
    architectureClient: 'Runtime client', architectureClientD: 'Normaliza coordenadas, renderiza teclados, resolve dados de grupo/player, abre o seletor de andar, executa a espera e recria props após mudanças.',
    architectureDui: 'Camada DUI', architectureDuiD: 'Cria textura via browser, substitui a textura do keypad do GTA, controla câmera/botões, sons, estados do visor e autenticação.',
    architectureSettings: 'Camada de configurações', architectureSettingsD: 'Sincroniza modo Target/Interact, paredes, offset frontal e distância com revisão para evitar salvar formulários administrativos antigos.',
    installTitle: 'Instale o PR Bridge primeiro e deixe o pr_elevator criar seu schema.',
    installP1: 'O fxmanifest declara pr_bridge como dependência obrigatória. Banco MariaDB, menus, callbacks e serviços compartilhados são esperados através do PR Bridge.',
    installP2: 'Na inicialização o recurso cria e migra pr_elevator_elevator e pr_elevator_floor, incluindo as colunas modernas de acesso por andar.',
    installCards: 'Itens de cartão opcionais', installCardsD: 'install/install.lua define key_card_gold, key_card_security e key_card_ilegal. As imagens PNG fornecidas podem ser copiadas para o diretório de imagens do inventário da base.',
    installLocale: 'Origem do idioma', installLocaleD: 'O idioma do recurso acompanha o locale atual do PR Bridge. Os valores documentados são pt-br, en-us, es-es e fr-fr.',
    creationTitle: 'O criador separa a identidade do elevador do comportamento de cada andar.',
    creationElevator: 'Criar elevador', creationElevatorD: 'Cria o registro pai e seu nome. O criador atual grava o pai como público; a camada principal de restrição está nos andares.',
    creationSpawn: 'Capturar destino', creationSpawnD: 'Ao criar o andar, o administrador fica no ponto de destino e confirma as coordenadas e o heading do spawn.',
    creationPanel: 'Posicionar keypad', creationPanelD: 'Um prop de teclado é criado e o gizmo do PR Bridge permite mover/rotacionar. Modelo, posição, rotação e heading são serializados em interact_coords.',
    creationFloor: 'Configurar andar', creationFloorD: 'Define nome/código, ordem numérica, distância, cores, destino, tipo de acesso e job, grade, senha, cartão ou identificador quando necessários.',
    creationReorder: 'Reordenar andares', creationReorderD: 'Ao editar, é possível trocar a ordem com outro andar para manter os códigos numéricos únicos sem alterar duas linhas manualmente.',
    creationRefresh: 'Refresh ao vivo', creationRefreshD: 'Criar, editar e remover dispara pr_elevator:client:refreshElevators para os clientes reconstruírem os painéis.',
    accessTitle: 'Andares protegidos são validados no servidor antes do transporte.',
    accessPublic: 'Público', accessPublicD: 'Sem restrição.',
    accessJob: 'Emprego / gangue', accessJobD: 'Exige o grupo configurado e grade mínima. O servidor resolve dados de QBX, QBCore e ESX.',
    accessCitizen: 'Identificador do personagem', accessCitizenD: 'Compara CitizenID/identificadores configurados com os identificadores conhecidos; o servidor aceita lista separada por vírgula/ponto e vírgula.',
    accessKeycard: 'Cartão', accessKeycardD: 'Exige item/chave configurados. Os metadados acesso, access_key, accessKey e access são reconhecidos.',
    accessPassword: 'Senha', accessPasswordD: 'A primeira consulta pede autenticação; a senha enviada é validada sem diferenciar maiúsculas/minúsculas antes do transporte.',
    accessCombined: 'Políticas combinadas', accessCombinedD: 'job_keycard, job_password e job_citizenid exigem ambos os requisitos.',
    accessServerNote: 'Limite de segurança', accessServerNoteD: 'A autorização de uso do andar é validada pelo servidor em pr_elevator:server:checkFloorAccess. O export do criador possui gate próprio por job/gangue. Em produção, revise também quem pode alcançar os fluxos de gerenciamento e eventos de mutação de banco conforme o modelo de segurança da sua base.',
    keypadTitle: 'O keypad do GTA vira um terminal de elevador traduzido e controlado por browser.',
    keypadP1: 'A página DUI é criada em 512×1024 e substitui a textura configurada do teclado. O script preserva o texto durante o carregamento da página, ressincroniza quando o CEF sinaliza prontidão e mantém a NUI comum oculta enquanto a superfície DUI fica visível.',
    keypadP2: 'A câmera aproxima do painel, o mouse movimenta a rotação, verificações angulares destacam os botões e os cliques executam números, cancelar, confirmar e corrigir.',
    keypadStates: 'Estados de autenticação', keypadStatesD: 'Prompt de andar, prompt de senha, VERIFICANDO, andar inválido, andar atual, senha inválida, ERRO e SUCESSO são estados explícitos. Confirmações duplicadas são bloqueadas durante consulta ao servidor.',
    keypadAnimation: 'Animação de interação', keypadAnimationD: 'Antes de abrir, streaming.playInteraction do PR Bridge pode mover o player até o painel, alinhar sua direção e tocar mp_common/givetake1_a.',
    keypadTransport: 'Transporte', keypadTransportD: 'Após autorização, uma espera/progress configurável executa animação de elevador antes de SetEntityCoords/heading levar o player ao destino.',
    interactionsTitle: 'Target e Interact podem ser escolhidos individualmente ou usados juntos.',
    interactionsP1: 'As configurações aceitam target, interact ou both. Ambos são registrados via pr_bridge; o caminho dos painéis não exige dependência direta de ox_target/interact.',
    interactionsP2: 'Respect Walls controla line-of-sight. Front Offset posiciona o ponto de interação à frente do painel físico e Distance determina a proximidade necessária.',
    interactionsFallback: 'Fallback de runtime', interactionsFallbackD: 'Um loop de proximidade pode detectar o keypad mais próximo se o provider configurado não estiver disponível ou se o prop não tiver alvo registrado.',
    keycardsTitle: 'Cartões combinam um item com uma chave em metadata.',
    keycardsP1: 'O catálogo padrão contém cartões ilegal, security e gold/VIP. Um andar pode exigir um item específico ou aceitar a lista configurada no recurso.',
    keycardsP2: 'O criador emite o cartão com a access key. O runtime aceita múltiplos nomes históricos de metadata para compatibilidade.',
    keycardsInventory: 'Comportamento do inventário', keycardsInventoryD: 'No client há suporte a ox_inventory direto e helpers de inventário do PR Bridge. A validação autoritativa do servidor atualmente possui lookup explícito em ox_inventory para andares protegidos por cartão.',
    apiTitle: 'Exports expõem tanto o criador quanto a camada reutilizável de keypad/DUI.',
    apiCreator: 'Exports do criador', apiCreatorD: 'OpenCreatorMenu, OpenCreateElevatorMenu, OpenCreateFloorMenu e OpenCreateKeycardMenu permitem que outro recurso abra os fluxos Forge com contexto/presets opcionais.',
    apiDui: 'Exports de DUI', apiDuiD: 'CreateDUI, CreateKeypad, CreateKeypadFromInteract, OpenKeypadEntity e DeleteKeypad tornam o subsistema físico de teclado reutilizável fora do runtime do elevador.',
    apiCreatorPermission: 'Permissão do criador', apiCreatorPermissionD: 'PR.ExportCreatorMenu.enabled controla disponibilidade. Maps jobs/gangs podem exigir grade mínima; ambos vazios permitem que qualquer player abra o creator export.',
    dbTitle: 'Duas tabelas relacionais definem elevadores e andares.',
    dbElevator: 'Elevador pai', dbElevatorD: 'Armazena id, nome e campos legados/default de acesso. Excluir o pai remove seus andares por foreign key com ON DELETE CASCADE.',
    dbFloor: 'Registro do andar', dbFloorD: 'Armazena código/ordem, distância, cores, destino JSON, posicionamento do keypad JSON e toda a política de acesso por andar.',
    dbMigration: 'Migrações automáticas', dbMigrationD: 'Na inicialização são verificadas colunas existentes, campos ausentes são adicionados e restrições antigas do elevador são migradas para os andares quando a camada por andar é introduzida.',
    settingsTitle: 'Configurações de interação são sincronizadas, validadas e revisionadas.',
    settingsMode: 'Modo', settingsModeD: 'target, interact ou both.',
    settingsWalls: 'Respeitar paredes', settingsWallsD: 'Controla flags de line-of-sight; não remove colisão nem ignora permissões do andar.',
    settingsOffset: 'Offset frontal', settingsOffsetD: 'Validado entre 0,05 e 1,00 metro; padrão 0,18.',
    settingsDistance: 'Distância', settingsDistanceD: 'Validada entre 0,5 e 5 metros; padrão 2,0.',
    settingsRevision: 'Proteção por revisão', settingsRevisionD: 'O servidor rejeita formulários antigos para um admin não sobrescrever silenciosamente um save mais novo. Clients ignoram revisões antigas/fora de ordem.',
    settingsPermission: 'Acesso administrativo', settingsPermissionD: 'Salvar configurações aceita whitelist admin do PR Bridge, ACE pr_elevator.admin/admin/group.admin/god e verificações admin/god da framework.',
    diagnosticsTitle: 'O repositório inclui diagnósticos de runtime e testes focados em regressão.',
    diagnosticsCommands: 'Comandos de diagnóstico', diagnosticsCommandsD: 'prelevator_refresh recria elevadores. prelevator_dui_status imprime estado de DUI/textura. prelevator_dui_preview desenha a textura runtime por dez segundos. prelevator_dui_reset recupera câmera/foco. createkeypad/testkeypad são auxiliares de desenvolvimento.',
    diagnosticsTests: 'Cobertura automatizada', diagnosticsTestsD: 'settings_test valida persistência/revisões; interaction_provider_test confere providers PR Bridge; runtime_password_test valida senha com servidor; locale_test compara locales; dui_flow_test e dui_page_test exercitam keypad/DUI.',
    diagnosticsStatus: 'Nota sobre validação in-game', diagnosticsStatusD: 'As notas do repositório indicam que parte da confirmação visual da DUI ainda depende de teste real no FiveM. Testes Lua/Node ajudam na regressão, mas não substituem homologação visual na base.',
    diagnosticsVersion: 'Version check', diagnosticsVersionD: 'PR.versionCheck habilita a verificação de versão do PR Bridge após o start. A versão atual do fxmanifest é 1.1.2.',
    sourceTitle: 'Documentação revisada contra a árvore atual do código.', sourceP: 'Esta página reflete a main analisada na versão 1.1.2, incluindo migração de acesso por andar, creator export, correções de DUI, quatro idiomas e configurações de interação sincronizadas.'
  },
  es: {
    lead: 'Sistema configurable de ascensores y control de acceso para FiveM con teclados DUI físicos, interacciones PR Bridge, permisos por piso, tarjetas, contraseñas, jobs/gangs, identificadores y creador in-game.',
    repository: 'Repositorio', install: 'Instalación', version: 'Versión', dependency: 'Dependencia', runtime: 'Runtime', locales: 'Idiomas',
    overview: 'Visión general', architecture: 'Arquitectura', creation: 'Creación', access: 'Control de acceso', keypad: 'Teclado DUI', interactions: 'Interacciones', keycards: 'Tarjetas', api: 'API y exports', database: 'Base de datos', settings: 'Configuración', diagnostics: 'Diagnóstico y pruebas',
    overviewTitle: 'Una experiencia física de ascensor en lugar de un simple menú de teletransporte.',
    overviewP1: 'pr_elevator modela ascensores persistentes con pisos independientes. Cada piso guarda destino, panel físico, metadatos visuales y política de acceso.',
    overviewP2: 'El cliente carga los datos, crea un keypad por piso, registra interacciones mediante PR Bridge y abre el DUI físico al usar el panel.',
    overviewP3: 'El código identifica el piso, el servidor valida accesos protegidos, se ejecuta la espera y el jugador viaja al destino.',
    featurePhysical: 'Paneles físicos', featurePhysicalD: 'Props DUI posicionables con el gizmo de PR Bridge.', featureAccess: 'Acceso por piso', featureAccessD: 'Público, grupo, personaje, tarjeta, contraseña y combinaciones.', featureCreator: 'Herramientas de creación', featureCreatorD: 'Ascensores, pisos, paneles, tarjetas y ajustes desde el juego.', featureBridge: 'PR Bridge', featureBridgeD: 'Menús, callbacks, cache, JSON, notificaciones, gizmo, interacciones y locale compartidos.', featureLocale: 'Cuatro idiomas', featureLocaleD: 'Portugués, inglés, español y francés.', featurePersistence: 'Persistencia', featurePersistenceD: 'MariaDB para ascensores/pisos y JSON sincronizado para preferencias.',
    architectureTitle: 'Responsabilidades separadas entre servidor, runtime, DUI y configuración.', architectureServer: 'Servidor', architectureServerD: 'Migra DB, consulta datos, valida acceso, persiste cambios y refresca clientes.', architectureClient: 'Cliente', architectureClientD: 'Renderiza paneles, resuelve contexto del jugador, abre keypad y transporta.', architectureDui: 'DUI', architectureDuiD: 'Textura browser, cámara, botones, sonidos y autenticación.', architectureSettings: 'Settings', architectureSettingsD: 'Modo de interacción, paredes, offset y distancia con revisión.',
    installTitle: 'Instala PR Bridge antes de pr_elevator.', installP1: 'pr_bridge es la dependencia obligatoria y provee servicios compartidos.', installP2: 'Al iniciar crea/migra pr_elevator_elevator y pr_elevator_floor.', installCards: 'Tarjetas opcionales', installCardsD: 'install/install.lua define gold, security e ilegal con imágenes incluidas.', installLocale: 'Idioma', installLocaleD: 'Sigue pr_bridge:locale: pt-br, en-us, es-es o fr-fr.',
    creationTitle: 'El creador separa el ascensor padre de cada piso.', creationElevator: 'Crear ascensor', creationElevatorD: 'Crea el padre y nombre; las restricciones principales viven en pisos.', creationSpawn: 'Capturar destino', creationSpawnD: 'Captura coordenadas/heading donde está el admin.', creationPanel: 'Colocar keypad', creationPanelD: 'Gizmo mueve/rota el prop y guarda interact_coords.', creationFloor: 'Configurar piso', creationFloorD: 'Nombre/código, orden, distancia, colores, destino y acceso.', creationReorder: 'Reordenar', creationReorderD: 'Puede intercambiar órdenes con otro piso.', creationRefresh: 'Refresh', creationRefreshD: 'Cambios reconstruyen paneles en clientes.',
    accessTitle: 'Los pisos protegidos se validan en servidor.', accessPublic: 'Público', accessPublicD: 'Sin restricción.', accessJob: 'Job / gang', accessJobD: 'Grupo y grade mínimo con QBX/QBCore/ESX.', accessCitizen: 'Identificador', accessCitizenD: 'CitizenID/identificadores permitidos.', accessKeycard: 'Tarjeta', accessKeycardD: 'Item y access key mediante metadata compatible.', accessPassword: 'Contraseña', accessPasswordD: 'Autenticación solicitada y validada sin diferenciar mayúsculas.', accessCombined: 'Combinados', accessCombinedD: 'job_keycard, job_password y job_citizenid exigen ambos requisitos.', accessServerNote: 'Límite de seguridad', accessServerNoteD: 'El uso del piso se valida server-side. Revisa también quién puede alcanzar flujos de administración/eventos de mutación según la seguridad de tu servidor.',
    keypadTitle: 'El keypad GTA se convierte en terminal de ascensor DUI.', keypadP1: 'DUI 512×1024 reemplaza la textura y sincroniza estado al cargar CEF.', keypadP2: 'La cámara enfoca el panel; mouse y ángulos seleccionan botones.', keypadStates: 'Estados', keypadStatesD: 'Piso, contraseña, comprobando, inválido, error y éxito.', keypadAnimation: 'Animación', keypadAnimationD: 'PR Bridge puede mover/alinear al jugador y ejecutar givetake1_a.', keypadTransport: 'Transporte', keypadTransportD: 'Espera configurable y animación antes de mover al destino.',
    interactionsTitle: 'Target e Interact pueden usarse solos o juntos.', interactionsP1: 'target/interact/both se registran mediante PR Bridge.', interactionsP2: 'Respect Walls, Front Offset y Distance controlan visibilidad/posición/proximidad.', interactionsFallback: 'Fallback', interactionsFallbackD: 'Loop de proximidad detecta el keypad cuando no hay provider activo.',
    keycardsTitle: 'Las tarjetas combinan item y access key.', keycardsP1: 'Catálogo estándar: ilegal, security y gold/VIP.', keycardsP2: 'El creador emite metadata y se aceptan aliases históricos.', keycardsInventory: 'Inventario', keycardsInventoryD: 'Cliente usa ox_inventory/PR Bridge; el check autoritativo server tiene lookup explícito ox_inventory.',
    apiTitle: 'Exports para creador y keypad reutilizable.', apiCreator: 'Creator exports', apiCreatorD: 'OpenCreatorMenu, OpenCreateElevatorMenu, OpenCreateFloorMenu y OpenCreateKeycardMenu.', apiDui: 'DUI exports', apiDuiD: 'CreateDUI, CreateKeypad, CreateKeypadFromInteract, OpenKeypadEntity y DeleteKeypad.', apiCreatorPermission: 'Permiso creator', apiCreatorPermissionD: 'enabled y mapas jobs/gangs con grade; vacíos permiten acceso.',
    dbTitle: 'Dos tablas relacionales.', dbElevator: 'Ascensor padre', dbElevatorD: 'id, nombre y campos legacy/default; borrado en cascada.', dbFloor: 'Piso', dbFloorD: 'Código, orden, distancia, colores, destino, panel y acceso.', dbMigration: 'Migración', dbMigrationD: 'Añade columnas faltantes y migra restricciones legacy a pisos.',
    settingsTitle: 'Ajustes sincronizados y revisionados.', settingsMode: 'Modo', settingsModeD: 'target, interact o both.', settingsWalls: 'Paredes', settingsWallsD: 'Line-of-sight, sin saltarse permisos.', settingsOffset: 'Offset', settingsOffsetD: '0,05–1,00 m; 0,18 por defecto.', settingsDistance: 'Distancia', settingsDistanceD: '0,5–5 m; 2,0 por defecto.', settingsRevision: 'Revisión', settingsRevisionD: 'Evita sobrescritura de formularios obsoletos.', settingsPermission: 'Admin', settingsPermissionD: 'Whitelist PR Bridge, ACE y permisos admin/god.',
    diagnosticsTitle: 'Diagnósticos y tests de regresión.', diagnosticsCommands: 'Comandos', diagnosticsCommandsD: 'prelevator_refresh, prelevator_dui_status, prelevator_dui_preview, prelevator_dui_reset, createkeypad y testkeypad.', diagnosticsTests: 'Tests', diagnosticsTestsD: 'Settings, providers, password, locales y DUI tienen pruebas dedicadas.', diagnosticsStatus: 'Validación in-game', diagnosticsStatusD: 'La confirmación visual final del DUI debe hacerse en FiveM real.', diagnosticsVersion: 'Versión', diagnosticsVersionD: 'Version check opcional; fxmanifest 1.1.2.', sourceTitle: 'Documentación basada en el código actual.', sourceP: 'Refleja main v1.1.2 y sus flujos actuales.'
  },
  fr: {
    lead: 'Système configurable d’ascenseurs et de contrôle d’accès FiveM avec claviers DUI physiques, interactions PR Bridge, permissions par étage, cartes, mots de passe, jobs/gangs, identifiants et créateur in-game.',
    repository: 'Dépôt', install: 'Installation', version: 'Version', dependency: 'Dépendance', runtime: 'Runtime', locales: 'Langues',
    overview: 'Vue d’ensemble', architecture: 'Architecture', creation: 'Création', access: 'Contrôle d’accès', keypad: 'Clavier DUI', interactions: 'Interactions', keycards: 'Cartes', api: 'API & exports', database: 'Base de données', settings: 'Paramètres', diagnostics: 'Diagnostic & tests',
    overviewTitle: 'Une expérience physique d’ascenseur plutôt qu’un simple menu de téléportation.',
    overviewP1: 'pr_elevator modélise des ascenseurs persistants avec des étages indépendants. Chaque étage stocke destination, panneau physique, métadonnées visuelles et politique d’accès.',
    overviewP2: 'Le client charge les données, crée un keypad par étage, enregistre les interactions PR Bridge et ouvre le DUI physique à l’utilisation.',
    overviewP3: 'Le code sélectionne l’étage, le serveur valide les accès protégés, la séquence d’attente s’exécute puis le joueur est transporté.',
    featurePhysical: 'Panneaux physiques', featurePhysicalD: 'Props DUI positionnés avec le gizmo PR Bridge.', featureAccess: 'Accès par étage', featureAccessD: 'Public, groupe, personnage, carte, mot de passe et combinaisons.', featureCreator: 'Outils de création', featureCreatorD: 'Ascenseurs, étages, panneaux, cartes et paramètres in-game.', featureBridge: 'PR Bridge', featureBridgeD: 'Menus, callbacks, cache, JSON, notifications, gizmo, interactions et locale.', featureLocale: 'Quatre langues', featureLocaleD: 'Portugais, anglais, espagnol et français.', featurePersistence: 'Persistance', featurePersistenceD: 'MariaDB pour ascenseurs/étages et JSON synchronisé pour les préférences.',
    architectureTitle: 'Responsabilités séparées entre serveur, runtime, DUI et paramètres.', architectureServer: 'Serveur', architectureServerD: 'Migre DB, retourne données, valide accès, persiste et rafraîchit.', architectureClient: 'Client', architectureClientD: 'Rend les panneaux, résout le joueur, ouvre le keypad et transporte.', architectureDui: 'DUI', architectureDuiD: 'Texture browser, caméra, boutons, sons et authentification.', architectureSettings: 'Paramètres', architectureSettingsD: 'Mode, murs, offset et distance avec révision.',
    installTitle: 'Installez PR Bridge avant pr_elevator.', installP1: 'pr_bridge est la dépendance obligatoire et fournit les services communs.', installP2: 'Au démarrage, création/migration de pr_elevator_elevator et pr_elevator_floor.', installCards: 'Cartes optionnelles', installCardsD: 'install/install.lua fournit gold, security et illegal avec images.', installLocale: 'Langue', installLocaleD: 'Suit pr_bridge:locale : pt-br, en-us, es-es, fr-fr.',
    creationTitle: 'Le créateur sépare l’ascenseur parent de chaque étage.', creationElevator: 'Créer ascenseur', creationElevatorD: 'Crée le parent et son nom ; restrictions principales par étage.', creationSpawn: 'Capturer destination', creationSpawnD: 'Capture position/heading de l’administrateur.', creationPanel: 'Placer keypad', creationPanelD: 'Le gizmo déplace/rotate le prop et stocke interact_coords.', creationFloor: 'Configurer étage', creationFloorD: 'Nom/code, ordre, distance, couleurs, destination et accès.', creationReorder: 'Réordonner', creationReorderD: 'Échange l’ordre avec un autre étage.', creationRefresh: 'Refresh', creationRefreshD: 'Les changements reconstruisent les panneaux clients.',
    accessTitle: 'Les étages protégés sont validés côté serveur.', accessPublic: 'Public', accessPublicD: 'Sans restriction.', accessJob: 'Job / gang', accessJobD: 'Groupe et grade minimum via QBX/QBCore/ESX.', accessCitizen: 'Identifiant', accessCitizenD: 'CitizenID/identifiants autorisés.', accessKeycard: 'Carte', accessKeycardD: 'Item et access key via métadonnées compatibles.', accessPassword: 'Mot de passe', accessPasswordD: 'Authentification demandée puis validation sans casse.', accessCombined: 'Combinés', accessCombinedD: 'job_keycard, job_password, job_citizenid exigent les deux.', accessServerNote: 'Frontière sécurité', accessServerNoteD: 'L’utilisation de l’étage est validée serveur. Vérifiez aussi l’accès aux workflows de gestion/événements de mutation selon votre sécurité.',
    keypadTitle: 'Le keypad GTA devient un terminal DUI d’ascenseur.', keypadP1: 'DUI 512×1024 remplace la texture et resynchronise l’état après chargement CEF.', keypadP2: 'Caméra sur le panneau ; souris et angles sélectionnent les boutons.', keypadStates: 'États', keypadStatesD: 'Étage, mot de passe, vérification, invalide, erreur et succès.', keypadAnimation: 'Animation', keypadAnimationD: 'PR Bridge peut déplacer/orienter le joueur et jouer givetake1_a.', keypadTransport: 'Transport', keypadTransportD: 'Attente configurable et animation avant déplacement.',
    interactionsTitle: 'Target et Interact séparément ou ensemble.', interactionsP1: 'target/interact/both via PR Bridge.', interactionsP2: 'Respect Walls, Front Offset et Distance contrôlent visibilité/position/proximité.', interactionsFallback: 'Fallback', interactionsFallbackD: 'Boucle de proximité si le provider n’est pas disponible.',
    keycardsTitle: 'Cartes = item + access key.', keycardsP1: 'Catalogue : illegal, security, gold/VIP.', keycardsP2: 'Le créateur émet la metadata et plusieurs alias sont reconnus.', keycardsInventory: 'Inventaire', keycardsInventoryD: 'Client ox_inventory/PR Bridge ; validation serveur explicite ox_inventory pour les étages carte.',
    apiTitle: 'Exports créateur et keypad réutilisable.', apiCreator: 'Exports créateur', apiCreatorD: 'OpenCreatorMenu, OpenCreateElevatorMenu, OpenCreateFloorMenu, OpenCreateKeycardMenu.', apiDui: 'Exports DUI', apiDuiD: 'CreateDUI, CreateKeypad, CreateKeypadFromInteract, OpenKeypadEntity, DeleteKeypad.', apiCreatorPermission: 'Permission', apiCreatorPermissionD: 'enabled et maps jobs/gangs avec grade ; vides = accès autorisé.',
    dbTitle: 'Deux tables relationnelles.', dbElevator: 'Ascenseur parent', dbElevatorD: 'id, nom, champs legacy/default ; suppression cascade.', dbFloor: 'Étage', dbFloorD: 'Code, ordre, distance, couleurs, destination, panneau et accès.', dbMigration: 'Migration', dbMigrationD: 'Ajoute les colonnes manquantes et migre les restrictions legacy.',
    settingsTitle: 'Paramètres synchronisés et versionnés.', settingsMode: 'Mode', settingsModeD: 'target, interact ou both.', settingsWalls: 'Murs', settingsWallsD: 'Line-of-sight, sans contourner les permissions.', settingsOffset: 'Offset', settingsOffsetD: '0,05–1,00 m ; 0,18 par défaut.', settingsDistance: 'Distance', settingsDistanceD: '0,5–5 m ; 2,0 par défaut.', settingsRevision: 'Révision', settingsRevisionD: 'Empêche un ancien formulaire d’écraser une sauvegarde récente.', settingsPermission: 'Admin', settingsPermissionD: 'Whitelist PR Bridge, ACE et permissions admin/god.',
    diagnosticsTitle: 'Diagnostics et tests de régression.', diagnosticsCommands: 'Commandes', diagnosticsCommandsD: 'prelevator_refresh, prelevator_dui_status, prelevator_dui_preview, prelevator_dui_reset, createkeypad, testkeypad.', diagnosticsTests: 'Tests', diagnosticsTestsD: 'Settings, providers, mot de passe, locales et DUI ont des tests dédiés.', diagnosticsStatus: 'Validation in-game', diagnosticsStatusD: 'La validation visuelle finale du DUI doit être faite dans FiveM.', diagnosticsVersion: 'Version', diagnosticsVersionD: 'Version check optionnel ; fxmanifest 1.1.2.', sourceTitle: 'Documentation basée sur le code actuel.', sourceP: 'Reflète main v1.1.2 et ses flux actuels.'
  }
};

const AccessCard = ({ title, text }) => <article className="elevator-access-card"><strong>{title}</strong><p>{text}</p></article>;
const DetailCard = ({ label, title, text }) => <article className="elevator-detail-card"><span>{label}</span><h3>{title}</h3><p>{text}</p></article>;
const Code = ({ children }) => <pre className="elevator-code"><code>{children}</code></pre>;

export default function PrElevatorDocs() {
  const { locale } = useI18n();
  const d = DOCS[locale] || DOCS.en;

  return (
    <div className="elevator-docs">
      <header className="elevator-hero">
        <div className="elevator-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Legacy • Resource</div>
          <h1><span>pr_</span>elevator</h1>
          <p>{d.lead}</p>
          <div className="elevator-hero-actions">
            <a className="docs-primary-button" href="https://github.com/Framework-Forge/pr_elevator" target="_blank" rel="noreferrer">{d.repository}</a>
            <a className="docs-secondary-button" href="#elevator-install">{d.install}</a>
          </div>
          <div className="elevator-chip-row">
            <span>FiveM</span><span>GTA V Legacy</span><span>DUI</span><span>PR Bridge</span><span>MariaDB</span>
          </div>
        </div>

        <div className="elevator-summary">
          <div className="elevator-summary-mark"><span>PR</span><strong>ELEVATOR</strong></div>
          <dl>
            <div><dt>{d.version}</dt><dd>1.1.2</dd></div>
            <div><dt>{d.dependency}</dt><dd>pr_bridge</dd></div>
            <div><dt>{d.runtime}</dt><dd>Client + Server + DUI</dd></div>
            <div><dt>{d.locales}</dt><dd>PT-BR · EN · ES · FR</dd></div>
          </dl>
        </div>
      </header>

      <nav className="elevator-toc">
        <a href="#elevator-overview">{d.overview}</a><a href="#elevator-architecture">{d.architecture}</a>
        <a href="#elevator-install">{d.install}</a><a href="#elevator-creation">{d.creation}</a>
        <a href="#elevator-access">{d.access}</a><a href="#elevator-keypad">{d.keypad}</a>
        <a href="#elevator-interactions">{d.interactions}</a><a href="#elevator-keycards">{d.keycards}</a>
        <a href="#elevator-api">{d.api}</a><a href="#elevator-database">{d.database}</a>
        <a href="#elevator-settings">{d.settings}</a><a href="#elevator-diagnostics">{d.diagnostics}</a>
      </nav>

      <section className="elevator-section" id="elevator-overview">
        <div className="elevator-section-head"><span>01</span><div><p>{d.overview}</p><h2>{d.overviewTitle}</h2></div></div>
        <div className="elevator-prose"><p>{d.overviewP1}</p><p>{d.overviewP2}</p><p>{d.overviewP3}</p></div>
        <div className="elevator-detail-grid">
          <DetailCard label="DUI" title={d.featurePhysical} text={d.featurePhysicalD}/>
          <DetailCard label="ACCESS" title={d.featureAccess} text={d.featureAccessD}/>
          <DetailCard label="CREATOR" title={d.featureCreator} text={d.featureCreatorD}/>
          <DetailCard label="BRIDGE" title={d.featureBridge} text={d.featureBridgeD}/>
          <DetailCard label="I18N" title={d.featureLocale} text={d.featureLocaleD}/>
          <DetailCard label="DATA" title={d.featurePersistence} text={d.featurePersistenceD}/>
        </div>
      </section>

      <section className="elevator-section" id="elevator-architecture">
        <div className="elevator-section-head"><span>02</span><div><p>{d.architecture}</p><h2>{d.architectureTitle}</h2></div></div>
        <div className="elevator-layer-stack">
          <DetailCard label="SERVER" title={d.architectureServer} text={d.architectureServerD}/>
          <DetailCard label="CLIENT" title={d.architectureClient} text={d.architectureClientD}/>
          <DetailCard label="DUI / CEF" title={d.architectureDui} text={d.architectureDuiD}/>
          <DetailCard label="SETTINGS" title={d.architectureSettings} text={d.architectureSettingsD}/>
        </div>
      </section>

      <section className="elevator-section" id="elevator-install">
        <div className="elevator-section-head"><span>03</span><div><p>{d.install}</p><h2>{d.installTitle}</h2></div></div>
        <div className="elevator-prose"><p>{d.installP1}</p><p>{d.installP2}</p></div>
        <Code>{"ensure pr_bridge\nensure pr_elevator"}</Code>
        <div className="elevator-split">
          <AccessCard title={d.installCards} text={d.installCardsD}/>
          <AccessCard title={d.installLocale} text={d.installLocaleD}/>
        </div>
      </section>

      <section className="elevator-section" id="elevator-creation">
        <div className="elevator-section-head"><span>04</span><div><p>{d.creation}</p><h2>{d.creationTitle}</h2></div></div>
        <div className="elevator-flow">
          {[['01',d.creationElevator,d.creationElevatorD],['02',d.creationSpawn,d.creationSpawnD],['03',d.creationPanel,d.creationPanelD],['04',d.creationFloor,d.creationFloorD],['05',d.creationReorder,d.creationReorderD],['06',d.creationRefresh,d.creationRefreshD]].map(([n,title,text])=>
            <article key={n}><span>{n}</span><h3>{title}</h3><p>{text}</p></article>
          )}
        </div>
      </section>

      <section className="elevator-section" id="elevator-access">
        <div className="elevator-section-head"><span>05</span><div><p>{d.access}</p><h2>{d.accessTitle}</h2></div></div>
        <div className="elevator-access-grid">
          <AccessCard title={d.accessPublic} text={d.accessPublicD}/><AccessCard title={d.accessJob} text={d.accessJobD}/>
          <AccessCard title={d.accessCitizen} text={d.accessCitizenD}/><AccessCard title={d.accessKeycard} text={d.accessKeycardD}/>
          <AccessCard title={d.accessPassword} text={d.accessPasswordD}/><AccessCard title={d.accessCombined} text={d.accessCombinedD}/>
        </div>
        <div className="elevator-note warning"><strong>{d.accessServerNote}</strong><p>{d.accessServerNoteD}</p></div>
      </section>

      <section className="elevator-section" id="elevator-keypad">
        <div className="elevator-section-head"><span>06</span><div><p>{d.keypad}</p><h2>{d.keypadTitle}</h2></div></div>
        <div className="elevator-prose"><p>{d.keypadP1}</p><p>{d.keypadP2}</p></div>
        <div className="elevator-detail-grid three">
          <DetailCard label="STATE" title={d.keypadStates} text={d.keypadStatesD}/>
          <DetailCard label="ANIMATION" title={d.keypadAnimation} text={d.keypadAnimationD}/>
          <DetailCard label="TRAVEL" title={d.keypadTransport} text={d.keypadTransportD}/>
        </div>
      </section>

      <section className="elevator-section" id="elevator-interactions">
        <div className="elevator-section-head"><span>07</span><div><p>{d.interactions}</p><h2>{d.interactionsTitle}</h2></div></div>
        <div className="elevator-prose"><p>{d.interactionsP1}</p><p>{d.interactionsP2}</p></div>
        <AccessCard title={d.interactionsFallback} text={d.interactionsFallbackD}/>
      </section>

      <section className="elevator-section" id="elevator-keycards">
        <div className="elevator-section-head"><span>08</span><div><p>{d.keycards}</p><h2>{d.keycardsTitle}</h2></div></div>
        <div className="elevator-prose"><p>{d.keycardsP1}</p><p>{d.keycardsP2}</p></div>
        <div className="elevator-card-items"><span>key_card_gold</span><span>key_card_security</span><span>key_card_ilegal</span></div>
        <div className="elevator-note"><strong>{d.keycardsInventory}</strong><p>{d.keycardsInventoryD}</p></div>
      </section>

      <section className="elevator-section" id="elevator-api">
        <div className="elevator-section-head"><span>09</span><div><p>{d.api}</p><h2>{d.apiTitle}</h2></div></div>
        <div className="elevator-split">
          <AccessCard title={d.apiCreator} text={d.apiCreatorD}/>
          <AccessCard title={d.apiDui} text={d.apiDuiD}/>
        </div>
        <Code>{"-- Creator menus\nexports['pr_elevator']:OpenCreatorMenu(context)\nexports['pr_elevator']:OpenCreateElevatorMenu(context)\nexports['pr_elevator']:OpenCreateFloorMenu(context)\nexports['pr_elevator']:OpenCreateKeycardMenu(context)\n\n-- Reusable DUI/keypad layer\nexports['pr_elevator']:CreateDUI()\nexports['pr_elevator']:CreateKeypad(...)\nexports['pr_elevator']:CreateKeypadFromInteract(interactData, code, options)\nexports['pr_elevator']:OpenKeypadEntity(prop, code, context)\nexports['pr_elevator']:DeleteKeypad(prop)"}</Code>
        <div className="elevator-note"><strong>{d.apiCreatorPermission}</strong><p>{d.apiCreatorPermissionD}</p></div>
      </section>

      <section className="elevator-section" id="elevator-database">
        <div className="elevator-section-head"><span>10</span><div><p>{d.database}</p><h2>{d.dbTitle}</h2></div></div>
        <div className="elevator-db-grid">
          <article><code>pr_elevator_elevator</code><p>{d.dbElevatorD}</p></article>
          <article><code>pr_elevator_floor</code><p>{d.dbFloorD}</p></article>
        </div>
        <div className="elevator-note"><strong>{d.dbMigration}</strong><p>{d.dbMigrationD}</p></div>
        <Code>{"-- Parent\nid, name, type, job, job_grade, password, access_key, citizenid\n\n-- Floor\nid, elevator_id, name, floor, distance, theme_color, theme_background,\ncoords, interact_coords, access_type, access_job, access_job_grade,\naccess_password, access_key, access_item, access_citizenid"}</Code>
      </section>

      <section className="elevator-section" id="elevator-settings">
        <div className="elevator-section-head"><span>11</span><div><p>{d.settings}</p><h2>{d.settingsTitle}</h2></div></div>
        <div className="elevator-access-grid">
          <AccessCard title={d.settingsMode} text={d.settingsModeD}/><AccessCard title={d.settingsWalls} text={d.settingsWallsD}/>
          <AccessCard title={d.settingsOffset} text={d.settingsOffsetD}/><AccessCard title={d.settingsDistance} text={d.settingsDistanceD}/>
          <AccessCard title={d.settingsRevision} text={d.settingsRevisionD}/><AccessCard title={d.settingsPermission} text={d.settingsPermissionD}/>
        </div>
        <Code>{'{\n  "mode": "target",\n  "respectWalls": true,\n  "frontOffset": 0.18,\n  "distance": 2.0\n}'}</Code>
      </section>

      <section className="elevator-section" id="elevator-diagnostics">
        <div className="elevator-section-head"><span>12</span><div><p>{d.diagnostics}</p><h2>{d.diagnosticsTitle}</h2></div></div>
        <div className="elevator-detail-grid three">
          <DetailCard label="F8" title={d.diagnosticsCommands} text={d.diagnosticsCommandsD}/>
          <DetailCard label="TESTS" title={d.diagnosticsTests} text={d.diagnosticsTestsD}/>
          <DetailCard label="FIVEM" title={d.diagnosticsStatus} text={d.diagnosticsStatusD}/>
        </div>
        <div className="elevator-note"><strong>{d.diagnosticsVersion}</strong><p>{d.diagnosticsVersionD}</p></div>
      </section>

      <section className="elevator-source-note">
        <span>Source review</span><h2>{d.sourceTitle}</h2><p>{d.sourceP}</p>
      </section>
    </div>
  );
}
