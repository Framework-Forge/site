import React, { useEffect } from 'react';

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  actions,
  className = '',
  ...props
}) {
  // Impedir o scroll do body quando o modal estiver aberto
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 5, 6, 0.85)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '20px',
        animation: 'fadeIn 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes modalScale {
          from { transform: scale(0.95) translateY(10px); opacity: 0; }
          to { transform: scale(1) translateY(0); opacity: 1; }
        }
      `}</style>
      <div
        className={`showcase-card ${className}`}
        style={{
          width: '100%',
          maxWidth: '500px',
          background: 'var(--space-bg-card)',
          border: '1px solid var(--space-border-color)',
          borderRadius: 'var(--space-radius-lg)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.7), 0 0 20px rgba(255, 122, 26, 0.1)',
          animation: 'modalScale 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          padding: '28px',
          gap: '20px'
        }}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Glow Effect */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: 'linear-gradient(90deg, transparent, var(--space-orange-primary), transparent)',
            boxShadow: '0 0 10px var(--space-orange-glow)'
          }}
        />

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {title && (
            <h2
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: '700',
                color: 'var(--space-text-white)',
                margin: 0
              }}
            >
              {title}
            </h2>
          )}
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--space-text-grey)',
              cursor: 'pointer',
              fontSize: '20px',
              transition: 'var(--space-transition)',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '32px',
              height: '32px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.02)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--space-orange-primary)';
              e.currentTarget.style.backgroundColor = 'var(--space-orange-subtle)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--space-text-grey)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
            }}
          >
            &times;
          </button>
        </div>

        {/* Content */}
        <div style={{ color: 'var(--space-text-grey)', fontSize: '14px', lineHeight: '1.6' }}>
          {children}
        </div>

        {/* Actions */}
        {actions && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'flex-end',
              gap: '12px',
              marginTop: '8px',
              borderTop: '1px solid var(--space-border-color)',
              paddingTop: '16px'
            }}
          >
            {actions}
          </div>
        )}
      </div>
    </div>
  );
}
