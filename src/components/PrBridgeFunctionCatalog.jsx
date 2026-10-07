import React, { useMemo, useState } from 'react';
import { PR_BRIDGE_API, PR_BRIDGE_MODULES } from '../data/prBridgeApi.generated';
import { LuaCode } from './LuaCodeBlock';

const LABELS = {
  en: { search:'Search functions…', all:'All modules', functions:'functions', parameters:'Parameters', returns:'Return', example:'Example', noParams:'No parameters', empty:'No functions match this filter.', returnsValue:'Returns a value according to the active provider/runtime.', actionReturn:'Return value depends on the adapter or operation unless the specific contract documents otherwise.', source:'Source', tags:'Tags' },
  'pt-BR': { search:'Buscar funções…', all:'Todos os módulos', functions:'funções', parameters:'Parâmetros', returns:'Retorno', example:'Exemplo', noParams:'Sem parâmetros', empty:'Nenhuma função encontrada com esse filtro.', returnsValue:'Retorna um valor de acordo com o provider/runtime ativo.', actionReturn:'O retorno depende do adapter ou da operação quando o contrato específico não indicar outro comportamento.', source:'Fonte', tags:'Tags' },
  es: { search:'Buscar funciones…', all:'Todos los módulos', functions:'funciones', parameters:'Parámetros', returns:'Retorno', example:'Ejemplo', noParams:'Sin parámetros', empty:'No se encontraron funciones.', returnsValue:'Devuelve un valor según el provider/runtime activo.', actionReturn:'El retorno depende del adapter u operación cuando el contrato específico no indique lo contrario.', source:'Fuente', tags:'Tags' },
  fr: { search:'Rechercher des fonctions…', all:'Tous les modules', functions:'fonctions', parameters:'Paramètres', returns:'Retour', example:'Exemple', noParams:'Aucun paramètre', empty:'Aucune fonction ne correspond au filtre.', returnsValue:'Retourne une valeur selon le provider/runtime actif.', actionReturn:'Le retour dépend de l’adapter ou de l’opération lorsque le contrat précis ne dit pas autrement.', source:'Source', tags:'Tags' }
};

const ACTIONS = {
  en: { get:'Retrieves',fetch:'Fetches',find:'Finds',search:'Searches',read:'Reads',load:'Loads',resolve:'Resolves',list:'Lists',has:'Checks whether',can:'Checks whether',is:'Checks whether',set:'Sets',update:'Updates',save:'Saves',write:'Writes',add:'Adds',create:'Creates',register:'Registers',remove:'Removes',delete:'Deletes',clear:'Clears',destroy:'Destroys',open:'Opens',show:'Shows',close:'Closes',hide:'Hides',trigger:'Triggers',send:'Sends',notify:'Sends',await:'Waits for',request:'Requests',play:'Plays',start:'Starts',stop:'Stops',enable:'Enables',disable:'Disables',default:'Executes' },
  'pt-BR': { get:'Obtém',fetch:'Busca',find:'Localiza',search:'Pesquisa',read:'Lê',load:'Carrega',resolve:'Resolve',list:'Lista',has:'Verifica se',can:'Verifica se',is:'Verifica se',set:'Define',update:'Atualiza',save:'Salva',write:'Grava',add:'Adiciona',create:'Cria',register:'Registra',remove:'Remove',delete:'Exclui',clear:'Limpa',destroy:'Destrói',open:'Abre',show:'Exibe',close:'Fecha',hide:'Oculta',trigger:'Dispara',send:'Envia',notify:'Envia',await:'Aguarda',request:'Solicita',play:'Executa',start:'Inicia',stop:'Interrompe',enable:'Ativa',disable:'Desativa',default:'Executa' },
  es: { get:'Obtiene',fetch:'Obtiene',find:'Localiza',search:'Busca',read:'Lee',load:'Carga',resolve:'Resuelve',list:'Lista',has:'Comprueba si',can:'Comprueba si',is:'Comprueba si',set:'Define',update:'Actualiza',save:'Guarda',write:'Escribe',add:'Añade',create:'Crea',register:'Registra',remove:'Elimina',delete:'Elimina',clear:'Limpia',destroy:'Destruye',open:'Abre',show:'Muestra',close:'Cierra',hide:'Oculta',trigger:'Dispara',send:'Envía',notify:'Envía',await:'Espera',request:'Solicita',play:'Ejecuta',start:'Inicia',stop:'Detiene',enable:'Activa',disable:'Desactiva',default:'Ejecuta' },
  fr: { get:'Récupère',fetch:'Récupère',find:'Trouve',search:'Recherche',read:'Lit',load:'Charge',resolve:'Résout',list:'Liste',has:'Vérifie si',can:'Vérifie si',is:'Vérifie si',set:'Définit',update:'Met à jour',save:'Sauvegarde',write:'Écrit',add:'Ajoute',create:'Crée',register:'Enregistre',remove:'Retire',delete:'Supprime',clear:'Nettoie',destroy:'Détruit',open:'Ouvre',show:'Affiche',close:'Ferme',hide:'Masque',trigger:'Déclenche',send:'Envoie',notify:'Envoie',await:'Attend',request:'Demande',play:'Exécute',start:'Démarre',stop:'Arrête',enable:'Active',disable:'Désactive',default:'Exécute' }
};

function parseSignature(signature) {
  const open = signature.indexOf('(');
  const close = signature.lastIndexOf(')');
  const path = open === -1 ? signature : signature.slice(0, open);
  const raw = open === -1 || close < open ? '' : signature.slice(open + 1, close).trim();
  return { path, args: raw ? raw.split(',').map((arg) => arg.trim()).filter(Boolean) : [] };
}

