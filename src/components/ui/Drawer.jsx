import React, { useEffect } from 'react';

export default function Drawer({
  isOpen,
  onClose,
  position = 'right', // 'left' | 'right' | 'top' | 'bottom'
  title,
  children,
  size = '320px',
  className = '',
  ...props
}) {
  // Impedir scroll de fundo
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

  // Determinar posicionamento e transformações baseadas na prop position
  const getDrawerStyles = () => {
    const defaultStyles = {
      position: 'fixed',
      backgroundColor: 'var(--space-bg-card)',
      border: '1px solid var(--space-border-color)',
      boxShadow: '0 10px 40px rgba(0,0,0,0.6)',
      zIndex: 1500,
      display: 'flex',
      flexDirection: 'column',
      padding: '24px',
      boxSizing: 'border-box'
    };

    switch (position) {
      case 'left':
        return {
          ...defaultStyles,
          top: 0,
          left: 0,
          height: '100vh',
          width: size,
          borderRight: '1px solid var(--space-border-color)',
          borderLeft: '4px solid var(--space-orange-primary)',
          animation: 'drawer-slide-left 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        };
      case 'top':
        return {
          ...defaultStyles,
          top: 0,
          left: 0,
          width: '100vw',
          height: size,
          borderBottom: '1px solid var(--space-border-color)',
          borderTop: '4px solid var(--space-orange-primary)',
          animation: 'drawer-slide-top 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        };
      case 'bottom':
        return {
          ...defaultStyles,
          bottom: 0,
          left: 0,
          width: '100vw',
          height: size,
          borderTop: '1px solid var(--space-border-color)',
          borderBottom: '4px solid var(--space-orange-primary)',
          animation: 'drawer-slide-bottom 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        };
      case 'right':
      default:
        return {
          ...defaultStyles,
          top: 0,
          right: 0,
          height: '100vh',
          width: size,
          borderLeft: '1px solid var(--space-border-color)',
          borderRight: '4px solid var(--space-orange-primary)',
          animation: 'drawer-slide-right 0.3s cubic-bezier(0.16, 1, 0.3, 1)'
        };
    }
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(5, 5, 6, 0.6)',
        backdropFilter: 'blur(4px)',
        zIndex: 1400,
        animation: 'drawer-fade-in 0.25s ease-out'
      }}
      onClick={onClose}
    >
      <style>{`
        @keyframes drawer-fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes drawer-slide-right {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
        @keyframes drawer-slide-left {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        @keyframes drawer-slide-top {
          from { transform: translateY(-100%); }
          to { transform: translateY(0); }
        }
        @keyframes drawer-slide-bottom {
          from { transform: translateY(100%); }
          to { transform: translateY(0); }
        }
      `}</style>
      
      <div
        className={`drawer-panel ${className}`}
        style={getDrawerStyles()}
        onClick={(e) => e.stopPropagation()}
        {...props}
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
          {title && (
            <h3
              style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: '700',
                color: 'var(--space-text-white)',
                margin: 0
              }}
            >
              {title}
            </h3>
          )}
          <button
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              color: 'var(--space-text-muted)',
              cursor: 'pointer',
              fontSize: '20px',
              outline: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '28px',
              height: '28px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.02)',
              transition: 'var(--space-transition)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--space-orange-primary)';
              e.currentTarget.style.backgroundColor = 'var(--space-orange-subtle)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--space-text-muted)';
              e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
            }}
          >
            &times;
          </button>
        </div>

        {/* Content body */}
        <div style={{ flexGrow: 1, overflowY: 'auto', color: 'var(--space-text-grey)', fontSize: '13.5px', lineHeight: '1.6' }}>
          {children}
        </div>
      </div>
    </div>
  );
}
