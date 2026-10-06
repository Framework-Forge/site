import React, { useState } from 'react';

const sizeMap = {
  xs: 24,
  sm: 32,
  md: 48,
  lg: 64,
  xl: 80
};

const statusColors = {
  online: 'var(--color-success)',
  offline: 'var(--space-text-muted)',
  away: 'var(--color-warning)',
  busy: 'var(--color-error)'
};

function getInitials(fullName) {
  if (!fullName) return '';
  const parts = fullName.trim().split(/\s+/).filter(Boolean);
  if (parts.length === 0) return '';
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0]}${parts[parts.length - 1][0]}`.toUpperCase();
}

export default function Avatar({
  src,
  name = '',
  size = 'md',
  status,
  glow = false,
  variant = 'circle',
  tone = 'orange',
  showRing = true,
  className = '',
  style = {},
  ...props
}) {
  const [hasError, setHasError] = useState(false);
  const pixelSize = typeof size === 'number' ? size : (sizeMap[size] || sizeMap.md);
  const radius = variant === 'square' ? 'var(--space-radius-md)' : variant === 'soft' ? '18px' : '50%';
  const accent = tone === 'neutral' ? 'var(--space-border-hover)' : tone === 'success' ? 'var(--color-success)' : 'var(--space-orange-primary)';
  const initials = getInitials(name) || '?';
  const hasImage = Boolean(src && !hasError);

  return (
    <div
      className={`avatar-wrapper avatar-${variant} avatar-${tone} ${className}`}
      title={name || undefined}
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${pixelSize}px`,
        height: `${pixelSize}px`,
        borderRadius: radius,
        background: hasImage
          ? 'var(--space-bg-dark)'
          : 'radial-gradient(circle at 35% 25%, rgba(255, 122, 26, 0.18), var(--space-bg-dark) 58%)',
        border: showRing ? `2px solid ${glow ? accent : 'var(--space-border-color)'}` : 'none',
        boxShadow: glow ? `0 0 14px ${tone === 'success' ? 'rgba(16, 185, 129, 0.32)' : 'var(--space-orange-glow)'}` : 'none',
        color: accent,
        overflow: 'visible',
        flexShrink: 0,
        boxSizing: 'border-box',
        ...style
      }}
      {...props}
    >
      {hasImage ? (
        <img
          src={src}
          alt={name || 'Avatar'}
          onError={() => setHasError(true)}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            borderRadius: radius,
            display: 'block'
          }}
        />
      ) : (
        <span
          style={{
            fontSize: `${pixelSize * 0.38}px`,
            fontWeight: 800,
            color: accent,
            fontFamily: 'var(--font-heading)',
            lineHeight: 1,
            letterSpacing: 0
          }}
        >
          {initials}
        </span>
      )}

      {status && statusColors[status] && (
        <span
          className={`avatar-status ${status}`}
          aria-label={status}
          style={{
            position: 'absolute',
            right: `${Math.max(-2, pixelSize * -0.02)}px`,
            bottom: `${Math.max(-2, pixelSize * -0.02)}px`,
            width: `${Math.max(8, pixelSize * 0.22)}px`,
            height: `${Math.max(8, pixelSize * 0.22)}px`,
            borderRadius: '50%',
            backgroundColor: statusColors[status],
            border: '2px solid var(--space-bg-darkest)',
            boxShadow: `0 0 8px ${statusColors[status]}`,
            boxSizing: 'border-box'
          }}
        />
      )}
    </div>
  );
}

export function AvatarGroup({
  items = [],
  size = 'md',
  max = 4,
  overlap = 12,
  className = '',
  ...props
}) {
  const visibleItems = items.slice(0, max);
  const hiddenCount = Math.max(0, items.length - visibleItems.length);
  const pixelSize = typeof size === 'number' ? size : (sizeMap[size] || sizeMap.md);

  return (
    <div
      className={`avatar-group ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', paddingRight: hiddenCount ? 0 : `${overlap}px` }}
      {...props}
    >
      {visibleItems.map((item, index) => (
        <Avatar
          key={item.id || item.name || index}
          {...item}
          size={size}
          style={{
            marginLeft: index === 0 ? 0 : `-${overlap}px`,
            zIndex: visibleItems.length - index,
            boxShadow: '0 0 0 3px var(--space-bg-darkest)',
            ...(item.style || {})
          }}
        />
      ))}
      {hiddenCount > 0 && (
        <Avatar
          name={`+${hiddenCount}`}
          size={pixelSize}
          variant="circle"
          tone="neutral"
          showRing
          style={{ marginLeft: `-${overlap}px`, zIndex: 0, boxShadow: '0 0 0 3px var(--space-bg-darkest)' }}
        />
      )}
    </div>
  );
}