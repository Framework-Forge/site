import React from 'react';
import Avatar from './Avatar';

export default function Topbar({
  title = 'Forgebox Dashboard',
  user = { name: 'Spacer Dev', status: 'online' },
  actions,
  className = '',
  ...props
}) {
  return (
    <header
      className={`topbar-container ${className}`}
      style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '64px',
        padding: '0 24px',
        backgroundColor: 'var(--space-bg-darker)',
        borderBottom: '1px solid var(--space-border-color)',
        width: '100%',
        boxSizing: 'border-box',
        zIndex: 900,
        ...props.style
      }}
      {...props}
    >
      {/* Title / Brand logo section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <h2
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: '15px',
            fontWeight: '700',
            color: 'var(--space-text-white)',
            margin: 0,
            textTransform: 'uppercase',
            letterSpacing: '1px'
          }}
        >
          {title}
        </h2>
      </div>

      {/* Right User & Actions Area */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        {actions && <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>{actions}</div>}

        {/* Separador */}
        <div style={{ width: '1px', height: '24px', backgroundColor: 'var(--space-border-color)' }} />

        {/* User Card */}
        {user && (
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
              <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--space-text-white)' }}>
                {user.name}
              </span>
              <span style={{ fontSize: '10px', color: 'var(--space-orange-primary)', fontWeight: '500' }}>
                Administrador
              </span>
            </div>
            <Avatar size="sm" name={user.name} status={user.status} glow />
          </div>
        )}
      </div>
    </header>
  );
}
