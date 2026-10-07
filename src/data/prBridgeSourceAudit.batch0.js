export const PR_BRIDGE_SOURCE_AUDIT_BATCH_0 = [
  {
    "path": "__types.lua",
    "context": "mixed",
    "module": "__types",
    "lines": 517,
    "records": [
      {
        "kind": "function",
        "name": "pr_lib.addExports",
        "args": "name, callback",
        "line": 513
      }
    ]
  },
  {
    "path": "bridge/ace/server.lua",
    "context": "server",
    "module": "ace",
    "lines": 473,
    "records": [
      {
        "kind": "local-function",
        "name": "trim",
        "args": "value",
        "line": 4
      },
      {
        "kind": "local-function",
        "name": "normalizeIdentifier",
        "args": "value",
        "line": 8
      },
      {
        "kind": "local-function",
        "name": "addIdentifier",
        "args": "identifiers, value, prefixes",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "addTableIdentifiers",
        "args": "identifiers, data",
        "line": 40
      },
      {
        "kind": "local-function",
        "name": "addFrameworkIdentifiers",
        "args": "identifiers, source",
        "line": 56
      },
      {
        "kind": "function",
        "name": "ace.parseConvarList",
        "args": "raw",
        "line": 75
      },
      {
        "kind": "function",
        "name": "ace.getIdentifiers",
        "args": "source",
        "line": 96
      },
      {
        "kind": "function",
        "name": "ace.hasIdentifier",
        "args": "source, identifier",
        "line": 110
      },
      {
        "kind": "local-function",
        "name": "isAdminListed",
        "args": "source",
        "line": 120
      },
      {
        "kind": "function",
        "name": "ace.isWhitelisted",
        "args": "source, whitelistName",
        "line": 146
      },
      {
        "kind": "local-function",
        "name": "isAceAllowedResult",
        "args": "value",
        "line": 163
      },
      {
        "kind": "local-function",
        "name": "playerAceAllowed",
        "args": "source, aceName",
        "line": 167
      },
      {
        "kind": "function",
        "name": "ace.isPlayerAceAllowed",
        "args": "source, aceName",
        "line": 189
      },
      {
        "kind": "function",
        "name": "ace.isIdentifierAceAllowed",
        "args": "source, aceName",
        "line": 198
      },
      {
        "kind": "function",
        "name": "ace.isCommandAllowed",
        "args": "source, commandName",
        "line": 218
      },
      {
        "kind": "function",
        "name": "ace.ensureAce",
        "args": "principal, aceName",
        "line": 225
      },
      {
        "kind": "function",
        "name": "ace.ensureCommandAce",
        "args": "principal, commandName",
        "line": 236
      },
      {
        "kind": "local-function",
        "name": "listContains",
        "args": "list, value",
        "line": 241
      },
      {
        "kind": "function",
        "name": "ace.hasFrameworkAccess",
        "args": "source, options",
        "line": 259
      },
      {
        "kind": "function",
        "name": "ace.canAccess",
        "args": "source, options",
        "line": 298
      },
      {
        "kind": "local-function",
        "name": "allowAce",
        "args": "allow",
        "line": 321
      },
      {
        "kind": "function",
        "name": "ace.addAce",
        "args": "principal, aceName, allow",
        "line": 325
      },
      {
        "kind": "function",
        "name": "ace.removeAce",
        "args": "principal, aceName, allow",
        "line": 332
      },
      {
        "kind": "function",
        "name": "ace.addPrincipal",
        "args": "child, parent",
        "line": 339
      },
      {
        "kind": "function",
        "name": "ace.removePrincipal",
        "args": "child, parent",
        "line": 346
      },
      {
        "kind": "callback-register",
        "name": "pr_bridge:checkPlayerAce",
        "args": "source, aceName",
        "line": 353
      },
      {
        "kind": "local-function",
        "name": "normalizePermissionName",
        "args": "value",
        "line": 357
      },
      {
        "kind": "local-function",
        "name": "permissionLabel",
        "args": "value",
        "line": 363
      },
      {
        "kind": "local-function",
        "name": "addPermission",
        "args": "catalog, value, data",
        "line": 371
      },
      {
        "kind": "function",
        "name": "ace.registerPermission",
        "args": "value, data",
        "line": 393
      },
      {
        "kind": "function",
        "name": "ace.unregisterPermission",
        "args": "value",
        "line": 400
      },
      {
        "kind": "local-function",
        "name": "serverRootPath",
        "args": "",
        "line": 408
      },
      {
        "kind": "local-function",
        "name": "readServerConfig",
        "args": "relativePath, onLine",
        "line": 414
      },
      {
        "kind": "local-function",
        "name": "parseConfigLine",
        "args": "catalog, line, sourceName",
        "line": 428
      },
      {
        "kind": "local-function",
        "name": "sortCatalog",
        "args": "left, right",
        "line": 436
      },
      {
        "kind": "local-function",
        "name": "weight",
        "args": "entry",
        "line": 437
      },
      {
        "kind": "function",
        "name": "ace.getPermissionCatalog",
        "args": "options",
        "line": 447
      }
    ]
  },
  {
    "path": "bridge/addCommand/client.lua",
    "context": "client",
    "module": "addCommand",
    "lines": 231,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 4
      },
      {
        "kind": "local-function",
        "name": "cloneParam",
        "args": "param",
        "line": 16
      },
      {
        "kind": "local-function",
        "name": "convertValue",
        "args": "rawValue, param, index, paramsCount, raw",
        "line": 26
      },
      {
        "kind": "local-function",
        "name": "parseParams",
        "args": "args, raw, definitions",
        "line": 55
      },
      {
        "kind": "local-function",
        "name": "buildSuggestion",
        "args": "commandName, properties",
        "line": 112
      },
      {
        "kind": "local-function",
        "name": "addSuggestion",
        "args": "commandName, properties",
        "line": 132
      },
      {
        "kind": "function",
        "name": "commandApi.getSuggestions",
        "args": "",
        "line": 138
      },
      {
        "kind": "function",
        "name": "commandApi.sendSuggestions",
        "args": "",
        "line": 149
      },
      {
        "kind": "function",
        "name": "commandApi.hasSuggestion",
        "args": "commandName",
        "line": 158
      },
      {
        "kind": "local-function",
        "name": "createCommand",
        "args": "commandName, properties, cb",
        "line": 162
      },
      {
        "kind": "function",
        "name": "commandApi.add",
        "args": "commandName, properties, cb",
        "line": 206
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, commandName, properties, cb",
        "line": 224
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, commandName, properties, cb",
        "line": 225
      }
    ]
  },
  {
    "path": "bridge/addCommand/server.lua",
    "context": "server",
    "module": "addCommand",
    "lines": 429,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 5
      },
      {
        "kind": "local-function",
        "name": "cloneParam",
        "args": "param",
        "line": 17
      },
      {
        "kind": "local-function",
        "name": "getCommandName",
        "args": "raw",
        "line": 27
      },
      {
        "kind": "local-function",
        "name": "sendChatMessage",
        "args": "source, message",
        "line": 34
      },
      {
        "kind": "local-function",
        "name": "playerExists",
        "args": "source",
        "line": 45
      },
      {
        "kind": "local-function",
        "name": "isWhitelistName",
        "args": "value",
        "line": 49
      },
      {
        "kind": "local-function",
        "name": "isAceAllowedResult",
        "args": "value",
        "line": 53
      },
      {
        "kind": "local-function",
        "name": "isAceAllowed",
        "args": "source, aceName, aceApi",
        "line": 57
      },
      {
        "kind": "local-function",
        "name": "canRunCommand",
        "args": "source, commandName, properties",
        "line": 77
      },
      {
        "kind": "local-function",
        "name": "convertValue",
        "args": "source, rawValue, param, index, paramsCount, raw",
        "line": 102
      },
      {
        "kind": "local-function",
        "name": "parseParams",
        "args": "source, args, raw, definitions",
        "line": 138
      },
      {
        "kind": "local-function",
        "name": "buildSuggestion",
        "args": "commandName, properties",
        "line": 195
      },
      {
        "kind": "local-function",
        "name": "addAce",
        "args": "restricted, commandName",
        "line": 226
      },
      {
        "kind": "local-function",
        "name": "cloneSuggestion",
        "args": "suggestion",
        "line": 250
      },
      {
        "kind": "local-function",
        "name": "canSeeSuggestion",
        "args": "target, entry",
        "line": 264
      },
      {
        "kind": "local-function",
        "name": "sendSuggestionEntry",
        "args": "target, entry",
        "line": 275
      },
      {
        "kind": "local-function",
        "name": "sendEntryToOnlinePlayers",
        "args": "entry",
        "line": 282
      },
      {
        "kind": "local-function",
        "name": "registerSuggestion",
        "args": "suggestion, commandName, properties",
        "line": 290
      },
      {
        "kind": "function",
        "name": "commandApi.getSuggestions",
        "args": "target",
        "line": 309
      },
      {
        "kind": "function",
        "name": "commandApi.sendSuggestions",
        "args": "target",
        "line": 321
      },
      {
        "kind": "function",
        "name": "commandApi.hasSuggestion",
        "args": "commandName, target",
        "line": 338
      },
      {
        "kind": "event-handler",
        "name": "playerJoining",
        "args": "",
        "line": 354
      },
      {
        "kind": "local-function",
        "name": "createCommand",
        "args": "commandName, properties, cb",
        "line": 357
      },
      {
        "kind": "function",
        "name": "commandApi.add",
        "args": "commandName, properties, cb",
        "line": 403
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, commandName, properties, cb",
        "line": 421
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, commandName, properties, cb",
        "line": 422
      }
    ]
  },
  {
    "path": "bridge/addKeybind/client.lua",
    "context": "client",
    "module": "addKeybind",
    "lines": 355,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 42
      },
      {
        "kind": "local-function",
        "name": "trim",
        "args": "value",
        "line": 54
      },
      {
        "kind": "local-function",
        "name": "normalizeKey",
        "args": "key",
        "line": 58
      },
      {
        "kind": "local-function",
        "name": "addNormalizedKey",
        "args": "keys, key",
        "line": 63
      },
      {
        "kind": "local-function",
        "name": "parseComboString",
        "args": "value",
        "line": 68
      },
      {
        "kind": "local-function",
        "name": "normalizeCombo",
        "args": "value",
        "line": 112
      },
      {
        "kind": "local-function",
        "name": "commandSafeName",
        "args": "name",
        "line": 126
      },
      {
        "kind": "local-function",
        "name": "comboToString",
        "args": "keys",
        "line": 130
      },
      {
        "kind": "local-function",
        "name": "collectInlineCombo",
        "args": "data, firstKey",
        "line": 134
      },
      {
        "kind": "local-function",
        "name": "allPressed",
        "args": "bind, comboIndex",
        "line": 145
      },
      {
        "kind": "local-function",
        "name": "anyPressed",
        "args": "bind",
        "line": 156
      },
      {
        "kind": "local-function",
        "name": "callHandler",
        "args": "bind, handler",
        "line": 167
      },
      {
        "kind": "local-function",
        "name": "pressPart",
        "args": "bind, comboIndex, keyIndex",
        "line": 178
      },
      {
        "kind": "local-function",
        "name": "releasePart",
        "args": "bind, comboIndex, keyIndex",
        "line": 193
      },
      {
        "kind": "function",
        "name": "keybind_mt:__index",
        "args": "index",
        "line": 210
      },
      {
        "kind": "function",
        "name": "keybind_mt:getCurrentKey",
        "args": "",
        "line": 215
      },
      {
        "kind": "function",
        "name": "keybind_mt:isControlPressed",
        "args": "",
        "line": 236
      },
      {
        "kind": "function",
        "name": "keybind_mt:disable",
        "args": "toggle",
        "line": 240
      },
      {
        "kind": "function",
        "name": "keybind_mt:destroy",
        "args": "",
        "line": 256
      },
      {
        "kind": "local-function",
        "name": "mappingCommandName",
        "args": "bind, comboIndex, keyIndex, keyCount",
        "line": 261
      },
      {
        "kind": "local-function",
        "name": "registerCombo",
        "args": "bind, comboIndex, keys, mapper",
        "line": 273
      },
      {
        "kind": "local-function",
        "name": "createKeybind",
        "args": "data",
        "line": 305
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, data",
        "line": 336
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, data",
        "line": 337
      },
      {
        "kind": "function",
        "name": "addKeybind.get",
        "args": "name",
        "line": 342
      },
      {
        "kind": "function",
        "name": "addKeybind.remove",
        "args": "name",
        "line": 346
      }
    ]
  },
  {
    "path": "bridge/api_normalizer.lua",
    "context": "mixed",
    "module": "api_normalizer",
    "lines": 69,
    "records": [
      {
        "kind": "function",
        "name": "normalizer.target",
        "args": "target, activeTarget",
        "line": 3
      },
      {
        "kind": "function",
        "name": "target.AddSphereZone",
        "args": "name,coords,radius,options,debug",
        "line": 15
      },
      {
        "kind": "function",
        "name": "target.AddBoxZone",
        "args": "name,coords,size,rotation,options,debug",
        "line": 16
      },
      {
        "kind": "function",
        "name": "target.AddPolyZone",
        "args": "name,points,thickness,options,debug",
        "line": 17
      },
      {
        "kind": "function",
        "name": "normalizer.notification",
        "args": "notification, context, resourceName",
        "line": 21
      },
      {
        "kind": "assigned-function",
        "name": "notification.Notify",
        "args": "source,data,kind,duration",
        "line": 26
      },
      {
        "kind": "assigned-function",
        "name": "notification.Notify",
        "args": "data,kind,duration",
        "line": 31
      },
      {
        "kind": "function",
        "name": "normalizer.database",
        "args": "database",
        "line": 41
      },
      {
        "kind": "function",
        "name": "normalizer.textui",
        "args": "textui",
        "line": 55
      },
      {
        "kind": "function",
        "name": "normalizer.banking",
        "args": "banking",
        "line": 61
      }
    ]
  },
  {
    "path": "bridge/banking/default/client.lua",
    "context": "client",
    "module": "banking",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/banking/default/server.lua",
    "context": "server",
    "module": "banking",
    "lines": 65,
    "records": [
      {
        "kind": "local-function",
        "name": "renewedStarted",
        "args": "",
        "line": 13
      },
      {
        "kind": "local-function",
        "name": "callRenewed",
        "args": "exportName, ...",
        "line": 17
      },
      {
        "kind": "function",
        "name": "banking.GetResourceName",
        "args": "",
        "line": 29
      },
      {
        "kind": "function",
        "name": "banking.GetPlayerAccountBalance",
        "args": "player, accountType",
        "line": 33
      },
      {
        "kind": "function",
        "name": "banking.AddPlayerAccountBalance",
        "args": "player, accountType, amount, reason",
        "line": 37
      },
      {
        "kind": "function",
        "name": "banking.RemovePlayerAccountBalance",
        "args": "player, accountType, amount, reason",
        "line": 41
      },
      {
        "kind": "function",
        "name": "banking.GetJobAccountBalance",
        "args": "account",
        "line": 45
      },
      {
        "kind": "function",
        "name": "banking.AddJobAccountBalance",
        "args": "account, amount, reason",
        "line": 50
      },
      {
        "kind": "function",
        "name": "banking.RemoveJobAccountBalance",
        "args": "account, amount, reason",
        "line": 55
      }
    ]
  },
  {
    "path": "bridge/banking/factory.lua",
    "context": "mixed",
    "module": "banking",
    "lines": 38,
    "records": [
      {
        "kind": "local-function",
        "name": "call",
        "args": "method, ...",
        "line": 4
      },
      {
        "kind": "function",
        "name": "banking.GetResourceName",
        "args": "",
        "line": 16
      },
      {
        "kind": "function",
        "name": "banking.GetPlayerAccountBalance",
        "args": "player, accountType",
        "line": 17
      },
      {
        "kind": "function",
        "name": "banking.AddPlayerAccountBalance",
        "args": "player, accountType, amount, reason",
        "line": 21
      },
      {
        "kind": "function",
        "name": "banking.RemovePlayerAccountBalance",
        "args": "player, accountType, amount, reason",
        "line": 26
      },
      {
        "kind": "function",
        "name": "banking.GetJobAccountBalance",
        "args": "account",
        "line": 31
      },
      {
        "kind": "function",
        "name": "banking.AddJobAccountBalance",
        "args": "account, amount, reason",
        "line": 32
      },
      {
        "kind": "function",
        "name": "banking.RemoveJobAccountBalance",
        "args": "account, amount, reason",
        "line": 33
      }
    ]
  },
  {
    "path": "bridge/banking/fd/client.lua",
    "context": "client",
    "module": "banking",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/banking/fd/server.lua",
    "context": "server",
    "module": "banking",
    "lines": 3,
    "records": []
  },
  {
    "path": "bridge/banking/kartik/client.lua",
    "context": "client",
    "module": "banking",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/banking/kartik/server.lua",
    "context": "server",
    "module": "banking",
    "lines": 3,
    "records": []
  },
  {
    "path": "bridge/banking/okok/client.lua",
    "context": "client",
    "module": "banking",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/banking/okok/server.lua",
    "context": "server",
    "module": "banking",
    "lines": 3,
    "records": []
  },
  {
    "path": "bridge/banking/qb_banking/client.lua",
    "context": "client",
    "module": "banking",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/banking/qb_banking/server.lua",
    "context": "server",
    "module": "banking",
    "lines": 3,
    "records": []
  },
  {
    "path": "bridge/banking/renewed/client.lua",
    "context": "client",
    "module": "banking",
    "lines": 1,
    "records": []
  }
];
