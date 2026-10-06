import React, { useEffect, useMemo, useState } from 'react';
import Button from './Button';

function alpha(color, value) {
  if (!color) return `rgba(255, 122, 26, ${value})`;
  if (color.startsWith('#')) {
    const raw = color.slice(1);
    const hex = raw.length === 3 ? raw.split('').map((char) => char + char).join('') : raw;
    const int = parseInt(hex, 16);
    if (!Number.isNaN(int)) return `rgba(${(int >> 16) & 255}, ${(int >> 8) & 255}, ${int & 255}, ${value})`;
  }
  if (color.startsWith('var(')) return color;
  return color;
}

function initialValues(fields) {
  return fields.reduce((values, field) => {
    if (field.value !== undefined) values[field.name] = field.value;
    else if (field.defaultValue !== undefined) values[field.name] = field.defaultValue;
    else if (field.type === 'checkbox') values[field.name] = Boolean(field.checked);
    else if (field.type === 'range') values[field.name] = field.min ?? 0;
    else values[field.name] = '';
    return values;
  }, {});
}

function FieldControl({ field, value, error, accent, onChange }) {
  const baseInput = {
    width: '100%',
    minHeight: 38,
    borderRadius: 7,
    border: `1px solid ${error ? 'var(--color-error)' : 'var(--space-border-color)'}`,
    background: 'rgba(5,5,7,0.58)',
    color: 'var(--space-text-white)',
    outline: 'none',
    padding: '9px 11px',
    fontFamily: field.mono ? 'var(--font-mono)' : 'var(--font-body)',
    fontSize: 13,
    boxShadow: error ? '0 0 0 2px rgba(239,68,68,0.12)' : 'none',
  };

  if (field.type === 'textarea') {
    return (
      <textarea
        value={value}
        placeholder={field.placeholder}
        rows={field.rows || 4}
        maxLength={field.maxLength}
        disabled={field.disabled}
        onChange={(event) => onChange(event.target.value)}
        style={{ ...baseInput, resize: 'vertical', lineHeight: 1.5 }}
      />
    );
  }

  if (field.type === 'select') {
    return (
      <select value={value} disabled={field.disabled} onChange={(event) => onChange(event.target.value)} style={{ ...baseInput, colorScheme: 'dark' }}>
        {(field.options || []).map((option) => {
          const opt = typeof option === 'string' ? { value: option, label: option } : option;
          return <option key={opt.value} value={opt.value}>{opt.label}</option>;
        })}
      </select>
    );
  }

  if (field.type === 'checkbox') {
    return (
      <button
        type="button"
        disabled={field.disabled}
        onClick={() => onChange(!value)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: 10,
          width: '100%',
          minHeight: 38,
          padding: '8px 10px',
          borderRadius: 7,
          border: `1px solid ${value ? alpha(accent, 0.45) : 'var(--space-border-color)'}`,
          background: value ? alpha(accent, 0.12) : 'rgba(5,5,7,0.58)',
          color: 'var(--space-text-white)',
          cursor: field.disabled ? 'not-allowed' : 'pointer',
          textAlign: 'left',
        }}
      >
        <span style={{ width: 18, height: 18, borderRadius: 5, display: 'grid', placeItems: 'center', flexShrink: 0, border: `1px solid ${value ? accent : 'var(--space-border-color)'}`, background: value ? accent : 'rgba(255,255,255,0.03)', color: value ? '#08080a' : 'transparent', fontWeight: 900 }}>v</span>
        <span style={{ color: 'var(--space-text-grey)', fontSize: 12 }}>{field.checkboxLabel || field.placeholder || 'Ativado'}</span>
      </button>
    );
  }

  if (field.type === 'range') {
    const min = field.min ?? 0;
    const max = field.max ?? 100;
    const percent = ((Number(value) - min) / (max - min || 1)) * 100;
    return (
      <div style={{ display: 'grid', gap: 8 }}>
        <input
          type="range"
          min={min}
          max={max}
          step={field.step || 1}
          value={value}
          disabled={field.disabled}
          onChange={(event) => onChange(Number(event.target.value))}
          style={{ width: '100%', accentColor: accent }}
        />
        <div style={{ height: 5, borderRadius: 999, background: 'rgba(255,255,255,0.07)', overflow: 'hidden' }}>
          <div style={{ width: `${percent}%`, height: '100%', background: accent, boxShadow: `0 0 10px ${accent}` }} />
        </div>
      </div>
    );
  }

  return (
    <input
      type={field.type || 'text'}
      value={value}
      placeholder={field.placeholder}
      min={field.min}
      max={field.max}
      step={field.step}
      maxLength={field.maxLength}
      disabled={field.disabled}
      onChange={(event) => onChange(field.type === 'number' ? event.target.valueAsNumber || 0 : event.target.value)}
      style={field.type === 'color' ? { ...baseInput, height: 42, padding: 5, cursor: 'pointer' } : baseInput}
    />
  );
}

