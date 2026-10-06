import React from 'react';

export default function TabletFrame({
  children,
  time = '10:42',
  battery = '85%',
  onClose,
  className = '',
  ...props
}) {
  return (
    <div
      className={`tablet-frame-wrapper ${className}`}
      style={{
        width: '100%',
        maxWidth: '850px',
        margin: '0 auto',
        aspectRatio: '16/10.5',
        backgroundColor: '#0a0a0c',
        border: '14px solid #1c1c22', // Moldura física do tablet
        borderRadius: '28px',
        boxShadow: '0 25px 60px rgba(0,0,0,0.85), inset 0 0 10px rgba(0,0,0,0.9), 0 0 0 1px rgba(255,255,255,0.03)',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        boxSizing: 'border-box',
        overflow: 'hidden',
        ...props.style
      }}
      {...props}
    >
      {/* Barra de Status do Sistema Tablet */}
      <div
        style={{
          height: '26px',
          backgroundColor: '#070709',
          borderBottom: '1px solid rgba(255, 255, 255, 0.03)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          padding: '0 16px',
          fontSize: '11px',
          color: 'var(--space-text-grey)',
          fontFamily: 'var(--font-body)',
          userSelect: 'none',
          zIndex: 10
        }}
      >
        {/* Lado Esquerdo: Sinal de Rede e Provedor */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span>📶 LTE</span>
          <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>ForgeboxNet</span>
        </div>

        {/* Centro: Hora */}
        <div style={{ fontWeight: '600', color: 'var(--space-text-white)' }}>
          {time}
        </div>

        {/* Lado Direito: Bateria & Fechar */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span>🔋 {battery}</span>
          {onClose && (
            <button
              onClick={onClose}
              style={{
                background: 'rgba(239, 68, 68, 0.2)',
                border: '1px solid rgba(239, 68, 68, 0.3)',
                color: '#EF4444',
                fontSize: '10px',
                fontWeight: 'bold',
                borderRadius: '4px',
                padding: '1px 5px',
                cursor: 'pointer',
                transition: 'var(--space-transition)',
                outline: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#EF4444';
                e.currentTarget.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'rgba(239, 68, 68, 0.2)';
                e.currentTarget.style.color = '#EF4444';
              }}
            >
              FECHAR APP
            </button>
          )}
        </div>
      </div>

      {/* Área da Tela / App Interno */}
      <div style={{ flexGrow: 1, position: 'relative', overflow: 'hidden', backgroundColor: 'var(--space-bg-darkest)' }}>
        {children}
      </div>
    </div>
  );
}
