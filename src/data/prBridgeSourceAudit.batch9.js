export const PR_BRIDGE_SOURCE_AUDIT_BATCH_9 = [
  {
    "path": "bridge/notifications/ox_lib/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 15,
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
    "path": "bridge/notifications/pnotify/client.lua",
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
    "path": "bridge/notifications/pnotify/server.lua",
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
    "path": "bridge/notifications/qb/client.lua",
    "context": "client",
    "module": "notification",
    "lines": 21,
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
    "path": "bridge/notifications/qb/server.lua",
    "context": "server",
    "module": "notification",
    "lines": 20,
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
    "path": "bridge/phones/default/client.lua",
    "context": "client",
    "module": "phone",
    "lines": 35,
    "records": [
      {
        "kind": "function",
        "name": "phone.InPhone",
        "args": "",
        "line": 3
      },
      {
        "kind": "function",
        "name": "phone.SetCanOpenPhone",
        "args": "bool",
        "line": 7
      },
      {
        "kind": "function",
        "name": "phone.ClosePhone",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "phone.IsInCamera",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "phone.CreateCall",
        "args": "name, number, image, anonymous",
        "line": 17
      },
      {
        "kind": "function",
        "name": "phone.GetCall",
        "args": "",
        "line": 20
      },
      {
        "kind": "function",
        "name": "phone.EndCall",
        "args": "",
        "line": 24
      },
      {
        "kind": "function",
        "name": "phone.IsInCall",
        "args": "",
        "line": 27
      },
      {
        "kind": "function",
        "name": "phone.SetSOS",
        "args": "bool",
        "line": 31
      }
    ]
  },
  {
    "path": "bridge/phones/default/server.lua",
    "context": "server",
    "module": "phone",
    "lines": 36,
    "records": [
      {
        "kind": "function",
        "name": "phone.GetPhoneNames",
        "args": "",
        "line": 3
      },
      {
        "kind": "function",
        "name": "phone.GetPhoneNumberFromIdentifier",
        "args": "identifier, mustBePhoneOwner",
        "line": 7
      },
      {
        "kind": "function",
        "name": "phone.GetMetaFromSource",
        "args": "source",
        "line": 11
      },
      {
        "kind": "function",
        "name": "phone.SendSOSMessage",
        "args": "phoneNumber, job, coords, messageType",
        "line": 15
      },
      {
        "kind": "function",
        "name": "phone.SendNewMessageFromApp",
        "args": "source, phoneNumber, message, appName",
        "line": 18
      },
      {
        "kind": "function",
        "name": "phone.HasEmailAccount",
        "args": "source",
        "line": 21
      },
      {
        "kind": "function",
        "name": "phone.SetInJobDuty",
        "args": "source",
        "line": 25
      },
      {
        "kind": "function",
        "name": "phone.RemoveFromJobDuty",
        "args": "source",
        "line": 28
      },
      {
        "kind": "function",
        "name": "phone.IsInJobDuty",
        "args": "source",
        "line": 31
      }
    ]
  },
  {
    "path": "bridge/phones/lb_phone/client.lua",
    "context": "client",
    "module": "phone",
    "lines": 59,
    "records": [
      {
        "kind": "function",
        "name": "phone.InPhone",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "phone.SetCanOpenPhone",
        "args": "bool",
        "line": 9
      },
      {
        "kind": "function",
        "name": "phone.ClosePhone",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "phone.IsInCamera",
        "args": "",
        "line": 17
      },
      {
        "kind": "function",
        "name": "phone.CreateCall",
        "args": "name, number, image, anonymous",
        "line": 21
      },
      {
        "kind": "function",
        "name": "phone.GetCall",
        "args": "",
        "line": 28
      },
      {
        "kind": "function",
        "name": "phone.EndCall",
        "args": "",
        "line": 33
      },
      {
        "kind": "function",
        "name": "phone.IsInCall",
        "args": "",
        "line": 43
      },
      {
        "kind": "function",
        "name": "phone.SetSOS",
        "args": "bool",
        "line": 47
      },
      {
        "kind": "net-event",
        "name": "lb-phone:phoneToggled",
        "args": "open",
        "line": 52
      }
    ]
  },
  {
    "path": "bridge/phones/lb_phone/server.lua",
    "context": "server",
    "module": "phone",
    "lines": 81,
    "records": [
      {
        "kind": "function",
        "name": "phone.GetPhoneNames",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "phone.GetPhoneNumberFromIdentifier",
        "args": "source, mustBePhoneOwner",
        "line": 20
      },
      {
        "kind": "function",
        "name": "phone.GetMetaFromSource",
        "args": "phoneNumber",
        "line": 27
      },
      {
        "kind": "function",
        "name": "phone.SendSOSMessage",
        "args": "source, job, coords, messageType",
        "line": 40
      },
      {
        "kind": "function",
        "name": "phone.SendNewMessageFromApp",
        "args": "target, phoneNumber, message, appName",
        "line": 53
      },
      {
        "kind": "function",
        "name": "phone.HasEmailAccount",
        "args": "phoneNumber",
        "line": 64
      },
      {
        "kind": "function",
        "name": "phone.SetInJobDuty",
        "args": "source",
        "line": 70
      },
      {
        "kind": "function",
        "name": "phone.RemoveFromJobDuty",
        "args": "source",
        "line": 73
      },
      {
        "kind": "function",
        "name": "phone.IsInJobDuty",
        "args": "source",
        "line": 76
      }
    ]
  },
  {
    "path": "bridge/phones/okok_phone/client.lua",
    "context": "client",
    "module": "phone",
    "lines": 54,
    "records": [
      {
        "kind": "function",
        "name": "phone.InPhone",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "phone.SetCanOpenPhone",
        "args": "bool",
        "line": 9
      },
      {
        "kind": "function",
        "name": "phone.ClosePhone",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "phone.IsInCamera",
        "args": "",
        "line": 17
      },
      {
        "kind": "function",
        "name": "phone.CreateCall",
        "args": "name, number, image, anonymous",
        "line": 23
      },
      {
        "kind": "function",
        "name": "phone.GetCall",
        "args": "",
        "line": 28
      },
      {
        "kind": "function",
        "name": "phone.EndCall",
        "args": "",
        "line": 32
      },
      {
        "kind": "function",
        "name": "phone.IsInCall",
        "args": "",
        "line": 36
      },
      {
        "kind": "function",
        "name": "phone.SetSOS",
        "args": "bool",
        "line": 40
      }
    ]
  },
  {
    "path": "bridge/phones/okok_phone/server.lua",
    "context": "server",
    "module": "phone",
    "lines": 79,
    "records": [
      {
        "kind": "function",
        "name": "phone.GetPhoneNames",
        "args": "",
        "line": 9
      },
      {
        "kind": "function",
        "name": "phone.GetPhoneNumberFromIdentifier",
        "args": "source, mustBePhoneOwner",
        "line": 18
      },
      {
        "kind": "function",
        "name": "phone.GetMetaFromSource",
        "args": "source",
        "line": 30
      },
      {
        "kind": "function",
        "name": "phone.SendSOSMessage",
        "args": "source, job, coords, messageType",
        "line": 41
      },
      {
        "kind": "function",
        "name": "phone.SendNewMessageFromApp",
        "args": "source, phoneNumber, message, appName",
        "line": 50
      },
      {
        "kind": "function",
        "name": "phone.HasEmailAccount",
        "args": "source",
        "line": 62
      },
      {
        "kind": "function",
        "name": "phone.SetInJobDuty",
        "args": "source",
        "line": 68
      },
      {
        "kind": "function",
        "name": "phone.RemoveFromJobDuty",
        "args": "source",
        "line": 71
      },
      {
        "kind": "function",
        "name": "phone.IsInJobDuty",
        "args": "source",
        "line": 74
      }
    ]
  },
  {
    "path": "bridge/phones/qs_smartphone/client.lua",
    "context": "client",
    "module": "phone",
    "lines": 46,
    "records": [
      {
        "kind": "function",
        "name": "phone.InPhone",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "phone.SetCanOpenPhone",
        "args": "bool",
        "line": 9
      },
      {
        "kind": "function",
        "name": "phone.ClosePhone",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "phone.IsInCamera",
        "args": "",
        "line": 17
      },
      {
        "kind": "function",
        "name": "phone.CreateCall",
        "args": "name, number, image, anonymous",
        "line": 21
      },
      {
        "kind": "function",
        "name": "phone.GetCall",
        "args": "",
        "line": 25
      },
      {
        "kind": "function",
        "name": "phone.EndCall",
        "args": "",
        "line": 29
      },
      {
        "kind": "function",
        "name": "phone.IsInCall",
        "args": "",
        "line": 33
      },
      {
        "kind": "function",
        "name": "phone.SetSOS",
        "args": "bool",
        "line": 37
      },
      {
        "kind": "event-handler",
        "name": "qs-smartphone-pro:handleClosePhone",
        "args": "meta",
        "line": 41
      }
    ]
  },
  {
    "path": "bridge/phones/qs_smartphone/server.lua",
    "context": "server",
    "module": "phone",
    "lines": 76,
    "records": [
      {
        "kind": "function",
        "name": "phone.GetPhoneNames",
        "args": "",
        "line": 9
      },
      {
        "kind": "function",
        "name": "phone.GetPhoneNumberFromIdentifier",
        "args": "identifier, mustBePhoneOwner",
        "line": 17
      },
      {
        "kind": "function",
        "name": "phone.GetMetaFromSource",
        "args": "source",
        "line": 24
      },
      {
        "kind": "function",
        "name": "phone.SendSOSMessage",
        "args": "phoneNumber, job, coords, messageType",
        "line": 33
      },
      {
        "kind": "function",
        "name": "phone.SendNewMessageFromApp",
        "args": "source, phoneNumber, message, appName",
        "line": 45
      },
      {
        "kind": "function",
        "name": "phone.HasEmailAccount",
        "args": "source",
        "line": 52
      },
      {
        "kind": "function",
        "name": "phone.SetInJobDuty",
        "args": "source",
        "line": 58
      },
      {
        "kind": "function",
        "name": "phone.RemoveFromJobDuty",
        "args": "source",
        "line": 64
      },
      {
        "kind": "function",
        "name": "phone.IsInJobDuty",
        "args": "source",
        "line": 71
      }
    ]
  },
  {
    "path": "bridge/phones/y_phone/client.lua",
    "context": "client",
    "module": "phone",
    "lines": 51,
    "records": [
      {
        "kind": "function",
        "name": "phone.InPhone",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "phone.SetCanOpenPhone",
        "args": "bool",
        "line": 9
      },
      {
        "kind": "function",
        "name": "phone.ClosePhone",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "phone.IsInCamera",
        "args": "",
        "line": 17
      },
      {
        "kind": "function",
        "name": "phone.CreateCall",
        "args": "name, number, image, anonymous",
        "line": 23
      },
      {
        "kind": "function",
        "name": "phone.GetCall",
        "args": "",
        "line": 27
      },
      {
        "kind": "function",
        "name": "phone.EndCall",
        "args": "",
        "line": 32
      },
      {
        "kind": "function",
        "name": "phone.IsInCall",
        "args": "",
        "line": 36
      },
      {
        "kind": "function",
        "name": "phone.SetSOS",
        "args": "bool",
        "line": 41
      }
    ]
  },
  {
    "path": "bridge/phones/y_phone/server.lua",
    "context": "server",
    "module": "phone",
    "lines": 94,
    "records": [
      {
        "kind": "function",
        "name": "phone.GetPhoneNames",
        "args": "",
        "line": 9
      },
      {
        "kind": "function",
        "name": "phone.GetPhoneNumberFromIdentifier",
        "args": "source, mustBePhoneOwner",
        "line": 17
      },
      {
        "kind": "function",
        "name": "phone.GetMetaFromSource",
        "args": "source",
        "line": 30
      },
      {
        "kind": "function",
        "name": "phone.SendSOSMessage",
        "args": "source, job, coords, messageType",
        "line": 45
      },
      {
        "kind": "function",
        "name": "phone.SendNewMessageFromApp",
        "args": "target, phoneNumber, message, appName",
        "line": 60
      },
      {
        "kind": "function",
        "name": "phone.HasEmailAccount",
        "args": "source",
        "line": 77
      },
      {
        "kind": "function",
        "name": "phone.SetInJobDuty",
        "args": "source",
        "line": 83
      },
      {
        "kind": "function",
        "name": "phone.RemoveFromJobDuty",
        "args": "source",
        "line": 86
      },
      {
        "kind": "function",
        "name": "phone.IsInJobDuty",
        "args": "source",
        "line": 89
      }
    ]
  },
  {
    "path": "bridge/player_lifecycle.lua",
    "context": "mixed",
    "module": "player_lifecycle",
    "lines": 38,
    "records": [
      {
        "kind": "event-handler",
        "name": "QBCore:Server:PlayerLoaded",
        "args": "player",
        "line": 5
      },
      {
        "kind": "event-handler",
        "name": "QBCore:Server:OnPlayerUnload",
        "args": "playerSource",
        "line": 9
      },
      {
        "kind": "event-handler",
        "name": "esx:playerLoaded",
        "args": "playerSource",
        "line": 13
      },
      {
        "kind": "event-handler",
        "name": "esx:playerLogout",
        "args": "playerSource",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "loaded",
        "args": "",
        "line": 17
      },
      {
        "kind": "local-function",
        "name": "unloaded",
        "args": "",
        "line": 18
      },
      {
        "kind": "local-function",
        "name": "inventoryChanged",
        "args": "",
        "line": 19
      }
    ]
  },
  {
    "path": "bridge/progressbar/default/client.lua",
    "context": "client",
    "module": "progressbar",
    "lines": 12,
    "records": [
      {
        "kind": "function",
        "name": "progress.doProgressbar",
        "args": "",
        "line": 3
      },
      {
        "kind": "function",
        "name": "progress.doProgressCircle",
        "args": "",
        "line": 7
      }
    ]
  },
  {
    "path": "bridge/progressbar/default/server.lua",
    "context": "server",
    "module": "progressbar",
    "lines": 2,
    "records": []
  }
];
