export const PR_BRIDGE_SOURCE_AUDIT_BATCH_10 = [
  {
    "path": "bridge/progressbar/esx/client.lua",
    "context": "client",
    "module": "progressbar",
    "lines": 25,
    "records": [
      {
        "kind": "function",
        "name": "progress.doProgressbar",
        "args": "duration, label, anim",
        "line": 7
      },
      {
        "kind": "table-function",
        "name": "onFinish",
        "args": "",
        "line": 14
      },
      {
        "kind": "assigned-function",
        "name": "onFinish",
        "args": "",
        "line": 15
      },
      {
        "kind": "table-function",
        "name": "onCancel",
        "args": "",
        "line": 17
      },
      {
        "kind": "assigned-function",
        "name": "onCancel",
        "args": "",
        "line": 18
      }
    ]
  },
  {
    "path": "bridge/progressbar/esx/server.lua",
    "context": "server",
    "module": "progressbar",
    "lines": 7,
    "records": []
  },
  {
    "path": "bridge/progressbar/native/client.lua",
    "context": "client",
    "module": "progressbar",
    "lines": 116,
    "records": [
      {
        "kind": "local-function",
        "name": "send",
        "args": "action, data",
        "line": 4
      },
      {
        "kind": "local-function",
        "name": "requestAnim",
        "args": "dict",
        "line": 8
      },
      {
        "kind": "local-function",
        "name": "deleteProps",
        "args": "props",
        "line": 16
      },
      {
        "kind": "local-function",
        "name": "createProps",
        "args": "data, ped",
        "line": 22
      },
      {
        "kind": "local-function",
        "name": "disableControls",
        "args": "disable",
        "line": 47
      },
      {
        "kind": "function",
        "name": "progress.progressActive",
        "args": "",
        "line": 56
      },
      {
        "kind": "function",
        "name": "progress.cancelProgress",
        "args": "",
        "line": 60
      },
      {
        "kind": "local-function",
        "name": "runProgress",
        "args": "data, style",
        "line": 64
      },
      {
        "kind": "function",
        "name": "progress.progressBar",
        "args": "data",
        "line": 101
      },
      {
        "kind": "function",
        "name": "progress.progressCircle",
        "args": "data",
        "line": 105
      },
      {
        "kind": "function",
        "name": "progress.doProgressbar",
        "args": "duration, label, anim",
        "line": 108
      },
      {
        "kind": "function",
        "name": "progress.doProgressCircle",
        "args": "duration, label, anim",
        "line": 112
      }
    ]
  },
  {
    "path": "bridge/progressbar/native/server.lua",
    "context": "server",
    "module": "progressbar",
    "lines": 3,
    "records": []
  },
  {
    "path": "bridge/progressbar/qb/client.lua",
    "context": "client",
    "module": "progressbar",
    "lines": 25,
    "records": [
      {
        "kind": "function",
        "name": "progress.doProgressbar",
        "args": "duration, label, anim",
        "line": 7
      }
    ]
  },
  {
    "path": "bridge/progressbar/qb/server.lua",
    "context": "server",
    "module": "progressbar",
    "lines": 6,
    "records": []
  },
  {
    "path": "bridge/progressbar/qbx/client.lua",
    "context": "client",
    "module": "progressbar",
    "lines": 49,
    "records": [
      {
        "kind": "function",
        "name": "progress.doProgressbar",
        "args": "duration, label, anim",
        "line": 5
      },
      {
        "kind": "function",
        "name": "progress.doProgressCircle",
        "args": "duration, label, anim",
        "line": 26
      }
    ]
  },
  {
    "path": "bridge/progressbar/qbx/server.lua",
    "context": "server",
    "module": "progressbar",
    "lines": 8,
    "records": []
  },
  {
    "path": "bridge/targets/core_focus/client.lua",
    "context": "client",
    "module": "target",
    "lines": 61,
    "records": [
      {
        "kind": "local-function",
        "name": "options",
        "args": "input",
        "line": 6
      },
      {
        "kind": "assigned-function",
        "name": "option.action",
        "args": "entity",
        "line": 15
      },
      {
        "kind": "local-function",
        "name": "distance",
        "args": "list",
        "line": 21
      },
      {
        "kind": "local-function",
        "name": "payload",
        "args": "list",
        "line": 22
      },
      {
        "kind": "function",
        "name": "target.GetResourceName",
        "args": "",
        "line": 23
      },
      {
        "kind": "function",
        "name": "target.disableTargeting",
        "args": "",
        "line": 24
      },
      {
        "kind": "function",
        "name": "target.addGlobalObject",
        "args": "list",
        "line": 25
      },
      {
        "kind": "function",
        "name": "target.removeGlobalObject",
        "args": "names",
        "line": 26
      },
      {
        "kind": "function",
        "name": "target.addGlobalPed",
        "args": "list",
        "line": 27
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPed",
        "args": "names",
        "line": 28
      },
      {
        "kind": "function",
        "name": "target.addGlobalPlayer",
        "args": "list",
        "line": 29
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPlayer",
        "args": "names",
        "line": 30
      },
      {
        "kind": "function",
        "name": "target.addGlobalVehicle",
        "args": "list",
        "line": 31
      },
      {
        "kind": "function",
        "name": "target.removeGlobalVehicle",
        "args": "names",
        "line": 32
      },
      {
        "kind": "function",
        "name": "target.addModel",
        "args": "models,list",
        "line": 33
      },
      {
        "kind": "function",
        "name": "target.removeModel",
        "args": "models,names",
        "line": 34
      },
      {
        "kind": "function",
        "name": "target.addLocalEntity",
        "args": "entities,list",
        "line": 35
      },
      {
        "kind": "function",
        "name": "target.removeLocalEntity",
        "args": "entities,names",
        "line": 36
      },
      {
        "kind": "function",
        "name": "target.addEntity",
        "args": "netIds,list",
        "line": 37
      },
      {
        "kind": "function",
        "name": "target.removeEntity",
        "args": "netIds,names",
        "line": 42
      },
      {
        "kind": "function",
        "name": "target.addSphereZone",
        "args": "parameters",
        "line": 47
      },
      {
        "kind": "function",
        "name": "target.addBoxZone",
        "args": "parameters",
        "line": 51
      },
      {
        "kind": "function",
        "name": "target.addPolyZone",
        "args": "parameters",
        "line": 55
      },
      {
        "kind": "function",
        "name": "target.removeZone",
        "args": "id",
        "line": 60
      }
    ]
  },
  {
    "path": "bridge/targets/core_focus/server.lua",
    "context": "server",
    "module": "target",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/targets/default/client.lua",
    "context": "client",
    "module": "target",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/targets/default/server.lua",
    "context": "server",
    "module": "target",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/targets/native/api.lua",
    "context": "mixed",
    "module": "target",
    "lines": 387,
    "records": [
      {
        "kind": "local-function",
        "name": "owner",
        "args": "",
        "line": 15
      },
      {
        "kind": "local-function",
        "name": "array",
        "args": "value",
        "line": 19
      },
      {
        "kind": "local-function",
        "name": "normalizeOptions",
        "args": "options",
        "line": 25
      },
      {
        "kind": "local-function",
        "name": "names",
        "args": "value",
        "line": 34
      },
      {
        "kind": "local-function",
        "name": "removeTarget",
        "args": "target, remove, resource, replace",
        "line": 39
      },
      {
        "kind": "local-function",
        "name": "addTarget",
        "args": "target, options, resource",
        "line": 58
      },
      {
        "kind": "local-function",
        "name": "hashes",
        "args": "value",
        "line": 73
      },
      {
        "kind": "local-function",
        "name": "ids",
        "args": "value",
        "line": 83
      },
      {
        "kind": "local-function",
        "name": "pickupKey",
        "args": "resource, handle",
        "line": 88
      },
      {
        "kind": "local-function",
        "name": "pickupInputs",
        "args": "value",
        "line": 92
      },
      {
        "kind": "local-function",
        "name": "registerPickup",
        "args": "value, resource",
        "line": 97
      },
      {
        "kind": "local-function",
        "name": "pickupKeys",
        "args": "value, resource",
        "line": 115
      },
      {
        "kind": "local-function",
        "name": "addKeyed",
        "args": "target, keys, options, resource",
        "line": 124
      },
      {
        "kind": "local-function",
        "name": "removeKeyed",
        "args": "target, keys, optionNames, resource",
        "line": 133
      },
      {
        "kind": "function",
        "name": "api.addGlobalOption",
        "args": "options",
        "line": 145
      },
      {
        "kind": "function",
        "name": "api.removeGlobalOption",
        "args": "optionNames",
        "line": 146
      },
      {
        "kind": "function",
        "name": "api.addGlobalObject",
        "args": "options",
        "line": 147
      },
      {
        "kind": "function",
        "name": "api.removeGlobalObject",
        "args": "optionNames",
        "line": 148
      },
      {
        "kind": "function",
        "name": "api.addGlobalPickup",
        "args": "options",
        "line": 149
      },
      {
        "kind": "function",
        "name": "api.removeGlobalPickup",
        "args": "optionNames",
        "line": 150
      },
      {
        "kind": "function",
        "name": "api.addGlobalPed",
        "args": "options",
        "line": 151
      },
      {
        "kind": "function",
        "name": "api.removeGlobalPed",
        "args": "optionNames",
        "line": 152
      },
      {
        "kind": "function",
        "name": "api.addGlobalPlayer",
        "args": "options",
        "line": 153
      },
      {
        "kind": "function",
        "name": "api.removeGlobalPlayer",
        "args": "optionNames",
        "line": 154
      },
      {
        "kind": "function",
        "name": "api.addGlobalVehicle",
        "args": "options",
        "line": 155
      },
      {
        "kind": "function",
        "name": "api.removeGlobalVehicle",
        "args": "optionNames",
        "line": 156
      },
      {
        "kind": "function",
        "name": "api.addModel",
        "args": "models, options",
        "line": 158
      },
      {
        "kind": "function",
        "name": "api.removeModel",
        "args": "models, optionNames",
        "line": 159
      },
      {
        "kind": "function",
        "name": "api.addPickupType",
        "args": "pickupTypes, options",
        "line": 160
      },
      {
        "kind": "function",
        "name": "api.removePickupType",
        "args": "pickupTypes, optionNames",
        "line": 161
      },
      {
        "kind": "function",
        "name": "api.addPickup",
        "args": "pickupHandles, options",
        "line": 162
      },
      {
        "kind": "function",
        "name": "api.removePickup",
        "args": "pickupHandles, optionNames",
        "line": 170
      },
      {
        "kind": "function",
        "name": "api.inspectModels",
        "args": "models",
        "line": 179
      },
      {
        "kind": "function",
        "name": "api.addEntity",
        "args": "netIds, options",
        "line": 201
      },
      {
        "kind": "function",
        "name": "api.removeEntity",
        "args": "netIds, optionNames",
        "line": 226
      },
      {
        "kind": "function",
        "name": "api.addLocalEntity",
        "args": "entities, options",
        "line": 244
      },
      {
        "kind": "function",
        "name": "api.removeLocalEntity",
        "args": "entities, optionNames",
        "line": 266
      },
      {
        "kind": "local-function",
        "name": "addZone",
        "args": "kind, data",
        "line": 284
      },
      {
        "kind": "function",
        "name": "api.addSphereZone",
        "args": "data",
        "line": 292
      },
      {
        "kind": "function",
        "name": "api.addBoxZone",
        "args": "data",
        "line": 293
      },
      {
        "kind": "function",
        "name": "api.addPolyZone",
        "args": "data",
        "line": 294
      },
      {
        "kind": "function",
        "name": "api.zoneExists",
        "args": "id",
        "line": 295
      },
      {
        "kind": "function",
        "name": "api.removeZone",
        "args": "id, suppressWarning",
        "line": 296
      },
      {
        "kind": "function",
        "name": "api.disableTargeting",
        "args": "value",
        "line": 304
      },
      {
        "kind": "function",
        "name": "api.isActive",
        "args": "",
        "line": 310
      },
      {
        "kind": "function",
        "name": "api.getTargetOptions",
        "args": "entity, entityType, model, pickup, pickupType",
        "line": 312
      },
      {
        "kind": "function",
        "name": "api._state",
        "args": "",
        "line": 327
      },
      {
        "kind": "function",
        "name": "api._collections",
        "args": "",
        "line": 328
      },
      {
        "kind": "function",
        "name": "api._zones",
        "args": "",
        "line": 329
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:target:removeEntity",
        "args": "netIds",
        "line": 347
      },
      {
        "kind": "event-handler",
        "name": "onClientResourceStop",
        "args": "resource",
        "line": 351
      }
    ]
  },
  {
    "path": "bridge/targets/native/client.lua",
    "context": "client",
    "module": "target",
    "lines": 88,
    "records": [
      {
        "kind": "local-function",
        "name": "inputList",
        "args": "value",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "pickupDescriptor",
        "args": "value",
        "line": 12
      },
      {
        "kind": "local-function",
        "name": "describePickups",
        "args": "values",
        "line": 46
      },
      {
        "kind": "function",
        "name": "target.GetResourceName",
        "args": "",
        "line": 54
      },
      {
        "kind": "function",
        "name": "target.disableTargeting",
        "args": "value",
        "line": 55
      },
      {
        "kind": "function",
        "name": "target.isActive",
        "args": "",
        "line": 56
      },
      {
        "kind": "function",
        "name": "target.addGlobalOption",
        "args": "options",
        "line": 57
      },
      {
        "kind": "function",
        "name": "target.removeGlobalOption",
        "args": "names",
        "line": 58
      },
      {
        "kind": "function",
        "name": "target.addGlobalObject",
        "args": "options",
        "line": 59
      },
      {
        "kind": "function",
        "name": "target.removeGlobalObject",
        "args": "names",
        "line": 60
      },
      {
        "kind": "function",
        "name": "target.addGlobalPickup",
        "args": "options",
        "line": 61
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPickup",
        "args": "names",
        "line": 62
      },
      {
        "kind": "function",
        "name": "target.addGlobalPed",
        "args": "options",
        "line": 63
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPed",
        "args": "names",
        "line": 64
      },
      {
        "kind": "function",
        "name": "target.addGlobalPlayer",
        "args": "options",
        "line": 65
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPlayer",
        "args": "names",
        "line": 66
      },
      {
        "kind": "function",
        "name": "target.addGlobalVehicle",
        "args": "options",
        "line": 67
      },
      {
        "kind": "function",
        "name": "target.removeGlobalVehicle",
        "args": "names",
        "line": 68
      },
      {
        "kind": "function",
        "name": "target.addModel",
        "args": "models, options",
        "line": 69
      },
      {
        "kind": "function",
        "name": "target.removeModel",
        "args": "models, names",
        "line": 70
      },
      {
        "kind": "function",
        "name": "target.addPickupType",
        "args": "pickupTypes, options",
        "line": 71
      },
      {
        "kind": "function",
        "name": "target.removePickupType",
        "args": "pickupTypes, names",
        "line": 72
      },
      {
        "kind": "function",
        "name": "target.addPickup",
        "args": "pickups, options",
        "line": 73
      },
      {
        "kind": "function",
        "name": "target.removePickup",
        "args": "pickups, names",
        "line": 74
      },
      {
        "kind": "function",
        "name": "target.inspectModels",
        "args": "models",
        "line": 75
      },
      {
        "kind": "function",
        "name": "target.addEntity",
        "args": "netIds, options",
        "line": 76
      },
      {
        "kind": "function",
        "name": "target.removeEntity",
        "args": "netIds, names",
        "line": 77
      },
      {
        "kind": "function",
        "name": "target.addLocalEntity",
        "args": "entities, options",
        "line": 78
      },
      {
        "kind": "function",
        "name": "target.removeLocalEntity",
        "args": "entities, names",
        "line": 79
      },
      {
        "kind": "function",
        "name": "target.addSphereZone",
        "args": "parameters",
        "line": 80
      },
      {
        "kind": "function",
        "name": "target.addBoxZone",
        "args": "parameters",
        "line": 81
      },
      {
        "kind": "function",
        "name": "target.addPolyZone",
        "args": "parameters",
        "line": 82
      },
      {
        "kind": "function",
        "name": "target.zoneExists",
        "args": "id",
        "line": 83
      },
      {
        "kind": "function",
        "name": "target.removeZone",
        "args": "id, suppressWarning",
        "line": 84
      },
      {
        "kind": "function",
        "name": "target.getTargetOptions",
        "args": "entity, entityType, model, pickup, pickupType",
        "line": 85
      }
    ]
  },
  {
    "path": "bridge/targets/native/compat_qtarget.lua",
    "context": "mixed",
    "module": "target",
    "lines": 107,
    "records": [
      {
        "kind": "local-function",
        "name": "convert",
        "args": "input",
        "line": 5
      },
      {
        "kind": "local-function",
        "name": "AddBoxZone",
        "args": "name, center, length, width, options, targetOptions",
        "line": 33
      },
      {
        "kind": "local-function",
        "name": "AddPolyZone",
        "args": "name, points, options, targetOptions",
        "line": 45
      },
      {
        "kind": "local-function",
        "name": "AddCircleZone",
        "args": "name, center, radius, options, targetOptions",
        "line": 54
      },
      {
        "kind": "local-function",
        "name": "AddTargetBone",
        "args": "bones, options",
        "line": 59
      },
      {
        "kind": "local-function",
        "name": "AddTargetEntity",
        "args": "entities, options",
        "line": 66
      },
      {
        "kind": "local-function",
        "name": "RemoveTargetEntity",
        "args": "entities, labels",
        "line": 78
      },
      {
        "kind": "table-function",
        "name": "RemoveZone",
        "args": "id",
        "line": 90
      },
      {
        "kind": "assigned-function",
        "name": "RemoveZone",
        "args": "id",
        "line": 91
      },
      {
        "kind": "table-function",
        "name": "AddTargetModel",
        "args": "models, options",
        "line": 92
      },
      {
        "kind": "assigned-function",
        "name": "AddTargetModel",
        "args": "models, options",
        "line": 93
      },
      {
        "kind": "table-function",
        "name": "Ped",
        "args": "options",
        "line": 94
      },
      {
        "kind": "assigned-function",
        "name": "Ped",
        "args": "options",
        "line": 95
      },
      {
        "kind": "table-function",
        "name": "Vehicle",
        "args": "options",
        "line": 96
      },
      {
        "kind": "assigned-function",
        "name": "Vehicle",
        "args": "options",
        "line": 97
      },
      {
        "kind": "table-function",
        "name": "Object",
        "args": "options",
        "line": 98
      },
      {
        "kind": "assigned-function",
        "name": "Object",
        "args": "options",
        "line": 99
      },
      {
        "kind": "table-function",
        "name": "Player",
        "args": "options",
        "line": 100
      },
      {
        "kind": "assigned-function",
        "name": "Player",
        "args": "options",
        "line": 101
      }
    ]
  },
  {
    "path": "bridge/targets/native/defaults.lua",
    "context": "mixed",
    "module": "target",
    "lines": 88,
    "records": [
      {
        "kind": "local-function",
        "name": "validDoor",
        "args": "entity, coords, door, offset",
        "line": 12
      },
      {
        "kind": "local-function",
        "name": "toggleDoor",
        "args": "entity, door",
        "line": 25
      },
      {
        "kind": "local-function",
        "name": "selectDoor",
        "args": "data, door",
        "line": 34
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:target:toggleEntityDoor",
        "args": "netId, door",
        "line": 40
      },
      {
        "kind": "table-function",
        "name": "canInteract",
        "args": "entity, _, coords",
        "line": 60
      },
      {
        "kind": "assigned-function",
        "name": "canInteract",
        "args": "entity, _, coords",
        "line": 61
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "data",
        "line": 61
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "data",
        "line": 62
      },
      {
        "kind": "table-function",
        "name": "canInteract",
        "args": "entity, _, coords",
        "line": 71
      },
      {
        "kind": "assigned-function",
        "name": "canInteract",
        "args": "entity, _, coords",
        "line": 72
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "data",
        "line": 72
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "data",
        "line": 73
      },
      {
        "kind": "table-function",
        "name": "canInteract",
        "args": "entity, _, coords",
        "line": 81
      },
      {
        "kind": "assigned-function",
        "name": "canInteract",
        "args": "entity, _, coords",
        "line": 82
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "data",
        "line": 82
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "data",
        "line": 83
      }
    ]
  },
  {
    "path": "bridge/targets/native/pickups.lua",
    "context": "mixed",
    "module": "target",
    "lines": 430,
    "records": [
      {
        "kind": "local-function",
        "name": "trace",
        "args": "stage, handle, details",
        "line": 11
      },
      {
        "kind": "local-function",
        "name": "nativeBoolean",
        "args": "callback, ...",
        "line": 21
      },
      {
        "kind": "local-function",
        "name": "invokeInteger",
        "args": "hash, ...",
        "line": 29
      },
      {
        "kind": "local-function",
        "name": "invokeVector",
        "args": "hash, ...",
        "line": 40
      },
      {
        "kind": "local-function",
        "name": "pickupExists",
        "args": "handle",
        "line": 51
      },
      {
        "kind": "local-function",
        "name": "validEntity",
        "args": "entity",
        "line": 64
      },
      {
        "kind": "local-function",
        "name": "entityData",
        "args": "entity",
        "line": 70
      },
      {
        "kind": "local-function",
        "name": "pickupObject",
        "args": "handle",
        "line": 83
      },
      {
        "kind": "local-function",
        "name": "pickupCoords",
        "args": "handle, object",
        "line": 99
      },
      {
        "kind": "local-function",
        "name": "pickupType",
        "args": "handle",
        "line": 113
      },
      {
        "kind": "local-function",
        "name": "inferWeaponPickupType",
        "args": "model, knownTypes",
        "line": 125
      },
      {
        "kind": "local-function",
        "name": "removeRecord",
        "args": "handle",
        "line": 139
      },
      {
        "kind": "local-function",
        "name": "bindObject",
        "args": "record, object, knownTypes",
        "line": 145
      },
      {
        "kind": "local-function",
        "name": "descriptorCoords",
        "args": "coords",
        "line": 165
      },
      {
        "kind": "local-function",
        "name": "refreshExplicit",
        "args": "record, knownTypes",
        "line": 172
      },
      {
        "kind": "local-function",
        "name": "distanceBetween",
        "args": "left, right",
        "line": 192
      },
      {
        "kind": "local-function",
        "name": "closestTracked",
        "args": "coords, model, radius",
        "line": 198
      },
      {
        "kind": "function",
        "name": "pickups.exists",
        "args": "handle",
        "line": 211
      },
      {
        "kind": "function",
        "name": "pickups.remember",
        "args": "descriptor, knownTypes, resource",
        "line": 215
      },
      {
        "kind": "function",
        "name": "pickups.resolve",
        "args": "handle, knownTypes",
        "line": 251
      },
      {
        "kind": "local-function",
        "name": "resolvePoolEntry",
        "args": "handle, knownTypes",
        "line": 283
      },
      {
        "kind": "function",
        "name": "pickups.refresh",
        "args": "discover, knownTypes",
        "line": 317
      },
      {
        "kind": "function",
        "name": "pickups.get",
        "args": "handle",
        "line": 344
      },
      {
        "kind": "function",
        "name": "pickups.fromEntity",
        "args": "entity",
        "line": 352
      },
      {
        "kind": "function",
        "name": "pickups.findClosest",
        "args": "coords, radius, entity, knownTypes",
        "line": 362
      },
      {
        "kind": "function",
        "name": "pickups.resolveHit",
        "args": "entity, coords, knownTypes, registeredPickups",
        "line": 381
      },
      {
        "kind": "function",
        "name": "pickups.remove",
        "args": "key",
        "line": 404
      },
      {
        "kind": "function",
        "name": "pickups.removeResource",
        "args": "resource",
        "line": 409
      },
      {
        "kind": "function",
        "name": "pickups.list",
        "args": "",
        "line": 418
      },
      {
        "kind": "function",
        "name": "pickups.clear",
        "args": "",
        "line": 422
      }
    ]
  },
  {
    "path": "bridge/targets/native/runtime_client.lua",
    "context": "client",
    "module": "target",
    "lines": 835,
    "records": [
      {
        "kind": "local-function",
        "name": "entityTypeOf",
        "args": "entity",
        "line": 23
      },
      {
        "kind": "local-function",
        "name": "hasKeyedOptions",
        "args": "collection",
        "line": 30
      },
      {
        "kind": "local-function",
        "name": "pickupDiscoveryNeeded",
        "args": "",
        "line": 37
      },
      {
        "kind": "local-function",
        "name": "pickupTrackingNeeded",
        "args": "",
        "line": 41
      },
      {
        "kind": "local-function",
        "name": "targetMessage",
        "args": "action, data",
        "line": 61
      },
      {
        "kind": "local-function",
        "name": "setFocus",
        "args": "value",
        "line": 65
      },
      {
        "kind": "local-function",
        "name": "setActive",
        "args": "value",
        "line": 75
      },
      {
        "kind": "local-function",
        "name": "groupGrade",
        "args": "entry",
        "line": 91
      },
      {
        "kind": "local-function",
        "name": "playerGroups",
        "args": "",
        "line": 98
      },
      {
        "kind": "local-function",
        "name": "hasGroup",
        "args": "filter",
        "line": 109
      },
      {
        "kind": "local-function",
        "name": "itemCount",
        "args": "name",
        "line": 124
      },
      {
        "kind": "local-function",
        "name": "hasItems",
        "args": "filter, anyItem",
        "line": 137
      },
      {
        "kind": "local-function",
        "name": "closestBone",
        "args": "option, entity, endCoords",
        "line": 152
      },
      {
        "kind": "local-function",
        "name": "shouldShow",
        "args": "option, distance, endCoords, entity, model",
        "line": 166
      },
      {
        "kind": "local-function",
        "name": "uiOption",
        "args": "option, groupIndex, optionIndex, zoneIndex",
        "line": 200
      },
      {
        "kind": "local-function",
        "name": "addVisibleGroup",
        "args": "output, key, options, distance, entity, model",
        "line": 212
      },
      {
        "kind": "local-function",
        "name": "markerWorldPoint",
        "args": "entity",
        "line": 225
      },
      {
        "kind": "local-function",
        "name": "reachesTargetSurface",
        "args": "zone, endpoint, hitCoords",
        "line": 241
      },
      {
        "kind": "local-function",
        "name": "visibilitySettings",
        "args": "",
        "line": 245
      },
      {
        "kind": "local-function",
        "name": "probeVisibility",
        "args": "entity, zone, flags",
        "line": 255
      },
      {
        "kind": "local-function",
        "name": "updateVisibility",
        "args": "",
        "line": 268
      },
      {
        "kind": "local-function",
        "name": "targetVisible",
        "args": "entity, zone, fresh",
        "line": 294
      },
      {
        "kind": "local-function",
        "name": "collectEntityGroups",
        "args": "entity, entityType, model, distance, pickupRecord",
        "line": 310
      },
      {
        "kind": "local-function",
        "name": "collectZones",
        "args": "endCoords, distance, entity, markerCoords",
        "line": 337
      },
      {
        "kind": "local-function",
        "name": "signature",
        "args": "groups, zones",
        "line": 362
      },
      {
        "kind": "local-function",
        "name": "drawNearbyZones",
        "args": "nearby",
        "line": 380
      },
      {
        "kind": "local-function",
        "name": "markerOptionAllowed",
        "args": "option, entity, distance, coords",
        "line": 391
      },
      {
        "kind": "local-function",
        "name": "refreshMarkerEntities",
        "args": "playerCoords, markerDistance, targetConfig",
        "line": 402
      },
      {
        "kind": "local-function",
        "name": "consider",
        "args": "entity",
        "line": 412
      },
      {
        "kind": "local-function",
        "name": "add",
        "args": "options",
        "line": 422
      },
      {
        "kind": "local-function",
        "name": "refreshMarkerZones",
        "args": "playerCoords, markerDistance, targetConfig",
        "line": 453
      },
      {
        "kind": "local-function",
        "name": "sendScreenMarkers",
        "args": "playerCoords, markerDistance",
        "line": 483
      },
      {
        "kind": "local-function",
        "name": "response",
        "args": "option, server, zone",
        "line": 525
      },
      {
        "kind": "local-function",
        "name": "dispatch",
        "args": "option, zone",
        "line": 548
      },
      {
        "kind": "local-function",
        "name": "stopTargeting",
        "args": "",
        "line": 568
      },
      {
        "kind": "local-function",
        "name": "startTargeting",
        "args": "",
        "line": 572
      },
      {
        "kind": "nui-callback",
        "name": "target:select",
        "args": "data, cb",
        "line": 732
      },
      {
        "kind": "nui-callback",
        "name": "target:closeFocus",
        "args": "_, cb",
        "line": 776
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:target:stateChanged",
        "args": "",
        "line": 781
      },
      {
        "kind": "table-function",
        "name": "onPressed",
        "args": "",
        "line": 815
      },
      {
        "kind": "assigned-function",
        "name": "onPressed",
        "args": "",
        "line": 816
      },
      {
        "kind": "table-function",
        "name": "onReleased",
        "args": "",
        "line": 818
      },
      {
        "kind": "assigned-function",
        "name": "onReleased",
        "args": "",
        "line": 819
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resource",
        "line": 830
      }
    ]
  }
];
