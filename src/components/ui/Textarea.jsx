export default function Textarea({
  label,
  error,
  value,
  onChange,
  placeholder = '',
  disabled = false,
  rows = 4,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <textarea
        className={`input-text textarea-input ${error ? 'input-error' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        rows={rows}
        style={{ resize: 'vertical', lineHeight: '1.5' }}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
}
