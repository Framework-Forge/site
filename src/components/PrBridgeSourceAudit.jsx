import { useMemo, useState } from 'react';
import { PR_BRIDGE_API } from '../data/prBridgeApi.generated';
import { PR_BRIDGE_REAL_EXAMPLES } from '../data/prBridgeExamples.generated';
import LuaCodeBlock from './LuaCodeBlock';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_0 } from '../data/prBridgeSourceAudit.batch0';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_1 } from '../data/prBridgeSourceAudit.batch1';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_2 } from '../data/prBridgeSourceAudit.batch2';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_3 } from '../data/prBridgeSourceAudit.batch3';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_4 } from '../data/prBridgeSourceAudit.batch4';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_5 } from '../data/prBridgeSourceAudit.batch5';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_6 } from '../data/prBridgeSourceAudit.batch6';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_7 } from '../data/prBridgeSourceAudit.batch7';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_8 } from '../data/prBridgeSourceAudit.batch8';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_9 } from '../data/prBridgeSourceAudit.batch9';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_10 } from '../data/prBridgeSourceAudit.batch10';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_11 } from '../data/prBridgeSourceAudit.batch11';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_12 } from '../data/prBridgeSourceAudit.batch12';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_13 } from '../data/prBridgeSourceAudit.batch13';
import { PR_BRIDGE_SOURCE_AUDIT_BATCH_14 } from '../data/prBridgeSourceAudit.batch14';

const AUDIT = [
  PR_BRIDGE_SOURCE_AUDIT_BATCH_0,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_1,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_2,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_3,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_4,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_5,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_6,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_7,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_8,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_9,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_10,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_11,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_12,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_13,
  PR_BRIDGE_SOURCE_AUDIT_BATCH_14
].flat();

const FUNCTION_KINDS = new Set(['function','local-function','assigned-function','table-function']);
const REGISTRATION_KINDS = new Set(['nui-callback','callback-register','net-event','event-handler','command-handler','export-handler']);

function dedupeRecords(file) {
  const seen = new Set();
  const output = [];
  for (const record of file.records || []) {
    const functionLike = FUNCTION_KINDS.has(record.kind);
    const key = functionLike
      ? [record.line, record.name, record.args].join('|')
      : [record.line, record.kind, record.name, record.args].join('|');
    if (seen.has(key)) continue;
    seen.add(key);
    output.push(record);
  }
  return output;
}