export default function InputDialog({
  open = false,
  title = 'Input Dialog',
  description,
  fields = [],
  submitLabel = 'Confirmar',
  cancelLabel = 'Cancelar',
  accent = 'var(--space-orange-primary)',
  opacity = 0.96,
  blur = 8,
  width = 460,
  columns = 1,
  closeOnBackdrop = true,
  onSubmit,
  onCancel,
  onChange,
  style,
}) {
  const initial = useMemo(() => initialValues(fields), [fields]);
  const [values, setValues] = useState(initial);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (open) {
      setValues(initial);
      setErrors({});
    }
  }, [open, initial]);

  if (!open) return null;

  const updateValue = (name, value) => {
    const next = { ...values, [name]: value };
    setValues(next);
    setErrors((current) => ({ ...current, [name]: undefined }));
    onChange?.(next, name, value);
  };

  const submit = () => {
    const nextErrors = {};
    fields.forEach((field) => {
      const value = values[field.name];
      if (field.required && (value === '' || value === undefined || value === null || value === false)) {
        nextErrors[field.name] = field.requiredMessage || 'Campo obrigatorio';
      }
      if (field.validate) {
        const message = field.validate(value, values);
        if (message) nextErrors[field.name] = message;
      }
    });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) onSubmit?.(values);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      onClick={() => closeOnBackdrop && onCancel?.()}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 10000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 18,
        background: 'rgba(0,0,0,0.68)',
        backdropFilter: `blur(${blur}px)`,
      }}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        style={{
          width: typeof width === 'number' ? `${width}px` : width,
          maxWidth: '100%',
          borderRadius: 10,
          border: `1px solid ${alpha(accent, 0.32)}`,
          background: `linear-gradient(180deg, rgba(13,13,17,${opacity}), rgba(8,8,10,${Math.min(1, opacity + 0.03)}))`,
          boxShadow: `0 28px 80px rgba(0,0,0,0.72), 0 0 0 1px ${alpha(accent, 0.08)}, inset 0 1px 0 rgba(255,255,255,0.06)`,
          overflow: 'hidden',
          ...style,
        }}
      >
        <header style={{ padding: '18px 20px 14px', borderBottom: '1px solid rgba(255,255,255,0.07)', display: 'flex', justifyContent: 'space-between', gap: 14 }}>
          <div>
            <h2 style={{ margin: 0, color: 'var(--space-text-white)', fontFamily: 'var(--font-heading)', fontSize: 19, lineHeight: 1.2 }}>{title}</h2>
            {description && <p style={{ margin: '7px 0 0', color: 'var(--space-text-grey)', fontSize: 12, lineHeight: 1.5 }}>{description}</p>}
          </div>
          <button type="button" onClick={onCancel} aria-label="Fechar" style={{ width: 30, height: 30, borderRadius: 7, border: '1px solid var(--space-border-color)', background: 'rgba(255,255,255,0.03)', color: 'var(--space-text-muted)', cursor: 'pointer' }}>x</button>
        </header>

        <div style={{ padding: 20, display: 'grid', gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`, gap: 14 }}>
          {fields.map((field) => {
            const error = errors[field.name];
            return (
              <label key={field.name} style={{ display: 'grid', gap: 7, gridColumn: field.fullWidth ? '1 / -1' : undefined }}>
                {field.label && <span style={{ color: 'var(--space-text-grey)', fontSize: 11, fontWeight: 800, letterSpacing: 0.8, textTransform: 'uppercase' }}>{field.label}{field.required && <span style={{ color: accent }}> *</span>}</span>}
                <FieldControl field={field} value={values[field.name]} error={error} accent={accent} onChange={(value) => updateValue(field.name, value)} />
                {(field.help || error) && <span style={{ color: error ? 'var(--color-error)' : 'var(--space-text-muted)', fontSize: 10, lineHeight: 1.4 }}>{error || field.help}</span>}
              </label>
            );
          })}
        </div>

        <footer style={{ padding: '0 20px 18px', display: 'flex', justifyContent: 'flex-end', gap: 10 }}>
          <Button variant="secondary" size="sm" onClick={onCancel}>{cancelLabel}</Button>
          <Button size="sm" onClick={submit} style={{ background: accent, boxShadow: `0 0 16px ${alpha(accent, 0.28)}` }}>{submitLabel}</Button>
        </footer>
      </div>
    </div>
  );
}