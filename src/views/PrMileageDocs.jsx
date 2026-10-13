import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Pierremoraes-ofc/pr_mileage';

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

export default function PrMileageDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs mileage-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Scripts • Vehicle Simulation</div>
          <h1>PR <span>Mileage</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Simulador veicular de odômetro e desgaste mecânico. O PR Mileage mede a distância realmente percorrida, persiste a quilometragem, replica o valor por State Bag e transforma cada peça instalada em um componente com vida útil própria, histórico de instalação e sintomas progressivos que afetam motor, freios, suspensão, pneus, direção, tração, luzes e comportamento físico do veículo.'
              : 'A vehicle odometer and mechanical-wear simulator. PR Mileage measures actual traveled distance, persists mileage, replicates it through a State Bag and turns every installed part into a component with its own service life, installation history and progressive symptoms that affect engine, brakes, suspension, tyres, steering, traction, lights and vehicle physics.'}
          </p>
          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório oficial' : 'Official repository'}</a>
            <a className="docs-secondary-button" href="#mileage-create-part">{pt ? 'Criar uma peça' : 'Create a part'}</a>
            <a className="docs-secondary-button" href="#mileage-dealership">{pt ? 'Integração concessionária' : 'Dealership integration'}</a>
          </div>
          <div className="legacy-meta">
            <span>v2.3.2</span><span>Odometer</span><span>State Bags</span><span>Wear Simulator</span><span>Vehicle Parts</span><span>OBD</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>KM</span><strong>PR MILEAGE</strong></div>
          <Info label={pt ? 'Odômetro' : 'Odometer'}>{pt ? 'Distância física real' : 'Real traveled distance'}</Info>
          <Info label={pt ? 'Sincronização' : 'Synchronization'}>State Bag: vehicleMileage</Info>
          <Info label={pt ? 'Peças atuais' : 'Current parts'}>62</Info>
          <Info label={pt ? 'Efeitos de desgaste' : 'Wear effects'}>16</Info>
          <Info label={pt ? 'Persistência' : 'Persistence'}>{pt ? 'DB + State Bags + RAM rua' : 'DB + State Bags + street RAM'}</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#mileage-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#mileage-odometer">{pt ? 'Odômetro' : 'Odometer'}</a>
        <a href="#mileage-storage">{pt ? 'Persistência' : 'Persistence'}</a>
        <a href="#mileage-install">{pt ? 'Instalação' : 'Installation'}</a>
        <a href="#mileage-wear">{pt ? 'Cálculo de desgaste' : 'Wear calculation'}</a>
        <a href="#mileage-parts">{pt ? 'Sistema de peças' : 'Parts system'}</a>
        <a href="#mileage-create-part">{pt ? 'Criar peças' : 'Creating parts'}</a>
        <a href="#mileage-effects">{pt ? 'Efeitos disponíveis' : 'Available effects'}</a>
        <a href="#mileage-install-parts">{pt ? 'Instalar peças' : 'Installing parts'}</a>
        <a href="#mileage-dealership">{pt ? 'Concessionária' : 'Dealership'}</a>
        <a href="#mileage-factory-packages">{pt ? 'Pacotes de fábrica' : 'Factory packages'}</a>
        <a href="#mileage-external">{pt ? 'Peças externas' : 'External parts'}</a>
        <a href="#mileage-obd">OBD / Scanner</a>
        <a href="#mileage-statebags">State Bags</a>
        <a href="#mileage-handling">{pt ? 'Handling e sintomas' : 'Handling & symptoms'}</a>
        <a href="#mileage-config">{pt ? 'Configuração' : 'Configuration'}</a>
        <a href="#mileage-api-odometer">API Odometer</a>
        <a href="#mileage-api-parts">API Parts</a>
        <a href="#mileage-commands">{pt ? 'Comandos e diagnóstico' : 'Commands & diagnostics'}</a>
        <a href="#mileage-performance">{pt ? 'Performance e regras' : 'Performance & rules'}</a>
      </nav>

      <section className="docs-section" id="mileage-overview">
        <SectionTitle number="01" label={pt ? 'Conceito' : 'Concept'} title={pt ? 'O carro passa a ter história mecânica: quilometragem, peças, manutenção e sintomas sobrevivem ao gameplay.' : 'The vehicle gains mechanical history: mileage, parts, maintenance and symptoms survive gameplay.'} />
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Rastrear' : 'Track'}</strong><p>{pt ? 'A cada segundo, somente o motorista acumula a distância real percorrida com o veículo apoiado nas rodas.' : 'Every second, only the driver accumulates actual traveled distance while the vehicle is on its wheels.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Replicar' : 'Replicate'}</strong><p>{pt ? 'O valor arredondado em 0,1 km é publicado na State Bag vehicleMileage.' : 'The value rounded to 0.1 km is published to the vehicleMileage State Bag.'}</p></div>
          <div><span>03</span><strong>{pt ? 'Persistir' : 'Persist'}</strong><p>{pt ? 'Veículos registrados salvam no banco; veículos de rua mantêm histórico em RAM durante a sessão.' : 'Registered vehicles save to the database; street vehicles keep history in server RAM for the session.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Desgastar' : 'Wear'}</strong><p>{pt ? 'Cada peça calcula quantos quilômetros percorreu desde installed_km e ativa sintomas conforme sua vida restante.' : 'Every part calculates distance traveled since installed_km and activates symptoms according to remaining life.'}</p></div>
        </div>

        <div className="crafting-feature-grid">
          <Card eyebrow="SIMULATION" title={pt ? 'Desgaste por uso real' : 'Usage-driven wear'}>{pt ? 'A peça não envelhece por tempo online: ela envelhece pela quilometragem do veículo desde sua instalação.' : 'A part does not age by online time; it ages from vehicle mileage accumulated since installation.'}</Card>
          <Card eyebrow="HISTORY" title={pt ? 'Histórico por placa' : 'Plate-based history'}>{pt ? 'O odômetro e a tabela vehicle_parts associam manutenção e vida útil à placa persistente.' : 'Odometer and vehicle_parts associate service history and component life with the persistent plate.'}</Card>
          <Card eyebrow="RANDOM LIFE" title={pt ? 'Vida útil não idêntica' : 'Non-identical service life'}>{pt ? 'durability é sorteada entre min/max quando a peça é instalada, evitando que toda frota quebre no mesmo número exato.' : 'durability is rolled between min/max on installation so the entire fleet does not fail at exactly the same mileage.'}</Card>
          <Card eyebrow="PROGRESSIVE" title={pt ? 'Falhas progressivas' : 'Progressive failures'}>{pt ? 'Uma peça pode ter vários sintomas e níveis de severidade, indo de sinais sutis até falha mecânica crítica.' : 'A part can define multiple symptoms and severity levels, from subtle warnings to critical mechanical failure.'}</Card>
          <Card eyebrow="PHYSICS" title={pt ? 'Efeito no comportamento' : 'Behavioral effects'}>{pt ? 'O sistema pode modificar handling, direção, força, RPM, saúde do motor e dirigibilidade, além de efeitos visuais.' : 'The system can modify handling, steering, force, RPM, engine health and drivability in addition to visual feedback.'}</Card>
          <Card eyebrow="DIAGNOSTICS" title={pt ? 'Diagnóstico consultável' : 'Queryable diagnostics'}>{pt ? 'Exports expõem porcentagem, status, KM rodado, KM restante, stage, data e instalador de cada peça.' : 'Exports expose percentage, status, driven KM, remaining KM, stage, install date and installer for each part.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="mileage-odometer">
        <SectionTitle number="02" label={pt ? 'Odômetro' : 'Odometer'} title={pt ? 'O valor não é estimado pela velocidade: ele é calculado pela distância entre posições sucessivas do veículo.' : 'The value is not estimated from speed: it is calculated from distance between successive vehicle positions.'} />
        <div className="crafting-step-list">
          <article><span>1s</span><div><strong>{pt ? 'Tick do motorista' : 'Driver tick'}</strong><p>{pt ? 'O loop roda uma vez por segundo e para se o jogador não estiver no banco do motorista ou a classe estiver ignorada.' : 'The loop runs once per second and stops when the player is not the driver or the class is ignored.'}</p></div></article>
          <article><span>XYZ</span><div><strong>{pt ? 'Distância física' : 'Physical distance'}</strong><p>{pt ? 'A diferença vetorial entre lastLocation e GetEntityCoords é convertida de metros para quilômetros.' : 'The vector difference between lastLocation and GetEntityCoords is converted from meters to kilometers.'}</p></div></article>
          <article><span>0.1</span><div><strong>{pt ? 'Precisão replicada' : 'Replicated precision'}</strong><p>{pt ? 'A State Bag é atualizada quando o odômetro arredondado para uma casa decimal muda.' : 'The State Bag updates when mileage rounded to one decimal place changes.'}</p></div></article>
          <article><span>1.0</span><div><strong>{pt ? 'Threshold de save' : 'Save threshold'}</strong><p>{pt ? 'Config.SaveThreshold define quantos KM precisam mudar antes de um novo save server-side.' : 'Config.SaveThreshold defines how many KM must change before another server-side save.'}</p></div></article>
        </div>

        <div className="xt-note"><strong>{pt ? 'Condições físicas' : 'Physical conditions'}</strong><p>{pt ? 'Distância só é somada quando IsVehicleOnAllWheels é verdadeiro e o veículo não está dentro d’água. Isso reduz falsos incrementos em situações incompatíveis com rodagem normal.' : 'Distance only accumulates when IsVehicleOnAllWheels is true and the vehicle is not in water. This reduces false increments in conditions incompatible with normal road use.'}</p></div>

        <h3 className="xt-subheading">{pt ? 'Veículo novo x veículo de rua' : 'New vehicle vs street vehicle'}</h3>
        <div className="crafting-feature-grid">
          <Card eyebrow="FRESH" title={pt ? 'Veículo zero KM' : 'Zero-KM vehicle'}>{pt ? 'markFresh/Evento pr_mileage:fresh marca a entity; na primeira leitura o odômetro é zerado e persistido como veículo registrado.' : 'markFresh/pr_mileage:fresh marks the entity; on first read mileage is zeroed and persisted as a registered vehicle.'}</Card>
          <Card eyebrow="STREET" title={pt ? 'Quilometragem coerente de rua' : 'Believable street mileage'}>{pt ? 'Uma placa ainda desconhecida recebe quilometragem inicial aleatória de acordo com a classe do veículo.' : 'A previously unknown street plate receives randomized initial mileage according to vehicle class.'}</Card>
          <Card eyebrow="LATEST WINS" title={pt ? 'State Bag mais recente' : 'Newest State Bag wins'}>{pt ? 'Ao entrar em um veículo existente, o client prefere a State Bag se ela estiver à frente do valor persistido, evitando regressão após troca de motorista.' : 'When entering an existing vehicle, client prefers a newer State Bag value over persistence, preventing regression after driver changes.'}</Card>
        </div>

        <LuaCodeBlock>{"-- HUD/odômetro: leitura client-side\nlocal km = exports['pr_mileage']:getMileage()\nlocal unit = exports['pr_mileage']:getUnit()\n\n-- Leitura direta da entity sincronizada\nlocal vehicle = GetVehiclePedIsIn(PlayerPedId(), false)\nlocal rawKm = Entity(vehicle).state.vehicleMileage\n\nprint(('Odômetro: %.1f %s'):format(km or 0, unit))"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="mileage-storage">
        <SectionTitle number="03" label={pt ? 'Persistência' : 'Persistence'} title={pt ? 'O sistema separa odômetro persistente, State Bag de runtime e peças instaladas.' : 'The system separates persistent mileage, runtime State Bag and installed-part history.'} />
        <div className="crafting-db-grid">
          <article><code>vehicles.mileage</code><strong>{pt ? 'Odômetro persistente' : 'Persistent odometer'}</strong><p>{pt ? 'Coluna adicionada à tabela de veículos registrada pelo runtime.' : 'Column added to the registered vehicle table used by the runtime.'}</p></article>
          <article><code>vehicleMileage</code><strong>State Bag</strong><p>{pt ? 'Valor atual replicado na entity para HUDs, peças e outros recursos.' : 'Current value replicated on the entity for HUDs, parts and other resources.'}</p></article>
          <article><code>worldVehicles</code><strong>{pt ? 'Veículos de rua' : 'Street vehicles'}</strong><p>{pt ? 'Tabela server-side em memória para placas que não pertencem à base persistente.' : 'Server memory table for plates that do not belong to persistent storage.'}</p></article>
          <article><code>vehicle_parts</code><strong>{pt ? 'Histórico de componentes' : 'Component history'}</strong><p>{pt ? 'Uma linha por plate + part com stage, KM de instalação, durabilidade, instalador e timestamps.' : 'One row per plate + part with stage, installation KM, durability, installer and timestamps.'}</p></article>
        </div>

        <div className="docs-prose">
          <p>{pt ? 'O save de mileage usa proteção contra regressão: um valor menor não sobrescreve um odômetro maior. Isso é importante em OneSync porque diferentes clients podem observar a mesma entity em momentos diferentes.' : 'Mileage saves use anti-regression protection: a smaller value does not overwrite a larger odometer. This matters under OneSync because different clients may observe the same entity at different moments.'}</p>
          <p>{pt ? 'A tabela de peças não precisa atualizar current_km continuamente. current_km é derivado de vehicle_km - installed_km. Portanto, o histórico de instalação permanece pequeno e o desgaste pode ser reconstruído a qualquer momento.' : 'The parts table does not need to continuously update current_km. current_km is derived from vehicle_km - installed_km. Installation history stays compact and wear can be reconstructed at any time.'}</p>
        </div>
      </section>

      <section className="docs-section" id="mileage-install">
        <SectionTitle number="04" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'A inicialização prepara a coluna de quilometragem e a tabela de peças automaticamente quando configurado.' : 'Startup prepares the mileage column and parts table automatically when configured.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>server.cfg</h3>
            <LuaCodeBlock>{"ensure pr_mileage"}</LuaCodeBlock>
          </div>
          <div>
            <h3>Config.AutoRunSQL</h3>
            <p>{pt ? 'Quando true, o resource verifica o schema, cria a coluna mileage ausente, cria vehicle_parts e garante índices/colunas necessários.' : 'When true, the resource inspects schema, creates a missing mileage column, creates vehicle_parts and ensures required columns/indexes.'}</p>
          </div>
        </div>

        <h3 className="xt-subheading">vehicle_parts</h3>
        <div className="crafting-field-grid">
          {[
            ['plate', pt ? 'Placa sanitizada; parte da chave única.' : 'Sanitized plate; part of unique key.'],
            ['part', pt ? 'Nome em Parts.Items; parte da chave única.' : 'Name in Parts.Items; part of unique key.'],
            ['stage', pt ? 'Nível/estágio instalado.' : 'Installed level/stage.'],
            ['installed_km', pt ? 'Odômetro inteiro no momento da instalação.' : 'Integer odometer at installation time.'],
            ['durability', pt ? 'Vida útil total sorteada em KM.' : 'Total rolled service life in KM.'],
            ['citizen_id', pt ? 'Quem instalou; pode ser NULL para fábrica/sistema.' : 'Installer identifier; may be NULL for factory/system.'],
            ['installed_at', pt ? 'Data da instalação.' : 'Installation date.'],
            ['updated_at', pt ? 'Última atualização do registro.' : 'Last record update.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="mileage-wear">
        <SectionTitle number="05" label={pt ? 'Matemática de desgaste' : 'Wear mathematics'} title={pt ? 'A vida da peça é calculada a partir do odômetro do veículo, não por timers ou contadores separados.' : 'Part life is calculated from vehicle odometer, not separate timers or counters.'} />
        <LuaCodeBlock>{"current_km  = floor(vehicle_km) - floor(installed_km)\nremaining_km = max(durability - current_km, 0)\nremaining_ratio = remaining_km / durability\npercent = remaining_ratio * 100"}</LuaCodeBlock>

        <div className="crafting-feature-grid">
          <Card eyebrow="INTEGER KM" title={pt ? 'Desgaste por KM inteiro' : 'Whole-KM wear'}>{pt ? 'Frações do odômetro continuam visíveis no HUD, mas o desgaste das peças usa math.floor para evitar falsos gatilhos por casas decimais.' : 'Odometer fractions remain visible on HUD, but component wear uses math.floor to avoid false symptom triggers from decimals.'}</Card>
          <Card eyebrow="GOOD" title="100%">{pt ? 'Com a configuração atual, o label Boa corresponde à peça completamente nova.' : 'With current settings, the Good label corresponds to a completely fresh part.'}</Card>
          <Card eyebrow="FAIR" title="30–99.9%">{pt ? 'A peça é classificada como Razoável e ainda não recebe sintomas físicos no comportamento atual.' : 'The part is classified Fair and currently receives no physical symptoms.'}</Card>
          <Card eyebrow="BAD" title="< 30%">{pt ? 'A partir daqui o motor de sintomas pode aplicar o nível mais severo compatível com a porcentagem restante.' : 'From here the symptom engine may apply the most severe compatible level for remaining percentage.'}</Card>
        </div>

        <div className="xt-note warning"><strong>{pt ? 'Threshold de sintomas' : 'Symptom threshold'}</strong><p>{pt ? 'Mesmo que uma definição contenha um sintoma em 0.40, o motor atual só ativa efeitos quando symptom.threshold < 0.30. Isso mantém as faixas Boa/Razoável sem penalidade física e concentra os defeitos abaixo de 30%.' : 'Even if a definition contains a 0.40 symptom, current engine only activates effects when symptom.threshold < 0.30. This keeps Good/Fair ranges free of physical penalties and concentrates failures below 30%.'}</p></div>
      </section>

      <section className="docs-section" id="mileage-parts">
        <SectionTitle number="06" label={pt ? 'Catálogo de peças' : 'Parts catalog'} title={pt ? 'A configuração atual possui dezenas de componentes mecânicos, sensores, pneus, freios e peças de performance.' : 'Current configuration contains dozens of mechanical components, sensors, tyres, brakes and performance parts.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="SENSORS" title={pt ? 'Sensores eletrônicos' : 'Electronic sensors'}>{pt ? 'MAF, MAP, IAT, TPS, APP, CKP, CMP, detonação, temperatura, pressão, O2, EGT, EVAP, EGR e outros.' : 'MAF, MAP, IAT, TPS, APP, CKP, CMP, knock, temperature, pressure, O2, EGT, EVAP, EGR and more.'}</Card>
          <Card eyebrow="ENGINE" title={pt ? 'Motor e manutenção' : 'Engine & maintenance'}>{pt ? 'Óleo, filtro de óleo, filtro de ar, filtro de combustível, velas, cabos, bobinas, correias, tensores e bombas.' : 'Oil, oil filter, air filter, fuel filter, spark plugs, wires, coils, belts, tensioners and pumps.'}</Card>
          <Card eyebrow="COOLING" title={pt ? 'Arrefecimento' : 'Cooling'}>{pt ? 'Bomba d’água, mangueiras e componentes associados podem gerar vapor, perda de motor e sintomas progressivos.' : 'Water pump, hoses and related components can generate steam, engine degradation and progressive symptoms.'}</Card>
          <Card eyebrow="SUSPENSION" title={pt ? 'Suspensão' : 'Suspension'}>{pt ? 'Amortecedor, mola, bucha, bandeja, pivô, estabilizadora e bieleta podem alterar handling e estabilidade.' : 'Damper, spring, bushing, control arm, ball joint, sway bar and links can alter handling and stability.'}</Card>
          <Card eyebrow="TYRES" title={pt ? 'Oito perfis de pneu' : 'Eight tyre profiles'}>{pt ? 'Common, street, sport, race, semislick, slick, drift e touring podem ter durabilidade e falhas específicas.' : 'Common, street, sport, race, semislick, slick, drift and touring can define distinct life and failure behavior.'}</Card>
          <Card eyebrow="BRAKES" title={pt ? 'Freios e consumíveis' : 'Brakes & consumables'}>{pt ? 'Stages de freio, disco, fluido e pastilha permitem degradar fBrakeForce e simular perda de eficiência.' : 'Brake stages, discs, fluid and pads can degrade fBrakeForce and simulate reduced braking.'}</Card>
        </div>

        <div className="docs-prose">
          <p>{pt ? 'Parts.VehicleBones centraliza bones comuns do veículo: engine, transmission, bonnet, boot, rodas, suspensão, portas, bancos, faróis, escape, vidros, tanque e volante. Use os aliases dessa tabela ao criar partículas para evitar strings espalhadas nas definições.' : 'Parts.VehicleBones centralizes common vehicle bones: engine, transmission, bonnet, boot, wheels, suspension, doors, seats, lights, exhaust, windows, tank and steering wheel. Use these aliases when defining particles to avoid scattered raw strings.'}</p>
        </div>
      </section>

      <section className="docs-section" id="mileage-create-part">
        <SectionTitle number="07" label={pt ? 'Criando novas peças' : 'Creating new parts'} title={pt ? 'Uma nova peça precisa apenas de uma chave única, vida útil e uma lista de sintomas. O motor de desgaste cuida do resto.' : 'A new part only needs a unique key, service life and symptom list. The wear engine handles the rest.'} />

        <h3 className="xt-subheading">{pt ? 'Estrutura mínima' : 'Minimal structure'}</h3>
        <LuaCodeBlock>{"Parts.Items['filtro_ar_premium'] = {\n    labelItem = 'Filtro de Ar Premium',\n    durability = { min = 18000, max = 26000 },\n    symptoms = {}\n}"}</LuaCodeBlock>

        <div className="docs-prose">
          <p>{pt ? 'durability.min/max é sorteado somente quando installPart registra a peça. Dois filtros idênticos podem, portanto, ter vidas úteis diferentes. stage não fica na definição: ele é informado na instalação e salvo em vehicle_parts.' : 'durability.min/max is rolled only when installPart registers the part. Two identical filters may therefore have different service lives. stage is not stored in the definition: it is supplied during installation and persisted in vehicle_parts.'}</p>
        </div>

        <h3 className="xt-subheading">{pt ? 'Exemplo 1 — pastilha de freio com degradação progressiva' : 'Example 1 — brake pad with progressive degradation'}</h3>
        <LuaCodeBlock>{"Parts.Items['pastilha_ceramica_custom'] = {\n    labelItem = 'Pastilha Cerâmica Custom',\n    durability = { min = 28000, max = 42000 },\n    symptoms = {\n        {\n            threshold = 0.25,\n            label = 'Frenagem perdendo eficiência',\n            effects = {\n                { type = 'handling_float', params = {\n                    field = 'fBrakeForce', value = 0.52, speed = 10\n                } },\n                { type = 'shake_cam', params = {\n                    type = 'ROAD_VIBRATION_SHAKE', intensity = 0.04, speed = 40\n                } },\n            },\n        },\n        {\n            threshold = 0.08,\n            label = 'Pastilha no limite',\n            effects = {\n                { type = 'handling_float', params = {\n                    field = 'fBrakeForce', value = 0.30, speed = 5\n                } },\n                { type = 'shake_cam', params = {\n                    type = 'ROAD_VIBRATION_SHAKE', intensity = 0.12, speed = 20\n                } },\n            },\n        },\n    },\n}"}</LuaCodeBlock>

        <h3 className="xt-subheading">{pt ? 'Exemplo 2 — mangueira de arrefecimento com vapor e falha de motor' : 'Example 2 — coolant hose with steam and engine failure'}</h3>
        <LuaCodeBlock>{"Parts.Items['mangueira_coolant_custom'] = {\n    labelItem = 'Mangueira de Arrefecimento Reforçada',\n    durability = { min = 45000, max = 70000 },\n    symptoms = {\n        {\n            threshold = 0.22,\n            label = 'Pequeno vazamento de arrefecimento',\n            effects = {\n                { type = 'particle', params = {\n                    dict = 'core',\n                    name = 'ent_sht_steam',\n                    bone = Parts.VehicleBones.motor,\n                    scale = 0.35\n                } },\n                { type = 'engine_health', params = { value = 720 } },\n            },\n        },\n        {\n            threshold = 0.05,\n            label = 'Mangueira rompida',\n            effects = {\n                { type = 'particle', params = {\n                    dict = 'core',\n                    name = 'ent_amb_smoke_engine',\n                    bone = Parts.VehicleBones.motor,\n                    scale = 0.75\n                } },\n                { type = 'engine_health', params = { value = 250 } },\n                { type = 'stall', params = { chance = 0.35 } },\n            },\n        },\n    },\n}"}</LuaCodeBlock>

        <h3 className="xt-subheading">{pt ? 'Exemplo 3 — pneu de rua com perda de estabilidade e estouro' : 'Example 3 — street tyre with instability and blowout'}</h3>
        <LuaCodeBlock>{"Parts.Items['tire_endurance_custom'] = {\n    labelItem = 'Pneu Endurance',\n    durability = { min = 55000, max = 80000 },\n    symptoms = {\n        {\n            threshold = 0.20,\n            label = 'Aderência reduzida',\n            effects = {\n                { type = 'handling_float', params = {\n                    field = 'fTractionLossMult', value = 1.30, speed = 30\n                } },\n                { type = 'lateral_force', params = { value = 0.08, speed = 60 } },\n            },\n        },\n        {\n            threshold = 0.03,\n            label = 'Carcaça comprometida',\n            effects = {\n                { type = 'tyre_burst', params = { wheel = nil } },\n                { type = 'lateral_force', params = { value = 0.20, speed = 25 } },\n            },\n        },\n    },\n}"}</LuaCodeBlock>

        <div className="xt-note"><strong>{pt ? 'Regra para o item do inventário' : 'Inventory-item rule'}</strong><p>{pt ? 'Parts.Items define a simulação mecânica, não o item de inventário. Se uma oficina/crafting entregar a peça como item, use a mesma chave — por exemplo tire_endurance_custom — no catálogo do inventário e, após o consumo/instalação, chame installPart.' : 'Parts.Items defines mechanical simulation, not inventory item metadata. If a workshop/crafting system provides the part as an item, use the same key — for example tire_endurance_custom — in its item catalog and call installPart after consumption/installation.'}</p></div>
      </section>

      <section className="docs-section" id="mileage-effects">
        <SectionTitle number="08" label={pt ? 'Motor de sintomas' : 'Symptom engine'} title={pt ? 'Dezesseis appliers permitem construir falhas visuais, mecânicas e físicas sem alterar o core.' : 'Sixteen appliers let you build visual, mechanical and physical failures without modifying the core.'} />
        <div className="crafting-api-list">
          {[
            ['particle', pt ? 'Partícula loopada em bone do veículo; suporta dict, name, bone, scale e offsets.' : 'Looped particle attached to a vehicle bone; supports dict, name, bone, scale and offsets.'],
            ['shake_cam', pt ? 'Vibração de câmera com tipo, intensidade e velocidade mínima.' : 'Camera shake with type, intensity and minimum speed.'],
            ['apply_force', pt ? 'Trancos/força física no veículo; pode usar intensidade aleatória e velocidade mínima.' : 'Physical jolts/force on vehicle; can use random intensity and minimum speed.'],
            ['engine_health', pt ? 'Força a saúde do motor para o valor definido.' : 'Forces engine health to the defined value.'],
            ['undriveable', pt ? 'Marca o veículo como não dirigível.' : 'Marks vehicle undriveable.'],
            ['engine_on', pt ? 'Liga ou desliga o motor.' : 'Turns engine on or off.'],
            ['stall', pt ? 'Chance por tick de o motor morrer e tentar religar após pequeno intervalo.' : 'Per-tick chance for engine to stall and attempt restart after a short interval.'],
            ['tyre_burst', pt ? 'Estoura roda específica ou aleatória.' : 'Bursts a specific or random tyre.'],
            ['vehicle_lights', pt ? 'Muda/pisca estado de faróis.' : 'Changes/flashes vehicle lights.'],
            ['indicator', pt ? 'Aciona setas esquerda/direita.' : 'Controls left/right indicators.'],
            ['rpm_override', pt ? 'Sobrescreve RPM por integração configurável.' : 'Overrides RPM through configurable integration.'],
            ['steering_scale', pt ? 'Limita escala/ângulo da direção.' : 'Limits steering scale/angle.'],
            ['lateral_force', pt ? 'Aplica força lateral para simular alinhamento/suspensão defeituosa.' : 'Applies lateral force to simulate bad alignment/suspension.'],
            ['handling_float', pt ? 'Altera campo float do CHandlingData, como freio, tração ou suspensão.' : 'Changes a CHandlingData float such as brake, traction or suspension.'],
            ['power_mult', pt ? 'Multiplicador de potência; toggle global atual vem desabilitado por compatibilidade.' : 'Power multiplier; current global toggle is disabled for compatibility.'],
            ['torque_mult', pt ? 'Multiplicador de torque/inércia; toggle global atual vem desabilitado por compatibilidade.' : 'Torque/inertia multiplier; current global toggle is disabled for compatibility.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="mileage-install-parts">
        <SectionTitle number="09" label={pt ? 'Instalação e manutenção' : 'Installation & maintenance'} title={pt ? 'Instalar uma peça grava o odômetro daquele instante e sorteia sua vida útil; substituir a peça reinicia seu ciclo.' : 'Installing a part records current odometer and rolls its service life; replacing the part starts a new cycle.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Server-side — recomendado para oficina' : 'Server-side — recommended for workshops'}</h3>
            <LuaCodeBlock>{"local plate = 'ABC1234'\nlocal vehicleKm = exports['pr_mileage']:getMileageByPlate(plate) or 0\n\nlocal ok = exports['pr_mileage']:installPart(\n    plate,\n    'pastilha_ceramica_custom',\n    2,          -- stage\n    vehicleKm,\n    installerId -- ou nil para sistema/NPC\n)"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Client-side — veículo atual' : 'Client-side — current vehicle'}</h3>
            <LuaCodeBlock>{"local ok = exports['pr_mileage']:installPart(\n    'vela_ignicao',\n    1,\n    installerId\n)\n\nexports['pr_mileage']:reloadParts()"}</LuaCodeBlock>
          </div>
        </div>

        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Validar item e veículo' : 'Validate item & vehicle'}</strong><p>{pt ? 'Sua oficina deve validar inventário, distância, permissão e o veículo antes de consumir a peça.' : 'Your workshop should validate inventory, distance, permissions and vehicle before consuming the part.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Ler odômetro' : 'Read odometer'}</strong><p>{pt ? 'Passe a quilometragem atual ao installPart para que installed_km seja correto.' : 'Pass current mileage into installPart so installed_km is correct.'}</p></div></article>
          <article><span>03</span><div><strong>installPart</strong><p>{pt ? 'Se plate + part já existir, o ON DUPLICATE KEY atualiza stage, installed_km, durability, instalador e data.' : 'If plate + part already exists, ON DUPLICATE KEY updates stage, installed_km, durability, installer and date.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Reload do client' : 'Client reload'}</strong><p>{pt ? 'Se o veículo estiver ocupado, reloadParts atualiza imediatamente o cache de peças e limpa os efeitos antigos da peça substituída.' : 'If the vehicle is occupied, reloadParts immediately refreshes part state and clears stale failure effects from the replaced part.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="mileage-dealership">
        <SectionTitle number="10" label={pt ? 'Concessionária' : 'Dealership'} title={pt ? 'Um veículo pode sair da concessionária com 0 km e todas as peças de fábrica já registradas.' : 'A vehicle can leave the dealership at 0 km with every factory component already registered.'} />

        <div className="docs-prose">
          <p>{pt ? 'Faça essa integração no servidor imediatamente depois de criar o registro persistente do veículo. O objetivo é: zerar o odômetro, instalar o conjunto de peças da versão de fábrica e, depois que a entity for spawnada, marcá-la como fresh para alinhar State Bag e runtime.' : 'Perform this integration server-side immediately after creating the persistent vehicle record. The goal is to zero mileage, install the factory component set and, after the entity spawns, mark it fresh so State Bag and runtime agree.'}</p>
        </div>

        <h3 className="xt-subheading">{pt ? 'Exemplo completo — veículo novo' : 'Complete example — brand-new vehicle'}</h3>
        <LuaCodeBlock>{"-- server.lua da sua concessionária\nlocal FACTORY_PARTS = {\n    { name = 'oleo_motor',         stage = 1 },\n    { name = 'filtro_oleo',        stage = 1 },\n    { name = 'filtro_ar',          stage = 1 },\n    { name = 'filtro_combustivel', stage = 1 },\n    { name = 'vela_ignicao',       stage = 1 },\n    { name = 'bobina_ignicao',     stage = 1 },\n    { name = 'correia_dentada',    stage = 1 },\n    { name = 'bomba_agua',         stage = 1 },\n    { name = 'tire_street',        stage = 1 },\n    { name = 'disco_freio',        stage = 1 },\n    { name = 'pastilha_freio',     stage = 1 },\n    { name = 'fluido_freio',       stage = 1 },\n}\n\nlocal function prepareNewVehicle(plate, ownerId)\n    -- O registro do veículo deve existir no banco antes deste ponto.\n    exports['pr_mileage']:resetMileage(plate)\n\n    for _, part in ipairs(FACTORY_PARTS) do\n        exports['pr_mileage']:installPart(\n            plate,\n            part.name,\n            part.stage,\n            0,       -- installed_km: veículo zero KM\n            ownerId  -- ou nil se quiser registrar como instalação de fábrica\n        )\n    end\nend\n\n-- Chame após concluir a compra/INSERT do veículo:\nprepareNewVehicle(newPlate, buyerIdentifier)"}</LuaCodeBlock>

        <h3 className="xt-subheading">{pt ? 'Ao spawnar a entity recém-comprada' : 'When spawning the newly purchased entity'}</h3>
        <LuaCodeBlock>{"-- client.lua da concessionária\n-- vehicle = entity que acabou de ser entregue ao comprador\nexports['pr_mileage']:markFresh(vehicle)\n\n-- alternativa por evento\nTriggerEvent('pr_mileage:fresh', vehicle)"}</LuaCodeBlock>

        <div className="xt-note warning"><strong>{pt ? 'Ordem importante' : 'Important ordering'}</strong><p>{pt ? 'Primeiro grave a propriedade/placa do veículo na sua concessionária; depois chame resetMileage/installPart. Caso contrário a placa ainda pode ser tratada como veículo de rua e não como veículo persistente.' : 'First persist ownership/plate in your dealership; then call resetMileage/installPart. Otherwise the plate may still be treated as a street vehicle rather than a persistent one.'}</p></div>
      </section>

      <section className="docs-section" id="mileage-factory-packages">
        <SectionTitle number="11" label={pt ? 'Pacotes de fábrica' : 'Factory packages'} title={pt ? 'Use tabelas de presets para cada categoria, versão ou acabamento da concessionária.' : 'Use preset tables for each category, trim or dealership package.'} />

        <LuaCodeBlock>{"local FactoryPackages = {\n    economy = {\n        { 'oleo_motor', 1 },\n        { 'filtro_oleo', 1 },\n        { 'filtro_ar', 1 },\n        { 'vela_ignicao', 1 },\n        { 'tire_common', 1 },\n        { 'pastilha_freio', 1 },\n    },\n\n    sport = {\n        { 'oleo_motor', 1 },\n        { 'filtro_oleo', 1 },\n        { 'vela_ignicao', 1 },\n        { 'bobina_ignicao', 1 },\n        { 'tire_sport', 2 },\n        { 'brake_level_2', 2 },\n        { 'disco_freio', 2 },\n        { 'fluido_freio', 2 },\n    },\n\n    track = {\n        { 'oleo_motor', 1 },\n        { 'tire_semislick', 3 },\n        { 'brake_level_3', 3 },\n        { 'disco_freio', 3 },\n        { 'pastilha_freio', 3 },\n    },\n}\n\nlocal function installFactoryPackage(plate, packageName, ownerId)\n    local package = FactoryPackages[packageName]\n    assert(package, ('Pacote inexistente: %s'):format(packageName))\n\n    exports['pr_mileage']:resetMileage(plate)\n\n    for _, def in ipairs(package) do\n        local partName, stage = def[1], def[2]\n        local ok = exports['pr_mileage']:installPart(\n            plate, partName, stage, 0, ownerId\n        )\n\n        if not ok then\n            print(('[dealership] Falha instalando %s em %s'):format(partName, plate))\n        end\n    end\nend"}</LuaCodeBlock>

        <h3 className="xt-subheading">{pt ? 'Selecionar pacote por modelo' : 'Choose package by model'}</h3>
        <LuaCodeBlock>{"local ModelPackages = {\n    sultan  = 'sport',\n    elegy   = 'sport',\n    adder   = 'track',\n    blista  = 'economy',\n}\n\nlocal packageName = ModelPackages[vehicleModel] or 'economy'\ninstallFactoryPackage(plate, packageName, buyerIdentifier)"}</LuaCodeBlock>

        <div className="docs-prose">
          <p>{pt ? 'Esse padrão também serve para frotas policiais, locadoras, veículos de missão, oficina de importados e veículos usados. Para usados, passe vehicleKm real em installPart e não zere o odômetro; isso permite instalar uma peça nova em um carro de 120.000 km sem fazer a peça nascer com 120.000 km de desgaste.' : 'The same pattern works for police fleets, rentals, mission vehicles, import shops and used cars. For used cars, pass actual vehicleKm into installPart and do not zero odometer; this lets a new component be fitted to a 120,000 km vehicle without inheriting 120,000 km of wear.'}</p>
        </div>
      </section>

      <section className="docs-section" id="mileage-external">
        <SectionTitle number="12" label={pt ? 'Integração com outros sistemas de peças' : 'External parts integration'} title={pt ? 'Outro resource pode entregar seu próprio estado de componentes e usar apenas o motor de sintomas do PR Mileage.' : 'Another resource can provide its own component state and use only PR Mileage’s symptom engine.'} />

        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Tabela externa estática' : 'Static external table'}</h3>
            <LuaCodeBlock>{"exports['pr_mileage']:setExternalParts({\n    ['pneu_corrida'] = {\n        installed_km = 12000,\n        durability = 30000,\n        stage = 3\n    }\n})"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Provider dinâmico' : 'Dynamic provider'}</h3>
            <LuaCodeBlock>{"exports['pr_mileage']:setExternalParts(function()\n    return MyVehiclePartsState\nend)\n\n-- ao desmontar integração:\nexports['pr_mileage']:clearExternalParts()"}</LuaCodeBlock>
          </div>
        </div>

        <div className="docs-prose">
          <p>{pt ? 'No modo externo, installed_km/durability vêm do outro resource. O PR Mileage continua usando o odômetro do veículo para calcular current_km e remaining_km e pode aplicar os sintomas definidos em Parts.Items com a mesma chave.' : 'In external mode, installed_km/durability come from the other resource. PR Mileage still uses vehicle odometer to calculate current_km and remaining_km and can apply symptoms from Parts.Items using the same key.'}</p>
        </div>
      </section>

      <section className="docs-section" id="mileage-obd">
        <SectionTitle number="13" label="OBD / Scanner" title={pt ? 'O módulo de scanner transforma a saúde das peças em diagnóstico in-game com interface DUI.' : 'The scanner module turns component health into an in-game diagnostic workflow with DUI.'} />

        <div className="crafting-feature-grid">
          <Card eyebrow="VEHICLE" title={pt ? 'Leitura da placa e telemetria' : 'Plate & telemetry'}>{pt ? 'O scanner identifica veículo, consulta quilometragem e pode buscar a tabela completa de peças daquela placa.' : 'Scanner identifies the vehicle, reads mileage and can fetch the full parts table for that plate.'}</Card>
          <Card eyebrow="PARTS" title={pt ? 'Status por componente' : 'Per-component status'}>{pt ? 'O callback getVehicleParts devolve percent/status de cada peça para exibição diagnóstica.' : 'getVehicleParts callback returns percent/status for every installed component for diagnostic display.'}</Card>
          <Card eyebrow="MODE" title={pt ? 'Progress ou stats' : 'Progress or stats'}>{pt ? 'Config.Scanner.DisplayMode seleciona barra percentual ou status textual baseado em WearConfig.StatusLabels.' : 'Config.Scanner.DisplayMode selects percentage progress or textual status based on WearConfig.StatusLabels.'}</Card>
          <Card eyebrow="DUI" title={pt ? 'Tela no próprio equipamento' : 'Screen on the device'}>{pt ? 'O repositório contém uma interface scanner_ui e lógica DUI para projetar dados na tela do prop.' : 'Repository contains scanner_ui and DUI logic to project data onto the device screen.'}</Card>
        </div>

        <div className="xt-note warning"><strong>{pt ? 'Estado atual do manifest' : 'Current manifest state'}</strong><p>{pt ? 'Os arquivos scanner/ existem no repositório, porém o fxmanifest v2.3.2 atual não lista scanner/scanner.lua ou scanner/camera.lua entre os client_scripts. Se for usar o OBD como feature ativa, inclua o módulo no manifest/loader da sua distribuição antes de publicá-lo.' : 'scanner/ files exist in the repository, but current v2.3.2 fxmanifest does not list scanner/scanner.lua or scanner/camera.lua in client_scripts. If OBD is an active feature in your distribution, add the module to your manifest/loader before shipping it.'}</p></div>
      </section>

      <section className="docs-section" id="mileage-statebags">
        <SectionTitle number="14" label="State Bags" title={pt ? 'vehicleMileage é o contrato de runtime para qualquer script que precise do odômetro da entity atual.' : 'vehicleMileage is the runtime contract for any resource that needs the current entity odometer.'} />

        <LuaCodeBlock>{"local vehicle = GetVehiclePedIsIn(PlayerPedId(), false)\nif vehicle ~= 0 then\n    local km = Entity(vehicle).state.vehicleMileage\n    if km then\n        -- HUD, painel digital, telemetria, manutenção etc.\n        SendNUIMessage({\n            action = 'odometer',\n            value = km\n        })\n    end\nend"}</LuaCodeBlock>

        <div className="crafting-feature-grid">
          <Card eyebrow="REPLICATED" title={pt ? 'Valor compartilhado' : 'Shared value'}>{pt ? 'state:set(..., true) replica a quilometragem para quem observa a entity.' : 'state:set(..., true) replicates mileage to clients observing the entity.'}</Card>
          <Card eyebrow="PARTS" title={pt ? 'Fonte do desgaste' : 'Wear source'}>{pt ? 'cl_parts usa Entity(vehicle).state.vehicleMileage como odômetro corrente durante o loop.' : 'cl_parts uses Entity(vehicle).state.vehicleMileage as current odometer during its loop.'}</Card>
          <Card eyebrow="HUD" title={pt ? 'Sem polling SQL' : 'No SQL polling'}>{pt ? 'HUDs e painéis podem ler a State Bag em runtime sem fazer consulta de banco a cada frame.' : 'HUDs and dashboards can read State Bag at runtime without database queries every frame.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="mileage-handling">
        <SectionTitle number="15" label={pt ? 'Handling e física' : 'Handling & physics'} title={pt ? 'O sistema captura o handling original, aplica degradação e restaura os valores ao trocar de veículo ou substituir a peça.' : 'The system captures original handling, applies degradation and restores values when leaving vehicle or replacing a part.'} />

        <div className="crafting-field-grid">
          {[
            ['fBrakeForce', pt ? 'Perda de força de frenagem.' : 'Reduced braking force.'],
            ['fTractionLossMult', pt ? 'Alteração da perda de aderência.' : 'Changes traction-loss behavior.'],
            ['fSuspensionForce', pt ? 'Força da suspensão.' : 'Suspension force.'],
            ['fSuspensionReboundDamp', pt ? 'Retorno/amortecimento.' : 'Suspension rebound damping.'],
            ['fSuspensionCompDamp', pt ? 'Compressão/amortecimento.' : 'Suspension compression damping.'],
            ['fDriveInertia', pt ? 'Resposta/inércia de drivetrain quando integração de torque é usada.' : 'Drivetrain response/inertia when torque integration is used.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Adaptar a outro script de handling/stance' : 'Adapting to another handling/stance resource'}</h3>
        <div className="docs-prose">
          <p>{pt ? 'config/func_exported.lua existe justamente para evitar conflito com outro sistema que também modifica handling. rpmOverride, handlingFloat, powerMult, torqueMult, setOriginalHandling e resetPartsInstalled podem ser redirecionados para exports externos. Ative os bools correspondentes e substitua a implementação pelo contrato do seu resource de handling.' : 'config/func_exported.lua exists specifically to avoid conflicts with another system that also modifies handling. rpmOverride, handlingFloat, powerMult, torqueMult, setOriginalHandling and resetPartsInstalled can be redirected to external exports. Enable the corresponding booleans and replace implementations with your handling resource contract.'}</p>
        </div>
      </section>

      <section className="docs-section" id="mileage-config">
        <SectionTitle number="16" label={pt ? 'Configuração' : 'Configuration'} title={pt ? 'A configuração controla unidade, persistência, quilometragem inicial, classes ignoradas, scanner e efeitos globais.' : 'Configuration controls units, persistence, initial mileage, ignored classes, scanner and global effects.'} />
        <div className="crafting-field-grid">
          {[
            ['Config.Unit', pt ? 'kilometers ou miles; o core mantém KM internamente e converte na API.' : 'kilometers or miles; core keeps KM internally and converts at API boundary.'],
            ['Config.AutoRunSQL', pt ? 'Cria/migra schema automaticamente no boot.' : 'Creates/migrates schema automatically at boot.'],
            ['Config.SaveThreshold', pt ? 'Distância entre saves server-side do odômetro.' : 'Distance between server-side odometer saves.'],
            ['Config.ClassKmRange', pt ? 'Faixa inicial de quilometragem por classe para carros de rua.' : 'Initial mileage range per class for street vehicles.'],
            ['Config.IgnoredClasses', pt ? 'Classes que não acumulam odômetro.' : 'Classes that do not accumulate mileage.'],
            ['WearConfig.TickInterval', pt ? 'Intervalo do loop de desgaste; atual 5000 ms.' : 'Wear-loop interval; currently 5000 ms.'],
            ['WearConfig.StatusThresholds', pt ? 'Faixas de Boa/Razoável/Ruim.' : 'Good/Fair/Bad ranges.'],
            ['WearConfig.Effects', pt ? 'Toggle global por tipo de efeito.' : 'Global toggle per effect type.'],
            ['Config.Scanner.ScanDuration', pt ? 'Tempo total da tela de scan.' : 'Total scan-screen duration.'],
            ['Config.Scanner.DisplayMode', pt ? 'progress ou stats.' : 'progress or stats.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="mileage-api-odometer">
        <SectionTitle number="17" label="API • Odometer" title={pt ? 'A API de quilometragem atende HUDs, garagens, concessionárias, ranking, manutenção e telemetria.' : 'Mileage API serves HUDs, garages, dealerships, rankings, maintenance and telemetry.'} />

        <h3 className="xt-subheading">Client</h3>
        <div className="crafting-api-list">
          {[
            ['getMileage()', pt ? 'Quilometragem do veículo atual na unidade configurada.' : 'Current vehicle mileage in configured unit.'],
            ['getMileageByEntity(vehicle)', pt ? 'Lê vehicleMileage da entity e converte unidade.' : 'Reads entity vehicleMileage and converts unit.'],
            ['getMileageByPlate(plate)', pt ? 'Procura entity/State Bag e cai para callback server-side.' : 'Looks for entity/State Bag and falls back to server callback.'],
            ['GetMileage(plate)', pt ? 'Alias que também retorna a unidade.' : 'Alias that also returns the unit.'],
            ['getUnit() / GetUnit()', pt ? 'kilometers ou miles.' : 'kilometers or miles.'],
            ['getVehiclePlate()', pt ? 'Placa do veículo atual.' : 'Current vehicle plate.'],
            ['getCurrentVehicle()', pt ? 'Entity atual rastreada.' : 'Currently tracked entity.'],
            ['getVehicleClass()', pt ? 'Classe GTA do veículo atual.' : 'GTA class of current vehicle.'],
            ['getVehicleClassName()', pt ? 'Nome amigável da classe.' : 'Friendly class name.'],
            ['isDriving()', pt ? 'Indica se o player é motorista.' : 'Whether player is driver.'],
            ['isOwnedVehicle()', pt ? 'Indica se a origem foi resolvida como veículo persistente.' : 'Whether origin resolved as persistent vehicle.'],
            ['markFresh(vehicle)', pt ? 'Marca entity para iniciar como veículo 0 km.' : 'Marks entity to initialize as zero-KM vehicle.'],
            ['resetCurrentMileage()', pt ? 'Reseta odômetro do veículo atual.' : 'Resets current vehicle odometer.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">Server</h3>
        <div className="crafting-api-list">
          {[
            ['getMileageByPlate(plate)', pt ? 'Resolve DB/RAM e converte unidade.' : 'Resolves DB/RAM and converts unit.'],
            ['getMileageByEntity(entity)', pt ? 'Lê State Bag server-side.' : 'Reads State Bag server-side.'],
            ['GetMileage(plate)', pt ? 'Retorna mileage + unit.' : 'Returns mileage + unit.'],
            ['plateExists(plate)', pt ? 'Verifica propriedade persistente.' : 'Checks persistent vehicle existence.'],
            ['plateRegistered(plate)', pt ? 'Verifica se existe valor de mileage conhecido.' : 'Checks whether mileage is known.'],
            ['resetMileage(plate)', pt ? 'Zera odômetro; ideal para entrega de veículo novo.' : 'Zeros odometer; ideal for new-vehicle delivery.'],
            ['setMileage(plate, value)', pt ? 'Define quilometragem na unidade configurada.' : 'Sets mileage in configured unit.'],
            ['getTopMileage(limit)', pt ? 'Ranking dos maiores odômetros persistentes.' : 'Ranks highest persistent odometers.'],
            ['getPlayerVehiclesMileage(source)', pt ? 'Lista veículos e mileage do personagem resolvido.' : 'Lists vehicles and mileage for resolved character.'],
            ['getWorldVehicles()', pt ? 'Snapshot dos veículos de rua mantidos em RAM.' : 'Snapshot of street vehicles kept in RAM.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="mileage-api-parts">
        <SectionTitle number="18" label="API • Parts" title={pt ? 'As mesmas informações de manutenção estão disponíveis no client e no servidor.' : 'The same maintenance information is available client-side and server-side.'} />

        <div className="crafting-api-list">
          {[
            ['GetPartsPercent(partName)', pt ? 'Client: porcentagem restante no veículo atual.' : 'Client: remaining percentage on current vehicle.'],
            ['GetPartsMileage(partName)', pt ? 'Client: KM restantes.' : 'Client: remaining KM.'],
            ['GetPartsStatus(partName)', pt ? 'Client: Boa/Razoável/Ruim.' : 'Client: Good/Fair/Bad.'],
            ['GetParts(partName)', pt ? 'Client: estrutura completa da peça.' : 'Client: full part structure.'],
            ['GetVehicleParts()', pt ? 'Client: todas as peças carregadas.' : 'Client: all loaded parts.'],
            ['installPart(partName, stage, citizenId)', pt ? 'Client: instala/substitui no veículo atual.' : 'Client: installs/replaces on current vehicle.'],
            ['removePart(partName)', pt ? 'Client: remove da placa atual.' : 'Client: removes from current plate.'],
            ['reloadParts()', pt ? 'Client: recarrega vehicle_parts imediatamente.' : 'Client: reloads vehicle_parts immediately.'],
            ['setExternalParts(table|callback)', pt ? 'Client: adiciona source externa de componentes.' : 'Client: supplies external component source.'],
            ['clearExternalParts()', pt ? 'Client: remove source externa.' : 'Client: clears external source.'],
            ['getPartDefinition(partName)', pt ? 'Client: retorna Parts.Items[partName].' : 'Client: returns Parts.Items[partName].'],
            ['getAllParts()', pt ? 'Client: retorna catálogo completo.' : 'Client: returns complete catalog.'],
            ['GetPartsPercent(plate, partName, vehicleKm)', pt ? 'Server: porcentagem para uma placa.' : 'Server: percentage for a plate.'],
            ['GetPartsMileage(plate, partName, vehicleKm)', pt ? 'Server: KM restantes para uma placa.' : 'Server: remaining KM for a plate.'],
            ['GetPartsStatus(plate, partName, vehicleKm)', pt ? 'Server: status da peça.' : 'Server: part status.'],
            ['GetParts(plate, partName, vehicleKm)', pt ? 'Server: info completa.' : 'Server: full info.'],
            ['GetVehicleParts(plate, vehicleKm)', pt ? 'Server: todas as peças da placa.' : 'Server: all parts for plate.'],
            ['installPart(plate, partName, stage, vehicleKm, citizenId)', pt ? 'Server: instala/substitui componente.' : 'Server: installs/replaces component.'],
            ['removePart(plate, partName)', pt ? 'Server: remove componente.' : 'Server: removes component.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Estrutura retornada' : 'Returned structure'}</h3>
        <LuaCodeBlock>{"{\n    id = 42,\n    plate = 'ABC1234',\n    part = 'vela_ignicao',\n    stage = 1,\n    installed_km = 15200,\n    durability = 26000,\n    current_km = 7800,\n    remaining_km = 18200,\n    percent = 70.0,\n    status = 'Razoável',\n    citizen_id = 'installer-id',\n    installed_at = '2026-10-13 12:30:00'\n}"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="mileage-commands">
        <SectionTitle number="19" label={pt ? 'Ferramentas de diagnóstico' : 'Diagnostic tools'} title={pt ? 'Comandos internos ajudam a validar o odômetro e o sistema de componentes durante desenvolvimento.' : 'Built-in commands help validate odometer and component behavior during development.'} />
        <div className="crafting-command-grid">
          <article><code>/km</code><p>{pt ? 'Mostra a quilometragem do veículo atual.' : 'Shows current vehicle mileage.'}</p></article>
          <article><code>/kmplaca [placa]</code><p>{pt ? 'Consulta mileage de uma placa.' : 'Queries mileage for a plate.'}</p></article>
          <article><code>/installpeca [nome] [stage]</code><p>{pt ? 'Instala uma peça no veículo atual para teste/manutenção.' : 'Installs a part into current vehicle for testing/service.'}</p></article>
          <article><code>/removepeca [nome]</code><p>{pt ? 'Remove uma peça do veículo atual.' : 'Removes a part from current vehicle.'}</p></article>
          <article><code>/reloadpecas</code><p>{pt ? 'Força recarregar as peças persistidas.' : 'Forces persisted parts reload.'}</p></article>
          <article><code>/pecas</code><p>{pt ? 'Lista estado/quilometragem das peças carregadas.' : 'Lists loaded component state/mileage.'}</p></article>
        </div>
      </section>

      <section className="docs-section" id="mileage-performance">
        <SectionTitle number="20" label={pt ? 'Performance e boas práticas' : 'Performance & best practices'} title={pt ? 'O sistema evita transformar simulação profunda em spam de banco ou processamento por frame.' : 'The system avoids turning deep simulation into database spam or per-frame processing.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="1 SECOND" title={pt ? 'Odômetro moderado' : 'Moderate odometer loop'}>{pt ? 'Posição é amostrada 1x/s somente enquanto existe veículo e motorista válido.' : 'Position is sampled once per second only while a valid vehicle/driver exists.'}</Card>
          <Card eyebrow="5 SECONDS" title={pt ? 'Wear mais espaçado' : 'Slower wear loop'}>{pt ? 'WearConfig.TickInterval atual é 5000 ms; sintomas não precisam ser recalculados por frame.' : 'Current WearConfig.TickInterval is 5000 ms; symptoms do not need per-frame recalculation.'}</Card>
          <Card eyebrow="STATE BAG" title={pt ? 'Leitura barata em runtime' : 'Cheap runtime reads'}>{pt ? 'Outros scripts podem consumir vehicleMileage sem abrir queries SQL.' : 'Other resources can consume vehicleMileage without SQL queries.'}</Card>
          <Card eyebrow="DERIVED WEAR" title={pt ? 'Sem coluna current_km' : 'No current_km column'}>{pt ? 'Desgaste é derivado, então o banco não precisa receber uma escrita por peça a cada tick.' : 'Wear is derived, so database does not need one write per part every tick.'}</Card>
          <Card eyebrow="RESET" title={pt ? 'Limpeza ao trocar veículo' : 'Cleanup on vehicle change'}>{pt ? 'Partículas, shake, handling e estados físicos são restaurados quando a entity deixa de ser a atual.' : 'Particles, shake, handling and physical state are restored when entity is no longer current.'}</Card>
          <Card eyebrow="AUTHORITATIVE" title={pt ? 'Integrações server-side' : 'Server-side integrations'}>{pt ? 'Concessionária, oficina e transferências devem preferir exports server-side para instalar/remover peças e definir mileage.' : 'Dealership, workshop and ownership flows should prefer server-side exports for parts and mileage mutation.'}</Card>
        </div>

        <div className="xt-note"><strong>{pt ? 'Veículos usados' : 'Used vehicles'}</strong><p>{pt ? 'Nunca passe 0 como installed_km ao instalar uma peça nova em um carro usado. Leia o mileage atual e passe esse valor. Assim a peça começa 100% nova independentemente da quilometragem total do automóvel.' : 'Never pass 0 as installed_km when installing a new component in a used car. Read current mileage and pass that value. The component then starts at 100% regardless of total vehicle mileage.'}</p></div>
      </section>

      <section className="crafting-source-note">
        <span>{pt ? 'Revisão do código' : 'Source review'}</span>
        <h2>{pt ? 'Documentação construída a partir do PR Mileage v2.3.2 e da implementação atual da branch main.' : 'Documentation built from PR Mileage v2.3.2 and current main-branch implementation.'}</h2>
        <p>{pt ? 'Foram revisados odômetro, State Bags, persistência, quilometragem de rua, fresh vehicles, catálogo de 62 peças, cálculo de desgaste, 16 appliers de sintomas, handling, scanner OBD, exports client/server e os contratos necessários para concessionárias, oficinas e sistemas externos.' : 'Odometer, State Bags, persistence, street mileage, fresh vehicles, 62-part catalog, wear calculations, 16 symptom appliers, handling, OBD scanner, client/server exports and integration contracts for dealerships, workshops and external systems were reviewed.'}</p>
        <div className="crafting-hero-actions">
          <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">Pierremoraes-ofc/pr_mileage</a>
        </div>
      </section>
    </div>
  );
}
