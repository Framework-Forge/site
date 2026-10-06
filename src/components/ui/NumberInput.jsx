import React, { useState } from 'react';

export default function NumberInput({
  value,
  defaultValue = 0,
  min,
  max,
  step = 1,
  label,
  placeholder = '0',
  disabled = false,
  onChange,
  className = '',
  ...props
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue);
  const current = isControlled ? value : internal;

  const update = (next) => {
    const clamped = min !== undefined ? Math.max(min, Math.min(max !== undefined ? max : Infinity, next)) : next;
    if (!isControlled) setInternal(clamped);
    onChange && onChange(clamped);
  };

  const handleChange = (e) => {
    const parsed = parseFloat(e.target.value);
    if (!isNaN(parsed)) update(parsed);
    else if (e.target.value === '' || e.target.value === '-') {
      if (!isControlled) setInternal(e.target.value);
    }
  };

  const canDecrement = min === undefined || current > min;
  const canIncrement = max === undefined || current < max;

  return (
    <div className={`number-input-wrapper ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
      {label && (
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--space-text-grey)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          {label}
        </label>
      )}
      <div style={{
        display: 'flex',
        alignItems: 'stretch',
        gap: 0,
        borderRadius: 'var(--space-radius-md)',
        border: '1px solid var(--space-border-color)',
        overflow: 'hidden',
        backgroundColor: 'var(--space-bg-input)',
        transition: 'border-color 0.2s',
      }}
        onFocusCapture={e => e.currentTarget.style.borderColor = 'var(--space-orange-primary)'}
        onBlurCapture={e => e.currentTarget.style.borderColor = 'var(--space-border-color)'}
      >
        {/* Botão — */}
        <button
          type="button"
          onClick={() => update(parseFloat(current) - step)}
          disabled={disabled || !canDecrement}
          style={{
            width: 36,
            border: 'none',
            borderRight: '1px solid var(--space-border-color)',
            background: 'transparent',
            color: canDecrement && !disabled ? 'var(--space-text-white)' : 'var(--space-text-muted)',
            fontSize: 18,
            fontWeight: 300,
            cursor: canDecrement && !disabled ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s',
            userSelect: 'none',
            flexShrink: 0,
          }}
          onMouseEnter={e => { if (!disabled && canDecrement) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
        >−</button>

        {/* Input */}
        <input
          type="number"
          value={current}
          min={min}
          max={max}
          step={step}
          disabled={disabled}
          placeholder={placeholder}
          onChange={handleChange}
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            color: 'var(--space-text-white)',
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            fontWeight: 600,
            textAlign: 'center',
            outline: 'none',
            padding: '8px 4px',
            MozAppearance: 'textfield',
            WebkitAppearance: 'textfield',
          }}
        />

        {/* Botão + */}
        <button
          type="button"
          onClick={() => update(parseFloat(current) + step)}
          disabled={disabled || !canIncrement}
          style={{
            width: 36,
            border: 'none',
            borderLeft: '1px solid var(--space-border-color)',
            background: 'transparent',
            color: canIncrement && !disabled ? 'var(--space-text-white)' : 'var(--space-text-muted)',
            fontSize: 18,
            fontWeight: 300,
            cursor: canIncrement && !disabled ? 'pointer' : 'not-allowed',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            transition: 'background 0.15s',
            userSelect: 'none',
            flexShrink: 0,
          }}
          onMouseEnter={e => { if (!disabled && canIncrement) e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; }}
        >+</button>
      </div>
      {min !== undefined && max !== undefined && (
        <span style={{ fontSize: 10, color: 'var(--space-text-muted)' }}>
          Min: {min} · Max: {max} · Step: {step}
        </span>
      )}
    </div>
  );
}
