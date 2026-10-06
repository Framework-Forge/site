import React, { useState, useRef } from 'react';
import Icon from './Icon';

export default function CompactSearch({
  value,
  onChange,
  placeholder = 'Buscar...',
  className = '',
  style,
  ...rest
}) {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  const handleExpand = () => {
    setIsExpanded(true);
    setTimeout(() => {
      if (inputRef.current) inputRef.current.focus();
    }, 100);
  };

  const handleBlur = () => {
    if (!value) setIsExpanded(false);
  };

  return (
    <div
      className={`compact-search-wrapper ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        background: 'var(--space-bg-input)',
        border: '1px solid',
        borderColor: isExpanded ? 'var(--space-orange-primary)' : 'var(--space-border-color)',
        borderRadius: '20px',
        padding: '6px 12px',
        width: isExpanded ? '200px' : '36px',
        height: '36px',
        boxSizing: 'border-box',
        overflow: 'hidden',
        cursor: isExpanded ? 'default' : 'pointer',
        transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.25s',
        boxShadow: isExpanded ? '0 0 8px var(--space-orange-glow-light)' : 'none',
        ...style
      }}
      onClick={!isExpanded ? handleExpand : undefined}
    >
      <div
        style={{
          width: '16px',
          height: '16px',
          color: isExpanded ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexShrink: 0
        }}
      >
        <Icon name="search" />
      </div>
      <input
        ref={inputRef}
        type="text"
        value={value}
        onChange={onChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--space-text-white)',
          fontFamily: 'var(--font-body)',
          fontSize: '12px',
          outline: 'none',
          marginLeft: '8px',
          width: '100%',
          opacity: isExpanded ? 1 : 0,
          transition: 'opacity 0.2s',
          pointerEvents: isExpanded ? 'auto' : 'none'
        }}
      {...rest}
      />
    </div>
  );
}
