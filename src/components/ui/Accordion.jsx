import React, { useState } from 'react';

export default function Accordion({
  items = [],
  defaultActiveId,
  className = '',
  ...props
}) {
  const [activeId, setActiveId] = useState(defaultActiveId);

  const toggleItem = (id) => {
    setActiveId(activeId === id ? null : id);
  };

  return (
    <div
      className={`accordion-container ${className}`}
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '8px',
        width: '100%',
        ...props.style
      }}
      {...props}
    >
      {items.map((item) => {
        const isOpen = activeId === item.id;
        return (
          <div
            key={item.id}
            style={{
              backgroundColor: 'var(--space-bg-card)',
              border: `1px solid ${isOpen ? 'rgba(255, 122, 26, 0.3)' : 'var(--space-border-color)'}`,
              borderRadius: 'var(--space-radius-md)',
              overflow: 'hidden',
              transition: 'var(--space-transition)'
            }}
          >
            {/* Header / Trigger */}
            <button
              onClick={() => toggleItem(item.id)}
              style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                padding: '14px 18px',
                background: 'none',
                border: 'none',
                color: isOpen ? 'var(--space-orange-primary)' : 'var(--space-text-white)',
                cursor: 'pointer',
                textAlign: 'left',
                fontFamily: 'var(--font-heading)',
                fontSize: '14px',
                fontWeight: '600',
                outline: 'none',
                transition: 'var(--space-transition)'
              }}
            >
              <span>{item.title}</span>
              {/* Seta Rotacionável */}
              <span
                style={{
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                  transition: 'transform 0.25s ease',
                  fontSize: '12px',
                  lineHeight: '1',
                  color: isOpen ? 'var(--space-orange-primary)' : 'var(--space-text-grey)'
                }}
              >
                ▼
              </span>
            </button>
            
            {/* Content area */}
            <div
              style={{
                maxHeight: isOpen ? '500px' : '0px',
                overflow: 'hidden',
                transition: isOpen
                  ? 'max-height 0.35s cubic-bezier(0.4, 0, 0.2, 1)'
                  : 'max-height 0.25s cubic-bezier(0, 1, 0, 1)',
                borderTop: isOpen ? '1px solid var(--space-border-color)' : 'none'
              }}
            >
              <div
                style={{
                  padding: '14px 18px',
                  color: 'var(--space-text-grey)',
                  fontSize: '13px',
                  lineHeight: '1.6'
                }}
              >
                {item.content}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
