import React from 'react';
import { HexagonRing, CircleRing, SquareRing, DiamondRing } from './Shapes';

export default function MarkerPicker({
  value = 1,
  onChange,
  className = '',
  ...props
}) {
  // Marcadores comuns no GTA V (IDs oficiais do FiveM)
  const markerTypes = [
    { id: 1, label: 'Cilindro', preview: <CircleRing size={24} glow={false} /> },
    { id: 2, label: 'Círculo Planal', preview: <CircleRing size={24} strokeWidth={4} glow={false} /> },
    { id: 27, label: 'Anel Rotativo', preview: <CircleRing size={24} strokeWidth={1} glow={false} /> },
    { id: 23, label: 'Hexágono', preview: <HexagonRing size={24} glow={false} /> },
    { id: 3, label: 'Losango 3D', preview: <DiamondRing size={24} glow={false} /> },
    { id: 4, label: 'Cubo 3D', preview: <SquareRing size={24} glow={false} /> }
  ];

  return (
    <div
      className={`marker-picker-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
        width: '100%',
        ...props.style
      }}
      {...props}
    >
      <span className="form-label">Selecionar Marcador 3D (Marker)</span>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '8px',
          width: '100%'
        }}
      >
        {markerTypes.map((marker) => {
          const isSelected = value === marker.id;
          return (
            <div
              key={marker.id}
              onClick={() => onChange && onChange(marker.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '12px 6px',
                borderRadius: 'var(--space-radius-md)',
                border: '1px solid',
                borderColor: isSelected ? 'var(--space-orange-primary)' : 'var(--space-border-color)',
                backgroundColor: isSelected ? 'var(--space-orange-subtle)' : 'var(--space-bg-input)',
                cursor: 'pointer',
                transition: 'var(--space-transition)',
                boxShadow: isSelected ? '0 0 10px var(--space-orange-glow)' : 'none',
                minHeight: '75px'
              }}
              onMouseEnter={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--space-border-hover)';
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
                }
              }}
              onMouseLeave={(e) => {
                if (!isSelected) {
                  e.currentTarget.style.borderColor = 'var(--space-border-color)';
                  e.currentTarget.style.backgroundColor = 'var(--space-bg-input)';
                }
              }}
            >
              <div
                style={{
                  color: isSelected ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                  marginBottom: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'var(--space-transition)',
                  filter: isSelected ? 'drop-shadow(0 0 4px var(--space-orange-glow))' : 'none'
                }}
              >
                {marker.preview}
              </div>
              <span
                style={{
                  fontSize: '9.5px',
                  fontWeight: '700',
                  color: isSelected ? 'var(--space-text-white)' : 'var(--space-text-muted)',
                  textAlign: 'center',
                  textTransform: 'uppercase',
                  letterSpacing: '0.5px'
                }}
              >
                {marker.label}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
