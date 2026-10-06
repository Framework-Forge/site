export default function Select({
  label,
  value,
  onChange,
  options = [],
  disabled = false,
  error,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <div className="select-wrapper">
        <select
          className={`input-text select-input ${error ? 'input-error' : ''}`}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        >
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        <span className="select-chevron">▾</span>
      </div>
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
}
