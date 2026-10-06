export default function Input({
  label,
  error,
  type = 'text',
  value,
  onChange,
  placeholder = '',
  disabled = false,
  className = '',
  ...props
}) {
  return (
    <div className={`form-group ${className}`}>
      {label && <label className="form-label">{label}</label>}
      <input
        type={type}
        className={`input-text ${error ? 'input-error' : ''}`}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        disabled={disabled}
        {...props}
      />
      {error && <span className="input-error-message">{error}</span>}
    </div>
  );
}
