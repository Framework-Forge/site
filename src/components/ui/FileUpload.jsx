import React, { useCallback, useRef, useState } from 'react';

export default function FileUpload({
  accept = '*',
  multiple = false,
  maxSizeMB = 10,
  label = 'Soltar arquivo aqui ou clicar para selecionar',
  sublabel,
  onFiles,
  className = '',
  ...props
}) {
  const [dragging, setDragging] = useState(false);
  const [previews, setPreviews] = useState([]);
  const [error, setError] = useState('');
  const inputRef = useRef(null);

  const processFiles = useCallback((files) => {
    setError('');
    const arr = Array.from(files);
    const valid = arr.filter(f => {
      if (f.size > maxSizeMB * 1024 * 1024) {
        setError(`"${f.name}" excede ${maxSizeMB}MB`);
        return false;
      }
      return true;
    });
    onFiles && onFiles(valid);

    // Preview de imagens
    const newPreviews = [];
    valid.forEach(f => {
      if (f.type.startsWith('image/')) {
        const url = URL.createObjectURL(f);
        newPreviews.push({ url, name: f.name, size: f.size, type: 'image' });
      } else {
        newPreviews.push({ name: f.name, size: f.size, type: 'file' });
      }
    });
    setPreviews(multiple ? prev => [...prev, ...newPreviews] : newPreviews);
  }, [maxSizeMB, multiple, onFiles]);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setDragging(false);
    processFiles(e.dataTransfer.files);
  }, [processFiles]);

  const formatSize = (bytes) => bytes < 1024 * 1024
    ? `${(bytes / 1024).toFixed(1)} KB`
    : `${(bytes / 1024 / 1024).toFixed(1)} MB`;

  return (
    <div className={`file-upload ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: 10, ...props.style }}>
      {/* Zona de drop */}
      <div
        role="button"
        tabIndex={0}
        onClick={() => inputRef.current?.click()}
        onKeyDown={e => e.key === 'Enter' && inputRef.current?.click()}
        onDragOver={e => { e.preventDefault(); setDragging(true); }}
        onDragLeave={() => setDragging(false)}
        onDrop={onDrop}
        style={{
          border: `2px dashed ${dragging ? 'var(--space-orange-primary)' : 'var(--space-border-color)'}`,
          borderRadius: 'var(--space-radius-lg)',
          padding: '32px 24px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 8,
          cursor: 'pointer',
          backgroundColor: dragging ? 'var(--space-orange-subtle)' : 'var(--space-bg-input)',
          boxShadow: dragging ? '0 0 20px var(--space-orange-glow)' : 'none',
          transition: 'all 0.2s',
          outline: 'none',
        }}
      >
        {/* Ícone de upload */}
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" style={{ color: dragging ? 'var(--space-orange-primary)' : 'var(--space-text-muted)', transition: 'color 0.2s' }}>
          <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
          <polyline points="17 8 12 3 7 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
          <line x1="12" y1="3" x2="12" y2="15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        </svg>
        <span style={{ fontSize: 13, fontWeight: 600, color: dragging ? 'var(--space-orange-primary)' : 'var(--space-text-grey)', textAlign: 'center' }}>
          {label}
        </span>
        <span style={{ fontSize: 11, color: 'var(--space-text-muted)' }}>
          {sublabel || `Tamanho máximo: ${maxSizeMB}MB`}
        </span>
      </div>

      <input
        ref={inputRef}
        type="file"
        accept={accept}
        multiple={multiple}
        style={{ display: 'none' }}
        onChange={e => processFiles(e.target.files)}
      />

      {/* Erro */}
      {error && (
        <div style={{ fontSize: 12, color: '#FF3B4F', padding: '6px 10px', background: 'rgba(255,59,79,0.1)', borderRadius: 6, border: '1px solid rgba(255,59,79,0.2)' }}>
          ⚠ {error}
        </div>
      )}

      {/* Grid de previews */}
      {previews.length > 0 && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: 8 }}>
          {previews.map((p, i) => (
            <div key={i} style={{
              position: 'relative',
              borderRadius: 8,
              overflow: 'hidden',
              border: '1px solid var(--space-border-color)',
              background: 'var(--space-bg-darker)',
              aspectRatio: '1',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}>
              {p.type === 'image' ? (
                <img src={p.url} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                <div style={{ padding: 8, textAlign: 'center' }}>
                  <div style={{ fontSize: 22 }}>📄</div>
                  <div style={{ fontSize: 9, color: 'var(--space-text-muted)', marginTop: 4, wordBreak: 'break-all' }}>{p.name.slice(0, 12)}</div>
                </div>
              )}
              {/* Remover */}
              <button
                type="button"
                onClick={(e) => { e.stopPropagation(); setPreviews(pv => pv.filter((_, j) => j !== i)); }}
                style={{
                  position: 'absolute', top: 3, right: 3,
                  width: 18, height: 18, borderRadius: '50%',
                  background: 'rgba(0,0,0,0.7)', border: 'none', color: '#fff',
                  fontSize: 10, cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}
              >×</button>
              <div style={{ position: 'absolute', bottom: 2, left: 4, right: 4, fontSize: 8, color: 'rgba(255,255,255,0.45)', textAlign: 'center' }}>
                {formatSize(p.size)}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
