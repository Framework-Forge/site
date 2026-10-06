import React from 'react';

export default function Sparkline({
  data = [],
  width = 180,
  height = 52,
  color = 'var(--space-orange-primary)',
  fill = true,
  showDots = false,
  style,
  ...props
}) {
  const values = data.map(Number);
  const min = Math.min(...values, 0);
  const max = Math.max(...values, 1);
  const range = max - min || 1;
  const points = values.map((value, index) => {
    const x = values.length === 1 ? width / 2 : (index / (values.length - 1)) * width;
    const y = height - ((value - min) / range) * (height - 8) - 4;
    return [x, y];
  });
  const line = points.map(([x, y], index) => `${index === 0 ? 'M' : 'L'} ${x} ${y}`).join(' ');
  const area = `${line} L ${width} ${height} L 0 ${height} Z`;

  return (
    <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} style={{ overflow: 'visible', ...style }} role="img" aria-label="Sparkline" {...props}>
      <defs>
        <linearGradient id="sparkline-fill" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor={color} stopOpacity="0.28" />
          <stop offset="100%" stopColor={color} stopOpacity="0" />
        </linearGradient>
      </defs>
      {fill && <path d={area} fill="url(#sparkline-fill)" />}
      <path d={line} fill="none" stroke={color} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ filter: `drop-shadow(0 0 6px ${color})` }} />
      {showDots && points.map(([x, y], index) => <circle key={index} cx={x} cy={y} r="2.5" fill={color} stroke="var(--space-bg-darkest)" strokeWidth="1" />)}
    </svg>
  );
}
