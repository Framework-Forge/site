import React from 'react';
import Card from './Card';

export default function ActionCard({
  title,
  description,
  icon,
  actions,
  onClick,
  glow = true,
  className = '',
  children,
  ...props
}) {
  return (
    <Card
      title={title}
      description={description}
      icon={icon}
      onClick={onClick}
      className={`action-card ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '12px',
        borderLeft: glow ? '3px solid var(--space-orange-primary)' : '3px solid var(--space-border-color)',
        ...props.style
      }}
      {...props}
    >
      {children}
      {actions && (
        <div
          style={{
            display: 'flex',
            gap: '8px',
            marginTop: '12px',
            paddingTop: '12px',
            borderTop: '1px solid var(--space-border-color)',
            width: '100%'
          }}
        >
          {actions}
        </div>
      )}
    </Card>
  );
}
