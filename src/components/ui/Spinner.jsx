import React from 'react';

export default function Spinner({
  size = 'md',
  color = 'var(--space-orange-primary)',
  className = '',
  ...props
}) {
  const sizeMap = {
    sm: 18,
    md: 32,
    lg: 48
  };

  const pixelSize = typeof size === 'number' ? size : (sizeMap[size] || sizeMap.md);

  return (
    <div
      className={`spinner-loading ${className}`}
      style={{
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        border: `${Math.max(2, pixelSize * 0.08)}px solid rgba(255, 255, 255, 0.05)`,
        borderTopColor: color,
        borderRadius: '50%',
        animation: 'spinner-spin 0.8s linear infinite',
        display: 'inline-block',
        boxSizing: 'border-box',
        filter: color === 'var(--space-orange-primary)' ? 'drop-shadow(0 0 4px var(--space-orange-glow))' : 'none',
        ...props.style
      }}
      {...props}
    >
      <style>{`
        @keyframes spinner-spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  );
}
