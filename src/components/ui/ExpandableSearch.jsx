import React, { useState } from 'react';
import Icon from './Icon';

export default function ExpandableSearch({
  value,
  onChange,
  placeholder = 'Buscar módulo...',
  className = '',
  maxWidth = '300px',
  style,
  ...rest
}) {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div
      className={`expandable-search-container ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--space-bg-input)',
        border: '1px solid',
        borderColor: isFocused ? 'var(--space-orange-primary)' : 'var(--space-border-color)',
        borderRadius: 'var(--space-radius-md)',
        padding: '0 12px',
        width: isFocused ? maxWidth : '180px',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s',
        boxShadow: isFocused ? '0 0 8px var(--space-orange-glow-light)' : 'none',
        boxSizing: 'border-box',
        ...style
      }}
    >
      <div style={{ width: '16px', height: '16px', color: isFocused ? 'var(--space-orange-primary)' : 'var(--space-text-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
        <Icon name="search" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        placeholder={placeholder}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--space-text-white)',
          fontSize: '13px',
          fontFamily: 'var(--font-body)',
          padding: '10px 0 10px 8px',
          width: '100%',
          outline: 'none'
        }}
      {...rest}
      />
    </div>
  );
}
