import React, { useState } from 'react';

// SVG inline de blips estilo GTA V / FiveM minimap
const BLIP_ICONS = {
  garage: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M3 9.5L12 3l9 6.5V20a1 1 0 01-1 1H4a1 1 0 01-1-1V9.5z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <rect x="8" y="14" width="8" height="7" rx="1" fill="currentColor" opacity="0.6"/>
      <path d="M8 14v-2a1 1 0 011-1h6a1 1 0 011 1v2" stroke="currentColor" strokeWidth="1.5"/>
    </svg>
  ),
  store: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M3 9h18l-2 11H5L3 9z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M3 9l2-5h14l2 5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <path d="M9 9v4a3 3 0 006 0V9" stroke="currentColor" strokeWidth="1.8"/>
    </svg>
  ),
  bank: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M3 21h18M3 10h18M12 3L3 10h18L12 3z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
      <rect x="6" y="10" width="2" height="8" fill="currentColor" opacity="0.6"/>
      <rect x="11" y="10" width="2" height="8" fill="currentColor" opacity="0.6"/>
      <rect x="16" y="10" width="2" height="8" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  police: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M9 2h6l1 4H8L9 2z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M8 6l-4 6h16l-4-6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <path d="M4 12v8a1 1 0 001 1h14a1 1 0 001-1v-8" stroke="currentColor" strokeWidth="1.5"/>
      <path d="M12 12v9M8 14h8M8 17h8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  hospital: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <rect x="3" y="4" width="18" height="17" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M12 8v8M8 12h8" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
      <path d="M7 4V3M17 4V3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  fuel: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M5 21V6a2 2 0 012-2h6a2 2 0 012 2v8h1a2 2 0 012 2v2a1 1 0 001 1 1 1 0 001-1v-7l-3-3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      <rect x="7" y="8" width="6" height="4" rx="1" fill="currentColor" opacity="0.6"/>
    </svg>
  ),
  weapon: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M4 14h10v2H4zM14 12h2v4h-2zM16 12l2-1.5V16" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M4 14l-1 3h2l1-3" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
      <circle cx="7" cy="17" r="1" fill="currentColor"/>
      <circle cx="11" cy="17" r="1" fill="currentColor"/>
    </svg>
  ),
  atm: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M3 9h18" stroke="currentColor" strokeWidth="1.5"/>
      <rect x="7" y="13" width="4" height="3" rx="0.5" stroke="currentColor" strokeWidth="1.4"/>
      <path d="M14 12h3M14 14h3M14 16h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/>
    </svg>
  ),
  house: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M3 12L12 4l9 8" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" strokeLinecap="round"/>
      <path d="M5 10v9a1 1 0 001 1h4v-4h4v4h4a1 1 0 001-1v-9" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
    </svg>
  ),
  vehicle: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M5 17H3a1 1 0 01-1-1v-3l2-6h14l2 6v3a1 1 0 01-1 1h-2" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round"/>
      <circle cx="7" cy="17" r="2" stroke="currentColor" strokeWidth="1.8"/>
      <circle cx="17" cy="17" r="2" stroke="currentColor" strokeWidth="1.8"/>
      <path d="M5 11h14M10 8l-1 3M14 8l1 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
  ),
  restaurant: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M18 2v20M18 8a4 4 0 000-8M6 2v6a4 4 0 008 0V2M6 12v10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
  mechanic: (
    <svg viewBox="0 0 24 24" fill="none" width="100%" height="100%">
      <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  ),
};

const BLIP_LIST = [
  { id: 'garage',     label: 'Garagem',    color: '#3B82F6' },
  { id: 'house',      label: 'Casa',       color: '#10B981' },
  { id: 'store',      label: 'Loja',       color: '#F59E0B' },
  { id: 'bank',       label: 'Banco',      color: '#EF4444' },
  { id: 'atm',        label: 'ATM',        color: '#10B981' },
  { id: 'police',     label: 'Polícia',    color: '#60A5FA' },
  { id: 'hospital',   label: 'Hospital',   color: '#EF4444' },
  { id: 'fuel',       label: 'Posto',      color: '#F97316' },
  { id: 'weapon',     label: 'Armeiro',    color: '#9CA3AF' },
  { id: 'vehicle',    label: 'Veículo',    color: '#6366F1' },
  { id: 'restaurant', label: 'Restaurante',color: '#F59E0B' },
  { id: 'mechanic',   label: 'Mecânico',   color: '#8B5CF6' },
];

export default function BlipPicker({
  value,
  onChange,
  blips,
  className = '',
  ...props
}) {
  const [hovered, setHovered] = useState(null);
  const list = blips || BLIP_LIST;

  return (
    <div
      className={`blip-picker-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        ...props.style
      }}
      {...props}
    >
      <span className="form-label" style={{ fontSize: '12px', letterSpacing: '0.5px', textTransform: 'uppercase', color: 'var(--space-text-grey)' }}>
        Blip do Mapa
      </span>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(66px, 1fr))',
          gap: '8px',
          width: '100%'
        }}
      >
        {list.map((blip) => {
          const isSelected = value === blip.id;
          const isHov = hovered === blip.id;
          const accentColor = blip.color || 'var(--space-orange-primary)';

          return (
            <button
              key={blip.id}
              type="button"
              title={blip.label}
              onClick={() => onChange && onChange(blip.id)}
              onMouseEnter={() => setHovered(blip.id)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '6px',
                padding: '10px 6px 8px',
                borderRadius: 'var(--space-radius-md)',
                border: `1px solid ${isSelected ? accentColor : isHov ? 'var(--space-border-hover)' : 'var(--space-border-color)'}`,
                backgroundColor: isSelected
                  ? `${accentColor}18`
                  : isHov
                    ? 'rgba(255, 255, 255, 0.03)'
                    : 'var(--space-bg-input)',
                cursor: 'pointer',
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                boxShadow: isSelected ? `0 0 12px ${accentColor}30, inset 0 1px 0 ${accentColor}15` : 'none',
                outline: 'none',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              {/* Barra de acento no topo quando selecionado */}
              {isSelected && (
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '2px',
                  background: accentColor,
                  boxShadow: `0 0 6px ${accentColor}`,
                  borderRadius: '2px 2px 0 0',
                }} />
              )}
              <div
                style={{
                  width: '22px',
                  height: '22px',
                  color: isSelected ? accentColor : isHov ? 'var(--space-text-white)' : 'var(--space-text-grey)',
                  transition: 'all 0.2s ease',
                  filter: isSelected ? `drop-shadow(0 0 4px ${accentColor}80)` : 'none',
                  flexShrink: 0,
                }}
              >
                {BLIP_ICONS[blip.id] || BLIP_ICONS.house}
              </div>
              <span
                style={{
                  fontSize: '9px',
                  fontWeight: '600',
                  color: isSelected ? 'var(--space-text-white)' : isHov ? 'var(--space-text-grey)' : 'var(--space-text-muted)',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '0.4px',
                  lineHeight: 1.2,
                  transition: 'color 0.2s ease'
                }}
              >
                {blip.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
