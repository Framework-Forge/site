import React from 'react';

export default function ButtonGroup({
  options = [],
  value,
  onChange,
  className = '',
  ...props
}) {
  return (
    <div
      className={`btn-group-container ${className}`}
      style={{
        display: 'inline-flex',
        borderRadius: 'var(--space-radius-md)',
        overflow: 'hidden',
        border: '1px solid var(--space-border-color)',
        backgroundColor: 'var(--space-bg-input)',
        ...props.style
      }}
      {...props}
    >
      {options.map((opt, index) => {
        const isSelected = value === opt.value;
        const isLast = index === options.length - 1;

        return (
          <button
            key={opt.value}
            type="button"
            onClick={() => onChange && onChange(opt.value)}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              padding: '10px 16px',
              background: isSelected ? 'var(--space-orange-primary)' : 'transparent',
              color: isSelected ? 'var(--space-text-white)' : 'var(--space-text-grey)',
              border: 'none',
              borderRight: isLast ? 'none' : '1px solid var(--space-border-color)',
              fontFamily: 'var(--font-body)',
              fontSize: '13px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'var(--space-transition)',
              outline: 'none',
              boxShadow: isSelected ? '0 0 8px var(--space-orange-glow)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (!isSelected) {
                e.currentTarget.style.color = 'var(--space-text-white)';
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
              }
            }}
            onMouseLeave={(e) => {
              if (!isSelected) {
                e.currentTarget.style.color = 'var(--space-text-grey)';
                e.currentTarget.style.backgroundColor = 'transparent';
              }
            }}
          >
            {opt.icon && (
              <span style={{ width: '14px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {opt.icon}
              </span>
            )}
            <span>{opt.label}</span>
          </button>
        );
      })}
    </div>
  );
}
