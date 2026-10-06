export default function Badge({ variant = 'ativo', children }) {
  const variantClass = {
    ativo: 'badge-ativo',
    popular: 'badge-popular',
    novo: 'badge-novo',
    perigo: 'badge-perigo',
  }[variant] || 'badge-ativo';

  return <span className={`badge ${variantClass}`}>{children}</span>;
}
