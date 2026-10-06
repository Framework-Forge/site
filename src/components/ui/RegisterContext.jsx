import React from 'react';

const palette = {
  orange: 'var(--space-orange-primary)',
  blue: 'var(--color-info)',
  green: 'var(--color-success)',
  yellow: 'var(--color-warning)',
  red: 'var(--color-error)',
  purple: '#8B5CF6',
  cyan: '#06B6D4',
};

function hexToRgb(hex) {
  if (!hex || !hex.startsWith('#')) return null;
  const value = hex.slice(1);
  const full = value.length === 3 ? value.split('').map((c) => c + c).join('') : value;
  const int = parseInt(full, 16);
  if (Number.isNaN(int)) return null;
  return `${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}`;
}

function alphaColor(color, alpha) {
  if (!color) return `rgba(255,122,26,${alpha})`;
  if (color.startsWith('var(')) return color;
  if (color.startsWith('#')) {
    const rgb = hexToRgb(color);
    return rgb ? `rgba(${rgb}, ${alpha})` : color;
  }
  return color;
}

function resolveColor(color) {
  return palette[color] || color || palette.orange;
}

function RegisterContextOption({ option, accent, density, onSelect }) {
  const disabled = Boolean(option.disabled);
  const readOnly = Boolean(option.readOnly);
  const progress = Math.max(0, Math.min(100, Number(option.progress) || 0));
  const progressColor = resolveColor(option.colorScheme) || accent;
  const hasProgress = option.progress !== undefined;
  const metadata = Array.isArray(option.metadata)
    ? option.metadata
    : option.metadata
      ? Object.entries(option.metadata).map(([label, value]) => ({ label, value }))
      : [];

  const padding = density === 'compact' ? '9px 11px' : density === 'comfortable' ? '15px 14px' : '12px 13px';

  return (
    <button
      type="button"
      disabled={disabled || readOnly}
      onClick={() => !disabled && !readOnly && (option.onSelect?.(option), onSelect?.(option))}
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: option.icon ? '30px 1fr auto' : '1fr auto',
        alignItems: 'center',
        gap: 12,
        minHeight: density === 'compact' ? 48 : 58,
        padding,
        borderRadius: 8,
        border: `1px solid ${option.active ? alphaColor(accent, 0.48) : 'rgba(255,255,255,0.06)'}`,
        background: option.active ? alphaColor(accent, 0.12) : 'rgba(255,255,255,0.025)',
        color: 'var(--space-text-white)',
        cursor: disabled || readOnly ? 'default' : 'pointer',
        opacity: disabled ? 0.42 : 1,
        textAlign: 'left',
        fontFamily: 'var(--font-body)',
        transition: 'transform 0.16s ease, border-color 0.16s ease, background 0.16s ease',
        position: 'relative',
        overflow: 'hidden',
      }}
      onMouseEnter={(event) => {
        if (!disabled && !readOnly) {
          event.currentTarget.style.borderColor = alphaColor(accent, 0.42);
          event.currentTarget.style.background = alphaColor(accent, 0.09);
          event.currentTarget.style.transform = 'translateY(-1px)';
        }
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.borderColor = option.active ? alphaColor(accent, 0.48) : 'rgba(255,255,255,0.06)';
        event.currentTarget.style.background = option.active ? alphaColor(accent, 0.12) : 'rgba(255,255,255,0.025)';
        event.currentTarget.style.transform = 'translateY(0)';
      }}
    >
      {option.icon && (
        <span style={{
          width: 30,
          height: 30,
          display: 'grid',
          placeItems: 'center',
          borderRadius: 8,
          color: progressColor,
          background: alphaColor(progressColor, 0.12),
          border: `1px solid ${alphaColor(progressColor, 0.25)}`,
        }}>
          {option.icon}
        </span>
      )}

      <span style={{ display: 'grid', gap: 5, minWidth: 0 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 8, minWidth: 0 }}>
          <span style={{ color: disabled ? 'var(--space-text-muted)' : 'var(--space-text-white)', fontSize: 13, fontWeight: 750, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>
            {option.title || option.label}
          </span>
          {option.badge && (
            <span style={{ flexShrink: 0, color: progressColor, background: alphaColor(progressColor, 0.12), border: `1px solid ${alphaColor(progressColor, 0.25)}`, borderRadius: 5, padding: '1px 6px', fontSize: 10, fontWeight: 800 }}>
              {option.badge}
            </span>
          )}
        </span>
        {option.description && <span style={{ color: 'var(--space-text-grey)', fontSize: 11, lineHeight: 1.45 }}>{option.description}</span>}
        {metadata.length > 0 && (
          <span style={{ display: 'grid', gap: 4, marginTop: 2 }}>
            {metadata.slice(0, 4).map((item, index) => (
              <span key={`${item.label}-${index}`} style={{ display: 'flex', justifyContent: 'space-between', gap: 12, color: 'var(--space-text-muted)', fontSize: 10 }}>
                <span>{item.label}</span>
                <strong style={{ color: 'var(--space-text-grey)', fontWeight: 700 }}>{item.value}</strong>
              </span>
            ))}
          </span>
        )}
        {hasProgress && (
          <span style={{ height: 5, borderRadius: 999, overflow: 'hidden', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.04)' }}>
            <span style={{ display: 'block', width: `${progress}%`, height: '100%', borderRadius: 999, background: progressColor, boxShadow: `0 0 10px ${progressColor}` }} />
          </span>
        )}
      </span>

      <span style={{ display: 'flex', alignItems: 'center', gap: 8, color: 'var(--space-text-muted)', fontSize: 12 }}>
        {option.checked !== undefined && (
          <span style={{ width: 18, height: 18, borderRadius: 5, display: 'grid', placeItems: 'center', border: `1px solid ${option.checked ? accent : 'var(--space-border-color)'}`, background: option.checked ? alphaColor(accent, 0.16) : 'rgba(255,255,255,0.03)', color: option.checked ? accent : 'transparent', fontWeight: 900 }}>
            ✓
          </span>
        )}
        {option.keybind && <kbd style={{ color: 'var(--space-text-grey)', background: 'var(--space-bg-darkest)', border: '1px solid var(--space-border-color)', borderRadius: 5, padding: '2px 6px', fontFamily: 'var(--font-mono)', fontSize: 10 }}>{option.keybind}</kbd>}
        {option.arrow !== false && !readOnly && <span style={{ color: disabled ? 'var(--space-text-muted)' : accent, fontSize: 16 }}>›</span>}
      </span>
    </button>
  );
}

export default function RegisterContext({
  id,
  title,
  description,
  menu,
  options = [],
  visible = true,
  width = 380,
  accent = 'orange',
  opacity = 0.92,
  blur = 18,
  radius = 10,
  borderOpacity = 0.16,
  background = '10, 10, 12',
  density = 'default',
  showClose = true,
  onClose,
  onBack,
  onSelect,
  footer,
  style,
  ...props
}) {
  if (!visible) return null;

  const accentColor = resolveColor(accent);
  const optionList = Array.isArray(options) ? options : Object.entries(options).map(([key, option]) => ({ id: key, ...option }));

  return (
    <section
      aria-label={title || id || 'Register context'}
      style={{
        width: 'min(100%, var(--register-context-width, 380px))',
        '--register-context-width': typeof width === 'number' ? `${width}px` : width,
        borderRadius: radius,
        border: `1px solid rgba(255,255,255,${borderOpacity})`,
        background: `linear-gradient(180deg, rgba(${background}, ${opacity}), rgba(14, 14, 18, ${Math.min(1, opacity + 0.03)}))`,
        backdropFilter: `blur(${blur}px)`,
        boxShadow: `0 22px 70px rgba(0,0,0,0.58), 0 0 0 1px ${alphaColor(accentColor, 0.08)}, inset 0 1px 0 rgba(255,255,255,0.06)`,
        overflow: 'hidden',
        color: 'var(--space-text-white)',
        ...style,
      }}
      {...props}
    >
      <header style={{ padding: density === 'compact' ? 14 : 18, borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', alignItems: 'flex-start', gap: 12 }}>
        {menu && (
          <button type="button" onClick={onBack} aria-label="Voltar" style={{ width: 28, height: 28, borderRadius: 7, border: '1px solid var(--space-border-color)', background: 'rgba(255,255,255,0.03)', color: 'var(--space-text-grey)', cursor: 'pointer', flexShrink: 0 }}>
            ‹
          </button>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          {menu && <div style={{ color: accentColor, fontSize: 10, fontWeight: 850, letterSpacing: 1.4, textTransform: 'uppercase', marginBottom: 5 }}>{menu}</div>}
          <h3 style={{ margin: 0, color: 'var(--space-text-white)', fontFamily: 'var(--font-heading)', fontSize: 18, lineHeight: 1.15 }}>{title}</h3>
          {description && <p style={{ margin: '7px 0 0', color: 'var(--space-text-grey)', fontSize: 12, lineHeight: 1.5 }}>{description}</p>}
        </div>
        {showClose && (
          <button type="button" onClick={onClose} aria-label="Fechar" style={{ width: 28, height: 28, borderRadius: 7, border: '1px solid var(--space-border-color)', background: 'rgba(255,255,255,0.03)', color: 'var(--space-text-muted)', cursor: 'pointer', flexShrink: 0, fontSize: 16 }}>
            x
          </button>
        )}
      </header>

      <div style={{ padding: density === 'compact' ? 8 : 10, display: 'grid', gap: density === 'compact' ? 6 : 8, maxHeight: 460, overflowY: 'auto' }}>
        {optionList.map((option, index) => (
          <RegisterContextOption key={option.id || option.title || option.label || index} option={option} accent={accentColor} density={density} onSelect={onSelect} />
        ))}
      </div>

      {footer && (
        <footer style={{ padding: '10px 14px 14px', borderTop: '1px solid rgba(255,255,255,0.06)', color: 'var(--space-text-muted)', fontSize: 11 }}>
          {footer}
        </footer>
      )}
    </section>
  );
}