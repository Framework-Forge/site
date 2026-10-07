export const PR_BRIDGE_SOURCE_AUDIT_BATCH_12 = [
  {
    "path": "bridge/textui/okok/server.lua",
    "context": "server",
    "module": "textui",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/textui/ox_lib/client.lua",
    "context": "client",
    "module": "textui",
    "lines": 7,
    "records": [
      {
        "kind": "function",
        "name": "textui.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "textui.Show",
        "args": "text",
        "line": 3
      },
      {
        "kind": "function",
        "name": "textui.Hide",
        "args": "",
        "line": 4
      }
    ]
  },
  {
    "path": "bridge/textui/ox_lib/server.lua",
    "context": "server",
    "module": "textui",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/translator/client.lua",
    "context": "client",
    "module": "translator",
    "lines": 114,
    "records": [
      {
        "kind": "function",
        "name": "translator.translateBatch",
        "args": "strings, targetLang",
        "line": 8
      },
      {
        "kind": "function",
        "name": "translator.translateText",
        "args": "text, targetLang",
        "line": 23
      },
      {
        "kind": "function",
        "name": "translator.translateMenu",
        "args": "menuData, targetLang",
        "line": 32
      },
      {
        "kind": "function",
        "name": "translator.showTranslatedNotify",
        "args": "title, description, notifyType, targetLang",
        "line": 86
      }
    ]
  },
  {
    "path": "bridge/translator/server.lua",
    "context": "server",
    "module": "translator",
    "lines": 180,
    "records": [
      {
        "kind": "local-function",
        "name": "loadCache",
        "args": "",
        "line": 12
      },
      {
        "kind": "local-function",
        "name": "saveCache",
        "args": "",
        "line": 28
      },
      {
        "kind": "local-function",
        "name": "urlencode",
        "args": "str",
        "line": 36
      },
      {
        "kind": "local-function",
        "name": "TranslateText",
        "args": "text, targetLang, cb",
        "line": 48
      },
      {
        "kind": "callback-register",
        "name": "pr_bridge:server:translateBatch",
        "args": "source, strings, targetLang",
        "line": 97
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resourceName",
        "line": 133
      },
      {
        "kind": "function",
        "name": "translator.translateText",
        "args": "text, targetLang, cb",
        "line": 143
      },
      {
        "kind": "function",
        "name": "translator.translateBatch",
        "args": "strings, targetLang, cb",
        "line": 154
      }
    ]
  },
  {
    "path": "bridge/triggerClientEvent/server.lua",
    "context": "server",
    "module": "triggerClientEvent",
    "lines": 31,
    "records": [
      {
        "kind": "function",
        "name": "triggerClientEvent",
        "args": "eventName, targetIds, ...",
        "line": 11
      }
    ]
  },
  {
    "path": "bridge/utils/ids.lua",
    "context": "mixed",
    "module": "utils",
    "lines": 15,
    "records": [
      {
        "kind": "function",
        "name": "ids.createUniqueId",
        "args": "registry, length, pattern",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/utils/numbers.lua",
    "context": "mixed",
    "module": "utils",
    "lines": 130,
    "records": [
      {
        "kind": "local-function",
        "name": "number",
        "args": "value, name",
        "line": 3
      },
      {
        "kind": "function",
        "name": "numbers.round",
        "args": "value, places",
        "line": 9
      },
      {
        "kind": "function",
        "name": "numbers.clamp",
        "args": "value, minimum, maximum",
        "line": 16
      },
      {
        "kind": "function",
        "name": "numbers.toHex",
        "args": "value, upper",
        "line": 22
      },
      {
        "kind": "function",
        "name": "numbers.groupdigits",
        "args": "value, separator",
        "line": 26
      },
      {
        "kind": "function",
        "name": "numbers.hexToRGBA",
        "args": "value",
        "line": 33
      },
      {
        "kind": "function",
        "name": "numbers.hexToRGB",
        "args": "value",
        "line": 41
      },
      {
        "kind": "function",
        "name": "numbers.parse",
        "args": "value, minimum, maximum, shouldRound",
        "line": 46
      },
      {
        "kind": "function",
        "name": "numbers.toScalars",
        "args": "value, minimum, maximum, shouldRound",
        "line": 54
      },
      {
        "kind": "function",
        "name": "numbers.toVector",
        "args": "value, minimum, maximum, shouldRound",
        "line": 60
      },
      {
        "kind": "function",
        "name": "numbers.normalToRotation",
        "args": "input",
        "line": 75
      },
      {
        "kind": "local-function",
        "name": "lerpValue",
        "args": "startValue, finishValue, factor",
        "line": 80
      },
      {
        "kind": "function",
        "name": "numbers.lerp",
        "args": "startValue, finishValue, factor",
        "line": 91
      },
      {
        "kind": "function",
        "name": "numbers.Lerp",
        "args": "startValue, finishValue, duration",
        "line": 95
      },
      {
        "kind": "function",
        "name": "numbers.inverseLerp",
        "args": "startValue, finishValue, value",
        "line": 108
      },
      {
        "kind": "function",
        "name": "numbers.map",
        "args": "value, inMin, inMax, outMin, outMax",
        "line": 113
      },
      {
        "kind": "function",
        "name": "numbers.degToRad",
        "args": "value",
        "line": 117
      },
      {
        "kind": "function",
        "name": "numbers.radToDeg",
        "args": "value",
        "line": 118
      },
      {
        "kind": "function",
        "name": "numbers.sign",
        "args": "value",
        "line": 119
      },
      {
        "kind": "function",
        "name": "numbers.almostEqual",
        "args": "a, b, epsilon",
        "line": 120
      },
      {
        "kind": "function",
        "name": "numbers.length2",
        "args": "x, y",
        "line": 121
      },
      {
        "kind": "function",
        "name": "numbers.length3",
        "args": "x, y, z",
        "line": 122
      },
      {
        "kind": "function",
        "name": "numbers.distance2D",
        "args": "x1,y1,x2,y2",
        "line": 123
      },
      {
        "kind": "function",
        "name": "numbers.distance3D",
        "args": "x1,y1,z1,x2,y2,z2",
        "line": 124
      }
    ]
  },
  {
    "path": "bridge/utils/shared.lua",
    "context": "shared",
    "module": "utils",
    "lines": 77,
    "records": [
      {
        "kind": "function",
        "name": "utils.trim",
        "args": "value",
        "line": 3
      },
      {
        "kind": "function",
        "name": "utils.firstToUpper",
        "args": "value",
        "line": 8
      },
      {
        "kind": "function",
        "name": "utils.round",
        "args": "value, decimals",
        "line": 14
      },
      {
        "kind": "function",
        "name": "utils.deepCopy",
        "args": "value, seen",
        "line": 25
      },
      {
        "kind": "function",
        "name": "utils.dumpTable",
        "args": "value, depth, seen",
        "line": 41
      },
      {
        "kind": "function",
        "name": "utils.ensureTable",
        "args": "value",
        "line": 66
      },
      {
        "kind": "function",
        "name": "utils.hash",
        "args": "value",
        "line": 70
      }
    ]
  },
  {
    "path": "bridge/utils/strings.lua",
    "context": "mixed",
    "module": "utils",
    "lines": 41,
    "records": [
      {
        "kind": "table-function",
        "name": "A",
        "args": "",
        "line": 6
      },
      {
        "kind": "assigned-function",
        "name": "A",
        "args": "",
        "line": 7
      },
      {
        "kind": "table-function",
        "name": "a",
        "args": "",
        "line": 7
      },
      {
        "kind": "assigned-function",
        "name": "a",
        "args": "",
        "line": 8
      },
      {
        "kind": "function",
        "name": "strings.random",
        "args": "pattern, length",
        "line": 12
      }
    ]
  },
  {
    "path": "bridge/utils/tables.lua",
    "context": "mixed",
    "module": "utils",
    "lines": 96,
    "records": [
      {
        "kind": "function",
        "name": "tables.contains",
        "args": "source, value",
        "line": 3
      },
      {
        "kind": "function",
        "name": "tables.matches",
        "args": "left, right, seen",
        "line": 14
      },
      {
        "kind": "function",
        "name": "tables.merge",
        "args": "target, source, override",
        "line": 34
      },
      {
        "kind": "function",
        "name": "tables.clone",
        "args": "value, seen",
        "line": 47
      },
      {
        "kind": "function",
        "name": "tables.shuffle",
        "args": "source, copy, random",
        "line": 55
      },
      {
        "kind": "function",
        "name": "tables.map",
        "args": "source, callback",
        "line": 62
      },
      {
        "kind": "function",
        "name": "tables.count",
        "args": "source",
        "line": 66
      },
      {
        "kind": "function",
        "name": "tables.isfrozen",
        "args": "source",
        "line": 70
      },
      {
        "kind": "function",
        "name": "tables.freeze",
        "args": "source",
        "line": 74
      },
      {
        "kind": "table-function",
        "name": "__newindex",
        "args": "",
        "line": 83
      },
      {
        "kind": "assigned-function",
        "name": "__newindex",
        "args": "",
        "line": 84
      },
      {
        "kind": "table-function",
        "name": "__len",
        "args": "",
        "line": 84
      },
      {
        "kind": "assigned-function",
        "name": "__len",
        "args": "",
        "line": 85
      },
      {
        "kind": "table-function",
        "name": "__pairs",
        "args": "",
        "line": 85
      },
      {
        "kind": "assigned-function",
        "name": "__pairs",
        "args": "",
        "line": 86
      }
    ]
  },
  {
    "path": "bridge/utils/timer.lua",
    "context": "mixed",
    "module": "utils",
    "lines": 83,
    "records": [
      {
        "kind": "local-function",
        "name": "round",
        "args": "value",
        "line": 1
      },
      {
        "kind": "function",
        "name": "Timer:getTimeLeft",
        "args": "format",
        "line": 8
      },
      {
        "kind": "function",
        "name": "Timer:isPaused",
        "args": "",
        "line": 22
      },
      {
        "kind": "function",
        "name": "Timer:_run",
        "args": "generation",
        "line": 24
      },
      {
        "kind": "function",
        "name": "Timer:start",
        "args": "async",
        "line": 33
      },
      {
        "kind": "function",
        "name": "Timer:forceEnd",
        "args": "triggerOnEnd",
        "line": 43
      },
      {
        "kind": "function",
        "name": "Timer:pause",
        "args": "",
        "line": 50
      },
      {
        "kind": "function",
        "name": "Timer:play",
        "args": "",
        "line": 57
      },
      {
        "kind": "function",
        "name": "Timer:restart",
        "args": "async",
        "line": 64
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/default/client.lua",
    "context": "client",
    "module": "vehicle_key",
    "lines": 47,
    "records": [
      {
        "kind": "local-function",
        "name": "hasPrCarkeys",
        "args": "",
        "line": 3
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeys",
        "args": "",
        "line": 7
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeys",
        "args": "",
        "line": 11
      },
      {
        "kind": "function",
        "name": "vehicle_key.HasKey",
        "args": "plate",
        "line": 15
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKey",
        "args": "",
        "line": 23
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKey",
        "args": "",
        "line": 27
      },
      {
        "kind": "function",
        "name": "vehicle_key.GetResourceName",
        "args": "",
        "line": 31
      },
      {
        "kind": "function",
        "name": "vehicle_key.HaveTemporaryKey",
        "args": "plate",
        "line": 36
      },
      {
        "kind": "function",
        "name": "vehicle_key.HavePermanentKey",
        "args": "plate",
        "line": 41
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/default/server.lua",
    "context": "server",
    "module": "vehicle_key",
    "lines": 55,
    "records": [
      {
        "kind": "local-function",
        "name": "hasPrCarkeys",
        "args": "",
        "line": 3
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveTempKeys",
        "args": "source, plate",
        "line": 7
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveTempKeys",
        "args": "source, plate",
        "line": 12
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeyItem",
        "args": "source, plate, netId",
        "line": 17
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeyItem",
        "args": "source, plate",
        "line": 22
      },
      {
        "kind": "function",
        "name": "vehicle_key.HaveTemporaryKey",
        "args": "source, plate",
        "line": 27
      },
      {
        "kind": "function",
        "name": "vehicle_key.HavePermanentKey",
        "args": "source, plate",
        "line": 32
      },
      {
        "kind": "function",
        "name": "vehicle_key.HasKey",
        "args": "source, plate",
        "line": 37
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKey",
        "args": "",
        "line": 42
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKey",
        "args": "",
        "line": 46
      },
      {
        "kind": "function",
        "name": "vehicle_key.GetAllKeys",
        "args": "",
        "line": 50
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/mm_carkeys/client.lua",
    "context": "client",
    "module": "vehicle_key",
    "lines": 32,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.GiveTempKeys",
        "args": "plate",
        "line": 7
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveTempKeys",
        "args": "plate",
        "line": 11
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeyItem",
        "args": "plate, vehicle",
        "line": 15
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeyItem",
        "args": "plate",
        "line": 19
      },
      {
        "kind": "function",
        "name": "vehicle_key.HaveTemporaryKey",
        "args": "plate",
        "line": 23
      },
      {
        "kind": "function",
        "name": "vehicle_key.HavePermanentKey",
        "args": "plate",
        "line": 27
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/mm_carkeys/server.lua",
    "context": "server",
    "module": "vehicle_key",
    "lines": 32,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.GiveTempKeys",
        "args": "source, plate",
        "line": 7
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveTempKeys",
        "args": "source, plate",
        "line": 11
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeyItem",
        "args": "source, plate, netId",
        "line": 15
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeyItem",
        "args": "source, plate",
        "line": 19
      },
      {
        "kind": "function",
        "name": "vehicle_key.HaveTemporaryKey",
        "args": "source, plate",
        "line": 23
      },
      {
        "kind": "function",
        "name": "vehicle_key.HavePermanentKey",
        "args": "source, plate",
        "line": 27
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/mri_Qcarkeys/client.lua",
    "context": "client",
    "module": "vehicle_key",
    "lines": 33,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.GiveTempKeys",
        "args": "plate",
        "line": 8
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveTempKeys",
        "args": "plate",
        "line": 12
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeyItem",
        "args": "plate, vehicle",
        "line": 16
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeyItem",
        "args": "plate",
        "line": 20
      },
      {
        "kind": "function",
        "name": "vehicle_key.HaveTemporaryKey",
        "args": "plate",
        "line": 24
      },
      {
        "kind": "function",
        "name": "vehicle_key.HavePermanentKey",
        "args": "plate",
        "line": 28
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/mri_Qcarkeys/server.lua",
    "context": "server",
    "module": "vehicle_key",
    "lines": 33,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.GiveTempKeys",
        "args": "source, plate",
        "line": 8
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveTempKeys",
        "args": "source, plate",
        "line": 12
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeyItem",
        "args": "source, plate, netId",
        "line": 16
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeyItem",
        "args": "source, plate",
        "line": 20
      },
      {
        "kind": "function",
        "name": "vehicle_key.HaveTemporaryKey",
        "args": "source, plate",
        "line": 24
      },
      {
        "kind": "function",
        "name": "vehicle_key.HavePermanentKey",
        "args": "source, plate",
        "line": 28
      }
    ]
  }
];
