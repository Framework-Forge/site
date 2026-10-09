import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import { npwdLocales, npwdTopics, npwdCopy } from '../src/data/forgeNpwdDocs.js';
import { npwdApi } from '../src/data/forgeNpwdApi.js';
import { npwdNavigation } from '../src/data/forgeNpwdNavigation.js';
const examples = JSON.parse(fs.readFileSync(new URL('../src/data/forgeNpwdExamples.json', import.meta.url), 'utf8'));
const expected = ['en', 'pt-BR', 'es', 'fr'];
assert.deepEqual(npwdLocales, expected);
const translated = (value, label) => {
  assert.deepEqual(Object.keys(value), expected, label);
  for (const language of expected) assert.ok(typeof value[language] === 'string' && value[language].trim(), `${label}: ${language}`);
};
for (const [key, value] of Object.entries(npwdCopy)) translated(value, key);
translated(npwdNavigation, 'navigation');
assert.equal(new Set(npwdTopics.map(topic => topic.id)).size, npwdTopics.length);
for (const topic of npwdTopics) {
  translated(topic.title, topic.id); translated(topic.lead, topic.id);
  for (const section of topic.sections) {
    translated(section.title, `${topic.id}.title`); translated(section.text, `${topic.id}.text`);
    if (section.code) assert.ok(examples[section.code]?.code && examples[section.code]?.file, section.code);
    for (const link of section.links ?? []) {
      assert.match(link.url, /^https:\/\//);
      if (typeof link.label === 'string') assert.ok(link.label.trim());
      else translated(link.label, `${topic.id}.link`);
    }
  }
}
assert.equal(new Set(npwdApi.map(api => `${api.side}:${api.name}`)).size, npwdApi.length);
for (const api of npwdApi) { translated(api.description, api.name); assert.ok(api.signature && api.source); }
if (process.argv[2]) {
  for (const topic of npwdTopics) for (const section of topic.sections) {
    for (const reference of (section.source ?? '').split(';').map(value => value.trim()).filter(Boolean)) {
      assert.ok(fs.existsSync(path.resolve(process.argv[2], reference)), `${topic.id}: missing source ${reference}`);
    }
  }
  for (const api of npwdApi) {
    const file = path.resolve(process.argv[2], api.source);
    assert.ok(fs.existsSync(file), `${api.name}: missing source ${file}`);
    assert.ok(fs.readFileSync(file, 'utf8').includes(api.name), `${api.name}: not found in source`);
  }
  console.log('OK: all section/API source references verified against supplied phone checkout');
}
if (process.argv[3]) {
  const sourceKeys = ['contracts', 'descriptor', 'federation', 'app', 'api', 'server', 'client', 'widget', 'hook', 'clock', 'manifest'];
  for (const key of sourceKeys) {
    const example = examples[key];
    const actual = fs.readFileSync(path.resolve(process.argv[3], example.file), 'utf8').replaceAll('\r\n', '\n').trimEnd();
    assert.equal(example.code, actual, `Outdated published example: ${key}`);
  }
  for (const locale of expected) {
    const doc = fs.readFileSync(path.resolve(process.argv[3], 'docs', `${locale}.md`), 'utf8');
    assert.ok(doc.startsWith('<!-- generated-by: gsd-doc-writer -->'));
    for (const topic of npwdTopics) assert.ok(doc.includes(topic.title[locale]), `${locale}: ${topic.id}`);
    for (const key of Object.keys(examples).filter(key => npwdTopics.some(topic => topic.sections.some(section => section.code === key)))) assert.ok(doc.includes(examples[key].code), `${locale}: ${key}`);
  }
  console.log('OK: published snippets and four downloadable guides match the example source');
}
console.log(`OK: ${npwdTopics.length} topics, ${npwdApi.length} API entries, ${Object.keys(examples).length} code examples, ${expected.length} complete locales`);
