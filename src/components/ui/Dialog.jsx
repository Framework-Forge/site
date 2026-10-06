import React from 'react';
import Button from './Button';

export default function Dialog({
  isOpen,
  title = 'Aviso do Sistema',
  message,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  onConfirm,
  onCancel,
  severity = 'info', // 'info' | 'warning' | 'error' | 'success'
  className = '',
  ...props
}) {
  if (!isOpen) return null;

  const severityColors = {
    info: 'var(--space-orange-primary)',
    warning: 'var(--color-warning)',
    error: 'var(--color-error)',
    success: 'var(--color-success)'
  };

  const accentColor = severityColors[severity] || severityColors.info;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 5, 6, 0.75)',
        backdropFilter: 'blur(4px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2000,
        padding: '20px',
        animation: 'dialog-fade-in 0.2s ease-out'
      }}
      onClick={onCancel}
    >
      <style>{`
        @keyframes dialog-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes dialog-zoom {
          from { transform: scale(0.95); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
      `}</style>
      <div
        className={`dialog-box ${className}`}
        style={{
          width: '100%',
          maxWidth: '380px',
          backgroundColor: 'var(--space-bg-card)',
          border: `1px solid var(--space-border-color)`,
          borderTop: `4px solid ${accentColor}`,
          borderRadius: 'var(--space-radius-md)',
          boxShadow: '0 15px 40px rgba(0,0,0,0.6), 0 0 15px rgba(255, 122, 26, 0.05)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '14px',
          animation: 'dialog-zoom 0.2s cubic-bezier(0.34, 1.56, 0.64, 1) forwards'
        }}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Header */}
        <h3
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '16px',
            fontWeight: '700',
            color: 'var(--space-text-white)',
            margin: 0
          }}
        >
          {title}
        </h3>

        {/* Message */}
        <p
          style={{
            fontSize: '13px',
            color: 'var(--space-text-grey)',
            lineHeight: '1.5',
            margin: 0
          }}
        >
          {message}
        </p>

        {/* Footer Actions */}
        <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '8px', marginTop: '6px' }}>
          {onCancel && (
            <Button variant="secondary" size="sm" onClick={onCancel} style={{ padding: '6px 12px' }}>
              {cancelLabel}
            </Button>
          )}
          <Button
            variant="primary"
            size="sm"
            onClick={onConfirm}
            style={{
              padding: '6px 12px',
              backgroundColor: accentColor,
              boxShadow: `0 0 8px ${accentColor}40`
            }}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
