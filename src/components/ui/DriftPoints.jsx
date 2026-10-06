import React, { useEffect, useRef, useState } from 'react';

export default function DriftPoints({
  points = 0,
  multiplier = 1,
  active = false,     // Deriva em curso
  combo = 0,          // Número de combos encadeados
  className = '',
  ...props
}) {
  const [displayPoints, setDisplayPoints] = useState(points);
  const [animating, setAnimating] = useState(false);
  const [flyups, setFlyups] = useState([]);
  const prevPoints = useRef(points);
  const flyupIdRef = useRef(0);

  // Animar contador ao ganhar pontos
  useEffect(() => {
    if (points !== prevPoints.current) {
      const diff = points - prevPoints.current;
      if (diff > 0) {
        setAnimating(true);
        // Adiciona flyup
        const id = ++flyupIdRef.current;
        setFlyups(f => [...f, { id, value: `+${diff.toLocaleString()}`, x: Math.random() * 40 - 20 }]);
        setTimeout(() => setFlyups(f => f.filter(fu => fu.id !== id)), 1200);
        setTimeout(() => setAnimating(false), 300);
      }
      // Anima o número subindo/descendo suavemente
      const start = prevPoints.current;
      const end = points;
      const duration = 400;
      const startTime = performance.now();
      const animate = (now) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        setDisplayPoints(Math.round(start + (end - start) * ease));
        if (progress < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
      prevPoints.current = points;
    }
  }, [points]);

  const isHighCombo = combo >= 3;

  return (
    <div
      className={`drift-points ${className}`}
      style={{
        position: 'relative',
        display: 'inline-flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 4,
        userSelect: 'none',
        ...props.style
      }}
      {...props}
    >
      {/* Fly-up de pontos */}
      {flyups.map(fu => (
        <div key={fu.id} style={{
          position: 'absolute',
          top: -10,
          left: `calc(50% + ${fu.x}px)`,
          transform: 'translateX(-50%)',
          fontFamily: 'var(--font-heading)',
          fontSize: 13,
          fontWeight: 800,
          color: '#FFD45C',
          textShadow: '0 0 8px rgba(255,212,92,0.9)',
          animation: 'drift-flyup 1.2s cubic-bezier(0.1,0.8,0.2,1) forwards',
          pointerEvents: 'none',
          zIndex: 10,
          whiteSpace: 'nowrap',
        }}>{fu.value}</div>
      ))}

      {/* Label DRIFT */}
      <div style={{
        fontFamily: 'var(--font-mono)',
        fontSize: 9,
        fontWeight: 700,
        letterSpacing: '2px',
        color: active ? '#FF9500' : 'var(--space-text-muted)',
        textTransform: 'uppercase',
        transition: 'color 0.3s',
      }}>
        DRIFT
      </div>

      {/* Pontos principais */}
      <div style={{
        fontFamily: 'var(--font-heading)',
        fontSize: 36,
        fontWeight: 900,
        lineHeight: 1,
        color: active ? '#FFD45C' : 'var(--space-text-white)',
        textShadow: active ? '0 0 20px rgba(255,212,92,0.8), 0 0 40px rgba(255,149,0,0.4)' : 'none',
        transform: animating ? 'scale(1.12)' : 'scale(1)',
        transition: 'transform 0.15s cubic-bezier(0.1,0.8,0.25,1), color 0.3s, text-shadow 0.3s',
      }}>
        {displayPoints.toLocaleString()}
      </div>

      {/* Multiplier e Combo */}
      <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
        {multiplier > 1 && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            fontWeight: 700,
            color: '#FF9500',
            textShadow: '0 0 8px rgba(255,149,0,0.7)',
            letterSpacing: '0.5px',
          }}>
            ×{multiplier}
          </span>
        )}
        {combo > 1 && (
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 10,
            fontWeight: 700,
            color: isHighCombo ? '#FF3B4F' : 'var(--space-text-grey)',
            textShadow: isHighCombo ? '0 0 8px rgba(255,59,79,0.8)' : 'none',
            letterSpacing: '0.5px',
          }}>
            {combo}× COMBO
          </span>
        )}
      </div>

      {/* Barra de decay do combo */}
      <style>{`
        @keyframes drift-flyup {
          0%   { opacity: 1; transform: translateX(-50%) translateY(0); }
          100% { opacity: 0; transform: translateX(-50%) translateY(-32px); }
        }
      `}</style>
    </div>
  );
}
