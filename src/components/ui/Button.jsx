import React from 'react';

export default function Button({
  variant = 'primary',
  size = 'md',
  icon = null,
  onClick,
  disabled = false,
  loading = false,
  children,
  className = '',
  style = {},
  type = 'button',
  ...props
}) {
  const getVariantClass = () => {
    if (disabled || variant === 'disabled') return 'btn-disabled';
    if (variant === 'secondary') return 'btn-secondary';
    if (variant === 'outline') return 'btn-outline';
    if (variant === 'ghost') return 'btn-ghost';
    if (variant === 'link') return 'btn-link';
    if (variant === 'danger' || variant === 'destructive') return 'btn-danger';
    return 'btn-primary';
  };

  const getSizeClass = () => {
    if (size === 'sm') return 'btn-sm';
    if (size === 'lg') return 'btn-lg';
    if (size === 'icon') return 'btn-icon-only';
    return '';
  };

  return (
    <button
      type={type}
      className={`btn ${getVariantClass()} ${getSizeClass()} ${loading ? 'is-loading' : ''} ${className}`}
      onClick={onClick}
      disabled={disabled || loading || variant === 'disabled'}
      style={style}
      {...props}
    >
      {loading ? (
        <span
          aria-hidden="true"
          style={{
            width: 14,
            height: 14,
            borderRadius: '50%',
            border: '2px solid currentColor',
            borderTopColor: 'transparent',
            display: 'inline-block',
            animation: 'spin 0.7s linear infinite'
          }}
        />
      ) : icon ? (
        <span className="btn-icon-wrapper" style={{ display: 'inline-flex', width: '16px', height: '16px' }}>{icon}</span>
      ) : null}
      {children}
    </button>
  );
}