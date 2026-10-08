import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Framework-Forge/forge-garage';

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

export default function ForgeGarageDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs garage-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Scripts • Vehicle Platform</div>
          <h1>forge-<span>garage</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Plataforma completa de garagens para FiveM com criador administrativo in-game, zonas 3D, vagas e spawn points, veículos persistentes, garagens IPL instanciadas, painel visual de interiores, parquímetros, chaves físicas, transferência de propriedade, apreensão policial, loja de veículos por trabalho e integração de consulta/rota para telefone.'
              : 'A complete FiveM garage platform with an in-game admin creator, 3D zones, parking and spawn points, persistent vehicles, instanced IPL garages, interior visual management, parking meters, physical keys, ownership transfers, police impound, job vehicle shops and phone lookup/routing integration.'}
          </p>
          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório' : 'Repository'}</a>
            <a className="docs-secondary-button" href="#garage-create">{pt ? 'Criar garagem' : 'Create garage'}</a>
            <a className="docs-secondary-button" href="#garage-persistence">{pt ? 'Persistência' : 'Persistence'}</a>
          </div>
          <div className="legacy-meta">
            <span>v1.4.5</span><span>FiveM</span><span>PR Bridge</span><span>IPL</span><span>Parking</span><span>Keys</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>FG</span><strong>GARAGE</strong></div>
          <Info label={pt ? 'Dependência' : 'Dependency'}>pr_bridge</Info>
          <Info label={pt ? 'Administração' : 'Administration'}>{pt ? 'Criador in-game' : 'In-game creator'}</Info>
          <Info label={pt ? 'Persistência' : 'Persistence'}>JSON + Database</Info>
          <Info label="IPL">{pt ? 'Entradas, elevadores e vagas' : 'Entries, elevators & spots'}</Info>
          <Info label={pt ? 'Veículos' : 'Vehicles'}>{pt ? 'Estado, danos, combustível e identidade' : 'State, damage, fuel & identity'}</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#garage-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#garage-install">{pt ? 'Instalação' : 'Install'}</a>
        <a href="#garage-create">{pt ? 'Criador' : 'Creator'}</a>
        <a href="#garage-runtime">{pt ? 'Uso da garagem' : 'Garage runtime'}</a>
        <a href="#garage-persistence">{pt ? 'Veículos persistentes' : 'Persistent vehicles'}</a>
        <a href="#garage-parking">{pt ? 'Parquímetros' : 'Parking meters'}</a>
        <a href="#garage-keys">{pt ? 'Chaves e transferências' : 'Keys & transfers'}</a>
        <a href="#garage-impound">{pt ? 'Apreensão' : 'Impound'}</a>
        <a href="#garage-ipl">IPL</a>
        <a href="#garage-property">{pt ? 'Imóveis' : 'Property garages'}</a>
        <a href="#garage-services">{pt ? 'Serviços extras' : 'Extra services'}</a>
        <a href="#garage-storage">{pt ? 'Persistência de dados' : 'Data persistence'}</a>
        <a href="#garage-api">API / Commands</a>
      </nav>

      <section className="docs-section" id="garage-overview">
        <SectionTitle number="01" label={pt ? 'Arquitetura' : 'Architecture'} title={pt ? 'Uma garagem pode ser simples, compartilhada, de apreensão, persistente ou um interior IPL completo.' : 'A garage can be simple, shared, impound, persistent or a complete IPL interior.'} />
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Definição' : 'Definition'}</strong><p>{pt ? 'Tipo de veículo, zona, acesso, interação, blip e regras operacionais.' : 'Vehicle type, zone, access, interaction, blip and operating rules.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Vagas' : 'Spots'}</strong><p>{pt ? 'Spawn points tradicionais, vagas persistentes ou posições internas do IPL.' : 'Traditional spawn points, persistent parking spots or internal IPL positions.'}</p></div>
          <div><span>03</span><strong>{pt ? 'Identidade do veículo' : 'Vehicle identity'}</strong><p>{pt ? 'Proprietário, placa registrada/falsa, estado, tuning, combustível, danos e localização.' : 'Owner, registered/fake plate, state, tuning, fuel, damage and location.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Serviços' : 'Services'}</strong><p>{pt ? 'Chaves, venda, parquímetro, apreensão, telefone, IPL e lojas de trabalho.' : 'Keys, sales, parking meters, impound, phone, IPL and job shops.'}</p></div>
        </div>
        <div className="crafting-feature-grid">
          <Card eyebrow="CREATOR" title={pt ? 'Criador administrativo' : 'Admin creator'}>{pt ? 'Desenhe a zona no mundo, escolha tipos de veículos, vagas, persistência, interação e restrições sem editar coordenadas à mão.' : 'Draw the world zone and choose vehicle types, spots, persistence, interaction and restrictions without hand-editing coordinates.'}</Card>
          <Card eyebrow="PERSIST" title={pt ? 'Veículos estacionados no mundo' : 'World-persistent parking'}>{pt ? 'Garagens persistentes mantêm o veículo físico associado à vaga e sincronizam entrada/saída por bucket.' : 'Persistent garages keep the physical vehicle tied to its spot and synchronize entry/exit by bucket.'}</Card>
          <Card eyebrow="IPL" title={pt ? 'Interiores instanciados' : 'Instanced interiors'}>{pt ? 'Entradas, elevadores, vagas, buckets e variantes de interiores podem ser configurados por garagem.' : 'Entries, elevators, spots, buckets and interior variants can be configured per garage.'}</Card>
          <Card eyebrow="METER" title={pt ? 'Estacionamento tarifado' : 'Metered parking'}>{pt ? 'Sessões usam o relógio sincronizado, pausam ao destrancar e geram dívida quando o veículo sai sem pagamento.' : 'Sessions use synchronized game time, pause on unlock and create debt when a vehicle leaves unpaid.'}</Card>
          <Card eyebrow="KEYS" title={pt ? 'Chaves físicas' : 'Physical keys'}>{pt ? 'Originais e cópias usam barcode/metadata; o gerenciador permite duplicar ou substituir uma chave perdida.' : 'Originals and copies use barcode/metadata; the manager can duplicate or replace lost keys.'}</Card>
          <Card eyebrow="SECURITY" title={pt ? 'Servidor autoritativo' : 'Authoritative server'}>{pt ? 'Ownership, dinheiro, estado do veículo, distância, sessões e permissões são revalidados no servidor.' : 'Ownership, money, vehicle state, distance, sessions and permissions are revalidated server-side.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="garage-install">
        <SectionTitle number="02" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'PR Bridge é a dependência obrigatória e centraliza os serviços compartilhados.' : 'PR Bridge is the required dependency and centralizes shared services.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Ordem de inicialização' : 'Startup order'}</h3>
            <LuaCodeBlock>{"ensure pr_bridge\nensure forge-garage"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Boot e migrações' : 'Boot & migrations'}</h3>
            <p>{pt ? 'No início, o resource aguarda o banco via PR Bridge, adiciona colunas ausentes, cria tabelas de estacionamento e carrega garagens/nomenclaturas dos arquivos JSON.' : 'At boot the resource waits for the database through PR Bridge, adds missing columns, creates parking tables and loads garage/name data from JSON.'}</p>
          </div>
        </div>
        <div className="xt-note"><strong>{pt ? 'Integração Forge' : 'Forge integration'}</strong><p>{pt ? 'Banco, framework, catálogo de veículos, combustível, callbacks, menus, notificações, target, inventário, streaming, zonas e DevTools passam pelo PR Bridge. Integrações especializadas do ecossistema Forge permanecem opcionais conforme a funcionalidade usada.' : 'Database, framework, vehicle catalog, fuel, callbacks, menus, notifications, target, inventory, streaming, zones and DevTools go through PR Bridge. Specialized Forge ecosystem integrations remain optional according to the feature being used.'}</p></div>
      </section>

      <section className="docs-section" id="garage-create">
        <SectionTitle number="03" label={pt ? 'Criador in-game' : 'In-game creator'} title={pt ? 'O administrador desenha a área da garagem e configura o comportamento em um único fluxo.' : 'The administrator draws the garage area and configures behavior in a single flow.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>/garagelist</strong><p>{pt ? 'Abre a listagem administrativa. A mesma tela pode ser aberta por outro painel usando o evento/retorno de menu previsto pelo resource.' : 'Opens the admin list. The same view can be embedded by another panel using the resource parent-menu flow.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Desenhar a PolyZone' : 'Draw the PolyZone'}</strong><p>{pt ? 'O DevTools do PR Bridge captura no mínimo três pontos, calcula limites verticais e devolve a zona 3D pronta para a garagem.' : 'PR Bridge DevTools captures at least three points, computes vertical bounds and returns a ready 3D garage zone.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Definir a garagem' : 'Define the garage'}</strong><p>{pt ? 'Nome, categorias de veículos, apreensão, compartilhamento, vagas, persistência e forma de interação são selecionados no formulário.' : 'Name, vehicle categories, impound, sharing, parking spots, persistence and interaction method are selected in the form.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Criar vagas/spawns' : 'Create spots/spawns'}</strong><p>{pt ? 'Quando a garagem exige vagas, o posicionador registra coordenadas e também o modelo usado como referência quando necessário.' : 'When the garage uses spots, the placement tool records coordinates and the reference vehicle model when needed.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Interação' : 'Interaction'}</strong><p>{pt ? 'Pode abrir por menu radial, tecla contextual ou NPC com target; garagens persistentes/IPL usam seus próprios fluxos de acesso.' : 'It can open through radial menu, contextual key or targeted NPC; persistent/IPL garages use their own access flows.'}</p></div></article>
          <article><span>06</span><div><strong>{pt ? 'Salvar e sincronizar' : 'Save & sync'}</strong><p>{pt ? 'A definição entra em data/garages.json, atualiza GarageZone e é enviada a todos os clients.' : 'The definition is written to data/garages.json, updates GarageZone and is broadcast to all clients.'}</p></div></article>
        </div>

        <h3 className="xt-subheading">{pt ? 'Tipos de veículos suportados pelo criador' : 'Creator vehicle categories'}</h3>
        <div className="crafting-slot-grid">
          {['Car','Motorcycle','Cycle','Boat','Helicopter','Plane'].map((item) => <article key={item}><span>TYPE</span><strong>{item}</strong></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Edição posterior' : 'Editing after creation'}</h3>
        <div className="crafting-admin-grid">
          {[
            [pt ? 'Excluir garagem' : 'Delete garage', pt ? 'Remove a definição após confirmação.' : 'Removes the definition after confirmation.'],
            ['Blip', pt ? 'Sprite, cor e nome do mapa.' : 'Map sprite, color and label.'],
            [pt ? 'Localização / IPL' : 'Location / IPL', pt ? 'Redesenha posição ou abre configuração de acessos IPL.' : 'Redraws location or opens IPL access configuration.'],
            [pt ? 'Teleportar' : 'Teleport', pt ? 'Leva o administrador até o primeiro ponto configurado.' : 'Moves the admin to the first configured point.'],
            [pt ? 'Renomear' : 'Rename', pt ? 'Altera o nome da garagem mantendo sua configuração.' : 'Changes garage name while retaining configuration.'],
            [pt ? 'Spawns / vagas' : 'Spawns / spots', pt ? 'Gerencia pontos externos ou vagas internas.' : 'Manages external spawn points or internal spots.'],
            [pt ? 'Definir veículos' : 'Define vehicles', pt ? 'Restringe quais modelos podem aparecer onde aplicável.' : 'Restricts allowed models where applicable.'],
            [pt ? 'Configurações' : 'Settings', pt ? 'Tipo, persistência, categorias e método de interação.' : 'Type, persistence, categories and interaction method.'],
            [pt ? 'Acesso por grupo' : 'Group access', pt ? 'Regras de trabalho ou grupo são configuradas na própria garagem.' : 'Work/group restrictions are configured per garage.'],
          ].map(([name,desc]) => <article key={name}><strong>{name}</strong><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="garage-runtime">
        <SectionTitle number="04" label={pt ? 'Uso da garagem' : 'Garage runtime'} title={pt ? 'Guardar e retirar preserva identidade, tuning, combustível e condição do veículo.' : 'Storing and retrieving preserves identity, tuning, fuel and vehicle condition.'} />
        <div className="crafting-flow">
          <div><span>A</span><strong>{pt ? 'Abrir' : 'Open'}</strong><p>{pt ? 'Lista veículos elegíveis para aquela garagem e mostra estado, placa, nome e condição.' : 'Lists vehicles eligible for that garage and shows state, plate, name and condition.'}</p></div>
          <div><span>B</span><strong>{pt ? 'Retirar' : 'Withdraw'}</strong><p>{pt ? 'Servidor carrega propriedades, valida disponibilidade e cria ou libera a entidade correta.' : 'Server loads properties, validates availability and creates/releases the correct entity.'}</p></div>
          <div><span>C</span><strong>{pt ? 'Usar' : 'Use'}</strong><p>{pt ? 'Placa visível pode ser diferente da identidade registral; ownership e chaves continuam resolvidos pela identidade persistente.' : 'Visible plate may differ from the registered identity; ownership and keys still resolve through persistent identity.'}</p></div>
          <div><span>D</span><strong>{pt ? 'Guardar' : 'Store'}</strong><p>{pt ? 'Atualiza propriedades, danos, combustível, garagem, estado e posição de estacionamento quando necessário.' : 'Updates properties, damage, fuel, garage, state and parking coordinates when needed.'}</p></div>
        </div>
        <div className="crafting-feature-grid">
          <Card eyebrow="ALL GARAGES" title={pt ? 'Listagem global opcional' : 'Optional global listing'}>{pt ? 'Config.VehiclesInAllGarages pode fazer todos os veículos do personagem aparecerem em todas as garagens compatíveis.' : 'Config.VehiclesInAllGarages can show all character vehicles in compatible garages.'}</Card>
          <Card eyebrow="LOCATE" title={pt ? 'Localizar veículo externo' : 'Locate outside vehicle'}>{pt ? 'Quando habilitado, veículos fora da garagem podem ser encontrados em vez de aparecerem apenas como indisponíveis.' : 'When enabled, vehicles outside can be located instead of only showing as unavailable.'}</Card>
          <Card eyebrow="CAMERA" title={pt ? 'Câmera configurável' : 'Configurable camera'}>{pt ? 'A movimentação de câmera ao retirar o veículo pode ser desabilitada globalmente.' : 'Camera motion while withdrawing a vehicle can be disabled globally.'}</Card>
          <Card eyebrow="NAME" title={pt ? 'Nome personalizado' : 'Custom name'}>{pt ? 'O jogador pode salvar um nome customizado por placa, persistido em data/vehiclesname.json, com preço configurável.' : 'Players can save a custom per-plate name in data/vehiclesname.json with a configurable fee.'}</Card>
          <Card eyebrow="SWAP" title={pt ? 'Trocar de garagem' : 'Swap garage'}>{pt ? 'O veículo pode ser movido administrativamente entre garagens mediante a política/preço configurados.' : 'Vehicles can be moved between garages according to configured policy/price.'}</Card>
          <Card eyebrow="SPAWN" title={pt ? 'Spawn server-side' : 'Server-side spawn'}>{pt ? 'O PR Bridge cria a entidade, aplica propriedades e registra persistência antes de devolver network ID.' : 'PR Bridge creates the entity, applies properties and establishes persistence before returning the network ID.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="garage-persistence">
        <SectionTitle number="05" label={pt ? 'Veículos persistentes' : 'Persistent vehicles'} title={pt ? 'Em garagens persistentes, o veículo estacionado continua existindo como parte do estacionamento.' : 'In persistent garages, the parked vehicle remains an actual part of the parking area.'} />
        <div className="docs-prose">
          <p>{pt ? 'Quando o jogador entra na zona persistente, o servidor resolve quais veículos armazenados precisam existir naquele bucket e coordena o spawn somente uma vez. Os clients confirmam as entidades criadas; ao sair da zona, referências locais são removidas sem quebrar o registro persistido.' : 'When a player enters a persistent zone, the server resolves which stored vehicles should exist in that bucket and coordinates a single spawn. Clients confirm spawned entities; leaving the zone clears local references without breaking persisted records.'}</p>
          <p>{pt ? 'A identidade da placa registrada é mantida em state bag mesmo quando o veículo usa uma placa visual temporária. Isso evita que chave, ownership, armazenamento e persistência passem a depender da placa exibida.' : 'Registered-plate identity is kept in a state bag even when the vehicle uses a temporary visible plate. This prevents keys, ownership, storage and persistence from depending on the displayed plate.'}</p>
        </div>
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Entrar na zona' : 'Enter zone'}</strong><p>{pt ? 'O client informa a garagem e o servidor filtra os registros estacionados.' : 'Client reports the garage and server filters stored records.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Materializar' : 'Materialize'}</strong><p>{pt ? 'Cada registro ganha entidade persistente com propriedades, placa e posição salvas.' : 'Each record gets a persistent entity with saved properties, plate and position.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Confirmar' : 'Confirm'}</strong><p>{pt ? 'Clients confirmam o lote de spawns para evitar duplicação em entradas concorrentes.' : 'Clients confirm the spawn batch to avoid duplication across concurrent entries.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Retirar da vaga' : 'Withdraw from spot'}</strong><p>{pt ? 'Ao liberar um veículo persistente, o estado estacionado é destacado e os demais clients limpam a cópia local.' : 'When releasing a persistent vehicle, parked state is detached and other clients clear their local copy.'}</p></div></article>
        </div>
        <div className="xt-note"><strong>Config.PersistentDistance</strong><p>{pt ? 'O valor padrão é 120 m e controla a distância usada pelo streaming/persistência do estacionamento.' : 'Default is 120 m and controls the distance used by parking streaming/persistence.'}</p></div>
      </section>

      <section className="docs-section" id="garage-parking">
        <SectionTitle number="06" label={pt ? 'Parquímetros' : 'Parking meters'} title={pt ? 'Uma garagem persistente pode cobrar por hora ou dia de jogo e gerar dívida quando o veículo sai sem quitar.' : 'A persistent garage can charge per game hour/day and generate debt when the vehicle leaves unpaid.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="SETUP" title={pt ? 'Terminais livres' : 'Flexible terminals'}>{pt ? 'Um terminal pode atender todas as vagas; podem ser usados pontos colocados pelo editor ou terminais existentes no mapa.' : 'One terminal can serve every spot; editor-placed terminals or existing map terminals can be used.'}</Card>
          <Card eyebrow="CLOCK" title={pt ? 'Relógio sincronizado' : 'Synchronized clock'}>{pt ? 'A cobrança acompanha o relógio global do servidor; aceleração, desaceleração ou congelamento de tempo alteram o faturamento de forma coerente.' : 'Billing follows the synchronized server clock; time acceleration, slowdown or freeze affect billing consistently.'}</Card>
          <Card eyebrow="UNLOCK" title={pt ? 'Janela de saída' : 'Exit window'}>{pt ? 'Destrancar pausa a cobrança por um prazo real configurável. O pagamento não dá estacionamento ilimitado: preserva apenas o restante da mesma janela.' : 'Unlocking pauses billing for a configurable real-time window. Payment does not grant unlimited parking; it preserves only the remaining current window.'}</Card>
          <Card eyebrow="EXIT" title={pt ? 'Saída física' : 'Physical departure'}>{pt ? 'A sessão termina quando o veículo se afasta mais de 6 m do centro da vaga; acelerar parado não encerra cobrança.' : 'The session ends when the vehicle moves more than 6 m from the spot center; revving in place does not end billing.'}</Card>
          <Card eyebrow="DEBT" title={pt ? 'Dívida persistente' : 'Persistent debt'}>{pt ? 'Sair sem pagamento gera registro ativo; sessões e multas sobrevivem a reinícios e podem ser encaminhadas a um sistema externo.' : 'Leaving unpaid creates an active record; sessions and fines survive restarts and can be forwarded to an external system.'}</Card>
          <Card eyebrow="RESTORE" title={pt ? 'Retorno automático' : 'Automatic restore'}>{pt ? 'Se a janela expirar e o carro continuar parado na vaga, o servidor restaura estado estacionado, registro e trava sem congelar veículo em movimento.' : 'If the window expires while the car remains stopped in the spot, server restores parked state, registry and lock without freezing a moving vehicle.'}</Card>
        </div>
        <LuaCodeBlock>{"-- Contratos públicos de dívida\nlocal debt = exports['forge-garage']:GetParkingDebt(plate)\nlocal report = exports['forge-garage']:ReportParkingDebt(plate, reference)\nlocal ok = exports['forge-garage']:ResolveParkingDebt(plate, reference)\n\n-- Registrar um recebedor idempotente de novas dívidas\nexports['forge-garage']:RegisterParkingDebtHandler('ReceiveParkingDebt')"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="garage-keys">
        <SectionTitle number="07" label={pt ? 'Chaves e transferências' : 'Keys & transfers'} title={pt ? 'O mesmo gerenciador centraliza cópias, reposição de chave e transferência/venda do veículo.' : 'The same manager centralizes key copies, lost-key replacement and vehicle transfer/sale.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>/keymanager</strong><p>{pt ? 'Abre o menu de chaves e propriedade. Também existe o export client openKeyManagerMenu().' : 'Opens key and ownership management. A client export openKeyManagerMenu() is also available.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Copiar chave' : 'Copy key'}</strong><p>{pt ? 'Lista chaves físicas com placa/barcode; cobra Config.GiveKeys.price e solicita a criação da cópia. Se falhar, o pagamento é devolvido.' : 'Lists physical keys with plate/barcode; charges Config.GiveKeys.price and requests the copy. On failure, payment is refunded.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Chave perdida' : 'Lost key'}</strong><p>{pt ? 'Lista os veículos registrados no personagem e permite comprar uma nova chave original por Config.LostKeyPrice.' : 'Lists vehicles registered to the character and lets them buy a new original key for Config.LostKeyPrice.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Jogador próximo' : 'Nearby player'}</strong><p>{pt ? 'Venda/transferência para player em até 3 m. O comprador escolhe a conta e precisa aceitar a proposta.' : 'Sale/transfer to a player within 3 m. Buyer chooses the payment account and must accept the proposal.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Por identificador' : 'By identifier'}</strong><p>{pt ? 'Permite transferir por CitizenID. Presentes de valor zero podem ser processados offline; venda com preço exige o comprador online para aceitar.' : 'Allows transfer by character identifier. Zero-price gifts can be processed offline; priced sales require the buyer online to accept.'}</p></div></article>
          <article><span>06</span><div><strong>{pt ? 'Rollback financeiro' : 'Financial rollback'}</strong><p>{pt ? 'Se a alteração de ownership falhar depois do pagamento, comprador, vendedor e eventual taxa são revertidos.' : 'If ownership update fails after payment, buyer, seller and any configured tax are rolled back.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="garage-impound">
        <SectionTitle number="08" label={pt ? 'Apreensão policial' : 'Police impound'} title={pt ? 'Veículos podem ser apreendidos com motivo, observação, prazo, multa e histórico persistente.' : 'Vehicles can be impounded with reason, notes, hold time, fine and persistent history.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="TARGET" title={pt ? 'Ação no veículo' : 'Vehicle action'}>{pt ? 'Quando habilitado, um target global fica disponível apenas para os grupos configurados.' : 'When enabled, a global vehicle target is available only to configured groups.'}</Card>
          <Card eyebrow="RECORD" title={pt ? 'Registro completo' : 'Complete record'}>{pt ? 'Placa, proprietário, agente, motivo, observações, deformação, data, multa e pátio são persistidos.' : 'Plate, owner, officer, reason, notes, deformation, date, fine and impound yard are persisted.'}</Card>
          <Card eyebrow="STATE" title={pt ? 'Estado do veículo' : 'Vehicle state'}>{pt ? 'A apreensão muda o veículo para state 2 e o retira do fluxo normal de garagem.' : 'Impound changes the vehicle to state 2 and removes it from normal garage flow.'}</Card>
          <Card eyebrow="FINE" title={pt ? 'Pagamento' : 'Payment'}>{pt ? 'O pátio exibe situação da multa; após pagamento autorizado, o registro é marcado como pago.' : 'The yard displays fine status; after authorized payment the record is marked paid.'}</Card>
          <Card eyebrow="RELEASE" title={pt ? 'Liberação' : 'Release'}>{pt ? 'Quando as condições forem atendidas, o veículo volta ao estado operacional e pode ser retirado.' : 'Once conditions are satisfied, the vehicle returns to operational state and can be withdrawn.'}</Card>
          <Card eyebrow="SYNC" title={pt ? 'Integração de ocorrências' : 'Incident integration'}>{pt ? 'Hooks opcionais podem sincronizar apreensão e faturamento com serviços Forge sem alterar a tabela central do Garage.' : 'Optional hooks can synchronize impound and billing with Forge services without changing the Garage central table.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="garage-ipl">
        <SectionTitle number="09" label="IPL" title={pt ? 'Garagens internas usam buckets, entradas múltiplas, elevadores, vagas e personalização visual por instância.' : 'Interior garages use buckets, multiple entries, elevators, spots and per-instance visual customization.'} />
        <div className="crafting-flow">
          <div><span>ENTRY</span><strong>{pt ? 'Entradas' : 'Entries'}</strong><p>{pt ? 'Cada entrada possui nome, coordenada e modo: a pé, veículo ou ambos.' : 'Each entry has a label, coordinates and mode: pedestrian, vehicle or both.'}</p></div>
          <div><span>FLOOR</span><strong>{pt ? 'Elevadores internos' : 'Internal elevators'}</strong><p>{pt ? 'Pontos de andar usam o mesmo modelo de acesso e podem transportar player com ou sem veículo.' : 'Floor points use the same access model and can move the player with or without vehicle.'}</p></div>
          <div><span>SPOT</span><strong>{pt ? 'Vagas internas' : 'Internal spots'}</strong><p>{pt ? 'Vagas podem ser posicionadas com veículo preview para registrar XYZ, heading e modelo.' : 'Spots can be placed with a preview vehicle to record XYZ, heading and model.'}</p></div>
          <div><span>BUCKET</span><strong>{pt ? 'Instância' : 'Instance'}</strong><p>{pt ? 'Cada garagem IPL usa routing bucket próprio para isolar veículos, jogadores e aparência.' : 'Each IPL garage uses its own routing bucket to isolate vehicles, players and appearance.'}</p></div>
        </div>

        <h3 className="xt-subheading">{pt ? 'Catálogo e variantes' : 'Catalog & variants'}</h3>
        <div className="docs-prose">
          <p>{pt ? 'O catálogo inclui garagens CEO, depósitos de veículos, Casino, Agency, Tuner, hangares e outros interiores GTA. Variantes A/B/C que ocupam o mesmo espaço são tratadas como exclusivas: somente uma delas fica ativa no client. O resource também remove IPLs auxiliares que poderiam sobrepor a garagem ativa.' : 'The catalog includes CEO garages, vehicle warehouses, Casino, Agency, Tuner, hangars and other GTA interiors. A/B/C variants that occupy the same space are exclusive: only one remains active on the client. The resource also removes helper IPLs that could overlap the active garage.'}</p>
        </div>

        <h3 className="xt-subheading">{pt ? 'Painel de layout do interior' : 'Interior layout panel'}</h3>
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Criar NPC do painel' : 'Create layout NPC'}</strong><p>{pt ? 'Dentro da garagem, o admin posiciona/gira o NPC por DevTools e define distância do target e política de acesso.' : 'Inside the garage, admin positions/rotates the NPC with DevTools and defines target distance and access policy.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Pré-visualizar' : 'Preview'}</strong><p>{pt ? 'Acabamento, iluminação, numeração e cores compatíveis são aplicados localmente sem publicar a mudança.' : 'Compatible finish, lighting, numbering and colors are applied locally without publishing changes.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Salvar aparência' : 'Save appearance'}</strong><p>{pt ? 'O servidor valida catálogo, bucket, distância e revisão; depois persiste ipl.visual e sincroniza usuários da mesma garagem.' : 'Server validates catalog, bucket, distance and revision, then persists ipl.visual and syncs users in the same garage.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Isolamento' : 'Isolation'}</strong><p>{pt ? 'Duas garagens com o mesmo modelo IPL podem ter escolhas visuais diferentes porque o estado é armazenado por instância.' : 'Two garages using the same IPL model can have different visual choices because state is stored per instance.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="garage-property">
        <SectionTitle number="10" label={pt ? 'Garagens de imóveis' : 'Property garages'} title={pt ? 'Integrações imobiliárias podem abrir um criador público controlado por permissão.' : 'Property integrations can open a permission-controlled public garage creator.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="EXPORT" title="createPropertyGarage">{pt ? 'Inicia um rascunho de garagem de imóvel pelo client e valida a autorização no servidor.' : 'Starts a client-side property garage draft and validates authorization server-side.'}</Card>
          <Card eyebrow="COMMIT" title="commitPropertyGarageDraft">{pt ? 'Converte o rascunho validado em uma garagem persistente depois que a integração confirmar os dados.' : 'Converts a validated draft into a persistent garage after the integration confirms data.'}</Card>
          <Card eyebrow="ACCESS" title={pt ? 'Política de criação' : 'Creation policy'}>{pt ? 'Pode usar empregos/grades permitidos e uma permissão ACE dedicada.' : 'Can use allowed jobs/grades plus a dedicated ACE permission.'}</Card>
          <Card eyebrow="LIMITS" title={pt ? 'Limites de segurança' : 'Safety limits'}>{pt ? 'Há cooldown e limites máximos de pontos de zona e spawn points para impedir payloads abusivos.' : 'There is a cooldown plus maximum zone-point and spawn-point limits to prevent abusive payloads.'}</Card>
          <Card eyebrow="DRAFT" title={pt ? 'Rascunho serializado' : 'Serialized draft'}>{pt ? 'Vetores e pontos são convertidos para estruturas simples antes de cruzar a fronteira client/server.' : 'Vectors and points are converted into simple structures before crossing the client/server boundary.'}</Card>
          <Card eyebrow="SYNC" title={pt ? 'Publicação' : 'Publishing'}>{pt ? 'Ao concluir, a garagem entra no mesmo GarageZone e no mesmo fluxo de sincronização das demais.' : 'Once committed, the garage joins the same GarageZone and sync flow as every other garage.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="garage-services">
        <SectionTitle number="11" label={pt ? 'Serviços adicionais' : 'Additional services'} title={pt ? 'Loja por trabalho e visão de telefone usam os mesmos dados centrais da garagem.' : 'Job vehicle shop and phone view use the same central garage data.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="JOB SHOP" title={pt ? 'Loja de veículos' : 'Vehicle shop'}>{pt ? 'Cada entrada define grupo, NPC, ponto de spawn, modelos, preço, prefixo de placa e grades permitidas.' : 'Each entry defines group, NPC, spawn point, models, price, plate prefix and allowed grades.'}</Card>
          <Card eyebrow="PURCHASE" title={pt ? 'Compra persistente' : 'Persistent purchase'}>{pt ? 'O servidor cobra a conta configurada, registra o veículo no banco e o torna parte da garagem do personagem.' : 'Server charges the configured account, inserts the vehicle into storage and makes it part of the character garage.'}</Card>
          <Card eyebrow="PHONE" title={pt ? 'Lista somente leitura' : 'Read-only phone list'}>{pt ? 'O telefone consulta apenas veículos do titular ativo e mostra placa, modelo, estado, combustível, motor, lataria e garagem.' : 'Phone only queries vehicles belonging to the active owner and shows plate, model, state, fuel, engine, body and garage.'}</Card>
          <Card eyebrow="ROUTE" title={pt ? 'Rota inteligente' : 'Smart routing'}>{pt ? 'Dependendo do estado, a rota aponta para garagem, pátio, depósito/seguro ou posição ao vivo do veículo.' : 'Depending on state, routing points to garage, impound, depot/insurance or the live vehicle location.'}</Card>
          <Card eyebrow="FINES" title={pt ? 'Multas' : 'Fines'}>{pt ? 'Detalhes podem agregar débitos de estacionamento e ocorrências vinculadas sem permitir mutações pelo telefone.' : 'Details can aggregate parking debts and related citations without allowing phone-side mutations.'}</Card>
          <Card eyebrow="OWNER CHECK" title={pt ? 'Ownership a cada consulta' : 'Ownership on every request'}>{pt ? 'Lista, detalhe e rota revalidam o identificador do aparelho ativo para evitar consultar veículo de outro personagem.' : 'List, detail and route revalidate the active phone owner identifier to prevent cross-character vehicle access.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="garage-storage">
        <SectionTitle number="12" label={pt ? 'Persistência de dados' : 'Data persistence'} title={pt ? 'Configuração em JSON e estado operacional no banco mantêm responsabilidades separadas.' : 'JSON configuration and database operational state keep responsibilities separated.'} />
        <div className="crafting-db-grid">
          <article><code>data/garages.json</code><strong>{pt ? 'Definições das garagens' : 'Garage definitions'}</strong><p>{pt ? 'Zonas, blips, acessos, vagas, persistência, IPL, layout visual e regras.' : 'Zones, blips, access, spots, persistence, IPL, visual layout and rules.'}</p></article>
          <article><code>data/vehiclesname.json</code><strong>{pt ? 'Nomes customizados' : 'Custom names'}</strong><p>{pt ? 'Apelido/nome definido por placa para exibição nos menus.' : 'Per-plate nickname used in menus.'}</p></article>
          <article><code>player_vehicles</code><strong>{pt ? 'Veículos do personagem' : 'Character vehicles'}</strong><p>{pt ? 'Ownership, veículo, mods, placa/fakeplate, garagem, estado, combustível, danos, financiamento e parking_coords.' : 'Ownership, model, mods, plate/fakeplate, garage, state, fuel, damage, finance and parking_coords.'}</p></article>
          <article><code>police_impound</code><strong>{pt ? 'Apreensões' : 'Impounds'}</strong><p>{pt ? 'Motivo, observações, deformação, data, multa, pátio, pagamento e referência de cobrança.' : 'Reason, notes, deformation, date, fine, yard, payment and billing reference.'}</p></article>
          <article><code>forge_garage_meter_sessions</code><strong>{pt ? 'Sessões de parquímetro' : 'Meter sessions'}</strong><p>{pt ? 'Estado serializado da cobrança por placa para sobreviver a restart.' : 'Serialized per-plate billing state that survives restart.'}</p></article>
          <article><code>forge_garage_meter_fines</code><strong>{pt ? 'Multas de estacionamento' : 'Parking fines'}</strong><p>{pt ? 'Débitos emitidos com ID idempotente, valor, local, horário, status e referência.' : 'Issued debts with idempotent ID, amount, location, time, status and reference.'}</p></article>
        </div>
        <div className="xt-note"><strong>{pt ? 'Migração automática' : 'Automatic migration'}</strong><p>{pt ? 'db_update.lua inspeciona o schema e adiciona somente colunas ausentes, evitando erros de coluna duplicada.' : 'db_update.lua inspects the schema and only adds missing columns, avoiding duplicate-column errors.'}</p></div>
      </section>

      <section className="docs-section" id="garage-api">
        <SectionTitle number="13" label="Commands / API" title={pt ? 'Comandos e exports permitem embutir a garagem em outros recursos Forge.' : 'Commands and exports let other Forge resources embed garage functionality.'} />
        <div className="crafting-command-grid">
          <article><code>/garagelist</code><p>{pt ? 'Abre o criador/lista administrativa para usuários autorizados.' : 'Opens the admin creator/list for authorized users.'}</p></article>
          <article><code>/keymanager</code><p>{pt ? 'Abre o gerenciador de chaves e transferências.' : 'Opens key and transfer management.'}</p></article>
          <article><code>openMenu</code><p>{pt ? 'Export client para abrir a garagem programaticamente.' : 'Client export to open garage UI programmatically.'}</p></article>
          <article><code>storeVehicle</code><p>{pt ? 'Export client para acionar o fluxo de armazenamento.' : 'Client export to trigger the store flow.'}</p></article>
          <article><code>openKeyManagerMenu</code><p>{pt ? 'Export client do gerenciador de chaves.' : 'Client export for the key manager.'}</p></article>
          <article><code>Garage()</code><p>{pt ? 'Export server que retorna a configuração GarageZone atual.' : 'Server export returning current GarageZone configuration.'}</p></article>
          <article><code>createPropertyGarage</code><p>{pt ? 'Export client do criador de garagem imobiliária.' : 'Client export for property garage creation.'}</p></article>
          <article><code>commitPropertyGarageDraft</code><p>{pt ? 'Publica o rascunho imobiliário validado.' : 'Publishes a validated property garage draft.'}</p></article>
          <article><code>ResolveVehicleKeyPlate</code><p>{pt ? 'Resolve uma placa visual/falsa para a identidade de chave registrada.' : 'Resolves a visible/fake plate to registered key identity.'}</p></article>
        </div>

        <h3 className="xt-subheading">{pt ? 'Exports de persistência e estacionamento' : 'Persistence & parking exports'}</h3>
        <div className="crafting-api-list">
          {[
            ['setupPersistentGarages()', pt ? 'Inicializa as zonas persistentes no client.' : 'Initializes persistent zones on client.'],
            ['registerStoredPersistentVehicle(...)', pt ? 'Registra uma entidade estacionada no cache persistente.' : 'Registers a parked entity in persistent cache.'],
            ['getPersistentVehicleEntity(plate)', pt ? 'Resolve a entidade materializada por placa.' : 'Resolves a materialized entity by plate.'],
            ['unregisterStoredPersistentVehicle(...)', pt ? 'Remove referência persistente local.' : 'Removes local persistent reference.'],
            ['GetParkingDebt(plate)', pt ? 'Consulta dívida ativa e seus registros.' : 'Reads active debt and its records.'],
            ['ReportParkingDebt(plate, reference)', pt ? 'Retorna relatório e anexa uma referência externa.' : 'Returns debt report and attaches external reference.'],
            ['ResolveParkingDebt(plate, reference)', pt ? 'Baixa os débitos ativos de uma placa.' : 'Resolves active debts for a plate.'],
            ['RegisterParkingDebtHandler(exportName)', pt ? 'Registra o export que receberá novas dívidas de estacionamento.' : 'Registers the export that receives new parking debts.'],
            ['RefreshVehicleIdentity(plate, netId)', pt ? 'Atualiza a identidade registral e state bag de um veículo.' : 'Refreshes registered identity and vehicle state bag.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="crafting-source-note">
        <span>{pt ? 'Revisão do código' : 'Source review'}</span>
        <h2>{pt ? 'Documentação construída a partir da implementação atual do forge-garage.' : 'Documentation built from the current forge-garage implementation.'}</h2>
        <p>{pt ? 'Foram revisados o criador de garagens, persistência de veículos, parquímetros, chaves, transferências, IPLs, painel visual, apreensão, loja de veículos, telefone, schema/migrações e contratos públicos. Esta página descreve o comportamento da branch main no momento da revisão.' : 'Garage creator, vehicle persistence, parking meters, keys, transfers, IPLs, visual panel, impound, vehicle shop, phone, schema/migrations and public contracts were reviewed. This page describes main-branch behavior at review time.'}</p>
        <div className="crafting-hero-actions">
          <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">Framework-Forge/forge-garage</a>
        </div>
      </section>
    </div>
  );
}
