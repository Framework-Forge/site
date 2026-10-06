import React from 'react';

export default function SectionHeader({
  title,
  description,
  actions,
  className = '',
  ...props
}) {
  return (
    <div
      className={`section-header-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '6px',
        width: '100%',
        borderBottom: '1px solid var(--space-border-color)',
        paddingBottom: '14px',
        marginBottom: '20px',
        ...props.style
      }}
      {...props}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
        {title && (
          <h2
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--space-text-white)',
              margin: 0,
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            {/* Linha vertical laranja indicadora */}
            <span style={{ width: '4px', height: '18px', backgroundColor: 'var(--space-orange-primary)', borderRadius: '2px', display: 'inline-block', boxShadow: '0 0 6px var(--space-orange-glow)' }} />
            {title}
          </h2>
        )}
        {actions && (
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            {actions}
          </div>
        )}
      </div>
      {description && (
        <p style={{ fontSize: '13px', color: 'var(--space-text-grey)', margin: '4px 0 0 14px' }}>
          {description}
        </p>
      )}
    </div>
  );
}
