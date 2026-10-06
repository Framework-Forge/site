import React from 'react';

export default function Breadcrumb({
  items = [],           // [{ label, href?, onClick?, icon? }]
  separator = '/',
  maxVisible,           // colapsar se mais de N itens
  className = '',
  ...props
}) {
  const visible = maxVisible && items.length > maxVisible
    ? [items[0], { label: '...', ellipsis: true }, ...items.slice(-(maxVisible - 1))]
    : items;

  return (
    <nav aria-label="Breadcrumb" className={`breadcrumb ${className}`} style={{ ...props.style }}>
      <ol style={{
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        gap: 4,
        listStyle: 'none',
        margin: 0,
        padding: 0,
      }}>
        {visible.map((item, i) => {
          const isLast = i === visible.length - 1;
          const isEllipsis = item.ellipsis;

          return (
            <li key={i} style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
              {i > 0 && (
                <span aria-hidden="true" style={{
                  color: 'var(--space-text-muted)',
                  fontSize: 12,
                  userSelect: 'none',
                  margin: '0 2px',
                }}>
                  {separator}
                </span>
              )}

              {isEllipsis ? (
                <span style={{
                  padding: '2px 6px',
                  borderRadius: 4,
                  fontSize: 12,
                  color: 'var(--space-text-muted)',
                  background: 'var(--space-bg-input)',
                  userSelect: 'none',
                }}>···</span>
              ) : isLast ? (
                // Item atual (não clicável)
                <span aria-current="page" style={{
                  display: 'inline-flex', alignItems: 'center', gap: 5,
                  padding: '3px 8px',
                  borderRadius: 6,
                  fontSize: 12,
                  fontWeight: 600,
                  color: 'var(--space-orange-primary)',
                  background: 'var(--space-orange-subtle)',
                  border: '1px solid var(--space-orange-primary)22',
                  userSelect: 'none',
                }}>
                  {item.icon && <span style={{ fontSize: 11 }}>{item.icon}</span>}
                  {item.label}
                </span>
              ) : item.href ? (
                <a
                  href={item.href}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '3px 8px',
                    borderRadius: 6,
                    fontSize: 12,
                    fontWeight: 500,
                    color: 'var(--space-text-grey)',
                    textDecoration: 'none',
                    transition: 'color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--space-text-white)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--space-text-grey)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {item.icon && <span style={{ fontSize: 11 }}>{item.icon}</span>}
                  {item.label}
                </a>
              ) : (
                <button
                  type="button"
                  onClick={item.onClick}
                  style={{
                    display: 'inline-flex', alignItems: 'center', gap: 5,
                    padding: '3px 8px',
                    borderRadius: 6,
                    border: 'none',
                    background: 'transparent',
                    fontSize: 12,
                    fontWeight: 500,
                    color: 'var(--space-text-grey)',
                    cursor: 'pointer',
                    transition: 'color 0.15s, background 0.15s',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.color = 'var(--space-text-white)'; e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
                  onMouseLeave={e => { e.currentTarget.style.color = 'var(--space-text-grey)'; e.currentTarget.style.background = 'transparent'; }}
                >
                  {item.icon && <span style={{ fontSize: 11 }}>{item.icon}</span>}
                  {item.label}
                </button>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
