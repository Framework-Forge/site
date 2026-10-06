import React, { useState } from 'react';

const VARIANTS = {
  info:    { icon: 'ℹ', color: '#45E8FF', bg: 'rgba(69,232,255,0.08)', border: 'rgba(69,232,255,0.25)' },
  success: { icon: '✓', color: '#37E35C', bg: 'rgba(55,227,92,0.08)',  border: 'rgba(55,227,92,0.25)'  },
  warning: { icon: '⚠', color: '#FF9500', bg: 'rgba(255,149,0,0.08)',  border: 'rgba(255,149,0,0.25)'  },
  error:   { icon: '✕', color: '#FF3B4F', bg: 'rgba(255,59,79,0.08)',  border: 'rgba(255,59,79,0.25)'  },
  neutral: { icon: '📢', color: 'var(--space-text-grey)', bg: 'rgba(255,255,255,0.04)', border: 'var(--space-border-color)' },
};

export default function AlertBanner({
  type = 'info',
  title,
  message,
  action,
  dismissible = true,
  onDismiss,
  icon: customIcon,
  className = '',
  ...props
}) {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  const v = VARIANTS[type] || VARIANTS.info;

  const dismiss = () => {
    setDismissed(true);
    onDismiss && onDismiss();
  };

  return (
    <div
      className={`alert-banner ${className}`}
      role="alert"
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 12,
        padding: '12px 16px',
        borderRadius: 'var(--space-radius-md)',
        border: `1px solid ${v.border}`,
        background: v.bg,
        backdropFilter: 'blur(8px)',
        animation: 'alert-slide-in 0.3s cubic-bezier(0.4,0,0.2,1)',
        ...props.style,
      }}
      {...props}
    >
      {/* Ícone */}
      <span style={{
        flexShrink: 0,
        width: 28,
        height: 28,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        background: `${v.color}18`,
        color: v.color,
        fontSize: 13,
        fontWeight: 700,
      }}>
        {customIcon || v.icon}
      </span>

      {/* Conteúdo */}
      <div style={{ flex: 1, minWidth: 0 }}>
        {title && (
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--space-text-white)', marginBottom: message ? 2 : 0 }}>
            {title}
          </div>
        )}
        {message && (
          <div style={{ fontSize: 12, color: 'var(--space-text-grey)', lineHeight: 1.5 }}>
            {message}
          </div>
        )}
      </div>

      {/* Ação */}
      {action && (
        <button
          type="button"
          onClick={action.onClick}
          style={{
            flexShrink: 0,
            padding: '4px 12px',
            borderRadius: 20,
            border: `1px solid ${v.color}`,
            background: 'transparent',
            color: v.color,
            fontSize: 11,
            fontWeight: 700,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            transition: 'background 0.15s',
          }}
          onMouseEnter={e => e.currentTarget.style.background = `${v.color}18`}
          onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
        >
          {action.label}
        </button>
      )}

      {/* Fechar */}
      {dismissible && (
        <button
          type="button"
          onClick={dismiss}
          aria-label="Fechar"
          style={{
            flexShrink: 0,
            width: 24, height: 24,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: '50%',
            border: 'none',
            background: 'transparent',
            color: 'var(--space-text-muted)',
            fontSize: 16,
            cursor: 'pointer',
            transition: 'background 0.15s, color 0.15s',
          }}
          onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.08)'; e.currentTarget.style.color = 'var(--space-text-white)'; }}
          onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = 'var(--space-text-muted)'; }}
        >
          ×
        </button>
      )}

      <style>{`
        @keyframes alert-slide-in {
          from { opacity: 0; transform: translateY(-6px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}
