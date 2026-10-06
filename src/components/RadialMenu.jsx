import { useState } from 'react';

export default function RadialMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedLabel, setSelectedLabel] = useState('Forgebox');

  const options = [
    { id: 'vehicle', label: 'Veículo', icon: '🚗', angle: 0 },
    { id: 'inventory', label: 'Inventário', icon: '🎒', angle: 72 },
    { id: 'job', label: 'Trabalho', icon: '💼', angle: 144 },
    { id: 'settings', label: 'Ajustes', icon: '⚙️', angle: 216 },
    { id: 'house', label: 'Moradia', icon: '🏠', angle: 288 }
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
      <div 
        className="fivem-radial-wrapper"
        style={{
          opacity: isOpen ? 1 : 0.15,
          transform: isOpen ? 'scale(1)' : 'scale(0.95)',
          transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
          pointerEvents: isOpen ? 'auto' : 'none'
        }}
      >
        {/* Círculo Central */}
        <div className="fivem-radial-center">
          <span style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--space-orange-primary)', textTransform: 'uppercase', letterSpacing: '0.5px', textAlign: 'center', lineHeight: '1.1', width: '90%' }}>
            {selectedLabel}
          </span>
        </div>

        {/* Itens do Menu Radial */}
        {options.map((opt) => {
          // Calcular a posição em um raio de 80px
          const radius = 80;
          const rad = (opt.angle * Math.PI) / 180;
          const x = Math.cos(rad) * radius;
          const y = Math.sin(rad) * radius;

          return (
            <div
              key={opt.id}
              className="fivem-radial-item"
              style={{
                left: `calc(50% - 25px + ${x}px)`,
                top: `calc(50% - 25px + ${y}px)`,
                transitionDelay: isOpen ? `${opt.angle / 1000}s` : '0s'
              }}
              onMouseEnter={() => setSelectedLabel(opt.label)}
              onMouseLeave={() => setSelectedLabel('Forgebox')}
              onClick={() => {
                alert(`Ação executada: ${opt.label}`);
                setIsOpen(false);
              }}
            >
              <span style={{ fontSize: '20px' }}>{opt.icon}</span>
            </div>
          );
        })}
      </div>

      <div style={{ display: 'flex', gap: '10px', width: '100%', justifyContent: 'center' }}>
        <button 
          className={`btn ${isOpen ? 'btn-primary' : 'btn-secondary'}`}
          onClick={() => setIsOpen(!isOpen)}
          style={{ width: '180px' }}
        >
          {isOpen ? 'Fechar Menu Radial' : 'Abrir Menu Radial'}
        </button>
      </div>
    </div>
  );
}
