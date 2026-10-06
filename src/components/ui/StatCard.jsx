import React from 'react';

export default function StatCard({
  label,
  value,
  icon,
  trend,
  trendDirection = 'up',
  description,
  tone = 'orange',
  style,
  ...props
}) {
  const colors = {
    orange: 'var(--space-orange-primary)',
    green: 'var(--color-success)',
    red: 'var(--color-error)',
    blue: 'var(--color-info)',
    yellow: 'var(--color-warning)',
  };
  const accent = colors[tone] || tone;
  const trendColor = trendDirection === 'down' ? 'var(--color-error)' : trendDirection === 'flat' ? 'var(--space-text-muted)' : 'var(--color-success)';

  return (
    <div
      style={{
        minWidth: 190,
        padding: 16,
        border: '1px solid var(--space-border-color)',
        borderRadius: 8,
        background: 'var(--space-bg-darker)',
        boxShadow: '0 10px 24px rgba(0,0,0,0.22)',
        ...style,
      }}
      {...props}
    >
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', gap: 14 }}>
        <div>
          <div style={{ color: 'var(--space-text-muted)', fontSize: 11, fontWeight: 800, textTransform: 'uppercase', letterSpacing: 1 }}>{label}</div>
          <div style={{ marginTop: 7, color: 'var(--space-text-white)', fontFamily: 'var(--font-heading)', fontSize: 28, fontWeight: 750, lineHeight: 1 }}>{value}</div>
        </div>
        {icon && (
          <div style={{ width: 38, height: 38, borderRadius: 8, display: 'grid', placeItems: 'center', color: accent, background: `${accent}18`, border: `1px solid ${accent}33` }}>
            {icon}
          </div>
        )}
      </div>
      {(trend || description) && (
        <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 14, fontSize: 12 }}>
          {trend && <span style={{ color: trendColor, fontWeight: 800 }}>{trendDirection === 'down' ? '-' : trendDirection === 'flat' ? '' : '+'}{trend}</span>}
          {description && <span style={{ color: 'var(--space-text-grey)' }}>{description}</span>}
        </div>
      )}
    </div>
  );
}
