import React, { useEffect, useRef, useState } from 'react';

export default function ProgressToast({
  title = 'Carregando...',
  progress = 0,       // 0-100
  status = 'loading', // 'loading' | 'success' | 'error'
  subtitle,
  onDismiss,
  dismissOnComplete = true,
  className = '',
  ...props
}) {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => { requestAnimationFrame(() => setVisible(true)); }, []);

  useEffect(() => {
    if (dismissOnComplete && status !== 'loading') {
      const t = setTimeout(() => {
        setVisible(false);
        setTimeout(() => { setDismissed(true); onDismiss && onDismiss(); }, 400);
      }, 2000);
      return () => clearTimeout(t);
    }
  }, [status, dismissOnComplete, onDismiss]);

  if (dismissed) return null;

  const clamp = Math.min(Math.max(Number(progress) || 0, 0), 100);
  const isSuccess = status === 'success';
  const isError = status === 'error';
  const isLoading = status === 'loading';

  const barColor = isSuccess ? '#37E35C' : isError ? '#FF3B4F' : 'var(--space-orange-primary)';
  const barGlow = isSuccess ? 'rgba(55,227,92,0.5)' : isError ? 'rgba(255,59,79,0.5)' : 'var(--space-orange-glow)';

  return (
    <div
      className={`progress-toast ${className}`}
      style={{
        width: 320,
        borderRadius: 'var(--space-radius-lg)',
        background: 'rgba(14,16,22,0.96)',
        backdropFilter: 'blur(12px)',
        border: `1px solid ${isSuccess ? 'rgba(55,227,92,0.25)' : isError ? 'rgba(255,59,79,0.25)' : 'var(--space-border-color)'}`,
        boxShadow: '0 12px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)',
        overflow: 'hidden',
        transform: visible ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.97)',
        opacity: visible ? 1 : 0,
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1), opacity 0.35s',
        ...props.style,
      }}
      {...props}
    >
      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '14px 14px 10px' }}>
        {/* Ícone de status */}
        <div style={{
          width: 32, height: 32, borderRadius: '50%',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          flexShrink: 0,
          background: isSuccess ? 'rgba(55,227,92,0.12)' : isError ? 'rgba(255,59,79,0.12)' : 'rgba(255,107,53,0.12)',
          border: `1px solid ${barColor}30`,
        }}>
          {isLoading ? (
            <div style={{
              width: 14, height: 14, borderRadius: '50%',
              border: `2px solid ${barColor}30`,
              borderTopColor: barColor,
              animation: 'pt-spin 0.8s linear infinite',
            }} />
          ) : isSuccess ? (
            <span style={{ color: '#37E35C', fontSize: 14, fontWeight: 700 }}>✓</span>
          ) : (
            <span style={{ color: '#FF3B4F', fontSize: 14, fontWeight: 700 }}>✕</span>
          )}
        </div>

        {/* Texto */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--space-text-white)' }}>{title}</div>
          {subtitle && <div style={{ fontSize: 11, color: 'var(--space-text-muted)', marginTop: 2 }}>{subtitle}</div>}
        </div>

        {/* Percentagem */}
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 13,
          fontWeight: 700,
          color: barColor,
          minWidth: 36,
          textAlign: 'right',
        }}>
          {isSuccess ? '100%' : isError ? 'Err' : `${Math.round(clamp)}%`}
        </span>

        {/* Fechar */}
        {onDismiss && !dismissOnComplete && (
          <button type="button" onClick={onDismiss}
            style={{ background: 'none', border: 'none', color: 'var(--space-text-muted)', fontSize: 16, cursor: 'pointer', padding: 2 }}>
            ×
          </button>
        )}
      </div>

      {/* Barra de progresso */}
      <div style={{ height: 3, background: 'rgba(255,255,255,0.05)' }}>
        <div style={{
          height: '100%',
          width: isSuccess ? '100%' : isError ? '100%' : `${clamp}%`,
          background: barColor,
          boxShadow: `0 0 8px ${barGlow}`,
          transition: 'width 0.4s cubic-bezier(0.4,0,0.2,1), background 0.3s',
          position: 'relative',
          overflow: 'hidden',
        }}>
          {/* Efeito shimmer animado */}
          {isLoading && (
            <div style={{
              position: 'absolute', inset: 0,
              background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.3), transparent)',
              animation: 'pt-shimmer 1.5s infinite',
            }} />
          )}
        </div>
      </div>

      <style>{`
        @keyframes pt-spin { to { transform: rotate(360deg); } }
        @keyframes pt-shimmer {
          from { transform: translateX(-100%); }
          to   { transform: translateX(400%); }
        }
      `}</style>
    </div>
  );
}
