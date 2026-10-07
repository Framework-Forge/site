export const PR_BRIDGE_SOURCE_AUDIT_BATCH_5 = [
  {
    "path": "bridge/fuel/default/server.lua",
    "context": "server",
    "module": "fuel",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/fuel/lc_fuel/client.lua",
    "context": "client",
    "module": "fuel",
    "lines": 28,
    "records": [
      {
        "kind": "function",
        "name": "fuel.GetResourceName",
        "args": "",
        "line": 6
      },
      {
        "kind": "function",
        "name": "fuel.GetFuel",
        "args": "vehicle",
        "line": 13
      },
      {
        "kind": "function",
        "name": "fuel.SetFuel",
        "args": "vehicle, amount, type",
        "line": 22
      }
    ]
  },
  {
    "path": "bridge/fuel/lc_fuel/server.lua",
    "context": "server",
    "module": "fuel",
    "lines": 8,
    "records": []
  },
  {
    "path": "bridge/fuel/legacyfuel/client.lua",
    "context": "client",
    "module": "fuel",
    "lines": 27,
    "records": [
      {
        "kind": "function",
        "name": "fuel.GetResourceName",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "fuel.GetFuel",
        "args": "vehicle",
        "line": 12
      },
      {
        "kind": "function",
        "name": "fuel.SetFuel",
        "args": "vehicle, amount, type",
        "line": 21
      }
    ]
  },
  {
    "path": "bridge/fuel/legacyfuel/server.lua",
    "context": "server",
    "module": "fuel",
    "lines": 8,
    "records": []
  },
  {
    "path": "bridge/garages/client.lua",
    "context": "client",
    "module": "garage",
    "lines": 83,
    "records": [
      {
        "kind": "local-function",
        "name": "provider",
        "args": "",
        "line": 1
      },
      {
        "kind": "function",
        "name": "garage.createPropertyGarage",
        "args": "options,done",
        "line": 10
      },
      {
        "kind": "local-function",
        "name": "finish",
        "args": "result",
        "line": 14
      },
      {
        "kind": "event-handler",
        "name": "forge_garage:client:propertyGarageCreated",
        "args": "result",
        "line": 21
      },
      {
        "kind": "function",
        "name": "garage.commitPropertyGarageDraft",
        "args": "options",
        "line": 36
      },
      {
        "kind": "function",
        "name": "garage.registerProperty",
        "args": "options",
        "line": 49
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 59
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 60
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 61
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 62
      },
      {
        "kind": "table-function",
        "name": "onEnter",
        "args": "",
        "line": 70
      },
      {
        "kind": "assigned-function",
        "name": "onEnter",
        "args": "",
        "line": 71
      },
      {
        "kind": "table-function",
        "name": "onExit",
        "args": "",
        "line": 71
      },
      {
        "kind": "assigned-function",
        "name": "onExit",
        "args": "",
        "line": 72
      },
      {
        "kind": "function",
        "name": "garage.unregisterProperty",
        "args": "handle",
        "line": 75
      }
    ]
  },
  {
    "path": "bridge/garages/server.lua",
    "context": "server",
    "module": "garage",
    "lines": 39,
    "records": [
      {
        "kind": "local-function",
        "name": "provider",
        "args": "",
        "line": 1
      },
      {
        "kind": "table-function",
        "name": "registerProperty",
        "args": "options",
        "line": 10
      },
      {
        "kind": "assigned-function",
        "name": "registerProperty",
        "args": "options",
        "line": 11
      },
      {
        "kind": "table-function",
        "name": "validateLink",
        "args": "propertyId,data",
        "line": 21
      },
      {
        "kind": "assigned-function",
        "name": "validateLink",
        "args": "propertyId,data",
        "line": 22
      }
    ]
  },
  {
    "path": "bridge/github/client.lua",
    "context": "client",
    "module": "github",
    "lines": 56,
    "records": [
      {
        "kind": "local-function",
        "name": "compareVersions",
        "args": "v1, v2",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "parseVersion",
        "args": "v",
        "line": 4
      },
      {
        "kind": "function",
        "name": "github.checkDependency",
        "args": "resource, minimumVersion, printMessage",
        "line": 32
      }
    ]
  },
  {
    "path": "bridge/github/server.lua",
    "context": "server",
    "module": "github",
    "lines": 180,
    "records": [
      {
        "kind": "local-function",
        "name": "compareVersions",
        "args": "v1, v2",
        "line": 4
      },
      {
        "kind": "local-function",
        "name": "parseVersion",
        "args": "v",
        "line": 5
      },
      {
        "kind": "function",
        "name": "github.checkDependency",
        "args": "resource, minimumVersion, printMessage",
        "line": 33
      },
      {
        "kind": "function",
        "name": "github.versionCheck",
        "args": "repository",
        "line": 58
      },
      {
        "kind": "local-function",
        "name": "center",
        "args": "text, w",
        "line": 103
      }
    ]
  },
  {
    "path": "bridge/init.lua",
    "context": "mixed",
    "module": "init",
    "lines": 614,
    "records": [
      {
        "kind": "local-function",
        "name": "setActiveBridge",
        "args": "bridgeType, folder",
        "line": 38
      },
      {
        "kind": "local-function",
        "name": "getBridge",
        "args": "bridgeType",
        "line": 50
      },
      {
        "kind": "assigned-function",
        "name": "Bridge.callback.getMode",
        "args": "",
        "line": 179
      },
      {
        "kind": "function",
        "name": "Bridge.setClipboard",
        "args": "value",
        "line": 191
      },
      {
        "kind": "function",
        "name": "Bridge.setClipboard",
        "args": "",
        "line": 197
      },
      {
        "kind": "table-function",
        "name": "IsTextUIOpen",
        "args": "",
        "line": 293
      },
      {
        "kind": "assigned-function",
        "name": "IsTextUIOpen",
        "args": "",
        "line": 294
      },
      {
        "kind": "local-function",
        "name": "prepareBubble",
        "args": "source, data, all",
        "line": 365
      },
      {
        "kind": "function",
        "name": "Bridge.NotifyBubble",
        "args": "source, data",
        "line": 378
      },
      {
        "kind": "function",
        "name": "Bridge.NotifyBubbleAll",
        "args": "source, data",
        "line": 387
      },
      {
        "kind": "function",
        "name": "Bridge.HideNotifyBubble",
        "args": "source, id",
        "line": 401
      },
      {
        "kind": "local-function",
        "name": "dispatchCacheEvent",
        "args": "key, value, oldValue",
        "line": 427
      },
      {
        "kind": "function",
        "name": "bridgeCache.set",
        "args": "key, value",
        "line": 438
      },
      {
        "kind": "function",
        "name": "bridgeCache.get",
        "args": "key, fallback",
        "line": 445
      },
      {
        "kind": "function",
        "name": "bridgeCache.clear",
        "args": "key",
        "line": 451
      },
      {
        "kind": "function",
        "name": "bridgeCache.clearPrefix",
        "args": "prefix",
        "line": 465
      },
      {
        "kind": "function",
        "name": "bridgeCache.remember",
        "args": "key, callback, timeout",
        "line": 473
      },
      {
        "kind": "function",
        "name": "bridgeCache.onChange",
        "args": "key, callback",
        "line": 493
      },
      {
        "kind": "function",
        "name": "bridgeCache.GetPlayer",
        "args": "source, timeout",
        "line": 498
      },
      {
        "kind": "function",
        "name": "bridgeCache.GetMetadata",
        "args": "source, metadata, timeout",
        "line": 512
      },
      {
        "kind": "function",
        "name": "bridgeCache.InvalidatePlayer",
        "args": "source",
        "line": 529
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, key, callback, timeout",
        "line": 542
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, key, callback, timeout",
        "line": 543
      },
      {
        "kind": "assigned-function",
        "name": "Bridge.notify.Notify",
        "args": "data",
        "line": 570
      },
      {
        "kind": "export-handler",
        "name": "getCacheSnapshot",
        "args": "",
        "line": 599
      },
      {
        "kind": "export-handler",
        "name": "getCachedEntity",
        "args": "identifier",
        "line": 603
      },
      {
        "kind": "export-handler",
        "name": "getCachedEntities",
        "args": "kind",
        "line": 607
      },
      {
        "kind": "export-handler",
        "name": "getLib",
        "args": "",
        "line": 611
      }
    ]
  },
  {
    "path": "bridge/interact/api.lua",
    "context": "mixed",
    "module": "interact",
    "lines": 220,
    "records": [
      {
        "kind": "local-function",
        "name": "owner",
        "args": "",
        "line": 10
      },
      {
        "kind": "local-function",
        "name": "optionList",
        "args": "options",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "vector",
        "args": "value, fallback",
        "line": 22
      },
      {
        "kind": "local-function",
        "name": "create",
        "args": "data, kind",
        "line": 30
      },
      {
        "kind": "local-function",
        "name": "values",
        "args": "value",
        "line": 58
      },
      {
        "kind": "local-function",
        "name": "removeMatching",
        "args": "predicate, interactionId",
        "line": 63
      },
      {
        "kind": "function",
        "name": "api.addInteraction",
        "args": "data",
        "line": 73
      },
      {
        "kind": "function",
        "name": "api.addLocalEntityInteraction",
        "args": "data",
        "line": 78
      },
      {
        "kind": "function",
        "name": "api.addEntityInteraction",
        "args": "data",
        "line": 83
      },
      {
        "kind": "function",
        "name": "api.addEntityBoneInteraction",
        "args": "data",
        "line": 91
      },
      {
        "kind": "function",
        "name": "api.addModelInteraction",
        "args": "data",
        "line": 96
      },
      {
        "kind": "function",
        "name": "api.addGlobalVehicleInteraction",
        "args": "data",
        "line": 121
      },
      {
        "kind": "function",
        "name": "api.addGlobalPlayerInteraction",
        "args": "data",
        "line": 122
      },
      {
        "kind": "function",
        "name": "api.removeInteraction",
        "args": "id",
        "line": 125
      },
      {
        "kind": "function",
        "name": "api.removeInteractionByEntity",
        "args": "entity",
        "line": 131
      },
      {
        "kind": "function",
        "name": "api.removeInteractionOption",
        "args": "id, name",
        "line": 135
      },
      {
        "kind": "function",
        "name": "api.updateInteraction",
        "args": "id, options",
        "line": 146
      },
      {
        "kind": "function",
        "name": "api.removeLocalEntityInteraction",
        "args": "entity, id",
        "line": 153
      },
      {
        "kind": "function",
        "name": "api.removeEntityInteraction",
        "args": "netId, id",
        "line": 157
      },
      {
        "kind": "function",
        "name": "api.removeModelInteraction",
        "args": "models, id",
        "line": 161
      },
      {
        "kind": "function",
        "name": "api.removeGlobalVehicleInteraction",
        "args": "id",
        "line": 171
      },
      {
        "kind": "function",
        "name": "api.removeGlobalPlayerInteraction",
        "args": "id",
        "line": 175
      },
      {
        "kind": "function",
        "name": "api.disable",
        "args": "state",
        "line": 179
      },
      {
        "kind": "function",
        "name": "api._records",
        "args": "",
        "line": 186
      },
      {
        "kind": "function",
        "name": "api._disabled",
        "args": "",
        "line": 187
      },
      {
        "kind": "event-handler",
        "name": "onClientResourceStop",
        "args": "resource",
        "line": 212
      }
    ]
  },
  {
    "path": "bridge/interact/client.lua",
    "context": "client",
    "module": "interact",
    "lines": 36,
    "records": [
      {
        "kind": "function",
        "name": "interact.AddInteraction",
        "args": "data",
        "line": 4
      },
      {
        "kind": "function",
        "name": "interact.AddLocalEntityInteraction",
        "args": "data",
        "line": 5
      },
      {
        "kind": "function",
        "name": "interact.AddEntityInteraction",
        "args": "data",
        "line": 6
      },
      {
        "kind": "function",
        "name": "interact.AddEntityBoneInteraction",
        "args": "data",
        "line": 7
      },
      {
        "kind": "function",
        "name": "interact.AddModelInteraction",
        "args": "data",
        "line": 8
      },
      {
        "kind": "function",
        "name": "interact.AddGlobalVehicleInteraction",
        "args": "data",
        "line": 9
      },
      {
        "kind": "function",
        "name": "interact.AddGlobalPlayerInteraction",
        "args": "data",
        "line": 10
      },
      {
        "kind": "function",
        "name": "interact.RemoveInteraction",
        "args": "id",
        "line": 12
      },
      {
        "kind": "function",
        "name": "interact.RemoveInteractionByEntity",
        "args": "entity",
        "line": 13
      },
      {
        "kind": "function",
        "name": "interact.RemoveInteractionOption",
        "args": "id, name",
        "line": 14
      },
      {
        "kind": "function",
        "name": "interact.UpdateInteraction",
        "args": "id, options",
        "line": 15
      },
      {
        "kind": "function",
        "name": "interact.RemoveLocalEntityInteraction",
        "args": "entity, id",
        "line": 16
      },
      {
        "kind": "function",
        "name": "interact.RemoveEntityInteraction",
        "args": "netId, id",
        "line": 17
      },
      {
        "kind": "function",
        "name": "interact.RemoveModelInteraction",
        "args": "models, id",
        "line": 18
      },
      {
        "kind": "function",
        "name": "interact.RemoveGlobalVehicleInteraction",
        "args": "id",
        "line": 19
      },
      {
        "kind": "function",
        "name": "interact.RemoveGlobalPlayerInteraction",
        "args": "id",
        "line": 20
      },
      {
        "kind": "function",
        "name": "interact.Disable",
        "args": "state",
        "line": 21
      }
    ]
  },
  {
    "path": "bridge/interact/runtime_client.lua",
    "context": "client",
    "module": "interact",
    "lines": 313,
    "records": [
      {
        "kind": "local-function",
        "name": "message",
        "args": "action, data",
        "line": 13
      },
      {
        "kind": "local-function",
        "name": "groupGrade",
        "args": "entry",
        "line": 17
      },
      {
        "kind": "local-function",
        "name": "playerGroups",
        "args": "",
        "line": 24
      },
      {
        "kind": "local-function",
        "name": "hasGroup",
        "args": "filter",
        "line": 35
      },
      {
        "kind": "local-function",
        "name": "isDisabled",
        "args": "",
        "line": 50
      },
      {
        "kind": "local-function",
        "name": "entityFor",
        "args": "record",
        "line": 61
      },
      {
        "kind": "local-function",
        "name": "interactionCoords",
        "args": "record, entity",
        "line": 71
      },
      {
        "kind": "local-function",
        "name": "visibleThroughWalls",
        "args": "record, coords, entity, config",
        "line": 84
      },
      {
        "kind": "local-function",
        "name": "allowedOptions",
        "args": "record, entity, coords",
        "line": 100
      },
      {
        "kind": "local-function",
        "name": "addCandidate",
        "args": "output, record, entity, playerCoords, config",
        "line": 118
      },
      {
        "kind": "local-function",
        "name": "containsHash",
        "args": "list, hash",
        "line": 136
      },
      {
        "kind": "local-function",
        "name": "refreshNearby",
        "args": "",
        "line": 141
      },
      {
        "kind": "local-function",
        "name": "cameraEntity",
        "args": "",
        "line": 200
      },
      {
        "kind": "local-function",
        "name": "activeCandidate",
        "args": "",
        "line": 205
      },
      {
        "kind": "local-function",
        "name": "dispatch",
        "args": "candidate, option",
        "line": 218
      },
      {
        "kind": "table-function",
        "name": "onPressed",
        "args": "",
        "line": 241
      },
      {
        "kind": "assigned-function",
        "name": "onPressed",
        "args": "",
        "line": 242
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:interact:stateChanged",
        "args": "state",
        "line": 303
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resource",
        "line": 307
      }
    ]
  },
  {
    "path": "bridge/interact/server.lua",
    "context": "server",
    "module": "interact",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/inventories/ak47/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 3
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "item,metadata,strict",
        "line": 4
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "item,count,metadata,strict",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 6
      },
      {
        "kind": "function",
        "name": "inventory.GetItemLabel",
        "args": "item",
        "line": 8
      },
      {
        "kind": "function",
        "name": "inventory.GetImagePath",
        "args": "item",
        "line": 9
      }
    ]
  },
  {
    "path": "bridge/inventories/ak47/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 16,
    "records": [
      {
        "kind": "function",
        "name": "inv.AddItem",
        "args": "src,item,count,metadata,slot",
        "line": 2
      },
      {
        "kind": "function",
        "name": "inv.RemoveItem",
        "args": "src,item,count,metadata,slot",
        "line": 3
      },
      {
        "kind": "function",
        "name": "inv.CanCarryItem",
        "args": "src,item,count",
        "line": 4
      },
      {
        "kind": "function",
        "name": "inv.GetItemCount",
        "args": "src,item,metadata,strict",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inv.HasItem",
        "args": "src,items,count",
        "line": 6
      },
      {
        "kind": "function",
        "name": "inv.GetItem",
        "args": "src,item,metadata,strict",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inv.GetInventory",
        "args": "src",
        "line": 8
      },
      {
        "kind": "function",
        "name": "inv.ClearInventory",
        "args": "src",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inv.SetMetadata",
        "args": "src,slot,metadata",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inv.RegisterStash",
        "args": "id,label,slots,maxWeight",
        "line": 11
      },
      {
        "kind": "function",
        "name": "inv.OpenStash",
        "args": "src,id",
        "line": 12
      },
      {
        "kind": "function",
        "name": "inv.Items",
        "args": "item",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inv.GetItemLabel",
        "args": "item",
        "line": 14
      },
      {
        "kind": "function",
        "name": "inv.GetImagePath",
        "args": "item",
        "line": 15
      }
    ]
  },
  {
    "path": "bridge/inventories/codem/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 71,
    "records": [
      {
        "kind": "function",
        "name": "inventory.openInventory",
        "args": "invType, data",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inventory.closeInventory",
        "args": "",
        "line": 11
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 16
      },
      {
        "kind": "function",
        "name": "inventory.getCurrentWeapon",
        "args": "",
        "line": 24
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "search, item, metadata",
        "line": 31
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "itemName, metadata, strict",
        "line": 45
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 49
      },
      {
        "kind": "function",
        "name": "inventory.GetItemList",
        "args": "",
        "line": 54
      },
      {
        "kind": "function",
        "name": "inventory.getUserInventory",
        "args": "",
        "line": 58
      },
      {
        "kind": "function",
        "name": "inventory.GetClientPlayerInventory",
        "args": "",
        "line": 62
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 66
      }
    ]
  },
  {
    "path": "bridge/inventories/codem/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 141,
    "records": [
      {
        "kind": "function",
        "name": "inventory.setPlayerInventory",
        "args": "player, data",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inventory.forceOpenInventory",
        "args": "playerId, invType, data",
        "line": 16
      },
      {
        "kind": "function",
        "name": "inventory.UpdateVehicle",
        "args": "oldPlate, newPlate",
        "line": 20
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 24
      },
      {
        "kind": "function",
        "name": "inventory.AddItem",
        "args": "inv, item, count, metadata, slot, cb",
        "line": 32
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItem",
        "args": "inv, item, count, metadata, slot",
        "line": 38
      },
      {
        "kind": "function",
        "name": "inventory.GetItem",
        "args": "inv, item, metadata, returnsCount",
        "line": 42
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryItem",
        "args": "inv, item, count, metadata",
        "line": 60
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "inv, itemName, metadata, strict",
        "line": 74
      },
      {
        "kind": "function",
        "name": "inventory.GetInventory",
        "args": "inv, source",
        "line": 78
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "source, items, amount",
        "line": 84
      },
      {
        "kind": "function",
        "name": "inventory.GetTotalWeight",
        "args": "items",
        "line": 88
      },
      {
        "kind": "function",
        "name": "inventory.SetItemBySlot",
        "args": "source, slot, itemdata",
        "line": 92
      },
      {
        "kind": "function",
        "name": "inventory.GetItemBySlot",
        "args": "source, slot",
        "line": 96
      },
      {
        "kind": "function",
        "name": "inventory.SaveInventory",
        "args": "source, offline",
        "line": 100
      },
      {
        "kind": "function",
        "name": "inventory.LoadInventory",
        "args": "source, identifier",
        "line": 104
      },
      {
        "kind": "function",
        "name": "inventory.ClearInventory",
        "args": "source",
        "line": 108
      },
      {
        "kind": "function",
        "name": "inventory.CheckItemValid",
        "args": "source, name, count",
        "line": 112
      },
      {
        "kind": "function",
        "name": "inventory.GetItemLabel",
        "args": "itemname",
        "line": 116
      },
      {
        "kind": "function",
        "name": "inventory.GetStashItems",
        "args": "stashid",
        "line": 120
      },
      {
        "kind": "function",
        "name": "inventory.UpdateStash",
        "args": "stashid, items",
        "line": 124
      },
      {
        "kind": "function",
        "name": "inventory.SetInventoryItems",
        "args": "source, item, amount",
        "line": 128
      },
      {
        "kind": "function",
        "name": "inventory.SetItemMetadata",
        "args": "source, slot, metadata",
        "line": 132
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 136
      }
    ]
  }
];
