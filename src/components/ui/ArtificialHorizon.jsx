import React from 'react';

export default function ArtificialHorizon({
  roll = 0, // Inclinação lateral (graus)
  pitch = 0, // Inclinação vertical (de -50 a 50)
  size = 180,
  className = '',
  ...props
}) {
  const center = size / 2;
  const radius = size / 2 - 4;

  // Converter pitch de -50/50 em pixels de deslocamento vertical
  const maxOffset = radius * 0.75;
  const pitchOffset = (pitch / 50) * maxOffset;

  return (
    <div
      className={`artificial-horizon-container ${className}`}
      style={{
        display: 'inline-block',
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        borderRadius: '50%',
        border: '3px solid var(--space-border-color)',
        backgroundColor: '#050507',
        boxShadow: '0 0 15px rgba(0,0,0,0.6), inset 0 0 20px rgba(0,0,0,0.8)',
        overflow: 'hidden',
        boxSizing: 'border-box',
        ...props.style
      }}
      {...props}
    >
      {/* 1. Horizonte Rotacionável (Céu e Terra) */}
      <div
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          transform: `rotate(${-roll}deg)`,
          transformOrigin: '50% 50%',
          transition: 'transform 0.2s cubic-bezier(0.1, 0.8, 0.25, 1)'
        }}
      >
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
          {/* Fundo deslocado baseado no Pitch */}
          <g
            style={{
              transform: `translateY(${pitchOffset}px)`,
              transition: 'transform 0.2s cubic-bezier(0.1, 0.8, 0.25, 1)'
            }}
          >
            {/* Céu (Azul / Laranja Superior) */}
            <rect
              x="-50%"
              y="-100%"
              width="200%"
              height="200%"
              fill="rgba(59, 130, 246, 0.25)"
            />
            {/* Terra (Preto-Laranja / Fundo) */}
            <rect
              x="-50%"
              y="50%"
              width="200%"
              height="200%"
              fill="rgba(255, 122, 26, 0.12)"
              stroke="var(--space-orange-primary)"
              strokeWidth="2"
            />
            
            {/* Linha do Horizonte */}
            <line
              x1="-50%"
              y1="50%"
              x2="150%"
              y2="50%"
              stroke="var(--space-orange-primary)"
              strokeWidth="2.5"
            />
            
            {/* Graduações de Pitch (Escala) */}
            {[-20, -10, 10, 20].map((val) => {
              const y = center + (val / 50) * maxOffset;
              return (
                <g key={val}>
                  <line
                    x1={center - size * 0.15}
                    y1={y}
                    x2={center + size * 0.15}
                    y2={y}
                    stroke="var(--space-text-grey)"
                    strokeWidth="1.5"
                  />
                  <text
                    x={center + size * 0.18}
                    y={y + 4}
                    fill="var(--space-text-grey)"
                    fontSize="9px"
                    textAnchor="start"
                  >
                    {Math.abs(val)}
                  </text>
                  <text
                    x={center - size * 0.18}
                    y={y + 4}
                    fill="var(--space-text-grey)"
                    fontSize="9px"
                    textAnchor="end"
                  >
                    {Math.abs(val)}
                  </text>
                </g>
              );
            })}
          </g>
        </svg>
      </div>

      {/* 2. Sobreposição Estática (Aeronave / Indicador Central) */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${size} ${size}`}
        style={{ position: 'absolute', top: 0, left: 0, pointerEvents: 'none', zIndex: 5 }}
      >
        {/* Ponto e retículo fixo no centro */}
        <circle cx={center} cy={center} r="4" fill="var(--space-orange-primary)" />
        <line
          x1={center - size * 0.25}
          y1={center}
          x2={center - size * 0.08}
          y2={center}
          stroke="var(--space-orange-primary)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={center + size * 0.08}
          y1={center}
          x2={center + size * 0.25}
          y2={center}
          stroke="var(--space-orange-primary)"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        <line
          x1={center - size * 0.08}
          y1={center}
          x2={center - size * 0.08}
          y2={center + 10}
          stroke="var(--space-orange-primary)"
          strokeWidth="3"
        />
        <line
          x1={center + size * 0.08}
          y1={center}
          x2={center + size * 0.08}
          y2={center + 10}
          stroke="var(--space-orange-primary)"
          strokeWidth="3"
        />

        {/* Arco de Rotação Superior */}
        <path
          d={`M ${center - radius * 0.8} ${center - radius * 0.1} A ${radius * 0.8} ${radius * 0.8} 0 0 1 ${center + radius * 0.8} ${center - radius * 0.1}`}
          fill="none"
          stroke="var(--space-text-muted)"
          strokeWidth="1"
          strokeDasharray="4 4"
        />

        {/* Triângulo de Referência Superior */}
        <polygon
          points={`${center},${center - radius * 0.8} ${center - 5},${center - radius * 0.8 + 8} ${center + 5},${center - radius * 0.8 + 8}`}
          fill="var(--space-orange-primary)"
        />
      </svg>
    </div>
  );
}

export { ArtificialHorizon as MriArtificialHorizon };
