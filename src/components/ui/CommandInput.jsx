import React, { useState } from 'react';

export default function CommandInput({
  onSubmit,
  placeholder = 'Digite um comando (ex: help, status)...',
  className = '',
  ...props
}) {
  const [val, setVal] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!val.trim()) return;
    if (onSubmit) {
      onSubmit(val.trim());
    }
    setVal('');
  };

  return (
    <form
      onSubmit={handleSubmit}
      className={`command-input-form ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--space-bg-input)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-md)',
        padding: '0 14px',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'var(--space-transition)',
        ...props.style
      }}
      onFocusCapture={(e) => {
        e.currentTarget.style.borderColor = 'var(--space-orange-primary)';
        e.currentTarget.style.boxShadow = '0 0 10px var(--space-orange-glow-light)';
      }}
      onBlurCapture={(e) => {
        e.currentTarget.style.borderColor = 'var(--space-border-color)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: '700',
          color: 'var(--space-orange-primary)',
          marginRight: '10px',
          fontSize: '15px',
          userSelect: 'none'
        }}
      >
        &gt;
      </span>
      <input
        type="text"
        value={val}
        onChange={(e) => setVal(e.target.value)}
        placeholder={placeholder}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--space-text-white)',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          padding: '12px 0',
          width: '100%',
          outline: 'none'
        }}
      />
    </form>
  );
}
