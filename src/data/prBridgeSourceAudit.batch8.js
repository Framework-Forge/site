export const PR_BRIDGE_SOURCE_AUDIT_BATCH_8 = [
  {
    "path": "bridge/minigames/ox_lib/client.lua",
    "context": "client",
    "module": "minigame",
    "lines": 20,
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
    "path": "bridge/minigames/ox_lib/server.lua",
    "context": "server",
    "module": "minigame",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/notifications/bubble_client.lua",
    "context": "client",
    "module": "notification",
    "lines": 196,
    "records": [
      {
        "kind": "local-function",
        "name": "clamp",
        "args": "value, minimum, maximum",
        "line": 5
      },
      {
        "kind": "local-function",
        "name": "shallowCopy",
        "args": "value",
        "line": 9
      },
      {
        "kind": "local-function",
        "name": "validColor",
        "args": "value, fallback",
        "line": 15
      },
      {
        "kind": "local-function",
        "name": "resolveEntity",
        "args": "data",
        "line": 20
      },
      {
        "kind": "local-function",
        "name": "sendItems",
        "args": "items",
        "line": 49
      },
      {
        "kind": "local-function",
        "name": "removeBubble",
        "args": "id",
        "line": 53
      },
      {
        "kind": "local-function",
        "name": "runLoop",
        "args": "",
        "line": 59
      },
      {
        "kind": "local-function",
        "name": "showBubble",
        "args": "owner, input",
        "line": 126
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:notifyBubble:show",
        "args": "owner, data",
        "line": 174
      },
      {
        "kind": "event-handler",
        "name": "pr_bridge:notifyBubble:hide",
        "args": "id",
        "line": 178
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:notifyBubble",
        "args": "data",
        "line": 182
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:notifyBubble:hideNet",
        "args": "id",
        "line": 186
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resource",
        "line": 190
      }
    ]
  },
  {
    "path": "bridge/notifications/bubble_server.lua",
    "context": "server",
    "module": "notification",
    "lines": 66,
    "records": [
      {
        "kind": "local-function",
        "name": "clamp",
        "args": "value, minimum, maximum",
        "line": 4
      },
      {
        "kind": "local-function",
        "name": "cleanText",
        "args": "value, maximum",
        "line": 8
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:notifyBubble:broadcast",
        "args": "input",
        "line": 13
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:notifyBubble:hideBroadcast",
        "args": "id",
        "line": 49
      },
      {
        "kind": "event-handler",
        "name": "playerDropped",
        "args": "",
        "line": 57
      }
    ]
  },
  {
    "path": "bridge/notifications/cl_events.lua",
    "context": "mixed",
    "module": "notification",
    "lines": 28,
    "records": [
      {
        "kind": "assigned-function",
        "name": "Bridge.notify.NotifyPlayer",
        "args": "source, data",
        "line": 8
      },
      {
        "kind": "assigned-function",
        "name": "Bridge.notify.NotifyAll",
        "args": "data",
        "line": 15
      },
      {
        "kind": "net-event",
        "name": "bridge:notify",
        "args": "data",
        "line": 20
      }
    ]
  },
  {
    "path": "bridge/notifications/codem_notification/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/codem_notification/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "src,data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/default/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 13,
    "records": [
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "data",
        "line": 6
      }
    ]
  },
  {
    "path": "bridge/notifications/default/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 19,
    "records": [
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "source, data",
        "line": 3
      },
      {
        "kind": "function",
        "name": "notifications.NotifyPlayer",
        "args": "source, data",
        "line": 9
      },
      {
        "kind": "function",
        "name": "notifications.NotifyAll",
        "args": "data",
        "line": 13
      }
    ]
  },
  {
    "path": "bridge/notifications/esx/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 19,
    "records": [
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "data",
        "line": 10
      }
    ]
  },
  {
    "path": "bridge/notifications/esx/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 18,
    "records": [
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "src, data",
        "line": 10
      }
    ]
  },
  {
    "path": "bridge/notifications/hud17/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/hud17/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "src,data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/mythic/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/mythic/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "src,data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/okok/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/okok/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "src,data",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/notifications/ox_lib/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "notifications.Notify",
        "args": "data",
        "line": 7
      }
    ]
  }
];
