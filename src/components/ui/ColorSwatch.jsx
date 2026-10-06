import React, { useState } from 'react';

const DEFAULT_PALETTES = [
  { label: 'Neon', colors: ['#FF3B4F','#FF6B35','#FFD45C','#37E35C','#06B6D4','#6C63FF','#8B5CF6','#F472B6'] },
  { label: 'Pastel', colors: ['#FDA4AF','#FCD34D','#86EFAC','#93C5FD','#C4B5FD','#F9A8D4','#6EE7B7','#FDE68A'] },
  { label: 'Dark', colors: ['#1E293B','#0F172A','#312E81','#1E3A5F','#14532D','#7C2D12','#4A044E','#374151'] },
  { label: 'Mono', colors: ['#FFFFFF','#E5E7EB','#9CA3AF','#6B7280','#4B5563','#374151','#1F2937','#111827'] },
];

export default function ColorSwatch({
  value,
  defaultValue,
  onChange,
  palettes = DEFAULT_PALETTES,
  showCustom = true,
  label,
  className = '',
  ...props
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue || palettes[0]?.colors[0] || '#FF3B4F');
  const selected = isControlled ? value : internal;
  const [activeTab, setActiveTab] = useState(0);
  const [hovered, setHovered] = useState(null);

  const select = (color) => {
    if (!isControlled) setInternal(color);
    onChange && onChange(color);
  };

  return (
    <div className={`color-swatch ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: 8, ...props.style }}>
      {label && <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--space-text-grey)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</span>}

      {/* Tabs de paleta */}
      {palettes.length > 1 && (
        <div style={{ display: 'flex', gap: 4 }}>
          {palettes.map((p, i) => (
            <button
              key={p.label}
              type="button"
              onClick={() => setActiveTab(i)}
              style={{
                padding: '3px 10px',
                borderRadius: 20,
                border: 'none',
                background: activeTab === i ? 'var(--space-orange-primary)' : 'var(--space-bg-input)',
                color: activeTab === i ? '#000' : 'var(--space-text-grey)',
                fontSize: 11,
                fontWeight: 600,
                cursor: 'pointer',
                transition: 'all 0.15s',
              }}
            >{p.label}</button>
          ))}
        </div>
      )}

      {/* Grade de cores */}
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
        {(palettes[activeTab]?.colors || []).map((color) => {
          const isSelected = selected === color;
          const isHov = hovered === color;
          return (
            <button
              key={color}
              type="button"
              title={color}
              onClick={() => select(color)}
              onMouseEnter={() => setHovered(color)}
              onMouseLeave={() => setHovered(null)}
              style={{
                width: 28,
                height: 28,
                borderRadius: 6,
                border: isSelected ? '2px solid var(--space-text-white)' : '2px solid transparent',
                background: color,
                cursor: 'pointer',
                boxShadow: isSelected
                  ? `0 0 0 2px ${color}, 0 0 12px ${color}88`
                  : isHov
                    ? `0 0 8px ${color}66`
                    : 'none',
                transform: isSelected || isHov ? 'scale(1.15)' : 'scale(1)',
                transition: 'all 0.15s',
                outline: 'none',
              }}
            />
          );
        })}
      </div>

      {/* Input customizado */}
      {showCustom && (
        <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
          <div style={{
            width: 28, height: 28,
            borderRadius: 6,
            background: selected,
            border: '1px solid var(--space-border-color)',
            boxShadow: `0 0 8px ${selected}55`,
            flexShrink: 0,
          }} />
          <input
            type="color"
            value={selected}
            onChange={e => select(e.target.value)}
            style={{
              width: 28, height: 28,
              borderRadius: 6, border: 'none',
              cursor: 'pointer', opacity: 0, position: 'absolute',
            }}
          />
          <input
            type="text"
            value={selected}
            onChange={e => { if (/^#[0-9A-Fa-f]{0,6}$/.test(e.target.value)) select(e.target.value); }}
            style={{
              flex: 1,
              background: 'var(--space-bg-input)',
              border: '1px solid var(--space-border-color)',
              borderRadius: 'var(--space-radius-sm)',
              padding: '4px 8px',
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--space-text-white)',
              outline: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
}
