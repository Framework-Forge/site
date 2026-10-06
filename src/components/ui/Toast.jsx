import React, { createContext, useCallback, useContext, useEffect, useRef, useState } from 'react';

const ToastContext = createContext(null);

const ICONS = {
  success: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="#37E35C" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  error:   <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M18 6L6 18M6 6l12 12" stroke="#FF3B4F" strokeWidth="2.5" strokeLinecap="round"/></svg>,
  warning: <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><path d="M12 9v4M12 17h.01M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" stroke="#FF9500" strokeWidth="2" strokeLinecap="round"/></svg>,
  info:    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="#45E8FF" strokeWidth="2"/><path d="M12 16v-4M12 8h.01" stroke="#45E8FF" strokeWidth="2" strokeLinecap="round"/></svg>,
};

const COLORS = {
  success: { border: '#37E35C', glow: 'rgba(55,227,92,0.15)' },
  error:   { border: '#FF3B4F', glow: 'rgba(255,59,79,0.15)' },
  warning: { border: '#FF9500', glow: 'rgba(255,149,0,0.15)' },
  info:    { border: '#45E8FF', glow: 'rgba(69,232,255,0.15)' },
};

function ToastItem({ id, type = 'info', title, message, duration = 4000, onRemove, action }) {
  const [visible, setVisible] = useState(false);
  const [leaving, setLeaving] = useState(false);
  const [progress, setProgress] = useState(100);
  const timerRef = useRef(null);
  const startRef = useRef(null);

  const dismiss = useCallback(() => {
    setLeaving(true);
    clearInterval(timerRef.current);
    setTimeout(() => onRemove(id), 300);
  }, [id, onRemove]);

  useEffect(() => {
    requestAnimationFrame(() => setVisible(true));
    if (duration > 0) {
      startRef.current = Date.now();
      timerRef.current = setInterval(() => {
        const elapsed = Date.now() - startRef.current;
        const pct = Math.max(0, 100 - (elapsed / duration) * 100);
        setProgress(pct);
        if (pct <= 0) { clearInterval(timerRef.current); dismiss(); }
      }, 50);
    }
    return () => clearInterval(timerRef.current);
  }, [duration, dismiss]);

  const { border, glow } = COLORS[type] || COLORS.info;

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      minWidth: 280,
      maxWidth: 360,
      borderRadius: 'var(--space-radius-lg)',
      border: `1px solid ${border}40`,
      background: 'rgba(15,17,23,0.96)',
      backdropFilter: 'blur(12px)',
      boxShadow: `0 8px 24px rgba(0,0,0,0.5), 0 0 0 1px ${border}20, inset 0 1px 0 rgba(255,255,255,0.05)`,
      overflow: 'hidden',
      transform: visible && !leaving ? 'translateX(0) scale(1)' : leaving ? 'translateX(20px) scale(0.96)' : 'translateX(20px) scale(0.96)',
      opacity: visible && !leaving ? 1 : 0,
      transition: 'transform 0.3s cubic-bezier(0.4,0,0.2,1), opacity 0.3s',
    }}>
      <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, padding: '12px 14px' }}>
        <div style={{ flexShrink: 0, marginTop: 1 }}>{ICONS[type]}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          {title && <div style={{ fontSize: 13, fontWeight: 700, color: 'var(--space-text-white)', marginBottom: 2 }}>{title}</div>}
          {message && <div style={{ fontSize: 12, color: 'var(--space-text-grey)', lineHeight: 1.5 }}>{message}</div>}
          {action && (
            <button type="button" onClick={() => { action.onClick(); dismiss(); }}
              style={{ marginTop: 6, fontSize: 11, fontWeight: 700, color: border, background: 'none', border: 'none', padding: 0, cursor: 'pointer', letterSpacing: '0.5px' }}>
              {action.label} →
            </button>
          )}
        </div>
        <button type="button" onClick={dismiss}
          style={{ flexShrink: 0, color: 'var(--space-text-muted)', background: 'none', border: 'none', cursor: 'pointer', fontSize: 16, lineHeight: 1, padding: 2 }}>
          ×
        </button>
      </div>
      {duration > 0 && (
        <div style={{ height: 2, background: 'rgba(255,255,255,0.06)' }}>
          <div style={{ height: '100%', width: `${progress}%`, background: border, boxShadow: `0 0 6px ${border}`, transition: 'width 50ms linear' }} />
        </div>
      )}
    </div>
  );
}

export function ToastProvider({ children, position = 'top-right' }) {
  const [toasts, setToasts] = useState([]);

  const addToast = useCallback((opts) => {
    const id = Date.now() + Math.random();
    setToasts(t => [...t, { id, ...opts }]);
    return id;
  }, []);

  const removeToast = useCallback((id) => {
    setToasts(t => t.filter(toast => toast.id !== id));
  }, []);

  const positions = {
    'top-right':    { top: 16, right: 16 },
    'top-left':     { top: 16, left: 16 },
    'bottom-right': { bottom: 16, right: 16 },
    'bottom-left':  { bottom: 16, left: 16 },
    'top-center':   { top: 16, left: '50%', transform: 'translateX(-50%)' },
  };

  return (
    <ToastContext.Provider value={{ addToast, removeToast }}>
      {children}
      <div style={{
        position: 'fixed',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        pointerEvents: 'none',
        ...positions[position],
      }}>
        {toasts.map(t => (
          <div key={t.id} style={{ pointerEvents: 'auto' }}>
            <ToastItem {...t} onRemove={removeToast} />
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error('useToast deve ser usado dentro de ToastProvider');
  return ctx;
}

// Componente standalone (sem provider) para uso no showcase
export default function Toast({ type = 'info', title, message, duration = 4000, action }) {
  const [id] = useState(() => Math.random());
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <ToastProvider position="top-right">
      <InlineToast type={type} title={title} message={message} duration={duration} action={action} />
    </ToastProvider>
  );
}

function InlineToast(props) {
  const { addToast } = useToast();
  useEffect(() => { addToast(props); }, []);
  return null;
}
