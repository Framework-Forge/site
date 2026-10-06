import React, { useRef, useState, useCallback } from 'react';

export default function TagInput({
  tags: controlledTags,
  defaultTags = [],
  onChange,
  placeholder = 'Adicionar tag...',
  maxTags,
  suggestions = [],
  label,
  className = '',
  ...props
}) {
  const isControlled = controlledTags !== undefined;
  const [internal, setInternal] = useState(defaultTags);
  const tags = isControlled ? controlledTags : internal;
  const [input, setInput] = useState('');
  const [focused, setFocused] = useState(false);
  const [suggestionIdx, setSuggestionIdx] = useState(-1);
  const inputRef = useRef(null);

  const updateTags = useCallback((next) => {
    if (!isControlled) setInternal(next);
    onChange && onChange(next);
  }, [isControlled, onChange]);

  const addTag = useCallback((val) => {
    const trimmed = val.trim();
    if (!trimmed || tags.includes(trimmed)) return;
    if (maxTags && tags.length >= maxTags) return;
    updateTags([...tags, trimmed]);
    setInput('');
    setSuggestionIdx(-1);
  }, [tags, maxTags, updateTags]);

  const removeTag = useCallback((idx) => {
    updateTags(tags.filter((_, i) => i !== idx));
  }, [tags, updateTags]);

  const filteredSuggestions = suggestions.filter(
    s => s.toLowerCase().includes(input.toLowerCase()) && !tags.includes(s)
  );

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (suggestionIdx >= 0 && filteredSuggestions[suggestionIdx]) {
        addTag(filteredSuggestions[suggestionIdx]);
      } else {
        addTag(input);
      }
    } else if (e.key === 'Backspace' && !input && tags.length) {
      removeTag(tags.length - 1);
    } else if (e.key === 'ArrowDown') {
      setSuggestionIdx(i => Math.min(i + 1, filteredSuggestions.length - 1));
    } else if (e.key === 'ArrowUp') {
      setSuggestionIdx(i => Math.max(i - 1, -1));
    } else if (e.key === 'Escape') {
      setSuggestionIdx(-1);
      setInput('');
    }
  };

  const tagColors = [
    '#FF6B6B', '#FFD45C', '#37E35C', '#45E8FF', '#6C63FF', '#FF9500', '#06B6D4', '#8B5CF6'
  ];

  return (
    <div className={`tag-input ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'relative' }}>
      {label && (
        <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--space-text-grey)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>
          {label}
        </label>
      )}
      <div
        onClick={() => inputRef.current?.focus()}
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          gap: 6,
          padding: '8px 10px',
          borderRadius: 'var(--space-radius-md)',
          border: `1px solid ${focused ? 'var(--space-orange-primary)' : 'var(--space-border-color)'}`,
          backgroundColor: 'var(--space-bg-input)',
          boxShadow: focused ? '0 0 0 2px var(--space-orange-subtle)' : 'none',
          minHeight: 42,
          cursor: 'text',
          transition: 'border-color 0.2s, box-shadow 0.2s',
        }}
      >
        {/* Tags */}
        {tags.map((tag, i) => (
          <span key={tag} style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: 4,
            padding: '2px 8px 2px 10px',
            borderRadius: 20,
            fontSize: 12,
            fontWeight: 600,
            color: '#000',
            backgroundColor: tagColors[i % tagColors.length],
            boxShadow: `0 0 8px ${tagColors[i % tagColors.length]}55`,
            userSelect: 'none',
            animation: 'tag-pop 0.15s cubic-bezier(0.4,0,0.2,1)',
          }}>
            {tag}
            <button
              type="button"
              onClick={e => { e.stopPropagation(); removeTag(i); }}
              style={{
                border: 'none', background: 'none', padding: 0,
                cursor: 'pointer', color: 'rgba(0,0,0,0.55)',
                fontSize: 14, lineHeight: 1, display: 'flex', alignItems: 'center',
              }}
            >×</button>
          </span>
        ))}

        {/* Input */}
        {(!maxTags || tags.length < maxTags) && (
          <input
            ref={inputRef}
            value={input}
            onChange={e => { setInput(e.target.value); setSuggestionIdx(-1); }}
            onKeyDown={handleKeyDown}
            onFocus={() => setFocused(true)}
            onBlur={() => { setFocused(false); setSuggestionIdx(-1); }}
            placeholder={tags.length === 0 ? placeholder : ''}
            style={{
              flex: 1,
              minWidth: 80,
              border: 'none',
              background: 'transparent',
              color: 'var(--space-text-white)',
              fontSize: 13,
              outline: 'none',
              fontFamily: 'var(--font-body)',
            }}
          />
        )}
      </div>

      {/* Sugestões */}
      {focused && input && filteredSuggestions.length > 0 && (
        <div style={{
          position: 'absolute',
          top: '100%',
          left: 0,
          right: 0,
          marginTop: 4,
          backgroundColor: 'var(--space-bg-darker)',
          border: '1px solid var(--space-border-color)',
          borderRadius: 'var(--space-radius-md)',
          overflow: 'hidden',
          boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          zIndex: 50,
        }}>
          {filteredSuggestions.slice(0, 6).map((s, i) => (
            <div
              key={s}
              onMouseDown={e => { e.preventDefault(); addTag(s); }}
              style={{
                padding: '8px 12px',
                fontSize: 13,
                color: i === suggestionIdx ? 'var(--space-orange-primary)' : 'var(--space-text-white)',
                backgroundColor: i === suggestionIdx ? 'var(--space-orange-subtle)' : 'transparent',
                cursor: 'pointer',
                transition: 'background 0.1s',
              }}
            >
              {s}
            </div>
          ))}
        </div>
      )}

      {maxTags && (
        <span style={{ fontSize: 10, color: 'var(--space-text-muted)' }}>
          {tags.length}/{maxTags} tags · Enter ou vírgula para adicionar
        </span>
      )}

      <style>{`
        @keyframes tag-pop {
          from { transform: scale(0.8); opacity: 0; }
          to   { transform: scale(1);   opacity: 1; }
        }
      `}</style>
    </div>
  );
}
