import React, { useState } from 'react';

const COUNTRIES = [
  { code: 'BR', dial: '+55', flag: '🇧🇷', name: 'Brasil' },
  { code: 'US', dial: '+1',  flag: '🇺🇸', name: 'EUA' },
  { code: 'PT', dial: '+351',flag: '🇵🇹', name: 'Portugal' },
  { code: 'AR', dial: '+54', flag: '🇦🇷', name: 'Argentina' },
  { code: 'MX', dial: '+52', flag: '🇲🇽', name: 'México' },
  { code: 'DE', dial: '+49', flag: '🇩🇪', name: 'Alemanha' },
  { code: 'FR', dial: '+33', flag: '🇫🇷', name: 'França' },
  { code: 'GB', dial: '+44', flag: '🇬🇧', name: 'Reino Unido' },
  { code: 'ES', dial: '+34', flag: '🇪🇸', name: 'Espanha' },
  { code: 'JP', dial: '+81', flag: '🇯🇵', name: 'Japão' },
  { code: 'CN', dial: '+86', flag: '🇨🇳', name: 'China' },
  { code: 'IN', dial: '+91', flag: '🇮🇳', name: 'Índia' },
];

export default function PhoneInput({
  value = '',
  defaultCountry = 'BR',
  onChange,
  label,
  placeholder = '00 00000-0000',
  disabled = false,
  error,
  className = '',
  ...props
}) {
  const [country, setCountry] = useState(COUNTRIES.find(c => c.code === defaultCountry) || COUNTRIES[0]);
  const [open, setOpen] = useState(false);
  const [phone, setPhone] = useState(value);
  const [focused, setFocused] = useState(false);
  const [search, setSearch] = useState('');

  const handlePhone = (e) => {
    let v = e.target.value.replace(/[^0-9\s\-\(\)]/g, '');
    setPhone(v);
    onChange && onChange({ country, phone: v, full: `${country.dial} ${v}` });
  };

  const selectCountry = (c) => {
    setCountry(c);
    setOpen(false);
    setSearch('');
    onChange && onChange({ country: c, phone, full: `${c.dial} ${phone}` });
  };

  const filtered = COUNTRIES.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()) ||
    c.dial.includes(search) ||
    c.code.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className={`phone-input ${className}`} style={{ display: 'flex', flexDirection: 'column', gap: 6, position: 'relative', ...props.style }}>
      {label && <label style={{ fontSize: 12, fontWeight: 600, color: 'var(--space-text-grey)', letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</label>}

      <div style={{
        display: 'flex',
        borderRadius: 'var(--space-radius-md)',
        border: `1px solid ${error ? '#FF3B4F' : focused ? 'var(--space-orange-primary)' : 'var(--space-border-color)'}`,
        background: 'var(--space-bg-input)',
        boxShadow: focused ? '0 0 0 2px var(--space-orange-subtle)' : 'none',
        overflow: 'hidden',
        transition: 'all 0.2s',
      }}>
        {/* Seletor de país */}
        <button
          type="button"
          onClick={() => setOpen(o => !o)}
          disabled={disabled}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 6,
            padding: '0 12px',
            background: 'transparent',
            border: 'none',
            borderRight: '1px solid var(--space-border-color)',
            cursor: disabled ? 'not-allowed' : 'pointer',
            color: 'var(--space-text-white)',
            fontSize: 13,
            fontWeight: 600,
            whiteSpace: 'nowrap',
            flexShrink: 0,
            gap: 4,
          }}
        >
          <span style={{ fontSize: 18 }}>{country.flag}</span>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--space-text-grey)' }}>{country.dial}</span>
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" style={{ color: 'var(--space-text-muted)', transform: open ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s' }}>
            <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>

        {/* Input do número */}
        <input
          type="tel"
          value={phone}
          onChange={handlePhone}
          placeholder={placeholder}
          disabled={disabled}
          onFocus={() => setFocused(true)}
          onBlur={() => { setFocused(false); setOpen(false); }}
          style={{
            flex: 1,
            border: 'none',
            background: 'transparent',
            color: 'var(--space-text-white)',
            fontFamily: 'var(--font-mono)',
            fontSize: 14,
            padding: '10px 12px',
            outline: 'none',
          }}
        />
      </div>

      {/* Dropdown de países */}
      {open && (
        <div style={{
          position: 'absolute',
          top: label ? 'calc(100% - 4px)' : 'calc(100% + 4px)',
          left: 0,
          width: 240,
          maxHeight: 220,
          overflowY: 'auto',
          background: 'var(--space-bg-darker)',
          border: '1px solid var(--space-border-color)',
          borderRadius: 'var(--space-radius-md)',
          boxShadow: '0 12px 28px rgba(0,0,0,0.5)',
          zIndex: 100,
        }}>
          <div style={{ padding: '8px 8px 4px' }}>
            <input
              type="text"
              placeholder="Buscar país..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              autoFocus
              style={{
                width: '100%', boxSizing: 'border-box',
                background: 'var(--space-bg-input)',
                border: '1px solid var(--space-border-color)',
                borderRadius: 6,
                padding: '6px 10px',
                fontSize: 12,
                color: 'var(--space-text-white)',
                outline: 'none',
              }}
            />
          </div>
          {filtered.map(c => (
            <div
              key={c.code}
              onMouseDown={() => selectCountry(c)}
              style={{
                display: 'flex', gap: 10, alignItems: 'center',
                padding: '7px 12px',
                cursor: 'pointer',
                fontSize: 13,
                color: c.code === country.code ? 'var(--space-orange-primary)' : 'var(--space-text-white)',
                background: c.code === country.code ? 'var(--space-orange-subtle)' : 'transparent',
                transition: 'background 0.1s',
              }}
              onMouseEnter={e => { if (c.code !== country.code) e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; }}
              onMouseLeave={e => { e.currentTarget.style.background = c.code === country.code ? 'var(--space-orange-subtle)' : 'transparent'; }}
            >
              <span style={{ fontSize: 18 }}>{c.flag}</span>
              <span style={{ flex: 1 }}>{c.name}</span>
              <span style={{ fontFamily: 'var(--font-mono)', fontSize: 11, color: 'var(--space-text-muted)' }}>{c.dial}</span>
            </div>
          ))}
        </div>
      )}

      {error && <p style={{ margin: 0, fontSize: 12, color: '#FF3B4F' }}>{error}</p>}
    </div>
  );
}
