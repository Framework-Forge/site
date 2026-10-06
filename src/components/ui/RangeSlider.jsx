import React, { useCallback, useRef, useState } from 'react';

export default function RangeSlider({
  min = 0,
  max = 100,
  step = 1,
  value,
  defaultValue,
  onChange,
  label,
  showValues = true,
  color = 'var(--space-orange-primary)',
  className = '',
  ...props
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = useState(defaultValue || [min, max]);
  const range = isControlled ? value : internal;
  const [low, high] = range;
  const [dragging, setDragging] = useState(null);
  const trackRef = useRef(null);

  const toPercent = (v) => ((v - min) / (max - min)) * 100;
  const clampStep = (v) => Math.round(Math.max(min, Math.min(max, v)) / step) * step;

  const getValueFromEvent = useCallback((e) => {
    const track = trackRef.current;
    if (!track) return 0;
    const rect = track.getBoundingClientRect();
    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const ratio = Math.max(0, Math.min(1, (clientX - rect.left) / rect.width));
    return clampStep(min + ratio * (max - min));
  }, [min, max, step]);

  const handleTrackMouseDown = useCallback((e) => {
    const val = getValueFromEvent(e);
    const distLow = Math.abs(val - low);
    const distHigh = Math.abs(val - high);
    const handle = distLow <= distHigh ? 'low' : 'high';
    setDragging(handle);

    const move = (ev) => {
      const v = getValueFromEvent(ev);
      const next = handle === 'low'
        ? [Math.min(v, high - step), high]
        : [low, Math.max(v, low + step)];
      if (!isControlled) setInternal(next);
      onChange && onChange(next);
    };
    const up = () => {
      setDragging(null);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
      window.removeEventListener('touchmove', move);
      window.removeEventListener('touchend', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
    window.addEventListener('touchmove', move);
    window.addEventListener('touchend', up);
  }, [low, high, step, getValueFromEvent, isControlled, onChange]);

  const lowPct = toPercent(low);
  const highPct = toPercent(high);

  return (
    <div className={`range-slider ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: 10, ...props.style }}>
      {(label || showValues) && (
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          {label && <span style={{ fontSize: 12, fontWeight: 600, color: 'var(--space-text-grey)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</span>}
          {showValues && (
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--space-text-white)', fontWeight: 600 }}>
              {low} — {high}
            </span>
          )}
        </div>
      )}

      {/* Track */}
      <div
        ref={trackRef}
        onMouseDown={handleTrackMouseDown}
        onTouchStart={handleTrackMouseDown}
        style={{
          position: 'relative',
          height: 6,
          borderRadius: 99,
          backgroundColor: 'rgba(255,255,255,0.08)',
          cursor: 'pointer',
          userSelect: 'none',
        }}
      >
        {/* Faixa ativa */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: `${lowPct}%`,
          width: `${highPct - lowPct}%`,
          height: '100%',
          borderRadius: 99,
          background: `linear-gradient(90deg, ${color}AA, ${color})`,
          boxShadow: `0 0 8px ${color}55`,
          transition: dragging ? 'none' : 'left 0.1s, width 0.1s',
        }} />

        {/* Handle LOW */}
        {['low', 'high'].map((handle) => {
          const pct = handle === 'low' ? lowPct : highPct;
          return (
            <div
              key={handle}
              style={{
                position: 'absolute',
                top: '50%',
                left: `${pct}%`,
                transform: 'translate(-50%, -50%)',
                width: 18,
                height: 18,
                borderRadius: '50%',
                background: color,
                border: '3px solid var(--space-bg-darkest)',
                boxShadow: `0 0 10px ${color}80`,
                cursor: dragging === handle ? 'grabbing' : 'grab',
                zIndex: dragging === handle ? 3 : 2,
                transition: dragging ? 'none' : 'left 0.1s',
              }}
            />
          );
        })}
      </div>

      {/* Labels min/max */}
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <span style={{ fontSize: 10, color: 'var(--space-text-muted)' }}>{min}</span>
        <span style={{ fontSize: 10, color: 'var(--space-text-muted)' }}>{max}</span>
      </div>
    </div>
  );
}
