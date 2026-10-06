import React from 'react';

export default function StatusBadge({
  status = 'online',
  label,
  className = '',
  ...props
}) {
  // Configuração de temas de status
  const themes = {
    online: {
      color: 'var(--color-success)',
      bg: 'rgba(16, 185, 129, 0.08)',
      border: 'rgba(16, 185, 129, 0.2)',
      text: 'Online'
    },
    offline: {
      color: 'var(--space-text-grey)',
      bg: 'rgba(142, 142, 159, 0.08)',
      border: 'rgba(142, 142, 159, 0.2)',
      text: 'Offline'
    },
    away: {
      color: 'var(--color-warning)',
      bg: 'rgba(245, 158, 11, 0.08)',
      border: 'rgba(245, 158, 11, 0.2)',
      text: 'Ausente'
    },
    busy: {
      color: 'var(--color-error)',
      bg: 'rgba(239, 68, 68, 0.08)',
      border: 'rgba(239, 68, 68, 0.2)',
      text: 'Ocupado'
    },
    success: {
      color: 'var(--color-success)',
      bg: 'rgba(16, 185, 129, 0.08)',
      border: 'rgba(16, 185, 129, 0.2)',
      text: 'Sucesso'
    },
    warning: {
      color: 'var(--color-warning)',
      bg: 'rgba(245, 158, 11, 0.08)',
      border: 'rgba(245, 158, 11, 0.2)',
      text: 'Aviso'
    },
    error: {
      color: 'var(--color-error)',
      bg: 'rgba(239, 68, 68, 0.08)',
      border: 'rgba(239, 68, 68, 0.2)',
      text: 'Erro'
    },
    info: {
      color: 'var(--color-info)',
      bg: 'rgba(59, 130, 246, 0.08)',
      border: 'rgba(59, 130, 246, 0.2)',
      text: 'Info'
    }
  };

  const theme = themes[status] || themes.online;
  const badgeLabel = label || theme.text;

  return (
    <span
      className={`status-badge-container ${status} ${className}`}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '4px 10px',
        borderRadius: '20px',
        backgroundColor: theme.bg,
        border: `1px solid ${theme.border}`,
        color: theme.color,
        fontSize: '11px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px',
        fontFamily: 'var(--font-body)',
        ...props.style
      }}
      {...props}
    >
      {/* Pulsing indicator dot */}
      <span
        style={{
          width: '6px',
          height: '6px',
          borderRadius: '50%',
          backgroundColor: theme.color,
          display: 'inline-block',
          boxShadow: `0 0 6px ${theme.color}`,
          animation: status !== 'offline' ? 'status-dot-pulse 2s infinite' : 'none'
        }}
      />
      <style>{`
        @keyframes status-dot-pulse {
          0% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.2); }
          100% { opacity: 0.6; transform: scale(1); }
        }
      `}</style>
      <span>{badgeLabel}</span>
    </span>
  );
}
