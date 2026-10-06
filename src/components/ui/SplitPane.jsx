import React, { useState } from 'react';

export default function SplitPane({
  left,
  right,
  defaultSize = 42,
  min = 20,
  max = 75,
  direction = 'horizontal',
  style,
  ...props
}) {
  const [size, setSize] = useState(defaultSize);
  const isVertical = direction === 'vertical';

  const handlePointerDown = (event) => {
    const container = event.currentTarget.parentElement;
    const rect = container.getBoundingClientRect();
    event.currentTarget.setPointerCapture(event.pointerId);

    const move = (moveEvent) => {
      const raw = isVertical
        ? ((moveEvent.clientY - rect.top) / rect.height) * 100
        : ((moveEvent.clientX - rect.left) / rect.width) * 100;
      setSize(Math.max(min, Math.min(max, raw)));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        width: '100%',
        height: isVertical ? 360 : 280,
        border: '1px solid var(--space-border-color)',
        borderRadius: 8,
        overflow: 'hidden',
        background: 'var(--space-bg-darkest)',
        ...style,
      }}
      {...props}
    >
      <div style={{ flexBasis: `${size}%`, minWidth: 0, minHeight: 0, overflow: 'auto' }}>{left}</div>
      <div
        role="separator"
        aria-orientation={isVertical ? 'horizontal' : 'vertical'}
        tabIndex={0}
        onPointerDown={handlePointerDown}
        style={{
          flex: '0 0 8px',
          cursor: isVertical ? 'row-resize' : 'col-resize',
          background: 'linear-gradient(90deg, transparent, var(--space-border-color), transparent)',
          borderLeft: isVertical ? 'none' : '1px solid var(--space-border-color)',
          borderRight: isVertical ? 'none' : '1px solid var(--space-border-color)',
          borderTop: isVertical ? '1px solid var(--space-border-color)' : 'none',
          borderBottom: isVertical ? '1px solid var(--space-border-color)' : 'none',
        }}
      />
      <div style={{ flex: 1, minWidth: 0, minHeight: 0, overflow: 'auto' }}>{right}</div>
    </div>
  );
}
