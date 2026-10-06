import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import Button from './Button';
import Slider from './Slider';

const iconDefinitions = {
  health: {
    viewBox: "0 0 512 512",
    path: <path d="M473.7 73.9l-2.4-2.5c-51.5-52.6-135.8-52.6-187.4 0L256 100l-27.9-28.5c-51.5-52.7-135.9-52.7-187.4 0l-2.4 2.4C-10.4 123.7-12.5 203 31 256h102.4l35.9-86.2c5.4-12.9 23.6-13.2 29.4-.4l58.2 129.3 49-97.9c5.9-11.8 22.7-11.8 28.6 0l27.6 55.2H481c43.5-53 41.4-132.3-7.3-182.1z" />
  },
  armor: {
    viewBox: "0 0 512 512",
    path: <path d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z" />
  },
  hunger: {
    viewBox: "0 0 512 512",
    path: <path d="M160 265.2c0 8.5-3.4 16.6-9.4 22.6l-26.8 26.8c-12.3 12.3-32.5 11.4-49.4 7.2C69.8 320.6 65 320 60 320c-33.1 0-60 26.9-60 60s26.9 60 60 60c6.3 0 12 5.7 12 12c0 33.1 26.9 60 60 60s60-26.9 60-60c0-5-.6-9.8-1.8-14.5c-4.2-16.9-5.2-37.1 7.2-49.4l26.8-26.8c6-6 14.1-9.4 22.6-9.4H336c6.3 0 12.4-.3 18.5-1c11.9-1.2 16.4-15.5 10.8-26c-8.5-15.8-13.3-33.8-13.3-53c0-61.9 50.1-112 112-112c8 0 15.7 .8 23.2 2.4c11.7 2.5 24.1-5.9 22-17.6C494.5 62.5 422.5 0 336 0C238.8 0 160 78.8 160 176v89.2z" />
  },
  thirst: {
    viewBox: "0 0 288 512",
    path: <path d="M216 464h-40V346.81c68.47-15.89 118.05-79.91 111.4-154.16l-15.95-178.1C270.71 6.31 263.9 0 255.74 0H32.26c-8.15 0-14.97 6.31-15.7 14.55L.6 192.66C-6.05 266.91 43.53 330.93 112 346.82V464H72c-22.09 0-40 17.91-40 40 0 4.42 3.58 8 8 8h208c4.42 0 8-3.58 8-8 0-22.09-17.91-40-40-40zM61.75 48h164.5l7.17 80H54.58l7.17-80z" />
  },
  stress: {
    viewBox: "0 0 512 512",
    path: <path d="M184 0c30.9 0 56 25.1 56 56l0 400c0 30.9-25.1 56-56 56c-28.9 0-52.7-21.9-55.7-50.1c-5.2 1.4-10.7 2.1-16.3 2.1c-35.3 0-64-28.7-64-64c0-7.4 1.3-14.6 3.6-21.2C21.4 367.4 0 338.2 0 304c0-31.9 18.7-59.5 45.8-72.3C37.1 220.8 32 207 32 192c0-30.7 21.6-56.3 50.4-62.6C80.8 123.9 80 118 80 112c0-29.9 20.6-55.1 48.3-62.1C131.3 21.9 155.1 0 184 0zM328 0c28.9 0 52.6 21.9 55.7 49.9c27.8 7 48.3 32.1 48.3 62.1c0 6-.8 11.9-2.4 17.4c28.8 6.2 50.4 31.9 50.4 62.6c0 15-5.1 28.8-13.8 39.7C493.3 244.5 512 272.1 512 304c0 34.2-21.4 63.4-51.6 74.8c2.3 6.6 3.6 13.8 3.6 21.2c0 35.3-28.7 64-64 64c-5.6 0-11.1-.7-16.3-2.1c-3 28.2-26.8 50.1-55.7 50.1c-30.9 0-56-25.1-56-56l0-400c0-30.9 25.1-56 56-56z" />
  },
  breath: {
    viewBox: "0 0 410 512",
    path: <path d="M320 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM125.7 175.5c9.9-9.9 23.4-15.5 37.5-15.5c1.9 0 3.8 .1 5.6 .3L137.6 254c-9.3 28 1.7 58.8 26.8 74.5l86.2 53.9-25.4 88.8c-4.9 17 5 34.7 22 39.6s34.7-5 39.6-22l28.7-100.4c5.9-20.6-2.6-42.6-20.7-53.9L238 299l30.9-82.4 5.1 12.3C289 264.7 323.9 288 362.7 288H384c17.7 0 32-14.3 32-32s-14.3-32-32-32H362.7c-12.9 0-24.6-7.8-29.5-19.7l-6.3-15c-14.6-35.1-44.1-61.9-80.5-73.1l-48.7-15c-11.1-3.4-22.7-5.2-34.4-5.2c-31 0-60.8 12.3-82.7 34.3L57.4 153.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l23.1-23.1zM91.2 352H32c-17.7 0-32 14.3-32 32s14.3 32 32 32h69.6c19 0 36.2-11.2 43.9-28.5L157 361.6l-9.5-6c-17.5-10.9-30.5-26.8-37.9-44.9L91.2 352z" />
  }
};

