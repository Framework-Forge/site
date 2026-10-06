import React, { useState } from 'react';

function collectOpenIds(nodes) {
  return nodes.reduce((acc, node) => {
    if (node.children?.length) {
      acc.push(node.id);
      acc.push(...collectOpenIds(node.children));
    }
    return acc;
  }, []);
}

function TreeNode({ node, level, selectedId, openIds, onToggle, onSelect }) {
  const hasChildren = Boolean(node.children?.length);
  const open = openIds.includes(node.id);
  const selected = selectedId === node.id;

  return (
    <div>
      <button
        type="button"
        onClick={() => hasChildren ? onToggle(node.id) : onSelect?.(node)}
        style={{
          width: '100%',
          minHeight: 34,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: `7px 10px 7px ${10 + level * 18}px`,
          border: `1px solid ${selected ? 'rgba(255,122,26,0.45)' : 'transparent'}`,
          borderRadius: 6,
          background: selected ? 'var(--space-orange-subtle)' : 'transparent',
          color: selected ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
          fontFamily: 'var(--font-body)',
          fontSize: 13,
          fontWeight: selected ? 750 : 600,
          cursor: 'pointer',
          textAlign: 'left',
        }}
        onDoubleClick={() => onSelect?.(node)}
      >
        <span style={{ width: 14, color: hasChildren ? 'var(--space-text-muted)' : 'transparent', transform: open ? 'rotate(90deg)' : 'rotate(0deg)', transition: 'transform 0.18s' }}>
          {'>'}
        </span>
        {node.icon && <span style={{ width: 16, height: 16, display: 'inline-flex', color: selected ? 'var(--space-orange-primary)' : 'var(--space-text-muted)' }}>{node.icon}</span>}
        <span style={{ flex: 1, minWidth: 0, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{node.label}</span>
        {node.badge && (
          <span style={{ fontSize: 10, color: 'var(--space-text-muted)', border: '1px solid var(--space-border-color)', borderRadius: 4, padding: '1px 5px' }}>
            {node.badge}
          </span>
        )}
      </button>
      {hasChildren && open && (
        <div role="group">
          {node.children.map((child) => (
            <TreeNode key={child.id} node={child} level={level + 1} selectedId={selectedId} openIds={openIds} onToggle={onToggle} onSelect={onSelect} />
          ))}
        </div>
      )}
    </div>
  );
}

export default function TreeView({
  items = [],
  selectedId,
  defaultOpenIds,
  onSelect,
  compact = false,
  style,
  ...props
}) {
  const [openIds, setOpenIds] = useState(defaultOpenIds || collectOpenIds(items).slice(0, 2));
  const [internalSelected, setInternalSelected] = useState(selectedId || items[0]?.id);
  const currentSelected = selectedId ?? internalSelected;

  const toggle = (id) => {
    setOpenIds((current) => current.includes(id) ? current.filter((item) => item !== id) : [...current, id]);
  };

  const select = (node) => {
    setInternalSelected(node.id);
    onSelect?.(node);
  };

  return (
    <div
      role="tree"
      style={{
        width: '100%',
        maxWidth: compact ? 260 : 340,
        padding: 8,
        border: '1px solid var(--space-border-color)',
        borderRadius: 8,
        background: 'var(--space-bg-darker)',
        ...style,
      }}
      {...props}
    >
      {items.map((node) => (
        <TreeNode key={node.id} node={node} level={0} selectedId={currentSelected} openIds={openIds} onToggle={toggle} onSelect={select} />
      ))}
    </div>
  );
}
