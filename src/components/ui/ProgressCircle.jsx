import React from 'react';

export default function ProgressCircle({
  progress = 0,
  size = 120,
  strokeWidth = 8,
  label,
  sublabel,
  showValue = true,
  color = 'var(--space-orange-primary)',
  className = '',
  style = {},
  ...props
}) {
  const finalVal = progress !== undefined ? progress : props.value;
  const numVal = typeof finalVal === 'number' ? finalVal : (parseFloat(finalVal) || 0);
  const clampedProgress = Math.min(Math.max(numVal, 0), 100);
  const center = size / 2;
  const radius = center - strokeWidth;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (clampedProgress / 100) * circumference;
  const hasCenterContent = showValue || label || sublabel;

  return (
    <div
      className={`progress-circle-container ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: size,
        height: size,
        ...style
      }}
      {...props}
    >
      <svg className="progress-gauge-svg" width={size} height={size} style={{ transform: 'rotate(-90deg)' }}>
        <circle
          className="progress-gauge-bg"
          cx={center}
          cy={center}
          r={radius}
          stroke="rgba(255,255,255,0.04)"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          className="progress-gauge-fill"
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{
            transition: 'stroke-dashoffset 0.4s cubic-bezier(0.1, 0.8, 0.25, 1)',
            filter: `drop-shadow(0 0 2.5px ${color}90)`
          }}
        />
      </svg>

      {hasCenterContent && (
        <div
          style={{
            position: 'absolute',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            pointerEvents: 'none'
          }}
        >
          {showValue && (
            <span
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: `${size * 0.18}px`,
                fontWeight: '700',
                color: 'var(--space-text-white)'
              }}
            >
              {Math.round(clampedProgress)}%
            </span>
          )}
          {label && (
            <span
              style={{
                fontSize: `${size * 0.09}px`,
                fontWeight: '600',
                color: 'var(--space-text-grey)',
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                marginTop: showValue ? '2px' : 0
              }}
            >
              {label}
            </span>
          )}
          {sublabel && (
            <span
              style={{
                fontSize: `${size * 0.07}px`,
                color: 'var(--space-text-muted)',
                marginTop: '1px'
              }}
            >
              {sublabel}
            </span>
          )}
        </div>
      )}
    </div>
  );
}