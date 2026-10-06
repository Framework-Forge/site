import React from 'react';

export default function ColorPicker({
  value = '#FF7A1A',
  onChange,
  className = '',
  style,
  ...rest
}) {
  // Paleta curada Forgebox / FiveM
  const presetColors = [
    '#FF7A1A', // Laranja Forgebox
    '#EF4444', // Vermelho Perigo
    '#10B981', // Verde Sucesso
    '#3B82F6', // Azul Info
    '#EC4899', // Rosa VIP
    '#8B5CF6', // Roxo Facção
    '#F59E0B', // Amarelo Aviso
    '#06B6D4', // Ciano
    '#84CC16', // Verde Neon
    '#FFFFFF', // Branco
  ];

  return (
    <div
      className={`color-picker-container ${className}`}
      style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '100%', ...style }}
    {...rest}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span className="form-label" style={{ margin: 0 }}>Selecionar Cor</span>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          {/* Swatch da cor selecionada */}
          <div
            style={{
              width: '22px',
              height: '22px',
              borderRadius: '50%',
              backgroundColor: value,
              border: '2px solid rgba(255,255,255,0.3)',
              boxShadow: `0 0 8px ${value}80`,
              flexShrink: 0
            }}
          />
          {/* Input de texto com valor hex */}
          <span style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '11px',
            color: 'var(--space-orange-primary)',
            background: 'var(--space-bg-input)',
            border: '1px solid var(--space-border-color)',
            padding: '2px 8px',
            borderRadius: 'var(--space-radius-sm)'
          }}>
            {value.toUpperCase()}
          </span>
        </div>
      </div>

      {/* Swatches da paleta */}
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {presetColors.map((color) => {
          const isSelected = value.toLowerCase() === color.toLowerCase();
          return (
            <button
              key={color}
              type="button"
              onClick={() => onChange && onChange(color)}
              title={color}
              style={{
                width: '30px',
                height: '30px',
                borderRadius: '8px',
                backgroundColor: color,
                cursor: 'pointer',
                border: '2px solid',
                borderColor: isSelected ? '#FFFFFF' : 'transparent',
                boxShadow: isSelected ? `0 0 12px ${color}, 0 0 0 1px rgba(255,255,255,0.3)` : `inset 0 0 0 1px rgba(0,0,0,0.2)`,
                transition: 'all 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
                transform: isSelected ? 'scale(1.15)' : 'scale(1)',
                outline: 'none',
              }}
              onMouseEnter={(e) => {
                if (!isSelected) e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                if (!isSelected) e.currentTarget.style.transform = 'scale(1)';
              }}
            />
          );
        })}

        {/* Input de cor livre (native color picker) */}
        <label
          title="Cor personalizada"
          style={{
            width: '30px',
            height: '30px',
            borderRadius: '8px',
            border: '2px dashed var(--space-border-color)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: 'var(--space-bg-input)',
            fontSize: '14px',
            transition: 'border-color 0.2s',
            flexShrink: 0,
          }}
          onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--space-orange-primary)'}
          onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--space-border-color)'}
        >
          <span style={{ color: 'var(--space-text-grey)', lineHeight: 1 }}>+</span>
          <input
            type="color"
            value={value}
            onChange={(e) => onChange && onChange(e.target.value)}
            style={{ position: 'absolute', opacity: 0, width: '30px', height: '30px', cursor: 'pointer' }}
          />
        </label>
      </div>
    </div>
  );
}
