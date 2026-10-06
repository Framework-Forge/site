import React from 'react';

export default function ScrollArea({
  children,
  maxHeight = '100%',
  height = 'auto',
  className = '',
  style = {},
  ...props
}) {
  return (
    <div
      className={`scroll-area ${className}`}
      style={{
        overflowY: 'auto',
        overflowX: 'hidden',
        height: typeof height === 'number' ? `${height}px` : height,
        maxHeight: typeof maxHeight === 'number' ? `${maxHeight}px` : maxHeight,
        width: '100%',
        paddingRight: '4px', // Evitar overlap com a barra de rolagem
        boxSizing: 'border-box',
        ...style
      }}
      {...props}
    >
      <style>{`
        .scroll-area::-webkit-scrollbar {
          width: 6px;
        }
        .scroll-area::-webkit-scrollbar-track {
          background: transparent;
        }
        .scroll-area::-webkit-scrollbar-thumb {
          background: var(--space-border-color);
          border-radius: var(--space-radius-sm);
        }
        .scroll-area::-webkit-scrollbar-thumb:hover {
          background: var(--space-orange-primary);
          box-shadow: 0 0 6px var(--space-orange-glow);
        }
      `}</style>
      {children}
    </div>
  );
}
