import React from 'react';

export default function PageHeader({
  title,
  breadcrumbs = [],
  actions,
  className = '',
  ...props
}) {
  return (
    <div
      className={`page-header-container ${className}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        marginBottom: '24px',
        paddingBottom: '16px',
        borderBottom: '1px solid var(--space-border-color)',
        ...props.style
      }}
      {...props}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        {/* Breadcrumbs */}
        {breadcrumbs.length > 0 && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--space-text-muted)' }}>
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <React.Fragment key={crumb}>
                  <span style={{ fontWeight: isLast ? '600' : '400', color: isLast ? 'var(--space-orange-primary)' : 'inherit' }}>
                    {crumb}
                  </span>
                  {!isLast && <span>/</span>}
                </React.Fragment>
              );
            })}
          </div>
        )}
        
        {/* Title */}
        {title && (
          <h1
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '24px',
              fontWeight: '700',
              color: 'var(--space-text-white)',
              margin: 0
            }}
          >
            {title}
          </h1>
        )}
      </div>

      {actions && (
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
          {actions}
        </div>
      )}
    </div>
  );
}
