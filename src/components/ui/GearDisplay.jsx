import React, { useEffect, useRef, useState } from 'react';

const GEARS = ['R', 'N', '1', '2', '3', '4', '5', '6', '7', '8'];

export default function GearDisplay({
  gear = 'N',       // 'R' | 'N' | '1'-'8'
  rpm = 0,          // 0-100, para colorir conforme zona de RPM
  size = 'md',      // 'sm' | 'md' | 'lg' | 'xl'
  className = '',
  ...props
}) {
  const [prevGear, setPrevGear] = useState(gear);
  const [transitioning, setTransitioning] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    if (gear !== prevGear) {
      setTransitioning(true);
      clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => {
        setPrevGear(gear);
        setTransitioning(false);
      }, 120);
    }
  }, [gear, prevGear]);

  const fontSizes = { sm: 28, md: 48, lg: 72, xl: 96 };
  const containerSizes = { sm: 48, md: 72, lg: 104, xl: 138 };
  const fs = fontSizes[size] || fontSizes.md;
  const cs = containerSizes[size] || containerSizes.md;

  const isReverse = gear === 'R';
  const isNeutral = gear === 'N';
  const rpmZone = rpm > 85 ? 'redline' : rpm > 65 ? 'high' : rpm > 35 ? 'mid' : 'low';

  const gearColor = isReverse
    ? '#FF3B4F'
    : isNeutral
      ? 'rgba(245,247,250,0.35)'
      : rpmZone === 'redline'
        ? '#FF3B4F'
        : rpmZone === 'high'
          ? '#FF9500'
          : 'var(--space-text-white)';

  const glowColor = isReverse
    ? 'rgba(255,59,79,0.7)'
    : rpmZone === 'redline'
      ? 'rgba(255,59,79,0.7)'
      : rpmZone === 'high'
        ? 'rgba(255,149,0,0.6)'
        : 'none';

  return (
    <div
      className={`gear-display ${className}`}
      style={{
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: cs,
        height: cs,
        position: 'relative',
        ...props.style
      }}
      {...props}
    >
      {/* Fundo circular */}
      <div style={{
        position: 'absolute',
        inset: 0,
        borderRadius: '50%',
        background: 'radial-gradient(circle at 50% 40%, rgba(255,255,255,0.04), transparent 70%), var(--space-bg-darker)',
        border: `1px solid ${gearColor}30`,
        boxShadow: glowColor !== 'none' ? `0 0 20px ${glowColor}, inset 0 0 20px rgba(0,0,0,0.5)` : 'inset 0 0 20px rgba(0,0,0,0.5)',
        transition: 'border-color 0.2s, box-shadow 0.2s',
      }} />

      {/* Label GEAR */}
      <span style={{
        position: 'absolute',
        top: cs * 0.16,
        fontFamily: 'var(--font-mono)',
        fontSize: cs * 0.1,
        fontWeight: 700,
        letterSpacing: '1.5px',
        color: 'var(--space-text-muted)',
        textTransform: 'uppercase',
        zIndex: 2,
      }}>
        GEAR
      </span>

      {/* Marcha atual */}
      <span style={{
        fontFamily: 'var(--font-heading)',
        fontSize: fs,
        fontWeight: 900,
        lineHeight: 1,
        color: gearColor,
        textShadow: glowColor !== 'none' ? `0 0 20px ${glowColor}` : 'none',
        transform: transitioning ? 'scale(0.72) translateY(6px)' : 'scale(1) translateY(0)',
        opacity: transitioning ? 0 : 1,
        transition: 'transform 0.12s cubic-bezier(0.4,0,0.2,1), opacity 0.12s, color 0.2s, text-shadow 0.2s',
        zIndex: 2,
        userSelect: 'none',
      }}>
        {gear}
      </span>

      {/* Indicador de RPM zona (pontinhos embaixo) */}
      <div style={{
        position: 'absolute',
        bottom: cs * 0.14,
        display: 'flex',
        gap: 3,
        zIndex: 2,
      }}>
        {['low', 'mid', 'high', 'redline'].map((zone, i) => {
          const zones = ['low', 'mid', 'high', 'redline'];
          const zoneColors = { low: '#10B981', mid: '#FFD45C', high: '#FF9500', redline: '#FF3B4F' };
          const isActive = zones.indexOf(rpmZone) >= i;
          return (
            <div key={zone} style={{
              width: cs * 0.07,
              height: cs * 0.04,
              borderRadius: 2,
              backgroundColor: isActive ? zoneColors[zone] : 'rgba(255,255,255,0.08)',
              boxShadow: isActive ? `0 0 4px ${zoneColors[zone]}` : 'none',
              transition: 'all 0.2s',
            }} />
          );
        })}
      </div>
    </div>
  );
}
