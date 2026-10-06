import React from 'react';

export default function BarChart({ data = [], height = 220, horizontal = false, color = 'var(--space-orange-primary)', style, ...props }) {
  const max = Math.max(...data.map((item) => Number(item.value) || 0), 1);

  if (horizontal) {
    return (
      <div style={{ width: '100%', maxWidth: 520, display: 'grid', gap: 10, ...style }} {...props}>
        {data.map((item) => {
          const pct = (Number(item.value) || 0) / max * 100;
          return (
            <div key={item.label} style={{ display: 'grid', gridTemplateColumns: '74px 1fr 38px', gap: 10, alignItems: 'center', fontSize: 12 }}>
              <span style={{ color: 'var(--space-text-grey)' }}>{item.label}</span>
              <div style={{ height: 12, borderRadius: 8, background: 'var(--space-bg-input)', border: '1px solid var(--space-border-color)', overflow: 'hidden' }}>
                <div style={{ width: `${pct}%`, height: '100%', borderRadius: 8, background: item.color || color, boxShadow: `0 0 12px ${item.color || color}` }} />
              </div>
              <strong style={{ color: 'var(--space-text-white)', textAlign: 'right' }}>{item.value}</strong>
            </div>
          );
        })}
      </div>
    );
  }

  return (
    <div style={{ width: '100%', maxWidth: 520, height, display: 'flex', alignItems: 'end', gap: 10, padding: '14px 10px 0', borderBottom: '1px solid var(--space-border-color)', ...style }} {...props}>
      {data.map((item) => {
        const pct = (Number(item.value) || 0) / max * 100;
        return (
          <div key={item.label} style={{ flex: 1, minWidth: 34, height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'end', alignItems: 'center', gap: 7 }}>
            <span style={{ color: 'var(--space-text-white)', fontFamily: 'var(--font-mono)', fontSize: 11 }}>{item.value}</span>
            <div style={{ width: '100%', height: `${pct}%`, minHeight: 8, borderRadius: '6px 6px 0 0', background: item.color || color, boxShadow: `0 0 14px ${item.color || color}` }} />
            <span style={{ color: 'var(--space-text-muted)', fontSize: 10 }}>{item.label}</span>
          </div>
        );
      })}
    </div>
  );
}
