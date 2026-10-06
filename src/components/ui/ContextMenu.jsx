import React from 'react';

export function ContextOption({
  label,
  description,
  icon,
  keybind,
  onClick,
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <div
      className={`fivem-context-option ${disabled ? 'disabled' : ''} ${className}`}
      onClick={disabled ? null : onClick}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 12px',
        borderRadius: 'var(--space-radius-md)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--space-transition)',
        opacity: disabled ? 0.4 : 1,
        border: '1px solid transparent',
        backgroundColor: 'rgba(255, 255, 255, 0.01)',
        marginBottom: '4px'
      }}
      onMouseEnter={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = 'rgba(255, 122, 26, 0.08)';
          e.currentTarget.style.borderColor = 'rgba(255, 122, 26, 0.15)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled) {
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.01)';
          e.currentTarget.style.borderColor = 'transparent';
        }
      }}
      {...props}
    >
      <div className="fivem-context-option-left" style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {icon && (
          <div className="fivem-context-icon" style={{ width: '16px', height: '16px', color: 'var(--space-orange-primary)', display: 'flex', alignItems: 'center', justify: 'center' }}>
            {icon}
          </div>
        )}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span className="fivem-context-label" style={{ fontSize: '13px', fontWeight: '500', color: 'var(--space-text-white)' }}>
            {label}
          </span>
          {description && (
            <span style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>
              {description}
            </span>
          )}
        </div>
      </div>
      
      {keybind && (
        <span
          className="fivem-context-keybind"
          style={{
            fontSize: '10px',
            color: 'var(--space-text-muted)',
            backgroundColor: 'var(--space-bg-darkest)',
            padding: '2px 6px',
            borderRadius: '4px',
            border: '1px solid var(--space-border-color)'
          }}
        >
          {keybind}
        </span>
      )}
    </div>
  );
}

export default function ContextMenu({
  title,
  options = [],
  isOpen = true,
  onClose,
  children,
  className = '',
  ...props
}) {
  if (!isOpen) return null;

  return (
    <div
      className={`fivem-context ${className}`}
      style={{
        backgroundColor: 'var(--space-bg-darker)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        padding: '12px',
        width: '280px',
        boxShadow: '0 10px 40px rgba(0,0,0,0.6), 0 0 15px rgba(255, 122, 26, 0.05)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'slideInLeft 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
        position: 'relative'
      }}
      {...props}
    >
      <style>{`
        @keyframes slideInLeft {
          from { transform: translateX(-20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>

      {/* Close button if onClose is provided */}
      {onClose && (
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '8px',
            right: '8px',
            background: 'none',
            border: 'none',
            color: 'var(--space-text-muted)',
            cursor: 'pointer',
            fontSize: '14px',
            outline: 'none'
          }}
          onMouseEnter={(e) => e.currentTarget.style.color = 'var(--space-orange-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.color = 'var(--space-text-muted)'}
        >
          &times;
        </button>
      )}

      {title && (
        <div
          className="fivem-context-title"
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '14px',
            fontWeight: '600',
            color: 'var(--space-text-grey)',
            padding: '4px 8px 8px 4px',
            borderBottom: '1px solid var(--space-border-color)',
            marginBottom: '8px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          {title}
        </div>
      )}

      <div style={{ display: 'flex', flexDirection: 'column', maxHeight: '350px', overflowY: 'auto' }}>
        {options.length > 0
          ? options.map((opt, idx) => (
              <ContextOption
                key={opt.id || idx}
                label={opt.label}
                description={opt.description}
                icon={opt.icon}
                keybind={opt.keybind}
                onClick={opt.onClick}
                disabled={opt.disabled}
              />
            ))
          : children}
      </div>
    </div>
  );
}
