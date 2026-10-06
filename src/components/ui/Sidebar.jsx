import React from 'react';

export default function Sidebar({
  items = [],
  activeId,
  onChange,
  header,
  footer,
  className = '',
  ...props
}) {
  return (
    <aside
      className={`sidebar-container ${className}`}
      style={{
        width: '240px',
        backgroundColor: 'var(--space-bg-darker)',
        borderRight: '1px solid var(--space-border-color)',
        padding: '20px',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
        ...props.style
      }}
      {...props}
    >
      {/* Header Slot */}
      {header && <div style={{ marginBottom: '24px' }}>{header}</div>}

      {/* Menu List */}
      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '6px', flexGrow: 1 }}>
        {items.map((item) => {
          const isActive = activeId === item.id;
          return (
            <li
              key={item.id}
              onClick={() => onChange && onChange(item.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                padding: '10px 14px',
                borderRadius: 'var(--space-radius-md)',
                color: isActive ? 'var(--space-text-white)' : 'var(--space-text-grey)',
                backgroundColor: isActive ? 'var(--space-orange-subtle)' : 'transparent',
                border: '1px solid',
                borderColor: isActive ? 'rgba(255, 122, 26, 0.2)' : 'transparent',
                cursor: 'pointer',
                fontSize: '13.5px',
                fontWeight: '600',
                transition: 'var(--space-transition)',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'var(--space-text-white)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isActive) {
                  e.currentTarget.style.color = 'var(--space-text-grey)';
                  e.currentTarget.style.backgroundColor = 'transparent';
                }
              }}
            >
              {isActive && (
                <span
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: '25%',
                    height: '50%',
                    width: '3px',
                    backgroundColor: 'var(--space-orange-primary)',
                    borderRadius: '0 4px 4px 0',
                    boxShadow: '0 0 8px var(--space-orange-glow)'
                  }}
                />
              )}
              {item.icon && (
                <span style={{ width: '16px', height: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: isActive ? 'var(--space-orange-primary)' : 'inherit', filter: isActive ? 'drop-shadow(0 0 4px var(--space-orange-glow-light))' : 'none' }}>
                  {item.icon}
                </span>
              )}
              <span>{item.label}</span>
            </li>
          );
        })}
      </ul>

      {/* Footer Slot */}
      {footer && (
        <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--space-border-color)' }}>
          {footer}
        </div>
      )}
    </aside>
  );
}
