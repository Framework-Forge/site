import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Framework-Forge/forge-gym';

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

export default function ForgeGymDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs gym-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Legacy • Dynamic Gym Platform</div>
          <h1>forge-<span>gym</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Sistema completo de academias para FiveM com criação e gestão in-game, NPC vendedor, GymPass individual com metadata anti-transferência, equipamentos posicionados por Gizmo, compra e venda de academias, histórico de clientes, treinos validados no servidor e um sistema configurável de skills físicas com ganhos passivos, decay e efeitos.'
              : 'A complete FiveM gym platform with in-game creation and management, seller NPCs, individual anti-transfer GymPass metadata, Gizmo-placed equipment, gym ownership and sales, client history, server-validated workouts and configurable physical skills with passive gains, decay and effects.'}
          </p>
          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório' : 'Repository'}</a>
            <a className="docs-secondary-button" href="#gym-create">{pt ? 'Criar academia' : 'Create gym'}</a>
            <a className="docs-secondary-button" href="#gym-skills">{pt ? 'Sistema de skills' : 'Skills system'}</a>
          </div>
          <div className="legacy-meta">
            <span>FiveM</span><span>PR Bridge</span><span>Gizmo</span><span>GymPass</span><span>Skills</span><span>Ownership</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>GY</span><strong>GYM</strong></div>
          <Info label={pt ? 'Dependência' : 'Dependency'}>pr_bridge</Info>
          <Info label={pt ? 'Configuração' : 'Configuration'}>{pt ? 'Painel in-game + JSON' : 'In-game panel + JSON'}</Info>
          <Info label={pt ? 'Acesso' : 'Access'}>GymPass + metadata</Info>
          <Info label={pt ? 'Equipamentos' : 'Equipment'}>{pt ? 'Catálogo + Gizmo 3D' : 'Catalog + 3D Gizmo'}</Info>
          <Info label={pt ? 'Progressão' : 'Progression'}>{pt ? 'Skills locais configuráveis' : 'Configurable local skills'}</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#gym-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#gym-install">{pt ? 'Instalação' : 'Install'}</a>
        <a href="#gym-create">{pt ? 'Criar academia' : 'Create gym'}</a>
        <a href="#gym-ownership">{pt ? 'Propriedade e venda' : 'Ownership & sales'}</a>
        <a href="#gym-equipment">{pt ? 'Equipamentos' : 'Equipment'}</a>
        <a href="#gym-pass">GymPass</a>
        <a href="#gym-workout">{pt ? 'Treinos' : 'Workouts'}</a>
        <a href="#gym-skills">Skills</a>
        <a href="#gym-admin">{pt ? 'Configuração in-game' : 'In-game config'}</a>
        <a href="#gym-persistence">{pt ? 'Persistência' : 'Persistence'}</a>
        <a href="#gym-api">API / Exports</a>
      </nav>

      <section className="docs-section" id="gym-overview">
        <SectionTitle number="01" label={pt ? 'Arquitetura' : 'Architecture'} title={pt ? 'A academia é uma entidade econômica persistente, não apenas um conjunto de props.' : 'A gym is a persistent economic entity, not just a collection of props.'} />
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Academia' : 'Gym'}</strong><p>{pt ? 'Nome, proprietário, preço do passe, validade, NPC vendedor, clientes e estado de venda.' : 'Name, owner, pass price, validity, seller NPC, clients and sale state.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Equipamentos' : 'Equipment'}</strong><p>{pt ? 'Itens comprados do catálogo, posicionados livremente e associados a exercícios.' : 'Catalog items purchased, freely positioned and associated with exercises.'}</p></div>
          <div><span>03</span><strong>GymPass</strong><p>{pt ? 'Cartão individual com academia, titular, barcode, identificadores e expiração.' : 'Individual card with gym, holder, barcode, identifiers and expiration.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Progressão' : 'Progression'}</strong><p>{pt ? 'Treinos e atividades do mundo alimentam skills locais com efeitos e integração externa opcional.' : 'Workouts and world activities feed local skills with effects and optional external integration.'}</p></div>
        </div>
        <div className="crafting-feature-grid">
          <Card eyebrow="DYNAMIC" title={pt ? 'Academias ilimitadas' : 'Dynamic gyms'}>{pt ? 'Cada academia possui ID próprio, proprietário, caixa, equipamentos, clientes, preço e validade independentes.' : 'Each gym has its own ID, owner, seller, equipment, clients, price and validity.'}</Card>
          <Card eyebrow="GIZMO" title={pt ? 'Construção dentro do jogo' : 'In-game building'}>{pt ? 'NPCs e aparelhos são posicionados no mundo com o Gizmo do PR Bridge, incluindo rotação completa.' : 'Seller NPCs and equipment are positioned with PR Bridge Gizmo, including full rotation.'}</Card>
          <Card eyebrow="ACCESS" title="GymPass">{pt ? 'O passe é vinculado à academia e ao jogador, com expiração e metadata exibível no inventário.' : 'The pass is tied to a gym and player, with expiration and inventory-display metadata.'}</Card>
          <Card eyebrow="BUSINESS" title={pt ? 'Propriedade negociável' : 'Tradable ownership'}>{pt ? 'O proprietário pode colocar a academia à venda; outro jogador compra e assume a gestão.' : 'The owner can list the gym for sale; another player can purchase and take over management.'}</Card>
          <Card eyebrow="SECURITY" title={pt ? 'Treino autoritativo' : 'Authoritative workout'}>{pt ? 'O servidor valida passe, equipamento, proximidade, cooldown, duração e token único antes de conceder XP.' : 'The server validates pass, equipment, proximity, cooldown, duration and a one-use token before granting XP.'}</Card>
          <Card eyebrow="SKILLS" title={pt ? 'Skills configuráveis' : 'Configurable skills'}>{pt ? 'Definições, ganhos, decay, efeitos e integração externa são mantidos pelo painel administrativo.' : 'Definitions, gains, decay, effects and external integration are maintained by the admin panel.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="gym-install">
        <SectionTitle number="02" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'PR Bridge fornece framework, inventário, target, menus, progress, skillcheck e Gizmo.' : 'PR Bridge provides framework, inventory, target, menus, progress, skillcheck and Gizmo.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Ordem de inicialização' : 'Startup order'}</h3>
            <LuaCodeBlock>{"ensure pr_bridge\nensure forge-gym"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Item obrigatório' : 'Required item'}</h3>
            <p>{pt ? 'Cadastre gym_pass no inventário com stack desabilitado para que cada cartão preserve barcode, titular, academia e expiração próprios.' : 'Register gym_pass in inventory with stacking disabled so each card preserves its own barcode, holder, gym and expiration.'}</p>
          </div>
        </div>
        <LuaCodeBlock>{"['gym_pass'] = {\n    label = 'Gym Pass',\n    weight = 10,\n    stack = false,\n    close = true,\n    description = 'Cartão de acesso à academia',\n}"}</LuaCodeBlock>
        <div className="xt-note"><strong>{pt ? 'Persistência sem banco SQL' : 'Persistence without SQL'}</strong><p>{pt ? 'A implementação atual usa arquivos JSON do próprio resource para academias, configuração dinâmica e fallback de skills. Isso permite administrar o sistema sem criar tabelas SQL.' : 'The current implementation uses resource JSON files for gyms, dynamic configuration and skill fallback, so the system can be managed without creating SQL tables.'}</p></div>
      </section>

      <section className="docs-section" id="gym-create">
        <SectionTitle number="03" label={pt ? 'Criação da academia' : 'Gym creation'} title={pt ? 'O fluxo administrativo cria o negócio, registra o dono e posiciona o vendedor fisicamente.' : 'The admin flow creates the business, records the owner and physically places the seller.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Abrir /forgegym' : 'Open /forgegym'}</strong><p>{pt ? 'O comando verifica a permissão administrativa configurada e abre a lista de academias.' : 'The command checks configured management permission and opens the gym list.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Criar academia' : 'Create gym'}</strong><p>{pt ? 'Informe nome, preço do GymPass e quantidade de dias de validade.' : 'Enter name, GymPass price and validity in days.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Posicionar o NPC' : 'Place seller NPC'}</strong><p>{pt ? 'O modelo Config.Seller.model é aberto no Gizmo para definir coordenadas e heading.' : 'Config.Seller.model is opened in Gizmo to define coordinates and heading.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Persistir identidade' : 'Persist identity'}</strong><p>{pt ? 'O servidor gera ID único, salva owner, sale desativada, seller, lista vazia de equipamentos e clientes.' : 'The server generates a unique ID and stores owner, disabled sale state, seller, empty equipment and client lists.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Reconstruir o mundo' : 'Rebuild world'}</strong><p>{pt ? 'Todos os clients recebem sync; o NPC, blip e equipamentos são recriados a partir do JSON.' : 'All clients receive sync; seller, blip and equipment are rebuilt from JSON.'}</p></div></article>
        </div>
        <LuaCodeBlock>{"{\n    id = 'ABC123XYZ0',\n    name = 'Academia Central',\n    price = 100,\n    durabilityDays = 30,\n    owner = { citizenid = '...', identifier = '...', name = '...' },\n    sale = { enabled = false, price = 0 },\n    seller = { model = 'u_m_y_party_01', coords = vector4(...) },\n    equipment = {},\n    clients = {}\n}"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="gym-ownership">
        <SectionTitle number="04" label={pt ? 'Propriedade e economia' : 'Ownership & economy'} title={pt ? 'Academias podem ter dono, gestão delegada por job e transferência de propriedade por venda.' : 'Gyms can have owners, job-based management and ownership transfer through sales.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="OWNER" title={pt ? 'Proprietário' : 'Owner'}>{pt ? 'A identidade do criador é gravada na academia. O proprietário recebe opções exclusivas de venda.' : 'The creator identity is stored on the gym. The owner receives owner-only sale controls.'}</Card>
          <Card eyebrow="MANAGER" title={pt ? 'Gestão por job' : 'Job management'}>{pt ? 'Config.JobStats controla se a gestão depende de job/grade ou fica liberada conforme a política configurada.' : 'Config.JobStats controls whether management depends on job/grade or follows the open management policy.'}</Card>
          <Card eyebrow="SALE" title={pt ? 'Colocar à venda' : 'List for sale'}>{pt ? 'O dono define um preço positivo e pode cancelar a venda a qualquer momento.' : 'The owner sets a positive sale price and can disable the listing at any time.'}</Card>
          <Card eyebrow="TRANSFER" title={pt ? 'Compra da academia' : 'Gym purchase'}>{pt ? 'O comprador paga o preço, vira novo owner e a oferta é automaticamente encerrada.' : 'The buyer pays the price, becomes the new owner and the listing is automatically disabled.'}</Card>
          <Card eyebrow="PAYOUT" title={pt ? 'Repasse ao vendedor' : 'Seller payout'}>{pt ? 'O valor devido ao antigo proprietário entra em pendingPayouts e pode ser entregue quando ele estiver online.' : 'The amount due to the previous owner enters pendingPayouts and can be delivered when they are online.'}</Card>
          <Card eyebrow="CLIENTS" title={pt ? 'Visão do negócio' : 'Business view'}>{pt ? 'Gestores visualizam total de clientes, passes válidos, clientes ativos, visitas e último acesso.' : 'Managers can view total clients, valid passes, active clients, visits and last visit.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="gym-equipment">
        <SectionTitle number="05" label={pt ? 'Equipamentos' : 'Equipment'} title={pt ? 'O catálogo define o que pode ser comprado; a configuração do prop define quais exercícios ele oferece.' : 'The catalog defines what can be bought; prop configuration defines which exercises it offers.'} />
        <div className="crafting-flow">
          <div><span>A</span><strong>propsGym</strong><p>{pt ? 'Catálogo comercial: label, prop, preço, imagem e workoutType.' : 'Commercial catalog: label, prop, price, image and workoutType.'}</p></div>
          <div><span>B</span><strong>propsCfg</strong><p>{pt ? 'Configuração funcional: prop, skills e mapa de animações/exercícios.' : 'Functional config: prop, skills and animation/exercise map.'}</p></div>
          <div><span>C</span><strong>{pt ? 'Compra' : 'Purchase'}</strong><p>{pt ? 'O servidor cobra, cria ID único e envia o objeto ao client para posicionamento.' : 'The server charges, creates a unique ID and sends the object to the client for placement.'}</p></div>
          <div><span>D</span><strong>{pt ? 'Mundo' : 'World'}</strong><p>{pt ? 'Após confirmação, coords/rotação são persistidas e o target nasce de cada exercício configurado no prop.' : 'After confirmation, coords/rotation are persisted and targets are generated from every configured exercise.'}</p></div>
        </div>
        <div className="docs-prose">
          <p>{pt ? 'O gestor pode reposicionar qualquer equipamento já instalado ou removê-lo após confirmação. Se cancelar o posicionamento de um equipamento recém-comprado antes de ele receber coordenadas, a entrada é removida e o valor é reembolsado. Remover um aparelho já instalado não executa esse reembolso de compra.' : 'Managers can reposition installed equipment or remove it after confirmation. If placement of a newly purchased item is cancelled before it receives coordinates, the entry is removed and the purchase price is refunded. Removing an already installed item does not use that purchase-refund flow.'}</p>
        </div>
        <LuaCodeBlock>{"{\n    label = 'Banco Supino',\n    prop = 'prop_weight_bench_02',\n    price = 1200,\n    workoutType = 'bench'\n}"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="gym-pass">
        <SectionTitle number="06" label="GymPass" title={pt ? 'O passe funciona como credencial individual da academia e não como um item genérico transferível.' : 'The pass acts as an individual gym credential rather than a generic transferable item.'} />
        <div className="crafting-field-grid">
          {[
            ['academyId', pt ? 'ID da academia onde o passe é válido.' : 'Gym ID where the pass is valid.'],
            ['academyName', pt ? 'Nome legível da academia.' : 'Readable gym name.'],
            ['ownerName', pt ? 'Nome do personagem titular.' : 'Holder character name.'],
            ['barcode', pt ? 'Código único gerado para o cartão.' : 'Unique code generated for the card.'],
            ['citizenid / owner', pt ? 'Identificador do personagem proprietário.' : 'Owner character identifier.'],
            ['identifier', pt ? 'License primária usada como verificação adicional.' : 'Primary license used as an additional ownership check.'],
            ['expiresAt', pt ? 'Timestamp Unix utilizado pela validação.' : 'Unix timestamp used by validation.'],
            ['expiresLabel', pt ? 'Data formatada exibida ao jogador.' : 'Formatted date shown to the player.'],
            ['description', pt ? 'Resumo legível persistido na metadata.' : 'Readable summary persisted in metadata.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
        <h3 className="xt-subheading">{pt ? 'Compra e validação' : 'Purchase and validation'}</h3>
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Proximidade do vendedor' : 'Seller proximity'}</strong><p>{pt ? 'A compra só é processada pelo servidor quando o jogador está a até 6 metros do NPC daquela academia.' : 'Purchase is processed only when the player is within 6 meters of that gym seller.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Pagamento' : 'Payment'}</strong><p>{pt ? 'O valor configurado é removido. Se o inventário não comportar o cartão, o valor é devolvido.' : 'Configured price is removed. If inventory cannot carry the card, the amount is refunded.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Academia correta' : 'Correct gym'}</strong><p>{pt ? 'O servidor procura gym_pass cuja metadata academyId corresponda à academia usada.' : 'The server searches for a gym_pass whose academyId metadata matches the gym being used.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Titularidade' : 'Ownership'}</strong><p>{pt ? 'owner/citizenid e license são comparados com a identidade atual para bloquear passes de terceiros.' : 'owner/citizenid and license are compared against current identity to block another player’s pass.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Validade' : 'Expiration'}</strong><p>{pt ? 'expiresAt é comparado com os.time(); passe vencido é rejeitado.' : 'expiresAt is compared against os.time(); expired passes are rejected.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="gym-workout">
        <SectionTitle number="07" label={pt ? 'Treinos' : 'Workouts'} title={pt ? 'A animação é client-side, mas a recompensa só existe depois de uma sessão validada e concluída no servidor.' : 'Animation is client-side, but rewards only exist after a validated server workout session completes.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>beginWorkout</strong><p>{pt ? 'Valida sessão anterior, GymPass, equipamento existente, exercício configurado, distância de até 8 m e limite de treinos.' : 'Validates previous session, GymPass, existing equipment, configured exercise, up to 8 m distance and workout limit.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Token único' : 'One-use token'}</strong><p>{pt ? 'O servidor gera token ligado ao source, horário, academia, equipamento, identidade e recompensas calculadas.' : 'Server creates a token tied to source, time, gym, equipment, identity and resolved rewards.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Entrada e attachment' : 'Enter & attachment'}</strong><p>{pt ? 'O ped pode ser anexado ao aparelho usando attachmentProp; props auxiliares também podem ser anexados aos bones configurados.' : 'The ped can be attached to equipment through attachmentProp; auxiliary props can also be attached to configured bones.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Skill check por repetição' : 'Per-rep skill check'}</strong><p>{pt ? 'Config.WorkoutSkillCheck controla dificuldade, teclas, velocidade lenta antes do acerto e velocidade da execução após sucesso.' : 'Config.WorkoutSkillCheck controls difficulty, inputs, slow pre-success playback and faster playback after success.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Repetições' : 'Repetitions'}</strong><p>{pt ? 'A etapa training é executada Config.WorkoutReps vezes, com enter/idle/training/exit conforme o exercício.' : 'The training step runs Config.WorkoutReps times with enter/idle/training/exit phases as configured.'}</p></div></article>
          <article><span>06</span><div><strong>finishWorkout</strong><p>{pt ? 'O token é consumido uma única vez. O servidor valida duração mínima/máxima, mesma identidade, proximidade e GymPass novamente.' : 'The token is consumed once. Server revalidates min/max duration, same identity, proximity and GymPass.'}</p></div></article>
          <article><span>07</span><div><strong>{pt ? 'Premiação' : 'Reward'}</strong><p>{pt ? 'Somente após todas as verificações ForgeGymAwardValidated aplica as recompensas de skill configuradas para aquele exercício.' : 'Only after all checks does ForgeGymAwardValidated apply the configured skill rewards for that exercise.'}</p></div></article>
        </div>
        <div className="xt-note warning"><strong>{pt ? 'Cooldown em duas camadas' : 'Two-layer cooldown'}</strong><p>{pt ? 'O client limita a experiência imediatamente e o servidor mantém workoutHistory próprio. Com os padrões atuais, são até 5 treinos dentro de uma janela de 10 minutos.' : 'The client limits the experience immediately and the server maintains its own workoutHistory. With current defaults, up to 5 workouts are allowed within a 10-minute window.'}</p></div>
      </section>

      <section className="docs-section" id="gym-skills">
        <SectionTitle number="08" label={pt ? 'Sistema de skills' : 'Skills system'} title={pt ? 'As skills são definições locais da academia: podem ser criadas, limitadas e ligadas a qualquer exercício.' : 'Skills are local gym definitions: they can be created, capped and assigned to any exercise.'} />
        <div className="crafting-slot-grid">
          {[
            ['STR', pt ? 'Força' : 'Strength'],
            ['STA', pt ? 'Resistência' : 'Stamina'],
            ['LUNG', pt ? 'Fôlego' : 'Lung'],
            ['SHOT', pt ? 'Atirador' : 'Shooting'],
            ['DRV', pt ? 'Pilotagem' : 'Driving'],
            ['CUSTOM', pt ? 'Skills personalizadas' : 'Custom skills'],
          ].map(([tag,label]) => <article key={tag}><span>{tag}</span><strong>{label}</strong></article>)}
        </div>
        <div className="crafting-feature-grid">
          <Card eyebrow="DEFINITION" title={pt ? 'Definição local' : 'Local definition'}>{pt ? 'Cada skill possui ID imutável após criação, label, ícone, máximo, estado e limite de delta por minuto.' : 'Each skill has an immutable post-creation ID, label, icon, maximum, state and per-minute delta limit.'}</Card>
          <Card eyebrow="WORKOUT" title={pt ? 'XP por exercício' : 'Exercise XP'}>{pt ? 'Ganhos podem existir no prop inteiro ou sobrescrever por exercício, inclusive usando valor fixo ou faixa aleatória.' : 'Rewards can live at prop level or override per exercise, using fixed values or random ranges.'}</Card>
          <Card eyebrow="PASSIVE" title={pt ? 'Ganho passivo' : 'Passive gain'}>{pt ? 'Corrida, natação, tiro e direção podem alimentar qualquer skill local escolhida pelo admin.' : 'Running, swimming, shooting and driving can feed any local skill selected by the admin.'}</Card>
          <Card eyebrow="DECAY" title={pt ? 'Perda por inatividade' : 'Decay'}>{pt ? 'Cada skill pode ter perda e intervalo próprios, controlados individualmente.' : 'Each skill can have its own loss amount and interval, controlled independently.'}</Card>
          <Card eyebrow="EFFECTS" title={pt ? 'Efeitos físicos' : 'Physical effects'}>{pt ? 'Os efeitos implementados incluem força, stamina, capacidade pulmonar, pilotagem e redução de recoil.' : 'Implemented effects include strength, stamina, lung capacity, driving and recoil reduction.'}</Card>
          <Card eyebrow="EXTERNAL" title={pt ? 'XP externo opcional' : 'Optional external XP'}>{pt ? 'Ganhos/perdas podem ser encaminhados a um export server configurável sem tornar o provider externo obrigatório.' : 'Gains/losses can be forwarded to a configurable server export without making the external provider mandatory.'}</Card>
        </div>

        <h3 className="xt-subheading">{pt ? 'Efeitos padrão' : 'Default effect thresholds'}</h3>
        <div className="crafting-admin-grid">
          <article><strong>{pt ? 'Força' : 'Strength'}</strong><p>&lt;20 = 1.0× • 20 = 1.25× • 50 = 1.5× • 70 = 2.0×</p></article>
          <article><strong>{pt ? 'Stamina' : 'Stamina'}</strong><p>&lt;20 = 1.0 • 20 = 1.10 • 50 = 1.35 • 70 = 1.49</p></article>
          <article><strong>{pt ? 'Fôlego' : 'Lung'}</strong><p>&lt;20 = 0 • 20 = 15 • 50 = 30 • 70 = 60</p></article>
          <article><strong>Recoil</strong><p>{pt ? 'Fórmula: 1.0 - min(skill / 100, redução máxima configurada).' : 'Formula: 1.0 - min(skill / 100, configured maximum reduction).'}</p></article>
          <article><strong>{pt ? 'Pilotagem' : 'Driving'}</strong><p>{pt ? 'Valor bruto da skill disponível por export e efeito client opcional em velocidade mínima.' : 'Raw skill available by export plus optional client effect above minimum speed.'}</p></article>
          <article><strong>{pt ? 'Precisão decimal' : 'Decimal precision'}</strong><p>{pt ? '0.2 significa 0.2 XP real; não existe divisão implícita por dez.' : '0.2 means 0.2 real XP; there is no implicit division by ten.'}</p></article>
        </div>
      </section>

      <section className="docs-section" id="gym-admin">
        <SectionTitle number="09" label={pt ? 'Configuração in-game' : 'In-game configuration'} title={pt ? 'Catálogo, exercícios, animações e skills podem ser mantidos pelo painel sem editar o JSON à mão.' : 'Catalog, exercises, animations and skills can be maintained through the panel without manually editing JSON.'} />
        <div className="crafting-admin-grid">
          {[
            [pt ? 'Catálogo de equipamentos' : 'Equipment catalog', pt ? 'Cria/edita label, modelo, preço, imagem e tipo de treino.' : 'Creates/edits label, model, price, image and workout type.'],
            [pt ? 'Configurações por prop' : 'Per-prop config', pt ? 'Define exercícios, animações e recompensas do aparelho.' : 'Defines exercises, animations and rewards for equipment.'],
            [pt ? 'Mesclagem de animações' : 'Animation merge', pt ? 'Ao cadastrar prop existente, novas animações podem ser mescladas sem sobrescrever as antigas.' : 'When adding an existing prop, new animations can be merged without overwriting existing ones.'],
            [pt ? 'Skills locais' : 'Local skills', pt ? 'Cria, edita e remove skills; remoção é bloqueada enquanto houver referências.' : 'Creates, edits and removes skills; deletion is blocked while references exist.'],
            [pt ? 'Ganho passivo' : 'Passive gain', pt ? 'Running, Swimming, Shooting e Driving com valores, intervalos e parâmetros próprios.' : 'Running, Swimming, Shooting and Driving with individual values, intervals and parameters.'],
            ['Decay', pt ? 'Ativa perda por skill, quantidade e intervalo.' : 'Enables per-skill loss amount and interval.'],
            [pt ? 'Efeitos' : 'Effects', pt ? 'Vincula uma skill aos efeitos Strength, Stamina, Lung, Driving ou Shooting.' : 'Links a skill to Strength, Stamina, Lung, Driving or Shooting effects.'],
            [pt ? 'Integração externa' : 'External integration', pt ? 'Resource, export, multiplicador e envio opcional de decay.' : 'Resource, export, multiplier and optional decay forwarding.'],
            [pt ? 'Sincronização' : 'Synchronization', pt ? 'Após salvar, o config é normalizado, persistido e sincronizado para os clients.' : 'After save, config is normalized, persisted and synchronized to clients.'],
          ].map(([name,desc]) => <article key={name}><strong>{name}</strong><p>{desc}</p></article>)}
        </div>
        <LuaCodeBlock>{"-- data/config.json concentra a configuração dinâmica\n{\n    propsGym = { ... },\n    propsCfg = { ... },\n    skills = {\n        Definitions = { ... },\n        PassiveGain = { ... },\n        Decay = { ... },\n        Effects = { ... }\n    }\n}"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="gym-persistence">
        <SectionTitle number="10" label={pt ? 'Persistência' : 'Persistence'} title={pt ? 'Três arquivos JSON separam operação do negócio, configuração e progressão dos jogadores.' : 'Three JSON files separate business operation, configuration and player progression.'} />
        <div className="crafting-db-grid">
          <article><code>data/academy.json</code><strong>{pt ? 'Academias e economia' : 'Gyms & economy'}</strong><p>{pt ? 'Academias, proprietários, venda, NPCs, equipamentos, clientes e pendingPayouts.' : 'Gyms, owners, sales, sellers, equipment, clients and pendingPayouts.'}</p></article>
          <article><code>data/config.json</code><strong>{pt ? 'Configuração dinâmica' : 'Dynamic configuration'}</strong><p>{pt ? 'Catálogo, configuração funcional dos props, exercícios, animações e sistema de skills.' : 'Catalog, functional prop config, exercises, animations and skills system.'}</p></article>
          <article><code>data/skills.json</code><strong>{pt ? 'Fallback de skills' : 'Skills fallback'}</strong><p>{pt ? 'Valores locais por jogador quando o sistema usa sua persistência própria.' : 'Local per-player values when the system uses its own persistence.'}</p></article>
        </div>
      </section>

      <section className="docs-section" id="gym-api">
        <SectionTitle number="11" label="Commands / API" title={pt ? 'O resource expõe administração reutilizável e leitura/escrita de progressão para outros sistemas.' : 'The resource exposes reusable administration and progression read/write APIs for other systems.'} />
        <div className="crafting-command-grid">
          <article><code>/forgegym</code><p>{pt ? 'Abre o painel principal de gestão de academias.' : 'Opens the main gym management panel.'}</p></article>
          <article><code>OpenAdminMenu(parentMenu, parentResource)</code><p>{pt ? 'Export client para embutir o painel em outro menu/resource.' : 'Client export to embed the admin panel in another menu/resource.'}</p></article>
          <article><code>forge-gym:client:openAdminMenu</code><p>{pt ? 'Evento client equivalente para abrir o painel.' : 'Equivalent client event for opening the panel.'}</p></article>
        </div>

        <h3 className="xt-subheading">{pt ? 'Exports de skill — servidor' : 'Skill exports — server'}</h3>
        <div className="crafting-api-list">
          {[
            ['getSkill(source, skill)', pt ? 'Retorna o valor atual de uma skill.' : 'Returns current skill value.'],
            ['getAllSkills(source)', pt ? 'Retorna todas as skills do jogador.' : 'Returns all player skills.'],
            ['addSkill(source, skill, value, context)', pt ? 'Adiciona XP de forma confiável no servidor.' : 'Adds XP through a trusted server call.'],
            ['removeSkill(source, skill, value, context)', pt ? 'Remove XP de uma skill.' : 'Removes XP from a skill.'],
            ['updateSkill(source, skill, delta, context)', pt ? 'Aplica delta positivo ou negativo.' : 'Applies a positive or negative delta.'],
            ['getStrengthMultiplier(source)', pt ? 'Multiplicador de força atual.' : 'Current strength multiplier.'],
            ['getShootingRecoilMultiplier(source)', pt ? 'Multiplicador de recoil calculado.' : 'Calculated recoil multiplier.'],
            ['getStaminaMultiplier(source)', pt ? 'Multiplicador atual de sprint/stamina.' : 'Current sprint/stamina multiplier.'],
            ['getLungCapacity(source)', pt ? 'Valor de capacidade pulmonar derivado.' : 'Derived lung capacity value.'],
            ['getDrivingSkill(source)', pt ? 'Retorna o nível da skill vinculada à pilotagem.' : 'Returns the skill level linked to driving.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Modelo de segurança do treino' : 'Workout security model'}</h3>
        <LuaCodeBlock>{"beginWorkout\n  -> GymPass válido\n  -> equipamento e exercício válidos\n  -> distância <= 8m\n  -> cooldown server-side\n  -> cria token de uso único\n\nfinishWorkout(token, true)\n  -> token corresponde à sessão\n  -> consome token\n  -> duração mínima/máxima válida\n  -> mesma identidade\n  -> ainda próximo do equipamento\n  -> GymPass validado novamente\n  -> concede recompensa"}</LuaCodeBlock>
      </section>

      <section className="crafting-source-note">
        <span>{pt ? 'Revisão do código' : 'Source review'}</span>
        <h2>{pt ? 'Documentação construída a partir da implementação atual do forge-gym.' : 'Documentation built from the current forge-gym implementation.'}</h2>
        <p>{pt ? 'Foram revisados os fluxos de criação de academias, ownership/venda, GymPass, catálogo e posicionamento de equipamentos, treinos, skill checks, tokens de validação, progressão, configuração administrativa e persistência JSON. Esta página descreve o comportamento da branch main no momento da revisão.' : 'Gym creation, ownership/sales, GymPass, equipment catalog/placement, workouts, skill checks, validation tokens, progression, admin configuration and JSON persistence were reviewed. This page describes main-branch behavior at review time.'}</p>
        <div className="crafting-hero-actions">
          <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">Framework-Forge/forge-gym</a>
        </div>
      </section>
    </div>
  );
}
