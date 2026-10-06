import React, { useState } from 'react';

export default function Tabs({
  tabs = [],
  defaultActiveTabId,
  activeTabId,
  onChange,
  layout = 'horizontal', // 'horizontal' | 'vertical'
  className = '',
  ...props
}) {
  const [internalTabId, setInternalTabId] = useState(defaultActiveTabId || (tabs[0] && tabs[0].id));
  const currentTabId = activeTabId !== undefined ? activeTabId : internalTabId;

  const handleTabChange = (id) => {
    if (activeTabId === undefined) {
      setInternalTabId(id);
    }
    if (onChange) {
      onChange(id);
    }
  };

  const activeTabContent = tabs.find((t) => t.id === currentTabId)?.content;

  const isVertical = layout === 'vertical';

  return (
    <div
      className={`tabs-container ${layout} ${className}`}
      style={{
        display: 'flex',
        flexDirection: isVertical ? 'row' : 'column',
        gap: '20px',
        width: '100%',
        ...props.style
      }}
      {...props}
    >
      {/* Header List */}
      <div
        style={{
          display: 'flex',
          flexDirection: isVertical ? 'column' : 'row',
          gap: isVertical ? '4px' : '0px',
          borderBottom: isVertical ? 'none' : '1px solid var(--space-border-color)',
          borderRight: isVertical ? '1px solid var(--space-border-color)' : 'none',
          paddingBottom: isVertical ? '0px' : '0px',
          paddingRight: isVertical ? '12px' : '0px',
          width: isVertical ? '180px' : '100%',
          flexShrink: 0,
          boxSizing: 'border-box'
        }}
      >
        {tabs.map((tab) => {
          const isActive = tab.id === currentTabId;
          return (
            <button
              key={tab.id}
              onClick={() => handleTabChange(tab.id)}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                padding: '12px 16px',
                background: 'none',
                border: 'none',
                color: isActive ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                fontFamily: 'var(--font-heading)',
                fontSize: '13.5px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'var(--space-transition)',
                outline: 'none',
                position: 'relative',
                textAlign: 'left',
                borderBottom: !isVertical && isActive ? '2px solid var(--space-orange-primary)' : '2px solid transparent',
                borderRight: isVertical && isActive ? '2px solid var(--space-orange-primary)' : '2px solid transparent',
                marginRight: isVertical ? '-14px' : '0',
                marginBottom: !isVertical ? '-1px' : '0'
              }}
              onMouseEnter={(e) => {
                if (!isActive) e.currentTarget.style.color = 'var(--space-text-white)';
              }}
              onMouseLeave={(e) => {
                if (!isActive) e.currentTarget.style.color = 'var(--space-text-grey)';
              }}
            >
              {tab.icon && (
                <span style={{ width: '14px', height: '14px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  {tab.icon}
                </span>
              )}
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Content panel */}
      <div style={{ flexGrow: 1 }}>
        {activeTabContent}
      </div>
    </div>
  );
}
