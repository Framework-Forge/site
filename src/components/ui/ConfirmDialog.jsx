import React, { useEffect, useRef } from 'react';

export default function ConfirmDialog({
  open = false,
  title = 'Tem certeza?',
  message,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  variant = 'danger', // 'danger' | 'warning' | 'info'
  onConfirm,
  onCancel,
  loading = false,
  className = '',
  ...props
}) {
  const dialogRef = useRef(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      setTimeout(() => dialogRef.current?.querySelector('button')?.focus(), 50);
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  useEffect(() => {
    const handler = (e) => { if (e.key === 'Escape' && open) onCancel && onCancel(); };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [open, onCancel]);

  if (!open) return null;

  const variantStyles = {
    danger:  { color: '#FF3B4F', bg: 'rgba(255,59,79,0.12)', border: 'rgba(255,59,79,0.3)', icon: '⚠' },
    warning: { color: '#FF9500', bg: 'rgba(255,149,0,0.12)', border: 'rgba(255,149,0,0.3)', icon: '⚠' },
    info:    { color: '#45E8FF', bg: 'rgba(69,232,255,0.12)', border: 'rgba(69,232,255,0.3)', icon: 'ℹ' },
  };
  const v = variantStyles[variant] || variantStyles.danger;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="confirm-title"
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 16,
        animation: 'cd-backdrop 0.2s ease',
      }}
      onClick={(e) => { if (e.target === e.currentTarget) onCancel && onCancel(); }}
    >
      {/* Backdrop */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'rgba(0,0,0,0.75)',
        backdropFilter: 'blur(4px)',
      }} />

      {/* Dialog */}
      <div
        ref={dialogRef}
        className={className}
        style={{
          position: 'relative',
          width: '100%',
          maxWidth: 400,
          borderRadius: 'var(--space-radius-xl)',
          background: 'rgba(14,16,22,0.98)',
          border: `1px solid ${v.border}`,
          boxShadow: `0 24px 64px rgba(0,0,0,0.7), 0 0 0 1px rgba(255,255,255,0.04), inset 0 1px 0 rgba(255,255,255,0.06)`,
          padding: '28px 24px 22px',
          animation: 'cd-pop 0.25s cubic-bezier(0.4,0,0.2,1)',
          ...props.style,
        }}
        {...props}
      >
        {/* Ícone */}
        <div style={{
          width: 52, height: 52,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          borderRadius: '50%',
          background: v.bg,
          border: `1px solid ${v.border}`,
          marginBottom: 16,
          fontSize: 22,
          boxShadow: `0 0 20px ${v.color}20`,
        }}>
          {v.icon}
        </div>

        {/* Título */}
        <h2 id="confirm-title" style={{
          margin: '0 0 8px',
          fontSize: 18,
          fontWeight: 700,
          color: 'var(--space-text-white)',
          fontFamily: 'var(--font-heading)',
        }}>{title}</h2>

        {/* Mensagem */}
        {message && (
          <p style={{
            margin: '0 0 24px',
            fontSize: 13,
            color: 'var(--space-text-grey)',
            lineHeight: 1.6,
          }}>{message}</p>
        )}

        {/* Ações */}
        <div style={{ display: 'flex', gap: 10, justifyContent: 'flex-end' }}>
          <button
            type="button"
            onClick={onCancel}
            disabled={loading}
            style={{
              padding: '8px 18px',
              borderRadius: 'var(--space-radius-md)',
              border: '1px solid var(--space-border-color)',
              background: 'transparent',
              color: 'var(--space-text-grey)',
              fontSize: 13,
              fontWeight: 600,
              cursor: loading ? 'not-allowed' : 'pointer',
              transition: 'all 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.05)'; e.currentTarget.style.color = 'var(--space-text-white)'; }}
            onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--space-text-grey)'; }}
          >
            {cancelLabel}
          </button>
          <button
            type="button"
            onClick={onConfirm}
            disabled={loading}
            style={{
              padding: '8px 20px',
              borderRadius: 'var(--space-radius-md)',
              border: `1px solid ${v.color}`,
              background: v.bg,
              color: v.color,
              fontSize: 13,
              fontWeight: 700,
              cursor: loading ? 'not-allowed' : 'pointer',
              boxShadow: `0 0 16px ${v.color}30`,
              transition: 'all 0.15s',
              display: 'flex', alignItems: 'center', gap: 6,
            }}
            onMouseEnter={e => { e.currentTarget.style.background = `${v.color}22`; }}
            onMouseLeave={e => { e.currentTarget.style.background = v.bg; }}
          >
            {loading && <div style={{ width: 12, height: 12, borderRadius: '50%', border: `2px solid ${v.color}40`, borderTopColor: v.color, animation: 'cd-spin 0.8s linear infinite' }} />}
            {confirmLabel}
          </button>
        </div>
      </div>

      <style>{`
        @keyframes cd-backdrop { from { opacity: 0; } to { opacity: 1; } }
        @keyframes cd-pop { from { opacity: 0; transform: scale(0.95) translateY(8px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        @keyframes cd-spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  );
}
