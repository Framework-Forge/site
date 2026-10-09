import { useEffect, useMemo, useState } from 'react';
import { useI18n } from '../i18n';
import { npwdCopy, npwdTopics } from '../data/forgeNpwdDocs';
import { npwdApi } from '../data/forgeNpwdApi';
import examples from '../data/forgeNpwdExamples.json';
import '../forge-npwd.css';

const readTopic = () => {
  const id = window.location.hash.replace('#forge-npwd/', '');
  return npwdTopics.some(topic => topic.id === id) ? id : 'overview';
};

function CodeBlock({ example, copy }) {
  const [status, setStatus] = useState('copy');
  useEffect(() => { setStatus('copy'); }, [example]);
  useEffect(() => {
    if (status === 'copy') return undefined;
    const timer = window.setTimeout(() => setStatus('copy'), 2200);
    return () => window.clearTimeout(timer);
  }, [status]);
  const copyCode = async () => {
    try { await navigator.clipboard.writeText(example.code); setStatus('copied'); }
    catch { setStatus('copyError'); }
  };
  return <div className="npwd-code">
    <div className="npwd-code-header"><span>{example.file}</span><button type="button" onClick={copyCode}>{copy(status)}</button></div>
    <pre tabIndex={0}><code>{example.code}</code></pre>
  </div>;
}

export default function ForgeNpwdDocs() {
  const { locale } = useI18n();
  const [topicId, setTopicId] = useState(readTopic);
  const [query, setQuery] = useState('');
  const copy = key => npwdCopy[key][locale];
  useEffect(() => {
    const update = () => {
      setTopicId(readTopic());
      document.querySelector('.docs-content')?.scrollTo({ top: 0, behavior: 'auto' });
    };
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);
  const needle = query.trim().toLocaleLowerCase(locale);
  const filteredTopics = useMemo(() => npwdTopics.filter(topic =>
    [topic.title[locale], topic.lead[locale], ...topic.sections.flatMap(section => [section.title[locale], section.text[locale]])].join(' ').toLocaleLowerCase(locale).includes(needle)
    || topic.id === 'api' && npwdApi.some(api => `${api.name} ${api.description[locale]}`.toLocaleLowerCase(locale).includes(needle)),
  ), [locale, needle]);
  const index = npwdTopics.findIndex(topic => topic.id === topicId);
  const topic = npwdTopics[index];
  const apiEntries = npwdApi.filter(api => `${api.name} ${api.signature} ${api.description[locale]}`.toLocaleLowerCase(locale).includes(needle));
  const navigate = id => { window.location.hash = `forge-npwd/${id}`; setTopicId(id); };
  return <div className="npwd-docs" lang={locale}>
    <header className="npwd-hero">
      <div className="docs-eyebrow"><span className="docs-eyebrow-dot"/>FORGE PROJECT · OPEN SOURCE</div>
      <h1>Forge <span>NPWD</span></h1><p>{copy('lead')}</p>
      <div className="npwd-links">
        <a className="docs-primary-button" href="https://github.com/Framework-Forge/forge-npwd-appexemple" target="_blank" rel="noreferrer">{copy('example')} ↗</a>
        <a className="docs-secondary-button" href="https://projecterror.dev/docs/" target="_blank" rel="noreferrer">{copy('original')} ↗</a>
      </div>
    </header>
    <div className="npwd-guide-layout">
      <nav className="npwd-toc" aria-label={copy('guide')}>
        <label className="npwd-search"><span>{copy('search')}</span><input type="search" value={query} onChange={event => setQuery(event.target.value)} placeholder={copy('search')}/></label>
        {filteredTopics.length === 0 && <p role="status">{copy('noResults')}</p>}
        {filteredTopics.map(item => <a key={item.id} href={`#forge-npwd/${item.id}`} aria-current={topicId === item.id ? 'page' : undefined}>{item.title[locale]}</a>)}
      </nav>
      <article className="npwd-article">
        <div className="npwd-topic-heading"><span>{String(index + 1).padStart(2, '0')} / {npwdTopics.length}</span><h2>{topic.title[locale]}</h2><p>{topic.lead[locale]}</p></div>
        {topic.sections.map((section, sectionIndex) => <section className="npwd-section" key={`${topicId}-${sectionIndex}`}>
          <h3>{section.title[locale]}</h3><p>{section.text[locale]}</p>
          {section.code && <CodeBlock example={examples[section.code]} copy={copy}/>}
          {section.links && <div className="npwd-links">{section.links.map(link => <a key={link.url} href={link.url} target="_blank" rel="noreferrer">{typeof link.label === 'string' ? link.label : link.label[locale]} ↗</a>)}</div>}
          {section.source && <p className="npwd-source"><span>{copy('source')}:</span> <code>{section.source}</code></p>}
        </section>)}
        {topicId === 'api' && ['client', 'server'].map(side => <section className="npwd-section" key={side}>
          <h3>{copy(side)}</h3><div className="npwd-api-list">{apiEntries.filter(api => api.side === side).map(api => <details key={api.name} className="npwd-api">
            <summary><code>{api.name}</code><span>↧</span></summary>
            <div><p className="npwd-api-signature"><span>{copy('signature')}</span><code>{api.signature}</code></p><p>{api.description[locale]}</p><p className="npwd-source">{copy('source')}: <code>{api.source}</code></p></div>
          </details>)}</div>
        </section>)}
        <footer className="npwd-pager">
          {index > 0 && <button type="button" onClick={() => navigate(npwdTopics[index - 1].id)}><small>← {copy('previous')}</small>{npwdTopics[index - 1].title[locale]}</button>}
          {index < npwdTopics.length - 1 && <button type="button" onClick={() => navigate(npwdTopics[index + 1].id)}><small>{copy('next')} →</small>{npwdTopics[index + 1].title[locale]}</button>}
        </footer>
      </article>
    </div>
  </div>;
}
