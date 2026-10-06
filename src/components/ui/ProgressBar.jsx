import React from 'react';

export default function ProgressBar({
  progress = 0,
  size = 'md',
  color = 'var(--space-orange-primary)',
  label,
  showValue = false,
  className = '',
  ...props
}) {
  const finalVal = progress !== undefined ? progress : props.value;
  const numVal = typeof finalVal === 'number' ? finalVal : (parseFloat(finalVal) || 0);
  const clampedProgress = Math.min(Math.max(numVal, 0), 100);

  const heightMap = {
    sm: '6px',
    md: '10px',
    lg: '16px'
  };

  const height = heightMap[size] || heightMap.md;

  return (
    <div className={`progress-wrapper ${className}`} style={{ width: '100%' }} {...props}>
      {(label || showValue) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px', fontSize: '13px' }}>
          {label && <span className="form-label" style={{ margin: 0 }}>{label}</span>}
          {showValue && (
            <span style={{ fontWeight: '600', color: color === 'var(--space-orange-primary)' ? 'var(--space-orange-primary)' : color }}>
              {Math.round(clampedProgress)}%
            </span>
          )}
        </div>
      )}
      <div
        className="progress-bar-container"
        style={{
          height: height,
          backgroundColor: 'var(--space-bg-dark)',
          border: '1px solid var(--space-border-color)',
          borderRadius: '10px',
          overflow: 'hidden',
          width: '100%'
        }}
      >
        <div
          className="progress-bar-fill"
          style={{
            width: `${clampedProgress}%`,
            backgroundColor: color,
            height: '100%',
            boxShadow: color === 'var(--space-orange-primary)' ? '0 0 10px var(--space-orange-glow)' : `0 0 8px ${color}80`,
            transition: 'width 0.4s cubic-bezier(0.1, 0.8, 0.25, 1)'
          }}
        />
      </div>
    </div>
  );
}
