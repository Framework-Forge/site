import React, { useEffect, useRef } from 'react';

export default function NitroBar({
  value = 0,        // 0-100
  active = false,   // Se o nitro está sendo usado agora
  color = '#FF3B4F',
  label = 'NOS',
  showFlame = true,
  size = 'md',      // 'sm' | 'md' | 'lg'
  className = '',
  ...props
}) {
  const canvasRef = useRef(null);
  const animRef = useRef(null);
  const particlesRef = useRef([]);

  const heights = { sm: 8, md: 12, lg: 18 };
  const h = heights[size] || heights.md;
  const clampedValue = Math.min(Math.max(Number(value) || 0, 0), 100);
  const isCritical = clampedValue <= 20;

  // Cores
  const fillColor = isCritical ? '#FF3B4F' : active ? '#FF9500' : color;
  const glowColor = isCritical ? 'rgba(255,59,79,0.6)' : active ? 'rgba(255,149,0,0.6)' : `${color}99`;

  // Animação de chama via canvas
  useEffect(() => {
    if (!showFlame || !active) {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      return;
    }
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    particlesRef.current = [];

    const spawnParticle = () => {
      const x = (clampedValue / 100) * canvas.width;
      particlesRef.current.push({
        x: x + (Math.random() - 0.5) * 6,
        y: canvas.height / 2,
        vx: (Math.random() - 0.5) * 1.5,
        vy: -(Math.random() * 1.8 + 0.8),
        life: 1,
        size: Math.random() * 4 + 2,
      });
    };

    const tick = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      if (Math.random() < 0.4) spawnParticle();

      particlesRef.current = particlesRef.current.filter(p => p.life > 0);
      particlesRef.current.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        p.life -= 0.045;
        p.vy -= 0.04;
        const alpha = Math.max(0, p.life);
        const r = Math.max(0.1, p.size * alpha);
        const grd = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, r);
        grd.addColorStop(0, `rgba(255, 220, 80, ${alpha})`);
        grd.addColorStop(0.5, `rgba(255, 100, 20, ${alpha * 0.7})`);
        grd.addColorStop(1, `rgba(255, 40, 0, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, r, 0, Math.PI * 2);
        ctx.fillStyle = grd;
        ctx.fill();
      });
      animRef.current = requestAnimationFrame(tick);
    };

    animRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(animRef.current);
  }, [active, clampedValue, showFlame]);

  return (
    <div
      className={`nitro-bar ${className}`}
      style={{ display: 'flex', flexDirection: 'column', gap: 4, width: '100%', ...props.style }}
      {...props}
    >
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          fontWeight: 700,
          letterSpacing: '1.5px',
          textTransform: 'uppercase',
          color: active ? fillColor : 'var(--space-text-grey)',
          textShadow: active ? `0 0 8px ${fillColor}` : 'none',
          transition: 'all 0.2s',
        }}>
          {active ? '⚡ ' : ''}{label}
        </span>
        <span style={{
          fontFamily: 'var(--font-mono)',
          fontSize: 10,
          fontWeight: 700,
          color: isCritical ? '#FF3B4F' : 'var(--space-text-grey)',
        }}>
          {Math.round(clampedValue)}%
        </span>
      </div>

      {/* Track */}
      <div style={{ position: 'relative', height: h + 8, display: 'flex', alignItems: 'center' }}>
        {/* Barra de fundo */}
        <div style={{
          position: 'relative',
          height: h,
          width: '100%',
          backgroundColor: 'rgba(255,255,255,0.04)',
          borderRadius: h,
          overflow: 'hidden',
          border: `1px solid ${active ? fillColor + '40' : 'rgba(255,255,255,0.06)'}`,
          boxShadow: active ? `0 0 12px ${glowColor}` : 'none',
          transition: 'all 0.3s',
        }}>
          {/* Segmentos decorativos */}
          {[25, 50, 75].map(pct => (
            <div key={pct} style={{
              position: 'absolute',
              left: `${pct}%`,
              top: 0,
              bottom: 0,
              width: 1,
              backgroundColor: 'rgba(0,0,0,0.3)',
              zIndex: 2,
            }} />
          ))}
          {/* Fill */}
          <div style={{
            height: '100%',
            width: `${clampedValue}%`,
            background: active
              ? `linear-gradient(90deg, ${color}, #FF9500, #FFD45C)`
              : isCritical
                ? 'linear-gradient(90deg, #FF3B4F, #FF6B35)'
                : `linear-gradient(90deg, ${color}CC, ${color})`,
            borderRadius: h,
            boxShadow: active ? `0 0 16px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.3)` : `0 0 8px ${glowColor}`,
            transition: 'width 0.15s linear, box-shadow 0.3s',
            position: 'relative',
          }}>
            {/* Brilho interno */}
            <div style={{
              position: 'absolute',
              top: 1, left: 4, right: 4,
              height: Math.max(1, h / 3),
              background: 'rgba(255,255,255,0.25)',
              borderRadius: h,
            }} />
          </div>
        </div>

        {/* Canvas de chamas */}
        {showFlame && (
          <canvas
            ref={canvasRef}
            width={300}
            height={32}
            style={{
              position: 'absolute',
              top: '50%',
              left: 0,
              width: '100%',
              height: 32,
              transform: 'translateY(-50%)',
              pointerEvents: 'none',
              opacity: active ? 1 : 0,
              transition: 'opacity 0.3s',
            }}
          />
        )}
      </div>
    </div>
  );
}
