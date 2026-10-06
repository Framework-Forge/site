import React from 'react';

export default function Toggle({
  label,
  checked,
  onChange,
  disabled = false,
  id,
  className = '',
  ...props
}) {
  const toggleId = id || `toggle-${label?.replace(/\s/g, '-').toLowerCase() || Math.random().toString(36).substr(2, 9)}`;

  return (
    <label className={`toggle-container ${disabled ? 'disabled' : ''} ${className}`} htmlFor={toggleId}>
      <input
        type="checkbox"
        id={toggleId}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="toggle-input"
        {...props}
      />
      <span className="toggle-switch">
        <span className="toggle-handle"></span>
      </span>
      {label && <span style={{ fontSize: '14px', color: disabled ? 'var(--space-text-muted)' : 'var(--space-text-white)' }}>{label}</span>}
    </label>
  );
}
