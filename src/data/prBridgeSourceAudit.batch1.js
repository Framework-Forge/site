export const PR_BRIDGE_SOURCE_AUDIT_BATCH_1 = [
  {
    "path": "bridge/banking/renewed/server.lua",
    "context": "server",
    "module": "banking",
    "lines": 10,
    "records": []
  },
  {
    "path": "bridge/banking/tgiann/client.lua",
    "context": "client",
    "module": "banking",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/banking/tgiann/server.lua",
    "context": "server",
    "module": "banking",
    "lines": 3,
    "records": []
  },
  {
    "path": "bridge/cache/central.lua",
    "context": "mixed",
    "module": "cache",
    "lines": 143,
    "records": [
      {
        "kind": "local-function",
        "name": "shallowRecord",
        "args": "record",
        "line": 17
      },
      {
        "kind": "assigned-function",
        "name": "cache.set",
        "args": "first, second, third, fourth",
        "line": 35
      },
      {
        "kind": "function",
        "name": "cache.getSnapshot",
        "args": "",
        "line": 44
      },
      {
        "kind": "function",
        "name": "cache.getEntitySnapshot",
        "args": "identifier",
        "line": 53
      },
      {
        "kind": "function",
        "name": "cache.getEntities",
        "args": "kind",
        "line": 57
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:cache:publish",
        "args": "key, value, ttl",
        "line": 68
      },
      {
        "kind": "function",
        "name": "cache.setShared",
        "args": "first, second, third, fourth",
        "line": 80
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:cache:update",
        "args": "key, value",
        "line": 96
      },
      {
        "kind": "assigned-function",
        "name": "cache.getEntity",
        "args": "first, second",
        "line": 113
      },
      {
        "kind": "function",
        "name": "cache.getEntities",
        "args": "kind",
        "line": 124
      },
      {
        "kind": "function",
        "name": "cache.getSnapshot",
        "args": "",
        "line": 132
      }
    ]
  },
  {
    "path": "bridge/cache/shared.lua",
    "context": "shared",
    "module": "cache",
    "lines": 443,
    "records": [
      {
        "kind": "local-function",
        "name": "convarNumber",
        "args": "name, fallback, minimum",
        "line": 1
      },
      {
        "kind": "local-function",
        "name": "convarBoolean",
        "args": "name, fallback",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "reportListenerError",
        "args": "key, err",
        "line": 55
      },
      {
        "kind": "local-function",
        "name": "dispatch",
        "args": "key, value, oldValue",
        "line": 65
      },
      {
        "kind": "local-function",
        "name": "normalizeCall",
        "args": "first, second, third, fourth",
        "line": 77
      },
      {
        "kind": "function",
        "name": "cache.set",
        "args": "first, second, third, fourth",
        "line": 82
      },
      {
        "kind": "function",
        "name": "cache.get",
        "args": "first, second, third",
        "line": 100
      },
      {
        "kind": "function",
        "name": "cache.has",
        "args": "first, second",
        "line": 111
      },
      {
        "kind": "function",
        "name": "cache.clear",
        "args": "first, second",
        "line": 116
      },
      {
        "kind": "function",
        "name": "cache.clearPrefix",
        "args": "first, second",
        "line": 133
      },
      {
        "kind": "function",
        "name": "cache.remember",
        "args": "first, second, third, fourth",
        "line": 144
      },
      {
        "kind": "function",
        "name": "cache.onChange",
        "args": "first, second, third",
        "line": 161
      },
      {
        "kind": "function",
        "name": "cache.off",
        "args": "first, second, third",
        "line": 182
      },
      {
        "kind": "function",
        "name": "cache.getMetrics",
        "args": "",
        "line": 191
      },
      {
        "kind": "function",
        "name": "stateMethods:get",
        "args": "key, fallback",
        "line": 207
      },
      {
        "kind": "function",
        "name": "stateMethods:set",
        "args": "key, value, ttl",
        "line": 208
      },
      {
        "kind": "function",
        "name": "stateMethods:on",
        "args": "key, callback",
        "line": 209
      },
      {
        "kind": "function",
        "name": "stateMethods:off",
        "args": "key, id",
        "line": 210
      },
      {
        "kind": "table-function",
        "name": "__index",
        "args": "_, key",
        "line": 212
      },
      {
        "kind": "assigned-function",
        "name": "__index",
        "args": "_, key",
        "line": 213
      },
      {
        "kind": "table-function",
        "name": "__newindex",
        "args": "_, key, value",
        "line": 213
      },
      {
        "kind": "assigned-function",
        "name": "__newindex",
        "args": "_, key, value",
        "line": 214
      },
      {
        "kind": "table-function",
        "name": "__pairs",
        "args": "",
        "line": 214
      },
      {
        "kind": "assigned-function",
        "name": "__pairs",
        "args": "",
        "line": 215
      },
      {
        "kind": "local-function",
        "name": "entityRecord",
        "args": "entity, kind",
        "line": 218
      },
      {
        "kind": "function",
        "name": "cache.getEntity",
        "args": "first, second",
        "line": 230
      },
      {
        "kind": "function",
        "name": "cache.getEntityState",
        "args": "first, second",
        "line": 244
      },
      {
        "kind": "local-function",
        "name": "scanWorld",
        "args": "",
        "line": 255
      },
      {
        "kind": "function",
        "name": "cache.setWorldEnabled",
        "args": "first, second",
        "line": 293
      },
      {
        "kind": "function",
        "name": "cache.scanWorld",
        "args": "",
        "line": 299
      },
      {
        "kind": "function",
        "name": "cache.GetPlayer",
        "args": "source, timeout",
        "line": 301
      },
      {
        "kind": "function",
        "name": "cache.GetMetadata",
        "args": "source, metadata, timeout",
        "line": 313
      },
      {
        "kind": "function",
        "name": "cache.InvalidatePlayer",
        "args": "source",
        "line": 328
      },
      {
        "kind": "event-handler",
        "name": "playerDropped",
        "args": "",
        "line": 423
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, key, callback, timeout",
        "line": 436
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, key, callback, timeout",
        "line": 437
      },
      {
        "kind": "table-function",
        "name": "__index",
        "args": "_, key",
        "line": 437
      },
      {
        "kind": "assigned-function",
        "name": "__index",
        "args": "_, key",
        "line": 438
      }
    ]
  },
  {
    "path": "bridge/callback/client.lua",
    "context": "client",
    "module": "callback",
    "lines": 79,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "nextRequestId",
        "args": "",
        "line": 19
      },
      {
        "kind": "function",
        "name": "callback.trigger",
        "args": "name, cb, ...",
        "line": 32
      },
      {
        "kind": "function",
        "name": "callback.await",
        "args": "name, timeout, ...",
        "line": 44
      },
      {
        "kind": "function",
        "name": "callback.cancel",
        "args": "requestId",
        "line": 70
      },
      {
        "kind": "function",
        "name": "callback.getPending",
        "args": "",
        "line": 74
      }
    ]
  },
  {
    "path": "bridge/callback/secure_client.lua",
    "context": "client",
    "module": "callback",
    "lines": 182,
    "records": [
      {
        "kind": "local-function",
        "name": "warn",
        "args": "message",
        "line": 11
      },
      {
        "kind": "local-function",
        "name": "nextRequestId",
        "args": "",
        "line": 17
      },
      {
        "kind": "local-function",
        "name": "release",
        "args": "requestId",
        "line": 26
      },
      {
        "kind": "local-function",
        "name": "invoke",
        "args": "request, ...",
        "line": 34
      },
      {
        "kind": "local-function",
        "name": "eventAllowed",
        "args": "name, delay",
        "line": 43
      },
      {
        "kind": "local-function",
        "name": "send",
        "args": "name, cb, timeout, ...",
        "line": 68
      },
      {
        "kind": "function",
        "name": "callback.trigger",
        "args": "name, cb, ...",
        "line": 96
      },
      {
        "kind": "function",
        "name": "callback.await",
        "args": "name, timeout, ...",
        "line": 100
      },
      {
        "kind": "function",
        "name": "callback.call",
        "args": "name, delay, cb, ...",
        "line": 109
      },
      {
        "kind": "function",
        "name": "callback.awaitOx",
        "args": "name, delay, ...",
        "line": 116
      },
      {
        "kind": "function",
        "name": "callback.register",
        "args": "name, handler",
        "line": 121
      },
      {
        "kind": "function",
        "name": "callback.cancel",
        "args": "requestId, reason",
        "line": 144
      },
      {
        "kind": "function",
        "name": "callback.getPending",
        "args": "",
        "line": 152
      },
      {
        "kind": "function",
        "name": "callback.getStats",
        "args": "",
        "line": 153
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, name, delay, cb, ...",
        "line": 159
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, name, delay, cb, ...",
        "line": 160
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, name, delayOrCallback, ...",
        "line": 163
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, name, delayOrCallback, ...",
        "line": 164
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resource",
        "line": 174
      }
    ]
  },
  {
    "path": "bridge/callback/secure_server.lua",
    "context": "server",
    "module": "callback",
    "lines": 227,
    "records": [
      {
        "kind": "local-function",
        "name": "warn",
        "args": "message",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "nextRequestId",
        "args": "target",
        "line": 20
      },
      {
        "kind": "local-function",
        "name": "release",
        "args": "requestId",
        "line": 29
      },
      {
        "kind": "local-function",
        "name": "invoke",
        "args": "request, ...",
        "line": 42
      },
      {
        "kind": "local-function",
        "name": "send",
        "args": "target, name, cb, timeout, ...",
        "line": 72
      },
      {
        "kind": "function",
        "name": "callback.triggerClient",
        "args": "target, name, cb, ...",
        "line": 108
      },
      {
        "kind": "function",
        "name": "callback.awaitClient",
        "args": "target, name, timeout, ...",
        "line": 112
      },
      {
        "kind": "function",
        "name": "callback.awaitOx",
        "args": "name, target, ...",
        "line": 119
      },
      {
        "kind": "function",
        "name": "callback.callOx",
        "args": "name, target, cb, ...",
        "line": 123
      },
      {
        "kind": "function",
        "name": "callback.trigger",
        "args": "first, second, third, ...",
        "line": 129
      },
      {
        "kind": "function",
        "name": "callback.await",
        "args": "first, second, ...",
        "line": 136
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, first, second, third, ...",
        "line": 147
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, first, second, third, ...",
        "line": 148
      },
      {
        "kind": "function",
        "name": "callback.register",
        "args": "name, handler",
        "line": 153
      },
      {
        "kind": "function",
        "name": "callback.cancel",
        "args": "requestId, reason",
        "line": 187
      },
      {
        "kind": "function",
        "name": "callback.getPending",
        "args": "",
        "line": 195
      },
      {
        "kind": "function",
        "name": "callback.getStats",
        "args": "",
        "line": 196
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, name, target, cb, ...",
        "line": 205
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, name, target, cb, ...",
        "line": 206
      },
      {
        "kind": "event-handler",
        "name": "playerDropped",
        "args": "",
        "line": 209
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resource",
        "line": 219
      }
    ]
  },
  {
    "path": "bridge/callback/server.lua",
    "context": "server",
    "module": "callback",
    "lines": 83,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "nextRequestId",
        "args": "",
        "line": 19
      },
      {
        "kind": "function",
        "name": "callback.triggerClient",
        "args": "target, name, cb, ...",
        "line": 32
      },
      {
        "kind": "function",
        "name": "callback.awaitClient",
        "args": "target, name, timeout, ...",
        "line": 45
      },
      {
        "kind": "function",
        "name": "callback.cancel",
        "args": "requestId",
        "line": 74
      },
      {
        "kind": "function",
        "name": "callback.getPending",
        "args": "",
        "line": 78
      }
    ]
  },
  {
    "path": "bridge/compat/entities_client.lua",
    "context": "client",
    "module": "compat",
    "lines": 109,
    "records": [
      {
        "kind": "local-function",
        "name": "normalize",
        "args": "result, kind",
        "line": 5
      },
      {
        "kind": "local-function",
        "name": "wrapList",
        "args": "name, kind",
        "line": 13
      },
      {
        "kind": "local-function",
        "name": "wrapSingle",
        "args": "name, kind",
        "line": 23
      },
      {
        "kind": "assigned-function",
        "name": "api.getNearbyVehicles",
        "args": "coords, radius, includePlayerVehicle",
        "line": 40
      },
      {
        "kind": "assigned-function",
        "name": "api.getClosestVehicle",
        "args": "coords, radius, includePlayerVehicle",
        "line": 53
      },
      {
        "kind": "assigned-function",
        "name": "api.getNearbyPlayers",
        "args": "coords, radius, includePlayer",
        "line": 59
      },
      {
        "kind": "assigned-function",
        "name": "api.getClosestPlayer",
        "args": "coords, radius, includePlayer",
        "line": 90
      }
    ]
  },
  {
    "path": "bridge/compat/ox_phase1.lua",
    "context": "mixed",
    "module": "compat",
    "lines": 142,
    "records": [
      {
        "kind": "local-function",
        "name": "bind",
        "args": "owner, callback",
        "line": 1
      },
      {
        "kind": "local-function",
        "name": "firstFunction",
        "args": "...",
        "line": 15
      },
      {
        "kind": "assigned-function",
        "name": "compatibility.notify",
        "args": "playerId, data",
        "line": 99
      }
    ]
  },
  {
    "path": "bridge/compat/police.lua",
    "context": "mixed",
    "module": "compat",
    "lines": 143,
    "records": [
      {
        "kind": "function",
        "name": "api.getVehicleDefinition",
        "args": "model",
        "line": 9
      },
      {
        "kind": "local-function",
        "name": "log",
        "args": "level, ...",
        "line": 27
      },
      {
        "kind": "assigned-function",
        "name": "api.registerCallback",
        "args": "name, handler",
        "line": 36
      },
      {
        "kind": "assigned-function",
        "name": "api.callback",
        "args": "name, ...",
        "line": 37
      },
      {
        "kind": "function",
        "name": "api.getPlayer",
        "args": "source",
        "line": 40
      },
      {
        "kind": "function",
        "name": "api.getPlayerByIdentifier",
        "args": "identifier",
        "line": 44
      },
      {
        "kind": "function",
        "name": "api.getPlayerData",
        "args": "source",
        "line": 48
      },
      {
        "kind": "function",
        "name": "api.getAllPlayers",
        "args": "",
        "line": 53
      },
      {
        "kind": "function",
        "name": "api.getPlayerNameByIdentifier",
        "args": "identifier",
        "line": 58
      },
      {
        "kind": "function",
        "name": "api.getMetadata",
        "args": "source, key",
        "line": 63
      },
      {
        "kind": "function",
        "name": "api.getCharInfo",
        "args": "source, key",
        "line": 64
      },
      {
        "kind": "function",
        "name": "api.addMoney",
        "args": "source, account, amount, reason",
        "line": 65
      },
      {
        "kind": "function",
        "name": "api.removeMoney",
        "args": "source, account, amount, reason",
        "line": 68
      },
      {
        "kind": "function",
        "name": "api.getSharedJob",
        "args": "name",
        "line": 71
      },
      {
        "kind": "function",
        "name": "api.getSharedJobData",
        "args": "name, key",
        "line": 72
      },
      {
        "kind": "function",
        "name": "api.getSharedJobGrade",
        "args": "name, grade",
        "line": 73
      },
      {
        "kind": "function",
        "name": "api.getSharedJobGradeData",
        "args": "name, grade, key",
        "line": 77
      },
      {
        "kind": "local-function",
        "name": "countJobs",
        "args": "value, field",
        "line": 78
      },
      {
        "kind": "function",
        "name": "api.getJobCount",
        "args": "name",
        "line": 86
      },
      {
        "kind": "function",
        "name": "api.getJobTypeCount",
        "args": "name",
        "line": 87
      },
      {
        "kind": "function",
        "name": "api.notify",
        "args": "source, message, kind, duration",
        "line": 88
      },
      {
        "kind": "function",
        "name": "api.getPlayerData",
        "args": "",
        "line": 92
      },
      {
        "kind": "function",
        "name": "api.getPlayer",
        "args": "",
        "line": 93
      },
      {
        "kind": "function",
        "name": "api.getMetadata",
        "args": "key",
        "line": 94
      },
      {
        "kind": "function",
        "name": "api.getCharInfo",
        "args": "key",
        "line": 95
      },
      {
        "kind": "function",
        "name": "api.isDead",
        "args": "",
        "line": 96
      },
      {
        "kind": "function",
        "name": "api.addKeybind",
        "args": "key, command, description",
        "line": 101
      },
      {
        "kind": "function",
        "name": "api.requestModel",
        "args": "model",
        "line": 102
      },
      {
        "kind": "function",
        "name": "api.requestAnim",
        "args": "dict",
        "line": 106
      },
      {
        "kind": "function",
        "name": "api.notify",
        "args": "message, kind, duration",
        "line": 110
      },
      {
        "kind": "function",
        "name": "api.getIdentifier",
        "args": "source",
        "line": 120
      },
      {
        "kind": "function",
        "name": "api.getPlayerName",
        "args": "source",
        "line": 121
      },
      {
        "kind": "function",
        "name": "api.getJob",
        "args": "source",
        "line": 126
      },
      {
        "kind": "function",
        "name": "api.getJobName",
        "args": "source",
        "line": 127
      },
      {
        "kind": "function",
        "name": "api.getJobType",
        "args": "source",
        "line": 128
      },
      {
        "kind": "function",
        "name": "api.getJobDuty",
        "args": "source",
        "line": 129
      },
      {
        "kind": "function",
        "name": "api.getJobData",
        "args": "source, key",
        "line": 130
      },
      {
        "kind": "function",
        "name": "api.isBoss",
        "args": "source",
        "line": 136
      },
      {
        "kind": "function",
        "name": "api.getJobGradeName",
        "args": "source",
        "line": 137
      },
      {
        "kind": "function",
        "name": "api.getJobGradePay",
        "args": "source",
        "line": 142
      }
    ]
  },
  {
    "path": "bridge/config.lua",
    "context": "mixed",
    "module": "config",
    "lines": 131,
    "records": []
  },
  {
    "path": "bridge/core.lua",
    "context": "mixed",
    "module": "core",
    "lines": 238,
    "records": [
      {
        "kind": "function",
        "name": "PRCore.noop",
        "args": "",
        "line": 11
      },
      {
        "kind": "local-function",
        "name": "normalizePath",
        "args": "path",
        "line": 13
      },
      {
        "kind": "local-function",
        "name": "getModuleInfo",
        "args": "path",
        "line": 23
      },
      {
        "kind": "local-function",
        "name": "getDataFileCandidates",
        "args": "path, extension",
        "line": 30
      },
      {
        "kind": "local-function",
        "name": "addCandidate",
        "args": "candidate",
        "line": 48
      },
      {
        "kind": "local-function",
        "name": "getDataFileInfo",
        "args": "path, extension, preferExisting",
        "line": 75
      },
      {
        "kind": "function",
        "name": "PRCore.loadFile",
        "args": "resource, fileName, env, optional",
        "line": 89
      },
      {
        "kind": "function",
        "name": "PRCore.load",
        "args": "path, env, optional",
        "line": 104
      },
      {
        "kind": "function",
        "name": "PRCore.loadModule",
        "args": "path, env, optional",
        "line": 116
      },
      {
        "kind": "function",
        "name": "PRCore.loadJson",
        "args": "path, optional",
        "line": 120
      },
      {
        "kind": "function",
        "name": "PRCore.jsonExists",
        "args": "path",
        "line": 146
      },
      {
        "kind": "function",
        "name": "PRCore.saveJson",
        "args": "path, value, options",
        "line": 156
      },
      {
        "kind": "function",
        "name": "PRCore.updateJson",
        "args": "path, changes, options",
        "line": 177
      },
      {
        "kind": "function",
        "name": "PRCore.deleteJson",
        "args": "path",
        "line": 203
      },
      {
        "kind": "function",
        "name": "PRCore.callback.register",
        "args": "name, cb",
        "line": 216
      }
    ]
  },
  {
    "path": "bridge/database/backup/server.lua",
    "context": "server",
    "module": "database",
    "lines": 249,
    "records": [
      {
        "kind": "local-function",
        "name": "quoteIdentifier",
        "args": "value",
        "line": 4
      },
      {
        "kind": "local-function",
        "name": "quoteValue",
        "args": "value",
        "line": 10
      },
      {
        "kind": "local-function",
        "name": "normalizeMode",
        "args": "mode",
        "line": 35
      },
      {
        "kind": "local-function",
        "name": "normalizeOutput",
        "args": "options",
        "line": 49
      },
      {
        "kind": "local-function",
        "name": "getFirstValue",
        "args": "row, ignoredValue",
        "line": 70
      },
      {
        "kind": "local-function",
        "name": "getTables",
        "args": "requested",
        "line": 77
      },
      {
        "kind": "local-function",
        "name": "getColumns",
        "args": "tableName",
        "line": 105
      },
      {
        "kind": "local-function",
        "name": "appendSchema",
        "args": "output, tableName, options",
        "line": 120
      },
      {
        "kind": "local-function",
        "name": "appendData",
        "args": "output, tableName, options",
        "line": 142
      },
      {
        "kind": "function",
        "name": "backup.create",
        "args": "options",
        "line": 182
      }
    ]
  },
  {
    "path": "bridge/database/default/client.lua",
    "context": "client",
    "module": "database",
    "lines": 71,
    "records": [
      {
        "kind": "local-function",
        "name": "unavailable",
        "args": "method, cb",
        "line": 7
      },
      {
        "kind": "function",
        "name": "database.isReady",
        "args": "",
        "line": 19
      },
      {
        "kind": "function",
        "name": "database.GetResourceName",
        "args": "",
        "line": 23
      },
      {
        "kind": "function",
        "name": "database.query",
        "args": "_, _, cb",
        "line": 27
      },
      {
        "kind": "function",
        "name": "database.execute",
        "args": "_, _, cb",
        "line": 31
      },
      {
        "kind": "function",
        "name": "database.insert",
        "args": "_, _, cb",
        "line": 35
      },
      {
        "kind": "function",
        "name": "database.scalar",
        "args": "_, _, cb",
        "line": 39
      },
      {
        "kind": "function",
        "name": "database.single",
        "args": "_, _, cb",
        "line": 43
      },
      {
        "kind": "function",
        "name": "database.prepare",
        "args": "_, _, cb",
        "line": 47
      },
      {
        "kind": "function",
        "name": "database.rawExecute",
        "args": "_, _, cb",
        "line": 51
      },
      {
        "kind": "function",
        "name": "database.ready",
        "args": "cb",
        "line": 55
      },
      {
        "kind": "function",
        "name": "database.transaction",
        "args": "_, _, cb",
        "line": 59
      }
    ]
  },
  {
    "path": "bridge/database/default/server.lua",
    "context": "server",
    "module": "database",
    "lines": 71,
    "records": [
      {
        "kind": "local-function",
        "name": "unavailable",
        "args": "method, cb",
        "line": 7
      },
      {
        "kind": "function",
        "name": "database.isReady",
        "args": "",
        "line": 19
      },
      {
        "kind": "function",
        "name": "database.GetResourceName",
        "args": "",
        "line": 23
      },
      {
        "kind": "function",
        "name": "database.query",
        "args": "_, _, cb",
        "line": 27
      },
      {
        "kind": "function",
        "name": "database.execute",
        "args": "_, _, cb",
        "line": 31
      },
      {
        "kind": "function",
        "name": "database.insert",
        "args": "_, _, cb",
        "line": 35
      },
      {
        "kind": "function",
        "name": "database.scalar",
        "args": "_, _, cb",
        "line": 39
      },
      {
        "kind": "function",
        "name": "database.single",
        "args": "_, _, cb",
        "line": 43
      },
      {
        "kind": "function",
        "name": "database.prepare",
        "args": "_, _, cb",
        "line": 47
      },
      {
        "kind": "function",
        "name": "database.rawExecute",
        "args": "_, _, cb",
        "line": 51
      },
      {
        "kind": "function",
        "name": "database.ready",
        "args": "cb",
        "line": 55
      },
      {
        "kind": "function",
        "name": "database.transaction",
        "args": "_, _, cb",
        "line": 59
      }
    ]
  },
  {
    "path": "bridge/database/ghmattimysql/server.lua",
    "context": "server",
    "module": "database",
    "lines": 249,
    "records": [
      {
        "kind": "local-function",
        "name": "isReadQuery",
        "args": "query",
        "line": 16
      },
      {
        "kind": "local-function",
        "name": "firstValue",
        "args": "row",
        "line": 21
      },
      {
        "kind": "local-function",
        "name": "awaitCall",
        "args": "start",
        "line": 31
      },
      {
        "kind": "local-function",
        "name": "call",
        "args": "start, cb",
        "line": 51
      },
      {
        "kind": "function",
        "name": "database.isReady",
        "args": "",
        "line": 71
      },
      {
        "kind": "function",
        "name": "database.GetResourceName",
        "args": "",
        "line": 75
      },
      {
        "kind": "function",
        "name": "database.query",
        "args": "query, parameters, cb",
        "line": 79
      },
      {
        "kind": "function",
        "name": "database.execute",
        "args": "query, parameters, cb",
        "line": 87
      },
      {
        "kind": "function",
        "name": "database.insert",
        "args": "query, parameters, cb",
        "line": 95
      },
      {
        "kind": "function",
        "name": "database.scalar",
        "args": "query, parameters, cb",
        "line": 110
      },
      {
        "kind": "function",
        "name": "database.single",
        "args": "query, parameters, cb",
        "line": 121
      },
      {
        "kind": "local-function",
        "name": "preparedReadResult",
        "args": "rows",
        "line": 132
      },
      {
        "kind": "local-function",
        "name": "runParameterSets",
        "args": "parameters, executeOne",
        "line": 147
      },
      {
        "kind": "function",
        "name": "database.prepare",
        "args": "query, parameters, cb",
        "line": 162
      },
      {
        "kind": "local-function",
        "name": "execute",
        "args": "",
        "line": 163
      },
      {
        "kind": "function",
        "name": "database.rawExecute",
        "args": "query, parameters, cb",
        "line": 181
      },
      {
        "kind": "local-function",
        "name": "execute",
        "args": "",
        "line": 182
      },
      {
        "kind": "function",
        "name": "database.ready",
        "args": "cb",
        "line": 198
      },
      {
        "kind": "function",
        "name": "database.transaction",
        "args": "queries, parameters, cb",
        "line": 206
      },
      {
        "kind": "function",
        "name": "database.run",
        "args": "query, parameters, cb",
        "line": 223
      },
      {
        "kind": "function",
        "name": "database.update",
        "args": "query, parameters, cb",
        "line": 235
      },
      {
        "kind": "local-function",
        "name": "affectedRows",
        "args": "result",
        "line": 236
      }
    ]
  }
];
