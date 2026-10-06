import React, { useEffect, useMemo, useRef, useState } from 'react';

export default function InfiniteScroll({
  items = [],
  batchSize = 8,
  height = 280,
  renderItem,
  loadMoreText = 'Carregando mais itens...',
  endText = 'Fim da lista',
  onLoadMore,
  style,
  ...props
}) {
  const [visibleCount, setVisibleCount] = useState(batchSize);
  const sentinelRef = useRef(null);
  const canLoadMore = visibleCount < items.length;
  const visibleItems = useMemo(() => items.slice(0, visibleCount), [items, visibleCount]);

  useEffect(() => {
    const node = sentinelRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && canLoadMore) {
        setVisibleCount((count) => Math.min(count + batchSize, items.length));
        onLoadMore?.();
      }
    }, { root: node.parentElement, threshold: 0.75 });
    observer.observe(node);
    return () => observer.disconnect();
  }, [batchSize, canLoadMore, items.length, onLoadMore]);

  return (
    <div
      style={{
        width: '100%',
        maxWidth: 460,
        height,
        overflowY: 'auto',
        border: '1px solid var(--space-border-color)',
        borderRadius: 8,
        background: 'var(--space-bg-darker)',
        padding: 10,
        ...style,
      }}
      {...props}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
        {visibleItems.map((item, index) => (
          <div key={item.id ?? index}>
            {renderItem ? renderItem(item, index) : (
              <div style={{ padding: 12, borderRadius: 6, border: '1px solid var(--space-border-color)', background: 'var(--space-bg-card)', color: 'var(--space-text-grey)', fontSize: 13 }}>
                {String(item.label ?? item)}
              </div>
            )}
          </div>
        ))}
        <div ref={sentinelRef} style={{ minHeight: 34, display: 'flex', alignItems: 'center', justifyContent: 'center', color: canLoadMore ? 'var(--space-orange-primary)' : 'var(--space-text-muted)', fontSize: 12, fontWeight: 700 }}>
          {canLoadMore ? loadMoreText : endText}
        </div>
      </div>
    </div>
  );
}
