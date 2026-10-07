export const PR_BRIDGE_SOURCE_AUDIT_BATCH_7 = [
  {
    "path": "bridge/inventories/tgiann/client.lua",
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
    "path": "bridge/inventories/tgiann/server.lua",
    "context": "server",
    "module": "inventory",
    "lines": 18,
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
        "name": "inv.GetItem",
        "args": "src,item,metadata",
        "line": 7
      },
      {
        "kind": "function",
        "name": "inv.GetItemBySlot",
        "args": "src,slot,metadata",
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
        "name": "inv.GetStashItems",
        "args": "id",
        "line": 14
      },
      {
        "kind": "function",
        "name": "inv.Items",
        "args": "item",
        "line": 15
      },
      {
        "kind": "function",
        "name": "inv.GetItemLabel",
        "args": "item",
        "line": 16
      },
      {
        "kind": "function",
        "name": "inv.GetImagePath",
        "args": "item",
        "line": 17
      }
    ]
  },
  {
    "path": "bridge/inventory_normalizer.lua",
    "context": "mixed",
    "module": "inventory_normalizer",
    "lines": 342,
    "records": [
      {
        "kind": "local-function",
        "name": "copyItem",
        "args": "item, fallbackSlot",
        "line": 1
      },
      {
        "kind": "local-function",
        "name": "metadataMatches",
        "args": "item, metadata, strict",
        "line": 19
      },
      {
        "kind": "local-function",
        "name": "itemMatches",
        "args": "item, itemName, metadata, strict",
        "line": 45
      },
      {
        "kind": "local-function",
        "name": "slotMatches",
        "args": "left, right",
        "line": 52
      },
      {
        "kind": "local-function",
        "name": "extractItems",
        "args": "data",
        "line": 59
      },
      {
        "kind": "local-function",
        "name": "safeCall",
        "args": "fn, ...",
        "line": 77
      },
      {
        "kind": "local-function",
        "name": "getLabelFromItems",
        "args": "inventory, item",
        "line": 84
      },
      {
        "kind": "local-function",
        "name": "getInfoFromItems",
        "args": "inventory, item",
        "line": 93
      },
      {
        "kind": "local-function",
        "name": "addServerHelpers",
        "args": "inventory",
        "line": 107
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "inv, item, amount, metadata, strict",
        "line": 109
      },
      {
        "kind": "function",
        "name": "inventory.GetInventoryItems",
        "args": "inv, owner",
        "line": 115
      },
      {
        "kind": "function",
        "name": "inventory.GetSlot",
        "args": "inv, slot",
        "line": 121
      },
      {
        "kind": "function",
        "name": "inventory.GetItemSlots",
        "args": "inv, item, metadata, strict",
        "line": 135
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotWithItem",
        "args": "inv, item, metadata, strict",
        "line": 149
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotsWithItem",
        "args": "inv, item, metadata, strict",
        "line": 158
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdWithItem",
        "args": "inv, item, metadata, strict",
        "line": 171
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdsWithItem",
        "args": "inv, item, metadata, strict",
        "line": 182
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "inv, search, item, metadata",
        "line": 193
      },
      {
        "kind": "local-function",
        "name": "addClientHelpers",
        "args": "inventory",
        "line": 211
      },
      {
        "kind": "function",
        "name": "inventory.GetInventoryItems",
        "args": "",
        "line": 213
      },
      {
        "kind": "function",
        "name": "inventory.HasItem",
        "args": "item, amount, metadata, strict",
        "line": 219
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotWithItem",
        "args": "item, metadata, strict",
        "line": 225
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotsWithItem",
        "args": "item, metadata, strict",
        "line": 234
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdWithItem",
        "args": "item, metadata, strict",
        "line": 247
      },
      {
        "kind": "function",
        "name": "inventory.GetSlotIdsWithItem",
        "args": "item, metadata, strict",
        "line": 254
      },
      {
        "kind": "function",
        "name": "inventory.Search",
        "args": "search, item, metadata",
        "line": 265
      },
      {
        "kind": "function",
        "name": "inventory.GetResourceName",
        "args": "",
        "line": 286
      },
      {
        "kind": "function",
        "name": "inventory.GetItemLabel",
        "args": "item",
        "line": 300
      },
      {
        "kind": "function",
        "name": "inventory.GetItemInfo",
        "args": "item",
        "line": 306
      },
      {
        "kind": "function",
        "name": "inventory.getInventoryImg",
        "args": "image",
        "line": 316
      },
      {
        "kind": "function",
        "name": "inventory.OpenStash",
        "args": "source, stashId",
        "line": 329
      },
      {
        "kind": "function",
        "name": "inventory.AddStashItems",
        "args": "stashId, items",
        "line": 330
      }
    ]
  },
  {
    "path": "bridge/locale.lua",
    "context": "mixed",
    "module": "locale",
    "lines": 337,
    "records": [
      {
        "kind": "local-function",
        "name": "translateKey",
        "args": "phrase, subs, ...",
        "line": 11
      },
      {
        "kind": "function",
        "name": "Locale.new",
        "args": "_, opts",
        "line": 48
      },
      {
        "kind": "function",
        "name": "Locale:extend",
        "args": "phrases, prefix",
        "line": 66
      },
      {
        "kind": "function",
        "name": "Locale:clear",
        "args": "",
        "line": 78
      },
      {
        "kind": "function",
        "name": "Locale:replace",
        "args": "phrases",
        "line": 82
      },
      {
        "kind": "function",
        "name": "Locale:locale",
        "args": "newLocale",
        "line": 87
      },
      {
        "kind": "function",
        "name": "Locale:t",
        "args": "key, subs, ...",
        "line": 95
      },
      {
        "kind": "function",
        "name": "Locale:has",
        "args": "key",
        "line": 116
      },
      {
        "kind": "function",
        "name": "Locale:delete",
        "args": "phraseTarget, prefix",
        "line": 120
      },
      {
        "kind": "local-function",
        "name": "normalizeLocaleName",
        "args": "localeName",
        "line": 137
      },
      {
        "kind": "local-function",
        "name": "addLocaleCandidate",
        "args": "list, seen, localeName",
        "line": 148
      },
      {
        "kind": "local-function",
        "name": "getGlobalStateLocale",
        "args": "",
        "line": 181
      },
      {
        "kind": "local-function",
        "name": "getConfiguredLocale",
        "args": "",
        "line": 190
      },
      {
        "kind": "function",
        "name": "Locale.init",
        "args": "invokingResource",
        "line": 211
      },
      {
        "kind": "table-function",
        "name": "t",
        "args": "self, key, subs, ...",
        "line": 284
      },
      {
        "kind": "assigned-function",
        "name": "t",
        "args": "self, key, subs, ...",
        "line": 285
      },
      {
        "kind": "table-function",
        "name": "has",
        "args": "self, key",
        "line": 290
      },
      {
        "kind": "assigned-function",
        "name": "has",
        "args": "self, key",
        "line": 291
      },
      {
        "kind": "table-function",
        "name": "extend",
        "args": "_, newPhrases, prefix",
        "line": 296
      },
      {
        "kind": "assigned-function",
        "name": "extend",
        "args": "_, newPhrases, prefix",
        "line": 297
      },
      {
        "kind": "table-function",
        "name": "replace",
        "args": "_, newPhrases",
        "line": 299
      },
      {
        "kind": "assigned-function",
        "name": "replace",
        "args": "_, newPhrases",
        "line": 300
      },
      {
        "kind": "table-function",
        "name": "locale",
        "args": "self, newLoc",
        "line": 302
      },
      {
        "kind": "assigned-function",
        "name": "locale",
        "args": "self, newLoc",
        "line": 303
      },
      {
        "kind": "table-function",
        "name": "delete",
        "args": "_, target, prefix",
        "line": 317
      },
      {
        "kind": "assigned-function",
        "name": "delete",
        "args": "_, target, prefix",
        "line": 318
      },
      {
        "kind": "table-function",
        "name": "getAll",
        "args": "",
        "line": 320
      },
      {
        "kind": "assigned-function",
        "name": "getAll",
        "args": "",
        "line": 321
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, key, ...",
        "line": 328
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, key, ...",
        "line": 329
      },
      {
        "kind": "table-function",
        "name": "__tostring",
        "args": "",
        "line": 331
      },
      {
        "kind": "assigned-function",
        "name": "__tostring",
        "args": "",
        "line": 332
      }
    ]
  },
  {
    "path": "bridge/locale/en-US.lua",
    "context": "mixed",
    "module": "locale",
    "lines": 20,
    "records": []
  },
  {
    "path": "bridge/locale/es.lua",
    "context": "mixed",
    "module": "locale",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/locale/fr.lua",
    "context": "mixed",
    "module": "locale",
    "lines": 1,
    "records": []
  },
  {
    "path": "bridge/locale/pt-br.lua",
    "context": "mixed",
    "module": "locale",
    "lines": 21,
    "records": []
  },
  {
    "path": "bridge/menus/default/client.lua",
    "context": "client",
    "module": "menu",
    "lines": 68,
    "records": [
      {
        "kind": "local-function",
        "name": "notifyUnavailable",
        "args": "title",
        "line": 4
      },
      {
        "kind": "function",
        "name": "menus.RegisterContext",
        "args": "context",
        "line": 14
      },
      {
        "kind": "function",
        "name": "menus.ShowContext",
        "args": "id",
        "line": 30
      },
      {
        "kind": "function",
        "name": "menus.HideContext",
        "args": "",
        "line": 36
      },
      {
        "kind": "function",
        "name": "menus.GetOpenContextMenu",
        "args": "",
        "line": 40
      },
      {
        "kind": "function",
        "name": "menus.RegisterMenu",
        "args": "",
        "line": 44
      },
      {
        "kind": "function",
        "name": "menus.ShowMenu",
        "args": "",
        "line": 48
      },
      {
        "kind": "function",
        "name": "menus.HideMenu",
        "args": "",
        "line": 53
      },
      {
        "kind": "function",
        "name": "menus.InputDialog",
        "args": "",
        "line": 57
      },
      {
        "kind": "function",
        "name": "menus.AlertDialog",
        "args": "",
        "line": 62
      }
    ]
  },
  {
    "path": "bridge/menus/default/server.lua",
    "context": "server",
    "module": "menu",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/menus/ox_lib/client.lua",
    "context": "client",
    "module": "menu",
    "lines": 44,
    "records": [
      {
        "kind": "function",
        "name": "menus.RegisterContext",
        "args": "context",
        "line": 7
      },
      {
        "kind": "function",
        "name": "menus.ShowContext",
        "args": "id",
        "line": 11
      },
      {
        "kind": "function",
        "name": "menus.HideContext",
        "args": "onExit",
        "line": 15
      },
      {
        "kind": "function",
        "name": "menus.GetOpenContextMenu",
        "args": "",
        "line": 19
      },
      {
        "kind": "function",
        "name": "menus.RegisterMenu",
        "args": "data, cb",
        "line": 23
      },
      {
        "kind": "function",
        "name": "menus.ShowMenu",
        "args": "id, startIndex",
        "line": 27
      },
      {
        "kind": "function",
        "name": "menus.HideMenu",
        "args": "onExit",
        "line": 31
      },
      {
        "kind": "function",
        "name": "menus.InputDialog",
        "args": "heading, rows, options",
        "line": 35
      },
      {
        "kind": "function",
        "name": "menus.AlertDialog",
        "args": "data, timeout",
        "line": 39
      }
    ]
  },
  {
    "path": "bridge/menus/ox_lib/server.lua",
    "context": "server",
    "module": "menu",
    "lines": 6,
    "records": []
  },
  {
    "path": "bridge/minigames/default/client.lua",
    "context": "client",
    "module": "minigame",
    "lines": 133,
    "records": [
      {
        "kind": "local-function",
        "name": "copyDifficulty",
        "args": "value",
        "line": 11
      },
      {
        "kind": "local-function",
        "name": "normalizeDifficulties",
        "args": "value",
        "line": 29
      },
      {
        "kind": "local-function",
        "name": "normalizeKeys",
        "args": "keys",
        "line": 41
      },
      {
        "kind": "local-function",
        "name": "finish",
        "args": "check, result, reason",
        "line": 53
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:skillcheck:result",
        "args": "resource, token, result, reason",
        "line": 66
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resource",
        "line": 72
      },
      {
        "kind": "function",
        "name": "minigame.SkillCheck",
        "args": "difficulties, keys, options",
        "line": 77
      },
      {
        "kind": "function",
        "name": "minigame.CancelSkillCheck",
        "args": "",
        "line": 108
      },
      {
        "kind": "function",
        "name": "minigame.Start",
        "args": "config, mode",
        "line": 114
      }
    ]
  },
  {
    "path": "bridge/minigames/default/server.lua",
    "context": "server",
    "module": "minigame",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/minigames/glitch/client.lua",
    "context": "client",
    "module": "minigame",
    "lines": 58,
    "records": [
      {
        "kind": "local-function",
        "name": "getResourceName",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "minigame.Start",
        "args": "config, mode",
        "line": 10
      }
    ]
  },
  {
    "path": "bridge/minigames/glitch/server.lua",
    "context": "server",
    "module": "minigame",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/minigames/mhacking/client.lua",
    "context": "client",
    "module": "minigame",
    "lines": 26,
    "records": [
      {
        "kind": "function",
        "name": "minigame.Start",
        "args": "config, mode",
        "line": 5
      }
    ]
  },
  {
    "path": "bridge/minigames/mhacking/server.lua",
    "context": "server",
    "module": "minigame",
    "lines": 2,
    "records": []
  }
];
