import React from 'react';
import Badge from './Badge';

export default function Card({
  title,
  badge,
  badgeVariant = 'ativo',
  description,
  icon,
  children,
  className = '',
  onClick,
  ...props
}) {
  const isClickable = !!onClick;
  
  return (
    <div
      className={`showcase-card ${className}`}
      onClick={onClick}
      style={{
        cursor: isClickable ? 'pointer' : 'default',
        background: 'var(--space-bg-card)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        padding: '24px',
        transition: 'var(--space-transition)',
        position: 'relative',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        ...(isClickable ? { ':hover': { borderColor: 'var(--space-orange-primary)', boxShadow: '0 8px 30px rgba(0, 0, 0, 0.4), 0 0 15px var(--space-orange-glow)' } } : {})
      }}
      {...props}
    >
      {/* Glow Effect Top Left */}
      <div
        style={{
          position: 'absolute',
          top: '-20px',
          left: '-20px',
          width: '80px',
          height: '80px',
          background: 'radial-gradient(circle, var(--space-orange-glow) 0%, transparent 70%)',
          opacity: 0.4,
          pointerEvents: 'none'
        }}
      />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', width: '100%' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          {icon && (
            <div 
              style={{ 
                width: '36px', 
                height: '36px', 
                color: 'var(--space-orange-primary)', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'var(--space-orange-subtle)',
                borderRadius: 'var(--space-radius-md)',
                padding: '8px',
                border: '1px solid rgba(255, 122, 26, 0.15)',
                filter: 'drop-shadow(0 0 4px var(--space-orange-glow))'
              }}
            >
              {icon}
            </div>
          )}
          {title && (
            <h3 
              className="showcase-card-title" 
              style={{ 
                fontFamily: 'var(--font-heading)', 
                fontSize: '18px', 
                fontWeight: '600', 
                color: 'var(--space-text-white)',
                margin: 0 
              }}
            >
              {title}
            </h3>
          )}
        </div>
        {badge && (
          <Badge variant={badgeVariant}>{badge}</Badge>
        )}
      </div>

      {description && (
        <p 
          className="showcase-card-description" 
          style={{ 
            color: 'var(--space-text-grey)', 
            fontSize: '13px', 
            lineHeight: '1.5',
            margin: 0 
          }}
        >
          {description}
        </p>
      )}

      {children && (
        <div style={{ marginTop: 'auto', width: '100%' }}>
          {children}
        </div>
      )}
    </div>
  );
}
