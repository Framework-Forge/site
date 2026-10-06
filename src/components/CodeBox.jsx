import { useMemo, useState } from 'react';

export default function CodeBox({ code, language = 'html', snippets }) {
  const examples = useMemo(() => {
    if (Array.isArray(snippets) && snippets.length > 0) {
      return snippets.map((item, index) => ({
        label: item.label || `Exemplo ${index + 1}`,
        code: item.code || '',
        language: item.language || language
      }));
    }
    return [{ label: language.toUpperCase(), code: code || '', language }];
  }, [code, language, snippets]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [copied, setCopied] = useState(false);
  const active = examples[Math.min(activeIndex, examples.length - 1)] || examples[0];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(active.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar o codigo: ', err);
    }
  };

  return (
    <div className="code-viewer-container">
      <div className="code-viewer-header">
        <div style={{ display: 'flex', gap: '6px', alignItems: 'center', minWidth: 0, overflowX: 'auto' }}>
          {examples.map((example, index) => (
            <button
              key={`${example.label}-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="code-viewer-tab"
              style={{
                border: '1px solid',
                borderColor: activeIndex === index ? 'rgba(255, 122, 26, 0.35)' : 'transparent',
                background: activeIndex === index ? 'var(--space-orange-subtle)' : 'transparent',
                color: activeIndex === index ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                borderRadius: 'var(--space-radius-sm)',
                padding: '3px 8px',
                fontSize: '10px',
                fontWeight: 800,
                textTransform: 'uppercase',
                cursor: 'pointer',
                whiteSpace: 'nowrap'
              }}
            >
              {example.label}
            </button>
          ))}
        </div>
        <button
          className="btn btn-sm btn-secondary"
          onClick={handleCopy}
          style={{ padding: '4px 10px', fontSize: '11px', flexShrink: 0 }}
        >
          {copied ? 'Copiado!' : 'Copiar'}
        </button>
      </div>
      <pre className="code-viewer-pre">
        <code>{active.code}</code>
      </pre>
    </div>
  );
}