import React from 'react';

export default function KeyboardVisualizer({
  activeKeys = [],
  layout = 'wasd', // 'wasd' | 'utility'
  className = '',
  ...props
}) {
  // Configurações de layout
  const renderKey = (keyLabel, isActive) => {
    return (
      <div
        key={keyLabel}
        style={{
          width: '38px',
          height: '38px',
          borderRadius: '6px',
          border: '1px solid',
          borderColor: isActive ? 'var(--space-orange-primary)' : 'var(--space-border-color)',
          backgroundColor: isActive ? 'var(--space-orange-subtle)' : 'var(--space-bg-input)',
          color: isActive ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          fontFamily: 'var(--font-mono)',
          fontSize: '13px',
          fontWeight: '700',
          boxShadow: isActive ? '0 0 10px var(--space-orange-glow)' : 'none',
          transition: 'var(--space-transition)',
          userSelect: 'none'
        }}
      >
        {keyLabel}
      </div>
    );
  };

  return (
    <div
      className={`keyboard-visualizer ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '16px',
        backgroundColor: 'var(--space-bg-card)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        gap: '8px',
        ...props.style
      }}
      {...props}
    >
      {layout === 'wasd' ? (
        <>
          {/* Fila WASD Superior */}
          <div>
            {renderKey('W', activeKeys.includes('W'))}
          </div>
          {/* Fila WASD Inferior */}
          <div style={{ display: 'flex', gap: '8px' }}>
            {renderKey('A', activeKeys.includes('A'))}
            {renderKey('S', activeKeys.includes('S'))}
            {renderKey('D', activeKeys.includes('D'))}
          </div>
        </>
      ) : (
        <div style={{ display: 'flex', gap: '8px' }}>
          {renderKey('ESC', activeKeys.includes('ESC'))}
          {renderKey('F', activeKeys.includes('F'))}
          {renderKey('E', activeKeys.includes('E'))}
          {renderKey('G', activeKeys.includes('G'))}
          {renderKey('X', activeKeys.includes('X'))}
        </div>
      )}
    </div>
  );
}
