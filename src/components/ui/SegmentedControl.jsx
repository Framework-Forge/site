import React from 'react';

export default function SegmentedControl({
  options = [],
  value,
  onChange,
  className = '',
  ...props
}) {
  return (
    <div
      className={`segmented-control-container ${className}`}
      style={{
        display: 'inline-flex',
        padding: '3px',
        borderRadius: '30px',
        backgroundColor: 'var(--space-bg-input)',
        border: '1px solid var(--space-border-color)',
        position: 'relative',
        ...props.style
      }}
      {...props}
    >
      {options.map((opt) => {
        const isSelected = value === opt.value;
        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange && onChange(opt.value)}
            style={{
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: isSelected ? 'var(--space-orange-primary)' : 'transparent',
              color: isSelected ? 'var(--space-text-white)' : 'var(--space-text-grey)',
              border: 'none',
              fontSize: '12px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
              outline: 'none',
              boxShadow: isSelected ? '0 0 8px var(--space-orange-glow)' : 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px'
            }}
          >
            {opt.icon && <span style={{ width: '12px', height: '12px' }}>{opt.icon}</span>}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
