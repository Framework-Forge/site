export default function Checkbox({ checked, onChange, label, disabled = false, id }) {
  const checkId = id || `cb-${label?.replace(/\s/g, '-').toLowerCase()}`;
  return (
    <label className={`checkbox-container ${disabled ? 'disabled' : ''}`} htmlFor={checkId}>
      <input
        id={checkId}
        type="checkbox"
        className="checkbox-input"
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      <span className="checkbox-custom">
        <svg className="checkbox-icon" viewBox="0 0 12 10" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="1 5 4.5 8.5 11 1" />
        </svg>
      </span>
      {label && <span style={{ fontSize: '14px', color: disabled ? 'var(--space-text-muted)' : 'var(--space-text-white)' }}>{label}</span>}
    </label>
  );
}
