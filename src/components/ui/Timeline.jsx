import React from 'react';

export default function Timeline({ items = [], compact = false, style, ...props }) {
  return (
    <div style={{ width: '100%', maxWidth: 520, display: 'flex', flexDirection: 'column', ...style }} {...props}>
      {items.map((item, index) => {
        const color = item.color || (item.status === 'error' ? 'var(--color-error)' : item.status === 'success' ? 'var(--color-success)' : 'var(--space-orange-primary)');
        const last = index === items.length - 1;
        return (
          <div key={item.id ?? index} style={{ display: 'grid', gridTemplateColumns: '28px 1fr', gap: 12 }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <div style={{ width: 12, height: 12, borderRadius: 12, background: color, boxShadow: `0 0 12px ${color}`, marginTop: 4 }} />
              {!last && <div style={{ width: 1, flex: 1, minHeight: compact ? 30 : 48, background: 'var(--space-border-color)', marginTop: 6 }} />}
            </div>
            <div style={{ paddingBottom: last ? 0 : compact ? 14 : 22 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', gap: 12, alignItems: 'baseline' }}>
                <div style={{ color: 'var(--space-text-white)', fontSize: 14, fontWeight: 750 }}>{item.title}</div>
                {item.time && <div style={{ color: 'var(--space-text-muted)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>{item.time}</div>}
              </div>
              {item.description && <div style={{ marginTop: 5, color: 'var(--space-text-grey)', fontSize: 12, lineHeight: 1.5 }}>{item.description}</div>}
            </div>
          </div>
        );
      })}
    </div>
  );
}
