export const PR_BRIDGE_SOURCE_AUDIT_BATCH_2 = [
  {
    "path": "bridge/database/mysql_async/server.lua",
    "context": "server",
    "module": "database",
    "lines": 223,
    "records": [
      {
        "kind": "local-function",
        "name": "isReadQuery",
        "args": "query",
        "line": 16
      },
      {
        "kind": "local-function",
        "name": "awaitCall",
        "args": "start",
        "line": 21
      },
      {
        "kind": "local-function",
        "name": "call",
        "args": "start, cb",
        "line": 41
      },
      {
        "kind": "function",
        "name": "database.isReady",
        "args": "",
        "line": 61
      },
      {
        "kind": "function",
        "name": "database.GetResourceName",
        "args": "",
        "line": 67
      },
      {
        "kind": "function",
        "name": "database.query",
        "args": "query, parameters, cb",
        "line": 71
      },
      {
        "kind": "function",
        "name": "database.execute",
        "args": "query, parameters, cb",
        "line": 77
      },
      {
        "kind": "function",
        "name": "database.insert",
        "args": "query, parameters, cb",
        "line": 83
      },
      {
        "kind": "function",
        "name": "database.scalar",
        "args": "query, parameters, cb",
        "line": 89
      },
      {
        "kind": "function",
        "name": "database.single",
        "args": "query, parameters, cb",
        "line": 95
      },
      {
        "kind": "local-function",
        "name": "preparedReadResult",
        "args": "rows",
        "line": 106
      },
      {
        "kind": "local-function",
        "name": "runParameterSets",
        "args": "parameters, executeOne",
        "line": 121
      },
      {
        "kind": "function",
        "name": "database.prepare",
        "args": "query, parameters, cb",
        "line": 136
      },
      {
        "kind": "local-function",
        "name": "execute",
        "args": "",
        "line": 137
      },
      {
        "kind": "function",
        "name": "database.rawExecute",
        "args": "query, parameters, cb",
        "line": 155
      },
      {
        "kind": "local-function",
        "name": "execute",
        "args": "",
        "line": 156
      },
      {
        "kind": "function",
        "name": "database.ready",
        "args": "cb",
        "line": 172
      },
      {
        "kind": "function",
        "name": "database.transaction",
        "args": "queries, parameters, cb",
        "line": 180
      },
      {
        "kind": "function",
        "name": "database.run",
        "args": "query, parameters, cb",
        "line": 197
      },
      {
        "kind": "function",
        "name": "database.update",
        "args": "query, parameters, cb",
        "line": 209
      },
      {
        "kind": "local-function",
        "name": "affectedRows",
        "args": "result",
        "line": 210
      }
    ]
  },
  {
    "path": "bridge/database/oxmysql/server.lua",
    "context": "server",
    "module": "database",
    "lines": 173,
    "records": [
      {
        "kind": "local-function",
        "name": "isReadQuery",
        "args": "query",
        "line": 16
      },
      {
        "kind": "local-function",
        "name": "awaitCall",
        "args": "start",
        "line": 21
      },
      {
        "kind": "local-function",
        "name": "call",
        "args": "start, cb",
        "line": 41
      },
      {
        "kind": "function",
        "name": "database.isReady",
        "args": "",
        "line": 61
      },
      {
        "kind": "function",
        "name": "database.GetResourceName",
        "args": "",
        "line": 65
      },
      {
        "kind": "function",
        "name": "database.query",
        "args": "query, parameters, cb",
        "line": 69
      },
      {
        "kind": "function",
        "name": "database.execute",
        "args": "query, parameters, cb",
        "line": 77
      },
      {
        "kind": "function",
        "name": "database.insert",
        "args": "query, parameters, cb",
        "line": 85
      },
      {
        "kind": "function",
        "name": "database.scalar",
        "args": "query, parameters, cb",
        "line": 93
      },
      {
        "kind": "function",
        "name": "database.single",
        "args": "query, parameters, cb",
        "line": 101
      },
      {
        "kind": "function",
        "name": "database.prepare",
        "args": "query, parameters, cb",
        "line": 114
      },
      {
        "kind": "function",
        "name": "database.rawExecute",
        "args": "query, parameters, cb",
        "line": 122
      },
      {
        "kind": "function",
        "name": "database.ready",
        "args": "cb",
        "line": 130
      },
      {
        "kind": "function",
        "name": "database.transaction",
        "args": "queries, parameters, cb",
        "line": 138
      },
      {
        "kind": "function",
        "name": "database.run",
        "args": "query, parameters, cb",
        "line": 147
      },
      {
        "kind": "function",
        "name": "database.update",
        "args": "query, parameters, cb",
        "line": 159
      },
      {
        "kind": "local-function",
        "name": "affectedRows",
        "args": "result",
        "line": 160
      }
    ]
  },
  {
    "path": "bridge/debug.lua",
    "context": "mixed",
    "module": "debug",
    "lines": 93,
    "records": [
      {
        "kind": "local-function",
        "name": "isEnabled",
        "args": "",
        "line": 21
      },
      {
        "kind": "local-function",
        "name": "normalizeLevel",
        "args": "level",
        "line": 25
      },
      {
        "kind": "local-function",
        "name": "emit",
        "args": "level, ...",
        "line": 32
      },
      {
        "kind": "function",
        "name": "debugApi.isEnabled",
        "args": "",
        "line": 39
      },
      {
        "kind": "function",
        "name": "debugApi.setEnabled",
        "args": "state",
        "line": 43
      },
      {
        "kind": "function",
        "name": "debugApi.log",
        "args": "...",
        "line": 51
      },
      {
        "kind": "function",
        "name": "debugApi.info",
        "args": "...",
        "line": 55
      },
      {
        "kind": "function",
        "name": "debugApi.success",
        "args": "...",
        "line": 59
      },
      {
        "kind": "function",
        "name": "debugApi.warn",
        "args": "...",
        "line": 63
      },
      {
        "kind": "function",
        "name": "debugApi.error",
        "args": "...",
        "line": 69
      },
      {
        "kind": "table-function",
        "name": "__call",
        "args": "_, ...",
        "line": 73
      },
      {
        "kind": "assigned-function",
        "name": "__call",
        "args": "_, ...",
        "line": 74
      },
      {
        "kind": "function",
        "name": "Debug",
        "args": "level, ...",
        "line": 79
      }
    ]
  },
  {
    "path": "bridge/environment.lua",
    "context": "mixed",
    "module": "environment",
    "lines": 96,
    "records": [
      {
        "kind": "local-function",
        "name": "trim",
        "args": "value",
        "line": 17
      },
      {
        "kind": "local-function",
        "name": "normalizeBoolean",
        "args": "value, defaultValue",
        "line": 21
      },
      {
        "kind": "function",
        "name": "environment.getMode",
        "args": "",
        "line": 34
      },
      {
        "kind": "function",
        "name": "environment.isProduction",
        "args": "",
        "line": 35
      },
      {
        "kind": "function",
        "name": "environment.isDevelopment",
        "args": "",
        "line": 36
      },
      {
        "kind": "function",
        "name": "environment.isTest",
        "args": "",
        "line": 37
      },
      {
        "kind": "function",
        "name": "environment.normalizeBoolean",
        "args": "value, defaultValue",
        "line": 38
      },
      {
        "kind": "function",
        "name": "environment.getCallbackMode",
        "args": "",
        "line": 39
      },
      {
        "kind": "function",
        "name": "environment.isSecureCallbackEnabled",
        "args": "",
        "line": 40
      },
      {
        "kind": "function",
        "name": "environment.getDeveloperAce",
        "args": "",
        "line": 41
      },
      {
        "kind": "function",
        "name": "environment.getAdminAce",
        "args": "",
        "line": 42
      },
      {
        "kind": "local-function",
        "name": "isAceAllowedResult",
        "args": "value",
        "line": 44
      },
      {
        "kind": "local-function",
        "name": "playerAceAllowed",
        "args": "source, aceName",
        "line": 48
      },
      {
        "kind": "function",
        "name": "environment.hasDeveloperAccess",
        "args": "playerSource",
        "line": 70
      },
      {
        "kind": "function",
        "name": "environment.canUseDeveloperTools",
        "args": "playerSource",
        "line": 81
      },
      {
        "kind": "function",
        "name": "environment.getCallbackLimits",
        "args": "",
        "line": 86
      }
    ]
  },
  {
    "path": "bridge/fivem/blips/shared.lua",
    "context": "shared",
    "module": "fivem.blips",
    "lines": 700,
    "records": [
      {
        "kind": "local-function",
        "name": "trim",
        "args": "value",
        "line": 483
      },
      {
        "kind": "local-function",
        "name": "normalizeAssetName",
        "args": "value",
        "line": 490
      },
      {
        "kind": "local-function",
        "name": "normalizeBlipName",
        "args": "value",
        "line": 505
      },
      {
        "kind": "local-function",
        "name": "buildUrl",
        "args": "kind, value, extension, transform",
        "line": 523
      },
      {
        "kind": "local-function",
        "name": "getModelHash",
        "args": "value",
        "line": 536
      },
      {
        "kind": "function",
        "name": "blips.getSprite",
        "args": "value",
        "line": 569
      },
      {
        "kind": "function",
        "name": "blips.getSpriteName",
        "args": "value",
        "line": 582
      },
      {
        "kind": "function",
        "name": "blips.getSpriteId",
        "args": "value",
        "line": 587
      },
      {
        "kind": "function",
        "name": "blips.getColorInfo",
        "args": "colorId",
        "line": 592
      },
      {
        "kind": "function",
        "name": "blips.listSprites",
        "args": "",
        "line": 597
      },
      {
        "kind": "function",
        "name": "blips.listColors",
        "args": "",
        "line": 601
      },
      {
        "kind": "function",
        "name": "blips.setDocsBaseUrl",
        "args": "url",
        "line": 605
      },
      {
        "kind": "function",
        "name": "blips.setRagePropsBaseUrl",
        "args": "url",
        "line": 611
      },
      {
        "kind": "function",
        "name": "blips.getBlipImageUrl",
        "args": "value",
        "line": 617
      },
      {
        "kind": "function",
        "name": "blips.getPedImageUrl",
        "args": "model",
        "line": 624
      },
      {
        "kind": "function",
        "name": "blips.getVehicleImageUrl",
        "args": "model",
        "line": 628
      },
      {
        "kind": "function",
        "name": "blips.getCheckpointImageUrl",
        "args": "checkpointId",
        "line": 632
      },
      {
        "kind": "function",
        "name": "blips.getMarkerImageUrl",
        "args": "markerId",
        "line": 636
      },
      {
        "kind": "function",
        "name": "blips.getWeaponImageUrl",
        "args": "model",
        "line": 640
      },
      {
        "kind": "function",
        "name": "blips.getPropHashId",
        "args": "model",
        "line": 644
      },
      {
        "kind": "function",
        "name": "blips.getPropImageUrl",
        "args": "model",
        "line": 648
      },
      {
        "kind": "function",
        "name": "blips.getAssetImageUrl",
        "args": "kind, value",
        "line": 660
      },
      {
        "kind": "function",
        "name": "blips.describe",
        "args": "value, colorId",
        "line": 687
      }
    ]
  },
  {
    "path": "bridge/fivem/client.lua",
    "context": "client",
    "module": "fivem.client.lua",
    "lines": 129,
    "records": []
  },
  {
    "path": "bridge/fivem/devlaser/client.lua",
    "context": "client",
    "module": "fivem.devlaser",
    "lines": 912,
    "records": [
      {
        "kind": "local-function",
        "name": "bridgeDebug",
        "args": "level, message",
        "line": 24
      },
      {
        "kind": "local-function",
        "name": "getDrawText",
        "args": "",
        "line": 36
      },
      {
        "kind": "local-function",
        "name": "getInstructionalButtons",
        "args": "",
        "line": 41
      },
      {
        "kind": "local-function",
        "name": "getGizmo",
        "args": "",
        "line": 46
      },
      {
        "kind": "local-function",
        "name": "round",
        "args": "value, digits",
        "line": 51
      },
      {
        "kind": "local-function",
        "name": "numberText",
        "args": "value, digits",
        "line": 59
      },
      {
        "kind": "local-function",
        "name": "vectorText",
        "args": "value, digits",
        "line": 63
      },
      {
        "kind": "local-function",
        "name": "vec3Text",
        "args": "value, digits",
        "line": 74
      },
      {
        "kind": "local-function",
        "name": "vec4Text",
        "args": "coords, heading, digits",
        "line": 78
      },
      {
        "kind": "local-function",
        "name": "rawVec4Text",
        "args": "coords, heading, digits",
        "line": 88
      },
      {
        "kind": "local-function",
        "name": "isValidCoords",
        "args": "coords",
        "line": 98
      },
      {
        "kind": "local-function",
        "name": "entityExists",
        "args": "entity",
        "line": 108
      },
      {
        "kind": "local-function",
        "name": "getPedRelationshipType",
        "args": "value",
        "line": 112
      },
      {
        "kind": "local-function",
        "name": "labelText",
        "args": "label, value",
        "line": 116
      },
      {
        "kind": "local-function",
        "name": "rotationToDirection",
        "args": "rotation",
        "line": 120
      },
      {
        "kind": "local-function",
        "name": "rayCastGamePlayCamera",
        "args": "distance",
        "line": 134
      },
      {
        "kind": "local-function",
        "name": "canUseEntity",
        "args": "entity",
        "line": 164
      },
      {
        "kind": "local-function",
        "name": "getEntityTypeName",
        "args": "entity",
        "line": 171
      },
      {
        "kind": "local-function",
        "name": "getEntityName",
        "args": "entity, modelHash, entityType",
        "line": 189
      },
      {
        "kind": "local-function",
        "name": "getNetworkData",
        "args": "entity",
        "line": 208
      },
      {
        "kind": "local-function",
        "name": "buildEntityData",
        "args": "entity, hitCoords",
        "line": 221
      },
      {
        "kind": "local-function",
        "name": "drawEntityBoundingBox",
        "args": "entity, color",
        "line": 281
      },
      {
        "kind": "local-function",
        "name": "drawLaserSphere",
        "args": "coords, color",
        "line": 367
      },
      {
        "kind": "local-function",
        "name": "buildInfoPanelRows",
        "args": "data",
        "line": 398
      },
      {
        "kind": "local-function",
        "name": "rowsToColumns",
        "args": "rows",
        "line": 425
      },
      {
        "kind": "local-function",
        "name": "buildInfoPanels",
        "args": "data",
        "line": 437
      },
      {
        "kind": "local-function",
        "name": "rowsToText",
        "args": "section",
        "line": 441
      },
      {
        "kind": "local-function",
        "name": "cleanText",
        "args": "text",
        "line": 457
      },
      {
        "kind": "local-function",
        "name": "drawTextAtHit",
        "args": "coords, text, color",
        "line": 465
      },
      {
        "kind": "local-function",
        "name": "drawHitText",
        "args": "coords",
        "line": 498
      },
      {
        "kind": "local-function",
        "name": "drawScreenText",
        "args": "text, coords, align, wrapLeft, wrapRight, scale",
        "line": 502
      },
      {
        "kind": "local-function",
        "name": "drawEntityInfoPanels",
        "args": "data",
        "line": 545
      },
      {
        "kind": "local-function",
        "name": "controlButton",
        "args": "controlId, inputGroup",
        "line": 567
      },
      {
        "kind": "local-function",
        "name": "disposeButtons",
        "args": "",
        "line": 571
      },
      {
        "kind": "local-function",
        "name": "ensureButtons",
        "args": "",
        "line": 579
      },
      {
        "kind": "local-function",
        "name": "drawButtons",
        "args": "",
        "line": 598
      },
      {
        "kind": "local-function",
        "name": "printEntityDebug",
        "args": "data",
        "line": 605
      },
      {
        "kind": "local-function",
        "name": "stopMoveMode",
        "args": "silent",
        "line": 615
      },
      {
        "kind": "local-function",
        "name": "requestControl",
        "args": "entity, timeout",
        "line": 633
      },
      {
        "kind": "local-function",
        "name": "deleteEntity",
        "args": "entity",
        "line": 648
      },
      {
        "kind": "local-function",
        "name": "toggleFreeze",
        "args": "entity",
        "line": 658
      },
      {
        "kind": "local-function",
        "name": "wasControlReleased",
        "args": "controlId",
        "line": 667
      },
      {
        "kind": "local-function",
        "name": "isRightMouseActive",
        "args": "",
        "line": 674
      },
      {
        "kind": "local-function",
        "name": "isConfirmReleased",
        "args": "",
        "line": 685
      },
      {
        "kind": "local-function",
        "name": "isCancelReleased",
        "args": "",
        "line": 689
      },
      {
        "kind": "local-function",
        "name": "runThread",
        "args": "",
        "line": 695
      },
      {
        "kind": "function",
        "name": "DevLaser.inspectEntity",
        "args": "entity",
        "line": 773
      },
      {
        "kind": "function",
        "name": "DevLaser.getTarget",
        "args": "",
        "line": 777
      },
      {
        "kind": "function",
        "name": "DevLaser.requestControl",
        "args": "entity, timeout",
        "line": 781
      },
      {
        "kind": "function",
        "name": "DevLaser.logEntityAction",
        "args": "action, entity, value, extra",
        "line": 785
      },
      {
        "kind": "function",
        "name": "DevLaser.moveWithGizmo",
        "args": "entity",
        "line": 797
      },
      {
        "kind": "table-function",
        "name": "onFinish",
        "args": "",
        "line": 831
      },
      {
        "kind": "assigned-function",
        "name": "onFinish",
        "args": "",
        "line": 832
      },
      {
        "kind": "function",
        "name": "DevLaser.isActive",
        "args": "",
        "line": 841
      },
      {
        "kind": "function",
        "name": "DevLaser.start",
        "args": "options",
        "line": 845
      },
      {
        "kind": "function",
        "name": "DevLaser.stop",
        "args": "silent",
        "line": 869
      },
      {
        "kind": "function",
        "name": "DevLaser.toggle",
        "args": "options",
        "line": 895
      }
    ]
  },
  {
    "path": "bridge/fivem/devtools/client.lua",
    "context": "client",
    "module": "fivem.devtools",
    "lines": 1666,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 5
      },
      {
        "kind": "local-function",
        "name": "encodeJson",
        "args": "value",
        "line": 17
      },
      {
        "kind": "local-function",
        "name": "debugPlacementJson",
        "args": "event, payload",
        "line": 26
      },
      {
        "kind": "local-function",
        "name": "getDrawText",
        "args": "",
        "line": 30
      },
      {
        "kind": "local-function",
        "name": "getButtons",
        "args": "",
        "line": 35
      },
      {
        "kind": "local-function",
        "name": "getStreaming",
        "args": "",
        "line": 40
      },
      {
        "kind": "local-function",
        "name": "getEditorCamera",
        "args": "",
        "line": 45
      },
      {
        "kind": "local-function",
        "name": "norm",
        "args": "v",
        "line": 51
      },
      {
        "kind": "local-function",
        "name": "round",
        "args": "value, digits",
        "line": 57
      },
      {
        "kind": "local-function",
        "name": "rotationToDirection",
        "args": "rotation",
        "line": 62
      },
      {
        "kind": "local-function",
        "name": "modelHashFromName",
        "args": "modelName",
        "line": 76
      },
      {
        "kind": "local-function",
        "name": "requestPlacementModel",
        "args": "modelName, timeout",
        "line": 82
      },
      {
        "kind": "local-function",
        "name": "getCameraPoints",
        "args": "cam, distance",
        "line": 104
      },
      {
        "kind": "local-function",
        "name": "getCameraRaycast",
        "args": "cam, ignoreEntity, flags, distance",
        "line": 120
      },
      {
        "kind": "local-function",
        "name": "getCameraCapsuleHit",
        "args": "cam, ignoreEntity, flags, distance, radius",
        "line": 147
      },
      {
        "kind": "local-function",
        "name": "getClosestVehicleAtPoint",
        "args": "coords, radius, ignoreEntity",
        "line": 176
      },
      {
        "kind": "local-function",
        "name": "getGroundCoordsFromCamera",
        "args": "cam, ignoreEntity",
        "line": 195
      },
      {
        "kind": "local-function",
        "name": "getPlacementHitFromCamera",
        "args": "cam, ignoreEntity",
        "line": 200
      },
      {
        "kind": "local-function",
        "name": "isPedPlacement",
        "args": "placementType",
        "line": 221
      },
      {
        "kind": "local-function",
        "name": "getFallbackGroundOffset",
        "args": "",
        "line": 225
      },
      {
        "kind": "local-function",
        "name": "getModelGroundOffset",
        "args": "placementType, model",
        "line": 229
      },
      {
        "kind": "local-function",
        "name": "getFallbackModelDimensions",
        "args": "placementType, entityCentered",
        "line": 241
      },
      {
        "kind": "local-function",
        "name": "getWireframeModelDimensions",
        "args": "placementType, model, entityCentered",
        "line": 254
      },
      {
        "kind": "local-function",
        "name": "findGroundZ",
        "args": "coords, ignoreEntity",
        "line": 272
      },
      {
        "kind": "local-function",
        "name": "pedAlignedCoords",
        "args": "coords, heightOffset, ignoreEntity, supportEntity, useSurfaceHit",
        "line": 310
      },
      {
        "kind": "local-function",
        "name": "groundAlignedCoords",
        "args": "coords, placementType, modelHash, heightOffset, ignoreEntity, supportEntity, useSurfaceHit",
        "line": 321
      },
      {
        "kind": "local-function",
        "name": "pointGroundCoords",
        "args": "coords, heightOffset, ignoreEntity",
        "line": 337
      },
      {
        "kind": "local-function",
        "name": "setEntityOutline",
        "args": "entity, enabled",
        "line": 342
      },
      {
        "kind": "local-function",
        "name": "updateOutlinedEntity",
        "args": "currentEntity, nextEntity",
        "line": 346
      },
      {
        "kind": "local-function",
        "name": "drawModelWireframeAtCoords",
        "args": "placementType, coords, heading, r, g, b, a, entityCentered, model",
        "line": 361
      },
      {
        "kind": "local-function",
        "name": "worldPoint",
        "args": "x, y, z",
        "line": 370
      },
      {
        "kind": "function",
        "name": "devtools.drawModelBoxAtCoords",
        "args": "options",
        "line": 408
      },
      {
        "kind": "function",
        "name": "devtools.drawPedBox",
        "args": "coords, heading, model, options",
        "line": 430
      },
      {
        "kind": "local-function",
        "name": "draw3DWall",
        "args": "p1, p2, height, r, g, b, a",
        "line": 440
      },
      {
        "kind": "local-function",
        "name": "drawStatus",
        "args": "text",
        "line": 452
      },
      {
        "kind": "local-function",
        "name": "controlButton",
        "args": "controlId, inputGroup",
        "line": 472
      },
      {
        "kind": "local-function",
        "name": "createButtons",
        "args": "buttons",
        "line": 476
      },
      {
        "kind": "local-function",
        "name": "disposeButtons",
        "args": "buttonInstance",
        "line": 487
      },
      {
        "kind": "local-function",
        "name": "isControlJustPressedAnyGroup",
        "args": "controlId, inputGroups",
        "line": 493
      },
      {
        "kind": "local-function",
        "name": "isControlPressedAnyGroup",
        "args": "controlId, inputGroups",
        "line": 506
      },
      {
        "kind": "local-function",
        "name": "consumeHoldControl",
        "args": "controlId, nextAt, initialDelay, repeatDelay, inputGroups",
        "line": 519
      },
      {
        "kind": "local-function",
        "name": "startEditorCamera",
        "args": "playerPed, options",
        "line": 533
      },
      {
        "kind": "local-function",
        "name": "cameraSpeedModifierHeld",
        "args": "",
        "line": 547
      },
      {
        "kind": "local-function",
        "name": "editorMovementSpeed",
        "args": "cam, baseSpeed",
        "line": 551
      },
      {
        "kind": "local-function",
        "name": "updateEditorCamera",
        "args": "cam, rotX, rotZ, moveSpeed",
        "line": 567
      },
      {
        "kind": "local-function",
        "name": "cleanupCamera",
        "args": "cam, playerPed, frozen",
        "line": 579
      },
      {
        "kind": "local-function",
        "name": "deleteEntity",
        "args": "entity, previewEntities",
        "line": 595
      },
      {
        "kind": "local-function",
        "name": "createPreviewEntity",
        "args": "placementType, modelName, coords, heading, options",
        "line": 618
      },
      {
        "kind": "local-function",
        "name": "updatePreviewEntity",
        "args": "entity, coords, heading, placementType, options",
        "line": 671
      },
      {
        "kind": "local-function",
        "name": "getPlacementIndexByEntity",
        "args": "sessionGhosts, entity, previewEntities",
        "line": 701
      },
      {
        "kind": "local-function",
        "name": "getClosestPlacementIndex",
        "args": "points, coords, maxDistance",
        "line": 714
      },
      {
        "kind": "local-function",
        "name": "removePlacementAt",
        "args": "points, sessionGhosts, index, previewEntities",
        "line": 738
      },
      {
        "kind": "local-function",
        "name": "normalizePlacementAnimation",
        "args": "animation",
        "line": 754
      },
      {
        "kind": "local-function",
        "name": "playPlacementAnimation",
        "args": "entity, animation",
        "line": 768
      },
      {
        "kind": "local-function",
        "name": "updateAnimatedPedPreview",
        "args": "entity, coords, heading, animation, poses",
        "line": 787
      },
      {
        "kind": "local-function",
        "name": "formatPlacement",
        "args": "coords, heading, modelName, placementType, heightOffset, groundZ, supportEntity, supportIsEntity, animation",
        "line": 811
      },
      {
        "kind": "function",
        "name": "devtools.stop",
        "args": "",
        "line": 831
      },
      {
        "kind": "function",
        "name": "devtools.drawPolyzone3D",
        "args": "options, cb",
        "line": 837
      },
      {
        "kind": "local-function",
        "name": "updatePointFloor",
        "args": "",
        "line": 872
      },
      {
        "kind": "local-function",
        "name": "makePoint",
        "args": "coords",
        "line": 879
      },
      {
        "kind": "local-function",
        "name": "closestPoint2D",
        "args": "coords",
        "line": 888
      },
      {
        "kind": "function",
        "name": "devtools.drawSphereZone3D",
        "args": "options, cb",
        "line": 1071
      },
      {
        "kind": "function",
        "name": "devtools.startEntityPlacement",
        "args": "placementType, modelName, maxSlots, cb, options",
        "line": 1194
      },
      {
        "kind": "local-function",
        "name": "changePlacementModel",
        "args": "direction",
        "line": 1311
      },
      {
        "kind": "local-function",
        "name": "changePlacementAnimation",
        "args": "direction",
        "line": 1332
      },
      {
        "kind": "local-function",
        "name": "cleanup",
        "args": "",
        "line": 1341
      },
      {
        "kind": "local-function",
        "name": "upsertPlacement",
        "args": "index, placed, coords, heading",
        "line": 1353
      },
      {
        "kind": "local-function",
        "name": "addOrUpdatePlacement",
        "args": "placed, coords, heading",
        "line": 1391
      },
      {
        "kind": "function",
        "name": "devtools.placeVehicle",
        "args": "modelName, maxSlots, cb, options",
        "line": 1629
      },
      {
        "kind": "function",
        "name": "devtools.placePed",
        "args": "modelName, maxSlots, cb, options",
        "line": 1633
      },
      {
        "kind": "function",
        "name": "devtools.placeAnimatedPed",
        "args": "modelName, maxSlots, animations, cb, options",
        "line": 1637
      },
      {
        "kind": "function",
        "name": "devtools.placeObject",
        "args": "modelName, maxSlots, cb, options",
        "line": 1644
      }
    ]
  },
  {
    "path": "bridge/fivem/drawtext/client.lua",
    "context": "client",
    "module": "fivem.drawtext",
    "lines": 258,
    "records": [
      {
        "kind": "local-function",
        "name": "toVec2",
        "args": "value, fallback",
        "line": 22
      },
      {
        "kind": "local-function",
        "name": "toVec3",
        "args": "value, fallback",
        "line": 28
      },
      {
        "kind": "local-function",
        "name": "toVec4",
        "args": "value, fallback",
        "line": 34
      },
      {
        "kind": "local-function",
        "name": "getColorChannels",
        "args": "color",
        "line": 46
      },
      {
        "kind": "local-function",
        "name": "normalize2dParams",
        "args": "text, position, options",
        "line": 54
      },
      {
        "kind": "local-function",
        "name": "normalizeScale2",
        "args": "value",
        "line": 78
      },
      {
        "kind": "local-function",
        "name": "normalizeAlign",
        "args": "value",
        "line": 85
      },
      {
        "kind": "local-function",
        "name": "applyTextAlign",
        "args": "align, wrapLeft, wrapRight",
        "line": 93
      },
      {
        "kind": "function",
        "name": "drawtext.drawText2d",
        "args": "params",
        "line": 112
      },
      {
        "kind": "function",
        "name": "drawtext.drawText3d",
        "args": "params",
        "line": 145
      },
      {
        "kind": "local-function",
        "name": "ensureThread",
        "args": "",
        "line": 183
      },
      {
        "kind": "function",
        "name": "drawtext.show",
        "args": "text, position, options",
        "line": 200
      },
      {
        "kind": "function",
        "name": "drawtext.change",
        "args": "text, position, options",
        "line": 208
      },
      {
        "kind": "function",
        "name": "drawtext.hide",
        "args": "",
        "line": 212
      },
      {
        "kind": "function",
        "name": "drawtext.keyPressed",
        "args": "delay",
        "line": 219
      },
      {
        "kind": "function",
        "name": "drawtext.isOpen",
        "args": "",
        "line": 226
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:DrawText",
        "args": "text, position",
        "line": 241
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:ChangeText",
        "args": "text, position",
        "line": 245
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:HideText",
        "args": "",
        "line": 249
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:KeyPressed",
        "args": "",
        "line": 253
      }
    ]
  },
  {
    "path": "bridge/fivem/drawtext/server.lua",
    "context": "server",
    "module": "fivem.drawtext",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/fivem/dui/client.lua",
    "context": "client",
    "module": "fivem.dui",
    "lines": 2017,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 13
      },
      {
        "kind": "local-function",
        "name": "stopRenderTargetForInstance",
        "args": "instance",
        "line": 25
      },
      {
        "kind": "local-function",
        "name": "encodeJson",
        "args": "value",
        "line": 46
      },
      {
        "kind": "local-function",
        "name": "waitUntil",
        "args": "predicate, timeout",
        "line": 57
      },
      {
        "kind": "local-function",
        "name": "sanitizeName",
        "args": "value, fallback",
        "line": 68
      },
      {
        "kind": "local-function",
        "name": "nextId",
        "args": "id",
        "line": 76
      },
      {
        "kind": "local-function",
        "name": "makeRuntimeName",
        "args": "kind, id",
        "line": 83
      },
      {
        "kind": "local-function",
        "name": "hash",
        "args": "value",
        "line": 87
      },
      {
        "kind": "local-function",
        "name": "getEntityFromNetId",
        "args": "netId, timeout",
        "line": 93
      },
      {
        "kind": "local-function",
        "name": "resolveEntity",
        "args": "",
        "line": 97
      },
      {
        "kind": "local-function",
        "name": "toVector2",
        "args": "value, fallback",
        "line": 112
      },
      {
        "kind": "local-function",
        "name": "toVector3",
        "args": "value, fallback",
        "line": 120
      },
      {
        "kind": "local-function",
        "name": "toVector4",
        "args": "value, fallback",
        "line": 136
      },
      {
        "kind": "local-function",
        "name": "colorChannels",
        "args": "value",
        "line": 148
      },
      {
        "kind": "local-function",
        "name": "normalizeUrl",
        "args": "url, ownerResource",
        "line": 157
      },
      {
        "kind": "local-function",
        "name": "resolve",
        "args": "target",
        "line": 170
      },
      {
        "kind": "local-function",
        "name": "normalizeSpriteOptions",
        "args": "options",
        "line": 186
      },
      {
        "kind": "local-function",
        "name": "clamp01",
        "args": "value",
        "line": 203
      },
      {
        "kind": "local-function",
        "name": "projectWorldToScreen",
        "args": "coords",
        "line": 210
      },
      {
        "kind": "local-function",
        "name": "getProjectedBounds",
        "args": "points",
        "line": 219
      },
      {
        "kind": "local-function",
        "name": "getEntityScreenBounds",
        "args": "entity",
        "line": 245
      },
      {
        "kind": "local-function",
        "name": "getPolyScreenBounds",
        "args": "poly",
        "line": 267
      },
      {
        "kind": "local-function",
        "name": "getMouseBounds",
        "args": "instance",
        "line": 289
      },
      {
        "kind": "local-function",
        "name": "getMappedMousePosition",
        "args": "instance",
        "line": 329
      },
      {
        "kind": "local-function",
        "name": "resolveColor",
        "args": "instance, overrideColor",
        "line": 358
      },
      {
        "kind": "local-function",
        "name": "drawDuiSprite",
        "args": "instance, options",
        "line": 376
      },
      {
        "kind": "local-function",
        "name": "drawPolyPreview",
        "args": "pointA, pointB, minZ, maxZ, color",
        "line": 395
      },
      {
        "kind": "local-function",
        "name": "drawPoly4Preview",
        "args": "p1, p2, p3, p4, color",
        "line": 402
      },
      {
        "kind": "local-function",
        "name": "drawDuiOnArea",
        "args": "instance, poly",
        "line": 412
      },
      {
        "kind": "local-function",
        "name": "shouldDrawPoly",
        "args": "poly, playerCoords, ped",
        "line": 532
      },
      {
        "kind": "local-function",
        "name": "ensurePolyThread",
        "args": "",
        "line": 577
      },
      {
        "kind": "local-function",
        "name": "showHelp",
        "args": "text",
        "line": 615
      },
      {
        "kind": "local-function",
        "name": "rotationToDirection",
        "args": "rotation",
        "line": 621
      },
      {
        "kind": "local-function",
        "name": "raycastFromCamera",
        "args": "distance, flags, ignoreEntity",
        "line": 635
      },
      {
        "kind": "local-function",
        "name": "bindInstanceMethods",
        "args": "instance",
        "line": 664
      },
      {
        "kind": "function",
        "name": "instance:destroy",
        "args": "",
        "line": 665
      },
      {
        "kind": "function",
        "name": "instance:remove",
        "args": "",
        "line": 669
      },
      {
        "kind": "function",
        "name": "instance:setUrl",
        "args": "url",
        "line": 673
      },
      {
        "kind": "function",
        "name": "instance:send",
        "args": "message",
        "line": 677
      },
      {
        "kind": "function",
        "name": "instance:sendMessage",
        "args": "message",
        "line": 681
      },
      {
        "kind": "function",
        "name": "instance:sendMouseMove",
        "args": "x, y",
        "line": 685
      },
      {
        "kind": "function",
        "name": "instance:sendMouseDown",
        "args": "button",
        "line": 689
      },
      {
        "kind": "function",
        "name": "instance:sendMouseUp",
        "args": "button",
        "line": 693
      },
      {
        "kind": "function",
        "name": "instance:sendMouseWheel",
        "args": "deltaX, deltaY",
        "line": 697
      },
      {
        "kind": "function",
        "name": "instance:enableMouse",
        "args": "options",
        "line": 701
      },
      {
        "kind": "function",
        "name": "instance:disableMouse",
        "args": "",
        "line": 705
      },
      {
        "kind": "function",
        "name": "instance:toggleMouse",
        "args": "state",
        "line": 709
      },
      {
        "kind": "function",
        "name": "instance:drawSprite",
        "args": "options",
        "line": 713
      },
      {
        "kind": "function",
        "name": "instance:startSprite",
        "args": "options",
        "line": 717
      },
      {
        "kind": "function",
        "name": "instance:stopSprite",
        "args": "",
        "line": 721
      },
      {
        "kind": "function",
        "name": "instance:replaceTexture",
        "args": "options",
        "line": 725
      },
      {
        "kind": "function",
        "name": "instance:removeReplaceTexture",
        "args": "options",
        "line": 729
      },
      {
        "kind": "function",
        "name": "instance:renderTarget",
        "args": "options",
        "line": 733
      },
      {
        "kind": "function",
        "name": "instance:stopRenderTarget",
        "args": "",
        "line": 737
      },
      {
        "kind": "function",
        "name": "instance:startPoly",
        "args": "options",
        "line": 741
      },
      {
        "kind": "function",
        "name": "instance:stopPoly",
        "args": "",
        "line": 745
      },
      {
        "kind": "function",
        "name": "instance:focus",
        "args": "options",
        "line": 749
      },
      {
        "kind": "function",
        "name": "instance:setOpacity",
        "args": "opacity",
        "line": 753
      },
      {
        "kind": "function",
        "name": "instance:setBrightness",
        "args": "brightness",
        "line": 757
      },
      {
        "kind": "function",
        "name": "dui.url",
        "args": "path, ownerResource",
        "line": 762
      },
      {
        "kind": "function",
        "name": "dui.nuiUrl",
        "args": "path, ownerResource",
        "line": 766
      },
      {
        "kind": "function",
        "name": "dui.create",
        "args": "options, width, height",
        "line": 770
      },
      {
        "kind": "function",
        "name": "dui.get",
        "args": "id",
        "line": 854
      },
      {
        "kind": "function",
        "name": "dui.list",
        "args": "",
        "line": 858
      },
      {
        "kind": "function",
        "name": "dui.destroy",
        "args": "target",
        "line": 862
      },
      {
        "kind": "function",
        "name": "dui.setUrl",
        "args": "target, url",
        "line": 897
      },
      {
        "kind": "function",
        "name": "dui.send",
        "args": "target, message",
        "line": 910
      },
      {
        "kind": "function",
        "name": "dui.sendMouseMove",
        "args": "target, x, y",
        "line": 920
      },
      {
        "kind": "function",
        "name": "dui.sendMouseDown",
        "args": "target, button",
        "line": 928
      },
      {
        "kind": "function",
        "name": "dui.sendMouseUp",
        "args": "target, button",
        "line": 936
      },
      {
        "kind": "function",
        "name": "dui.sendMouseWheel",
        "args": "target, deltaX, deltaY",
        "line": 944
      },
      {
        "kind": "function",
        "name": "dui.drawSprite",
        "args": "target, options",
        "line": 952
      },
      {
        "kind": "function",
        "name": "dui.startSprite",
        "args": "target, options",
        "line": 960
      },
      {
        "kind": "function",
        "name": "dui.stopSprite",
        "args": "target",
        "line": 983
      },
      {
        "kind": "local-function",
        "name": "applyReplaceTexture",
        "args": "instance, options",
        "line": 993
      },
      {
        "kind": "function",
        "name": "dui.replaceTexture",
        "args": "target, options",
        "line": 1015
      },
      {
        "kind": "function",
        "name": "dui.removeReplaceTexture",
        "args": "target, options",
        "line": 1054
      },
      {
        "kind": "local-function",
        "name": "startRenderTarget",
        "args": "instance, options",
        "line": 1078
      },
      {
        "kind": "function",
        "name": "dui.renderTarget",
        "args": "target, options",
        "line": 1156
      },
      {
        "kind": "function",
        "name": "dui.stopRenderTarget",
        "args": "target",
        "line": 1181
      },
      {
        "kind": "function",
        "name": "dui.startPoly",
        "args": "target, options",
        "line": 1190
      },
      {
        "kind": "function",
        "name": "dui.poly",
        "args": "target, options",
        "line": 1250
      },
      {
        "kind": "function",
        "name": "dui.stopPoly",
        "args": "target",
        "line": 1272
      },
      {
        "kind": "local-function",
        "name": "setMouseState",
        "args": "instance, state",
        "line": 1283
      },
      {
        "kind": "local-function",
        "name": "sendMouseFrame",
        "args": "instance",
        "line": 1305
      },
      {
        "kind": "function",
        "name": "dui.enableMouse",
        "args": "target, options",
        "line": 1335
      },
      {
        "kind": "function",
        "name": "dui.disableMouse",
        "args": "target",
        "line": 1401
      },
      {
        "kind": "function",
        "name": "dui.toggleMouse",
        "args": "target, state",
        "line": 1416
      },
      {
        "kind": "function",
        "name": "dui.setOpacity",
        "args": "target, opacity",
        "line": 1428
      },
      {
        "kind": "function",
        "name": "dui.setBrightness",
        "args": "target, brightness",
        "line": 1440
      },
      {
        "kind": "function",
        "name": "dui.focus",
        "args": "target, options",
        "line": 1452
      },
      {
        "kind": "function",
        "name": "dui.unfocus",
        "args": "",
        "line": 1519
      },
      {
        "kind": "function",
        "name": "dui.builder.startPoly",
        "args": "options",
        "line": 1540
      },
      {
        "kind": "function",
        "name": "dui.builder.createPoly",
        "args": "options",
        "line": 1628
      },
      {
        "kind": "function",
        "name": "dui.builder.startPoly4",
        "args": "options",
        "line": 1641
      },
      {
        "kind": "function",
        "name": "dui.builder.createPoly4",
        "args": "options",
        "line": 1753
      },
      {
        "kind": "function",
        "name": "dui.builder.entityRenderTarget",
        "args": "entity, options",
        "line": 1766
      },
      {
        "kind": "function",
        "name": "dui.builder.textureReplacement",
        "args": "textureDict, textureName, options",
        "line": 1785
      },
      {
        "kind": "function",
        "name": "dui.builder.startIdentifyPropTexture",
        "args": "options",
        "line": 1810
      },
      {
        "kind": "function",
        "name": "dui.builder.createReplaceTextureInteractive",
        "args": "options",
        "line": 1884
      },
      {
        "kind": "function",
        "name": "dui.createSprite",
        "args": "options",
        "line": 1899
      },
      {
        "kind": "local-function",
        "name": "isForThisResource",
        "args": "owner",
        "line": 1912
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:create",
        "args": "owner, options",
        "line": 1916
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:createSprite",
        "args": "owner, options",
        "line": 1921
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:createRenderTarget",
        "args": "owner, options",
        "line": 1926
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:createReplaceTexture",
        "args": "owner, options",
        "line": 1931
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:createPoly",
        "args": "owner, options",
        "line": 1936
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:destroy",
        "args": "owner, id",
        "line": 1941
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:setUrl",
        "args": "owner, id, url",
        "line": 1946
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:send",
        "args": "owner, id, message",
        "line": 1951
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:startSprite",
        "args": "owner, id, options",
        "line": 1956
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:stopSprite",
        "args": "owner, id",
        "line": 1961
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:stopRenderTarget",
        "args": "owner, id",
        "line": 1966
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:stopPoly",
        "args": "owner, id",
        "line": 1971
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:setOpacity",
        "args": "owner, id, opacity",
        "line": 1976
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:setBrightness",
        "args": "owner, id, brightness",
        "line": 1981
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:createPoly4",
        "args": "owner, options",
        "line": 1986
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:stopPoly4",
        "args": "owner, id",
        "line": 1991
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:client:dui:createReplaceTextureInteractive",
        "args": "owner, options",
        "line": 1996
      },
      {
        "kind": "event-handler",
        "name": "onResourceStop",
        "args": "stoppedResource",
        "line": 2006
      }
    ]
  },
  {
    "path": "bridge/fivem/dui/server.lua",
    "context": "server",
    "module": "fivem.dui",
    "lines": 325,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 7
      },
      {
        "kind": "local-function",
        "name": "sanitizeName",
        "args": "value, fallback",
        "line": 19
      },
      {
        "kind": "local-function",
        "name": "nextId",
        "args": "id",
        "line": 27
      },
      {
        "kind": "local-function",
        "name": "normalizeTarget",
        "args": "target, fallback",
        "line": 34
      },
      {
        "kind": "local-function",
        "name": "normalizeTargetAndOptions",
        "args": "target, options",
        "line": 40
      },
      {
        "kind": "local-function",
        "name": "cloneConfig",
        "args": "config",
        "line": 48
      },
      {
        "kind": "local-function",
        "name": "storeSession",
        "args": "kind, id, options",
        "line": 63
      },
      {
        "kind": "local-function",
        "name": "dispatch",
        "args": "eventName, target, ...",
        "line": 71
      },
      {
        "kind": "local-function",
        "name": "create",
        "args": "kind, eventName, target, options",
        "line": 75
      },
      {
        "kind": "function",
        "name": "dui.create",
        "args": "target, options",
        "line": 89
      },
      {
        "kind": "function",
        "name": "dui.createSprite",
        "args": "target, options",
        "line": 93
      },
      {
        "kind": "function",
        "name": "dui.createRenderTarget",
        "args": "target, options",
        "line": 97
      },
      {
        "kind": "function",
        "name": "dui.renderTarget",
        "args": "target, options",
        "line": 101
      },
      {
        "kind": "function",
        "name": "dui.createReplaceTexture",
        "args": "target, options",
        "line": 105
      },
      {
        "kind": "function",
        "name": "dui.replaceTexture",
        "args": "target, options",
        "line": 109
      },
      {
        "kind": "function",
        "name": "dui.createPoly",
        "args": "target, options",
        "line": 113
      },
      {
        "kind": "function",
        "name": "dui.poly",
        "args": "target, options",
        "line": 117
      },
      {
        "kind": "function",
        "name": "dui.createPoly4",
        "args": "target, options",
        "line": 121
      },
      {
        "kind": "function",
        "name": "dui.poly4",
        "args": "target, options",
        "line": 125
      },
      {
        "kind": "function",
        "name": "dui.destroy",
        "args": "target, id",
        "line": 129
      },
      {
        "kind": "function",
        "name": "dui.remove",
        "args": "target, id",
        "line": 143
      },
      {
        "kind": "function",
        "name": "dui.setUrl",
        "args": "target, id, url",
        "line": 147
      },
      {
        "kind": "function",
        "name": "dui.setOpacity",
        "args": "target, id, opacity",
        "line": 167
      },
      {
        "kind": "function",
        "name": "dui.setBrightness",
        "args": "target, id, brightness",
        "line": 186
      },
      {
        "kind": "function",
        "name": "dui.send",
        "args": "target, id, message",
        "line": 205
      },
      {
        "kind": "function",
        "name": "dui.startSprite",
        "args": "target, id, options",
        "line": 222
      },
      {
        "kind": "function",
        "name": "dui.stopSprite",
        "args": "target, id",
        "line": 235
      },
      {
        "kind": "function",
        "name": "dui.stopRenderTarget",
        "args": "target, id",
        "line": 247
      },
      {
        "kind": "function",
        "name": "dui.stopPoly",
        "args": "target, id",
        "line": 259
      },
      {
        "kind": "function",
        "name": "dui.sync",
        "args": "target",
        "line": 271
      },
      {
        "kind": "function",
        "name": "dui.clear",
        "args": "target",
        "line": 293
      },
      {
        "kind": "function",
        "name": "dui.get",
        "args": "id",
        "line": 302
      },
      {
        "kind": "function",
        "name": "dui.list",
        "args": "",
        "line": 306
      },
      {
        "kind": "net-event",
        "name": "pr_bridge:server:dui:ready",
        "args": "owner",
        "line": 310
      },
      {
        "kind": "event-handler",
        "name": "playerDropped",
        "args": "",
        "line": 320
      }
    ]
  },
  {
    "path": "bridge/fivem/editorCamera/client.lua",
    "context": "client",
    "module": "fivem.editorCamera",
    "lines": 419,
    "records": [
      {
        "kind": "local-function",
        "name": "getActiveGizmo",
        "args": "",
        "line": 21
      },
      {
        "kind": "local-function",
        "name": "norm",
        "args": "v",
        "line": 27
      },
      {
        "kind": "local-function",
        "name": "rotationToDirection",
        "args": "rotation",
        "line": 33
      },
      {
        "kind": "function",
        "name": "EditorCamera.getCameraTargetPosition",
        "args": "",
        "line": 48
      },
      {
        "kind": "function",
        "name": "EditorCamera.updateCameraPosition",
        "args": "",
        "line": 61
      },
      {
        "kind": "function",
        "name": "EditorCamera.handleCameraControls",
        "args": "",
        "line": 86
      },
      {
        "kind": "function",
        "name": "EditorCamera.cursorLock",
        "args": "",
        "line": 139
      },
      {
        "kind": "function",
        "name": "EditorCamera.start",
        "args": "targetEntity",
        "line": 150
      },
      {
        "kind": "function",
        "name": "EditorCamera.stop",
        "args": "",
        "line": 187
      },
      {
        "kind": "function",
        "name": "EditorCamera.startFreecam",
        "args": "options",
        "line": 208
      },
      {
        "kind": "function",
        "name": "EditorCamera.updateFreecam",
        "args": "state, moveSpeed",
        "line": 249
      },
      {
        "kind": "function",
        "name": "EditorCamera.getFreecamTargetCoords",
        "args": "state, options",
        "line": 297
      },
      {
        "kind": "function",
        "name": "EditorCamera.stopFreecam",
        "args": "state",
        "line": 330
      },
      {
        "kind": "function",
        "name": "EditorCamera.isFreecamActive",
        "args": "",
        "line": 346
      },
      {
        "kind": "function",
        "name": "EditorCamera.smoothTransitionToEntity",
        "args": "entity, targetRadius",
        "line": 354
      },
      {
        "kind": "function",
        "name": "MirrorOffset",
        "args": "offset",
        "line": 402
      },
      {
        "kind": "function",
        "name": "MirrorRotation",
        "args": "rot",
        "line": 408
      }
    ]
  },
  {
    "path": "bridge/fivem/editorCamera/server.lua",
    "context": "server",
    "module": "fivem.editorCamera",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/fivem/gizmo/client.lua",
    "context": "client",
    "module": "fivem.gizmo",
    "lines": 2787,
    "records": [
      {
        "kind": "local-function",
        "name": "bridgeDebug",
        "args": "level, message",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "getInstructionalButtons",
        "args": "",
        "line": 26
      },
      {
        "kind": "local-function",
        "name": "getDrawText",
        "args": "",
        "line": 31
      },
      {
        "kind": "local-function",
        "name": "getEditorCamera",
        "args": "",
        "line": 36
      },
      {
        "kind": "local-function",
        "name": "getStreaming",
        "args": "",
        "line": 42
      },
      {
        "kind": "local-function",
        "name": "getAddKeybind",
        "args": "",
        "line": 47
      },
      {
        "kind": "local-function",
        "name": "sendGizmoNui",
        "args": "action, data",
        "line": 52
      },
      {
        "kind": "local-function",
        "name": "safeGizmoCall",
        "args": "label, callback",
        "line": 60
      },
      {
        "kind": "local-function",
        "name": "sign",
        "args": "n",
        "line": 221
      },
      {
        "kind": "local-function",
        "name": "vec3Normalize",
        "args": "v",
        "line": 225
      },
      {
        "kind": "local-function",
        "name": "vec3Dot",
        "args": "a, b",
        "line": 233
      },
      {
        "kind": "local-function",
        "name": "vec3Cross",
        "args": "a, b",
        "line": 237
      },
      {
        "kind": "local-function",
        "name": "vec3LengthSq",
        "args": "v",
        "line": 245
      },
      {
        "kind": "local-function",
        "name": "vec3Length",
        "args": "v",
        "line": 249
      },
      {
        "kind": "local-function",
        "name": "clampNumber",
        "args": "value, minValue, maxValue",
        "line": 253
      },
      {
        "kind": "local-function",
        "name": "vectorToOrbitAngles",
        "args": "direction",
        "line": 260
      },
      {
        "kind": "local-function",
        "name": "orbitAnglesToVector",
        "args": "yaw, pitch",
        "line": 267
      },
      {
        "kind": "local-function",
        "name": "getMouseLookInput",
        "args": "",
        "line": 276
      },
      {
        "kind": "local-function",
        "name": "axisAngleToQuat",
        "args": "axis, angle",
        "line": 292
      },
      {
        "kind": "local-function",
        "name": "quatMultiply",
        "args": "a, b",
        "line": 304
      },
      {
        "kind": "local-function",
        "name": "quatToEuler",
        "args": "q",
        "line": 314
      },
      {
        "kind": "local-function",
        "name": "eulerToQuat",
        "args": "euler",
        "line": 322
      },
      {
        "kind": "local-function",
        "name": "rejectFromNormal",
        "args": "v, normal",
        "line": 338
      },
      {
        "kind": "local-function",
        "name": "angleBetweenOnPlane",
        "args": "a, b, planeNormal",
        "line": 344
      },
      {
        "kind": "local-function",
        "name": "quatNormalize",
        "args": "q",
        "line": 357
      },
      {
        "kind": "local-function",
        "name": "quatMul2",
        "args": "a, b",
        "line": 366
      },
      {
        "kind": "local-function",
        "name": "getEntityBasis",
        "args": "entity",
        "line": 379
      },
      {
        "kind": "local-function",
        "name": "worldToLocal",
        "args": "entity, worldPos",
        "line": 386
      },
      {
        "kind": "local-function",
        "name": "localToWorld",
        "args": "entity, localPos",
        "line": 392
      },
      {
        "kind": "local-function",
        "name": "getCameraInfo",
        "args": "",
        "line": 397
      },
      {
        "kind": "local-function",
        "name": "pixelToScreenRatio",
        "args": "px",
        "line": 417
      },
      {
        "kind": "local-function",
        "name": "drawLine3D",
        "args": "from, to, r, g, b, a, thickness",
        "line": 423
      },
      {
        "kind": "local-function",
        "name": "projectWorldPoint",
        "args": "point",
        "line": 433
      },
      {
        "kind": "local-function",
        "name": "drawFilledTriangle2D",
        "args": "tip, baseA, baseB, r, g, b, a, steps",
        "line": 439
      },
      {
        "kind": "local-function",
        "name": "drawFilledQuad3DOverlay",
        "args": "p1, p2, p3, p4, r, g, b, a, steps",
        "line": 452
      },
      {
        "kind": "local-function",
        "name": "rotateVectorAroundAxis",
        "args": "value, axis, angle",
        "line": 473
      },
      {
        "kind": "local-function",
        "name": "drawWorldAngleLabel",
        "args": "position, degrees",
        "line": 481
      },
      {
        "kind": "local-function",
        "name": "screenToWorldRay",
        "args": "screenX, screenY",
        "line": 496
      },
      {
        "kind": "local-function",
        "name": "rayPlaneIntersect",
        "args": "rayOrigin, rayDir, planePoint, planeNormal",
        "line": 511
      },
      {
        "kind": "local-function",
        "name": "bestViewPlane",
        "args": "camPos, targetPos",
        "line": 520
      },
      {
        "kind": "local-function",
        "name": "getEntityQuat",
        "args": "entity",
        "line": 529
      },
      {
        "kind": "local-function",
        "name": "setEntityQuat",
        "args": "entity, q",
        "line": 535
      },
      {
        "kind": "function",
        "name": "Gizmo.getDisplayBasis",
        "args": "",
        "line": 547
      },
      {
        "kind": "function",
        "name": "Gizmo.getGizmoPosition",
        "args": "",
        "line": 554
      },
      {
        "kind": "function",
        "name": "Gizmo.setOffset",
        "args": "off",
        "line": 562
      },
      {
        "kind": "function",
        "name": "Gizmo.getOffset",
        "args": "",
        "line": 566
      },
      {
        "kind": "function",
        "name": "Gizmo.getGizmoWorldPosition",
        "args": "",
        "line": 570
      },
      {
        "kind": "function",
        "name": "Gizmo.focusEditorCamera",
        "args": "silent",
        "line": 575
      },
      {
        "kind": "function",
        "name": "Gizmo.releaseEditorCamera",
        "args": "silent",
        "line": 599
      },
      {
        "kind": "local-function",
        "name": "cloneVector3",
        "args": "value",
        "line": 613
      },
      {
        "kind": "local-function",
        "name": "callSessionHandler",
        "args": "label, handler, ...",
        "line": 618
      },
      {
        "kind": "function",
        "name": "Gizmo.getResult",
        "args": "",
        "line": 626
      },
      {
        "kind": "function",
        "name": "Gizmo.isActive",
        "args": "",
        "line": 630
      },
      {
        "kind": "function",
        "name": "Gizmo.buildResult",
        "args": "confirmed, reason",
        "line": 634
      },
      {
        "kind": "function",
        "name": "Gizmo.updateNui",
        "args": "force",
        "line": 657
      },
      {
        "kind": "function",
        "name": "Gizmo.openModalUi",
        "args": "",
        "line": 683
      },
      {
        "kind": "function",
        "name": "Gizmo.closeModalUi",
        "args": "",
        "line": 697
      },
      {
        "kind": "function",
        "name": "Gizmo.finish",
        "args": "confirmed, reason",
        "line": 710
      },
      {
        "kind": "function",
        "name": "Gizmo.confirm",
        "args": "reason",
        "line": 753
      },
      {
        "kind": "function",
        "name": "Gizmo.cancel",
        "args": "reason",
        "line": 757
      },
      {
        "kind": "function",
        "name": "Gizmo.runAction",
        "args": "action, reason",
        "line": 763
      },
      {
        "kind": "function",
        "name": "Gizmo.handleSessionInput",
        "args": "",
        "line": 813
      },
      {
        "kind": "function",
        "name": "Gizmo.await",
        "args": "entity, callback, offset, options",
        "line": 833
      },
      {
        "kind": "local-function",
        "name": "optionEnabled",
        "args": "options, name, default",
        "line": 849
      },
      {
        "kind": "function",
        "name": "Gizmo.start",
        "args": "entity, callback, offset, options",
        "line": 854
      },
      {
        "kind": "function",
        "name": "Gizmo.stop",
        "args": "",
        "line": 981
      },
      {
        "kind": "function",
        "name": "Gizmo.setBeforeTransformCallback",
        "args": "callback",
        "line": 1038
      },
      {
        "kind": "function",
        "name": "Gizmo.ResetPrecisionKeys",
        "args": "",
        "line": 1042
      },
      {
        "kind": "function",
        "name": "Gizmo.HasPrecisionRotationInput",
        "args": "",
        "line": 1049
      },
      {
        "kind": "function",
        "name": "Gizmo.isPrecisionMode",
        "args": "",
        "line": 1056
      },
      {
        "kind": "function",
        "name": "Gizmo.isFreeCameraMode",
        "args": "",
        "line": 1067
      },
      {
        "kind": "function",
        "name": "Gizmo.setFreeCameraMode",
        "args": "enabled, silent",
        "line": 1071
      },
      {
        "kind": "function",
        "name": "Gizmo.toggleFreeCameraMode",
        "args": "",
        "line": 1140
      },
      {
        "kind": "function",
        "name": "Gizmo.applyControlLocks",
        "args": "",
        "line": 1144
      },
      {
        "kind": "function",
        "name": "Gizmo.setPrecisionMode",
        "args": "enabled, silent",
        "line": 1155
      },
      {
        "kind": "function",
        "name": "Gizmo.togglePrecisionMode",
        "args": "",
        "line": 1181
      },
      {
        "kind": "function",
        "name": "Gizmo.setPrecisionModeProvider",
        "args": "callback",
        "line": 1185
      },
      {
        "kind": "function",
        "name": "Gizmo.getPrecisionSpeed",
        "args": "",
        "line": 1190
      },
      {
        "kind": "function",
        "name": "Gizmo.setPrecisionSpeed",
        "args": "value",
        "line": 1194
      },
      {
        "kind": "function",
        "name": "Gizmo.adjustPrecisionSpeed",
        "args": "delta",
        "line": 1201
      },
      {
        "kind": "local-function",
        "name": "isControlJustPressedAny",
        "args": "...",
        "line": 1205
      },
      {
        "kind": "function",
        "name": "Gizmo.handlePrecisionToggleInput",
        "args": "",
        "line": 1216
      },
      {
        "kind": "function",
        "name": "Gizmo.handlePrecisionSpeedInput",
        "args": "",
        "line": 1221
      },
      {
        "kind": "function",
        "name": "Gizmo.handleInstructionalActions",
        "args": "",
        "line": 1231
      },
      {
        "kind": "function",
        "name": "Gizmo.toggleMode",
        "args": "",
        "line": 1240
      },
      {
        "kind": "function",
        "name": "Gizmo.getSpeedModifier",
        "args": "",
        "line": 1259
      },
      {
        "kind": "function",
        "name": "Gizmo.getMousePosition",
        "args": "",
        "line": 1264
      },
      {
        "kind": "function",
        "name": "Gizmo.getAxisDirection",
        "args": "axis, keepSign",
        "line": 1273
      },
      {
        "kind": "function",
        "name": "Gizmo.getPlaneNormal",
        "args": "plane",
        "line": 1297
      },
      {
        "kind": "function",
        "name": "Gizmo.getRotationRingBasis",
        "args": "axis",
        "line": 1310
      },
      {
        "kind": "function",
        "name": "Gizmo.getColorAlpha",
        "args": "axisName, colorSet",
        "line": 1323
      },
      {
        "kind": "function",
        "name": "Gizmo.checkPointNearMouse",
        "args": "worldPoint, mx, my",
        "line": 1337
      },
      {
        "kind": "function",
        "name": "Gizmo.checkLineSegment",
        "args": "from, to, mx, my, samples",
        "line": 1346
      },
      {
        "kind": "function",
        "name": "Gizmo.checkLineSegmentNearMouse",
        "args": "from, to, mx, my, threshold",
        "line": 1369
      },
      {
        "kind": "function",
        "name": "Gizmo.checkPlane",
        "args": "mx, my, center, planeName",
        "line": 1392
      },
      {
        "kind": "function",
        "name": "Gizmo.checkCenterSquare",
        "args": "mx, my, center",
        "line": 1423
      },
      {
        "kind": "function",
        "name": "Gizmo.updateHover",
        "args": "mx, my",
        "line": 1445
      },
      {
        "kind": "local-function",
        "name": "addCandidate",
        "args": "axis, distance, priority",
        "line": 1451
      },
      {
        "kind": "function",
        "name": "Gizmo.beginAxisDrag",
        "args": "axis, mx, my",
        "line": 1508
      },
      {
        "kind": "function",
        "name": "Gizmo.setCoords",
        "args": "x, y, z",
        "line": 1535
      },
      {
        "kind": "local-function",
        "name": "getEntityModelSafe",
        "args": "entity",
        "line": 1546
      },
      {
        "kind": "local-function",
        "name": "getEntityGroundOffset",
        "args": "entity",
        "line": 1554
      },
      {
        "kind": "function",
        "name": "Gizmo.placeEntityOnGround",
        "args": "",
        "line": 1567
      },
      {
        "kind": "function",
        "name": "Gizmo.updateAxisDrag",
        "args": "mx, my",
        "line": 1604
      },
      {
        "kind": "function",
        "name": "Gizmo.beginPlaneDrag",
        "args": "plane, mx, my",
        "line": 1625
      },
      {
        "kind": "function",
        "name": "Gizmo.beginFreeDrag",
        "args": "mx, my",
        "line": 1647
      },
      {
        "kind": "function",
        "name": "Gizmo.updateFreeDrag",
        "args": "mx, my",
        "line": 1670
      },
      {
        "kind": "function",
        "name": "Gizmo.updatePlaneDrag",
        "args": "mx, my",
        "line": 1690
      },
      {
        "kind": "function",
        "name": "Gizmo.beginRotationDrag",
        "args": "axis, mx, my",
        "line": 1718
      },
      {
        "kind": "function",
        "name": "Gizmo.updateRotationDrag",
        "args": "mx, my",
        "line": 1740
      },
      {
        "kind": "function",
        "name": "Gizmo.drawArrow",
        "args": "origin, axis, colorSet",
        "line": 1806
      },
      {
        "kind": "function",
        "name": "Gizmo.drawPlaneSquare",
        "args": "origin, plane, colorSet, isFacing",
        "line": 1842
      },
      {
        "kind": "function",
        "name": "Gizmo.drawCenterSquare",
        "args": "origin",
        "line": 1881
      },
      {
        "kind": "function",
        "name": "Gizmo.drawRotationHandle",
        "args": "point, color",
        "line": 1925
      },
      {
        "kind": "function",
        "name": "Gizmo.drawRotationArrow",
        "args": "origin, dir, color",
        "line": 1952
      },
      {
        "kind": "function",
        "name": "Gizmo.drawRotationAxisGuides",
        "args": "origin",
        "line": 1968
      },
      {
        "kind": "function",
        "name": "Gizmo.drawRotationRing",
        "args": "origin, axis, colorSet, distance",
        "line": 1986
      },
      {
        "kind": "function",
        "name": "Gizmo.drawViewRotationRing",
        "args": "origin",
        "line": 2011
      },
      {
        "kind": "function",
        "name": "Gizmo.drawActiveRotation",
        "args": "origin",
        "line": 2025
      },
      {
        "kind": "function",
        "name": "Gizmo.drawDragLine",
        "args": "",
        "line": 2064
      },
      {
        "kind": "function",
        "name": "Gizmo.handleTranslation",
        "args": "dx, dy",
        "line": 2087
      },
      {
        "kind": "function",
        "name": "Gizmo.draw",
        "args": "",
        "line": 2129
      },
      {
        "kind": "function",
        "name": "Gizmo.updatePrecision",
        "args": "",
        "line": 2186
      },
      {
        "kind": "function",
        "name": "Gizmo.update",
        "args": "",
        "line": 2232
      },
      {
        "kind": "function",
        "name": "Gizmo.HandlePropControls",
        "args": "offsetForward, offsetRight, offsetZ, rotX, rotY, rotZ, manualZ, precisionMode, speedMultiplier",
        "line": 2335
      },
      {
        "kind": "function",
        "name": "Gizmo.HandlePrecisionRotation",
        "args": "rotation, rotSpeed, normalizeFn",
        "line": 2405
      },
      {
        "kind": "local-function",
        "name": "formatNumber",
        "args": "value, decimals",
        "line": 2460
      },
      {
        "kind": "local-function",
        "name": "formatVector",
        "args": "value, decimals",
        "line": 2464
      },
      {
        "kind": "function",
        "name": "Gizmo.getPreviewData",
        "args": "",
        "line": 2474
      },
      {
        "kind": "function",
        "name": "Gizmo.buildPreviewText",
        "args": "",
        "line": 2501
      },
      {
        "kind": "function",
        "name": "Gizmo.buildEntityInfoText",
        "args": "",
        "line": 2522
      },
      {
        "kind": "function",
        "name": "Gizmo.drawPreview",
        "args": "force",
        "line": 2539
      },
      {
        "kind": "function",
        "name": "Gizmo.hidePreview",
        "args": "",
        "line": 2588
      },
      {
        "kind": "local-function",
        "name": "getBindingButton",
        "args": "name, fallbackControl",
        "line": 2598
      },
      {
        "kind": "local-function",
        "name": "freeCameraCommandName",
        "args": "",
        "line": 2606
      },
      {
        "kind": "local-function",
        "name": "modeCommandName",
        "args": "",
        "line": 2610
      },
      {
        "kind": "local-function",
        "name": "groundCommandName",
        "args": "",
        "line": 2614
      },
      {
        "kind": "local-function",
        "name": "controlButton",
        "args": "controlId, inputGroup",
        "line": 2618
      },
      {
        "kind": "local-function",
        "name": "buildMouseKeybinds",
        "args": "",
        "line": 2622
      },
      {
        "kind": "local-function",
        "name": "buildPrecisionKeybinds",
        "args": "",
        "line": 2638
      },
      {
        "kind": "local-function",
        "name": "buildFreeCameraKeybinds",
        "args": "",
        "line": 2661
      },
      {
        "kind": "function",
        "name": "Gizmo.invalidateKeybinds",
        "args": "",
        "line": 2670
      },
      {
        "kind": "function",
        "name": "Gizmo.drawKeybinds",
        "args": "",
        "line": 2679
      },
      {
        "kind": "local-function",
        "name": "registerGizmoBinding",
        "args": "name, description, defaultKey, onPressed, onReleased, defaultMapper",
        "line": 2724
      },
      {
        "kind": "local-function",
        "name": "setPrecisionKey",
        "args": "stateKey, axisName, pressed",
        "line": 2749
      }
    ]
  },
  {
    "path": "bridge/fivem/gizmo/server.lua",
    "context": "server",
    "module": "fivem.gizmo",
    "lines": 2,
    "records": []
  },
  {
    "path": "bridge/fivem/identifiers/server.lua",
    "context": "server",
    "module": "fivem.identifiers",
    "lines": 94,
    "records": [
      {
        "kind": "local-function",
        "name": "validSource",
        "args": "source",
        "line": 14
      },
      {
        "kind": "local-function",
        "name": "addUnique",
        "args": "list, value",
        "line": 19
      },
      {
        "kind": "function",
        "name": "identifiers.getByType",
        "args": "source, identifierType",
        "line": 29
      },
      {
        "kind": "function",
        "name": "identifiers.getAll",
        "args": "source",
        "line": 37
      },
      {
        "kind": "function",
        "name": "identifiers.getPrimaryLicense",
        "args": "source",
        "line": 52
      },
      {
        "kind": "function",
        "name": "identifiers.getLicenseSet",
        "args": "source, extraLicenses",
        "line": 57
      },
      {
        "kind": "function",
        "name": "identifiers.has",
        "args": "source, identifier",
        "line": 76
      }
    ]
  },
  {
    "path": "bridge/fivem/instructionalButtons/client.lua",
    "context": "client",
    "module": "fivem.instructionalButtons",
    "lines": 213,
    "records": [
      {
        "kind": "local-function",
        "name": "debug",
        "args": "level, message",
        "line": 3
      },
      {
        "kind": "local-function",
        "name": "waitForScaleform",
        "args": "handle, timeout",
        "line": 15
      },
      {
        "kind": "local-function",
        "name": "normalizeButtons",
        "args": "buttons",
        "line": 26
      },
      {
        "kind": "local-function",
        "name": "callNumber",
        "args": "handle, method, value",
        "line": 33
      },
      {
        "kind": "local-function",
        "name": "firstControl",
        "args": "button",
        "line": 37
      },
      {
        "kind": "local-function",
        "name": "setSlot",
        "args": "handle, slot, button, clickable",
        "line": 53
      },
      {
        "kind": "function",
        "name": "instructionalButtons.create",
        "args": "buttons, options",
        "line": 69
      },
      {
        "kind": "function",
        "name": "instance:refresh",
        "args": "",
        "line": 88
      },
      {
        "kind": "function",
        "name": "instance:draw",
        "args": "",
        "line": 102
      },
      {
        "kind": "function",
        "name": "instance:dispose",
        "args": "",
        "line": 108
      },
      {
        "kind": "local-function",
        "name": "disableMouseCamera",
        "args": "",
        "line": 120
      },
      {
        "kind": "function",
        "name": "instructionalButtons.show",
        "args": "buttons, options",
        "line": 127
      },
      {
        "kind": "function",
        "name": "instructionalButtons.showSimple",
        "args": "label, control, options",
        "line": 187
      },
      {
        "kind": "function",
        "name": "instructionalButtons.showClickable",
        "args": "label, control, controlId, options",
        "line": 199
      }
    ]
  }
];
