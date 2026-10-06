import React from 'react';

export default function TextUI({
  keyLabel = 'E',
  message = 'Interagir',
  icon,
  isOpen = true,
  className = '',
  ...props
}) {
  if (!isOpen) return null;

  return (
    <div
      className={`fivem-text-ui ${className}`}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
        backgroundColor: 'rgba(10, 10, 12, 0.95)',
        border: '1px solid var(--space-border-color)',
        borderLeft: '4px solid var(--space-orange-primary)',
        padding: '12px 18px',
        borderRadius: 'var(--space-radius-md)',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.5), 0 0 12px var(--space-orange-glow-light)',
        width: 'fit-content',
        maxWidth: '350px',
        pointerEvents: 'none',
        animation: 'slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
      }}
      {...props}
    >
      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(20px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
      
      {keyLabel && (
        <span
          className="fivem-text-ui-key"
          style={{
            backgroundColor: 'var(--space-orange-primary)',
            color: 'var(--space-text-white)',
            fontWeight: '700',
            padding: '4px 8px',
            borderRadius: '4px',
            fontSize: '12px',
            boxShadow: '0 0 8px var(--space-orange-glow)',
            fontFamily: 'var(--font-heading)',
            textTransform: 'uppercase'
          }}
        >
          {keyLabel}
        </span>
      )}
      
      {icon && (
        <div style={{ width: '16px', height: '16px', color: 'var(--space-orange-primary)' }}>
          {icon}
        </div>
      )}

      <span
        className="fivem-text-ui-message"
        style={{
          fontSize: '13px',
          fontWeight: '500',
          color: 'var(--space-text-white)'
        }}
      >
        {message}
      </span>
    </div>
  );
}
