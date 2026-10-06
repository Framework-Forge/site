import React from 'react';

export default function Radio({
  label,
  checked,
  onChange,
  value,
  name,
  disabled = false,
  id,
  className = '',
  ...props
}) {
  const radioId = id || `radio-${name}-${value}`;

  return (
    <label className={`radio-container ${disabled ? 'disabled' : ''} ${className}`} htmlFor={radioId}>
      <input
        type="radio"
        id={radioId}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="radio-input"
        {...props}
      />
      <span className="radio-custom">
        <span className="radio-inner"></span>
      </span>
      {label && <span style={{ fontSize: '14px', color: disabled ? 'var(--space-text-muted)' : 'var(--space-text-white)' }}>{label}</span>}
    </label>
  );
}
