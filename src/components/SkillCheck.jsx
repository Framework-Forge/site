import { useCallback, useEffect, useRef, useState } from 'react';

export default function SkillCheck() {
  const canvasRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [difficulty, setDifficulty] = useState('medium'); // 'easy' | 'medium' | 'hard'
  const [feedback, setFeedback] = useState(null); // 'success' | 'failure' | null
  const [score, setScore] = useState({ success: 0, total: 0 });

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
    try {
      const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      const oscillator = audioCtx.createOscillator();
      const gainNode = audioCtx.createGain();
      
      oscillator.connect(gainNode);
      gainNode.connect(audioCtx.destination);
      
      if (type === 'success') {
        // Bi-bip agudo de sucesso
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
        // Buzz grave de erro
        oscillator.type = 'sawtooth';
        oscillator.frequency.setValueAtTime(120, audioCtx.currentTime);
        gainNode.gain.setValueAtTime(0.15, audioCtx.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.35);
        oscillator.start();
        oscillator.stop(audioCtx.currentTime + 0.35);
      } else if (type === 'click') {
        // Clique leve ao iniciar
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
  }, []);

  const startTest = useCallback(() => {
    if (isPlaying) return;
    
    playSound('click');
    setIsPlaying(true);
    setFeedback(null);
    
    // Configurações com base na dificuldade
    let zoneSizeDeg = 45; // Tamanho da zona laranja em graus
    let speed = 0.05;    // Velocidade angular
    
    if (difficulty === 'easy') {
      zoneSizeDeg = 65;
      speed = 0.035;
    } else if (difficulty === 'hard') {
      zoneSizeDeg = 25;
      speed = 0.07;
    }

    const zoneSizeRad = (zoneSizeDeg * Math.PI) / 180;
    // Posição de destino aleatória (em radianos) entre 0.5 e 1.5 Pi para não começar logo na agulha
    const targetStart = Math.random() * (Math.PI * 1.4) + Math.PI * 0.3;
    const targetEnd = targetStart + zoneSizeRad;

    gameStateRef.current = {
      angle: 0,
      speed: speed,
      targetStart: targetStart,
      targetEnd: targetEnd,
      active: true
    };
  }, [difficulty, isPlaying, playSound]);

  // Lógica de verificação do clique / barra de espaço
  const checkHit = useCallback(() => {
    if (!isPlaying || !gameStateRef.current.active) return;

    gameStateRef.current.active = false;
    const { angle, targetStart, targetEnd } = gameStateRef.current;
    
    // Normalizar o ângulo entre 0 e 2*Pi
    const normalizedAngle = angle % (Math.PI * 2);
    
    // Verificar se o ângulo da agulha está dentro da zona laranja
    const success = normalizedAngle >= targetStart && normalizedAngle <= targetEnd;
    
    if (success) {
      setFeedback('success');
      playSound('success');
      setScore(prev => ({ success: prev.success + 1, total: prev.total + 1 }));
    } else {
      setFeedback('failure');
      playSound('failure');
      setScore(prev => ({ ...prev, total: prev.total + 1 }));
    }

    setIsPlaying(false);
  }, [isPlaying, playSound]);

  // Listener para teclado (Barra de Espaço)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.code === 'Space') {
        e.preventDefault(); // Evita scroll da página
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

  // Loop de Renderização no Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    
    let animationId;
    
    const draw = () => {
      // Limpar canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      const radius = 75;
      
      // 1. Desenhar trilha circular cinza de fundo
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.strokeStyle = '#222226';
      ctx.lineWidth = 10;
      ctx.stroke();
      
      const state = gameStateRef.current;
      
      // 2. Se ativo, desenhar a zona ativa (Laranja)
      if (state.active || isPlaying) {
        ctx.beginPath();
        // Adiciona um pequeno glow sob a zona laranja
        ctx.shadowBlur = 10;
        ctx.shadowColor = '#FF7A1A';
        
        ctx.arc(cx, cy, radius, state.targetStart, state.targetEnd);
        ctx.strokeStyle = '#FF7A1A';
        ctx.lineWidth = 10;
        ctx.stroke();
        
        // Resetar sombras para o resto do desenho
        ctx.shadowBlur = 0;
      }
      
      // 3. Desenhar a agulha de timing (branca/glow)
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

      // Desenhar a linha que conecta o centro à agulha (sutil)
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(nX, nY);
      ctx.strokeStyle = 'rgba(255,255,255,0.15)';
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Centro da trava
      ctx.beginPath();
      ctx.arc(cx, cy, 14, 0, Math.PI * 2);
      ctx.fillStyle = '#121214';
      ctx.strokeStyle = '#1F1F24';
      ctx.lineWidth = 2;
      ctx.fill();
      ctx.stroke();
      
      // Atualizar ângulo se estiver jogando
      if (isPlaying && state.active) {
        state.angle += state.speed;
        
        // Se a agulha der a volta completa e passar da zona ativa, o teste falha por expiração
        if (state.angle > Math.PI * 2) {
          state.active = false;
          setIsPlaying(false);
          setFeedback('failure');
          playSound('failure');
          setScore(prev => ({ ...prev, total: prev.total + 1 }));
        }
      }
      
      animationId = requestAnimationFrame(draw);
    };
    
    draw();
    
    return () => cancelAnimationFrame(animationId);
  }, [isPlaying, playSound]);

  return (
    <div className="skillcheck-wrapper">
      <div className="skillcheck-canvas-container" onClick={isPlaying ? checkHit : startTest} style={{ cursor: 'pointer' }}>
        <canvas 
          ref={canvasRef} 
          width={200} 
          height={200} 
          className="skillcheck-canvas"
        />
        
        {feedback && (
          <div className={`skillcheck-feedback ${feedback}`}>
            {feedback === 'success' ? 'Sucesso!' : 'Falhou'}
          </div>
        )}
        
        {!isPlaying && !feedback && (
          <div style={{ position: 'absolute', fontSize: '11px', color: 'var(--space-text-grey)', textAlign: 'center', pointerEvents: 'none', maxWidth: '100px', lineHeight: '1.3' }}>
            Clique ou Espaço para Iniciar
          </div>
        )}
      </div>
      
      <div style={{ width: '100%' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '10px' }}>
          <span style={{ fontSize: '12px', color: 'var(--space-text-grey)' }}>Dificuldade</span>
          <span style={{ fontSize: '12px', fontWeight: '600', color: 'var(--space-orange-primary)' }}>
            Placar: {score.success}/{score.total}
          </span>
        </div>
        <div style={{ display: 'flex', gap: '6px' }}>
          {['easy', 'medium', 'hard'].map((level) => (
            <button
              key={level}
              className={`btn btn-sm ${difficulty === level ? 'btn-primary' : 'btn-secondary'}`}
              style={{ flex: 1, textTransform: 'capitalize' }}
              onClick={() => {
                setDifficulty(level);
                setFeedback(null);
              }}
              disabled={isPlaying}
            >
              {level === 'easy' ? 'Fácil' : level === 'medium' ? 'Médio' : 'Difícil'}
            </button>
          ))}
        </div>
        
        <button
          className={`btn ${isPlaying ? 'btn-primary' : 'btn-secondary'}`}
          style={{ width: '100%', marginTop: '12px', boxShadow: isPlaying ? '0 0 12px var(--space-orange-glow)' : 'none' }}
          onClick={isPlaying ? checkHit : startTest}
        >
          {isPlaying ? 'Pressione ESPAÇO agora!' : 'Iniciar Skill Check'}
        </button>
      </div>
    </div>
  );
}
