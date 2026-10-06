import React from 'react';
import Card from './Card';
import Icon from './Icon';

export default function EconomyCard({
  type = 'bank', // 'bank' | 'cash' | 'blackmoney' | 'coin'
  amount = 0,
  title,
  className = '',
  ...props
}) {
  // Configurações temáticas de finanças no FiveM
  const configs = {
    bank: {
      label: 'Conta Bancária',
      color: 'var(--color-info)',
      icon: <Icon name="database" />,
      symbol: '$',
      bgGlow: 'rgba(59, 130, 246, 0.05)'
    },
    cash: {
      label: 'Dinheiro na Carteira',
      color: 'var(--color-success)',
      icon: <Icon name="store" />,
      symbol: '$',
      bgGlow: 'rgba(16, 185, 129, 0.05)'
    },
    blackmoney: {
      label: 'Dinheiro Sujo',
      color: 'var(--color-error)',
      icon: <Icon name="bell" />, // Icone de aviso para ilegal
      symbol: '$',
      bgGlow: 'rgba(239, 68, 68, 0.05)'
    },
    coin: {
      label: 'Coins Forgebox',
      color: 'var(--space-orange-primary)',
      icon: <Icon name="packages" />, // Moeda/ícone do core
      symbol: 'FB',
      bgGlow: 'rgba(255, 122, 26, 0.05)'
    }
  };

  const config = configs[type] || configs.bank;
  const displayLabel = title || config.label;

  // Formatação simples do valor financeiro
  const formatCurrency = (val) => {
    return val.toLocaleString('pt-BR');
  };

  return (
    <Card
      className={`economy-card ${type} ${className}`}
      style={{
        background: `linear-gradient(135deg, var(--space-bg-card) 0%, ${config.bgGlow} 100%)`,
        border: '1px solid var(--space-border-color)',
        borderLeft: `4px solid ${config.color}`,
        position: 'relative',
        overflow: 'hidden',
        padding: '20px',
        ...props.style
      }}
      {...props}
    >
      {/* Detalhe de fundo imitando chip de cartão */}
      {type === 'bank' && (
        <div
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            width: '32px',
            height: '24px',
            borderRadius: '4px',
            backgroundColor: 'rgba(255,255,255,0.03)',
            border: '1px solid rgba(255,255,255,0.06)',
            opacity: 0.8
          }}
        />
      )}

      <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
        <div
          style={{
            width: '40px',
            height: '40px',
            borderRadius: 'var(--space-radius-md)',
            backgroundColor: config.bgGlow.replace('0.05', '0.15'),
            color: config.color,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
            border: `1px solid ${config.color}25`,
            filter: `drop-shadow(0 0 4px ${config.color}40)`
          }}
        >
          {config.icon}
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '11px', color: 'var(--space-text-grey)', textTransform: 'uppercase', fontWeight: '600', letterSpacing: '0.5px' }}>
            {displayLabel}
          </span>
          <span
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '20px',
              fontWeight: '700',
              color: 'var(--space-text-white)',
              marginTop: '4px',
              display: 'flex',
              alignItems: 'baseline',
              gap: '4px'
            }}
          >
            <span style={{ fontSize: '13px', color: config.color, fontWeight: '600' }}>
              {config.symbol}
            </span>
            {formatCurrency(amount)}
          </span>
        </div>
      </div>
    </Card>
  );
}
