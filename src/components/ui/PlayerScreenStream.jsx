import React from 'react';
import StatusBadge from './StatusBadge';

export default function PlayerScreenStream({
  playerName = 'Spacer Dev',
  status = 'online',
  fps = 60,
  ping = 24,
  className = '',
  ...props
}) {
  const isOnline = status === 'online';

  return (
    <div
      className={`player-stream-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'var(--space-bg-card)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        overflow: 'hidden',
        width: '100%',
        maxWidth: '360px',
        ...props.style
      }}
      {...props}
    >
      {/* Tela de Vídeo Simulada */}
      <div
        style={{
          width: '100%',
          paddingBottom: '56.25%', // Ratio 16:9
          backgroundColor: '#050507',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden'
        }}
      >
        {/* Linhas de Escaneamento da Câmera */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 4px, 6px 100%',
            pointerEvents: 'none',
            zIndex: 3
          }}
        />

        {isOnline ? (
          <>
            {/* Animação simulando monitor de vídeo NUI */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                backgroundImage: 'radial-gradient(circle, rgba(255,122,26,0.08) 0%, rgba(0,0,0,0) 80%)',
                animation: 'stream-pulse 4s infinite ease-in-out'
              }}
            />
            {/* HUD de Monitoramento */}
            <div style={{ position: 'absolute', top: '10px', left: '10px', display: 'flex', gap: '6px', zIndex: 5 }}>
              <span style={{ fontSize: '9px', fontWeight: 'bold', backgroundColor: 'rgba(239, 68, 68, 0.8)', padding: '1px 5px', borderRadius: '3px', color: 'white', textTransform: 'uppercase', animation: 'rec-pulse 1.5s infinite' }}>
                ● REC
              </span>
              <span style={{ fontSize: '9px', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1px 5px', borderRadius: '3px', color: 'var(--space-text-grey)' }}>
                FPS: {fps}
              </span>
            </div>
            
            <div style={{ position: 'absolute', top: '10px', right: '10px', display: 'flex', gap: '6px', zIndex: 5 }}>
              <span style={{ fontSize: '9px', fontWeight: 'bold', backgroundColor: 'rgba(0, 0, 0, 0.6)', padding: '1px 5px', borderRadius: '3px', color: 'var(--color-success)' }}>
                PING: {ping}ms
              </span>
            </div>

            {/* Ícone de Câmera/Monitoramento no centro */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', color: 'rgba(255,255,255,0.06)', zIndex: 2 }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
                <circle cx="12" cy="13" r="4" />
              </svg>
            </div>
          </>
        ) : (
          <div style={{ position: 'absolute', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px', zIndex: 5 }}>
            <span style={{ color: 'var(--space-text-muted)', fontSize: '24px' }}>🚫</span>
            <span style={{ color: 'var(--space-text-muted)', fontSize: '11px', fontWeight: '600', textTransform: 'uppercase' }}>Sem Sinal / Offline</span>
          </div>
        )}
      </div>

      {/* Info do Jogador */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 16px', borderTop: '1px solid var(--space-border-color)' }}>
        <span style={{ fontFamily: 'var(--font-heading)', fontSize: '13px', fontWeight: '700', color: 'var(--space-text-white)' }}>
          {playerName}
        </span>
        <StatusBadge status={isOnline ? 'online' : 'offline'} label={isOnline ? 'MONITORANDO' : 'DESCONECTADO'} />
      </div>

      <style>{`
        @keyframes stream-pulse {
          0% { opacity: 0.6; }
          50% { opacity: 0.9; }
          100% { opacity: 0.6; }
        }
        @keyframes rec-pulse {
          0% { opacity: 0.5; }
          50% { opacity: 1; }
          100% { opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