const NORMALIZED_AUDIT = AUDIT.map((file) => ({ ...file, records: dedupeRecords(file) }));
const ALL_RECORDS = NORMALIZED_AUDIT.flatMap((file) => file.records.map((record) => ({ ...record, file: file.path, context: file.context, module: file.module })));
const FUNCTION_RECORDS = ALL_RECORDS.filter((record) => FUNCTION_KINDS.has(record.kind));
const REGISTRATION_RECORDS = ALL_RECORDS.filter((record) => REGISTRATION_KINDS.has(record.kind));
const PUBLIC_PR_LIB_API = (() => {
  const seen = new Set();
  return PR_BRIDGE_API.filter((entry) => {
    if (!/^pr_lib\./.test(entry.signature)) return false;
    const key = entry.context + '|' + entry.signature;
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
})();
const PUBLIC_PR_LIB_MODULES = [...new Set(PUBLIC_PR_LIB_API.map((entry) => entry.module))].sort();
function getPublicFunctionPath(signature) {
  const index = signature.indexOf('(');
  return (index === -1 ? signature : signature.slice(0, index)).trim();
}

function splitSignatureArgs(signature) {
  const start = signature.indexOf('(');
  const end = signature.lastIndexOf(')');
  if (start === -1 || end <= start) return [];
  const raw = signature.slice(start + 1, end).trim();
  if (!raw) return [];

  const args = [];
  let current = '';
  let depth = 0;

  for (const char of raw) {
    if (char === ',' && depth === 0) {
      args.push(current.trim());
      current = '';
      continue;
    }

    if ('([{'.includes(char)) depth += 1;
    if (')]}'.includes(char)) depth = Math.max(0, depth - 1);
    current += char;
  }

  if (current.trim()) args.push(current.trim());
  return args;
}

function exampleValueForArg(arg) {
  const name = String(arg || '').replace(/\?$/, '').toLowerCase();

  if (!name) return "'value'";
  if (name === 'source' || name === 'src' || name.includes('playerid') || name === 'target') return 'source';
  if (name.includes('registry')) return 'registry';
  if (name.includes('length')) return '16';
  if (name.includes('pattern')) return "'ALPHANUMERIC'";
  if (name.includes('count') || name.includes('amount') || name.includes('grade') || name.includes('slot')) return '1';
  if (name.includes('timeout') || name.includes('duration') || name.includes('delay')) return '5000';
  if (name.includes('distance') || name.includes('radius')) return '2.0';
  if (name.includes('enabled') || name.includes('state') || name.includes('allow')) return 'true';
  if (name.includes('coords') || name.includes('position')) return 'vec3(0.0, 0.0, 0.0)';
  if (name.includes('heading') || name.includes('rotation')) return '0.0';
  if (name.includes('entity') || name.includes('vehicle') || name.includes('ped')) return 'entity';
  if (name.includes('netid')) return 'NetworkGetNetworkIdFromEntity(entity)';
  if (name.includes('model')) return "'prop_tool_bench02'";
  if (name.includes('plate')) return "'FORGE'";
  if (name.includes('item')) return "'repairkit'";
  if (name.includes('account')) return "'bank'";
  if (name.includes('job')) return "'police'";
  if (name.includes('event')) return "'example:event'";
  if (name.includes('name') || name.includes('id') || name.includes('key')) return "'example'";
  if (name.includes('metadata') || name.includes('options') || name.includes('data') || name.includes('payload') || name.includes('properties')) return '{}';
  if (name.includes('callback') || name === 'cb' || name.includes('handler')) {
    return "function(result)\n        print(result)\n    end";
  }

  return "'value'";
}

function shouldAssignResult(entry) {
  const fn = getPublicFunctionPath(entry.signature).split(/[.:]/).pop().toLowerCase();
  return /^(get|has|can|is|find|search|read|load|fetch|query|single|scalar|insert|create|await|remember|call|resolve|list|inspect)/.test(fn);
}

function buildFallbackExample(entry) {
  const path = getPublicFunctionPath(entry.signature);
  const args = splitSignatureArgs(entry.signature);
  const values = args.map(exampleValueForArg);
  const prefix = shouldAssignResult(entry) ? 'local result = ' : '';

  if (!values.length) {
    return prefix + path + '()';
  }

  const inline = prefix + path + '(' + values.join(', ') + ')';
  if (values.length <= 1 && inline.length <= 84 && !values.some((value) => value.includes('\n'))) {
    return inline;
  }

  const formattedValues = values.map((value) => {
    if (!value.includes('\n')) return '    ' + value + ',';
    return value
      .split('\n')
      .map((line, index) => (index === 0 ? '    ' : '    ') + line)
      .join('\n') + ',';
  });

  return [
    prefix + path + '(',
    ...formattedValues,
    ')',
  ].join('\n');
}

function getUsageExample(entry) {
  const path = getPublicFunctionPath(entry.signature);
  const real = PR_BRIDGE_REAL_EXAMPLES[path]?.[0];

  if (real) {
    return {
      code: real.code,
      source: 'pr_scriptTest/' + real.file + ':' + real.line,
      real: true,
    };
  }

  return {
    code: buildFallbackExample(entry),
    source: null,
    real: false,
  };
}

const PUBLIC_PR_LIB_BY_MODULE = PUBLIC_PR_LIB_MODULES
  .map((module) => ({
    module,
    count: PUBLIC_PR_LIB_API.filter((entry) => entry.module === module).length,
  }))
  .sort((a, b) => b.count - a.count || a.module.localeCompare(b.module));

function labelKind(kind, locale) {
  const pt = {
    'function':'função pública/método',
    'local-function':'função local',
    'assigned-function':'função atribuída',
    'table-function':'função em tabela',
    'nui-callback':'NUI callback',
    'callback-register':'callback registrado',
    'net-event':'net event',
    'event-handler':'event handler',
    'command-handler':'command handler',
    'export-handler':'export',
  };
  const en = {
    'function':'function / method',
    'local-function':'local function',
    'assigned-function':'assigned function',
    'table-function':'table function',
    'nui-callback':'NUI callback',
    'callback-register':'registered callback',
    'net-event':'net event',
    'event-handler':'event handler',
    'command-handler':'command handler',
    'export-handler':'export',
  };
  return (locale === 'pt-BR' ? pt : en)[kind] || kind;
}

export const PR_BRIDGE_SOURCE_AUDIT_STATS = {
  files: NORMALIZED_AUDIT.length,
  lines: NORMALIZED_AUDIT.reduce((sum, file) => sum + (file.lines || 0), 0),
  functions: FUNCTION_RECORDS.length,
  registrations: REGISTRATION_RECORDS.length,
  callbacks: REGISTRATION_RECORDS.filter((record) => record.kind === 'nui-callback' || record.kind === 'callback-register').length,
  events: REGISTRATION_RECORDS.filter((record) => record.kind === 'net-event' || record.kind === 'event-handler').length,
  interactFunctions: FUNCTION_RECORDS.filter((record) => record.file.startsWith('bridge/interact/')).length,
  callbackDefinitions: FUNCTION_RECORDS.filter((record) => record.file.startsWith('bridge/callback/') && record.name.startsWith('callback.')).length,
  publicApi: PUBLIC_PR_LIB_API.length,
  publicCategories: PUBLIC_PR_LIB_MODULES.length,
};

export default function PrBridgeSourceAudit({ locale = 'en' }) {
  const [query, setQuery] = useState('');
  const [context, setContext] = useState('all');
  const [module, setModule] = useState('all');
  const [kind, setKind] = useState('all');
  const [showEmpty, setShowEmpty] = useState(true);
  const [publicModule, setPublicModule] = useState('all');
  const [publicQuery, setPublicQuery] = useState('');

  const modules = useMemo(() => [...new Set(NORMALIZED_AUDIT.map((file) => file.module))].sort(), []);

  const filtered = useMemo(() => {
    const term = query.trim().toLowerCase();
    return NORMALIZED_AUDIT.map((file) => {
      let records = file.records;
      if (kind !== 'all') {
        if (kind === 'functions') records = records.filter((record) => FUNCTION_KINDS.has(record.kind));
        else if (kind === 'registrations') records = records.filter((record) => REGISTRATION_KINDS.has(record.kind));
        else records = records.filter((record) => record.kind === kind);
      }
      if (term) {
        records = records.filter((record) => {
          const haystack = [file.path, file.module, file.context, record.kind, record.name, record.args].join(' ').toLowerCase();
          return haystack.includes(term);
        });
      }
      const fileMatchesTerm = !term || [file.path, file.module, file.context].join(' ').toLowerCase().includes(term);
      const fileMatches = (context === 'all' || file.context === context)
        && (module === 'all' || file.module === module)
        && (fileMatchesTerm || records.length > 0);
      if (!fileMatches) return null;
      if (!showEmpty && records.length === 0) return null;
      return { ...file, records };
    }).filter(Boolean);
  }, [query, context, module, kind, showEmpty]);

  const visibleRecords = filtered.reduce((sum, file) => sum + file.records.length, 0);
  const visiblePublicApi = useMemo(() => {
    const term = publicQuery.trim().toLowerCase();
    return PUBLIC_PR_LIB_API.filter((entry) => {
      if (publicModule !== 'all' && entry.module !== publicModule) return false;
      if (!term) return publicModule !== 'all';
      return [entry.module, entry.context, entry.signature, entry.detail, entry.tags]
        .filter(Boolean)
        .join(' ')
        .toLowerCase()
        .includes(term);
    });
  }, [publicModule, publicQuery]);
  const isPt = locale === 'pt-BR';

  return (
    <section className="bridge-source-audit">
      <div className="bridge-source-audit-stats">
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.files}</strong><span>{isPt ? 'arquivos Lua' : 'Lua files'}</span></article>
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.lines.toLocaleString()}</strong><span>{isPt ? 'linhas auditadas' : 'audited lines'}</span></article>
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.functions.toLocaleString()}</strong><span>{isPt ? 'definições de função' : 'function definitions'}</span></article>
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.registrations}</strong><span>{isPt ? 'registros de runtime' : 'runtime registrations'}</span></article>
        <article className="bridge-source-audit-stat--public"><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.publicApi.toLocaleString()}</strong><span>{isPt ? 'funções públicas pr_lib' : 'public pr_lib functions'}</span></article>
        <article className="bridge-source-audit-stat--public"><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.publicCategories}</strong><span>{isPt ? 'categorias públicas' : 'public categories'}</span></article>
      </div>

      <section className="bridge-public-api-index">
        <div className="bridge-public-api-head">
          <div>
            <span>PUBLIC API</span>
            <h3>{isPt ? 'Funções chamáveis por outros scripts' : 'Functions callable by other scripts'}</h3>
            <p>{isPt
              ? 'Aqui entram somente contratos expostos como pr_lib.*. Helpers locais, funções internas e handlers do runtime continuam na auditoria abaixo, mas não contam como API pública.'
              : 'Only contracts exposed as pr_lib.* are counted here. Local helpers, internal functions and runtime handlers remain in the source audit below but are not counted as public API.'}</p>
          </div>
          <strong>{PUBLIC_PR_LIB_API.length.toLocaleString()}</strong>
        </div>

        <div className="bridge-public-api-categories">
          {PUBLIC_PR_LIB_BY_MODULE.map((item) => (
            <button
              type="button"
              key={item.module}
              className={publicModule === item.module ? 'is-active' : ''}
              onClick={() => setPublicModule((current) => current === item.module ? 'all' : item.module)}
            >
              <code>{item.module}</code>
              <span>{item.count}</span>
            </button>
          ))}
        </div>

        <div className="bridge-public-api-filter">
          <input
            value={publicQuery}
            onChange={(event) => setPublicQuery(event.target.value)}
            placeholder={isPt ? 'Buscar em pr_lib.*…' : 'Search pr_lib.*…'}
          />
          <select value={publicModule} onChange={(event) => setPublicModule(event.target.value)}>
            <option value="all">{isPt ? 'Selecione uma categoria' : 'Select a category'}</option>
            {PUBLIC_PR_LIB_BY_MODULE.map((item) => (
              <option key={item.module} value={item.module}>{item.module} ({item.count})</option>
            ))}
          </select>
        </div>

        {(publicModule !== 'all' || publicQuery.trim()) && (
          <div className="bridge-public-api-results">
            <div className="bridge-public-api-results-head">
              <span>{isPt ? 'Funções públicas encontradas' : 'Public functions found'}</span>
              <strong>{visiblePublicApi.length}</strong>
            </div>
            {visiblePublicApi.map((entry) => {
              const usage = getUsageExample(entry);

              return (
                <article className="bridge-public-api-function" key={entry.context + ':' + entry.signature}>
                  <div className="bridge-public-api-function-main">
                    <div>
                      <code className="bridge-public-api-signature">{entry.signature}</code>
                      <span>{entry.module} · {entry.context}</span>
                    </div>
                    {entry.detail && <p>{entry.detail}</p>}
                  </div>

                  <div className="bridge-public-api-example">
                    <div className="bridge-public-api-example-head">
                      <span>{isPt ? 'EXEMPLO DE USO' : 'USAGE EXAMPLE'}</span>
                      {usage.real ? (
                        <strong>{isPt ? 'Exemplo real · pr_scriptTest' : 'Real example · pr_scriptTest'}</strong>
                      ) : (
                        <strong>{isPt ? 'Exemplo da API' : 'API example'}</strong>
                      )}
                    </div>

                    <LuaCodeBlock className="bridge-public-api-lua-block">
                      {usage.code}
                    </LuaCodeBlock>

                    {usage.source && (
                      <div className="bridge-public-api-example-source">
                        <span>{isPt ? 'Fonte' : 'Source'}</span>
                        <code>{usage.source}</code>
                      </div>
                    )}
                  </div>
                </article>
              );
            })}
          </div>
        )}
      </section>

      <div className="bridge-source-audit-toolbar">
        <input
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder={isPt ? 'Buscar arquivo, função, callback ou módulo…' : 'Search file, function, callback or module…'}
        />
        <select value={context} onChange={(event) => setContext(event.target.value)}>
          <option value="all">{isPt ? 'Todos os contextos' : 'All contexts'}</option>
          <option value="client">client</option>
          <option value="server">server</option>
          <option value="shared">shared</option>
          <option value="mixed">mixed</option>
        </select>
        <select value={module} onChange={(event) => setModule(event.target.value)}>
          <option value="all">{isPt ? 'Todos os módulos' : 'All modules'}</option>
          {modules.map((value) => <option key={value} value={value}>{value}</option>)}
        </select>
        <select value={kind} onChange={(event) => setKind(event.target.value)}>
          <option value="all">{isPt ? 'Todos os tipos' : 'All kinds'}</option>
          <option value="functions">{isPt ? 'Somente funções' : 'Functions only'}</option>
          <option value="registrations">{isPt ? 'Callbacks / events / exports' : 'Callbacks / events / exports'}</option>
          <option value="nui-callback">NUI callbacks</option>
          <option value="callback-register">{isPt ? 'Callbacks registrados' : 'Registered callbacks'}</option>
          <option value="net-event">Net events</option>
          <option value="event-handler">Event handlers</option>
          <option value="export-handler">Exports</option>
        </select>
        <label>
          <input type="checkbox" checked={showEmpty} onChange={(event) => setShowEmpty(event.target.checked)} />
          <span>{isPt ? 'mostrar arquivos sem funções' : 'show files without functions'}</span>
        </label>
      </div>

      <div className="bridge-source-audit-summary">
        <strong>{filtered.length}</strong> {isPt ? 'arquivos visíveis' : 'visible files'}
        <span>·</span>
        <strong>{visibleRecords}</strong> {isPt ? 'registros visíveis' : 'visible records'}
      </div>

      <div className="bridge-source-audit-files">
        {filtered.map((file) => (
          <details className="bridge-source-file" key={file.path} open={query.trim().length > 0}>
            <summary>
              <div>
                <code>{file.path}</code>
                <span>{file.module} · {file.context} · {file.lines} {isPt ? 'linhas' : 'lines'}</span>
              </div>
              <strong>{file.records.length}</strong>
            </summary>
            {file.records.length > 0 ? (
              <div className="bridge-source-records">
                {file.records.map((record, index) => (
                  <article key={`${file.path}:${record.line}:${record.kind}:${record.name}:${index}`}>
                    <div className="bridge-source-record-meta">
                      <span className={`bridge-source-kind bridge-source-kind--${record.kind}`}>{labelKind(record.kind, locale)}</span>
                      <code>L{record.line}</code>
                    </div>
                    <code className="bridge-source-signature">{record.name}({record.args})</code>
                  </article>
                ))}
              </div>
            ) : (
              <p className="bridge-source-empty">{isPt ? 'Nenhuma função/callback/evento declarado diretamente neste arquivo.' : 'No function/callback/event declared directly in this file.'}</p>
            )}
          </details>
        ))}
      </div>
    </section>
  );
}
