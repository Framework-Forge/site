// Mechanical documentation/snapshot generator. Does not change phone code.
// Usage: node scripts/sync-forge-npwd-example-docs.mjs [example-repository]
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { npwdTopics, npwdCopy, npwdLocales } from '../src/data/forgeNpwdDocs.js';
import { npwdApi } from '../src/data/forgeNpwdApi.js';
const site = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const repository = path.resolve(process.argv[2] ?? path.join(site, '..', 'forge-npwd-appexemple'));
const snapshotsFile = path.join(site, 'src/data/forgeNpwdExamples.json');
const snapshots = JSON.parse(fs.readFileSync(snapshotsFile, 'utf8'));
const files = {
  contracts: 'src/contracts.ts', descriptor: 'forge-npwd.config.ts', federation: 'vite.config.ts',
  app: 'src/App.tsx', api: 'src/api.ts', server: 'server/main.lua', client: 'client/main.lua',
  widget: 'src/widgets/SummaryWidget.tsx', hook: 'src/hooks/useSummary.ts', clock: 'src/widgets/ClockWidget.tsx', manifest: 'fxmanifest.lua',
};
for (const [key, file] of Object.entries(files)) snapshots[key] = {
  file, code: fs.readFileSync(path.join(repository, file), 'utf8').replaceAll('\r\n', '\n').trimEnd(),
};
const marker = '<!-- generated-by: gsd-doc-writer -->';
const titles = { en:'Forge NPWD — Complete Guide', 'pt-BR':'Forge NPWD — Guia completo', es:'Forge NPWD — Guía completa', fr:'Forge NPWD — Guide complet' };
const fence = example => example.file.endsWith('.lua') ? 'lua' : example.file.endsWith('.tsx') ? 'tsx' : example.file.endsWith('.ts') ? 'ts' : example.file.includes('json') ? 'json' : 'text';
const outputs = new Map();
for (const language of npwdLocales) {
  let doc = `${marker}\n# ${titles[language]}\n\n${npwdCopy.lead[language]}\n\n[Forge Site](https://framework-forge.github.io/site/#forge-npwd/overview) · [Example App](https://github.com/Framework-Forge/forge-npwd-appexemple) · [README](../README.md)\n\n`;
  doc += `## ${npwdCopy.guide[language]}\n\n${npwdTopics.map(topic => `- [${topic.title[language]}](#${topic.id})`).join('\n')}\n\n`;
  for (const topic of npwdTopics) {
    doc += `<a id=${topic.id}></a>\n\n## ${topic.title[language]}\n\n${topic.lead[language]}\n\n`;
    for (const section of topic.sections) {
      doc += `### ${section.title[language]}\n\n${section.text[language]}\n\n`;
      if (section.code) {
        const example = snapshots[section.code];
        doc += `**${example.file}**\n\n~~~${fence(example)}\n${example.code}\n~~~\n\n`;
      }
      if (section.source) doc += `${npwdCopy.source[language]}: ${section.source}\n\n`;
      for (const link of section.links ?? []) doc += `[${typeof link.label === 'string' ? link.label : link.label[language]}](${link.url})\n\n`;
    }
    if (topic.id === 'api') for (const side of ['client', 'server']) {
      doc += `### ${npwdCopy[side][language]}\n\n`;
      for (const api of npwdApi.filter(api => api.side === side)) doc += `#### ${api.name}\n\n~~~ts\n${api.signature}\n~~~\n\n${api.description[language]}\n\n${npwdCopy.source[language]}: ${api.source}\n\n`;
    }
  }
  const target = path.join(repository, 'docs', `${language}.md`);
  if (fs.existsSync(target) && !fs.readFileSync(target, 'utf8').startsWith(marker)) throw Error(`Refusing to replace handwritten documentation: ${target}`);
  outputs.set(target, doc);
}
// Validate/prepare everything before replacing any generated artifacts.
fs.mkdirSync(path.join(repository, 'docs'), { recursive: true });
fs.writeFileSync(snapshotsFile, `${JSON.stringify(snapshots, null, 2)}\n`);
for (const [target, content] of outputs) fs.writeFileSync(target, content);
console.log(`Updated ${Object.keys(files).length} source snapshots and ${outputs.size} locale guides from ${repository}`);
