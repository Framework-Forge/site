// AUTO-GENERATED from Framework-Forge/pr_bridge/API_FUNCTIONS.md
// Do not hand-edit function signatures; regenerate from the source index.
export const PR_BRIDGE_API = [
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.load(path, env, optional)",
    "example": "local result = pr_lib.load('value', 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.loadFile(resource, fileName, env, optional)",
    "example": "local result = pr_lib.loadFile(source, 'example', 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.loadJson(path, optional)",
    "example": "local result = pr_lib.loadJson('value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.readJson(path, optional)",
    "example": "local result = pr_lib.readJson('value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.jsonExists(path)",
    "example": "pr_lib.jsonExists('value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.saveJson(path, value, options)",
    "example": "pr_lib.saveJson('value', 'value', {})"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.writeJson(path, value, options)",
    "example": "pr_lib.writeJson('value', 'value', {})"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.updateJson(path, changes, options)",
    "example": "pr_lib.updateJson('value', 'value', {})"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.mergeJson(path, changes, options)",
    "example": "pr_lib.mergeJson('value', 'value', {})"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.deleteJson(path)",
    "example": "pr_lib.deleteJson('value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.loadModule(path, env, optional)",
    "example": "local result = pr_lib.loadModule('value', 'value', 'value')"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.locale(invokingResource)",
    "example": "pr_lib.locale(source)"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.versionCheck(...)",
    "example": "pr_lib.versionCheck()"
  },
  {
    "module": "core",
    "context": "shared",
    "signature": "pr_lib.checkDependency(...)",
    "example": "pr_lib.checkDependency()"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "local lang = pr_lib.locale(invokingResource)",
    "example": "local lang = pr_lib.locale(source)"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:extend(phrases, prefix)",
    "example": "lang:extend('value', 'value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:clear()",
    "example": "lang:clear()"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:replace(phrases)",
    "example": "lang:replace('value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:locale(newLocale)",
    "example": "lang:locale('value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:t(key, substitutions)",
    "example": "lang:t('example', 'value')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:has(key)",
    "example": "lang:has('example')"
  },
  {
    "module": "locale",
    "context": "shared",
    "signature": "lang:delete(phraseTarget, prefix)",
    "example": "lang:delete('value', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.set(key, value)",
    "example": "pr_lib.cache.set('example', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.get(key, fallback)",
    "example": "local result = pr_lib.cache.get('example', 'value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.clear(key)",
    "example": "pr_lib.cache.clear('example')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.clearPrefix(prefix)",
    "example": "pr_lib.cache.clearPrefix('value')"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.remember(key, callback, timeout)",
    "example": "local result = pr_lib.cache.remember('example', function(...)\\n    -- handle result\\nend, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.call(key, callback, timeout)",
    "example": "local result = pr_lib.cache.call('example', function(...)\\n    -- handle result\\nend, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.onChange(key, callback)",
    "example": "pr_lib.cache.onChange('example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.GetPlayer(source, timeout)",
    "example": "local result = pr_lib.cache.GetPlayer(source, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.GetMetadata(source, metadata, timeout)",
    "example": "local result = pr_lib.cache.GetMetadata(source, {}, 1)"
  },
  {
    "module": "cache",
    "context": "shared",
    "signature": "pr_lib.cache.InvalidatePlayer(source)",
    "example": "pr_lib.cache.InvalidatePlayer(source)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug(...)",
    "example": "pr_lib.debug()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.isEnabled()",
    "example": "local result = pr_lib.debug.isEnabled()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.setEnabled(state)",
    "example": "pr_lib.debug.setEnabled(true)"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.info(...)",
    "example": "pr_lib.debug.info()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.success(...)",
    "example": "pr_lib.debug.success()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.warn(...)",
    "example": "pr_lib.debug.warn()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.warning(...)",
    "example": "pr_lib.debug.warning()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.error(...)",
    "example": "pr_lib.debug.error()"
  },
  {
    "module": "debug",
    "context": "shared",
    "signature": "pr_lib.debug.log(level, ...)",
    "example": "pr_lib.debug.log('value')"
  },
  {
    "module": "events",
    "context": "server",
    "signature": "pr_lib.triggerClientEvent(eventName, target, ...)",
    "example": "pr_lib.triggerClientEvent('example', source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddAccountBalance(source,account,amount,reason)",
    "example": "pr_lib.framework.AddAccountBalance(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddItem(source, itemName, count, metadata, slot)",
    "example": "pr_lib.framework.AddItem(source, 'example', 1, {}, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddJobAccountBalance(account, amount, reason)",
    "example": "pr_lib.framework.AddJobAccountBalance(1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addMoney(src, amount, account, reason)",
    "example": "pr_lib.framework.addMoney(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddPlayerAccountBalance(source,account,amount,reason)",
    "example": "pr_lib.framework.AddPlayerAccountBalance(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addPlayerMoney(source, account, amount, reason)",
    "example": "pr_lib.framework.addPlayerMoney(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addPlayerMoney(source, moneyWallet, amount)",
    "example": "pr_lib.framework.addPlayerMoney(source, 'value', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addPlayerMoney(source, moneyWallet, amount, reason)",
    "example": "pr_lib.framework.addPlayerMoney(source, 'value', 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addPlayerMoney(source,account,amount,reason)",
    "example": "pr_lib.framework.addPlayerMoney(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addSocietyBalance(account, amount, reason)",
    "example": "pr_lib.framework.addSocietyBalance(1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.addSocietyBalance(job, amount)",
    "example": "pr_lib.framework.addSocietyBalance('example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.AddWeapon(source, data)",
    "example": "pr_lib.framework.AddWeapon(source, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.CanCarryItem(source, itemName, count, metadata)",
    "example": "local result = pr_lib.framework.CanCarryItem(source, 'example', 1, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.ClearPlayerInventory(source)",
    "example": "pr_lib.framework.ClearPlayerInventory(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.CreateWeaponData(source, data, weaponData)",
    "example": "local result = pr_lib.framework.CreateWeaponData(source, {}, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.DeleteOwnedVehicle(plate)",
    "example": "pr_lib.framework.DeleteOwnedVehicle('FORGE')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetAccountBalance(source,account)",
    "example": "local result = pr_lib.framework.GetAccountBalance(source, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetAllPlayers()",
    "example": "local result = pr_lib.framework.GetAllPlayers()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetCoords(source, withHeading)",
    "example": "local result = pr_lib.framework.GetCoords(source, 0.0)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetCoords(source,withHeading)",
    "example": "local result = pr_lib.framework.GetCoords(source, 0.0)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetFrameworkJobs()",
    "example": "local result = pr_lib.framework.GetFrameworkJobs()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetIdentifier(source)",
    "example": "local result = pr_lib.framework.GetIdentifier(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getItemByName(name)",
    "example": "local result = pr_lib.framework.getItemByName('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemByName(source, itemName, metadata, slot)",
    "example": "local result = pr_lib.framework.GetItemByName(source, 'example', {}, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getItemByName(source, name)",
    "example": "local result = pr_lib.framework.getItemByName(source, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemBySlot(source, slot)",
    "example": "local result = pr_lib.framework.GetItemBySlot(source, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemCount(source, itemName, metadata, strict)",
    "example": "local result = pr_lib.framework.GetItemCount(source, 'example', {}, true)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemData(source, itemName, metadata, slot)",
    "example": "local result = pr_lib.framework.GetItemData(source, 'example', {}, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemlabel(itemName)",
    "example": "local result = pr_lib.framework.GetItemlabel('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetItemLabel(itemName)",
    "example": "local result = pr_lib.framework.GetItemLabel('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetJobAccountBalance(account)",
    "example": "local result = pr_lib.framework.GetJobAccountBalance(1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetJobCount(jobName)",
    "example": "local result = pr_lib.framework.GetJobCount('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetOwnedVehicleData(plate)",
    "example": "local result = pr_lib.framework.GetOwnedVehicleData('FORGE')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetOwnedVehicleOwner(plate)",
    "example": "local result = pr_lib.framework.GetOwnedVehicleOwner('FORGE')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayer(source)",
    "example": "local result = pr_lib.framework.GetPlayer(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerAccountBalance(source,account)",
    "example": "local result = pr_lib.framework.GetPlayerAccountBalance(source, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerData(source)",
    "example": "local result = pr_lib.framework.GetPlayerData(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerDOB(source)",
    "example": "local result = pr_lib.framework.getPlayerDOB(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerDob(source)",
    "example": "local result = pr_lib.framework.GetPlayerDob(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerFromId(source)",
    "example": "local result = pr_lib.framework.getPlayerFromId(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerFromId(source)",
    "example": "local result = pr_lib.framework.GetPlayerFromId(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerFromIdentifier(identifier)",
    "example": "local result = pr_lib.framework.GetPlayerFromIdentifier('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerGender(source)",
    "example": "local result = pr_lib.framework.GetPlayerGender(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerGroup()",
    "example": "local result = pr_lib.framework.getPlayerGroup()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerGroup()",
    "example": "local result = pr_lib.framework.GetPlayerGroup()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerGroup(source)",
    "example": "local result = pr_lib.framework.getPlayerGroup(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerHeight(source)",
    "example": "local result = pr_lib.framework.getPlayerHeight(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerIdentifier(source)",
    "example": "local result = pr_lib.framework.GetPlayerIdentifier(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerInventory(source)",
    "example": "local result = pr_lib.framework.GetPlayerInventory(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerJob(source)",
    "example": "local result = pr_lib.framework.GetPlayerJob(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerJob(source, dataType)",
    "example": "local result = pr_lib.framework.getPlayerJob(source, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerJob(source,dataType)",
    "example": "local result = pr_lib.framework.getPlayerJob(source, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMetadata(source, key)",
    "example": "local result = pr_lib.framework.getPlayerMetadata(source, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMetadata(source, meta)",
    "example": "local result = pr_lib.framework.getPlayerMetadata(source, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerMetadata(source,key)",
    "example": "local result = pr_lib.framework.GetPlayerMetadata(source, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMetadata(source,key)",
    "example": "local result = pr_lib.framework.getPlayerMetadata(source, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMoney(source, account)",
    "example": "local result = pr_lib.framework.getPlayerMoney(source, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMoney(source, moneyWallet)",
    "example": "local result = pr_lib.framework.getPlayerMoney(source, 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerMoney(source,account)",
    "example": "local result = pr_lib.framework.getPlayerMoney(source, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerName(source)",
    "example": "local result = pr_lib.framework.getPlayerName(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerName(source)",
    "example": "local result = pr_lib.framework.GetPlayerName(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetPlayerNameByIdentifier(identifier)",
    "example": "local result = pr_lib.framework.GetPlayerNameByIdentifier('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerSex(source)",
    "example": "local result = pr_lib.framework.getPlayerSex(source)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerSourceFromPlayer(player)",
    "example": "local result = pr_lib.framework.getPlayerSourceFromPlayer('value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.getPlayerSourceFromPlayer(Player)",
    "example": "local result = pr_lib.framework.getPlayerSourceFromPlayer('value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetResourceName()",
    "example": "local result = pr_lib.framework.GetResourceName()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.GetWeapon(source, name)",
    "example": "local result = pr_lib.framework.GetWeapon(source, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.HasItem(source, itemName, count, metadata, strict)",
    "example": "local result = pr_lib.framework.HasItem(source, 'example', 1, {}, true)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.InsertOwnedVehicle(plate, owner, vehicle)",
    "example": "local result = pr_lib.framework.InsertOwnedVehicle('FORGE', 'value', entity)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.InventoryManagement(source, data)",
    "example": "pr_lib.framework.InventoryManagement(source, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.Items(itemName)",
    "example": "local result = pr_lib.framework.Items('example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.PlayerHasJob(source, jobName, grade)",
    "example": "pr_lib.framework.PlayerHasJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.PlayerHasJob(source, jobName, jobGrade)",
    "example": "pr_lib.framework.PlayerHasJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RegisterCallback(name, callback)",
    "example": "pr_lib.framework.RegisterCallback('example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RegisterCallback(name, cb)",
    "example": "pr_lib.framework.RegisterCallback('example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RegisterUsableItem()",
    "example": "pr_lib.framework.RegisterUsableItem()"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RegisterUsableItem(item, cb)",
    "example": "pr_lib.framework.RegisterUsableItem('example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RegisterUsableItem(itemName, callback)",
    "example": "pr_lib.framework.RegisterUsableItem('example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveAccountBalance(source,account,amount,reason)",
    "example": "pr_lib.framework.RemoveAccountBalance(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveItem(source, itemName, count, metadata, slot)",
    "example": "pr_lib.framework.RemoveItem(source, 'example', 1, {}, 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveJobAccountBalance(account, amount, reason)",
    "example": "pr_lib.framework.RemoveJobAccountBalance(1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemovePlayerAccountBalance(source,account,amount,reason)",
    "example": "pr_lib.framework.RemovePlayerAccountBalance(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removePlayerMoney(source, account, amount, reason)",
    "example": "pr_lib.framework.removePlayerMoney(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removePlayerMoney(source, moneyWallet, amount)",
    "example": "pr_lib.framework.removePlayerMoney(source, 'value', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removePlayerMoney(source, moneyWallet, amount, reason)",
    "example": "pr_lib.framework.removePlayerMoney(source, 'value', 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removePlayerMoney(source,account,amount,reason)",
    "example": "pr_lib.framework.removePlayerMoney(source, 1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removeSocietyBalance(account, amount, reason)",
    "example": "pr_lib.framework.removeSocietyBalance(1, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.removeSocietyBalance(job, amount)",
    "example": "pr_lib.framework.removeSocietyBalance('example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.RemoveWeapon(source, data)",
    "example": "pr_lib.framework.RemoveWeapon(source, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetMetadata(source, slot, metadata)",
    "example": "pr_lib.framework.SetMetadata(source, 1, {})"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerJob(source, jobName, grade)",
    "example": "pr_lib.framework.SetPlayerJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerJob(source, jobName, jobGrade)",
    "example": "pr_lib.framework.SetPlayerJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.setPlayerMetadata(source, key, value)",
    "example": "pr_lib.framework.setPlayerMetadata(source, 'example', 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.setPlayerMetadata(source, meta, value)",
    "example": "pr_lib.framework.setPlayerMetadata(source, 'value', 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.setPlayerMetadata(source,key,value)",
    "example": "pr_lib.framework.setPlayerMetadata(source, 'example', 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.SetPlayerMetadata(source,key,value)",
    "example": "pr_lib.framework.SetPlayerMetadata(source, 'example', 'value')"
  },
  {
    "module": "framework",
    "context": "server",
    "signature": "pr_lib.framework.takeMoney(src, amount, reason)",
    "example": "pr_lib.framework.takeMoney(source, 1, 'example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetAccountBalance(account)",
    "example": "local result = pr_lib.framework.GetAccountBalance(1)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.getCharacterName()",
    "example": "local result = pr_lib.framework.getCharacterName()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetClosestPlayer()",
    "example": "local result = pr_lib.framework.GetClosestPlayer()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetClosestVehicle()",
    "example": "local result = pr_lib.framework.GetClosestVehicle()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetItemCount(itemName, metadata, strict)",
    "example": "local result = pr_lib.framework.GetItemCount('example', {}, true)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetJobInfo()",
    "example": "local result = pr_lib.framework.GetJobInfo()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetMoney(account)",
    "example": "local result = pr_lib.framework.GetMoney(1)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetMoney(type)",
    "example": "local result = pr_lib.framework.GetMoney('example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayer()",
    "example": "local result = pr_lib.framework.GetPlayer()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerData()",
    "example": "local result = pr_lib.framework.GetPlayerData()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerDob()",
    "example": "local result = pr_lib.framework.GetPlayerDob()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerGender()",
    "example": "local result = pr_lib.framework.GetPlayerGender()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerGroup()",
    "example": "local result = pr_lib.framework.GetPlayerGroup()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerIdentifier()",
    "example": "local result = pr_lib.framework.GetPlayerIdentifier()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerInventory()",
    "example": "local result = pr_lib.framework.GetPlayerInventory()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerJob()",
    "example": "local result = pr_lib.framework.GetPlayerJob()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.getPlayerMetadata(key)",
    "example": "local result = pr_lib.framework.getPlayerMetadata('example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerMetadata(key)",
    "example": "local result = pr_lib.framework.GetPlayerMetadata('example')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.getPlayerMetadata(meta)",
    "example": "local result = pr_lib.framework.getPlayerMetadata('value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetPlayerName()",
    "example": "local result = pr_lib.framework.GetPlayerName()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.GetResourceName()",
    "example": "local result = pr_lib.framework.GetResourceName()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.HasItem(itemName, count, metadata, strict)",
    "example": "local result = pr_lib.framework.HasItem('example', 1, {}, true)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.HideTextUI()",
    "example": "pr_lib.framework.HideTextUI()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.IsPlayerDead()",
    "example": "local result = pr_lib.framework.IsPlayerDead()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.IsPlayerLoaded()",
    "example": "local result = pr_lib.framework.IsPlayerLoaded()"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.Notify(message, kind, duration)",
    "example": "pr_lib.framework.Notify('example', 'value', 1)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.PlayerHasJob(jobName, grade)",
    "example": "pr_lib.framework.PlayerHasJob('example', 1)"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.ShowTextUI(text)",
    "example": "pr_lib.framework.ShowTextUI('value')"
  },
  {
    "module": "framework",
    "context": "client",
    "signature": "pr_lib.framework.toggleOutfit(wear, outfits)",
    "example": "pr_lib.framework.toggleOutfit('value', 'value')"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.AddItem(...)",
    "example": "pr_lib.framework.AddItem()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.AddJobAccountBalance(...)",
    "example": "pr_lib.framework.AddJobAccountBalance()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.CanCarryItem(...)",
    "example": "local result = pr_lib.framework.CanCarryItem()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.ClearPlayerInventory(...)",
    "example": "pr_lib.framework.ClearPlayerInventory()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetAccountBalance(account)",
    "example": "local result = pr_lib.framework.GetAccountBalance(1)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetAllPlayers()",
    "example": "local result = pr_lib.framework.GetAllPlayers()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetClosestPlayer()",
    "example": "local result = pr_lib.framework.GetClosestPlayer()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetClosestVehicle()",
    "example": "local result = pr_lib.framework.GetClosestVehicle()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetFrameworkJobs()",
    "example": "local result = pr_lib.framework.GetFrameworkJobs()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetItemByName(...)",
    "example": "local result = pr_lib.framework.GetItemByName()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetItemBySlot(...)",
    "example": "local result = pr_lib.framework.GetItemBySlot()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetItemCount(...)",
    "example": "local result = pr_lib.framework.GetItemCount()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetItemData(...)",
    "example": "local result = pr_lib.framework.GetItemData()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetItemLabel(...)",
    "example": "local result = pr_lib.framework.GetItemLabel()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetItemlabel(...)",
    "example": "local result = pr_lib.framework.GetItemlabel()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetJobAccountBalance(...)",
    "example": "local result = pr_lib.framework.GetJobAccountBalance()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetJobCount(jobName)",
    "example": "local result = pr_lib.framework.GetJobCount('example')"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerData(...)",
    "example": "local result = pr_lib.framework.GetPlayerData()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerDob()",
    "example": "local result = pr_lib.framework.GetPlayerDob()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerFromIdentifier(identifier)",
    "example": "local result = pr_lib.framework.GetPlayerFromIdentifier('example')"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerGender()",
    "example": "local result = pr_lib.framework.GetPlayerGender()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerGroup()",
    "example": "local result = pr_lib.framework.GetPlayerGroup()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerIdentifier()",
    "example": "local result = pr_lib.framework.GetPlayerIdentifier()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerInventory(...)",
    "example": "local result = pr_lib.framework.GetPlayerInventory()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerJob()",
    "example": "local result = pr_lib.framework.GetPlayerJob()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.getPlayerJob()",
    "example": "local result = pr_lib.framework.getPlayerJob()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerJob(source)",
    "example": "local result = pr_lib.framework.GetPlayerJob(source)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetPlayerName()",
    "example": "local result = pr_lib.framework.GetPlayerName()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.GetResourceName()",
    "example": "local result = pr_lib.framework.GetResourceName()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.HasItem(...)",
    "example": "local result = pr_lib.framework.HasItem()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.HideTextUI()",
    "example": "pr_lib.framework.HideTextUI()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.IsPlayerDead()",
    "example": "local result = pr_lib.framework.IsPlayerDead()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.IsPlayerLoaded()",
    "example": "local result = pr_lib.framework.IsPlayerLoaded()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.Items(...)",
    "example": "local result = pr_lib.framework.Items()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.Notify(message,kind,duration)",
    "example": "pr_lib.framework.Notify('example', 'value', 1)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.PlayerHasJob(jobName,grade)",
    "example": "pr_lib.framework.PlayerHasJob('example', 1)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.PlayerHasJob(source, jobName, grade)",
    "example": "pr_lib.framework.PlayerHasJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.RegisterUsableItem(...)",
    "example": "pr_lib.framework.RegisterUsableItem()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.RemoveItem(...)",
    "example": "pr_lib.framework.RemoveItem()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.RemoveJobAccountBalance(...)",
    "example": "pr_lib.framework.RemoveJobAccountBalance()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.SetMetadata(...)",
    "example": "pr_lib.framework.SetMetadata()"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.SetPlayerJob(source, jobName, grade)",
    "example": "pr_lib.framework.SetPlayerJob(source, 'example', 1)"
  },
  {
    "module": "framework",
    "context": "shared",
    "signature": "pr_lib.framework.ShowTextUI(text)",
    "example": "pr_lib.framework.ShowTextUI('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddItem(inv, item, count, metadata, slot, cb)",
    "example": "pr_lib.inventory.AddItem('value', 'example', 1, {}, 1, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddItem(inv,item,count,metadata,slot)",
    "example": "pr_lib.inventory.AddItem('value', 'example', 1, {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddItem(source,item,count,metadata,slot)",
    "example": "pr_lib.inventory.AddItem(source, 'example', 1, {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddItemIntoStash(id, item, amount, slot, metadata, slots, maxWeight)",
    "example": "pr_lib.inventory.AddItemIntoStash('example', 'example', 1, 1, {}, 1, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddStashItems(id, items)",
    "example": "pr_lib.inventory.AddStashItems('example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddStashItems(id,items)",
    "example": "pr_lib.inventory.AddStashItems('example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.AddTrunkItems(identifier, items)",
    "example": "pr_lib.inventory.AddTrunkItems('example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryAmount(inv, item)",
    "example": "local result = pr_lib.inventory.CanCarryAmount('value', 'example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryItem(inv, item, count, metadata)",
    "example": "local result = pr_lib.inventory.CanCarryItem('value', 'example', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryItem(inv,item,count,metadata)",
    "example": "local result = pr_lib.inventory.CanCarryItem('value', 'example', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryItem(source,item,count,metadata)",
    "example": "local result = pr_lib.inventory.CanCarryItem(source, 'example', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanCarryWeight(inv, weight)",
    "example": "local result = pr_lib.inventory.CanCarryWeight('value', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CanSwapItem(inv, firstItem, firstItemCount, testItem, testItemCount)",
    "example": "local result = pr_lib.inventory.CanSwapItem('value', 'example', 1, 'example', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CheckItemValid(source, name, count)",
    "example": "pr_lib.inventory.CheckItemValid(source, 'example', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearInventory(inv, keep)",
    "example": "pr_lib.inventory.ClearInventory('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearInventory(inv,keep)",
    "example": "pr_lib.inventory.ClearInventory('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearInventory(source)",
    "example": "pr_lib.inventory.ClearInventory(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearOtherInventory(type, id)",
    "example": "pr_lib.inventory.ClearOtherInventory('example', 'example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearPlayerInventory(inv, keep)",
    "example": "pr_lib.inventory.ClearPlayerInventory('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ClearStash(id)",
    "example": "pr_lib.inventory.ClearStash('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ConfiscateInventory(source)",
    "example": "pr_lib.inventory.ConfiscateInventory(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CreateDropFromPlayer(playerId)",
    "example": "local result = pr_lib.inventory.CreateDropFromPlayer(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CreateTemporaryStash(properties)",
    "example": "local result = pr_lib.inventory.CreateTemporaryStash({})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CreateUsableItem(item, cb)",
    "example": "local result = pr_lib.inventory.CreateUsableItem('example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.CustomDrop(prefix, items, coords, slots, maxWeight, instance, model)",
    "example": "pr_lib.inventory.CustomDrop('value', {}, vec3(0.0, 0.0, 0.0), 1, 1, 'value', 'prop_tool_bench02')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.forceOpenInventory(playerId, invType, data)",
    "example": "pr_lib.inventory.forceOpenInventory(source, 'example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetContainerFromSlot(inv, slotId)",
    "example": "local result = pr_lib.inventory.GetContainerFromSlot('value', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetCurrentWeapon(inv)",
    "example": "local result = pr_lib.inventory.GetCurrentWeapon('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetEmptySlot(inv)",
    "example": "local result = pr_lib.inventory.GetEmptySlot('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetImagePath(item)",
    "example": "local result = pr_lib.inventory.GetImagePath('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventory(inv)",
    "example": "local result = pr_lib.inventory.GetInventory('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventory(inv, owner)",
    "example": "local result = pr_lib.inventory.GetInventory('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventory(inv, source)",
    "example": "local result = pr_lib.inventory.GetInventory('value', source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventory(source)",
    "example": "local result = pr_lib.inventory.GetInventory(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.getInventoryImg(image)",
    "example": "local result = pr_lib.inventory.getInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.getInventoryImg(item)",
    "example": "local result = pr_lib.inventory.getInventoryImg('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventoryItems(inv)",
    "example": "local result = pr_lib.inventory.GetInventoryItems('value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetInventoryItems(inv, owner)",
    "example": "local result = pr_lib.inventory.GetInventoryItems('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItem(inv, item, metadata, returnsCount)",
    "example": "local result = pr_lib.inventory.GetItem('value', 'example', {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItem(inv,item,metadata)",
    "example": "local result = pr_lib.inventory.GetItem('value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItem(source,item,metadata)",
    "example": "local result = pr_lib.inventory.GetItem(source, 'example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemByName(inv, item, metadata, returnsCount)",
    "example": "local result = pr_lib.inventory.GetItemByName('value', 'example', {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemBySlot(inv,slot,metadata)",
    "example": "local result = pr_lib.inventory.GetItemBySlot('value', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemBySlot(source, slot)",
    "example": "local result = pr_lib.inventory.GetItemBySlot(source, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemBySlot(src, slot)",
    "example": "local result = pr_lib.inventory.GetItemBySlot(source, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemCount(inv, itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetItemCount('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemCount(inv,item,metadata,strict)",
    "example": "local result = pr_lib.inventory.GetItemCount('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemCount(source,item,metadata)",
    "example": "local result = pr_lib.inventory.GetItemCount(source, 'example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.getItemInfo(item)",
    "example": "local result = pr_lib.inventory.getItemInfo('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemInfo(item)",
    "example": "local result = pr_lib.inventory.GetItemInfo('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemLabel(item)",
    "example": "local result = pr_lib.inventory.GetItemLabel('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemLabel(itemname)",
    "example": "local result = pr_lib.inventory.GetItemLabel('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetItemSlots(inv, item, metadata)",
    "example": "local result = pr_lib.inventory.GetItemSlots('value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetResourceName()",
    "example": "local result = pr_lib.inventory.GetResourceName()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlot(inv, slot)",
    "example": "local result = pr_lib.inventory.GetSlot('value', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotForItem(inv, itemName, metadata)",
    "example": "local result = pr_lib.inventory.GetSlotForItem('value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotIdsWithItem(inv, itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdsWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotIdWithItem(inv, itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotsWithItem(inv, itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotsWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetSlotWithItem(inv, itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetStashItems(id)",
    "example": "local result = pr_lib.inventory.GetStashItems('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetStashItems(stashid)",
    "example": "local result = pr_lib.inventory.GetStashItems('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetTotalUsedSlots(source)",
    "example": "local result = pr_lib.inventory.GetTotalUsedSlots(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetTotalWeight(items)",
    "example": "local result = pr_lib.inventory.GetTotalWeight({})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.GetWeaponAttachmentItems()",
    "example": "local result = pr_lib.inventory.GetWeaponAttachmentItems()"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.HasItem(inv,item,count,metadata,strict)",
    "example": "local result = pr_lib.inventory.HasItem('value', 'example', 1, {}, true)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.HasItem(source, items, amount)",
    "example": "local result = pr_lib.inventory.HasItem(source, {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.HasItem(source,item,count,metadata)",
    "example": "local result = pr_lib.inventory.HasItem(source, 'example', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.HasItem(src, item, requiredCount)",
    "example": "local result = pr_lib.inventory.HasItem(source, 'example', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.InspectInventory(target, source)",
    "example": "pr_lib.inventory.InspectInventory(source, source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.Items(item)",
    "example": "local result = pr_lib.inventory.Items('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.Items(itemName)",
    "example": "local result = pr_lib.inventory.Items('example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.LoadInventory(source, identifier)",
    "example": "local result = pr_lib.inventory.LoadInventory(source, 'example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.OpenPlayerInventory(src, target)",
    "example": "pr_lib.inventory.OpenPlayerInventory(source, source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.OpenShop(src, shopTitle)",
    "example": "pr_lib.inventory.OpenShop(source, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.OpenStash(source,id)",
    "example": "pr_lib.inventory.OpenStash(source, 'example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterShop(shopTitle, invData, shopCoords, shopGroups)",
    "example": "pr_lib.inventory.RegisterShop('value', {}, vec3(0.0, 0.0, 0.0), 'example')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterStash(id, label, slots, maxWeight, owner, groups, coords)",
    "example": "pr_lib.inventory.RegisterStash('example', 'value', 1, 1, 'value', 'example', vec3(0.0, 0.0, 0.0))"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterStash(id,label,slots,maxWeight,owner,groups,coords)",
    "example": "pr_lib.inventory.RegisterStash('example', 'value', 1, 1, 'value', 'example', vec3(0.0, 0.0, 0.0))"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterStash(source, id, slots, weight)",
    "example": "pr_lib.inventory.RegisterStash(source, 'example', 1, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RegisterUsableItem(item, cb, options)",
    "example": "pr_lib.inventory.RegisterUsableItem('example', function(...)\\n    -- handle result\\nend, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RemoveItem(inv, item, count, metadata, slot)",
    "example": "pr_lib.inventory.RemoveItem('value', 'example', 1, {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RemoveItem(inv,item,count,metadata,slot)",
    "example": "pr_lib.inventory.RemoveItem('value', 'example', 1, {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RemoveItem(source,item,count,metadata,slot)",
    "example": "pr_lib.inventory.RemoveItem(source, 'example', 1, {}, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.RemoveItemIntoStash(id, item, amount, slot, slots, maxWeight)",
    "example": "pr_lib.inventory.RemoveItemIntoStash('example', 'example', 1, 1, 1, 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.ReturnInventory(source)",
    "example": "pr_lib.inventory.ReturnInventory(source)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SaveInventory(source, offline)",
    "example": "pr_lib.inventory.SaveInventory(source, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.Search(inv, search, item, metadata)",
    "example": "local result = pr_lib.inventory.Search('value', 'value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetDurability(inv, slot, durability)",
    "example": "pr_lib.inventory.SetDurability('value', 1, 'value')"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetInventoryItems(source, item, amount)",
    "example": "pr_lib.inventory.SetInventoryItems(source, 'example', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetItemBySlot(source, slot, itemdata)",
    "example": "pr_lib.inventory.SetItemBySlot(source, 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetItemMetadata(inv, slot, metadata)",
    "example": "pr_lib.inventory.SetItemMetadata('value', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetItemMetadata(source, slot, metadata)",
    "example": "pr_lib.inventory.SetItemMetadata(source, 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.setItemMetadata(src, slot, metadata)",
    "example": "pr_lib.inventory.setItemMetadata(source, 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetMaxWeight(inv, maxWeight)",
    "example": "pr_lib.inventory.SetMaxWeight('value', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetMetadata(inv, slot, metadata)",
    "example": "pr_lib.inventory.SetMetadata('value', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetMetadata(inv,slot,metadata)",
    "example": "pr_lib.inventory.SetMetadata('value', 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetMetadata(source,slot,metadata)",
    "example": "pr_lib.inventory.SetMetadata(source, 1, {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.setPlayerInventory(player, data)",
    "example": "pr_lib.inventory.setPlayerInventory('value', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.SetSlotCount(inv, slots)",
    "example": "pr_lib.inventory.SetSlotCount('value', 1)"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.UpdateStash(stashid, items)",
    "example": "pr_lib.inventory.UpdateStash('example', {})"
  },
  {
    "module": "inventory",
    "context": "server",
    "signature": "pr_lib.inventory.UpdateVehicle(oldPlate, newPlate)",
    "example": "pr_lib.inventory.UpdateVehicle('FORGE', 'FORGE')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.CheckIfInventoryBlocked()",
    "example": "pr_lib.inventory.CheckIfInventoryBlocked()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.closeInventory()",
    "example": "pr_lib.inventory.closeInventory()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.displayMetadata(metadata, value)",
    "example": "pr_lib.inventory.displayMetadata({}, 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetClientPlayerInventory()",
    "example": "local result = pr_lib.inventory.GetClientPlayerInventory()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getCurrentWeapon()",
    "example": "local result = pr_lib.inventory.getCurrentWeapon()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetImagePath(item)",
    "example": "local result = pr_lib.inventory.GetImagePath('example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getInventoryImg(image)",
    "example": "local result = pr_lib.inventory.getInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getInventoryImg(item)",
    "example": "local result = pr_lib.inventory.getInventoryImg('example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemCount(item,metadata)",
    "example": "local result = pr_lib.inventory.GetItemCount('example', {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemCount(item,metadata,strict)",
    "example": "local result = pr_lib.inventory.GetItemCount('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemCount(itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetItemCount('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemInfo(item)",
    "example": "local result = pr_lib.inventory.GetItemInfo('example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getItemInfo(item)",
    "example": "local result = pr_lib.inventory.getItemInfo('example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemLabel(item)",
    "example": "local result = pr_lib.inventory.GetItemLabel('example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetItemList()",
    "example": "local result = pr_lib.inventory.GetItemList()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerInventory()",
    "example": "local result = pr_lib.inventory.GetPlayerInventory()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerItems()",
    "example": "local result = pr_lib.inventory.GetPlayerItems()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerMaxWeight()",
    "example": "local result = pr_lib.inventory.GetPlayerMaxWeight()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetPlayerWeight()",
    "example": "local result = pr_lib.inventory.GetPlayerWeight()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetResourceName()",
    "example": "local result = pr_lib.inventory.GetResourceName()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotIdsWithItem(itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdsWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotIdWithItem(itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotsWithItem(itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotsWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetSlotWithItem(itemName, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.getUserInventory()",
    "example": "local result = pr_lib.inventory.getUserInventory()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.GetWeaponList()",
    "example": "local result = pr_lib.inventory.GetWeaponList()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.giveItemToTarget(serverId, slotId, count)",
    "example": "pr_lib.inventory.giveItemToTarget('example', 1, 1)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.HasItem(item, requiredCount)",
    "example": "local result = pr_lib.inventory.HasItem('example', 1)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.HasItem(item,count,metadata)",
    "example": "local result = pr_lib.inventory.HasItem('example', 1, {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.HasItem(item,count,metadata,strict)",
    "example": "local result = pr_lib.inventory.HasItem('example', 1, {}, true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.isInventoryOpen()",
    "example": "local result = pr_lib.inventory.isInventoryOpen()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.Items(itemName)",
    "example": "local result = pr_lib.inventory.Items('example')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.openInventory(invType, data)",
    "example": "pr_lib.inventory.openInventory('example', {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.openNearbyInventory()",
    "example": "pr_lib.inventory.openNearbyInventory()"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.RegisterStash(id, slots, weight)",
    "example": "pr_lib.inventory.RegisterStash('example', 1, 1)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.Search(search, item, metadata)",
    "example": "local result = pr_lib.inventory.Search('value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.setInClothing(state)",
    "example": "pr_lib.inventory.setInClothing(true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.setInventoryDisabled(state)",
    "example": "pr_lib.inventory.setInventoryDisabled(true)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.setStashTarget(id, owner)",
    "example": "pr_lib.inventory.setStashTarget('example', 'value')"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.useItem(data, cb)",
    "example": "pr_lib.inventory.useItem({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.useSlot(slot)",
    "example": "pr_lib.inventory.useSlot(1)"
  },
  {
    "module": "inventory",
    "context": "client",
    "signature": "pr_lib.inventory.weaponWheel(state)",
    "example": "pr_lib.inventory.weaponWheel(true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.AddStashItems(stashId, items)",
    "example": "pr_lib.inventory.AddStashItems('example', {})"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.ClearPlayerInventory(...)",
    "example": "pr_lib.inventory.ClearPlayerInventory()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.ClearStash(...)",
    "example": "pr_lib.inventory.ClearStash()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetImagePath(image)",
    "example": "local result = pr_lib.inventory.GetImagePath('value')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.getInventoryImg(image)",
    "example": "local result = pr_lib.inventory.getInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetInventoryImg(image)",
    "example": "local result = pr_lib.inventory.GetInventoryImg('value')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetInventoryItems()",
    "example": "local result = pr_lib.inventory.GetInventoryItems()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetInventoryItems(inv, owner)",
    "example": "local result = pr_lib.inventory.GetInventoryItems('value', 'value')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetItemByName(...)",
    "example": "local result = pr_lib.inventory.GetItemByName()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetItemBySlot(inv, slot)",
    "example": "local result = pr_lib.inventory.GetItemBySlot('value', 1)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetItemInfo(item)",
    "example": "local result = pr_lib.inventory.GetItemInfo('example')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.getItemInfo(item)",
    "example": "local result = pr_lib.inventory.getItemInfo('example')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetItemLabel(item)",
    "example": "local result = pr_lib.inventory.GetItemLabel('example')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetItemSlots(inv, item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetItemSlots('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetPlayerInventory()",
    "example": "local result = pr_lib.inventory.GetPlayerInventory()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetResourceName()",
    "example": "local result = pr_lib.inventory.GetResourceName()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlot(...)",
    "example": "local result = pr_lib.inventory.GetSlot()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlot(inv, slot)",
    "example": "local result = pr_lib.inventory.GetSlot('value', 1)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotForItem(item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotForItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotIdsWithItem(inv, item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdsWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotIdsWithItem(item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdsWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotIdWithItem(inv, item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotIdWithItem(item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotIdWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotsWithItem(inv, item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotsWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotsWithItem(item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotsWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotWithItem(inv, item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotWithItem('value', 'example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetSlotWithItem(item, metadata, strict)",
    "example": "local result = pr_lib.inventory.GetSlotWithItem('example', {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.GetStashItems()",
    "example": "local result = pr_lib.inventory.GetStashItems()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.HasItem(inv, item, amount, metadata, strict)",
    "example": "local result = pr_lib.inventory.HasItem('value', 'example', 1, {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.HasItem(item, amount, metadata, strict)",
    "example": "local result = pr_lib.inventory.HasItem('example', 1, {}, true)"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.OpenStash(source, stashId)",
    "example": "pr_lib.inventory.OpenStash(source, 'example')"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.Search(inv, search, item, metadata)",
    "example": "local result = pr_lib.inventory.Search('value', 'value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.Search(search, item, metadata)",
    "example": "local result = pr_lib.inventory.Search('value', 'example', {})"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.SetItemMetadata(...)",
    "example": "pr_lib.inventory.SetItemMetadata()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.setItemMetadata(...)",
    "example": "pr_lib.inventory.setItemMetadata()"
  },
  {
    "module": "inventory",
    "context": "shared",
    "signature": "pr_lib.inventory.SetMetadata(...)",
    "example": "pr_lib.inventory.SetMetadata()"
  },
  {
    "module": "notification",
    "context": "server",
    "signature": "pr_lib.notify.GetResourceName()",
    "example": "local result = pr_lib.notify.GetResourceName()"
  },
  {
    "module": "notification",
    "context": "server",
    "signature": "pr_lib.notify.Notify(src, data)",
    "example": "pr_lib.notify.Notify(source, {})"
  },
  {
    "module": "notification",
    "context": "server",
    "signature": "pr_lib.notify.Notify(src,data)",
    "example": "pr_lib.notify.Notify(source, {})"
  },
  {
    "module": "notification",
    "context": "client",
    "signature": "pr_lib.notify.GetResourceName()",
    "example": "local result = pr_lib.notify.GetResourceName()"
  },
  {
    "module": "notification",
    "context": "client",
    "signature": "pr_lib.notify.Notify(data)",
    "example": "pr_lib.notify.Notify({})"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.AlertDialog()",
    "example": "pr_lib.menus.AlertDialog()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.AlertDialog(data, timeout)",
    "example": "pr_lib.menus.AlertDialog({}, 1)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.GetOpenContextMenu()",
    "example": "local result = pr_lib.menus.GetOpenContextMenu()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.HideContext()",
    "example": "pr_lib.menus.HideContext()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.HideContext(onExit)",
    "example": "pr_lib.menus.HideContext(function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.HideMenu()",
    "example": "pr_lib.menus.HideMenu()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.HideMenu(onExit)",
    "example": "pr_lib.menus.HideMenu(function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.InputDialog()",
    "example": "pr_lib.menus.InputDialog()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.InputDialog(heading, rows, options)",
    "example": "pr_lib.menus.InputDialog(0.0, {}, {})"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.RegisterContext(context)",
    "example": "pr_lib.menus.RegisterContext({})"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.RegisterMenu()",
    "example": "pr_lib.menus.RegisterMenu()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.RegisterMenu(data, cb)",
    "example": "pr_lib.menus.RegisterMenu({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.ShowContext(id)",
    "example": "pr_lib.menus.ShowContext('example')"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.ShowMenu()",
    "example": "pr_lib.menus.ShowMenu()"
  },
  {
    "module": "menu",
    "context": "client",
    "signature": "pr_lib.menus.ShowMenu(id, startIndex)",
    "example": "pr_lib.menus.ShowMenu('example', 'value')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addBoxZone(parameters)",
    "example": "pr_lib.target.addBoxZone({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addEntity(netIds, options)",
    "example": "pr_lib.target.addEntity('example', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addEntity(netIds,list)",
    "example": "pr_lib.target.addEntity('example', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalObject(list)",
    "example": "pr_lib.target.addGlobalObject({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalObject(options)",
    "example": "pr_lib.target.addGlobalObject({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalOption(options)",
    "example": "pr_lib.target.addGlobalOption({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalPed(list)",
    "example": "pr_lib.target.addGlobalPed({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalPed(options)",
    "example": "pr_lib.target.addGlobalPed({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalPlayer(list)",
    "example": "pr_lib.target.addGlobalPlayer({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalPlayer(options)",
    "example": "pr_lib.target.addGlobalPlayer({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalVehicle(list)",
    "example": "pr_lib.target.addGlobalVehicle({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addGlobalVehicle(options)",
    "example": "pr_lib.target.addGlobalVehicle({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addLocalEntity(entities, options)",
    "example": "pr_lib.target.addLocalEntity('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addLocalEntity(entities,list)",
    "example": "pr_lib.target.addLocalEntity('value', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addModel(models, options)",
    "example": "pr_lib.target.addModel('prop_tool_bench02', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addModel(models,list)",
    "example": "pr_lib.target.addModel('prop_tool_bench02', {})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addPolyZone(parameters)",
    "example": "pr_lib.target.addPolyZone({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.addSphereZone(parameters)",
    "example": "pr_lib.target.addSphereZone({})"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.disableTargeting()",
    "example": "pr_lib.target.disableTargeting()"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.disableTargeting(state)",
    "example": "pr_lib.target.disableTargeting(true)"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.GetResourceName()",
    "example": "local result = pr_lib.target.GetResourceName()"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeEntity(netIds, optionNames)",
    "example": "pr_lib.target.removeEntity('example', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeEntity(netIds,names)",
    "example": "pr_lib.target.removeEntity('example', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalObject(names)",
    "example": "pr_lib.target.removeGlobalObject('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalObject(optionNames)",
    "example": "pr_lib.target.removeGlobalObject('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalOption(optionNames)",
    "example": "pr_lib.target.removeGlobalOption('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalPed(names)",
    "example": "pr_lib.target.removeGlobalPed('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalPed(optionNames)",
    "example": "pr_lib.target.removeGlobalPed('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalPlayer(names)",
    "example": "pr_lib.target.removeGlobalPlayer('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalPlayer(optionNames)",
    "example": "pr_lib.target.removeGlobalPlayer('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalVehicle(names)",
    "example": "pr_lib.target.removeGlobalVehicle('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeGlobalVehicle(optionNames)",
    "example": "pr_lib.target.removeGlobalVehicle('example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeLocalEntity(entities, optionNames)",
    "example": "pr_lib.target.removeLocalEntity('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeLocalEntity(entities,names)",
    "example": "pr_lib.target.removeLocalEntity('value', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeModel(models, optionNames)",
    "example": "pr_lib.target.removeModel('prop_tool_bench02', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeModel(models,names)",
    "example": "pr_lib.target.removeModel('prop_tool_bench02', 'example')"
  },
  {
    "module": "target",
    "context": "client",
    "signature": "pr_lib.target.removeZone(id)",
    "example": "pr_lib.target.removeZone('example')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.AddBoxZone(name,coords,size,rotation,options,debug)",
    "example": "pr_lib.target.AddBoxZone('example', vec3(0.0, 0.0, 0.0), 'value', 0.0, {}, 'value')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.AddPolyZone(name,points,thickness,options,debug)",
    "example": "pr_lib.target.AddPolyZone('example', 'value', 'value', {}, 'value')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.AddSphereZone(name,coords,radius,options,debug)",
    "example": "pr_lib.target.AddSphereZone('example', vec3(0.0, 0.0, 0.0), 1, {}, 'value')"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.FixOptions(...)",
    "example": "pr_lib.target.FixOptions()"
  },
  {
    "module": "target",
    "context": "shared",
    "signature": "pr_lib.target.GetResourceName(...)",
    "example": "local result = pr_lib.target.GetResourceName()"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetMetaFromSource(phoneNumber)",
    "example": "local result = pr_lib.phone.GetMetaFromSource('value')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetMetaFromSource(source)",
    "example": "local result = pr_lib.phone.GetMetaFromSource(source)"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetPhoneNames()",
    "example": "local result = pr_lib.phone.GetPhoneNames()"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetPhoneNumberFromIdentifier(identifier, mustBePhoneOwner)",
    "example": "local result = pr_lib.phone.GetPhoneNumberFromIdentifier('example', 'value')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.GetPhoneNumberFromIdentifier(source, mustBePhoneOwner)",
    "example": "local result = pr_lib.phone.GetPhoneNumberFromIdentifier(source, 'value')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.HasEmailAccount(phoneNumber)",
    "example": "local result = pr_lib.phone.HasEmailAccount('value')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.HasEmailAccount(source)",
    "example": "local result = pr_lib.phone.HasEmailAccount(source)"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.IsInJobDuty(source)",
    "example": "local result = pr_lib.phone.IsInJobDuty(source)"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.RemoveFromJobDuty(source)",
    "example": "pr_lib.phone.RemoveFromJobDuty(source)"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SendNewMessageFromApp(source, phoneNumber, message, appName)",
    "example": "pr_lib.phone.SendNewMessageFromApp(source, 'value', 'example', 'example')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SendNewMessageFromApp(target, phoneNumber, message, appName)",
    "example": "pr_lib.phone.SendNewMessageFromApp(source, 'value', 'example', 'example')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SendSOSMessage(phoneNumber, job, coords, messageType)",
    "example": "pr_lib.phone.SendSOSMessage('value', 'example', vec3(0.0, 0.0, 0.0), 'example')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SendSOSMessage(source, job, coords, messageType)",
    "example": "pr_lib.phone.SendSOSMessage(source, 'example', vec3(0.0, 0.0, 0.0), 'example')"
  },
  {
    "module": "phone",
    "context": "server",
    "signature": "pr_lib.phone.SetInJobDuty(source)",
    "example": "pr_lib.phone.SetInJobDuty(source)"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.ClosePhone()",
    "example": "pr_lib.phone.ClosePhone()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.CreateCall(name, number, image, anonymous)",
    "example": "local result = pr_lib.phone.CreateCall('example', 'value', 'value', 'value')"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.EndCall()",
    "example": "pr_lib.phone.EndCall()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.GetCall()",
    "example": "local result = pr_lib.phone.GetCall()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.InPhone()",
    "example": "pr_lib.phone.InPhone()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.IsInCall()",
    "example": "local result = pr_lib.phone.IsInCall()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.IsInCamera()",
    "example": "local result = pr_lib.phone.IsInCamera()"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.SetCanOpenPhone(bool)",
    "example": "pr_lib.phone.SetCanOpenPhone(true)"
  },
  {
    "module": "phone",
    "context": "client",
    "signature": "pr_lib.phone.SetSOS(bool)",
    "example": "pr_lib.phone.SetSOS(true)"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progress.doProgressbar()",
    "example": "pr_lib.progress.doProgressbar()"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progress.doProgressbar(duration, label, anim)",
    "example": "pr_lib.progress.doProgressbar(1, 'value', 'value')"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progress.doProgressCircle()",
    "example": "pr_lib.progress.doProgressCircle()"
  },
  {
    "module": "progressbar",
    "context": "client",
    "signature": "pr_lib.progress.doProgressCircle(duration, label, anim)",
    "example": "pr_lib.progress.doProgressCircle(1, 'value', 'value')"
  },
  {
    "module": "weather",
    "context": "client",
    "signature": "pr_lib.weather.GetResourceName()",
    "example": "local result = pr_lib.weather.GetResourceName()"
  },
  {
    "module": "weather",
    "context": "client",
    "signature": "pr_lib.weather.ToggleSync(toggle)",
    "example": "pr_lib.weather.ToggleSync('value')"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.backup.create(options)",
    "example": "local result = pr_lib.database.backup.create({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.backup.run(options)",
    "example": "pr_lib.database.backup.run({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.backup.export(options)",
    "example": "pr_lib.database.backup.export({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.createBackup(options)",
    "example": "local result = pr_lib.database.createBackup({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.sqlBackup.create(options)",
    "example": "local result = pr_lib.sqlBackup.create({})"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.auto(query, parameters, cb)",
    "example": "pr_lib.database.auto('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.execute(_, _, cb)",
    "example": "pr_lib.database.execute('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.execute(query, parameters, cb)",
    "example": "pr_lib.database.execute('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.fetch(query, parameters, cb)",
    "example": "local result = pr_lib.database.fetch('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.fetchAll(query, parameters, cb)",
    "example": "local result = pr_lib.database.fetchAll('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.GetResourceName()",
    "example": "local result = pr_lib.database.GetResourceName()"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.insert(_, _, cb)",
    "example": "local result = pr_lib.database.insert('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.insert(query, parameters, cb)",
    "example": "local result = pr_lib.database.insert('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.isReady()",
    "example": "local result = pr_lib.database.isReady()"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.query(_, _, cb)",
    "example": "local result = pr_lib.database.query('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.query(query, parameters, cb)",
    "example": "local result = pr_lib.database.query('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.read(query, parameters, cb)",
    "example": "local result = pr_lib.database.read('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.run(query, parameters, cb)",
    "example": "pr_lib.database.run('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.scalar(_, _, cb)",
    "example": "local result = pr_lib.database.scalar('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.scalar(query, parameters, cb)",
    "example": "local result = pr_lib.database.scalar('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.single(_, _, cb)",
    "example": "local result = pr_lib.database.single('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.single(query, parameters, cb)",
    "example": "local result = pr_lib.database.single('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.transaction(_, _, cb)",
    "example": "pr_lib.database.transaction('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.transaction(queries, parameters, cb)",
    "example": "pr_lib.database.transaction({}, {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.update(query, parameters, cb)",
    "example": "pr_lib.database.update('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "server",
    "signature": "pr_lib.database.write(query, parameters, cb)",
    "example": "pr_lib.database.write('value', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.execute(_, _, cb)",
    "example": "pr_lib.database.execute('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.fetch(_, _, cb)",
    "example": "local result = pr_lib.database.fetch('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.fetchAll(_, _, cb)",
    "example": "local result = pr_lib.database.fetchAll('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.GetResourceName()",
    "example": "local result = pr_lib.database.GetResourceName()"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.insert(_, _, cb)",
    "example": "local result = pr_lib.database.insert('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.isReady()",
    "example": "local result = pr_lib.database.isReady()"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.query(_, _, cb)",
    "example": "local result = pr_lib.database.query('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.read(_, _, cb)",
    "example": "local result = pr_lib.database.read('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.run(_, _, cb)",
    "example": "pr_lib.database.run('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.scalar(_, _, cb)",
    "example": "local result = pr_lib.database.scalar('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.single(_, _, cb)",
    "example": "local result = pr_lib.database.single('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.transaction(_, _, cb)",
    "example": "pr_lib.database.transaction('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.update(_, _, cb)",
    "example": "pr_lib.database.update('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "database",
    "context": "client",
    "signature": "pr_lib.database.write(_, _, cb)",
    "example": "pr_lib.database.write('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fuel",
    "context": "client",
    "signature": "pr_lib.fuel.GetFuel(vehicle)",
    "example": "local result = pr_lib.fuel.GetFuel(entity)"
  },
  {
    "module": "fuel",
    "context": "client",
    "signature": "pr_lib.fuel.GetResourceName()",
    "example": "local result = pr_lib.fuel.GetResourceName()"
  },
  {
    "module": "fuel",
    "context": "client",
    "signature": "pr_lib.fuel.SetFuel(vehicle, amount, type)",
    "example": "pr_lib.fuel.SetFuel(entity, 1, 'example')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GetAllKeys()",
    "example": "local result = pr_lib.vehicle_key.GetAllKeys()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GetAllKeys(source)",
    "example": "local result = pr_lib.vehicle_key.GetAllKeys(source)"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveKey()",
    "example": "pr_lib.vehicle_key.GiveKey()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveKey(source, plate)",
    "example": "pr_lib.vehicle_key.GiveKey(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveKeyItem()",
    "example": "pr_lib.vehicle_key.GiveKeyItem()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveKeyItem(source, plate, netId)",
    "example": "pr_lib.vehicle_key.GiveKeyItem(source, 'FORGE', 'example')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveTempKeys()",
    "example": "pr_lib.vehicle_key.GiveTempKeys()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.GiveTempKeys(source, plate)",
    "example": "pr_lib.vehicle_key.GiveTempKeys(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HasKey()",
    "example": "local result = pr_lib.vehicle_key.HasKey()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HasKey(source, plate)",
    "example": "local result = pr_lib.vehicle_key.HasKey(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HavePermanentKey()",
    "example": "pr_lib.vehicle_key.HavePermanentKey()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HavePermanentKey(source, plate)",
    "example": "pr_lib.vehicle_key.HavePermanentKey(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HaveTemporaryKey()",
    "example": "pr_lib.vehicle_key.HaveTemporaryKey()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.HaveTemporaryKey(source, plate)",
    "example": "pr_lib.vehicle_key.HaveTemporaryKey(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveKey()",
    "example": "pr_lib.vehicle_key.RemoveKey()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveKey(source, plate)",
    "example": "pr_lib.vehicle_key.RemoveKey(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveKeyItem()",
    "example": "pr_lib.vehicle_key.RemoveKeyItem()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveKeyItem(source, plate)",
    "example": "pr_lib.vehicle_key.RemoveKeyItem(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveTempKeys()",
    "example": "pr_lib.vehicle_key.RemoveTempKeys()"
  },
  {
    "module": "vehicle_key",
    "context": "server",
    "signature": "pr_lib.vehicle_key.RemoveTempKeys(source, plate)",
    "example": "pr_lib.vehicle_key.RemoveTempKeys(source, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GetAllKeys(target)",
    "example": "local result = pr_lib.vehicle_key.GetAllKeys(source)"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GetResourceName()",
    "example": "local result = pr_lib.vehicle_key.GetResourceName()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKey()",
    "example": "pr_lib.vehicle_key.GiveKey()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKey(plate)",
    "example": "pr_lib.vehicle_key.GiveKey('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKeyItem(plate, vehicle)",
    "example": "pr_lib.vehicle_key.GiveKeyItem('FORGE', entity)"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKeyMenu(plate)",
    "example": "pr_lib.vehicle_key.GiveKeyMenu('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKeys()",
    "example": "pr_lib.vehicle_key.GiveKeys()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveKeys(vehicle, plate)",
    "example": "pr_lib.vehicle_key.GiveKeys(entity, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.GiveTempKeys(plate)",
    "example": "pr_lib.vehicle_key.GiveTempKeys('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.HasKey()",
    "example": "local result = pr_lib.vehicle_key.HasKey()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.HasKey(plate)",
    "example": "local result = pr_lib.vehicle_key.HasKey('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.HavePermanentKey(plate)",
    "example": "pr_lib.vehicle_key.HavePermanentKey('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.HaveTemporaryKey(plate)",
    "example": "pr_lib.vehicle_key.HaveTemporaryKey('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.ManageKeysMenu()",
    "example": "pr_lib.vehicle_key.ManageKeysMenu()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKey()",
    "example": "pr_lib.vehicle_key.RemoveKey()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKey(plate)",
    "example": "pr_lib.vehicle_key.RemoveKey('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKeyItem(plate)",
    "example": "pr_lib.vehicle_key.RemoveKeyItem('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKeys()",
    "example": "pr_lib.vehicle_key.RemoveKeys()"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveKeys(vehicle, plate)",
    "example": "pr_lib.vehicle_key.RemoveKeys(entity, 'FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.RemoveTempKeys(plate)",
    "example": "pr_lib.vehicle_key.RemoveTempKeys('FORGE')"
  },
  {
    "module": "vehicle_key",
    "context": "client",
    "signature": "pr_lib.vehicle_key.ToggleLock()",
    "example": "pr_lib.vehicle_key.ToggleLock()"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.AddAccountBalance(player, accountType, amount, reason)",
    "example": "pr_lib.banking.AddAccountBalance('value', 1, 1, 'example')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.AddJobAccountBalance(account, amount, reason)",
    "example": "pr_lib.banking.AddJobAccountBalance(1, 1, 'example')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.AddPlayerAccountBalance(player, accountType, amount, reason)",
    "example": "pr_lib.banking.AddPlayerAccountBalance('value', 1, 1, 'example')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetAccountBalance(player, accountType)",
    "example": "local result = pr_lib.banking.GetAccountBalance('value', 1)"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetJobAccountBalance(account)",
    "example": "local result = pr_lib.banking.GetJobAccountBalance(1)"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetPlayerAccountBalance(player, accountType)",
    "example": "local result = pr_lib.banking.GetPlayerAccountBalance('value', 1)"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.GetResourceName()",
    "example": "local result = pr_lib.banking.GetResourceName()"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.RemoveAccountBalance(player, accountType, amount, reason)",
    "example": "pr_lib.banking.RemoveAccountBalance('value', 1, 1, 'example')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.RemoveJobAccountBalance(account, amount, reason)",
    "example": "pr_lib.banking.RemoveJobAccountBalance(1, 1, 'example')"
  },
  {
    "module": "banking",
    "context": "shared",
    "signature": "pr_lib.banking.RemovePlayerAccountBalance(player, accountType, amount, reason)",
    "example": "pr_lib.banking.RemovePlayerAccountBalance('value', 1, 1, 'example')"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.GetResourceName()",
    "example": "local result = pr_lib.textuiBridge.GetResourceName()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.hide()",
    "example": "pr_lib.textuiBridge.hide()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.Hide()",
    "example": "pr_lib.textuiBridge.Hide()"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.Show(text)",
    "example": "pr_lib.textuiBridge.Show('value')"
  },
  {
    "module": "textui_adapter",
    "context": "client",
    "signature": "pr_lib.textuiBridge.show(text)",
    "example": "pr_lib.textuiBridge.show('value')"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.await(target, name, timeout, ...)",
    "example": "local result = pr_lib.callback.await(source, 'example', 1)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.awaitClient(target, name, timeout, ...)",
    "example": "local result = pr_lib.callback.awaitClient(source, 'example', 1)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.cancel(requestId)",
    "example": "local result = pr_lib.callback.cancel('example')"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.getPending()",
    "example": "local result = pr_lib.callback.getPending()"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.trigger(target, name, cb, ...)",
    "example": "pr_lib.callback.trigger(source, 'example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "callback",
    "context": "server",
    "signature": "pr_lib.callback.triggerClient(target, name, cb, ...)",
    "example": "pr_lib.callback.triggerClient(source, 'example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.await(name, timeout, ...)",
    "example": "local result = pr_lib.callback.await('example', 1)"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.cancel(requestId)",
    "example": "local result = pr_lib.callback.cancel('example')"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.getPending()",
    "example": "local result = pr_lib.callback.getPending()"
  },
  {
    "module": "callback",
    "context": "client",
    "signature": "pr_lib.callback.trigger(name, cb, ...)",
    "example": "pr_lib.callback.trigger('example', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.addAce(principal, aceName, allow)",
    "example": "pr_lib.ace.addAce('example', 'example', true)"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.addPrincipal(child, parent)",
    "example": "pr_lib.ace.addPrincipal('value', 'value')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.canAccess(source, options)",
    "example": "local result = pr_lib.ace.canAccess(source, {})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.ensureAce(principal, aceName)",
    "example": "pr_lib.ace.ensureAce('example', 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.ensureCommandAce(principal, commandName)",
    "example": "pr_lib.ace.ensureCommandAce('example', 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.getIdentifiers(source)",
    "example": "local result = pr_lib.ace.getIdentifiers(source)"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasAce(source, aceName)",
    "example": "local result = pr_lib.ace.hasAce(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasCommandAce(source, commandName)",
    "example": "local result = pr_lib.ace.hasCommandAce(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasFrameworkAccess(source, options)",
    "example": "local result = pr_lib.ace.hasFrameworkAccess(source, {})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.hasIdentifier(source, identifier)",
    "example": "local result = pr_lib.ace.hasIdentifier(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.inWhitelist(source, whitelistName)",
    "example": "pr_lib.ace.inWhitelist(source, {})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.isCommandAllowed(source, commandName)",
    "example": "local result = pr_lib.ace.isCommandAllowed(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.isPlayerAceAllowed(source, aceName)",
    "example": "local result = pr_lib.ace.isPlayerAceAllowed(source, 'example')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.isWhitelisted(source, whitelistName)",
    "example": "local result = pr_lib.ace.isWhitelisted(source, {})"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.parseConvarList(raw)",
    "example": "pr_lib.ace.parseConvarList('value')"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.removeAce(principal, aceName, allow)",
    "example": "pr_lib.ace.removeAce('example', 'example', true)"
  },
  {
    "module": "ace",
    "context": "server",
    "signature": "pr_lib.ace.removePrincipal(child, parent)",
    "example": "pr_lib.ace.removePrincipal('value', 'value')"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand(commandName, properties, callback)",
    "example": "pr_lib.addCommand('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.add(commandName, properties, cb)",
    "example": "pr_lib.addCommand.add('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.addCommand(commandName, properties, cb)",
    "example": "pr_lib.addCommand.addCommand('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addcommand",
    "context": "server",
    "signature": "pr_lib.addCommand.register(commandName, properties, cb)",
    "example": "pr_lib.addCommand.register('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand(commandName, properties, callback)",
    "example": "pr_lib.addCommand('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.add(commandName, properties, cb)",
    "example": "pr_lib.addCommand.add('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.addCommand(commandName, properties, cb)",
    "example": "pr_lib.addCommand.addCommand('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addcommand",
    "context": "client",
    "signature": "pr_lib.addCommand.register(commandName, properties, cb)",
    "example": "pr_lib.addCommand.register('example', {}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "addkeybind",
    "context": "client",
    "signature": "pr_lib.addKeybind(data)",
    "example": "pr_lib.addKeybind({})"
  },
  {
    "module": "addkeybind",
    "context": "client",
    "signature": "pr_lib.addKeybind.get(name)",
    "example": "local result = pr_lib.addKeybind.get('example')"
  },
  {
    "module": "addkeybind",
    "context": "client",
    "signature": "pr_lib.addKeybind.remove(name)",
    "example": "pr_lib.addKeybind.remove('example')"
  },
  {
    "module": "translator",
    "context": "server",
    "signature": "pr_lib.translator.translate(text, targetLang, cb)",
    "example": "pr_lib.translator.translate('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "translator",
    "context": "server",
    "signature": "pr_lib.translator.translateBatch(strings, targetLang, cb)",
    "example": "pr_lib.translator.translateBatch('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "translator",
    "context": "server",
    "signature": "pr_lib.translator.translateText(text, targetLang, cb)",
    "example": "pr_lib.translator.translateText('value', 'value', function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.showTranslatedNotify(title, description, notifyType, targetLang)",
    "example": "pr_lib.translator.showTranslatedNotify('value', 'value', 'example', 'value')"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translate(text, targetLang)",
    "example": "pr_lib.translator.translate('value', 'value')"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translateBatch(strings, targetLang)",
    "example": "pr_lib.translator.translateBatch('value', 'value')"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translateMenu(menuData, targetLang)",
    "example": "pr_lib.translator.translateMenu({}, 'value')"
  },
  {
    "module": "translator",
    "context": "client",
    "signature": "pr_lib.translator.translateText(text, targetLang)",
    "example": "pr_lib.translator.translateText('value', 'value')"
  },
  {
    "module": "github",
    "context": "server",
    "signature": "pr_lib.github.checkDependency(resource, minimumVersion, printMessage)",
    "example": "pr_lib.github.checkDependency(source, 'value', 'example')"
  },
  {
    "module": "github",
    "context": "server",
    "signature": "pr_lib.github.versionCheck(repository)",
    "example": "pr_lib.github.versionCheck('value')"
  },
  {
    "module": "github",
    "context": "client",
    "signature": "pr_lib.github.checkDependency(resource, minimumVersion, printMessage)",
    "example": "pr_lib.github.checkDependency(source, 'value', 'example')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.deepCopy(value, seen)",
    "example": "pr_lib.utils.deepCopy('value', 'value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.dumpTable(value, depth, seen)",
    "example": "pr_lib.utils.dumpTable('value', 'value', 'value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.ensureTable(value)",
    "example": "pr_lib.utils.ensureTable('value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.firstToUpper(value)",
    "example": "pr_lib.utils.firstToUpper('value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.hash(value)",
    "example": "local result = pr_lib.utils.hash('value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.round(value, decimals)",
    "example": "pr_lib.utils.round('value', 'value')"
  },
  {
    "module": "utils",
    "context": "shared",
    "signature": "pr_lib.utils.trim(value)",
    "example": "pr_lib.utils.trim('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.AlmostEqual(a, b, epsilon)",
    "example": "pr_lib.math.AlmostEqual('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.almostEqual(a, b, epsilon)",
    "example": "pr_lib.math.almostEqual('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Clamp(value, minimum, maximum)",
    "example": "pr_lib.math.Clamp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.clamp(value, minimum, maximum)",
    "example": "pr_lib.math.clamp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Deg2Rad(value)",
    "example": "pr_lib.math.Deg2Rad('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.degToRad(value)",
    "example": "pr_lib.math.degToRad('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Distance2D(x1,y1,x2,y2)",
    "example": "pr_lib.math.Distance2D('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.distance2D(x1,y1,x2,y2)",
    "example": "pr_lib.math.distance2D('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Distance3D(x1,y1,z1,x2,y2,z2)",
    "example": "pr_lib.math.Distance3D('value', 'value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.distance3D(x1,y1,z1,x2,y2,z2)",
    "example": "pr_lib.math.distance3D('value', 'value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.hexToRGB(value)",
    "example": "pr_lib.math.hexToRGB('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.HexToRGB(value)",
    "example": "pr_lib.math.HexToRGB('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.hexToRGBA(value)",
    "example": "pr_lib.math.hexToRGBA('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.HexToRGBA(value)",
    "example": "pr_lib.math.HexToRGBA('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.InverseLerp(startValue, finishValue, value)",
    "example": "pr_lib.math.InverseLerp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.inverseLerp(startValue, finishValue, value)",
    "example": "pr_lib.math.inverseLerp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.length2(x, y)",
    "example": "pr_lib.math.length2(1, 1)"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Length2(x, y)",
    "example": "pr_lib.math.Length2(1, 1)"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Length3(x, y, z)",
    "example": "pr_lib.math.Length3(1, 1, 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.length3(x, y, z)",
    "example": "pr_lib.math.length3(1, 1, 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Lerp(startValue, finishValue, duration)",
    "example": "pr_lib.math.Lerp('value', 'value', 1)"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.lerp(startValue, finishValue, factor)",
    "example": "pr_lib.math.lerp('value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.map(value, inMin, inMax, outMin, outMax)",
    "example": "pr_lib.math.map('value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Map(value, inMin, inMax, outMin, outMax)",
    "example": "pr_lib.math.Map('value', 'value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.NormalToRotation(input)",
    "example": "pr_lib.math.NormalToRotation('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.normalToRotation(input)",
    "example": "pr_lib.math.normalToRotation('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.parse(value, minimum, maximum, shouldRound)",
    "example": "pr_lib.math.parse('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ParseNumber(value, minimum, maximum, shouldRound)",
    "example": "pr_lib.math.ParseNumber('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Rad2Deg(value)",
    "example": "pr_lib.math.Rad2Deg('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.radToDeg(value)",
    "example": "pr_lib.math.radToDeg('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.round(value, places)",
    "example": "pr_lib.math.round('value', 'example')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Round(value, places)",
    "example": "pr_lib.math.Round('value', 'example')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.Sign(value)",
    "example": "pr_lib.math.Sign('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.sign(value)",
    "example": "pr_lib.math.sign('value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.toHex(value, upper)",
    "example": "pr_lib.math.toHex('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ToHex(value, upper)",
    "example": "pr_lib.math.ToHex('value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ToScalars(value, minimum, maximum, shouldRound)",
    "example": "pr_lib.math.ToScalars('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.toScalars(value, minimum, maximum, shouldRound)",
    "example": "pr_lib.math.toScalars('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.toVector(value, minimum, maximum, shouldRound)",
    "example": "pr_lib.math.toVector('value', 'value', 'value', 'value')"
  },
  {
    "module": "math",
    "context": "shared",
    "signature": "pr_lib.math.ToVector(value, minimum, maximum, shouldRound)",
    "example": "pr_lib.math.ToVector('value', 'value', 'value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.clone(value, seen)",
    "example": "pr_lib.table.clone('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Contains(source, value)",
    "example": "pr_lib.table.Contains(source, 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.contains(source, value)",
    "example": "pr_lib.table.contains(source, 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.count(source)",
    "example": "pr_lib.table.count(source)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Count(source)",
    "example": "pr_lib.table.Count(source)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.DeepClone(value, seen)",
    "example": "pr_lib.table.DeepClone('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Map(source, callback)",
    "example": "pr_lib.table.Map(source, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.map(source, callback)",
    "example": "pr_lib.table.map(source, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.matches(left, right)",
    "example": "pr_lib.table.matches('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Matches(left, right)",
    "example": "pr_lib.table.Matches('value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Merge(target, source, override)",
    "example": "pr_lib.table.Merge(source, source, 'example')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.merge(target, source, override)",
    "example": "pr_lib.table.merge(source, source, 'example')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.Shuffle(source, copy, random)",
    "example": "pr_lib.table.Shuffle(source, 'value', 'value')"
  },
  {
    "module": "table",
    "context": "shared",
    "signature": "pr_lib.table.shuffle(source, copy, random)",
    "example": "pr_lib.table.shuffle(source, 'value', 'value')"
  },
  {
    "module": "ids",
    "context": "shared",
    "signature": "pr_lib.ids.CreateUniqueId(registry, length, pattern)",
    "example": "local result = pr_lib.ids.CreateUniqueId('value', 'value', 'value')"
  },
  {
    "module": "ids",
    "context": "shared",
    "signature": "pr_lib.ids.createUniqueId(registry, length, pattern)",
    "example": "local result = pr_lib.ids.createUniqueId('value', 'value', 'value')"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.FromCamera(distance, flags, ignoreFlags, ignoreEntity)",
    "example": "pr_lib.raycast.FromCamera(1, 'value', 'value', entity)"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.fromCamera(distance, flags, ignoreFlags, ignoreEntity)",
    "example": "pr_lib.raycast.fromCamera(1, 'value', 'value', entity)"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.fromCoords(origin, destination, flags, ignoreFlags, ignoreEntity)",
    "example": "pr_lib.raycast.fromCoords('value', 'value', 'value', 'value', entity)"
  },
  {
    "module": "fivem.raycast",
    "context": "client",
    "signature": "pr_lib.raycast.FromCoords(origin, destination, flags, ignoreFlags, ignoreEntity)",
    "example": "pr_lib.raycast.FromCoords('value', 'value', 'value', 'value', entity)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getEntity(netId, timeout)",
    "example": "local result = pr_lib.fivem.net.getEntity('example', 1)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getNetId(entity)",
    "example": "local result = pr_lib.fivem.net.getNetId(entity)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getOwner(entityOrNetId, timeout)",
    "example": "local result = pr_lib.fivem.net.getOwner(entity, 1)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.getVehicle(netId, timeout)",
    "example": "local result = pr_lib.fivem.net.getVehicle('example', 1)"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.isValidNetId(netId)",
    "example": "local result = pr_lib.fivem.net.isValidNetId('example')"
  },
  {
    "module": "fivem.net",
    "context": "server",
    "signature": "pr_lib.fivem.net.resolveVehicle(vehicleOrNetId, timeout)",
    "example": "pr_lib.fivem.net.resolveVehicle(entity, 1)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getEntity(netId, timeout)",
    "example": "local result = pr_lib.fivem.net.getEntity('example', 1)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getNetId(entity)",
    "example": "local result = pr_lib.fivem.net.getNetId(entity)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getOwner(entityOrNetId, timeout)",
    "example": "local result = pr_lib.fivem.net.getOwner(entity, 1)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.getVehicle(netId, timeout)",
    "example": "local result = pr_lib.fivem.net.getVehicle('example', 1)"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.isValidNetId(netId)",
    "example": "local result = pr_lib.fivem.net.isValidNetId('example')"
  },
  {
    "module": "fivem.net",
    "context": "client",
    "signature": "pr_lib.fivem.net.resolveVehicle(vehicleOrNetId, timeout)",
    "example": "pr_lib.fivem.net.resolveVehicle(entity, 1)"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.Draw2DText(text, x, y, scale, textColor, font)",
    "example": "pr_lib.ui.Draw2DText('value', 1, 1, 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.draw2DText(text, x, y, scale, textColor, font)",
    "example": "pr_lib.ui.draw2DText('value', 1, 1, 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.Draw3DText(text, coords, scale, textColor, font)",
    "example": "pr_lib.ui.Draw3DText('value', vec3(0.0, 0.0, 0.0), 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.draw3DText(text, coords, scale, textColor, font)",
    "example": "pr_lib.ui.draw3DText('value', vec3(0.0, 0.0, 0.0), 'value', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.DrawRect(x,y,width,height,rectColor)",
    "example": "pr_lib.ui.DrawRect(1, 1, 'example', 'value', 'value')"
  },
  {
    "module": "fivem.ui",
    "context": "client",
    "signature": "pr_lib.ui.drawRect(x,y,width,height,rectColor)",
    "example": "pr_lib.ui.drawRect(1, 1, 'example', 'value', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.clear(target)",
    "example": "pr_lib.dui.clear(source)"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.create(target, options)",
    "example": "local result = pr_lib.dui.create(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createPoly(target, options)",
    "example": "local result = pr_lib.dui.createPoly(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createPoly4(target, options)",
    "example": "local result = pr_lib.dui.createPoly4(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createRenderTarget(target, options)",
    "example": "local result = pr_lib.dui.createRenderTarget(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createReplaceTexture(target, options)",
    "example": "local result = pr_lib.dui.createReplaceTexture(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.createSprite(target, options)",
    "example": "local result = pr_lib.dui.createSprite(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.destroy(target, id)",
    "example": "pr_lib.dui.destroy(source, 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.get(id)",
    "example": "local result = pr_lib.dui.get('example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.list()",
    "example": "local result = pr_lib.dui.list()"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.poly(target, options)",
    "example": "pr_lib.dui.poly(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.poly4(target, options)",
    "example": "pr_lib.dui.poly4(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.remove(target, id)",
    "example": "pr_lib.dui.remove(source, 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.renderTarget(target, options)",
    "example": "pr_lib.dui.renderTarget(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.replaceTexture(target, options)",
    "example": "pr_lib.dui.replaceTexture(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.send(target, id, message)",
    "example": "pr_lib.dui.send(source, 'example', 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.sendMessage(target, id, message)",
    "example": "pr_lib.dui.sendMessage(source, 'example', 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.setBrightness(target, id, brightness)",
    "example": "pr_lib.dui.setBrightness(source, 'example', 1)"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.setOpacity(target, id, opacity)",
    "example": "pr_lib.dui.setOpacity(source, 'example', 1)"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.setUrl(target, id, url)",
    "example": "pr_lib.dui.setUrl(source, 'example', 'https://example.com')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.startSprite(target, id, options)",
    "example": "pr_lib.dui.startSprite(source, 'example', {})"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.stopPoly(target, id)",
    "example": "pr_lib.dui.stopPoly(source, 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.stopRenderTarget(target, id)",
    "example": "pr_lib.dui.stopRenderTarget(source, 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.stopSprite(target, id)",
    "example": "pr_lib.dui.stopSprite(source, 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "server",
    "signature": "pr_lib.dui.sync(target)",
    "example": "pr_lib.dui.sync(source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.create(options, width, height)",
    "example": "local result = pr_lib.dui.create({}, 'example', 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createPoly(target, options)",
    "example": "local result = pr_lib.dui.createPoly(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createRenderTarget(target, options)",
    "example": "local result = pr_lib.dui.createRenderTarget(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createReplacement(target, options)",
    "example": "local result = pr_lib.dui.createReplacement(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createReplaceTexture(target, options)",
    "example": "local result = pr_lib.dui.createReplaceTexture(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.createSprite(options)",
    "example": "local result = pr_lib.dui.createSprite({})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.destroy(target)",
    "example": "pr_lib.dui.destroy(source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.disableMouse(target)",
    "example": "pr_lib.dui.disableMouse(source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.drawSprite(target, options)",
    "example": "pr_lib.dui.drawSprite(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.enableMouse(target, options)",
    "example": "pr_lib.dui.enableMouse(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.focus(target, options)",
    "example": "pr_lib.dui.focus(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.get(id)",
    "example": "local result = pr_lib.dui.get('example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.list()",
    "example": "local result = pr_lib.dui.list()"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.nuiUrl(path, ownerResource)",
    "example": "pr_lib.dui.nuiUrl('value', source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.poly(target, options)",
    "example": "pr_lib.dui.poly(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.removeReplaceTexture(target, options)",
    "example": "pr_lib.dui.removeReplaceTexture(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.renderTarget(target, options)",
    "example": "pr_lib.dui.renderTarget(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.replaceTexture(target, options)",
    "example": "pr_lib.dui.replaceTexture(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.send(target, message)",
    "example": "pr_lib.dui.send(source, 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMessage(target, message)",
    "example": "pr_lib.dui.sendMessage(source, 'example')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseDown(target, button)",
    "example": "pr_lib.dui.sendMouseDown(source, 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseMove(target, x, y)",
    "example": "pr_lib.dui.sendMouseMove(source, 1, 1)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseUp(target, button)",
    "example": "pr_lib.dui.sendMouseUp(source, 'value')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.sendMouseWheel(target, deltaX, deltaY)",
    "example": "pr_lib.dui.sendMouseWheel(source, 1, 1)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.setBrightness(target, brightness)",
    "example": "pr_lib.dui.setBrightness(source, 1)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.setOpacity(target, opacity)",
    "example": "pr_lib.dui.setOpacity(source, 1)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.setUrl(target, url)",
    "example": "pr_lib.dui.setUrl(source, 'https://example.com')"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.startPoly(target, options)",
    "example": "pr_lib.dui.startPoly(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.startSprite(target, options)",
    "example": "pr_lib.dui.startSprite(source, {})"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.stopPoly(target)",
    "example": "pr_lib.dui.stopPoly(source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.stopRenderTarget(target)",
    "example": "pr_lib.dui.stopRenderTarget(source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.stopSprite(target)",
    "example": "pr_lib.dui.stopSprite(source)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.toggleMouse(target, state)",
    "example": "pr_lib.dui.toggleMouse(source, true)"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.unfocus()",
    "example": "pr_lib.dui.unfocus()"
  },
  {
    "module": "fivem.dui",
    "context": "client",
    "signature": "pr_lib.dui.url(path, ownerResource)",
    "example": "pr_lib.dui.url('value', source)"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.apply(vehicle, props, options)",
    "example": "pr_lib.fivem.tuning.apply(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.applyNetId(netId, props, target, options)",
    "example": "pr_lib.fivem.tuning.applyNetId('example', 'value', source, {})"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.restore(vehicle, snapshot, options)",
    "example": "pr_lib.fivem.tuning.restore(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "server",
    "signature": "pr_lib.fivem.tuning.snapshot()",
    "example": "pr_lib.fivem.tuning.snapshot()"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.apply(vehicle, props, options)",
    "example": "pr_lib.fivem.tuning.apply(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.applyNetId(netId, props, options)",
    "example": "pr_lib.fivem.tuning.applyNetId('example', 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.get(vehicle)",
    "example": "local result = pr_lib.fivem.tuning.get(entity)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.repair(vehicle)",
    "example": "pr_lib.fivem.tuning.repair(entity)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.restore(vehicle, snapshot, options)",
    "example": "pr_lib.fivem.tuning.restore(entity, 'value', {})"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setExtra(vehicle, extraId, state)",
    "example": "pr_lib.fivem.tuning.setExtra(entity, 'example', true)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setFuel(vehicle, fuelLevel)",
    "example": "pr_lib.fivem.tuning.setFuel(entity, 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setMod(vehicle, modType, modIndex, customTires)",
    "example": "pr_lib.fivem.tuning.setMod(entity, 'example', 'value', 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setNeon(vehicle, enabled, color)",
    "example": "pr_lib.fivem.tuning.setNeon(entity, true, 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setPlate(vehicle, plate)",
    "example": "pr_lib.fivem.tuning.setPlate(entity, 'FORGE')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.setXenon(vehicle, enabled, color)",
    "example": "pr_lib.fivem.tuning.setXenon(entity, true, 'value')"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.snapshot(vehicle)",
    "example": "pr_lib.fivem.tuning.snapshot(entity)"
  },
  {
    "module": "fivem.tuning",
    "context": "client",
    "signature": "pr_lib.fivem.tuning.toggleMod(vehicle, modType, state)",
    "example": "pr_lib.fivem.tuning.toggleMod(entity, 'example', true)"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.change(text, position, options)",
    "example": "pr_lib.drawtext.change('value', 'value', {})"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.ChangeText(text, position, options)",
    "example": "pr_lib.drawtext.ChangeText('value', 'value', {})"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.draw2d(params)",
    "example": "pr_lib.drawtext.draw2d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.draw3d(params)",
    "example": "pr_lib.drawtext.draw3d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText(text, position, options)",
    "example": "pr_lib.drawtext.DrawText('value', 'value', {})"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText2D(params)",
    "example": "pr_lib.drawtext.DrawText2D('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.drawText2d(params)",
    "example": "pr_lib.drawtext.drawText2d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText2d(params)",
    "example": "pr_lib.drawtext.DrawText2d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText3D(params)",
    "example": "pr_lib.drawtext.DrawText3D('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.drawText3d(params)",
    "example": "pr_lib.drawtext.drawText3d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.DrawText3d(params)",
    "example": "pr_lib.drawtext.DrawText3d('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.hide()",
    "example": "pr_lib.drawtext.hide()"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.HideText()",
    "example": "pr_lib.drawtext.HideText()"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.isOpen()",
    "example": "local result = pr_lib.drawtext.isOpen()"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.keyPressed(delay)",
    "example": "pr_lib.drawtext.keyPressed('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.KeyPressed(delay)",
    "example": "pr_lib.drawtext.KeyPressed('value')"
  },
  {
    "module": "fivem.drawtext",
    "context": "client",
    "signature": "pr_lib.drawtext.show(text, position, options)",
    "example": "pr_lib.drawtext.show('value', 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.set(vehicle, props, options)",
    "example": "pr_lib.vehicleProperties.set(entity, 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.setNetId(netId, props, target, options)",
    "example": "pr_lib.vehicleProperties.setNetId('example', 'value', source, {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.SetNetIdProperties(netId, props, target, options)",
    "example": "pr_lib.vehicleProperties.SetNetIdProperties('example', 'value', source, {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "server",
    "signature": "pr_lib.vehicleProperties.SetVehicleProperties(vehicle, props, options)",
    "example": "pr_lib.vehicleProperties.SetVehicleProperties(entity, 'value', {})"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.get(vehicle)",
    "example": "local result = pr_lib.vehicleProperties.get(entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.GetVehicleProperties(vehicle)",
    "example": "local result = pr_lib.vehicleProperties.GetVehicleProperties(entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.set(vehicle, props, fixVehicle)",
    "example": "pr_lib.vehicleProperties.set(entity, 'value', entity)"
  },
  {
    "module": "fivem.vehicleProperties",
    "context": "client",
    "signature": "pr_lib.vehicleProperties.SetVehicleProperties(vehicle, props, fixVehicle)",
    "example": "pr_lib.vehicleProperties.SetVehicleProperties(entity, 'value', entity)"
  },
  {
    "module": "fivem.streaming",
    "context": "server",
    "signature": "pr_lib.fivem.streaming.hash(model)",
    "example": "local result = pr_lib.fivem.streaming.hash('prop_tool_bench02')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.configureEntity(entity, options)",
    "example": "pr_lib.fivem.streaming.configureEntity(entity, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createEntity(placementType, model, coords, heading, options)",
    "example": "local result = pr_lib.fivem.streaming.createEntity('example', 'prop_tool_bench02', vec3(0.0, 0.0, 0.0), 0.0, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createObject(model, coords, options)",
    "example": "local result = pr_lib.fivem.streaming.createObject('prop_tool_bench02', vec3(0.0, 0.0, 0.0), {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createPed(model, coords, heading, options)",
    "example": "local result = pr_lib.fivem.streaming.createPed('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 0.0, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createProp(model, coords, options)",
    "example": "local result = pr_lib.fivem.streaming.createProp('prop_tool_bench02', vec3(0.0, 0.0, 0.0), {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.createVehicle(model, coords, heading, options)",
    "example": "local result = pr_lib.fivem.streaming.createVehicle('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 0.0, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.delete(entity)",
    "example": "pr_lib.fivem.streaming.delete(entity)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.deleteEntity(entity)",
    "example": "pr_lib.fivem.streaming.deleteEntity(entity)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.findGroundZ(coords, options)",
    "example": "local result = pr_lib.fivem.streaming.findGroundZ(vec3(0.0, 0.0, 0.0), {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.getModelDimensions(model, timeout)",
    "example": "local result = pr_lib.fivem.streaming.getModelDimensions('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.getModelGroundOffset(model, timeout)",
    "example": "local result = pr_lib.fivem.streaming.getModelGroundOffset('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.loadAnimDict(asset, timeout)",
    "example": "local result = pr_lib.fivem.streaming.loadAnimDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.loadModel(model, timeout)",
    "example": "local result = pr_lib.fivem.streaming.loadModel('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.loadWeaponAsset(model, timeout)",
    "example": "local result = pr_lib.fivem.streaming.loadWeaponAsset('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PerformAction(data)",
    "example": "pr_lib.fivem.streaming.PerformAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.performAction(data)",
    "example": "pr_lib.fivem.streaming.performAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.placeEntityProperly(entity, placementType, options)",
    "example": "pr_lib.fivem.streaming.placeEntityProperly(entity, 'example', {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayAction(data)",
    "example": "pr_lib.fivem.streaming.PlayAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playAction(data)",
    "example": "pr_lib.fivem.streaming.playAction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayAnim(data, clip, duration, options)",
    "example": "pr_lib.fivem.streaming.PlayAnim({}, 'value', 1, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playAnim(data, clip, duration, options)",
    "example": "pr_lib.fivem.streaming.playAnim({}, 'value', 1, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayAnimation(data, clip, duration, options)",
    "example": "pr_lib.fivem.streaming.PlayAnimation({}, 'value', 1, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playAnimation(data, clip, duration, options)",
    "example": "pr_lib.fivem.streaming.playAnimation({}, 'value', 1, {})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.PlayInteraction(data)",
    "example": "pr_lib.fivem.streaming.PlayInteraction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.playInteraction(data)",
    "example": "pr_lib.fivem.streaming.playInteraction({})"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseAnimDict(animDict)",
    "example": "pr_lib.fivem.streaming.releaseAnimDict('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseAnimSet(animSet)",
    "example": "pr_lib.fivem.streaming.releaseAnimSet('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseAudioBank(audioBank)",
    "example": "pr_lib.fivem.streaming.releaseAudioBank('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseModel(model)",
    "example": "pr_lib.fivem.streaming.releaseModel('prop_tool_bench02')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releasePtfxAsset(asset)",
    "example": "pr_lib.fivem.streaming.releasePtfxAsset('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseScaleformMovie(handle)",
    "example": "pr_lib.fivem.streaming.releaseScaleformMovie('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseTextureDict(textureDict)",
    "example": "pr_lib.fivem.streaming.releaseTextureDict('value')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.releaseWeaponAsset(model)",
    "example": "pr_lib.fivem.streaming.releaseWeaponAsset('prop_tool_bench02')"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestAnimDict(animDict, timeout)",
    "example": "pr_lib.fivem.streaming.requestAnimDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestAnimDict(asset, timeout)",
    "example": "pr_lib.fivem.streaming.RequestAnimDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestAnimSet(animSet, timeout)",
    "example": "pr_lib.fivem.streaming.requestAnimSet('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestAnimSet(asset, timeout)",
    "example": "pr_lib.fivem.streaming.RequestAnimSet('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestAudioBank(asset, timeout)",
    "example": "pr_lib.fivem.streaming.RequestAudioBank('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestAudioBank(audioBank, timeout)",
    "example": "pr_lib.fivem.streaming.requestAudioBank('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestModel(model, timeout)",
    "example": "pr_lib.fivem.streaming.requestModel('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestModel(model, timeout)",
    "example": "pr_lib.fivem.streaming.RequestModel('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestNamedPtfxAsset(asset, timeout)",
    "example": "pr_lib.fivem.streaming.RequestNamedPtfxAsset('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestPtfxAsset(asset, timeout)",
    "example": "pr_lib.fivem.streaming.requestPtfxAsset('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestScaleformMovie(asset, timeout)",
    "example": "pr_lib.fivem.streaming.RequestScaleformMovie('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestScaleformMovie(name, timeout)",
    "example": "pr_lib.fivem.streaming.requestScaleformMovie('example', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.RequestStreamedTextureDict(asset, timeout)",
    "example": "pr_lib.fivem.streaming.RequestStreamedTextureDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestTextureDict(textureDict, timeout)",
    "example": "pr_lib.fivem.streaming.requestTextureDict('value', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.requestWeaponAsset(model, timeout)",
    "example": "pr_lib.fivem.streaming.requestWeaponAsset('prop_tool_bench02', 1)"
  },
  {
    "module": "fivem.streaming",
    "context": "client",
    "signature": "pr_lib.fivem.streaming.setEntityTransform(entity, coords, heading, options)",
    "example": "pr_lib.fivem.streaming.setEntityTransform(entity, vec3(0.0, 0.0, 0.0), 0.0, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findObjectsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findObjectsInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.freezeByModelInRadius(model, coords, radius, state)",
    "example": "pr_lib.fivem.objects.freezeByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, true)"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getByPoolInRadius(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getByPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestByModel(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestFromPool(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestFromPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestObject(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestObject(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestVehicle(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicle(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getClosestVehicleByModel(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicleByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getNetworkedObjectsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getNetworkedObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getObjectsByPool(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getObjectsByPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getObjectsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getObjectsInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPedsByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPedsByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPedsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPedsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPickupsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPickupsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPool(poolName)",
    "example": "local result = pr_lib.fivem.objects.getPool('example')"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPoolByModelInRadius(poolName, model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPoolByModelInRadius('example', 'prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPoolInRadius(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getPoolName(poolName)",
    "example": "local result = pr_lib.fivem.objects.getPoolName('example')"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getVehiclesByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getVehiclesByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "server",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findObjectsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findObjectsInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.findVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.freezeByModelInRadius(model, coords, radius, state)",
    "example": "pr_lib.fivem.objects.freezeByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, true)"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getByPoolInRadius(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getByPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestByModel(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestFromPool(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestFromPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestObject(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestObject(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestVehicle(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicle(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getClosestVehicleByModel(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getClosestVehicleByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getNetworkedObjectsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getNetworkedObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getObjectsByPool(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getObjectsByPool('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getObjectsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getObjectsInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getObjectsInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPedsByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPedsByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPedsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPedsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPickupsInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPickupsInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPool(poolName)",
    "example": "local result = pr_lib.fivem.objects.getPool('example')"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPoolByModelInRadius(poolName, model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPoolByModelInRadius('example', 'prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPoolInRadius(poolName, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getPoolInRadius('example', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getPoolName(poolName)",
    "example": "local result = pr_lib.fivem.objects.getPoolName('example')"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getVehiclesByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getVehiclesByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.objects",
    "context": "client",
    "signature": "pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(coords, radius, options)",
    "example": "local result = pr_lib.fivem.objects.getVehiclesInRadiusUsingPool(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.clear(vehicleOrNetId)",
    "example": "pr_lib.fivem.vehicleCache.clear(entity)"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.clearAll()",
    "example": "pr_lib.fivem.vehicleCache.clearAll()"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.get(vehicleOrNetId)",
    "example": "local result = pr_lib.fivem.vehicleCache.get(entity)"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getByPlate(plate)",
    "example": "local result = pr_lib.fivem.vehicleCache.getByPlate('FORGE')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getPersistentMeta(vehicle)",
    "example": "local result = pr_lib.fivem.vehicleCache.getPersistentMeta(entity)"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getState(vehicle, name)",
    "example": "local result = pr_lib.fivem.vehicleCache.getState(entity, 'example')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.getStateKey(name)",
    "example": "local result = pr_lib.fivem.vehicleCache.getStateKey('example')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.set(vehicleOrNetId, data)",
    "example": "pr_lib.fivem.vehicleCache.set(entity, {})"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.setPersistentMeta(vehicle, meta)",
    "example": "pr_lib.fivem.vehicleCache.setPersistentMeta(entity, 'value')"
  },
  {
    "module": "fivem.vehicleCache",
    "context": "shared",
    "signature": "pr_lib.fivem.vehicleCache.setState(vehicle, name, value, replicated)",
    "example": "pr_lib.fivem.vehicleCache.setState(entity, 'example', 'value', 'value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.describe(value, colorId)",
    "example": "pr_lib.fivem.blips.describe('value', 'example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getAssetImageUrl(kind, value)",
    "example": "local result = pr_lib.fivem.blips.getAssetImageUrl('value', 'value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getBlipImageUrl(value)",
    "example": "local result = pr_lib.fivem.blips.getBlipImageUrl('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getCheckpointImageUrl(checkpointId)",
    "example": "local result = pr_lib.fivem.blips.getCheckpointImageUrl('example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getColorInfo(colorId)",
    "example": "local result = pr_lib.fivem.blips.getColorInfo('example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getImageUrl(value)",
    "example": "local result = pr_lib.fivem.blips.getImageUrl('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getMarkerImageUrl(markerId)",
    "example": "local result = pr_lib.fivem.blips.getMarkerImageUrl('example')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getPedImageUrl(model)",
    "example": "local result = pr_lib.fivem.blips.getPedImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getSprite(value)",
    "example": "local result = pr_lib.fivem.blips.getSprite('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getSpriteId(value)",
    "example": "local result = pr_lib.fivem.blips.getSpriteId('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getSpriteName(value)",
    "example": "local result = pr_lib.fivem.blips.getSpriteName('value')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getVehicleImageUrl(model)",
    "example": "local result = pr_lib.fivem.blips.getVehicleImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.getWeaponImageUrl(model)",
    "example": "local result = pr_lib.fivem.blips.getWeaponImageUrl('prop_tool_bench02')"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.listColors()",
    "example": "local result = pr_lib.fivem.blips.listColors()"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.listSprites()",
    "example": "local result = pr_lib.fivem.blips.listSprites()"
  },
  {
    "module": "fivem.blips",
    "context": "shared",
    "signature": "pr_lib.fivem.blips.setDocsBaseUrl(url)",
    "example": "pr_lib.fivem.blips.setDocsBaseUrl('https://example.com')"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.createPlacement(placementType, modelName, maxSlots, cb, options)",
    "example": "local result = pr_lib.devtools.createPlacement('example', 'prop_tool_bench02', 1, function(...)\\n    -- handle result\\nend, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.createPolyzone(options, cb)",
    "example": "local result = pr_lib.devtools.createPolyzone({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.createSphereZone(options, cb)",
    "example": "local result = pr_lib.devtools.createSphereZone({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.DrawPolyzone3D(options, cb)",
    "example": "pr_lib.devtools.DrawPolyzone3D({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawPolyzone3D(options, cb)",
    "example": "pr_lib.devtools.drawPolyzone3D({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawSphereZone(options, cb)",
    "example": "pr_lib.devtools.drawSphereZone({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.drawSphereZone3D(options, cb)",
    "example": "pr_lib.devtools.drawSphereZone3D({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.DrawSphereZone3D(options, cb)",
    "example": "pr_lib.devtools.DrawSphereZone3D({}, function(...)\\n    -- handle result\\nend)"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.placeObject(modelName, maxSlots, cb, options)",
    "example": "pr_lib.devtools.placeObject('prop_tool_bench02', 1, function(...)\\n    -- handle result\\nend, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.placePed(modelName, maxSlots, cb, options)",
    "example": "pr_lib.devtools.placePed('prop_tool_bench02', 1, function(...)\\n    -- handle result\\nend, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.placeVehicle(modelName, maxSlots, cb, options)",
    "example": "pr_lib.devtools.placeVehicle('prop_tool_bench02', 1, function(...)\\n    -- handle result\\nend, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.startEntityPlacement(placementType, modelName, maxSlots, cb, options)",
    "example": "pr_lib.devtools.startEntityPlacement('example', 'prop_tool_bench02', 1, function(...)\\n    -- handle result\\nend, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.StartEntityPlacement(placementType, modelName, maxSlots, cb, options)",
    "example": "pr_lib.devtools.StartEntityPlacement('example', 'prop_tool_bench02', 1, function(...)\\n    -- handle result\\nend, {})"
  },
  {
    "module": "fivem.devtools",
    "context": "client",
    "signature": "pr_lib.devtools.stop()",
    "example": "pr_lib.devtools.stop()"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.setVehicleProperties(vehicleOrNetId, properties, options)",
    "example": "pr_lib.fivem.setVehicleProperties(entity, {}, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.setProperties(vehicleOrNetId, properties, options)",
    "example": "pr_lib.fivem.vehicle.setProperties(entity, {}, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getNetId(entity)",
    "example": "local result = pr_lib.fivem.vehicle.getNetId(entity)"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getEntity(netId, timeout)",
    "example": "local result = pr_lib.fivem.vehicle.getEntity('example', 1)"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getVehicle(vehicleOrNetId, timeout)",
    "example": "local result = pr_lib.fivem.vehicle.getVehicle(entity, 1)"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.resolve(vehicleOrNetId, timeout)",
    "example": "pr_lib.fivem.vehicle.resolve(entity, 1)"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.getOwner(entity)",
    "example": "local result = pr_lib.fivem.vehicle.getOwner(entity)"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.findInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicle.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicle.findClosest(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicle.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findClosest(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "server",
    "signature": "pr_lib.fivem.vehicles.findClosestByModel(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.getVehicleProperties(vehicle)",
    "example": "local result = pr_lib.fivem.getVehicleProperties(entity)"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.setVehicleProperties(vehicle, properties)",
    "example": "pr_lib.fivem.setVehicleProperties(entity, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getProperties(vehicle)",
    "example": "local result = pr_lib.fivem.vehicle.getProperties(entity)"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.setProperties(vehicle, properties)",
    "example": "pr_lib.fivem.vehicle.setProperties(entity, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getNetId(entity)",
    "example": "local result = pr_lib.fivem.vehicle.getNetId(entity)"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getEntity(netId, timeout)",
    "example": "local result = pr_lib.fivem.vehicle.getEntity('example', 1)"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getVehicle(vehicleOrNetId, timeout)",
    "example": "local result = pr_lib.fivem.vehicle.getVehicle(entity, 1)"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.resolve(vehicleOrNetId, timeout)",
    "example": "pr_lib.fivem.vehicle.resolve(entity, 1)"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.getOwner(entity)",
    "example": "local result = pr_lib.fivem.vehicle.getOwner(entity)"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.findInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicle.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicle.findClosest(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicle.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findInRadius(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findInRadius(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findByModelInRadius(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findByModelInRadius('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findClosest(coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findClosest(vec3(0.0, 0.0, 0.0), 1, {})"
  },
  {
    "module": "fivem_aliases",
    "context": "client",
    "signature": "pr_lib.fivem.vehicles.findClosestByModel(model, coords, radius, options)",
    "example": "local result = pr_lib.fivem.vehicles.findClosestByModel('prop_tool_bench02', vec3(0.0, 0.0, 0.0), 1, {})"
  }
];
export const PR_BRIDGE_MODULES = [
  "core",
  "locale",
  "cache",
  "debug",
  "events",
  "framework",
  "inventory",
  "notification",
  "menu",
  "target",
  "phone",
  "progressbar",
  "weather",
  "database",
  "fuel",
  "vehicle_key",
  "banking",
  "textui_adapter",
  "callback",
  "ace",
  "addcommand",
  "addkeybind",
  "translator",
  "github",
  "utils",
  "math",
  "table",
  "ids",
  "fivem.raycast",
  "fivem.net",
  "fivem.ui",
  "fivem.dui",
  "fivem.tuning",
  "fivem.drawtext",
  "fivem.vehicleProperties",
  "fivem.streaming",
  "fivem.objects",
  "fivem.vehicleCache",
  "fivem.blips",
  "fivem.devtools",
  "fivem_aliases"
];
export const PR_BRIDGE_API_COUNT = 987;
