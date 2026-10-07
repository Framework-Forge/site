export const PR_BRIDGE_SOURCE_AUDIT_BATCH_4 = [
  {
    "path": "bridge/frameworks/custom/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 117,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetResourceName",
        "args": "",
        "line": 7
      },
      {
        "kind": "function",
        "name": "framework.getPlayerFromId",
        "args": "source",
        "line": 10
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerFromIdentifier",
        "args": "identifier",
        "line": 13
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSourceFromPlayer",
        "args": "player",
        "line": 14
      },
      {
        "kind": "function",
        "name": "framework.GetIdentifier",
        "args": "source",
        "line": 17
      },
      {
        "kind": "function",
        "name": "framework.getPlayerName",
        "args": "source",
        "line": 19
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerName",
        "args": "source",
        "line": 20
      },
      {
        "kind": "function",
        "name": "framework.getPlayerDOB",
        "args": "source",
        "line": 21
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSex",
        "args": "source",
        "line": 23
      },
      {
        "kind": "function",
        "name": "framework.getPlayerHeight",
        "args": "source",
        "line": 25
      },
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source, withHeading",
        "line": 26
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "source",
        "line": 34
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "source, key",
        "line": 35
      },
      {
        "kind": "function",
        "name": "framework.setPlayerMetadata",
        "args": "source, key, value",
        "line": 37
      },
      {
        "kind": "function",
        "name": "framework.getPlayerGroup",
        "args": "source",
        "line": 39
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 43
      },
      {
        "kind": "function",
        "name": "framework.getPlayerJob",
        "args": "source, dataType",
        "line": 46
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source, jobName, grade",
        "line": 50
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source, onDuty",
        "line": 51
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source, jobName, grade",
        "line": 52
      },
      {
        "kind": "function",
        "name": "framework.GetJobCount",
        "args": "jobName",
        "line": 53
      },
      {
        "kind": "function",
        "name": "framework.GetFrameworkJobs",
        "args": "",
        "line": 54
      },
      {
        "kind": "function",
        "name": "framework.GetFrameworkGangs",
        "args": "",
        "line": 55
      },
      {
        "kind": "function",
        "name": "framework.GetAllPlayers",
        "args": "",
        "line": 56
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMoney",
        "args": "source, account",
        "line": 63
      },
      {
        "kind": "function",
        "name": "framework.addPlayerMoney",
        "args": "source, account, amount, reason",
        "line": 66
      },
      {
        "kind": "function",
        "name": "framework.removePlayerMoney",
        "args": "source, account, amount, reason",
        "line": 69
      },
      {
        "kind": "function",
        "name": "framework.GetJobAccountBalance",
        "args": "account",
        "line": 74
      },
      {
        "kind": "function",
        "name": "framework.AddJobAccountBalance",
        "args": "account, amount, reason",
        "line": 75
      },
      {
        "kind": "function",
        "name": "framework.RemoveJobAccountBalance",
        "args": "account, amount, reason",
        "line": 76
      },
      {
        "kind": "function",
        "name": "framework.addSocietyBalance",
        "args": "account, amount, reason",
        "line": 77
      },
      {
        "kind": "function",
        "name": "framework.removeSocietyBalance",
        "args": "account, amount, reason",
        "line": 78
      },
      {
        "kind": "function",
        "name": "framework.RegisterCallback",
        "args": "name, callback",
        "line": 81
      },
      {
        "kind": "function",
        "name": "framework.RegisterUsableItem",
        "args": "itemName, callback",
        "line": 85
      },
      {
        "kind": "function",
        "name": "framework.AddItem",
        "args": "source, itemName, count, metadata, slot",
        "line": 88
      },
      {
        "kind": "function",
        "name": "framework.RemoveItem",
        "args": "source, itemName, count, metadata, slot",
        "line": 89
      },
      {
        "kind": "function",
        "name": "framework.CanCarryItem",
        "args": "source, itemName, count, metadata",
        "line": 90
      },
      {
        "kind": "function",
        "name": "framework.GetItemCount",
        "args": "source, itemName, metadata, strict",
        "line": 91
      },
      {
        "kind": "function",
        "name": "framework.HasItem",
        "args": "source, itemName, count, metadata, strict",
        "line": 92
      },
      {
        "kind": "function",
        "name": "framework.GetItemData",
        "args": "source, itemName, metadata, slot",
        "line": 93
      },
      {
        "kind": "function",
        "name": "framework.GetItemByName",
        "args": "source, itemName, metadata, slot",
        "line": 94
      },
      {
        "kind": "function",
        "name": "framework.GetItemBySlot",
        "args": "source, slot",
        "line": 95
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerInventory",
        "args": "source",
        "line": 96
      },
      {
        "kind": "function",
        "name": "framework.ClearPlayerInventory",
        "args": "source",
        "line": 97
      },
      {
        "kind": "function",
        "name": "framework.SetMetadata",
        "args": "source, slot, metadata",
        "line": 98
      },
      {
        "kind": "function",
        "name": "framework.GetItemLabel",
        "args": "itemName",
        "line": 99
      },
      {
        "kind": "function",
        "name": "framework.Items",
        "args": "itemName",
        "line": 101
      },
      {
        "kind": "function",
        "name": "framework.GetWeapon",
        "args": "source, name",
        "line": 104
      },
      {
        "kind": "function",
        "name": "framework.CreateWeaponData",
        "args": "source, data, weaponData",
        "line": 105
      },
      {
        "kind": "function",
        "name": "framework.RemoveWeapon",
        "args": "source, data",
        "line": 106
      },
      {
        "kind": "function",
        "name": "framework.AddWeapon",
        "args": "source, data",
        "line": 107
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleOwner",
        "args": "plate",
        "line": 110
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleData",
        "args": "plate",
        "line": 111
      },
      {
        "kind": "function",
        "name": "framework.DeleteOwnedVehicle",
        "args": "plate",
        "line": 112
      },
      {
        "kind": "function",
        "name": "framework.InsertOwnedVehicle",
        "args": "plate, owner, vehicle",
        "line": 113
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerNameByIdentifier",
        "args": "identifier",
        "line": 114
      }
    ]
  },
  {
    "path": "bridge/frameworks/default/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 57,
    "records": [
      {
        "kind": "event-handler",
        "name": "playerSpawned",
        "args": "",
        "line": 4
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "type",
        "line": 24
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 30
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 39
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 43
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName, grade",
        "line": 47
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 52
      }
    ]
  },
  {
    "path": "bridge/frameworks/default/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 18,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source, withHeading",
        "line": 7
      }
    ]
  },
  {
    "path": "bridge/frameworks/esx/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 94,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 19
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "type",
        "line": 26
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 39
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 49
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName, grade",
        "line": 53
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 62
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "meta",
        "line": 70
      },
      {
        "kind": "function",
        "name": "framework.toggleOutfit",
        "args": "wear, outfits",
        "line": 78
      }
    ]
  },
  {
    "path": "bridge/frameworks/esx/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 254,
    "records": [
      {
        "kind": "function",
        "name": "framework.RegisterCallback",
        "args": "name, cb",
        "line": 9
      },
      {
        "kind": "function",
        "name": "framework.GetWeapon",
        "args": "source, name",
        "line": 13
      },
      {
        "kind": "function",
        "name": "framework.GetIdentifier",
        "args": "source",
        "line": 21
      },
      {
        "kind": "function",
        "name": "framework.getPlayerFromId",
        "args": "source",
        "line": 27
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerFromIdentifier",
        "args": "identifier",
        "line": 31
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSourceFromPlayer",
        "args": "Player",
        "line": 35
      },
      {
        "kind": "function",
        "name": "framework.getPlayerName",
        "args": "source",
        "line": 39
      },
      {
        "kind": "function",
        "name": "framework.getPlayerHeight",
        "args": "source",
        "line": 45
      },
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source, withHeading",
        "line": 52
      },
      {
        "kind": "function",
        "name": "framework.getPlayerDOB",
        "args": "source",
        "line": 62
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSex",
        "args": "source",
        "line": 67
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "source",
        "line": 72
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "source",
        "line": 76
      },
      {
        "kind": "function",
        "name": "framework.getPlayerJob",
        "args": "source, dataType",
        "line": 81
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 97
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source, jobName, grade",
        "line": 101
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source, onDuty",
        "line": 113
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source, jobName, grade",
        "line": 125
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMoney",
        "args": "source, moneyWallet",
        "line": 133
      },
      {
        "kind": "function",
        "name": "framework.addPlayerMoney",
        "args": "source, moneyWallet, amount",
        "line": 146
      },
      {
        "kind": "function",
        "name": "framework.removePlayerMoney",
        "args": "source, moneyWallet, amount",
        "line": 158
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "source, meta",
        "line": 170
      },
      {
        "kind": "function",
        "name": "framework.setPlayerMetadata",
        "args": "source, meta, value",
        "line": 176
      },
      {
        "kind": "function",
        "name": "framework.addSocietyBalance",
        "args": "job, amount",
        "line": 182
      },
      {
        "kind": "function",
        "name": "framework.removeSocietyBalance",
        "args": "job, amount",
        "line": 190
      },
      {
        "kind": "function",
        "name": "framework.RegisterUsableItem",
        "args": "item, cb",
        "line": 198
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleOwner",
        "args": "plate",
        "line": 203
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleData",
        "args": "plate",
        "line": 208
      },
      {
        "kind": "function",
        "name": "framework.DeleteOwnedVehicle",
        "args": "plate",
        "line": 219
      },
      {
        "kind": "function",
        "name": "framework.InsertOwnedVehicle",
        "args": "plate, owner, vehicle",
        "line": 225
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerNameByIdentifier",
        "args": "identifier",
        "line": 240
      }
    ]
  },
  {
    "path": "bridge/frameworks/nd/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 84,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "type",
        "line": 22
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 41
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 53
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 57
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName, grade",
        "line": 70
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 79
      }
    ]
  },
  {
    "path": "bridge/frameworks/nd/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 184,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetResourceName",
        "args": "",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.getPlayerFromId",
        "args": "source",
        "line": 12
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerFromIdentifier",
        "args": "identifier",
        "line": 19
      },
      {
        "kind": "function",
        "name": "framework.GetIdentifier",
        "args": "source",
        "line": 27
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSourceFromPlayer",
        "args": "player",
        "line": 34
      },
      {
        "kind": "function",
        "name": "framework.getPlayerName",
        "args": "source",
        "line": 38
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerName",
        "args": "source",
        "line": 43
      },
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source, withHeading",
        "line": 53
      },
      {
        "kind": "function",
        "name": "framework.getPlayerDOB",
        "args": "source",
        "line": 60
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSex",
        "args": "source",
        "line": 66
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 72
      },
      {
        "kind": "function",
        "name": "framework.getPlayerJob",
        "args": "source, dataType",
        "line": 84
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source, jobName, jobGrade",
        "line": 89
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source, onDuty",
        "line": 94
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source, jobName, jobGrade",
        "line": 102
      },
      {
        "kind": "function",
        "name": "framework.GetJobCount",
        "args": "jobName",
        "line": 107
      },
      {
        "kind": "function",
        "name": "framework.GetAllPlayers",
        "args": "",
        "line": 115
      },
      {
        "kind": "function",
        "name": "framework.getPlayerGroup",
        "args": "",
        "line": 119
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "source, key",
        "line": 124
      },
      {
        "kind": "function",
        "name": "framework.setPlayerMetadata",
        "args": "source, key, value",
        "line": 130
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMoney",
        "args": "source, account",
        "line": 139
      },
      {
        "kind": "function",
        "name": "framework.addPlayerMoney",
        "args": "source, account, amount, reason",
        "line": 147
      },
      {
        "kind": "function",
        "name": "framework.removePlayerMoney",
        "args": "source, account, amount, reason",
        "line": 155
      },
      {
        "kind": "function",
        "name": "framework.RegisterUsableItem",
        "args": "",
        "line": 171
      },
      {
        "kind": "event-handler",
        "name": "ND:characterLoaded",
        "args": "character",
        "line": 175
      },
      {
        "kind": "event-handler",
        "name": "ND:characterUnloaded",
        "args": "playerSource",
        "line": 179
      }
    ]
  },
  {
    "path": "bridge/frameworks/ox/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 79,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 21
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "type",
        "line": 28
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 46
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 57
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName, grade",
        "line": 65
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 74
      }
    ]
  },
  {
    "path": "bridge/frameworks/ox/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 138,
    "records": [
      {
        "kind": "function",
        "name": "framework.RegisterCallback",
        "args": "name, cb",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "source",
        "line": 14
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "source",
        "line": 18
      },
      {
        "kind": "function",
        "name": "framework.getPlayerFromId",
        "args": "source",
        "line": 22
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerFromIdentifier",
        "args": "identifier",
        "line": 26
      },
      {
        "kind": "function",
        "name": "framework.GetIdentifier",
        "args": "source",
        "line": 35
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSourceFromPlayer",
        "args": "Player",
        "line": 40
      },
      {
        "kind": "function",
        "name": "framework.getPlayerName",
        "args": "source",
        "line": 44
      },
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source, withHeading",
        "line": 50
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMoney",
        "args": "source, moneyWallet",
        "line": 60
      },
      {
        "kind": "function",
        "name": "framework.addPlayerMoney",
        "args": "source, moneyWallet, amount",
        "line": 71
      },
      {
        "kind": "function",
        "name": "framework.getPlayerJob",
        "args": "source, dataType",
        "line": 79
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 95
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source, jobName, grade",
        "line": 103
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source, onDuty",
        "line": 117
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source, jobName, grade",
        "line": 129
      }
    ]
  },
  {
    "path": "bridge/frameworks/qb/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 107,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 22
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "type",
        "line": 29
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 42
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 53
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName, grade",
        "line": 58
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 69
      },
      {
        "kind": "function",
        "name": "framework.getCharacterName",
        "args": "",
        "line": 76
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "meta",
        "line": 85
      },
      {
        "kind": "function",
        "name": "framework.toggleOutfit",
        "args": "wear, outfits",
        "line": 93
      }
    ]
  },
  {
    "path": "bridge/frameworks/qb/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 354,
    "records": [
      {
        "kind": "function",
        "name": "framework.RegisterCallback",
        "args": "name, cb",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetWeapon",
        "args": "source, name",
        "line": 12
      },
      {
        "kind": "function",
        "name": "framework.GetIdentifier",
        "args": "source",
        "line": 23
      },
      {
        "kind": "function",
        "name": "framework.getPlayerFromId",
        "args": "source",
        "line": 36
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerFromIdentifier",
        "args": "identifier",
        "line": 40
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSourceFromPlayer",
        "args": "Player",
        "line": 44
      },
      {
        "kind": "function",
        "name": "framework.getPlayerName",
        "args": "source",
        "line": 48
      },
      {
        "kind": "function",
        "name": "framework.getPlayerHeight",
        "args": "source",
        "line": 53
      },
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source, withHeading",
        "line": 60
      },
      {
        "kind": "function",
        "name": "framework.getPlayerDOB",
        "args": "source",
        "line": 69
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSex",
        "args": "source",
        "line": 74
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "source, meta",
        "line": 79
      },
      {
        "kind": "function",
        "name": "framework.setPlayerMetadata",
        "args": "source, meta, value",
        "line": 85
      },
      {
        "kind": "function",
        "name": "framework.addSocietyBalance",
        "args": "job, amount",
        "line": 91
      },
      {
        "kind": "function",
        "name": "framework.removeSocietyBalance",
        "args": "job, amount",
        "line": 97
      },
      {
        "kind": "function",
        "name": "framework.RegisterUsableItem",
        "args": "item, cb",
        "line": 103
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "source",
        "line": 107
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "source",
        "line": 111
      },
      {
        "kind": "function",
        "name": "framework.getItemByName",
        "args": "name",
        "line": 116
      },
      {
        "kind": "function",
        "name": "framework.CreateWeaponData",
        "args": "source, data, weaponData",
        "line": 120
      },
      {
        "kind": "function",
        "name": "framework.RemoveWeapon",
        "args": "source, data",
        "line": 125
      },
      {
        "kind": "function",
        "name": "framework.AddWeapon",
        "args": "source, data",
        "line": 131
      },
      {
        "kind": "function",
        "name": "framework.getPlayerGroup",
        "args": "source",
        "line": 137
      },
      {
        "kind": "function",
        "name": "framework.getPlayerJob",
        "args": "source, dataType",
        "line": 154
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 168
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source, jobName, grade",
        "line": 173
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source, onDuty",
        "line": 185
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source, jobName, grade",
        "line": 197
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMoney",
        "args": "source, moneyWallet",
        "line": 207
      },
      {
        "kind": "function",
        "name": "framework.addPlayerMoney",
        "args": "source, moneyWallet, amount",
        "line": 218
      },
      {
        "kind": "function",
        "name": "framework.removePlayerMoney",
        "args": "source, moneyWallet, amount",
        "line": 229
      },
      {
        "kind": "function",
        "name": "framework.InventoryManagement",
        "args": "source, data",
        "line": 240
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleOwner",
        "args": "plate",
        "line": 261
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleData",
        "args": "plate",
        "line": 266
      },
      {
        "kind": "function",
        "name": "framework.DeleteOwnedVehicle",
        "args": "plate",
        "line": 277
      },
      {
        "kind": "local-function",
        "name": "getVehicleFromVehList",
        "args": "hash",
        "line": 287
      },
      {
        "kind": "function",
        "name": "framework.InsertOwnedVehicle",
        "args": "plate, owner, vehicle",
        "line": 296
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerNameByIdentifier",
        "args": "identifier",
        "line": 339
      }
    ]
  },
  {
    "path": "bridge/frameworks/qbx/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 175,
    "records": [
      {
        "kind": "net-event",
        "name": "QBCore:Client:OnPlayerUnload",
        "args": "",
        "line": 12
      },
      {
        "kind": "net-event",
        "name": "QBCore:Player:SetPlayerData",
        "args": "value",
        "line": 18
      },
      {
        "kind": "event-handler",
        "name": "qbx_core:client:statusChanged",
        "args": "status",
        "line": 27
      },
      {
        "kind": "net-event",
        "name": "QBCore:Client:OnJobUpdate",
        "args": "job",
        "line": 36
      },
      {
        "kind": "net-event",
        "name": "QBCore:Client:OnGangUpdate",
        "args": "gang",
        "line": 41
      },
      {
        "kind": "net-event",
        "name": "QBCore:Client:SetDuty",
        "args": "onDuty",
        "line": 46
      },
      {
        "kind": "net-event",
        "name": "qbx_core:client:setGroups",
        "args": "groups",
        "line": 52
      },
      {
        "kind": "net-event",
        "name": "hud:client:OnMoneyChange",
        "args": "type, amount, isMinus",
        "line": 57
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 66
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 82
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "type",
        "line": 89
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 112
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 125
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName, grade",
        "line": 129
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 141
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "meta",
        "line": 151
      },
      {
        "kind": "function",
        "name": "framework.toggleOutfit",
        "args": "wear, outfits",
        "line": 161
      }
    ]
  },
  {
    "path": "bridge/frameworks/qbx/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 409,
    "records": [
      {
        "kind": "function",
        "name": "framework.RegisterCallback",
        "args": "name, cb",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetWeapon",
        "args": "source, name",
        "line": 14
      },
      {
        "kind": "function",
        "name": "framework.GetIdentifier",
        "args": "source",
        "line": 22
      },
      {
        "kind": "function",
        "name": "framework.getPlayerFromId",
        "args": "source",
        "line": 28
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerFromIdentifier",
        "args": "identifier",
        "line": 32
      },
      {
        "kind": "function",
        "name": "framework.GetOfflinePlayer",
        "args": "identifier",
        "line": 36
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSourceFromPlayer",
        "args": "Player",
        "line": 40
      },
      {
        "kind": "function",
        "name": "framework.getPlayerName",
        "args": "source",
        "line": 44
      },
      {
        "kind": "function",
        "name": "framework.getPlayerHeight",
        "args": "source",
        "line": 50
      },
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source, withHeading",
        "line": 57
      },
      {
        "kind": "function",
        "name": "framework.getPlayerDOB",
        "args": "source",
        "line": 67
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSex",
        "args": "source",
        "line": 72
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "source, meta",
        "line": 78
      },
      {
        "kind": "function",
        "name": "framework.setPlayerMetadata",
        "args": "source, meta, value",
        "line": 84
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerStatus",
        "args": "source, status",
        "line": 92
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerStatus",
        "args": "source, status, value",
        "line": 100
      },
      {
        "kind": "function",
        "name": "framework.AddPlayerStatus",
        "args": "source, status, amount",
        "line": 108
      },
      {
        "kind": "function",
        "name": "framework.addSocietyBalance",
        "args": "job, amount",
        "line": 119
      },
      {
        "kind": "function",
        "name": "framework.removeSocietyBalance",
        "args": "job, amount",
        "line": 124
      },
      {
        "kind": "function",
        "name": "framework.RegisterUsableItem",
        "args": "item, cb",
        "line": 129
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "source",
        "line": 133
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "source",
        "line": 137
      },
      {
        "kind": "function",
        "name": "framework.HasPermission",
        "args": "source, permissions",
        "line": 142
      },
      {
        "kind": "function",
        "name": "framework.getItemByName",
        "args": "source, name",
        "line": 150
      },
      {
        "kind": "function",
        "name": "framework.CreateWeaponData",
        "args": "source, data, weaponData",
        "line": 159
      },
      {
        "kind": "function",
        "name": "framework.RemoveWeapon",
        "args": "source, data",
        "line": 164
      },
      {
        "kind": "function",
        "name": "framework.AddWeapon",
        "args": "source, data",
        "line": 170
      },
      {
        "kind": "function",
        "name": "framework.getPlayerGroup",
        "args": "source",
        "line": 176
      },
      {
        "kind": "function",
        "name": "framework.getPlayerJob",
        "args": "source, dataType",
        "line": 182
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 197
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source, jobName, grade",
        "line": 202
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source, onDuty",
        "line": 211
      },
      {
        "kind": "function",
        "name": "framework.AddPlayerToJob",
        "args": "citizenid, jobName, grade",
        "line": 220
      },
      {
        "kind": "function",
        "name": "framework.RemovePlayerFromJob",
        "args": "citizenid, jobName",
        "line": 229
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerPrimaryJob",
        "args": "citizenid, jobName",
        "line": 238
      },
      {
        "kind": "function",
        "name": "framework.AddPlayerToGang",
        "args": "citizenid, gangName, grade",
        "line": 247
      },
      {
        "kind": "function",
        "name": "framework.RemovePlayerFromGang",
        "args": "citizenid, gangName",
        "line": 256
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerPrimaryGang",
        "args": "citizenid, gangName",
        "line": 265
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source, jobName, grade",
        "line": 274
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMoney",
        "args": "source, moneyWallet",
        "line": 293
      },
      {
        "kind": "function",
        "name": "framework.addPlayerMoney",
        "args": "source, moneyWallet, amount, reason",
        "line": 299
      },
      {
        "kind": "function",
        "name": "framework.removePlayerMoney",
        "args": "source, moneyWallet, amount, reason",
        "line": 305
      },
      {
        "kind": "function",
        "name": "framework.InventoryManagement",
        "args": "source, data",
        "line": 311
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleOwner",
        "args": "plate",
        "line": 333
      },
      {
        "kind": "function",
        "name": "framework.GetOwnedVehicleData",
        "args": "plate",
        "line": 338
      },
      {
        "kind": "function",
        "name": "framework.DeleteOwnedVehicle",
        "args": "plate",
        "line": 349
      },
      {
        "kind": "function",
        "name": "framework.InsertOwnedVehicle",
        "args": "plate, owner, vehicle",
        "line": 355
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerNameByIdentifier",
        "args": "identifier",
        "line": 377
      },
      {
        "kind": "function",
        "name": "framework.takeMoney",
        "args": "src, amount, reason",
        "line": 392
      },
      {
        "kind": "function",
        "name": "framework.addMoney",
        "args": "src, amount, account, reason",
        "line": 404
      }
    ]
  },
  {
    "path": "bridge/frameworks/tmc/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 14,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetResourceName",
        "args": "",
        "line": 4
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 6
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 7
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "account",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 9
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName,grade",
        "line": 11
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "key",
        "line": 12
      }
    ]
  },
  {
    "path": "bridge/frameworks/tmc/server.lua",
    "context": "server",
    "module": "framework",
    "lines": 26,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetResourceName",
        "args": "",
        "line": 4
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "source",
        "line": 5
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "source",
        "line": 7
      },
      {
        "kind": "function",
        "name": "framework.GetIdentifier",
        "args": "source",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.getPlayerName",
        "args": "source",
        "line": 9
      },
      {
        "kind": "function",
        "name": "framework.GetCoords",
        "args": "source,withHeading",
        "line": 10
      },
      {
        "kind": "function",
        "name": "framework.getPlayerDOB",
        "args": "source",
        "line": 11
      },
      {
        "kind": "function",
        "name": "framework.getPlayerSex",
        "args": "source",
        "line": 12
      },
      {
        "kind": "function",
        "name": "framework.getPlayerJob",
        "args": "source,dataType",
        "line": 13
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 14
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source,jobName,grade",
        "line": 15
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source,onDuty",
        "line": 16
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source,jobName,grade",
        "line": 17
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMoney",
        "args": "source,account",
        "line": 18
      },
      {
        "kind": "function",
        "name": "framework.addPlayerMoney",
        "args": "source,account,amount,reason",
        "line": 19
      },
      {
        "kind": "function",
        "name": "framework.removePlayerMoney",
        "args": "source,account,amount,reason",
        "line": 20
      },
      {
        "kind": "function",
        "name": "framework.setPlayerMetadata",
        "args": "source,key,value",
        "line": 21
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "source,key",
        "line": 22
      },
      {
        "kind": "function",
        "name": "framework.getPlayerGroup",
        "args": "",
        "line": 23
      },
      {
        "kind": "function",
        "name": "framework.RegisterUsableItem",
        "args": "",
        "line": 24
      }
    ]
  },
  {
    "path": "bridge/fuel/cdn/client.lua",
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
    "path": "bridge/fuel/cdn/server.lua",
    "context": "server",
    "module": "fuel",
    "lines": 9,
    "records": []
  },
  {
    "path": "bridge/fuel/default/client.lua",
    "context": "client",
    "module": "fuel",
    "lines": 13,
    "records": [
      {
        "kind": "function",
        "name": "fuel.GetResourceName",
        "args": "",
        "line": 2
      },
      {
        "kind": "function",
        "name": "fuel.GetFuel",
        "args": "vehicle",
        "line": 3
      },
      {
        "kind": "function",
        "name": "fuel.SetFuel",
        "args": "vehicle, amount",
        "line": 7
      }
    ]
  }
];
