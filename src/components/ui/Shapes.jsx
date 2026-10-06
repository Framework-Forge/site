import React from 'react';

// Filtro de Glow SVG global
const GlowFilter = ({ id }) => (
  <defs>
    <filter id={id} x="-25%" y="-25%" width="150%" height="150%">
      <feGaussianBlur stdDeviation="3.5" result="blur" />
      <feMerge>
        <feMergeNode in="blur" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

// Helper de parsing seguro para evitar crash caso venha objeto de evento ou string
function getSafeProgress(val) {
  if (val === null || val === undefined || typeof val === 'object') return 0;
  const parsed = parseFloat(val);
  return isNaN(parsed) ? 0 : Math.min(Math.max(parsed, 0), 100);
}

// Helper para renderizar o ícone no centro da shape
function renderShapeIcon(icon, iconColor = 'white', iconScaling = 0.4, iconTranslateX = 0, iconTranslateY = 0, size = 40) {
  if (!icon) return null;

  // Se o ícone vem no contrato do MRI { viewBox: [w, h], paths: string | string[] }
  if (icon.viewBox && icon.paths) {
    const [w, h] = icon.viewBox;
    const paths = Array.isArray(icon.paths) ? icon.paths : [icon.paths];
    const translateStr = `translate(${iconTranslateX}px, ${iconTranslateY}px)`;
    return (
      <div
        style={{
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          pointerEvents: 'none',
          top: 0,
          left: 0
        }}
      >
        <svg
          viewBox={`0 0 ${w} ${h}`}
          style={{
            width: `${size * iconScaling}px`,
            height: `${size * iconScaling}px`,
            transform: translateStr,
            transformOrigin: 'center',
            overflow: 'visible'
          }}
        >
          {paths.map((p, idx) => (
            <path key={idx} d={p} fill={iconColor} />
          ))}
        </svg>
      </div>
    );
  }

  // Se for um elemento React direto (ex: ícone Lucide)
  return (
    <div
      style={{
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        top: 0,
        left: 0,
        color: iconColor,
        transform: `translate(${iconTranslateX}px, ${iconTranslateY}px) scale(${iconScaling * 2.2})`,
        transformOrigin: 'center'
      }}
    >
      {icon}
    </div>
  );
}

// 1. MriCircleRing
export function MriCircleRing({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.4,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3.5,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const radius = 20 - ringSize;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = circumference - (clampedProgress / 100) * circumference;
  const filterId = `glow-cring-${size}`;

  return (
    <div
      className={`mri-circle-ring ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        {/* Preenchimento de fundo */}
        <circle cx="20" cy="20" r={radius} fill={innerColor} />
        {/* Outline */}
        {displayOutline && (
          <circle cx="20" cy="20" r={radius} fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        {/* Progresso Ativo */}
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={circumference}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 2. MriCircleFill
export function MriCircleFill({
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.4,
  iconTranslateX = 0,
  iconTranslateY = 0,
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const filterId = `glow-cfill-${size}`;
  const clampedProgress = getSafeProgress(progressValue);
  const pct = clampedProgress / 100;

  return (
    <div
      className={`mri-circle-fill ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <circle
          cx="20"
          cy="20"
          r={16 * pct}
          fill={progressColor}
          filter={`url(#${filterId})`}
          style={{ transition: 'r 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 3. MriInnerCircle
export function MriInnerCircle(props) {
  const size = props.height || props.width || 40;
  return (
    <div style={{ display: 'inline-flex', position: 'relative', width: size, height: size, alignItems: 'center', justifyContent: 'center' }}>
      <MriCircleRing {...props} />
      <MriCircleFill {...props} icon={null} width={size * 0.36} height={size * 0.36} style={{ position: 'absolute' }} />
    </div>
  );
}

// 4. MriSplitCircle
export function MriSplitCircle({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.4,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3.5,
  dashes = 8,
  gap = 4,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const radius = 20 - ringSize;
  const circumference = 2 * Math.PI * radius;
  
  // Efeito Tracejado (Dasharray dinâmico para split-circle)
  const dashLength = (circumference - (dashes * gap)) / dashes;
  const strokeDasharray = `${dashLength} ${gap}`;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = (clampedProgress / 100) * circumference;

  return (
    <div
      className={`mri-split-circle ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ transform: 'rotate(-90deg)', overflow: 'visible' }}>
        <defs>
          <linearGradient id="split-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor={progressColor} />
            <stop offset="100%" stopColor={progressColor} stopOpacity={0.8} />
          </linearGradient>
        </defs>
        <circle cx="20" cy="20" r={radius} fill={innerColor} />
        {displayOutline && (
          <circle cx="20" cy="20" r={radius} fill="none" stroke={outlineColor} strokeWidth={ringSize} strokeDasharray={strokeDasharray} />
        )}
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke="url(#split-grad)"
          strokeWidth={ringSize}
          strokeDasharray={strokeDasharray}
          strokeDashoffset={circumference - dashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 5. MriPartialCircleRing
export function MriPartialCircleRing({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.4,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3.5,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const radius = 20 - ringSize;
  const totalArc = 2 * Math.PI * radius * 0.75;
  const circumference = 2 * Math.PI * radius;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = totalArc - (clampedProgress / 100) * totalArc;

  return (
    <div
      className={`mri-partial-circle ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ transform: 'rotate(135deg)', overflow: 'visible' }}>
        <circle cx="20" cy="20" r={radius} fill={innerColor} />
        {displayOutline && (
          <circle cx="20" cy="20" r={radius} fill="none" stroke={outlineColor} strokeWidth={ringSize} strokeDasharray={`${totalArc} ${circumference}`} strokeLinecap="round" />
        )}
        <circle
          cx="20"
          cy="20"
          r={radius}
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={`${totalArc} ${circumference}`}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 6. MriHexagonRing
export function MriHexagonRing({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.3,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const filterId = `glow-hring-${size}`;
  const pathLength = 132;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = pathLength - (clampedProgress / 100) * pathLength;

  return (
    <div
      className={`mri-hexagon-ring ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 50 50" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        {/* Fundo preenchido */}
        <polygon points="25,4 44,15 44,35 25,46 6,35 6,15" fill={innerColor} />
        {/* Outline */}
        {displayOutline && (
          <polygon points="25,4 44,15 44,35 25,46 6,35 6,15" fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        {/* Progresso Ativo */}
        <path
          d="M 25,4 L 44,15 L 44,35 L 25,46 L 6,35 L 6,15 Z"
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 7. MriDiamondRing
export function MriDiamondRing({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.35,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const filterId = `glow-dring-${size}`;
  const pathLength = 91;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = pathLength - (clampedProgress / 100) * pathLength;

  return (
    <div
      className={`mri-diamond-ring ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <polygon points="20,4 36,20 20,36 4,20" fill={innerColor} />
        {displayOutline && (
          <polygon points="20,4 36,20 20,36 4,20" fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        <path
          d="M 20,4 L 36,20 L 20,36 L 4,20 Z"
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 8. MriTriangleRing
export function MriTriangleRing({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.35,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const filterId = `glow-tring-${size}`;
  const pathLength = 97;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = pathLength - (clampedProgress / 100) * pathLength;

  return (
    <div
      className={`mri-triangle-ring ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <polygon points="20,5 36,33 4,33" fill={innerColor} />
        {displayOutline && (
          <polygon points="20,5 36,33 4,33" fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        <path
          d="M 20,5 L 36,33 L 4,33 Z"
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 9. MriSquareRing
export function MriSquareRing({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.45,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const filterId = `glow-sring-${size}`;
  const pathLength = 120;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = pathLength - (clampedProgress / 100) * pathLength;

  return (
    <div
      className={`mri-square-ring ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <rect x="5" y="5" width="30" height="30" rx="4" fill={innerColor} />
        {displayOutline && (
          <rect x="5" y="5" width="30" height="30" rx="4" fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        <rect
          x="5"
          y="5"
          width="30"
          height="30"
          rx="4"
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 10. MriSquareFill
export function MriSquareFill({
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.45,
  iconTranslateX = 0,
  iconTranslateY = 0,
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const filterId = `glow-sfill-${size}`;
  const clampedProgress = getSafeProgress(progressValue);
  const pct = clampedProgress / 100;

  return (
    <div
      className={`mri-square-fill ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <rect
          x={20 - 15 * pct}
          y={20 - 15 * pct}
          width={30 * pct}
          height={30 * pct}
          rx={4 * pct}
          fill={progressColor}
          filter={`url(#${filterId})`}
          style={{ transition: 'all 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 11. MriPillRing
export function MriPillRing({
  displayOutline = true,
  height = 24,
  width = 60,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.4,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3,
  className = '',
  ...props
}) {
  const sizeW = width || 60;
  const sizeH = height || 24;
  const filterId = `glow-pring-${sizeW}`;
  const pathLength = 175;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = pathLength - (clampedProgress / 100) * pathLength;

  return (
    <div
      className={`mri-pill-ring ${className}`}
      style={{ position: 'relative', width: sizeW, height: sizeH, display: 'inline-block' }}
      {...props}
    >
      <svg width={sizeW} height={sizeH} viewBox="0 0 80 30" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <rect x="3" y="3" width="74" height="24" rx="12" ry="12" fill={innerColor} />
        {displayOutline && (
          <rect x="3" y="3" width="74" height="24" rx="12" ry="12" fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        <rect
          x="3"
          y="3"
          width="74"
          height="24"
          rx="12"
          ry="12"
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, Math.min(sizeW, sizeH))}
    </div>
  );
}

// 12. MriStarRing
export function MriStarRing({
  displayOutline = true,
  height = 40,
  width = 40,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.35,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 2.5,
  className = '',
  ...props
}) {
  const size = height || width || 40;
  const filterId = `glow-star-${size}`;
  const pathLength = 112;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = pathLength - (clampedProgress / 100) * pathLength;

  return (
    <div
      className={`mri-star-ring ${className}`}
      style={{ position: 'relative', width: size, height: size, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size} viewBox="0 0 40 40" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <polygon points="20,3 24,14 36,14 27,21 30,32 20,25 10,32 13,21 4,14 16,14" fill={innerColor} />
        {displayOutline && (
          <polygon points="20,3 24,14 36,14 27,21 30,32 20,25 10,32 13,21 4,14 16,14" fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        <path
          d="M 20,3 L 24,14 L 36,14 L 27,21 L 30,32 L 20,25 L 10,32 L 13,21 L 4,14 L 16,14 Z"
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 13. MriBadgeShape
export function MriBadgeShape({
  displayOutline = true,
  height = 34,
  width = 34,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.34,
  iconTranslateX = 0,
  iconTranslateY = 0,
  innerColor = 'rgba(5, 5, 8, 0.65)',
  outlineColor = 'rgba(255,255,255,0.06)',
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  ringSize = 3,
  className = '',
  ...props
}) {
  const size = height || width || 34;
  const filterId = `glow-badge-${size}`;
  const pathLength = 186;
  const clampedProgress = getSafeProgress(progressValue);
  const dashoffset = pathLength - (clampedProgress / 100) * pathLength;

  return (
    <div
      className={`mri-badge-shape ${className}`}
      style={{ position: 'relative', width: size, height: size * 0.5, display: 'inline-block' }}
      {...props}
    >
      <svg width={size} height={size * 0.5} viewBox="0 0 100 50" style={{ overflow: 'visible' }}>
        <GlowFilter id={filterId} />
        <polygon points="10,5 90,5 95,25 90,45 10,45 5,25" fill={innerColor} />
        {displayOutline && (
          <polygon points="10,5 90,5 95,25 90,45 10,45 5,25" fill="none" stroke={outlineColor} strokeWidth={ringSize} />
        )}
        <path
          d="M 10,5 L 90,5 L 95,25 L 90,45 L 10,45 L 5,25 Z"
          fill="none"
          stroke={progressColor}
          strokeWidth={ringSize}
          strokeDasharray={pathLength}
          strokeDashoffset={dashoffset}
          strokeLinecap="round"
          filter={`url(#${filterId})`}
          style={{ transition: 'stroke-dashoffset 0.3s ease' }}
        />
      </svg>
      {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, size)}
    </div>
  );
}

// 14. MriHorizontalBar
export function MriHorizontalBar({
  height = 8,
  width = 120,
  icon = null,
  iconColor = 'white',
  iconScaling = 0.6,
  iconTranslateX = 0,
  iconTranslateY = 0,
  progressColor = 'var(--space-orange-primary)',
  progressValue = 100,
  className = '',
  ...props
}) {
  const sizeW = width || 120;
  const sizeH = height || 8;
  const clampedProgress = getSafeProgress(progressValue);

  return (
    <div
      className={`mri-horizontal-bar ${className}`}
      style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', width: sizeW, ...props.style }}
      {...props}
    >
      {icon && (
        <div style={{ width: sizeH * 3, height: sizeH * 3, position: 'relative', flexShrink: 0 }}>
          {renderShapeIcon(icon, iconColor, iconScaling, iconTranslateX, iconTranslateY, sizeH * 3)}
        </div>
      )}
      <div style={{ flexGrow: 1, height: sizeH, backgroundColor: 'rgba(255,255,255,0.06)', borderRadius: sizeH / 2, overflow: 'hidden', position: 'relative' }}>
        <div
          style={{
            height: '100%',
            width: `${clampedProgress}%`,
            backgroundColor: progressColor,
            borderRadius: sizeH / 2,
            boxShadow: `0 0 8px ${progressColor}`,
            transition: 'width 0.3s ease'
          }}
        />
      </div>
    </div>
  );
}

// 15. MriIconPercentage (Para retrocompatibilidade)
export function MriIconPercentage({ size = 48, percentage = 60, icon, color = 'var(--space-orange-primary)', glow = true, className = '', ...props }) {
  return (
    <MriCircleRing
      height={size}
      width={size}
      icon={icon}
      iconColor="white"
      progressColor={color}
      progressValue={percentage}
      className={className}
      {...props}
    />
  );
}

// ---- ALIASES PARA RETROCOMPATIBILIDADE ----
export {
  MriBadgeShape as BadgeShape,
  MriCircleFill as CircleFill,
  MriCircleRing as CircleRing,
  MriDiamondRing as DiamondRing,
  MriHexagonRing as HexagonRing,
  MriHorizontalBar as HorizontalBar,
  MriIconPercentage as IconPercentage,
  MriInnerCircle as InnerCircle,
  MriPartialCircleRing as PartialCircleRing,
  MriPillRing as PillRing,
  MriSplitCircle as SplitCircle,
  MriSquareFill as SquareFill,
  MriSquareRing as SquareRing,
  MriStarRing as StarRing,
  MriTriangleRing as TriangleRing
};
