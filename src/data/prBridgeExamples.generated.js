// AUTO-GENERATED from Pierremoraes-ofc/pr_scriptTest@main
export const PR_BRIDGE_REAL_EXAMPLES = {
  "pr_lib.debug": [
    {
      "code": "pr_lib.debug(...)",
      "file": "client.lua",
      "line": 20
    }
  ],
  "pr_lib.locale": [
    {
      "code": "lang = pr_lib.locale()",
      "file": "client.lua",
      "line": 33
    },
    {
      "code": "if not lang then lang = pr_lib.locale() end",
      "file": "client.lua",
      "line": 28
    }
  ],
  "pr_lib.cache.remember": [
    {
      "code": "return pr_lib.cache.remember((\"money:%s\"):format(account), function()\n        return safeCall(function()\n            return pr_lib.framework.GetMoney(account)\n        end, 0) or 0\n    end, 1000)",
      "file": "client.lua",
      "line": 105
    },
    {
      "code": "return pr_lib.cache.remember((\"item:%s\"):format(itemName), function()\n        if not pr_lib.inventory.GetItemCount then return 0 end\n\n        return safeCall(function()\n            return pr_lib.inventory.GetItemCount(itemName)\n        end, 0) or 0\n    end, 1000)",
      "file": "client.lua",
      "line": 113
    }
  ],
  "pr_lib.framework.GetMoney": [
    {
      "code": "return pr_lib.framework.GetMoney(account)",
      "file": "client.lua",
      "line": 107
    }
  ],
  "pr_lib.inventory.GetItemCount": [
    {
      "code": "return pr_lib.inventory.GetItemCount(itemName)",
      "file": "client.lua",
      "line": 117
    }
  ],
  "pr_lib.cache.GetPlayer": [
    {
      "code": "local player = pr_lib.cache.GetPlayer(src, 1000)",
      "file": "server.lua",
      "line": 69
    },
    {
      "code": "local player = pr_lib.cache.GetPlayer(1000) or {}",
      "file": "client.lua",
      "line": 127
    }
  ],
  "pr_lib.framework.GetJobInfo": [
    {
      "code": "return pr_lib.framework.GetJobInfo()",
      "file": "client.lua",
      "line": 129
    }
  ],
  "pr_lib.cache.GetMetadata": [
    {
      "code": "local hunger = pr_lib.cache.GetMetadata(\"hunger\", 1000)",
      "file": "client.lua",
      "line": 132
    },
    {
      "code": "local thirst = pr_lib.cache.GetMetadata(\"thirst\", 1000)",
      "file": "client.lua",
      "line": 133
    }
  ],
  "pr_lib.cache.InvalidatePlayer": [
    {
      "code": "pr_lib.cache.InvalidatePlayer()",
      "file": "client.lua",
      "line": 156
    }
  ],
  "pr_lib.cache.clearPrefix": [
    {
      "code": "pr_lib.cache.clearPrefix(\"item:\")",
      "file": "client.lua",
      "line": 158
    },
    {
      "code": "pr_lib.cache.clearPrefix(\"money:\")",
      "file": "client.lua",
      "line": 157
    }
  ],
  "pr_lib.registerContext": [
    {
      "code": "pr_lib.registerContext(translatedMenu)",
      "file": "client_translator.lua",
      "line": 138
    },
    {
      "code": "pr_lib.registerContext({\n        id = MENU_ID,\n        title = \"pr_bridge Test\",\n        options = {\n            {\n                title = playerName ~= \"\" and playerName or \"Player\",\n                description = \"Dados vindos de pr_lib.framework + pr_lib.cache\",\n                icon = \"user\",\n                onSelect = openDetailsMenu\n            },\n            {\n                title = \"ACE Permissions Manager\",\n                description = \"Visualizar, conceder e remover permissões ACE/Principals.\",\n                icon = \"shield-alert\",\n                onSelect = openAceManagerMenu\n            },\n            {\n                title = \"Dinheiro\",\n                description = (\"Cash: %s | Banco: %s | Black: %s\"):format(status.cash, status.bank, status.black),\n                icon = \"wallet\",\n                readOnly = true\n            },\n            {\n                title = \"Inventario\",\n                description = (\"water: %s\"):format(status.water),\n                icon = \"box\",\n                readOnly = true\n            },\n            {\n                title = \"Notify\",\n                description = \"Envia uma notificacao pelo adapter ativo.\",\n                icon = \"bell\",\n                onSelect = function()\n                    notify(\"pr_bridge\", \"Notificacao enviada via pr_lib.notifications.Notify\", \"success\")\n                    bridgeDebug(\"success\", \"[pr_scriptTest] Opcao Notify executada.\")\n                    returnToMainMenu()\n                end\n            },\n            {\n                title = \"Progress\",",
      "file": "client.lua",
      "line": 2190
    }
  ],
  "pr_lib.showContext": [
    {
      "code": "pr_lib.showContext(DETAILS_ID)",
      "file": "client.lua",
      "line": 213
    },
    {
      "code": "pr_lib.showContext(DUI_MENU_ID)",
      "file": "client.lua",
      "line": 1703
    }
  ],
  "pr_lib.progressbar": [
    {
      "code": "local success = pr_lib.progressbar({\n        duration = 5000,\n        label = \"Testando pr_bridge\",\n        useWhileDead = false,\n        canCancel = true,\n        disable = {\n            move = true,\n            combat = true,\n        },\n        anim = {\n            dict = \"amb@world_human_clipboard@male@idle_a\",\n            clip = \"idle_c\",\n        },\n    })",
      "file": "client.lua",
      "line": 226
    }
  ],
  "pr_lib.fivem.getVehicleProperties": [
    {
      "code": "local props = pr_lib.fivem.getVehicleProperties(vehicle)",
      "file": "client.lua",
      "line": 273
    }
  ],
  "pr_lib.fivem.setVehicleProperties": [
    {
      "code": "pr_lib.fivem.setVehicleProperties(vehicle, props, false)",
      "file": "client.lua",
      "line": 283
    },
    {
      "code": "local success = vehicle and vehicle > 0 and pr_lib.fivem.setVehicleProperties(vehicle, props, false)",
      "file": "server.lua",
      "line": 315
    }
  ],
  "pr_lib.fivem.net.getNetId": [
    {
      "code": "local netId = pr_lib.fivem.net.getNetId(vehicle)",
      "file": "client.lua",
      "line": 333
    },
    {
      "code": "local netId = pr_lib.fivem.net and pr_lib.fivem.net.getNetId and pr_lib.fivem.net.getNetId(vehicle)",
      "file": "client.lua",
      "line": 285
    }
  ],
  "pr_lib.fivem.net.getOwner": [
    {
      "code": "local owner = pr_lib.fivem.net.getOwner(vehicle) or \"N/A\"",
      "file": "server.lua",
      "line": 370
    },
    {
      "code": "local owner = pr_lib.fivem.net.getOwner(resolvedVehicle or vehicle) or \"N/A\"",
      "file": "client.lua",
      "line": 335
    }
  ],
  "pr_lib.fivem.vehicleCache.set": [
    {
      "code": "pr_lib.fivem.vehicleCache.set(vehicle, {\n        entity = vehicle,\n        netId = netId,\n        plate = plate,\n        type = \"client_net_cache_test\",\n        updatedAt = GetGameTimer(),\n    })",
      "file": "client.lua",
      "line": 338
    },
    {
      "code": "pr_lib.fivem.vehicleCache.set(vehicle, {\n        entity = vehicle,\n        netId = resolvedNetId or netId,\n        plate = plate,\n        type = \"server_net_cache_test\",\n        updatedAt = GetGameTimer(),\n    })",
      "file": "server.lua",
      "line": 373
    }
  ],
  "pr_lib.fivem.net.resolveVehicle": [
    {
      "code": "local vehicle, resolvedNetId = pr_lib.fivem.net.resolveVehicle(netId, 1000)",
      "file": "server.lua",
      "line": 359
    },
    {
      "code": "local resolvedVehicle, resolvedNetId = pr_lib.fivem.net.resolveVehicle(netId or vehicle, 1000)",
      "file": "client.lua",
      "line": 334
    }
  ],
  "pr_lib.fivem.vehicleCache.get": [
    {
      "code": "local cache = pr_lib.fivem.vehicleCache.get(vehicle)",
      "file": "server.lua",
      "line": 388
    },
    {
      "code": "local cacheByEntity = pr_lib.fivem.vehicleCache.get(vehicle)",
      "file": "client.lua",
      "line": 346
    }
  ],
  "pr_lib.fivem.vehicleCache.getByPlate": [
    {
      "code": "local cacheByPlate = pr_lib.fivem.vehicleCache.getByPlate(plate)",
      "file": "client.lua",
      "line": 347
    }
  ],
  "pr_lib.fivem.blips.describe": [
    {
      "code": "local blipInfo = pr_lib.fivem.blips.describe(60, 2)",
      "file": "client.lua",
      "line": 380
    }
  ],
  "pr_lib.fivem.blips.getPedImageUrl": [
    {
      "code": "local pedUrl = pr_lib.fivem.blips.getPedImageUrl(\"a_m_m_business_01\")",
      "file": "client.lua",
      "line": 381
    }
  ],
  "pr_lib.fivem.blips.getVehicleImageUrl": [
    {
      "code": "local vehicleUrl = pr_lib.fivem.blips.getVehicleImageUrl(\"adder\")",
      "file": "client.lua",
      "line": 382
    }
  ],
  "pr_lib.fivem.blips.getWeaponImageUrl": [
    {
      "code": "local weaponUrl = pr_lib.fivem.blips.getWeaponImageUrl(\"weapon_pistol\")",
      "file": "client.lua",
      "line": 383
    }
  ],
  "pr_lib.fivem.blips.getMarkerImageUrl": [
    {
      "code": "local markerUrl = pr_lib.fivem.blips.getMarkerImageUrl(1)",
      "file": "client.lua",
      "line": 384
    }
  ],
  "pr_lib.fivem.streaming.requestModel": [
    {
      "code": "local loaded = pr_lib.fivem.streaming.requestModel(model, 1500)",
      "file": "client.lua",
      "line": 600
    },
    {
      "code": "local loaded, modelHash = pr_lib.fivem.streaming.requestModel(model, 3000)",
      "file": "client.lua",
      "line": 1895
    }
  ],
  "pr_lib.fivem.streaming.createObject": [
    {
      "code": "objectPreview = pr_lib.fivem.streaming.createObject(\"prop_barrel_02a\", GetOffsetFromEntityInWorldCoords(PlayerPedId(), -1.5, 3.0, 0.0), {\n                alpha = 150,\n                collision = false,\n                freeze = true,\n                invincible = true,\n                modelTimeout = 2000,\n            })",
      "file": "client.lua",
      "line": 608
    }
  ],
  "pr_lib.fivem.streaming.createPed": [
    {
      "code": "pedPreview = pr_lib.fivem.streaming.createPed(\"a_m_m_business_01\", GetOffsetFromEntityInWorldCoords(PlayerPedId(), 0.0, 3.0, 0.0), heading, {\n                alpha = 150,\n                collision = false,\n                freeze = true,\n                invincible = true,\n                modelTimeout = 2000,\n            })",
      "file": "client.lua",
      "line": 618
    }
  ],
  "pr_lib.fivem.streaming.createVehicle": [
    {
      "code": "vehiclePreview = pr_lib.fivem.streaming.createVehicle(\"pounder\", GetOffsetFromEntityInWorldCoords(PlayerPedId(), 2.5, 5.5, 0.0), heading, {\n                alpha = 150,\n                collision = false,\n                freeze = true,\n                invincible = true,\n                modelTimeout = 2500,\n            })",
      "file": "client.lua",
      "line": 628
    }
  ],
  "pr_lib.fivem.objects.getByModelInRadius": [
    {
      "code": "local nearObjects = pr_lib.fivem.objects.getByModelInRadius(model, coords, 15.0)",
      "file": "client.lua",
      "line": 637
    }
  ],
  "pr_lib.fivem.objects.getVehiclesInRadius": [
    {
      "code": "local nearVehicles = pr_lib.fivem.objects.getVehiclesInRadius(coords, 30.0)",
      "file": "client.lua",
      "line": 638
    }
  ],
  "pr_lib.fivem.objects.getObjectsInRadiusUsingPool": [
    {
      "code": "local poolObjects = pr_lib.fivem.objects.getObjectsInRadiusUsingPool(coords, 30.0)",
      "file": "client.lua",
      "line": 639
    }
  ],
  "pr_lib.fivem.objects.getVehiclesInRadiusUsingPool": [
    {
      "code": "local poolVehicles = pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(coords, 30.0)",
      "file": "client.lua",
      "line": 640
    }
  ],
  "pr_lib.fivem.objects.getPedsInRadius": [
    {
      "code": "local poolPeds = pr_lib.fivem.objects.getPedsInRadius(coords, 30.0)",
      "file": "client.lua",
      "line": 641
    }
  ],
  "pr_lib.fivem.objects.getNetworkedObjectsInRadius": [
    {
      "code": "local poolNetObjects = pr_lib.fivem.objects.getNetworkedObjectsInRadius(coords, 30.0)",
      "file": "client.lua",
      "line": 642
    }
  ],
  "pr_lib.fivem.objects.getPickupsInRadius": [
    {
      "code": "local poolPickups = pr_lib.fivem.objects.getPickupsInRadius(coords, 30.0)",
      "file": "client.lua",
      "line": 643
    }
  ],
  "pr_lib.fivem.streaming.releaseModel": [
    {
      "code": "pr_lib.fivem.streaming.releaseModel(model)",
      "file": "client.lua",
      "line": 645
    },
    {
      "code": "pr_lib.fivem.streaming.releaseModel(modelHash)",
      "file": "client.lua",
      "line": 1906
    }
  ],
  "pr_lib.fivem.streaming.deleteEntity": [
    {
      "code": "pr_lib.fivem.streaming.deleteEntity(pedPreview)",
      "file": "client.lua",
      "line": 650
    },
    {
      "code": "pr_lib.fivem.streaming.deleteEntity(objectPreview)",
      "file": "client.lua",
      "line": 649
    }
  ],
  "pr_lib.fivem.streaming.playAnim": [
    {
      "code": "local ok, result = pr_lib.fivem.streaming.playAnim({\n            anim = {\n                dict = \"amb@world_human_clipboard@male@idle_a\",\n                clip = \"idle_c\",\n                duration = duration,\n                flags = 49,\n                clearTasks = true,\n            },\n        })",
      "file": "client.lua",
      "line": 972
    }
  ],
  "pr_lib.callback.await": [
    {
      "code": "local success = pr_lib.callback.await(\"pr_scriptTest:server:addPrincipal\", 5000, child, parent)",
      "file": "client.lua",
      "line": 2065
    },
    {
      "code": "local success = pr_lib.callback.await(\"pr_scriptTest:server:removePrincipal\", 5000, child, parent)",
      "file": "client.lua",
      "line": 2091
    }
  ],
  "pr_lib.fivem.tuning.snapshot": [
    {
      "code": "local snapshot = pr_lib.fivem.tuning.snapshot(vehicle)",
      "file": "client.lua",
      "line": 1007
    }
  ],
  "pr_lib.fivem.tuning.restore": [
    {
      "code": "tuningOk = snapshot and pr_lib.fivem.tuning.restore(vehicle, snapshot, false) == true",
      "file": "client.lua",
      "line": 1008
    }
  ],
  "pr_lib.fivem.instructionalButtons.showClickable": [
    {
      "code": "pressed, button, controlId = pr_lib.fivem.instructionalButtons.showClickable(\"Select\", \"~INPUT_FRONTEND_ACCEPT~\", 201, {\n                duration = 5000,\n                disableMouseControls = true,\n            })",
      "file": "client.lua",
      "line": 1034
    }
  ],
  "pr_lib.fivem.instructionalButtons.showSimple": [
    {
      "code": "pressed, button, controlId = pr_lib.fivem.instructionalButtons.showSimple(\"Select\", \"~INPUT_FRONTEND_ACCEPT~\", {\n                duration = 5000,\n                controlId = 201,\n            })",
      "file": "client.lua",
      "line": 1039
    }
  ],
  "pr_lib.fivem.drawtext.drawText2d": [
    {
      "code": "pr_lib.fivem.drawtext.drawText2d({\n                text = \"pr_bridge drawText2d nativo\",\n                coords = vec2(0.06, 0.12),\n                scale = 0.42,\n                font = 4,\n                color = vec4(255, 255, 255, 255),\n                width = 0.0,\n                height = 0.0,\n                align = \"left\",\n                wrapLeft = 0.05,\n                wrapRight = 0.95,\n                enableDropShadow = true,\n                enableOutline = true,\n            })",
      "file": "client.lua",
      "line": 1074
    }
  ],
  "pr_lib.fivem.drawtext.drawText3d": [
    {
      "code": "pr_lib.fivem.drawtext.drawText3d({\n                text = \"drawText3d\",\n                coords = coords,\n                scale = vec2(0.35, 0.35),\n                font = 4,\n                color = vec4(255, 255, 255, 255),\n                align = \"left\",\n                enableDropShadow = true,\n                enableOutline = true,\n            })",
      "file": "client.lua",
      "line": 1089
    }
  ],
  "pr_lib.fivem.devlaser.isActive": [
    {
      "code": "local starting = not pr_lib.fivem.devlaser.isActive()",
      "file": "client.lua",
      "line": 1713
    }
  ],
  "pr_lib.fivem.devlaser.toggle": [
    {
      "code": "pr_lib.fivem.devlaser.toggle({\n        distance = 1000.0,\n        flags = -1,\n        onCopy = function(action, value, data)\n            bridgeDebug(\"info\", (\"[pr_scriptTest] DevLaser copy action=%s value=%s entity=%s netId=%s model=%s\"):format(\n                action or \"N/A\",\n                value or \"N/A\",\n                data and data.entity or \"N/A\",\n                data and data.netId or \"N/A\",\n                data and data.modelHash or \"N/A\"\n            ))\n        end,\n        onStop = function()\n            notify(\"DevLaser\", \"DevLaser finalizado.\", \"inform\")\n            returnToMainMenu()\n        end,\n    })",
      "file": "client.lua",
      "line": 1715
    }
  ],
  "pr_lib.fivem.gizmo.stop": [
    {
      "code": "pr_lib.fivem.gizmo.stop()",
      "file": "client.lua",
      "line": 1858
    }
  ],
  "pr_lib.fivem.drawtext.hide": [
    {
      "code": "pr_lib.fivem.drawtext.hide()",
      "file": "client.lua",
      "line": 1862
    }
  ],
  "pr_lib.fivem.gizmo.start": [
    {
      "code": "local session = pr_lib.fivem.gizmo.start(object, function()\n            return true\n        end, vector3(0.0, 0.0, 0.0), {\n            title = \"pr_bridge Gizmo Test\",\n            showPreview = true,\n            previewTitle = \"pr_bridge Gizmo Test\",\n            handlePrecisionToggle = true,\n            allowFreeCameraToggle = true,\n            restoreOnCancel = true,\n            onPrecisionModeChange = function(enabled)\n                bridgeDebug(\"info\", (\"[pr_scriptTest] Gizmo precisionMode=%s\"):format(tostring(enabled)))\n            end,\n            onFinish = function(result)\n                local confirmed = result and result.confirmed == true\n                local coords = result and result.coords or GetEntityCoords(object)\n                local rotation = result and result.rotation or GetEntityRotation(object, 2)\n                bridgeDebug(confirmed and \"success\" or \"info\", (\"[pr_scriptTest] Gizmo finalizado. confirm=%s reason=%s coords=%.3f %.3f %.3f rot=%.2f %.2f %.2f\"):format(\n                    tostring(confirmed), tostring(result and result.reason),\n                    coords.x, coords.y, coords.z,\n                    rotation.x, rotation.y, rotation.z\n                ))\n\n                cleanupGizmoTest(object)\n                notify(\"Gizmo\", confirmed and \"Editor confirmado.\" or \"Editor cancelado e transform restaurado.\", confirmed and \"success\" or \"inform\")\n                returnToMainMenu()\n            end,\n        })",
      "file": "client.lua",
      "line": 1920
    }
  ],
  "pr_lib.inputDialog": [
    {
      "code": "local input = pr_lib.inputDialog(\"Verificar Permissão ACE\", {\n                        { type = 'input', label = 'ID do Jogador (vazio para você)', placeholder = 'e.g. 1' },\n                        { type = 'input', label = 'Permissão ACE', placeholder = 'e.g. command.admin' }\n                    })",
      "file": "client.lua",
      "line": 1975
    },
    {
      "code": "local input = pr_lib.inputDialog(\"Remover Principal\", {\n                        { type = 'input', label = 'Principal Filho (ex: player.1 ou ID)', placeholder = 'player.1 ou 1' },\n                        { type = 'input', label = 'Principal Pai (ex: group.admin)', placeholder = 'group.admin' }\n                    })",
      "file": "client.lua",
      "line": 2079
    }
  ],
  "pr_lib.addCommand": [
    {
      "code": "pr_lib.addCommand(\"pr_progress_cancel\", {\n    help = \"Cancela o progresso nativo ativo\",\n}, function()\n    pr_lib.cancelProgress()\nend)",
      "file": "client_progress.lua",
      "line": 44
    },
    {
      "code": "pr_lib.addCommand(\"pr_skillcheck_test\", {\n    help = \"Testa o minigame nativo/skillCheck do pr_bridge\",\n}, function()\n    runSkillCheckTest(nil)\nend)",
      "file": "client_skillcheck.lua",
      "line": 35
    }
  ],
  "pr_lib.addKeybind": [
    {
      "code": "pr_lib.addKeybind({\n    name = \"pr_scriptTest_menu\",\n    description = \"Abrir menu pr_scriptTest\",\n    defaultKey = \"F2\",\n    onPressed = function()\n        bridgeDebug(\"info\", \"[pr_scriptTest] Keybind F2 executado.\")\n        openMainMenu()\n    end,\n})",
      "file": "client.lua",
      "line": 2520
    },
    {
      "code": "pr_lib.addKeybind({\n    name = \"pr_scriptTest_manifest_menu\",\n    description = \"Abrir menu pr_scriptTest manifest\",\n    defaultKey = \"F3\",\n    onPressed = function()\n        bridgeDebug(\"info\", \"[pr_scriptTest] Keybind F3 executado.\")\n        TriggerEvent(\"pr_scriptTest:manifest:openMenu\")\n    end,\n})",
      "file": "client.lua",
      "line": 2530
    }
  ],
  "pr_lib.registerRadial": [
    {
      "code": "pr_lib.registerRadial({\n        id = \"pr_scriptTest_tools\",\n        items = {\n            { id = \"prtest_notify\", label = \"Notificacao\", icon = \"bell\", onSelect = function() notify(\"Radial\", \"NUI radial funcionando.\", \"success\") end },\n            { id = \"prtest_progress\", label = \"Progress\", icon = \"hourglass-split\", onSelect = runProgressExample },\n        }\n    })",
      "file": "client.lua",
      "line": 2604
    }
  ],
  "pr_lib.addRadialItem": [
    {
      "code": "pr_lib.addRadialItem({\n        { id = \"prtest_menu\", label = \"Ferramentas\", icon = \"tools\", menu = \"pr_scriptTest_tools\" },\n        { id = \"prtest_open\", label = \"Abrir Testes\", icon = \"flask\", onSelect = function() openMainMenu() end },\n    })",
      "file": "client.lua",
      "line": 2611
    }
  ],
  "pr_lib.framework.getPlayerName": [
    {
      "code": "return pr_lib.framework.getPlayerName(source)",
      "file": "server.lua",
      "line": 60
    }
  ],
  "pr_lib.framework.GetIdentifier": [
    {
      "code": "return pr_lib.framework.GetIdentifier(src)",
      "file": "server.lua",
      "line": 72
    }
  ],
  "pr_lib.framework.getPlayerJob": [
    {
      "code": "return pr_lib.framework.getPlayerJob(src, \"label\")",
      "file": "server.lua",
      "line": 75
    }
  ],
  "pr_lib.framework.getPlayerMoney": [
    {
      "code": "return pr_lib.framework.getPlayerMoney(src, \"money\")",
      "file": "server.lua",
      "line": 78
    }
  ],
  "pr_lib.notifications.NotifyPlayer": [
    {
      "code": "pr_lib.notifications.NotifyPlayer(src, {\n            title = lang(\"notify.summary_title\"),\n            description = lang(\"notify.summary_desc\"),\n            type = \"success\"\n        })",
      "file": "server.lua",
      "line": 86
    }
  ],
  "pr_lib.triggerClientEvent": [
    {
      "code": "pr_lib.triggerClientEvent(\"chat:addMessage\", source, {\n            args = { \"prcmdtest\", output },\n        })",
      "file": "server.lua",
      "line": 509
    },
    {
      "code": "pr_lib.triggerClientEvent(\"pr_scriptTest:client:serverStatus\", src, {\n        player = player,\n        message = message\n    })",
      "file": "server.lua",
      "line": 93
    }
  ],
  "pr_lib.saveJson": [
    {
      "code": "return pr_lib.saveJson(JSON_TEST_PATH, {\n                test = \"pr_bridge JSON API\",\n                source = src,\n                createdAt = os.date(\"!%Y-%m-%dT%H:%M:%SZ\"),\n                counters = {\n                    saves = 1,\n                    updates = 0,\n                },\n            })",
      "file": "server.lua",
      "line": 177
    }
  ],
  "pr_lib.jsonExists": [
    {
      "code": "if not pr_lib.jsonExists(JSON_TEST_PATH) then",
      "file": "server.lua",
      "line": 189
    }
  ],
  "pr_lib.readJson": [
    {
      "code": "local value = pr_lib.readJson(JSON_TEST_PATH, true)",
      "file": "server.lua",
      "line": 193
    }
  ],
  "pr_lib.updateJson": [
    {
      "code": "return pr_lib.updateJson(JSON_TEST_PATH, function(current)\n                current = type(current) == \"table\" and current or {}\n                current.updatedAt = os.date(\"!%Y-%m-%dT%H:%M:%SZ\")\n                current.updatedBy = src\n                current.counters = type(current.counters) == \"table\" and current.counters or {}\n                current.counters.updates = (tonumber(current.counters.updates) or 0) + 1\n                return current\n            end)",
      "file": "server.lua",
      "line": 202
    }
  ],
  "pr_lib.deleteJson": [
    {
      "code": "return pr_lib.deleteJson(JSON_TEST_PATH)",
      "file": "server.lua",
      "line": 212
    }
  ],
  "pr_lib.fivem.vehicleCache.setPersistentMeta": [
    {
      "code": "pr_lib.fivem.vehicleCache.setPersistentMeta(vehicle, {\n        plate = plate,\n        type = \"player_vehicle_net_cache_test\",\n        persistent = true,\n        version = GetGameTimer(),\n    })",
      "file": "server.lua",
      "line": 381
    },
    {
      "code": "pr_lib.fivem.vehicleCache.setPersistentMeta(vehicle, {\n            plate = props.plate,\n            type = \"player_vehicle_example\",\n            persistent = true,\n            version = GetGameTimer(),\n        })",
      "file": "server.lua",
      "line": 329
    }
  ],
  "pr_lib.fivem.net.isValidNetId": [
    {
      "code": "local valid = pr_lib.fivem.net.isValidNetId(resolvedNetId or netId)",
      "file": "server.lua",
      "line": 371
    }
  ],
  "pr_lib.fivem.vehicleCache.getPersistentMeta": [
    {
      "code": "local stateMeta = pr_lib.fivem.vehicleCache.getPersistentMeta(vehicle)",
      "file": "server.lua",
      "line": 389
    }
  ],
  "pr_lib.callback.register": [
    {
      "code": "pr_lib.callback.register(\"pr_scriptTest:server:checkPlayerAce\", function(src, targetSrc, aceName)\n        bridgeDebug(\"info\", (\"[pr_scriptTest] checkPlayerAce: src=%s targetSrc=%s aceName=%s\"):format(src, targetSrc, aceName))\n        return IsPlayerAceAllowed(targetSrc, aceName)\n    end)",
      "file": "server.lua",
      "line": 424
    },
    {
      "code": "pr_lib.callback.register(\"pr_scriptTest:server:addPrincipal\", function(src, child, parent)\n        bridgeDebug(\"info\", (\"[pr_scriptTest] addPrincipal: src=%s child=%s parent=%s\"):format(src, child, parent))\n        if pr_lib.ace and pr_lib.ace.addPrincipal then\n            pr_lib.ace.addPrincipal(child, parent)\n            return true\n        end\n        return false\n    end)",
      "file": "server.lua",
      "line": 447
    }
  ],
  "pr_lib.ace.addAce": [
    {
      "code": "pr_lib.ace.addAce(principal, aceName, allow)",
      "file": "server.lua",
      "line": 432
    }
  ],
  "pr_lib.ace.removeAce": [
    {
      "code": "pr_lib.ace.removeAce(principal, aceName, allow)",
      "file": "server.lua",
      "line": 441
    }
  ],
  "pr_lib.ace.addPrincipal": [
    {
      "code": "pr_lib.ace.addPrincipal(child, parent)",
      "file": "server.lua",
      "line": 450
    }
  ],
  "pr_lib.ace.removePrincipal": [
    {
      "code": "pr_lib.ace.removePrincipal(child, parent)",
      "file": "server.lua",
      "line": 459
    }
  ],
  "pr_lib.versionCheck": [
    {
      "code": "pr_lib.versionCheck(\"Pierremoraes-ofc/pr_scriptTest\")",
      "file": "server.lua",
      "line": 558
    }
  ],
  "pr_lib.interact.AddGlobalVehicleInteraction": [
    {
      "code": "local id = pr_lib.interact.AddGlobalVehicleInteraction({\n\t\tid = \"pr_scriptTest:interact:trunk\",\n\t\tname = \"pr_scriptTest:interact:trunk\",\n\t\tbone = \"boot\",\n\t\tdistance = 5.0,\n\t\tinteractDst = 1.5,\n\t\tshowUI = false,\n\t\toptions = {\n\t\t\t{\n\t\t\t\tname = \"pr_scriptTest:interact:openTrunk\",\n\t\t\t\tlabel = \"Abrir porta-malas\",\n\t\t\t\tcanInteract = function(vehicle)\n\t\t\t\t\treturn vehicle ~= 0 and DoesEntityExist(vehicle) and GetVehiclePedIsIn(PlayerPedId(), false) == 0\n\t\t\t\tend,\n\t\t\t\taction = function(vehicle)\n\t\t\t\t\tif GetVehicleDoorLockStatus(vehicle) > 1 then\n\t\t\t\t\t\treturn pr_lib.notify({\n\t\t\t\t\t\t\ttitle = \"Interact\",\n\t\t\t\t\t\t\tdescription = \"O porta-malas esta trancado.\",\n\t\t\t\t\t\t\ttype = \"error\",\n\t\t\t\t\t\t})\n\t\t\t\t\tend\n\n\t\t\t\t\tif GetVehicleDoorAngleRatio(vehicle, 5) <= 0.0 then\n\t\t\t\t\t\tSetVehicleDoorOpen(vehicle, 5, false, false)\n\t\t\t\t\tend\n\n\t\t\t\t\tlocal plate = GetVehicleNumberPlateText(vehicle)\n\t\t\t\t\tpr_lib.inventory.openInventory(\"trunk\", {\n\t\t\t\t\t\tid = \"trunk\" .. plate,\n\t\t\t\t\t\tnetid = NetworkGetNetworkIdFromEntity(vehicle),\n\t\t\t\t\t\tentityid = vehicle,\n\t\t\t\t\t\tdoor = 5,\n\t\t\t\t\t})\n\t\t\t\tend,\n\t\t\t},\n\t\t},\n\t})",
      "file": "client_interact_trunk.lua",
      "line": 6
    }
  ],
  "pr_lib.notify": [
    {
      "code": "pr_lib.notify(payload)",
      "file": "client_skillcheck.lua",
      "line": 9
    },
    {
      "code": "return pr_lib.notify({\n\t\t\t\t\t\t\ttitle = \"Interact\",\n\t\t\t\t\t\t\tdescription = \"O porta-malas esta trancado.\",\n\t\t\t\t\t\t\ttype = \"error\",\n\t\t\t\t\t\t})",
      "file": "client_interact_trunk.lua",
      "line": 22
    }
  ],
  "pr_lib.inventory.openInventory": [
    {
      "code": "pr_lib.inventory.openInventory(\"trunk\", {\n\t\t\t\t\t\tid = \"trunk\" .. plate,\n\t\t\t\t\t\tnetid = NetworkGetNetworkIdFromEntity(vehicle),\n\t\t\t\t\t\tentityid = vehicle,\n\t\t\t\t\t\tdoor = 5,\n\t\t\t\t\t})",
      "file": "client_interact_trunk.lua",
      "line": 34
    }
  ],
  "pr_lib.interact.AddInteraction": [
    {
      "code": "pr_lib.interact.AddInteraction({\n\t\tid = id,\n\t\tcoords = coords,\n\t\tdistance = 4.0,\n\t\tinteractDst = 1.5,\n\t\thide = true,\n\t\toptions = {\n\t\t\t{\n\t\t\t\tname = id .. \":action\",\n\t\t\t\tlabel = \"Interacao oculta\",\n\t\t\t\taction = function()\n\t\t\t\t\tpr_lib.notify({\n\t\t\t\t\t\ttitle = \"Interact oculto\",\n\t\t\t\t\t\tdescription = \"A interacao foi executada sem exibir indicador na NUI.\",\n\t\t\t\t\t\ttype = \"success\",\n\t\t\t\t\t})\n\t\t\t\t\tpr_lib.interact.RemoveInteraction(id)\n\t\t\t\tend,\n\t\t\t},\n\t\t},\n\t})",
      "file": "client_interact_trunk.lua",
      "line": 52
    }
  ],
  "pr_lib.interact.RemoveInteraction": [
    {
      "code": "pr_lib.interact.RemoveInteraction(id)",
      "file": "client_interact_trunk.lua",
      "line": 68
    }
  ],
  "pr_lib.Notify": [
    {
      "code": "pr_lib.Notify({\n\t\ttitle = \"Target + Gizmo\",\n\t\tdescription = description,\n\t\ttype = notifyType or \"inform\",\n\t\tduration = 5000,\n\t})",
      "file": "client_target_hydrants.lua",
      "line": 19
    }
  ],
  "pr_lib.gizmo.stop": [
    {
      "code": "pr_lib.gizmo.stop()",
      "file": "client_target_hydrants.lua",
      "line": 31
    }
  ],
  "pr_lib.gizmo.start": [
    {
      "code": "local session = pr_lib.gizmo.start(entity, function()\n\t\treturn DoesEntityExist(entity)\n\tend, vector3(0.0, 0.0, 0.0), {\n\t\ttitle = \"Hidrante selecionado pelo Target\",\n\t\tshowPreview = true,\n\t\tpreviewTitle = \"Hidrante selecionado pelo Target\",\n\t\teditorCameraRadius = 2.0,\n\t\thandlePrecisionToggle = true,\n\t\trestoreOnCancel = true,\n\t\tonFinish = function(result)\n\t\t\tif result and result.confirmed then\n\t\t\t\tlocal coords, rotation = result.coords, result.rotation\n\t\t\t\tprint((\"[pr_scriptTest:hydrant] confirmado entity=%s coords=%.3f, %.3f, %.3f rot=%.2f, %.2f, %.2f\"):format(\n\t\t\t\t\tentity, coords.x, coords.y, coords.z, rotation.x, rotation.y, rotation.z\n\t\t\t\t))\n\t\t\t\tstopEditor(false)\n\t\t\t\tsendNotify(\"Posição confirmada localmente. Confira as coordenadas no console F8.\", \"success\")\n\t\t\telse\n\t\t\t\tstopEditor(false)\n\t\t\t\tsendNotify(\"Edição cancelada; posição original restaurada pelo gizmo.\", \"inform\")\n\t\t\tend\n\t\tend,\n\t})",
      "file": "client_target_hydrants.lua",
      "line": 93
    }
  ],
  "pr_lib.target.inspectModels": [
    {
      "code": "local audit = pr_lib.target.inspectModels(HYDRANT_MODELS)",
      "file": "client_target_hydrants.lua",
      "line": 151
    }
  ],
  "pr_lib.target.addModel": [
    {
      "code": "local prRegistered = pr_lib.target.addModel(HYDRANT_MODELS, {\n\t\tcreateTargetOption(PR_TARGET_OPTION, \"[PR] Abrir Gizmo no hidrante\", \"#ff6b22\"),\n\t})",
      "file": "client_target_hydrants.lua",
      "line": 203
    }
  ],
  "pr_lib.target.removeModel": [
    {
      "code": "pr_lib.target.removeModel(HYDRANT_MODELS, PR_TARGET_OPTION)",
      "file": "client_target_hydrants.lua",
      "line": 232
    }
  ],
  "pr_lib.progressCircle": [
    {
      "code": "local success = pr_lib.progressCircle({\n            duration = 7000,\n            label = \"CALIBRANDO SISTEMA\",\n            canCancel = true,\n            disable = { move = true, combat = true },\n        })",
      "file": "client_progress.lua",
      "line": 20
    }
  ],
  "pr_lib.progressBar": [
    {
      "code": "local success = pr_lib.progressBar({\n            duration = 7000,\n            label = \"PROCESSANDO DADOS\",\n            canCancel = true,\n            disable = { move = true, combat = true },\n        })",
      "file": "client_progress.lua",
      "line": 34
    }
  ],
  "pr_lib.cancelProgress": [
    {
      "code": "pr_lib.cancelProgress()",
      "file": "client_progress.lua",
      "line": 47
    }
  ],
  "pr_lib.notifications.Notify": [
    {
      "code": "pr_lib.notifications.Notify({\n                        title = \"Perfil do Cidadão\",\n                        description = \"Você está visualizando o sobrenome cadastrado no sistema federal. Lembre-se de portar seus documentos sempre que estiver dirigindo pelas vias públicas.\",\n                        type = \"info\",\n                        lang = targetLang\n                    })",
      "file": "client_translator.lua",
      "line": 85
    },
    {
      "code": "pr_lib.notifications.Notify({\n                        title = \"Perfil do Cidadão\",\n                        description = \"Este menu exibe as credenciais de identificação do cidadão no servidor. Qualquer alteração ou erro cadastral deve ser reportado à prefeitura local imediatamente!\",\n                        type = \"info\",\n                        lang = targetLang\n                    })",
      "file": "client_translator.lua",
      "line": 72
    }
  ],
  "pr_lib.translator.translateMenu": [
    {
      "code": "local translatedMenu = pr_lib.translator.translateMenu(menuData, targetLang)",
      "file": "client_translator.lua",
      "line": 136
    }
  ],
  "pr_lib.translator.translateBatch": [
    {
      "code": "local translated = pr_lib.translator.translateBatch(stringsToTranslate, targetLang)",
      "file": "client_translator.lua",
      "line": 185
    }
  ],
  "pr_lib.notifyBubble": [
    {
      "code": "lastBubbleId = pr_lib.notifyBubble({\n        title = \"PLAYER PRÓXIMO\",\n        description = (\"Distância: %.1f m\"):format(distance),\n        playerId = playerId,\n        icon = \"person-fill\",\n        color = \"#22c55e\",\n        duration = 8000,\n    })",
      "file": "client_bubble_notify.lua",
      "line": 61
    },
    {
      "code": "lastBubbleId = pr_lib.notifyBubble({\n        title = \"VISÍVEL PARA TODOS\",\n        description = \"Todos estão vendo este balão acima do meu personagem.\",\n        visibility = \"all\",\n        icon = \"people-fill\",\n        color = \"#a855f7\",\n        duration = 10000,\n        maxDistance = 35,\n    })",
      "file": "client_bubble_notify.lua",
      "line": 41
    }
  ],
  "pr_lib.hideNotifyBubble": [
    {
      "code": "pr_lib.hideNotifyBubble(lastBubbleId)",
      "file": "client_bubble_notify.lua",
      "line": 76
    }
  ],
  "pr_lib.NotifyBubble": [
    {
      "code": "local id = pr_lib.NotifyBubble(source, {\n        title = \"SERVIDOR\",\n        description = \"Balão enviado pelo server através do pr_bridge.\",\n        icon = \"server\",\n        color = \"#3b82f6\",\n        duration = 8000,\n    })",
      "file": "server_bubble_notify.lua",
      "line": 5
    }
  ],
  "pr_lib.NotifyBubbleAll": [
    {
      "code": "local id = pr_lib.NotifyBubbleAll(source, {\n        title = \"SERVIDOR PARA TODOS\",\n        description = \"Este balão está ancorado no emissor e visível para todos.\",\n        icon = \"broadcast\",\n        color = \"#eab308\",\n        duration = 10000,\n    })",
      "file": "server_bubble_notify.lua",
      "line": 18
    }
  ]
};
