import React from 'react';
import Icon from './Icon';

export default function SearchInput({
  value,
  onChange,
  onFilterClick,
  placeholder = 'Pesquisar...',
  className = '',
  ...props
}) {
  return (
    <div
      className={`search-input-wrapper ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        background: 'var(--space-bg-input)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-md)',
        padding: '0 12px',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'var(--space-transition)',
        ...props.style
      }}
    >
      <div style={{ width: '16px', height: '16px', color: 'var(--space-text-grey)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Icon name="search" />
      </div>
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        style={{
          background: 'none',
          border: 'none',
          color: 'var(--space-text-white)',
          fontSize: '13px',
          fontFamily: 'var(--font-body)',
          padding: '12px 0 12px 10px',
          width: '100%',
          outline: 'none'
        }}
      />
      {onFilterClick && (
        <button
          type="button"
          onClick={onFilterClick}
          style={{
            background: 'none',
            border: 'none',
            color: 'var(--space-text-grey)',
            cursor: 'pointer',
            padding: '4px',
            marginLeft: '6px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            width: '24px',
            height: '24px',
            borderRadius: '4px',
            transition: 'var(--space-transition)'
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = 'var(--space-orange-primary)';
            e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.02)';
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = 'var(--space-text-grey)';
            e.currentTarget.style.backgroundColor = 'transparent';
          }}
        >
          <div style={{ width: '14px', height: '14px' }}>
            <Icon name="settings" />
          </div>
        </button>
      )}
    </div>
  );
}