function humanize(name) {
  return name.replace(/([a-z0-9])([A-Z])/g, '$1 $2').replace(/[_:.]/g, ' ').replace(/\s+/g, ' ').trim();
}

function describe(entry, locale) {
  const actions = ACTIONS[locale] || ACTIONS.en;
  const parsed = parseSignature(entry.signature);
  const fn = parsed.path.split('.').pop() || parsed.path;
  const lower = fn.toLowerCase();
  const prefix = Object.keys(actions).find((key) => key !== 'default' && lower.startsWith(key)) || 'default';
  const object = humanize(fn.replace(new RegExp('^' + prefix, 'i'), '') || fn).toLowerCase();
  const module = entry.module.replace(/^fivem\./, 'FiveM ');
  if (locale === 'pt-BR') return actions[prefix] + ' ' + object + ' no módulo ' + module + '. Disponível no contexto ' + entry.context + ' e encaminhada ao runtime/provider normalizado quando aplicável.';
  if (locale === 'es') return actions[prefix] + ' ' + object + ' en el módulo ' + module + '. Disponible en contexto ' + entry.context + ' y delegada al runtime/provider normalizado cuando corresponde.';
  if (locale === 'fr') return actions[prefix] + ' ' + object + ' dans le module ' + module + '. Disponible dans le contexte ' + entry.context + ' et déléguée au runtime/provider normalisé lorsque nécessaire.';
  return actions[prefix] + ' ' + object + ' in the ' + module + ' module. Available in the ' + entry.context + ' context and delegated to the normalized runtime/provider when applicable.';
}

function returnsValue(signature) {
  const parsed = parseSignature(signature);
  const fn = (parsed.path.split('.').pop() || '').toLowerCase();
  return /^(get|fetch|find|search|read|load|resolve|list|has|can|is|await|request|query|single|scalar|insert|remember|call|create)/.test(fn);
}

export default function PrBridgeFunctionCatalog({ locale = 'en', modules = null, searchable = false, extraSignatures = [] }) {
  const l = LABELS[locale] || LABELS.en;
  const allowedModules = modules && modules.length ? modules : PR_BRIDGE_MODULES;
  const [query, setQuery] = useState('');
  const [moduleFilter, setModuleFilter] = useState(searchable ? 'all' : (allowedModules[0] || 'all'));

  const rows = useMemo(() => {
    const q = query.trim().toLowerCase();
    return PR_BRIDGE_API.filter((entry) => {
      const allowedByModule = allowedModules.includes(entry.module);
      const allowedAsExtra = extraSignatures.includes(entry.signature);
      if (!allowedByModule && !allowedAsExtra) return false;
      if (searchable && moduleFilter !== 'all' && entry.module !== moduleFilter) return false;
      if (!q) return true;
      return (entry.module + ' ' + entry.context + ' ' + entry.signature).toLowerCase().includes(q);
    });
  }, [allowedModules.join('|'), extraSignatures.join('|'), moduleFilter, query, searchable]);

  const grouped = useMemo(() => {
    const map = new Map();
    for (const row of rows) {
      if (!map.has(row.module)) map.set(row.module, []);
      map.get(row.module).push(row);
    }
    return Array.from(map.entries());
  }, [rows]);

  return (
    <div className="bridge-function-catalog">
      {searchable && (
        <div className="bridge-function-toolbar">
          <input value={query} onChange={(event) => setQuery(event.target.value)} placeholder={l.search} />
          <select value={moduleFilter} onChange={(event) => setModuleFilter(event.target.value)}>
            <option value="all">{l.all}</option>
            {allowedModules.map((module) => <option key={module} value={module}>{module}</option>)}
          </select>
          <span>{rows.length} {l.functions}</span>
        </div>
      )}

      {!rows.length && <div className="bridge-note"><p>{l.empty}</p></div>}

      {grouped.map(([module, functions]) => (
        <section className="bridge-function-module" key={module}>
          <div className="bridge-function-module-head">
            <div><span>module</span><h3>{module}</h3></div>
            <strong>{functions.length} {l.functions}</strong>
          </div>

          <div className="bridge-function-list">
            {functions.map((entry) => {
              const parsed = parseSignature(entry.signature);
              return (
                <article className="bridge-function-card" key={entry.module + ':' + entry.context + ':' + entry.signature}>
                  <div className="bridge-function-card-head">
                    <code>{entry.signature}</code>
                    <span className={'bridge-context bridge-context-' + entry.context}>{entry.context}</span>
                  </div>
                  <p className="bridge-function-description">
                    {locale === 'pt-BR' && entry.detail ? entry.detail : describe(entry, locale)}
                  </p>

                  {(entry.directory || entry.tags) && (
                    <div className="bridge-function-source">
                      {entry.directory && (
                        <div>
                          <span>{l.source}</span>
                          <code>{entry.directory}</code>
                        </div>
                      )}
                      {entry.tags && (
                        <div>
                          <span>{l.tags}</span>
                          <p>{entry.tags}</p>
                        </div>
                      )}
                    </div>
                  )}
                  <dl className="bridge-function-meta">
                    <div>
                      <dt>{l.parameters}</dt>
                      <dd>{parsed.args.length ? parsed.args.map((arg) => <code key={arg}>{arg}</code>) : <span>{l.noParams}</span>}</dd>
                    </div>
                    <div>
                      <dt>{l.returns}</dt>
                      <dd>{returnsValue(entry.signature) ? l.returnsValue : l.actionReturn}</dd>
                    </div>
                  </dl>
                  <div className="bridge-function-example">
                    <span>{l.example}</span>
                    <pre><LuaCode code={entry.example} /></pre>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </div>
  );
}
