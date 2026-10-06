import React, { useState, useEffect } from 'react';

export default function RadialMenu({
  options = [],
  isOpen = false,
  onSelect,
  onClose,
  centerLabel = 'Forgebox',
  className = '',
  ...props
}) {
  const [activeLabel, setActiveLabel] = useState(centerLabel);

  useEffect(() => {
    if (!isOpen) {
      setActiveLabel(centerLabel);
    }
  }, [isOpen, centerLabel]);

  // Se não houver opções, não renderiza nada
  if (options.length === 0) return null;

  // Calcular ângulos automaticamente se não forem fornecidos
  const count = options.length;
  const angleStep = 360 / count;

  return (
    <div
      className={`fivem-radial-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        width: '260px',
        height: '260px',
        margin: '0 auto'
      }}
      {...props}
    >
      <div 
        className="fivem-radial-wrapper"
        style={{
          opacity: isOpen ? 1 : 0,
          transform: isOpen ? 'scale(1)' : 'scale(0.9)',
          transition: 'all 0.35s cubic-bezier(0.34, 1.56, 0.64, 1)',
          pointerEvents: isOpen ? 'auto' : 'none',
          position: 'relative',
          width: '220px',
          height: '220px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        {/* Círculo Central */}
        <div 
          className="fivem-radial-center"
          style={{
            width: '70px',
            height: '70px',
            borderRadius: '50%',
            backgroundColor: 'var(--space-bg-darkest)',
            border: '2px solid var(--space-border-color)',
            boxShadow: '0 0 15px rgba(0,0,0,0.6), inset 0 0 10px rgba(255, 122, 26, 0.05)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 10,
            transition: 'var(--space-transition)'
          }}
        >
          <span 
            style={{ 
              fontSize: '11px', 
              fontWeight: '700', 
              color: 'var(--space-orange-primary)', 
              textTransform: 'uppercase', 
              letterSpacing: '0.5px', 
              textAlign: 'center', 
              lineHeight: '1.2', 
              width: '90%',
              wordBreak: 'break-word',
              textShadow: '0 0 4px var(--space-orange-glow)'
            }}
          >
            {activeLabel}
          </span>
        </div>

        {/* Itens do Menu Radial */}
        {options.map((opt, index) => {
          const angle = opt.angle !== undefined ? opt.angle : index * angleStep;
          
          // Ajustar ângulo de rotação para alinhar o primeiro item no topo (-90 graus)
          const angleRad = ((angle - 90) * Math.PI) / 180;
          const radius = 75; // Raio em pixels
          const x = Math.cos(angleRad) * radius;
          const y = Math.sin(angleRad) * radius;

          return (
            <div
              key={opt.id || index}
              className="fivem-radial-item"
              style={{
                position: 'absolute',
                width: '46px',
                height: '46px',
                borderRadius: '50%',
                backgroundColor: 'var(--space-bg-card)',
                border: '1px solid var(--space-border-color)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
                left: `calc(50% - 23px + ${x}px)`,
                top: `calc(50% - 23px + ${y}px)`,
                zIndex: 5,
                color: 'var(--space-text-grey)',
                boxShadow: '0 4px 10px rgba(0,0,0,0.4)',
                transform: 'scale(1)'
              }}
              onMouseEnter={(e) => {
                setActiveLabel(opt.label);
                e.currentTarget.style.borderColor = 'var(--space-orange-primary)';
                e.currentTarget.style.color = 'var(--space-text-white)';
                e.currentTarget.style.boxShadow = '0 0 12px var(--space-orange-glow)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                setActiveLabel(centerLabel);
                e.currentTarget.style.borderColor = 'var(--space-border-color)';
                e.currentTarget.style.color = 'var(--space-text-grey)';
                e.currentTarget.style.boxShadow = '0 4px 10px rgba(0,0,0,0.4)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
              onClick={() => {
                if (onSelect) onSelect(opt);
                if (onClose) onClose();
              }}
            >
              <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                {typeof opt.icon === 'string' && opt.icon.length > 2 ? (
                  <span style={{ fontSize: '18px' }}>{opt.icon}</span>
                ) : (
                  opt.icon
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
