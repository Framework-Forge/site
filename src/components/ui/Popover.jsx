import React, { useState } from 'react';

export default function Popover({
  title,
  content,
  position = 'bottom', // 'top' | 'bottom' | 'left' | 'right'
  children,
  className = '',
  ...props
}) {
  const [isOpen, setIsOpen] = useState(false);

  const togglePopover = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  const getPositionStyles = () => {
    switch (position) {
      case 'top':
        return {
          bottom: '100%',
          left: '50%',
          transform: 'translateX(-50%) translateY(-10px)'
        };
      case 'left':
        return {
          top: '50%',
          right: '100%',
          transform: 'translateY(-50%) translateX(-10px)'
        };
      case 'right':
        return {
          top: '50%',
          left: '100%',
          transform: 'translateY(-50%) translateX(10px)'
        };
      case 'bottom':
      default:
        return {
          top: '100%',
          left: '50%',
          transform: 'translateX(-50%) translateY(10px)'
        };
    }
  };

  return (
    <div
      className={`popover-wrapper ${className}`}
      style={{ position: 'relative', display: 'inline-block' }}
      {...props}
    >
      <div onClick={togglePopover} style={{ cursor: 'pointer' }}>
        {children}
      </div>

      {isOpen && (
        <>
          {/* Backdrop Invisível para Fechar Popover no clique fora */}
          <div
            onClick={() => setIsOpen(false)}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 998,
              background: 'transparent'
            }}
          />
          
          <div
            style={{
              position: 'absolute',
              zIndex: 999,
              width: '200px',
              backgroundColor: 'var(--space-bg-card)',
              border: '1px solid var(--space-border-color)',
              borderRadius: 'var(--space-radius-md)',
              boxShadow: '0 10px 30px rgba(0,0,0,0.5), 0 0 10px rgba(255, 122, 26, 0.05)',
              padding: '12px',
              boxSizing: 'border-box',
              animation: 'popover-fade-in 0.2s cubic-bezier(0.16, 1, 0.3, 1)',
              ...getPositionStyles()
            }}
          >
            <style>{`
              @keyframes popover-fade-in {
                from { opacity: 0; transform: scale(0.96) translateY(-4px); }
                to { opacity: 1; transform: scale(1) translateY(0); }
              }
            `}</style>

            
            {title && (
              <h4
                style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '13px',
                  fontWeight: '700',
                  color: 'var(--space-orange-primary)',
                  margin: '0 0 6px 0',
                  borderBottom: '1px solid var(--space-border-color)',
                  paddingBottom: '4px'
                }}
              >
                {title}
              </h4>
            )}
            
            <div style={{ color: 'var(--space-text-grey)', fontSize: '11.5px', lineHeight: '1.4' }}>
              {content}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
