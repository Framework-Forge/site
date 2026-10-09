import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const REPO = 'https://github.com/Framework-Forge/forge-dk';

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

export default function ForgeDocumentDocs() {
  const { locale } = useI18n();
  const pt = locale === 'pt-BR';

  return (
    <div className="crafting-docs document-docs">
      <header className="crafting-hero">
        <div className="crafting-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Scripts • Identity & Documents</div>
          <h1>Forge <span>Documento</span></h1>
          <p className="crafting-lead">
            {pt
              ? 'Sistema completo de identidade, documentos e atendimento para FiveM. O forge-dk permite criar carteiras e documentos A4, configurar campos, layout, selos, fotos, permissões, categorias e validade, posicionar NPCs oficiais ou clandestinos, emitir primeira e segunda via, apresentar documentos fisicamente e verificar autenticidade por registro oficial.'
              : 'A complete FiveM identity, document and citizen-service platform. forge-dk can define cards and A4 documents, fields, layouts, seals, photos, permissions, categories and validity; place official or clandestine service NPCs; issue first and replacement copies; physically present documents; and verify authenticity against the official registry.'}
          </p>
          <div className="crafting-hero-actions">
            <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">{pt ? 'Repositório' : 'Repository'}</a>
            <a className="docs-secondary-button" href="#document-create">{pt ? 'Criar documento' : 'Create document'}</a>
            <a className="docs-secondary-button" href="#document-service">{pt ? 'Atendimento' : 'Service flow'}</a>
          </div>
          <div className="legacy-meta">
            <span>Forge DK 2.0</span><span>PR Bridge</span><span>Identity</span><span>Documents</span><span>NUI</span><span>Verification</span>
          </div>
        </div>

        <div className="xt-summary-card crafting-summary-card">
          <div className="xt-summary-top"><span>DK</span><strong>DOCUMENTO</strong></div>
          <Info label={pt ? 'Dependência' : 'Dependency'}>pr_bridge</Info>
          <Info label={pt ? 'Formatos' : 'Formats'}>Card + A4</Info>
          <Info label={pt ? 'Atendimento' : 'Service'}>{pt ? 'NPC oficial / clandestino' : 'Official / clandestine NPC'}</Info>
          <Info label={pt ? 'Registro' : 'Registry'}>SQL + metadata snapshot</Info>
          <Info label={pt ? 'Administração' : 'Administration'}>{pt ? 'Painel NUI in-game' : 'In-game NUI panel'}</Info>
        </div>
      </header>

      <nav className="xt-toc crafting-toc">
        <a href="#document-overview">{pt ? 'Visão geral' : 'Overview'}</a>
        <a href="#document-install">{pt ? 'Instalação' : 'Install'}</a>
        <a href="#document-create">{pt ? 'Criar documento' : 'Create document'}</a>
        <a href="#document-layout">{pt ? 'Layout e visual' : 'Layout & visual'}</a>
        <a href="#document-permissions">{pt ? 'Permissões' : 'Permissions'}</a>
        <a href="#document-npcs">{pt ? 'NPCs de atendimento' : 'Service NPCs'}</a>
        <a href="#document-service">{pt ? 'Emissão' : 'Issuance'}</a>
        <a href="#document-photo">{pt ? 'Foto' : 'Photo'}</a>
        <a href="#document-forgery">{pt ? 'Falsificação' : 'Forgery'}</a>
        <a href="#document-presentation">{pt ? 'Apresentação' : 'Presentation'}</a>
        <a href="#document-records">{pt ? 'Registro e segunda via' : 'Registry & copies'}</a>
        <a href="#document-admin">{pt ? 'Administração' : 'Administration'}</a>
        <a href="#document-storage">{pt ? 'Persistência' : 'Persistence'}</a>
        <a href="#document-api">API / Exports</a>
      </nav>

      <section className="docs-section" id="document-overview">
        <SectionTitle number="01" label={pt ? 'Arquitetura' : 'Architecture'} title={pt ? 'O item físico é apenas a via; a identidade oficial vive no registro e o documento carrega um snapshot imutável.' : 'The physical item is only a copy; official identity lives in the registry and the document carries an immutable snapshot.'} />
        <div className="crafting-flow">
          <div><span>01</span><strong>{pt ? 'Tipo de documento' : 'Document type'}</strong><p>{pt ? 'Define item, formato, autorização, campos, validade, taxas e aparência.' : 'Defines item, format, authorization, fields, validity, fees and appearance.'}</p></div>
          <div><span>02</span><strong>{pt ? 'Atendimento' : 'Service desk'}</strong><p>{pt ? 'NPC oferece um conjunto de documentos em modo oficial ou clandestino.' : 'NPC offers a selected document set in official or clandestine mode.'}</p></div>
          <div><span>03</span><strong>{pt ? 'Emissão' : 'Issuance'}</strong><p>{pt ? 'Servidor valida identidade, autorização, foto, valor, inventário e registro antes da entrega.' : 'Server validates identity, authorization, photo, price, inventory and registry before delivery.'}</p></div>
          <div><span>04</span><strong>{pt ? 'Via física' : 'Physical copy'}</strong><p>{pt ? 'O item recebe metadata.document com serial, identidade, layout e visual daquele momento.' : 'The item receives metadata.document with serial, identity, layout and appearance from issuance time.'}</p></div>
        </div>
        <div className="crafting-feature-grid">
          <Card eyebrow="IDENTITY" title={pt ? 'Identidade preservada' : 'Preserved identity'}>{pt ? 'Transferir o item não muda o titular gravado. O holder pode ser diferente do proprietário do documento.' : 'Transferring the item does not change the recorded holder identity. Item holder and document owner may differ.'}</Card>
          <Card eyebrow="SNAPSHOT" title={pt ? 'Documento histórico' : 'Historical snapshot'}>{pt ? 'Mudanças futuras no template não reescrevem vias já emitidas nem o registro histórico.' : 'Future template changes do not rewrite previously issued copies or historical registry data.'}</Card>
          <Card eyebrow="REGISTRY" title={pt ? 'Verificação oficial' : 'Official verification'}>{pt ? 'Autenticidade deve ser consultada no registro; flags visuais presentes no item não são prova oficial.' : 'Authenticity is checked against the registry; visual flags on the item are not official proof.'}</Card>
          <Card eyebrow="SERVICE" title={pt ? 'Atendimento dinâmico' : 'Dynamic service'}>{pt ? 'Nenhum posto é obrigatório: os NPCs são criados e posicionados pelo painel administrativo.' : 'No service location is mandatory: NPCs are created and positioned from the admin panel.'}</Card>
          <Card eyebrow="PERMISSIONS" title={pt ? 'Licenças e categorias' : 'Licenses & categories'}>{pt ? 'Tipos podem ser livres ou exigir autorização principal e categoria adicional, como classes específicas.' : 'Types may be unrestricted or require a primary authorization plus a category such as a class.'}</Card>
          <Card eyebrow="SECURITY" title={pt ? 'Fluxo autoritativo' : 'Authoritative flow'}>{pt ? 'Sessão, distância, quote, autorização e ownership são revalidados no servidor antes da emissão.' : 'Session, distance, quote, authorization and ownership are revalidated server-side before issuance.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="document-install">
        <SectionTitle number="02" label={pt ? 'Instalação' : 'Installation'} title={pt ? 'PR Bridge centraliza framework, banco, inventário, callbacks, UI, interação e DevTools.' : 'PR Bridge centralizes framework, database, inventory, callbacks, UI, interaction and DevTools.'} />
        <div className="xt-two-col crafting-spaced-grid">
          <div>
            <h3>{pt ? 'Ordem de inicialização' : 'Startup order'}</h3>
            <LuaCodeBlock>{"ensure pr_bridge\nensure forge-dk"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{pt ? 'Primeiro boot' : 'First boot'}</h3>
            <p>{pt ? 'O resource carrega data/config.json com recuperação automática, normaliza o schema, registra todos os itens de documento e cria as tabelas de registro/recibos quando o banco fica disponível.' : 'The resource loads data/config.json with recovery, normalizes the schema, registers every document item and creates registry/receipt tables once database access is ready.'}</p>
          </div>
        </div>
        <div className="xt-note"><strong>{pt ? 'Requisito importante do item' : 'Important item requirement'}</strong><p>{pt ? 'Cada tipo precisa de um item exclusivo, não empilhável e sem ação concorrente de consumo/export. O painel valida isso antes de salvar.' : 'Each type needs its own non-stackable item without a competing consume/export action. The admin save validates this before accepting the configuration.'}</p></div>
      </section>

      <section className="docs-section" id="document-create">
        <SectionTitle number="03" label={pt ? 'Tipos de documento' : 'Document types'} title={pt ? 'Cada documento é um template completo: identidade, regras, preço, campos e apresentação.' : 'Each document is a complete template: identity, rules, pricing, fields and presentation.'} />
        <div className="crafting-field-grid">
          {[
            ['key', pt ? 'Identificador único do tipo.' : 'Unique type identifier.'],
            ['item', pt ? 'Item físico exclusivo usado para cada via.' : 'Exclusive physical item used for each copy.'],
            ['label', pt ? 'Nome exibido no atendimento e no documento.' : 'Name displayed in service UI and on the document.'],
            ['format', pt ? 'card ou a4.' : 'card or a4.'],
            ['subject', pt ? 'person, vehicle ou business.' : 'person, vehicle or business.'],
            ['active', pt ? 'Controla novas emissões sem invalidar vias existentes.' : 'Controls new issuance without invalidating existing copies.'],
            ['validityDays', pt ? 'Validade real em dias; zero significa sem expiração.' : 'Real-day validity; zero means no expiration.'],
            ['firstFee', pt ? 'Valor da primeira emissão oficial.' : 'Fee for first official issuance.'],
            ['reissueFee', pt ? 'Valor calculado para segunda via e posteriores.' : 'Fee used for replacement copies.'],
            ['forgeryFee', pt ? 'Valor da emissão clandestina quando habilitada.' : 'Clandestine issuance fee when enabled.'],
            ['requirePhoto', pt ? 'Exige captura de foto antes da emissão.' : 'Requires photo capture before issuance.'],
            ['presentationStyle', pt ? 'Preset police ou citizen para animação física.' : 'police or citizen physical-presentation preset.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Assunto do documento' : 'Document subject'}</h3>
        <div className="crafting-feature-grid">
          <Card eyebrow="PERSON" title={pt ? 'Pessoa' : 'Person'}>{pt ? 'Usa diretamente a identidade do personagem: ID, nome, sobrenome, nascimento e sexo.' : 'Uses character identity directly: ID, first name, last name, birth date and sex.'}</Card>
          <Card eyebrow="VEHICLE" title={pt ? 'Veículo' : 'Vehicle'}>{pt ? 'Exige um validator de vínculo registrado por um resource confiável antes de emitir para a chave informada.' : 'Requires an ownership validator registered by a trusted resource before issuing for the supplied subject key.'}</Card>
          <Card eyebrow="BUSINESS" title={pt ? 'Empresa' : 'Business'}>{pt ? 'Também exige provider de vínculo, permitindo alvarás, licenças comerciais e documentos organizacionais.' : 'Also requires an ownership provider, enabling permits, commercial licenses and organizational documents.'}</Card>
        </div>

        <h3 className="xt-subheading">{pt ? 'Campos personalizados' : 'Custom fields'}</h3>
        <div className="docs-prose">
          <p>{pt ? 'Cada tipo pode ter até 32 campos. A origem pode ser identity ou input; os tipos aceitos são text, number, date e textarea. Campos podem ser obrigatórios, possuir valor padrão e ser marcados como falsificáveis quando o tipo permite falsificação.' : 'Each type can contain up to 32 fields. Source may be identity or input; supported types are text, number, date and textarea. Fields can be required, have defaults and be marked forgeable when the document permits forgery.'}</p>
        </div>
      </section>

      <section className="docs-section" id="document-layout">
        <SectionTitle number="04" label={pt ? 'Editor visual' : 'Visual editor'} title={pt ? 'Card e A4 possuem layouts independentes, com preview e posicionamento dos elementos dentro da própria NUI.' : 'Card and A4 use independent layouts, with preview and element placement inside the NUI.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="COLORS" title={pt ? 'Paleta' : 'Palette'}>{pt ? 'Background, secondary, text e accent são configuráveis por documento.' : 'Background, secondary, text and accent are configurable per document.'}</Card>
          <Card eyebrow="PATTERN" title={pt ? 'Padrões' : 'Patterns'}>{pt ? 'Diagonal, grid, waves, dots e guilloche, com controle de opacidade.' : 'Diagonal, grid, waves, dots and guilloche with opacity control.'}</Card>
          <Card eyebrow="SEAL" title={pt ? 'Selo' : 'Seal'}>{pt ? 'Texto ou PNG oficial e versão alternativa para documentos falsificados.' : 'Official seal text/PNG plus an alternate forged version.'}</Card>
          <Card eyebrow="EMBLEM" title={pt ? 'Emblema' : 'Emblem'}>{pt ? 'Imagem HTTPS ou PNG local/base64 validado, incluindo opção visual clandestina.' : 'Validated HTTPS or local/base64 PNG, including an alternate clandestine emblem.'}</Card>
          <Card eyebrow="FONT" title={pt ? 'Tipografia' : 'Typography'}>{pt ? 'sans, serif ou mono, escolhida de forma independente no visual falso quando necessário.' : 'sans, serif or mono, independently selectable for forged appearance when needed.'}</Card>
          <Card eyebrow="LAYOUT" title={pt ? 'Posição por elemento' : 'Per-element placement'}>{pt ? 'x, y, width, font size, alinhamento e visibilidade são armazenados separadamente para card/A4.' : 'x, y, width, font size, alignment and visibility are stored separately for card/A4.'}</Card>
        </div>
        <div className="docs-prose">
          <p>{pt ? 'O editor cobre logo, cidade, título, divisor, foto, ID, nome, sobrenome, nascimento, sexo, expedição, validade, categoria, corpo, assinatura, serial, selo e qualquer field:* personalizado.' : 'The editor covers logo, city, title, divider, photo, ID, first/last name, birth date, sex, issue/expiry dates, category, body, signature, serial, seals and every custom field:* entry.'}</p>
        </div>
      </section>

      <section className="docs-section" id="document-permissions">
        <SectionTitle number="05" label={pt ? 'Autorização' : 'Authorization'} title={pt ? 'Um tipo pode exigir permissão principal, categoria e validação de ownership ao mesmo tempo.' : 'A document may require a primary permission, a category and ownership validation at the same time.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Tipo livre' : 'Open type'}</strong><p>{pt ? 'requiresAuthorization=false libera emissão oficial sem licença adicional.' : 'requiresAuthorization=false allows official issuance without an extra license.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Permissão principal' : 'Primary permission'}</strong><p>{pt ? 'permissionKey aponta para a autorização que deve existir no metadata do personagem.' : 'permissionKey points to the authorization required in character metadata.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Categoria' : 'Category'}</strong><p>{pt ? 'Quando preenchida, a autorização principal e a categoria específica precisam estar ativas.' : 'When set, both the primary authorization and the specific category must be enabled.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Concessão e revogação' : 'Grant & revoke'}</strong><p>{pt ? 'O painel administrativo ou exports confiáveis podem conceder/remover permissões sem fabricar um documento físico automaticamente.' : 'The admin panel or trusted exports can grant/remove permissions without automatically creating a physical document.'}</p></div></article>
        </div>
        <div className="xt-note"><strong>{pt ? 'Categorias são independentes' : 'Categories are independent'}</strong><p>{pt ? 'Conceder uma categoria habilita a permissão principal; revogar uma categoria preserva categorias irmãs já autorizadas.' : 'Granting a category enables the primary permission; revoking one category preserves sibling categories that remain authorized.'}</p></div>
      </section>

      <section className="docs-section" id="document-npcs">
        <SectionTitle number="06" label={pt ? 'Postos de atendimento' : 'Service desks'} title={pt ? 'Os NPCs são totalmente configuráveis e podem funcionar como atendimento oficial ou emissão clandestina.' : 'NPCs are fully configurable and can operate as official service desks or clandestine issuers.'} />
        <div className="crafting-field-grid">
          {[
            ['id', pt ? 'Identificador único do posto.' : 'Unique service identifier.'],
            ['model', pt ? 'Modelo do ped.' : 'Ped model.'],
            ['label', pt ? 'Nome exibido na interação.' : 'Interaction label.'],
            ['mode', pt ? 'official ou forgery.' : 'official or forgery.'],
            ['distance', pt ? 'Distância de interação entre 1 e 5 metros.' : 'Interaction distance between 1 and 5 meters.'],
            ['interaction', pt ? 'Interact ou target via PR Bridge.' : 'Interact or target through PR Bridge.'],
            ['wallDetection', pt ? 'Impede interação através de parede quando habilitado.' : 'Blocks through-wall interaction when enabled.'],
            ['services', pt ? 'Lista de tipos oferecidos por aquele NPC.' : 'Document types offered by this NPC.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>
        <div className="docs-prose">
          <p>{pt ? 'O botão de posicionamento usa o editor do PR Bridge e devolve coordenadas + heading ao painel. Nenhum NPC é criado automaticamente: a cidade decide exatamente onde existe atendimento.' : 'The placement button uses the PR Bridge editor and returns coordinates + heading to the panel. No NPC is created automatically: the server decides exactly where service exists.'}</p>
        </div>
      </section>

      <section className="docs-section" id="document-service">
        <SectionTitle number="07" label={pt ? 'Fluxo de emissão' : 'Issuance flow'} title={pt ? 'A NUI exibe a experiência; o servidor calcula o quote, valida a sessão e só então entrega a via.' : 'The NUI provides the experience; the server calculates the quote, validates the session and only then delivers the copy.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Abrir serviço' : 'Open service'}</strong><p>{pt ? 'Player precisa estar perto do NPC correto e no bucket permitido. O servidor cria nonce com validade de 10 minutos.' : 'Player must be near the correct NPC in the allowed bucket. Server creates a nonce valid for 10 minutes.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Quote' : 'Quote'}</strong><p>{pt ? 'O servidor verifica o tipo, autorização, registro anterior, pendências, revogação/expiração e calcula primeira ou segunda via.' : 'Server checks document type, authorization, existing record, pending deliveries, revocation/expiration and calculates first or replacement fee.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Foto e campos' : 'Photo & fields'}</strong><p>{pt ? 'Campos obrigatórios são validados e a foto da sessão é usada quando o documento exige imagem.' : 'Required fields are validated and session photo is used when the document requires one.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Reserva financeira' : 'Financial reservation'}</strong><p>{pt ? 'A conta escolhida é debitada somente após as pré-validações e o valor esperado precisa continuar igual ao quote exibido.' : 'Selected account is debited only after pre-validation and expected fee must still match the quoted value.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Snapshot e serial' : 'Snapshot & serial'}</strong><p>{pt ? 'É gerado um serial/copyId e o snapshot completo é preparado antes da entrega ao inventário.' : 'A serial/copyId is generated and the full snapshot is prepared before inventory delivery.'}</p></div></article>
          <article><span>06</span><div><strong>{pt ? 'Entrega e commit' : 'Delivery & commit'}</strong><p>{pt ? 'Depois do AddItem, o registro e recibo são confirmados. Falhas tentam compensar item e pagamento sem duplicar documento.' : 'After AddItem, registry and receipt are committed. Failures attempt item/payment compensation without duplicating documents.'}</p></div></article>
        </div>
        <div className="xt-note warning"><strong>{pt ? 'Proteção contra source reutilizado' : 'Source reuse protection'}</strong><p>{pt ? 'A identidade é revalidada depois de operações que podem yield. Se o source já pertencer a outro personagem, a emissão não continua.' : 'Identity is revalidated after operations that may yield. If the source now belongs to another character, issuance does not continue.'}</p></div>
      </section>

      <section className="docs-section" id="document-photo">
        <SectionTitle number="08" label={pt ? 'Foto de identificação' : 'Identity photo'} title={pt ? 'A foto é capturada em sessão controlada e validada antes de entrar no snapshot.' : 'The photo is captured in a controlled session and validated before entering the snapshot.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="CAMERA" title={pt ? 'Câmera guiada' : 'Guided camera'}>{pt ? 'O client usa a câmera/editor do PR Bridge sobre o ped atual e restaura o estado ao terminar.' : 'Client uses PR Bridge camera/editor on the current ped and restores state afterward.'}</Card>
          <Card eyebrow="FORMAT" title="PNG">{pt ? 'Somente data:image/png;base64 válido é aceito; payload fora do formato é rejeitado.' : 'Only valid data:image/png;base64 payloads are accepted; other formats are rejected.'}</Card>
          <Card eyebrow="LIMIT" title={pt ? 'Tamanho limitado' : 'Size limited'}>{pt ? 'O backend restringe o payload de foto antes de persistir/emitir.' : 'Backend restricts photo payload size before persistence/issuance.'}</Card>
          <Card eyebrow="SESSION" title={pt ? 'Ligada ao nonce' : 'Bound to nonce'}>{pt ? 'A foto pertence à sessão de atendimento ativa e não pode ser reaproveitada por uma sessão expirada.' : 'The photo belongs to the active service session and cannot be reused by an expired session.'}</Card>
          <Card eyebrow="REISSUE" title={pt ? 'Reaproveitamento oficial' : 'Official reuse'}>{pt ? 'Na segunda via, a foto do registro anterior pode satisfazer a exigência quando nenhuma nova foto foi capturada.' : 'On replacement copies, the previous official photo may satisfy the requirement if no new photo was taken.'}</Card>
          <Card eyebrow="PREVIEW" title={pt ? 'Preview instantâneo' : 'Instant preview'}>{pt ? 'A interface atualiza a prévia com a foto antes de confirmar a emissão.' : 'The interface updates the preview with the photo before final issuance.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="document-forgery">
        <SectionTitle number="09" label={pt ? 'Falsificação' : 'Forgery'} title={pt ? 'Falsificação é um fluxo visual separado: pode alterar somente campos autorizados e nunca concede permissão real.' : 'Forgery is a separate visual flow: it can alter only allowed fields and never grants real authorization.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="OPT-IN" title={pt ? 'Desligada por padrão' : 'Off by default'}>{pt ? 'allowForgery precisa estar ativo no tipo e o serviço deve ser oferecido por NPC em modo forgery.' : 'allowForgery must be enabled on the type and offered by an NPC in forgery mode.'}</Card>
          <Card eyebrow="MASK" title={pt ? 'Campos permitidos' : 'Allowed fields'}>{pt ? 'Nome, sobrenome, ID, nascimento e sexo têm flags individuais; campos customizados usam forgeable.' : 'First name, last name, ID, birth date and sex have individual flags; custom fields use forgeable.'}</Card>
          <Card eyebrow="VISUAL" title={pt ? 'Aparência própria' : 'Separate appearance'}>{pt ? 'Cor, fonte, padrão, emblema e selo falsos podem ser diferentes do template oficial.' : 'Forged colors, font, pattern, emblem and seal may differ from the official template.'}</Card>
          <Card eyebrow="NO AUTH" title={pt ? 'Não cria licença' : 'No authorization'}>{pt ? 'Emitir documento falsificado não altera permissions/licences do personagem.' : 'Issuing a forged document never changes character permissions/licenses.'}</Card>
          <Card eyebrow="VERIFY" title={pt ? 'Verificação reprova' : 'Verification fails'}>{pt ? 'VerifyDocument identifica a via falsificada como não autêntica no registro oficial.' : 'VerifyDocument identifies a forged copy as non-authentic against the official registry.'}</Card>
          <Card eyebrow="PRICE" title={pt ? 'Preço independente' : 'Independent price'}>{pt ? 'forgeryFee é separado das taxas de primeira/segunda via oficial.' : 'forgeryFee is independent from official first/reissue fees.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="document-presentation">
        <SectionTitle number="10" label={pt ? 'Uso e apresentação' : 'Use & presentation'} title={pt ? 'Usar o item lê a via real do slot e mostra o documento ao titular e aos jogadores próximos.' : 'Using the item reads the real inventory slot and displays the document to the holder and nearby players.'} />
        <div className="crafting-step-list">
          <article><span>01</span><div><strong>{pt ? 'Item utilizável' : 'Usable item'}</strong><p>{pt ? 'Itens ativos e históricos são registrados como usáveis; remover um template não destrói documentos antigos.' : 'Active and historical items are registered as usable; deleting a template does not destroy old documents.'}</p></div></article>
          <article><span>02</span><div><strong>{pt ? 'Slot real' : 'Real slot'}</strong><p>{pt ? 'O backend relê metadata do slot; nunca preenche um item vazio com a identidade do portador atual.' : 'Backend re-reads slot metadata and never fills an empty item with the current holder identity.'}</p></div></article>
          <article><span>03</span><div><strong>{pt ? 'Alcance e bucket' : 'Range & bucket'}</strong><p>{pt ? 'A apresentação automática envia para players dentro de general.range e no mesmo routing bucket.' : 'Automatic presentation targets players inside general.range and the same routing bucket.'}</p></div></article>
          <article><span>04</span><div><strong>{pt ? 'Animação física' : 'Physical animation'}</strong><p>{pt ? 'Presets police/citizen escolhem animação, prop, bone, offsets e rotação diferentes para card e A4.' : 'police/citizen presets select animation, prop, bone, offsets and rotation independently for card and A4.'}</p></div></article>
          <article><span>05</span><div><strong>{pt ? 'Tempo independente' : 'Independent timing'}</strong><p>{pt ? 'animationMs controla a ação física; displayMs pode controlar a duração visual do documento separadamente.' : 'animationMs controls physical action; displayMs can control visual document duration independently.'}</p></div></article>
        </div>
      </section>

      <section className="docs-section" id="document-records">
        <SectionTitle number="11" label={pt ? 'Registro, vias e revogação' : 'Registry, copies & revocation'} title={pt ? 'Segunda via é calculada pelo histórico oficial, não pela quantidade de itens que o jogador carrega.' : 'Replacement-copy logic comes from official history, not from how many items the player carries.'} />
        <div className="crafting-feature-grid">
          <Card eyebrow="DOCUMENT" title="forge_dk_documents">{pt ? 'Um registro por escopo oficial, com serial, owner, tipo, subject, status, validade, copies e snapshot.' : 'One official record per scope with serial, owner, type, subject, status, validity, copy count and snapshot.'}</Card>
          <Card eyebrow="COPIES" title="forge_dk_document_copies">{pt ? 'Cada tentativa de via possui copy_id, status de entrega, valor, conta e comprovantes.' : 'Every copy attempt has copy_id, delivery status, fee, account and receipt data.'}</Card>
          <Card eyebrow="REISSUE" title={pt ? 'Primeira x segunda via' : 'First vs replacement'}>{pt ? 'copies=0 usa firstFee; vias seguintes usam reissueFee e incrementam copyNumber.' : 'copies=0 uses firstFee; later copies use reissueFee and increment copyNumber.'}</Card>
          <Card eyebrow="PENDING" title={pt ? 'Entrega pendente' : 'Pending delivery'}>{pt ? 'Resultado incerto do inventário bloqueia retry automático para impedir duplicação.' : 'Uncertain inventory delivery blocks automatic retry to prevent duplication.'}</Card>
          <Card eyebrow="REVOKE" title={pt ? 'Revogação oficial' : 'Official revocation'}>{pt ? 'Revogar altera o registro; a via física pode continuar existindo, mas deixa de ser autêntica para verificação oficial.' : 'Revocation changes registry status; physical copies may still exist but no longer verify as authentic.'}</Card>
          <Card eyebrow="EXPIRE" title={pt ? 'Validade real' : 'Real validity'}>{pt ? 'Documento vencido bloqueia reemissão automática. Renovação é tratada como uma evolução explícita do sistema.' : 'Expired documents block automatic reissue. Renewal is treated as an explicit future workflow rather than a bypass.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="document-admin">
        <SectionTitle number="12" label={pt ? 'Painel administrativo' : 'Admin panel'} title={pt ? '/forgedk centraliza configuração, permissões, registros e auditoria de vias.' : '/forgedk centralizes configuration, permissions, registry and copy auditing.'} />
        <div className="crafting-admin-grid">
          {[
            [pt ? 'Geral' : 'General', pt ? 'Cidade, logo HTTPS, locale, alcance, tempo de popup, tecla e labels globais.' : 'City, HTTPS logo, locale, range, popup duration, close key and global labels.'],
            [pt ? 'Tipos de documento' : 'Document types', pt ? 'Cria, edita, remove e faz preview dos templates.' : 'Creates, edits, removes and previews templates.'],
            [pt ? 'Layout visual' : 'Visual layout', pt ? 'Editor individual para card/A4 e modo de preview falsificado.' : 'Per-card/A4 editor plus forged preview mode.'],
            [pt ? 'Atendimentos' : 'Service NPCs', pt ? 'Cria NPC, posiciona, define interação, modo e serviços oferecidos.' : 'Creates NPCs, positions them and selects interaction, mode and offered services.'],
            [pt ? 'Permissões' : 'Permissions', pt ? 'Concede/revoga autorização e categoria para um player online.' : 'Grants/revokes authorization and category for an online player.'],
            [pt ? 'Registros' : 'Records', pt ? 'Pesquisa registros, abre snapshot, recibos e status.' : 'Searches registry, opens snapshots, receipts and status.'],
            [pt ? 'Revogar' : 'Revoke', pt ? 'Revoga serial após confirmação sem apagar histórico.' : 'Revokes a serial after confirmation without deleting history.'],
            [pt ? 'Controle de revisão' : 'Revision control', pt ? 'Salvar exige revision atual; edição concorrente retorna revision_conflict.' : 'Save requires current revision; concurrent edits return revision_conflict.'],
            [pt ? 'Itens aposentados' : 'Retired items', pt ? 'Remover/trocar template mantém o binding histórico para vias antigas continuarem utilizáveis.' : 'Removing/changing a template retains historical bindings so old copies remain usable.'],
          ].map(([name,desc]) => <article key={name}><strong>{name}</strong><p>{desc}</p></article>)}
        </div>
      </section>

      <section className="docs-section" id="document-storage">
        <SectionTitle number="13" label={pt ? 'Persistência' : 'Persistence'} title={pt ? 'Configuração, registro oficial e snapshot físico têm responsabilidades diferentes.' : 'Configuration, official registry and physical snapshot have separate responsibilities.'} />
        <div className="crafting-db-grid">
          <article><code>data/config.json</code><strong>{pt ? 'Configuração administrativa' : 'Administrative configuration'}</strong><p>{pt ? 'Geral, tipos de documento, layout, aparência, NPCs, revision e histórico de itens aposentados.' : 'General settings, types, layouts, appearance, NPCs, revision and retired-item history.'}</p></article>
          <article><code>forge_dk_documents</code><strong>{pt ? 'Registro oficial' : 'Official registry'}</strong><p>{pt ? 'Serial, proprietário, tipo, subject, scope único, kind, status, validade, vias e snapshot.' : 'Serial, owner, type, subject, unique scope, kind, status, validity, copies and snapshot.'}</p></article>
          <article><code>forge_dk_document_copies</code><strong>{pt ? 'Recibos de via' : 'Copy receipts'}</strong><p>{pt ? 'copy_id, serial, número da via, valor, conta e estado de entrega.' : 'copy_id, serial, copy number, fee, account and delivery status.'}</p></article>
          <article><code>metadata.document</code><strong>{pt ? 'Snapshot físico' : 'Physical snapshot'}</strong><p>{pt ? 'Documento que viaja no item: identidade, foto, campos, visual, layout, serial, validade e copyNumber.' : 'Document travelling with the item: identity, photo, fields, visual, layout, serial, validity and copyNumber.'}</p></article>
        </div>
        <div className="xt-note"><strong>{pt ? 'Config com recovery' : 'Recovery-backed config'}</strong><p>{pt ? 'O arquivo administrativo é salvo pelo mecanismo de JSON recovery do PR Bridge. Uma gravação inválida/falha não substitui a configuração ativa.' : 'The admin file is stored through PR Bridge JSON recovery. A failed/invalid write does not replace the active configuration.'}</p></div>
      </section>

      <section className="docs-section" id="document-api">
        <SectionTitle number="14" label="Commands / API" title={pt ? 'Exports confiáveis permitem integrar polícia, veículos, empresas e outros recursos sem burlar o registro.' : 'Trusted exports integrate police, vehicles, businesses and other resources without bypassing the registry.'} />
        <div className="crafting-command-grid">
          <article><code>/forgedk</code><p>{pt ? 'Abre o painel administrativo após validar permissão no servidor.' : 'Opens the admin panel after server-side permission validation.'}</p></article>
          <article><code>OpenDocumentService(source, npcId)</code><p>{pt ? 'Abre programaticamente um atendimento já configurado.' : 'Programmatically opens an existing configured service desk.'}</p></article>
          <article><code>RegisterSubjectValidator(kind, callback)</code><p>{pt ? 'Registra validator confiável para subject vehicle ou business.' : 'Registers a trusted validator for vehicle or business subjects.'}</p></article>
        </div>

        <h3 className="xt-subheading">{pt ? 'Exports server-side' : 'Server-side exports'}</h3>
        <div className="crafting-api-list">
          {[
            ['CanIssueDocument(source, typeKey, subjectKey)', pt ? 'Valida disponibilidade, autorização e vínculo do subject.' : 'Validates availability, authorization and subject ownership.'],
            ['GetDocumentItems()', pt ? 'Retorna o conjunto de itens atuais e históricos classificados como documentos.' : 'Returns current and historical item names classified as documents.'],
            ['IssueDocument(source, request)', pt ? 'Emite documento por integração confiável sem depender de sessão NPC.' : 'Issues a document through trusted integration without requiring an NPC session.'],
            ['GrantDocumentPermission(source, key, category)', pt ? 'Concede autorização/categoria.' : 'Grants authorization/category.'],
            ['RevokeDocumentPermission(source, key, category)', pt ? 'Revoga autorização/categoria.' : 'Revokes authorization/category.'],
            ['VerifyDocument(metadata)', pt ? 'Compara a via contra o registro oficial e detecta alteração/falsificação/revogação.' : 'Checks a copy against official registry and detects alteration/forgery/revocation.'],
            ['RevokeDocument(serial)', pt ? 'Revoga um documento oficial pelo serial.' : 'Revokes an official document by serial.'],
            ['GetDeliveryReceipts(serial)', pt ? 'Lista recibos e tentativas de entrega daquele serial.' : 'Lists delivery receipts/attempts for a serial.'],
            ['GetDocument(serial)', pt ? 'Consulta o registro oficial pelo serial.' : 'Reads the official registry by serial.'],
            ['GetDocuments(owner)', pt ? 'Lista documentos registrados para o owner informado.' : 'Lists documents registered to an owner.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{pt ? 'Controle de acesso dos exports' : 'Export access control'}</h3>
        <div className="docs-prose">
          <p>{pt ? 'Os exports de integração não ficam abertos a qualquer resource. O chamador precisa estar na lista trustedResources ou possuir a ACE de integração configurada. A validação ocorre pelo resource invocador no servidor.' : 'Integration exports are not open to arbitrary resources. Caller must be in trustedResources or hold the configured integration ACE. Validation is performed from the invoking server resource.'}</p>
        </div>
        <LuaCodeBlock>{"-- Exemplo: validar e emitir por uma integração confiável\nlocal ok, reason = exports['forge-dk']:CanIssueDocument(source, 'id_card')\nif ok then\n    local issued, document = exports['forge-dk']:IssueDocument(source, {\n        typeKey = 'id_card',\n        account = 'bank'\n    })\nend\n\n-- Verificação oficial de uma via\nlocal valid, reason = exports['forge-dk']:VerifyDocument(itemMetadata)"}</LuaCodeBlock>
      </section>

      <section className="crafting-source-note">
        <span>{pt ? 'Revisão do código' : 'Source review'}</span>
        <h2>{pt ? 'Documentação construída a partir da implementação atual do forge-dk.' : 'Documentation built from the current forge-dk implementation.'}</h2>
        <p>{pt ? 'Foram revisados schema, configuração, fluxo de atendimento, emissão, registro, cópias, foto, falsificação, apresentação, administração, NUI, segurança de integração e testes automatizados. Esta página descreve o comportamento da branch main no momento da revisão.' : 'Schema, configuration, service flow, issuance, registry, copies, photo, forgery, presentation, administration, NUI, integration security and automated tests were reviewed. This page describes main-branch behavior at review time.'}</p>
        <div className="crafting-hero-actions">
          <a className="docs-primary-button" href={REPO} target="_blank" rel="noreferrer">Framework-Forge/forge-dk</a>
        </div>
      </section>
    </div>
  );
}
