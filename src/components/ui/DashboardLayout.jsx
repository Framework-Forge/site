import React from 'react';

export default function DashboardLayout({
  sidebar,
  topbar,
  children,
  className = '',
  ...props
}) {
  return (
    <div
      className={`dashboard-layout-grid ${className}`}
      style={{
        display: 'flex',
        width: '100vw',
        height: '100vh',
        overflow: 'hidden',
        backgroundColor: 'var(--space-bg-darkest)',
        ...props.style
      }}
      {...props}
    >
      {/* Sidebar Slot */}
      {sidebar && <div style={{ height: '100%', flexShrink: 0 }}>{sidebar}</div>}

      {/* Main Panel */}
      <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1, height: '100%', overflow: 'hidden' }}>
        {/* Topbar Slot */}
        {topbar && <div style={{ width: '100%', flexShrink: 0 }}>{topbar}</div>}

        {/* Content Container */}
        <main style={{ flexGrow: 1, padding: '24px', overflowY: 'auto', boxSizing: 'border-box' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
