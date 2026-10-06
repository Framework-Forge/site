import React from 'react';

export default function Stepper({
  steps = [],       // [{ label, description?, icon? }]
  activeStep = 0,   // índice do passo atual (0-based)
  orientation = 'horizontal', // 'horizontal' | 'vertical'
  onStepClick,
  className = '',
  ...props
}) {
  const isVertical = orientation === 'vertical';

  return (
    <div
      className={`stepper ${className}`}
      role="list"
      aria-label="Passos"
      style={{
        display: 'flex',
        flexDirection: isVertical ? 'column' : 'row',
        alignItems: isVertical ? 'flex-start' : 'center',
        gap: isVertical ? 0 : 0,
        width: '100%',
        ...props.style,
      }}
      {...props}
    >
      {steps.map((step, i) => {
        const isPast    = i < activeStep;
        const isCurrent = i === activeStep;
        const isFuture  = i > activeStep;
        const isLast    = i === steps.length - 1;
        const clickable = onStepClick && isPast;

        const dotColor = isPast ? '#37E35C' : isCurrent ? 'var(--space-orange-primary)' : 'var(--space-bg-input)';
        const dotBorder = isPast ? '#37E35C' : isCurrent ? 'var(--space-orange-primary)' : 'var(--space-border-color)';
        const connectorColor = isPast ? '#37E35C' : 'var(--space-border-color)';

        return (
          <div
            key={i}
            role="listitem"
            aria-current={isCurrent ? 'step' : undefined}
            style={{
              display: 'flex',
              flexDirection: isVertical ? 'row' : 'column',
              alignItems: isVertical ? 'flex-start' : 'center',
              flex: isVertical ? 'none' : 1,
              position: 'relative',
            }}
          >
            {/* Conector ANTES (horizontal: linha acima, vertical: linha à esquerda) */}
            {!isVertical && i > 0 && (
              <div style={{
                position: 'absolute',
                left: '0%',
                top: 16,
                right: '50%',
                height: 2,
                background: isPast || isCurrent ? connectorColor : 'var(--space-border-color)',
                transition: 'background 0.4s',
                zIndex: 0,
              }} />
            )}
            {!isVertical && !isLast && (
              <div style={{
                position: 'absolute',
                left: '50%',
                top: 16,
                right: 0,
                height: 2,
                background: isPast ? '#37E35C' : 'var(--space-border-color)',
                transition: 'background 0.4s',
                zIndex: 0,
              }} />
            )}

            {/* Linha vertical (esquerda do dot) para orientação vertical */}
            {isVertical && (
              <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginRight: 14, flexShrink: 0 }}>
                {/* Dot */}
                <button
                  type="button"
                  onClick={() => clickable && onStepClick(i)}
                  style={{
                    width: 32, height: 32,
                    borderRadius: '50%',
                    border: `2px solid ${dotBorder}`,
                    background: dotColor,
                    color: isPast ? '#000' : isCurrent ? '#000' : 'var(--space-text-muted)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 13, fontWeight: 700,
                    cursor: clickable ? 'pointer' : 'default',
                    zIndex: 1, flexShrink: 0,
                    boxShadow: isCurrent ? '0 0 14px var(--space-orange-glow)' : isPast ? '0 0 10px rgba(55,227,92,0.4)' : 'none',
                    transition: 'all 0.3s',
                  }}
                >
                  {step.icon || (isPast ? '✓' : i + 1)}
                </button>
                {!isLast && (
                  <div style={{
                    width: 2, flex: 1, minHeight: 32,
                    background: isPast ? '#37E35C' : 'var(--space-border-color)',
                    transition: 'background 0.4s',
                    margin: '4px 0',
                  }} />
                )}
              </div>
            )}

            {/* Dot horizontal */}
            {!isVertical && (
              <button
                type="button"
                onClick={() => clickable && onStepClick(i)}
                style={{
                  width: 32, height: 32, borderRadius: '50%',
                  border: `2px solid ${dotBorder}`,
                  background: dotColor,
                  color: isPast || isCurrent ? '#000' : 'var(--space-text-muted)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 13, fontWeight: 700,
                  cursor: clickable ? 'pointer' : 'default',
                  zIndex: 1, flexShrink: 0, position: 'relative',
                  boxShadow: isCurrent ? '0 0 14px var(--space-orange-glow)' : isPast ? '0 0 10px rgba(55,227,92,0.4)' : 'none',
                  transition: 'all 0.3s',
                }}
              >
                {step.icon || (isPast ? '✓' : i + 1)}
              </button>
            )}

            {/* Label e descrição */}
            <div style={{
              marginTop: isVertical ? 0 : 8,
              textAlign: isVertical ? 'left' : 'center',
              flex: 1,
            }}>
              <div style={{
                fontSize: 12, fontWeight: 600,
                color: isCurrent ? 'var(--space-orange-primary)' : isPast ? '#37E35C' : 'var(--space-text-muted)',
                transition: 'color 0.3s',
                lineHeight: isVertical ? 2 : 1.3,
                whiteSpace: isVertical ? 'nowrap' : 'normal',
              }}>{step.label}</div>
              {step.description && (
                <div style={{ fontSize: 11, color: 'var(--space-text-muted)', marginTop: 2, lineHeight: 1.4 }}>
                  {step.description}
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
}
