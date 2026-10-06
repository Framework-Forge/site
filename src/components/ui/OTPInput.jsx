import React, { useEffect, useRef, useState } from 'react';

export default function OTPInput({
  length = 6,
  value,
  defaultValue = '',
  onChange,
  onComplete,
  type = 'number', // 'number' | 'text' | 'password'
  label,
  error,
  disabled = false,
  className = '',
  ...props
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue.slice(0, length).split(''));
  const [focused, setFocused] = useState(-1);
  const digits = isControlled ? value.slice(0, length).split('') : internal;
  const inputs = useRef([]);

  const update = (next) => {
    if (!isControlled) setInternal(next);
    const str = next.join('');
    onChange && onChange(str);
    if (str.length === length && !next.includes('')) {
      onComplete && onComplete(str);
    }
  };

  const handleInput = (e, idx) => {
    const char = type === 'number'
      ? e.target.value.replace(/\D/g, '').slice(-1)
      : e.target.value.slice(-1);
    if (!char) return;
    const next = [...digits.map(d => d || '')];
    next[idx] = char;
    update(next);
    if (idx < length - 1) inputs.current[idx + 1]?.focus();
  };

  const handleKeyDown = (e, idx) => {
    if (e.key === 'Backspace') {
      e.preventDefault();
      const next = [...digits.map(d => d || '')];
      if (next[idx]) {
        next[idx] = '';
        update(next);
      } else if (idx > 0) {
        next[idx - 1] = '';
        update(next);
        inputs.current[idx - 1]?.focus();
      }
    } else if (e.key === 'ArrowLeft' && idx > 0) {
      inputs.current[idx - 1]?.focus();
    } else if (e.key === 'ArrowRight' && idx < length - 1) {
      inputs.current[idx + 1]?.focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pasted = e.clipboardData.getData('text').slice(0, length);
    const next = pasted.split('').concat(Array(length).fill('')).slice(0, length);
    update(next);
    const lastFilled = Math.min(pasted.length, length - 1);
    inputs.current[lastFilled]?.focus();
  };

  const isComplete = digits.filter(Boolean).length === length;

  return (
    <div className={`otp-input ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: 10, alignItems: 'center', ...props.style }}>
      {label && (
        <label style={{ fontSize: 13, fontWeight: 600, color: 'var(--space-text-grey)', letterSpacing: '0.5px', textAlign: 'center' }}>
          {label}
        </label>
      )}

      <div style={{ display: 'flex', gap: 8 }}>
        {Array.from({ length }).map((_, i) => {
          const isFocused = focused === i;
          const hasValue = Boolean(digits[i]);
          return (
            <React.Fragment key={i}>
              <input
                ref={el => inputs.current[i] = el}
                type={type === 'password' ? 'password' : 'text'}
                inputMode={type === 'number' ? 'numeric' : 'text'}
                maxLength={1}
                value={digits[i] || ''}
                disabled={disabled}
                onChange={e => handleInput(e, i)}
                onKeyDown={e => handleKeyDown(e, i)}
                onPaste={handlePaste}
                onFocus={() => setFocused(i)}
                onBlur={() => setFocused(-1)}
                style={{
                  width: 44,
                  height: 52,
                  textAlign: 'center',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 22,
                  fontWeight: 700,
                  borderRadius: 'var(--space-radius-md)',
                  border: `2px solid ${error ? '#FF3B4F' : isComplete ? '#37E35C' : isFocused ? 'var(--space-orange-primary)' : hasValue ? 'var(--space-border-hover)' : 'var(--space-border-color)'}`,
                  background: 'var(--space-bg-input)',
                  color: 'var(--space-text-white)',
                  outline: 'none',
                  boxShadow: isFocused ? '0 0 12px var(--space-orange-glow)' : isComplete ? '0 0 10px rgba(55,227,92,0.3)' : 'none',
                  transition: 'all 0.2s',
                  cursor: disabled ? 'not-allowed' : 'text',
                  caretColor: 'var(--space-orange-primary)',
                }}
              />
              {/* Separador no meio */}
              {i === Math.floor(length / 2) - 1 && length > 4 && (
                <span style={{ color: 'var(--space-text-muted)', alignSelf: 'center', fontSize: 20, userSelect: 'none' }}>—</span>
              )}
            </React.Fragment>
          );
        })}
      </div>

      {error && (
        <p style={{ margin: 0, fontSize: 12, color: '#FF3B4F', textAlign: 'center' }}>{error}</p>
      )}
      {isComplete && !error && (
        <p style={{ margin: 0, fontSize: 12, color: '#37E35C', textAlign: 'center' }}>✓ Código completo</p>
      )}
    </div>
  );
}
