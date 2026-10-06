import React, { useMemo, useState } from 'react';

function asRgba(color, alpha) {
  if (!color) return `rgba(255, 122, 26, ${alpha})`;
  if (color.startsWith('#')) {
    const raw = color.slice(1);
    const hex = raw.length === 3 ? raw.split('').map((char) => char + char).join('') : raw;
    const value = parseInt(hex, 16);
    if (!Number.isNaN(value)) {
      return `rgba(${(value >> 16) & 255}, ${(value >> 8) & 255}, ${value & 255}, ${alpha})`;
    }
  }
  if (color.startsWith('var(')) return color;
  return color;
}

const toneColors = {
  success: 'var(--color-success)',
  warning: 'var(--color-warning)',
  danger: 'var(--color-error)',
  info: 'var(--color-info)',
  orange: 'var(--space-orange-primary)',
};

function getChildren(item) {
  return item.children || item.options || item.submenu || [];
}

function FloatingContextRow({ item, accent, density, opacity, blur, onSelect, onEnterSubmenu }) {
  const children = getChildren(item);
  const hasChildren = children.length > 0;
  const disabled = Boolean(item.disabled);
  const tone = toneColors[item.tone] || item.color || accent;
  const compact = density === 'compact';

  const handleClick = () => {
    if (disabled) return;
    if (hasChildren) {
      onEnterSubmenu(item, children);
      return;
    }
    item.onSelect?.(item);
    onSelect?.(item);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      style={{
        width: '100%',
        display: 'grid',
        gridTemplateColumns: '24px 1fr auto',
        alignItems: 'center',
        gap: 9,
        minHeight: compact ? 42 : 50,
        padding: compact ? '8px 9px' : '10px 12px',
        border: `1px solid ${item.active ? asRgba(accent, 0.36) : 'rgba(255,255,255,0.09)'}`,
        borderRadius: 5,
        background: item.active
          ? asRgba(accent, 0.16)
          : `linear-gradient(180deg, rgba(18,18,22,${opacity}), rgba(14,14,18,${Math.min(1, opacity + 0.05)}))`,
        backdropFilter: `blur(${blur}px)`,
        boxShadow: '0 10px 28px rgba(0,0,0,0.30), inset 0 1px 0 rgba(255,255,255,0.035)',
        color: disabled ? 'var(--space-text-muted)' : 'var(--space-text-white)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.52 : 1,
        fontFamily: 'var(--font-body)',
        textAlign: 'left',
        transition: 'background 0.14s ease, border-color 0.14s ease, transform 0.14s ease',
      }}
      onMouseEnter={(event) => {
        if (!disabled) {
          event.currentTarget.style.background = asRgba(accent, 0.1);
          event.currentTarget.style.borderColor = asRgba(accent, 0.28);
          event.currentTarget.style.transform = 'translateX(2px)';
        }
      }}
      onMouseLeave={(event) => {
        event.currentTarget.style.background = item.active
          ? asRgba(accent, 0.16)
          : `linear-gradient(180deg, rgba(18,18,22,${opacity}), rgba(14,14,18,${Math.min(1, opacity + 0.05)}))`;
        event.currentTarget.style.borderColor = item.active ? asRgba(accent, 0.36) : 'rgba(255,255,255,0.09)';
        event.currentTarget.style.transform = 'translateX(0)';
      }}
    >
      <span style={{
        width: 20,
        height: 20,
        display: 'grid',
        placeItems: 'center',
        borderRadius: 5,
        color: tone,
        background: asRgba(tone, 0.14),
        border: `1px solid ${asRgba(tone, 0.26)}`,
        fontSize: 11,
        fontWeight: 850,
      }}>
        {item.icon || (item.status === 'done' ? 'v' : item.status === 'locked' ? '!' : 'x')}
      </span>

      <span style={{ minWidth: 0, display: 'grid', gap: 2 }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, minWidth: 0 }}>
          <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', fontSize: compact ? 12 : 13, fontWeight: 850, lineHeight: 1.1 }}>
            {item.label || item.title}
          </span>
          {item.badge && (
            <span style={{ flexShrink: 0, padding: '1px 4px', borderRadius: 4, background: asRgba(tone, 0.12), color: tone, border: `1px solid ${asRgba(tone, 0.22)}`, fontSize: 9, fontWeight: 800 }}>
              {item.badge}
            </span>
          )}
        </span>
        {(item.description || item.meta) && (
          <span style={{ display: 'flex', gap: 7, alignItems: 'center', color: item.metaTone === 'danger' ? 'var(--color-error)' : 'var(--space-text-muted)', fontSize: 10, lineHeight: 1.25 }}>
            {item.description && <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{item.description}</span>}
            {item.meta && <span style={{ flexShrink: 0, color: item.metaTone === 'danger' ? 'var(--color-error)' : 'var(--space-text-grey)', fontWeight: 700 }}>{item.meta}</span>}
          </span>
        )}
      </span>

      <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'var(--space-text-muted)', fontSize: 10 }}>
        {item.count !== undefined && <span>{item.count}</span>}
        {item.keybind && <kbd style={{ fontFamily: 'var(--font-mono)', fontSize: 9, color: 'var(--space-text-grey)', border: '1px solid var(--space-border-color)', borderRadius: 4, padding: '1px 4px', background: 'rgba(0,0,0,0.22)' }}>{item.keybind}</kbd>}
        {hasChildren && <span style={{ color: accent }}>{'>'}</span>}
      </span>
    </button>
  );
}

