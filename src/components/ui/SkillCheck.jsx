import React, { useCallback, useEffect, useRef, useState } from 'react';
import Button from './Button';

export default function SkillCheck({
  difficulty = 'medium',
  onSuccess,
  onFailure,
  onStart,
  customSpeed,
  customZoneSize,
  soundEnabled = true,
  className = '',
  ...props
}) {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [feedback, setFeedback] = useState(null); // 'success' | 'failure' | null
  const [currentDifficulty, setCurrentDifficulty] = useState(difficulty);

  useEffect(() => {
    setCurrentDifficulty(difficulty);
  }, [difficulty]);

  // Referências para controlar a animação sem re-renderizar o canvas desnecessariamente
  const gameStateRef = useRef({
    angle: 0,
    speed: 0.05,
    targetStart: 0,
    targetEnd: 0,
    active: false
  });

  // Função para tocar sons sintéticos usando a Web Audio API
  const playSound = useCallback((type) => {
    if (!soundEnabled) return;
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      if (type === 'success') {
        oscillator.type = 'triangle';
        oscillator.frequency.setValueAtTime(587.33, audioCtx.currentTime); // D5
        gainNode.gain.setValueAtTime(0.1, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.15);
        oscillator.start();
        
        const osc2 = audioCtx.createOscillator();
        const gain2 = audioCtx.createGain();
        osc2.connect(gain2);
        gain2.connect(audioCtx.destination);
        osc2.type = 'triangle';
        osc2.frequency.setValueAtTime(880, audioCtx.currentTime + 0.1); // A5
        gain2.gain.setValueAtTime(0.1, audioCtx.currentTime + 0.1);
        gain2.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.25);
        osc2.start();
        
        oscillator.stop(audioCtx.currentTime + 0.15);
        osc2.stop(audioCtx.currentTime + 0.25);
      } else if (type === 'failure') {
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(120, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.35);
      } else if (type === 'click') {
        oscillator.type = 'sine';
        oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.05);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.05);
      }
    } catch (e) {
      console.warn('Web Audio API não suportada ou bloqueada: ', e);
    }
  }, [soundEnabled]);

  const startTest = useCallback(() => {
    if (isPlaying) return;
    
    playSound('click');
    setIsPlaying(true);
    setFeedback(null);
    if (onStart) onStart();
    
    // Configurações baseadas na dificuldade
    let zoneSizeDeg = 45; // Tamanho da zona laranja em graus
    let speed = 0.05;    // Velocidade angular
    
    if (currentDifficulty === 'easy') {
      zoneSizeDeg = 65;
      speed = 0.035;
    } else if (currentDifficulty === 'hard') {
      zoneSizeDeg = 25;
      speed = 0.07;
    }

    // Permitir overrides via props
    if (customZoneSize !== undefined) zoneSizeDeg = customZoneSize;
    if (customSpeed !== undefined) speed = customSpeed;

    const zoneSizeRad = (zoneSizeDeg * Math.PI) / 180;
    // Posição de destino aleatória entre 0.5 e 1.5 Pi para não começar imediatamente sob a agulha
    const targetStart = Math.random() * (Math.PI * 1.4) + Math.PI * 0.3;
    const targetEnd = targetStart + zoneSizeRad;

    gameStateRef.current = {
      angle: 0,
      speed: speed,
      targetStart: targetStart,
      targetEnd: targetEnd,
      active: true
    };
  }, [customSpeed, customZoneSize, currentDifficulty, isPlaying, onStart, playSound]);

  const checkHit = useCallback(() => {
    if (!isPlaying || !gameStateRef.current.active) return;

    gameStateRef.current.active = false;
    const { angle, targetStart, targetEnd } = gameStateRef.current;
    
    const normalizedAngle = angle % (Math.PI * 2);
    const success = normalizedAngle >= targetStart && normalizedAngle <= targetEnd;
    
    if (success) {
      setFeedback('success');
      playSound('success');
      if (onSuccess) onSuccess();
    } else {
      setFeedback('failure');
      playSound('failure');
      if (onFailure) onFailure();
    }

    setIsPlaying(false);
  }, [isPlaying, onFailure, onSuccess, playSound]);

  // Listener do Teclado (Barra de Espaço)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault();
        if (isPlaying) {
          checkHit();
        } else {
          startTest();
        }
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [checkHit, isPlaying, startTest]);

  // Canvas Drawing Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = 75;
      
      // Trilha de Fundo
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#222226';
      ctx.lineWidth = 10;
      ctx.stroke();
      
      const state = gameStateRef.current;
      
      // Desenhar Zona Alvo Laranja Neon
      if (state.active || isPlaying) {
        ctx.beginPath();
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FF7A1A';
        ctx.arc(cx, cy, radius, state.targetStart, state.targetEnd);
        ctx.strokeStyle = '#FF7A1A';
        ctx.lineWidth = 10;
        ctx.stroke();
        ctx.shadowBlur = 0;
      }
      
      // Desenhar Agulha (Branco Brilhante)
      const needleAngle = state.angle;
      const nX = cx + Math.cos(needleAngle) * radius;
      const nY = cy + Math.sin(needleAngle) * radius;
      
      ctx.beginPath();
      ctx.shadowBlur = 6;
      ctx.shadowColor = '#FFFFFF';
      ctx.arc(nX, nY, 6, 0, Math.PI * 2);
      ctx.fillStyle = '#FFFFFF';
      ctx.fill();
      ctx.shadowBlur = 0;

      // Linha Conectora do Centro
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(nX, nY);
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Miolo Central
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#121214';
      ctx.strokeStyle = '#1F1F24';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      
      // Incrementar ângulo se estiver rodando
      if (isPlaying && state.active) {
        state.angle += state.speed;
        
        if (state.angle > Math.PI * 2) {
          state.active = false;
          setIsPlaying(false);
          setFeedback('failure');
          playSound('failure');
          if (onFailure) onFailure();
        }
      }
      
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, onFailure, playSound]);

  return (
    <div
      className={`skillcheck-wrapper ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '16px',
        width: '100%',
        padding: '16px',
        backgroundColor: 'var(--space-bg-card)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)',
        position: 'relative'
      }}
      {...props}
    >
      <div
        className="skillcheck-canvas-container"
        onClick={isPlaying ? checkHit : startTest}
        style={{
          cursor: 'pointer',
          position: 'relative',
          width: '200px',
          height: '200px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <canvas 
          ref={canvasRef} 
          width={200} 
          height={200} 
        />
        
        {feedback && (
          <div
            className={`skillcheck-feedback ${feedback}`}
            style={{
              position: 'absolute',
              fontFamily: 'var(--font-heading)',
              fontSize: '18px',
              fontWeight: '700',
              textTransform: 'uppercase',
              color: feedback === 'success' ? 'var(--color-success)' : 'var(--color-error)',
              textShadow: feedback === 'success' ? '0 0 10px rgba(16, 185, 129, 0.4)' : '0 0 10px rgba(239, 68, 68, 0.4)',
              animation: 'scaleUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
            }}
          >
            <style>{`
              @keyframes scaleUp {
                from { transform: scale(0.8); opacity: 0; }
                to { transform: scale(1); opacity: 1; }
              }
            `}</style>
            {feedback === 'success' ? 'Sucesso!' : 'Falhou'}
          </div>
        )}
        
        {!isPlaying && !feedback && (
          <div
            style={{
              position: 'absolute',
              fontSize: '11px',
              color: 'var(--space-text-grey)',
              textAlign: 'center',
              pointerEvents: 'none',
              maxWidth: '120px',
              lineHeight: '1.4',
              fontFamily: 'var(--font-body)'
            }}
          >
            Clique na área ou <span style={{ color: 'var(--space-orange-primary)', fontWeight: '600' }}>ESPAÇO</span> para Iniciar
          </div>
        )}
      </div>
      
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', gap: '6px', marginBottom: '12px' }}>
          {['easy', 'medium', 'hard'].map((level) => (
            <button
              key={level}
              className={`btn btn-sm ${currentDifficulty === level ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1, textTransform: 'capitalize', padding: '6px 0' }}
              onClick={() => {
                setCurrentDifficulty(level);
                setFeedback(null);
              }}
              disabled={isPlaying}
            >
              {level === 'easy' ? 'Fácil' : level === 'medium' ? 'Médio' : 'Difícil'}
            </button>
          ))}
        </div>
        
        <Button
          variant={isPlaying ? 'primary' : 'secondary'}
          style={{ width: '100%', display: 'flex', justifyContent: 'center', boxShadow: isPlaying ? '0 0 12px var(--space-orange-glow)' : 'none' }}
          onClick={isPlaying ? checkHit : startTest}
        >
          {isPlaying ? 'Pressione ESPAÇO agora!' : 'Iniciar Skill Check'}
        </Button>
      </div>
    </div>
  );
}
