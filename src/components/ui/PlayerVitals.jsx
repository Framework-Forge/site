import React from 'react';
import ProgressCircle from './ProgressCircle';
import ProgressBar from './ProgressBar';

const iconDefinitions = {
  health: {
    viewBox: "0 0 512 512",
    path: <path d="M473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z" fill="currentColor" />
  },
  armor: {
    viewBox: "0 0 512 512",
    path: <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" fill="currentColor" />
  },
  hunger: {
    viewBox: "0 0 512 512",
    path: <path d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176v89.2z" fill="currentColor" />
  },
  thirst: {
    viewBox: "0 0 288 512",
    path: <path d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM61.75 48h164.5l7.17 80H54.58l7.17-80z" fill="currentColor" />
  },
  stress: {
    viewBox: "0 0 512 512",
    path: <path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" fill="currentColor" />
  },
  breath: {
    viewBox: "0 0 410 512",
    path: <path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" fill="currentColor" />
  },
  dead: {
    viewBox: "0 0 512 512",
    path: <path d="M12 2C7.03 2 3 6.03 3 11c0 3.31 1.9 6.17 4.7 7.5c.3.15.3.3.3.6v1.4c0 .83.67 1.5 1.5 1.5h5c.83 0 1.5-.67 1.5-1.5v-1.4c0-.3 0-.45.3-.6c2.8-1.33 4.7-4.19 4.7-7.5c0-4.97-4.03-9-9-9zm-3.5 9c-.83 0-1.5-.67-1.5-1.5S7.67 8 8.5 8s1.5.67 1.5 1.5S9.33 11 8.5 11zm7 0c-.83 0-1.5-.67-1.5-1.5S14.67 8 15.5 8s1.5.67 1.5 1.5S16.33 11 17.5 11zm-5.5 5h4v2h-4v-2z" fill="currentColor" />
  }
};

function VitalIcon({ type, color, size = 16 }) {
  const iconDef = iconDefinitions[type] || iconDefinitions.health;
  return (
    <svg
      viewBox={iconDef.viewBox}
      style={{ width: size, height: size, color, display: 'block', transition: 'color 0.25s' }}
    >
      {iconDef.path}
    </svg>
  );
}

