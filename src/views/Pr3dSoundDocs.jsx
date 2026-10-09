import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Framework-Forge/pr_3dsound';

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

export default function Pr3dSoundDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs sound-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Scripts • Spatial Audio</div>
          <h1>PR <span>3D Sound</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Sistema completo de áudio espacial para FiveM com emitters persistentes, streaming por proximidade, reprodução 2D e 3D, URLs diretas, arquivos locais, attach em entities, sincronização server-side, HRTF real quando a origem permite CORS, oclusão por paredes, veículos e interiores, fades e uma camada adicional para sons nativos do GTA.'
              : 'A complete FiveM spatial-audio system with persistent emitters, proximity streaming, 2D/3D playback, direct URLs, local files, entity attachment, server-side synchronization, real HRTF when the source permits CORS, wall/vehicle/interior occlusion, fades and an additional bridge for native GTA sounds.'}
          </p>
          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório' : 'Repository'}</a>
            <a className="docs-secondary-button" href="#sound-server">{pt ? 'Server-side' : 'Server-side'}</a>
            <a className="docs-secondary-button" href="#sound-api">API / Exports</a>
          </div>
          <div className="legacy-meta">
            <span>v4.0.0</span><span>FiveM</span><span>3D Audio</span><span>HRTF</span><span>OneSync</span><span>Native Sound</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>3D</span><strong>SOUND</strong></div>
          <Info label={pt ? 'Estado' : 'State'}>{pt ? 'Autoritativo no servidor' : 'Server authoritative'}</Info>
          <Info label={pt ? 'Fontes' : 'Sources'}>{pt ? 'Local, URL, stream e native' : 'Local, URL, stream & native'}</Info>
          <Info label={pt ? 'Espacialização' : 'Spatialization'}>HRTF + distance</Info>
          <Info label={pt ? 'Attach' : 'Attachment'}>Network ID</Info>
          <Info label={pt ? 'Oclusão' : 'Occlusion'}>{pt ? 'Parede, veículo e interior' : 'Wall, vehicle & interior'}</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#sound-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#sound-install">{pt ? 'Instalação' : 'Install'}</a>
        <a href="#sound-sources">{pt ? 'Tipos de áudio' : 'Audio types'}</a>
        <a href="#sound-server">Server-side</a>
        <a href="#sound-streaming">{pt ? 'Streaming' : 'Streaming'}</a>
        <a href="#sound-attach">{pt ? 'Attach em entity' : 'Entity attachment'}</a>
        <a href="#sound-occlusion">{pt ? 'Oclusão' : 'Occlusion'}</a>
        <a href="#sound-hrtf">HRTF / CORS</a>
        <a href="#sound-sync">{pt ? 'Sincronização' : 'Synchronization'}</a>
        <a href="#sound-client">Client-side</a>
        <a href="#sound-native">{pt ? 'Sons nativos' : 'Native sounds'}</a>
        <a href="#sound-security">{pt ? 'Segurança' : 'Security'}</a>
        <a href="#sound-config">{pt ? 'Convars' : 'Convars'}</a>
        <a href="#sound-api">API / Exports</a>
      </nav>

      <section className="docs-section" id="sound-overview">
        <SectionTitle number="01" label={pt ? 'Arquitetura' : 'Architecture'} title={pt ? 'O PR 3D Sound separa criação do emitter, seleção dos listeners e renderização espacial do áudio.' : 'PR 3D Sound separates emitter creation, listener selection and spatial audio rendering.'} />
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Emitter' : 'Emitter'}</strong><p>{pt ? 'Um som recebe ID único, origem, volume, raio, loop e opcionalmente uma entity.' : 'A sound receives a unique ID, source, volume, radius, loop and optionally an entity.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Estado server-side' : 'Server-side state'}</strong><p>{pt ? 'O servidor guarda tempo, pause, seek, distância, volume, listeners e posição.' : 'Server stores time, pause, seek, distance, volume, listeners and position.'}</p></div>
          <div><span>03</span><strong>{pt ? 'Streaming' : 'Streaming'}</strong><p>{pt ? 'Somente jogadores elegíveis e dentro do raio recebem o emitter.' : 'Only eligible players inside the radius receive the emitter.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Renderização local' : 'Local rendering'}</strong><p>{pt ? 'O client calcula distância/oclusão e a NUI reproduz, posiciona e filtra o áudio.' : 'Client calculates distance/occlusion and the NUI plays, positions and filters the audio.'}</p></div>
        </div>

        <div className="crafting-feature-grid">
          <Card eyebrow="PERSISTENT" title={pt ? 'Emitters persistentes' : 'Persistent emitters'}>{pt ? 'O som continua conhecido pelo servidor mesmo sem listeners próximos. Quem entra no raio depois recebe o estado atual.' : 'The server keeps the sound even when no listeners are nearby. Players entering later receive its current state.'}</Card>
          <Card eyebrow="LATE JOIN" title={pt ? 'Entrada tardia' : 'Late join'}>{pt ? 'Jogadores que conectam depois ou retornam ao raio recebem o timestamp correspondente à reprodução atual.' : 'Players connecting later or re-entering the radius receive the corresponding current playback timestamp.'}</Card>
          <Card eyebrow="2D + 3D" title={pt ? 'Dois modelos de reprodução' : 'Two playback models'}>{pt ? '2D toca para o target sem atenuação espacial; 3D usa posição, raio e oclusão.' : '2D targets a listener without spatial attenuation; 3D uses position, radius and occlusion.'}</Card>
          <Card eyebrow="ENTITY" title={pt ? 'Sons móveis' : 'Moving sounds'}>{pt ? 'Um emitter pode acompanhar veículos, peds ou objects pelo Network ID.' : 'An emitter can follow vehicles, peds or objects by Network ID.'}</Card>
          <Card eyebrow="HYSTERESIS" title={pt ? 'Borda estável' : 'Stable radius edge'}>{pt ? 'A histerese evita play/stop repetitivo quando o player fica oscilando no limite do raio.' : 'Hysteresis prevents repeated play/stop when a player hovers around the radius edge.'}</Card>
          <Card eyebrow="UNIQUE ID" title={pt ? 'IDs separados' : 'Separated IDs'}>{pt ? 'Emitters gerenciados pelo servidor usam índices internos acima de 100000 para não colidir com sons locais do client.' : 'Server-managed emitters use internal indexes above 100000 to avoid collisions with client-local sounds.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="sound-install">
        <SectionTitle number="02" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'O resource é standalone: basta iniciar o PR 3D Sound e manter seus áudios dentro da estrutura publicada.' : 'The resource is standalone: start PR 3D Sound and keep local audio inside the published folder structure.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>server.cfg</h3>
            <LuaCodeBlock>{"ensure pr_3dsound"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Arquivos locais' : 'Local files'}</h3>
            <p>{pt ? 'Coloque os arquivos em html/sounds/. Subpastas podem ser usadas para separar o áudio por resource, por exemplo html/sounds/meu_script/efeito.ogg.' : 'Place files under html/sounds/. Subfolders can separate audio by resource, for example html/sounds/my_script/effect.ogg.'}</p>
          </div>
        </div>
        <div className="xt-note"><strong>{pt ? 'Produção' : 'Production'}</strong><p>{pt ? 'client/test_commands.lua permanece desabilitado no fxmanifest. Ative apenas temporariamente para testes.' : 'client/test_commands.lua remains disabled in the fxmanifest. Enable it only temporarily for testing.'}</p></div>
      </section>

      <section className="docs-section" id="sound-sources">
        <SectionTitle number="03" label={pt ? 'Fontes de áudio' : 'Audio sources'} title={pt ? 'O mesmo resource cobre efeitos locais, áudio remoto, streaming e players externos.' : 'One resource covers local effects, remote audio, streaming and external players.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="LOCAL" title={pt ? 'Arquivo local 3D' : 'Local 3D file'}>{pt ? 'Arquivos empacotados em html/sounds podem tocar em coordenadas com volume e raio definidos.' : 'Files bundled in html/sounds can play at world coordinates with defined volume and radius.'}</Card>
          <Card eyebrow="URL 2D" title={pt ? 'URL sem posição' : 'Non-spatial URL'}>{pt ? 'Ideal para interfaces, rádios pessoais ou áudio destinado a um player sem origem física.' : 'Useful for UI, personal radio or audio intended for a player without a physical origin.'}</Card>
          <Card eyebrow="URL 3D" title={pt ? 'URL posicional' : 'Positional URL'}>{pt ? 'URL remota com coordenadas, distância, loop, streaming por proximidade e espacialização.' : 'Remote URL with coordinates, radius, loop, proximity streaming and spatialization.'}</Card>
          <Card eyebrow="ATTACHED" title={pt ? 'URL presa à entity' : 'Entity-attached URL'}>{pt ? 'A posição acompanha uma entity de rede, ideal para caixas de som, veículos e objetos móveis.' : 'Position follows a network entity, useful for speakers, vehicles and moving objects.'}</Card>
          <Card eyebrow="LIVE" title={pt ? 'Streams ao vivo' : 'Live streams'}>{pt ? 'Streams não seekable reabrem no ponto atual disponibilizado pela origem quando o listener entra novamente.' : 'Non-seekable streams reopen at the point made available by the origin when a listener returns.'}</Card>
          <Card eyebrow="NATIVE" title={pt ? 'Áudio nativo do GTA' : 'Native GTA audio'}>{pt ? 'Uma API paralela centraliza PlaySoundFrontend, entity e coords com validação e distribuição por raio.' : 'A parallel API centralizes frontend, entity and coordinate native playback with validation and radius delivery.'}</Card>
        </div>

        <LuaCodeBlock>{"-- Arquivo local em html/sounds/\nexports['pr_3dsound']:Play(\n    vector3(100.0, 200.0, 30.0),\n    'meu_script/efeito.ogg',\n    1.0,\n    50.0,\n    'efeito_01',\n    nil,\n    false\n)"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="sound-server">
        <SectionTitle number="04" label="Server-side" title={pt ? 'Para sons compartilhados, o caminho recomendado é criar e controlar o emitter pelo servidor.' : 'For shared audio, the recommended path is to create and control the emitter from the server.'} />
        <div className="docs-prose">
          <p>{pt ? 'PlayUrlPos e PlayUrlAttached criam emitters persistentes. O primeiro argumento controla a audiência: -1 cria um emitter compartilhado; um source específico limita a elegibilidade àquele jogador.' : 'PlayUrlPos and PlayUrlAttached create persistent emitters. Their first argument controls audience: -1 creates a shared emitter; a specific source restricts eligibility to that player.'}</p>
        </div>
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Som fixo compartilhado' : 'Shared fixed emitter'}</h3>
            <LuaCodeBlock>{"exports['pr_3dsound']:PlayUrlPos(\n    -1,\n    'radio_praca',\n    'https://cdn.exemplo.com/radio.mp3',\n    0.8,\n    vector3(215.0, -810.0, 30.0),\n    45.0,\n    true\n)"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Som preso ao veículo' : 'Vehicle-attached emitter'}</h3>
            <LuaCodeBlock>{"local netId = NetworkGetNetworkIdFromEntity(vehicle)\n\nexports['pr_3dsound']:PlayUrlAttached(\n    -1,\n    'som_carro_' .. netId,\n    'https://cdn.exemplo.com/musica.mp3',\n    0.8,\n    netId,\n    35.0,\n    true\n)"}</LuaCodeBlock>
          </div>
        </div>
        <div className="crafting-feature-grid">
          <Card eyebrow="REPLACE" title={pt ? 'ID é único' : 'Unique ID'}>{pt ? 'Criar um novo som com o mesmo uniqueId encerra o anterior antes de registrar o novo emitter.' : 'Creating another sound with the same uniqueId stops the previous one before registering the new emitter.'}</Card>
          <Card eyebrow="RADIUS" title={pt ? 'Raio validado' : 'Validated radius'}>{pt ? 'O servidor limita a distância ao máximo configurado e nunca aceita raio espacial menor que 1 m.' : 'Server clamps distance to the configured maximum and never accepts spatial radius below 1 m.'}</Card>
          <Card eyebrow="VOLUME" title={pt ? 'Volume normalizado' : 'Normalized volume'}>{pt ? 'Volume é sempre limitado entre 0.0 e 1.0.' : 'Volume is always clamped between 0.0 and 1.0.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="sound-streaming">
        <SectionTitle number="05" label={pt ? 'Streaming por proximidade' : 'Proximity streaming'} title={pt ? 'O servidor não transmite todos os emitters para todos os players: ele mantém listeners dinamicamente.' : 'The server does not send every emitter to every player: it maintains listeners dynamically.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Atualizar origem' : 'Refresh origin'}</strong><p>{pt ? 'Para sounds attached, o servidor resolve o Network ID e atualiza coords + routing bucket.' : 'For attached sounds, server resolves the Network ID and refreshes coords + routing bucket.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Filtrar audiência' : 'Filter audience'}</strong><p>{pt ? 'Target source e routing bucket são aplicados antes do teste de distância.' : 'Target source and routing bucket are checked before distance.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Entrar no raio' : 'Enter radius'}</strong><p>{pt ? 'O listener recebe o som e o timestamp atual somente quando passa a ser elegível.' : 'Listener receives the sound and current timestamp only when becoming eligible.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Sair do raio' : 'Leave radius'}</strong><p>{pt ? 'O client recebe stop e sai da lista de listeners sem apagar o emitter global.' : 'Client receives stop and leaves listener state without deleting the global emitter.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Histerese' : 'Hysteresis'}</strong><p>{pt ? 'Quem já está ouvindo só sai depois de ultrapassar radius + hysteresis, evitando flapping na borda.' : 'An existing listener streams out only after exceeding radius + hysteresis, avoiding edge flapping.'}</p></div></article>
        </div>
        <div className="xt-note"><strong>{pt ? 'Entity temporariamente fora do scope' : 'Entity temporarily out of scope'}</strong><p>{pt ? 'Quando uma entity attached desaparece por poucos ticks durante mudança de ownership/scope, o servidor mantém os listeners por uma janela de grace antes de desmontar o áudio.' : 'When an attached entity disappears for a few ticks during ownership/scope changes, the server keeps listeners for a grace window before streaming out.'}</p></div>
      </section>

      <section className="docs-section" id="sound-attach">
        <SectionTitle number="06" label={pt ? 'Attach em entities' : 'Entity attachment'} title={pt ? 'Network ID é a identidade do emitter móvel; o client tenta resolver novamente a entity sempre que necessário.' : 'Network ID is the moving emitter identity; the client retries entity resolution whenever necessary.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="NETWORK ID" title={pt ? 'Resolução resiliente' : 'Resilient resolution'}>{pt ? 'O netId pode chegar antes da entity entrar no scope do OneSync. O client preserva o ID e tenta NetToEnt novamente durante o loop.' : 'The netId may arrive before the entity enters OneSync scope. Client keeps the ID and retries NetToEnt during its loop.'}</Card>
          <Card eyebrow="OFFSET" title={pt ? 'Offset espacial' : 'Spatial offset'}>{pt ? 'AttachToEntity aceita offset XYZ para mover a fonte em relação ao centro da entity.' : 'AttachToEntity accepts XYZ offset to place the source relative to entity center.'}</Card>
          <Card eyebrow="MOVEMENT" title={pt ? 'Panner acompanha movimento' : 'Panner follows movement'}>{pt ? 'Quando a entity se move, a posição espacial enviada à NUI também é atualizada.' : 'When the entity moves, the spatial position sent to NUI is updated too.'}</Card>
          <Card eyebrow="DETACH" title={pt ? 'Desanexar sem parar' : 'Detach without stopping'}>{pt ? 'DetachEntity congela o emitter na última posição conhecida e remove a relação com o netId.' : 'DetachEntity keeps the emitter at its last known position and removes netId attachment.'}</Card>
          <Card eyebrow="BUCKET" title={pt ? 'Routing bucket' : 'Routing bucket'}>{pt ? 'Quando disponível, o bucket da entity restringe quais jogadores podem ouvir aquele emitter.' : 'When available, entity routing bucket restricts which players can hear that emitter.'}</Card>
          <Card eyebrow="TIMEOUT" title={pt ? 'Entity ausente' : 'Missing entity'}>{pt ? 'Ausências persistentes usam timeout configurável; oscilações curtas usam uma janela menor de grace.' : 'Persistent missing entities use a configurable timeout; short gaps use a smaller grace window.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="sound-occlusion">
        <SectionTitle number="07" label={pt ? 'Oclusão acústica' : 'Acoustic occlusion'} title={pt ? 'A percepção do som muda conforme paredes, carro da fonte, carro do ouvinte e interior.' : 'Perceived sound changes according to walls, source vehicle, listener vehicle and interior.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="RAYCAST" title={pt ? 'Parede e objetos' : 'Walls & objects'}>{pt ? 'Raycasts assíncronos são resolvidos em ticks alternados e suavizados para reduzir saltos bruscos de volume.' : 'Asynchronous raycasts are resolved across ticks and smoothed to reduce abrupt volume jumps.'}</Card>
          <Card eyebrow="SOURCE VEHICLE" title={pt ? 'Som dentro do carro' : 'Sound inside vehicle'}>{pt ? 'Portas, janelas e porta-malas da entity emissora alteram quanto áudio chega ao exterior.' : 'Doors, windows and trunk state on the emitter vehicle affect how much sound reaches outside.'}</Card>
          <Card eyebrow="LISTENER VEHICLE" title={pt ? 'Ouvinte dentro do carro' : 'Listener inside vehicle'}>{pt ? 'Porta e janela do assento do player também abafam sons vindos do mundo.' : 'Door/window state for the player seat also attenuates world audio.'}</Card>
          <Card eyebrow="CAR × CAR" title={pt ? 'Piso audível' : 'Audible floor'}>{pt ? 'Dois carros fechados não multiplicam a oclusão até quase zero: há um piso configurado para manter o som perceptível.' : 'Two closed vehicles do not multiply attenuation to near-zero: a configured floor keeps audio perceptible.'}</Card>
          <Card eyebrow="MLO" title={pt ? 'Interior x exterior' : 'Interior vs exterior'}>{pt ? 'Quando source e listener estão em lados diferentes de um interior, um multiplicador adicional simula passagem por portal/parede.' : 'When source and listener are on different sides of an interior, an extra multiplier simulates portal/wall transmission.'}</Card>
          <Card eyebrow="LOW-PASS" title={pt ? 'Filtro real em URL direta' : 'Real filter on direct URL'}>{pt ? 'Quando o áudio remoto está no pipeline espacial, a oclusão reduz volume e também fecha o low-pass.' : 'When remote audio uses the spatial pipeline, occlusion reduces volume and also lowers the low-pass cutoff.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="sound-hrtf">
        <SectionTitle number="08" label="HRTF / CORS" title={pt ? 'URLs diretas podem usar espacialização HRTF real; isso depende do servidor que hospeda o áudio.' : 'Direct URLs can use real HRTF spatialization; this depends on the server hosting the audio.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Pipeline espacial' : 'Spatial pipeline'}</h3>
            <p>{pt ? 'Quando a origem permite acesso cross-origin, o áudio remoto entra em um pipeline com source de mídia, PannerNode em modo HRTF, filtro low-pass e gain. A atenuação de distância continua calculada pelo Lua para não ser aplicada duas vezes.' : 'When the source permits cross-origin access, remote audio enters a pipeline with media source, HRTF PannerNode, low-pass filter and gain. Distance attenuation remains Lua-side to avoid double attenuation.'}</p>
          </div>
          <div>
            <h3>{pt ? 'Header esperado' : 'Expected header'}</h3>
            <LuaCodeBlock>{"Access-Control-Allow-Origin: *"}</LuaCodeBlock>
          </div>
        </div>
        <div className="xt-note warning"><strong>{pt ? 'Fallback' : 'Fallback'}</strong><p>{pt ? 'Se a origem não puder entrar no pipeline Web Audio, o PR 3D Sound tenta uma reprodução compatível. Distância e oclusão continuam funcionando, mas sem HRTF verdadeiro.' : 'If the source cannot enter the Web Audio pipeline, PR 3D Sound attempts compatible playback. Distance and occlusion continue to work, but without true HRTF.'}</p></div>
        <div className="docs-prose">
          <p>{pt ? 'Players externos incorporados pelo browser continuam com distância/volume/oclusão simulados porque o áudio cross-origin desses players não pode ser capturado pelo PannerNode. Para caixas, carros e fontes cuja posição é importante, prefira URLs diretas para arquivos/streams compatíveis.' : 'Browser-embedded external players still use simulated distance/volume/occlusion because their cross-origin audio cannot be captured by the PannerNode. For speakers, cars and sources where positioning matters, prefer direct URLs to compatible files/streams.'}</p>
        </div>
      </section>

      <section className="docs-section" id="sound-sync">
        <SectionTitle number="09" label={pt ? 'Sincronização autoritativa' : 'Authoritative synchronization'} title={pt ? 'Pause, resume, seek, volume, distância e loop alteram o estado central e chegam corretamente a listeners atuais e futuros.' : 'Pause, resume, seek, volume, distance and loop update central state and reach both current and future listeners correctly.'} />
        <div className="crafting-step-list">
          <article><span>PAUSE</span><div><strong>{pt ? 'Pausa com offset exato' : 'Pause at exact offset'}</strong><p>{pt ? 'O servidor calcula playbackOffset, congela pausedOffset e envia uma única operação atômica ao NUI.' : 'Server calculates playbackOffset, stores pausedOffset and sends one atomic operation to the NUI.'}</p></div></article>
          <article><span>PLAY</span><div><strong>{pt ? 'Resume sincronizado' : 'Synchronized resume'}</strong><p>{pt ? 'Ao retomar, seekBase e startedAt são reconstruídos e todos os listeners reiniciam do mesmo ponto.' : 'On resume, seekBase and startedAt are rebuilt and every listener resumes from the same point.'}</p></div></article>
          <article><span>SEEK</span><div><strong>SetTimestamp</strong><p>{pt ? 'Reposiciona a timeline central; se estiver pausado, atualiza também pausedOffset.' : 'Moves central timeline; if paused, pausedOffset is updated too.'}</p></div></article>
          <article><span>LATE</span><div><strong>{pt ? 'Novo listener' : 'New listener'}</strong><p>{pt ? 'buildOptions envia startAt e paused atuais quando alguém entra no raio depois.' : 'buildOptions sends current startAt and paused state when someone enters the radius later.'}</p></div></article>
        </div>
        <LuaCodeBlock>{"exports['pr_3dsound']:Pause('radio_praca')\nexports['pr_3dsound']:Resume('radio_praca')\nexports['pr_3dsound']:SetVolume('radio_praca', 0.5)\nexports['pr_3dsound']:SetDistance('radio_praca', 60.0)\nexports['pr_3dsound']:SetTimestamp('radio_praca', 25.0)\nexports['pr_3dsound']:SetLoop('radio_praca', true)\nexports['pr_3dsound']:Stop('radio_praca')"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="sound-client">
        <SectionTitle number="10" label="Client-side" title={pt ? 'Sons locais podem ser criados sem registrar um emitter compartilhado no servidor.' : 'Local sounds can be created without registering a shared server emitter.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="PlayLocal" title={pt ? 'Arquivo local 3D' : 'Local 3D file'}>{pt ? 'Cria um ID automático e usa a posição atual do player como origem.' : 'Creates an automatic ID and uses current player position as source.'}</Card>
          <Card eyebrow="PlayLocal2D" title={pt ? 'Arquivo local 2D' : 'Local 2D file'}>{pt ? 'Reprodução local sem espacialização.' : 'Local playback without spatialization.'}</Card>
          <Card eyebrow="PlayUrl2D" title={pt ? 'URL local 2D' : 'Local 2D URL'}>{pt ? 'URL tocada somente naquele client.' : 'URL played only on that client.'}</Card>
          <Card eyebrow="PlayUrl3D" title={pt ? 'URL local 3D' : 'Local 3D URL'}>{pt ? 'Cria o emitter na posição atual do player, sem persistência global.' : 'Creates the emitter at current player position without global persistence.'}</Card>
          <Card eyebrow="PlayAttached" title={pt ? 'Attach local' : 'Local attachment'}>{pt ? 'Segue um Network ID apenas naquele client.' : 'Follows a Network ID only on that client.'}</Card>
          <Card eyebrow="INSPECTION" title={pt ? 'Consulta de estado' : 'State inspection'}>{pt ? 'SoundExists, IsPlaying, IsPaused, GetInfo e GetAllSounds expõem o estado conhecido pelo client.' : 'SoundExists, IsPlaying, IsPaused, GetInfo and GetAllSounds expose client-known state.'}</Card>
        </div>
        <LuaCodeBlock>{"local id = exports['pr_3dsound']:PlayUrl3D(\n    'https://cdn.exemplo.com/efeito.ogg',\n    0.8,\n    35.0,\n    false\n)\n\nexports['pr_3dsound']:FadeOut(id, 1200)\nexports['pr_3dsound']:Stop(id)"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="sound-native">
        <SectionTitle number="11" label={pt ? 'Sons nativos do GTA' : 'Native GTA sounds'} title={pt ? 'Além da NUI, o resource fornece uma camada validada para sons nativos frontend, entity e coordenadas.' : 'Besides NUI audio, the resource provides a validated layer for native frontend, entity and coordinate sounds.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="FRONTEND" title="PlaySound">{pt ? 'Executa áudio frontend para um target ou conjunto de targets.' : 'Plays frontend audio for a target or target set.'}</Card>
          <Card eyebrow="ENTITY" title="PlaySoundFromEntity">{pt ? 'Resolve entity/netId e pode limitar distribuição aos players próximos.' : 'Resolves entity/netId and can limit delivery to nearby players.'}</Card>
          <Card eyebrow="COORDS" title="PlaySoundFromCoords">{pt ? 'Executa o som em coordenadas com range e checagem local opcional.' : 'Plays sound at coordinates with range and optional local range check.'}</Card>
          <Card eyebrow="AUDIO BANK" title={pt ? 'Banco de áudio' : 'Audio bank'}>{pt ? 'audioBank pode ser solicitado com timeout e liberado após a reprodução.' : 'audioBank can be requested with timeout and released after playback.'}</Card>
          <Card eyebrow="SEQUENCE" title={pt ? 'Sequência de nomes' : 'Name sequence'}>{pt ? 'audioName pode ser string ou lista, com intervalo opcional entre sons.' : 'audioName can be a string or list, with an optional interval between sounds.'}</Card>
          <Card eyebrow="OCCLUSION" title={pt ? 'Alternativa ocluída' : 'Occluded alternative'}>{pt ? 'É possível mutar quando obstruído ou trocar audioName/audioRef pela variante ocluída.' : 'Occluded playback can be muted or switched to an alternate audioName/audioRef.'}</Card>
        </div>
        <LuaCodeBlock>{"exports['pr_3dsound']:PlayNativeSoundFromCoords({\n    coords = vector3(215.0, -810.0, 30.0),\n    audioName = 'SELECT',\n    audioRef = 'HUD_FRONTEND_DEFAULT_SOUNDSET',\n    range = 25.0,\n    occlusion = true\n})"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="sound-security">
        <SectionTitle number="12" label={pt ? 'Segurança' : 'Security'} title={pt ? 'Controle compartilhado é server-side por padrão; eventos disparados por clients não recebem confiança automática.' : 'Shared control is server-side by default; events triggered by clients are not automatically trusted.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="SERVER EXPORTS" title={pt ? 'Caminho recomendado' : 'Recommended path'}>{pt ? 'Scripts que controlam áudio global devem chamar os exports server-side diretamente.' : 'Scripts controlling global audio should call server-side exports directly.'}</Card>
          <Card eyebrow="ACE" title="pr_3dsound.control">{pt ? 'Eventos client → server de controle exigem a ACE configurada quando o modo legado não está habilitado.' : 'Client → server control events require the configured ACE when legacy compatibility is disabled.'}</Card>
          <Card eyebrow="OWNERSHIP" title={pt ? 'Sem takeover' : 'No takeover'}>{pt ? 'Clients comuns não podem assumir o ID ou controlar um som criado por outro fluxo.' : 'Regular clients cannot take over an ID or control audio owned by another flow.'}</Card>
          <Card eyebrow="NATIVE REQUEST" title={pt ? 'Request limitado' : 'Limited request'}>{pt ? 'Pedidos compartilhados de native sound têm cooldown, raio máximo e precisam nascer próximos ao próprio solicitante.' : 'Shared native-sound requests have cooldown, maximum radius and must originate near the requesting player.'}</Card>
          <Card eyebrow="URL" title={pt ? 'Validação de URL' : 'URL validation'}>{pt ? 'Somente http/https dentro do limite de tamanho entra na API server-side.' : 'Only http/https URLs within length limits are accepted by the server-side API.'}</Card>
          <Card eyebrow="LOCAL PATH" title={pt ? 'Caminho local seguro' : 'Safe local path'}>{pt ? 'Paths locais rejeitam caminho absoluto e traversal com .. antes de criar o som.' : 'Local paths reject absolute paths and .. traversal before sound creation.'}</Card>
        </div>
        <div className="xt-note warning"><strong>{pt ? 'Compatibilidade de eventos client-side' : 'Client-event compatibility'}</strong><p>{pt ? 'O convar pr_3dsound_allow_client_events existe para legado, mas a configuração segura é mantê-lo desabilitado e usar exports server-side.' : 'The pr_3dsound_allow_client_events convar exists for legacy compatibility, but the secure configuration keeps it disabled and uses server-side exports.'}</p></div>
      </section>

      <section className="docs-section" id="sound-config">
        <SectionTitle number="13" label={pt ? 'Configuração de runtime' : 'Runtime configuration'} title={pt ? 'Os principais limites de streaming e segurança podem ser ajustados por convars sem alterar o código.' : 'Main streaming and security limits can be adjusted through convars without editing code.'} />
        <div className="crafting-field-grid">
          {[
            ['pr_3dsound_stream_interval', pt ? 'Intervalo do loop server-side; mínimo interno de 200 ms e padrão 1000 ms.' : 'Server streaming loop interval; internally at least 200 ms, default 1000 ms.'],
            ['pr_3dsound_stream_hysteresis', pt ? 'Margem adicional para stream-out de listeners já ativos; padrão 8.0.' : 'Additional stream-out margin for existing listeners; default 8.0.'],
            ['pr_3dsound_max_radius', pt ? 'Raio máximo aceito por emitters server-side; padrão 1000.0.' : 'Maximum server-side emitter radius; default 1000.0.'],
            ['pr_3dsound_entity_timeout', pt ? 'Timeout de entity attached ausente; mínimo 2000 ms e padrão 10000 ms.' : 'Missing attached-entity timeout; minimum 2000 ms, default 10000 ms.'],
            ['pr_3dsound_entity_grace', pt ? 'Grace curta antes de remover listener quando netId some; mínimo 500 ms e padrão 2500 ms.' : 'Short grace before streaming out when netId disappears; minimum 500 ms, default 2500 ms.'],
            ['pr_3dsound_allow_client_events', pt ? 'Compatibilidade legada; padrão 0.' : 'Legacy compatibility; default 0.'],
            ['pr_3dsound_client_ace', pt ? 'Nome da ACE usada para permitir controle client-side; padrão pr_3dsound.control.' : 'ACE name used to allow client-side control; default pr_3dsound.control.'],
            ['pr_3dsound_debug', pt ? 'Ativa logs de debug no client quando definido como 1.' : 'Enables client debug logging when set to 1.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="sound-api">
        <SectionTitle number="14" label="API / Exports" title={pt ? 'A API é dividida entre emitters compartilhados, áudio local e sons nativos.' : 'The API is divided between shared emitters, local audio and native sounds.'} />

        <h3 className="xt-subheading">{pt ? 'Exports server-side — emitters' : 'Server-side emitter exports'}</h3>
        <div className="crafting-api-list">
          {[
            ['Play(coords, soundName, volume, radius, uniqueId, resourceName, loop)', pt ? 'Arquivo local 3D persistente.' : 'Persistent local 3D file.'],
            ['PlayUrl(source, name, url, volume, loop)', pt ? 'URL 2D global ou destinada a um player.' : '2D URL globally or for a specific player.'],
            ['PlayUrlPos(source, name, url, volume, coords, radius, loop, routingBucket)', pt ? 'URL 3D persistente em coordenadas.' : 'Persistent 3D URL at coordinates.'],
            ['PlayUrlAttached(source, name, url, volume, entityNetId, radius, loop)', pt ? 'URL 3D persistente seguindo uma entity.' : 'Persistent 3D URL following an entity.'],
            ['AttachToEntity(uniqueId, netId, offset)', pt ? 'Anexa um emitter espacial existente.' : 'Attaches an existing spatial emitter.'],
            ['DetachEntity(uniqueId)', pt ? 'Remove attach preservando a última posição.' : 'Removes attachment while preserving last position.'],
            ['Pause(uniqueId)', pt ? 'Pausa mantendo offset autoritativo.' : 'Pauses while preserving authoritative offset.'],
            ['Resume(uniqueId)', pt ? 'Retoma do offset sincronizado.' : 'Resumes from synchronized offset.'],
            ['Stop(uniqueId)', pt ? 'Encerra um emitter.' : 'Stops one emitter.'],
            ['StopAll()', pt ? 'Encerra todos os emitters server-side.' : 'Stops all server-side emitters.'],
            ['UpdateCoords(uniqueId, coords)', pt ? 'Move um emitter e remove attach atual.' : 'Moves an emitter and clears current attachment.'],
            ['SetVolume(uniqueId, volume)', pt ? 'Atualiza volume central e listeners.' : 'Updates central volume and listeners.'],
            ['SetVolumeMax(uniqueId, volume)', pt ? 'Atualiza o teto de volume nos listeners.' : 'Updates listener maximum volume.'],
            ['SetDistance(uniqueId, distance)', pt ? 'Atualiza o raio do emitter.' : 'Updates emitter radius.'],
            ['SetLoop(uniqueId, loop)', pt ? 'Liga/desliga loop.' : 'Enables/disables looping.'],
            ['SetTimestamp(uniqueId, seconds)', pt ? 'Move a timeline do som.' : 'Moves sound timeline.'],
            ['FadeIn(uniqueId, duration, targetVolume)', pt ? 'Fade até o volume alvo.' : 'Fades toward target volume.'],
            ['FadeOut(uniqueId, duration)', pt ? 'Fade para silêncio.' : 'Fades to silence.'],
            ['SoundExists(uniqueId)', pt ? 'Consulta existência do emitter.' : 'Checks emitter existence.'],
            ['GetAllSounds()', pt ? 'Retorna snapshot do estado server-side.' : 'Returns server-side state snapshot.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Exports client-side — áudio local' : 'Client-side local-audio exports'}</h3>
        <div className="crafting-api-list">
          {[
            ['SoundExists(uniqueId)', pt ? 'Verifica som local/conhecido.' : 'Checks known/local sound.'],
            ['IsPlaying(uniqueId)', pt ? 'Informa se está tocando.' : 'Reports playing state.'],
            ['IsPaused(uniqueId)', pt ? 'Informa se está pausado.' : 'Reports paused state.'],
            ['GetInfo(uniqueId)', pt ? 'Retorna dados do som.' : 'Returns sound data.'],
            ['GetAllSounds()', pt ? 'Retorna todos os sons conhecidos no client.' : 'Returns all client-known sounds.'],
            ['PlayLocal(file, volume, radius, loop)', pt ? 'Arquivo local 3D.' : 'Local 3D file.'],
            ['PlayLocal2D(file, volume, loop)', pt ? 'Arquivo local 2D.' : 'Local 2D file.'],
            ['PlayUrl2D(url, volume, loop)', pt ? 'URL 2D local.' : 'Local 2D URL.'],
            ['PlayUrl3D(url, volume, radius, loop)', pt ? 'URL 3D local na posição do player.' : 'Local 3D URL at player position.'],
            ['PlayAttached(url, volume, netId, radius, loop)', pt ? 'URL local attached a Network ID.' : 'Local URL attached to Network ID.'],
            ['Stop / Pause / Resume', pt ? 'Controles básicos pelo uniqueId.' : 'Basic controls by uniqueId.'],
            ['SetVolume / SetDistance', pt ? 'Volume e raio locais.' : 'Local volume and radius.'],
            ['FadeIn / FadeOut', pt ? 'Fades locais.' : 'Local fades.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Exports de som nativo' : 'Native-sound exports'}</h3>
        <div className="crafting-api-list">
          {[
            ['PlaySound(data)', pt ? 'Som frontend local/server target.' : 'Frontend local/server-target sound.'],
            ['PlaySoundFromEntity(data)', pt ? 'Som nativo em entity.' : 'Native sound from entity.'],
            ['PlaySoundFromCoords(data)', pt ? 'Som nativo em coordenadas.' : 'Native sound from coordinates.'],
            ['PlayNativeSound*', pt ? 'Aliases explícitos das mesmas APIs nativas.' : 'Explicit aliases for the native APIs.'],
            ['Play*ForAll(data)', pt ? 'Variantes server-side para todos/players próximos conforme o tipo.' : 'Server variants for all/nearby players depending on type.'],
            ['PlaySharedNativeSoundFromEntity(data)', pt ? 'Client solicita distribuição compartilhada validada pelo servidor.' : 'Client requests server-validated shared entity sound.'],
            ['PlaySharedNativeSoundFromCoords(data)', pt ? 'Client solicita distribuição compartilhada em coordenadas.' : 'Client requests shared coordinate sound with server validation.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="crafting-source-note">
        <span>{pt ? 'Revisão do código' : 'Source review'}</span>
        <h2>{pt ? 'Documentação construída a partir da implementação atual do pr_3dsound v4.0.0.' : 'Documentation built from the current pr_3dsound v4.0.0 implementation.'}</h2>
        <p>{pt ? 'Foram revisados o estado autoritativo server-side, streaming por proximidade, HRTF, pipeline de URL direta, attach por Network ID, sincronização temporal, oclusão, segurança, NUI, client exports, server exports e a camada de sons nativos.' : 'The server-authoritative state, proximity streaming, HRTF, direct-URL pipeline, Network ID attachment, time synchronization, occlusion, security, NUI, client exports, server exports and native-sound layer were reviewed.'}</p>
        <div className="crafting-hero-actions">
          <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">Framework-Forge/pr_3dsound</a>
        </div>
      </section>
    </div>
  );
}
