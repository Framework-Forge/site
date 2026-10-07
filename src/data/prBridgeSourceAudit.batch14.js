export const PR_BRIDGE_SOURCE_AUDIT_BATCH_14 = [
  {
    "path": "init.lua",
    "context": "mixed",
    "module": "init",
    "lines": 1167,
    "records": [
      {
        "kind": "local-function",
        "name": "inferExportName",
        "args": "callback",
        "line": 62
      },
      {
        "kind": "local-function",
        "name": "registerExport",
        "args": "name, callback",
        "line": 77
      },
      {
        "kind": "function",
        "name": "public.addExports",
        "args": "name, callback",
        "line": 95
      },
      {
        "kind": "assigned-function",
        "name": "public.locale",
        "args": "invokingResource",
        "line": 134
      },
      {
        "kind": "assigned-function",
        "name": "public.getLocales",
        "args": "invokingResource",
        "line": 141
      },
      {
        "kind": "table-function",
        "name": "info",
        "args": "...",
        "line": 146
      },
      {
        "kind": "assigned-function",
        "name": "info",
        "args": "...",
        "line": 147
      },
      {
        "kind": "table-function",
        "name": "warn",
        "args": "...",
        "line": 147
      },
      {
        "kind": "assigned-function",
        "name": "warn",
        "args": "...",
        "line": 148
      },
      {
        "kind": "table-function",
        "name": "error",
        "args": "...",
        "line": 148
      },
      {
        "kind": "assigned-function",
        "name": "error",
        "args": "...",
        "line": 149
      },
      {
        "kind": "function",
        "name": "public.logger",
        "args": "source, event, message, tag",
        "line": 152
      },
      {
        "kind": "function",
        "name": "public.waitFor",
        "args": "callback, message, timeout",
        "line": 157
      },
      {
        "kind": "function",
        "name": "public.setInterval",
        "args": "callback, interval, ...",
        "line": 176
      },
      {
        "kind": "function",
        "name": "public.clearInterval",
        "args": "id",
        "line": 222
      },
      {
        "kind": "function",
        "name": "public.array:new",
        "args": "...",
        "line": 236
      },
      {
        "kind": "function",
        "name": "values:includes",
        "args": "value",
        "line": 241
      },
      {
        "kind": "function",
        "name": "public.setClipboard",
        "args": "value",
        "line": 260
      },
      {
        "kind": "function",
        "name": "public.setClipboard",
        "args": "",
        "line": 266
      },
      {
        "kind": "assigned-function",
        "name": "public.callback.getMode",
        "args": "",
        "line": 284
      },
      {
        "kind": "local-function",
        "name": "setActiveBridge",
        "args": "bridgeType, folder",
        "line": 295
      },
      {
        "kind": "local-function",
        "name": "getBridgePath",
        "args": "bridgeType",
        "line": 304
      },
      {
        "kind": "local-function",
        "name": "loadBridgeModule",
        "args": "publicName, bridgeType",
        "line": 381
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, data",
        "line": 460
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, data",
        "line": 461
      },
      {
        "kind": "assigned-function",
        "name": "public.getClosestVehicle",
        "args": "coords, radius, includePlayers",
        "line": 500
      },
      {
        "kind": "assigned-function",
        "name": "public.getClosestPlayer",
        "args": "coords, radius, includePlayer",
        "line": 505
      },
      {
        "kind": "assigned-function",
        "name": "public.getNearbyPlayers",
        "args": "coords, radius, includePlayer",
        "line": 521
      },
      {
        "kind": "function",
        "name": "public.player:new",
        "args": "",
        "line": 540
      },
      {
        "kind": "table-function",
        "name": "get",
        "args": "_, key",
        "line": 542
      },
      {
        "kind": "assigned-function",
        "name": "get",
        "args": "_, key",
        "line": 543
      },
      {
        "kind": "table-function",
        "name": "set",
        "args": "_, key, value",
        "line": 543
      },
      {
        "kind": "assigned-function",
        "name": "set",
        "args": "_, key, value",
        "line": 544
      },
      {
        "kind": "table-function",
        "name": "setr",
        "args": "_, key, value",
        "line": 544
      },
      {
        "kind": "assigned-function",
        "name": "setr",
        "args": "_, key, value",
        "line": 545
      },
      {
        "kind": "assigned-function",
        "name": "public.raycast.cam",
        "args": "flags, ignoreFlags, distance",
        "line": 549
      },
      {
        "kind": "function",
        "name": "disableControls:Add",
        "args": "controls",
        "line": 556
      },
      {
        "kind": "function",
        "name": "disableControls:Remove",
        "args": "controls",
        "line": 559
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "",
        "line": 562
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "",
        "line": 563
      },
      {
        "kind": "table-function",
        "name": "IsTextUIOpen",
        "args": "",
        "line": 589
      },
      {
        "kind": "assigned-function",
        "name": "IsTextUIOpen",
        "args": "",
        "line": 590
      },
      {
        "kind": "local-function",
        "name": "prepareBubble",
        "args": "source, data, all",
        "line": 671
      },
      {
        "kind": "function",
        "name": "public.NotifyBubble",
        "args": "source, data",
        "line": 684
      },
      {
        "kind": "function",
        "name": "public.NotifyBubbleAll",
        "args": "source, data",
        "line": 693
      },
      {
        "kind": "function",
        "name": "public.HideNotifyBubble",
        "args": "source, id",
        "line": 707
      },
      {
        "kind": "local-function",
        "name": "dispatchCacheEvent",
        "args": "key, value, oldValue",
        "line": 733
      },
      {
        "kind": "function",
        "name": "prCache.set",
        "args": "key, value",
        "line": 744
      },
      {
        "kind": "function",
        "name": "prCache.get",
        "args": "key, fallback",
        "line": 752
      },
      {
        "kind": "function",
        "name": "prCache.clear",
        "args": "key",
        "line": 758
      },
      {
        "kind": "function",
        "name": "prCache.clearPrefix",
        "args": "prefix",
        "line": 772
      },
      {
        "kind": "function",
        "name": "prCache.remember",
        "args": "key, callback, timeout",
        "line": 780
      },
      {
        "kind": "function",
        "name": "prCache.onChange",
        "args": "key, callback",
        "line": 800
      },
      {
        "kind": "local-function",
        "name": "cachePlayerStatus",
        "args": "status",
        "line": 807
      },
      {
        "kind": "function",
        "name": "prCache.GetPlayer",
        "args": "source, timeout",
        "line": 830
      },
      {
        "kind": "function",
        "name": "prCache.GetMetadata",
        "args": "source, metadata, timeout",
        "line": 844
      },
      {
        "kind": "function",
        "name": "prCache.InvalidatePlayer",
        "args": "source",
        "line": 861
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, key, callback, timeout",
        "line": 874
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, key, callback, timeout",
        "line": 875
      },
      {
        "kind": "table-function",
        "name": "__index",
        "args": "_, key",
        "line": 877
      },
      {
        "kind": "assigned-function",
        "name": "__index",
        "args": "_, key",
        "line": 878
      },
      {
        "kind": "function",
        "name": "public.points.new",
        "args": "data, distance, extraData",
        "line": 903
      },
      {
        "kind": "function",
        "name": "point:remove",
        "args": "",
        "line": 915
      },
      {
        "kind": "function",
        "name": "public.points.getAllPoints",
        "args": "",
        "line": 924
      },
      {
        "kind": "function",
        "name": "public.points.getClosestPoint",
        "args": "filter",
        "line": 932
      },
      {
        "kind": "function",
        "name": "public.zones.sphere",
        "args": "data",
        "line": 945
      },
      {
        "kind": "local-function",
        "name": "polygonContains",
        "args": "points, x, y",
        "line": 951
      },
      {
        "kind": "function",
        "name": "public.zones.poly",
        "args": "data",
        "line": 971
      },
      {
        "kind": "assigned-function",
        "name": "data.contains",
        "args": "_, coords",
        "line": 1005
      },
      {
        "kind": "function",
        "name": "public.zones.box",
        "args": "data",
        "line": 1013
      },
      {
        "kind": "assigned-function",
        "name": "data.contains",
        "args": "self, coords",
        "line": 1019
      },
      {
        "kind": "local-function",
        "name": "account",
        "args": "name",
        "line": 1098
      },
      {
        "kind": "assigned-function",
        "name": "public.notify.Notify",
        "args": "data",
        "line": 1134
      }
    ]
  },
  {
    "path": "interface/client/host.lua",
    "context": "client",
    "module": "interface",
    "lines": 289,
    "records": [
      {
        "kind": "local-function",
        "name": "getUiInterface",
        "args": "",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "applyUiInterface",
        "args": "",
        "line": 20
      },
      {
        "kind": "local-function",
        "name": "applyGlobalConfig",
        "args": "config",
        "line": 27
      },
      {
        "kind": "local-function",
        "name": "payloadOwner",
        "args": "data",
        "line": 32
      },
      {
        "kind": "local-function",
        "name": "setFocus",
        "args": "keepInput",
        "line": 39
      },
      {
        "kind": "local-function",
        "name": "ensureFocus",
        "args": "keepInput",
        "line": 45
      },
      {
        "kind": "local-function",
        "name": "clearFocus",
        "args": "",
        "line": 51
      },
      {
        "kind": "local-function",
        "name": "resetFocus",
        "args": "",
        "line": 60
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:claim",
        "args": "resourceName",
        "line": 66
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:send",
        "args": "action, data",
        "line": 70
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:setFocus",
        "args": "keepInput",
        "line": 74
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:ensureFocus",
        "args": "keepInput",
        "line": 78
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:setKeyboardFocus",
        "args": "",
        "line": 82
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:clearKeyboardFocus",
        "args": "",
        "line": 88
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:hasFocus",
        "args": "requestId",
        "line": 101
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:textuiDebug",
        "args": "enabled",
        "line": 104
      },
      {
        "kind": "nui-callback",
        "name": "debug:textui",
        "args": "data, cb",
        "line": 109
      },
      {
        "kind": "nui-callback",
        "name": "context:select",
        "args": "data, cb",
        "line": 116
      },
      {
        "kind": "nui-callback",
        "name": "context:close",
        "args": "data, cb",
        "line": 123
      },
      {
        "kind": "nui-callback",
        "name": "context:back",
        "args": "data, cb",
        "line": 128
      },
      {
        "kind": "nui-callback",
        "name": "alert:result",
        "args": "data, cb",
        "line": 133
      },
      {
        "kind": "nui-callback",
        "name": "alert:close",
        "args": "data, cb",
        "line": 138
      },
      {
        "kind": "nui-callback",
        "name": "input:submit",
        "args": "data, cb",
        "line": 143
      },
      {
        "kind": "nui-callback",
        "name": "input:close",
        "args": "data, cb",
        "line": 148
      },
      {
        "kind": "nui-callback",
        "name": "skillcheck:result",
        "args": "data, cb",
        "line": 153
      },
      {
        "kind": "local-function",
        "name": "radialItems",
        "args": "resource, menuId",
        "line": 163
      },
      {
        "kind": "local-function",
        "name": "showRadial",
        "args": "resource, menuId",
        "line": 171
      },
      {
        "kind": "local-function",
        "name": "hideRadial",
        "args": "",
        "line": 183
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:radial:add",
        "args": "resource, items, parentMenuId",
        "line": 193
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:radial:register",
        "args": "resource, menu",
        "line": 200
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:radial:remove",
        "args": "resource, id, parentMenuId",
        "line": 203
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:radial:clear",
        "args": "",
        "line": 207
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:radial:disable",
        "args": "state",
        "line": 211
      },
      {
        "kind": "local-function",
        "name": "toggleRadial",
        "args": "",
        "line": 216
      },
      {
        "kind": "nui-callback",
        "name": "radial:close",
        "args": "_, cb",
        "line": 235
      },
      {
        "kind": "nui-callback",
        "name": "radial:back",
        "args": "_, cb",
        "line": 236
      },
      {
        "kind": "nui-callback",
        "name": "radial:select",
        "args": "data, cb",
        "line": 242
      },
      {
        "kind": "nui-callback",
        "name": "ui:ready",
        "args": "_, cb",
        "line": 280
      }
    ]
  },
  {
    "path": "interface/client/main.lua",
    "context": "client",
    "module": "interface",
    "lines": 3,
    "records": []
  },
  {
    "path": "interface/client/modules/alert.lua",
    "context": "client",
    "module": "interface",
    "lines": 86,
    "records": [
      {
        "kind": "function",
        "name": "Alert.AlertDialog",
        "args": "data, timeout",
        "line": 19
      },
      {
        "kind": "table-function",
        "name": "resolve",
        "args": "result",
        "line": 30
      },
      {
        "kind": "assigned-function",
        "name": "resolve",
        "args": "result",
        "line": 31
      },
      {
        "kind": "function",
        "name": "Alert.HandleResult",
        "args": "result",
        "line": 67
      },
      {
        "kind": "function",
        "name": "Alert.HandleClose",
        "args": "",
        "line": 80
      }
    ]
  },
  {
    "path": "interface/client/modules/bubble.lua",
    "context": "client",
    "module": "interface",
    "lines": 51,
    "records": [
      {
        "kind": "function",
        "name": "Bubble.NotifyBubble",
        "args": "data, kind, duration",
        "line": 7
      },
      {
        "kind": "function",
        "name": "Bubble.HideNotifyBubble",
        "args": "id",
        "line": 36
      }
    ]
  },
  {
    "path": "interface/client/modules/context.lua",
    "context": "client",
    "module": "interface",
    "lines": 398,
    "records": [
      {
        "kind": "local-function",
        "name": "cloneSerializable",
        "args": "value, seen",
        "line": 57
      },
      {
        "kind": "local-function",
        "name": "isOptionArray",
        "args": "options",
        "line": 86
      },
      {
        "kind": "local-function",
        "name": "normalizeTitle",
        "args": "option, key",
        "line": 100
      },
      {
        "kind": "local-function",
        "name": "normalizeOption",
        "args": "option, index, key",
        "line": 106
      },
      {
        "kind": "local-function",
        "name": "normalizeOptions",
        "args": "options",
        "line": 149
      },
      {
        "kind": "local-function",
        "name": "storeContext",
        "args": "data",
        "line": 183
      },
      {
        "kind": "local-function",
        "name": "openContext",
        "args": "id, pushStack",
        "line": 229
      },
      {
        "kind": "function",
        "name": "Context.RegisterContext",
        "args": "data",
        "line": 267
      },
      {
        "kind": "function",
        "name": "Context.ShowContext",
        "args": "id",
        "line": 274
      },
      {
        "kind": "function",
        "name": "Context.HideContext",
        "args": "onExit",
        "line": 287
      },
      {
        "kind": "function",
        "name": "Context.GetOpenContextMenu",
        "args": "",
        "line": 307
      },
      {
        "kind": "function",
        "name": "Context.HandleSelect",
        "args": "id, index",
        "line": 315
      },
      {
        "kind": "function",
        "name": "Context.HandleClose",
        "args": "",
        "line": 353
      },
      {
        "kind": "function",
        "name": "Context.HandleBack",
        "args": "",
        "line": 361
      }
    ]
  },
  {
    "path": "interface/client/modules/input.lua",
    "context": "client",
    "module": "interface",
    "lines": 115,
    "records": [
      {
        "kind": "local-function",
        "name": "serializeRows",
        "args": "rows",
        "line": 35
      },
      {
        "kind": "function",
        "name": "Input.InputDialog",
        "args": "heading, rows, options",
        "line": 68
      },
      {
        "kind": "table-function",
        "name": "resolve",
        "args": "result",
        "line": 75
      },
      {
        "kind": "assigned-function",
        "name": "resolve",
        "args": "result",
        "line": 76
      },
      {
        "kind": "function",
        "name": "Input.HandleSubmit",
        "args": "values",
        "line": 96
      },
      {
        "kind": "function",
        "name": "Input.HandleClose",
        "args": "",
        "line": 109
      }
    ]
  },
  {
    "path": "interface/client/modules/notify.lua",
    "context": "client",
    "module": "interface",
    "lines": 54,
    "records": [
      {
        "kind": "function",
        "name": "Notify.Notify",
        "args": "data",
        "line": 20
      }
    ]
  },
  {
    "path": "interface/client/modules/radial.lua",
    "context": "client",
    "module": "interface",
    "lines": 46,
    "records": [
      {
        "kind": "local-function",
        "name": "normalize",
        "args": "items",
        "line": 6
      },
      {
        "kind": "function",
        "name": "Radial.AddRadialItem",
        "args": "items, parentMenuId",
        "line": 19
      },
      {
        "kind": "function",
        "name": "Radial.RemoveRadialItem",
        "args": "id, parentMenuId",
        "line": 22
      },
      {
        "kind": "function",
        "name": "Radial.ClearRadialItems",
        "args": "",
        "line": 26
      },
      {
        "kind": "function",
        "name": "Radial.RegisterRadial",
        "args": "data",
        "line": 30
      },
      {
        "kind": "function",
        "name": "Radial.HideRadial",
        "args": "",
        "line": 35
      },
      {
        "kind": "function",
        "name": "Radial.DisableRadial",
        "args": "state",
        "line": 36
      },
      {
        "kind": "function",
        "name": "Radial.GetCurrentRadialId",
        "args": "",
        "line": 37
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:radial:select",
        "args": "target, menuId, itemId, index",
        "line": 39
      }
    ]
  },
  {
    "path": "interface/client/modules/textui.lua",
    "context": "client",
    "module": "interface",
    "lines": 54,
    "records": [
      {
        "kind": "function",
        "name": "TextUI.ShowTextUI",
        "args": "text, options",
        "line": 11
      },
      {
        "kind": "function",
        "name": "TextUI.HideTextUI",
        "args": "",
        "line": 30
      },
      {
        "kind": "function",
        "name": "TextUI.Refresh",
        "args": "",
        "line": 41
      },
      {
        "kind": "function",
        "name": "TextUI.IsTextUIOpen",
        "args": "",
        "line": 48
      }
    ]
  },
  {
    "path": "interface/client/renderer.lua",
    "context": "client",
    "module": "interface",
    "lines": 35,
    "records": [
      {
        "kind": "function",
        "name": "Renderer.setFocus",
        "args": "keepInput",
        "line": 4
      },
      {
        "kind": "function",
        "name": "Renderer.ensureFocus",
        "args": "keepInput",
        "line": 9
      },
      {
        "kind": "function",
        "name": "Renderer.clearFocus",
        "args": "",
        "line": 14
      },
      {
        "kind": "function",
        "name": "Renderer.resetFocus",
        "args": "",
        "line": 18
      },
      {
        "kind": "function",
        "name": "Renderer.send",
        "args": "action, data",
        "line": 22
      },
      {
        "kind": "function",
        "name": "Renderer.claim",
        "args": "",
        "line": 30
      }
    ]
  },
  {
    "path": "interface/client/ui.lua",
    "context": "client",
    "module": "interface",
    "lines": 721,
    "records": [
      {
        "kind": "local-function",
        "name": "clone",
        "args": "value",
        "line": 62
      },
      {
        "kind": "local-function",
        "name": "getGlobalConfig",
        "args": "",
        "line": 69
      },
      {
        "kind": "local-function",
        "name": "saveGlobalConfig",
        "args": "config",
        "line": 73
      },
      {
        "kind": "function",
        "name": "UI.GetVisualConfig",
        "args": "",
        "line": 84
      },
      {
        "kind": "local-function",
        "name": "menuPosition",
        "args": "",
        "line": 92
      },
      {
        "kind": "function",
        "name": "UI.RegisterMenu",
        "args": "data, callback",
        "line": 97
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 122
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 123
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 145
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 146
      },
      {
        "kind": "function",
        "name": "UI.ShowMenu",
        "args": "id, startIndex",
        "line": 165
      },
      {
        "kind": "function",
        "name": "UI.HideMenu",
        "args": "onExit",
        "line": 178
      },
      {
        "kind": "function",
        "name": "UI.GetOpenMenu",
        "args": "",
        "line": 189
      },
      {
        "kind": "local-function",
        "name": "openPaletteEditor",
        "args": "",
        "line": 199
      },
      {
        "kind": "local-function",
        "name": "layoutOptions",
        "args": "values",
        "line": 225
      },
      {
        "kind": "local-function",
        "name": "openLayoutEditor",
        "args": "",
        "line": 231
      },
      {
        "kind": "local-function",
        "name": "openTargetEditor",
        "args": "",
        "line": 255
      },
      {
        "kind": "local-function",
        "name": "openInteractEditor",
        "args": "",
        "line": 333
      },
      {
        "kind": "local-function",
        "name": "openBubbleEditor",
        "args": "",
        "line": 380
      },
      {
        "kind": "function",
        "name": "UI.OpenVisualAdminMenu",
        "args": "parentMenu",
        "line": 407
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 434
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 435
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:context:select",
        "args": "owner, id, index",
        "line": 454
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:context:close",
        "args": "owner",
        "line": 459
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:context:back",
        "args": "owner",
        "line": 464
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:context:openExternal",
        "args": "owner, id",
        "line": 472
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:alert:result",
        "args": "owner, result",
        "line": 477
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:alert:close",
        "args": "owner",
        "line": 482
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:input:submit",
        "args": "owner, values",
        "line": 487
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:ui:input:close",
        "args": "owner",
        "line": 492
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:ui:openAdmin",
        "args": "",
        "line": 498
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 515
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 516
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 523
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 524
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 535
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 536
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 555
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 556
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 690
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 691
      },
      {
        "kind": "table-function",
        "name": "onSelect",
        "args": "",
        "line": 708
      },
      {
        "kind": "assigned-function",
        "name": "onSelect",
        "args": "",
        "line": 709
      }
    ]
  },
  {
    "path": "interface/server/config.lua",
    "context": "server",
    "module": "interface",
    "lines": 293,
    "records": [
      {
        "kind": "local-function",
        "name": "clone",
        "args": "value",
        "line": 126
      },
      {
        "kind": "local-function",
        "name": "validColor",
        "args": "value",
        "line": 133
      },
      {
        "kind": "local-function",
        "name": "sanitize",
        "args": "input",
        "line": 137
      },
      {
        "kind": "local-function",
        "name": "loadConfig",
        "args": "",
        "line": 226
      },
      {
        "kind": "local-function",
        "name": "saveConfig",
        "args": "config",
        "line": 234
      },
      {
        "kind": "local-function",
        "name": "isAceAllowed",
        "args": "source, aceName",
        "line": 241
      },
      {
        "kind": "local-function",
        "name": "isAdmin",
        "args": "source",
        "line": 245
      },
      {
        "kind": "callback-register",
        "name": "pr_bridge:ui:isAdmin",
        "args": "source",
        "line": 258
      },
      {
        "kind": "callback-register",
        "name": "pr_bridge:ui:saveConfig",
        "args": "source, input",
        "line": 262
      },
      {
        "kind": "callback-register",
        "name": "pr_bridge:ui:resetConfig",
        "args": "source",
        "line": 273
      }
    ]
  },
  {
    "path": "shared/progression.lua",
    "context": "shared",
    "module": "shared",
    "lines": 124,
    "records": [
      {
        "kind": "function",
        "name": "P.number",
        "args": "value",
        "line": 7
      },
      {
        "kind": "function",
        "name": "P.round",
        "args": "value",
        "line": 13
      },
      {
        "kind": "function",
        "name": "P.copy",
        "args": "value",
        "line": 17
      },
      {
        "kind": "function",
        "name": "P.session",
        "args": "values, token, now",
        "line": 24
      },
      {
        "kind": "function",
        "name": "P.change",
        "args": "session, name, delta, maximum",
        "line": 32
      },
      {
        "kind": "function",
        "name": "P.packet",
        "args": "session",
        "line": 43
      },
      {
        "kind": "function",
        "name": "P.accept",
        "args": "session, packet, resolve, now",
        "line": 49
      },
      {
        "kind": "function",
        "name": "P.client",
        "args": "",
        "line": 84
      },
      {
        "kind": "function",
        "name": "P.receive",
        "args": "client, packet, maximum",
        "line": 88
      },
      {
        "kind": "function",
        "name": "P.clientChange",
        "args": "client, name, delta, maximum",
        "line": 104
      },
      {
        "kind": "function",
        "name": "P.snapshot",
        "args": "client",
        "line": 120
      }
    ]
  }
];
