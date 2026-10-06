import React from 'react';

export default function HeatMap({
  data = [],
  rows,
  columns,
  cellSize = 22,
  gap = 5,
  colors = ['rgba(255,255,255,0.05)', 'rgba(59,130,246,0.45)', 'rgba(255,122,26,0.75)', 'rgba(239,68,68,0.9)'],
  style,
  ...props
}) {
  const max = Math.max(...data.map((item) => Number(item.value) || 0), 1);
  const rowLabels = rows || [...new Set(data.map((item) => item.row))];
  const columnLabels = columns || [...new Set(data.map((item) => item.column))];
  const lookup = new Map(data.map((item) => [`${item.row}:${item.column}`, Number(item.value) || 0]));

  const colorFor = (value) => {
    const pct = value / max;
    if (pct === 0) return colors[0];
    if (pct < 0.35) return colors[1];
    if (pct < 0.7) return colors[2];
    return colors[3];
  };

  return (
    <div style={{ display: 'inline-grid', gridTemplateColumns: `72px repeat(${columnLabels.length}, ${cellSize}px)`, gap, alignItems: 'center', color: 'var(--space-text-muted)', fontSize: 10, ...style }} {...props}>
      <div />
      {columnLabels.map((column) => <div key={column} style={{ textAlign: 'center' }}>{column}</div>)}
      {rowLabels.map((row) => (
        <React.Fragment key={row}>
          <div style={{ textAlign: 'right', paddingRight: 4, color: 'var(--space-text-grey)' }}>{row}</div>
          {columnLabels.map((column) => {
            const value = lookup.get(`${row}:${column}`) || 0;
            return (
              <div
                key={`${row}-${column}`}
                title={`${row} ${column}: ${value}`}
                style={{
                  width: cellSize,
                  height: cellSize,
                  borderRadius: 5,
                  background: colorFor(value),
                  border: '1px solid rgba(255,255,255,0.06)',
                  boxShadow: value ? `0 0 10px ${colorFor(value)}` : 'none',
                }}
              />
            );
          })}
        </React.Fragment>
      ))}
    </div>
  );
}
