import React from 'react';

function polar(cx, cy, radius, angle) {
  const rad = (angle - 90) * Math.PI / 180;
  return { x: cx + radius * Math.cos(rad), y: cy + radius * Math.sin(rad) };
}

function arcPath(cx, cy, radius, startAngle, endAngle) {
  const start = polar(cx, cy, radius, endAngle);
  const end = polar(cx, cy, radius, startAngle);
  const large = endAngle - startAngle <= 180 ? 0 : 1;
  return `M ${cx} ${cy} L ${start.x} ${start.y} A ${radius} ${radius} 0 ${large} 0 ${end.x} ${end.y} Z`;
}

export default function PieChart({ data = [], size = 220, donut = true, showLegend = true, style, ...props }) {
  const total = data.reduce((sum, item) => sum + (Number(item.value) || 0), 0) || 1;
  const palette = ['#FF7A1A', '#3B82F6', '#10B981', '#F59E0B', '#EF4444', '#8B5CF6'];
  let cursor = 0;

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 18, flexWrap: 'wrap', ...style }} {...props}>
      <svg width={size} height={size} viewBox="0 0 100 100" role="img" aria-label="Pie chart">
        {data.map((item, index) => {
          const value = Number(item.value) || 0;
          const angle = value / total * 360;
          const path = arcPath(50, 50, 44, cursor, cursor + angle);
          cursor += angle;
          return <path key={item.label ?? index} d={path} fill={item.color || palette[index % palette.length]} stroke="var(--space-bg-darkest)" strokeWidth="1.5" />;
        })}
        {donut && <circle cx="50" cy="50" r="25" fill="var(--space-bg-darker)" stroke="var(--space-border-color)" strokeWidth="1" />}
        {donut && <text x="50" y="49" textAnchor="middle" fill="var(--space-text-white)" fontSize="9" fontWeight="700">{total}</text>}
        {donut && <text x="50" y="58" textAnchor="middle" fill="var(--space-text-muted)" fontSize="5">total</text>}
      </svg>
      {showLegend && (
        <div style={{ display: 'grid', gap: 8, minWidth: 130 }}>
          {data.map((item, index) => (
            <div key={item.label ?? index} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 10, color: 'var(--space-text-grey)', fontSize: 12 }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                <span style={{ width: 9, height: 9, borderRadius: 3, background: item.color || palette[index % palette.length] }} />
                {item.label}
              </span>
              <strong style={{ color: 'var(--space-text-white)' }}>{item.value}</strong>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