export default function PlayerVitals({
  vitals, // Suporte à prop estruturada do MRI UI Kit
  size = 'compact', // mini | compact | full
  onAction,
  onIconClick,
  labels = {},
  disabledVitals = [],
  // Fallbacks de compatibilidade reversa
  health = 100,
  armor = 50,
  hunger = 80,
  thirst = 75,
  stress = 15,
  breath = 100,
  dead = false,
  layout,
  variant,
  disabled = [],
  className = '',
  style = {},
  ...props
}) {
  // 1. Extração Inteligente dos Valores das Vitais (MRI vs props individuais)
  const isMriData = vitals !== undefined;
  
  const currentHealth = isMriData ? (vitals?.health ?? 100) : health;
  const currentArmor = isMriData ? (vitals?.armor ?? 0) : armor;
  const currentHunger = isMriData ? (vitals?.metadata?.hunger ?? 100) : hunger;
  const currentThirst = isMriData ? (vitals?.metadata?.thirst ?? 100) : thirst;
  const currentStress = isMriData ? (vitals?.metadata?.stress ?? 0) : stress;
  const currentBreath = isMriData ? (vitals?.metadata?.breath ?? 100) : breath;
  
  // Detecção do estado de morte
  const isPlayerDead = isMriData 
    ? (vitals?.metadata?.isdead ?? false) 
    : (dead || currentHealth <= 0);

  // Mapeamento dos desabilitados
  const dList = Array.isArray(disabledVitals) 
    ? disabledVitals 
    : (Array.isArray(disabled) ? disabled : []);

  // 2. Mapeamento de Layout / Tamanho
  // Suporte a propriedades antigas layout e variant
  const finalSize = size || variant || (layout === 'horizontal' ? 'full' : 'compact');

  const showVitals = [
    { id: 'health', name: labels.health || 'Vida', value: isPlayerDead ? 0 : currentHealth, color: '#EF4444', gradient: 'linear-gradient(135deg, #EF4444, #F43F5E)' },
    { id: 'armor', name: labels.armor || 'Colete', value: isPlayerDead ? 0 : currentArmor, color: '#3B82F6', gradient: 'linear-gradient(135deg, #3B82F6, #1D4ED8)' },
    { id: 'hunger', name: labels.hunger || 'Fome', value: isPlayerDead ? 0 : currentHunger, color: '#FF7A1A', gradient: 'linear-gradient(135deg, #FF7A1A, #F97316)' },
    { id: 'thirst', name: labels.thirst || 'Sede', value: isPlayerDead ? 0 : currentThirst, color: '#06B6D4', gradient: 'linear-gradient(135deg, #06B6D4, #0891B2)' },
    { id: 'stress', name: labels.stress || 'Estresse', value: isPlayerDead ? 100 : currentStress, color: '#8B5CF6', gradient: 'linear-gradient(135deg, #8B5CF6, #7C3AED)' },
    { id: 'breath', name: labels.breath || 'Fôlego', value: isPlayerDead ? 0 : currentBreath, color: '#10B981', gradient: 'linear-gradient(135deg, #10B981, #059669)' }
  ].filter(v => !dList.includes(v.id));

  const ringDimensions = {
    mini:    { size: 28,  stroke: 2.5, icon: 11 },
    compact: { size: 40,  stroke: 3,   icon: 16 },
    full:    { size: 44,  stroke: 3.5, icon: 18 }
  }[finalSize] || { size: 40, stroke: 3, icon: 16 };

  const handleAction = (vital) => {
    if (onIconClick) onIconClick(vital.id, vital.name, vital.value);
    if (onAction) onAction(vital.id, vital.name, vital.value);
  };

  // ---- RENDER LAYOUT: FULL (Barras lineares horizontais premium) ----
  if (finalSize === 'full') {
    return (
      <div
        className={`player-vitals-full ${className}`}
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '12px',
          width: '100%',
          backgroundColor: 'rgba(18, 18, 22, 0.45)',
          backdropFilter: 'blur(10px)',
          border: '1px solid var(--space-border-color)',
          borderRadius: 'var(--space-radius-lg)',
          padding: '18px',
          boxSizing: 'border-box',
          opacity: isPlayerDead ? 0.75 : 1,
          transition: 'all 0.3s ease',
          boxShadow: '0 12px 30px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.02)',
          ...style
        }}
        {...props}
      >
        <style>{`
          @keyframes vital-pulse {
            0% { box-shadow: 0 0 4px rgba(255, 122, 26, 0.1); }
            50% { box-shadow: 0 0 14px rgba(255, 122, 26, 0.35); }
            100% { box-shadow: 0 0 4px rgba(255, 122, 26, 0.1); }
          }
        `}</style>
        {showVitals.map((vital) => {
          const isCritical = vital.id !== 'stress' ? vital.value <= 20 : vital.value >= 80;
          const displayColor = isPlayerDead 
            ? 'var(--space-text-muted)' 
            : (vital.id === 'health' && isPlayerDead ? '#EF4444' : vital.color);

          return (
            <button
              key={vital.id}
              type="button"
              onClick={() => handleAction(vital)}
              style={{
                display: 'grid',
                gridTemplateColumns: '28px 1fr',
                alignItems: 'center',
                gap: '12px',
                background: 'transparent',
                border: 0,
                padding: '4px 0',
                textAlign: 'left',
                width: '100%',
                cursor: (onAction || onIconClick) ? 'pointer' : 'default',
                outline: 'none',
                transition: 'all 0.2s ease'
              }}
            >
              <div
                style={{
                  width: '28px',
                  height: '28px',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(0,0,0,0.3)',
                  border: `1px solid ${isCritical && !isPlayerDead ? displayColor : 'var(--space-border-color)'}`,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  boxShadow: isCritical && !isPlayerDead ? `0 0 10px ${displayColor}30` : 'none',
                  animation: isCritical && !isPlayerDead ? 'vital-pulse 1.5s infinite ease-in-out' : 'none'
                }}
              >
                {vital.id === 'health' && isPlayerDead ? (
                  <VitalIcon type="dead" color="#EF4444" size={14} />
                ) : (
                  <VitalIcon type={vital.id} color={displayColor} size={14} />
                )}
              </div>
              <ProgressBar
                progress={vital.value}
                color={isPlayerDead ? '#373A40' : vital.color}
                label={vital.id === 'health' && isPlayerDead ? (labels.dead || 'FALECIDO') : vital.name}
                showValue
                size="sm"
              />
            </button>
          );
        })}
      </div>
    );
  }

  // ---- RENDER LAYOUT: CIRCULAR (mini ou compact com design circular neon) ----
  const isMini = finalSize === 'mini';

  return (
    <div
      className={`player-vitals-circular ${finalSize} ${isPlayerDead ? 'dead' : ''} ${className}`}
      style={{
        display: 'inline-flex',
        gap: isMini ? '10px' : '14px',
        alignItems: 'center',
        justifyContent: 'center',
        padding: isMini ? '8px 12px' : '14px 18px',
        backgroundColor: 'rgba(10, 10, 12, 0.8)',
        backdropFilter: 'blur(12px)',
        border: '1px solid var(--space-border-color)',
        borderRadius: isMini ? '24px' : 'var(--space-radius-xl)',
        width: 'fit-content',
        boxSizing: 'border-box',
        boxShadow: '0 16px 40px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.02)',
        transition: 'all 0.3s ease',
        ...style
      }}
      {...props}
    >
      <style>{`
        @keyframes vital-pulse-critical {
          0% { transform: scale(1); filter: drop-shadow(0 0 2px var(--pulse-color)); }
          50% { transform: scale(1.08); filter: drop-shadow(0 0 10px var(--pulse-color)); }
          100% { transform: scale(1); filter: drop-shadow(0 0 2px var(--pulse-color)); }
        }
        @keyframes vital-pulse-dead {
          0% { opacity: 0.65; transform: scale(0.98); }
          50% { opacity: 1; transform: scale(1.04); }
          100% { opacity: 0.65; transform: scale(0.98); }
        }
      `}</style>
      {showVitals.map((vital) => {
        const isCritical = vital.id !== 'stress' ? vital.value <= 20 : vital.value >= 80;
        const displayColor = isPlayerDead 
          ? (vital.id === 'health' ? '#EF4444' : 'var(--space-text-muted)') 
          : vital.color;

        // Se está morto ou é vital crítica, temos animações especiais
        const isVitalDead = isPlayerDead && vital.id === 'health';
        const pulseAnimation = isCritical && !isPlayerDead
          ? 'vital-pulse-critical 1.5s infinite ease-in-out'
          : (isVitalDead ? 'vital-pulse-dead 2s infinite ease-in-out' : 'none');

        return (
          <button
            key={vital.id}
            type="button"
            title={`${vital.name}: ${Math.round(vital.value)}%`}
            onClick={() => handleAction(vital)}
            style={{
              position: 'relative',
              width: `${ringDimensions.size}px`,
              minWidth: `${ringDimensions.size}px`,
              height: `${ringDimensions.size + (isMini ? 0 : 16)}px`,
              display: 'inline-flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'flex-start',
              gap: '4px',
              background: 'transparent',
              border: 0,
              padding: 0,
              cursor: (onAction || onIconClick) ? 'pointer' : 'default',
              outline: 'none',
              animation: pulseAnimation,
              '--pulse-color': displayColor,
              opacity: isPlayerDead && vital.id !== 'health' ? 0.35 : 1,
              transition: 'opacity 0.3s ease'
            }}
          >
            {/* Círculo com Progressivo */}
            <span style={{ position: 'relative', width: ringDimensions.size, height: ringDimensions.size, display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}>
              <ProgressCircle
                progress={vital.value}
                size={ringDimensions.size}
                strokeWidth={ringDimensions.stroke}
                color={isPlayerDead ? (vital.id === 'health' ? '#EF4444' : '#2D2D35') : vital.color}
                style={{ position: 'absolute', top: 0, left: 0 }}
              />
              <span
                style={{
                  width: ringDimensions.size * 0.58,
                  height: ringDimensions.size * 0.58,
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  backgroundColor: 'rgba(5, 5, 8, 0.85)',
                  border: `1px solid ${isCritical && !isPlayerDead ? displayColor + '50' : 'rgba(255,255,255,0.04)'}`,
                  zIndex: 2,
                  boxShadow: isCritical && !isPlayerDead ? `inset 0 0 8px ${displayColor}18, 0 0 6px ${displayColor}25` : 'none',
                  transition: 'all 0.25s ease'
                }}
              >
                {vital.id === 'health' && isPlayerDead ? (
                  <VitalIcon type="dead" color="#EF4444" size={ringDimensions.icon} />
                ) : (
                  <VitalIcon type={vital.id} color={displayColor} size={ringDimensions.icon} />
                )}
              </span>
            </span>

            {/* Label de Porcentagem (Apenas em compact/full) */}
            {!isMini && (
              <span
                style={{
                  fontSize: '9.5px',
                  lineHeight: 1,
                  color: isPlayerDead && vital.id !== 'health' ? 'var(--space-text-muted)' : 'var(--space-text-white)',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: '700',
                  letterSpacing: '-0.3px',
                  transition: 'color 0.25s'
                }}
              >
                {vital.id === 'health' && isPlayerDead ? 'RIP' : `${Math.round(vital.value)}%`}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
}