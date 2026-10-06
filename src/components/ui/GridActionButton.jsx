import React from 'react';

export default function GridActionButton({
  label,
  icon,
  onClick,
  badge,
  disabled = false,
  className = '',
  style = {},
  type = 'button',
  ...props
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`grid-action-btn ${className}`}
      style={{
        appearance: 'none',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '16px 12px',
        width: '100%',
        minHeight: '90px',
        minWidth: 0,
        overflow: 'hidden',
        backgroundColor: 'var(--space-bg-card)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        color: 'var(--space-text-grey)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--space-transition)',
        position: 'relative',
        outline: 'none',
        opacity: disabled ? 0.4 : 1,
        boxSizing: 'border-box',
        ...style
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = 'var(--space-orange-primary)';
          e.currentTarget.style.color = 'var(--space-text-white)';
          e.currentTarget.style.boxShadow = '0 4px 15px rgba(0,0,0,0.4), 0 0 10px var(--space-orange-glow-light)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.borderColor = 'var(--space-border-color)';
          e.currentTarget.style.color = 'var(--space-text-grey)';
          e.currentTarget.style.boxShadow = 'none';
        }
      }}
      {...props}
    >
      {badge && (
        <span
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            zIndex: 1,
            maxWidth: 'calc(100% - 16px)',
            fontSize: '9px',
            fontWeight: 'bold',
            color: 'var(--space-orange-primary)',
            backgroundColor: 'var(--space-orange-subtle)',
            border: '1px solid rgba(255, 122, 26, 0.2)',
            padding: '1px 5px',
            borderRadius: '10px',
            textTransform: 'uppercase',
            whiteSpace: 'nowrap',
            overflow: 'hidden',
            textOverflow: 'ellipsis'
          }}
        >
          {badge}
        </span>
      )}

      {icon && (
        <div
          style={{
            width: '24px',
            height: '24px',
            marginBottom: '8px',
            color: 'var(--space-orange-primary)',
            filter: 'drop-shadow(0 0 4px var(--space-orange-glow-light))',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0
          }}
        >
          {icon}
        </div>
      )}

      <span
        style={{
          maxWidth: '100%',
          fontFamily: 'var(--font-heading)',
          fontSize: '12px',
          fontWeight: '600',
          textAlign: 'center',
          lineHeight: 1.15,
          letterSpacing: 0,
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap'
        }}
      >
        {label}
      </span>
    </button>
  );
}