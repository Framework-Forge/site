import React, { useState } from 'react';

export default function Tooltip({
  text,
  content,  // alias para text — ambas funcionam
  position = 'top',
  children,
  className = '',
  ...props
}) {
  const [isVisible, setIsVisible] = useState(false);
  const label = content ?? text ?? '';

  const getPositionStyles = () => {
    switch (position) {
      case 'bottom':
        return { top: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' };
      case 'left':
        return { top: '50%', right: 'calc(100% + 8px)', transform: 'translateY(-50%)' };
      case 'right':
        return { top: '50%', left: 'calc(100% + 8px)', transform: 'translateY(-50%)' };
      case 'top':
      default:
        return { bottom: 'calc(100% + 8px)', left: '50%', transform: 'translateX(-50%)' };
    }
  };

  if (!label) return <>{children}</>;

  return (
    <div
      className={`tooltip-wrapper ${className}`}
      style={{ position: 'relative', display: 'inline-flex', alignItems: 'center' }}
      onMouseEnter={() => setIsVisible(true)}
      onMouseLeave={() => setIsVisible(false)}
      {...props}
    >
      {children}
      <div
        style={{
          position: 'absolute',
          zIndex: 9999,
          backgroundColor: 'var(--space-bg-darkest)',
          border: '1px solid var(--space-orange-primary)',
          color: 'var(--space-text-white)',
          padding: '6px 12px',
          borderRadius: 'var(--space-radius-md)',
          fontSize: '12px',
          fontWeight: '500',
          whiteSpace: 'nowrap',
          pointerEvents: 'none',
          boxShadow: '0 4px 20px rgba(0,0,0,0.7), 0 0 10px var(--space-orange-glow-light)',
          opacity: isVisible ? 1 : 0,
          visibility: isVisible ? 'visible' : 'hidden',
          transition: 'opacity 0.18s ease, visibility 0.18s ease',
          fontFamily: 'var(--font-body)',
          lineHeight: '1.4',
          ...getPositionStyles(),
        }}
      >
        {label}
      </div>
    </div>
  );
}
