import React, { useState } from 'react';

export default function CopyButton({
  text,
  label = 'Copiar',
  className = '',
  ...props
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e) => {
    e.stopPropagation();
    if (!text) return;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Falha ao copiar:', err);
    }
  };

  return (
    <button
      onClick={handleCopy}
      className={`copy-button ${copied ? 'copied' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        background: copied ? 'var(--space-orange-subtle)' : 'rgba(255,255,255,0.02)',
        border: '1px solid',
        borderColor: copied ? 'var(--space-orange-primary)' : 'var(--space-border-color)',
        borderRadius: 'var(--space-radius-md)',
        padding: '6px 12px',
        color: copied ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
        cursor: 'pointer',
        fontSize: '11px',
        fontWeight: '600',
        transition: 'var(--space-transition)',
        outline: 'none',
        boxShadow: copied ? '0 0 8px var(--space-orange-glow-light)' : 'none',
        ...props.style
      }}
      onMouseEnter={(e) => {
        if (!copied) {
          e.currentTarget.style.borderColor = 'var(--space-border-hover)';
          e.currentTarget.style.color = 'var(--space-text-white)';
        }
      }}
      onMouseLeave={(e) => {
        if (!copied) {
          e.currentTarget.style.borderColor = 'var(--space-border-color)';
          e.currentTarget.style.color = 'var(--space-text-grey)';
        }
      }}
      {...props}
    >
      <div style={{ width: '12px', height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {copied ? (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
            <polyline points="20 6 9 17 4 12" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ width: '100%', height: '100%' }}>
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
          </svg>
        )}
      </div>
      <span>{copied ? 'Copiado!' : label}</span>
    </button>
  );
}
