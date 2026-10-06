import React from 'react';

export default function AnalogGauge({
  size = 180,
  value = 0,
  minValue = 0,
  maxValue = 240,
  // Para retrocompatibilidade
  min = 0,
  max = 240,
  arcLength = 75, // Extensão do arco como % do círculo completo (ex: 75 = 270 graus)
  rotation = 135, // Rotação inicial em graus a partir das 12h
  majorTickInterval = 20,
  minorTickCount = 4,
  ringSize = 8,
  color = 'var(--space-orange-primary)',
  outlineColor = 'rgba(255, 255, 255, 0.05)',
  outlineOpacity = 1,
  needleStyle = 'needle', // 'needle' | 'digital' | 'arc'
  showValue = true,
  unit = 'KM/H',
  label = '',
  odometer = '',
  className = '',
  ...props
}) {
  const finalMin = minValue !== undefined ? minValue : min;
  const finalMax = maxValue !== undefined ? maxValue : max;
  const clampedValue = Math.min(Math.max(value, finalMin), finalMax);
  const percentage = (clampedValue - finalMin) / (finalMax - finalMin || 1);

  // Converter arcLength (%) para graus
  const totalArcDeg = 360 * (arcLength / 100);
  
  // O ângulo inicial real em graus (Vite/SVG inicia em 3 o'clock, então corrigimos com -90)
  const startAngle = rotation - 90;
  const endAngle = startAngle + totalArcDeg;
  const currentAngle = startAngle + percentage * totalArcDeg;

  const center = size / 2;
  const radius = center - ringSize * 1.5;
  const circumference = 2 * Math.PI * radius;
  
  // Desenhar arcos que preenchem apenas arcLength% do círculo
  const totalArcLength = (totalArcDeg / 360) * circumference;
  const strokeDashoffset = totalArcLength - percentage * totalArcLength;

  // Gerar ticks major e minor
  const ticks = [];
  const range = finalMax - finalMin;
  const majorTicksCount = Math.floor(range / majorTickInterval);
  
  for (let i = 0; i <= majorTicksCount; i++) {
    const val = finalMin + i * majorTickInterval;
    const valPct = (val - finalMin) / range;
    const angleDeg = startAngle + valPct * totalArcDeg;
    ticks.push({ val, angleDeg, isMajor: true });

    if (i < majorTicksCount && minorTickCount > 0) {
      for (let j = 1; j <= minorTickCount; j++) {
        const minorVal = val + j * (majorTickInterval / (minorTickCount + 1));
        if (minorVal < finalMax) {
          const minorPct = (minorVal - finalMin) / range;
          const minorAngleDeg = startAngle + minorPct * totalArcDeg;
          ticks.push({ val: minorVal, angleDeg: minorAngleDeg, isMajor: false });
        }
      }
    }
  }

  const filterId = `gauge-glow-${size}`;

  return (
    <div
      className={`analog-gauge-container ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        position: 'relative',
        width: `${size}px`,
        height: `${size}px`,
        ...props.style
      }}
      {...props}
    >
      <svg width={size} height={size} style={{ overflow: 'visible' }}>
        <defs>
          <filter id={filterId} x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="3.5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Arco de Fundo (Outline) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={outlineColor}
          strokeWidth={ringSize}
          strokeOpacity={outlineOpacity}
          fill="none"
          strokeDasharray={`${totalArcLength} ${circumference}`}
          strokeLinecap="round"
          style={{
            transform: `rotate(${startAngle}deg)`,
            transformOrigin: `${center}px ${center}px`
          }}
        />

        {/* Arco Ativo (Progresso) */}
        <circle
          cx={center}
          cy={center}
          r={radius}
          stroke={color}
          strokeWidth={needleStyle === 'arc' ? ringSize * 1.5 : ringSize}
          fill="none"
          strokeDasharray={`${totalArcLength} ${circumference}`}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{
            transform: `rotate(${startAngle}deg)`,
            transformOrigin: `${center}px ${center}px`,
            transition: 'stroke-dashoffset 0.3s ease'
          }}
        />

        {/* Linhas de Marcação (Ticks) */}
        {ticks.map((tick, idx) => {
          const angleRad = (tick.angleDeg * Math.PI) / 180;
          const tickLen = tick.isMajor ? ringSize * 1.5 : ringSize * 0.8;
          const startR = radius - ringSize * 0.8;
          const endR = startR - tickLen;
          
          const x1 = center + Math.cos(angleRad) * startR;
          const y1 = center + Math.sin(angleRad) * startR;
          const x2 = center + Math.cos(angleRad) * endR;
          const y2 = center + Math.sin(angleRad) * endR;

          return (
            <g key={idx}>
              <line
                x1={x1}
                y1={y1}
                x2={x2}
                y2={y2}
                stroke={tick.isMajor ? 'rgba(255,255,255,0.45)' : 'rgba(255,255,255,0.18)'}
                strokeWidth={tick.isMajor ? '1.5' : '1'}
              />
              {/* Valores numéricos nos ticks maiores (Major Ticks) */}
              {tick.isMajor && size > 120 && (
                <text
                  x={center + Math.cos(angleRad) * (endR - 8)}
                  y={center + Math.sin(angleRad) * (endR - 8) + 3}
                  fill="rgba(255,255,255,0.3)"
                  fontSize="8.5px"
                  fontFamily="var(--font-mono)"
                  fontWeight="bold"
                  textAnchor="middle"
                >
                  {Math.round(tick.val)}
                </text>
              )}
            </g>
          );
        })}

        {/* Ponteiro da Agulha (Apenas se needleStyle for 'needle') */}
        {needleStyle === 'needle' && (
          <g
            style={{
              transform: `rotate(${currentAngle + 90}deg)`,
              transformOrigin: `${center}px ${center}px`,
              transition: 'transform 0.25s cubic-bezier(0.1, 0.8, 0.25, 1)'
            }}
          >
            {/* Haste da agulha em neon brilhante */}
            <line
              x1={center}
              y1={center}
              x2={center}
              y2={center - radius * 0.9}
              stroke={color}
              strokeWidth="2.5"
              strokeLinecap="round"
              filter={`url(#${filterId})`}
            />
          </g>
        )}

        {/* Miolo Central (Needle Style) — apenas disco de fundo, sem bola colorida */}
        {needleStyle === 'needle' && (
          <circle
            cx={center}
            cy={center}
            r={ringSize * 1.5}
            fill="var(--space-bg-darkest)"
            stroke="rgba(255,255,255,0.08)"
            strokeWidth="1.5"
          />
        )}
      </svg>

      {/* Exibição Digital do Valor — centralizada verticalmente */}
      {showValue && (
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: odometer
              ? 'translate(-50%, -60%)'
              : 'translate(-50%, -50%)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            pointerEvents: 'none',
            zIndex: 2
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: `${size * 0.22}px`,
              fontWeight: '800',
              color: 'var(--space-text-white)',
              lineHeight: 1
            }}
          >
            {Math.round(clampedValue)}
          </span>
          <span
            style={{
              fontSize: `${size * 0.075}px`,
              fontWeight: '700',
              color: 'var(--space-text-grey)',
              letterSpacing: '1px',
              marginTop: '4px',
              textTransform: 'uppercase'
            }}
          >
            {unit || label}
          </span>
        </div>
      )}

      {/* Display do Hodômetro LCD (Odometer) */}
      {odometer && (
        <div
          style={{
            position: 'absolute',
            bottom: `${size * 0.1}px`,
            backgroundColor: 'rgba(0,0,0,0.8)',
            border: '1px solid rgba(255,255,255,0.06)',
            borderRadius: '3px',
            padding: '2px 6px',
            boxShadow: 'inset 0 1px 3px rgba(0,0,0,0.9)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none',
            zIndex: 2
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: `${size * 0.08}px`,
              fontWeight: '700',
              color: color,
              letterSpacing: '1.5px',
              opacity: 0.85,
              textShadow: `0 0 4px ${color}50`
            }}
          >
            {odometer.toString().padStart(6, '0')}
          </span>
        </div>
      )}
    </div>
  );
}

// Alias para exportação compatível com MRI
export { AnalogGauge as MriAnalogGauge };
