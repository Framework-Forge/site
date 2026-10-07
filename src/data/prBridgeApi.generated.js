// AUTO-GENERATED from Pierremoraes-ofc/pr_bridge current main + docs/functions_datails.md
// Public documentation links intentionally remain on Framework-Forge/pr_bridge.
export const PR_BRIDGE_API = [
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.checkDependency(resource, minimumVersion, printMessage)",
    "detail": "Verifica se outro recurso dependência está rodando no servidor e se a versão instalada atende à restrição de versão mínima informada.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, check, dependency, shared",
    "example": "pr_lib.checkDependency(source, 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.deleteJson(path)",
    "detail": "Remove fisicamente o arquivo JSON correspondente ao caminho especificado.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, delete, json, shared",
    "example": "pr_lib.deleteJson('value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.jsonExists(path)",
    "detail": "Verifica de forma rápida a existência física de um arquivo no caminho JSON informado.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, json, exists, shared",
    "example": "pr_lib.jsonExists('value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.load(path, env, optional)",
    "detail": "Carrega e executa dinamicamente um chunk de código Lua a partir de um arquivo virtual ou real (path). Opcionalmente, permite passar um ambiente global customizado (env) para isolamento do escopo. Se optional for verdadeiro, o interpretador silencia erros de ausência do arquivo.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, load, shared",
    "example": "local result = pr_lib.load('value', 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.loadFile(resource, fileName, env, optional)",
    "detail": "Carrega um arquivo específico (fileName) de um determinado recurso ativo do servidor (resource) no ambiente customizado (env). Silencia falhas de carregamento se optional for true.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, load, file, shared",
    "example": "local result = pr_lib.loadFile(source, 'example', 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.loadJson(path, optional)",
    "detail": "Lê, decodifica e retorna uma tabela Lua a partir de um arquivo com formato JSON localizado em path.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, load, json, shared",
    "example": "local result = pr_lib.loadJson('value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.loadModule(path, env, optional)",
    "detail": "Importa dinamicamente submódulos e bibliotecas da estrutura interna da pr_bridge.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, load, module, shared",
    "example": "local result = pr_lib.loadModule('value', 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.mergeJson(path, changes, options)",
    "detail": "Mescla recursivamente dados novos de uma tabela (changes) em um arquivo JSON existente no disco, preservando as chaves anteriores.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, merge, json, shared",
    "example": "pr_lib.mergeJson('value', 'value', {})"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.readJson(path, optional)",
    "detail": "Lê, decodifica e retorna uma tabela Lua a partir de um arquivo com formato JSON localizado em path.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, read, json, shared",
    "example": "local result = pr_lib.readJson('value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.saveJson(path, value, options)",
    "detail": "Serializa uma tabela Lua (value) em formato JSON identado e legível, gravando-a no caminho (path).",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, save, json, shared",
    "example": "pr_lib.saveJson('value', 'value', {})"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.updateJson(path, changes, options)",
    "detail": "Mescla recursivamente dados novos de uma tabela (changes) em um arquivo JSON existente no disco, preservando as chaves anteriores.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, update, json, shared",
    "example": "pr_lib.updateJson('value', 'value', {})"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.versionCheck(repository)",
    "detail": "Executa uma checagem em background consultando a API do GitHub para verificar se a versão declarada no manifesto do recurso atual é inferior à última release pública (tag) do repositório informado.",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, version, check, shared",
    "example": "pr_lib.versionCheck('value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.writeJson(path, value, options)",
    "detail": "Serializa uma tabela Lua (value) em formato JSON identado e legível, gravando-a no caminho (path).",
    "directory": "pr_bridge/bridge/core.lua; pr_bridge/init.lua",
    "tags": "core, write, json, shared",
    "example": "pr_lib.writeJson('value', 'value', {})"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:clear()",
    "detail": "clear() Remove todas as entradas de tradução carregadas.",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, lang, clear, shared",
    "example": "lang:clear()"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:delete(phraseTarget, prefix)",
    "detail": "delete(phraseTarget, prefix) Apaga uma entrada específica de tradução.",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, lang, delete, shared",
    "example": "lang:delete('value', 'value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:extend(phrases, prefix)",
    "detail": "extend(phrases, prefix) Adiciona um conjunto de frases a um catálogo de tradução ativo sob um prefixo identificador de namespace.",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, lang, extend, shared",
    "example": "lang:extend('value', 'value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:has(key)",
    "detail": "has(key) Retorna um booleano que indica se a chave de tradução está mapeada na localidade ativa.",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, lang, has, shared",
    "example": "local result = lang:has('value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:locale(newLocale)",
    "detail": "locale(newLocale) Altera dinamicamente o código de localidade atual do objeto de tradução (ex: para \"pt\", \"en\", \"es\").",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, lang, shared",
    "example": "lang:locale('value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:replace(phrases)",
    "detail": "replace(phrases) Substitui todas as frases de localização atuais por um novo dicionário.",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, lang, replace, shared",
    "example": "lang:replace('value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:t(key, substitutions)",
    "detail": "t(key, substitutions) Recupera a tradução associada à key. Permite a interpolação dinâmica substituindo variáveis no texto (ex: %{nome}).",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, lang, shared",
    "example": "lang:t('value', 'value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "pr_lib.locale(invokingResource)",
    "detail": "Inicia a ponte de internacionalização do recurso que invocou a biblioteca.",
    "directory": "pr_bridge/bridge/locale.lua",
    "tags": "locale, shared",
    "example": "pr_lib.locale(source)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache(key, callback, timeout)",
    "detail": "Obtém o valor associado a uma chave. Caso não exista, executa a função de callback, persiste o seu retorno sob o tempo limite definido em timeout (milissegundos) e então entrega o dado retornado.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, shared, invalidação, estado, memória",
    "example": "pr_lib.cache('value', function(...) return true end, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.call(key, callback, timeout)",
    "detail": "Obtém o valor associado a uma chave. Caso não exista, executa a função de callback, persiste o seu retorno sob o tempo limite definido em timeout (milissegundos) e então entrega o dado retornado.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, call, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.call('value', function(...) return true end, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.clear(key)",
    "detail": "Limpa uma entrada de cache e notifica ouvintes ativos de alteração de estado.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, clear, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.clear('value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.clearPrefix(prefix)",
    "detail": "Invalida em lote todas as chaves do cache que começarem com um determinado termo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, clear, prefix, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.clearPrefix('value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.get(key, fallback)",
    "detail": "Busca um valor anteriormente guardado no cache. Se a chave não existir ou for nula, retorna o valor de fallback.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache.get('value', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.GetMetadata(source, metadata, timeout)",
    "detail": "Recupera metadados específicos de um jogador a partir do cache temporário de curta duração.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, metadata, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache.GetMetadata(source, {}, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.GetPlayer(source, timeout)",
    "detail": "Retorna o objeto do jogador do framework de forma ultra rápida usando cache em memória para diminuir chamadas repetidas de export.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, player, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache.GetPlayer(source, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.InvalidatePlayer(source)",
    "detail": "Limpa todas as instâncias de cache associadas à ID do jogador informada.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, invalidate, player, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.InvalidatePlayer(source)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.onChange(key, callback)",
    "detail": "Assina a alteração de uma chave de cache específica. O callback recebe (newValue, oldValue) quando o dado correspondente mudar.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, on, change, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.onChange('value', function(...) return true end)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.remember(key, callback, timeout)",
    "detail": "Obtém o valor associado a uma chave. Caso não exista, executa a função de callback, persiste o seu retorno sob o tempo limite definido em timeout (milissegundos) e então entrega o dado retornado.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, remember, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.remember('value', function(...) return true end, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.set(key, value)",
    "detail": "Armazena um dado em memória RAM atrelado a uma chave de identificação de cache.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, set, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.set('value', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.setShared(key, value, ttl?)",
    "detail": "Grava uma chave compartilhada no cache central do pr_bridge e sincroniza o novo valor entre os recursos consumidores do mesmo contexto. Somente chaves autorizadas pelo cache central podem ser publicadas.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, set, shared, invalidação, estado, memória",
    "example": "pr_lib.cache.setShared('value', 'value', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:clear(key?)",
    "detail": "Limpa os dados ou a operação “clear” e os dados relacionados mantidos pelo módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, clear, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:clear('value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:clearPrefix(prefix)",
    "detail": "Limpa os dados ou a operação “clear prefix” e os dados relacionados mantidos pelo módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, clear, prefix, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:clearPrefix('value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:get(key, fallback?)",
    "detail": "Obtém os dados ou a operação “get” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache:get('value', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:getEntities(kind?)",
    "detail": "Obtém os dados ou a operação “get entities” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, entities, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache:getEntities('value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:getEntity(entityOrNetId)",
    "detail": "Obtém os dados ou a operação “get entity” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, entity, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache:getEntity(entity)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:getEntityState(entityOrNetId)",
    "detail": "Obtém os dados ou a operação “get entity state” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, entity, state, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache:getEntityState(entity)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:getMetrics()",
    "detail": "Obtém os dados ou a operação “get metrics” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, metrics, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache:getMetrics()"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:has(key)",
    "detail": "Verifica se os dados ou a operação “has” está disponível ou atende ao filtro informado.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, has, shared, invalidação, estado, memória",
    "example": "local result = pr_lib.cache:has('value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:onChange(key, callback)",
    "detail": "Executa os dados ou a operação “on change” por meio da API pública do módulo `cache`.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, on, change, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:onChange('value', function(...) return true end)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:remember(key, callback, ttl?)",
    "detail": "Executa os dados ou a operação “remember” por meio da API pública do módulo `cache`.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, remember, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:remember('value', function(...) return true end, 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:scanWorld()",
    "detail": "Executa os dados ou a operação “scan world” por meio da API pública do módulo `cache`.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, scan, world, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:scanWorld()"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:set(key, value, ttl?)",
    "detail": "Define ou atualiza os dados ou a operação “set” usando a autoridade do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, set, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:set('value', 'value', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:setShared(key, value, ttl?)",
    "detail": "Define ou atualiza os dados ou a operação “set shared” usando a autoridade do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, set, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:setShared('value', 'value', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache:setWorldEnabled(enabled)",
    "detail": "Define ou atualiza os dados ou a operação “set world enabled” usando a autoridade do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, set, world, enabled, shared, invalidação, estado, memória",
    "example": "pr_lib.cache:setWorldEnabled(true)"
  },
  {
    "module": "cache",
    "context": "client",
    "signature": "pr_lib.getCacheMetrics()",
    "detail": "Obtém os dados ou a operação “get cache metrics” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, get, metrics, client, invalidação, estado, memória",
    "example": "local result = pr_lib.getCacheMetrics()"
  },
  {
    "module": "cache",
    "context": "client",
    "signature": "pr_lib.onCache(key, callback)",
    "detail": "Executa os dados ou a operação “on cache” por meio da API pública do módulo `cache_central_e_statebag-like`.",
    "directory": "pr_bridge/bridge/cache/shared.lua; pr_bridge/bridge/cache/central.lua",
    "tags": "cache, on, client, invalidação, estado, memória",
    "example": "pr_lib.onCache('value', function(...) return true end)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug(...)",
    "detail": "Imprime dados formatados para console caso o nível de debug do recurso esteja ativado.",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, shared",
    "example": "pr_lib.debug(args)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.error(...)",
    "detail": "Imprime logs de erro formatados em vermelho no console.",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, error, shared",
    "example": "pr_lib.debug.error(args)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.info(...)",
    "detail": "Exibe mensagens formatadas no console usando as cores apropriadas do padrão ANSI (cinza, azul, verde).",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, info, shared",
    "example": "pr_lib.debug.info(args)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.isEnabled()",
    "detail": "Retorna true se o console do recurso chamador estiver operando em modo verbose (depuração ativa).",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, is, enabled, shared",
    "example": "local result = pr_lib.debug.isEnabled()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.log(...)",
    "detail": "Exibe mensagens formatadas no console usando as cores apropriadas do padrão ANSI (cinza, azul, verde).",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, log, shared",
    "example": "pr_lib.debug.log(args)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.setEnabled(state)",
    "detail": "Habilita ou desabilita logs de debug em tempo de execução.",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, set, enabled, shared",
    "example": "pr_lib.debug.setEnabled(true)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.success(...)",
    "detail": "Exibe mensagens formatadas no console usando as cores apropriadas do padrão ANSI (cinza, azul, verde).",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, success, shared",
    "example": "pr_lib.debug.success(args)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.warn(...)",
    "detail": "Exibe logs de alerta em amarelo no console do servidor/cliente.",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, warn, shared",
    "example": "pr_lib.debug.warn(args)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.warning(...)",
    "detail": "Exibe logs de alerta em amarelo no console do servidor/cliente.",
    "directory": "pr_bridge/bridge/debug.lua",
    "tags": "debug, warning, shared",
    "example": "pr_lib.debug.warning(args)"
  },
  {
    "module": "events",
    "context": "server",
    "signature": "pr_lib.triggerClientEvent(eventName, target, ...)",
    "detail": "Dispara um evento de cliente para um ou mais jogadores de forma otimizada. Esta função realiza a serialização (msgpack) dos argumentos apenas uma vez, em vez de fazer por alvo, proporcionando ganhos significativos de desempenho ao disparar para múltiplos jogadores. O parâmetro target aceita um ID numérico, ou uma tabela contendo uma lista de IDs.",
    "directory": "pr_bridge/bridge/triggerClientEvent/server.lua",
    "tags": "events, trigger, client, event, server",
    "example": "pr_lib.triggerClientEvent('example', 'value', args)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddAccountBalance(source, account, amount, reason)",
    "detail": "Deposita um valor de dinheiro na conta informada do jogador, exigindo opcionalmente um motivo de log.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, account, balance, server",
    "example": "pr_lib.framework.AddAccountBalance(source, 1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddItem(source, itemName, count, metadata, slot)",
    "detail": "Adiciona um item ao inventário do jogador, especificando metadados ou o slot preferencial.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, item, server",
    "example": "pr_lib.framework.AddItem(source, 'example', 1, {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddJobAccountBalance(account, amount, reason)",
    "detail": "Adiciona fundos à conta bancária de uma facção/empresa/sociedade.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, job, account, balance, server",
    "example": "pr_lib.framework.AddJobAccountBalance(1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addMoney(src, amount, account, reason)",
    "detail": "Deposita um valor de dinheiro na conta informada do jogador, exigindo opcionalmente um motivo de log.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, money, server",
    "example": "pr_lib.framework.addMoney(source, 1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddPlayerAccountBalance(source, account, amount, reason)",
    "detail": "Deposita um valor de dinheiro na conta informada do jogador, exigindo opcionalmente um motivo de log.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, player, account, balance, server",
    "example": "pr_lib.framework.AddPlayerAccountBalance(source, 1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addPlayerMoney(source, account, amount, reason)",
    "detail": "Deposita um valor de dinheiro na conta informada do jogador, exigindo opcionalmente um motivo de log.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, player, money, server",
    "example": "pr_lib.framework.addPlayerMoney(source, 1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddPlayerToGang(citizenid, gangName, grade)",
    "detail": "Gerencia gangs do personagem por citizenid, incluindo adicionar, remover e definir gang principal.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, player, to, gang, server",
    "example": "pr_lib.framework.AddPlayerToGang('example', 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddPlayerToJob(citizenid, jobName, grade)",
    "detail": "Gerencia empregos do personagem por citizenid, incluindo adicionar, remover e definir emprego principal.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, player, to, job, server",
    "example": "pr_lib.framework.AddPlayerToJob('example', 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addSocietyBalance(account, amount, reason)",
    "detail": "Adiciona fundos à conta bancária de uma facção/empresa/sociedade.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, society, balance, server",
    "example": "pr_lib.framework.addSocietyBalance(1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddWeapon(source, data)",
    "detail": "Funções utilitárias para lidar com armamentos no padrão de frameworks antigos baseados em loadouts de armas físicas.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, add, weapon, server",
    "example": "pr_lib.framework.AddWeapon(source, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.CanCarryItem(source, itemName, count, metadata)",
    "detail": "Verifica se o inventário do jogador comporta o peso/slots adicionais daquele item específico.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, can, carry, item, server",
    "example": "local result = pr_lib.framework.CanCarryItem(source, 'example', 1, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.CheckItemValid(source, name, count)",
    "detail": "Validação interna de segurança de consistência de item de inventário.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, check, item, valid, server",
    "example": "pr_lib.framework.CheckItemValid(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.ClearPlayerInventory(source)",
    "detail": "Apaga todos os itens do inventário de um jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, clear, player, inventory, server",
    "example": "pr_lib.framework.ClearPlayerInventory(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.CreateWeaponData(source, data, weaponData)",
    "detail": "Funções utilitárias para lidar com armamentos no padrão de frameworks antigos baseados em loadouts de armas físicas.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, create, weapon, data, server",
    "example": "local result = pr_lib.framework.CreateWeaponData(source, {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.DeleteOwnedVehicle(plate)",
    "detail": "Remove a persistência de propriedade de um veículo.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, delete, owned, vehicle, server, veículo, carro",
    "example": "pr_lib.framework.DeleteOwnedVehicle('value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetAccountBalance(account)",
    "detail": "Obtém o saldo de dinheiro em uma conta específica (ex: \"cash\", \"bank\", \"crypto\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, account, balance, client",
    "example": "local result = pr_lib.framework.GetAccountBalance(1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetAccountBalance(source, account)",
    "detail": "Obtém o saldo de dinheiro em uma conta específica (ex: \"cash\", \"bank\", \"crypto\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, account, balance, server",
    "example": "local result = pr_lib.framework.GetAccountBalance(source, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetAllPlayers()",
    "detail": "Retorna uma lista contendo todos os IDs de jogadores conectados no servidor.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, all, players, server",
    "example": "local result = pr_lib.framework.GetAllPlayers()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.getCharacterName()",
    "detail": "Retorna o nome RP do personagem local.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, character, name, client",
    "example": "local result = pr_lib.framework.getCharacterName()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetClosestPlayer()",
    "detail": "Retorna o ID da entidade ped e o ID de rede do jogador mais próximo do personagem local.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, closest, player, client",
    "example": "local result = pr_lib.framework.GetClosestPlayer()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetClosestVehicle()",
    "detail": "Retorna o ID da entidade do veículo mais próximo.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, closest, vehicle, client, veículo, carro",
    "example": "local result = pr_lib.framework.GetClosestVehicle()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetCoords(source, withHeading)",
    "detail": "Retorna um vector3 ou vector4 contendo as coordenadas globais tridimensionais e o ângulo (heading) da entidade do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, coords, server",
    "example": "local result = pr_lib.framework.GetCoords(source, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetFrameworkGangs()",
    "detail": "Obtém a lista geral de gangs/facções cadastradas no framework ativo quando o framework oferecer esse conceito.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, gangs, server",
    "example": "local result = pr_lib.framework.GetFrameworkGangs()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetFrameworkJobs()",
    "detail": "Obtém a lista geral de empregos cadastrados no framework ativo.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, jobs, server",
    "example": "local result = pr_lib.framework.GetFrameworkJobs()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetIdentifier(source)",
    "detail": "Retorna o identificador persistente do jogador ativo do framework (CitizenID no QB/QBox, License/CharID no ESX).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, identifier, server",
    "example": "local result = pr_lib.framework.GetIdentifier(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getItemByName(name)",
    "detail": "Obtém a tabela de dados detalhada de um item pelo seu nome.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, item, by, name, server",
    "example": "local result = pr_lib.framework.getItemByName('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemByName(source, itemName, metadata, slot)",
    "detail": "Obtém a tabela de dados detalhada de um item pelo seu nome.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, item, by, name, server",
    "example": "local result = pr_lib.framework.GetItemByName(source, 'example', {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemBySlot(source, slot)",
    "detail": "Retorna os dados do item que ocupa o slot numérico informado.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, item, by, slot, server",
    "example": "local result = pr_lib.framework.GetItemBySlot(source, 'value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetItemCount(itemName, metadata, strict)",
    "detail": "Retorna a contagem exata daquele item no inventário.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, item, count, client",
    "example": "local result = pr_lib.framework.GetItemCount('example', {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemCount(source, itemName, metadata, strict)",
    "detail": "Retorna a contagem exata daquele item no inventário.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, item, count, server",
    "example": "local result = pr_lib.framework.GetItemCount(source, 'example', {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemData(source, itemName, metadata, slot)",
    "detail": "Obtém a tabela de dados detalhada de um item pelo seu nome.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, item, data, server",
    "example": "local result = pr_lib.framework.GetItemData(source, 'example', {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemLabel(itemName)",
    "detail": "Retorna o nome amigável/rótulo (label) de exibição do item cadastrado no sistema.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, item, label, server",
    "example": "local result = pr_lib.framework.GetItemLabel('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemlabel(itemName)",
    "detail": "Retorna o nome amigável/rótulo (label) de exibição do item cadastrado no sistema.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, itemlabel, server",
    "example": "local result = pr_lib.framework.GetItemlabel('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetJobAccountBalance(account)",
    "detail": "Retorna o saldo bancário atual da conta corporativa da sociedade/facção.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, job, account, balance, server",
    "example": "local result = pr_lib.framework.GetJobAccountBalance(1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetJobCount(jobName)",
    "detail": "Obtém a quantidade de funcionários que estão online e em serviço para o emprego especificado.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, job, count, server",
    "example": "local result = pr_lib.framework.GetJobCount('example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetJobInfo()",
    "detail": "Utilitários locais para resgatar dados do personagem sincronizados com o framework.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, job, info, client",
    "example": "local result = pr_lib.framework.GetJobInfo()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetMoney(account)",
    "detail": "Retorna o saldo financeiro do personagem local.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, money, client",
    "example": "local result = pr_lib.framework.GetMoney(1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetOwnedVehicleData(plate)",
    "detail": "Busca no banco de dados a estrutura de persistência associada a um veículo de proprietário baseado na placa.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, owned, vehicle, data, server, veículo, carro",
    "example": "local result = pr_lib.framework.GetOwnedVehicleData('value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetOwnedVehicleOwner(plate)",
    "detail": "Retorna o identificador único (CitizenID/License) do dono do veículo.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, owned, vehicle, owner, server, veículo, carro",
    "example": "local result = pr_lib.framework.GetOwnedVehicleOwner('value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayer()",
    "detail": "Retorna a tabela abstrata que representa o jogador ativo do framework para a ID (source) indicada.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, client",
    "example": "local result = pr_lib.framework.GetPlayer()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayer(source)",
    "detail": "Retorna a tabela abstrata que representa o jogador ativo do framework para a ID (source) indicada.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, server",
    "example": "local result = pr_lib.framework.GetPlayer(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerAccountBalance(source, account)",
    "detail": "Obtém o saldo de dinheiro em uma conta específica (ex: \"cash\", \"bank\", \"crypto\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, account, balance, server",
    "example": "local result = pr_lib.framework.GetPlayerAccountBalance(source, 1)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerData()",
    "detail": "Obtém os dados puros de persistência do personagem do jogador (como nome, metadados, dinheiro, etc.).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, data, client",
    "example": "local result = pr_lib.framework.GetPlayerData()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerData(source)",
    "detail": "Obtém os dados puros de persistência do personagem do jogador (como nome, metadados, dinheiro, etc.).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, data, server",
    "example": "local result = pr_lib.framework.GetPlayerData(source)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerDob()",
    "detail": "Retorna a data de nascimento registrada do personagem.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, dob, client",
    "example": "local result = pr_lib.framework.GetPlayerDob()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerDob(source)",
    "detail": "Retorna a data de nascimento registrada do personagem.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, dob, server",
    "example": "local result = pr_lib.framework.GetPlayerDob(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerDOB(source)",
    "detail": "Retorna a data de nascimento registrada do personagem.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, dob, server",
    "example": "local result = pr_lib.framework.getPlayerDOB(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerFromId(source)",
    "detail": "Retorna a tabela abstrata que representa o jogador ativo do framework para a ID (source) indicada.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, from, id, server",
    "example": "local result = pr_lib.framework.getPlayerFromId(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerFromId(source)",
    "detail": "Retorna a tabela abstrata que representa o jogador ativo do framework para a ID (source) indicada.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, from, id, server",
    "example": "local result = pr_lib.framework.GetPlayerFromId(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerFromIdentifier(identifier)",
    "detail": "Recupera um jogador logado a partir de sua licença primária ou ID única de cidadão (CitizenID/Identifier).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, from, identifier, server",
    "example": "local result = pr_lib.framework.GetPlayerFromIdentifier('example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerGender()",
    "detail": "Retorna o gênero do personagem (retorna \"m\", \"f\" ou representação equivalente).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, gender, client",
    "example": "local result = pr_lib.framework.GetPlayerGender()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerGender(source)",
    "detail": "Retorna o gênero do personagem (retorna \"m\", \"f\" ou representação equivalente).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, gender, server",
    "example": "local result = pr_lib.framework.GetPlayerGender(source)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerGroup()",
    "detail": "Retorna o grupo de permissão de administração do jogador (ex: \"user\", \"admin\", \"god\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, group, client",
    "example": "local result = pr_lib.framework.GetPlayerGroup()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerGroup(source)",
    "detail": "Retorna o grupo de permissão de administração do jogador (ex: \"user\", \"admin\", \"god\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, group, server",
    "example": "local result = pr_lib.framework.GetPlayerGroup(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerGroup(source)",
    "detail": "Retorna o grupo de permissão de administração do jogador (ex: \"user\", \"admin\", \"god\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, group, server",
    "example": "local result = pr_lib.framework.getPlayerGroup(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerHeight(source)",
    "detail": "Retorna a altura registrada do personagem no framework (normalmente usado em ESX).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, height, server",
    "example": "local result = pr_lib.framework.getPlayerHeight(source)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerIdentifier()",
    "detail": "Retorna o identificador persistente do jogador ativo do framework (CitizenID no QB/QBox, License/CharID no ESX).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, identifier, client",
    "example": "local result = pr_lib.framework.GetPlayerIdentifier()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerIdentifier(source)",
    "detail": "Retorna o identificador persistente do jogador ativo do framework (CitizenID no QB/QBox, License/CharID no ESX).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, identifier, server",
    "example": "local result = pr_lib.framework.GetPlayerIdentifier(source)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerInventory()",
    "detail": "Retorna o inventário bruto de itens carregados do jogador da forma normalizada pelo framework ativo.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, inventory, client",
    "example": "local result = pr_lib.framework.GetPlayerInventory()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerInventory(source)",
    "detail": "Retorna o inventário bruto de itens carregados do jogador da forma normalizada pelo framework ativo.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, inventory, server",
    "example": "local result = pr_lib.framework.GetPlayerInventory(source)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerJob()",
    "detail": "Retorna a tabela ou string contendo o emprego (job), cargo (grade) e permissões do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, job, client",
    "example": "local result = pr_lib.framework.GetPlayerJob()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerJob(source)",
    "detail": "Retorna a tabela ou string contendo o emprego (job), cargo (grade) e permissões do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, job, server",
    "example": "local result = pr_lib.framework.GetPlayerJob(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerJob(source, dataType)",
    "detail": "Retorna a tabela ou string contendo o emprego (job), cargo (grade) e permissões do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, job, server",
    "example": "local result = pr_lib.framework.getPlayerJob(source, 'value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerMetadata(key)",
    "detail": "Obtém um valor guardado dentro dos metadados persistentes do personagem.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, metadata, client",
    "example": "local result = pr_lib.framework.GetPlayerMetadata('value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.getPlayerMetadata(key)",
    "detail": "Obtém um valor guardado dentro dos metadados persistentes do personagem.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, metadata, client",
    "example": "local result = pr_lib.framework.getPlayerMetadata('value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerMetadata(source, key)",
    "detail": "Obtém um valor guardado dentro dos metadados persistentes do personagem.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, metadata, server",
    "example": "local result = pr_lib.framework.GetPlayerMetadata(source, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMetadata(source, key)",
    "detail": "Obtém um valor guardado dentro dos metadados persistentes do personagem.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, metadata, server",
    "example": "local result = pr_lib.framework.getPlayerMetadata(source, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMoney(source, account)",
    "detail": "Obtém o saldo de dinheiro em uma conta específica (ex: \"cash\", \"bank\", \"crypto\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, money, server",
    "example": "local result = pr_lib.framework.getPlayerMoney(source, 1)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerName()",
    "detail": "Obtém o nome em jogo (RP) do personagem do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, player, name, client",
    "example": "local result = pr_lib.framework.GetPlayerName()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerName(source)",
    "detail": "Obtém o nome em jogo (RP) do personagem do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, name, server",
    "example": "local result = pr_lib.framework.GetPlayerName(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerName(source)",
    "detail": "Obtém o nome em jogo (RP) do personagem do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, name, server",
    "example": "local result = pr_lib.framework.getPlayerName(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerNameByIdentifier(identifier)",
    "detail": "Recupera o nome do personagem do jogador offline ou online pelo seu identificador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, name, by, identifier, server",
    "example": "local result = pr_lib.framework.GetPlayerNameByIdentifier('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerSex(source)",
    "detail": "Retorna o gênero do personagem (retorna \"m\", \"f\" ou representação equivalente).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, sex, server",
    "example": "local result = pr_lib.framework.getPlayerSex(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerSourceFromPlayer(player)",
    "detail": "Extrai a ID (source) do servidor a partir do objeto abstrato do jogador entregue pelo framework.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, player, source, from, server",
    "example": "local result = pr_lib.framework.getPlayerSourceFromPlayer('value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetResourceName()",
    "detail": "Retorna o nome do recurso de framework ativo no servidor (ex: \"qbx_core\", \"qb-core\", \"es_extended\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, get, resource, name, client",
    "example": "local result = pr_lib.framework.GetResourceName()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetResourceName()",
    "detail": "Retorna o nome do recurso de framework ativo no servidor (ex: \"qbx_core\", \"qb-core\", \"es_extended\").",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, resource, name, server",
    "example": "local result = pr_lib.framework.GetResourceName()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetWeapon(source, name)",
    "detail": "Funções utilitárias para lidar com armamentos no padrão de frameworks antigos baseados em loadouts de armas físicas.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, get, weapon, server",
    "example": "local result = pr_lib.framework.GetWeapon(source, 'example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.HasItem(itemName, count, metadata, strict)",
    "detail": "Verifica se o jogador possui o item com a quantidade especificada.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, has, item, client",
    "example": "local result = pr_lib.framework.HasItem('example', 1, {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.HasItem(source, itemName, count, metadata, strict)",
    "detail": "Verifica se o jogador possui o item com a quantidade especificada.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, has, item, server",
    "example": "local result = pr_lib.framework.HasItem(source, 'example', 1, {}, 'value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.HideTextUI()",
    "detail": "Exibe e oculta painéis TextUI flutuantes.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, hide, text, ui, client",
    "example": "pr_lib.framework.HideTextUI()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.InsertOwnedVehicle(plate, owner, vehicle)",
    "detail": "Grava um veículo na tabela de propriedade de veículos persistentes.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, insert, owned, vehicle, server, veículo, carro",
    "example": "pr_lib.framework.InsertOwnedVehicle('value', 'value', entity)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.InventoryManagement(source, data)",
    "detail": "API utilitária para gerenciamento em lote de estados do inventário.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, inventory, management, server",
    "example": "pr_lib.framework.InventoryManagement(source, {})"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.IsPlayerDead()",
    "detail": "Retorna se o jogador local está em estado de morte/nocaute.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, is, player, dead, client",
    "example": "local result = pr_lib.framework.IsPlayerDead()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.IsPlayerLoaded()",
    "detail": "Retorna se o personagem local terminou de carregar completamente e já está ativo e spawnado no mapa.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, is, player, loaded, client",
    "example": "local result = pr_lib.framework.IsPlayerLoaded()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.Items(itemName)",
    "detail": "Retorna o nome amigável/rótulo (label) de exibição do item cadastrado no sistema.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, items, server",
    "example": "pr_lib.framework.Items('example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.Notify(message, kind, duration)",
    "detail": "Dispara uma notificação nativa simplificada baseada no framework carregado.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, notify, client",
    "example": "pr_lib.framework.Notify('value', 'value', 'value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.PlayerHasJob(jobName, grade)",
    "detail": "Verifica se o jogador pertence a um determinado grupo de emprego, com verificação opcional do nível do cargo (grade).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, player, has, job, client",
    "example": "pr_lib.framework.PlayerHasJob('example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.PlayerHasJob(source, jobName, grade)",
    "detail": "Verifica se o jogador pertence a um determinado grupo de emprego, com verificação opcional do nível do cargo (grade).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, player, has, job, server",
    "example": "pr_lib.framework.PlayerHasJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RegisterCallback(name, callback)",
    "detail": "Registra um server-callback que pode ser requisitado e retornado síncrona ou assincronamente pelo cliente.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, register, callback, server, request, resposta, timeout",
    "example": "local result = pr_lib.framework.RegisterCallback('example', function(...) return true end)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RegisterUsableItem(itemName, callback)",
    "detail": "Associa uma função executada quando o jogador consome ou usa o item a partir do inventário.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, register, usable, item, server",
    "example": "local result = pr_lib.framework.RegisterUsableItem('example', function(...) return true end)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveAccountBalance(source, account, amount, reason)",
    "detail": "Retira dinheiro da conta do jogador (ex: para compras). Retorna se a operação foi bem-sucedida.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, account, balance, server",
    "example": "pr_lib.framework.RemoveAccountBalance(source, 1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveItem(source, itemName, count, metadata, slot)",
    "detail": "Remove um item do inventário do jogador.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, item, server",
    "example": "pr_lib.framework.RemoveItem(source, 'example', 1, {}, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveJobAccountBalance(account, amount, reason)",
    "detail": "Remove fundos da conta corporativa/sociedade de um emprego específico.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, job, account, balance, server",
    "example": "pr_lib.framework.RemoveJobAccountBalance(1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemovePlayerAccountBalance(source, account, amount, reason)",
    "detail": "Retira dinheiro da conta do jogador (ex: para compras). Retorna se a operação foi bem-sucedida.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, player, account, balance, server",
    "example": "pr_lib.framework.RemovePlayerAccountBalance(source, 1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemovePlayerFromGang(citizenid, gangName)",
    "detail": "Gerencia gangs do personagem por citizenid, incluindo adicionar, remover e definir gang principal.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, player, from, gang, server",
    "example": "pr_lib.framework.RemovePlayerFromGang('example', 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemovePlayerFromJob(citizenid, jobName)",
    "detail": "Gerencia empregos do personagem por citizenid, incluindo adicionar, remover e definir emprego principal.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, player, from, job, server",
    "example": "pr_lib.framework.RemovePlayerFromJob('example', 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removePlayerMoney(source, account, amount, reason)",
    "detail": "Retira dinheiro da conta do jogador (ex: para compras). Retorna se a operação foi bem-sucedida.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, player, money, server",
    "example": "pr_lib.framework.removePlayerMoney(source, 1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removeSocietyBalance(account, amount, reason)",
    "detail": "Remove fundos da conta corporativa/sociedade de um emprego específico.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, society, balance, server",
    "example": "pr_lib.framework.removeSocietyBalance(1, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveWeapon(source, data)",
    "detail": "Funções utilitárias para lidar com armamentos no padrão de frameworks antigos baseados em loadouts de armas físicas.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, remove, weapon, server",
    "example": "pr_lib.framework.RemoveWeapon(source, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetMetadata(source, slot, metadata)",
    "detail": "Define dados e atributos internos customizados para um item em um slot específico.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, set, metadata, server",
    "example": "pr_lib.framework.SetMetadata(source, 'value', {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerDuty(source, onDuty)",
    "detail": "Altera o estado de servico do emprego ativo do jogador (true para entrar em servico, false para sair).",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, set, player, duty, server",
    "example": "pr_lib.framework.SetPlayerDuty(source, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerJob(source, jobName, grade)",
    "detail": "Altera o emprego e cargo do jogador remotamente.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, set, player, job, server",
    "example": "pr_lib.framework.SetPlayerJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerMetadata(source, key, value)",
    "detail": "Grava um valor nos metadados do jogador e sincroniza a alteração com o banco de dados e cliente.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, set, player, metadata, server",
    "example": "pr_lib.framework.SetPlayerMetadata(source, 'value', 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.setPlayerMetadata(source, key, value)",
    "detail": "Grava um valor nos metadados do jogador e sincroniza a alteração com o banco de dados e cliente.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, set, player, metadata, server",
    "example": "pr_lib.framework.setPlayerMetadata(source, 'value', 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerPrimaryGang(citizenid, gangName)",
    "detail": "Gerencia gangs do personagem por citizenid, incluindo adicionar, remover e definir gang principal.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, set, player, primary, gang, server",
    "example": "pr_lib.framework.SetPlayerPrimaryGang('example', 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerPrimaryJob(citizenid, jobName)",
    "detail": "Gerencia empregos do personagem por citizenid, incluindo adicionar, remover e definir emprego principal.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, set, player, primary, job, server",
    "example": "pr_lib.framework.SetPlayerPrimaryJob('example', 'example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.ShowTextUI(text)",
    "detail": "Exibe e oculta painéis TextUI flutuantes.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, show, text, ui, client",
    "example": "pr_lib.framework.ShowTextUI('value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.takeMoney(src, amount, reason)",
    "detail": "Retira dinheiro da conta do jogador (ex: para compras). Retorna se a operação foi bem-sucedida.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/server.lua",
    "tags": "framework, take, money, server",
    "example": "pr_lib.framework.takeMoney(source, 1, 'value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.toggleOutfit(wear, outfits)",
    "detail": "Aplica ou remove partes de roupas integradas a sistemas de vestiários de frameworks.",
    "directory": "pr_bridge/bridge/framework_normalizer.lua; pr_bridge/bridge/frameworks/*/client.lua",
    "tags": "framework, toggle, outfit, client",
    "example": "pr_lib.framework.toggleOutfit('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddItem(inv, item, count, metadata, slot, cb)",
    "detail": "Adiciona um item a um inventário qualquer (inv pode ser o ID do jogador ou o ID de um baú/stash).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, add, item, server",
    "example": "pr_lib.inventory.AddItem('value', 'value', 1, {}, 'value', function(...) return true end)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddItemIntoStash(id, item, amount, slot, metadata, slots, maxWeight)",
    "detail": "Lógicas de gerenciamento remoto de itens persistidos dentro de baús registrados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, add, item, into, stash, server",
    "example": "pr_lib.inventory.AddItemIntoStash('example', 'value', 1, 'value', {}, 'value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddStashItems(id, items)",
    "detail": "Lógicas de gerenciamento remoto de itens persistidos dentro de baús registrados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, add, stash, items, server",
    "example": "pr_lib.inventory.AddStashItems('example', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddTrunkItems(identifier, items)",
    "detail": "Adiciona itens ao porta-malas de um veículo persistente.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, add, trunk, items, server",
    "example": "pr_lib.inventory.AddTrunkItems('example', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryAmount(inv, item)",
    "detail": "Validam limites físicos (peso total, volume ou slots livres) de um inventário para determinar se novos itens podem ser adicionados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, can, carry, amount, server",
    "example": "local result = pr_lib.inventory.CanCarryAmount('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryItem(inv, item, count, metadata)",
    "detail": "Validam limites físicos (peso total, volume ou slots livres) de um inventário para determinar se novos itens podem ser adicionados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, can, carry, item, server",
    "example": "local result = pr_lib.inventory.CanCarryItem('value', 'value', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryWeight(inv, weight)",
    "detail": "Validam limites físicos (peso total, volume ou slots livres) de um inventário para determinar se novos itens podem ser adicionados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, can, carry, weight, server",
    "example": "local result = pr_lib.inventory.CanCarryWeight('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanSwapItem(inv, firstItem, firstItemCount, testItem, testItemCount)",
    "detail": "Retorna se o inventário suporta a troca física de um item por outro em termos de peso e capacidade restante.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, can, swap, item, server",
    "example": "local result = pr_lib.inventory.CanSwapItem('value', 'value', 1, 'value', 1)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.CheckIfInventoryBlocked()",
    "detail": "Desativa e bloqueia a abertura do inventário pelo jogador (útil em animações de algemas, etc.).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, check, if, blocked, client",
    "example": "pr_lib.inventory.CheckIfInventoryBlocked()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CheckItemValid(source, name, count)",
    "detail": "Validação interna de segurança de transação de inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, check, item, valid, server",
    "example": "pr_lib.inventory.CheckItemValid(source, 'example', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearInventory(inv, keep)",
    "detail": "Limpa todos os itens de um inventário, permitindo opcionalmente ignorar (preservar) itens informados na tabela keep.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, clear, server",
    "example": "pr_lib.inventory.ClearInventory('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearOtherInventory(type, id)",
    "detail": "Limpa inventários secundários de baús.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, clear, other, server",
    "example": "pr_lib.inventory.ClearOtherInventory('value', 'example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearPlayerInventory(inv, keep)",
    "detail": "Limpa todos os itens de um inventário, permitindo opcionalmente ignorar (preservar) itens informados na tabela keep.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, clear, player, server",
    "example": "pr_lib.inventory.ClearPlayerInventory('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearStash(id)",
    "detail": "Lógicas de gerenciamento remoto de itens persistidos dentro de baús registrados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, clear, stash, server",
    "example": "pr_lib.inventory.ClearStash('example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.closeInventory()",
    "detail": "Lógicas de abertura, fechamento e status de exibição da UI do inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, close, client",
    "example": "pr_lib.inventory.closeInventory()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ConfiscateInventory(source)",
    "detail": "Usado para apreender o inventário do jogador temporariamente e depois restaurá-lo (útil para sistemas de prisão).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, confiscate, server",
    "example": "pr_lib.inventory.ConfiscateInventory(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CreateDropFromPlayer(playerId)",
    "detail": "Dropa todos os itens do inventário de um jogador no chão em um contêiner físico.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, create, drop, from, player, server",
    "example": "local result = pr_lib.inventory.CreateDropFromPlayer(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CreateTemporaryStash(properties)",
    "detail": "Cria um baú em memória que é descartado após o encerramento do recurso ou limpeza.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, create, temporary, stash, server",
    "example": "local result = pr_lib.inventory.CreateTemporaryStash('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CreateUsableItem(item, cb)",
    "detail": "Registra lógica de ativação de itens consumíveis.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, create, usable, item, server",
    "example": "local result = pr_lib.inventory.CreateUsableItem('value', function(...) return true end)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CustomDrop(prefix, items, coords, slots, maxWeight, instance, model)",
    "detail": "Cria um container de drop customizado no chão no mundo 3D.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, custom, drop, server",
    "example": "pr_lib.inventory.CustomDrop('value', 'value', vec3(0.0, 0.0, 0.0), 'value', 'value', 'value', 'prop_tool_bench02')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.displayMetadata(metadata, value)",
    "detail": "Registra formatação de exibição de metadados customizados na interface do inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, display, metadata, client",
    "example": "pr_lib.inventory.displayMetadata({}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.forceOpenInventory(playerId, invType, data)",
    "detail": "Exibe na tela da ID especificada a UI do inventário aberta em um baú, jogador ou loja.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, force, open, server",
    "example": "pr_lib.inventory.forceOpenInventory(source, 'value', {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetClientPlayerInventory()",
    "detail": "Retorna a lista bruta de itens que estão atualmente na posse do jogador local.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, client, player",
    "example": "local result = pr_lib.inventory.GetClientPlayerInventory()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetContainerFromSlot(inv, slotId)",
    "detail": "Retorna dados de sub-recipientes/mochilas carregados no slot de inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, container, from, slot, server",
    "example": "local result = pr_lib.inventory.GetContainerFromSlot('value', 'example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getCurrentWeapon()",
    "detail": "Resgata arma equipada e inventário bruto local do cliente.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, current, weapon, client",
    "example": "local result = pr_lib.inventory.getCurrentWeapon()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetCurrentWeapon(inv)",
    "detail": "Retorna os dados da arma equipada ativa de um inventário de jogador.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, current, weapon, server",
    "example": "local result = pr_lib.inventory.GetCurrentWeapon('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetEmptySlot(inv)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, empty, slot, server",
    "example": "local result = pr_lib.inventory.GetEmptySlot('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetImagePath(item)",
    "detail": "Obtém o caminho da imagem de exibição do item para uso em interfaces NUI.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, image, path, client",
    "example": "local result = pr_lib.inventory.GetImagePath('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetImagePath(item)",
    "detail": "Obtém o caminho da imagem de exibição do item para uso em interfaces NUI.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, image, path, server",
    "example": "local result = pr_lib.inventory.GetImagePath('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventory(inv, owner)",
    "detail": "Obtém a tabela geral contendo todos os dados e itens de um inventário específico.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, server",
    "example": "local result = pr_lib.inventory.GetInventory('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getInventoryImg(image)",
    "detail": "Obtém o caminho da imagem de exibição do item para uso em interfaces NUI.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, img, client",
    "example": "local result = pr_lib.inventory.getInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetInventoryImg(image)",
    "detail": "Obtém o caminho da imagem de exibição do item para uso em interfaces NUI.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, img, client",
    "example": "local result = pr_lib.inventory.GetInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.getInventoryImg(image)",
    "detail": "Obtém o caminho da imagem de exibição do item para uso em interfaces NUI.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, img, server",
    "example": "local result = pr_lib.inventory.getInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventoryImg(image)",
    "detail": "Obtém o caminho da imagem de exibição do item para uso em interfaces NUI.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, img, server",
    "example": "local result = pr_lib.inventory.GetInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventoryItems(inv, owner)",
    "detail": "Obtém a tabela geral contendo todos os dados e itens de um inventário específico.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, items, server",
    "example": "local result = pr_lib.inventory.GetInventoryItems('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItem(inv, item, metadata, returnsCount)",
    "detail": "Busca os dados detalhados e integridade de um item pelo seu nome ou chave.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, server",
    "example": "local result = pr_lib.inventory.GetItem('value', 'value', {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemByName(inv, item, metadata, returnsCount)",
    "detail": "Busca os dados detalhados e integridade de um item pelo seu nome ou chave.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, by, name, server",
    "example": "local result = pr_lib.inventory.GetItemByName('value', 'value', {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemBySlot(inv, slot)",
    "detail": "Recupera dados do slot do inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, by, slot, server",
    "example": "local result = pr_lib.inventory.GetItemBySlot('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemCount(itemName, metadata, strict)",
    "detail": "Verificações de estoque de itens.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, item, count, client",
    "example": "local result = pr_lib.inventory.GetItemCount('example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemCount(inv, itemName, metadata, strict)",
    "detail": "Verificações de estoque de itens.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, count, server",
    "example": "local result = pr_lib.inventory.GetItemCount('value', 'example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemInfo(item)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, item, info, client",
    "example": "local result = pr_lib.inventory.GetItemInfo('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getItemInfo(item)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, item, info, client",
    "example": "local result = pr_lib.inventory.getItemInfo('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemInfo(item)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, info, server",
    "example": "local result = pr_lib.inventory.GetItemInfo('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.getItemInfo(item)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, info, server",
    "example": "local result = pr_lib.inventory.getItemInfo('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemLabel(item)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, item, label, client",
    "example": "local result = pr_lib.inventory.GetItemLabel('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemLabel(item)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, label, server",
    "example": "local result = pr_lib.inventory.GetItemLabel('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemList()",
    "detail": "Busca propriedades registradas locais dos itens.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, item, list, client",
    "example": "local result = pr_lib.inventory.GetItemList()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemSlots(inv, item, metadata)",
    "detail": "Retorna uma lista de números de slots que contêm o item pesquisado.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, item, slots, server",
    "example": "local result = pr_lib.inventory.GetItemSlots('value', 'value', {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerInventory()",
    "detail": "Obtém a tabela geral contendo todos os dados e itens de um inventário específico.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, player, client",
    "example": "local result = pr_lib.inventory.GetPlayerInventory()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetPlayerInventory(source)",
    "detail": "Obtém a tabela geral contendo todos os dados e itens de um inventário específico.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, player, server",
    "example": "local result = pr_lib.inventory.GetPlayerInventory(source)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerItems()",
    "detail": "Retorna a lista bruta de itens que estão atualmente na posse do jogador local.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, player, items, client",
    "example": "local result = pr_lib.inventory.GetPlayerItems()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerMaxWeight()",
    "detail": "Resgata propriedades de peso do jogador local.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, player, max, weight, client",
    "example": "local result = pr_lib.inventory.GetPlayerMaxWeight()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerWeight()",
    "detail": "Resgata propriedades de peso do jogador local.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, player, weight, client",
    "example": "local result = pr_lib.inventory.GetPlayerWeight()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetResourceName()",
    "detail": "Retorna o nome do script de inventário ativo no servidor.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, resource, name, client",
    "example": "local result = pr_lib.inventory.GetResourceName()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetResourceName()",
    "detail": "Retorna o nome do script de inventário ativo no servidor.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, resource, name, server",
    "example": "local result = pr_lib.inventory.GetResourceName()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlot(inv, slot)",
    "detail": "Recupera dados do slot do inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, slot, server",
    "example": "local result = pr_lib.inventory.GetSlot('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotForItem(inv, itemName, metadata)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, slot, for, item, server",
    "example": "local result = pr_lib.inventory.GetSlotForItem('value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotIdsWithItem(itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, slot, ids, with, item, client",
    "example": "local result = pr_lib.inventory.GetSlotIdsWithItem('example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotIdsWithItem(inv, itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, slot, ids, with, item, server",
    "example": "local result = pr_lib.inventory.GetSlotIdsWithItem('value', 'example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotIdWithItem(itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, slot, id, with, item, client",
    "example": "local result = pr_lib.inventory.GetSlotIdWithItem('example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotIdWithItem(inv, itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, slot, id, with, item, server",
    "example": "local result = pr_lib.inventory.GetSlotIdWithItem('value', 'example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotsWithItem(itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, slots, with, item, client",
    "example": "local result = pr_lib.inventory.GetSlotsWithItem('example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotsWithItem(inv, itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, slots, with, item, server",
    "example": "local result = pr_lib.inventory.GetSlotsWithItem('value', 'example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotWithItem(itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, slot, with, item, client",
    "example": "local result = pr_lib.inventory.GetSlotWithItem('example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotWithItem(inv, itemName, metadata, strict)",
    "detail": "Utilitários avançados de pesquisa de slots por critério de itens correspondentes ou vazios.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, slot, with, item, server",
    "example": "local result = pr_lib.inventory.GetSlotWithItem('value', 'example', {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetStashItems(id)",
    "detail": "Lógicas de gerenciamento remoto de itens persistidos dentro de baús registrados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, stash, items, server",
    "example": "local result = pr_lib.inventory.GetStashItems('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetTotalUsedSlots(source)",
    "detail": "Retorna o número de slots ocupados no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, total, used, slots, server",
    "example": "local result = pr_lib.inventory.GetTotalUsedSlots(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetTotalWeight(items)",
    "detail": "Calcula o peso total acumulado a partir de uma lista de itens.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, total, weight, server",
    "example": "local result = pr_lib.inventory.GetTotalWeight('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getUserInventory()",
    "detail": "Resgata arma equipada e inventário bruto local do cliente.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, user, client",
    "example": "local result = pr_lib.inventory.getUserInventory()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetWeaponAttachmentItems()",
    "detail": "Retorna a lista de itens válidos que servem como acessórios de armas.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, get, weapon, attachment, items, server",
    "example": "local result = pr_lib.inventory.GetWeaponAttachmentItems()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetWeaponList()",
    "detail": "Retorna lista de armas estáticas cadastradas.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, get, weapon, list, client",
    "example": "local result = pr_lib.inventory.GetWeaponList()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.giveItemToTarget(serverId, slotId, count)",
    "detail": "Transfere um item do inventário local diretamente para o jogador próximo (serverId).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, give, item, to, target, client, alvo, interação, zona",
    "example": "pr_lib.inventory.giveItemToTarget('example', 'example', 1)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.HasItem(item, count, metadata, strict)",
    "detail": "Verificações de estoque de itens.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, has, item, client",
    "example": "local result = pr_lib.inventory.HasItem('value', 1, {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.HasItem(inv, item, count, metadata, strict)",
    "detail": "Verificações de estoque de itens.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, has, item, server",
    "example": "local result = pr_lib.inventory.HasItem('value', 'value', 1, {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.InspectInventory(target, source)",
    "detail": "Permite que o jogador source visualize e inspecione em tempo real o inventário do jogador target.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, inspect, server",
    "example": "local result = pr_lib.inventory.InspectInventory('value', source)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.isInventoryOpen()",
    "detail": "Lógicas de abertura, fechamento e status de exibição da UI do inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, is, open, client",
    "example": "local result = pr_lib.inventory.isInventoryOpen()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.Items(itemName)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, items, client",
    "example": "pr_lib.inventory.Items('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.Items(itemName)",
    "detail": "Retornam metadados estáticos do item a partir da tabela de configuração de itens registrada no inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, items, server",
    "example": "pr_lib.inventory.Items('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.LoadInventory(source, identifier)",
    "detail": "Força salvamento ou carregamento direto de estados de inventários no banco de dados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, load, server",
    "example": "local result = pr_lib.inventory.LoadInventory(source, 'example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.openInventory(invType, data)",
    "detail": "Lógicas de abertura, fechamento e status de exibição da UI do inventário.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, open, client",
    "example": "pr_lib.inventory.openInventory('value', {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.openNearbyInventory()",
    "detail": "Abre o contêiner de drop/chão mais próximo.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, open, nearby, client",
    "example": "pr_lib.inventory.openNearbyInventory()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.OpenPlayerInventory(src, target)",
    "detail": "Exibe na tela da ID especificada a UI do inventário aberta em um baú, jogador ou loja.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, open, player, server",
    "example": "pr_lib.inventory.OpenPlayerInventory(source, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.OpenShop(src, shopTitle)",
    "detail": "Exibe na tela da ID especificada a UI do inventário aberta em um baú, jogador ou loja.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, open, shop, server",
    "example": "pr_lib.inventory.OpenShop(source, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.OpenStash(source, id)",
    "detail": "Exibe na tela da ID especificada a UI do inventário aberta em um baú, jogador ou loja.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, open, stash, server",
    "example": "pr_lib.inventory.OpenStash(source, 'example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterShop(shopTitle, invData, shopCoords, shopGroups)",
    "detail": "Cria uma loja dinâmica acessível por alvo ou coordenadas.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, register, shop, server",
    "example": "local result = pr_lib.inventory.RegisterShop('value', 'value', vec3(0.0, 0.0, 0.0), 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.RegisterStash(id, slots, weight)",
    "detail": "Registra dinamicamente um novo baú (stash) no inventário com regras de permissão.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, register, stash, client",
    "example": "local result = pr_lib.inventory.RegisterStash('example', 'value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterStash(id, label, slots, maxWeight, owner, groups, coords)",
    "detail": "Registra dinamicamente um novo baú (stash) no inventário com regras de permissão.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, register, stash, server",
    "example": "local result = pr_lib.inventory.RegisterStash('example', 'value', 'value', 'value', 'value', 'value', vec3(0.0, 0.0, 0.0))"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterUsableItem(item, cb, options)",
    "detail": "Registra lógica de ativação de itens consumíveis.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, register, usable, item, server",
    "example": "local result = pr_lib.inventory.RegisterUsableItem('value', function(...) return true end, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RemoveItem(inv, item, count, metadata, slot)",
    "detail": "Remove um item do inventário do jogador ou de um baú.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, remove, item, server",
    "example": "pr_lib.inventory.RemoveItem('value', 'value', 1, {}, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RemoveItemIntoStash(id, item, amount, slot, slots, maxWeight)",
    "detail": "Lógicas de gerenciamento remoto de itens persistidos dentro de baús registrados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, remove, item, into, stash, server",
    "example": "pr_lib.inventory.RemoveItemIntoStash('example', 'value', 1, 'value', 'value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ReturnInventory(source)",
    "detail": "Usado para apreender o inventário do jogador temporariamente e depois restaurá-lo (útil para sistemas de prisão).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, return, server",
    "example": "pr_lib.inventory.ReturnInventory(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SaveInventory(source, offline)",
    "detail": "Força salvamento ou carregamento direto de estados de inventários no banco de dados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, save, server",
    "example": "pr_lib.inventory.SaveInventory(source, 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.Search(search, item, metadata)",
    "detail": "Executa buscas avançadas utilizando seletores complexos (comportamento nativo do ox_inventory).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, search, client",
    "example": "pr_lib.inventory.Search('value', 'value', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.Search(inv, search, item, metadata)",
    "detail": "Executa buscas avançadas utilizando seletores complexos (comportamento nativo do ox_inventory).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, search, server",
    "example": "pr_lib.inventory.Search('value', 'value', 'value', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetDurability(inv, slot, durability)",
    "detail": "Define a durabilidade (vida útil de 0 a 100) do item de um determinado slot.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, durability, server",
    "example": "pr_lib.inventory.SetDurability('value', 'value', 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.setInClothing(state)",
    "detail": "Desativa o acesso a itens quando o jogador está em animação de troca de roupa.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, set, in, clothing, client",
    "example": "pr_lib.inventory.setInClothing(true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.setInventoryDisabled(state)",
    "detail": "Desativa e bloqueia a abertura do inventário pelo jogador (útil em animações de algemas, etc.).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, set, disabled, client",
    "example": "pr_lib.inventory.setInventoryDisabled(true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetInventoryItems(source, item, amount)",
    "detail": "APIs utilitárias para forçar estados de itens diretamente em slots.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, items, server",
    "example": "pr_lib.inventory.SetInventoryItems(source, 'value', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetItemBySlot(source, slot, itemdata)",
    "detail": "APIs utilitárias para forçar estados de itens diretamente em slots.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, item, by, slot, server",
    "example": "pr_lib.inventory.SetItemBySlot(source, 'value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetItemMetadata(inv, slot, metadata)",
    "detail": "Atualiza metadados específicos de um item que ocupa determinado slot (ex: definir durabilidade, número de série).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, item, metadata, server",
    "example": "pr_lib.inventory.SetItemMetadata('value', 'value', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.setItemMetadata(inv, slot, metadata)",
    "detail": "Atualiza metadados específicos de um item que ocupa determinado slot (ex: definir durabilidade, número de série).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, item, metadata, server",
    "example": "pr_lib.inventory.setItemMetadata('value', 'value', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetMaxWeight(inv, maxWeight)",
    "detail": "Redefine propriedades de limite de peso e contagem de slots de um baú/stash ou jogador.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, max, weight, server",
    "example": "pr_lib.inventory.SetMaxWeight('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetMetadata(inv, slot, metadata)",
    "detail": "Atualiza metadados específicos de um item que ocupa determinado slot (ex: definir durabilidade, número de série).",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, metadata, server",
    "example": "pr_lib.inventory.SetMetadata('value', 'value', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.setPlayerInventory(player, data)",
    "detail": "APIs utilitárias para forçar estados de itens diretamente em slots.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, player, server",
    "example": "pr_lib.inventory.setPlayerInventory('value', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetSlotCount(inv, slots)",
    "detail": "Redefine propriedades de limite de peso e contagem de slots de um baú/stash ou jogador.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, set, slot, count, server",
    "example": "pr_lib.inventory.SetSlotCount('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.setStashTarget(id, owner)",
    "detail": "Registra ou define o proprietário temporário de baús.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, set, stash, target, client, alvo, interação, zona",
    "example": "pr_lib.inventory.setStashTarget('example', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.UpdateStash(stashid, items)",
    "detail": "Lógicas de gerenciamento remoto de itens persistidos dentro de baús registrados.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, update, stash, server",
    "example": "pr_lib.inventory.UpdateStash('example', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.UpdateVehicle(oldPlate, newPlate)",
    "detail": "Transfere itens e baús de porta-malas/porta-luvas quando a placa de um veículo for alterada.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/server.lua",
    "tags": "inventory, update, vehicle, server, veículo, carro",
    "example": "pr_lib.inventory.UpdateVehicle('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.useItem(data, cb)",
    "detail": "Usa localmente um item ou aciona a tecla de atalho de um slot de arma/item.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, use, item, client",
    "example": "pr_lib.inventory.useItem({}, function(...) return true end)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.useSlot(slot)",
    "detail": "Usa localmente um item ou aciona a tecla de atalho de um slot de arma/item.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, use, slot, client",
    "example": "pr_lib.inventory.useSlot('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.weaponWheel(state)",
    "detail": "Ativa ou desativa o menu circular nativo de armas do GTA V.",
    "directory": "pr_bridge/bridge/inventory_normalizer.lua; pr_bridge/bridge/inventories/*/client.lua",
    "tags": "inventory, weapon, wheel, client",
    "example": "pr_lib.inventory.weaponWheel(true)"
  },
  {
    "module": "notification",
    "context": "client/server",
    "signature": "pr_lib.hideNotifyBubble(id)",
    "detail": "Fecha um balão privado ou global criado pelo cliente. No modo global, somente o jogador que criou aquela ID pode solicitar sua remoção.",
    "directory": "pr_bridge/bridge/notifications/*/{client,server}.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, hide, notify, bubble, client/server",
    "example": "pr_lib.hideNotifyBubble('example')"
  },
  {
    "module": "notification",
    "context": "client/server",
    "signature": "pr_lib.HideNotifyBubble(id)",
    "detail": "Fecha um balão privado ou global criado pelo cliente. No modo global, somente o jogador que criou aquela ID pode solicitar sua remoção.",
    "directory": "pr_bridge/bridge/notifications/*/{client,server}.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, hide, notify, bubble, client/server",
    "example": "pr_lib.HideNotifyBubble('example')"
  },
  {
    "module": "notification",
    "context": "client",
    "signature": "pr_lib.Notify(data)",
    "detail": "Atalhos da raiz para os módulos nativos de notificação e TextUI do pr_bridge, sem sobrescrever o adaptador legado pr_lib.notify.",
    "directory": "pr_bridge/bridge/notifications/*/client.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, client",
    "example": "pr_lib.Notify({})"
  },
  {
    "module": "notification",
    "context": "client/server",
    "signature": "pr_lib.notify(src, data, kind, duration)",
    "detail": "Envia uma notificação flutuante na tela. O parâmetro data pode ser uma string contendo a mensagem ou uma tabela com propriedades como title, description, type, icon, etc. kind e duration servem de fallback de tipo de notificação e tempo de duração (em ms).",
    "directory": "pr_bridge/bridge/notifications/*/{client,server}.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, client/server",
    "example": "pr_lib.notify(source, {}, 'value', 'value')"
  },
  {
    "module": "notification",
    "context": "client",
    "signature": "pr_lib.notify.GetResourceName()",
    "detail": "Retorna o script de notificação ativo (ex: \"ox_lib\", \"okokNotify\", \"bulletin\", etc.).",
    "directory": "pr_bridge/bridge/notifications/*/client.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, get, resource, name, client",
    "example": "local result = pr_lib.notify.GetResourceName()"
  },
  {
    "module": "notification",
    "context": "server",
    "signature": "pr_lib.notify.GetResourceName()",
    "detail": "Retorna o script de notificação ativo (ex: \"ox_lib\", \"okokNotify\", \"bulletin\", etc.).",
    "directory": "pr_bridge/bridge/notifications/*/server.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, get, resource, name, server",
    "example": "local result = pr_lib.notify.GetResourceName()"
  },
  {
    "module": "notification",
    "context": "client",
    "signature": "pr_lib.notify.Notify(data, kind, duration)",
    "detail": "Envia uma notificação flutuante na tela. O parâmetro data pode ser uma string contendo a mensagem ou uma tabela com propriedades como title, description, type, icon, etc. kind e duration servem de fallback de tipo de notificação e tempo de duração (em ms).",
    "directory": "pr_bridge/bridge/notifications/*/client.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, client",
    "example": "pr_lib.notify.Notify({}, 'value', 'value')"
  },
  {
    "module": "notification",
    "context": "server",
    "signature": "pr_lib.notify.Notify(src, data, kind, duration)",
    "detail": "Envia uma notificação flutuante na tela. O parâmetro data pode ser uma string contendo a mensagem ou uma tabela com propriedades como title, description, type, icon, etc. kind e duration servem de fallback de tipo de notificação e tempo de duração (em ms).",
    "directory": "pr_bridge/bridge/notifications/*/server.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, server",
    "example": "pr_lib.notify.Notify(source, {}, 'value', 'value')"
  },
  {
    "module": "notification",
    "context": "client/server",
    "signature": "pr_lib.notifyBubble(data, kind, duration)",
    "detail": "Mostra um balão de fala responsivo ancorado acima de um ped. Por padrão visibility = \"self\", então somente o jogador local recebe e vê o balão. Com visibility = \"all\", a solicitação passa pelo servidor e todos os jogadores veem o mesmo balão ancorado no ped de quem o acionou. Retorna a ID do balão.",
    "directory": "pr_bridge/bridge/notifications/*/{client,server}.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, bubble, client/server",
    "example": "pr_lib.notifyBubble({}, 'value', 'value')"
  },
  {
    "module": "notification",
    "context": "client/server",
    "signature": "pr_lib.NotifyBubble(data, kind, duration)",
    "detail": "Mostra um balão de fala responsivo ancorado acima de um ped. Por padrão visibility = \"self\", então somente o jogador local recebe e vê o balão. Com visibility = \"all\", a solicitação passa pelo servidor e todos os jogadores veem o mesmo balão ancorado no ped de quem o acionou. Retorna a ID do balão.",
    "directory": "pr_bridge/bridge/notifications/*/{client,server}.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, bubble, client/server",
    "example": "pr_lib.NotifyBubble({}, 'value', 'value')"
  },
  {
    "module": "notification",
    "context": "client/server",
    "signature": "pr_lib.NotifyBubbleAll(actorSource, data)",
    "detail": "Envia o balão a todos os clientes e o ancora no ped de actorSource. Exige a origem do personagem para impedir que cada cliente mostre o balão sobre si mesmo.",
    "directory": "pr_bridge/bridge/notifications/*/{client,server}.lua; pr_bridge/interface/client/modules/notify.lua",
    "tags": "notification, notify, bubble, all, client/server",
    "example": "pr_lib.NotifyBubbleAll(source, {})"
  },
  {
    "module": "alert",
    "context": "client",
    "signature": "pr_lib.alertDialog(data, timeout)",
    "detail": "Atalhos da raiz para os diálogos nativos da interface do pr_bridge. Linhas numéricas aceitam step e precision; quando nenhum passo é informado, o campo aceita livremente valores decimais em vez de restringir a inteiros.",
    "directory": "pr_bridge/interface/client/modules/alert.lua",
    "tags": "alert, dialog, client",
    "example": "pr_lib.alertDialog({}, 1)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.getOpenContextMenu()",
    "detail": "API nativa de contexto do pr_bridge, com estrutura 1:1 ao ox_lib.registerContext, mas renderizada pela NUI interna do bridge. Aceita campos como id, title, position, menu, canClose, searchPlaceholder, searchEmpty, options, onExit e onBack; cada opção pode usar title, description, icon, iconColor, iconAnimation, disabled, readOnly, metadata, progress, colorScheme, image, arrow, event, serverEvent, command, args, menu e onSelect. Funções onSelect ficam guardadas no runtime Lua e nunca são enviadas para a NUI. A lupa do cabeçalho filtra a lista atual por título, descrição, badge, tecla e metadata sem alterar os índices dos callbacks. O campo icon usa Bootstrap Icons e aceita nomes como person-fill, car-front-fill ou bi-geo-alt-fill; aliases comuns do formato anterior continuam convertidos para preservar compatibilidade.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, get, open, context, client, contexto, nui, interface",
    "example": "local result = pr_lib.getOpenContextMenu()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.hideContext(onExit)",
    "detail": "API nativa de contexto do pr_bridge, com estrutura 1:1 ao ox_lib.registerContext, mas renderizada pela NUI interna do bridge. Aceita campos como id, title, position, menu, canClose, searchPlaceholder, searchEmpty, options, onExit e onBack; cada opção pode usar title, description, icon, iconColor, iconAnimation, disabled, readOnly, metadata, progress, colorScheme, image, arrow, event, serverEvent, command, args, menu e onSelect. Funções onSelect ficam guardadas no runtime Lua e nunca são enviadas para a NUI. A lupa do cabeçalho filtra a lista atual por título, descrição, badge, tecla e metadata sem alterar os índices dos callbacks. O campo icon usa Bootstrap Icons e aceita nomes como person-fill, car-front-fill ou bi-geo-alt-fill; aliases comuns do formato anterior continuam convertidos para preservar compatibilidade.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, hide, context, client, contexto, nui, interface",
    "example": "pr_lib.hideContext('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.hideMenu(onExit)",
    "detail": "Atalhos diretos para o adaptador de menu. Quando data.position não for informado, registerMenu usa o lado definido no painel visual global.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, hide, client, contexto, nui, interface",
    "example": "pr_lib.hideMenu('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.AlertDialog(data, timeout)",
    "detail": "Exibe um modal pop-up de confirmação de tela cheia (ex: Sim/Não), aguardando e retornando a decisão do jogador.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, alert, dialog, client, contexto, nui, interface",
    "example": "pr_lib.menus.AlertDialog({}, 1)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.alertDialog(data, timeout)",
    "detail": "Executa os dados ou a operação “alert dialog” por meio da API pública do módulo `menu`.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, alert, dialog, client, contexto, nui, interface",
    "example": "pr_lib.menus.alertDialog({}, 1)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.GetOpenContextMenu()",
    "detail": "Criação, manipulação e status de exibição de menus contextuais modernos e listagens interativas.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, get, open, context, client, contexto, nui, interface",
    "example": "local result = pr_lib.menus.GetOpenContextMenu()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.getOpenContextMenu()",
    "detail": "Obtém os dados ou a operação “get open context menu” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, get, open, context, client, contexto, nui, interface",
    "example": "local result = pr_lib.menus.getOpenContextMenu()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.HideContext(onExit)",
    "detail": "Criação, manipulação e status de exibição de menus contextuais modernos e listagens interativas.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, hide, context, client, contexto, nui, interface",
    "example": "pr_lib.menus.HideContext('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.hideContext(onExit)",
    "detail": "Oculta os dados ou a operação “hide context” e restaura o estado visual relacionado.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, hide, context, client, contexto, nui, interface",
    "example": "pr_lib.menus.hideContext('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.HideMenu(onExit)",
    "detail": "Exibe ou esconde o menu registrado sob a ID correspondente.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, hide, client, contexto, nui, interface",
    "example": "pr_lib.menus.HideMenu('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.InputDialog(heading, rows, options)",
    "detail": "Exibe uma caixa de diálogo na tela contendo formulários de entrada de dados (inputs, selects, etc.), retornando as respostas do usuário após o envio.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, input, dialog, client, contexto, nui, interface",
    "example": "pr_lib.menus.InputDialog('value', 'value', {})"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.inputDialog(heading, rows, options)",
    "detail": "Executa os dados ou a operação “input dialog” por meio da API pública do módulo `menu`.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, input, dialog, client, contexto, nui, interface",
    "example": "pr_lib.menus.inputDialog('value', 'value', {})"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.RegisterContext(context)",
    "detail": "Criação, manipulação e status de exibição de menus contextuais modernos e listagens interativas.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, register, context, client, contexto, nui, interface",
    "example": "local result = pr_lib.menus.RegisterContext('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.registerContext(context)",
    "detail": "Registra os dados ou a operação “register context” no módulo ativo.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, register, context, client, contexto, nui, interface",
    "example": "local result = pr_lib.menus.registerContext('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.RegisterMenu(data, cb)",
    "detail": "Registra um menu contextual ou lista (baseado em ox_lib ou qb-menu). data descreve as opções e cb é acionado quando o menu é fechado ou atualizado.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, register, client, contexto, nui, interface",
    "example": "local result = pr_lib.menus.RegisterMenu({}, function(...) return true end)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.ShowContext(id)",
    "detail": "Criação, manipulação e status de exibição de menus contextuais modernos e listagens interativas.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, show, context, client, contexto, nui, interface",
    "example": "pr_lib.menus.ShowContext('example')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.showContext(id)",
    "detail": "Exibe os dados ou a operação “show context” ao jogador.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, show, context, client, contexto, nui, interface",
    "example": "pr_lib.menus.showContext('example')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.ShowMenu(id, startIndex)",
    "detail": "Exibe ou esconde o menu registrado sob a ID correspondente.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, menus, show, client, contexto, nui, interface",
    "example": "pr_lib.menus.ShowMenu('example', 'value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.registerContext(context)",
    "detail": "API nativa de contexto do pr_bridge, com estrutura 1:1 ao ox_lib.registerContext, mas renderizada pela NUI interna do bridge. Aceita campos como id, title, position, menu, canClose, searchPlaceholder, searchEmpty, options, onExit e onBack; cada opção pode usar title, description, icon, iconColor, iconAnimation, disabled, readOnly, metadata, progress, colorScheme, image, arrow, event, serverEvent, command, args, menu e onSelect. Funções onSelect ficam guardadas no runtime Lua e nunca são enviadas para a NUI. A lupa do cabeçalho filtra a lista atual por título, descrição, badge, tecla e metadata sem alterar os índices dos callbacks. O campo icon usa Bootstrap Icons e aceita nomes como person-fill, car-front-fill ou bi-geo-alt-fill; aliases comuns do formato anterior continuam convertidos para preservar compatibilidade.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, register, context, client, contexto, nui, interface",
    "example": "local result = pr_lib.registerContext('value')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.registerMenu(data, cb)",
    "detail": "Atalhos diretos para o adaptador de menu. Quando data.position não for informado, registerMenu usa o lado definido no painel visual global.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, register, client, contexto, nui, interface",
    "example": "local result = pr_lib.registerMenu({}, function(...) return true end)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.showContext(id)",
    "detail": "API nativa de contexto do pr_bridge, com estrutura 1:1 ao ox_lib.registerContext, mas renderizada pela NUI interna do bridge. Aceita campos como id, title, position, menu, canClose, searchPlaceholder, searchEmpty, options, onExit e onBack; cada opção pode usar title, description, icon, iconColor, iconAnimation, disabled, readOnly, metadata, progress, colorScheme, image, arrow, event, serverEvent, command, args, menu e onSelect. Funções onSelect ficam guardadas no runtime Lua e nunca são enviadas para a NUI. A lupa do cabeçalho filtra a lista atual por título, descrição, badge, tecla e metadata sem alterar os índices dos callbacks. O campo icon usa Bootstrap Icons e aceita nomes como person-fill, car-front-fill ou bi-geo-alt-fill; aliases comuns do formato anterior continuam convertidos para preservar compatibilidade.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, show, context, client, contexto, nui, interface",
    "example": "pr_lib.showContext('example')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.showMenu(id, startIndex)",
    "detail": "Atalhos diretos para o adaptador de menu. Quando data.position não for informado, registerMenu usa o lado definido no painel visual global.",
    "directory": "pr_bridge/bridge/menus/*/client.lua; pr_bridge/interface/client/modules/context.lua",
    "tags": "menu, show, client, contexto, nui, interface",
    "example": "pr_lib.showMenu('example', 'value')"
  },
  {
    "module": "interface",
    "context": "client",
    "signature": "pr_lib.getVisualConfig()",
    "detail": "Abre o painel administrativo global da interface e consulta sua configuração atual. A paleta, a opacidade e as posições de registerContext, metadata, alertDialog, inputDialog, registerMenu, notify, progress e TextUI ficam persistidas em interface/data/config.json e sincronizadas por state bag global. O comando /pr_ui_admin abre o mesmo painel; parentMenu pode apontar para um contexto pai e manter o botão de voltar.",
    "directory": "pr_bridge/interface/client/ui.lua; pr_bridge/interface/client/host.lua; pr_bridge/interface/server/config.lua",
    "tags": "interface, get, visual, config, client",
    "example": "local result = pr_lib.getVisualConfig()"
  },
  {
    "module": "interface",
    "context": "client",
    "signature": "pr_lib.openVisualAdminMenu(parentMenu)",
    "detail": "Abre o painel administrativo global da interface e consulta sua configuração atual. A paleta, a opacidade e as posições de registerContext, metadata, alertDialog, inputDialog, registerMenu, notify, progress e TextUI ficam persistidas em interface/data/config.json e sincronizadas por state bag global. O comando /pr_ui_admin abre o mesmo painel; parentMenu pode apontar para um contexto pai e manter o botão de voltar.",
    "directory": "pr_bridge/interface/client/ui.lua; pr_bridge/interface/client/host.lua; pr_bridge/interface/server/config.lua",
    "tags": "interface, open, visual, admin, menu, client, contexto, nui",
    "example": "pr_lib.openVisualAdminMenu('value')"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.hideTextUI()",
    "detail": "Atalhos da raiz para os módulos nativos de notificação e TextUI do pr_bridge, sem sobrescrever o adaptador legado pr_lib.notify.",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, hide, text, ui, client",
    "example": "pr_lib.hideTextUI()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.isTextUIOpen()",
    "detail": "Atalhos da raiz para os módulos nativos de notificação e TextUI do pr_bridge, sem sobrescrever o adaptador legado pr_lib.notify.",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, is, text, uiopen, client",
    "example": "local result = pr_lib.isTextUIOpen()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.showTextUI(text, options)",
    "detail": "Atalhos da raiz para os módulos nativos de notificação e TextUI do pr_bridge, sem sobrescrever o adaptador legado pr_lib.notify.",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, show, text, ui, client",
    "example": "pr_lib.showTextUI('value', {})"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.GetResourceName()",
    "detail": "Retorna o recurso ativo de TextUI.",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, bridge, get, resource, name, client",
    "example": "local result = pr_lib.textuiBridge.GetResourceName()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.Hide()",
    "detail": "Esconde o painel TextUI ativo.",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, bridge, hide, client",
    "example": "pr_lib.textuiBridge.Hide()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.hide()",
    "detail": "Esconde o painel TextUI ativo.",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, bridge, hide, client",
    "example": "pr_lib.textuiBridge.hide()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.Show(text)",
    "detail": "Mostra um painel flutuante de texto na tela (geralmente no canto superior esquerdo ou centralizado).",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, bridge, show, client",
    "example": "pr_lib.textuiBridge.Show('value')"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.show(text)",
    "detail": "Mostra um painel flutuante de texto na tela (geralmente no canto superior esquerdo ou centralizado).",
    "directory": "pr_bridge/bridge/textui/*/client.lua; pr_bridge/interface/client/modules/textui.lua",
    "tags": "textui, adapter, bridge, show, client",
    "example": "pr_lib.textuiBridge.show('value')"
  },
  {
    "module": "input",
    "context": "client",
    "signature": "pr_lib.inputDialog(heading, rows, options)",
    "detail": "Atalhos da raiz para os diálogos nativos da interface do pr_bridge. Linhas numéricas aceitam step e precision; quando nenhum passo é informado, o campo aceita livremente valores decimais em vez de restringir a inteiros.",
    "directory": "pr_bridge/interface/client/modules/input.lua",
    "tags": "input, dialog, client",
    "example": "pr_lib.inputDialog('value', 'value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddBoxZone(name, coords, size, rotation, options, debug)",
    "detail": "Cria uma zona de interação retangular tridimensional invisível (ou com renderização em debug) no mapa.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, box, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.AddBoxZone('example', vec3(0.0, 0.0, 0.0), 'value', 'value', {}, 'value')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addBoxZone(parameters)",
    "detail": "Cria uma zona de interação retangular tridimensional invisível (ou com renderização em debug) no mapa.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, box, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.addBoxZone('value')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addEntity(netIds, options)",
    "detail": "Registra opções de interação via menu de alvo (olho/olhar) para uma entidade de rede (veículo, ped, objeto) baseada em sua ID de rede.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.addEntity(NetworkGetNetworkIdFromEntity(entity), {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddEntity(netIds, options)",
    "detail": "Registra opções de interação via menu de alvo (olho/olhar) para uma entidade de rede (veículo, ped, objeto) baseada em sua ID de rede.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.AddEntity(NetworkGetNetworkIdFromEntity(entity), {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalObject(options)",
    "detail": "Adiciona ou remove opções de interações aplicadas globalmente em todos os objetos físicos do GTA.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, object, client, alvo, interação, zona",
    "example": "pr_lib.target.addGlobalObject({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddGlobalObject(options)",
    "detail": "Adiciona ou remove opções de interações aplicadas globalmente em todos os objetos físicos do GTA.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, object, client, alvo, interação, zona",
    "example": "pr_lib.target.AddGlobalObject({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalOption(options)",
    "detail": "Opções universais que se aplicam a qualquer elemento do mundo 3D focado pelo target.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, option, client, alvo, interação, zona",
    "example": "pr_lib.target.addGlobalOption({})"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.AddGlobalOption(options)",
    "detail": "registra opções universais.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, option, shared, alvo, interação, zona",
    "example": "pr_lib.target.AddGlobalOption({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalPed(options)",
    "detail": "Registra opções aplicadas a todos os peds (NPCs) do jogo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, ped, client, alvo, interação, zona",
    "example": "pr_lib.target.addGlobalPed({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddGlobalPed(options)",
    "detail": "Registra opções aplicadas a todos os peds (NPCs) do jogo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, ped, client, alvo, interação, zona",
    "example": "pr_lib.target.AddGlobalPed({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalPlayer(options)",
    "detail": "Adiciona opções que aparecerão ao focar a mira do alvo em outros jogadores online (ex: revistar, algemar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, player, client, alvo, interação, zona",
    "example": "pr_lib.target.addGlobalPlayer({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddGlobalPlayer(options)",
    "detail": "Adiciona opções que aparecerão ao focar a mira do alvo em outros jogadores online (ex: revistar, algemar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, player, client, alvo, interação, zona",
    "example": "pr_lib.target.AddGlobalPlayer({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalVehicle(options)",
    "detail": "Registra opções em todos os veículos do mundo 3D (ex: trancar/destrancar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, vehicle, client, alvo, interação, zona, veículo, carro",
    "example": "pr_lib.target.addGlobalVehicle({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddGlobalVehicle(options)",
    "detail": "Registra opções em todos os veículos do mundo 3D (ex: trancar/destrancar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, global, vehicle, client, alvo, interação, zona, veículo, carro",
    "example": "pr_lib.target.AddGlobalVehicle({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addLocalEntity(entities, options)",
    "detail": "Cria interações de alvo para entidades locais criadas unicamente no cliente.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, local, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.addLocalEntity('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddLocalEntity(entities, options)",
    "detail": "Cria interações de alvo para entidades locais criadas unicamente no cliente.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, local, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.AddLocalEntity('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addModel(models, options)",
    "detail": "Registra interações que estarão ativas globalmente para todos os objetos, peds ou veículos criados que utilizem o modelo 3D (hash/name) especificado (ex: lixeiras, hidrantes).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, model, client, alvo, interação, zona",
    "example": "pr_lib.target.addModel('prop_tool_bench02', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddModel(models, options)",
    "detail": "Registra interações que estarão ativas globalmente para todos os objetos, peds ou veículos criados que utilizem o modelo 3D (hash/name) especificado (ex: lixeiras, hidrantes).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, model, client, alvo, interação, zona",
    "example": "pr_lib.target.AddModel('prop_tool_bench02', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddPolyZone(name, points, thickness, options, debug)",
    "detail": "Cria uma zona de interação poligonal complexa contornando uma área.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, poly, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.AddPolyZone('example', 'value', 'value', {}, 'value')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addPolyZone(parameters)",
    "detail": "Cria uma zona de interação poligonal complexa contornando uma área.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, poly, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.addPolyZone('value')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddSphereZone(name, coords, radius, options, debug)",
    "detail": "Cria uma zona de interação esférica em coordenadas 3D.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, sphere, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.AddSphereZone('example', vec3(0.0, 0.0, 0.0), 1, {}, 'value')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addSphereZone(parameters)",
    "detail": "Cria uma zona de interação esférica em coordenadas 3D.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, add, sphere, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.addSphereZone('value')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.disableTargeting(state)",
    "detail": "Ativa ou desativa temporariamente a possibilidade do jogador usar a tecla do target.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, disable, targeting, client, alvo, interação, zona",
    "example": "pr_lib.target.disableTargeting(true)"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.DisableTargeting(state)",
    "detail": "Ativa ou desativa temporariamente a possibilidade do jogador usar a tecla do target.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, disable, targeting, client, alvo, interação, zona",
    "example": "pr_lib.target.DisableTargeting(true)"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.FixOptions(options)",
    "detail": "Normalização interna de parâmetros de callback de alvos.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, fix, options, client, alvo, interação, zona",
    "example": "pr_lib.target.FixOptions({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.GetResourceName()",
    "detail": "Nome do recurso de target ativo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, get, resource, name, client, alvo, interação, zona",
    "example": "local result = pr_lib.target.GetResourceName()"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.GetTargetOptions(...)",
    "detail": "retorna as coleções aplicáveis ao alvo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, get, options, shared, alvo, interação, zona",
    "example": "local result = pr_lib.target.GetTargetOptions(args)"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.getTargetOptions(entity, entityType, model)",
    "detail": "retorna as coleções aplicáveis ao alvo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, get, options, shared, alvo, interação, zona",
    "example": "local result = pr_lib.target.getTargetOptions(entity, entity, 'prop_tool_bench02')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.isActive()",
    "detail": "informa se o target está ativo no cliente.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, is, active, shared, alvo, interação, zona",
    "example": "local result = pr_lib.target.isActive()"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.IsActive()",
    "detail": "informa se o target está ativo no cliente.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, is, active, shared, alvo, interação, zona",
    "example": "local result = pr_lib.target.IsActive()"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeEntity(netIds, optionNames)",
    "detail": "Remove opções específicas registradas na entidade de rede.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.removeEntity(NetworkGetNetworkIdFromEntity(entity), 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveEntity(netIds, optionNames)",
    "detail": "Remove opções específicas registradas na entidade de rede.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.RemoveEntity(NetworkGetNetworkIdFromEntity(entity), 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalObject(optionNames)",
    "detail": "Adiciona ou remove opções de interações aplicadas globalmente em todos os objetos físicos do GTA.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, object, client, alvo, interação, zona",
    "example": "pr_lib.target.removeGlobalObject('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveGlobalObject(optionNames)",
    "detail": "Adiciona ou remove opções de interações aplicadas globalmente em todos os objetos físicos do GTA.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, object, client, alvo, interação, zona",
    "example": "pr_lib.target.RemoveGlobalObject('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalOption(optionNames)",
    "detail": "Opções universais que se aplicam a qualquer elemento do mundo 3D focado pelo target.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, option, client, alvo, interação, zona",
    "example": "pr_lib.target.removeGlobalOption('example')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.RemoveGlobalOption(names)",
    "detail": "remove opções universais do recurso chamador. As opções aceitam filtros groups, items, bones, offset, canInteract, menus menuName/openMenu e ações onSelect/export/event/serverEvent/command. O detalhamento arquitetural, configuração visual e compatibilidade qtarget estão em docs/TARGET_NATIVE.md.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, option, shared, alvo, interação, zona",
    "example": "pr_lib.target.RemoveGlobalOption('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalPed(optionNames)",
    "detail": "Registra opções aplicadas a todos os peds (NPCs) do jogo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, ped, client, alvo, interação, zona",
    "example": "pr_lib.target.removeGlobalPed('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveGlobalPed(optionNames)",
    "detail": "Registra opções aplicadas a todos os peds (NPCs) do jogo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, ped, client, alvo, interação, zona",
    "example": "pr_lib.target.RemoveGlobalPed('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalPlayer(optionNames)",
    "detail": "Adiciona opções que aparecerão ao focar a mira do alvo em outros jogadores online (ex: revistar, algemar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, player, client, alvo, interação, zona",
    "example": "pr_lib.target.removeGlobalPlayer('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveGlobalPlayer(optionNames)",
    "detail": "Adiciona opções que aparecerão ao focar a mira do alvo em outros jogadores online (ex: revistar, algemar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, player, client, alvo, interação, zona",
    "example": "pr_lib.target.RemoveGlobalPlayer('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalVehicle(optionNames)",
    "detail": "Registra opções em todos os veículos do mundo 3D (ex: trancar/destrancar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, vehicle, client, alvo, interação, zona, veículo, carro",
    "example": "pr_lib.target.removeGlobalVehicle('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveGlobalVehicle(optionNames)",
    "detail": "Registra opções em todos os veículos do mundo 3D (ex: trancar/destrancar).",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, global, vehicle, client, alvo, interação, zona, veículo, carro",
    "example": "pr_lib.target.RemoveGlobalVehicle('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeLocalEntity(entities, optionNames)",
    "detail": "Remove interações da entidade local.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, local, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.removeLocalEntity('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveLocalEntity(entities, optionNames)",
    "detail": "Remove interações da entidade local.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, local, entity, client, alvo, interação, zona",
    "example": "pr_lib.target.RemoveLocalEntity('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeModel(models, optionNames)",
    "detail": "Remove opções do modelo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, model, client, alvo, interação, zona",
    "example": "pr_lib.target.removeModel('prop_tool_bench02', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveModel(models, optionNames)",
    "detail": "Remove opções do modelo.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, model, client, alvo, interação, zona",
    "example": "pr_lib.target.RemoveModel('prop_tool_bench02', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeZone(id)",
    "detail": "Remove do sistema de alvos a zona de interação correspondente à ID informada.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.removeZone('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveZone(id)",
    "detail": "Remove do sistema de alvos a zona de interação correspondente à ID informada.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, remove, zone, client, alvo, interação, zona",
    "example": "pr_lib.target.RemoveZone('example')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.zoneExists(id)",
    "detail": "verifica uma zona por ID ou nome.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, zone, exists, shared, alvo, interação, zona",
    "example": "local result = pr_lib.target.zoneExists('example')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.ZoneExists(id)",
    "detail": "verifica uma zona por ID ou nome.",
    "directory": "pr_bridge/bridge/targets/; pr_bridge/bridge/targets/native/api.lua",
    "tags": "target, zone, exists, shared, alvo, interação, zona",
    "example": "local result = pr_lib.target.ZoneExists('example')"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.ClosePhone()",
    "detail": "Força o fechamento imediato do celular.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, close, client",
    "example": "pr_lib.phone.ClosePhone()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.CreateCall(name, number, image, anonymous)",
    "detail": "Inicia a interface de discagem/ligação local no telefone.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, create, call, client",
    "example": "local result = pr_lib.phone.CreateCall('example', 'value', 'value', 'value')"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.EndCall()",
    "detail": "Encerra a chamada ativa localmente.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, end, call, client",
    "example": "pr_lib.phone.EndCall()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.GetCall()",
    "detail": "Consultas de status de ligações ativas.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, get, call, client",
    "example": "local result = pr_lib.phone.GetCall()"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetMetaFromSource(source)",
    "detail": "Obtém metadados de mídia, contatos ou fotos salvos no celular do jogador.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, get, meta, from, source, server",
    "example": "local result = pr_lib.phone.GetMetaFromSource(source)"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetPhoneNames()",
    "detail": "Lista de telefones cadastrados.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, get, names, server",
    "example": "local result = pr_lib.phone.GetPhoneNames()"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetPhoneNumberFromIdentifier(source, mustBePhoneOwner)",
    "detail": "Retorna o número de telefone do jogador com base no seu identificador.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, get, number, from, identifier, server",
    "example": "local result = pr_lib.phone.GetPhoneNumberFromIdentifier(source, 'value')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.HasEmailAccount(source)",
    "detail": "Verifica se o jogador local criou ou possui uma conta ativa de e-mail no aplicativo.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, has, email, account, server",
    "example": "local result = pr_lib.phone.HasEmailAccount(source)"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.InPhone()",
    "detail": "Retorna true se o jogador local estiver ativamente com a interface gráfica do celular aberta.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, in, client",
    "example": "pr_lib.phone.InPhone()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.IsInCall()",
    "detail": "Consultas de status de ligações ativas.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, is, in, call, client",
    "example": "local result = pr_lib.phone.IsInCall()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.IsInCamera()",
    "detail": "Retorna se o jogador está utilizando o aplicativo de foto/câmera do celular.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, is, in, camera, client",
    "example": "local result = pr_lib.phone.IsInCamera()"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.IsInJobDuty(source)",
    "detail": "Modifica e consulta o status de trabalho em serviço de serviços de emergência nos aplicativos de dispatch/chamados do celular.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, is, in, job, duty, server",
    "example": "local result = pr_lib.phone.IsInJobDuty(source)"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.RemoveFromJobDuty(source)",
    "detail": "Modifica e consulta o status de trabalho em serviço de serviços de emergência nos aplicativos de dispatch/chamados do celular.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, remove, from, job, duty, server",
    "example": "pr_lib.phone.RemoveFromJobDuty(source)"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SendNewMessageFromApp(target, phoneNumber, message, appName)",
    "detail": "Envia uma notificação/mensagem de texto simulada de um aplicativo (ex: WhatsApp, Bank) para o celular de destino.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, send, new, message, from, app, server",
    "example": "pr_lib.phone.SendNewMessageFromApp('value', 'value', 'value', 'example')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SendSOSMessage(source, job, coords, messageType)",
    "detail": "Envia uma notificação de chamado de emergência GPS para os celulares das facções militares/médicas em serviço.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, send, sosmessage, server",
    "example": "pr_lib.phone.SendSOSMessage(source, 'value', vec3(0.0, 0.0, 0.0), 'value')"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.SetCanOpenPhone(bool)",
    "detail": "Bloqueia ou libera a capacidade do jogador de abrir a interface do telefone.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, set, can, open, client",
    "example": "pr_lib.phone.SetCanOpenPhone('value')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SetInJobDuty(source)",
    "detail": "Modifica e consulta o status de trabalho em serviço de serviços de emergência nos aplicativos de dispatch/chamados do celular.",
    "directory": "pr_bridge/bridge/phones/*/server.lua",
    "tags": "phone, set, in, job, duty, server",
    "example": "pr_lib.phone.SetInJobDuty(source)"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.SetSOS(bool)",
    "detail": "Ativa ou desativa alertas persistentes de GPS SOS locais.",
    "directory": "pr_bridge/bridge/phones/*/client.lua",
    "tags": "phone, set, sos, client",
    "example": "pr_lib.phone.SetSOS('value')"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progress.doProgressbar(duration, label, anim)",
    "detail": "Mostra uma barra de carregamento de progresso linear na tela com tempo especificado em duration (ms) executando opcionalmente uma animação no personagem (anim).",
    "directory": "pr_bridge/bridge/progressbar/*/client.lua",
    "tags": "progressbar, progress, do, client",
    "example": "pr_lib.progress.doProgressbar('value', 'value', 'value')"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progress.doProgressCircle(duration, label, anim)",
    "detail": "Exibe um progresso circular real na NUI Svelte e preserva animação, props, bloqueios e cancelamento. As APIs pr_lib.progressCircle(data) e pr_lib.progress.progressCircle(data) aceitam o contrato do ox_lib, incluindo duration, label, position, canCancel, disable, anim, prop e color. O campo position aceita top/top-center, middle/center e bottom/bottom-center; quando informado na chamada ele prevalece sobre a posição global, e quando omitido o runtime Lua resolve e envia explicitamente a configuração administrativa persistida. Use /pr_progress_circle_test e /pr_progress_bar_test para homologar ambos usando a posição global configurada no painel; chamadas reais continuam podendo sobrescrever essa posição com position. A barra linear usa contorno branco nos segmentos e no indicador percentual.",
    "directory": "pr_bridge/bridge/progressbar/*/client.lua",
    "tags": "progressbar, progress, do, circle, client",
    "example": "pr_lib.progress.doProgressCircle('value', 'value', 'value')"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progress.progressCircle(data)",
    "detail": "Executa os dados ou a operação “progress circle” por meio da API pública do módulo `progressbar`.",
    "directory": "pr_bridge/bridge/progressbar/*/client.lua",
    "tags": "progressbar, progress, circle, client",
    "example": "pr_lib.progress.progressCircle({})"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progressCircle(data)",
    "detail": "Executa os dados ou a operação “progress circle” por meio da API pública do módulo `outros_adaptadores_(pr_lib.banking,_pr_lib.callback,_pr_lib.ace,_pr_lib.progress,_pr_lib.weather)`.",
    "directory": "pr_bridge/bridge/progressbar/*/client.lua",
    "tags": "progressbar, progress, circle, client",
    "example": "pr_lib.progressCircle({})"
  },
  {
    "module": "minigame",
    "context": "client",
    "signature": "pr_lib.cancelSkillCheck()",
    "detail": "Cancela o skill check ativo, fecha a NUI, libera o foco do teclado e faz a chamada em espera retornar false. A tecla ESC também cancela.",
    "directory": "pr_bridge/bridge/minigames/*/client.lua",
    "tags": "minigame, cancel, skill, check, client",
    "example": "local result = pr_lib.cancelSkillCheck()"
  },
  {
    "module": "minigame",
    "context": "client",
    "signature": "pr_lib.minigame.CancelSkillCheck()",
    "detail": "Cancela o skill check ativo, fecha a NUI, libera o foco do teclado e faz a chamada em espera retornar false. A tecla ESC também cancela.",
    "directory": "pr_bridge/bridge/minigames/*/client.lua",
    "tags": "minigame, cancel, skill, check, client",
    "example": "local result = pr_lib.minigame.CancelSkillCheck()"
  },
  {
    "module": "minigame",
    "context": "client",
    "signature": "pr_lib.minigame.SkillCheck(...)",
    "detail": "Executa o skill check nativo do pr_bridge. difficulties aceita nomes easy, medium e hard ou tabelas com areaSize e speedMultiplier; keys define as teclas válidas; options aceita label, timeout e position. A posição aceita top/top-center ou bottom/bottom-center, prevalece sobre a configuração global quando fornecida e usa a configuração administrativa quando omitida. Retorna um booleano após todas as etapas. Use /pr_skillcheck_top_test e /pr_skillcheck_bottom_test para homologar as duas posições.",
    "directory": "pr_bridge/bridge/minigames/*/client.lua",
    "tags": "minigame, skill, check, client",
    "example": "pr_lib.minigame.SkillCheck(args)"
  },
  {
    "module": "minigame",
    "context": "client",
    "signature": "pr_lib.minigame.Start(config, mode)",
    "detail": "Executa o minigame ativo detectado pelo pr_bridge e retorna true em sucesso ou false em falha/cancelamento. O parametro config deve conter a configuracao do minigame, incluindo game e, quando aplicavel, dificultMinigame.vehiParked e dificultMinigame.vehiCarjack. O parametro mode seleciona qual dificuldade usar, por exemplo \"parked\" para veiculo estacionado ou \"carjack\" para roubo/abordagem. Adaptadores atuais: glitch-minigames, glitch-minigame, mhacking, ox_lib e fallback default.",
    "directory": "pr_bridge/bridge/minigames/*/client.lua",
    "tags": "minigame, start, client",
    "example": "pr_lib.minigame.Start('value', 'value')"
  },
  {
    "module": "minigame",
    "context": "client",
    "signature": "pr_lib.minigames.Start(config, mode)",
    "detail": "Executa o minigame ativo detectado pelo pr_bridge e retorna true em sucesso ou false em falha/cancelamento. O parametro config deve conter a configuracao do minigame, incluindo game e, quando aplicavel, dificultMinigame.vehiParked e dificultMinigame.vehiCarjack. O parametro mode seleciona qual dificuldade usar, por exemplo \"parked\" para veiculo estacionado ou \"carjack\" para roubo/abordagem. Adaptadores atuais: glitch-minigames, glitch-minigame, mhacking, ox_lib e fallback default.",
    "directory": "pr_bridge/bridge/minigames/*/client.lua",
    "tags": "minigame, minigames, start, client",
    "example": "pr_lib.minigames.Start('value', 'value')"
  },
  {
    "module": "minigame",
    "context": "client",
    "signature": "pr_lib.skillCheck(difficulties, keys, options)",
    "detail": "Executa o skill check nativo do pr_bridge. difficulties aceita nomes easy, medium e hard ou tabelas com areaSize e speedMultiplier; keys define as teclas válidas; options aceita label, timeout e position. A posição aceita top/top-center ou bottom/bottom-center, prevalece sobre a configuração global quando fornecida e usa a configuração administrativa quando omitida. Retorna um booleano após todas as etapas. Use /pr_skillcheck_top_test e /pr_skillcheck_bottom_test para homologar as duas posições.",
    "directory": "pr_bridge/bridge/minigames/*/client.lua",
    "tags": "minigame, skill, check, client",
    "example": "pr_lib.skillCheck('value', 'value', {})"
  },
  {
    "module": "weather",
    "context": "client",
    "signature": "pr_lib.weather.GetResourceName()",
    "detail": "Retorna o recurso gerenciador de clima ativo (ex: \"vSync\", \"cd_easytime\").",
    "directory": "pr_bridge/bridge/weather/*/client.lua",
    "tags": "weather, get, resource, name, client",
    "example": "local result = pr_lib.weather.GetResourceName()"
  },
  {
    "module": "weather",
    "context": "client",
    "signature": "pr_lib.weather.ToggleSync(toggle)",
    "detail": "Ativa ou congela a sincronização global de clima e hora locais para o jogador.",
    "directory": "pr_bridge/bridge/weather/*/client.lua",
    "tags": "weather, toggle, sync, client",
    "example": "pr_lib.weather.ToggleSync('value')"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.auto(query, parameters, cb)",
    "detail": "Executa instruções DDL ou DML (como INSERT, UPDATE, DELETE) que alteram dados, retornando a quantidade de linhas afetadas ou informações da transação.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, auto, server",
    "example": "pr_lib.database.auto('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.backup.create(options)",
    "detail": "Exporta tabelas e dados em formato de arquivo .sql gravado no disco do servidor de forma otimizada e nativa através de consultas. O parâmetro options permite configurar as tabelas a serem salvas, o local e se deve exportar estrutura (schema), dados (inserts) ou ambos.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, backup, create, server",
    "example": "local result = pr_lib.database.backup.create({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.backup.export(options)",
    "detail": "Exporta tabelas e dados em formato de arquivo .sql gravado no disco do servidor de forma otimizada e nativa através de consultas. O parâmetro options permite configurar as tabelas a serem salvas, o local e se deve exportar estrutura (schema), dados (inserts) ou ambos.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, backup, export, server",
    "example": "pr_lib.database.backup.export({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.backup.run(options)",
    "detail": "Exporta tabelas e dados em formato de arquivo .sql gravado no disco do servidor de forma otimizada e nativa através de consultas. O parâmetro options permite configurar as tabelas a serem salvas, o local e se deve exportar estrutura (schema), dados (inserts) ou ambos.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, backup, run, server",
    "example": "pr_lib.database.backup.run({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.createBackup(options)",
    "detail": "Exporta tabelas e dados em formato de arquivo .sql gravado no disco do servidor de forma otimizada e nativa através de consultas. O parâmetro options permite configurar as tabelas a serem salvas, o local e se deve exportar estrutura (schema), dados (inserts) ou ambos.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, create, backup, server",
    "example": "local result = pr_lib.database.createBackup({})"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.execute(query, parameters, cb)",
    "detail": "Executa instruções DDL ou DML (como INSERT, UPDATE, DELETE) que alteram dados, retornando a quantidade de linhas afetadas ou informações da transação.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, execute, client",
    "example": "pr_lib.database.execute('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.execute(query, parameters, cb)",
    "detail": "Executa instruções DDL ou DML (como INSERT, UPDATE, DELETE) que alteram dados, retornando a quantidade de linhas afetadas ou informações da transação.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, execute, server",
    "example": "pr_lib.database.execute('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.Execute(query, parameters, cb)",
    "detail": "Executa instruções DDL ou DML (como INSERT, UPDATE, DELETE) que alteram dados, retornando a quantidade de linhas afetadas ou informações da transação.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, execute, server",
    "example": "pr_lib.database.Execute('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.fetch(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, fetch, client",
    "example": "pr_lib.database.fetch('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.fetch(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, fetch, server",
    "example": "pr_lib.database.fetch('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.fetchAll(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, fetch, all, client",
    "example": "pr_lib.database.fetchAll('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.fetchAll(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, fetch, all, server",
    "example": "pr_lib.database.fetchAll('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.GetResourceName()",
    "detail": "Retorna o recurso SQL de banco de dados ativo (ex: \"oxmysql\").",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, get, resource, name, client",
    "example": "local result = pr_lib.database.GetResourceName()"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.GetResourceName()",
    "detail": "Retorna o recurso SQL de banco de dados ativo (ex: \"oxmysql\").",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, get, resource, name, server",
    "example": "local result = pr_lib.database.GetResourceName()"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.insert(query, parameters, cb)",
    "detail": "Insere registros no banco de dados e retorna a ID numérica autoincremento (insertId) do registro inserido.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, insert, client",
    "example": "pr_lib.database.insert('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.insert(query, parameters, cb)",
    "detail": "Insere registros no banco de dados e retorna a ID numérica autoincremento (insertId) do registro inserido.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, insert, server",
    "example": "pr_lib.database.insert('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.Insert(query, parameters, cb)",
    "detail": "Insere registros no banco de dados e retorna a ID numérica autoincremento (insertId) do registro inserido.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, insert, server",
    "example": "pr_lib.database.Insert('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.isReady()",
    "detail": "Retorna se a conexão inicial e o pool de conexões com o MySQL estão prontos para receber queries.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, is, ready, client",
    "example": "local result = pr_lib.database.isReady()"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.isReady()",
    "detail": "Retorna se a conexão inicial e o pool de conexões com o MySQL estão prontos para receber queries.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, is, ready, server",
    "example": "local result = pr_lib.database.isReady()"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.Prepare(...)",
    "detail": "Executa consultas preparadas e aceita um conjunto de parâmetros ou uma lista de conjuntos. No mysql-async e ghmattimysql, o pr_bridge preserva esse contrato por emulação segura sobre as APIs nativas.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, prepare, server",
    "example": "pr_lib.database.Prepare(args)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.prepare(query, parameters, cb)",
    "detail": "Executa consultas preparadas e aceita um conjunto de parâmetros ou uma lista de conjuntos. No mysql-async e ghmattimysql, o pr_bridge preserva esse contrato por emulação segura sobre as APIs nativas.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, prepare, server",
    "example": "pr_lib.database.prepare('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.query(query, parameters, cb)",
    "detail": "Executa uma query no banco de dados e retorna uma lista completa de tabelas de registros (linhas) correspondentes.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, query, client",
    "example": "pr_lib.database.query('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.query(query, parameters, cb)",
    "detail": "Executa uma query no banco de dados e retorna uma lista completa de tabelas de registros (linhas) correspondentes.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, query, server",
    "example": "pr_lib.database.query('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.RawExecute(...)",
    "detail": "Executa escrita crua individual ou em lote e preserva o formato com affectedRows usado por consumidores compatíveis com oxmysql.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, raw, execute, server",
    "example": "pr_lib.database.RawExecute(args)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.rawExecute(query, parameters, cb)",
    "detail": "Executa escrita crua individual ou em lote e preserva o formato com affectedRows usado por consumidores compatíveis com oxmysql.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, raw, execute, server",
    "example": "pr_lib.database.rawExecute('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.read(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, read, client",
    "example": "local result = pr_lib.database.read('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.read(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, read, server",
    "example": "local result = pr_lib.database.read('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.ready(cb)",
    "detail": "Executa o callback assim que o adaptador selecionado estiver pronto; sem callback, retorna o estado atual.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, ready, server",
    "example": "local result = pr_lib.database.ready(function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.run(query, parameters, cb)",
    "detail": "Executa instruções DDL ou DML (como INSERT, UPDATE, DELETE) que alteram dados, retornando a quantidade de linhas afetadas ou informações da transação.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, run, client",
    "example": "pr_lib.database.run('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.run(query, parameters, cb)",
    "detail": "Executa instruções DDL ou DML (como INSERT, UPDATE, DELETE) que alteram dados, retornando a quantidade de linhas afetadas ou informações da transação.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, run, server",
    "example": "pr_lib.database.run('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.scalar(query, parameters, cb)",
    "detail": "Executa a query e extrai a primeira coluna do primeiro registro retornado (útil para buscar contagens COUNT(*) ou valores de colunas únicas).",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, scalar, client",
    "example": "pr_lib.database.scalar('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.scalar(query, parameters, cb)",
    "detail": "Executa a query e extrai a primeira coluna do primeiro registro retornado (útil para buscar contagens COUNT(*) ou valores de colunas únicas).",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, scalar, server",
    "example": "pr_lib.database.scalar('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.Scalar(query, parameters, cb)",
    "detail": "Executa a query e extrai a primeira coluna do primeiro registro retornado (útil para buscar contagens COUNT(*) ou valores de colunas únicas).",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, scalar, server",
    "example": "pr_lib.database.Scalar('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.Select(query, parameters, cb)",
    "detail": "Executa uma query no banco de dados e retorna uma lista completa de tabelas de registros (linhas) correspondentes.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, select, server",
    "example": "pr_lib.database.Select('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.single(query, parameters, cb)",
    "detail": "Executa a query e retorna uma tabela simples contendo as chaves da primeira linha encontrada (útil para buscar um único usuário).",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, single, client",
    "example": "pr_lib.database.single('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.single(query, parameters, cb)",
    "detail": "Executa a query e retorna uma tabela simples contendo as chaves da primeira linha encontrada (útil para buscar um único usuário).",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, single, server",
    "example": "pr_lib.database.single('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.transaction(queries, parameters, cb)",
    "detail": "Executa um lote de queries SQL como uma transação atômica. Se qualquer uma falhar, executa um Rollback geral no banco de dados.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, transaction, client",
    "example": "pr_lib.database.transaction('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.transaction(queries, parameters, cb)",
    "detail": "Executa um lote de queries SQL como uma transação atômica. Se qualquer uma falhar, executa um Rollback geral no banco de dados.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, transaction, server",
    "example": "pr_lib.database.transaction('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.Transaction(queries, parameters, cb)",
    "detail": "Executa um lote de queries SQL como uma transação atômica. Se qualquer uma falhar, executa um Rollback geral no banco de dados.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, transaction, server",
    "example": "pr_lib.database.Transaction('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.update(query, parameters, cb)",
    "detail": "Executa comandos SQL de alteração de dados, retornando a contagem de linhas afetadas.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, update, client",
    "example": "pr_lib.database.update('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.update(query, parameters, cb)",
    "detail": "Executa comandos SQL de alteração de dados, retornando a contagem de linhas afetadas.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, update, server",
    "example": "pr_lib.database.update('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.Update(query, parameters, cb)",
    "detail": "Executa comandos SQL de alteração de dados, retornando a contagem de linhas afetadas.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, update, server",
    "example": "pr_lib.database.Update('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.write(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/client.lua",
    "tags": "database, write, client",
    "example": "pr_lib.database.write('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.write(query, parameters, cb)",
    "detail": "Aliases compatíveis de leitura e gravação legadas para scripts antigos que dependiam de mysql-async ou ghmattimysql.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, write, server",
    "example": "pr_lib.database.write('value', 'value', function(...) return true end)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.sqlBackup.create(options)",
    "detail": "Exporta tabelas e dados em formato de arquivo .sql gravado no disco do servidor de forma otimizada e nativa através de consultas. O parâmetro options permite configurar as tabelas a serem salvas, o local e se deve exportar estrutura (schema), dados (inserts) ou ambos.",
    "directory": "pr_bridge/bridge/database/*/server.lua",
    "tags": "database, sql, backup, create, server",
    "example": "local result = pr_lib.sqlBackup.create({})"
  },
  {
    "module": "fuel",
    "context": "client",
    "signature": "pr_lib.fuel.GetFuel(vehicle)",
    "detail": "Obtém a porcentagem ou volume de combustível atual de um veículo (de 0.0 a 100.0).",
    "directory": "pr_bridge/bridge/fuel/*/client.lua",
    "tags": "fuel, get, client",
    "example": "local result = pr_lib.fuel.GetFuel(entity)"
  },
  {
    "module": "fuel",
    "context": "client",
    "signature": "pr_lib.fuel.GetResourceName()",
    "detail": "Retorna o script de combustível ativo (ex: \"ox_fuel\", \"legacyfuel\").",
    "directory": "pr_bridge/bridge/fuel/*/client.lua",
    "tags": "fuel, get, resource, name, client",
    "example": "local result = pr_lib.fuel.GetResourceName()"
  },
  {
    "module": "fuel",
    "context": "client",
    "signature": "pr_lib.fuel.SetFuel(vehicle, amount, type)",
    "detail": "Define a quantidade e tipo de combustível no veículo informado.",
    "directory": "pr_bridge/bridge/fuel/*/client.lua",
    "tags": "fuel, set, client",
    "example": "pr_lib.fuel.SetFuel(entity, 1, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GetAllKeys(target)",
    "detail": "Retorna a lista completa de placas de veículos das quais o jogador tem chaves guardadas.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, get, all, keys, client, veículo, carro",
    "example": "local result = pr_lib.vehicle_key.GetAllKeys('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GetAllKeys(source)",
    "detail": "Retorna a lista completa de placas de veículos das quais o jogador tem chaves guardadas.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, get, all, keys, server, veículo, carro",
    "example": "local result = pr_lib.vehicle_key.GetAllKeys(source)"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GetResourceName()",
    "detail": "Script de chaves ativo localmente.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, get, resource, name, client, veículo, carro",
    "example": "local result = pr_lib.vehicle_key.GetResourceName()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKey(plate)",
    "detail": "Concede chaves permanentes ou temporárias de um veículo para o jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, give, client, veículo, carro",
    "example": "pr_lib.vehicle_key.GiveKey('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveKey(source, plate)",
    "detail": "Concede chaves permanentes ou temporárias de um veículo para o jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, give, server, veículo, carro",
    "example": "pr_lib.vehicle_key.GiveKey(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKeyItem(plate, vehicle)",
    "detail": "Associa a posse da chave de um veículo específico a um item físico físico do inventário do jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, give, item, client, veículo, carro",
    "example": "pr_lib.vehicle_key.GiveKeyItem('value', entity)"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveKeyItem(source, plate, netId)",
    "detail": "Associa a posse da chave de um veículo específico a um item físico físico do inventário do jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, give, item, server, veículo, carro",
    "example": "pr_lib.vehicle_key.GiveKeyItem(source, 'value', NetworkGetNetworkIdFromEntity(entity))"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKeyMenu(plate)",
    "detail": "Abre o menu para emprestar ou entregar a chave do veículo correspondente à placa para o jogador mais próximo.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, give, menu, client, veículo, carro, contexto, nui, interface",
    "example": "pr_lib.vehicle_key.GiveKeyMenu('value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKeys(vehicle, plate)",
    "detail": "Registra a chave localmente no chaveiro do veículo.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, give, keys, client, veículo, carro",
    "example": "pr_lib.vehicle_key.GiveKeys(entity, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveTempKeys(plate)",
    "detail": "Concede chaves permanentes ou temporárias de um veículo para o jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, give, temp, keys, client, veículo, carro",
    "example": "pr_lib.vehicle_key.GiveTempKeys('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveTempKeys(source, plate)",
    "detail": "Concede chaves permanentes ou temporárias de um veículo para o jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, give, temp, keys, server, veículo, carro",
    "example": "pr_lib.vehicle_key.GiveTempKeys(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.HasKey(plate)",
    "detail": "Consulta se o jogador de ID source possui as chaves físicas de um veículo com a placa especificada.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, has, client, veículo, carro",
    "example": "local result = pr_lib.vehicle_key.HasKey('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HasKey(source, plate)",
    "detail": "Consulta se o jogador de ID source possui as chaves físicas de um veículo com a placa especificada.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, has, server, veículo, carro",
    "example": "local result = pr_lib.vehicle_key.HasKey(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.HavePermanentKey(plate)",
    "detail": "Consulta se o jogador de ID source possui as chaves físicas de um veículo com a placa especificada.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, have, permanent, client, veículo, carro",
    "example": "pr_lib.vehicle_key.HavePermanentKey('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HavePermanentKey(source, plate)",
    "detail": "Consulta se o jogador de ID source possui as chaves físicas de um veículo com a placa especificada.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, have, permanent, server, veículo, carro",
    "example": "pr_lib.vehicle_key.HavePermanentKey(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.HaveTemporaryKey(plate)",
    "detail": "Retorna se o jogador tem uma chave temporária/alugada.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, have, temporary, client, veículo, carro",
    "example": "pr_lib.vehicle_key.HaveTemporaryKey('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HaveTemporaryKey(source, plate)",
    "detail": "Retorna se o jogador tem uma chave temporária/alugada.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, have, temporary, server, veículo, carro",
    "example": "pr_lib.vehicle_key.HaveTemporaryKey(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.ManageKeysMenu()",
    "detail": "Exibe o menu de chaveiro contendo todas as chaves do jogador para controle e exclusões.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, manage, keys, menu, client, veículo, carro, contexto, nui, interface",
    "example": "pr_lib.vehicle_key.ManageKeysMenu()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKey(plate)",
    "detail": "Revoga e retira a posse de chaves.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, remove, client, veículo, carro",
    "example": "pr_lib.vehicle_key.RemoveKey('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveKey(source, plate)",
    "detail": "Revoga e retira a posse de chaves.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, remove, server, veículo, carro",
    "example": "pr_lib.vehicle_key.RemoveKey(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKeyItem(plate)",
    "detail": "Associa a posse da chave de um veículo específico a um item físico físico do inventário do jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, remove, item, client, veículo, carro",
    "example": "pr_lib.vehicle_key.RemoveKeyItem('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveKeyItem(source, plate)",
    "detail": "Associa a posse da chave de um veículo específico a um item físico físico do inventário do jogador.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, remove, item, server, veículo, carro",
    "example": "pr_lib.vehicle_key.RemoveKeyItem(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKeys(vehicle, plate)",
    "detail": "Remove as chaves locais do veículo.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, remove, keys, client, veículo, carro",
    "example": "pr_lib.vehicle_key.RemoveKeys(entity, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveTempKeys(plate)",
    "detail": "Revoga e retira a posse de chaves.",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, remove, temp, keys, client, veículo, carro",
    "example": "pr_lib.vehicle_key.RemoveTempKeys('value')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveTempKeys(source, plate)",
    "detail": "Revoga e retira a posse de chaves.",
    "directory": "pr_bridge/bridge/vehicle_key/*/server.lua",
    "tags": "vehicle, key, remove, temp, keys, server, veículo, carro",
    "example": "pr_lib.vehicle_key.RemoveTempKeys(source, 'value')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.ToggleLock()",
    "detail": "Executa a ação local de chaveamento física do veículo (trancar/destrancar porta, tocar alarme e piscar setas).",
    "directory": "pr_bridge/bridge/vehicle_key/*/client.lua",
    "tags": "vehicle, key, toggle, lock, client, veículo, carro",
    "example": "pr_lib.vehicle_key.ToggleLock()"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.AddAccountBalance(player, accountType, amount, reason)",
    "detail": "Adiciona fundos à conta bancária de um jogador.",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, add, account, balance, shared",
    "example": "pr_lib.banking.AddAccountBalance('value', 1, 1, 'value')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.AddJobAccountBalance(account, amount, reason)",
    "detail": "Visualiza e altera o saldo de contas bancárias corporativas/sociedades de empregos.",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, add, job, account, balance, shared",
    "example": "pr_lib.banking.AddJobAccountBalance(1, 1, 'value')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.AddPlayerAccountBalance(player, accountType, amount, reason)",
    "detail": "Adiciona fundos à conta bancária de um jogador.",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, add, player, account, balance, shared",
    "example": "pr_lib.banking.AddPlayerAccountBalance('value', 1, 1, 'value')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetAccountBalance(player, accountType)",
    "detail": "Retorna o saldo de uma conta bancária de um jogador (ex: \"personal\", \"savings\").",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, get, account, balance, shared",
    "example": "local result = pr_lib.banking.GetAccountBalance('value', 1)"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetJobAccountBalance(account)",
    "detail": "Visualiza e altera o saldo de contas bancárias corporativas/sociedades de empregos.",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, get, job, account, balance, shared",
    "example": "local result = pr_lib.banking.GetJobAccountBalance(1)"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetPlayerAccountBalance(player, accountType)",
    "detail": "Retorna o saldo de uma conta bancária de um jogador (ex: \"personal\", \"savings\").",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, get, player, account, balance, shared",
    "example": "local result = pr_lib.banking.GetPlayerAccountBalance('value', 1)"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetResourceName()",
    "detail": "Retorna o recurso bancário ativo (ex: \"okokBanking\", \"renewed_banking\", etc.).",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, get, resource, name, shared",
    "example": "local result = pr_lib.banking.GetResourceName()"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.RemoveAccountBalance(player, accountType, amount, reason)",
    "detail": "Deduz dinheiro da conta bancária de um jogador.",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, remove, account, balance, shared",
    "example": "pr_lib.banking.RemoveAccountBalance('value', 1, 1, 'value')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.RemoveJobAccountBalance(account, amount, reason)",
    "detail": "Visualiza e altera o saldo de contas bancárias corporativas/sociedades de empregos.",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, remove, job, account, balance, shared",
    "example": "pr_lib.banking.RemoveJobAccountBalance(1, 1, 'value')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.RemovePlayerAccountBalance(player, accountType, amount, reason)",
    "detail": "Deduz dinheiro da conta bancária de um jogador.",
    "directory": "pr_bridge/bridge/banking/*/{client,server}.lua",
    "tags": "banking, remove, player, account, balance, shared",
    "example": "pr_lib.banking.RemovePlayerAccountBalance('value', 1, 1, 'value')"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback(...)",
    "detail": "Executa os dados ou a operação “callback” por meio da API pública do módulo `callbacks_reforçados_(opt-in)`.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, client, request, resposta, timeout",
    "example": "pr_lib.callback(args)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.await(name, timeout, ...)",
    "detail": "Chama o callback remoto bloqueando a execução da thread atual (síncrona) até que a resposta chegue, ou ocorra um estouro de tempo limite (timeout em ms). Retorna os dados diretamente.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, await, client, request, resposta, timeout",
    "example": "pr_lib.callback.await('example', 1, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.await(target, name, timeout, ...)",
    "detail": "Chama o callback remoto bloqueando a execução da thread atual (síncrona) até que a resposta chegue, ou ocorra um estouro de tempo limite (timeout em ms). Retorna os dados diretamente.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, await, server, request, resposta, timeout",
    "example": "pr_lib.callback.await('value', 'example', 1, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.awaitClient(target, name, timeout, ...)",
    "detail": "Chama o callback remoto bloqueando a execução da thread atual (síncrona) até que a resposta chegue, ou ocorra um estouro de tempo limite (timeout em ms). Retorna os dados diretamente.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, await, client, server, request, resposta, timeout",
    "example": "pr_lib.callback.awaitClient('value', 'example', 1, args)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.cancel(requestId, reason?)",
    "detail": "Cancela uma requisição pendente ativa.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, cancel, client, request, resposta, timeout",
    "example": "local result = pr_lib.callback.cancel('example', 'value')"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.cancel(requestId, reason?)",
    "detail": "Cancela uma requisição pendente ativa.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, cancel, server, request, resposta, timeout",
    "example": "local result = pr_lib.callback.cancel('example', 'value')"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.getPending()",
    "detail": "Retorna a lista de requisições de callback aguardando resposta.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, get, pending, client, request, resposta, timeout",
    "example": "local result = pr_lib.callback.getPending()"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.getPending()",
    "detail": "Retorna a lista de requisições de callback aguardando resposta.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, get, pending, server, request, resposta, timeout",
    "example": "local result = pr_lib.callback.getPending()"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.getStats()",
    "detail": "Retorna pendências, limites, timeouts, rejeições, respostas forjadas, cancelamentos e erros protegidos.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, get, stats, client, request, resposta, timeout",
    "example": "local result = pr_lib.callback.getStats()"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.getStats()",
    "detail": "Retorna pendências, limites, timeouts, rejeições, respostas forjadas, cancelamentos e erros protegidos.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, get, stats, server, request, resposta, timeout",
    "example": "local result = pr_lib.callback.getStats()"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.ox(name, delay, cb, ...)",
    "detail": "Disponibiliza as ordens do ox_lib; no cliente também aplica o delay por evento.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, ox, client, request, resposta, timeout",
    "example": "pr_lib.callback.ox('example', 'value', function(...) return true end, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.ox(...)",
    "detail": "Disponibiliza as ordens do ox_lib; no cliente também aplica o delay por evento.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, ox, server, request, resposta, timeout",
    "example": "pr_lib.callback.ox(args)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.ox.await(name, delay, ...)",
    "detail": "Disponibiliza as ordens do ox_lib; no cliente também aplica o delay por evento.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, ox, await, client, request, resposta, timeout",
    "example": "pr_lib.callback.ox.await('example', 'value', args)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.trigger(name, cb, ...)",
    "detail": "Dispara uma chamada assíncrona que executa um bloco de código no ambiente oposto (Server para Client, ou vice-versa) e executa a função cb entregando o resultado assim que a resposta for enviada.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, trigger, client, request, resposta, timeout",
    "example": "pr_lib.callback.trigger('example', function(...) return true end, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.trigger(target, name, cb, ...)",
    "detail": "Dispara uma chamada assíncrona que executa um bloco de código no ambiente oposto (Server para Client, ou vice-versa) e executa a função cb entregando o resultado assim que a resposta for enviada.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, trigger, server, request, resposta, timeout",
    "example": "pr_lib.callback.trigger('value', 'example', function(...) return true end, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.triggerClient(target, name, cb, ...)",
    "detail": "Dispara um callback direcionado ao cliente do jogador target.",
    "directory": "pr_bridge/bridge/callback/{client,server,secure_client,secure_server}.lua",
    "tags": "callback, trigger, client, server, request, resposta, timeout",
    "example": "pr_lib.callback.triggerClient('value', 'example', function(...) return true end, args)"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.addAce(principal, aceName, allow)",
    "detail": "Adiciona ou garante a existência de regras ACE dinamicamente (ex: conceder comandos administrativos).",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, add, server",
    "example": "pr_lib.ace.addAce('value', 'example', 'value')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.addPrincipal(child, parent)",
    "detail": "Vincula ou remove herança e hierarquia de principais do ACE (ex: herdar permissões de admin de um cargo superior).",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, add, principal, server",
    "example": "pr_lib.ace.addPrincipal('value', 'value')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.canAccess(source, options)",
    "detail": "Verificação híbrida de permissão que analisa grupos de frameworks, empregos e permissões ACE configuradas no objeto options.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, can, access, server",
    "example": "local result = pr_lib.ace.canAccess(source, {})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.discoverPermissions(options)",
    "detail": "Alias de compatibilidade para de getPermissionCatalog..",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, discover, permissions, server",
    "example": "pr_lib.ace.discoverPermissions({})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.ensureAce(principal, aceName)",
    "detail": "Adiciona ou garante a existência de regras ACE dinamicamente (ex: conceder comandos administrativos).",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, ensure, server",
    "example": "pr_lib.ace.ensureAce('value', 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.ensureCommandAce(principal, commandName)",
    "detail": "Garante permissão ACE de execução de comando.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, ensure, command, server",
    "example": "pr_lib.ace.ensureCommandAce('value', 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.getIdentifiers(source)",
    "detail": "Retorna todos os identificadores conhecidos de rede do jogador (license, discord, ip, steam, etc.).",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, get, identifiers, server",
    "example": "local result = pr_lib.ace.getIdentifiers(source)"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.getPermissionCatalog(options)",
    "detail": "Obtém os dados ou a operação “get permission catalog” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, get, permission, catalog, server",
    "example": "local result = pr_lib.ace.getPermissionCatalog({})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasAce(source, aceName)",
    "detail": "Consulta nativa se o jogador possui permissões no arquivo de configurações server.cfg baseada em ACE principal (ex: IsPlayerAceAllowed).",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, has, server",
    "example": "local result = pr_lib.ace.hasAce(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasCommandAce(source, commandName)",
    "detail": "Retorna se o jogador tem permissão de execução de um comando do console nativo do FiveM.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, has, command, server",
    "example": "local result = pr_lib.ace.hasCommandAce(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasFrameworkAccess(source, options)",
    "detail": "Verificação híbrida de permissão que analisa grupos de frameworks, empregos e permissões ACE configuradas no objeto options.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, has, framework, access, server",
    "example": "local result = pr_lib.ace.hasFrameworkAccess(source, {})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasIdentifier(source, identifier)",
    "detail": "Verifica se um jogador possui um identificador específico.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, has, identifier, server",
    "example": "local result = pr_lib.ace.hasIdentifier(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasIdentifierAce(source, aceName)",
    "detail": "Verifica se o identificador específico do jogador está explicitamente autorizado no ACE.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, has, identifier, server",
    "example": "local result = pr_lib.ace.hasIdentifierAce(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.inWhitelist(source, whitelistName)",
    "detail": "Verifica se o jogador está em uma whitelist do ACE correspondente ao nome da licença.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, in, whitelist, server",
    "example": "pr_lib.ace.inWhitelist(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.isCommandAllowed(source, commandName)",
    "detail": "Retorna se o jogador tem permissão de execução de um comando do console nativo do FiveM.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, is, command, allowed, server",
    "example": "local result = pr_lib.ace.isCommandAllowed(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.isIdentifierAceAllowed(source, aceName)",
    "detail": "Verifica se o identificador específico do jogador está explicitamente autorizado no ACE.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, is, identifier, allowed, server",
    "example": "local result = pr_lib.ace.isIdentifierAceAllowed(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.isPlayerAceAllowed(source, aceName)",
    "detail": "Consulta nativa se o jogador possui permissões no arquivo de configurações server.cfg baseada em ACE principal (ex: IsPlayerAceAllowed).",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, is, player, allowed, server",
    "example": "local result = pr_lib.ace.isPlayerAceAllowed(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.isWhitelisted(source, whitelistName)",
    "detail": "Verifica se o jogador está em uma whitelist do ACE correspondente ao nome da licença.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, is, whitelisted, server",
    "example": "local result = pr_lib.ace.isWhitelisted(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.listPermissions(options)",
    "detail": "Alias de compatibilidade para de getPermissionCatalog..",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, list, permissions, server",
    "example": "pr_lib.ace.listPermissions({})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.parseConvarList(raw)",
    "detail": "Parser interno de strings de convars.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, parse, convar, list, server",
    "example": "pr_lib.ace.parseConvarList('value')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.registerPermission(name, options)",
    "detail": "Registra os dados ou a operação “register permission” no módulo ativo.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, register, permission, server",
    "example": "local result = pr_lib.ace.registerPermission('example', {})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.removeAce(principal, aceName, allow)",
    "detail": "Apaga ou altera regras ACE de permissão.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, remove, server",
    "example": "pr_lib.ace.removeAce('value', 'example', 'value')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.removePrincipal(child, parent)",
    "detail": "Vincula ou remove herança e hierarquia de principais do ACE (ex: herdar permissões de admin de um cargo superior).",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, remove, principal, server",
    "example": "pr_lib.ace.removePrincipal('value', 'value')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.unregisterPermission(name)",
    "detail": "Executa os dados ou a operação “unregister permission” por meio da API pública do módulo `ace`.",
    "directory": "pr_bridge/bridge/ace/server.lua",
    "tags": "ace, unregister, permission, server",
    "example": "pr_lib.ace.unregisterPermission('example')"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand(commandName, properties, callback)",
    "detail": "API robusta para registro de comandos de console/chat. Suporta filtragem nativa de permissões (empregos, cargos, ACE e whitelists), sugestões de chat automáticas com parâmetros tipados e conversão automática de argumentos de entrada (ex: converter string para número, boleano ou ID do jogador \"me\").",
    "directory": "pr_bridge/bridge/addCommand/client.lua",
    "tags": "addcommand, add, command, client",
    "example": "pr_lib.addCommand('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand(commandName, properties, callback)",
    "detail": "API robusta para registro de comandos de console/chat. Suporta filtragem nativa de permissões (empregos, cargos, ACE e whitelists), sugestões de chat automáticas com parâmetros tipados e conversão automática de argumentos de entrada (ex: converter string para número, boleano ou ID do jogador \"me\").",
    "directory": "pr_bridge/bridge/addCommand/server.lua",
    "tags": "addcommand, add, command, server",
    "example": "pr_lib.addCommand('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.add(commandName, properties, cb)",
    "detail": "API robusta para registro de comandos de console/chat. Suporta filtragem nativa de permissões (empregos, cargos, ACE e whitelists), sugestões de chat automáticas com parâmetros tipados e conversão automática de argumentos de entrada (ex: converter string para número, boleano ou ID do jogador \"me\").",
    "directory": "pr_bridge/bridge/addCommand/client.lua",
    "tags": "addcommand, add, command, client",
    "example": "pr_lib.addCommand.add('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.add(commandName, properties, cb)",
    "detail": "API robusta para registro de comandos de console/chat. Suporta filtragem nativa de permissões (empregos, cargos, ACE e whitelists), sugestões de chat automáticas com parâmetros tipados e conversão automática de argumentos de entrada (ex: converter string para número, boleano ou ID do jogador \"me\").",
    "directory": "pr_bridge/bridge/addCommand/server.lua",
    "tags": "addcommand, add, command, server",
    "example": "pr_lib.addCommand.add('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.addCommand(commandName, properties, cb)",
    "detail": "Alias de compatibilidade para add.",
    "directory": "pr_bridge/bridge/addCommand/client.lua",
    "tags": "addcommand, add, command, client",
    "example": "pr_lib.addCommand.addCommand('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.addCommand(commandName, properties, cb)",
    "detail": "Alias de compatibilidade para add.",
    "directory": "pr_bridge/bridge/addCommand/server.lua",
    "tags": "addcommand, add, command, server",
    "example": "pr_lib.addCommand.addCommand('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.getSuggestions()",
    "detail": "Obtém os dados ou a operação “get suggestions” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/addCommand/client.lua",
    "tags": "addcommand, add, command, get, suggestions, client",
    "example": "local result = pr_lib.addCommand.getSuggestions()"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.getSuggestions()",
    "detail": "Obtém os dados ou a operação “get suggestions” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/addCommand/server.lua",
    "tags": "addcommand, add, command, get, suggestions, server",
    "example": "local result = pr_lib.addCommand.getSuggestions()"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.hasSuggestion(commandName)",
    "detail": "Verifica se os dados ou a operação “has suggestion” está disponível ou atende ao filtro informado.",
    "directory": "pr_bridge/bridge/addCommand/client.lua",
    "tags": "addcommand, add, command, has, suggestion, client",
    "example": "local result = pr_lib.addCommand.hasSuggestion('example')"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.hasSuggestion(commandName)",
    "detail": "Verifica se os dados ou a operação “has suggestion” está disponível ou atende ao filtro informado.",
    "directory": "pr_bridge/bridge/addCommand/server.lua",
    "tags": "addcommand, add, command, has, suggestion, server",
    "example": "local result = pr_lib.addCommand.hasSuggestion('example')"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.register(commandName, properties, cb)",
    "detail": "API robusta para registro de comandos de console/chat. Suporta filtragem nativa de permissões (empregos, cargos, ACE e whitelists), sugestões de chat automáticas com parâmetros tipados e conversão automática de argumentos de entrada (ex: converter string para número, boleano ou ID do jogador \"me\").",
    "directory": "pr_bridge/bridge/addCommand/client.lua",
    "tags": "addcommand, add, command, register, client",
    "example": "local result = pr_lib.addCommand.register('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.register(commandName, properties, cb)",
    "detail": "API robusta para registro de comandos de console/chat. Suporta filtragem nativa de permissões (empregos, cargos, ACE e whitelists), sugestões de chat automáticas com parâmetros tipados e conversão automática de argumentos de entrada (ex: converter string para número, boleano ou ID do jogador \"me\").",
    "directory": "pr_bridge/bridge/addCommand/server.lua",
    "tags": "addcommand, add, command, register, server",
    "example": "local result = pr_lib.addCommand.register('example', 'value', function(...) return true end)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.sendSuggestions(target?)",
    "detail": "Executa os dados ou a operação “send suggestions” por meio da API pública do módulo `addcommand`.",
    "directory": "pr_bridge/bridge/addCommand/client.lua",
    "tags": "addcommand, add, command, send, suggestions, client",
    "example": "pr_lib.addCommand.sendSuggestions('value')"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.sendSuggestions(target?)",
    "detail": "Executa os dados ou a operação “send suggestions” por meio da API pública do módulo `addcommand`.",
    "directory": "pr_bridge/bridge/addCommand/server.lua",
    "tags": "addcommand, add, command, send, suggestions, server",
    "example": "pr_lib.addCommand.sendSuggestions('value')"
  },
  {
    "module": "addkeybind",
    "context": "client",
    "signature": "pr_lib.addKeybind(data)",
    "detail": "Registra mapeamentos de teclas nativas do GTA V listados em Configurações > Teclas > FiveM. O objeto data define nome, descrição, tecla padrão (defaultKey ou keys), combinações e callbacks onPressed/onReleased. Teclas simples preservam o name como comando, seguindo o contrato nativo do FiveM e do ox_lib; combinações usam comandos internos compactos.",
    "directory": "pr_bridge/bridge/addKeybind/client.lua",
    "tags": "addkeybind, add, keybind, client",
    "example": "pr_lib.addKeybind({})"
  },
  {
    "module": "addkeybind",
    "context": "client",
    "signature": "pr_lib.addKeybind.get(name)",
    "detail": "Obtém o objeto mapeador de tecla registrado.",
    "directory": "pr_bridge/bridge/addKeybind/client.lua",
    "tags": "addkeybind, add, keybind, get, client",
    "example": "local result = pr_lib.addKeybind.get('example')"
  },
  {
    "module": "addkeybind",
    "context": "client",
    "signature": "pr_lib.addKeybind.remove(name)",
    "detail": "Remove e desativa permanentemente o mapeamento de teclas associado.",
    "directory": "pr_bridge/bridge/addKeybind/client.lua",
    "tags": "addkeybind, add, keybind, remove, client",
    "example": "pr_lib.addKeybind.remove('example')"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.showTranslatedNotify(title, description, notifyType, targetLang)",
    "detail": "Traduz e exibe imediatamente um alerta de notificação com título e descrição localizados.",
    "directory": "pr_bridge/bridge/translator/client.lua",
    "tags": "translator, show, translated, notify, client",
    "example": "pr_lib.translator.showTranslatedNotify('value', 'value', 'value', 'value')"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translate(text, targetLang)",
    "detail": "Traduz um texto individual (text) para o idioma informado (targetLang) de forma assíncrona, retornando o resultado no callback cb e em uma Promise.",
    "directory": "pr_bridge/bridge/translator/client.lua",
    "tags": "translator, translate, client",
    "example": "pr_lib.translator.translate('value', 'value')"
  },
  {
    "module": "translator",
    "context": "server",
    "signature": "pr_lib.translator.translate(text, targetLang, cb)",
    "detail": "Traduz um texto individual (text) para o idioma informado (targetLang) de forma assíncrona, retornando o resultado no callback cb e em uma Promise.",
    "directory": "pr_bridge/bridge/translator/server.lua",
    "tags": "translator, translate, server",
    "example": "pr_lib.translator.translate('value', 'value', function(...) return true end)"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translateBatch(strings, targetLang)",
    "detail": "Executa a tradução em lote de uma lista de strings de forma otimizada paralelamente para minimizar latência.",
    "directory": "pr_bridge/bridge/translator/client.lua",
    "tags": "translator, translate, batch, client",
    "example": "pr_lib.translator.translateBatch('value', 'value')"
  },
  {
    "module": "translator",
    "context": "server",
    "signature": "pr_lib.translator.translateBatch(strings, targetLang, cb)",
    "detail": "Executa a tradução em lote de uma lista de strings de forma otimizada paralelamente para minimizar latência.",
    "directory": "pr_bridge/bridge/translator/server.lua",
    "tags": "translator, translate, batch, server",
    "example": "pr_lib.translator.translateBatch('value', 'value', function(...) return true end)"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translateMenu(menuData, targetLang)",
    "detail": "Varre e traduz automaticamente todas as propriedades de título, descrição e opções de um objeto de menu (compatível com a estrutura de ox_lib menus) de forma dinâmica para a localidade do jogador antes de sua renderização.",
    "directory": "pr_bridge/bridge/translator/client.lua",
    "tags": "translator, translate, menu, client, contexto, nui, interface",
    "example": "pr_lib.translator.translateMenu('value', 'value')"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translateText(text, targetLang)",
    "detail": "Traduz um texto individual (text) para o idioma informado (targetLang) de forma assíncrona, retornando o resultado no callback cb e em uma Promise.",
    "directory": "pr_bridge/bridge/translator/client.lua",
    "tags": "translator, translate, text, client",
    "example": "pr_lib.translator.translateText('value', 'value')"
  },
  {
    "module": "translator",
    "context": "server",
    "signature": "pr_lib.translator.translateText(text, targetLang, cb)",
    "detail": "Traduz um texto individual (text) para o idioma informado (targetLang) de forma assíncrona, retornando o resultado no callback cb e em uma Promise.",
    "directory": "pr_bridge/bridge/translator/server.lua",
    "tags": "translator, translate, text, server",
    "example": "pr_lib.translator.translateText('value', 'value', function(...) return true end)"
  },
  {
    "module": "github",
    "context": "client",
    "signature": "pr_lib.github.checkDependency(resource, minimumVersion, printMessage)",
    "detail": "Executa os dados ou a operação “check dependency” por meio da API pública do módulo `github`.",
    "directory": "pr_bridge/bridge/github/client.lua",
    "tags": "github, check, dependency, client",
    "example": "pr_lib.github.checkDependency(source, 'value', 'value')"
  },
  {
    "module": "github",
    "context": "server",
    "signature": "pr_lib.github.checkDependency(resource, minimumVersion, printMessage)",
    "detail": "Executa os dados ou a operação “check dependency” por meio da API pública do módulo `github`.",
    "directory": "pr_bridge/bridge/github/server.lua",
    "tags": "github, check, dependency, server",
    "example": "pr_lib.github.checkDependency(source, 'value', 'value')"
  },
  {
    "module": "github",
    "context": "server",
    "signature": "pr_lib.github.versionCheck(repository)",
    "detail": "Executa os dados ou a operação “version check” por meio da API pública do módulo `github`.",
    "directory": "pr_bridge/bridge/github/server.lua",
    "tags": "github, version, check, server",
    "example": "pr_lib.github.versionCheck('value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.deepCopy(value, seen)",
    "detail": "Clona profundamente uma tabela Lua recursivamente, incluindo metatabelas e evitando referências circulares.",
    "directory": "pr_bridge/bridge/utils/shared.lua",
    "tags": "utils, deep, copy, shared",
    "example": "pr_lib.utils.deepCopy('value', 'value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.dumpTable(value, depth, seen)",
    "detail": "Serializa uma tabela complexa em formato legível de texto para console (dump de depuração).",
    "directory": "pr_bridge/bridge/utils/shared.lua",
    "tags": "utils, dump, table, shared",
    "example": "pr_lib.utils.dumpTable('value', 'value', 'value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.ensureTable(value)",
    "detail": "Garante que o retorno seja sempre uma tabela Lua (caso seja nulo ou string, encapsula/converte).",
    "directory": "pr_bridge/bridge/utils/shared.lua",
    "tags": "utils, ensure, table, shared",
    "example": "pr_lib.utils.ensureTable('value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.firstToUpper(value)",
    "detail": "Converte a primeira letra da string em maiúscula.",
    "directory": "pr_bridge/bridge/utils/shared.lua",
    "tags": "utils, first, to, upper, shared",
    "example": "pr_lib.utils.firstToUpper('value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.hash(value)",
    "detail": "Converte uma string em um hash numérico nativo do GTA V (equivalente ao hash do Jenkins One-at-a-time).",
    "directory": "pr_bridge/bridge/utils/shared.lua",
    "tags": "utils, hash, shared",
    "example": "local result = pr_lib.utils.hash('value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.round(value, decimals)",
    "detail": "Arredonda um número de ponto flutuante para a quantidade de casas decimais informada.",
    "directory": "pr_bridge/bridge/utils/shared.lua",
    "tags": "utils, round, shared",
    "example": "pr_lib.utils.round('value', 'value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.trim(value)",
    "detail": "Remove espaços em branco do início e do fim de uma string.",
    "directory": "pr_bridge/bridge/utils/shared.lua",
    "tags": "utils, trim, shared",
    "example": "pr_lib.utils.trim('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.almostEqual(a, b, epsilon)",
    "detail": "Compara números de ponto flutuante considerando tolerâncias de arredondamento.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, almost, equal, shared",
    "example": "pr_lib.math.almostEqual('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.AlmostEqual(a, b, epsilon)",
    "detail": "Compara números de ponto flutuante considerando tolerâncias de arredondamento.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, almost, equal, shared",
    "example": "pr_lib.math.AlmostEqual('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.clamp(value, minimum, maximum)",
    "detail": "Limita um número dentro do intervalo especificado entre minimum e maximum.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, clamp, shared",
    "example": "pr_lib.math.clamp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Clamp(value, minimum, maximum)",
    "detail": "Limita um número dentro do intervalo especificado entre minimum e maximum.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, clamp, shared",
    "example": "pr_lib.math.Clamp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Deg2Rad(value)",
    "detail": "Conversores de ângulos trigonométricos entre graus e radianos.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, deg2, rad, shared",
    "example": "pr_lib.math.Deg2Rad('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.degToRad(value)",
    "detail": "Conversores de ângulos trigonométricos entre graus e radianos.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, deg, to, rad, shared",
    "example": "pr_lib.math.degToRad('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.distance2D(x1, y1, x2, y2)",
    "detail": "Retorna a distância euclidiana geométrica absoluta entre dois pontos no espaço.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, distance2, shared",
    "example": "pr_lib.math.distance2D('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Distance2D(x1, y1, x2, y2)",
    "detail": "Retorna a distância euclidiana geométrica absoluta entre dois pontos no espaço.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, distance2, shared",
    "example": "pr_lib.math.Distance2D('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.distance3D(x1, y1, z1, x2, y2, z2)",
    "detail": "Retorna a distância euclidiana geométrica absoluta entre dois pontos no espaço.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, distance3, shared",
    "example": "pr_lib.math.distance3D('value', 'value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Distance3D(x1, y1, z1, x2, y2, z2)",
    "detail": "Retorna a distância euclidiana geométrica absoluta entre dois pontos no espaço.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, distance3, shared",
    "example": "pr_lib.math.Distance3D('value', 'value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.groupdigits(value, separator?)",
    "detail": "Executa os dados ou a operação “groupdigits” por meio da API pública do módulo `math`.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, groupdigits, shared",
    "example": "pr_lib.math.groupdigits('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.hexToRGB(value)",
    "detail": "Converte cores de string hexadecimal (ex: \"#FF5500\") em vetores de cores RGB ou RGBA com canais individuais.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, hex, to, rgb, shared",
    "example": "pr_lib.math.hexToRGB('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.HexToRGB(value)",
    "detail": "Converte cores de string hexadecimal (ex: \"#FF5500\") em vetores de cores RGB ou RGBA com canais individuais.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, hex, to, rgb, shared",
    "example": "pr_lib.math.HexToRGB('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.hexToRGBA(value)",
    "detail": "Converte cores de string hexadecimal (ex: \"#FF5500\") em vetores de cores RGB ou RGBA com canais individuais.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, hex, to, rgba, shared",
    "example": "pr_lib.math.hexToRGBA('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.HexToRGBA(value)",
    "detail": "Executa os dados ou a operação “hex to rgba” por meio da API pública do módulo `math`.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, hex, to, rgba, shared",
    "example": "pr_lib.math.HexToRGBA('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.inverseLerp(startValue, finishValue, value)",
    "detail": "Retorna o fator decimal linear correspondente ao valor dentro do intervalo.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, inverse, lerp, shared",
    "example": "pr_lib.math.inverseLerp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.InverseLerp(startValue, finishValue, value)",
    "detail": "Retorna o fator decimal linear correspondente ao valor dentro do intervalo.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, inverse, lerp, shared",
    "example": "pr_lib.math.InverseLerp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.length2(x, y)",
    "detail": "Calcula a magnitude geométrica/comprimento de vetores de duas ou três dimensões.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, length2, shared",
    "example": "pr_lib.math.length2('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Length2(x, y)",
    "detail": "Calcula a magnitude geométrica/comprimento de vetores de duas ou três dimensões.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, length2, shared",
    "example": "pr_lib.math.Length2('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.length3(x, y, z)",
    "detail": "Calcula a magnitude geométrica/comprimento de vetores de duas ou três dimensões.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, length3, shared",
    "example": "pr_lib.math.length3('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Length3(x, y, z)",
    "detail": "Calcula a magnitude geométrica/comprimento de vetores de duas ou três dimensões.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, length3, shared",
    "example": "pr_lib.math.Length3('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Lerp(startValue, finishValue, duration)",
    "detail": "Executa uma interpolação linear simples entre dois valores baseada no fator decimal.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, lerp, shared",
    "example": "pr_lib.math.Lerp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.lerp(startValue, finishValue, factor)",
    "detail": "Executa uma interpolação linear simples entre dois valores baseada no fator decimal.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, lerp, shared",
    "example": "pr_lib.math.lerp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.map(value, inMin, inMax, outMin, outMax)",
    "detail": "Mapeia de forma linear um valor de um intervalo de entrada para outro de saída.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, map, shared",
    "example": "pr_lib.math.map('value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Map(value, inMin, inMax, outMin, outMax)",
    "detail": "Mapeia de forma linear um valor de um intervalo de entrada para outro de saída.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, map, shared",
    "example": "pr_lib.math.Map('value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.normalToRotation(input)",
    "detail": "Converte um vetor normal de superfície em um vetor tridimensional de rotação (Pitch, Roll, Yaw).",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, normal, to, rotation, shared",
    "example": "pr_lib.math.normalToRotation('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.NormalToRotation(input)",
    "detail": "Converte um vetor normal de superfície em um vetor tridimensional de rotação (Pitch, Roll, Yaw).",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, normal, to, rotation, shared",
    "example": "pr_lib.math.NormalToRotation('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.parse(value, minimum, maximum, shouldRound)",
    "detail": "Processa e valida a consistência de um número dentro de restrições.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, parse, shared",
    "example": "pr_lib.math.parse('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ParseNumber(value, minimum, maximum, shouldRound)",
    "detail": "Processa e valida a consistência de um número dentro de restrições.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, parse, number, shared",
    "example": "pr_lib.math.ParseNumber('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Rad2Deg(value)",
    "detail": "Conversores de ângulos trigonométricos entre graus e radianos.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, rad2, deg, shared",
    "example": "pr_lib.math.Rad2Deg('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.radToDeg(value)",
    "detail": "Conversores de ângulos trigonométricos entre graus e radianos.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, rad, to, deg, shared",
    "example": "pr_lib.math.radToDeg('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.round(value, places)",
    "detail": "Arredonda números de ponto flutuante.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, round, shared",
    "example": "pr_lib.math.round('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Round(value, places)",
    "detail": "Arredonda números de ponto flutuante.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, round, shared",
    "example": "pr_lib.math.Round('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.sign(value)",
    "detail": "Retorna -1 se o número for negativo, 1 se for positivo e 0 se for nulo.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, sign, shared",
    "example": "pr_lib.math.sign('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Sign(value)",
    "detail": "Retorna -1 se o número for negativo, 1 se for positivo e 0 se for nulo.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, sign, shared",
    "example": "pr_lib.math.Sign('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.toHex(value, upper)",
    "detail": "Converte um número inteiro para uma string hexadecimal.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, to, hex, shared",
    "example": "pr_lib.math.toHex('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ToHex(value, upper)",
    "detail": "Converte um número inteiro para uma string hexadecimal.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, to, hex, shared",
    "example": "pr_lib.math.ToHex('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.toScalars(value, minimum, maximum, shouldRound)",
    "detail": "Processa tabelas ou tipos vetoriais normais do FiveM aplicando constraints matemáticas de limites.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, to, scalars, shared",
    "example": "pr_lib.math.toScalars('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ToScalars(value, minimum, maximum, shouldRound)",
    "detail": "Executa os dados ou a operação “to scalars” por meio da API pública do módulo `math`.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, to, scalars, shared",
    "example": "pr_lib.math.ToScalars('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.toVector(value, minimum, maximum, shouldRound)",
    "detail": "Processa tabelas ou tipos vetoriais normais do FiveM aplicando constraints matemáticas de limites.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, to, vector, shared",
    "example": "pr_lib.math.toVector('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ToVector(value, minimum, maximum, shouldRound)",
    "detail": "Executa os dados ou a operação “to vector” por meio da API pública do módulo `math`.",
    "directory": "pr_bridge/bridge/utils/numbers.lua",
    "tags": "math, to, vector, shared",
    "example": "pr_lib.math.ToVector('value', 'value', 'value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.clone(value, seen)",
    "detail": "Gera uma cópia profunda (deep copy) de tabelas e metatabelas.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, clone, shared",
    "example": "pr_lib.table.clone('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.contains(source, value)",
    "detail": "Verifica se a tabela possui determinado valor entre seus elementos indexados.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, contains, shared",
    "example": "pr_lib.table.contains(source, 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Contains(source, value)",
    "detail": "Verifica se a tabela possui determinado valor entre seus elementos indexados.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, contains, shared",
    "example": "pr_lib.table.Contains(source, 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.count(source)",
    "detail": "Conta o número absoluto de elementos em uma tabela (incluindo chaves associativas não numéricas).",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, count, shared",
    "example": "pr_lib.table.count(source)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Count(source)",
    "detail": "Conta o número absoluto de elementos em uma tabela (incluindo chaves associativas não numéricas).",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, count, shared",
    "example": "pr_lib.table.Count(source)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.DeepClone(value, seen)",
    "detail": "Gera uma cópia profunda (deep copy) de tabelas e metatabelas.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, deep, clone, shared",
    "example": "pr_lib.table.DeepClone('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.freeze(value)",
    "detail": "Executa os dados ou a operação “freeze” por meio da API pública do módulo `table`.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, freeze, shared",
    "example": "pr_lib.table.freeze('value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.isfrozen(value)",
    "detail": "Verifica os dados ou a operação “isfrozen” e retorna o estado correspondente.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, isfrozen, shared",
    "example": "local result = pr_lib.table.isfrozen('value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.map(source, callback)",
    "detail": "Executa a projeção e mapeamento de chaves e valores a partir da execução do callback.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, map, shared",
    "example": "pr_lib.table.map(source, function(...) return true end)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Map(source, callback)",
    "detail": "Executa a projeção e mapeamento de chaves e valores a partir da execução do callback.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, map, shared",
    "example": "pr_lib.table.Map(source, function(...) return true end)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.matches(left, right)",
    "detail": "Compara recursivamente se duas tabelas possuem conteúdo exatamente idêntico.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, matches, shared",
    "example": "pr_lib.table.matches('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Matches(left, right)",
    "detail": "Compara recursivamente se duas tabelas possuem conteúdo exatamente idêntico.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, matches, shared",
    "example": "pr_lib.table.Matches('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.merge(target, source, override)",
    "detail": "Combina elementos de uma tabela de origem em uma tabela de destino.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, merge, shared",
    "example": "pr_lib.table.merge('value', source, 'example')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Merge(target, source, override)",
    "detail": "Combina elementos de uma tabela de origem em uma tabela de destino.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, merge, shared",
    "example": "pr_lib.table.Merge('value', source, 'example')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.shuffle(source, copy, random)",
    "detail": "Embaralha aleatoriamente a ordem dos elementos numéricos indexados da tabela.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, shuffle, shared",
    "example": "pr_lib.table.shuffle(source, 'value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Shuffle(source, copy, random)",
    "detail": "Embaralha aleatoriamente a ordem dos elementos numéricos indexados da tabela.",
    "directory": "pr_bridge/bridge/utils/tables.lua",
    "tags": "table, shuffle, shared",
    "example": "pr_lib.table.Shuffle(source, 'value', 'value')"
  },
  {
    "module": "ids",
    "context": "shared",
    "signature": "pr_lib.ids.createUniqueId(registry, length, pattern)",
    "detail": "Gera uma string aleatória baseada no padrão (pattern ex: \"ALPHANUMERIC\") com o comprimento fornecido, garantindo sua exclusividade comparando com uma tabela de registros existentes (registry).",
    "directory": "pr_bridge/bridge/utils/ids.lua",
    "tags": "ids, create, unique, id, shared",
    "example": "local result = pr_lib.ids.createUniqueId('value', 'value', 'value')"
  },
  {
    "module": "ids",
    "context": "shared",
    "signature": "pr_lib.ids.CreateUniqueId(registry, length, pattern)",
    "detail": "Gera uma string aleatória baseada no padrão (pattern ex: \"ALPHANUMERIC\") com o comprimento fornecido, garantindo sua exclusividade comparando com uma tabela de registros existentes (registry).",
    "directory": "pr_bridge/bridge/utils/ids.lua",
    "tags": "ids, create, unique, id, shared",
    "example": "local result = pr_lib.ids.CreateUniqueId('value', 'value', 'value')"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.fromCamera(distance, flags, ignoreFlags, ignoreEntity)",
    "detail": "Projeta um feixe de raycast tridimensional invisível a partir da câmera do jogador na direção de foco da mira até a distância máxima informada. Retorna se atingiu algo, as coordenadas de impacto, o vetor normal e a ID da entidade atingida (veículo, ped ou objeto).",
    "directory": "pr_bridge/bridge/fivem/raycast/client.lua",
    "tags": "raycast, from, camera, client",
    "example": "pr_lib.raycast.fromCamera(1, 'value', 'value', entity)"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.FromCamera(distance, flags, ignoreFlags, ignoreEntity)",
    "detail": "Projeta um feixe de raycast tridimensional invisível a partir da câmera do jogador na direção de foco da mira até a distância máxima informada. Retorna se atingiu algo, as coordenadas de impacto, o vetor normal e a ID da entidade atingida (veículo, ped ou objeto).",
    "directory": "pr_bridge/bridge/fivem/raycast/client.lua",
    "tags": "raycast, from, camera, client",
    "example": "pr_lib.raycast.FromCamera(1, 'value', 'value', entity)"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.fromCoords(origin, destination, flags, ignoreFlags, ignoreEntity)",
    "detail": "Dispara um feixe de raycast a partir de coordenadas absolutas de origem (origin) para um destino (destination).",
    "directory": "pr_bridge/bridge/fivem/raycast/client.lua",
    "tags": "raycast, from, coords, client",
    "example": "pr_lib.raycast.fromCoords('value', 'value', 'value', 'value', entity)"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.FromCoords(origin, destination, flags, ignoreFlags, ignoreEntity)",
    "detail": "Dispara um feixe de raycast a partir de coordenadas absolutas de origem (origin) para um destino (destination).",
    "directory": "pr_bridge/bridge/fivem/raycast/client.lua",
    "tags": "raycast, from, coords, client",
    "example": "pr_lib.raycast.FromCoords('value', 'value', 'value', 'value', entity)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getEntity(netId, timeout)",
    "detail": "Obtém os dados ou a operação “get entity” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/client.lua",
    "tags": "net, get, entity, client",
    "example": "local result = pr_lib.fivem.net.getEntity(NetworkGetNetworkIdFromEntity(entity), 1)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getEntity(netId, timeout)",
    "detail": "Obtém os dados ou a operação “get entity” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/server.lua",
    "tags": "net, get, entity, server",
    "example": "local result = pr_lib.fivem.net.getEntity(NetworkGetNetworkIdFromEntity(entity), 1)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getNetId(entity)",
    "detail": "Obtém os dados ou a operação “get net id” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/client.lua",
    "tags": "net, get, id, client",
    "example": "local result = pr_lib.fivem.net.getNetId(entity)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getNetId(entity)",
    "detail": "Obtém os dados ou a operação “get net id” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/server.lua",
    "tags": "net, get, id, server",
    "example": "local result = pr_lib.fivem.net.getNetId(entity)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getOwner(entityOrNetId, timeout)",
    "detail": "Obtém os dados ou a operação “get owner” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/client.lua",
    "tags": "net, get, owner, client",
    "example": "local result = pr_lib.fivem.net.getOwner(entity, 1)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getOwner(entityOrNetId, timeout)",
    "detail": "Obtém os dados ou a operação “get owner” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/server.lua",
    "tags": "net, get, owner, server",
    "example": "local result = pr_lib.fivem.net.getOwner(entity, 1)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getVehicle(netId, timeout)",
    "detail": "Obtém os dados ou a operação “get vehicle” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/client.lua",
    "tags": "net, get, vehicle, client, veículo, carro",
    "example": "local result = pr_lib.fivem.net.getVehicle(NetworkGetNetworkIdFromEntity(entity), 1)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getVehicle(netId, timeout)",
    "detail": "Obtém os dados ou a operação “get vehicle” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/net/server.lua",
    "tags": "net, get, vehicle, server, veículo, carro",
    "example": "local result = pr_lib.fivem.net.getVehicle(NetworkGetNetworkIdFromEntity(entity), 1)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.isValidNetId(netId)",
    "detail": "Verifica os dados ou a operação “is valid net id” e retorna o estado correspondente.",
    "directory": "pr_bridge/bridge/fivem/net/client.lua",
    "tags": "net, is, valid, id, client",
    "example": "local result = pr_lib.fivem.net.isValidNetId(NetworkGetNetworkIdFromEntity(entity))"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.isValidNetId(netId)",
    "detail": "Verifica os dados ou a operação “is valid net id” e retorna o estado correspondente.",
    "directory": "pr_bridge/bridge/fivem/net/server.lua",
    "tags": "net, is, valid, id, server",
    "example": "local result = pr_lib.fivem.net.isValidNetId(NetworkGetNetworkIdFromEntity(entity))"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.resolveVehicle(vehicleOrNetId, timeout)",
    "detail": "Executa os dados ou a operação “resolve vehicle” por meio da API pública do módulo `fivem.net`.",
    "directory": "pr_bridge/bridge/fivem/net/client.lua",
    "tags": "net, resolve, vehicle, client, veículo, carro",
    "example": "pr_lib.fivem.net.resolveVehicle(entity, 1)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.resolveVehicle(vehicleOrNetId, timeout)",
    "detail": "Executa os dados ou a operação “resolve vehicle” por meio da API pública do módulo `fivem.net`.",
    "directory": "pr_bridge/bridge/fivem/net/server.lua",
    "tags": "net, resolve, vehicle, server, veículo, carro",
    "example": "pr_lib.fivem.net.resolveVehicle(entity, 1)"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.setClipboard(value)",
    "detail": "Define ou atualiza os dados ou a operação “set clipboard” usando a autoridade do módulo.",
    "directory": "pr_bridge/bridge/fivem/ui/client.lua",
    "tags": "ui, set, clipboard, client",
    "example": "pr_lib.setClipboard('value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.draw2DText(text, x, y, scale, textColor, font)",
    "detail": "Desenha na tela do jogador textos em coordenadas bidimensionais de proporção decimal (de 0.0 a 1.0).",
    "directory": "pr_bridge/bridge/fivem/ui/client.lua",
    "tags": "ui, draw2, dtext, client",
    "example": "pr_lib.ui.draw2DText('value', 'value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.Draw2DText(text, x, y, scale, textColor, font)",
    "detail": "Desenha na tela do jogador textos em coordenadas bidimensionais de proporção decimal (de 0.0 a 1.0).",
    "directory": "pr_bridge/bridge/fivem/ui/client.lua",
    "tags": "ui, draw2, dtext, client",
    "example": "pr_lib.ui.Draw2DText('value', 'value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.draw3DText(text, coords, scale, textColor, font)",
    "detail": "Desenha textos flutuantes projetados no mundo físico tridimensional em coordenadas GPS.",
    "directory": "pr_bridge/bridge/fivem/ui/client.lua",
    "tags": "ui, draw3, dtext, client",
    "example": "pr_lib.ui.draw3DText('value', vec3(0.0, 0.0, 0.0), 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.Draw3DText(text, coords, scale, textColor, font)",
    "detail": "Desenha textos flutuantes projetados no mundo físico tridimensional em coordenadas GPS.",
    "directory": "pr_bridge/bridge/fivem/ui/client.lua",
    "tags": "ui, draw3, dtext, client",
    "example": "pr_lib.ui.Draw3DText('value', vec3(0.0, 0.0, 0.0), 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.drawRect(x, y, width, height, rectColor)",
    "detail": "Desenha retângulos bidimensionais coloridos na HUD da tela do jogador local.",
    "directory": "pr_bridge/bridge/fivem/ui/client.lua",
    "tags": "ui, draw, rect, client",
    "example": "pr_lib.ui.drawRect('value', 'value', 'example', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.DrawRect(x, y, width, height, rectColor)",
    "detail": "Desenha retângulos bidimensionais coloridos na HUD da tela do jogador local.",
    "directory": "pr_bridge/bridge/fivem/ui/client.lua",
    "tags": "ui, draw, rect, client",
    "example": "pr_lib.ui.DrawRect('value', 'value', 'example', 'value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.clear(target)",
    "detail": "Força limpeza de texturas.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, clear, server",
    "example": "pr_lib.dui.clear('value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.create(options, width, height)",
    "detail": "Comanda sincronizadamente que clientes em target carreguem uma nova instância do navegador DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, create, client",
    "example": "local result = pr_lib.dui.create({}, 'example', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.create(target, options)",
    "detail": "Comanda sincronizadamente que clientes em target carreguem uma nova instância do navegador DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, create, server",
    "example": "local result = pr_lib.dui.create('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createPoly(target, options)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, create, poly, client",
    "example": "local result = pr_lib.dui.createPoly('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createPoly(target, options)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, create, poly, server",
    "example": "local result = pr_lib.dui.createPoly('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createPoly4(target, options)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, create, poly4, server",
    "example": "local result = pr_lib.dui.createPoly4('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createRenderTarget(target, options)",
    "detail": "Associa a DUI a um render target de textura nativo do GTA (ex: telas internas originais de cinemas ou monitores).",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, create, render, target, client, alvo, interação, zona",
    "example": "local result = pr_lib.dui.createRenderTarget('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createRenderTarget(target, options)",
    "detail": "Associa a DUI a um render target de textura nativo do GTA (ex: telas internas originais de cinemas ou monitores).",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, create, render, target, server, alvo, interação, zona",
    "example": "local result = pr_lib.dui.createRenderTarget('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createReplacement(target, options)",
    "detail": "APIs locais de projeção e substituição de texturas físicas tridimensionais no mundo 3D por renderizadores DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, create, replacement, client",
    "example": "local result = pr_lib.dui.createReplacement('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createReplaceTexture(target, options)",
    "detail": "Substitui texturas físicas de modelos 3D originais do GTA pelo navegador web.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, create, replace, texture, client",
    "example": "local result = pr_lib.dui.createReplaceTexture('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createReplaceTexture(target, options)",
    "detail": "Substitui texturas físicas de modelos 3D originais do GTA pelo navegador web.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, create, replace, texture, server",
    "example": "local result = pr_lib.dui.createReplaceTexture('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createSprite(options)",
    "detail": "Desenha texturas DUI em elementos gráficos 2D.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, create, sprite, client",
    "example": "local result = pr_lib.dui.createSprite({})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createSprite(target, options)",
    "detail": "Desenha texturas DUI em elementos gráficos 2D.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, create, sprite, server",
    "example": "local result = pr_lib.dui.createSprite('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.destroy(target)",
    "detail": "Fecha e apaga a instância DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, destroy, client",
    "example": "pr_lib.dui.destroy('value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.destroy(target, id)",
    "detail": "Fecha e apaga a instância DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, destroy, server",
    "example": "pr_lib.dui.destroy('value', 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.disableMouse(target)",
    "detail": "Exibe e controla ponteiros de mouses interativos em cima do navegador web.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, disable, mouse, client",
    "example": "pr_lib.dui.disableMouse('value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.drawSprite(target, options)",
    "detail": "APIs locais de projeção e substituição de texturas físicas tridimensionais no mundo 3D por renderizadores DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, draw, sprite, client",
    "example": "pr_lib.dui.drawSprite('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.enableMouse(target, options)",
    "detail": "Exibe e controla ponteiros de mouses interativos em cima do navegador web.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, enable, mouse, client",
    "example": "pr_lib.dui.enableMouse('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.focus(target, options)",
    "detail": "Foca o controle de teclado e mouse do jogador para interagir diretamente com o navegador.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, focus, client",
    "example": "pr_lib.dui.focus('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.get(id)",
    "detail": "Consultas de status e instâncias de DUIs server-side.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, get, client",
    "example": "local result = pr_lib.dui.get('example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.get(id)",
    "detail": "Consultas de status e instâncias de DUIs server-side.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, get, server",
    "example": "local result = pr_lib.dui.get('example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.list()",
    "detail": "Consultas de status e instâncias de DUIs server-side.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, list, client",
    "example": "pr_lib.dui.list()"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.list()",
    "detail": "Consultas de status e instâncias de DUIs server-side.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, list, server",
    "example": "pr_lib.dui.list()"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.nuiUrl(path, ownerResource)",
    "detail": "Gera endereços locais válidos apontando para páginas HTML e assets de recursos NUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, nui, url, client",
    "example": "pr_lib.dui.nuiUrl('value', source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.poly(target, options)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, poly, client",
    "example": "pr_lib.dui.poly('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.poly(target, options)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, poly, server",
    "example": "pr_lib.dui.poly('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.poly4(target, options)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, poly4, server",
    "example": "pr_lib.dui.poly4('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.remove(target, id)",
    "detail": "Fecha e apaga a instância DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, remove, server",
    "example": "pr_lib.dui.remove('value', 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.removeReplaceTexture(target, options)",
    "detail": "APIs locais de projeção e substituição de texturas físicas tridimensionais no mundo 3D por renderizadores DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, remove, replace, texture, client",
    "example": "pr_lib.dui.removeReplaceTexture('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.renderTarget(target, options)",
    "detail": "Associa a DUI a um render target de textura nativo do GTA (ex: telas internas originais de cinemas ou monitores).",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, render, target, client, alvo, interação, zona",
    "example": "pr_lib.dui.renderTarget('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.renderTarget(target, options)",
    "detail": "Associa a DUI a um render target de textura nativo do GTA (ex: telas internas originais de cinemas ou monitores).",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, render, target, server, alvo, interação, zona",
    "example": "pr_lib.dui.renderTarget('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.replaceTexture(target, options)",
    "detail": "Substitui texturas físicas de modelos 3D originais do GTA pelo navegador web.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, replace, texture, client",
    "example": "pr_lib.dui.replaceTexture('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.replaceTexture(target, options)",
    "detail": "Substitui texturas físicas de modelos 3D originais do GTA pelo navegador web.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, replace, texture, server",
    "example": "pr_lib.dui.replaceTexture('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.send(target, message)",
    "detail": "Envia mensagens estruturadas (postMessage) para o javascript rodando no navegador da DUI especificada.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, send, client",
    "example": "pr_lib.dui.send('value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.send(target, id, message)",
    "detail": "Envia mensagens estruturadas (postMessage) para o javascript rodando no navegador da DUI especificada.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, send, server",
    "example": "pr_lib.dui.send('value', 'example', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMessage(target, message)",
    "detail": "Envia mensagens estruturadas (postMessage) para o javascript rodando no navegador da DUI especificada.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, send, message, client",
    "example": "pr_lib.dui.sendMessage('value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.sendMessage(target, id, message)",
    "detail": "Envia mensagens estruturadas (postMessage) para o javascript rodando no navegador da DUI especificada.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, send, message, server",
    "example": "pr_lib.dui.sendMessage('value', 'example', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseDown(target, button)",
    "detail": "Simula eventos de clique, movimento e rolagem no navegador DUI baseado em entradas físicas do jogador.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, send, mouse, down, client",
    "example": "pr_lib.dui.sendMouseDown('value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseMove(target, x, y)",
    "detail": "Simula eventos de clique, movimento e rolagem no navegador DUI baseado em entradas físicas do jogador.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, send, mouse, move, client",
    "example": "pr_lib.dui.sendMouseMove('value', 'value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseUp(target, button)",
    "detail": "Simula eventos de clique, movimento e rolagem no navegador DUI baseado em entradas físicas do jogador.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, send, mouse, up, client",
    "example": "pr_lib.dui.sendMouseUp('value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseWheel(target, deltaX, deltaY)",
    "detail": "Simula eventos de clique, movimento e rolagem no navegador DUI baseado em entradas físicas do jogador.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, send, mouse, wheel, client",
    "example": "pr_lib.dui.sendMouseWheel('value', 'value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.setBrightness(target, brightness)",
    "detail": "Controla opacidade e brilho de renderização da textura.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, set, brightness, client",
    "example": "pr_lib.dui.setBrightness('value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.setBrightness(target, id, brightness)",
    "detail": "Controla opacidade e brilho de renderização da textura.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, set, brightness, server",
    "example": "pr_lib.dui.setBrightness('value', 'example', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.setOpacity(target, opacity)",
    "detail": "Controla opacidade e brilho de renderização da textura.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, set, opacity, client",
    "example": "pr_lib.dui.setOpacity('value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.setOpacity(target, id, opacity)",
    "detail": "Controla opacidade e brilho de renderização da textura.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, set, opacity, server",
    "example": "pr_lib.dui.setOpacity('value', 'example', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.setUrl(target, url)",
    "detail": "Redireciona o navegador DUI para outro endereço web.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, set, url, client",
    "example": "pr_lib.dui.setUrl('value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.setUrl(target, id, url)",
    "detail": "Redireciona o navegador DUI para outro endereço web.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, set, url, server",
    "example": "pr_lib.dui.setUrl('value', 'example', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.startPoly(target, options)",
    "detail": "APIs locais de projeção e substituição de texturas físicas tridimensionais no mundo 3D por renderizadores DUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, start, poly, client",
    "example": "pr_lib.dui.startPoly('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.startSprite(target, options)",
    "detail": "Desenha texturas DUI em elementos gráficos 2D.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, start, sprite, client",
    "example": "pr_lib.dui.startSprite('value', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.startSprite(target, id, options)",
    "detail": "Desenha texturas DUI em elementos gráficos 2D.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, start, sprite, server",
    "example": "pr_lib.dui.startSprite('value', 'example', {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.stopPoly(target)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, stop, poly, client",
    "example": "pr_lib.dui.stopPoly('value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.stopPoly(target, id)",
    "detail": "Renderiza o navegador web em polígonos tridimensionais posicionados no espaço.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, stop, poly, server",
    "example": "pr_lib.dui.stopPoly('value', 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.stopRenderTarget(target)",
    "detail": "Associa a DUI a um render target de textura nativo do GTA (ex: telas internas originais de cinemas ou monitores).",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, stop, render, target, client, alvo, interação, zona",
    "example": "pr_lib.dui.stopRenderTarget('value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.stopRenderTarget(target, id)",
    "detail": "Associa a DUI a um render target de textura nativo do GTA (ex: telas internas originais de cinemas ou monitores).",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, stop, render, target, server, alvo, interação, zona",
    "example": "pr_lib.dui.stopRenderTarget('value', 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.stopSprite(target)",
    "detail": "Desenha texturas DUI em elementos gráficos 2D.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, stop, sprite, client",
    "example": "pr_lib.dui.stopSprite('value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.stopSprite(target, id)",
    "detail": "Desenha texturas DUI em elementos gráficos 2D.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, stop, sprite, server",
    "example": "pr_lib.dui.stopSprite('value', 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.sync(target)",
    "detail": "Sincroniza DUIs ativas com novos jogadores conectados que entraram no escopo.",
    "directory": "pr_bridge/bridge/fivem/dui/server.lua",
    "tags": "dui, sync, server",
    "example": "pr_lib.dui.sync('value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.toggleMouse(target, state)",
    "detail": "Exibe e controla ponteiros de mouses interativos em cima do navegador web.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, toggle, mouse, client",
    "example": "pr_lib.dui.toggleMouse('value', true)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.unfocus()",
    "detail": "Foca o controle de teclado e mouse do jogador para interagir diretamente com o navegador.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, unfocus, client",
    "example": "pr_lib.dui.unfocus()"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.url(path, ownerResource)",
    "detail": "Gera endereços locais válidos apontando para páginas HTML e assets de recursos NUI.",
    "directory": "pr_bridge/bridge/fivem/dui/client.lua",
    "tags": "dui, url, client",
    "example": "pr_lib.dui.url('value', source)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.apply(vehicle, props, options)",
    "detail": "Aplica modificações físicas, cores e upgrades no veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, apply, client",
    "example": "pr_lib.fivem.tuning.apply(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.apply(vehicle, props, options)",
    "detail": "Aplica modificações físicas, cores e upgrades no veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/server.lua",
    "tags": "tuning, apply, server",
    "example": "pr_lib.fivem.tuning.apply(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.applyNetId(netId, props, options)",
    "detail": "Envia comando para que clientes apliquem propriedades em um veículo baseado na sua ID de rede.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, apply, net, id, client",
    "example": "pr_lib.fivem.tuning.applyNetId(NetworkGetNetworkIdFromEntity(entity), 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.applyNetId(netId, props, target, options)",
    "detail": "Envia comando para que clientes apliquem propriedades em um veículo baseado na sua ID de rede.",
    "directory": "pr_bridge/bridge/fivem/tuning/server.lua",
    "tags": "tuning, apply, net, id, server",
    "example": "pr_lib.fivem.tuning.applyNetId(NetworkGetNetworkIdFromEntity(entity), 'value', 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.get(vehicle)",
    "detail": "Retorna uma tabela contendo todas as propriedades de customizações, modificações mecânicas, cores e níveis de integridade do veículo correspondente.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, get, client",
    "example": "local result = pr_lib.fivem.tuning.get(entity)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.repair(vehicle)",
    "detail": "Conserta visualmente e mecanicamente o motor, carroceria e pneus do veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, repair, client",
    "example": "pr_lib.fivem.tuning.repair(entity)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.restore(vehicle, snapshot, options)",
    "detail": "Restaura o estado do veículo a partir de um snapshot salvo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, restore, client",
    "example": "pr_lib.fivem.tuning.restore(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.restore(vehicle, snapshot, options)",
    "detail": "Restaura o estado do veículo a partir de um snapshot salvo.",
    "directory": "pr_bridge/bridge/fivem/tuning/server.lua",
    "tags": "tuning, restore, server",
    "example": "pr_lib.fivem.tuning.restore(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setExtra(vehicle, extraId, state)",
    "detail": "Ativa ou remove extras e acessórios nativos de carroceria instalados no veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, set, extra, client",
    "example": "pr_lib.fivem.tuning.setExtra(entity, {}, true)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setFuel(vehicle, fuelLevel)",
    "detail": "Altera diretamente o nível físico de combustível do motor do veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, set, fuel, client",
    "example": "pr_lib.fivem.tuning.setFuel(entity, 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setMod(vehicle, modType, modIndex, customTires)",
    "detail": "Altera peças de modificação mecânica (como Motor, Transmissão, Suspensão) ou visual (aerofólios, capôs).",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, set, mod, client",
    "example": "pr_lib.fivem.tuning.setMod(entity, 'value', 'value', 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setNeon(vehicle, enabled, color)",
    "detail": "Configura luzes de neons instaladas embaixo do chassi do veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, set, neon, client",
    "example": "pr_lib.fivem.tuning.setNeon(entity, true, 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setPlate(vehicle, plate)",
    "detail": "Modifica a string exibida na placa física do veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, set, plate, client",
    "example": "pr_lib.fivem.tuning.setPlate(entity, 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setXenon(vehicle, enabled, color)",
    "detail": "Configura faróis de Xenon e tonalidades de cores nos faróis do veículo.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, set, xenon, client",
    "example": "pr_lib.fivem.tuning.setXenon(entity, true, 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.snapshot(vehicle)",
    "detail": "Retorna tabela vazia para stubs do servidor.",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, snapshot, client",
    "example": "pr_lib.fivem.tuning.snapshot(entity)"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.snapshot()",
    "detail": "Retorna tabela vazia para stubs do servidor.",
    "directory": "pr_bridge/bridge/fivem/tuning/server.lua",
    "tags": "tuning, snapshot, server",
    "example": "pr_lib.fivem.tuning.snapshot()"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.toggleMod(vehicle, modType, state)",
    "detail": "Liga ou desliga modificações de performance específicas (como Turbo).",
    "directory": "pr_bridge/bridge/fivem/tuning/client.lua",
    "tags": "tuning, toggle, mod, client",
    "example": "pr_lib.fivem.tuning.toggleMod(entity, 'value', true)"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.change(text, position, options)",
    "detail": "Altera o texto ou propriedades do painel DrawText ativo na tela.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, change, client",
    "example": "pr_lib.drawtext.change('value', 'value', {})"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.ChangeText(text, position, options)",
    "detail": "Altera o texto ou propriedades do painel DrawText ativo na tela.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, change, text, client",
    "example": "pr_lib.drawtext.ChangeText('value', 'value', {})"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.draw2d(params)",
    "detail": "Métodos de desenho 2D.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw2d, client",
    "example": "pr_lib.drawtext.draw2d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.draw3d(params)",
    "detail": "Métodos de desenho de textos tridimensionais.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw3d, client",
    "example": "pr_lib.drawtext.draw3d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText(text, position, options)",
    "detail": "Exibe textos flutuantes formatados.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw, text, client",
    "example": "pr_lib.drawtext.DrawText('value', 'value', {})"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.drawText2d(params)",
    "detail": "Métodos de desenho 2D.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw, text2d, client",
    "example": "pr_lib.drawtext.drawText2d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText2d(params)",
    "detail": "Métodos de desenho 2D.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw, text2d, client",
    "example": "pr_lib.drawtext.DrawText2d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText2D(params)",
    "detail": "Métodos de desenho 2D.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw, text2, client",
    "example": "pr_lib.drawtext.DrawText2D('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.drawText3d(params)",
    "detail": "Métodos de desenho de textos tridimensionais.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw, text3d, client",
    "example": "pr_lib.drawtext.drawText3d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText3d(params)",
    "detail": "Métodos de desenho de textos tridimensionais.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw, text3d, client",
    "example": "pr_lib.drawtext.DrawText3d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText3D(params)",
    "detail": "Métodos de desenho de textos tridimensionais.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, draw, text3, client",
    "example": "pr_lib.drawtext.DrawText3D('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.hide()",
    "detail": "Apaga o painel de texto.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, hide, client",
    "example": "pr_lib.drawtext.hide()"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.HideText()",
    "detail": "Apaga o painel de texto.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, hide, text, client",
    "example": "pr_lib.drawtext.HideText()"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.isOpen()",
    "detail": "Retorna se há algum painel de DrawText ativo na tela.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, is, open, client",
    "example": "local result = pr_lib.drawtext.isOpen()"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.keyPressed(delay)",
    "detail": "Registra o acionamento de teclas de atalho de interações DrawText com debounce (delay).",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, key, pressed, client",
    "example": "pr_lib.drawtext.keyPressed('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.KeyPressed(delay)",
    "detail": "Registra o acionamento de teclas de atalho de interações DrawText com debounce (delay).",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, key, pressed, client",
    "example": "pr_lib.drawtext.KeyPressed('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.show(text, position, options)",
    "detail": "Exibe textos flutuantes formatados.",
    "directory": "pr_bridge/bridge/fivem/drawtext/client.lua",
    "tags": "drawtext, show, client",
    "example": "pr_lib.drawtext.show('value', 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.fivem.getVehicleProperties(vehicle)",
    "detail": "Alias de compatibilidade para vehicleProperties.get.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/client.lua",
    "tags": "vehicle, properties, get, client, veículo, carro",
    "example": "local result = pr_lib.fivem.getVehicleProperties(entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.fivem.setVehicleProperties(vehicle, props)",
    "detail": "Alias de compatibilidade para vehicleProperties.set.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/client.lua",
    "tags": "vehicle, properties, set, client, veículo, carro",
    "example": "pr_lib.fivem.setVehicleProperties(entity, 'value')"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.fivem.setVehicleProperties(vehicle, props, options)",
    "detail": "Alias de compatibilidade para vehicleProperties.set.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/server.lua",
    "tags": "vehicle, properties, set, server, veículo, carro",
    "example": "pr_lib.fivem.setVehicleProperties(entity, 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.get(vehicle)",
    "detail": "Obtém a tabela completa contendo as propriedades estéticas e mecânicas instaladas no veículo (compatível com ESX/QBCore).",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/client.lua",
    "tags": "vehicle, properties, get, client, veículo, carro",
    "example": "local result = pr_lib.vehicleProperties.get(entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.GetVehicleProperties(vehicle)",
    "detail": "Obtém a tabela completa contendo as propriedades estéticas e mecânicas instaladas no veículo (compatível com ESX/QBCore).",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/client.lua",
    "tags": "vehicle, properties, get, client, veículo, carro",
    "example": "local result = pr_lib.vehicleProperties.GetVehicleProperties(entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.set(vehicle, props, fixVehicle)",
    "detail": "Modifica as propriedades físicas gerais de customização de um veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/client.lua",
    "tags": "vehicle, properties, set, client, veículo, carro",
    "example": "pr_lib.vehicleProperties.set(entity, 'value', entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.set(vehicle, props, options)",
    "detail": "Modifica as propriedades físicas gerais de customização de um veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/server.lua",
    "tags": "vehicle, properties, set, server, veículo, carro",
    "example": "pr_lib.vehicleProperties.set(entity, 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.setNetId(netId, props, target, options)",
    "detail": "Aplica propriedades sincronizadas via rede utilizando a ID de rede do veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/server.lua",
    "tags": "vehicle, properties, set, net, id, server, veículo, carro",
    "example": "pr_lib.vehicleProperties.setNetId(NetworkGetNetworkIdFromEntity(entity), 'value', 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.SetNetIdProperties(netId, props, target, options)",
    "detail": "Aplica propriedades sincronizadas via rede utilizando a ID de rede do veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/server.lua",
    "tags": "vehicle, properties, set, net, id, server, veículo, carro",
    "example": "pr_lib.vehicleProperties.SetNetIdProperties(NetworkGetNetworkIdFromEntity(entity), 'value', 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.SetVehicleProperties(vehicle, props, fixVehicle)",
    "detail": "Modifica as propriedades físicas gerais de customização de um veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/client.lua",
    "tags": "vehicle, properties, set, client, veículo, carro",
    "example": "pr_lib.vehicleProperties.SetVehicleProperties(entity, 'value', entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.SetVehicleProperties(vehicle, props, options)",
    "detail": "Modifica as propriedades físicas gerais de customização de um veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleProperties/server.lua",
    "tags": "vehicle, properties, set, server, veículo, carro",
    "example": "pr_lib.vehicleProperties.SetVehicleProperties(entity, 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.configureEntity(entity, options)",
    "detail": "Aplica opções de físicas, colisões, congelamento e persistência na entidade.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, configure, entity, client",
    "example": "pr_lib.fivem.streaming.configureEntity(entity, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createEntity(placementType, model, coords, heading, options)",
    "detail": "APIs otimizadas que carregam o modelo correspondente e criam objetos, peds ou veículos locais no cliente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, create, entity, client",
    "example": "local result = pr_lib.fivem.streaming.createEntity('value', 'prop_tool_bench02', vec3(0.0, 0.0, 0.0), 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createObject(model, coords, options)",
    "detail": "APIs otimizadas que carregam o modelo correspondente e criam objetos, peds ou veículos locais no cliente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, create, object, client",
    "example": "local result = pr_lib.fivem.streaming.createObject('prop_tool_bench02', vec3(0.0, 0.0, 0.0), {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createPed(model, coords, heading, options)",
    "detail": "APIs otimizadas que carregam o modelo correspondente e criam objetos, peds ou veículos locais no cliente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, create, ped, client",
    "example": "local result = pr_lib.fivem.streaming.createPed('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createProp(model, coords, options)",
    "detail": "APIs otimizadas que carregam o modelo correspondente e criam objetos, peds ou veículos locais no cliente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, create, prop, client",
    "example": "local result = pr_lib.fivem.streaming.createProp('prop_tool_bench02', vec3(0.0, 0.0, 0.0), {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createVehicle(model, coords, heading, options)",
    "detail": "APIs otimizadas que carregam o modelo correspondente e criam objetos, peds ou veículos locais no cliente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, create, vehicle, client, veículo, carro",
    "example": "local result = pr_lib.fivem.streaming.createVehicle('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.delete(entity)",
    "detail": "Apaga uma entidade (ped, veículo ou objeto) local liberando memória.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, delete, client",
    "example": "pr_lib.fivem.streaming.delete(entity)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.deleteEntity(entity)",
    "detail": "Apaga uma entidade (ped, veículo ou objeto) local liberando memória.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, delete, entity, client",
    "example": "pr_lib.fivem.streaming.deleteEntity(entity)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.findGroundZ(coords, options)",
    "detail": "Varre verticalmente o mapa para obter as coordenadas Z precisas do solo abaixo da posição indicada.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, find, ground, client",
    "example": "local result = pr_lib.fivem.streaming.findGroundZ(vec3(0.0, 0.0, 0.0), {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.getModelDimensions(model, timeout)",
    "detail": "Retorna as dimensões de bounding box (mínimo e máximo) do modelo especificado.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, get, model, dimensions, client",
    "example": "local result = pr_lib.fivem.streaming.getModelDimensions('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.getModelGroundOffset(model, timeout)",
    "detail": "Calcula a compensação de altura vertical necessária para posicionar o objeto rente ao chão.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, get, model, ground, offset, client",
    "example": "local result = pr_lib.fivem.streaming.getModelGroundOffset('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "server",
    "signature": "pr_lib.fivem.streaming.hash(model)",
    "detail": "Retorna o hash numérico de um modelo 3D.",
    "directory": "pr_bridge/bridge/fivem/streaming/server.lua",
    "tags": "streaming, hash, server",
    "example": "local result = pr_lib.fivem.streaming.hash('prop_tool_bench02')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.loadAnimDict(asset, timeout)",
    "detail": "Carrega dicionários contendo arquivos de animações esqueléticas para peds.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, load, anim, dict, client",
    "example": "local result = pr_lib.fivem.streaming.loadAnimDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.loadWeaponAsset(model, timeout)",
    "detail": "Carrega modelos de armas de fogo nativas e suas propriedades.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, load, weapon, asset, client",
    "example": "local result = pr_lib.fivem.streaming.loadWeaponAsset('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.performAction(data)",
    "detail": "APIs utilitárias para acionar ações cinemáticas combinadas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, perform, action, client",
    "example": "pr_lib.fivem.streaming.performAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PerformAction(data)",
    "detail": "APIs utilitárias para acionar ações cinemáticas combinadas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, perform, action, client",
    "example": "pr_lib.fivem.streaming.PerformAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.placeEntityProperly(entity, placementType, options)",
    "detail": "Ajusta a altura e rotação de uma entidade para que ela fique alinhada corretamente com a superfície do solo.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, place, entity, properly, client",
    "example": "pr_lib.fivem.streaming.placeEntityProperly(entity, 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playAction(data)",
    "detail": "APIs utilitárias para acionar ações cinemáticas combinadas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, action, client",
    "example": "pr_lib.fivem.streaming.playAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayAction(data)",
    "detail": "APIs utilitárias para acionar ações cinemáticas combinadas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, action, client",
    "example": "pr_lib.fivem.streaming.PlayAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playAnim(data, clip, duration, options)",
    "detail": "Força uma entidade ped (geralmente o jogador local) a reproduzir uma animação esquelética de forma simplificada, carregando o dicionário de animação previamente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, anim, client",
    "example": "pr_lib.fivem.streaming.playAnim({}, 'value', 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayAnim(data, clip, duration, options)",
    "detail": "Força uma entidade ped (geralmente o jogador local) a reproduzir uma animação esquelética de forma simplificada, carregando o dicionário de animação previamente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, anim, client",
    "example": "pr_lib.fivem.streaming.PlayAnim({}, 'value', 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playAnimation(data, clip, duration, options)",
    "detail": "Força uma entidade ped (geralmente o jogador local) a reproduzir uma animação esquelética de forma simplificada, carregando o dicionário de animação previamente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, animation, client",
    "example": "pr_lib.fivem.streaming.playAnimation({}, 'value', 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayAnimation(data, clip, duration, options)",
    "detail": "Força uma entidade ped (geralmente o jogador local) a reproduzir uma animação esquelética de forma simplificada, carregando o dicionário de animação previamente.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, animation, client",
    "example": "pr_lib.fivem.streaming.PlayAnimation({}, 'value', 'value', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playInteraction(data)",
    "detail": "APIs utilitárias para acionar ações cinemáticas combinadas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, interaction, client",
    "example": "pr_lib.fivem.streaming.playInteraction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayInteraction(data)",
    "detail": "APIs utilitárias para acionar ações cinemáticas combinadas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, play, interaction, client",
    "example": "pr_lib.fivem.streaming.PlayInteraction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseAnimDict(animDict)",
    "detail": "Carrega dicionários contendo arquivos de animações esqueléticas para peds.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, anim, dict, client",
    "example": "pr_lib.fivem.streaming.releaseAnimDict('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseAnimSet(animSet)",
    "detail": "Carrega arquivos de sets de animações de postura/caminhar (walkstyles).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, anim, set, client",
    "example": "pr_lib.fivem.streaming.releaseAnimSet('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseAudioBank(audioBank)",
    "detail": "Carrega pacotes de efeitos sonoros e áudios nativos.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, audio, bank, client",
    "example": "pr_lib.fivem.streaming.releaseAudioBank('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseModel(model)",
    "detail": "Carrega e retém na memória de vídeo do jogo o modelo 3D informado (model), liberando-o da memória após o uso.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, model, client",
    "example": "pr_lib.fivem.streaming.releaseModel('prop_tool_bench02')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releasePtfxAsset(asset)",
    "detail": "Carrega bibliotecas de efeitos de partículas (Ptfx, ex: fumaças, faíscas).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, ptfx, asset, client",
    "example": "pr_lib.fivem.streaming.releasePtfxAsset('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseScaleformMovie(handle)",
    "detail": "Carrega arquivos Scaleforms Flash nativos do GTA V (ex: botões instrucionais, mini-games, telas de computadores).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, scaleform, movie, client",
    "example": "pr_lib.fivem.streaming.releaseScaleformMovie('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseTextureDict(textureDict)",
    "detail": "Carrega dicionários contendo texturas e imagens nativas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, texture, dict, client",
    "example": "pr_lib.fivem.streaming.releaseTextureDict('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseWeaponAsset(model)",
    "detail": "Carrega modelos de armas de fogo nativas e suas propriedades.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, release, weapon, asset, client",
    "example": "pr_lib.fivem.streaming.releaseWeaponAsset('prop_tool_bench02')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestAnimDict(animDict, timeout)",
    "detail": "Carrega dicionários contendo arquivos de animações esqueléticas para peds.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, anim, dict, client",
    "example": "pr_lib.fivem.streaming.requestAnimDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestAnimDict(asset, timeout)",
    "detail": "Carrega dicionários contendo arquivos de animações esqueléticas para peds.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, anim, dict, client",
    "example": "pr_lib.fivem.streaming.RequestAnimDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestAnimSet(animSet, timeout)",
    "detail": "Carrega arquivos de sets de animações de postura/caminhar (walkstyles).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, anim, set, client",
    "example": "pr_lib.fivem.streaming.requestAnimSet('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestAnimSet(asset, timeout)",
    "detail": "Carrega arquivos de sets de animações de postura/caminhar (walkstyles).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, anim, set, client",
    "example": "pr_lib.fivem.streaming.RequestAnimSet('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestAudioBank(asset, timeout)",
    "detail": "Carrega pacotes de efeitos sonoros e áudios nativos.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, audio, bank, client",
    "example": "pr_lib.fivem.streaming.RequestAudioBank('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestAudioBank(audioBank, timeout)",
    "detail": "Carrega pacotes de efeitos sonoros e áudios nativos.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, audio, bank, client",
    "example": "pr_lib.fivem.streaming.requestAudioBank('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestModel(model, timeout)",
    "detail": "Carrega e retém na memória de vídeo do jogo o modelo 3D informado (model), liberando-o da memória após o uso.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, model, client",
    "example": "pr_lib.fivem.streaming.requestModel('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestModel(model, timeout)",
    "detail": "Carrega e retém na memória de vídeo do jogo o modelo 3D informado (model), liberando-o da memória após o uso.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, model, client",
    "example": "pr_lib.fivem.streaming.RequestModel('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestNamedPtfxAsset(asset, timeout)",
    "detail": "Carrega bibliotecas de efeitos de partículas (Ptfx, ex: fumaças, faíscas).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, named, ptfx, asset, client",
    "example": "pr_lib.fivem.streaming.RequestNamedPtfxAsset('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestPtfxAsset(asset, timeout)",
    "detail": "Carrega bibliotecas de efeitos de partículas (Ptfx, ex: fumaças, faíscas).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, ptfx, asset, client",
    "example": "pr_lib.fivem.streaming.requestPtfxAsset('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestScaleformMovie(asset, timeout)",
    "detail": "Carrega arquivos Scaleforms Flash nativos do GTA V (ex: botões instrucionais, mini-games, telas de computadores).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, scaleform, movie, client",
    "example": "pr_lib.fivem.streaming.RequestScaleformMovie('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestScaleformMovie(name, timeout)",
    "detail": "Carrega arquivos Scaleforms Flash nativos do GTA V (ex: botões instrucionais, mini-games, telas de computadores).",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, scaleform, movie, client",
    "example": "pr_lib.fivem.streaming.requestScaleformMovie('example', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestStreamedTextureDict(asset, timeout)",
    "detail": "Carrega dicionários contendo texturas e imagens nativas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, streamed, texture, dict, client",
    "example": "pr_lib.fivem.streaming.RequestStreamedTextureDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestTextureDict(textureDict, timeout)",
    "detail": "Carrega dicionários contendo texturas e imagens nativas.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, texture, dict, client",
    "example": "pr_lib.fivem.streaming.requestTextureDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestWeaponAsset(model, timeout)",
    "detail": "Carrega modelos de armas de fogo nativas e suas propriedades.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, request, weapon, asset, client",
    "example": "pr_lib.fivem.streaming.requestWeaponAsset('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.setEntityTransform(entity, coords, heading, options)",
    "detail": "Atualiza a posição e o ângulo horizontal de uma entidade de forma sincronizada.",
    "directory": "pr_bridge/bridge/fivem/streaming/client.lua",
    "tags": "streaming, set, entity, transform, client",
    "example": "pr_lib.fivem.streaming.setEntityTransform(entity, vec3(0.0, 0.0, 0.0), 'value', {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findObjectsInRadius(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, find, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findObjectsInRadius(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, find, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findObjectsInRadiusUsingPool(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, find, in, radius, using, pool, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findObjectsInRadiusUsingPool(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, find, in, radius, using, pool, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadius(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, find, vehicles, in, radius, client, obj, objeto, objetos, object, pool, entidade, veículo, vehicle",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadius(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, find, vehicles, in, radius, server, obj, objeto, objetos, object, pool, entidade, veículo, vehicle",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, find, vehicles, in, radius, using, pool, client, obj, objeto, objetos, object, entidade, veículo",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, find, vehicles, in, radius, using, pool, server, obj, objeto, objetos, object, entidade, veículo",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.freezeByModelInRadius(model, coords, radius, state)",
    "detail": "Congela ou descongela a física de todas as entidades de determinado modelo 3D que estão dentro daquele raio.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, freeze, by, model, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "pr_lib.fivem.objects.freezeByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, true)"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.freezeByModelInRadius(model, coords, radius, state)",
    "detail": "Congela ou descongela a física de todas as entidades de determinado modelo 3D que estão dentro daquele raio.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, freeze, by, model, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "pr_lib.fivem.objects.freezeByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, true)"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getByModelInRadius(model, coords, radius, options)",
    "detail": "Busca entidades filtradas por modelo específico e proximidade geográfica.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, by, model, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getByModelInRadius(model, coords, radius, options)",
    "detail": "Busca entidades filtradas por modelo específico e proximidade geográfica.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, by, model, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getByPoolInRadius(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, by, pool, in, radius, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getByPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getByPoolInRadius(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, by, pool, in, radius, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getByPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestByModel(model, coords, radius, options)",
    "detail": "Busca entidades filtradas por modelo específico e proximidade geográfica.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, closest, by, model, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestByModel(model, coords, radius, options)",
    "detail": "Busca entidades filtradas por modelo específico e proximidade geográfica.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, closest, by, model, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestFromPool(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, closest, from, pool, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getClosestFromPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestFromPool(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, closest, from, pool, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getClosestFromPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestObject(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, closest, object, client, obj, objeto, objetos, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getClosestObject(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestObject(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, closest, object, server, obj, objeto, objetos, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getClosestObject(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestVehicle(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, closest, vehicle, client, obj, objeto, objetos, object, pool, entidade, veículo, carro",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicle(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestVehicle(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, closest, vehicle, server, obj, objeto, objetos, object, pool, entidade, veículo, carro",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicle(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestVehicleByModel(model, coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, closest, vehicle, by, model, client, obj, objeto, objetos, object, pool, entidade, veículo",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicleByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestVehicleByModel(model, coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, closest, vehicle, by, model, server, obj, objeto, objetos, object, pool, entidade, veículo",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicleByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getNetworkedObjectsInRadius(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, networked, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getNetworkedObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getNetworkedObjectsInRadius(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, networked, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getNetworkedObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getObjectsByPool(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, by, pool, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getObjectsByPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getObjectsByPool(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, by, pool, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getObjectsByPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getObjectsInRadius(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getObjectsInRadius(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getObjectsInRadiusUsingPool(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, in, radius, using, pool, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getObjectsInRadiusUsingPool(coords, radius, options)",
    "detail": "Resgata e lista todos os objetos físicos gerados dentro do raio informado.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, in, radius, using, pool, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPedsByModelInRadius(model, coords, radius, options)",
    "detail": "Resgata peds (NPCs) próximos.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, peds, by, model, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getPedsByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPedsByModelInRadius(model, coords, radius, options)",
    "detail": "Resgata peds (NPCs) próximos.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, peds, by, model, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getPedsByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPedsInRadius(coords, radius, options)",
    "detail": "Resgata peds (NPCs) próximos.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, peds, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getPedsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPedsInRadius(coords, radius, options)",
    "detail": "Resgata peds (NPCs) próximos.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, peds, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getPedsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPickupsInRadius(coords, radius, options)",
    "detail": "Localiza pickups físicas de armas e colecionáveis do mundo GTA.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, pickups, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getPickupsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPickupsInRadius(coords, radius, options)",
    "detail": "Localiza pickups físicas de armas e colecionáveis do mundo GTA.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, pickups, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getPickupsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPool(poolName)",
    "detail": "Retorna entidades registradas no pool interno do FiveM.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, pool, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPool('example')"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPool(poolName)",
    "detail": "Retorna entidades registradas no pool interno do FiveM.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, pool, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPool('example')"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPoolByModelInRadius(poolName, model, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, pool, by, model, in, radius, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPoolByModelInRadius('example', 'prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPoolByModelInRadius(poolName, model, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, pool, by, model, in, radius, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPoolByModelInRadius('example', 'prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPoolInRadius(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, pool, in, radius, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPoolInRadius(poolName, coords, radius, options)",
    "detail": "Consultas remotas de localização de entidades cadastradas nos pools do motor do jogo (ex: \"CPed\", \"CVehicle\", \"CObject\").",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, pool, in, radius, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPoolName(poolName)",
    "detail": "Retorna entidades registradas no pool interno do FiveM.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, pool, name, client, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPoolName('example')"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPoolName(poolName)",
    "detail": "Retorna entidades registradas no pool interno do FiveM.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, pool, name, server, obj, objeto, objetos, object, entidade",
    "example": "local result = pr_lib.fivem.objects.getPoolName('example')"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getVehiclesByModelInRadius(model, coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, vehicles, by, model, in, radius, client, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getVehiclesByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getVehiclesByModelInRadius(model, coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, vehicles, by, model, in, radius, server, obj, objeto, objetos, object, pool, entidade",
    "example": "local result = pr_lib.fivem.objects.getVehiclesByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadius(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, vehicles, in, radius, client, obj, objeto, objetos, object, pool, entidade, veículo, vehicle",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadius(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, vehicles, in, radius, server, obj, objeto, objetos, object, pool, entidade, veículo, vehicle",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/client.lua",
    "tags": "objects, get, vehicles, in, radius, using, pool, client, obj, objeto, objetos, object, entidade, veículo",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(coords, radius, options)",
    "detail": "Utilitários avançados de pesquisa de veículos gerados no mapa do servidor.",
    "directory": "pr_bridge/bridge/fivem/objects/server.lua",
    "tags": "objects, get, vehicles, in, radius, using, pool, server, obj, objeto, objetos, object, entidade, veículo",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.clear(vehicleOrNetId)",
    "detail": "Apaga o cache do veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, clear, shared, invalidação, estado, memória, veículo, carro",
    "example": "pr_lib.fivem.vehicleCache.clear(entity)"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.clearAll()",
    "detail": "Limpa todo o cache de veículos na memória RAM do recurso.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, clear, all, shared, invalidação, estado, memória, veículo, carro",
    "example": "pr_lib.fivem.vehicleCache.clearAll()"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.get(vehicleOrNetId)",
    "detail": "Retorna as informações em cache registradas para a ID da entidade do veículo ou ID de rede.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, get, shared, invalidação, estado, memória, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleCache.get(entity)"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getByPlate(plate)",
    "detail": "Recupera dados do veículo pesquisando pela sua placa de identificação.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, get, by, plate, shared, invalidação, estado, memória, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleCache.getByPlate('value')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getPersistentMeta(vehicle)",
    "detail": "Obtém ou grava metadados persistentes que sobrevivem ao respawn do veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, get, persistent, meta, shared, invalidação, estado, memória, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleCache.getPersistentMeta(entity)"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getState(vehicle, name)",
    "detail": "Consulta uma propriedade do State Bag (estado persistido de rede do FiveM) registrado no veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, get, state, shared, invalidação, estado, memória, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleCache.getState(entity, 'example')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getStateKey(name)",
    "detail": "Gera a string do caminho da chave de estado.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, get, state, key, shared, invalidação, estado, memória, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleCache.getStateKey('example')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.set(vehicleOrNetId, data)",
    "detail": "Salva dados customizados no cache persistente do veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, set, shared, invalidação, estado, memória, veículo, carro",
    "example": "pr_lib.fivem.vehicleCache.set(entity, {})"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.setPersistentMeta(vehicle, meta)",
    "detail": "Obtém ou grava metadados persistentes que sobrevivem ao respawn do veículo.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, set, persistent, meta, shared, invalidação, estado, memória, veículo, carro",
    "example": "pr_lib.fivem.vehicleCache.setPersistentMeta(entity, 'value')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.setState(vehicle, name, value, replicated)",
    "detail": "Altera uma propriedade no State Bag do veículo, controlando se ela deve ser replicada para outros clientes.",
    "directory": "pr_bridge/bridge/fivem/vehicleCache/shared.lua",
    "tags": "vehicle, cache, set, state, shared, invalidação, estado, memória, veículo, carro",
    "example": "pr_lib.fivem.vehicleCache.setState(entity, 'example', 'value', 'value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.describe(value, colorId)",
    "detail": "Retorna um dicionário contendo ID, nome do sprite, link da imagem correspondente e dados da cor formatados.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, describe, shared",
    "example": "pr_lib.fivem.blips.describe('value', 'example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getAssetImageUrl(kind, value)",
    "detail": "Gerador de URL generico para imagens de assets, incluindo prop e object.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, asset, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getAssetImageUrl('value', 'value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getBlipImageUrl(value)",
    "detail": "Gera uma URL externa direta contendo a imagem .png do blip correspondente.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, blip, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getBlipImageUrl('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getCheckpointImageUrl(checkpointId)",
    "detail": "Retornam URLs contendo imagens demonstrativas de checkponts e marcadores 3D.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, checkpoint, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getCheckpointImageUrl('example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getColorInfo(colorId)",
    "detail": "Retorna as propriedades de cor do blip do radar (nome e hexadecimal de cor) a partir de seu ID numérico original.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, color, info, shared",
    "example": "local result = pr_lib.fivem.blips.getColorInfo('example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getImageUrl(value)",
    "detail": "Gera uma URL externa direta contendo a imagem .png do blip correspondente.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getImageUrl('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getMarkerImageUrl(markerId)",
    "detail": "Retornam URLs contendo imagens demonstrativas de checkponts e marcadores 3D.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, marker, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getMarkerImageUrl('example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getObjectImageUrl(model)",
    "detail": "Monta a URL de preview de props no padrao [prop_name]-[hash].jpg, por exemplo prop_streetlight_08-1847069612.jpg.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, object, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getObjectImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getPedImageUrl(model)",
    "detail": "Retorna a URL contendo a imagem de demonstração do modelo do ped.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, ped, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getPedImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getPropHashId(model)",
    "detail": "Calcula o hash/ID unsigned do modelo com GetHashKey/joaat, usado no nome dos arquivos de props da Rage MP.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, prop, hash, id, shared",
    "example": "local result = pr_lib.fivem.blips.getPropHashId('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getPropImageUrl(model)",
    "detail": "Monta a URL de preview de props no padrao [prop_name]-[hash].jpg, por exemplo prop_streetlight_08-1847069612.jpg.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, prop, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getPropImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getSprite(value)",
    "detail": "Retorna as informações do Blip (ícone do mapa) pelo seu ID numérico ou nome amigável registrado.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, sprite, shared",
    "example": "local result = pr_lib.fivem.blips.getSprite('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getSpriteId(value)",
    "detail": "Converte e recupera nomes ou IDs numéricos equivalentes de sprites de blips do radar.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, sprite, id, shared",
    "example": "local result = pr_lib.fivem.blips.getSpriteId('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getSpriteName(value)",
    "detail": "Converte e recupera nomes ou IDs numéricos equivalentes de sprites de blips do radar.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, sprite, name, shared",
    "example": "local result = pr_lib.fivem.blips.getSpriteName('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getVehicleImageUrl(model)",
    "detail": "Retorna a URL contendo a imagem do veículo.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, vehicle, image, url, shared, veículo, carro",
    "example": "local result = pr_lib.fivem.blips.getVehicleImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getWeaponImageUrl(model)",
    "detail": "Retorna a URL contendo a imagem da arma de fogo.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, get, weapon, image, url, shared",
    "example": "local result = pr_lib.fivem.blips.getWeaponImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.listColors()",
    "detail": "Retorna a lista completa indexada de sprites e cores originais suportados nativamente pelo FiveM.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, list, colors, shared",
    "example": "pr_lib.fivem.blips.listColors()"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.listSprites()",
    "detail": "Retorna a lista completa indexada de sprites e cores originais suportados nativamente pelo FiveM.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, list, sprites, shared",
    "example": "pr_lib.fivem.blips.listSprites()"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.setDocsBaseUrl(url)",
    "detail": "Permite atualizar o caminho do servidor de documentação base do FiveM de onde as imagens de assets são baixadas.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, set, docs, base, url, shared",
    "example": "pr_lib.fivem.blips.setDocsBaseUrl('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.setRagePropsBaseUrl(url)",
    "detail": "Ajusta a URL base usada para imagens de props da Rage MP. Padrao: https://cdn.rage.mp/public/odb/imgs.",
    "directory": "pr_bridge/bridge/fivem/blips/shared.lua",
    "tags": "blips, set, rage, props, base, url, shared",
    "example": "pr_lib.fivem.blips.setRagePropsBaseUrl('value')"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.getAll(source)",
    "detail": "Varre e retorna uma tabela contendo todos os identificadores conhecidos do jogador logado (discord, license, license2, steam, fivem, ip, etc.) e determina qual licença deve ser tratada como principal (primaryLicense).",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, all, server",
    "example": "local result = pr_lib.fivem.identifiers.getAll(source)"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.GetAll(source)",
    "detail": "Varre e retorna uma tabela contendo todos os identificadores conhecidos do jogador logado (discord, license, license2, steam, fivem, ip, etc.) e determina qual licença deve ser tratada como principal (primaryLicense).",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, all, server",
    "example": "local result = pr_lib.fivem.identifiers.GetAll(source)"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.getByType(source, identifierType)",
    "detail": "Retorna o identificador específico de conexão de rede de um jogador chamando a API nativa (ex: identifierType pode ser \"license\", \"discord\", \"steam\", \"ip\").",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, by, type, server",
    "example": "local result = pr_lib.fivem.identifiers.getByType(source, 'example')"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.GetByType(source, identifierType)",
    "detail": "Retorna o identificador específico de conexão de rede de um jogador chamando a API nativa (ex: identifierType pode ser \"license\", \"discord\", \"steam\", \"ip\").",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, by, type, server",
    "example": "local result = pr_lib.fivem.identifiers.GetByType(source, 'example')"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.getLicenseSet(source, extraLicenses)",
    "detail": "Gera uma tabela contendo as licenças normais de identificação do jogador, permitindo mesclar chaves adicionais informadas.",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, license, set, server",
    "example": "local result = pr_lib.fivem.identifiers.getLicenseSet(source, {})"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.GetLicenseSet(source, extraLicenses)",
    "detail": "Gera uma tabela contendo as licenças normais de identificação do jogador, permitindo mesclar chaves adicionais informadas.",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, license, set, server",
    "example": "local result = pr_lib.fivem.identifiers.GetLicenseSet(source, {})"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.getPrimaryLicense(source)",
    "detail": "Retorna a licença Rockstar de prioridade primária do jogador local (license2 ou license).",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, primary, license, server",
    "example": "local result = pr_lib.fivem.identifiers.getPrimaryLicense(source)"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.GetPrimaryLicense(source)",
    "detail": "Retorna a licença Rockstar de prioridade primária do jogador local (license2 ou license).",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, get, primary, license, server",
    "example": "local result = pr_lib.fivem.identifiers.GetPrimaryLicense(source)"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.has(source, identifier)",
    "detail": "Verifica se o jogador especificado possui o identificador exato informado.",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, has, server",
    "example": "local result = pr_lib.fivem.identifiers.has(source, 'example')"
  },
  {
    "module": "fivem.identifiers",
    "context": "server",
    "signature": "pr_lib.fivem.identifiers.Has(source, identifier)",
    "detail": "Verifica se o jogador especificado possui o identificador exato informado.",
    "directory": "pr_bridge/bridge/fivem/identifiers/server.lua",
    "tags": "identifiers, has, server",
    "example": "local result = pr_lib.fivem.identifiers.Has(source, 'example')"
  },
  {
    "module": "fivem.instructionalButtons",
    "context": "client",
    "signature": "pr_lib.fivem.instructionalButtons.create(buttons, options)",
    "detail": "Inicializa e carrega a scaleform INSTRUCTIONAL_BUTTONS na memória, desenhando de forma customizada e retornando um manipulador de instância. A tabela buttons descreve o texto (label) e a tecla/controle correspondente (ex: \"~INPUT_FRONTEND_ACCEPT~\").",
    "directory": "pr_bridge/bridge/fivem/instructionalButtons/client.lua",
    "tags": "instructional, buttons, create, client",
    "example": "local result = pr_lib.fivem.instructionalButtons.create('value', {})"
  },
  {
    "module": "fivem.instructionalButtons",
    "context": "client",
    "signature": "pr_lib.fivem.instructionalButtons.show(buttons, options)",
    "detail": "Cria e exibe dinamicamente o painel de botões na tela por um tempo limitado ou até que o jogador pressione uma tecla. Retorna se o usuário interagiu com algum botão.",
    "directory": "pr_bridge/bridge/fivem/instructionalButtons/client.lua",
    "tags": "instructional, buttons, show, client",
    "example": "pr_lib.fivem.instructionalButtons.show('value', {})"
  },
  {
    "module": "fivem.instructionalButtons",
    "context": "client",
    "signature": "pr_lib.fivem.instructionalButtons.showClickable(label, control, controlId, options)",
    "detail": "Cria um botão modal com interação direta pelo mouse. Durante a seleção, libera o foco de qualquer NUI Chromium, mantém o Scaleform estável entre os frames e retorna pressed, o botão selecionado e o controlId.",
    "directory": "pr_bridge/bridge/fivem/instructionalButtons/client.lua",
    "tags": "instructional, buttons, show, clickable, client",
    "example": "pr_lib.fivem.instructionalButtons.showClickable('value', 'value', 'example', {})"
  },
  {
    "module": "fivem.instructionalButtons",
    "context": "client",
    "signature": "pr_lib.fivem.instructionalButtons.showSimple(label, control, options)",
    "detail": "Exibe de forma rápida e simplificada um único botão informativo no canto da tela (ex: *\"Confirmar\"* associado ao botão enter).",
    "directory": "pr_bridge/bridge/fivem/instructionalButtons/client.lua",
    "tags": "instructional, buttons, show, simple, client",
    "example": "pr_lib.fivem.instructionalButtons.showSimple('value', 'value', {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.createPlacement(placementType, modelName, maxSlots, cb, options)",
    "detail": "Inicializa o modo de posicionamento visual tridimensional de objetos, peds ou veículos na tela do jogador. Permite rotacionar e movimentar o objeto usando o teclado ou gizmos de translação tridimensionais, acionando o callback cb ao confirmar.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, create, placement, client",
    "example": "local result = pr_lib.devtools.createPlacement('value', 'prop_tool_bench02', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.createPolyzone(options, cb)",
    "detail": "Ferramentas gráficas locais que desenham polígonos no espaço para demarcação física de zonas de desenvolvimento.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, create, polyzone, client",
    "example": "local result = pr_lib.devtools.createPolyzone({}, function(...) return true end)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.createSphereZone(options, cb)",
    "detail": "Cria e renderiza esferas tridimensionais físicas na HUD para demarcação gráfica.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, create, sphere, zone, client",
    "example": "local result = pr_lib.devtools.createSphereZone({}, function(...) return true end)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawModelBoxAtCoords(options)",
    "detail": "Desenha o wireframe/drawbox de um modelo em coordenadas informadas. Deve ser chamado por frame enquanto o debug ou preview estiver ativo.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, model, box, at, coords, client",
    "example": "pr_lib.devtools.drawModelBoxAtCoords({})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.DrawModelBoxAtCoords(options)",
    "detail": "Executa os dados ou a operação “draw model box at coords” por meio da API pública do módulo `fivem.devtools`.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, model, box, at, coords, client",
    "example": "pr_lib.devtools.DrawModelBoxAtCoords({})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawPedBox(coords, heading, model, options)",
    "detail": "Desenha o wireframe/drawbox de um modelo em coordenadas informadas. Deve ser chamado por frame enquanto o debug ou preview estiver ativo.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, ped, box, client",
    "example": "pr_lib.devtools.drawPedBox(vec3(0.0, 0.0, 0.0), 'value', 'prop_tool_bench02', {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.DrawPedBox(coords, heading, model, options)",
    "detail": "Executa os dados ou a operação “draw ped box” por meio da API pública do módulo `fivem.devtools`.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, ped, box, client",
    "example": "pr_lib.devtools.DrawPedBox(vec3(0.0, 0.0, 0.0), 'value', 'prop_tool_bench02', {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawPolyzone3D(options, cb)",
    "detail": "Ferramentas gráficas locais que desenham polígonos no espaço para demarcação física de zonas de desenvolvimento.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, polyzone3, client",
    "example": "pr_lib.devtools.drawPolyzone3D({}, function(...) return true end)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.DrawPolyzone3D(options, cb)",
    "detail": "Ferramentas gráficas locais que desenham polígonos no espaço para demarcação física de zonas de desenvolvimento.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, polyzone3, client",
    "example": "pr_lib.devtools.DrawPolyzone3D({}, function(...) return true end)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawSphereZone(options, cb)",
    "detail": "Cria e renderiza esferas tridimensionais físicas na HUD para demarcação gráfica.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, sphere, zone, client",
    "example": "pr_lib.devtools.drawSphereZone({}, function(...) return true end)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawSphereZone3D(options, cb)",
    "detail": "Cria e renderiza esferas tridimensionais físicas na HUD para demarcação gráfica.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, sphere, zone3, client",
    "example": "pr_lib.devtools.drawSphereZone3D({}, function(...) return true end)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.DrawSphereZone3D(options, cb)",
    "detail": "Cria e renderiza esferas tridimensionais físicas na HUD para demarcação gráfica.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, draw, sphere, zone3, client",
    "example": "pr_lib.devtools.DrawSphereZone3D({}, function(...) return true end)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.placeObject(modelName, maxSlots, cb, options)",
    "detail": "Inicia modos de colocação específicos para objetos, peds e veículos.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, place, object, client",
    "example": "pr_lib.devtools.placeObject('prop_tool_bench02', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.placePed(modelName, maxSlots, cb, options)",
    "detail": "Inicia modos de colocação específicos para objetos, peds e veículos.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, place, ped, client",
    "example": "pr_lib.devtools.placePed('prop_tool_bench02', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.placeVehicle(modelName, maxSlots, cb, options)",
    "detail": "Inicia modos de colocação específicos para objetos, peds e veículos.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, place, vehicle, client, veículo, carro",
    "example": "pr_lib.devtools.placeVehicle('prop_tool_bench02', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.startEntityPlacement(placementType, modelName, maxSlots, cb, options)",
    "detail": "Inicializa o modo de posicionamento visual tridimensional de objetos, peds ou veículos na tela do jogador. Permite rotacionar e movimentar o objeto usando o teclado ou gizmos de translação tridimensionais, acionando o callback cb ao confirmar.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, start, entity, placement, client",
    "example": "pr_lib.devtools.startEntityPlacement('value', 'prop_tool_bench02', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.StartEntityPlacement(placementType, modelName, maxSlots, cb, options)",
    "detail": "Inicializa o modo de posicionamento visual tridimensional de objetos, peds ou veículos na tela do jogador. Permite rotacionar e movimentar o objeto usando o teclado ou gizmos de translação tridimensionais, acionando o callback cb ao confirmar.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, start, entity, placement, client",
    "example": "pr_lib.devtools.StartEntityPlacement('value', 'prop_tool_bench02', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.stop()",
    "detail": "Encerra imediatamente qualquer modo de criação ou posicionamento de entidades ou zonas em andamento.",
    "directory": "pr_bridge/bridge/fivem/devtools/client.lua",
    "tags": "devtools, stop, client",
    "example": "pr_lib.devtools.stop()"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.findClosest(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find closest” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, find, closest, client, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.findClosest(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find closest” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, find, closest, server, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.findInRadius(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find in radius” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, find, in, radius, client, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.findInRadius(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find in radius” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, find, in, radius, server, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getEntity(netId, timeout)",
    "detail": "Obtém os dados ou a operação “get entity” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, get, entity, client, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getEntity(NetworkGetNetworkIdFromEntity(entity), 1)"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getEntity(netId, timeout)",
    "detail": "Obtém os dados ou a operação “get entity” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, get, entity, server, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getEntity(NetworkGetNetworkIdFromEntity(entity), 1)"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getNetId(entity)",
    "detail": "Obtém os dados ou a operação “get net id” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, get, net, id, client, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getNetId(entity)"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getNetId(entity)",
    "detail": "Obtém os dados ou a operação “get net id” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, get, net, id, server, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getNetId(entity)"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getOwner(entity)",
    "detail": "Obtém os dados ou a operação “get owner” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, get, owner, client, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getOwner(entity)"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getOwner(entity)",
    "detail": "Obtém os dados ou a operação “get owner” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, get, owner, server, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getOwner(entity)"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getProperties(vehicle)",
    "detail": "Obtém os dados ou a operação “get properties” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, get, properties, client, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getProperties(entity)"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getVehicle(vehicleOrNetId, timeout)",
    "detail": "Obtém os dados ou a operação “get vehicle” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, get, client, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getVehicle(entity, 1)"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getVehicle(vehicleOrNetId, timeout)",
    "detail": "Obtém os dados ou a operação “get vehicle” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, get, server, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicle.getVehicle(entity, 1)"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.resolve(vehicleOrNetId, timeout)",
    "detail": "Executa os dados ou a operação “resolve” por meio da API pública do módulo `fivem.vehicle`.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, resolve, client, veículo, carro",
    "example": "pr_lib.fivem.vehicle.resolve(entity, 1)"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.resolve(vehicleOrNetId, timeout)",
    "detail": "Executa os dados ou a operação “resolve” por meio da API pública do módulo `fivem.vehicle`.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, resolve, server, veículo, carro",
    "example": "pr_lib.fivem.vehicle.resolve(entity, 1)"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.setProperties(vehicle, props)",
    "detail": "Define ou atualiza os dados ou a operação “set properties” usando a autoridade do módulo.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicle, set, properties, client, veículo, carro",
    "example": "pr_lib.fivem.vehicle.setProperties(entity, 'value')"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.setProperties(vehicle, props, options)",
    "detail": "Define ou atualiza os dados ou a operação “set properties” usando a autoridade do módulo.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicle, set, properties, server, veículo, carro",
    "example": "pr_lib.fivem.vehicle.setProperties(entity, 'value', {})"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findByModelInRadius(model, coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find by model in radius” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicles, find, by, model, in, radius, client, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findByModelInRadius(model, coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find by model in radius” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicles, find, by, model, in, radius, server, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findClosest(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find closest” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicles, find, closest, client, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findClosest(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find closest” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicles, find, closest, server, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findClosestByModel(model, coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find closest by model” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicles, find, closest, by, model, client, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findClosestByModel(model, coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find closest by model” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicles, find, closest, by, model, server, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findInRadius(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find in radius” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/client.lua",
    "tags": "aliases, vehicles, find, in, radius, client, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findInRadius(coords, radius, options)",
    "detail": "Localiza os dados ou a operação “find in radius” conforme os filtros informados.",
    "directory": "pr_bridge/bridge/fivem/server.lua",
    "tags": "aliases, vehicles, find, in, radius, server, veículo, vehicle, carro",
    "example": "local result = pr_lib.fivem.vehicles.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.channel(name, defaults)",
    "detail": "cria canal isolado com opções padrão. Estão pré-cadastrados mileage, keys, fueltech, suspension e dynamo.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, channel, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.channel('example', 'value')"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.clearWatchers()",
    "detail": "observa uma chave exata em uma entidade ou em todas as entidades do tipo do escopo. Handlers são liberados no encerramento do recurso.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, clear, watchers, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.clearWatchers()"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.get(entity, channel, key, options)",
    "detail": "lê, grava ou remove uma chave validada. Escrita replicada usa autoridade do servidor por padrão nos canais oficiais.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, get, shared, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleState.get(entity, 'value', 'value', {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.getMetrics()",
    "detail": "retorna leituras, escritas, rejeições, payloads excessivos, duplicatas, rate limits e handlers.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, get, metrics, shared, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleState.getMetrics()"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.props.link(prop, vehicle, data, options)",
    "detail": "registra vínculo compacto do prop de rede com o netId do veículo pai. Opções suportadas",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, props, link, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.props.link('value', entity, {}, {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.registerChannel(name, defaults)",
    "detail": "cria canal isolado com opções padrão. Estão pré-cadastrados mileage, keys, fueltech, suspension e dynamo.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, register, channel, shared, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleState.registerChannel('example', 'value')"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.remove(...)",
    "detail": "lê, grava ou remove uma chave validada. Escrita replicada usa autoridade do servidor por padrão nos canais oficiais.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, remove, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.remove(args)"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.set(...)",
    "detail": "lê, grava ou remove uma chave validada. Escrita replicada usa autoridade do servidor por padrão nos canais oficiais.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, set, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.set(args)"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.setMany(entity, channel, values, options)",
    "detail": "valida todo o lote antes de gravá-lo.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, set, many, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.setMany(entity, 'value', 'value', {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.snapshot(entity, channel, keys, options)",
    "detail": "retorna somente a lista explícita de chaves solicitadas.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, snapshot, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.snapshot(entity, 'value', 'value', {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.unwatch(id)",
    "detail": "observa uma chave exata em uma entidade ou em todas as entidades do tipo do escopo. Handlers são liberados no encerramento do recurso.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, unwatch, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.unwatch('example')"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.update(entity, channel, key, updater, options)",
    "detail": "altera um valor a partir do valor atual.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, update, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.update(entity, 'value', 'value', 'value', {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.wait(entity, channel, key, predicate, timeout, options)",
    "detail": "aguarda valor esperado ou predicado sem loop de frame.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, wait, shared, veículo, carro",
    "example": "local result = pr_lib.fivem.vehicleState.wait(entity, 'value', 'value', 'value', 1, {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.watch(entity, channel, key, callback, options)",
    "detail": "observa uma chave exata em uma entidade ou em todas as entidades do tipo do escopo. Handlers são liberados no encerramento do recurso.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, watch, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.watch(entity, 'value', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.vehicleState",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleState.watchAny(channel, key, callback, options)",
    "detail": "observa uma chave exata em uma entidade ou em todas as entidades do tipo do escopo. Handlers são liberados no encerramento do recurso.",
    "directory": "pr_bridge/bridge/fivem/vehicleState/shared.lua",
    "tags": "vehicle, state, watch, any, shared, veículo, carro",
    "example": "pr_lib.fivem.vehicleState.watchAny('value', 'value', function(...) return true end, {})"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.await(entity, callback, offset, options)",
    "detail": "aguarda a decisão dentro de uma thread. Retorna o resultado no primeiro valor quando confirmado ou no segundo valor quando cancelado.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, await, client",
    "example": "pr_lib.gizmo.await(entity, function(...) return true end, 'value', {})"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.cancel(reason)",
    "detail": "encerramento programático da sessão.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, cancel, client",
    "example": "local result = pr_lib.gizmo.cancel('value')"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.confirm(reason)",
    "detail": "encerramento programático da sessão.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, confirm, client",
    "example": "pr_lib.gizmo.confirm('value')"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.getResult()",
    "detail": "consulta o estado e o último resultado padronizado. Consulte GIZMO.md para opções, controles, resultado, movimento livre em freecam e testes de compatibilidade.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, get, result, client",
    "example": "local result = pr_lib.gizmo.getResult()"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.isActive()",
    "detail": "consulta o estado e o último resultado padronizado. Consulte GIZMO.md para opções, controles, resultado, movimento livre em freecam e testes de compatibilidade.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, is, active, client",
    "example": "local result = pr_lib.gizmo.isActive()"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.start(entity, callback, offset, options)",
    "detail": "mantém a assinatura legada e inicia uma sessão autocontida com NUI Svelte, câmera, bloqueio de controles, precisão, confirmação e cancelamento. O HUD Svelte é informativo e não assume foco. Todos os comandos do modo atual são exibidos no Scaleform inferior não clicável e permanecem funcionais pelos keybinds remapeáveis.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, start, client",
    "example": "pr_lib.gizmo.start(entity, function(...) return true end, 'value', {})"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.stop()",
    "detail": "encerramento programático da sessão.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, stop, client",
    "example": "pr_lib.gizmo.stop()"
  },
  {
    "module": "fivem.gizmo",
    "context": "client",
    "signature": "pr_lib.gizmo.use(...)",
    "detail": "aguarda a decisão dentro de uma thread. Retorna o resultado no primeiro valor quando confirmado ou no segundo valor quando cancelado.",
    "directory": "pr_bridge/bridge/fivem/gizmo/client.lua",
    "tags": "gizmo, use, client",
    "example": "pr_lib.gizmo.use(args)"
  },
  {
    "module": "string",
    "context": "shared",
    "signature": "pr_lib.string.random(pattern, length?)",
    "detail": "Executa os dados ou a operação “random” por meio da API pública do módulo `string`.",
    "directory": "pr_bridge/bridge/utils/strings.lua",
    "tags": "string, random, shared",
    "example": "pr_lib.string.random('value', 'value')"
  },
  {
    "module": "timer",
    "context": "shared/client/server",
    "signature": "pr_lib.timer(duration, onEnd?, async?)",
    "detail": "Executa os dados ou a operação “timer” por meio da API pública do módulo `utilitários_compartilhados`.",
    "directory": "pr_bridge/bridge/utils/timer.lua",
    "tags": "timer, shared/client/server",
    "example": "pr_lib.timer('value', 'value', 'value')"
  },
  {
    "module": "entities",
    "context": "client",
    "signature": "pr_lib.getClosestPlayer(coords, radius?, includePlayer?)",
    "detail": "Obtém os dados ou a operação “get closest player” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/compat/entities_client.lua",
    "tags": "entities, get, closest, player, client",
    "example": "local result = pr_lib.getClosestPlayer(vec3(0.0, 0.0, 0.0), 1, 'value')"
  },
  {
    "module": "entities",
    "context": "client",
    "signature": "pr_lib.getClosestVehicle(coords, radius?, includePlayerVehicle?)",
    "detail": "Obtém os dados ou a operação “get closest vehicle” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/compat/entities_client.lua",
    "tags": "entities, get, closest, vehicle, client, veículo, carro",
    "example": "local result = pr_lib.getClosestVehicle(vec3(0.0, 0.0, 0.0), 1, entity)"
  },
  {
    "module": "entities",
    "context": "client",
    "signature": "pr_lib.getNearbyPlayers(coords, radius?, includePlayer?)",
    "detail": "Obtém os dados ou a operação “get nearby players” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/compat/entities_client.lua",
    "tags": "entities, get, nearby, players, client",
    "example": "local result = pr_lib.getNearbyPlayers(vec3(0.0, 0.0, 0.0), 1, 'value')"
  },
  {
    "module": "entities",
    "context": "client",
    "signature": "pr_lib.getNearbyVehicles(coords, radius?, includePlayerVehicle?)",
    "detail": "Obtém os dados ou a operação “get nearby vehicles” usando a ponte normalizada do módulo.",
    "directory": "pr_bridge/bridge/compat/entities_client.lua",
    "tags": "entities, get, nearby, vehicles, client, veículo, vehicle, carro",
    "example": "local result = pr_lib.getNearbyVehicles(vec3(0.0, 0.0, 0.0), 1, entity)"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.AddInteraction(data)",
    "detail": "Cria uma interação persistente em coordenadas do mundo e a registra no runtime central do PR Bridge.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "local result = pr_lib.interact.AddInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.AddLocalEntityInteraction(data)",
    "detail": "Cria uma interação ligada a uma entidade local; quando bone é informado, a posição acompanha o osso da entidade.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "local result = pr_lib.interact.AddLocalEntityInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.AddEntityInteraction(data)",
    "detail": "Cria uma interação ligada a uma entidade de rede usando netId, convertendo entity para network id quando possível.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "local result = pr_lib.interact.AddEntityInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.AddEntityBoneInteraction(data)",
    "detail": "Cria uma interação ancorada em um bone específico de uma entidade.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "local result = pr_lib.interact.AddEntityBoneInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.AddModelInteraction(data)",
    "detail": "Cria interações para um ou vários modelos e permite offsets específicos por modelo.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "local result = pr_lib.interact.AddModelInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.AddGlobalVehicleInteraction(data)",
    "detail": "Registra opções de interação aplicáveis globalmente aos veículos próximos.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "local result = pr_lib.interact.AddGlobalVehicleInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.AddGlobalPlayerInteraction(data)",
    "detail": "Registra opções de interação aplicáveis globalmente aos outros jogadores próximos.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "local result = pr_lib.interact.AddGlobalPlayerInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveInteraction(id)",
    "detail": "Remove uma interação pelo id, respeitando o resource proprietário do registro.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveInteraction('example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveInteractionByEntity(entity)",
    "detail": "Remove interações pertencentes ao resource atual que estejam ligadas à entidade informada.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveInteractionByEntity(entity)"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveInteractionOption(id, name)",
    "detail": "Remove uma opção específica pelo name; remove o registro inteiro se nenhuma opção restar.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveInteractionOption('example', 'example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.UpdateInteraction(id, options)",
    "detail": "Substitui a lista de opções de uma interação já registrada.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.UpdateInteraction('example', {})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveLocalEntityInteraction(entity, id)",
    "detail": "Remove interação de entidade local, opcionalmente filtrando também pelo id/nome do registro.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveLocalEntityInteraction(entity, 'example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveEntityInteraction(netId, id)",
    "detail": "Remove interação de entidade de rede pelo netId, opcionalmente filtrando pelo id/nome.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveEntityInteraction(NetworkGetNetworkIdFromEntity(entity), 'example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveModelInteraction(models, id)",
    "detail": "Remove interações de modelos informados, opcionalmente filtrando pelo id/nome.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveModelInteraction('prop_tool_bench02', 'example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveGlobalVehicleInteraction(id)",
    "detail": "Remove registros globais de veículo pertencentes ao resource atual.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveGlobalVehicleInteraction('example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.RemoveGlobalPlayerInteraction(id)",
    "detail": "Remove registros globais de jogador pertencentes ao resource atual.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.RemoveGlobalPlayerInteraction('example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.Disable(state)",
    "detail": "Ativa ou desativa globalmente o runtime de interact para o jogador local e replica interactionsDisabled no state bag.",
    "directory": "bridge/interact/client.lua; bridge/interact/api.lua; bridge/interact/runtime_client.lua",
    "tags": "interact, nui, world, client",
    "example": "pr_lib.interact.Disable(true)"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.addInteraction(data)",
    "detail": "Alias lowercase de pr_lib.interact.AddInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "local result = pr_lib.interact.addInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.addLocalEntityInteraction(data)",
    "detail": "Alias lowercase de pr_lib.interact.AddLocalEntityInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "local result = pr_lib.interact.addLocalEntityInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.addEntityInteraction(data)",
    "detail": "Alias lowercase de pr_lib.interact.AddEntityInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "local result = pr_lib.interact.addEntityInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.addEntityBoneInteraction(data)",
    "detail": "Alias lowercase de pr_lib.interact.AddEntityBoneInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "local result = pr_lib.interact.addEntityBoneInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.addModelInteraction(data)",
    "detail": "Alias lowercase de pr_lib.interact.AddModelInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "local result = pr_lib.interact.addModelInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.addGlobalVehicleInteraction(data)",
    "detail": "Alias lowercase de pr_lib.interact.AddGlobalVehicleInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "local result = pr_lib.interact.addGlobalVehicleInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.addGlobalPlayerInteraction(data)",
    "detail": "Alias lowercase de pr_lib.interact.AddGlobalPlayerInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "local result = pr_lib.interact.addGlobalPlayerInteraction({})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.removeInteraction(id)",
    "detail": "Alias lowercase de pr_lib.interact.RemoveInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "pr_lib.interact.removeInteraction('example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.removeInteractionByEntity(entity)",
    "detail": "Alias lowercase de pr_lib.interact.RemoveInteractionByEntity.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "pr_lib.interact.removeInteractionByEntity(entity)"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.removeInteractionOption(id, name)",
    "detail": "Alias lowercase de pr_lib.interact.RemoveInteractionOption.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "pr_lib.interact.removeInteractionOption('example', 'example')"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.updateInteraction(id, options)",
    "detail": "Alias lowercase de pr_lib.interact.UpdateInteraction.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "pr_lib.interact.updateInteraction('example', {})"
  },
  {
    "module": "interact",
    "context": "client",
    "signature": "pr_lib.interact.disable(state)",
    "detail": "Alias lowercase de pr_lib.interact.Disable.",
    "directory": "bridge/interact/client.lua",
    "tags": "interact, alias, client",
    "example": "pr_lib.interact.disable(true)"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalPickup(options)",
    "detail": "Registra opções globais que podem ser exibidas para pickups detectados pelo target nativo.",
    "directory": "bridge/targets/native/client.lua; bridge/targets/native/api.lua",
    "tags": "target, pickup, native, client",
    "example": "pr_lib.target.addGlobalPickup({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddGlobalPickup(options)",
    "detail": "Alias normalizado de pr_lib.target.addGlobalPickup.",
    "directory": "bridge/api_normalizer.lua",
    "tags": "target, alias, client",
    "example": "pr_lib.target.AddGlobalPickup({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalPickup(names)",
    "detail": "Remove opções globais de pickups.",
    "directory": "bridge/targets/native/client.lua; bridge/targets/native/api.lua",
    "tags": "target, pickup, native, client",
    "example": "pr_lib.target.removeGlobalPickup('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemoveGlobalPickup(names)",
    "detail": "Alias normalizado de pr_lib.target.removeGlobalPickup.",
    "directory": "bridge/api_normalizer.lua",
    "tags": "target, alias, client",
    "example": "pr_lib.target.RemoveGlobalPickup('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addPickupType(pickupTypes, options)",
    "detail": "Registra opções por hash/tipo de pickup.",
    "directory": "bridge/targets/native/client.lua; bridge/targets/native/api.lua",
    "tags": "target, pickup, native, client",
    "example": "pr_lib.target.addPickupType('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddPickupType(pickupTypes, options)",
    "detail": "Alias normalizado de pr_lib.target.addPickupType.",
    "directory": "bridge/api_normalizer.lua",
    "tags": "target, alias, client",
    "example": "pr_lib.target.AddPickupType('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removePickupType(pickupTypes, names)",
    "detail": "Remove opções associadas aos tipos de pickup informados.",
    "directory": "bridge/targets/native/client.lua; bridge/targets/native/api.lua",
    "tags": "target, pickup, native, client",
    "example": "pr_lib.target.removePickupType('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemovePickupType(pickupTypes, names)",
    "detail": "Alias normalizado de pr_lib.target.removePickupType.",
    "directory": "bridge/api_normalizer.lua",
    "tags": "target, alias, client",
    "example": "pr_lib.target.RemovePickupType('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addPickup(pickups, options)",
    "detail": "Registra opções em pickups específicos, normalizando handles/descriptors.",
    "directory": "bridge/targets/native/client.lua; bridge/targets/native/api.lua",
    "tags": "target, pickup, native, client",
    "example": "pr_lib.target.addPickup('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.AddPickup(pickups, options)",
    "detail": "Alias normalizado de pr_lib.target.addPickup.",
    "directory": "bridge/api_normalizer.lua",
    "tags": "target, alias, client",
    "example": "pr_lib.target.AddPickup('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removePickup(pickups, names)",
    "detail": "Remove opções de pickups específicos.",
    "directory": "bridge/targets/native/client.lua; bridge/targets/native/api.lua",
    "tags": "target, pickup, native, client",
    "example": "pr_lib.target.removePickup('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.RemovePickup(pickups, names)",
    "detail": "Alias normalizado de pr_lib.target.removePickup.",
    "directory": "bridge/api_normalizer.lua",
    "tags": "target, alias, client",
    "example": "pr_lib.target.RemovePickup('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.inspectModels(models)",
    "detail": "Inspeciona e normaliza uma lista de modelos para uso no target nativo.",
    "directory": "bridge/targets/native/client.lua; bridge/targets/native/api.lua",
    "tags": "target, pickup, native, client",
    "example": "local result = pr_lib.target.inspectModels('prop_tool_bench02')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.InspectModels(models)",
    "detail": "Alias normalizado de pr_lib.target.inspectModels.",
    "directory": "bridge/api_normalizer.lua",
    "tags": "target, alias, client",
    "example": "local result = pr_lib.target.InspectModels('prop_tool_bench02')"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.AddRadialItem(items, parentMenuId)",
    "detail": "Adiciona um ou vários itens ao menu radial raiz ou a um submenu registrado.",
    "directory": "interface/client/modules/radial.lua; interface/client/ui.lua; interface/client/host.lua",
    "tags": "radial, interface, nui, client",
    "example": "pr_lib.interface.AddRadialItem('value', 'example')"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.addRadialItem(items, parentMenuId)",
    "detail": "Alias lowercase de pr_lib.interface.AddRadialItem.",
    "directory": "interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.interface.addRadialItem('value', 'example')"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.RemoveRadialItem(id, parentMenuId)",
    "detail": "Remove um item radial pelo id no menu raiz ou submenu informado.",
    "directory": "interface/client/modules/radial.lua; interface/client/ui.lua; interface/client/host.lua",
    "tags": "radial, interface, nui, client",
    "example": "pr_lib.interface.RemoveRadialItem('example', 'example')"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.removeRadialItem(id, parentMenuId)",
    "detail": "Alias lowercase de pr_lib.interface.RemoveRadialItem.",
    "directory": "interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.interface.removeRadialItem('example', 'example')"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.ClearRadialItems()",
    "detail": "Limpa itens e submenus radiais pertencentes ao resource e fecha a interface ativa.",
    "directory": "interface/client/modules/radial.lua; interface/client/ui.lua; interface/client/host.lua",
    "tags": "radial, interface, nui, client",
    "example": "pr_lib.interface.ClearRadialItems()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.clearRadialItems()",
    "detail": "Alias lowercase de pr_lib.interface.ClearRadialItems.",
    "directory": "interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.interface.clearRadialItems()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.RegisterRadial(data)",
    "detail": "Registra um submenu radial identificado por id e uma lista de items.",
    "directory": "interface/client/modules/radial.lua; interface/client/ui.lua; interface/client/host.lua",
    "tags": "radial, interface, nui, client",
    "example": "local result = pr_lib.interface.RegisterRadial({})"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.registerRadial(data)",
    "detail": "Alias lowercase de pr_lib.interface.RegisterRadial.",
    "directory": "interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "local result = pr_lib.interface.registerRadial({})"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.HideRadial()",
    "detail": "Fecha o menu radial atual e libera o foco NUI.",
    "directory": "interface/client/modules/radial.lua; interface/client/ui.lua; interface/client/host.lua",
    "tags": "radial, interface, nui, client",
    "example": "pr_lib.interface.HideRadial()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.hideRadial()",
    "detail": "Alias lowercase de pr_lib.interface.HideRadial.",
    "directory": "interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.interface.hideRadial()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.DisableRadial(state)",
    "detail": "Bloqueia/desbloqueia a abertura do menu radial; ao desativar, fecha qualquer menu aberto.",
    "directory": "interface/client/modules/radial.lua; interface/client/ui.lua; interface/client/host.lua",
    "tags": "radial, interface, nui, client",
    "example": "pr_lib.interface.DisableRadial(true)"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.disableRadial(state)",
    "detail": "Alias lowercase de pr_lib.interface.DisableRadial.",
    "directory": "interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.interface.disableRadial(true)"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.GetCurrentRadialId()",
    "detail": "Retorna o id do submenu radial atualmente aberto via LocalPlayer.state.",
    "directory": "interface/client/modules/radial.lua; interface/client/ui.lua; interface/client/host.lua",
    "tags": "radial, interface, nui, client",
    "example": "local result = pr_lib.interface.GetCurrentRadialId()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.interface.getCurrentRadialId()",
    "detail": "Alias lowercase de pr_lib.interface.GetCurrentRadialId.",
    "directory": "interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "local result = pr_lib.interface.getCurrentRadialId()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.addRadialItem(items, parentMenuId)",
    "detail": "Adiciona um ou vários itens ao menu radial raiz ou a um submenu registrado. Alias de conveniência no namespace raiz.",
    "directory": "init.lua; interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.addRadialItem('value', 'example')"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.removeRadialItem(id, parentMenuId)",
    "detail": "Remove um item radial pelo id no menu raiz ou submenu informado. Alias de conveniência no namespace raiz.",
    "directory": "init.lua; interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.removeRadialItem('example', 'example')"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.clearRadialItems()",
    "detail": "Limpa itens e submenus radiais pertencentes ao resource e fecha a interface ativa. Alias de conveniência no namespace raiz.",
    "directory": "init.lua; interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.clearRadialItems()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.registerRadial(data)",
    "detail": "Registra um submenu radial identificado por id e uma lista de items. Alias de conveniência no namespace raiz.",
    "directory": "init.lua; interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "local result = pr_lib.registerRadial({})"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.hideRadial()",
    "detail": "Fecha o menu radial atual e libera o foco NUI. Alias de conveniência no namespace raiz.",
    "directory": "init.lua; interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.hideRadial()"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.disableRadial(state)",
    "detail": "Bloqueia/desbloqueia a abertura do menu radial; ao desativar, fecha qualquer menu aberto. Alias de conveniência no namespace raiz.",
    "directory": "init.lua; interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "pr_lib.disableRadial(true)"
  },
  {
    "module": "radial",
    "context": "client",
    "signature": "pr_lib.getCurrentRadialId()",
    "detail": "Retorna o id do submenu radial atualmente aberto via LocalPlayer.state. Alias de conveniência no namespace raiz.",
    "directory": "init.lua; interface/client/ui.lua",
    "tags": "radial, alias, client",
    "example": "local result = pr_lib.getCurrentRadialId()"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.addExports(name, callback)",
    "detail": "Registra export(s) no resource consumidor a partir de uma função ou mapa de callbacks.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.addExports('example', function(...) return true end)"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.logger(source, event, message, tag)",
    "detail": "Helper de logging padronizado para recursos consumidores.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.logger(source, 'example', 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.waitFor(callback, message, timeout)",
    "detail": "Aguarda uma condição/callback até obter resultado ou atingir timeout.",
    "directory": "init.lua",
    "tags": "",
    "example": "local result = pr_lib.waitFor(function(...) return true end, 'value', 1)"
  },
  {
    "module": "timer",
    "context": "shared",
    "signature": "pr_lib.setInterval(callback, interval, ...)",
    "detail": "Cria um intervalo recorrente e retorna seu identificador.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.setInterval(function(...) return true end, 1, args)"
  },
  {
    "module": "timer",
    "context": "shared",
    "signature": "pr_lib.clearInterval(id)",
    "detail": "Cancela um intervalo criado por pr_lib.setInterval.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.clearInterval('example')"
  },
  {
    "module": "points",
    "context": "client",
    "signature": "pr_lib.points.new(data, distance, extraData)",
    "detail": "Cria um point com onEnter/onExit/nearby e rastreamento de distância.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.points.new({}, 1, {})"
  },
  {
    "module": "points",
    "context": "client",
    "signature": "pr_lib.points.getAllPoints()",
    "detail": "Retorna os points ativos do resource consumidor.",
    "directory": "init.lua",
    "tags": "",
    "example": "local result = pr_lib.points.getAllPoints()"
  },
  {
    "module": "points",
    "context": "client",
    "signature": "pr_lib.points.getClosestPoint(filter)",
    "detail": "Localiza o point ativo mais próximo, opcionalmente filtrado.",
    "directory": "init.lua",
    "tags": "",
    "example": "local result = pr_lib.points.getClosestPoint(function(...) return true end)"
  },
  {
    "module": "zones",
    "context": "client",
    "signature": "pr_lib.zones.sphere(data)",
    "detail": "Cria uma zone esférica baseada no sistema de points.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.zones.sphere({})"
  },
  {
    "module": "zones",
    "context": "client",
    "signature": "pr_lib.zones.poly(data)",
    "detail": "Cria uma zone poligonal com teste de ponto interno e espessura vertical.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.zones.poly({})"
  },
  {
    "module": "zones",
    "context": "client",
    "signature": "pr_lib.zones.box(data)",
    "detail": "Cria uma zone box 3D com rotação.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.zones.box({})"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "pr_lib.getLocales(invokingResource)",
    "detail": "Retorna informações de locale disponíveis para o resource consumidor.",
    "directory": "init.lua",
    "tags": "",
    "example": "local result = pr_lib.getLocales(source)"
  },
  {
    "module": "callback",
    "context": "shared",
    "signature": "pr_lib.callback.getMode()",
    "detail": "Retorna o modo atual do sistema de callback (legacy ou secure).",
    "directory": "init.lua",
    "tags": "",
    "example": "local result = pr_lib.callback.getMode()"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.cam(flags, ignoreFlags, distance)",
    "detail": "Atalho de raycast a partir da câmera usando a camada FiveM do bridge.",
    "directory": "init.lua",
    "tags": "",
    "example": "pr_lib.raycast.cam('value', 'value', 1)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.placeAnimatedPed(modelName, maxSlots, animations, cb, options)",
    "detail": "Inicia placement de ped com lista de animações/poses para preview e seleção.",
    "directory": "bridge/fivem/devtools/client.lua",
    "tags": "",
    "example": "pr_lib.devtools.placeAnimatedPed('prop_tool_bench02', 'value', 'value', function(...) return true end, {})"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetVehiclesByHash(model)",
    "detail": "Normaliza a consulta de dados de veículos por model/hash no framework ativo.",
    "directory": "bridge/framework_normalizer.lua",
    "tags": "",
    "example": "local result = pr_lib.framework.GetVehiclesByHash('prop_tool_bench02')"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetVehicleData(model)",
    "detail": "Retorna dados normalizados do veículo/modelo no framework ativo.",
    "directory": "bridge/framework_normalizer.lua",
    "tags": "",
    "example": "local result = pr_lib.framework.GetVehicleData('prop_tool_bench02')"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.SetVehiclePersistence(vehicle, enabled)",
    "detail": "Altera o estado de persistência de uma entidade veículo quando suportado.",
    "directory": "bridge/framework_normalizer.lua",
    "tags": "",
    "example": "pr_lib.framework.SetVehiclePersistence(entity, true)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPhoneProfile(source)",
    "detail": "Obtém o perfil/identidade de telefone normalizado do jogador.",
    "directory": "bridge/framework_normalizer.lua",
    "tags": "",
    "example": "local result = pr_lib.framework.GetPhoneProfile(source)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerStatus(source, status)",
    "detail": "Lê um status normalizado do jogador.",
    "directory": "bridge/framework_normalizer.lua",
    "tags": "",
    "example": "local result = pr_lib.framework.GetPlayerStatus(source, 'example')"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.SetPlayerStatus(source, status, value)",
    "detail": "Define um status normalizado do jogador.",
    "directory": "bridge/framework_normalizer.lua",
    "tags": "",
    "example": "pr_lib.framework.SetPlayerStatus(source, 'example', 'value')"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.AddPlayerStatus(source, status, amount)",
    "detail": "Incrementa um status normalizado do jogador.",
    "directory": "bridge/framework_normalizer.lua",
    "tags": "",
    "example": "pr_lib.framework.AddPlayerStatus(source, 'example', 1)"
  },
  {
    "module": "garage",
    "context": "client",
    "signature": "pr_lib.garage.getProvider()",
    "detail": "Retorna o provider de garagem detectado/forçado no client.",
    "directory": "bridge/garages/client.lua",
    "tags": "",
    "example": "local result = pr_lib.garage.getProvider()"
  },
  {
    "module": "garage",
    "context": "client",
    "signature": "pr_lib.garage.createPropertyGarage(options, done)",
    "detail": "Inicia criação de garagem de propriedade no provider ativo e entrega o draft/resultado ao callback.",
    "directory": "bridge/garages/client.lua",
    "tags": "",
    "example": "local result = pr_lib.garage.createPropertyGarage({}, function(...) return true end)"
  },
  {
    "module": "garage",
    "context": "client",
    "signature": "pr_lib.garage.commitPropertyGarageDraft(options)",
    "detail": "Confirma um draft de garagem de propriedade e normaliza o resultado.",
    "directory": "bridge/garages/client.lua",
    "tags": "",
    "example": "pr_lib.garage.commitPropertyGarageDraft({})"
  },
  {
    "module": "garage",
    "context": "client",
    "signature": "pr_lib.garage.registerProperty(options)",
    "detail": "Registra a integração client de uma garagem de propriedade no provider ativo.",
    "directory": "bridge/garages/client.lua",
    "tags": "",
    "example": "local result = pr_lib.garage.registerProperty({})"
  },
  {
    "module": "garage",
    "context": "client",
    "signature": "pr_lib.garage.unregisterProperty(handle)",
    "detail": "Remove target/zone/registro client criado para uma garagem de propriedade.",
    "directory": "bridge/garages/client.lua",
    "tags": "",
    "example": "pr_lib.garage.unregisterProperty('value')"
  },
  {
    "module": "garage",
    "context": "server",
    "signature": "pr_lib.garage.getProvider()",
    "detail": "Retorna o provider de garagem detectado/forçado no server.",
    "directory": "bridge/garages/server.lua",
    "tags": "",
    "example": "local result = pr_lib.garage.getProvider()"
  },
  {
    "module": "garage",
    "context": "server",
    "signature": "pr_lib.garage.registerProperty(options)",
    "detail": "Registra a garagem de propriedade no provider server quando necessário.",
    "directory": "bridge/garages/server.lua",
    "tags": "",
    "example": "local result = pr_lib.garage.registerProperty({})"
  },
  {
    "module": "garage",
    "context": "server",
    "signature": "pr_lib.garage.validateLink(propertyId, data)",
    "detail": "Valida server-side se os dados persistidos de garagem pertencem à propriedade/provider esperado.",
    "directory": "bridge/garages/server.lua",
    "tags": "",
    "example": "pr_lib.garage.validateLink('example', {})"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.GetResourceName()",
    "detail": "Retorna o nome do resource de weather ativo para este adapter.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "local result = pr_lib.weather.GetResourceName()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.IsStarted()",
    "detail": "Informa se o provider Renewed-Weathersync está iniciado.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "local result = pr_lib.weather.IsStarted()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.GetWeatherList()",
    "detail": "Obtém a sequência/lista de eventos meteorológicos do provider.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "local result = pr_lib.weather.GetWeatherList()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.GetWeeklyForecast()",
    "detail": "Obtém a previsão semanal exposta pelo provider.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "local result = pr_lib.weather.GetWeeklyForecast()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.GetRegionalWeather(regionId)",
    "detail": "Obtém o weather de uma região específica.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "local result = pr_lib.weather.GetRegionalWeather('downtown')"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.GetState()",
    "detail": "Retorna um snapshot normalizado do estado meteorológico, incluindo lista, weather atual e regiões.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "local result = pr_lib.weather.GetState()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.SetWeatherType(index, weatherType, match)",
    "detail": "Altera o tipo de weather em um índice/evento, criando ou ajustando a entrada quando necessário.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "pr_lib.weather.SetWeatherType(1, 'CLEAR', {})"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.SetEventTime(index, duration, match)",
    "detail": "Atualiza a duração de um evento meteorológico existente.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "pr_lib.weather.SetEventTime(1, 1, {})"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.AddWeatherEvent(weatherType, duration, index)",
    "detail": "Adiciona um evento de weather à sequência ativa.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "pr_lib.weather.AddWeatherEvent('CLEAR', 1, 1)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.RemoveWeatherEvent(index, match)",
    "detail": "Remove um evento meteorológico pelo índice/descritor.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "pr_lib.weather.RemoveWeatherEvent(1, {})"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.SetTime(hour, minute)",
    "detail": "Define hora e minuto no provider de weather.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "pr_lib.weather.SetTime(1, 1)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.SetTimeScale(scale)",
    "detail": "Ajusta a escala de passagem do tempo.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "pr_lib.weather.SetTimeScale(1)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.SetFreezeTime(enabled)",
    "detail": "Ativa ou desativa o congelamento do relógio.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, renewed, server",
    "example": "pr_lib.weather.SetFreezeTime(true)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.getResourceName()",
    "detail": "Alias lowercase de pr_lib.weather.GetResourceName.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "local result = pr_lib.weather.getResourceName()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.isStarted()",
    "detail": "Alias lowercase de pr_lib.weather.IsStarted.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "local result = pr_lib.weather.isStarted()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.getWeatherList()",
    "detail": "Alias lowercase de pr_lib.weather.GetWeatherList.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "local result = pr_lib.weather.getWeatherList()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.getState()",
    "detail": "Alias lowercase de pr_lib.weather.GetState.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "local result = pr_lib.weather.getState()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.setWeatherType(index, weatherType, match)",
    "detail": "Alias lowercase de pr_lib.weather.SetWeatherType.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "pr_lib.weather.setWeatherType(1, 'CLEAR', {})"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.setEventTime(index, duration, match)",
    "detail": "Alias lowercase de pr_lib.weather.SetEventTime.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "pr_lib.weather.setEventTime(1, 1, {})"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.addWeatherEvent(weatherType, duration, index)",
    "detail": "Alias lowercase de pr_lib.weather.AddWeatherEvent.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "pr_lib.weather.addWeatherEvent('CLEAR', 1, 1)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.removeWeatherEvent(index, match)",
    "detail": "Alias lowercase de pr_lib.weather.RemoveWeatherEvent.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "pr_lib.weather.removeWeatherEvent(1, {})"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.setTime(hour, minute)",
    "detail": "Alias lowercase de pr_lib.weather.SetTime.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "pr_lib.weather.setTime(1, 1)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.setTimeScale(scale)",
    "detail": "Alias lowercase de pr_lib.weather.SetTimeScale.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "pr_lib.weather.setTimeScale(1)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.setFreezeTime(enabled)",
    "detail": "Alias lowercase de pr_lib.weather.SetFreezeTime.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "pr_lib.weather.setFreezeTime(true)"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.getWeeklyForecast()",
    "detail": "Alias lowercase de pr_lib.weather.GetWeeklyForecast.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "local result = pr_lib.weather.getWeeklyForecast()"
  },
  {
    "module": "weather",
    "context": "server",
    "signature": "pr_lib.weather.getRegionalWeather(regionId)",
    "detail": "Alias lowercase de pr_lib.weather.GetRegionalWeather.",
    "directory": "bridge/weather/renewed/server.lua",
    "tags": "weather, alias, renewed, server",
    "example": "local result = pr_lib.weather.getRegionalWeather('downtown')"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.call(name, delay, cb, ...)",
    "detail": "Compatibility call helper with optional per-event delay; awaits when cb is nil/false and triggers asynchronously when cb is a function.",
    "directory": "bridge/callback/secure_client.lua",
    "tags": "callback, secure, client",
    "example": "pr_lib.callback.call('example:callback', 5000, function(...) print(...) end, args)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.awaitOx(name, delay, ...)",
    "detail": "OX-compatible await helper with client-side per-event cooldown/rate limiting.",
    "directory": "bridge/callback/secure_client.lua",
    "tags": "callback, secure, client",
    "example": "local result = pr_lib.callback.awaitOx('example:callback', 5000, args)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.register(name, handler)",
    "detail": "Registers a secure client callback endpoint that can be invoked by the server and replies through the PR Bridge callback envelope.",
    "directory": "bridge/callback/secure_client.lua",
    "tags": "callback, secure, client",
    "example": "pr_lib.callback.register('example:callback', function(source, ...) return true end)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.awaitOx(name, target, ...)",
    "detail": "OX-compatible server helper that awaits a callback response from the target client.",
    "directory": "bridge/callback/secure_server.lua",
    "tags": "callback, secure, server",
    "example": "local result = pr_lib.callback.awaitOx('example:callback', source, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.callOx(name, target, cb, ...)",
    "detail": "OX-compatible server callback helper; awaits when cb is nil/false or triggers asynchronously with cb.",
    "directory": "bridge/callback/secure_server.lua",
    "tags": "callback, secure, server",
    "example": "pr_lib.callback.callOx('example:callback', source, function(...) print(...) end, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.register(name, handler)",
    "detail": "Registers a secure server callback endpoint. The handler receives source first and is protected by inbound concurrency limits.",
    "directory": "bridge/callback/secure_server.lua",
    "tags": "callback, secure, server",
    "example": "pr_lib.callback.register('example:callback', function(source, ...) return true end)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.awaitLegacy(target, name, timeout, ...)",
    "detail": "Compatibility alias that points to awaitClient.",
    "directory": "bridge/callback/secure_server.lua",
    "tags": "callback, secure, server",
    "example": "local result = pr_lib.callback.awaitLegacy(source, 'example:callback', 5000, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.ox(name, target, cb, ...)",
    "detail": "Callable OX-compatible callback facade on the server.",
    "directory": "bridge/callback/secure_server.lua",
    "tags": "callback, secure, server",
    "example": "pr_lib.callback.ox('example:callback', source, function(...) print(...) end, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.ox.await(name, target, ...)",
    "detail": "OX-compatible await alias exposed under callback.ox.await.",
    "directory": "bridge/callback/secure_server.lua",
    "tags": "callback, secure, server",
    "example": "local result = pr_lib.callback.ox.await('example:callback', source, args)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback(first, second, third, ...)",
    "detail": "Callable callback facade; dispatches through the secure server trigger contract.",
    "directory": "bridge/callback/secure_server.lua",
    "tags": "callback, secure, server",
    "example": "pr_lib.callback('value', 'value', 'value', args)"
  }
];
export const PR_BRIDGE_MODULES = [
  "core",
  "locale",
  "cache",
  "debug",
  "events",
  "framework",
  "inventory",
  "notification",
  "alert",
  "menu",
  "interface",
  "textui_adapter",
  "input",
  "target",
  "phone",
  "progressbar",
  "minigame",
  "weather",
  "database",
  "fuel",
  "vehicle_key",
  "banking",
  "callback",
  "ace",
  "addcommand",
  "addkeybind",
  "translator",
  "github",
  "utils",
  "math",
  "table",
  "ids",
  "fivem.raycast",
  "fivem.net",
  "fivem.ui",
  "fivem.dui",
  "fivem.tuning",
  "fivem.drawtext",
  "fivem.vehicleProperties",
  "fivem.streaming",
  "fivem.objects",
  "fivem.vehicleCache",
  "fivem.blips",
  "fivem.identifiers",
  "fivem.instructionalButtons",
  "fivem.devtools",
  "fivem.aliases",
  "fivem.vehicleState",
  "fivem.gizmo",
  "string",
  "timer",
  "entities",
  "interact",
  "radial",
  "points",
  "zones",
  "garage"
];
export const PR_BRIDGE_API_COUNT = 1097;
export const PR_BRIDGE_SOURCE_VERSION = "1.3.1";
export const PR_BRIDGE_SOURCE_REVISION = "93e638b3060e647d3d20030f068d65c37ad269d1";