export default function FloatingContextMenu({
  title = 'Stage 1',
  subtitle,
  headerMeta,
  items = [],
  width = 310,
  accent = 'var(--space-orange-primary)',
  opacity = 0.84,
  blur = 12,
  density = 'compact',
  showClose = true,
  onClose,
  onSelect,
  onBack,
  style,
  ...props
}) {
  const rootMenu = useMemo(() => ({ title, subtitle, headerMeta, items }), [title, subtitle, headerMeta, items]);
  const [stack, setStack] = useState([]);
  const current = stack[stack.length - 1] || rootMenu;
  const canGoBack = stack.length > 0;

  const enterSubmenu = (item, children) => {
    setStack((currentStack) => [
      ...currentStack,
      {
        title: item.submenuTitle || item.title || item.label,
        subtitle: item.submenuSubtitle || item.description,
        headerMeta: item.submenuMeta || item.meta,
        items: children,
      }
    ]);
  };

  const goBack = () => {
    if (!canGoBack) return;
    setStack((currentStack) => currentStack.slice(0, -1));
    onBack?.();
  };

  return (
    <aside
      style={{
        width: typeof width === 'number' ? width : width,
        maxWidth: '100%',
        display: 'grid',
        gap: 6,
        color: 'var(--space-text-white)',
        fontFamily: 'var(--font-body)',
        ...style,
      }}
      {...props}
    >
      <header style={{
        display: 'flex',
        alignItems: 'center',
        gap: 8,
        minHeight: 42,
        padding: '8px 9px 8px 11px',
        border: '1px solid rgba(255,255,255,0.12)',
        borderRadius: 6,
        background: `linear-gradient(180deg, rgba(10,10,12,${opacity}), rgba(17,17,22,${Math.min(1, opacity + 0.04)}))`,
        backdropFilter: `blur(${blur}px)`,
        boxShadow: '0 12px 34px rgba(0,0,0,0.32), inset 0 1px 0 rgba(255,255,255,0.04)',
      }}>
        {canGoBack && (
          <button type="button" onClick={goBack} aria-label="Voltar" style={{ width: 24, height: 24, display: 'grid', placeItems: 'center', borderRadius: 4, border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(0,0,0,0.24)', color: 'var(--space-text-grey)', cursor: 'pointer', fontSize: 15 }}>
            {'<'}
          </button>
        )}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 7, minWidth: 0 }}>
            <strong style={{ color: 'var(--space-text-white)', fontSize: 12, fontWeight: 900, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{current.title}</strong>
            {current.headerMeta && <span style={{ color: 'var(--space-text-muted)', fontSize: 9, fontFamily: 'var(--font-mono)' }}>{current.headerMeta}</span>}
          </div>
          {current.subtitle && <div style={{ marginTop: 3, color: 'var(--space-text-muted)', fontSize: 10, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{current.subtitle}</div>}
        </div>
        {showClose && (
          <button type="button" onClick={onClose} aria-label="Fechar" style={{ width: 22, height: 22, display: 'grid', placeItems: 'center', borderRadius: 4, border: '1px solid rgba(255,255,255,0.09)', background: 'rgba(0,0,0,0.24)', color: 'var(--space-text-muted)', cursor: 'pointer', fontSize: 12 }}>
            x
          </button>
        )}
      </header>

      <div style={{ display: 'grid', gap: 6, maxHeight: 430, overflowY: 'auto' }}>
        {current.items.map((item, index) => (
          <FloatingContextRow
            key={item.id || item.label || item.title || index}
            item={item}
            accent={accent}
            density={density}
            opacity={opacity}
            blur={blur}
            onSelect={onSelect}
            onEnterSubmenu={enterSubmenu}
          />
        ))}
      </div>
    </aside>
  );
}