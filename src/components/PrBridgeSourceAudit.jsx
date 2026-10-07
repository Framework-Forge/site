import { useMemo, useState } from 'react';
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
};

export default function PrBridgeSourceAudit({ locale = 'en' }) {
  const [query, setQuery] = useState('');
  const [context, setContext] = useState('all');
  const [module, setModule] = useState('all');
  const [kind, setKind] = useState('all');
  const [showEmpty, setShowEmpty] = useState(true);

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
  const isPt = locale === 'pt-BR';

  return (
    <section className="bridge-source-audit">
      <div className="bridge-source-audit-stats">
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.files}</strong><span>{isPt ? 'arquivos Lua' : 'Lua files'}</span></article>
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.lines.toLocaleString()}</strong><span>{isPt ? 'linhas auditadas' : 'audited lines'}</span></article>
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.functions.toLocaleString()}</strong><span>{isPt ? 'definições de função' : 'function definitions'}</span></article>
        <article><strong>{PR_BRIDGE_SOURCE_AUDIT_STATS.registrations}</strong><span>{isPt ? 'registros de runtime' : 'runtime registrations'}</span></article>
      </div>

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
