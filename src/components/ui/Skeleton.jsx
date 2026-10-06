import React from 'react';

export default function Skeleton({
  variant = 'rect',
  width = '100%',
  height,
  className = '',
  style = {},
  ...props
}) {
  const getShapeStyles = () => {
    switch (variant) {
      case 'circle':
        return { borderRadius: '50%', width, height: height || width };
      case 'text':
        return {
          borderRadius: 'var(--space-radius-sm)',
          width,
          height: height || '14px',
          marginTop: '4px',
          marginBottom: '4px'
        };
      case 'rect':
      default:
        return { borderRadius: 'var(--space-radius-md)', width, height: height || '100px' };
    }
  };

  return (
    <div
      className={`skeleton-pulsing ${className}`}
      style={{
        backgroundColor: '#1A1A20',
        position: 'relative',
        overflow: 'hidden',
        ...getShapeStyles(),
        ...style
      }}
      {...props}
    >
      <style>{`
        @keyframes skeleton-wave {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        .skeleton-pulsing::after {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 122, 26, 0.04) 40%,
            rgba(255, 255, 255, 0.06) 50%,
            rgba(255, 122, 26, 0.04) 60%,
            transparent 100%
          );
          animation: skeleton-wave 1.6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}
