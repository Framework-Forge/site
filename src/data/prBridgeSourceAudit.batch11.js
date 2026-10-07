export const PR_BRIDGE_SOURCE_AUDIT_BATCH_11 = [
  {
    "path": "bridge/targets/native/runtime_server.lua",
    "context": "server",
    "module": "target",
    "lines": 45,
    "records": [
      {
        "kind": "net-event",
        "name": "pr_bridge:target:setEntityHasOptions",
        "args": "netId",
        "line": 5
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:target:toggleEntityDoor",
        "args": "netId, door",
        "line": 16
      }
    ]
  },
  {
    "path": "bridge/targets/native/server.lua",
    "context": "server",
    "module": "target",
    "lines": 10,
    "records": [
      {
        "kind": "function",
        "name": "target.GetResourceName",
        "args": "",
        "line": 5
      }
    ]
  },
  {
    "path": "bridge/targets/native/zones.lua",
    "context": "mixed",
    "module": "target",
    "lines": 207,
    "records": [
      {
        "kind": "local-function",
        "name": "number",
        "args": "value, fallback",
        "line": 10
      },
      {
        "kind": "local-function",
        "name": "xyz",
        "args": "value",
        "line": 15
      },
      {
        "kind": "local-function",
        "name": "cell",
        "args": "value",
        "line": 20
      },
      {
        "kind": "local-function",
        "name": "cellKey",
        "args": "x, y",
        "line": 24
      },
      {
        "kind": "local-function",
        "name": "registerCells",
        "args": "zone, minX, minY, maxX, maxY",
        "line": 28
      },
      {
        "kind": "local-function",
        "name": "unregisterCells",
        "args": "zone",
        "line": 48
      },
      {
        "kind": "local-function",
        "name": "remove",
        "args": "zone",
        "line": 60
      },
      {
        "kind": "local-function",
        "name": "pointInPolygon",
        "args": "px, py, points",
        "line": 68
      },
      {
        "kind": "local-function",
        "name": "makeZone",
        "args": "kind, data",
        "line": 84
      },
      {
        "kind": "function",
        "name": "zone:contains",
        "args": "point",
        "line": 131
      },
      {
        "kind": "function",
        "name": "zone:remove",
        "args": "",
        "line": 154
      },
      {
        "kind": "function",
        "name": "Zones.sphere",
        "args": "data",
        "line": 163
      },
      {
        "kind": "function",
        "name": "Zones.box",
        "args": "data",
        "line": 164
      },
      {
        "kind": "function",
        "name": "Zones.poly",
        "args": "data",
        "line": 165
      },
      {
        "kind": "function",
        "name": "Zones.get",
        "args": "id",
        "line": 167
      },
      {
        "kind": "function",
        "name": "Zones.exists",
        "args": "id",
        "line": 172
      },
      {
        "kind": "function",
        "name": "Zones.remove",
        "args": "id",
        "line": 176
      },
      {
        "kind": "function",
        "name": "Zones.getNearby",
        "args": "coords",
        "line": 180
      },
      {
        "kind": "function",
        "name": "Zones.getAll",
        "args": "",
        "line": 194
      },
      {
        "kind": "function",
        "name": "Zones.removeResource",
        "args": "resource",
        "line": 198
      }
    ]
  },
  {
    "path": "bridge/targets/ox/client.lua",
    "context": "client",
    "module": "target",
    "lines": 92,
    "records": [
      {
        "kind": "function",
        "name": "target.disableTargeting",
        "args": "state",
        "line": 7
      },
      {
        "kind": "function",
        "name": "target.addGlobalOption",
        "args": "options",
        "line": 11
      },
      {
        "kind": "function",
        "name": "target.removeGlobalOption",
        "args": "optionNames",
        "line": 15
      },
      {
        "kind": "function",
        "name": "target.addGlobalObject",
        "args": "options",
        "line": 19
      },
      {
        "kind": "function",
        "name": "target.removeGlobalObject",
        "args": "optionNames",
        "line": 23
      },
      {
        "kind": "function",
        "name": "target.addGlobalPed",
        "args": "options",
        "line": 27
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPed",
        "args": "optionNames",
        "line": 31
      },
      {
        "kind": "function",
        "name": "target.addGlobalPlayer",
        "args": "options",
        "line": 35
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPlayer",
        "args": "optionNames",
        "line": 39
      },
      {
        "kind": "function",
        "name": "target.addGlobalVehicle",
        "args": "options",
        "line": 43
      },
      {
        "kind": "function",
        "name": "target.removeGlobalVehicle",
        "args": "optionNames",
        "line": 47
      },
      {
        "kind": "function",
        "name": "target.addModel",
        "args": "models, options",
        "line": 51
      },
      {
        "kind": "function",
        "name": "target.removeModel",
        "args": "models, optionNames",
        "line": 55
      },
      {
        "kind": "function",
        "name": "target.addEntity",
        "args": "netIds, options",
        "line": 59
      },
      {
        "kind": "function",
        "name": "target.removeEntity",
        "args": "netIds, optionNames",
        "line": 63
      },
      {
        "kind": "function",
        "name": "target.addLocalEntity",
        "args": "entities, options",
        "line": 67
      },
      {
        "kind": "function",
        "name": "target.removeLocalEntity",
        "args": "entities, optionNames",
        "line": 71
      },
      {
        "kind": "function",
        "name": "target.addSphereZone",
        "args": "parameters",
        "line": 75
      },
      {
        "kind": "function",
        "name": "target.addBoxZone",
        "args": "parameters",
        "line": 79
      },
      {
        "kind": "function",
        "name": "target.addPolyZone",
        "args": "parameters",
        "line": 83
      },
      {
        "kind": "function",
        "name": "target.removeZone",
        "args": "id",
        "line": 87
      }
    ]
  },
  {
    "path": "bridge/targets/ox/server.lua",
    "context": "server",
    "module": "target",
    "lines": 8,
    "records": []
  },
  {
    "path": "bridge/targets/qb/client.lua",
    "context": "client",
    "module": "target",
    "lines": 354,
    "records": [
      {
        "kind": "local-function",
        "name": "getEntityFromNetId",
        "args": "netId",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "getEntitiesFromNetIds",
        "args": "netIds",
        "line": 26
      },
      {
        "kind": "local-function",
        "name": "getFurthestOptionDistance",
        "args": "options",
        "line": 40
      },
      {
        "kind": "local-function",
        "name": "getMidpoint",
        "args": "coord1, coord2",
        "line": 51
      },
      {
        "kind": "local-function",
        "name": "mergeCloseSpheres",
        "args": "param",
        "line": 60
      },
      {
        "kind": "local-function",
        "name": "tweakOptions",
        "args": "options",
        "line": 89
      },
      {
        "kind": "assigned-function",
        "name": "option.action",
        "args": "entity",
        "line": 105
      },
      {
        "kind": "assigned-function",
        "name": "option.canInteract",
        "args": "entity, distance, data",
        "line": 135
      },
      {
        "kind": "assigned-function",
        "name": "option.canInteract",
        "args": "entity, distance, data",
        "line": 140
      },
      {
        "kind": "function",
        "name": "target.disableTargeting",
        "args": "state",
        "line": 149
      },
      {
        "kind": "function",
        "name": "target.addGlobalOption",
        "args": "options",
        "line": 155
      },
      {
        "kind": "function",
        "name": "target.removeGlobalOption",
        "args": "optionNames",
        "line": 161
      },
      {
        "kind": "function",
        "name": "target.addGlobalObject",
        "args": "options",
        "line": 167
      },
      {
        "kind": "function",
        "name": "target.removeGlobalObject",
        "args": "optionNames",
        "line": 177
      },
      {
        "kind": "function",
        "name": "target.addGlobalPed",
        "args": "options",
        "line": 181
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPed",
        "args": "optionNames",
        "line": 191
      },
      {
        "kind": "function",
        "name": "target.addGlobalPlayer",
        "args": "options",
        "line": 195
      },
      {
        "kind": "function",
        "name": "target.removeGlobalPlayer",
        "args": "optionNames",
        "line": 205
      },
      {
        "kind": "function",
        "name": "target.addGlobalVehicle",
        "args": "options",
        "line": 209
      },
      {
        "kind": "function",
        "name": "target.removeGlobalVehicle",
        "args": "optionNames",
        "line": 219
      },
      {
        "kind": "function",
        "name": "target.addModel",
        "args": "models, options",
        "line": 223
      },
      {
        "kind": "function",
        "name": "target.removeModel",
        "args": "models, optionNames",
        "line": 233
      },
      {
        "kind": "function",
        "name": "target.addEntity",
        "args": "netIds, options",
        "line": 238
      },
      {
        "kind": "function",
        "name": "target.removeEntity",
        "args": "netIds, optionNames",
        "line": 250
      },
      {
        "kind": "function",
        "name": "target.addLocalEntity",
        "args": "entities, options",
        "line": 255
      },
      {
        "kind": "function",
        "name": "target.removeLocalEntity",
        "args": "entities, optionNames",
        "line": 265
      },
      {
        "kind": "function",
        "name": "target.addSphereZone",
        "args": "parameters",
        "line": 269
      },
      {
        "kind": "function",
        "name": "target.addBoxZone",
        "args": "parameters",
        "line": 288
      },
      {
        "kind": "function",
        "name": "target.addPolyZone",
        "args": "parameters",
        "line": 312
      },
      {
        "kind": "function",
        "name": "target.removeZone",
        "args": "id",
        "line": 347
      }
    ]
  },
  {
    "path": "bridge/targets/qb/server.lua",
    "context": "server",
    "module": "target",
    "lines": 7,
    "records": []
  },
  {
    "path": "bridge/textui/brutal/client.lua",
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
    "path": "bridge/textui/brutal/server.lua",
    "context": "server",
    "module": "textui",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/textui/cd/client.lua",
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
    "path": "bridge/textui/cd/server.lua",
    "context": "server",
    "module": "textui",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/textui/codem/client.lua",
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
    "path": "bridge/textui/codem/server.lua",
    "context": "server",
    "module": "textui",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/textui/default/client.lua",
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
    "path": "bridge/textui/default/server.lua",
    "context": "server",
    "module": "textui",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/textui/jg/client.lua",
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
    "path": "bridge/textui/jg/server.lua",
    "context": "server",
    "module": "textui",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/textui/okok/client.lua",
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
  }
];
