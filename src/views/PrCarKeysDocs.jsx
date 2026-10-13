import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Pierremoraes-ofc/pr_carkeys';

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

export default function PrCarKeysDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs carkeys-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Scripts • Vehicle Access</div>
          <h1>PR <span>Car Keys</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Sistema completo de chaves veiculares para FiveM com identidade física por barcode, chave original e cópias, chaves temporárias e temporizadas, bolsas de chaves, controle remoto configurável, gerenciamento da ignição, ligação direta, roubo de veículos de NPC, acesso operacional policial, expiração automática e integração de som 3D.'
              : 'A complete FiveM vehicle-key system with physical barcode identity, original and copied keys, temporary and timed keys, key bags, configurable remote controls, ignition management, hotwire, NPC carjack, operational police access, automatic expiration and 3D sound integration.'}
          </p>
          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório oficial' : 'Official repository'}</a>
            <a className="docs-secondary-button" href="#carkeys-types">{pt ? 'Tipos de chave' : 'Key types'}</a>
            <a className="docs-secondary-button" href="#carkeys-api">API / Exports</a>
          </div>
          <div className="legacy-meta">
            <span>v1.3.1</span><span>PR Bridge</span><span>Vehicle Keys</span><span>Hotwire</span><span>Carjack</span><span>Key Bags</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>KEY</span><strong>PR CARKEYS</strong></div>
          <Info label={pt ? 'Integração central' : 'Core integration'}>PR Bridge</Info>
          <Info label={pt ? 'Tipos de chave' : 'Key types'}>4</Info>
          <Info label={pt ? 'Identidade' : 'Identity'}>{pt ? 'Barcode único' : 'Unique barcode'}</Info>
          <Info label={pt ? 'Som' : 'Sound'}>PR 3D Sound</Info>
          <Info label={pt ? 'Persistência' : 'Persistence'}>{pt ? 'Banco + State Bags' : 'Database + State Bags'}</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#carkeys-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#carkeys-install">{pt ? 'Instalação' : 'Install'}</a>
        <a href="#carkeys-types">{pt ? 'Tipos de chave' : 'Key types'}</a>
        <a href="#carkeys-metadata">Metadata</a>
        <a href="#carkeys-lock">{pt ? 'Trava e motor' : 'Lock & engine'}</a>
        <a href="#carkeys-ignition">{pt ? 'Chave na ignição' : 'Key in ignition'}</a>
        <a href="#carkeys-bags">{pt ? 'Bolsas' : 'Key bags'}</a>
        <a href="#carkeys-manage">{pt ? 'Configuração da chave' : 'Key configuration'}</a>
        <a href="#carkeys-hotwire">{pt ? 'Ligação direta' : 'Hotwire'}</a>
        <a href="#carkeys-carjack">Carjack</a>
        <a href="#carkeys-police">{pt ? 'Polícia' : 'Police'}</a>
        <a href="#carkeys-expiration">{pt ? 'Expiração' : 'Expiration'}</a>
        <a href="#carkeys-storage">{pt ? 'Persistência' : 'Persistence'}</a>
        <a href="#carkeys-sound">{pt ? 'Som 3D' : '3D sound'}</a>
        <a href="#carkeys-security">{pt ? 'Segurança' : 'Security'}</a>
        <a href="#carkeys-api">API / Exports</a>
      </nav>

      <section className="docs-section" id="carkeys-overview">
        <SectionTitle number="01" label={pt ? 'Arquitetura' : 'Architecture'} title={pt ? 'Acesso ao veículo deixa de ser um booleano e passa a ser uma chave física com identidade própria.' : 'Vehicle access becomes a physical key with its own identity instead of a simple boolean.'} />
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Criar a chave' : 'Create key'}</strong><p>{pt ? 'Cada via recebe barcode, placa, tipo, nível e configuração individual.' : 'Each copy receives barcode, plate, type, level and per-key configuration.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Portar' : 'Carry'}</strong><p>{pt ? 'A chave pode ficar no inventário, dentro de uma bolsa ou temporariamente na ignição.' : 'The key can be in inventory, inside a key bag or temporarily in the ignition.'}</p></div>
          <div><span>03</span><strong>{pt ? 'Validar' : 'Validate'}</strong><p>{pt ? 'Trava, motor e ações críticas consultam o servidor antes de conceder acesso.' : 'Lock, engine and critical actions consult the server before granting access.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Sincronizar' : 'Synchronize'}</strong><p>{pt ? 'Banco de dados, State Bags, item físico e estado do veículo permanecem coerentes durante o gameplay.' : 'Database, State Bags, physical item and vehicle state stay coherent during gameplay.'}</p></div>
        </div>

        <div className="crafting-feature-grid">
          <Card eyebrow="BARCODE" title={pt ? 'Uma identidade por chave' : 'One identity per key'}>{pt ? 'Duas chaves da mesma placa continuam sendo vias diferentes porque cada item possui um barcode próprio.' : 'Two keys for the same plate remain distinct copies because each physical item owns its own barcode.'}</Card>
          <Card eyebrow="REMOTE" title={pt ? 'Controle remoto real' : 'Real remote control'}>{pt ? 'A distância do sinal, som e comportamento do motor podem ser configurados por chave.' : 'Signal distance, sound and engine behavior can be configured per key.'}</Card>
          <Card eyebrow="IGNITION" title={pt ? 'Chave pode ficar no carro' : 'Key can stay in the car'}>{pt ? 'Ao ligar o motor, a chave pode sair do inventário e existir na ignição até o motor ser desligado.' : 'When the engine starts, the key can leave inventory and live in the ignition until the engine is stopped.'}</Card>
          <Card eyebrow="HOTWIRE" title={pt ? 'Acesso sem chave' : 'Access without a key'}>{pt ? 'Ligação direta usa sessão server-side e minigame antes de entregar acesso temporário.' : 'Hotwire uses a server-side session and minigame before granting temporary access.'}</Card>
          <Card eyebrow="CARJACK" title={pt ? 'Roubo de NPC' : 'NPC carjack'}>{pt ? 'NPCs podem reagir, fugir ou entregar o veículo conforme arma, chance e contexto.' : 'NPCs can react, flee or surrender the vehicle according to weapon, chance and context.'}</Card>
          <Card eyebrow="EXPIRATION" title={pt ? 'Chaves temporizadas' : 'Timed keys'}>{pt ? 'O servidor remove uma via vencida mesmo se ela estiver dentro de bolsa ou na ignição.' : 'Server removes an expired copy even when it is inside a bag or currently in the ignition.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="carkeys-install">
        <SectionTitle number="02" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'PR Bridge é a camada central de integração; PR 3D Sound adiciona o áudio espacial de trava.' : 'PR Bridge is the central integration layer; PR 3D Sound adds spatial lock audio.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>server.cfg</h3>
            <LuaCodeBlock>{"ensure pr_bridge\nensure pr_3dsound -- opcional para sons 3D\nensure pr_carkeys"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Itens e banco' : 'Items & database'}</h3>
            <p>{pt ? 'Cadastre os itens de chave e bolsa no provider de inventário usado pelo PR Bridge. A tabela pr_carkeys é criada pelo resource; install/pr_carkeys.sql fica disponível como instalação manual de contingência.' : 'Register the key and bag items in the inventory provider used by PR Bridge. The pr_carkeys table is created by the resource; install/pr_carkeys.sql remains available as a manual fallback.'}</p>
          </div>
        </div>
        <div className="xt-note"><strong>{pt ? 'Áudio de trava' : 'Lock audio'}</strong><p>{pt ? 'Copie os arquivos de song/ para pr_3dsound/html/sounds/pr_carkeys/. Sem PR 3D Sound o sistema continua operacional; apenas o áudio espacial é omitido.' : 'Copy files from song/ into pr_3dsound/html/sounds/pr_carkeys/. Without PR 3D Sound the key system remains operational; only spatial lock audio is skipped.'}</p></div>
      </section>

      <section className="docs-section" id="carkeys-types">
        <SectionTitle number="03" label={pt ? 'Modelo de chave' : 'Key model'} title={pt ? 'Quatro itens cobrem propriedade original, cópia, acesso temporário e acesso temporizado.' : 'Four physical items cover original ownership, copies, temporary access and timed access.'} />
        <div className="crafting-db-grid">
          <article><code>carkey_permanent</code><strong>{pt ? 'Chave Original' : 'Original Key'}</strong><p><code>keyType=permanent</code> • <code>level=original</code><br />{pt ? 'Via principal e permanente associada ao veículo.' : 'Primary permanent key associated with the vehicle.'}</p></article>
          <article><code>carkey_copy</code><strong>{pt ? 'Chave Cópia' : 'Copied Key'}</strong><p><code>keyType=permanent</code> • <code>level=copy</code><br />{pt ? 'Cópia permanente com barcode próprio.' : 'Permanent copy with its own barcode.'}</p></article>
          <article><code>carkey_temp</code><strong>{pt ? 'Chave Temporária' : 'Temporary Key'}</strong><p><code>keyType=temporary</code> • <code>level=copy</code><br />{pt ? 'Usada em acesso temporário, hotwire, carjack e integrações.' : 'Used for temporary access, hotwire, carjack and integrations.'}</p></article>
          <article><code>carkey_single</code><strong>{pt ? 'Chave Avulsa' : 'Timed Single Key'}</strong><p><code>keyType=single_use</code> • <code>level=copy</code><br />{pt ? 'Possui expires_at. O nome single_use representa a categoria; a implementação atual usa cronômetro e não consome a chave no primeiro clique.' : 'Uses expires_at. The single_use name identifies the category; current behavior is timer-based and does not consume it on the first click.'}</p></article>
        </div>
        <div className="xt-note warning"><strong>{pt ? 'Original e cópia são níveis diferentes' : 'Original and copy are different levels'}</strong><p>{pt ? 'key_type descreve duração/comportamento; level descreve se a via é original ou cópia. Isso permite que duas chaves permanentes da mesma placa tenham funções e identidade separadas.' : 'key_type describes duration/behavior while level describes whether a copy is original or duplicated. This lets multiple permanent keys for the same plate retain separate identity.'}</p></div>
      </section>

      <section className="docs-section" id="carkeys-metadata">
        <SectionTitle number="04" label="Metadata" title={pt ? 'O item físico leva os dados necessários para identificar a chave sem perder o vínculo com o registro server-side.' : 'The physical item carries enough data to identify the key while preserving its server-side registry link.'} />
        <div className="crafting-field-grid">
          {[
            ['barcode', pt ? 'Serial único usado para localizar a via persistida no banco e relacioná-la ao estado sincronizado do veículo.' : 'Unique serial used to locate the persisted copy in the database and relate it to synchronized vehicle state.'],
            ['plate', pt ? 'Placa sanitizada do veículo associado.' : 'Sanitized plate of the associated vehicle.'],
            ['modelo', pt ? 'Label/modelo usado para leitura humana.' : 'Vehicle label/model used for display.'],
            ['code', pt ? 'Replica o barcode para providers que exibem código/serial.' : 'Mirrors barcode for providers that display a code/serial.'],
            ['sound', pt ? 'Preset de som individual da chave.' : 'Per-key sound preset.'],
            ['motor', pt ? 'Define se destrancar pode ligar o motor automaticamente.' : 'Controls whether unlock can automatically start the engine.'],
            ['distance', pt ? 'Alcance individual do controle remoto em metros.' : 'Individual remote-control range in meters.'],
            ['expires_at', pt ? 'Timestamp usado por chaves temporizadas.' : 'Timestamp used by timed keys.'],
            ['owner', pt ? 'Nome do proprietário pode ser mostrado quando a opção está habilitada.' : 'Owner name can be exposed when the option is enabled.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="carkeys-lock">
        <SectionTitle number="05" label={pt ? 'Controle do veículo' : 'Vehicle control'} title={pt ? 'Trancar, destrancar e ligar o motor sempre passam pela identidade da chave e pelo acesso atual.' : 'Locking, unlocking and starting the engine always depend on key identity and current access.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="L" title={pt ? 'Trancar / destrancar' : 'Lock / unlock'}>{pt ? 'A tecla padrão L procura o veículo correspondente mais próximo dentro do alcance daquela chave.' : 'Default L key finds the nearest matching vehicle inside that key’s configured range.'}</Card>
          <Card eyebrow="Z" title={pt ? 'Motor' : 'Engine'}>{pt ? 'A tecla padrão Z controla o motor quando o jogador ocupa o banco do motorista e possui acesso válido.' : 'Default Z key controls the engine when the player is in the driver seat with valid access.'}</Card>
          <Card eyebrow="REMOTE" title={pt ? 'Busca por placa' : 'Plate lookup'}>{pt ? 'Fora do carro, o client compara as placas às chaves conhecidas e escolhe o veículo elegível mais próximo.' : 'Outside a vehicle, client matches nearby plates against known keys and selects the closest eligible vehicle.'}</Card>
          <Card eyebrow="SERVER CHECK" title={pt ? 'Validação em tempo real' : 'Real-time validation'}>{pt ? 'Antes de alterar a trava, o servidor confirma que a chave ainda existe ou que o jogador possui outro acesso válido.' : 'Before changing locks, server confirms the key still exists or another valid access path is present.'}</Card>
          <Card eyebrow="FEEDBACK" title={pt ? 'Luzes e animação' : 'Lights & animation'}>{pt ? 'O uso remoto executa animação de key fob e pisca os faróis para feedback visual.' : 'Remote usage plays a key-fob animation and flashes lights for visual feedback.'}</Card>
          <Card eyebrow="REV" title={pt ? 'Efeito de partida' : 'Start effect'}>{pt ? 'Quando motor-on-unlock está ativo, o resource pode executar o efeito configurado de partida/rev antes de liberar o veículo.' : 'When motor-on-unlock is enabled, the resource can perform its configured start/rev effect before releasing the vehicle.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="carkeys-ignition">
        <SectionTitle number="06" label={pt ? 'Chave no veículo' : 'Key in vehicle'} title={pt ? 'A ignição transforma a chave física em estado de veículo sem duplicar o item.' : 'Ignition turns the physical key into vehicle state without duplicating the item.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Motor inicia' : 'Engine starts'}</strong><p>{pt ? 'O servidor localiza a chave por placa, inclusive dentro de bolsas, e remove exatamente aquela via do local de origem.' : 'Server finds a key by plate, including inside key bags, and removes that exact copy from its origin.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Ignition registry' : 'Ignition registry'}</strong><p>{pt ? 'VehiclesWithKeyInside guarda netId, placa, barcode, owner, item e origem da chave.' : 'VehiclesWithKeyInside stores netId, plate, barcode, owner, item and original location.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Sair com motor ligado' : 'Exit with engine running'}</strong><p>{pt ? 'Quando keepVehicleEngineOn está ativo, o motor permanece ligado e a chave continua dentro do carro.' : 'When keepVehicleEngineOn is enabled, the engine remains running and the key stays inside the vehicle.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Outro jogador entra' : 'Another player enters'}</strong><p>{pt ? 'O servidor informa que existe uma chave disponível no veículo; ela pode ser retirada conforme o tempo configurado.' : 'Server reports an available key in the vehicle; it can be picked up according to the configured pickup time.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Motor desliga' : 'Engine stops'}</strong><p>{pt ? 'A chave é reconstruída com sua metadata e devolvida ao inventário ou à bolsa de origem quando possível.' : 'The key is rebuilt with its metadata and returned to inventory or its originating bag when possible.'}</p></div></article>
        </div>
        <div className="xt-note"><strong>{pt ? 'Sem duplicação' : 'No duplication'}</strong><p>{pt ? 'A implementação mantém uma única identidade por barcode durante a passagem inventário → ignição → inventário/bolsa.' : 'The implementation preserves one identity per barcode during inventory → ignition → inventory/bag transitions.'}</p></div>
      </section>

      <section className="docs-section" id="carkeys-bags">
        <SectionTitle number="07" label={pt ? 'Bolsas de chaves' : 'Key bags'} title={pt ? 'Cada bolsa é um container físico com barcode próprio e stash isolado.' : 'Each key bag is a physical container with its own barcode and isolated stash.'} />
        <div className="crafting-db-grid">
          <article><code>carkey_bag</code><strong>{pt ? 'Bolsa de Chaves' : 'Key Bag'}</strong><p>{pt ? '10 slots • capacidade configurada de 5000 • abertura padrão de 3 s.' : '10 slots • configured capacity 5000 • default 3 s opening time.'}</p></article>
          <article><code>carkey_bag_large</code><strong>{pt ? 'Bolsa de Chaves Grande' : 'Large Key Bag'}</strong><p>{pt ? '25 slots • capacidade configurada de 15000 • abertura padrão de 4 s.' : '25 slots • configured capacity 15000 • default 4 s opening time.'}</p></article>
        </div>
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Primeiro uso' : 'First use'}</strong><p>{pt ? 'Se a bolsa ainda não possui barcode, o servidor cria e grava a identidade na metadata.' : 'If the bag has no barcode yet, server generates and stores one in metadata.'}</p></div>
          <div><span>02</span><strong>stashId</strong><p><code>pr_carkeys_bag_&lt;barcode&gt;</code></p></div>
          <div><span>03</span><strong>{pt ? 'Armazenar' : 'Store'}</strong><p>{pt ? 'Chaves mantêm barcode e configuração mesmo dentro da bolsa.' : 'Keys preserve barcode and configuration while inside the bag.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Gerenciar' : 'Manage'}</strong><p>{pt ? 'O menu lê as chaves da bolsa e cruza a metadata com o registro persistido no banco.' : 'Management reads bag contents and joins item metadata with persisted database records.'}</p></div>
        </div>
      </section>

      <section className="docs-section" id="carkeys-manage">
        <SectionTitle number="08" label={pt ? 'Configuração individual' : 'Per-key configuration'} title={pt ? 'Cada chave permanente pode funcionar como um controle remoto personalizado.' : 'Each permanent key can behave as a customized remote control.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="SOUND" title={pt ? 'Som de trava' : 'Lock sound'}>{pt ? 'Escolha entre os presets de Config.Sound.sounds. A alteração é persistida pelo barcode.' : 'Choose from Config.Sound.sounds presets. The change is persisted by barcode.'}</Card>
          <Card eyebrow="ENGINE" title={pt ? 'Motor ao destrancar' : 'Engine on unlock'}>{pt ? 'Alterna o campo motor para permitir ou impedir partida automática no unlock.' : 'Toggles the motor field to allow or prevent automatic start on unlock.'}</Card>
          <Card eyebrow="RANGE" title={pt ? 'Distância do sinal' : 'Signal distance'}>{pt ? 'Pode ser ajustada entre 1 e 30 metros no editor atual.' : 'Can be adjusted between 1 and 30 meters in the current editor.'}</Card>
          <Card eyebrow="INFO" title={pt ? 'Informações da via' : 'Copy information'}>{pt ? 'O submenu mostra placa, modelo, tipo, nível e registro/barcode.' : 'Submenu displays plate, model, type, level and registry/barcode.'}</Card>
          <Card eyebrow="STATE BAGS" title={pt ? 'Atualização imediata' : 'Immediate update'}>{pt ? 'Alterações de estado do veículo são sincronizadas por State Bags, enquanto a configuração persistente da chave permanece no banco.' : 'Vehicle-state changes are synchronized through State Bags while persistent key configuration remains in the database.'}</Card>
          <Card eyebrow="BAG CONTEXT" title={pt ? 'Dentro ou fora da bolsa' : 'Inside or outside a bag'}>{pt ? 'A mesma tela pode ser aberta a partir de uma chave individual ou navegando pela bolsa.' : 'The same management screen can open from an individual key or through the bag.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="carkeys-hotwire">
        <SectionTitle number="09" label={pt ? 'Ligação direta' : 'Hotwire'} title={pt ? 'Hotwire usa token server-side, valida o veículo e só concede acesso depois do minigame.' : 'Hotwire uses a server-side token, validates the vehicle and grants access only after the minigame.'} />
        <div className="crafting-step-list">
          <article><span>H</span><div><strong>{pt ? 'Solicitar sessão' : 'Request session'}</strong><p>{pt ? 'No banco do motorista e sem chave, a tecla configurada solicita uma sessão para netId + placa.' : 'In the driver seat without a key, the configured key requests a session for netId + plate.'}</p></div></article>
          <article><span>01</span><div><strong>{pt ? 'Validação inicial' : 'Initial validation'}</strong><p>{pt ? 'O servidor verifica entity, placa, jogador, banco do motorista e se já existe acesso.' : 'Server checks entity, plate, player, driver seat and whether access already exists.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Token temporário' : 'Temporary token'}</strong><p>{pt ? 'A sessão é vinculada a source, netId e placa e expira se não for consumida.' : 'Session is bound to source, netId and plate and expires if not consumed.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Minigame' : 'Minigame'}</strong><p>{pt ? 'O PR Bridge executa o minigame configurado com perfil parked ou carjack e dificuldade própria.' : 'PR Bridge runs the configured minigame using parked or carjack profile with independent difficulty.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Grant final' : 'Final grant'}</strong><p>{pt ? 'Somente após o sucesso o client devolve o token; o servidor revalida e entrega carkey_temp/acesso temporário.' : 'Only after success does the client return the token; server revalidates and grants carkey_temp/temporary access.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="carkeys-carjack">
        <SectionTitle number="10" label="Carjack" title={pt ? 'O roubo de veículos de NPC combina ameaça, reação da IA, procura da chave e acesso temporário.' : 'NPC vehicle theft combines threat, AI reaction, key search and temporary access.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="AIM" title={pt ? 'Detecção por mira' : 'Aim detection'}>{pt ? 'O sistema observa NPC motorista armado dentro da distância configurada.' : 'System detects an NPC driver being aimed at within the configured range.'}</Card>
          <Card eyebrow="WEAPON CLASS" title={pt ? 'Chance por classe' : 'Chance by weapon class'}>{pt ? 'A reação/fuga pode variar de acordo com a classe da arma e a blacklist configurada.' : 'Reaction/flee behavior can vary according to weapon class and configured blacklist.'}</Card>
          <Card eyebrow="REACTION" title={pt ? 'NPC pode reagir' : 'NPC may react'}>{pt ? 'Há chances independentes de reação armada, fuga e comportamento de pânico.' : 'Independent probabilities control armed reaction, flee behavior and panic.'}</Card>
          <Card eyebrow="SEARCH" title={pt ? 'Procurar chave' : 'Search for key'}>{pt ? 'Após dominar a situação, o player executa animação/progresso para procurar a chave.' : 'After controlling the situation, player performs search animation/progress to locate the key.'}</Card>
          <Card eyebrow="RESULT" title={pt ? 'Chave temporária ou permanente' : 'Temporary or permanent result'}>{pt ? 'Config.Carjack.getPermKey define se o fluxo entrega acesso permanente ou temporário.' : 'Config.Carjack.getPermKey controls whether the flow grants permanent or temporary access.'}</Card>
          <Card eyebrow="COOLDOWN" title={pt ? 'Controle de repetição' : 'Repeat control'}>{pt ? 'Tempos de render/roubo e cooldown são configuráveis para evitar spam do fluxo.' : 'Robbery timing and cooldown are configurable to prevent repeated spam.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="carkeys-police">
        <SectionTitle number="11" label={pt ? 'Acesso operacional' : 'Operational access'} title={pt ? 'Grupos policiais configurados possuem acesso especial sem transformar todos os veículos em propriedade permanente.' : 'Configured police groups receive operational access without turning every vehicle into permanent ownership.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="LOCKS" title={pt ? 'Trava universal operacional' : 'Operational universal lock access'}>{pt ? 'O fluxo de lock/unlock aceita policiais autorizados mesmo sem chave física da placa.' : 'Lock/unlock accepts authorized police even without a physical key for the plate.'}</Card>
          <Card eyebrow="NPC" title={pt ? 'Confisco de NPC' : 'NPC confiscation'}>{pt ? 'No carjack policial, o NPC pode ser rendido e o veículo confiscado pelo fluxo específico.' : 'In the police carjack branch, an NPC can surrender and the vehicle can be confiscated through the dedicated flow.'}</Card>
          <Card eyebrow="IGNITION" title={pt ? 'Acesso na ignição' : 'Ignition access'}>{pt ? 'O servidor pode registrar acesso temporário operacional diretamente na ignição após validação do contexto.' : 'Server can register temporary operational ignition access after validating context.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="carkeys-expiration">
        <SectionTitle number="12" label={pt ? 'Expiração automática' : 'Automatic expiration'} title={pt ? 'Chaves temporizadas são limpas do mundo lógico inteiro, não apenas do inventário visível.' : 'Timed keys are removed from the entire logical world, not only the visible inventory.'} />
        <div className="crafting-step-list">
          <article><span>5s</span><div><strong>{pt ? 'Scanner server-side' : 'Server-side scanner'}</strong><p>{pt ? 'A rotina consulta periodicamente registros com expires_at vencido.' : 'A periodic task queries records whose expires_at has passed.'}</p></div></article>
          <article><span>01</span><div><strong>{pt ? 'Ignition first' : 'Ignition first'}</strong><p>{pt ? 'Se a via está no veículo, ela é removida do registro de ignição e o motor é forçado a desligar.' : 'If the copy is in a vehicle, it is removed from ignition registry and the engine is forced off.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Inventário e bolsas' : 'Inventory & bags'}</strong><p>{pt ? 'O barcode é procurado e removido de players online e dos containers associados.' : 'Barcode is searched and removed from online players and associated containers.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Banco e State Bags' : 'Database & State Bags'}</strong><p>{pt ? 'Por fim o registro persistido é removido do banco e os estados sincronizados associados ao veículo são limpos/atualizados conforme o fluxo.' : 'Finally the persisted record is removed from the database and synchronized vehicle states are cleared/updated as required by the flow.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="carkeys-storage">
        <SectionTitle number="13" label={pt ? 'Persistência e State Bags' : 'Persistence & State Bags'} title={pt ? 'O banco persiste cada barcode e as State Bags sincronizam estados relevantes do veículo em runtime.' : 'The database persists each barcode while State Bags synchronize relevant vehicle state at runtime.'} />
        <div className="crafting-db-grid">
          <article><code>barcode</code><strong>{pt ? 'Identidade da via' : 'Copy identity'}</strong><p>{pt ? 'Único e indexado.' : 'Unique and indexed.'}</p></article>
          <article><code>citizenid</code><strong>{pt ? 'Titular registrado' : 'Registered owner'}</strong><p>{pt ? 'Identificador do dono da chave.' : 'Identifier for the key owner.'}</p></article>
          <article><code>plate</code><strong>{pt ? 'Veículo' : 'Vehicle'}</strong><p>{pt ? 'Placa associada à chave.' : 'Plate associated with the key.'}</p></article>
          <article><code>key_type</code><strong>{pt ? 'Comportamento' : 'Behavior'}</strong><p>permanent / temporary / single_use</p></article>
          <article><code>level</code><strong>{pt ? 'Nível da via' : 'Copy level'}</strong><p>original / copy</p></article>
          <article><code>sound</code><strong>{pt ? 'Preset de áudio' : 'Audio preset'}</strong><p>{pt ? 'Som individual ao travar/destravar.' : 'Per-key lock/unlock sound.'}</p></article>
          <article><code>motor</code><strong>{pt ? 'Partida no unlock' : 'Start on unlock'}</strong><p>0 / 1</p></article>
          <article><code>distance</code><strong>{pt ? 'Alcance' : 'Range'}</strong><p>{pt ? 'Distância do sinal em metros.' : 'Signal distance in meters.'}</p></article>
          <article><code>expires_at</code><strong>{pt ? 'Expiração' : 'Expiration'}</strong><p>{pt ? 'Timestamp para vias temporizadas.' : 'Timestamp for timed copies.'}</p></article>
        </div>
        <div className="docs-prose">
          <p>{pt ? 'O banco mantém a configuração persistente de cada chave, enquanto State Bags replicadas sincronizam estados do veículo, como <code>doorslockstate</code> e estados temporários usados durante efeitos de partida. Assim, persistência e sincronização de runtime permanecem separadas.' : 'The database keeps each key's persistent configuration, while replicated State Bags synchronize vehicle state such as <code>doorslockstate</code> and temporary states used during start/rev effects. Persistence and runtime synchronization therefore remain separate.'}</p>
        </div>
      </section>

      <section className="docs-section" id="carkeys-sound">
        <SectionTitle number="14" label={pt ? 'Som espacial' : 'Spatial sound'} title={pt ? 'Trancar e destrancar pode emitir áudio 3D real no ponto do veículo.' : 'Locking and unlocking can emit real 3D audio at the vehicle position.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="DEFAULT" title="tranca_1">{pt ? 'Preset padrão incluído no resource.' : 'Default preset included with the resource.'}</Card>
          <Card eyebrow="ALT" title="tranca_2">{pt ? 'Segundo preset incluído para personalização da chave.' : 'Second included preset for key customization.'}</Card>
          <Card eyebrow="RADIUS" title="8.0 m">{pt ? 'Raio padrão definido por Config.Sound.radius.' : 'Default radius from Config.Sound.radius.'}</Card>
          <Card eyebrow="VOLUME" title="0.8">{pt ? 'Volume padrão definido por Config.Sound.volume.' : 'Default volume from Config.Sound.volume.'}</Card>
        </div>
        <LuaCodeBlock>{"-- Estrutura esperada no PR 3D Sound\npr_3dsound/html/sounds/pr_carkeys/tranca_1.ogg\npr_3dsound/html/sounds/pr_carkeys/tranca_2.ogg"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="carkeys-security">
        <SectionTitle number="15" label={pt ? 'Segurança' : 'Security'} title={pt ? 'Ações sensíveis usam contexto do veículo, distância, placa, identidade, barcode e tokens temporários.' : 'Sensitive actions use vehicle context, distance, plate, identity, barcode and temporary tokens.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="LOCK" title={pt ? 'Lock server-validated' : 'Server-validated locks'}>{pt ? 'Alteração da trava confirma acesso antes de aceitar estado enviado pelo client.' : 'Lock changes verify access before accepting a state from the client.'}</Card>
          <Card eyebrow="DRIVER" title={pt ? 'Banco do motorista' : 'Driver seat'}>{pt ? 'Motor/hotwire validam se o player continua ocupando o veículo correto.' : 'Engine/hotwire validate that the player is still in the correct vehicle.'}</Card>
          <Card eyebrow="TOKEN" title={pt ? 'Sessão de hotwire' : 'Hotwire session'}>{pt ? 'O token é vinculado a source + netId + plate e precisa estar válido no grant final.' : 'Token is bound to source + netId + plate and must be valid on final grant.'}</Card>
          <Card eyebrow="PLATE" title={pt ? 'Placa real da entity' : 'Entity plate'}>{pt ? 'Fluxos críticos comparam a placa enviada contra a placa lida do veículo.' : 'Critical flows compare submitted plate against the actual entity plate.'}</Card>
          <Card eyebrow="DISTANCE" title={pt ? 'Proximidade' : 'Proximity'}>{pt ? 'Ações de roubo/obtenção de chave próxima rejeitam players fora do alcance esperado.' : 'Nearby theft/key-grant flows reject players outside expected range.'}</Card>
          <Card eyebrow="ADMIN" title="/givekey">{pt ? 'Comando protegido por console, ACE ou permissão administrativa resolvida pelo PR Bridge.' : 'Command protected by console, ACE or administrative permission resolved through PR Bridge.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="carkeys-api">
        <SectionTitle number="16" label="Commands / API" title={pt ? 'Exports permitem integrar lojas, garagens, concessionárias e outros recursos sem duplicar a lógica de chave.' : 'Exports let shops, garages, dealerships and other resources integrate without duplicating key logic.'} />

        <h3 className="xt-subheading">{pt ? 'Comando administrativo' : 'Administrative command'}</h3>
        <LuaCodeBlock>{"/givekey [id] [tipo] [placa]\n\n# tipos\npermanente | copia | temporaria | unico"}</LuaCodeBlock>

        <h3 className="xt-subheading">{pt ? 'Exports server-side' : 'Server-side exports'}</h3>
        <div className="crafting-api-list">
          {[
            ['BuyOriginalKey(source, plate, duration?)', pt ? 'Cria uma chave original para a placa; duration opcional cria versão temporária.' : 'Creates an original key for the plate; optional duration creates a temporary variant.'],
            ['CopyKey(source, originalBarcode, duration?)', pt ? 'Duplica uma chave existente com novo barcode; single_use não pode ser copiada.' : 'Copies an existing key with a new barcode; single_use cannot be copied.'],
            ['GiveTempKey(source, plate)', pt ? 'Concede acesso temporário lógico à placa.' : 'Grants logical temporary access to a plate.'],
            ['RemoveTempKey(source, plate)', pt ? 'Remove acesso temporário lógico.' : 'Removes logical temporary access.'],
            ['CreateTempKeyItem(source, plate, itemName?)', pt ? 'Cria item físico temporário com barcode.' : 'Creates a physical temporary key item with barcode.'],
            ['CreateTimedKeyItem(source, plate, durationSec, itemName?, level?)', pt ? 'Cria chave single_use temporizada e persistida.' : 'Creates a persisted timed single_use key.'],
            ['RemoveTempKeyItem(source, plate)', pt ? 'Remove item temporário da pessoa/bolsas e limpa o acesso.' : 'Removes temporary item from player/bags and clears access.'],
            ['RemoveKeysForOwnerPlate(owner, plate, keyType?)', pt ? 'Revoga vias registradas para owner + placa.' : 'Revokes registered copies for owner + plate.'],
            ['HasVehicleAccess(source, plate)', pt ? 'Consulta autoritativa de acesso atual.' : 'Authoritative current-access check.'],
            ['IsPlayerPolice(source)', pt ? 'Consulta acesso policial configurado.' : 'Checks configured police access.'],
            ['SetLockState(vehicle, state)', pt ? 'Altera estado de trava pela API server-side.' : 'Changes vehicle lock state through server API.'],
            ['GiveKeys(source, vehicle)', pt ? 'Compatibilidade para conceder acesso temporário pelo veículo.' : 'Compatibility helper to grant temporary access from a vehicle.'],
            ['GetKeys(source)', pt ? 'Retorna placas acessíveis por temp key, ignição, inventário e bolsas.' : 'Returns plates accessible through temp key, ignition, inventory and bags.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Exports client-side' : 'Client-side exports'}</h3>
        <div className="crafting-api-list">
          {[
            ['HaveKey(plate)', pt ? 'Retorna true se o estado client-side conhece acesso à placa.' : 'Returns true when client state knows access to the plate.'],
            ['HavePermanentKey(plate)', pt ? 'Verifica chave permanente carregada.' : 'Checks loaded permanent key access.'],
            ['HaveTempKey(plate)', pt ? 'Verifica acesso temporário carregado.' : 'Checks loaded temporary access.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Exemplos de integração' : 'Integration examples'}</h3>
        <LuaCodeBlock>{"-- Entregar a chave depois de criar/comprar um veículo\nexports['pr_carkeys']:BuyOriginalKey(source, plate)\n\n-- Conceder acesso temporário\nexports['pr_carkeys']:GiveTempKey(source, plate)\n\n-- Consultar acesso antes de uma ação server-side\nlocal allowed = exports['pr_carkeys']:HasVehicleAccess(source, plate)\n\n-- Revogar chaves de uma placa após transferência de propriedade\nexports['pr_carkeys']:RemoveKeysForOwnerPlate(ownerId, plate)"}</LuaCodeBlock>
      </section>

      <section className="crafting-source-note">
        <span>{pt ? 'Revisão do código' : 'Source review'}</span>
        <h2>{pt ? 'Documentação construída a partir da implementação atual do pr_carkeys v1.3.1.' : 'Documentation built from the current pr_carkeys v1.3.1 implementation.'}</h2>
        <p>{pt ? 'Foram revisados o modelo de chaves, metadata, bolsas, gerenciamento individual, persistência em banco, State Bags, lock/unlock, ignição, hotwire, carjack, polícia, expiração, integração PR Bridge, PR 3D Sound e exports públicos.' : 'The key model, metadata, bags, per-key management, database persistence, State Bags, lock/unlock, ignition, hotwire, carjack, police, expiration, PR Bridge integration, PR 3D Sound and public exports were reviewed.'}</p>
        <div className="crafting-hero-actions">
          <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">Pierremoraes-ofc/pr_carkeys</a>
        </div>
      </section>
    </div>
  );
}
