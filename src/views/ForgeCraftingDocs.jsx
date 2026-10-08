import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Framework-Forge/forge-crafting';

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

export default function ForgeCraftingDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Legacy • Crafting Platform</div>
          <h1>forge-<span>crafting</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Sistema completo de fabricação para FiveM com perfis de bancadas 3D calibráveis, criação e edição in-game, catálogo global de receitas, progressão por nível/XP, DUI renderizada diretamente no prop e uma bancada visual para montagem, remoção e personalização de componentes de armas.'
              : 'A complete FiveM crafting platform with calibratable 3D workbench profiles, in-game creation and editing, a global recipe catalog, level/XP progression, DUI rendered directly on the prop and a visual weapon bench for installing, removing and customizing weapon components.'}
          </p>
          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório' : 'Repository'}</a>
            <a className="docs-secondary-button" href="#crafting-profile">{pt ? 'Criar perfil de mesa' : 'Create bench profile'}</a>
            <a className="docs-secondary-button" href="#crafting-weapons">{pt ? 'Upgrades de armas' : 'Weapon upgrades'}</a>
          </div>
          <div className="legacy-meta">
            <span>FiveM</span><span>PR Bridge</span><span>DUI 3D</span><span>Gizmo</span><span>Recipes</span><span>XP</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>FC</span><strong>CRAFTING</strong></div>
          <Info label={pt ? 'Dependência' : 'Dependency'}>pr_bridge</Info>
          <Info label={pt ? 'Administração' : 'Administration'}>{pt ? '100% in-game' : '100% in-game'}</Info>
          <Info label={pt ? 'Bancadas' : 'Benches'}>{pt ? 'Perfis 3D reutilizáveis' : 'Reusable 3D profiles'}</Info>
          <Info label={pt ? 'Receitas' : 'Recipes'}>{pt ? 'Catálogo global + por mesa' : 'Global catalog + per bench'}</Info>
          <Info label={pt ? 'Armas' : 'Weapons'}>{pt ? 'Slots, componentes e pinturas' : 'Slots, components and tints'}</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#crafting-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#crafting-install">{pt ? 'Instalação' : 'Install'}</a>
        <a href="#crafting-profile">{pt ? 'Perfis de mesa' : 'Bench profiles'}</a>
        <a href="#crafting-bench">{pt ? 'Criar bancada' : 'Create bench'}</a>
        <a href="#crafting-recipes">{pt ? 'Receitas' : 'Recipes'}</a>
        <a href="#crafting-player">{pt ? 'Crafting do player' : 'Player crafting'}</a>
        <a href="#crafting-xp">XP / Levels</a>
        <a href="#crafting-weapons">{pt ? 'Upgrades de armas' : 'Weapon upgrades'}</a>
        <a href="#crafting-admin">{pt ? 'Administração' : 'Administration'}</a>
        <a href="#crafting-db">{pt ? 'Banco de dados' : 'Database'}</a>
        <a href="#crafting-api">API / Commands</a>
      </nav>

      <section className="docs-section" id="crafting-overview">
        <SectionTitle number="01" label={pt ? 'Arquitetura' : 'Architecture'} title={pt ? 'O sistema separa o perfil visual da mesa, a bancada física e as receitas.' : 'The system separates the visual bench profile, the physical bench and its recipes.'} />
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Perfil de bancada' : 'Bench profile'}</strong><p>{pt ? 'Define prop, DUI, animação, câmera e posição da arma. Pode ser reutilizado por várias mesas.' : 'Defines prop, DUI, animation, camera and weapon placement. Reusable across many benches.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Bancada no mundo' : 'World bench'}</strong><p>{pt ? 'Instância persistente com nome, coordenadas, perfil, acesso e blip opcional.' : 'Persistent instance with name, coordinates, profile, access policy and optional blip.'}</p></div>
          <div><span>03</span><strong>{pt ? 'Receitas' : 'Recipes'}</strong><p>{pt ? 'Itens produzidos, insumos, tempo, quantidade, nível, XP, animação e modelo opcional.' : 'Outputs, ingredients, duration, amount, level, XP, animation and optional model.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Runtime do jogador' : 'Player runtime'}</strong><p>{pt ? 'DUI física, crafting autoritativo, progressão e montagem visual de armas.' : 'Physical DUI, authoritative crafting, progression and visual weapon assembly.'}</p></div>
        </div>
        <div className="crafting-feature-grid">
          <Card eyebrow="DUI 3D" title={pt ? 'Tela sobre o prop' : 'Screen on the prop'}>{pt ? 'A interface é projetada na própria superfície calibrada da bancada, em vez de depender somente de uma NUI plana.' : 'The interface is projected onto the calibrated bench surface instead of relying only on a flat NUI.'}</Card>
          <Card eyebrow="PROFILE" title={pt ? 'Perfis reutilizáveis' : 'Reusable profiles'}>{pt ? 'Um único perfil pode alimentar várias bancadas, mantendo posição de câmera, ped, tela e arma consistentes.' : 'One profile can power multiple benches while keeping camera, ped, screen and weapon placement consistent.'}</Card>
          <Card eyebrow="CATALOG" title={pt ? 'Catálogo global' : 'Global catalog'}>{pt ? 'Receitas são cadastradas uma vez e vinculadas em lote a qualquer bancada.' : 'Recipes are authored once and linked in bulk to any bench.'}</Card>
          <Card eyebrow="SERVER" title={pt ? 'Crafting validado no servidor' : 'Server-validated crafting'}>{pt ? 'Distância, acesso, receita, nível, ingredientes e tempo de execução são validados antes da recompensa.' : 'Distance, access, recipe, level, ingredients and elapsed time are validated before reward.'}</Card>
          <Card eyebrow="SKILL" title={pt ? 'Progressão por XP' : 'XP progression'}>{pt ? 'Receitas podem exigir nível mínimo e conceder XP específico ao serem concluídas.' : 'Recipes can require a minimum level and grant specific XP on completion.'}</Card>
          <Card eyebrow="WEAPON" title={pt ? 'Bancada de upgrades' : 'Upgrade bench'}>{pt ? 'Armas do inventário podem receber acessórios compatíveis, substituições de slot e pinturas em uma interface física dedicada.' : 'Inventory weapons can receive compatible attachments, slot replacements and tints in a dedicated physical interface.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="crafting-install">
        <SectionTitle number="02" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'PR Bridge é a dependência obrigatória e centraliza os serviços compartilhados.' : 'PR Bridge is the required dependency and centralizes shared services.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Ordem de inicialização' : 'Startup order'}</h3>
            <LuaCodeBlock>{"ensure pr_bridge\nensure forge-crafting"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Inicialização automática' : 'Automatic initialization'}</h3>
            <p>{pt ? 'Na primeira inicialização o resource cria as tabelas necessárias, adiciona migrações de colunas ausentes, popula perfis de bancada padrão e importa o catálogo inicial de receitas quando necessário.' : 'On first start the resource creates its tables, applies missing-column migrations, seeds default bench profiles and populates the initial recipe catalog when required.'}</p>
          </div>
        </div>
        <div className="xt-note"><strong>{pt ? 'Integração Forge' : 'Forge integration'}</strong><p>{pt ? 'Framework, inventário, banco, callbacks, menus, notificações, interação, streaming e gizmo são consumidos pela camada PR Bridge. A progressão também pode conversar com o forge-reputation quando ele estiver ativo.' : 'Framework, inventory, database, callbacks, menus, notifications, interaction, streaming and gizmo are consumed through PR Bridge. Progression can also integrate with forge-reputation when available.'}</p></div>
      </section>

      <section className="docs-section" id="crafting-profile">
        <SectionTitle number="03" label={pt ? 'Perfis de bancada' : 'Bench profiles'} title={pt ? 'Antes de criar a mesa, você pode definir exatamente como aquele tipo de bancada se comporta e é enquadrado.' : 'Before creating a bench, you can define exactly how that bench type behaves and is framed.'} />
        <div className="docs-prose">
          <p>{pt ? 'O perfil é identificado por um slug único e armazena o modelo do prop, a superfície da DUI, escala, animação de trabalho, posição do ped, câmera e a posição/rotação usada para exibir armas na aba de upgrades.' : 'A profile is identified by a unique slug and stores the prop model, DUI surface, scale, work animation, ped position, camera and weapon position/rotation used by the upgrades tab.'}</p>
        </div>
        <div className="crafting-field-grid">
          {[
            ['slug', pt ? 'Identificador reutilizável do perfil.' : 'Reusable profile identifier.'],
            ['label', pt ? 'Nome amigável exibido no editor.' : 'Friendly editor label.'],
            ['model', pt ? 'Prop GTA usado como bancada.' : 'GTA prop used as the bench.'],
            ['center_offset', pt ? 'Centro e/ou quatro vértices da superfície DUI.' : 'Center and/or four DUI surface vertices.'],
            ['scale', pt ? 'Escala física da superfície projetada.' : 'Physical projected-surface scale.'],
            ['anim_dict / anim_name', pt ? 'Animação usada na estação.' : 'Station work animation.'],
            ['anim_offset', pt ? 'Posição e heading do ped em relação à mesa.' : 'Ped position and heading relative to the bench.'],
            ['cam_offset', pt ? 'Posição, órbita, altura e FOV da câmera.' : 'Camera position, orbit, height and FOV.'],
            ['weapon_offset', pt ? 'Posição e rotação do WeaponObject sobre a mesa.' : 'WeaponObject position and rotation on the bench.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Fluxo para criar um novo perfil' : 'New profile workflow'}</h3>
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Abrir o gerenciador' : 'Open the manager'}</strong><p>{pt ? 'Use /benchmodels ou /craft:benchmodels. O menu lista perfis existentes e oferece “Cadastrar Novo Modelo de Bancada”.' : 'Use /benchmodels or /craft:benchmodels. The menu lists existing profiles and offers “Create New Bench Model”.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Definir identidade' : 'Define identity'}</strong><p>{pt ? 'Informe slug, rótulo, prop, dicionário/nome da animação e escala inicial da DUI.' : 'Provide slug, label, prop, animation dictionary/name and initial DUI scale.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Posicionar o prop' : 'Place the prop'}</strong><p>{pt ? 'O Gizmo 3D cria uma bancada temporária e permite mover/girar com modo de precisão antes da confirmação.' : 'The 3D Gizmo creates a temporary bench and lets you move/rotate it with precision mode before confirming.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Calibrar a DUI' : 'Calibrate the DUI'}</strong><p>{pt ? 'Você pode capturar quatro pontos com laser + ajuste fino de altura, digitar offsets manualmente ou usar o preset central.' : 'You can capture four corners with laser + fine height adjustment, enter offsets manually, or use the center preset.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Calibrar ped e câmera' : 'Calibrate ped and camera'}</strong><p>{pt ? 'Um ped de teste executa a animação. O Gizmo define sua posição relativa e a freecam define órbita, altura e enquadramento/FOV com a DUI visível.' : 'A test ped runs the work animation. Gizmo defines its relative position and freecam defines orbit, height and framing/FOV while the DUI remains visible.'}</p></div></article>
          <article><span>06</span><div><strong>{pt ? 'Calibrar a arma' : 'Calibrate the weapon'}</strong><p>{pt ? 'No detalhe do perfil, “Posicionar e Girar Arma na Mesa” cria uma arma de teste e grava weapon_offset com posição e rotação relativas.' : 'From profile details, “Position and Rotate Weapon on Bench” spawns a test weapon and stores its relative weapon_offset position and rotation.'}</p></div></article>
          <article><span>07</span><div><strong>{pt ? 'Testar e reutilizar' : 'Test and reuse'}</strong><p>{pt ? 'O preview abre uma sessão DUI de teste. Depois, qualquer bancada pode selecionar o mesmo slug e herdar toda a calibração.' : 'Preview opens a test DUI session. Afterwards any bench can select the same slug and inherit all calibration.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="crafting-bench">
        <SectionTitle number="04" label={pt ? 'Criação da bancada' : 'Bench creation'} title={pt ? 'A mesa física é uma instância persistente criada diretamente dentro do jogo.' : 'The physical bench is a persistent instance created directly in-game.'} />
        <div className="crafting-callout">
          <div>
            <span>CREATE FLOW</span>
            <h3>{pt ? 'Nome → perfil → acesso → blip → Gizmo → persistência.' : 'Name → profile → access → blip → Gizmo → persistence.'}</h3>
            <p>{pt ? 'O comando /create ou /craft:create abre o criador. O sistema impede nomes duplicados, carrega os perfis cadastrados e só persiste a bancada depois da confirmação do posicionamento.' : 'The /create or /craft:create command opens the creator. Duplicate names are rejected, registered profiles are loaded and the bench is persisted only after placement confirmation.'}</p>
          </div>
          <div className="crafting-mini-grid">
            <article><strong>{pt ? 'Nome' : 'Name'}</strong><p>{pt ? 'Identidade administrativa da mesa.' : 'Administrative identity of the bench.'}</p></article>
            <article><strong>{pt ? 'Perfil' : 'Profile'}</strong><p>{pt ? 'Prop e calibração herdados pelo slug escolhido.' : 'Prop and calibration inherited from the selected slug.'}</p></article>
            <article><strong>{pt ? 'Acesso opcional' : 'Optional access'}</strong><p>{pt ? 'Pode restringir por organização, cargo mínimo e estado de serviço quando aplicável.' : 'Can restrict by organization, minimum grade and duty state when applicable.'}</p></article>
            <article><strong>Blip</strong><p>{pt ? 'Sprite, cor, escala e rótulo configuráveis.' : 'Configurable sprite, color, scale and label.'}</p></article>
          </div>
        </div>
        <LuaCodeBlock>{"-- Estrutura persistida para uma bancada\n{\n    craft_name = 'Armaria Central',\n    model_slug = 'gr_bench_02a',\n    propcoords = vector3(x, y, z),\n    heading = heading,\n    jobenable = false,\n    blipenable = false\n}"}</LuaCodeBlock>
        <div className="xt-note warning"><strong>{pt ? 'Perfil não é a mesma coisa que bancada' : 'Profile is not the bench instance'}</strong><p>{pt ? 'Editar um perfil altera a calibração reutilizável daquele modelo. Mover, renomear, restringir ou excluir uma bancada altera somente a instância persistida no mapa.' : 'Editing a profile changes the reusable calibration of that model. Moving, renaming, restricting or deleting a bench changes only the persistent world instance.'}</p></div>
      </section>

      <section className="docs-section" id="crafting-recipes">
        <SectionTitle number="05" label={pt ? 'Receitas' : 'Recipes'} title={pt ? 'Um catálogo global centraliza receitas e cada bancada escolhe quais delas oferece.' : 'A global catalog centralizes recipes and each bench chooses which ones it offers.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="OUTPUT" title={pt ? 'Item produzido' : 'Output item'}>{pt ? 'ID, rótulo e quantidade gerada.' : 'Item ID, label and output amount.'}</Card>
          <Card eyebrow="INPUTS" title={pt ? 'Ingredientes' : 'Ingredients'}>{pt ? 'Lista de insumos com item, rótulo e quantidade necessária.' : 'Input list with item, label and required amount.'}</Card>
          <Card eyebrow="TIME" title={pt ? 'Tempo de fabricação' : 'Craft duration'}>{pt ? 'Duração em segundos usada tanto no progresso quanto na validação final.' : 'Seconds used by both progress display and final validation.'}</Card>
          <Card eyebrow="LEVEL" title={pt ? 'Nível mínimo' : 'Minimum level'}>{pt ? 'Bloqueia a receita para jogadores abaixo do nível definido.' : 'Locks the recipe for players below the configured level.'}</Card>
          <Card eyebrow="XP" title={pt ? 'XP concedido' : 'Granted XP'}>{pt ? 'Quantidade específica de experiência ao concluir com sucesso.' : 'Specific experience awarded on successful completion.'}</Card>
          <Card eyebrow="PRESENTATION" title={pt ? 'Modelo e animação' : 'Model and animation'}>{pt ? 'Campos opcionais para personalizar apresentação e animação da fabricação.' : 'Optional fields for custom crafting presentation and animation.'}</Card>
        </div>

        <h3 className="xt-subheading">{pt ? 'Criar uma receita global' : 'Create a global recipe'}</h3>
        <div className="docs-prose">
          <p>{pt ? 'Abra /receitas, /recipecatalog ou suas variantes com prefixo craft:. O formulário pede item gerado, rótulo, categoria, quantidade produzida, tempo, número de ingredientes distintos, modelo opcional, animação opcional, nível mínimo e XP.' : 'Open /receitas, /recipecatalog or their craft:-prefixed variants. The form asks for output item, label, category, output amount, duration, number of distinct ingredients, optional model, optional animation, minimum level and XP.'}</p>
          <p>{pt ? 'Em seguida, para cada ingrediente, o editor solicita item, rótulo e quantidade. As receitas ficam agrupadas por categoria e podem ser editadas, ter os ingredientes reconstruídos ou ser excluídas.' : 'Then, for each ingredient, the editor asks for item, label and amount. Recipes are grouped by category and can be edited, have their ingredient list rebuilt, or be deleted.'}</p>
        </div>
        <LuaCodeBlock>{"-- Exemplo conceitual de receita\n{\n    item = 'weapon_part',\n    item_label = 'Peça de Arma',\n    category = 'Peças',\n    amount = 1,\n    time = 12,\n    level = 3,\n    xp = 25,\n    recipe = {\n        { item = 'steel', label = 'Aço', amount = 4 },\n        { item = 'polymer', label = 'Polímero', amount = 2 }\n    }\n}"}</LuaCodeBlock>

        <h3 className="xt-subheading">{pt ? 'Vincular receitas à bancada' : 'Link recipes to a bench'}</h3>
        <div className="docs-prose">
          <p>{pt ? 'No editor da bancada, “Adicionar itens para fabricar” permite criar uma receita local manualmente ou selecionar múltiplas receitas do catálogo global. Se uma receita já existir naquela bancada, o vínculo atualiza os dados; caso contrário, cria uma nova entrada.' : 'In the bench editor, “Add craftable items” can create a local recipe manually or select multiple recipes from the global catalog. If a recipe already exists on that bench, linking updates it; otherwise a new entry is created.'}</p>
        </div>
      </section>

      <section className="docs-section" id="crafting-player">
        <SectionTitle number="06" label={pt ? 'Crafting do jogador' : 'Player crafting'} title={pt ? 'O client apresenta a experiência; o servidor decide se a fabricação é válida.' : 'The client presents the experience; the server decides whether the craft is valid.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Interagir com a bancada' : 'Interact with bench'}</strong><p>{pt ? 'O prop recebe interação pelo PR Bridge. Antes de abrir, o client verifica a regra de acesso da bancada.' : 'The prop receives interaction through PR Bridge. Before opening, the client checks the bench access rule.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Carregar receitas e inventário' : 'Load recipes and inventory'}</strong><p>{pt ? 'O servidor retorna as receitas daquela bancada, nível/XP e quantidades dos ingredientes; a DUI mostra disponibilidade, imagens e requisitos.' : 'The server returns that bench’s recipes, level/XP and ingredient quantities; the DUI shows availability, images and requirements.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'StartCraft autoritativo' : 'Authoritative StartCraft'}</strong><p>{pt ? 'Valida player, sessão única, existência da bancada, distância máxima de 4,5 m, autorização, receita no banco, nível mínimo e todos os insumos.' : 'Validates player, single active session, bench existence, maximum 4.5 m distance, authorization, database recipe, minimum level and all ingredients.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Reserva dos materiais' : 'Reserve materials'}</strong><p>{pt ? 'Os ingredientes são removidos no início e registrados na sessão ativa, impedindo corrida de inventário durante o progresso.' : 'Ingredients are removed at start and recorded in the active session, preventing inventory races during progress.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Animação + progresso' : 'Animation + progress'}</strong><p>{pt ? 'O jogador executa a animação configurada e uma barra de progresso bloqueia movimento/combate pelo tempo real da receita.' : 'The player runs the configured animation and a progress bar locks movement/combat for the real recipe duration.'}</p></div></article>
          <article><span>06</span><div><strong>FinishCraft</strong><p>{pt ? 'Ao terminar, o servidor revalida distância e tempo transcorrido, entrega o item, concede XP e encerra a sessão.' : 'At completion the server revalidates distance and elapsed time, grants the item, awards XP and closes the session.'}</p></div></article>
          <article><span>07</span><div><strong>{pt ? 'Cancelamento seguro' : 'Safe cancellation'}</strong><p>{pt ? 'Se cancelar, se afastar demais ou desconectar durante a fabricação, os materiais reservados são devolvidos.' : 'If the player cancels, moves too far away or disconnects during crafting, reserved materials are returned.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="crafting-xp">
        <SectionTitle number="07" label="XP / Levels" title={pt ? 'A progressão controla desbloqueios de receita e recompensa cada fabricação.' : 'Progression controls recipe unlocks and rewards every successful craft.'} />
        <div className="crafting-level-grid">
          {[['1','0'],['2','500'],['3','1.500'],['4','3.500'],['5','7.000'],['6','12.000'],['7','20.000'],['8','35.000'],['9','60.000'],['10','100.000']].map(([lvl,xp]) => <article key={lvl}><span>LVL {lvl}</span><strong>{xp} XP</strong></article>)}
        </div>
        <div className="docs-prose">
          <p>{pt ? 'Cada receita possui level e xp. O nível é calculado a partir dos thresholds de Config.Levels. Quando existe uma integração de skill configurada, o sistema consulta e atualiza a skill externa; caso contrário, mantém o fallback interno por personagem.' : 'Each recipe has level and xp values. Level is calculated from Config.Levels thresholds. When a configured skill integration exists, the system reads and updates that skill; otherwise it keeps an internal per-character fallback.'}</p>
        </div>
      </section>

      <section className="docs-section" id="crafting-weapons">
        <SectionTitle number="08" label={pt ? 'Upgrades de armas' : 'Weapon upgrades'} title={pt ? 'A mesma bancada vira uma estação visual de montagem de acessórios e personalização.' : 'The same bench becomes a visual attachment assembly and customization station.'} />
        <div className="docs-prose">
          <p>{pt ? 'A aba de upgrades carrega as armas e componentes do inventário através do PR Bridge. Ao selecionar uma arma, o sistema instancia um WeaponObject sobre a mesa usando weapon_offset do perfil, mostra serial, munição, durabilidade, componentes instalados e a lista de peças compatíveis.' : 'The upgrades tab loads weapons and components from inventory through PR Bridge. Selecting a weapon instantiates a WeaponObject on the bench using the profile weapon_offset and shows serial, ammo, durability, installed components and compatible parts.'}</p>
        </div>
        <div className="crafting-slot-grid">
          {[
            ['CANO', pt ? 'Cano / silenciador' : 'Barrel / suppressor'],
            ['MIRA', pt ? 'Mira / óptica' : 'Sight / optic'],
            ['TÁTICO', pt ? 'Lanterna / tático' : 'Flashlight / tactical'],
            ['PENTE', pt ? 'Carregador / pente' : 'Magazine / clip'],
            ['GRIP', pt ? 'Empunhadura' : 'Grip'],
            ['SKIN', pt ? 'Pintura / skin' : 'Tint / skin'],
          ].map(([tag,label]) => <article key={tag}><span>{tag}</span><strong>{label}</strong></article>)}
        </div>

        <div className="crafting-feature-grid">
          <Card eyebrow="INSTALL" title={pt ? 'Instalar componente' : 'Install component'}>{pt ? 'Clique, arraste até a arma ou solte diretamente no slot. O client valida compatibilidade nativa antes de pedir a alteração.' : 'Click, drag onto the weapon or drop directly into a slot. The client validates native compatibility before requesting the change.'}</Card>
          <Card eyebrow="REPLACE" title={pt ? 'Substituição por slot' : 'Slot replacement'}>{pt ? 'Se já existe uma peça no mesmo slot, a nova ocupa o lugar e a anterior retorna ao inventário.' : 'If the same slot is already occupied, the new part replaces it and the previous one returns to inventory.'}</Card>
          <Card eyebrow="REMOVE" title={pt ? 'Desinstalar' : 'Uninstall'}>{pt ? 'Clicar em um slot instalado remove o componente da arma e o devolve ao inventário quando houver espaço.' : 'Clicking an installed slot removes the part from the weapon and returns it to inventory when capacity allows.'}</Card>
          <Card eyebrow="TINT" title={pt ? 'Pinturas' : 'Tints'}>{pt ? 'A paleta aplica índices de pintura e persiste o valor no metadata da arma.' : 'The tint palette applies paint indices and persists the selected value in weapon metadata.'}</Card>
          <Card eyebrow="3D" title={pt ? 'Vista explodida' : 'Exploded view'}>{pt ? 'Clique na arma para expandir/remontar visualmente os componentes durante a inspeção.' : 'Click the weapon to visually expand/reassemble components during inspection.'}</Card>
          <Card eyebrow="SECURITY" title={pt ? 'Validação dupla' : 'Dual validation'}>{pt ? 'O servidor confirma slot da arma, identidade selecionada, posse da peça e compatibilidade permitida antes de alterar metadata.' : 'The server confirms weapon slot, selected identity, part ownership and allowed compatibility before changing metadata.'}</Card>
        </div>
        <div className="xt-note warning"><strong>{pt ? 'Calibre weapon_offset por perfil' : 'Calibrate weapon_offset per profile'}</strong><p>{pt ? 'Props diferentes têm alturas e orientações diferentes. Use o gerenciador de modelos → detalhe do perfil → “Posicionar e Girar Arma na Mesa” para alinhar a arma exatamente sobre a superfície.' : 'Different props have different heights and orientations. Use bench model manager → profile details → “Position and Rotate Weapon on Bench” to align the weapon precisely on the surface.'}</p></div>
      </section>

      <section className="docs-section" id="crafting-admin">
        <SectionTitle number="09" label={pt ? 'Administração in-game' : 'In-game administration'} title={pt ? 'Mesas, perfis, receitas e aparência podem ser mantidos sem editar coordenadas manualmente.' : 'Benches, profiles, recipes and appearance can be maintained without manually editing coordinates.'} />
        <div className="crafting-admin-grid">
          {[
            [pt ? 'Renomear bancada' : 'Rename bench', pt ? 'Altera a identidade exibida.' : 'Changes the displayed identity.'],
            [pt ? 'Mover com Gizmo' : 'Move with Gizmo', pt ? 'Reabre o prop na posição atual e salva novas coordenadas/heading.' : 'Reopens the prop at its current location and saves new coordinates/heading.'],
            [pt ? 'Altura / offset' : 'Height / offset', pt ? 'Ajuste fino da interação/apresentação.' : 'Fine adjustment for interaction/presentation.'],
            [pt ? 'Trocar perfil' : 'Change profile', pt ? 'Atribui outro slug de modelo à mesa.' : 'Assigns another model slug to the bench.'],
            [pt ? 'Gerenciar receitas' : 'Manage recipes', pt ? 'Adiciona, edita, remove ou vincula receitas globais.' : 'Adds, edits, removes or links global recipes.'],
            [pt ? 'Blip' : 'Blip', pt ? 'Cria/atualiza sprite, cor, escala e rótulo.' : 'Creates/updates sprite, color, scale and label.'],
            [pt ? 'Teleportar' : 'Teleport', pt ? 'Leva o admin até as coordenadas persistidas da mesa.' : 'Moves the admin to the persisted bench coordinates.'],
            [pt ? 'Excluir bancada' : 'Delete bench', pt ? 'Remove a instância persistente após confirmação.' : 'Removes the persistent instance after confirmation.'],
            [pt ? 'Tema / Standby' : 'Theme / Standby', pt ? 'Logo, títulos, fundos, transparência, glow, bordas e cores da DUI.' : 'Logo, titles, backgrounds, transparency, glow, borders and DUI colors.'],
          ].map(([name,desc]) => <article key={name}><strong>{name}</strong><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="crafting-db">
        <SectionTitle number="10" label={pt ? 'Banco de dados' : 'Database'} title={pt ? 'Cinco tabelas separam instâncias, perfis, receitas, catálogo e progressão.' : 'Five tables separate instances, profiles, recipes, catalog and progression.'} />
        <div className="crafting-db-grid">
          <article><code>forge-crafting</code><strong>{pt ? 'Bancadas persistentes' : 'Persistent benches'}</strong><p>{pt ? 'Nome, JSON de configuração, blip, acesso e model_slug.' : 'Name, configuration JSON, blip, access and model_slug.'}</p></article>
          <article><code>forge-crafting-bench-models</code><strong>{pt ? 'Perfis 3D' : '3D profiles'}</strong><p>{pt ? 'Prop, superfície DUI, escala, animação, câmera e weapon_offset.' : 'Prop, DUI surface, scale, animation, camera and weapon_offset.'}</p></article>
          <article><code>forge-crafting-items</code><strong>{pt ? 'Receitas por bancada' : 'Per-bench recipes'}</strong><p>{pt ? 'Item, recipe JSON, tempo, quantidade, modelo, animação, nível e XP.' : 'Item, recipe JSON, duration, amount, model, animation, level and XP.'}</p></article>
          <article><code>forge-crafting-recipe-catalog</code><strong>{pt ? 'Catálogo global' : 'Global catalog'}</strong><p>{pt ? 'Biblioteca reutilizável de receitas categorizadas.' : 'Reusable categorized recipe library.'}</p></article>
          <article><code>forge-crafting-player-skills</code><strong>{pt ? 'Fallback de progressão' : 'Progression fallback'}</strong><p>{pt ? 'XP por identificador e skill quando não há provider externo retornando dados.' : 'XP per identifier and skill when no external provider supplies data.'}</p></article>
        </div>
      </section>

      <section className="docs-section" id="crafting-api">
        <SectionTitle number="11" label="Commands / API" title={pt ? 'Comandos administrativos e exports de progressão completam a integração.' : 'Administrative commands and progression exports complete the integration surface.'} />
        <div className="crafting-command-grid">
          {[
            ['/create', pt ? 'Criar uma nova bancada física.' : 'Create a new physical bench.'],
            ['/edit', pt ? 'Abrir o painel principal de administração.' : 'Open the main administration panel.'],
            ['/benchmodels', pt ? 'Gerenciar perfis/modelos de bancada.' : 'Manage bench profiles/models.'],
            ['/createbench', pt ? 'Abrir o construtor/calibrador rápido DUI.' : 'Open the quick DUI builder/calibrator.'],
            ['/benchtool', pt ? 'Alias do construtor/calibrador.' : 'Builder/calibrator alias.'],
            ['/calibratedui', pt ? 'Alias para fluxo de calibração DUI.' : 'DUI calibration flow alias.'],
            ['/receitas', pt ? 'Abrir catálogo global de receitas.' : 'Open the global recipe catalog.'],
            ['/recipecatalog', pt ? 'Alias do catálogo global.' : 'Global catalog alias.'],
            ['craft:*', pt ? 'Os comandos principais também possuem variantes com o prefixo configurado.' : 'Main commands also have configured prefix variants.'],
          ].map(([cmd,desc]) => <article key={cmd}><code>{cmd}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">Exports</h3>
        <div className="crafting-api-list">
          {[
            ['GetPlayerLevel(source)', pt ? 'Retorna o nível atual de crafting.' : 'Returns current crafting level.'],
            ['GetPlayerXP(source)', pt ? 'Retorna o XP atual.' : 'Returns current XP.'],
            ['GetPlayerSkillData(source)', pt ? 'Retorna nível e XP em conjunto.' : 'Returns level and XP together.'],
            ['GetLevelsConfig()', pt ? 'Retorna a tabela de thresholds.' : 'Returns level thresholds.'],
            ['GetLevelFromXP(xp)', pt ? 'Converte XP acumulado em nível.' : 'Converts accumulated XP into level.'],
            ['GetXPForLevel(level)', pt ? 'Retorna o XP exigido por nível.' : 'Returns XP required for a level.'],
            ['GetNextLevelXP(currentLevel)', pt ? 'Retorna o próximo threshold.' : 'Returns the next threshold.'],
            ['GetItemXP(craftId, itemName)', pt ? 'Consulta o XP configurado para uma receita.' : 'Reads configured XP for a recipe.'],
            ['AwardCraftXP(source, xpAmount, itemName)', pt ? 'Concede XP de crafting manualmente.' : 'Awards crafting XP manually.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="crafting-source-note">
        <span>{pt ? 'Revisão do código' : 'Source review'}</span>
        <h2>{pt ? 'Documentação construída a partir da implementação atual do forge-crafting.' : 'Documentation built from the current forge-crafting implementation.'}</h2>
        <p>{pt ? 'Foram revisados os fluxos de criação/calibração de perfis, editor de bancadas, catálogo de receitas, runtime autoritativo de crafting, progressão, DUI e sistema de montagem de armas. Esta página descreve o comportamento da branch main no momento da revisão.' : 'The profile builder/calibration flow, bench editor, recipe catalog, authoritative crafting runtime, progression, DUI and weapon assembly system were reviewed. This page describes main-branch behavior at review time.'}</p>
        <div className="crafting-hero-actions">
          <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">Framework-Forge/forge-crafting</a>
        </div>
      </section>
    </div>
  );
}
