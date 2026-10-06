import React, { useState, useEffect } from 'react';
import { useNotification } from '../components/NotificationContext';
import Icon from '../components/ui/Icon';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Toggle from '../components/ui/Toggle';
import ProgressBar from '../components/ui/ProgressBar';
import ProgressCircle from '../components/ui/ProgressCircle';
import mascotForgie from '../assets/forgebox_mascot_avatar.jpg';
import mascotForgieFull from '../assets/forgebox_mascot.jpg';

export default function DashboardSimulator() {
  const { triggerNotification } = useNotification();
  
  // Abas do Dashboard
  const [activeTab, setActiveTab] = useState('dashboard'); // 'dashboard' | 'modules' | 'players' | 'resources' | 'settings' | 'database' | 'backups' | 'logs' | 'monitor' | 'terminal' | 'files' | 'store' | 'packages' | 'updates'
  
  // Estados Dinâmicos do Servidor
  const [playersOnline, setPlayersOnline] = useState(128);
  const [modulesCount, setModulesCount] = useState(42);
  const [uptimeSeconds, setUptimeSeconds] = useState(2038472); // ~23 dias
  const [dbUsage] = useState(36);
  
  // Recursos do Sistema
  const [systemResources, setSystemResources] = useState({
    cpu: 32,
    ram: 54,
    disk: 38,
    net: 22
  });

  // Lista de Módulos Instalados
  const [installedModules, setInstalledModules] = useState([
    { id: 'space_core', name: 'Space Core', type: 'Sistema', active: true, icon: <Icon name="packages" /> },
    { id: 'inventory', name: 'Inventário', type: 'Módulo', active: true, icon: <Icon name="store" /> },
    { id: 'jobs', name: 'Jobs', type: 'Módulo', active: true, icon: <Icon name="players" /> },
    { id: 'casas', name: 'Casas', type: 'Módulo', active: true, icon: <Icon name="chevron" /> },
    { id: 'veiculos', name: 'Veículos', type: 'Módulo', active: true, icon: <Icon name="settings" /> },
    { id: 'banco', name: 'Banco', type: 'Módulo', active: true, icon: <Icon name="database" /> }
  ]);

  // Lista de Instalações Rápidas Disponíveis
  const [quickInstalls, setQuickInstalls] = useState([
    { id: 'market', name: 'Space Market', popular: true, progress: null, installed: false },
    { id: 'whitelist', name: 'Whitelist Discord', popular: false, progress: null, installed: false },
    { id: 'anticheat', name: 'Space Shield AC', popular: true, progress: null, installed: false },
    { id: 'hud', name: 'Space HUD Premium', popular: true, progress: null, installed: false }
  ]);

  // Logs Recentes
  const [logs, setLogs] = useState([
    { id: 1, type: 'success', event: 'Player conectado', user: 'SpaceAdmin', time: 'Agora' },
    { id: 2, type: 'info', event: 'Módulo iniciado', user: 'inventory', time: '2m atrás' },
    { id: 3, type: 'warning', event: 'Recurso reiniciado', user: 'vrp_core', time: '5m atrás' },
    { id: 4, type: 'info', event: 'Backup realizado', user: 'Automatico', time: '15m atrás' },
    { id: 5, type: 'error', event: 'Player desconectado', user: 'Hammer', time: '17m atrás' }
  ]);

  // Histórico de dados do gráfico de players online
  const [chartData, setChartData] = useState([100, 120, 95, 142, 110, 135, 128]);

  // Terminal/Console
  const [terminalInput, setTerminalInput] = useState('');
  const [terminalHistory, setTerminalHistory] = useState([
    { text: 'Forgebox Core Console initialized.', type: 'info' },
    { text: 'Loading resources... OK (42 resources loaded)', type: 'info' },
    { text: 'Type "help" for a list of mock commands.', type: 'warning' }
  ]);

  // Efeito para flutuar uptime e simular oscilações leves dos recursos do sistema
  useEffect(() => {
    const timer = setInterval(() => {
      setUptimeSeconds(prev => prev + 1);
      
      // Oscilação leve de CPU, RAM e Rede
      setSystemResources(prev => ({
        cpu: Math.max(10, Math.min(95, prev.cpu + Math.floor(Math.random() * 5) - 2)),
        ram: Math.max(30, Math.min(90, prev.ram + Math.floor(Math.random() * 3) - 1)),
        disk: prev.disk,
        net: Math.max(5, Math.min(100, prev.net + Math.floor(Math.random() * 9) - 4))
      }));
    }, 1500);

    return () => clearInterval(timer);
  }, []);

  // Simular evento de tráfego de jogadores (Muda o gráfico ao vivo)
  const triggerTrafficSimulation = () => {
    const change = Math.floor(Math.random() * 41) - 20; // -20 a +20
    const newPlayers = Math.max(10, playersOnline + change);
    setPlayersOnline(newPlayers);
    
    // Atualizar dados do gráfico
    setChartData(prev => {
      const next = [...prev.slice(1), newPlayers];
      return next;
    });

    const isUp = change >= 0;
    triggerNotification(
      'Atualização de Tráfego',
      `Simulando tráfego. Jogadores alterados em ${isUp ? '+' : ''}${change}. Total: ${newPlayers}`,
      isUp ? 'info' : 'warning',
      2000
    );

    addLog(isUp ? 'success' : 'warning', `Sincronização de Tráfego: ${newPlayers} players online`);
  };

  const addLog = (type, event, user = 'Sistema') => {
    setLogs(prev => [
      { id: Date.now(), type, event, user, time: 'Agora' },
      ...prev.slice(0, 8)
    ]);
  };

  // Tratar Instalação de Módulos da Quick Install
  const installModule = (id, name) => {
    setQuickInstalls(prev => 
      prev.map(item => {
        if (item.id === id) {
          return { ...item, progress: 0 };
        }
        return item;
      })
    );

    triggerNotification('Instalando módulo', `Baixando dependências para '${name}'...`, 'info', 2000);

    const interval = setInterval(() => {
      setQuickInstalls(prev => {
        let isDone = false;
        const next = prev.map(item => {
          if (item.id === id) {
            const nextProgress = item.progress + 20;
            if (nextProgress >= 100) {
              isDone = true;
              clearInterval(interval);
              return { ...item, progress: null, installed: true };
            }
            return { ...item, progress: nextProgress };
          }
          return item;
        });

        if (isDone) {
          triggerNotification('Sucesso!', `O módulo '${name}' foi instalado e ativado.`, 'success', 3000);
          addLog('success', `Módulo instalado: ${name}`, 'SpaceAdmin');
          setModulesCount(prevVal => prevVal + 1);
          setInstalledModules(prevModules => [
            ...prevModules,
            { id, name, type: 'Módulo', active: true, icon: <Icon name="puzzle" /> }
          ]);
        }
        return next;
      });
    }, 400);
  };

  // Alternar ativação de módulo
  const toggleModuleActive = (id, name, currentStatus) => {
    setInstalledModules(prev =>
      prev.map(item => (item.id === id ? { ...item, active: !item.active } : item))
    );
    
    const newStatus = !currentStatus;
    triggerNotification(
      newStatus ? 'Módulo Ativado' : 'Módulo Desativado',
      `O módulo '${name}' foi ${newStatus ? 'ativado' : 'desativado'}.`,
      newStatus ? 'success' : 'warning',
      2500
    );
    addLog(newStatus ? 'success' : 'warning', `Módulo ${newStatus ? 'ativado' : 'desativado'}: ${name}`, 'SpaceAdmin');
  };

  // Executar Comando no Console
  const executeTerminalCommand = (e) => {
    e.preventDefault();
    if (!terminalInput.trim()) return;

    const cmd = terminalInput.trim().toLowerCase();
    const newHistory = [...terminalHistory, { text: `> ${terminalInput}`, type: 'input' }];
    
    let response = '';
    let type = 'info';

    if (cmd === 'help') {
      response = 'Available commands: help, status, restart [resource], clear, forgebox';
    } else if (cmd === 'status') {
      response = `Server online. Uptime: ${formatUptime(uptimeSeconds)}. Players: ${playersOnline}. Database status: OK.`;
      type = 'success';
    } else if (cmd.startsWith('restart ')) {
      const resource = terminalInput.slice(8);
      response = `Restarting resource "${resource}"... OK. (Loaded in 14ms)`;
      type = 'success';
      addLog('warning', `Recurso reiniciado via Console: ${resource}`, 'Console');
    } else if (cmd === 'clear') {
      setTerminalHistory([]);
      setTerminalInput('');
      return;
    } else if (cmd === 'forgebox') {
      response = 'Forgebox Dashboard Console v1.0.0. "Forge your server, build your legacy." - Forgie';
      type = 'warning';
    } else {
      response = `Command "${cmd}" not recognized. Type "help" for assistance.`;
      type = 'error';
    }

    setTerminalHistory([...newHistory, { text: response, type }]);
    setTerminalInput('');
  };

  // Utilitário para formatar tempo de Uptime
  const formatUptime = (totalSeconds) => {
    const days = Math.floor(totalSeconds / (3600 * 24));
    const hours = Math.floor((totalSeconds % (3600 * 24)) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;
    return `${days}d ${hours}h ${minutes}m ${seconds}s`;
  };

  // Função para desenhar o gráfico SVG
  const getSvgPath = () => {
    const width = 450;
    const height = 140;
    const pointsCount = chartData.length;
    const stepX = width / (pointsCount - 1);
    
    const getPointY = (val) => {
      const percentage = val / 200;
      return height - percentage * height * 0.8 - 10;
    };

    const pathPoints = chartData.map((val, idx) => {
      const x = idx * stepX;
      const y = getPointY(val);
      return `${x},${y}`;
    });

    const linePath = `M ${pathPoints.join(' L ')}`;
    const fillPath = `${linePath} L ${width},${height} L 0,${height} Z`;

    return { linePath, fillPath, points: chartData.map((val, idx) => ({ x: idx * stepX, y: getPointY(val), val })) };
  };

  const chartInfo = getSvgPath();

  // Função auxiliar para renderizar item da Sidebar
  const renderSidebarItem = (id, label, iconName, badgeText = '') => {
    const isActive = activeTab === id;
    return (
      <div 
        key={id}
        className={`dash-sim-sidebar-item ${isActive ? 'active' : ''}`}
        onClick={() => setActiveTab(id)}
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '12px',
          padding: '10px 14px',
          borderRadius: 'var(--space-radius-md)',
          color: isActive ? 'var(--space-text-white)' : 'var(--space-text-grey)',
          cursor: 'pointer',
          transition: 'var(--space-transition)',
          border: '1px solid transparent',
          marginBottom: '2px',
          background: isActive ? 'var(--space-orange-subtle)' : 'transparent',
          borderColor: isActive ? 'rgba(255, 122, 26, 0.15)' : 'transparent',
          position: 'relative'
        }}
      >
        {isActive && (
          <div
            style={{
              position: 'absolute',
              left: 0,
              top: '25%',
              height: '50%',
              width: '3px',
              backgroundColor: 'var(--space-orange-primary)',
              borderRadius: '0 4px 4px 0',
              boxShadow: '0 0 8px var(--space-orange-glow)'
            }}
          />
        )}
        <div style={{ width: '18px', height: '18px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Icon 
            name={iconName} 
            className={isActive ? 'active' : ''} 
            style={{ color: isActive ? 'var(--space-orange-primary)' : 'var(--space-text-grey)' }} 
          />
        </div>
        <span style={{ fontSize: '13.5px', fontWeight: '500' }}>{label}</span>
        {badgeText && (
          <span 
            style={{ 
              marginLeft: 'auto', 
              fontSize: '9px', 
              fontWeight: 'bold', 
              color: 'var(--space-orange-primary)', 
              background: 'var(--space-orange-subtle)', 
              padding: '1px 5px', 
              borderRadius: '10px',
              border: '1px solid rgba(255, 122, 26, 0.3)',
              textTransform: 'uppercase',
              boxShadow: '0 0 6px rgba(255, 122, 26, 0.2)'
            }}
          >
            {badgeText}
          </span>
        )}
      </div>
    );
  };

  return (
    <div className="dash-sim-container" style={{ display: 'flex', flexDirection: 'column', width: '100%', height: '100vh', backgroundColor: 'var(--space-bg-darkest)' }}>
      
      {/* 1. Header do Dashboard */}
      <div className="dash-sim-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '16px 24px', borderBottom: '1px solid var(--space-border-color)', backgroundColor: 'var(--space-bg-darker)' }}>
        <div className="dash-sim-search" style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--space-bg-input)', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-md)', padding: '6px 12px', width: '320px' }}>
          <div style={{ width: '16px', height: '16px', color: 'var(--space-text-muted)' }}>
            <Icon name="search" />
          </div>
          <input 
            type="text" 
            className="dash-sim-search-input" 
            placeholder="Buscar módulos, configurações, players..."
            disabled
            style={{ background: 'none', border: 'none', color: 'var(--space-text-white)', fontSize: '13px', outline: 'none', width: '100%' }}
          />
          <kbd className="dash-sim-search-kbd" style={{ fontSize: '9px', backgroundColor: 'var(--space-bg-dark)', border: '1px solid var(--space-border-color)', padding: '2px 6px', borderRadius: '4px', color: 'var(--space-text-muted)', whiteSpace: 'nowrap' }}>CTRL K</kbd>
        </div>

        <div className="dash-sim-actions" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <button className="dash-sim-action-btn" onClick={() => triggerNotification('Sem alertas', 'Nenhum alerta pendente no sistema.', 'info')} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '20px', height: '20px', color: 'var(--space-text-grey)' }}>
            <Icon name="bell" />
          </button>
          <button className="dash-sim-action-btn" onClick={() => alert('Forgebox Documentação completa online em docs.forgebox.com')} style={{ background: 'none', border: 'none', cursor: 'pointer', width: '20px', height: '20px', color: 'var(--space-text-grey)' }}>
            <Icon name="help" />
          </button>
          
          <div className="dash-sim-user" style={{ display: 'flex', alignItems: 'center', gap: '10px', borderLeft: '1px solid var(--space-border-color)', paddingLeft: '16px' }}>
            <img src={mascotForgie} className="dash-sim-avatar" alt="Forge Admin" style={{ width: '32px', height: '32px', borderRadius: '50%', border: '1px solid var(--space-orange-primary)', boxShadow: '0 0 6px var(--space-orange-glow)' }} />
            <div className="dash-sim-user-info" style={{ display: 'flex', flexDirection: 'column' }}>
              <span className="dash-sim-user-name" style={{ fontSize: '13px', fontWeight: '600', color: 'var(--space-text-white)' }}>ForgeAdmin</span>
              <span className="dash-sim-user-role" style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>Administrador</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Corpo do Dashboard */}
      <div className="dash-sim-body" style={{ display: 'flex', flexGrow: 1, minHeight: 'calc(100vh - 120px)' }}>
        
        {/* Sidebar Esquerda (Réplica Exata da Imagem 3) */}
        <div className="dash-sim-sidebar" style={{ width: '240px', backgroundColor: 'var(--space-bg-darker)', borderRight: '1px solid var(--space-border-color)', padding: '16px 12px', display: 'flex', flexDirection: 'column' }}>
          
          <span className="dash-sim-sidebar-title" style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--space-text-muted)', fontWeight: '700', letterSpacing: '1px', paddingLeft: '14px', marginBottom: '8px', display: 'block' }}>Principal</span>
          {renderSidebarItem('dashboard', 'Dashboard', 'dashboard')}
          {renderSidebarItem('modules', 'Módulos', 'modules')}
          {renderSidebarItem('players', 'Players', 'players')}
          {renderSidebarItem('resources', 'Recursos', 'resources')}
          {renderSidebarItem('settings', 'Configurações', 'settings')}

          <span className="dash-sim-sidebar-title" style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--space-text-muted)', fontWeight: '700', letterSpacing: '1px', paddingLeft: '14px', marginTop: '16px', marginBottom: '8px', display: 'block' }}>Sistema</span>
          {renderSidebarItem('database', 'Banco de Dados', 'database')}
          {renderSidebarItem('backups', 'Backups', 'backup')}
          {renderSidebarItem('logs', 'Logs', 'logs')}
          {renderSidebarItem('monitor', 'Monitoramento', 'monitor')}
          {renderSidebarItem('terminal', 'Terminal', 'terminal')}
          {renderSidebarItem('files', 'Gerenciador de Arquivos', 'chevron')}

          <span className="dash-sim-sidebar-title" style={{ fontSize: '10px', textTransform: 'uppercase', color: 'var(--space-text-muted)', fontWeight: '700', letterSpacing: '1px', paddingLeft: '14px', marginTop: '16px', marginBottom: '8px', display: 'block' }}>Loja</span>
          {renderSidebarItem('store', 'Space Market', 'store', 'Novo')}
          {renderSidebarItem('packages', 'Meus Pacotes', 'packages')}
          {renderSidebarItem('updates', 'Atualizações', 'updates')}

          {/* Rodapé da Sidebar */}
          <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid var(--space-border-color)' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 8px' }}>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontSize: '11px', fontWeight: 'bold', color: 'var(--space-text-white)' }}>Space Box Core</span>
                <span style={{ fontSize: '9px', color: 'var(--space-text-muted)' }}>Versão 1.0.0</span>
              </div>
              <Badge variant="ativo" style={{ fontSize: '9px', padding: '2px 6px', background: 'var(--space-orange-subtle)', color: 'var(--space-orange-primary)', borderColor: 'rgba(255, 122, 26, 0.2)' }}>
                Atualizado
              </Badge>
            </div>
          </div>
        </div>

        {/* Painel Principal de Conteúdo */}
        <div className="dash-sim-main" style={{ flexGrow: 1, padding: '24px', overflowY: 'auto', backgroundColor: 'var(--space-bg-darkest)' }}>
          
          {/* ABA 1: DASHBOARD */}
          {activeTab === 'dashboard' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="dash-sim-view-header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="dash-sim-view-title">
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', margin: 0 }}>Dashboard</h2>
                  <p style={{ fontSize: '13.5px', color: 'var(--space-text-grey)', margin: '4px 0 0' }}>Bem-vindo de volta, <span style={{ color: 'var(--space-orange-primary)', fontWeight: '600' }}>SpaceAdmin</span>.</p>
                </div>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <Button variant="secondary" size="sm" onClick={triggerTrafficSimulation}>
                    🔄 Simular Tráfego
                  </Button>
                  <Button variant="primary" size="sm" onClick={() => triggerNotification('Gerenciador', 'Acessando console do servidor...', 'info')}>
                    Gerenciar Servidor
                  </Button>
                </div>
              </div>

              {/* Grid de 4 Cards de Indicadores (Usando o novo Card.jsx) */}
              <div className="dash-sim-widgets" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
                <Card 
                  title="128" 
                  description="Players Online" 
                  icon={<Icon name="players" />}
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '16px' }}
                >
                  <div style={{ fontSize: '11px', color: 'var(--color-success)', fontWeight: '600', marginTop: '6px' }}>↑ 12% vs. ontem</div>
                </Card>

                <Card 
                  title={String(modulesCount)} 
                  description="Módulos Instalados" 
                  icon={<Icon name="packages" />}
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '16px' }}
                >
                  <div style={{ fontSize: '11px', color: 'var(--color-success)', fontWeight: '600', marginTop: '6px' }}>↑ 8% vs. ontem</div>
                </Card>

                <Card 
                  title="99.9%" 
                  description="Uptime do Servidor" 
                  icon={<Icon name="monitor" />}
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '16px' }}
                >
                  <div style={{ fontSize: '11px', color: 'var(--color-success)', fontWeight: '600', marginTop: '6px' }}>↑ 0.1% vs. ontem</div>
                </Card>

                <Card 
                  title={`${dbUsage}%`} 
                  description="Uso do Banco de Dados" 
                  icon={<Icon name="database" />}
                  style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: '16px', padding: '16px' }}
                >
                  <div style={{ fontSize: '11px', color: 'var(--color-success)', fontWeight: '600', marginTop: '6px' }}>↑ 4% vs. ontem</div>
                </Card>
              </div>

              {/* Seção Central (Gráfico + Estado do Servidor) */}
              <div className="dash-sim-center-section" style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: '16px' }}>
                
                {/* Painel do Gráfico */}
                <div className="dash-sim-panel" style={{ backgroundColor: 'var(--space-bg-darker)', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-lg)', padding: '20px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-heading)' }}>Atividade do Servidor (Últimas Horas)</span>
                    <Badge variant="ativo">Players Online</Badge>
                  </div>
                  
                  <svg className="dash-sim-chart-svg" style={{ width: '100%', height: '140px', overflow: 'visible' }}>
                    <defs>
                      <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="var(--space-orange-primary)" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="var(--space-orange-primary)" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    
                    <line x1="0" y1="20" x2="450" y2="20" stroke="var(--space-border-color)" strokeDasharray="3" />
                    <line x1="0" y1="60" x2="450" y2="60" stroke="var(--space-border-color)" strokeDasharray="3" />
                    <line x1="0" y1="100" x2="450" y2="100" stroke="var(--space-border-color)" strokeDasharray="3" />
                    
                    <path d={chartInfo.fillPath} fill="url(#chart-gradient)" style={{ transition: 'all 0.5s ease' }} />
                    <path d={chartInfo.linePath} fill="none" stroke="var(--space-orange-primary)" strokeWidth="2.5" style={{ transition: 'all 0.5s ease', filter: 'drop-shadow(0 0 4px var(--space-orange-glow))' }} />
                    
                    {chartInfo.points.map((p, idx) => (
                      <g key={idx}>
                        <circle 
                          cx={p.x} 
                          cy={p.y} 
                          r="4" 
                          fill="var(--space-orange-primary)" 
                          stroke="#FFFFFF" 
                          strokeWidth="1.5"
                          style={{ transition: 'all 0.5s ease' }}
                        />
                        <text 
                          x={p.x} 
                          y={p.y - 10} 
                          fill="#FFFFFF" 
                          fontSize="9" 
                          textAnchor="middle"
                          style={{ transition: 'all 0.5s ease', fontWeight: 'bold' }}
                        >
                          {p.val}
                        </text>
                      </g>
                    ))}
                  </svg>
                </div>

                {/* Painel do Estado do Servidor */}
                <div className="dash-sim-panel" style={{ backgroundColor: 'var(--space-bg-darker)', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-lg)', padding: '20px' }}>
                  <div style={{ marginBottom: '16px' }}>
                    <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-heading)' }}>Estado do Servidor</span>
                  </div>
                  
                  <div className="dash-sim-status-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    <div className="dash-sim-status-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                      <span style={{ color: 'var(--space-text-grey)' }}>Status</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--color-success)', fontWeight: '600' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: 'var(--color-success)', boxShadow: '0 0 6px var(--color-success)', display: 'inline-block' }} /> Online
                      </span>
                    </div>
                    <div className="dash-sim-status-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                      <span style={{ color: 'var(--space-text-grey)' }}>Endereço IP</span>
                      <span style={{ color: 'var(--space-text-white)' }}>127.0.0.1:30120</span>
                    </div>
                    <div className="dash-sim-status-row" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px' }}>
                      <span style={{ color: 'var(--space-text-grey)' }}>Uptime Total</span>
                      <span style={{ color: 'var(--space-text-white)', fontSize: '11px', fontFamily: 'var(--font-mono)' }}>{formatUptime(uptimeSeconds)}</span>
                    </div>
                    <div style={{ marginTop: '8px', borderTop: '1px solid var(--space-border-color)', paddingTop: '10px' }}>
                      <ProgressBar label="Processador (CPU)" progress={systemResources.cpu} showValue={true} size="sm" />
                    </div>
                    <div style={{ marginTop: '4px' }}>
                      <ProgressBar label="Memória (RAM)" progress={systemResources.ram} showValue={true} size="sm" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Grid de Módulos Instalados (Usando Card.jsx & Badge.jsx) */}
              <div>
                <h3 style={{ fontSize: '14px', marginBottom: '12px', fontFamily: 'var(--font-heading)', fontWeight: '600' }}>Módulos Instalados</h3>
                <div className="dash-sim-modules-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '12px' }}>
                  {installedModules.slice(0,6).map((mod) => (
                    <Card 
                      key={mod.id} 
                      title={mod.name} 
                      badge="Ativo"
                      badgeVariant="ativo"
                      icon={mod.icon}
                      style={{ padding: '12px', opacity: mod.active ? 1 : 0.4 }}
                    >
                      <span style={{ fontSize: '10px', color: 'var(--space-text-grey)', display: 'block', marginTop: '4px' }}>{mod.type}</span>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Círculos de Progresso / Recursos do Sistema (Usando ProgressCircle.jsx) */}
              <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: '16px' }}>
                
                <div className="dash-sim-panel" style={{ backgroundColor: 'var(--space-bg-darker)', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-lg)', padding: '20px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '16px' }}>Recursos do Sistema</span>
                  <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                    <ProgressCircle progress={systemResources.cpu} size={85} strokeWidth={6} label="CPU" sublabel="4 Cores" />
                    <ProgressCircle progress={systemResources.ram} size={85} strokeWidth={6} label="RAM" sublabel="8 GB" />
                    <ProgressCircle progress={systemResources.disk} size={85} strokeWidth={6} label="Disk" sublabel="256 GB" />
                    <ProgressCircle progress={systemResources.net} size={85} strokeWidth={6} label="Rede" sublabel="1 Gbps" />
                  </div>
                </div>

                {/* Instalação Rápida */}
                <div className="dash-sim-panel" style={{ backgroundColor: 'var(--space-bg-darker)', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-lg)', padding: '20px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '12px' }}>Instalação Rápida</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    {quickInstalls.map((item) => (
                      <div key={item.id} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '6px 8px', borderRadius: '6px', backgroundColor: 'rgba(255,255,255,0.01)', border: '1px solid var(--space-border-color)' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                          <div style={{ width: '16px', height: '16px', color: 'var(--space-orange-primary)' }}>
                            <Icon name="packages" />
                          </div>
                          <span style={{ fontSize: '12.5px', fontWeight: '500' }}>{item.name}</span>
                          {item.popular && <Badge variant="popular" style={{ fontSize: '8px', padding: '1px 4px' }}>Popular</Badge>}
                        </div>

                        {item.installed ? (
                          <span style={{ fontSize: '11px', color: 'var(--color-success)', fontWeight: 'bold' }}>✓ Ativo</span>
                        ) : item.progress !== null ? (
                          <div style={{ width: '80px', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                            <ProgressBar progress={item.progress} size="sm" />
                          </div>
                        ) : (
                          <Button 
                            variant="primary" 
                            size="sm" 
                            style={{ padding: '3px 8px', fontSize: '10px' }}
                            onClick={() => installModule(item.id, item.name)}
                          >
                            Instalar
                          </Button>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Teaser Space Market & Logs Recentes */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                
                {/* Card do Space Market */}
                <div 
                  style={{ 
                    background: 'linear-gradient(135deg, var(--space-bg-card) 0%, rgba(255, 122, 26, 0.08) 100%)', 
                    border: '1px solid rgba(255, 122, 26, 0.2)', 
                    borderRadius: 'var(--space-radius-lg)', 
                    padding: '20px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    position: 'relative',
                    overflow: 'hidden'
                  }}
                >
                  <div style={{ zIndex: 2, display: 'flex', flexDirection: 'column', gap: '10px', maxWidth: '75%' }}>
                    <Badge variant="popular">Forge Market</Badge>
                    <h3 style={{ fontSize: '16px', fontWeight: '700', fontFamily: 'var(--font-heading)', margin: 0 }}>Procurando mais módulos?</h3>
                    <p style={{ fontSize: '12px', color: 'var(--space-text-grey)', margin: 0 }}>Acesse o nosso marketplace integrado e encontre mais scripts prontos com a cara da Forgebox.</p>
                    <Button variant="primary" size="sm" style={{ width: 'fit-content', marginTop: '4px' }} onClick={() => triggerNotification('Loja', 'Abrindo Forge Market...', 'info')}>
                      Explorar Market
                    </Button>
                  </div>
                  <img src={mascotForgieFull} alt="Mascote Forgie" style={{ width: '80px', height: '80px', objectFit: 'cover', borderRadius: '50%', opacity: 0.85, filter: 'drop-shadow(0 0 8px var(--space-orange-glow))', zIndex: 1 }} />
                </div>

                {/* Logs Recentes */}
                <div className="dash-sim-panel" style={{ backgroundColor: 'var(--space-bg-darker)', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-lg)', padding: '20px' }}>
                  <span style={{ fontSize: '14px', fontWeight: '600', fontFamily: 'var(--font-heading)', display: 'block', marginBottom: '12px' }}>Logs Recentes do Sistema</span>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', maxHeight: '140px', overflowY: 'auto' }}>
                    {logs.map((log) => (
                      <div key={log.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', padding: '6px 8px', borderRadius: '4px', backgroundColor: 'var(--space-bg-darkest)', borderLeft: `3px solid ${log.type === 'success' ? 'var(--color-success)' : log.type === 'error' ? 'var(--color-error)' : 'var(--space-orange-primary)'}` }}>
                        <span>
                          <strong>{log.event}</strong> por <span style={{ color: 'var(--space-orange-primary)' }}>{log.user}</span>
                        </span>
                        <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>{log.time}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

            </div>
          )}

          {/* ABA 2: MÓDULOS */}
          {activeTab === 'modules' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="dash-sim-view-header">
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', margin: 0 }}>Gerenciar Módulos</h2>
                <p style={{ fontSize: '13.5px', color: 'var(--space-text-grey)', margin: '4px 0 0' }}>Ative, desative e configure recursos no manifest do FXServer.</p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
                {installedModules.map((mod) => (
                  <Card 
                    key={mod.id} 
                    title={mod.name} 
                    icon={mod.icon}
                    style={{ borderLeft: mod.active ? '3px solid var(--space-orange-primary)' : '3px solid var(--space-border-color)' }}
                  >
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '10px' }}>
                      <span style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>{mod.type}</span>
                      <Toggle checked={mod.active} onChange={() => toggleModuleActive(mod.id, mod.name, mod.active)} />
                    </div>
                    <p style={{ fontSize: '12px', color: 'var(--space-text-muted)', margin: '8px 0 12px', lineHeight: '1.4' }}>
                      Módulo oficial integrado com banco de dados MySQL e logs administrativos no Discord.
                    </p>
                    <div style={{ display: 'flex', gap: '8px' }}>
                      <Button variant="secondary" size="sm" style={{ flex: 1, padding: '6px 0' }} disabled={!mod.active} onClick={() => triggerNotification('Reiniciar', `Reiniciando ${mod.name}...`, 'warning')}>
                        Reiniciar
                      </Button>
                      <Button variant="secondary" size="sm" style={{ flex: 1, padding: '6px 0' }} onClick={() => alert(`Configurações de ${mod.name} abertas.`)}>
                        Ajustes
                      </Button>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          )}

          {/* ABA 10: TERMINAL */}
          {activeTab === 'terminal' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="dash-sim-view-header">
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', margin: 0 }}>Terminal Console</h2>
                <p style={{ fontSize: '13.5px', color: 'var(--space-text-grey)', margin: '4px 0 0' }}>Execute comandos diretamente no console nativo do servidor.</p>
              </div>

              <div 
                style={{ 
                  backgroundColor: '#050507', 
                  border: '1px solid var(--space-border-color)', 
                  borderRadius: 'var(--space-radius-lg)', 
                  padding: '16px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '12px',
                  lineHeight: '1.5',
                  height: '280px',
                  overflowY: 'auto',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '6px'
                }}
              >
                {terminalHistory.map((line, idx) => (
                  <div 
                    key={idx} 
                    style={{ 
                      color: line.type === 'error' ? 'var(--color-error)' : 
                             line.type === 'success' ? 'var(--color-success)' :
                             line.type === 'warning' ? 'var(--space-orange-primary)' :
                             line.type === 'input' ? '#FFF' : '#A0A0A9'
                    }}
                  >
                    {line.text}
                  </div>
                ))}
              </div>

              <form onSubmit={executeTerminalCommand} style={{ display: 'flex', gap: '10px' }}>
                <Input 
                  placeholder="Digite um comando (ex: status, help, restart space_core)..." 
                  value={terminalInput}
                  onChange={(e) => setTerminalInput(e.target.value)}
                  style={{ fontFamily: 'var(--font-mono)', flexGrow: 1 }}
                />
                <Button type="submit" variant="primary" style={{ height: '46px', width: '120px' }}>
                  Enviar
                </Button>
              </form>
            </div>
          )}

          {/* ABA 5: CONFIGURAÇÕES */}
          {activeTab === 'settings' && (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div className="dash-sim-view-header">
                <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '24px', fontWeight: '700', margin: 0 }}>Configurações do Servidor</h2>
                <p style={{ fontSize: '13.5px', color: 'var(--space-text-grey)', margin: '4px 0 0' }}>Gerencie as preferências globais do framework Forgebox.</p>
              </div>

              <div className="dash-sim-panel" style={{ backgroundColor: 'var(--space-bg-darker)', border: '1px solid var(--space-border-color)', borderRadius: 'var(--space-radius-lg)', padding: '24px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--space-orange-primary)', borderBottom: '1px solid var(--space-border-color)', paddingBottom: '8px', marginBottom: '14px' }}>Rede & Conectividade</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                    <Input label="Porta FXServer" defaultValue="30120" readOnly />
                    <Input label="Máximo de Slots" defaultValue="128" readOnly />
                  </div>
                </div>

                <div>
                  <h3 style={{ fontSize: '15px', fontWeight: '600', color: 'var(--space-orange-primary)', borderBottom: '1px solid var(--space-border-color)', paddingBottom: '8px', marginBottom: '14px' }}>Segurança & Monitoramento</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    <Toggle label="Habilitar backups automáticos a cada 12 horas" defaultChecked />
                    <Toggle label="Ativar Forge Shield Anti-Cheat integrado" defaultChecked />
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', borderTop: '1px solid var(--space-border-color)', paddingTop: '16px' }}>
                  <Button variant="secondary" size="sm" onClick={() => triggerNotification('Cancelado', 'Configurações descartadas.', 'info')}>Descartar</Button>
                  <Button variant="primary" size="sm" onClick={() => triggerNotification('Salvo', 'Ajustes salvos com sucesso.', 'success')}>Salvar Ajustes</Button>
                </div>
              </div>
            </div>
          )}

          {/* OUTRAS ABAS DA SIDEBAR (MOCK) */}
          {!['dashboard', 'modules', 'terminal', 'settings'].includes(activeTab) && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '300px', gap: '16px' }}>
              <div style={{ width: '48px', height: '48px', color: 'var(--space-orange-primary)', filter: 'drop-shadow(0 0 6px var(--space-orange-glow))' }}>
                <Icon name="monitor" />
              </div>
              <h3 style={{ fontFamily: 'var(--font-heading)', fontSize: '18px', fontWeight: '600', textTransform: 'capitalize' }}>
                {activeTab.replace('-', ' ')}
              </h3>
              <p style={{ fontSize: '13px', color: 'var(--space-text-grey)', textAlign: 'center', maxWidth: '350px' }}>
                Você está visualizando a aba simulada de <strong>{activeTab}</strong>. Todos os elementos aqui são estilizados com o design premium da Forgebox.
              </p>
              <Button variant="primary" size="sm" onClick={() => setActiveTab('dashboard')}>
                Voltar ao Dashboard
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
}