export default function VitalAdjustModal({
  isOpen,
  onClose,
  // Props de ajuste múltiplo
  onApply,
  initialValues = { health: 100, armor: 50, hunger: 80, thirst: 75, stress: 15, breath: 100 },
  // Props de ajuste individual (Especificações MRI UI Kit)
  vital, // 'health' | 'armor' | 'hunger' | 'thirst' | 'stress'
  currentValue = 100,
  playerName = 'Jogador',
  onSubmit,
  title,
  description,
  icon: Icon,
  confirmLabel = 'Aplicar',
  cancelLabel = 'Cancelar',
  newValueLabel,
  showFullProgress = true,
  labels = {},
  hideBlur = false,
  hideOverlay = false,
  disabled = false,
  className = '',
  ...props
}) {
  const isSingleMode = vital !== undefined;

  // Estados locais separados
  const [stats, setStats] = useState(initialValues);
  const [singleValue, setSingleValue] = useState(currentValue);

  useEffect(() => {
    if (isOpen) {
      if (isSingleMode) {
        setSingleValue(currentValue);
      } else {
        setStats(initialValues);
      }
    }
  }, [isOpen, currentValue, initialValues, isSingleMode]);

  const handleChange = (key, val) => {
    setStats((prev) => ({
      ...prev,
      [key]: val
    }));
  };

  const handleApply = () => {
    if (isSingleMode) {
      if (onSubmit) onSubmit(singleValue);
      if (onApply) onApply({ [vital]: singleValue });
    } else {
      if (onApply) onApply(stats);
    }
    onClose();
  };

  // Nomes amigáveis dos vitais no modo individual
  const vitalNames = {
    health: labels.health || 'Saúde (Vida)',
    armor: labels.armor || 'Colete (Armadura)',
    hunger: labels.hunger || 'Fome (Alimentação)',
    thirst: labels.thirst || 'Sede (Hidratação)',
    stress: labels.stress || 'Estresse (Menta)'
  };

  const vitalColors = {
    health: '#EF4444',
    armor: '#3B82F6',
    hunger: '#FF7A1A',
    thirst: '#06B6D4',
    stress: '#8B5CF6'
  };

  const currentVitalColor = vitalColors[vital] || 'var(--space-orange-primary)';

  // Render do Modal
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={title || (isSingleMode ? `Ajustar Status de ${playerName}` : 'Ajustador de Vitais (NUI Dev)')}
      className={className}
      style={{
        maxWidth: isSingleMode ? '420px' : '500px',
      }}
      actions={
        <>
          <Button variant="secondary" onClick={onClose}>{cancelLabel || 'Cancelar'}</Button>
          <Button
            variant="primary"
            onClick={handleApply}
            disabled={disabled}
            style={{
              backgroundColor: isSingleMode ? currentVitalColor : 'var(--space-orange-primary)',
              borderColor: 'transparent',
              boxShadow: disabled ? 'none' : `0 0 12px ${isSingleMode ? currentVitalColor : 'var(--space-orange-primary)'}30`
            }}
          >
            {confirmLabel || 'Aplicar'}
          </Button>
        </>
      }
      {...props}
    >
      {isSingleMode ? (
        // ---- MODO INDIVIDUAL (Estilo MRI UI Kit) ----
        <div style={{ display: 'flex', flexDirection: 'column', gap: '18px', width: '100%' }}>
          {description && (
            <p style={{ fontSize: '13px', color: 'var(--space-text-grey)', margin: '0 0 4px 0', lineHeight: 1.5 }}>
              {description}
            </p>
          )}

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              backgroundColor: 'rgba(0,0,0,0.15)',
              border: '1px solid var(--space-border-color)',
              borderRadius: 'var(--space-radius-md)',
              padding: '12px 16px'
            }}
          >
            <div
              style={{
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                backgroundColor: `${currentVitalColor}15`,
                border: `1px solid ${currentVitalColor}30`,
                color: currentVitalColor,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexShrink: 0
              }}
            >
              {Icon ? (
                typeof Icon === 'function' ? <Icon size={18} /> : Icon
              ) : (
                (() => {
                  const iconDef = iconDefinitions[vital] || iconDefinitions.health;
                  return (
                    <svg
                      viewBox={iconDef.viewBox}
                      style={{ width: '18px', height: '18px', fill: 'currentColor' }}
                    >
                      {iconDef.path}
                    </svg>
                  );
                })()
              )}
            </div>
            <div>
              <div style={{ fontSize: '11px', color: 'var(--space-text-muted)', textTransform: 'uppercase', letterSpacing: '0.5px' }}>
                Status Selecionado
              </div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: 'var(--space-text-white)' }}>
                {vitalNames[vital] || vital}
              </div>
            </div>
            <div style={{ marginLeft: 'auto', textAlign: 'right' }}>
              <div style={{ fontSize: '11px', color: 'var(--space-text-muted)' }}>
                Valor Atual
              </div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: currentVitalColor, fontFamily: 'var(--font-mono)' }}>
                {currentValue}%
              </div>
            </div>
          </div>

          <Slider
            label={newValueLabel || labels.newValue || `Novo valor para ${vitalNames[vital] || vital}`}
            min={0}
            max={100}
            value={singleValue}
            onChange={(e) => setSingleValue(parseInt(e.target.value) || 0)}
            style={{
              '--slider-pct': `${singleValue}%`,
              '--space-orange-primary': currentVitalColor,
              '--space-orange-glow': `${currentVitalColor}45`
            }}
          />

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '11px', color: 'var(--space-text-muted)' }}>
            <span>Mínimo (0%)</span>
            <span style={{ fontWeight: '700', color: currentVitalColor }}>Definindo: {singleValue}%</span>
            <span>Máximo (100%)</span>
          </div>
        </div>
      ) : (
        // ---- MODO MULTIPLO GERAL (Simulação do Dashboard) ----
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', width: '100%' }}>
          <Slider
            label="Vida (Health)"
            min={0}
            max={100}
            value={stats.health}
            onChange={(e) => handleChange('health', parseInt(e.target.value) || 0)}
          />
          <Slider
            label="Colete (Armor)"
            min={0}
            max={100}
            value={stats.armor}
            onChange={(e) => handleChange('armor', parseInt(e.target.value) || 0)}
          />
          <Slider
            label="Fome (Hunger)"
            min={0}
            max={100}
            value={stats.hunger}
            onChange={(e) => handleChange('hunger', parseInt(e.target.value) || 0)}
          />
          <Slider
            label="Sede (Thirst)"
            min={0}
            max={100}
            value={stats.thirst}
            onChange={(e) => handleChange('thirst', parseInt(e.target.value) || 0)}
          />
          <Slider
            label="Estresse (Stress)"
            min={0}
            max={100}
            value={stats.stress}
            onChange={(e) => handleChange('stress', parseInt(e.target.value) || 0)}
          />
          <Slider
            label="Fôlego (Breath)"
            min={0}
            max={100}
            value={stats.breath}
            onChange={(e) => handleChange('breath', parseInt(e.target.value) || 0)}
          />
        </div>
      )}
    </Modal>
  );
}
