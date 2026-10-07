import { useI18n } from '../i18n';
import LuaCodeBlock from '../components/LuaCodeBlock';

const FORGE_REPO = 'https://github.com/Framework-Forge/Renewed-Banking';
const ORIGINAL_REPO = 'https://github.com/Renewed-Scripts/Renewed-Banking';

const SectionTitle = ({ number, label, title }) => (
  <div className="docs-section-heading">
    <span>{number}</span>
    <div><p>{label}</p><h2>{title}</h2></div>
  </div>
);

const Card = ({ eyebrow, title, children }) => (
  <article className="banking-card">
    <span>{eyebrow}</span>
    <h3>{title}</h3>
    <p>{children}</p>
  </article>
);

const Info = ({ label, children }) => (
  <div className="xt-info"><span>{label}</span><strong>{children}</strong></div>
);

export default function RenewedBankingDocs() {
  const { language } = useI18n();
  const isPt = language === 'pt-BR';

  return (
    <div className="banking-docs">
      <header className="banking-hero">
        <div className="banking-hero-copy">
          <div className="docs-eyebrow"><span className="docs-eyebrow-dot" />Forge Legacy • Banking Resource</div>
          <h1>Renewed-<span>Banking</span></h1>
          <p className="banking-lead">
            {isPt
              ? 'Sistema bancário completo para FiveM com contas pessoais, empresariais, gangs e contas compartilhadas, transferências, histórico de transações, gerenciamento de membros, compatibilidade com QB/QBX/ESX e uma camada administrativa da edição Forge.'
              : 'A complete FiveM banking system with personal, business, gang and shared accounts, transfers, transaction history, member management, QB/QBX/ESX support and an administrative layer in the Forge edition.'}
          </p>
          <div className="banking-hero-actions">
            <a className="docs-primary-button" href={FORGE_REPO} target="_blank" rel="noreferrer">Forge repository</a>
            <a className="docs-secondary-button" href={ORIGINAL_REPO} target="_blank" rel="noreferrer">Original repository</a>
            <a className="docs-secondary-button" href="#banking-install">{isPt ? 'Instalação' : 'Installation'}</a>
          </div>
          <div className="legacy-meta">
            <span>v2.1.4</span><span>FiveM</span><span>QB / QBX / ESX</span><span>Open Source</span>
          </div>
        </div>

        <div className="xt-summary-card banking-summary-card">
          <div className="xt-summary-top"><span>RB</span><strong>BANKING</strong></div>
          <Info label={isPt ? 'Versão' : 'Version'}>2.1.4</Info>
          <Info label={isPt ? 'Frameworks' : 'Frameworks'}>QB / QBX / ESX</Info>
          <Info label={isPt ? 'Dependências' : 'Dependencies'}>ox_lib • oxmysql • ox_target</Info>
          <Info label={isPt ? 'Interface' : 'Interface'}>Svelte NUI</Info>
          <Info label={isPt ? 'Persistência' : 'Storage'}>MariaDB</Info>
        </div>
      </header>

      <nav className="xt-toc banking-toc">
        <a href="#banking-overview">{isPt ? 'Visão geral' : 'Overview'}</a>
        <a href="#banking-install">{isPt ? 'Instalação' : 'Install'}</a>
        <a href="#banking-accounts">{isPt ? 'Contas' : 'Accounts'}</a>
        <a href="#banking-admin">{isPt ? 'Painel admin' : 'Admin panel'}</a>
        <a href="#banking-transactions">{isPt ? 'Transações' : 'Transactions'}</a>
        <a href="#banking-api">API / exports</a>
        <a href="#banking-compat">{isPt ? 'Compatibilidade' : 'Compatibility'}</a>
        <a href="#banking-db">{isPt ? 'Banco de dados' : 'Database'}</a>
      </nav>

      <section className="docs-section" id="banking-overview">
        <SectionTitle number="01" label={isPt ? 'Visão geral' : 'Overview'} title={isPt ? 'Um sistema bancário completo, orientado a contas e integrações.' : 'A complete account-oriented banking system.'} />
        <div className="docs-prose">
          <p>
            {isPt
              ? 'Renewed-Banking mantém uma camada central de contas em cache no servidor e apresenta ao jogador somente as contas às quais ele possui acesso: conta pessoal, contas de job, gang e contas compartilhadas. O saldo das contas organizacionais fica persistido em MariaDB enquanto o saldo pessoal continua sendo controlado pela framework.'
              : 'Renewed-Banking keeps a server-side account cache and exposes only the accounts available to the player: personal, job, gang and shared accounts. Organization balances are persisted in MariaDB while personal balances remain owned by the framework.'}
          </p>
          <p>
            {isPt
              ? 'A interface bancária usa NUI em Svelte, com ações de depósito, saque e transferência. Operações de saldo e histórico são processadas no servidor, e o resource mantém integrações de compatibilidade para qb-management e esx_society.'
              : 'The banking UI uses a Svelte NUI with deposit, withdraw and transfer actions. Balances and transaction history are handled on the server, with compatibility layers for qb-management and esx_society.'}
          </p>
        </div>
        <div className="banking-feature-grid">
          <Card eyebrow="PERSONAL" title={isPt ? 'Conta pessoal' : 'Personal account'}>{isPt ? 'Usa o banco/cash do personagem da framework e mantém o histórico em player_transactions.' : 'Uses framework bank/cash balances and stores transaction history in player_transactions.'}</Card>
          <Card eyebrow="SOCIETY" title={isPt ? 'Jobs e empresas' : 'Jobs & businesses'}>{isPt ? 'Contas organizacionais são carregadas em cache, possuem saldo próprio e respeitam bankAuth/grade conforme a framework.' : 'Organization accounts are cached, own their balance and respect framework job authorization.'}</Card>
          <Card eyebrow="GANG" title="Gang accounts">{isPt ? 'QB/QBX podem expor contas de gang com autorização por grade.' : 'QB/QBX can expose gang accounts with grade authorization.'}</Card>
          <Card eyebrow="SHARED" title={isPt ? 'Contas compartilhadas' : 'Shared accounts'}>{isPt ? 'Players podem criar contas, adicionar/remover membros, renomear e excluir contas que administram.' : 'Players can create accounts, manage members, rename and delete accounts they own.'}</Card>
          <Card eyebrow="LEDGER" title={isPt ? 'Histórico de transações' : 'Transaction ledger'}>{isPt ? 'Cada transação possui ID, título, valor, tipo, emissor, recebedor, mensagem e timestamp.' : 'Each transaction stores an ID, title, amount, type, issuer, receiver, message and timestamp.'}</Card>
          <Card eyebrow="UI" title="Svelte NUI">{isPt ? 'A UI recebe accounts, currency, traduções e estado ATM via mensagens NUI.' : 'The UI receives accounts, currency, translations and ATM state through NUI messages.'}</Card>
        </div>
      </section>

      <section className="docs-section" id="banking-install">
        <SectionTitle number="02" label={isPt ? 'Instalação' : 'Installation'} title={isPt ? 'Dependências OX e detecção automática de framework.' : 'OX dependencies with automatic framework detection.'} />
        <div className="xt-two-col banking-spaced-grid">
          <div>
            <h3>{isPt ? 'Dependências obrigatórias' : 'Required dependencies'}</h3>
            <div className="xt-pill-row"><span>ox_lib</span><span>oxmysql</span><span>ox_target</span></div>
            <LuaCodeBlock>{"ensure ox_lib\nensure oxmysql\nensure ox_target\nensure Renewed-Banking"}</LuaCodeBlock>
          </div>
          <div>
            <h3>{isPt ? 'Frameworks detectadas' : 'Detected frameworks'}</h3>
            <div className="xt-pill-row"><span>qb-core</span><span>qbx_core</span><span>es_extended</span></div>
            <p>{isPt ? 'client/framework.lua e server/framework.lua detectam automaticamente a framework iniciada. O resource é interrompido no servidor se nenhuma implementação suportada for encontrada.' : 'The framework layer detects the active supported framework automatically and stops server-side on unsupported stacks.'}</p>
          </div>
        </div>

        <div className="banking-config-grid">
          <article><strong>currency</strong><p>{isPt ? 'Código de moeda exibido pela interface, por exemplo USD, EUR ou GBP.' : 'Currency code used by the interface.'}</p></article>
          <article><strong>progressbar</strong><p>{isPt ? 'Seleciona progressCircle ou progressBar do ox_lib.' : 'Selects ox_lib progressCircle or progressBar.'}</p></article>
          <article><strong>atms</strong><p>{isPt ? 'Lista de modelos GTA usados para abrir a interface em modo ATM.' : 'List of GTA ATM models.'}</p></article>
          <article><strong>peds</strong><p>{isPt ? 'Define NPCs bancários, coordenadas e quais locais permitem criar/gerenciar contas.' : 'Defines bank NPCs, locations and account-management availability.'}</p></article>
          <article><strong>renewedMultiJob</strong><p>{isPt ? 'Integração opcional QB com multi-job do qb-phone.' : 'Optional QB multi-job integration.'}</p></article>
        </div>

        <div className="xt-note"><strong>{isPt ? 'Banco de dados' : 'Database'}</strong><p>{isPt ? 'O resource também cria as tabelas principais no startup através de MySQL.transaction, mas o arquivo Renewed-Banking.sql continua disponível para instalação manual/controlada.' : 'The resource creates its main tables on startup, while Renewed-Banking.sql remains available for manual installation.'}</p></div>
      </section>

      <section className="docs-section" id="banking-accounts">
        <SectionTitle number="03" label={isPt ? 'Modelo de contas' : 'Account model'} title={isPt ? 'Quatro tipos de conta apresentados por uma única interface.' : 'Four account types through one interface.'} />
        <div className="banking-account-flow">
          <div><span>01</span><strong>{isPt ? 'Player conecta' : 'Player connects'}</strong><p>{isPt ? 'UpdatePlayerAccount carrega histórico e vínculos de contas compartilhadas.' : 'UpdatePlayerAccount loads transaction history and shared-account memberships.'}</p></div>
          <div><span>02</span><strong>{isPt ? 'Servidor resolve acesso' : 'Server resolves access'}</strong><p>{isPt ? 'getBankData agrega conta pessoal, jobs autorizados, gang e contas compartilhadas.' : 'getBankData aggregates personal, authorized job, gang and shared accounts.'}</p></div>
          <div><span>03</span><strong>{isPt ? 'NUI recebe accounts' : 'NUI receives accounts'}</strong><p>{isPt ? 'O client envia setVisible com a lista completa e o estado ATM.' : 'The client sends setVisible with accounts and ATM mode.'}</p></div>
          <div><span>04</span><strong>{isPt ? 'Operações retornam estado novo' : 'Actions return refreshed state'}</strong><p>{isPt ? 'Deposit/withdraw/transfer retornam bankData atualizado para a interface.' : 'Deposit/withdraw/transfer return refreshed bank data.'}</p></div>
        </div>

        <div className="xt-two-col banking-spaced-grid">
          <div>
            <h3>{isPt ? 'Contas criadas pelo jogador' : 'Player-created accounts'}</h3>
            <p>{isPt ? 'Nos NPCs configurados com createAccounts=true o jogador pode criar uma conta compartilhada, listar contas que criou, alterar o identificador/nome, excluir e gerenciar membros.' : 'At configured bank managers players can create shared accounts, list owned accounts, rename/delete them and manage membership.'}</p>
          </div>
          <div>
            <h3>{isPt ? 'Autorização por membro' : 'Member authorization'}</h3>
            <p>{isPt ? 'A coluna auth é persistida como JSON. No cache, os identifiers autorizados são convertidos em um mapa para lookup rápido.' : 'The auth column is persisted as JSON and normalized into a lookup map in the server cache.'}</p>
          </div>
        </div>
      </section>

      <section className="docs-section" id="banking-admin">
        <SectionTitle number="04" label={isPt ? 'Administração Forge' : 'Forge administration'} title={isPt ? 'Painel administrativo para configuração e gestão do sistema bancário.' : 'Administrative panel for banking configuration and management.'} />
        <div className="banking-admin-callout">
          <div>
            <span>FORGE ADMIN</span>
            <h3>{isPt ? 'Configuração administrativa centralizada' : 'Centralized administrative configuration'}</h3>
            <p>{isPt ? 'A edição Forge possui um painel administrativo dedicado para ajustar configurações administrativas do sistema sem depender exclusivamente da edição manual de arquivos. A documentação trata esse painel como a superfície de gestão do recurso e separa essas ações das operações normais do jogador.' : 'The Forge edition includes a dedicated administrative panel for changing administrative banking settings without relying exclusively on manual file edits.'}</p>
          </div>
          <div className="banking-admin-capabilities">
            <article><strong>{isPt ? 'Configuração' : 'Configuration'}</strong><p>{isPt ? 'Centraliza parâmetros administrativos expostos pela edição Forge.' : 'Centralizes Forge administrative settings.'}</p></article>
            <article><strong>{isPt ? 'Contas' : 'Accounts'}</strong><p>{isPt ? 'Apoia a supervisão das estruturas de conta e dos vínculos administrativos.' : 'Supports supervision of account structures and administrative relationships.'}</p></article>
            <article><strong>{isPt ? 'Operação' : 'Operations'}</strong><p>{isPt ? 'Mantém configuração administrativa separada do fluxo bancário comum de depósitos, saques e transferências.' : 'Keeps administrative configuration separate from normal banking actions.'}</p></article>
            <article><strong>{isPt ? 'Segurança' : 'Security'}</strong><p>{isPt ? 'Acesso ao painel deve permanecer restrito às permissões administrativas definidas pela base.' : 'Panel access should remain restricted to the server administrative permission model.'}</p></article>
          </div>
        </div>
        <div className="xt-note warning"><strong>{isPt ? 'Segurança administrativa' : 'Administrative security'}</strong><p>{isPt ? 'Operações administrativas que alteram saldos, contas, membros ou configurações devem ser autorizadas no servidor. Nunca trate a NUI/painel como fronteira de segurança.' : 'Administrative mutations must be authorized server-side; the NUI is never the security boundary.'}</p></div>
      </section>

      <section className="docs-section" id="banking-transactions">
        <SectionTitle number="05" label={isPt ? 'Transações' : 'Transactions'} title={isPt ? 'Depósitos, saques e transferências com ledger persistente.' : 'Deposits, withdrawals and transfers with a persistent ledger.'} />
        <div className="banking-feature-grid">
          <Card eyebrow="DEPOSIT" title={isPt ? 'Depósito' : 'Deposit'}>{isPt ? 'Remove cash do jogador e adiciona ao banco pessoal ou conta organizacional. Em seguida registra a transação.' : 'Moves player cash into personal bank or an organization account and records the transaction.'}</Card>
          <Card eyebrow="WITHDRAW" title={isPt ? 'Saque' : 'Withdraw'}>{isPt ? 'Retira saldo bancário/organizacional, credita cash e registra a retirada no ledger.' : 'Debits bank/organization balance, credits cash and records the withdrawal.'}</Card>
          <Card eyebrow="TRANSFER" title={isPt ? 'Transferência' : 'Transfer'}>{isPt ? 'Suporta organização→organização, organização→player, player→organização e player→player.' : 'Supports organization-to-organization, organization-to-player, player-to-organization and player-to-player.'}</Card>
        </div>

        <LuaCodeBlock>{"local transaction = exports['Renewed-Banking']:handleTransaction(\n    account,\n    'Workshop payment',\n    2500,\n    'Invoice #1042',\n    'Mechanic Shop',\n    'Pierre Moraes',\n    'withdraw'\n)\n\nprint(transaction.trans_id)"}</LuaCodeBlock>

        <div className="banking-ledger-fields">
          {['trans_id','title','amount','trans_type','receiver','message','issuer','time'].map((field) => <code key={field}>{field}</code>)}
        </div>
      </section>

      <section className="docs-section" id="banking-api">
        <SectionTitle number="06" label="API / exports" title={isPt ? 'Exports de servidor para integração com outros resources.' : 'Server exports for integration with other resources.'} />

        <div className="banking-api-list">
          {[
            ['handleTransaction(account, title, amount, message, issuer, receiver, type, transID?)', isPt ? 'Adiciona uma entrada ao histórico de uma conta/player e retorna o objeto da transação.' : 'Adds an account/player transaction and returns the transaction object.'],
            ['getAccountMoney(account)', isPt ? 'Retorna o saldo de uma conta organizacional ou false.' : 'Returns organization account balance or false.'],
            ['addAccountMoney(account, amount)', isPt ? 'Adiciona saldo à conta e persiste a alteração.' : 'Adds account balance and persists it.'],
            ['removeAccountMoney(account, amount)', isPt ? 'Remove saldo se houver fundos suficientes.' : 'Removes balance when enough funds exist.'],
            ['changeAccountName(account, newName)', isPt ? 'Renomeia a conta. Export server-only sensível; use somente em backend confiável.' : 'Renames an account. Sensitive server-only export.'],
            ['GetJobAccount(jobName)', isPt ? 'Retorna a estrutura em cache de uma conta de job.' : 'Returns the cached job account structure.'],
            ['CreateJobAccount(job, initialBalance?)', isPt ? 'Cria uma conta de job em runtime e persiste em bank_accounts_new.' : 'Creates a job account at runtime and persists it.'],
            ['addAccountMember(account, member)', isPt ? 'Adiciona um personagem à lista auth de uma conta compartilhada.' : 'Adds a character to a shared account auth list.'],
            ['removeAccountMember(account, member)', isPt ? 'Remove um personagem da conta compartilhada e do cache online.' : 'Removes a character from the shared account and online cache.'],
            ['getAccountTransactions(account)', isPt ? 'Retorna o histórico de uma conta organizacional ou player em cache.' : 'Returns cached organization/player transaction history.'],
          ].map(([name,desc]) => <article key={name}><code>{name}</code><p>{desc}</p></article>)}
        </div>

        <h3 className="xt-subheading">{isPt ? 'Exemplos de integração' : 'Integration examples'}</h3>
        <LuaCodeBlock>{"-- saldo de uma sociedade\nlocal balance = exports['Renewed-Banking']:getAccountMoney('mechanic')\n\n-- adicionar / remover dinheiro\nexports['Renewed-Banking']:addAccountMoney('mechanic', 5000)\nlocal ok = exports['Renewed-Banking']:removeAccountMoney('mechanic', 1200)\n\n-- criar conta de job dinamicamente\nlocal account = exports['Renewed-Banking']:CreateJobAccount({\n    name = 'tuner',\n    label = 'Tuner Shop'\n}, 10000)\n\n-- ler histórico\nlocal transactions = exports['Renewed-Banking']:getAccountTransactions('mechanic')"}</LuaCodeBlock>
      </section>

      <section className="docs-section" id="banking-compat">
        <SectionTitle number="07" label={isPt ? 'Compatibilidade' : 'Compatibility'} title={isPt ? 'Drop-in parcial para ecossistemas QB e ESX existentes.' : 'Compatibility bridges for existing QB and ESX ecosystems.'} />
        <div className="xt-two-col banking-spaced-grid">
          <div>
            <h3>qb-management</h3>
            <p>{isPt ? 'O fxmanifest declara provide qb-management e o server registra exports compatíveis para GetAccount, GetGangAccount, AddMoney, AddGangMoney, RemoveMoney e RemoveGangMoney.' : 'The manifest provides qb-management and registers compatibility exports for account balance mutations.'}</p>
            <LuaCodeBlock>{"exports['qb-management']:GetAccount('mechanic')\nexports['qb-management']:AddMoney('mechanic', 500)\nexports['qb-management']:RemoveMoney('mechanic', 250)"}</LuaCodeBlock>
          </div>
          <div>
            <h3>esx_society</h3>
            <p>{isPt ? 'O resource também declara provide esx_society e registra eventos de compatibilidade para sociedade, depósito e retirada.' : 'The resource also provides esx_society compatibility events.'}</p>
            <LuaCodeBlock>{"TriggerServerEvent('esx_society:depositMoney', 'mechanic', 500)\nTriggerServerEvent('esx_society:withdrawMoney', 'mechanic', 250)"}</LuaCodeBlock>
          </div>
        </div>
      </section>

      <section className="docs-section" id="banking-db">
        <SectionTitle number="08" label={isPt ? 'Banco de dados' : 'Database'} title={isPt ? 'Duas tabelas principais, com JSON para histórico e autorização.' : 'Two primary tables with JSON-backed history and authorization.'} />
        <div className="xt-db-grid">
          <article><code>bank_accounts_new</code><p>{isPt ? 'Contas organizacionais/compartilhadas: id, saldo, transações, auth, congelamento e creator.' : 'Organization/shared accounts: id, balance, transactions, auth, frozen state and creator.'}</p></article>
          <article><code>player_transactions</code><p>{isPt ? 'Histórico individual do personagem e estado isFrozen.' : 'Per-character transaction history and frozen state.'}</p></article>
        </div>
        <LuaCodeBlock>{"CREATE TABLE IF NOT EXISTS bank_accounts_new (\n    id varchar(50) PRIMARY KEY,\n    amount int(11) DEFAULT 0,\n    transactions longtext DEFAULT '[]',\n    auth longtext DEFAULT '[]',\n    isFrozen int(11) DEFAULT 0,\n    creator varchar(50) DEFAULT NULL\n);\n\nCREATE TABLE IF NOT EXISTS player_transactions (\n    id varchar(50) PRIMARY KEY,\n    isFrozen int(11) DEFAULT 0,\n    transactions longtext DEFAULT '[]'\n);"}</LuaCodeBlock>
      </section>

      <section className="docs-section">
        <SectionTitle number="09" label={isPt ? 'Interface e localização' : 'UI & localization'} title={isPt ? 'NUI Svelte e 22 arquivos de idioma.' : 'Svelte NUI and 22 locale files.'} />
        <div className="banking-feature-grid">
          <Card eyebrow="NUI" title="Svelte">{isPt ? 'web/src contém a interface fonte. Em produção, o fxmanifest espera o build em web/public.' : 'web/src contains source UI; production expects the compiled web/public build.'}</Card>
          <Card eyebrow="LOCALE" title={isPt ? '22 idiomas' : '22 locales'}>{isPt ? 'O diretório locales inclui cs, da, de, el, en, es, et, fi, fr, hr, hu, id, it, lt, nl, pl, pt, ru, sl, sr, sv e tr.' : 'The locale directory includes 22 JSON language packs.'}</Card>
          <Card eyebrow="ATM" title={isPt ? 'Modo ATM' : 'ATM mode'}>{isPt ? 'A mesma NUI recebe atm=true e pode restringir/comportar ações conforme o contexto.' : 'The same NUI receives ATM mode state for contextual behavior.'}</Card>
        </div>
      </section>

      <section className="banking-source-note">
        <span>{isPt ? 'Origem e atribuição' : 'Origin & attribution'}</span>
        <h2>{isPt ? 'Forge mantém sua distribuição e preserva o projeto original.' : 'Forge maintains its distribution while preserving the original project.'}</h2>
        <p>{isPt ? 'Esta documentação referencia a versão Forge e também fornece acesso direto ao repositório original Renewed-Scripts/Renewed-Banking. O README original credita o recurso a uShifty e a interface 2.0 a qwadebot, com edição posterior de uShifty.' : 'This documentation links both the Forge distribution and the original Renewed-Scripts/Renewed-Banking project, preserving upstream attribution.'}</p>
        <div className="banking-hero-actions">
          <a className="docs-primary-button" href={FORGE_REPO} target="_blank" rel="noreferrer">Framework-Forge/Renewed-Banking</a>
          <a className="docs-secondary-button" href={ORIGINAL_REPO} target="_blank" rel="noreferrer">Renewed-Scripts/Renewed-Banking</a>
        </div>
      </section>
    </div>
  );
}
