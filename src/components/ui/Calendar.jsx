import React, { useEffect, useState } from 'react';

const monthNames = [
  'Janeiro', 'Fevereiro', 'Marco', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const weekdayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];

export default function Calendar({
  value = new Date(),
  onChange,
  minYear = 1990,
  maxYear = 2040,
  className = '',
  style = {},
  ...props
}) {
  const safeValue = value instanceof Date && !Number.isNaN(value.getTime()) ? value : new Date();
  const [currentDate, setCurrentDate] = useState(safeValue);
  const [view, setView] = useState('days');
  const selectedTime = safeValue.getTime();

  useEffect(() => {
    setCurrentDate(new Date(selectedTime));
  }, [selectedTime]);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const decadeStart = Math.floor(year / 10) * 10;

  const firstDayIndex = new Date(year, month, 1).getDay();
  const totalDays = new Date(year, month + 1, 0).getDate();
  const daysArray = [
    ...Array.from({ length: firstDayIndex }, () => null),
    ...Array.from({ length: totalDays }, (_, idx) => new Date(year, month, idx + 1))
  ];

  const updateMonth = (offset) => setCurrentDate(new Date(year, month + offset, 1));
  const updateDecade = (offset) => setCurrentDate(new Date(Math.min(maxYear, Math.max(minYear, year + offset * 10)), month, 1));

  const selectMonth = (monthIndex) => {
    setCurrentDate(new Date(year, monthIndex, 1));
    setView('days');
  };

  const selectYear = (nextYear) => {
    setCurrentDate(new Date(nextYear, month, 1));
    setView('months');
  };

  const isToday = (date) => {
    if (!date) return false;
    const today = new Date();
    return date.getDate() === today.getDate() && date.getMonth() === today.getMonth() && date.getFullYear() === today.getFullYear();
  };

  const isSelected = (date) => {
    if (!date) return false;
    return date.getDate() === safeValue.getDate() && date.getMonth() === safeValue.getMonth() && date.getFullYear() === safeValue.getFullYear();
  };

  const navButtonStyle = {
    width: '28px',
    height: '28px',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'var(--space-bg-input)',
    border: '1px solid var(--space-border-color)',
    borderRadius: 'var(--space-radius-sm)',
    color: 'var(--space-text-grey)',
    cursor: 'pointer',
    fontSize: '12px',
    outline: 'none'
  };

  return (
    <div
      className={`calendar-wrapper ${className}`}
      style={{
        width: '100%',
        maxWidth: '300px',
        backgroundColor: 'var(--space-bg-card)',
        border: '1px solid var(--space-border-color)',
        borderRadius: 'var(--space-radius-lg)',
        padding: '16px',
        boxSizing: 'border-box',
        ...style
      }}
      {...props}
    >
      <div style={{ display: 'grid', gridTemplateColumns: '28px 28px 1fr 28px 28px', gap: '6px', alignItems: 'center', marginBottom: '14px' }}>
        <button type="button" onClick={() => updateDecade(-1)} style={navButtonStyle} title="Voltar 10 anos">«</button>
        <button type="button" onClick={() => view === 'years' ? updateDecade(-1) : updateMonth(-1)} style={navButtonStyle} title="Voltar">‹</button>
        <button
          type="button"
          onClick={() => setView(view === 'days' ? 'months' : view === 'months' ? 'years' : 'days')}
          style={{
            background: 'transparent',
            border: 0,
            color: 'var(--space-text-white)',
            fontFamily: 'var(--font-heading)',
            fontSize: '14px',
            fontWeight: 700,
            cursor: 'pointer',
            outline: 'none'
          }}
        >
          {view === 'years' ? `${decadeStart} - ${decadeStart + 9}` : view === 'months' ? year : `${monthNames[month]} ${year}`}
        </button>
        <button type="button" onClick={() => view === 'years' ? updateDecade(1) : updateMonth(1)} style={navButtonStyle} title="Avancar">›</button>
        <button type="button" onClick={() => updateDecade(1)} style={navButtonStyle} title="Avancar 10 anos">»</button>
      </div>

      {view === 'days' && (
        <>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center', marginBottom: '8px' }}>
            {weekdayNames.map((name) => (
              <span key={name} style={{ fontSize: '10px', fontWeight: 'bold', color: 'var(--space-text-muted)', textTransform: 'uppercase' }}>{name}</span>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '4px', textAlign: 'center' }}>
            {daysArray.map((date, idx) => {
              if (!date) return <div key={`empty-${idx}`} />;
              const active = isSelected(date);
              const current = isToday(date);
              return (
                <button
                  key={date.toISOString()}
                  type="button"
                  onClick={() => onChange && onChange(date)}
                  style={{
                    background: active ? 'var(--space-orange-primary)' : current ? 'var(--space-orange-subtle)' : 'transparent',
                    border: current ? '1px solid var(--space-orange-primary)' : '1px solid transparent',
                    color: active ? 'var(--space-text-white)' : current ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                    borderRadius: '50%',
                    width: '32px',
                    height: '32px',
                    fontSize: '11px',
                    fontWeight: 600,
                    cursor: 'pointer',
                    transition: 'var(--space-transition)',
                    outline: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: active ? '0 0 8px var(--space-orange-glow)' : 'none'
                  }}
                >
                  {date.getDate()}
                </button>
              );
            })}
          </div>
        </>
      )}

      {view === 'months' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px' }}>
          {monthNames.map((name, index) => (
            <button
              key={name}
              type="button"
              onClick={() => selectMonth(index)}
              style={{
                padding: '9px 6px',
                borderRadius: 'var(--space-radius-md)',
                border: index === month ? '1px solid var(--space-orange-primary)' : '1px solid var(--space-border-color)',
                background: index === month ? 'var(--space-orange-subtle)' : 'var(--space-bg-input)',
                color: index === month ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                cursor: 'pointer',
                fontSize: '11px',
                fontWeight: 700
              }}
            >
              {name.slice(0, 3)}
            </button>
          ))}
        </div>
      )}

      {view === 'years' && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px' }}>
          {Array.from({ length: 10 }, (_, idx) => decadeStart + idx).map((yearOption) => {
            const disabled = yearOption < minYear || yearOption > maxYear;
            return (
              <button
                key={yearOption}
                type="button"
                disabled={disabled}
                onClick={() => selectYear(yearOption)}
                style={{
                  padding: '9px 4px',
                  borderRadius: 'var(--space-radius-md)',
                  border: yearOption === year ? '1px solid var(--space-orange-primary)' : '1px solid var(--space-border-color)',
                  background: yearOption === year ? 'var(--space-orange-subtle)' : 'var(--space-bg-input)',
                  color: disabled ? 'var(--space-text-muted)' : yearOption === year ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                  cursor: disabled ? 'not-allowed' : 'pointer',
                  opacity: disabled ? 0.45 : 1,
                  fontSize: '11px',
                  fontWeight: 700
                }}
              >
                {yearOption}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}