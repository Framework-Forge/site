import React from 'react';

export default function DatePicker({
  label,
  value,
  onChange,
  error,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`} style={{ width: '100%' }}>
      {label && <label className="form-label">{label}</label>}
      <input
        type="date"
        value={value}
        onChange={onChange}
        disabled={disabled}
        className="input-text"
        style={{
          colorScheme: 'dark', // Faz com que o calendário nativo do Chrome seja exibido em modo escuro
          cursor: disabled ? 'not-allowed' : 'pointer',
          opacity: disabled ? 0.5 : 1
        }}
        {...props}
      />
      {error && <span style={{ fontSize: '11px', color: 'var(--color-error)', marginTop: '4px' }}>{error}</span>}
    </div>
  );
}
