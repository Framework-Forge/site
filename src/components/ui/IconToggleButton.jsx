import React, { useState } from 'react';

export default function IconToggleButton({
  icon,
  activeIcon,
  active,
  defaultActive = false,
  onToggle,
  disabled = false,
  className = '',
  ...props
}) {
  const [internalActive, setInternalActive] = useState(defaultActive);
  
  const isActive = active !== undefined ? active : internalActive;

  const handleToggle = (e) => {
    if (disabled) return;
    const nextState = !isActive;
    if (active === undefined) {
      setInternalActive(nextState);
    }
    if (onToggle) {
      onToggle(nextState, e);
    }
  };

  const renderIcon = isActive && activeIcon ? activeIcon : icon;

  return (
    <button
      className={`icon-toggle-btn ${isActive ? 'active' : ''} ${className}`}
      disabled={disabled}
      onClick={handleToggle}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '40px',
        height: '40px',
        borderRadius: 'var(--space-radius-md)',
        border: '1px solid',
        borderColor: isActive ? 'var(--space-orange-primary)' : 'var(--space-border-color)',
        backgroundColor: isActive ? 'var(--space-orange-subtle)' : 'rgba(255, 255, 255, 0.02)',
        color: isActive ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'var(--space-transition)',
        boxShadow: isActive ? '0 0 10px var(--space-orange-glow)' : 'none',
        opacity: disabled ? 0.4 : 1,
        outline: 'none',
        padding: 0,
        ...props.style
      }}
      onMouseEnter={(e) => {
        if (!disabled && !isActive) {
          e.currentTarget.style.borderColor = 'var(--space-border-hover)';
          e.currentTarget.style.color = 'var(--space-text-white)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.04)';
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !isActive) {
          e.currentTarget.style.borderColor = 'var(--space-border-color)';
          e.currentTarget.style.color = 'var(--space-text-grey)';
          e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.02)';
        }
      }}
      {...props}
    >
      <div style={{ width: '20px', height: '20px', display: 'flex', alignItems: 'center', justify: 'center' }}>
        {renderIcon}
      </div>
    </button>
  );
}
