export const PR_BRIDGE_SOURCE_AUDIT_BATCH_13 = [
  {
    "path": "bridge/vehicle_key/pr_carkeys/client.lua",
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
    "path": "bridge/vehicle_key/pr_carkeys/server.lua",
    "context": "server",
    "module": "vehicle_key",
    "lines": 34,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.GiveTempKeys",
        "args": "source, plate",
        "line": 9
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveTempKeys",
        "args": "source, plate",
        "line": 13
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
        "line": 21
      },
      {
        "kind": "function",
        "name": "vehicle_key.HaveTemporaryKey",
        "args": "source, plate",
        "line": 25
      },
      {
        "kind": "function",
        "name": "vehicle_key.HavePermanentKey",
        "args": "source, plate",
        "line": 29
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/qb-vehiclekeys/client.lua",
    "context": "client",
    "module": "vehicle_key",
    "lines": 36,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeys",
        "args": "vehicle, plate",
        "line": 8
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeys",
        "args": "vehicle, plate",
        "line": 21
      },
      {
        "kind": "function",
        "name": "vehicle_key.GetResourceName",
        "args": "",
        "line": 31
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/qb-vehiclekeys/server.lua",
    "context": "server",
    "module": "vehicle_key",
    "lines": 7,
    "records": []
  },
  {
    "path": "bridge/vehicle_key/qbx_vehiclekeys/client.lua",
    "context": "client",
    "module": "vehicle_key",
    "lines": 36,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeys",
        "args": "vehicle, plate",
        "line": 8
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeys",
        "args": "vehicle, plate",
        "line": 21
      },
      {
        "kind": "function",
        "name": "vehicle_key.GetResourceName",
        "args": "",
        "line": 31
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/qbx_vehiclekeys/server.lua",
    "context": "server",
    "module": "vehicle_key",
    "lines": 7,
    "records": []
  },
  {
    "path": "bridge/vehicle_key/wasabi_carlock/client.lua",
    "context": "client",
    "module": "vehicle_key",
    "lines": 59,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.ToggleLock",
        "args": "",
        "line": 7
      },
      {
        "kind": "function",
        "name": "vehicle_key.HasKey",
        "args": "plate",
        "line": 11
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKey",
        "args": "plate",
        "line": 15
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKey",
        "args": "plate",
        "line": 19
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeyMenu",
        "args": "plate",
        "line": 23
      },
      {
        "kind": "function",
        "name": "vehicle_key.GetAllKeys",
        "args": "target",
        "line": 27
      },
      {
        "kind": "function",
        "name": "vehicle_key.ManageKeysMenu",
        "args": "",
        "line": 31
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKeys",
        "args": "vehicle, plate",
        "line": 36
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKeys",
        "args": "vehicle, plate",
        "line": 45
      },
      {
        "kind": "function",
        "name": "vehicle_key.GetResourceName",
        "args": "",
        "line": 54
      }
    ]
  },
  {
    "path": "bridge/vehicle_key/wasabi_carlock/server.lua",
    "context": "server",
    "module": "vehicle_key",
    "lines": 31,
    "records": [
      {
        "kind": "function",
        "name": "vehicle_key.HasKey",
        "args": "source, plate",
        "line": 10
      },
      {
        "kind": "function",
        "name": "vehicle_key.GiveKey",
        "args": "source, plate",
        "line": 14
      },
      {
        "kind": "function",
        "name": "vehicle_key.RemoveKey",
        "args": "source, plate",
        "line": 18
      },
      {
        "kind": "function",
        "name": "vehicle_key.GetAllKeys",
        "args": "source",
        "line": 22
      }
    ]
  },
  {
    "path": "bridge/version.lua",
    "context": "mixed",
    "module": "version",
    "lines": 17,
    "records": []
  },
  {
    "path": "bridge/weather/cd_easytime/client.lua",
    "context": "client",
    "module": "weather",
    "lines": 16,
    "records": [
      {
        "kind": "function",
        "name": "weather.ToggleSync",
        "args": "toggle",
        "line": 7
      },
      {
        "kind": "function",
        "name": "weather.GetResourceName",
        "args": "",
        "line": 11
      }
    ]
  },
  {
    "path": "bridge/weather/cd_easytime/server.lua",
    "context": "server",
    "module": "weather",
    "lines": 7,
    "records": []
  },
  {
    "path": "bridge/weather/default/client.lua",
    "context": "client",
    "module": "weather",
    "lines": 31,
    "records": [
      {
        "kind": "function",
        "name": "weather.ToggleSync",
        "args": "toggle",
        "line": 5
      },
      {
        "kind": "function",
        "name": "weather.GetResourceName",
        "args": "",
        "line": 26
      }
    ]
  },
  {
    "path": "bridge/weather/default/server.lua",
    "context": "server",
    "module": "weather",
    "lines": 4,
    "records": []
  },
  {
    "path": "bridge/weather/qb/client.lua",
    "context": "client",
    "module": "weather",
    "lines": 20,
    "records": [
      {
        "kind": "function",
        "name": "weather.ToggleSync",
        "args": "toggle",
        "line": 7
      },
      {
        "kind": "function",
        "name": "weather.GetResourceName",
        "args": "",
        "line": 15
      }
    ]
  },
  {
    "path": "bridge/weather/qb/server.lua",
    "context": "server",
    "module": "weather",
    "lines": 6,
    "records": []
  },
  {
    "path": "bridge/weather/renewed/client.lua",
    "context": "client",
    "module": "weather",
    "lines": 16,
    "records": [
      {
        "kind": "function",
        "name": "weather.ToggleSync",
        "args": "toggle",
        "line": 7
      },
      {
        "kind": "function",
        "name": "weather.GetResourceName",
        "args": "",
        "line": 11
      }
    ]
  },
  {
    "path": "bridge/weather/renewed/server.lua",
    "context": "server",
    "module": "weather",
    "lines": 269,
    "records": [
      {
        "kind": "local-function",
        "name": "isStarted",
        "args": "",
        "line": 5
      },
      {
        "kind": "local-function",
        "name": "callExport",
        "args": "name, ...",
        "line": 9
      },
      {
        "kind": "local-function",
        "name": "normalizeIndex",
        "args": "index",
        "line": 20
      },
      {
        "kind": "local-function",
        "name": "normalizeDuration",
        "args": "duration",
        "line": 26
      },
      {
        "kind": "local-function",
        "name": "normalizeHour",
        "args": "value",
        "line": 33
      },
      {
        "kind": "local-function",
        "name": "normalizeMinute",
        "args": "value",
        "line": 40
      },
      {
        "kind": "local-function",
        "name": "boolValue",
        "args": "value",
        "line": 47
      },
      {
        "kind": "local-function",
        "name": "getWeatherList",
        "args": "",
        "line": 54
      },
      {
        "kind": "local-function",
        "name": "setCurrentWeather",
        "args": "weatherType, duration",
        "line": 60
      },
      {
        "kind": "local-function",
        "name": "resolveIndex",
        "args": "index, match",
        "line": 69
      },
      {
        "kind": "function",
        "name": "weather.GetResourceName",
        "args": "",
        "line": 93
      },
      {
        "kind": "function",
        "name": "weather.IsStarted",
        "args": "",
        "line": 97
      },
      {
        "kind": "local-function",
        "name": "getWeeklyForecast",
        "args": "",
        "line": 101
      },
      {
        "kind": "function",
        "name": "weather.GetWeatherList",
        "args": "",
        "line": 107
      },
      {
        "kind": "function",
        "name": "weather.GetWeeklyForecast",
        "args": "",
        "line": 111
      },
      {
        "kind": "function",
        "name": "weather.GetRegionalWeather",
        "args": "regionId",
        "line": 115
      },
      {
        "kind": "function",
        "name": "weather.GetState",
        "args": "",
        "line": 121
      },
      {
        "kind": "function",
        "name": "weather.SetWeatherType",
        "args": "index, weatherType, match",
        "line": 136
      },
      {
        "kind": "function",
        "name": "weather.SetEventTime",
        "args": "index, duration, match",
        "line": 165
      },
      {
        "kind": "function",
        "name": "weather.AddWeatherEvent",
        "args": "weatherType, duration, index",
        "line": 201
      },
      {
        "kind": "function",
        "name": "weather.RemoveWeatherEvent",
        "args": "index, match",
        "line": 209
      },
      {
        "kind": "function",
        "name": "weather.SetTime",
        "args": "hour, minute",
        "line": 220
      },
      {
        "kind": "function",
        "name": "weather.SetTimeScale",
        "args": "scale",
        "line": 229
      },
      {
        "kind": "function",
        "name": "weather.SetFreezeTime",
        "args": "enabled",
        "line": 241
      }
    ]
  },
  {
    "path": "fxmanifest.lua",
    "context": "mixed",
    "module": "fxmanifest",
    "lines": 62,
    "records": []
  }
];
