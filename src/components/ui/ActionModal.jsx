import React, { useEffect } from 'react';
import Button from './Button';
import IconComponent from './Icon';

export default function ActionModal({
  title,
  icon: Icon,
  variant = 'default', // 'default' | 'destructive' | 'warning'
  onClose,
  onConfirm,
  confirmLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  isConfirmDisabled = false,
  maxWidth = '440px',
  hideBlur = false,
  hideOverlay = false,
  children,
  ...props
}) {
  // Impedir o scroll do body quando o modal estiver aberto
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  const variantColors = {
    default: 'var(--space-orange-primary)',
    destructive: 'var(--color-error)',
    warning: 'var(--color-warning)'
  };

  const accentColor = variantColors[variant] || variantColors.default;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: hideOverlay ? 'transparent' : 'rgba(5, 5, 6, 0.82)',
        backdropFilter: hideOverlay || hideBlur ? 'none' : 'blur(6px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2100,
        padding: '20px',
        animation: 'action-modal-fade-in 0.22s cubic-bezier(0.16, 1, 0.3, 1)',
        pointerEvents: hideOverlay ? 'none' : 'auto'
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes action-modal-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes action-modal-scale-up {
          from { transform: scale(0.96) translateY(8px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
      <div
        style={{
          width: '100%',
          maxWidth: maxWidth,
          backgroundColor: 'var(--space-bg-card)',
          border: '1px solid var(--space-border-color)',
          borderTop: `4px solid ${accentColor}`,
          borderRadius: 'var(--space-radius-lg)',
          boxShadow: `0 24px 48px rgba(0, 0, 0, 0.75), 0 0 20px ${accentColor}15`,
          animation: 'action-modal-scale-up 0.25s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '24px',
          gap: '16px',
          pointerEvents: 'auto'
        }}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Glow de fundo superior */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: '50%',
            transform: 'translateX(-50%)',
            width: '120px',
            height: '40px',
            background: `radial-gradient(circle, ${accentColor}25 0%, transparent 70%)`,
            pointerEvents: 'none'
          }}
        />

        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            {Icon && (
              <div
                style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: 'var(--space-radius-md)',
                  backgroundColor: `${accentColor}12`,
                  border: `1px solid ${accentColor}30`,
                  color: accentColor,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}
              >
                {typeof Icon === 'function' ? (
                  <Icon size={16} style={{ display: 'block' }} />
                ) : typeof Icon === 'string' ? (
                  <IconComponent name={Icon} style={{ width: 16, height: 16, display: 'block' }} />
                ) : (
                  Icon
                )}
              </div>
            )}
            {title && (
              <h2
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: '700',
                  color: 'var(--space-text-white)',
                  margin: 0
                }}
              >
                {title}
              </h2>
            )}
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--space-text-grey)',
              cursor: 'pointer',
              fontSize: '20px',
              lineHeight: 1,
              padding: '6px',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              transition: 'var(--space-transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--space-text-white)';
              e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.04)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--space-text-grey)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div style={{ color: 'var(--space-text-grey)', fontSize: '13.5px', lineHeight: '1.6', flexGrow: 1 }}>
          {children}
        </div>

        {/* Footer Actions */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            gap: '10px',
            marginTop: '8px',
            paddingTop: '16px',
            borderTop: '1px solid var(--space-border-color)'
          }}
        >
          <Button variant="secondary" size="sm" onClick={onClose}>
            {cancelLabel}
          </Button>
          <Button
            variant="primary"
            size="sm"
            disabled={isConfirmDisabled}
            onClick={onConfirm}
            style={{
              backgroundColor: accentColor,
              borderColor: 'transparent',
              boxShadow: isConfirmDisabled ? 'none' : `0 0 12px ${accentColor}35`
            }}
            onMouseEnter={(e) => {
              if (!isConfirmDisabled) {
                e.currentTarget.style.filter = 'brightness(1.1)';
                e.currentTarget.style.boxShadow = `0 0 16px ${accentColor}55`;
              }
            }}
            onMouseLeave={(e) => {
              if (!isConfirmDisabled) {
                e.currentTarget.style.filter = 'none';
                e.currentTarget.style.boxShadow = `0 0 12px ${accentColor}35`;
              }
            }}
          >
            {confirmLabel}
          </Button>
        </div>
      </div>
    </div>
  );
}
