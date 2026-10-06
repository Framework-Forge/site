import React from 'react';

export default function Clinometer({
  size = 180,
  roll = 0, // Inclinação lateral (graus)
  pitch = 0, // Inclinação frontal (mantido para compatibilidade)
  className = '',
  ...props
}) {
  const center = size / 2;
  const radius = size * 0.42;

  // Clampar inclinação lateral entre -45 e 45 graus
  const clampedRoll = Math.min(Math.max(roll, -45), 45);

  // O ângulo de exibição da bolha no arco. 
  // No topo (12 o'clock / -90 graus) é o ponto de equilíbrio 0.
  const bubbleAngleDeg = -90 + clampedRoll;
  const bubbleAngleRad = (bubbleAngleDeg * Math.PI) / 180;

  // Posição X, Y da bolha no arco circular
  const bubbleX = center + Math.cos(bubbleAngleRad) * radius;
  const bubbleY = center + Math.sin(bubbleAngleRad) * radius;

  // Ângulo inicial e final do arco indicador (-135 graus a -45 graus)
  const arcStartRad = (-135 * Math.PI) / 180;
  const arcEndRad = (-45 * Math.PI) / 180;

  const arcStartX = center + Math.cos(arcStartRad) * radius;
  const arcStartY = center + Math.sin(arcStartRad) * radius;
  const arcEndX = center + Math.cos(arcEndRad) * radius;
  const arcEndY = center + Math.sin(arcEndRad) * radius;

  // Path SVG para desenhar o tubo curvo
  const levelPath = `M ${arcStartX} ${arcStartY} A ${radius} ${radius} 0 0 1 ${arcEndX} ${arcEndY}`;

  const filterId = `clinometer-glow-${size}`;

  return (
    <div
      className={`clinometer-container ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        backgroundColor: 'var(--space-bg-darker)',
        border: '1px solid var(--space-border-color)',
        borderRadius: '50%',
        padding: '8px',
        boxSizing: 'border-box',
        boxShadow: '0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
        ...props.style
      }}
      {...props}
    >
      <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`} style={{ overflow: 'visible' }}>
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Tubo de Fundo do Nível (Cinza) */}
        <path
          d={levelPath}
          fill="none"
          stroke="var(--space-bg-darkest)"
          strokeWidth="14"
          strokeLinecap="round"
        />

        {/* Divisórias de Escala de Graus */}
        {[-30, -20, -10, 0, 10, 20, 30].map((deg) => {
          const angleRad = ((-90 + deg) * Math.PI) / 180;
          const tickLen = deg === 0 ? 10 : 6;
          const startR = radius + 7;
          const endR = startR - tickLen;
          const x1 = center + Math.cos(angleRad) * startR;
          const y1 = center + Math.sin(angleRad) * startR;
          const x2 = center + Math.cos(angleRad) * endR;
          const y2 = center + Math.sin(angleRad) * endR;

          return (
            <line
              key={deg}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke={deg === 0 ? 'var(--space-orange-primary)' : 'rgba(255,255,255,0.2)'}
              strokeWidth={deg === 0 ? '2' : '1.2'}
            />
          );
        })}

        {/* Rótulo PORT (Porto - Esquerda - Vermelho) */}
        <text
          x={center - radius * 0.8}
          y={center - 22}
          fill="#EF4444"
          fontSize="9.5px"
          fontWeight="bold"
          textAnchor="middle"
          opacity={clampedRoll < 0 ? 1 : 0.4}
          style={{ transition: 'opacity 0.25s' }}
        >
          PORT
        </text>

        {/* Rótulo STBD (Estibordo - Direita - Verde/Ciano) */}
        <text
          x={center + radius * 0.8}
          y={center - 22}
          fill="#10B981"
          fontSize="9.5px"
          fontWeight="bold"
          textAnchor="middle"
          opacity={clampedRoll > 0 ? 1 : 0.4}
          style={{ transition: 'opacity 0.25s' }}
        >
          STBD
        </text>

        {/* Tubo de Vidro de Nível Frontal (Vidro Ciano) */}
        <path
          d={levelPath}
          fill="none"
          stroke="rgba(6, 182, 212, 0.15)"
          strokeWidth="10"
          strokeLinecap="round"
        />

        {/* Bolha Deslizante (Bubble Level Indicator) */}
        <circle
          cx={bubbleX}
          cy={bubbleY}
          r="6"
          fill="var(--space-orange-primary)"
          filter={`url(#${filterId})`}
          style={{ transition: 'cx 0.25s cubic-bezier(0.1, 0.8, 0.25, 1), cy 0.25s cubic-bezier(0.1, 0.8, 0.25, 1)' }}
        />
      </svg>

      {/* Leitura Central de Graus */}
      <div
        style={{
          position: 'absolute',
          top: '58%',
          transform: 'translateY(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          pointerEvents: 'none'
        }}
      >
        <span
          style={{
            fontFamily: 'var(--font-heading)',
            fontSize: `${size * 0.16}px`,
            fontWeight: '800',
            color: 'var(--space-text-white)',
            lineHeight: 1
          }}
        >
          {Math.abs(Math.round(clampedRoll))}°
        </span>
        <span
          style={{
            fontSize: '8px',
            fontWeight: '700',
            color: clampedRoll === 0 ? 'var(--space-text-grey)' : (clampedRoll < 0 ? '#EF4444' : '#10B981'),
            letterSpacing: '0.5px',
            marginTop: '4px',
            textTransform: 'uppercase'
          }}
        >
          {clampedRoll === 0 ? 'LEVEL' : (clampedRoll < 0 ? 'PORT (LEFT)' : 'STBD (RIGHT)')}
        </span>
      </div>
    </div>
  );
}

// Alias para exportação compatível com MRI
export { Clinometer as MriClinometer };
