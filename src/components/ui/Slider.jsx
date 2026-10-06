import React from 'react';

export default function Slider({
  label,
  min = 0,
  max = 100,
  step = 1,
  value,
  onChange,
  disabled = false,
  showValue = true,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`} style={{ width: '100%' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
        {label && <span className="form-label">{label}</span>}
        {showValue && (
          <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--space-orange-primary)' }}>
            {value}
          </span>
        )}
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="slider-input"
        style={{ cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1 }}
        {...props}
      />
    </div>
  );
}
