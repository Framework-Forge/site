export const PR_BRIDGE_SOURCE_AUDIT_BATCH_3 = [
  {
    "path": "bridge/fivem/instructionalButtons/server.lua",
    "context": "server",
    "module": "fivem.instructionalButtons",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/fivem/net/client.lua",
    "context": "client",
    "module": "fivem.net",
    "lines": 95,
    "records": [
      {
        "kind": "local-function",
        "name": "now",
        "args": "",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "waitUntil",
        "args": "timeout, cb",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "networkIdExists",
        "args": "netId",
        "line": 19
      },
      {
        "kind": "local-function",
        "name": "isVehicleEntity",
        "args": "entity",
        "line": 27
      },
      {
        "kind": "function",
        "name": "net.isValidNetId",
        "args": "netId",
        "line": 31
      },
      {
        "kind": "function",
        "name": "net.getNetId",
        "args": "entity",
        "line": 35
      },
      {
        "kind": "function",
        "name": "net.getEntity",
        "args": "netId, timeout",
        "line": 44
      },
      {
        "kind": "function",
        "name": "net.getVehicle",
        "args": "netId, timeout",
        "line": 62
      },
      {
        "kind": "function",
        "name": "net.resolveVehicle",
        "args": "vehicleOrNetId, timeout",
        "line": 69
      },
      {
        "kind": "function",
        "name": "net.getOwner",
        "args": "entityOrNetId, timeout",
        "line": 80
      }
    ]
  },
  {
    "path": "bridge/fivem/net/server.lua",
    "context": "server",
    "module": "fivem.net",
    "lines": 96,
    "records": [
      {
        "kind": "local-function",
        "name": "now",
        "args": "",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "waitUntil",
        "args": "timeout, cb",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "networkIdExists",
        "args": "netId",
        "line": 19
      },
      {
        "kind": "local-function",
        "name": "isVehicleEntity",
        "args": "entity",
        "line": 27
      },
      {
        "kind": "function",
        "name": "net.isValidNetId",
        "args": "netId",
        "line": 31
      },
      {
        "kind": "function",
        "name": "net.getNetId",
        "args": "entity",
        "line": 39
      },
      {
        "kind": "function",
        "name": "net.getEntity",
        "args": "netId, timeout",
        "line": 46
      },
      {
        "kind": "function",
        "name": "net.getVehicle",
        "args": "netId, timeout",
        "line": 65
      },
      {
        "kind": "function",
        "name": "net.resolveVehicle",
        "args": "vehicleOrNetId, timeout",
        "line": 72
      },
      {
        "kind": "function",
        "name": "net.getOwner",
        "args": "entityOrNetId, timeout",
        "line": 83
      }
    ]
  },
  {
    "path": "bridge/fivem/objects/client.lua",
    "context": "client",
    "module": "fivem.objects",
    "lines": 304,
    "records": [
      {
        "kind": "local-function",
        "name": "hash",
        "args": "value",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "toCoords",
        "args": "coords",
        "line": 9
      },
      {
        "kind": "local-function",
        "name": "buildModelSet",
        "args": "model",
        "line": 17
      },
      {
        "kind": "local-function",
        "name": "normalizePoolName",
        "args": "poolName",
        "line": 65
      },
      {
        "kind": "local-function",
        "name": "enumerate",
        "args": "init, move, dispose",
        "line": 70
      },
      {
        "kind": "local-function",
        "name": "enumerateObjects",
        "args": "",
        "line": 89
      },
      {
        "kind": "local-function",
        "name": "enumerateVehicles",
        "args": "",
        "line": 93
      },
      {
        "kind": "local-function",
        "name": "collectInRadius",
        "args": "enumerator, coords, radius, options",
        "line": 97
      },
      {
        "kind": "local-function",
        "name": "decorateResult",
        "args": "result, poolName",
        "line": 133
      },
      {
        "kind": "local-function",
        "name": "collectEntityListInRadius",
        "args": "entityList, poolName, coords, radius, options",
        "line": 149
      },
      {
        "kind": "function",
        "name": "objects.getPoolName",
        "args": "poolName",
        "line": 187
      },
      {
        "kind": "function",
        "name": "objects.getPool",
        "args": "poolName",
        "line": 191
      },
      {
        "kind": "function",
        "name": "objects.getPoolInRadius",
        "args": "poolName, coords, radius, options",
        "line": 198
      },
      {
        "kind": "function",
        "name": "objects.getPoolByModelInRadius",
        "args": "poolName, model, coords, radius, options",
        "line": 205
      },
      {
        "kind": "function",
        "name": "objects.getClosestFromPool",
        "args": "poolName, coords, radius, options",
        "line": 211
      },
      {
        "kind": "function",
        "name": "objects.getPedsInRadius",
        "args": "coords, radius, options",
        "line": 216
      },
      {
        "kind": "function",
        "name": "objects.getPedsByModelInRadius",
        "args": "model, coords, radius, options",
        "line": 220
      },
      {
        "kind": "function",
        "name": "objects.getNetworkedObjectsInRadius",
        "args": "coords, radius, options",
        "line": 224
      },
      {
        "kind": "function",
        "name": "objects.getPickupsInRadius",
        "args": "coords, radius, options",
        "line": 228
      },
      {
        "kind": "function",
        "name": "objects.getObjectsInRadius",
        "args": "coords, radius, options",
        "line": 232
      },
      {
        "kind": "function",
        "name": "objects.getByModelInRadius",
        "args": "model, coords, radius, options",
        "line": 236
      },
      {
        "kind": "function",
        "name": "objects.getClosestObject",
        "args": "coords, radius, options",
        "line": 242
      },
      {
        "kind": "function",
        "name": "objects.getClosestByModel",
        "args": "model, coords, radius, options",
        "line": 247
      },
      {
        "kind": "function",
        "name": "objects.freezeByModelInRadius",
        "args": "model, coords, radius, state",
        "line": 252
      },
      {
        "kind": "function",
        "name": "objects.getVehiclesInRadius",
        "args": "coords, radius, options",
        "line": 262
      },
      {
        "kind": "function",
        "name": "objects.getObjectsInRadiusUsingPool",
        "args": "coords, radius, options",
        "line": 272
      },
      {
        "kind": "function",
        "name": "objects.getVehiclesInRadiusUsingPool",
        "args": "coords, radius, options",
        "line": 276
      },
      {
        "kind": "function",
        "name": "objects.getVehiclesByModelInRadius",
        "args": "model, coords, radius, options",
        "line": 280
      },
      {
        "kind": "function",
        "name": "objects.getClosestVehicle",
        "args": "coords, radius, options",
        "line": 286
      },
      {
        "kind": "function",
        "name": "objects.getClosestVehicleByModel",
        "args": "model, coords, radius, options",
        "line": 291
      }
    ]
  },
  {
    "path": "bridge/fivem/objects/server.lua",
    "context": "server",
    "module": "fivem.objects",
    "lines": 257,
    "records": [
      {
        "kind": "local-function",
        "name": "hash",
        "args": "value",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "toCoords",
        "args": "coords",
        "line": 9
      },
      {
        "kind": "local-function",
        "name": "buildModelSet",
        "args": "model",
        "line": 15
      },
      {
        "kind": "local-function",
        "name": "normalizePoolName",
        "args": "poolName",
        "line": 63
      },
      {
        "kind": "local-function",
        "name": "decorateResult",
        "args": "result, poolName",
        "line": 68
      },
      {
        "kind": "local-function",
        "name": "collectInRadius",
        "args": "entityList, coords, radius, options",
        "line": 77
      },
      {
        "kind": "function",
        "name": "objects.getPoolName",
        "args": "poolName",
        "line": 117
      },
      {
        "kind": "function",
        "name": "objects.getPool",
        "args": "poolName",
        "line": 121
      },
      {
        "kind": "function",
        "name": "objects.getPoolInRadius",
        "args": "poolName, coords, radius, options",
        "line": 128
      },
      {
        "kind": "function",
        "name": "objects.getPoolByModelInRadius",
        "args": "poolName, model, coords, radius, options",
        "line": 138
      },
      {
        "kind": "function",
        "name": "objects.getClosestFromPool",
        "args": "poolName, coords, radius, options",
        "line": 144
      },
      {
        "kind": "function",
        "name": "objects.getPedsInRadius",
        "args": "coords, radius, options",
        "line": 149
      },
      {
        "kind": "function",
        "name": "objects.getPedsByModelInRadius",
        "args": "model, coords, radius, options",
        "line": 159
      },
      {
        "kind": "function",
        "name": "objects.getNetworkedObjectsInRadius",
        "args": "coords, radius, options",
        "line": 165
      },
      {
        "kind": "function",
        "name": "objects.getPickupsInRadius",
        "args": "coords, radius, options",
        "line": 169
      },
      {
        "kind": "function",
        "name": "objects.getObjectsInRadius",
        "args": "coords, radius, options",
        "line": 173
      },
      {
        "kind": "function",
        "name": "objects.getByModelInRadius",
        "args": "model, coords, radius, options",
        "line": 182
      },
      {
        "kind": "function",
        "name": "objects.getClosestObject",
        "args": "coords, radius, options",
        "line": 188
      },
      {
        "kind": "function",
        "name": "objects.getClosestByModel",
        "args": "model, coords, radius, options",
        "line": 193
      },
      {
        "kind": "function",
        "name": "objects.freezeByModelInRadius",
        "args": "model, coords, radius, state",
        "line": 198
      },
      {
        "kind": "function",
        "name": "objects.getVehiclesInRadius",
        "args": "coords, radius, options",
        "line": 208
      },
      {
        "kind": "function",
        "name": "objects.getObjectsInRadiusUsingPool",
        "args": "coords, radius, options",
        "line": 225
      },
      {
        "kind": "function",
        "name": "objects.getVehiclesInRadiusUsingPool",
        "args": "coords, radius, options",
        "line": 229
      },
      {
        "kind": "function",
        "name": "objects.getVehiclesByModelInRadius",
        "args": "model, coords, radius, options",
        "line": 233
      },
      {
        "kind": "function",
        "name": "objects.getClosestVehicle",
        "args": "coords, radius, options",
        "line": 239
      },
      {
        "kind": "function",
        "name": "objects.getClosestVehicleByModel",
        "args": "model, coords, radius, options",
        "line": 244
      }
    ]
  },
  {
    "path": "bridge/fivem/raycast/client.lua",
    "context": "client",
    "module": "fivem.raycast",
    "lines": 32,
    "records": [
      {
        "kind": "local-function",
        "name": "forwardVector",
        "args": "rotation",
        "line": 2
      },
      {
        "kind": "function",
        "name": "raycast.fromCoords",
        "args": "origin, destination, flags, ignoreFlags, ignoreEntity",
        "line": 7
      },
      {
        "kind": "function",
        "name": "raycast.fromCamera",
        "args": "distance, flags, ignoreFlags, ignoreEntity",
        "line": 19
      }
    ]
  },
  {
    "path": "bridge/fivem/server.lua",
    "context": "server",
    "module": "fivem.server.lua",
    "lines": 96,
    "records": []
  },
  {
    "path": "bridge/fivem/streaming/client.lua",
    "context": "client",
    "module": "fivem.streaming",
    "lines": 1012,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "hash",
        "args": "value",
        "line": 15
      },
      {
        "kind": "local-function",
        "name": "waitUntil",
        "args": "predicate, timeout",
        "line": 21
      },
      {
        "kind": "function",
        "name": "streaming.requestModel",
        "args": "model, timeout",
        "line": 34
      },
      {
        "kind": "function",
        "name": "streaming.releaseModel",
        "args": "model",
        "line": 56
      },
      {
        "kind": "function",
        "name": "streaming.getModelDimensions",
        "args": "model, timeout",
        "line": 61
      },
      {
        "kind": "function",
        "name": "streaming.getModelGroundOffset",
        "args": "model, timeout",
        "line": 92
      },
      {
        "kind": "function",
        "name": "streaming.requestAnimDict",
        "args": "animDict, timeout",
        "line": 99
      },
      {
        "kind": "function",
        "name": "streaming.releaseAnimDict",
        "args": "animDict",
        "line": 116
      },
      {
        "kind": "function",
        "name": "streaming.requestWeaponAsset",
        "args": "model, timeout",
        "line": 122
      },
      {
        "kind": "function",
        "name": "streaming.releaseWeaponAsset",
        "args": "model",
        "line": 140
      },
      {
        "kind": "local-function",
        "name": "coordsOf",
        "args": "coords",
        "line": 145
      },
      {
        "kind": "function",
        "name": "streaming.findGroundZ",
        "args": "coords, options",
        "line": 152
      },
      {
        "kind": "local-function",
        "name": "safeCall",
        "args": "label, fn",
        "line": 194
      },
      {
        "kind": "function",
        "name": "streaming.configureEntity",
        "args": "entity, options",
        "line": 204
      },
      {
        "kind": "function",
        "name": "streaming.placeEntityProperly",
        "args": "entity, placementType, options",
        "line": 254
      },
      {
        "kind": "function",
        "name": "streaming.setEntityTransform",
        "args": "entity, coords, heading, options",
        "line": 305
      },
      {
        "kind": "function",
        "name": "streaming.deleteEntity",
        "args": "entity",
        "line": 334
      },
      {
        "kind": "local-function",
        "name": "loadForCreate",
        "args": "model, timeout",
        "line": 346
      },
      {
        "kind": "local-function",
        "name": "finishCreatedEntity",
        "args": "entity, modelHash, options",
        "line": 355
      },
      {
        "kind": "function",
        "name": "streaming.createObject",
        "args": "model, coords, options",
        "line": 373
      },
      {
        "kind": "function",
        "name": "streaming.createPed",
        "args": "model, coords, heading, options",
        "line": 388
      },
      {
        "kind": "function",
        "name": "streaming.createVehicle",
        "args": "model, coords, heading, options",
        "line": 402
      },
      {
        "kind": "function",
        "name": "streaming.createEntity",
        "args": "placementType, model, coords, heading, options",
        "line": 416
      },
      {
        "kind": "local-function",
        "name": "vec3",
        "args": "value",
        "line": 456
      },
      {
        "kind": "local-function",
        "name": "addVec3",
        "args": "a, b",
        "line": 470
      },
      {
        "kind": "local-function",
        "name": "getHeadingToCoords",
        "args": "fromCoords, toCoords",
        "line": 475
      },
      {
        "kind": "local-function",
        "name": "inferEntityType",
        "args": "entity",
        "line": 479
      },
      {
        "kind": "local-function",
        "name": "resolveInteractionTarget",
        "args": "data",
        "line": 487
      },
      {
        "kind": "local-function",
        "name": "getVehicleAnchorOffset",
        "args": "entity, anchor, distance, zOffset",
        "line": 514
      },
      {
        "kind": "local-function",
        "name": "getEntityBoneCoords",
        "args": "entity, bone",
        "line": 537
      },
      {
        "kind": "local-function",
        "name": "getInteractionCoords",
        "args": "entity, entityType, position",
        "line": 546
      },
      {
        "kind": "local-function",
        "name": "movePedToInteractionCoords",
        "args": "ped, coords, heading, position",
        "line": 608
      },
      {
        "kind": "local-function",
        "name": "normalizeList",
        "args": "value",
        "line": 642
      },
      {
        "kind": "local-function",
        "name": "setVehicleDoors",
        "args": "vehicle, doors, open, options",
        "line": 648
      },
      {
        "kind": "local-function",
        "name": "getVehicleInteractionOptions",
        "args": "data",
        "line": 663
      },
      {
        "kind": "local-function",
        "name": "prepareInteractionTarget",
        "args": "entity, entityType, data",
        "line": 672
      },
      {
        "kind": "local-function",
        "name": "cleanupInteractionTarget",
        "args": "entity, entityType, data",
        "line": 683
      },
      {
        "kind": "local-function",
        "name": "runInteractionCallback",
        "args": "callback, ...",
        "line": 693
      },
      {
        "kind": "local-function",
        "name": "getAnimConfig",
        "args": "anim, fallbackDuration",
        "line": 705
      },
      {
        "kind": "function",
        "name": "streaming.playAnim",
        "args": "data, clip, duration, options, ...",
        "line": 730
      },
      {
        "kind": "local-function",
        "name": "playInteractionAnim",
        "args": "ped, anim, coords, heading, duration",
        "line": 815
      },
      {
        "kind": "function",
        "name": "streaming.playInteraction",
        "args": "data",
        "line": 858
      },
      {
        "kind": "function",
        "name": "streaming.requestAnimSet",
        "args": "animSet, timeout",
        "line": 920
      },
      {
        "kind": "function",
        "name": "streaming.releaseAnimSet",
        "args": "animSet",
        "line": 929
      },
      {
        "kind": "function",
        "name": "streaming.requestTextureDict",
        "args": "textureDict, timeout",
        "line": 933
      },
      {
        "kind": "function",
        "name": "streaming.releaseTextureDict",
        "args": "textureDict",
        "line": 942
      },
      {
        "kind": "function",
        "name": "streaming.requestPtfxAsset",
        "args": "asset, timeout",
        "line": 946
      },
      {
        "kind": "function",
        "name": "streaming.releasePtfxAsset",
        "args": "asset",
        "line": 955
      },
      {
        "kind": "function",
        "name": "streaming.requestAudioBank",
        "args": "audioBank, timeout",
        "line": 959
      },
      {
        "kind": "function",
        "name": "streaming.releaseAudioBank",
        "args": "audioBank",
        "line": 970
      },
      {
        "kind": "function",
        "name": "streaming.requestScaleformMovie",
        "args": "name, timeout",
        "line": 974
      },
      {
        "kind": "function",
        "name": "streaming.releaseScaleformMovie",
        "args": "handle",
        "line": 986
      },
      {
        "kind": "function",
        "name": "streaming.RequestModel",
        "args": "model, timeout",
        "line": 990
      },
      {
        "kind": "function",
        "name": "streaming.RequestAnimDict",
        "args": "asset, timeout",
        "line": 991
      },
      {
        "kind": "function",
        "name": "streaming.RequestAnimSet",
        "args": "asset, timeout",
        "line": 992
      },
      {
        "kind": "function",
        "name": "streaming.RequestStreamedTextureDict",
        "args": "asset, timeout",
        "line": 993
      },
      {
        "kind": "function",
        "name": "streaming.RequestNamedPtfxAsset",
        "args": "asset, timeout",
        "line": 994
      },
      {
        "kind": "function",
        "name": "streaming.RequestAudioBank",
        "args": "asset, timeout",
        "line": 995
      },
      {
        "kind": "function",
        "name": "streaming.RequestScaleformMovie",
        "args": "asset, timeout",
        "line": 996
      }
    ]
  },
  {
    "path": "bridge/fivem/streaming/server.lua",
    "context": "server",
    "module": "fivem.streaming",
    "lines": 10,
    "records": [
      {
        "kind": "function",
        "name": "streaming.hash",
        "args": "model",
        "line": 3
      }
    ]
  },
  {
    "path": "bridge/fivem/tuning/client.lua",
    "context": "client",
    "module": "fivem.tuning",
    "lines": 144,
    "records": [
      {
        "kind": "local-function",
        "name": "getVehicleProperties",
        "args": "",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "getNet",
        "args": "",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "resolveVehicle",
        "args": "vehicle",
        "line": 11
      },
      {
        "kind": "local-function",
        "name": "getFixVehicle",
        "args": "options",
        "line": 20
      },
      {
        "kind": "function",
        "name": "tuning.get",
        "args": "vehicle",
        "line": 26
      },
      {
        "kind": "function",
        "name": "tuning.apply",
        "args": "vehicle, props, options",
        "line": 33
      },
      {
        "kind": "function",
        "name": "tuning.applyNetId",
        "args": "netId, props, options",
        "line": 40
      },
      {
        "kind": "function",
        "name": "tuning.snapshot",
        "args": "vehicle",
        "line": 47
      },
      {
        "kind": "function",
        "name": "tuning.restore",
        "args": "vehicle, snapshot, options",
        "line": 51
      },
      {
        "kind": "function",
        "name": "tuning.repair",
        "args": "vehicle",
        "line": 55
      },
      {
        "kind": "function",
        "name": "tuning.setPlate",
        "args": "vehicle, plate",
        "line": 66
      },
      {
        "kind": "function",
        "name": "tuning.setFuel",
        "args": "vehicle, fuelLevel",
        "line": 74
      },
      {
        "kind": "function",
        "name": "tuning.setMod",
        "args": "vehicle, modType, modIndex, customTires",
        "line": 83
      },
      {
        "kind": "function",
        "name": "tuning.toggleMod",
        "args": "vehicle, modType, state",
        "line": 95
      },
      {
        "kind": "function",
        "name": "tuning.setExtra",
        "args": "vehicle, extraId, state",
        "line": 106
      },
      {
        "kind": "function",
        "name": "tuning.setNeon",
        "args": "vehicle, enabled, color",
        "line": 115
      },
      {
        "kind": "function",
        "name": "tuning.setXenon",
        "args": "vehicle, enabled, color",
        "line": 130
      }
    ]
  },
  {
    "path": "bridge/fivem/tuning/server.lua",
    "context": "server",
    "module": "fivem.tuning",
    "lines": 33,
    "records": [
      {
        "kind": "local-function",
        "name": "getVehicleProperties",
        "args": "",
        "line": 3
      },
      {
        "kind": "function",
        "name": "tuning.apply",
        "args": "vehicle, props, options",
        "line": 7
      },
      {
        "kind": "function",
        "name": "tuning.applyNetId",
        "args": "netId, props, target, options",
        "line": 14
      },
      {
        "kind": "function",
        "name": "tuning.snapshot",
        "args": "",
        "line": 24
      },
      {
        "kind": "function",
        "name": "tuning.restore",
        "args": "vehicle, snapshot, options",
        "line": 28
      }
    ]
  },
  {
    "path": "bridge/fivem/ui/client.lua",
    "context": "client",
    "module": "fivem.ui",
    "lines": 14,
    "records": [
      {
        "kind": "local-function",
        "name": "color",
        "args": "value",
        "line": 2
      },
      {
        "kind": "function",
        "name": "ui.draw2DText",
        "args": "text, x, y, scale, textColor, font",
        "line": 3
      },
      {
        "kind": "function",
        "name": "ui.draw3DText",
        "args": "text, coords, scale, textColor, font",
        "line": 7
      },
      {
        "kind": "function",
        "name": "ui.drawRect",
        "args": "x,y,width,height,rectColor",
        "line": 10
      }
    ]
  },
  {
    "path": "bridge/fivem/vehicleCache/shared.lua",
    "context": "shared",
    "module": "fivem.vehicleCache",
    "lines": 129,
    "records": [
      {
        "kind": "local-function",
        "name": "entityKey",
        "args": "entity",
        "line": 11
      },
      {
        "kind": "local-function",
        "name": "compactMeta",
        "args": "meta",
        "line": 15
      },
      {
        "kind": "function",
        "name": "vehicleCache.set",
        "args": "vehicleOrNetId, data",
        "line": 31
      },
      {
        "kind": "function",
        "name": "vehicleCache.get",
        "args": "vehicleOrNetId",
        "line": 61
      },
      {
        "kind": "function",
        "name": "vehicleCache.getByPlate",
        "args": "plate",
        "line": 71
      },
      {
        "kind": "function",
        "name": "vehicleCache.clear",
        "args": "vehicleOrNetId",
        "line": 75
      },
      {
        "kind": "function",
        "name": "vehicleCache.clearAll",
        "args": "",
        "line": 94
      },
      {
        "kind": "function",
        "name": "vehicleCache.getStateKey",
        "args": "name",
        "line": 100
      },
      {
        "kind": "function",
        "name": "vehicleCache.setState",
        "args": "vehicle, name, value, replicated",
        "line": 104
      },
      {
        "kind": "function",
        "name": "vehicleCache.getState",
        "args": "vehicle, name",
        "line": 111
      },
      {
        "kind": "function",
        "name": "vehicleCache.setPersistentMeta",
        "args": "vehicle, meta",
        "line": 117
      },
      {
        "kind": "function",
        "name": "vehicleCache.getPersistentMeta",
        "args": "vehicle",
        "line": 124
      }
    ]
  },
  {
    "path": "bridge/fivem/vehicleProperties/client.lua",
    "context": "client",
    "module": "fivem.vehicleProperties",
    "lines": 419,
    "records": [
      {
        "kind": "local-function",
        "name": "waitForStateBagEntity",
        "args": "bagName, timeout",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "unpackStateBagValue",
        "args": "value",
        "line": 28
      },
      {
        "kind": "local-function",
        "name": "getNet",
        "args": "",
        "line": 35
      },
      {
        "kind": "local-function",
        "name": "cacheVehicle",
        "args": "entity, props",
        "line": 40
      },
      {
        "kind": "local-function",
        "name": "setVehicleModIfPresent",
        "args": "vehicle, props, key, modType, customTires",
        "line": 55
      },
      {
        "kind": "function",
        "name": "vehicleProperties.get",
        "args": "vehicle",
        "line": 62
      },
      {
        "kind": "function",
        "name": "vehicleProperties.set",
        "args": "vehicle, props, fixVehicle",
        "line": 224
      }
    ]
  },
  {
    "path": "bridge/fivem/vehicleProperties/server.lua",
    "context": "server",
    "module": "fivem.vehicleProperties",
    "lines": 110,
    "records": [
      {
        "kind": "local-function",
        "name": "getConfig",
        "args": "",
        "line": 12
      },
      {
        "kind": "local-function",
        "name": "normalizeOptions",
        "args": "options",
        "line": 16
      },
      {
        "kind": "local-function",
        "name": "getNet",
        "args": "",
        "line": 28
      },
      {
        "kind": "local-function",
        "name": "cacheVehicle",
        "args": "entity, netId, props",
        "line": 33
      },
      {
        "kind": "function",
        "name": "vehicleProperties.setNetId",
        "args": "netId, props, target, options",
        "line": 45
      },
      {
        "kind": "function",
        "name": "vehicleProperties.set",
        "args": "vehicle, props, options",
        "line": 54
      }
    ]
  },
  {
    "path": "bridge/fivem/vehicleState/shared.lua",
    "context": "shared",
    "module": "fivem.vehicleState",
    "lines": 479,
    "records": [
      {
        "kind": "local-function",
        "name": "convarNumber",
        "args": "name, fallback, minimum, maximum",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "copy",
        "args": "source",
        "line": 29
      },
      {
        "kind": "local-function",
        "name": "merge",
        "args": "defaults, options",
        "line": 37
      },
      {
        "kind": "local-function",
        "name": "encode",
        "args": "value",
        "line": 45
      },
      {
        "kind": "local-function",
        "name": "makeScope",
        "args": "entityType, prefix",
        "line": 61
      },
      {
        "kind": "local-function",
        "name": "reject",
        "args": "reason",
        "line": 83
      },
      {
        "kind": "local-function",
        "name": "validateEntity",
        "args": "entity, options",
        "line": 88
      },
      {
        "kind": "local-function",
        "name": "validateChannel",
        "args": "channel",
        "line": 101
      },
      {
        "kind": "local-function",
        "name": "stateKey",
        "args": "channel, key, options",
        "line": 109
      },
      {
        "kind": "local-function",
        "name": "channelOptions",
        "args": "channel, options",
        "line": 123
      },
      {
        "kind": "local-function",
        "name": "validateValue",
        "args": "value, options",
        "line": 127
      },
      {
        "kind": "local-function",
        "name": "canReplicate",
        "args": "entity, options",
        "line": 140
      },
      {
        "kind": "local-function",
        "name": "prepare",
        "args": "entity, channel, key, value, options",
        "line": 153
      },
      {
        "kind": "function",
        "name": "scope.registerChannel",
        "args": "name, defaults",
        "line": 195
      },
      {
        "kind": "function",
        "name": "scope.getChannel",
        "args": "name",
        "line": 202
      },
      {
        "kind": "function",
        "name": "scope.getKey",
        "args": "channel, key, options",
        "line": 206
      },
      {
        "kind": "function",
        "name": "scope.get",
        "args": "entity, channel, key, options",
        "line": 210
      },
      {
        "kind": "function",
        "name": "scope.set",
        "args": "entity, channel, key, value, options",
        "line": 221
      },
      {
        "kind": "function",
        "name": "scope.remove",
        "args": "entity, channel, key, options",
        "line": 244
      },
      {
        "kind": "function",
        "name": "scope.update",
        "args": "entity, channel, key, updater, options",
        "line": 248
      },
      {
        "kind": "function",
        "name": "scope.setMany",
        "args": "entity, channel, values, options",
        "line": 257
      },
      {
        "kind": "function",
        "name": "scope.snapshot",
        "args": "entity, channel, keys, options",
        "line": 274
      },
      {
        "kind": "function",
        "name": "scope.wait",
        "args": "entity, channel, key, predicate, timeout, options",
        "line": 284
      },
      {
        "kind": "assigned-function",
        "name": "predicate",
        "args": "value",
        "line": 287
      },
      {
        "kind": "local-function",
        "name": "bagNameFor",
        "args": "entity",
        "line": 299
      },
      {
        "kind": "function",
        "name": "scope.watch",
        "args": "entity, channel, key, callback, options",
        "line": 308
      },
      {
        "kind": "local-function",
        "name": "entityFromBagName",
        "args": "bagName",
        "line": 336
      },
      {
        "kind": "function",
        "name": "scope.watchAny",
        "args": "channel, key, callback, options",
        "line": 350
      },
      {
        "kind": "function",
        "name": "scope.unwatch",
        "args": "id",
        "line": 378
      },
      {
        "kind": "function",
        "name": "scope.clearWatchers",
        "args": "",
        "line": 386
      },
      {
        "kind": "function",
        "name": "scope.getMetrics",
        "args": "",
        "line": 393
      },
      {
        "kind": "function",
        "name": "scope.channel",
        "args": "name, defaults",
        "line": 403
      },
      {
        "kind": "function",
        "name": "channel.get",
        "args": "entity, key, options",
        "line": 413
      },
      {
        "kind": "function",
        "name": "channel.set",
        "args": "entity, key, value, options",
        "line": 414
      },
      {
        "kind": "function",
        "name": "channel.remove",
        "args": "entity, key, options",
        "line": 415
      },
      {
        "kind": "function",
        "name": "channel.update",
        "args": "entity, key, updater, options",
        "line": 416
      },
      {
        "kind": "function",
        "name": "channel.setMany",
        "args": "entity, values, options",
        "line": 417
      },
      {
        "kind": "function",
        "name": "channel.snapshot",
        "args": "entity, keys, options",
        "line": 418
      },
      {
        "kind": "function",
        "name": "channel.wait",
        "args": "entity, key, predicate, timeout, options",
        "line": 419
      },
      {
        "kind": "function",
        "name": "channel.watch",
        "args": "entity, key, callback, options",
        "line": 420
      },
      {
        "kind": "function",
        "name": "channel.watchAny",
        "args": "key, callback, options",
        "line": 421
      },
      {
        "kind": "function",
        "name": "scope.raw.get",
        "args": "entity, key, options",
        "line": 426
      },
      {
        "kind": "function",
        "name": "scope.raw.set",
        "args": "entity, key, value, options",
        "line": 427
      },
      {
        "kind": "function",
        "name": "scope.raw.remove",
        "args": "entity, key, options",
        "line": 428
      },
      {
        "kind": "function",
        "name": "scope.raw.watch",
        "args": "entity, key, callback, options",
        "line": 429
      },
      {
        "kind": "function",
        "name": "scope.raw.watchAny",
        "args": "key, callback, options",
        "line": 430
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "resource",
        "line": 432
      },
      {
        "kind": "function",
        "name": "propState.link",
        "args": "prop, vehicle, data, options",
        "line": 451
      },
      {
        "kind": "function",
        "name": "propState.unlink",
        "args": "prop, options",
        "line": 464
      },
      {
        "kind": "function",
        "name": "propState.getLinkedVehicle",
        "args": "prop",
        "line": 468
      }
    ]
  },
  {
    "path": "bridge/framework_normalizer.lua",
    "context": "mixed",
    "module": "framework_normalizer",
    "lines": 302,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetResourceName",
        "args": "",
        "line": 5
      },
      {
        "kind": "function",
        "name": "framework.GetVehiclesByHash",
        "args": "model",
        "line": 9
      },
      {
        "kind": "function",
        "name": "framework.GetVehicleData",
        "args": "model",
        "line": 27
      },
      {
        "kind": "function",
        "name": "framework.SetVehiclePersistence",
        "args": "vehicle, enabled",
        "line": 33
      },
      {
        "kind": "local-function",
        "name": "alias",
        "args": "canonical, ...",
        "line": 46
      },
      {
        "kind": "function",
        "name": "framework.GetPhoneProfile",
        "args": "source",
        "line": 90
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerStatus",
        "args": "source, status",
        "line": 105
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerStatus",
        "args": "source, status, value",
        "line": 110
      },
      {
        "kind": "function",
        "name": "framework.AddPlayerStatus",
        "args": "source, status, amount",
        "line": 117
      },
      {
        "kind": "function",
        "name": "framework.GetFrameworkJobs",
        "args": "",
        "line": 127
      },
      {
        "kind": "function",
        "name": "framework.GetFrameworkGangs",
        "args": "",
        "line": 135
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerFromIdentifier",
        "args": "identifier",
        "line": 142
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "source",
        "line": 152
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerJob",
        "args": "source, jobName, grade",
        "line": 166
      },
      {
        "kind": "function",
        "name": "framework.SetPlayerDuty",
        "args": "source, onDuty",
        "line": 181
      },
      {
        "kind": "local-function",
        "name": "sourceFromIdentifier",
        "args": "identifier",
        "line": 196
      },
      {
        "kind": "function",
        "name": "framework.AddPlayerToJob",
        "args": "identifier, jobName, grade",
        "line": 205
      },
      {
        "kind": "function",
        "name": "framework.RemovePlayerFromJob",
        "args": "identifier",
        "line": 213
      },
      {
        "kind": "function",
        "name": "framework.AddPlayerToGang",
        "args": "identifier, gangName, grade",
        "line": 223
      },
      {
        "kind": "function",
        "name": "framework.RemovePlayerFromGang",
        "args": "identifier",
        "line": 235
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "source, jobName, grade",
        "line": 243
      },
      {
        "kind": "function",
        "name": "framework.GetAllPlayers",
        "args": "",
        "line": 251
      },
      {
        "kind": "function",
        "name": "framework.GetJobCount",
        "args": "jobName",
        "line": 252
      },
      {
        "kind": "local-function",
        "name": "playerData",
        "args": "",
        "line": 280
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerIdentifier",
        "args": "",
        "line": 281
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerName",
        "args": "",
        "line": 282
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerGender",
        "args": "",
        "line": 283
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerDob",
        "args": "",
        "line": 284
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 285
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerDead",
        "args": "",
        "line": 286
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 287
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName,grade",
        "line": 289
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerGroup",
        "args": "",
        "line": 290
      },
      {
        "kind": "function",
        "name": "framework.GetClosestPlayer",
        "args": "",
        "line": 291
      },
      {
        "kind": "function",
        "name": "framework.GetClosestVehicle",
        "args": "",
        "line": 292
      },
      {
        "kind": "function",
        "name": "framework.Notify",
        "args": "message,kind,duration",
        "line": 293
      },
      {
        "kind": "function",
        "name": "framework.ShowTextUI",
        "args": "text",
        "line": 294
      },
      {
        "kind": "function",
        "name": "framework.HideTextUI",
        "args": "",
        "line": 295
      },
      {
        "kind": "function",
        "name": "framework.GetAccountBalance",
        "args": "account",
        "line": 296
      }
    ]
  },
  {
    "path": "bridge/frameworks/custom/client.lua",
    "context": "client",
    "module": "framework",
    "lines": 69,
    "records": [
      {
        "kind": "function",
        "name": "framework.GetResourceName",
        "args": "",
        "line": 7
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerData",
        "args": "",
        "line": 8
      },
      {
        "kind": "function",
        "name": "framework.GetPlayer",
        "args": "",
        "line": 9
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerLoaded",
        "args": "",
        "line": 10
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerIdentifier",
        "args": "",
        "line": 11
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerName",
        "args": "",
        "line": 12
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerGender",
        "args": "",
        "line": 13
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerDob",
        "args": "",
        "line": 14
      },
      {
        "kind": "function",
        "name": "framework.IsPlayerDead",
        "args": "",
        "line": 15
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerJob",
        "args": "",
        "line": 17
      },
      {
        "kind": "function",
        "name": "framework.GetJobInfo",
        "args": "",
        "line": 20
      },
      {
        "kind": "function",
        "name": "framework.PlayerHasJob",
        "args": "jobName, grade",
        "line": 24
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerGroup",
        "args": "",
        "line": 25
      },
      {
        "kind": "function",
        "name": "framework.GetClosestPlayer",
        "args": "",
        "line": 27
      },
      {
        "kind": "function",
        "name": "framework.GetClosestVehicle",
        "args": "",
        "line": 38
      },
      {
        "kind": "function",
        "name": "framework.GetMoney",
        "args": "account",
        "line": 44
      },
      {
        "kind": "function",
        "name": "framework.getPlayerMetadata",
        "args": "key",
        "line": 46
      },
      {
        "kind": "function",
        "name": "framework.Notify",
        "args": "message, kind, duration",
        "line": 49
      },
      {
        "kind": "function",
        "name": "framework.ShowTextUI",
        "args": "text",
        "line": 55
      },
      {
        "kind": "function",
        "name": "framework.HideTextUI",
        "args": "",
        "line": 58
      },
      {
        "kind": "function",
        "name": "framework.GetItemCount",
        "args": "itemName, metadata, strict",
        "line": 63
      },
      {
        "kind": "function",
        "name": "framework.HasItem",
        "args": "itemName, count, metadata, strict",
        "line": 64
      },
      {
        "kind": "function",
        "name": "framework.GetPlayerInventory",
        "args": "",
        "line": 65
      },
      {
        "kind": "function",
        "name": "framework.toggleOutfit",
        "args": "wear, outfits",
        "line": 67
      }
    ]
  }
];
