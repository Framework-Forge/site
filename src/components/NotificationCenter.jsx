import { useState, useCallback } from 'react';
import { NotificationContext, useNotification } from './NotificationContext';

export function NotificationProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const removeToast = useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const triggerNotification = useCallback((title, message, type = 'success', duration = 4000) => {
    const id = Date.now() + Math.random().toString(36).substr(2, 9);
    
    setToasts((prev) => [...prev, { id, title, message, type, duration }]);

    setTimeout(() => {
      removeToast(id);
    }, duration);
  }, [removeToast]);

  // Expor a nível global para facilitar integração fora da árvore React se necessário
  window.triggerForgeboxNotification = triggerNotification;

  return (
    <NotificationContext.Provider value={{ triggerNotification }}>
      {children}
      <div className="notification-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast ${toast.type}`} onClick={() => removeToast(toast.id)}>
            <div className="toast-icon">
              {toast.type === 'success' && '✔️'}
              {toast.type === 'error' && '❌'}
              {toast.type === 'info' && 'ℹ️'}
              {toast.type === 'warning' && '⚠️'}
            </div>
            <div className="toast-content">
              <div className="toast-title">{toast.title}</div>
              <div className="toast-message">{toast.message}</div>
            </div>
            <div 
              className="toast-progress" 
              style={{ 
                animation: `shrinkProgress ${toast.duration}ms linear forwards` 
              }} 
            />
          </div>
        ))}
      </div>
      
      <style>{`
        @keyframes shrinkProgress {
          from { width: 100%; }
          to { width: 0%; }
        }
      `}</style>
    </NotificationContext.Provider>
  );
}

// Componente simples para a demonstração na página de componentes
export function NotificationDemo() {
  const { triggerNotification } = useNotification();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px', justifyContent: 'center' }}>
      <button 
        className="btn btn-sm btn-primary" 
        onClick={() => triggerNotification('Sucesso!', 'O recurso foi inicializado corretamente.', 'success')}
        style={{ backgroundColor: 'var(--color-success)', borderColor: 'var(--color-success)' }}
      >
        Sucesso
      </button>
      <button 
        className="btn btn-sm btn-primary" 
        onClick={() => triggerNotification('Informação!', 'Carregando atualizações do servidor...', 'info')}
        style={{ backgroundColor: 'var(--color-info)', borderColor: 'var(--color-info)' }}
      >
        Informação
      </button>
      <button 
        className="btn btn-sm btn-primary" 
        onClick={() => triggerNotification('Alerta!', 'O uso de CPU atingiu 85%.', 'warning')}
        style={{ backgroundColor: 'var(--color-warning)', borderColor: 'var(--color-warning)' }}
      >
        Alerta
      </button>
      <button 
        className="btn btn-sm btn-primary" 
        onClick={() => triggerNotification('Erro!', 'Banco de dados offline. Tentando reconectar...', 'error')}
        style={{ backgroundColor: 'var(--color-error)', borderColor: 'var(--color-error)' }}
      >
        Erro
      </button>
    </div>
  );
}
