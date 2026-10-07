export const PR_BRIDGE_SOURCE_AUDIT_BATCH_6 = [
  {
    "path": "bridge/inventories/compat/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 15,
    "records": [
      {
        "kind": "local-function",
        "name": "invoke",
        "args": "names,...",
        "line": 3
      },
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "item,metadata,strict",
        "line": 8
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "item,count,metadata,strict",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inventory.GetImagePath",
        "args": "item",
        "line": 12
      }
    ]
  },
  {
    "path": "bridge/inventories/compat/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 42,
    "records": [
      {
        "kind": "local-function",
        "name": "invoke",
        "args": "names, ...",
        "line": 4
      },
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 12
      },
      {
        "kind": "function",
        "name": "inventory.AddItem",
        "args": "inv,item,count,metadata,slot",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItem",
        "args": "inv,item,count,metadata,slot",
        "line": 14
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryItem",
        "args": "inv,item,count,metadata",
        "line": 15
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "inv,item,metadata,strict",
        "line": 16
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "inv,item,count,metadata,strict",
        "line": 17
      },
      {
        "kind": "function",
        "name": "inventory.GetItem",
        "args": "inv,item,metadata",
        "line": 18
      },
      {
        "kind": "function",
        "name": "inventory.GetItemBySlot",
        "args": "inv,slot,metadata",
        "line": 20
      },
      {
        "kind": "function",
        "name": "inventory.GetInventory",
        "args": "inv",
        "line": 21
      },
      {
        "kind": "function",
        "name": "inventory.ClearInventory",
        "args": "inv,keep",
        "line": 23
      },
      {
        "kind": "function",
        "name": "inventory.SetMetadata",
        "args": "inv,slot,metadata",
        "line": 25
      },
      {
        "kind": "function",
        "name": "inventory.RegisterStash",
        "args": "id,label,slots,maxWeight,owner,groups,coords",
        "line": 27
      },
      {
        "kind": "function",
        "name": "inventory.OpenStash",
        "args": "source,id",
        "line": 31
      },
      {
        "kind": "function",
        "name": "inventory.AddStashItems",
        "args": "id,items",
        "line": 34
      },
      {
        "kind": "function",
        "name": "inventory.GetStashItems",
        "args": "id",
        "line": 35
      },
      {
        "kind": "function",
        "name": "inventory.ClearStash",
        "args": "id",
        "line": 36
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "item",
        "line": 37
      },
      {
        "kind": "function",
        "name": "inventory.GetItemLabel",
        "args": "item",
        "line": 38
      },
      {
        "kind": "function",
        "name": "inventory.GetImagePath",
        "args": "item",
        "line": 39
      }
    ]
  },
  {
    "path": "bridge/inventories/core/client.lua",
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
    "path": "bridge/inventories/core/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 17,
    "records": [
      {
        "kind": "function",
        "name": "inv.AddItem",
        "args": "src,item,count,metadata",
        "line": 2
      },
      {
        "kind": "function",
        "name": "inv.RemoveItem",
        "args": "src,item,count",
        "line": 3
      },
      {
        "kind": "function",
        "name": "inv.CanCarryItem",
        "args": "src,item,count,metadata",
        "line": 4
      },
      {
        "kind": "function",
        "name": "inv.GetItemCount",
        "args": "src,item",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inv.HasItem",
        "args": "src,item,count",
        "line": 6
      },
      {
        "kind": "function",
        "name": "inv.GetItem",
        "args": "src,item",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inv.GetItemBySlot",
        "args": "src,slot",
        "line": 8
      },
      {
        "kind": "function",
        "name": "inv.GetInventory",
        "args": "src",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inv.ClearInventory",
        "args": "src",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inv.SetMetadata",
        "args": "src,slot,metadata",
        "line": 11
      },
      {
        "kind": "function",
        "name": "inv.RegisterStash",
        "args": "id,label,slots,maxWeight",
        "line": 12
      },
      {
        "kind": "function",
        "name": "inv.OpenStash",
        "args": "src,id",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inv.Items",
        "args": "item",
        "line": 14
      },
      {
        "kind": "function",
        "name": "inv.GetItemLabel",
        "args": "item",
        "line": 15
      },
      {
        "kind": "function",
        "name": "inv.GetImagePath",
        "args": "item",
        "line": 16
      }
    ]
  },
  {
    "path": "bridge/inventories/default/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 10,
    "records": [
      {
        "kind": "local-function",
        "name": "framework",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "item,metadata",
        "line": 6
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "item,count,metadata",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 8
      }
    ]
  },
  {
    "path": "bridge/inventories/default/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 19,
    "records": [
      {
        "kind": "local-function",
        "name": "framework",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inventory.AddItem",
        "args": "source,item,count,metadata,slot",
        "line": 6
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItem",
        "args": "source,item,count,metadata,slot",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inventory.GetItem",
        "args": "source,item,metadata",
        "line": 8
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "source,item,metadata",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "source,item,count,metadata",
        "line": 11
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryItem",
        "args": "source,item,count,metadata",
        "line": 12
      },
      {
        "kind": "function",
        "name": "inventory.GetInventory",
        "args": "source",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inventory.ClearInventory",
        "args": "source",
        "line": 15
      },
      {
        "kind": "function",
        "name": "inventory.SetMetadata",
        "args": "source,slot,metadata",
        "line": 16
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "item",
        "line": 17
      },
      {
        "kind": "function",
        "name": "inventory.GetItemLabel",
        "args": "item",
        "line": 18
      }
    ]
  },
  {
    "path": "bridge/inventories/jaksam/client.lua",
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
    "path": "bridge/inventories/jaksam/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 15,
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
        "args": "src,item",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inv.HasItem",
        "args": "src,item,count",
        "line": 6
      },
      {
        "kind": "function",
        "name": "inv.GetInventory",
        "args": "src",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inv.ClearInventory",
        "args": "src",
        "line": 8
      },
      {
        "kind": "function",
        "name": "inv.SetMetadata",
        "args": "src,slot,metadata",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inv.RegisterStash",
        "args": "id,label,slots,maxWeight,owner,groups,coords",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inv.OpenStash",
        "args": "src,id",
        "line": 11
      },
      {
        "kind": "function",
        "name": "inv.Items",
        "args": "item",
        "line": 12
      },
      {
        "kind": "function",
        "name": "inv.GetItemLabel",
        "args": "item",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inv.GetImagePath",
        "args": "item",
        "line": 14
      }
    ]
  },
  {
    "path": "bridge/inventories/origen/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 84,
    "records": [
      {
        "kind": "function",
        "name": "inventory.openInventory",
        "args": "invType, data",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inventory.openNearbyInventory",
        "args": "",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inventory.closeInventory",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 17
      },
      {
        "kind": "function",
        "name": "inventory.useItem",
        "args": "data, cb",
        "line": 21
      },
      {
        "kind": "function",
        "name": "inventory.useSlot",
        "args": "slot",
        "line": 25
      },
      {
        "kind": "function",
        "name": "inventory.setStashTarget",
        "args": "id, owner",
        "line": 29
      },
      {
        "kind": "function",
        "name": "inventory.getCurrentWeapon",
        "args": "",
        "line": 33
      },
      {
        "kind": "function",
        "name": "inventory.displayMetadata",
        "args": "metadata, value",
        "line": 38
      },
      {
        "kind": "function",
        "name": "inventory.giveItemToTarget",
        "args": "serverId, slotId, count",
        "line": 42
      },
      {
        "kind": "function",
        "name": "inventory.weaponWheel",
        "args": "state",
        "line": 46
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "search, item, metadata",
        "line": 50
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "itemName, metadata, strict",
        "line": 58
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 62
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerWeight",
        "args": "",
        "line": 66
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerMaxWeight",
        "args": "",
        "line": 70
      },
      {
        "kind": "function",
        "name": "inventory.getItemInfo",
        "args": "item",
        "line": 75
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 79
      }
    ]
  },
  {
    "path": "bridge/inventories/origen/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 140,
    "records": [
      {
        "kind": "local-function",
        "name": "debugUsable",
        "args": "options, level, message",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "safeUseItemCallback",
        "args": "item, cb, source, itemData",
        "line": 18
      },
      {
        "kind": "function",
        "name": "inventory.setPlayerInventory",
        "args": "player, data",
        "line": 37
      },
      {
        "kind": "function",
        "name": "inventory.forceOpenInventory",
        "args": "playerId, invType, data",
        "line": 44
      },
      {
        "kind": "function",
        "name": "inventory.UpdateVehicle",
        "args": "oldPlate, newPlate",
        "line": 53
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 57
      },
      {
        "kind": "function",
        "name": "inventory.AddItem",
        "args": "inv, item, count, metadata, slot, cb",
        "line": 61
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItem",
        "args": "inv, item, count, metadata, slot",
        "line": 67
      },
      {
        "kind": "function",
        "name": "inventory.GetItem",
        "args": "inv, item, metadata, returnsCount",
        "line": 72
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryItem",
        "args": "inv, item, count, metadata",
        "line": 79
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "inv, itemName, metadata, strict",
        "line": 93
      },
      {
        "kind": "function",
        "name": "inventory.GetInventory",
        "args": "inv",
        "line": 97
      },
      {
        "kind": "function",
        "name": "inventory.RegisterUsableItem",
        "args": "item, cb, options",
        "line": 101
      },
      {
        "kind": "function",
        "name": "inventory.CreateUsableItem",
        "args": "item, cb",
        "line": 122
      },
      {
        "kind": "function",
        "name": "inventory.setItemMetadata",
        "args": "src, slot, metadata",
        "line": 127
      },
      {
        "kind": "function",
        "name": "inventory.getItemInfo",
        "args": "item",
        "line": 131
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 135
      }
    ]
  },
  {
    "path": "bridge/inventories/ox/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 89,
    "records": [
      {
        "kind": "function",
        "name": "inventory.openInventory",
        "args": "invType, data",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inventory.openNearbyInventory",
        "args": "",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inventory.closeInventory",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 17
      },
      {
        "kind": "function",
        "name": "inventory.useItem",
        "args": "data, cb",
        "line": 21
      },
      {
        "kind": "function",
        "name": "inventory.useSlot",
        "args": "slot",
        "line": 25
      },
      {
        "kind": "function",
        "name": "inventory.setStashTarget",
        "args": "id, owner",
        "line": 29
      },
      {
        "kind": "function",
        "name": "inventory.getCurrentWeapon",
        "args": "",
        "line": 33
      },
      {
        "kind": "function",
        "name": "inventory.displayMetadata",
        "args": "metadata, value",
        "line": 37
      },
      {
        "kind": "function",
        "name": "inventory.giveItemToTarget",
        "args": "serverId, slotId, count",
        "line": 41
      },
      {
        "kind": "function",
        "name": "inventory.weaponWheel",
        "args": "state",
        "line": 45
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "search, item, metadata",
        "line": 49
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "itemName, metadata, strict",
        "line": 53
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 57
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerWeight",
        "args": "",
        "line": 61
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerMaxWeight",
        "args": "",
        "line": 65
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdWithItem",
        "args": "itemName, metadata, strict",
        "line": 69
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdsWithItem",
        "args": "itemName, metadata, strict",
        "line": 73
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotWithItem",
        "args": "itemName, metadata, strict",
        "line": 77
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotsWithItem",
        "args": "itemName, metadata, strict",
        "line": 81
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 85
      }
    ]
  },
  {
    "path": "bridge/inventories/ox/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 320,
    "records": [
      {
        "kind": "local-function",
        "name": "debugUsable",
        "args": "options, level, message",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "safeUseItemCallback",
        "args": "item, cb, source, itemData",
        "line": 18
      },
      {
        "kind": "function",
        "name": "inventory.RegisterUsableItem",
        "args": "item, cb, options",
        "line": 35
      },
      {
        "kind": "local-function",
        "name": "dispatchUse",
        "args": "source, itemData",
        "line": 43
      },
      {
        "kind": "local-function",
        "name": "handleUse",
        "args": "payload",
        "line": 69
      },
      {
        "kind": "function",
        "name": "inventory.setPlayerInventory",
        "args": "player, data",
        "line": 143
      },
      {
        "kind": "function",
        "name": "inventory.forceOpenInventory",
        "args": "playerId, invType, data",
        "line": 147
      },
      {
        "kind": "function",
        "name": "inventory.UpdateVehicle",
        "args": "oldPlate, newPlate",
        "line": 151
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 155
      },
      {
        "kind": "function",
        "name": "inventory.AddItem",
        "args": "inv, item, count, metadata, slot, cb",
        "line": 159
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItem",
        "args": "inv, item, count, metadata, slot",
        "line": 163
      },
      {
        "kind": "function",
        "name": "inventory.GetItem",
        "args": "inv, item, metadata, returnsCount",
        "line": 167
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryItem",
        "args": "inv, item, count, metadata",
        "line": 171
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryAmount",
        "args": "inv, item",
        "line": 175
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryWeight",
        "args": "inv, weight",
        "line": 179
      },
      {
        "kind": "function",
        "name": "inventory.SetMaxWeight",
        "args": "inv, maxWeight",
        "line": 183
      },
      {
        "kind": "function",
        "name": "inventory.CanSwapItem",
        "args": "inv, firstItem, firstItemCount, testItem, testItemCount",
        "line": 187
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "inv, itemName, metadata, strict",
        "line": 191
      },
      {
        "kind": "function",
        "name": "inventory.GetItemSlots",
        "args": "inv, item, metadata",
        "line": 195
      },
      {
        "kind": "function",
        "name": "inventory.GetSlot",
        "args": "inv, slot",
        "line": 199
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotForItem",
        "args": "inv, itemName, metadata",
        "line": 203
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdWithItem",
        "args": "inv, itemName, metadata, strict",
        "line": 207
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdsWithItem",
        "args": "inv, itemName, metadata, strict",
        "line": 211
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotWithItem",
        "args": "inv, itemName, metadata, strict",
        "line": 215
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotsWithItem",
        "args": "inv, itemName, metadata, strict",
        "line": 219
      },
      {
        "kind": "function",
        "name": "inventory.GetEmptySlot",
        "args": "inv",
        "line": 223
      },
      {
        "kind": "function",
        "name": "inventory.GetContainerFromSlot",
        "args": "inv, slotId",
        "line": 227
      },
      {
        "kind": "function",
        "name": "inventory.SetSlotCount",
        "args": "inv, slots",
        "line": 231
      },
      {
        "kind": "function",
        "name": "inventory.GetInventory",
        "args": "inv, owner",
        "line": 235
      },
      {
        "kind": "function",
        "name": "inventory.GetInventoryItems",
        "args": "inv, owner",
        "line": 239
      },
      {
        "kind": "function",
        "name": "inventory.InspectInventory",
        "args": "target, source",
        "line": 243
      },
      {
        "kind": "function",
        "name": "inventory.ConfiscateInventory",
        "args": "source",
        "line": 247
      },
      {
        "kind": "function",
        "name": "inventory.ReturnInventory",
        "args": "source",
        "line": 251
      },
      {
        "kind": "function",
        "name": "inventory.ClearInventory",
        "args": "inv, keep",
        "line": 255
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "inv, search, item, metadata",
        "line": 259
      },
      {
        "kind": "function",
        "name": "inventory.RegisterStash",
        "args": "id, label, slots, maxWeight, owner, groups, coords",
        "line": 263
      },
      {
        "kind": "function",
        "name": "inventory.RegisterShop",
        "args": "shopTitle, invData, shopCoords, shopGroups",
        "line": 267
      },
      {
        "kind": "function",
        "name": "inventory.RegisterHook",
        "args": "event, callback, options",
        "line": 286
      },
      {
        "kind": "function",
        "name": "inventory.CreateTemporaryStash",
        "args": "properties",
        "line": 291
      },
      {
        "kind": "function",
        "name": "inventory.CustomDrop",
        "args": "prefix, items, coords, slots, maxWeight, instance, model",
        "line": 295
      },
      {
        "kind": "function",
        "name": "inventory.CreateDropFromPlayer",
        "args": "playerId",
        "line": 299
      },
      {
        "kind": "function",
        "name": "inventory.GetCurrentWeapon",
        "args": "inv",
        "line": 303
      },
      {
        "kind": "function",
        "name": "inventory.SetDurability",
        "args": "inv, slot, durability",
        "line": 307
      },
      {
        "kind": "function",
        "name": "inventory.SetMetadata",
        "args": "inv, slot, metadata",
        "line": 311
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 315
      }
    ]
  },
  {
    "path": "bridge/inventories/ps/client.lua",
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
    "path": "bridge/inventories/ps/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 15,
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
        "args": "",
        "line": 4
      },
      {
        "kind": "function",
        "name": "inv.GetItemCount",
        "args": "src,item",
        "line": 5
      },
      {
        "kind": "function",
        "name": "inv.HasItem",
        "args": "src,item,count",
        "line": 6
      },
      {
        "kind": "function",
        "name": "inv.GetItem",
        "args": "src,item",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inv.GetItemBySlot",
        "args": "src,slot",
        "line": 8
      },
      {
        "kind": "function",
        "name": "inv.GetInventory",
        "args": "src",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inv.ClearInventory",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inv.SetMetadata",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inv.RegisterStash",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "inv.OpenStash",
        "args": "src,id",
        "line": 11
      },
      {
        "kind": "function",
        "name": "inv.Items",
        "args": "item",
        "line": 12
      },
      {
        "kind": "function",
        "name": "inv.GetItemLabel",
        "args": "item",
        "line": 13
      },
      {
        "kind": "function",
        "name": "inv.GetImagePath",
        "args": "item",
        "line": 14
      }
    ]
  },
  {
    "path": "bridge/inventories/qb/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 131,
    "records": [
      {
        "kind": "function",
        "name": "inventory.openInventory",
        "args": "invType, data",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inventory.openNearbyInventory",
        "args": "",
        "line": 16
      },
      {
        "kind": "function",
        "name": "inventory.closeInventory",
        "args": "",
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
        "name": "inventory.useItem",
        "args": "data, cb",
        "line": 28
      },
      {
        "kind": "function",
        "name": "inventory.useSlot",
        "args": "slot",
        "line": 31
      },
      {
        "kind": "function",
        "name": "inventory.setStashTarget",
        "args": "id, owner",
        "line": 34
      },
      {
        "kind": "function",
        "name": "inventory.getCurrentWeapon",
        "args": "",
        "line": 37
      },
      {
        "kind": "function",
        "name": "inventory.displayMetadata",
        "args": "metadata, value",
        "line": 41
      },
      {
        "kind": "function",
        "name": "inventory.giveItemToTarget",
        "args": "serverId, slotId, count",
        "line": 44
      },
      {
        "kind": "function",
        "name": "inventory.weaponWheel",
        "args": "state",
        "line": 47
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "search, item, metadata",
        "line": 50
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "itemName, metadata, strict",
        "line": 57
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 64
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerWeight",
        "args": "",
        "line": 69
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerMaxWeight",
        "args": "",
        "line": 73
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdWithItem",
        "args": "itemName, metadata, strict",
        "line": 77
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdsWithItem",
        "args": "itemName, metadata, strict",
        "line": 81
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotWithItem",
        "args": "itemName, metadata, strict",
        "line": 85
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotsWithItem",
        "args": "itemName, metadata, strict",
        "line": 89
      },
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 94
      },
      {
        "kind": "function",
        "name": "inventory.GetItemInfo",
        "args": "item",
        "line": 98
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "item, requiredCount",
        "line": 111
      },
      {
        "kind": "function",
        "name": "inventory.GetImagePath",
        "args": "item",
        "line": 115
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:qb-inventory:openStash",
        "args": "id, data",
        "line": 122
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 127
      }
    ]
  },
  {
    "path": "bridge/inventories/qb/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 257,
    "records": [
      {
        "kind": "local-function",
        "name": "getInventoryNewVersion",
        "args": "",
        "line": 14
      },
      {
        "kind": "event-handler",
        "name": "onResourceStart",
        "args": "resourceName",
        "line": 22
      },
      {
        "kind": "function",
        "name": "inventory.setPlayerInventory",
        "args": "player, data",
        "line": 27
      },
      {
        "kind": "function",
        "name": "inventory.forceOpenInventory",
        "args": "playerId, invType, data",
        "line": 30
      },
      {
        "kind": "function",
        "name": "inventory.UpdateVehicle",
        "args": "oldPlate, newPlate",
        "line": 42
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 63
      },
      {
        "kind": "function",
        "name": "inventory.AddItem",
        "args": "inv, item, count, metadata, slot, cb",
        "line": 68
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItem",
        "args": "inv, item, count, metadata, slot",
        "line": 92
      },
      {
        "kind": "function",
        "name": "inventory.GetItem",
        "args": "inv, item, metadata, returnsCount",
        "line": 101
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryItem",
        "args": "inv, item, count, metadata",
        "line": 109
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "inv, itemName, metadata, strict",
        "line": 115
      },
      {
        "kind": "function",
        "name": "inventory.GetInventory",
        "args": "inv",
        "line": 120
      },
      {
        "kind": "function",
        "name": "inventory.ClearInventory",
        "args": "inv, keep",
        "line": 124
      },
      {
        "kind": "function",
        "name": "inventory.RegisterStash",
        "args": "id, label, slots, maxWeight, owner, groups, coords",
        "line": 133
      },
      {
        "kind": "assigned-function",
        "name": "inventory.Old.OpenStash",
        "args": "src, _type, id",
        "line": 138
      },
      {
        "kind": "assigned-function",
        "name": "inventory.Old.OpenShop",
        "args": "src, shopTitle",
        "line": 143
      },
      {
        "kind": "assigned-function",
        "name": "inventory.Old.UpdatePlate",
        "args": "oldplate, newplate",
        "line": 149
      },
      {
        "kind": "assigned-function",
        "name": "inventory.Old.CanCarryItem",
        "args": "src, item, count",
        "line": 165
      },
      {
        "kind": "assigned-function",
        "name": "inventory.Old.ClearStash",
        "args": "id, _type",
        "line": 169
      },
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 173
      },
      {
        "kind": "function",
        "name": "inventory.GetItemInfo",
        "args": "item",
        "line": 177
      },
      {
        "kind": "function",
        "name": "inventory.GetItemBySlot",
        "args": "src, slot",
        "line": 190
      },
      {
        "kind": "function",
        "name": "inventory.AddStashItems",
        "args": "id, items",
        "line": 205
      },
      {
        "kind": "function",
        "name": "inventory.AddTrunkItems",
        "args": "identifier, items",
        "line": 214
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "src, item, requiredCount",
        "line": 227
      },
      {
        "kind": "function",
        "name": "inventory.OpenShop",
        "args": "src, shopTitle",
        "line": 231
      },
      {
        "kind": "function",
        "name": "inventory.RegisterShop",
        "args": "shopTitle, invData, shopCoords, shopGroups",
        "line": 236
      },
      {
        "kind": "function",
        "name": "inventory.OpenPlayerInventory",
        "args": "src, target",
        "line": 247
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 251
      }
    ]
  },
  {
    "path": "bridge/inventories/quasar/client.lua",
    "context": "client",
    "module": "inventory",
    "lines": 124,
    "records": [
      {
        "kind": "function",
        "name": "inventory.openInventory",
        "args": "invType, data",
        "line": 9
      },
      {
        "kind": "function",
        "name": "inventory.openNearbyInventory",
        "args": "",
        "line": 20
      },
      {
        "kind": "function",
        "name": "inventory.closeInventory",
        "args": "",
        "line": 25
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 31
      },
      {
        "kind": "function",
        "name": "inventory.useItem",
        "args": "data, cb",
        "line": 39
      },
      {
        "kind": "function",
        "name": "inventory.useSlot",
        "args": "slot",
        "line": 43
      },
      {
        "kind": "function",
        "name": "inventory.setStashTarget",
        "args": "id, owner",
        "line": 47
      },
      {
        "kind": "function",
        "name": "inventory.getCurrentWeapon",
        "args": "",
        "line": 51
      },
      {
        "kind": "function",
        "name": "inventory.displayMetadata",
        "args": "metadata, value",
        "line": 55
      },
      {
        "kind": "function",
        "name": "inventory.giveItemToTarget",
        "args": "serverId, slotId, count",
        "line": 59
      },
      {
        "kind": "function",
        "name": "inventory.weaponWheel",
        "args": "state",
        "line": 63
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "search, item, metadata",
        "line": 67
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "itemName, metadata, strict",
        "line": 72
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerItems",
        "args": "",
        "line": 76
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerWeight",
        "args": "",
        "line": 80
      },
      {
        "kind": "function",
        "name": "inventory.GetPlayerMaxWeight",
        "args": "",
        "line": 85
      },
      {
        "kind": "function",
        "name": "inventory.GetItemList",
        "args": "",
        "line": 91
      },
      {
        "kind": "function",
        "name": "inventory.GetWeaponList",
        "args": "",
        "line": 95
      },
      {
        "kind": "function",
        "name": "inventory.isInventoryOpen",
        "args": "",
        "line": 99
      },
      {
        "kind": "function",
        "name": "inventory.setInventoryDisabled",
        "args": "state",
        "line": 103
      },
      {
        "kind": "function",
        "name": "inventory.RegisterStash",
        "args": "id, slots, weight",
        "line": 107
      },
      {
        "kind": "function",
        "name": "inventory.setInClothing",
        "args": "state",
        "line": 111
      },
      {
        "kind": "function",
        "name": "inventory.CheckIfInventoryBlocked",
        "args": "",
        "line": 115
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 119
      }
    ]
  },
  {
    "path": "bridge/inventories/quasar/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 176,
    "records": [
      {
        "kind": "local-function",
        "name": "debugUsable",
        "args": "options, level, message",
        "line": 9
      },
      {
        "kind": "local-function",
        "name": "safeUseItemCallback",
        "args": "item, cb, source, itemData",
        "line": 20
      },
      {
        "kind": "function",
        "name": "inventory.setPlayerInventory",
        "args": "player, data",
        "line": 39
      },
      {
        "kind": "function",
        "name": "inventory.forceOpenInventory",
        "args": "playerId, invType, data",
        "line": 46
      },
      {
        "kind": "function",
        "name": "inventory.UpdateVehicle",
        "args": "oldPlate, newPlate",
        "line": 52
      },
      {
        "kind": "function",
        "name": "inventory.Items",
        "args": "itemName",
        "line": 56
      },
      {
        "kind": "function",
        "name": "inventory.AddItem",
        "args": "inv, item, count, metadata, slot, cb",
        "line": 64
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItem",
        "args": "inv, item, count, metadata, slot",
        "line": 70
      },
      {
        "kind": "function",
        "name": "inventory.GetItem",
        "args": "inv, item, metadata, returnsCount",
        "line": 74
      },
      {
        "kind": "function",
        "name": "inventory.CanCarryItem",
        "args": "inv, item, count, metadata",
        "line": 94
      },
      {
        "kind": "function",
        "name": "inventory.GetItemCount",
        "args": "inv, itemName, metadata, strict",
        "line": 98
      },
      {
        "kind": "function",
        "name": "inventory.GetInventory",
        "args": "inv",
        "line": 102
      },
      {
        "kind": "function",
        "name": "inventory.GetWeaponAttachmentItems",
        "args": "",
        "line": 107
      },
      {
        "kind": "function",
        "name": "inventory.GetItemLabel",
        "args": "item",
        "line": 111
      },
      {
        "kind": "function",
        "name": "inventory.RegisterUsableItem",
        "args": "item, cb, options",
        "line": 115
      },
      {
        "kind": "function",
        "name": "inventory.CreateUsableItem",
        "args": "item, cb",
        "line": 138
      },
      {
        "kind": "function",
        "name": "inventory.SetItemMetadata",
        "args": "source, slot, metadata",
        "line": 142
      },
      {
        "kind": "function",
        "name": "inventory.GetTotalUsedSlots",
        "args": "source",
        "line": 146
      },
      {
        "kind": "function",
        "name": "inventory.RegisterStash",
        "args": "source, id, slots, weight",
        "line": 151
      },
      {
        "kind": "function",
        "name": "inventory.AddItemIntoStash",
        "args": "id, item, amount, slot, metadata, slots, maxWeight",
        "line": 155
      },
      {
        "kind": "function",
        "name": "inventory.RemoveItemIntoStash",
        "args": "id, item, amount, slot, slots, maxWeight",
        "line": 159
      },
      {
        "kind": "function",
        "name": "inventory.GetStashItems",
        "args": "id",
        "line": 163
      },
      {
        "kind": "function",
        "name": "inventory.ClearOtherInventory",
        "args": "type, id",
        "line": 167
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 171
      }
    ]
  }
];
