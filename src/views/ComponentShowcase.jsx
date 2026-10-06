import React, { useEffect, useState } from 'react';
import CodeBox from '../components/CodeBox';
import { NotificationDemo } from '../components/NotificationCenter';

import Icon from '../components/ui/Icon';
import { iconNames } from '../components/ui/iconNames';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Textarea from '../components/ui/Textarea';
import Select from '../components/ui/Select';
import Checkbox from '../components/ui/Checkbox';
import Radio from '../components/ui/Radio';
import Toggle from '../components/ui/Toggle';
import Slider from '../components/ui/Slider';
import Badge from '../components/ui/Badge';
import Card from '../components/ui/Card';
import Tooltip from '../components/ui/Tooltip';
import Modal from '../components/ui/Modal';
import ProgressBar from '../components/ui/ProgressBar';
import ProgressCircle from '../components/ui/ProgressCircle';
import TextUI from '../components/ui/TextUI';
import ContextMenu from '../components/ui/ContextMenu';
import RegisterContext from '../components/ui/RegisterContext';
import FloatingContextMenu from '../components/ui/FloatingContextMenu';
import RadialMenu from '../components/ui/RadialMenu';
import SkillCheck from '../components/ui/SkillCheck';
import Avatar, { AvatarGroup } from '../components/ui/Avatar';
import IconToggleButton from '../components/ui/IconToggleButton';
import ScrollArea from '../components/ui/ScrollArea';
import Skeleton from '../components/ui/Skeleton';
import Spinner from '../components/ui/Spinner';
import StatusBadge from '../components/ui/StatusBadge';
import AnalogGauge from '../components/ui/AnalogGauge';
import ArtificialHorizon from '../components/ui/ArtificialHorizon';
import Clinometer from '../components/ui/Clinometer';
import * as Shapes from '../components/ui/Shapes';
import Accordion from '../components/ui/Accordion';
import ActionCard from '../components/ui/ActionCard';
import ActionModal from '../components/ui/ActionModal';
import BlipPicker from '../components/ui/BlipPicker';
import ButtonGroup from '../components/ui/ButtonGroup';
import ColorPicker from '../components/ui/ColorPicker';
import CommandInput from '../components/ui/CommandInput';
import CompactSearch from '../components/ui/CompactSearch';
import CopyButton from '../components/ui/CopyButton';
import DatePicker from '../components/ui/DatePicker';
import Dialog from '../components/ui/Dialog';
import InputDialog from '../components/ui/InputDialog';
import Drawer from '../components/ui/Drawer';
import EconomyCard from '../components/ui/EconomyCard';
import ExpandableSearch from '../components/ui/ExpandableSearch';
import GridActionButton from '../components/ui/GridActionButton';
import MarkerPicker from '../components/ui/MarkerPicker';
import PlayerVitals from '../components/ui/PlayerVitals';
import Popover from '../components/ui/Popover';
import SearchInput from '../components/ui/SearchInput';
import SectionHeader from '../components/ui/SectionHeader';
import SegmentedControl from '../components/ui/SegmentedControl';
import Tabs from '../components/ui/Tabs';
import ThemeToggle from '../components/ui/ThemeToggle';
import TimePicker from '../components/ui/TimePicker';
import VitalAdjustModal from '../components/ui/VitalAdjustModal';
import Calendar from '../components/ui/Calendar';
import KeyboardVisualizer from '../components/ui/KeyboardVisualizer';
import PageHeader from '../components/ui/PageHeader';
import PlayerScreenStream from '../components/ui/PlayerScreenStream';
import Sidebar from '../components/ui/Sidebar';
import Table from '../components/ui/Table';
import Topbar from '../components/ui/Topbar';
import TabletFrame from '../components/ui/TabletFrame';
import NitroBar from '../components/ui/NitroBar';
import DriftPoints from '../components/ui/DriftPoints';
import GearDisplay from '../components/ui/GearDisplay';
import NumberInput from '../components/ui/NumberInput';
import FileUpload from '../components/ui/FileUpload';
import TagInput from '../components/ui/TagInput';
import RangeSlider from '../components/ui/RangeSlider';
import ColorSwatch from '../components/ui/ColorSwatch';
import OTPInput from '../components/ui/OTPInput';
import PhoneInput from '../components/ui/PhoneInput';
import Toast from '../components/ui/Toast';
import AlertBanner from '../components/ui/AlertBanner';
import ProgressToast from '../components/ui/ProgressToast';
import ConfirmDialog from '../components/ui/ConfirmDialog';
import Breadcrumb from '../components/ui/Breadcrumb';
import Stepper from '../components/ui/Stepper';
import TreeView from '../components/ui/TreeView';
import InfiniteScroll from '../components/ui/InfiniteScroll';
import SplitPane from '../components/ui/SplitPane';
import StatCard from '../components/ui/StatCard';
import Timeline from '../components/ui/Timeline';
import HeatMap from '../components/ui/HeatMap';
import PieChart from '../components/ui/PieChart';
import BarChart from '../components/ui/BarChart';
import Sparkline from '../components/ui/Sparkline';
import forgeboxMascotAvatar from '../assets/forgebox_mascot_avatar.jpg';

const groups = [
  { title: 'Atoms', items: [['avatar', 'Avatar'], ['icons', 'Icones'], ['button', 'Button'], ['badge', 'Badge'], ['forms', 'Inputs'], ['forms-advanced', 'Novos Forms'], ['feedback', 'Feedback'], ['feedback-advanced', 'Novos Feedback']] },
  { title: 'Molecules', items: [['actions', 'Acoes'], ['register-context', 'RegisterContext'], ['floating-context', 'ContextMenu'], ['input-dialog', 'InputDialog'], ['search', 'Search'], ['pickers', 'Pickers'], ['overlays', 'Overlays'], ['content', 'Content']] },
  { title: 'HUD', items: [['vitals', 'PlayerVitals'], ['nitro', 'NitroBar'], ['drift', 'DriftPoints'], ['gear', 'GearDisplay'], ['gauges', 'Gauges'], ['shapes', 'Shapes'], ['game', 'Game UI']] },
  { title: 'Organisms', items: [['topbar', 'Topbar'], ['layout', 'Sidebar/Layout'], ['navigation', 'Navigation/Layout'], ['data-viz', 'Data Viz'], ['calendar', 'Calendar'], ['table', 'Table'], ['frames', 'Frames/Stream'], ['notifications', 'Notifications']] }
];

const users = [
  { id: 1, name: 'Spacer Dev', src: forgeboxMascotAvatar, status: 'online', glow: true },
  { id: 2, name: 'Felipe Rocha', status: 'away' },
  { id: 3, name: 'Gabriel Reis', status: 'busy' },
  { id: 4, name: 'Otavio Unity', status: 'offline', tone: 'neutral' },
  { id: 5, name: 'Amanda Melo', status: 'online', tone: 'success' }
];

function Story({ title, description, children, snippets, minHeight = 220 }) {
  return (
    <section style={{ borderTop: '1px solid var(--space-border-color)', paddingTop: 28 }}>
      <h2 style={{ margin: 0, color: 'var(--space-text-white)', fontSize: 22, fontFamily: 'var(--font-heading)' }}>{title}</h2>
      {description && <p style={{ margin: '8px 0 14px', color: 'var(--space-text-grey)', fontSize: 14, lineHeight: 1.6 }}>{description}</p>}
      <div style={{ minHeight, background: 'var(--space-bg-darkest)', border: '1px solid var(--space-border-color)', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 18, flexWrap: 'wrap', padding: 24, overflow: 'auto', boxSizing: 'border-box' }}>
        {children}
      </div>
      <CodeBox snippets={snippets} />
    </section>
  );
}

function Page({ title, description, children }) {
  return (
    <div style={{ width: '100%', maxWidth: 1040, margin: '0 auto', padding: '30px 0 72px', boxSizing: 'border-box' }}>
      <p style={{ margin: '0 0 10px', color: 'var(--space-orange-primary)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 800 }}>Docs</p>
      <h1 style={{ margin: 0, color: 'var(--space-text-white)', fontSize: 36, fontFamily: 'var(--font-heading)' }}>{title}</h1>
      <p style={{ margin: '12px 0 34px', color: 'var(--space-text-grey)', fontSize: 15, lineHeight: 1.7, maxWidth: 780 }}>{description}</p>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 32 }}>{children}</div>
    </div>
  );
}

function Swatch({ color }) {
  return <div style={{ width: 34, height: 34, borderRadius: 8, background: color, border: '1px solid var(--space-border-color)' }} />;
}

export default function ComponentShowcase({ initialGroup = 'atoms' }) {
  const resolveInitialDoc = (groupId) => {
    const normalized = String(groupId || 'atoms').toLowerCase();
    const group = groups.find((item) => item.title.toLowerCase() === normalized);
    return group?.items?.[0]?.[0] || 'avatar';
  };

  const [activeDoc, setActiveDoc] = useState(() => {
    const saved = localStorage.getItem('forge-ui-active-doc');
    if (saved && groups.some((group) => group.items.some(([id]) => id === saved))) return saved;
    return resolveInitialDoc(initialGroup);
  });
  const [toggleVal, setToggleVal] = useState(true);
  const [checkVal, setCheckVal] = useState(true);
  const [radioVal, setRadioVal] = useState('opcao1');
  const [sliderVal, setSliderVal] = useState(65);
  const [inputVal, setInputVal] = useState('Texto demonstrativo');
  const [textareaVal, setTextareaVal] = useState('Descricao do personagem...');
  const [selectVal, setSelectVal] = useState('br');
  const [colorVal, setColorVal] = useState('#FF7A1A');
  const [blipVal, setBlipVal] = useState('garage');
  const [markerVal, setMarkerVal] = useState(1);
  const [segmentVal, setSegmentVal] = useState('dia');
  const [btnGroupVal, setBtnGroupVal] = useState('lista');
  const [dialogOpen, setDialogOpen] = useState(false);
  const [inputDialogOpen, setInputDialogOpen] = useState(false);
  const [inputDialogResult, setInputDialogResult] = useState(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [vitalModalOpen, setVitalModalOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [actionModalOpen, setActionModalOpen] = useState(false);
  const [actionModalVariant, setActionModalVariant] = useState('default');
  const [actionModalTitle, setActionModalTitle] = useState('Aviso Importante');
  const [singleVitalModalOpen, setSingleVitalModalOpen] = useState(false);
  const [selectedVitalKey, setSelectedVitalKey] = useState('health');
  const [themeDark, setThemeDark] = useState(true);
  const [dateVal, setDateVal] = useState('2026-06-27');
  const [timeVal, setTimeVal] = useState('10:42');
  const [searchVal, setSearchVal] = useState('');
  const [expandSearch, setExpandSearch] = useState('');
  const [btnActive, setBtnActive] = useState(false);
  const [sidebarActive, setSidebarActive] = useState('dashboard');
  const [radialOpen, setRadialOpen] = useState(false);
  const [vitals, setVitals] = useState({ health: 85, armor: 40, hunger: 90, thirst: 80, stress: 10, breath: 100 });
  const [numberVal, setNumberVal] = useState(72);
  const [rangeVal, setRangeVal] = useState([24, 78]);
  const [tagVal, setTagVal] = useState(['police', 'garage']);
  const [otpVal, setOtpVal] = useState('421');
  const [phoneVal, setPhoneVal] = useState('');
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [contextOpacity, setContextOpacity] = useState(0.88);
  const [contextBlur, setContextBlur] = useState(18);
  const [contextAccent, setContextAccent] = useState('#FF7A1A');
  const [floatingOpacity, setFloatingOpacity] = useState(0.86);
  const [floatingBlur, setFloatingBlur] = useState(10);

  useEffect(() => {
    const group = groups.find((item) => item.title.toLowerCase() === String(initialGroup || 'atoms').toLowerCase());
    const belongsToGroup = group?.items?.some(([id]) => id === activeDoc);
    if (!belongsToGroup) setActiveDoc(resolveInitialDoc(initialGroup));
  }, [initialGroup]);

  useEffect(() => {
    localStorage.setItem('forge-ui-active-doc', activeDoc);
  }, [activeDoc]);

  useEffect(() => {
    document.querySelector('.showcase-content')?.scrollTo({ top: 0, behavior: 'smooth' });
  }, [activeDoc]);

  const tableHeaders = ['ID', 'Nome', 'Cargo', 'Status'];
  const tableData = [
    { id: '#1001', name: 'Spacer Dev', role: 'Admin', status: <StatusBadge status="online" /> },
    { id: '#1002', name: 'Forgie Bot', role: 'AI', status: <StatusBadge status="online" /> },
    { id: '#1003', name: 'Gabriel Reis', role: 'Dev', status: <StatusBadge status="away" /> },
    { id: '#1004', name: 'Marcos Silva', role: 'Mod', status: <StatusBadge status="busy" /> },
    { id: '#1005', name: 'Ana Oliveira', role: 'Suporte', status: <StatusBadge status="offline" /> }
  ];
  const sidebarItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Icon name="dashboard" /> },
    { id: 'players', label: 'Jogadores', icon: <Icon name="players" /> },
    { id: 'modules', label: 'Modulos', icon: <Icon name="packages" /> },
    { id: 'settings', label: 'Config', icon: <Icon name="settings" /> }
  ];
  const treeItems = [
    { id: 'server', label: 'server-data', icon: <Icon name="database" />, children: [
      { id: 'players', label: 'players.json', badge: '128' },
      { id: 'vehicles', label: 'vehicles.json', badge: '42' }
    ] },
    { id: 'resources', label: 'resources', icon: <Icon name="packages" />, children: [
      { id: 'hud', label: 'forgebox_hud' },
      { id: 'garage', label: 'forgebox_garage' },
      { id: 'inventory', label: 'forgebox_inventory' }
    ] }
  ];
  const timelineItems = [
    { title: 'Servidor iniciado', description: 'Todos os recursos principais carregaram.', time: '10:12', status: 'success' },
    { title: 'Backup criado', description: 'Snapshot automatico salvo no painel.', time: '10:28', color: '#3B82F6' },
    { title: 'Pico de jogadores', description: 'Fila ativa e 94 jogadores online.', time: '10:42', color: '#FF7A1A' }
  ];
  const chartData = [
    { label: 'HUD', value: 42, color: '#FF7A1A' },
    { label: 'Garagem', value: 28, color: '#3B82F6' },
    { label: 'Inventario', value: 18, color: '#10B981' },
    { label: 'Logs', value: 12, color: '#F59E0B' }
  ];
  const heatData = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'].flatMap((row, r) =>
    ['00h', '06h', '12h', '18h'].map((column, c) => ({ row, column, value: (r + 1) * (c + 2) + (c === 3 ? 12 : 0) }))
  );
  const scrollItems = Array.from({ length: 28 }, (_, index) => ({
    id: index + 1,
    label: `Evento #${String(index + 1).padStart(2, '0')}`,
    status: index % 3 === 0 ? 'warning' : index % 2 === 0 ? 'online' : 'info'
  }));

  const renderDoc = () => {
    if (activeDoc === 'avatar') return (
      <Page title="Avatar" description="Imagem de usuario, fallback por iniciais, status e grupos sobrepostos para listas de equipe.">
        <Story title="Com imagem" description="Foto, glow, status e cantos alternativos." snippets={[{ label: 'Image', code: '<Avatar src={user.avatar} name="Spacer Dev" size="lg" status="online" glow />' }, { label: 'Soft', code: '<Avatar src={user.avatar} variant="soft" status="away" />' }, { label: 'Square', code: '<Avatar src={user.avatar} variant="square" status="busy" />' }]}>
          <Avatar src={forgeboxMascotAvatar} name="Spacer Dev" size="xl" status="online" glow />
          <Avatar src={forgeboxMascotAvatar} name="Spacer Dev" size="lg" variant="soft" status="away" />
          <Avatar src={forgeboxMascotAvatar} name="Spacer Dev" size="md" variant="square" status="busy" />
        </Story>
        <Story title="Fallback por iniciais" snippets={[{ label: 'Sizes', code: '<Avatar name="Felipe Rocha" size="sm" />\n<Avatar name="Gabriel Reis" size="lg" />' }, { label: 'Tone', code: '<Avatar name="Amanda Melo" tone="success" glow />' }, { label: 'No ring', code: '<Avatar name="Otavio Unity" showRing={false} />' }]}>
          <Avatar name="SD" size="xs" status="online" />
          <Avatar name="Felipe Rocha" size="sm" status="away" />
          <Avatar name="Gabriel Reis" size="md" status="busy" glow />
          <Avatar name="Otavio Unity" size="lg" tone="neutral" status="offline" />
          <Avatar name="Amanda Melo" size="xl" tone="success" glow />
        </Story>
        <Story title="AvatarGroup" snippets={[{ label: 'Group', code: '<AvatarGroup items={users} size="md" max={4} />' }, { label: 'Compact', code: '<AvatarGroup items={users} size="sm" max={3} overlap={10} />' }, { label: 'Large', code: '<AvatarGroup items={users} size="lg" max={5} overlap={16} />' }]}>
          <AvatarGroup items={users} size="sm" max={3} />
          <AvatarGroup items={users} size="md" max={4} />
          <AvatarGroup items={users} size="lg" max={5} overlap={16} />
        </Story>
      </Page>
    );

    if (activeDoc === 'icons') return (
      <Page title="Icones" description="Biblioteca visual para botoes, menus, HUDs e paineis administrativos.">
        <Story title="Grid principal" minHeight={420} description="A area usa overflow para nao cortar os botoes como acontecia antes." snippets={[{ label: 'Import', code: "import Icon from './Icon';" }, { label: 'Grid', code: 'iconNames.map((name) => <Icon name={name} style={{ width: 24, height: 24 }} />)' }, { label: 'Button', code: '<Button icon={<Icon name="dashboard" />}>Dashboard</Button>' }]}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(82px, 1fr))', gap: 10, width: '100%', minWidth: 320 }}>
            {iconNames.slice(0, 48).map((name) => (
              <div key={name} style={{ minHeight: 68, border: '1px solid var(--space-border-color)', borderRadius: 8, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--space-orange-primary)', background: 'var(--space-bg-card)' }}>
                <Icon name={name} style={{ width: 24, height: 24 }} />
                <span style={{ color: 'var(--space-text-grey)', fontSize: 10 }}>{name}</span>
              </div>
            ))}
          </div>
        </Story>
        <Story title="Uso em acoes" snippets={[{ label: 'Toolbar', code: '<Button size="icon" icon={<Icon name="search" />} />' }, { label: 'Menu', code: '<GridActionButton label="Backups" icon={<Icon name="backup" />} />' }, { label: 'Toggle', code: '<IconToggleButton icon={<Icon name="bell" />} active />' }]}>
          <Button size="icon" variant="secondary" icon={<Icon name="search" />} />
          <Button size="icon" variant="outline" icon={<Icon name="settings" />} />
          <IconToggleButton icon={<Icon name="bell" />} active={btnActive} onClick={() => setBtnActive(!btnActive)} />
          <div style={{ width: 116 }}><GridActionButton label="Backups" icon={<Icon name="backup" />} badge="novo" style={{ minHeight: 82, padding: '12px 10px' }} /></div>
        </Story>
      </Page>
    );

    if (activeDoc === 'button') return (
      <Page title="Button" description="Botoes de comando com variantes, tamanhos, loading e icones.">
        <Story title="Variantes" snippets={[{ label: 'Primary', code: '<Button variant="primary">Salvar</Button>' }, { label: 'Secondary', code: '<Button variant="secondary">Cancelar</Button>' }, { label: 'Danger', code: '<Button variant="danger">Excluir</Button>' }, { label: 'Ghost', code: '<Button variant="ghost">Mais opcoes</Button>' }]}>
          <Button>Primary</Button><Button variant="secondary">Secondary</Button><Button variant="outline">Outline</Button><Button variant="ghost">Ghost</Button><Button variant="link">Link</Button><Button variant="danger">Danger</Button>
        </Story>
        <Story title="Tamanhos e icones" snippets={[{ label: 'Small', code: '<Button size="sm">Pequeno</Button>' }, { label: 'Large', code: '<Button size="lg">Grande</Button>' }, { label: 'Icon', code: '<Button size="icon" icon={<Icon name="plus" />} />' }, { label: 'Loading', code: '<Button loading>Processando</Button>' }]}>
          <Button size="sm" icon={<Icon name="plus" />}>Pequeno</Button><Button icon={<Icon name="check" />}>Medio</Button><Button size="lg" icon={<Icon name="backup" />}>Grande</Button><Button size="icon" icon={<Icon name="settings" />} /><Button loading>Loading</Button><Button disabled>Disabled</Button>
        </Story>
        <Story title="ButtonGroup" snippets={[{ label: 'Default', code: '<ButtonGroup options={options} value={value} onChange={setValue} />' }, { label: 'Views', code: '<ButtonGroup options={[{value:"grid", label:"Grid"}]} />' }, { label: 'Icons', code: '<ButtonGroup options={[{icon:<Icon />}]} />' }]}>
          <ButtonGroup value={btnGroupVal} onChange={setBtnGroupVal} options={[{ value: 'lista', label: 'Lista' }, { value: 'grid', label: 'Grid' }, { value: 'mapa', label: 'Mapa' }]} />
        </Story>
      </Page>
    );

    if (activeDoc === 'badge') return (
      <Page title="Badge" description="Etiquetas curtas para estados, avisos e metadados.">
        <Story title="Badges simples" snippets={[{ label: 'Ativo', code: '<Badge variant="ativo">Ativo</Badge>' }, { label: 'Popular', code: '<Badge variant="popular">Popular</Badge>' }, { label: 'Novo', code: '<Badge variant="novo">Novo</Badge>' }, { label: 'Perigo', code: '<Badge variant="perigo">Perigo</Badge>' }]}>
          <Badge variant="ativo">Ativo</Badge><Badge variant="popular">Popular</Badge><Badge variant="novo">Novo</Badge><Badge variant="perigo">Perigo</Badge>
        </Story>
        <Story title="StatusBadge" snippets={[{ label: 'Online', code: '<StatusBadge status="online" />' }, { label: 'Away', code: '<StatusBadge status="away" label="Ausente" />' }, { label: 'Error', code: '<StatusBadge status="error" />' }, { label: 'Info', code: '<StatusBadge status="info" />' }]}>
          <StatusBadge status="online" /><StatusBadge status="away" label="Ausente" /><StatusBadge status="busy" label="Indisponivel" /><StatusBadge status="offline" /><StatusBadge status="success" /><StatusBadge status="warning" /><StatusBadge status="error" /><StatusBadge status="info" />
        </Story>
      </Page>
    );

    if (activeDoc === 'forms') return (
      <Page title="Inputs" description="Campos de formulario e controles binarios/numericos.">
        <Story title="Text fields" minHeight={260} snippets={[{ label: 'Input', code: '<Input label="Nome" value={value} onChange={setValue} />' }, { label: 'Textarea', code: '<Textarea value={text} onChange={setText} />' }, { label: 'Select', code: '<Select options={options} value={value} onChange={setValue} />' }]}>
          <div style={{ display: 'grid', gap: 14, width: 'min(100%, 520px)' }}><Input label="Nome do recurso" value={inputVal} onChange={(e) => setInputVal(e.target.value)} /><Textarea label="Descricao" value={textareaVal} onChange={(e) => setTextareaVal(e.target.value)} rows={4} /><Select label="Locale" value={selectVal} onChange={(e) => setSelectVal(e.target.value)} options={[{ value: 'br', label: 'Portugues BR' }, { value: 'en', label: 'English' }, { value: 'es', label: 'Espanol' }]} /></div>
        </Story>
        <Story title="Checks, radios e toggle" snippets={[{ label: 'Checkbox', code: '<Checkbox checked={checked} onChange={setChecked} label="Ativo" />' }, { label: 'Radio', code: '<Radio checked={value === "a"} onChange={() => setValue("a")} />' }, { label: 'Toggle', code: '<Toggle checked={enabled} onChange={setEnabled} />' }]}>
          <Checkbox checked={checkVal} onChange={(e) => setCheckVal(e.target.checked)} label="Modulo ativo" />
          <Radio checked={radioVal === 'opcao1'} onChange={() => setRadioVal('opcao1')} label="Opcao 1" />
          <Radio checked={radioVal === 'opcao2'} onChange={() => setRadioVal('opcao2')} label="Opcao 2" />
          <Toggle checked={toggleVal} onChange={(e) => setToggleVal(e.target.checked)} label="Dark mode" />
        </Story>
        <Story title="Slider e segmented" snippets={[{ label: 'Slider', code: '<Slider value={65} onChange={setValue} min={0} max={100} />' }, { label: 'Segmented', code: '<SegmentedControl value={value} onChange={setValue} options={options} />' }, { label: 'Theme', code: '<ThemeToggle isDark={dark} onChange={setDark} />' }]}>
          <div style={{ width: 'min(100%, 440px)', display: 'grid', gap: 18 }}><Slider value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value) || 0)} min={0} max={100} label="Intensidade" /><SegmentedControl value={segmentVal} onChange={setSegmentVal} options={[{ value: 'dia', label: 'Dia' }, { value: 'semana', label: 'Semana' }, { value: 'mes', label: 'Mes' }]} /><ThemeToggle isDark={themeDark} onChange={setThemeDark} /></div>
        </Story>
      </Page>
    );

    if (activeDoc === 'forms-advanced') return (
      <Page title="Novos Forms" description="Inputs especializados para formularios de painel, cadastros e fluxos de seguranca.">
        <Story title="Number, Range e Color" snippets={[{ label: 'Number', code: '<NumberInput value={value} onChange={setValue} min={0} max={100} />' }, { label: 'Range', code: '<RangeSlider value={[20, 80]} onChange={setRange} />' }, { label: 'Color', code: '<ColorSwatch value={color} onChange={setColor} />' }]}>
          <div style={{ width: 'min(100%, 280px)' }}><NumberInput label="Prioridade" value={numberVal} onChange={setNumberVal} min={0} max={100} step={4} /></div>
          <div style={{ width: 'min(100%, 360px)' }}><RangeSlider label="Faixa de ping" value={rangeVal} onChange={setRangeVal} min={0} max={120} step={2} /></div>
          <div style={{ width: 'min(100%, 320px)' }}><ColorSwatch label="Cor do modulo" value={colorVal} onChange={setColorVal} /></div>
        </Story>
        <Story title="Upload e Tags" minHeight={300} snippets={[{ label: 'File', code: '<FileUpload accept="image/*" maxSizeMB={4} />' }, { label: 'Tags', code: '<TagInput tags={tags} onChange={setTags} suggestions={items} />' }]}>
          <div style={{ width: 'min(100%, 420px)' }}><FileUpload accept="image/*" maxSizeMB={4} label="Enviar imagem do recurso" sublabel="PNG, JPG ou WEBP ate 4MB" /></div>
          <div style={{ width: 'min(100%, 420px)' }}><TagInput label="Tags" tags={tagVal} onChange={setTagVal} maxTags={5} suggestions={['police', 'ems', 'garage', 'inventory', 'hud', 'admin']} /></div>
        </Story>
        <Story title="OTP e Phone" snippets={[{ label: 'OTP', code: '<OTPInput length={6} value={otp} onChange={setOtp} />' }, { label: 'Phone', code: '<PhoneInput defaultCountry="BR" onChange={setPhone} />' }]}>
          <OTPInput label="Codigo de acesso" value={otpVal} onChange={setOtpVal} length={6} />
          <div style={{ width: 'min(100%, 340px)' }}><PhoneInput label="Telefone" value={phoneVal} onChange={(data) => setPhoneVal(data.phone)} /></div>
        </Story>
      </Page>
    );
    if (activeDoc === 'feedback') return (
      <Page title="Feedback" description="Loading, progresso, skeleton e texto de interface.">
        <Story title="Progress" snippets={[{ label: 'Bar', code: '<ProgressBar value={72} />' }, { label: 'Circle', code: '<ProgressCircle value={80} label="CPU" />' }, { label: 'No value', code: '<ProgressCircle value={40} showValue={false} />' }]}>
          <div style={{ width: 260 }}><ProgressBar value={sliderVal} /></div><ProgressCircle value={85} label="HP" /><ProgressCircle value={40} label="AR" /><ProgressCircle value={90} showValue={false} icon={<Icon name="heart" />} />
        </Story>
        <Story title="Loading states" snippets={[{ label: 'Spinner', code: '<Spinner size="md" />' }, { label: 'Skeleton', code: '<Skeleton width="240px" height="18px" />' }, { label: 'Scroll', code: '<ScrollArea height={160}>...</ScrollArea>' }]}>
          <Spinner /><div style={{ display: 'grid', gap: 10, width: 260 }}><Skeleton height="18px" /><Skeleton width="80%" height="18px" /><Skeleton width="55%" height="18px" /></div><ScrollArea style={{ width: 280, height: 150 }}>{Array.from({ length: 8 }, (_, i) => <p key={i} style={{ margin: 8, color: 'var(--space-text-grey)' }}>Linha de log #{i + 1}</p>)}</ScrollArea>
        </Story>
        <Story title="TextUI e tooltip" snippets={[{ label: 'TextUI', code: '<TextUI title="E" description="Interagir" />' }, { label: 'Tooltip', code: '<Tooltip content="Copiar"><Button /></Tooltip>' }, { label: 'Copy', code: '<CopyButton text="/giveitem" />' }]}>
          <TextUI title="E" description="Interagir" /><Tooltip content="Abre configuracoes"><Button size="icon" variant="secondary" icon={<Icon name="settings" />} /></Tooltip><CopyButton text="/giveitem player id amount" />
        </Story>
      </Page>
    );
    if (activeDoc === 'feedback-advanced') return (
      <Page title="Novos Feedback" description="Avisos persistentes, toasts e confirmacoes para fluxos administrativos.">
        <Story title="Toast e AlertBanner" snippets={[{ label: 'Toast', code: '<Toast type="success" title="Salvo" message="Configuracao aplicada" />' }, { label: 'Alert', code: '<AlertBanner type="warning" title="Fila alta" />' }]}>
          <Toast type="success" title="Modulo salvo" message="As alteracoes foram aplicadas." duration={2500} />
          <div style={{ width: 'min(100%, 620px)', display: 'grid', gap: 10 }}>
            <AlertBanner type="info" title="Atualizacao disponivel" message="Revise os recursos antes de reiniciar o servidor." action={{ label: 'Ver', onClick: () => {} }} />
            <AlertBanner type="warning" title="Fila elevada" message="Jogadores aguardando entrada no servidor." dismissible={false} />
          </div>
        </Story>
        <Story title="ProgressToast e ConfirmDialog" snippets={[{ label: 'Progress', code: '<ProgressToast title="Instalando" progress={72} />' }, { label: 'Confirm', code: '<ConfirmDialog open={open} onConfirm={save} />' }]}>
          <ProgressToast title="Instalando pacote" subtitle="forgebox_inventory" progress={sliderVal} status="loading" dismissOnComplete={false} />
          <Button variant="danger" onClick={() => setConfirmOpen(true)}>Abrir ConfirmDialog</Button>
          <ConfirmDialog open={confirmOpen} title="Reiniciar recurso?" message="Isso vai recarregar o recurso selecionado para todos os jogadores." confirmLabel="Reiniciar" onCancel={() => setConfirmOpen(false)} onConfirm={() => setConfirmOpen(false)} />
        </Story>
      </Page>
    );
    if (activeDoc === 'actions') return (
      <Page title="Acoes" description="Controles compostos para dashboards e NUIs.">
        <Story title="GridActionButton" minHeight={260} snippets={[{ label: 'Default', code: '<GridActionButton label="Dashboard" icon={<Icon name="dashboard" />} />' }, { label: 'Badge', code: '<GridActionButton label="Modulos" badge="12" />' }, { label: 'Disabled', code: '<GridActionButton label="Bloqueado" disabled />' }]}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(105px, 1fr))', gap: 12, width: 'min(100%, 430px)' }}>
            <GridActionButton label="Dashboard" icon={<Icon name="dashboard" />} badge="novo" />
            <GridActionButton label="Jogadores" icon={<Icon name="players" />} />
            <GridActionButton label="Modulos" icon={<Icon name="packages" />} badge="12" />
            <GridActionButton label="Backups" icon={<Icon name="backup" />} />
            <GridActionButton label="Config" icon={<Icon name="settings" />} />
            <GridActionButton label="Bloqueado" icon={<Icon name="bell" />} disabled />
          </div>
        </Story>
        <Story title="ActionCard e EconomyCard" snippets={[{ label: 'Action', code: '<ActionCard title="Garagem" actions={<Button>Abrir</Button>} />' }, { label: 'Economy', code: '<EconomyCard type="bank" amount={128000} />' }, { label: 'Context', code: '<ContextMenu items={items}>...</ContextMenu>' }]}>
          <ActionCard title="Garagem" description="Gerencie veiculos" icon={<Icon name="vehicle" />} actions={<Button size="sm">Abrir</Button>} style={{ width: 280 }} />
          <EconomyCard type="bank" amount={128000} style={{ width: 280 }} />
          <EconomyCard type="cash" amount={4200} style={{ width: 280 }} />
          <ContextMenu items={[{ label: 'Copiar', onClick: () => {} }, { label: 'Excluir', onClick: () => {} }]}><Button variant="secondary">Clique direito</Button></ContextMenu>
        </Story>
      </Page>
    );

    if (activeDoc === 'register-context') return (
      <Page title="RegisterContext" description="Context menu inspirado no ox_lib registerContext, com metadata, progresso, checkbox, arrow e visual 100% editavel.">
        <Story title="Menu editavel" minHeight={560} snippets={[{ label: 'Basic', code: '<RegisterContext title="Garagem" options={options} opacity={0.88} blur={18} accent="#FF7A1A" />' }, { label: 'Option', code: '{ title:"Retirar veiculo", description:"Spawn na vaga", progress:72, metadata:{ placa:"SPC-2048" } }' }, { label: 'Theme', code: '<RegisterContext width={420} radius={12} background="10,10,12" borderOpacity={0.22} />' }]}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 380px) minmax(220px, 320px)', gap: 18, alignItems: 'start', width: '100%' }}>
            <RegisterContext
              menu="forgebox_garage"
              title="Garagem Central"
              description="Escolha uma acao para o veiculo selecionado."
              accent={contextAccent}
              opacity={contextOpacity}
              blur={contextBlur}
              radius={12}
              borderOpacity={0.22}
              width={380}
              footer="ESC fecha o menu - Enter confirma a opcao ativa"
              options={[
                { title: 'Retirar veiculo', description: 'Spawn seguro na vaga mais proxima.', icon: <Icon name="vehicle" />, badge: 'PRONTO', progress: 82, colorScheme: 'green', metadata: { Placa: 'SPC-2048', Combustivel: '82%', Motor: '94%' } },
                { title: 'Guardar na garagem', description: 'Sincroniza estado, dano e combustivel.', icon: <Icon name="database" />, keybind: 'G', checked: true, colorScheme: 'blue' },
                { title: 'Rastrear veiculo', description: 'Cria uma rota temporaria no mapa.', icon: <Icon name="map" />, arrow: true, colorScheme: 'orange' },
                { title: 'Reparar lataria', description: 'Disponivel apenas em oficinas.', icon: <Icon name="settings" />, progress: 35, colorScheme: 'yellow', disabled: true },
                { title: 'Transferir propriedade', description: 'Abre submenu de jogadores proximos.', icon: <Icon name="players" />, arrow: true, colorScheme: 'purple' }
              ]}
            />
            <div style={{ display: 'grid', gap: 14, padding: 16, border: '1px solid var(--space-border-color)', borderRadius: 8, background: 'var(--space-bg-darker)' }}>
              <SectionHeader title="Customizacao" description="Transparencia, blur e cor em tempo real." />
              <Slider label="Transparencia" min={35} max={100} value={Math.round(contextOpacity * 100)} onChange={(e) => setContextOpacity((parseInt(e.target.value) || 88) / 100)} />
              <Slider label="Blur" min={0} max={32} value={contextBlur} onChange={(e) => setContextBlur(parseInt(e.target.value) || 0)} />
              <ColorSwatch label="Accent" value={contextAccent} onChange={setContextAccent} />
              <RegisterContext
                title="Compacto"
                description="Mesmo componente em densidade menor."
                density="compact"
                accent={contextAccent}
                opacity={0.72}
                blur={contextBlur}
                width="100%"
                showClose={false}
                options={[{ title: 'Inventario', icon: <Icon name="packages" />, keybind: 'I' }, { title: 'Documentos', icon: <Icon name="documentation" />, checked: true }]}
              />
            </div>
          </div>
        </Story>
      </Page>
    );
    if (activeDoc === 'floating-context') return (
      <Page title="ContextMenu" description="Menu flutuante compacto inspirado no print, separado do RegisterContext e com subitens dentro.">
        <Story title="Lista flutuante com submenus" minHeight={560} snippets={[{ label: 'Default', code: '<FloatingContextMenu title="Stage 1" items={items} opacity={0.86} blur={10} />' }, { label: 'Children', code: '{ label:"Radio Tower", children:[{ label:"Repair panel" }] }' }, { label: 'Style', code: '<FloatingContextMenu width={310} accent="#FF7A1A" density="compact" />' }]}>
          <div style={{ display: 'grid', gridTemplateColumns: 'minmax(260px, 330px) minmax(220px, 300px)', gap: 18, alignItems: 'start', width: '100%' }}>
            <FloatingContextMenu
              title="Stage 1"
              headerMeta="27/06/2026 | 19:42"
              subtitle="Operational tasks"
              opacity={floatingOpacity}
              blur={floatingBlur}
              accent={contextAccent}
              items={[
                { label: 'Mythic Touch Reward', description: 'Vehicle Owners', meta: '2 min', tone: 'success', icon: <Icon name="check" />, count: 3, children: [
                  { label: 'Claim reward', description: 'Add item to player inventory', tone: 'success', icon: <Icon name="packages" /> },
                  { label: 'Open history', description: 'Show previous claims', tone: 'info', icon: <Icon name="logs" /> }
                ] },
                { label: 'Online Street Performance', description: 'Stackable mission', meta: '4 min', metaTone: 'danger', tone: 'danger', icon: <Icon name="warning" />, count: 1 },
                { label: 'Ambitious Profiler Logic Compensation', description: 'Environment check', meta: '8 min', metaTone: 'danger', tone: 'danger', icon: <Icon name="warning" />, count: 2, children: [
                  { label: 'Inspect script', description: 'Open resource trace', tone: 'warning', icon: <Icon name="terminal" /> },
                  { label: 'Restart task', description: 'Retry this operation', tone: 'orange', icon: <Icon name="updates" /> }
                ] },
                { label: 'Borderless AimShield Protocol', description: 'Security policy', meta: '9 min', metaTone: 'danger', tone: 'danger', icon: <Icon name="shield" /> },
                { label: 'Brawler Medic Mist Penalize', description: 'Cooldown control', meta: '1 min', tone: 'danger', icon: <Icon name="heart" />, disabled: true },
                { label: 'Performance Oil Sales Utilities', description: 'Economy event', meta: '3 min', tone: 'danger', icon: <Icon name="money" /> },
                { label: 'Performance OnKeypage ResetLock', description: 'Command packet', meta: '6 min', tone: 'danger', icon: <Icon name="database" /> }
              ]}
            />
            <div style={{ display: 'grid', gap: 14, padding: 16, border: '1px solid var(--space-border-color)', borderRadius: 8, background: 'var(--space-bg-darker)' }}>
              <SectionHeader title="Edicao rapida" description="Esse e o menu pequeno; o RegisterContext continua separado." />
              <Slider label="Transparencia" min={35} max={100} value={Math.round(floatingOpacity * 100)} onChange={(e) => setFloatingOpacity((parseInt(e.target.value) || 86) / 100)} />
              <Slider label="Blur" min={0} max={30} value={floatingBlur} onChange={(e) => setFloatingBlur(parseInt(e.target.value) || 0)} />
              <ColorSwatch label="Accent" value={contextAccent} onChange={setContextAccent} />
              <FloatingContextMenu
                title="Compact"
                subtitle="Nested actions"
                width="100%"
                opacity={0.72}
                blur={floatingBlur}
                accent={contextAccent}
                items={[
                  { label: 'Open garage', tone: 'success', icon: <Icon name="vehicle" />, keybind: 'E' },
                  { label: 'More actions', tone: 'orange', icon: <Icon name="plus" />, defaultOpen: true, children: [
                    { label: 'Track vehicle', tone: 'info', icon: <Icon name="map" /> },
                    { label: 'Lock vehicle', tone: 'warning', icon: <Icon name="shield" /> }
                  ] }
                ]}
              />
            </div>
          </div>
        </Story>
      </Page>
    );
    if (activeDoc === 'input-dialog') return (
      <Page title="InputDialog" description="Dialog de formulario no estilo ox_lib inputDialog, com campos configuraveis e visual Forgebox.">
        <Story title="Formulario configuravel" minHeight={420} snippets={[{ label: 'Basic', code: '<InputDialog open={open} title="Criar personagem" fields={fields} onSubmit={setData} />' }, { label: 'Fields', code: '[{ name:"name", label:"Nome", required:true }, { name:"job", type:"select", options:[...] }]' }, { label: 'Theme', code: '<InputDialog accent="#FF7A1A" opacity={0.96} blur={10} columns={2} />' }]}>
          <Button onClick={() => setInputDialogOpen(true)}>Abrir InputDialog</Button>
          {inputDialogResult && (
            <div style={{ minWidth: 280, padding: 14, border: '1px solid var(--space-border-color)', borderRadius: 8, background: 'var(--space-bg-darker)', color: 'var(--space-text-grey)', fontSize: 12 }}>
              <strong style={{ display: 'block', color: 'var(--space-text-white)', marginBottom: 8 }}>Ultimo submit</strong>
              <pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)' }}>{JSON.stringify(inputDialogResult, null, 2)}</pre>
            </div>
          )}
          <InputDialog
            open={inputDialogOpen}
            title="Criar ficha do personagem"
            description="Preencha os dados principais antes de salvar no painel."
            columns={2}
            accent={contextAccent}
            opacity={0.96}
            blur={8}
            submitLabel="Salvar ficha"
            onCancel={() => setInputDialogOpen(false)}
            onSubmit={(values) => { setInputDialogResult(values); setInputDialogOpen(false); }}
            fields={[
              { name: 'firstName', label: 'Nome', placeholder: 'Spacer', required: true },
              { name: 'lastName', label: 'Sobrenome', placeholder: 'Dev', required: true },
              { name: 'age', label: 'Idade', type: 'number', min: 18, max: 90, defaultValue: 25, required: true },
              { name: 'job', label: 'Cargo', type: 'select', defaultValue: 'mechanic', options: [{ value: 'police', label: 'Policia' }, { value: 'ems', label: 'EMS' }, { value: 'mechanic', label: 'Mecanico' }, { value: 'civilian', label: 'Civil' }] },
              { name: 'reputation', label: 'Reputacao', type: 'range', min: 0, max: 100, defaultValue: 64, fullWidth: true },
              { name: 'accentColor', label: 'Cor do perfil', type: 'color', defaultValue: contextAccent },
              { name: 'active', label: 'Status', type: 'checkbox', checkboxLabel: 'Ativar personagem apos criar', defaultValue: true },
              { name: 'notes', label: 'Observacoes', type: 'textarea', placeholder: 'Notas internas...', fullWidth: true, rows: 3, maxLength: 220 }
            ]}
          />
        </Story>
      </Page>
    );
    if (activeDoc === 'search') return (
      <Page title="Search" description="Busca compacta, expansivel e command input para menus.">
        <Story title="Search inputs" snippets={[{ label: 'SearchInput', code: '<SearchInput value={search} onChange={setSearch} />' }, { label: 'Compact', code: '<CompactSearch placeholder="Buscar" />' }, { label: 'Expandable', code: '<ExpandableSearch value={value} onChange={setValue} />' }]}>
          <SearchInput value={searchVal} onChange={(e) => setSearchVal(e.target.value)} placeholder="Buscar jogador" />
          <CompactSearch placeholder="Compacto" />
          <ExpandableSearch value={expandSearch} onChange={(e) => setExpandSearch(e.target.value)} placeholder="Expandir busca" />
        </Story>
        <Story title="CommandInput" minHeight={260} snippets={[{ label: 'Command', code: '<CommandInput commands={commands} onSelect={fn} />' }, { label: 'Actions', code: 'commands=[{label:"Restart", value:"restart"}]' }, { label: 'Keyboard', code: '<CommandInput placeholder="Digite /" />' }]}>
          <CommandInput commands={[{ label: 'Abrir dashboard', value: 'dashboard' }, { label: 'Reiniciar modulo', value: 'restart' }, { label: 'Buscar jogador', value: 'player' }]} placeholder="Digite um comando" />
        </Story>
      </Page>
    );

    if (activeDoc === 'pickers') return (
      <Page title="Pickers" description="Seletores de cor, blip, marcador, data e horario.">
        <Story title="ColorPicker" snippets={[{ label: 'Color', code: '<ColorPicker value={color} onChange={setColor} />' }, { label: 'Swatch', code: '<Swatch color={color} />' }, { label: 'Palette', code: '<ColorPicker presetColors={colors} />' }]}>
          <ColorPicker value={colorVal} onChange={setColorVal} /><Swatch color={colorVal} /><span style={{ color: 'var(--space-text-grey)' }}>{colorVal}</span>
        </Story>
        <Story title="Blip e Marker" minHeight={260} snippets={[{ label: 'Blip', code: '<BlipPicker value={blip} onChange={setBlip} />' }, { label: 'Marker', code: '<MarkerPicker value={marker} onChange={setMarker} />' }, { label: 'Inline', code: '<MarkerPicker compact />' }]}>
          <BlipPicker value={blipVal} onChange={setBlipVal} />
          <MarkerPicker value={markerVal} onChange={setMarkerVal} />
        </Story>
        <Story title="Date e Time" snippets={[{ label: 'Date', code: '<DatePicker value={date} onChange={setDate} />' }, { label: 'Time', code: '<TimePicker value={time} onChange={setTime} />' }, { label: 'Calendar', code: '<Calendar value={date} onChange={setDate} />' }]}>
          <DatePicker value={dateVal} onChange={setDateVal} />
          <TimePicker value={timeVal} onChange={setTimeVal} />
          <Calendar value={new Date(dateVal)} onChange={(d) => setDateVal(d.toISOString().slice(0, 10))} />
        </Story>
      </Page>
    );

    if (activeDoc === 'overlays') return (
      <Page title="Overlays" description="Dialog, drawer, modal e popover com exemplos isolados.">
        <Story title="Dialog e Modal Clássico" snippets={[{ label: 'Dialog', code: '<Dialog isOpen={open} message="Confirmar?" />' }, { label: 'Modal', code: '<Modal isOpen={open}>...</Modal>' }, { label: 'Vital Multi', code: '<VitalAdjustModal isOpen={open} initialValues={vitals} onApply={setVitals} />' }]}>
          <Button onClick={() => setDialogOpen(true)}>Abrir Dialog</Button>
          <Button variant="secondary" onClick={() => setModalOpen(true)}>Abrir Modal</Button>
          <Button variant="outline" onClick={() => setVitalModalOpen(true)}>Ajustar Todos os Vitais</Button>
          <Dialog isOpen={dialogOpen} title="Confirmar ação" message="Deseja aplicar esta configuração?" onCancel={() => setDialogOpen(false)} onConfirm={() => setDialogOpen(false)} />
          <Modal isOpen={modalOpen} onClose={() => setModalOpen(false)} title="Modal Forgebox"><p style={{ color: 'var(--space-text-grey)' }}>Conteúdo livre em modal.</p></Modal>
          <VitalAdjustModal isOpen={vitalModalOpen} onClose={() => setVitalModalOpen(false)} initialValues={vitals} onApply={(newVitals) => setVitals(newVitals)} />
        </Story>
        
        <Story title="ActionModal (Novidade/Estilo MRI)" description="Modais interativos baseados em gravidade/ações com variações e suporte a ícones." snippets={[{ label: 'Default', code: '<ActionModal title="Salvar Alterações" variant="default" onClose={close}>...</ActionModal>' }, { label: 'Destructive', code: '<ActionModal title="Excluir Jogador" variant="destructive">...</ActionModal>' }]}>
          <Button onClick={() => { setActionModalVariant('default'); setActionModalTitle('Confirmar Atualização'); setActionModalOpen(true); }}>Action Padrão</Button>
          <Button variant="secondary" style={{ border: '1px solid var(--color-warning)', color: 'var(--color-warning)' }} onClick={() => { setActionModalVariant('warning'); setActionModalTitle('Aviso Importante'); setActionModalOpen(true); }}>Action Aviso</Button>
          <Button variant="secondary" style={{ border: '1px solid var(--color-error)', color: 'var(--color-error)' }} onClick={() => { setActionModalVariant('destructive'); setActionModalTitle('Exclusão Permanente'); setActionModalOpen(true); }}>Action Perigo</Button>
          
          <ActionModal
            isOpen={actionModalOpen}
            onClose={() => setActionModalOpen(false)}
            title={actionModalTitle}
            variant={actionModalVariant}
            icon={actionModalVariant === 'destructive' ? 'dead' : (actionModalVariant === 'warning' ? 'settings' : 'dashboard')}
            confirmLabel="Confirmar Ação"
            cancelLabel="Cancelar"
            onConfirm={() => setActionModalOpen(false)}
          >
            <p style={{ margin: 0 }}>Esta ação aplica-se diretamente ao banco de dados operacional. Deseja realmente prosseguir?</p>
          </ActionModal>
        </Story>

        <Story title="Drawer e Popover" snippets={[{ label: 'Drawer', code: '<Drawer isOpen={open} position="right" />' }, { label: 'Popover', code: '<Popover title="Info" content="Texto"><Button /></Popover>' }, { label: 'Positions', code: '<Popover position="top" />' }]}>
          <Button onClick={() => setDrawerOpen(true)}>Abrir Drawer</Button>
          <Popover title="Popover" content="Conteudo rapido" position="bottom"><Button variant="secondary">Popover bottom</Button></Popover>
          <Popover title="Atalho" content="Pode abrir para cima tambem" position="top"><Button variant="outline">Popover top</Button></Popover>
          <Drawer isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} title="Configuracoes"><p style={{ color: 'var(--space-text-grey)' }}>Painel lateral com overflow controlado.</p></Drawer>
        </Story>
      </Page>
    );

    if (activeDoc === 'content') return (
      <Page title="Content" description="Blocos de conteudo e navegacao local.">
        <Story title="Card e SectionHeader" snippets={[{ label: 'Header', code: '<SectionHeader title="Dashboard" description="Resumo" />' }, { label: 'Card', code: '<Card title="Status">...</Card>' }, { label: 'Accordion', code: '<Accordion items={items} />' }]}>
          <div style={{ width: 'min(100%, 620px)', display: 'grid', gap: 16 }}>
            <SectionHeader title="Resumo operacional" description="Status dos recursos ativos." />
            <Card title="Card compacto" description="Conteudo com altura natural, sem espaco vazio forcado."><ProgressBar value={70} /></Card>
          </div>
        </Story>
        <Story title="Tabs e Accordion" minHeight={280} snippets={[{ label: 'Tabs', code: '<Tabs tabs={tabs} />' }, { label: 'Accordion', code: '<Accordion items={items} />' }, { label: 'ScrollArea', code: '<ScrollArea height={180}>...</ScrollArea>' }]}>
          <Tabs tabs={[{ id: 'a', label: 'Status', content: <p style={{ color: 'var(--space-text-grey)' }}>Status dos modulos.</p> }, { id: 'b', label: 'Logs', content: <p style={{ color: 'var(--space-text-grey)' }}>Eventos recentes.</p> }, { id: 'c', label: 'Equipe', content: <p style={{ color: 'var(--space-text-grey)' }}>Usuarios conectados.</p> }]} />
          <Accordion items={[{ title: 'Permissoes', content: 'Controle de acesso por grupo.' }, { title: 'Recursos', content: 'Lista de dependencias carregadas.' }, { title: 'Auditoria', content: 'Historico de alteracoes.' }]} />
        </Story>
      </Page>
    );
    if (activeDoc === 'vitals') return (
      <Page title="PlayerVitals" description="HUD de vitais em formatos compactos, mini, completo e estado crítico/dead. Clique nos ícones para ajustar o valor individualmente via VitalAdjustModal.">
        <Story title="Sinais Vitais Interativos (Circular)" description="Demonstração interativa. Clique em qualquer ícone de vital para abrir o modal de ajuste individual." snippets={[{ label: 'Compact', code: '<PlayerVitals size="compact" vitals={mriStructuredVitals} onIconClick={(vitalId) => openAdjustModal(vitalId)} />' }, { label: 'Mini', code: '<PlayerVitals size="mini" vitals={mriStructuredVitals} />' }]}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '20px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--space-text-grey)' }}>Tamanho Compacto (Padrão):</span>
              <PlayerVitals
                size="compact"
                vitals={{
                  health: vitals.health,
                  armor: vitals.armor,
                  metadata: { hunger: vitals.hunger, thirst: vitals.thirst, stress: vitals.stress, isdead: vitals.health <= 0 }
                }}
                onIconClick={(id) => {
                  setSelectedVitalKey(id);
                  setSingleVitalModalOpen(true);
                }}
              />
            </div>
            
            <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
              <span style={{ fontSize: '13px', color: 'var(--space-text-grey)' }}>Tamanho Mini (Minimalista):</span>
              <PlayerVitals
                size="mini"
                vitals={{
                  health: vitals.health,
                  armor: vitals.armor,
                  metadata: { hunger: vitals.hunger, thirst: vitals.thirst, stress: vitals.stress, isdead: vitals.health <= 0 }
                }}
                onIconClick={(id) => {
                  setSelectedVitalKey(id);
                  setSingleVitalModalOpen(true);
                }}
              />
            </div>
          </div>
        </Story>

        <Story title="Sinais Vitais em Grade Linear (Full)" description="Visual alternativo estilo barra de carregamento com glows gradientes de alto padrão." snippets={[{ label: 'Full', code: '<PlayerVitals size="full" vitals={vitalsData} />' }]}>
          <div style={{ width: '100%', maxWidth: '460px' }}>
            <PlayerVitals
              size="full"
              vitals={{
                health: vitals.health,
                armor: vitals.armor,
                metadata: { hunger: vitals.hunger, thirst: vitals.thirst, stress: vitals.stress, isdead: vitals.health <= 0 }
              }}
              onIconClick={(id) => {
                setSelectedVitalKey(id);
                setSingleVitalModalOpen(true);
              }}
            />
          </div>
        </Story>

        <Story title="Estados Críticos e Simulação de Morte" description="Demonstração visual do comportamento neon em estados alterados." snippets={[{ label: 'Warning', code: '<PlayerVitals health={15} stress={95} />' }, { label: 'Dead', code: '<PlayerVitals dead />' }]}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--color-warning)' }}>Aviso Crítico (&lt; 20%):</span>
              <PlayerVitals size="compact" health={15} armor={0} hunger={12} thirst={18} stress={90} breath={30} />
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--color-error)' }}>Estado de Morte (Caveira):</span>
              <PlayerVitals size="compact" dead health={0} armor={0} hunger={0} thirst={0} stress={100} breath={0} />
            </div>
          </div>
        </Story>

        {/* Modal de ajuste de vital individual */}
        <VitalAdjustModal
          isOpen={singleVitalModalOpen}
          onClose={() => setSingleVitalModalOpen(false)}
          vital={selectedVitalKey}
          currentValue={vitals[selectedVitalKey] || 0}
          playerName="Forgie"
          title={`Ajustar ${selectedVitalKey.toUpperCase()}`}
          description={`Defina um novo valor para este vital do jogador Forgie.`}
          onSubmit={(newValue) => {
            setVitals(prev => ({
              ...prev,
              [selectedVitalKey]: newValue
            }));
            setSingleVitalModalOpen(false);
          }}
        />
      </Page>
    );


    if (activeDoc === 'gauges') return (
      <Page title="Gauges (Medidores)" description="Instrumentos analógicos e digitais de HUD para velocidade, rotação (RPM), náutica, aviação e off-road.">
        <Story title="AnalogGauge (Velocímetro/Tacômetro)" description="Mostrador analógico completo com suporte a agulha física, preenchimento digital de arco ou exibição LCD de hodômetro." snippets={[{ label: 'Needle Style', code: '<AnalogGauge value={120} needleStyle="needle" odometer="004512" />' }, { label: 'Digital Arc Style', code: '<AnalogGauge value={75} needleStyle="arc" color="#10B981" />' }, { label: 'Digital LCD', code: '<AnalogGauge value={80} needleStyle="digital" />' }]}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', justifyContent: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>Estilo Clássico (Agulha + Hodômetro):</span>
              <AnalogGauge value={sliderVal * 2.4} maxValue={240} needleStyle="needle" odometer="012480" unit="KM/H" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>Estilo Arco Progressivo (RPM):</span>
              <AnalogGauge value={sliderVal} maxValue={100} needleStyle="arc" color="#10B981" unit="RPM" />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>Estilo Digital Puro:</span>
              <AnalogGauge value={sliderVal} maxValue={100} needleStyle="digital" color="#8B5CF6" unit="%" label="Carga" />
            </div>
          </div>
          <div style={{ width: '100%', maxWidth: '280px', marginTop: '12px' }}>
            <Slider value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value) || 0)} min={0} max={100} label="Simular Entrada de Dados" />
          </div>
        </Story>
        
        <Story title="Aeronáutica e Náutica (Horizonte Artificial e Clinômetro)" description="Instrumentação específica para atitude de voo e indicador de escora (tubo curvo de bolha) para embarcações marítimas." snippets={[{ label: 'Horizon', code: '<ArtificialHorizon roll={30} pitch={15} />' }, { label: 'Clinometer', code: '<Clinometer roll={15} />' }]}>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '30px', justifyContent: 'center', width: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>Horizonte Artificial:</span>
              <ArtificialHorizon roll={sliderVal - 50} pitch={(sliderVal - 50) * 0.8} />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '11px', color: 'var(--space-text-grey)' }}>Clinômetro (Bolha de Escora PORT/STBD):</span>
              <Clinometer roll={sliderVal - 50} />
            </div>
          </div>
        </Story>
      </Page>
    );

    if (activeDoc === 'shapes') return (
      <Page title="Shapes (Formas de HUD)" description="Geometrias vetorizadas neon compatíveis com o MRI HUD, suportando progresso dinâmico de borda (progressValue) e renderização de ícones.">
        <div style={{ width: '100%', maxWidth: '280px', margin: '0 auto 20px', background: 'var(--space-bg-darkest)', border: '1px solid var(--space-border-color)', borderRadius: '8px', padding: '12px 16px' }}>
          <Slider value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value) || 0)} min={0} max={100} label="Regular Progresso das Shapes" />
        </div>
        
        <Story title="Formas de Anel Progressivo (Rings)" snippets={[{ label: 'Circle', code: '<Shapes.CircleRing progressValue={75} />' }, { label: 'Hexagon', code: '<Shapes.HexagonRing progressValue={75} />' }]}>
          <div style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.CircleRing size={56} progressValue={sliderVal} progressColor="#EF4444" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Círculo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.HexagonRing size={56} progressValue={sliderVal} progressColor="#FF7A1A" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Hexágono</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.DiamondRing size={56} progressValue={sliderVal} progressColor="#8B5CF6" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Losango</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.TriangleRing size={56} progressValue={sliderVal} progressColor="#10B981" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Triângulo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.SquareRing size={56} progressValue={sliderVal} progressColor="#3B82F6" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Quadrado</span>
            </div>
          </div>
        </Story>
        
        <Story title="Outros Estilos de Medição" snippets={[{ label: 'Split Circle', code: '<Shapes.SplitCircle progressValue={60} />' }, { label: 'Pill Ring', code: '<Shapes.PillRing progressValue={80} />' }]}>
          <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.SplitCircle size={56} progressValue={sliderVal} progressColor="#06B6D4" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Split Circle</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.PartialCircleRing size={56} progressValue={sliderVal} progressColor="#EAB308" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Arqueado</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.PillRing width={80} height={32} progressValue={sliderVal} progressColor="#FF5757" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Pílula</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.BadgeShape size={68} progressValue={sliderVal} progressColor="#FF3B82" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Distintivo</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px' }}>
              <Shapes.HorizontalBar width={140} progressValue={sliderVal} progressColor="#22C55E" />
              <span style={{ fontSize: '10px', color: 'var(--space-text-muted)' }}>Horizontal</span>
            </div>
          </div>
        </Story>
      </Page>
    );

    if (activeDoc === 'nitro') return (
      <Page title="NitroBar" description="Barra de NOS para HUD veicular, com estado ativo, critico e particulas de chama.">
        <Story title="Estados do Nitro" snippets={[{ label: 'Active', code: '<NitroBar value={72} active />' }, { label: 'Critical', code: '<NitroBar value={18} />' }, { label: 'Large', code: '<NitroBar value={90} size="lg" color="#45E8FF" />' }]}>
          <div style={{ width: 'min(100%, 320px)', display: 'grid', gap: 18 }}>
            <NitroBar value={sliderVal} active={sliderVal > 35} />
            <NitroBar value={18} label="NOS LOW" size="sm" />
            <NitroBar value={90} active size="lg" color="#45E8FF" label="BOOST" />
            <Slider value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value) || 0)} min={0} max={100} label="Simular NOS" />
          </div>
        </Story>
      </Page>
    );

    if (activeDoc === 'drift') return (
      <Page title="DriftPoints" description="Contador animado de pontos, multiplicador e combo para corridas e eventos de drift.">
        <Story title="Pontuacao e combo" minHeight={300} snippets={[{ label: 'Active', code: '<DriftPoints points={18420} multiplier={3} combo={4} active />' }, { label: 'Idle', code: '<DriftPoints points={8200} />' }]}>
          <DriftPoints points={18420 + sliderVal * 30} multiplier={3} combo={4} active />
          <DriftPoints points={8200} multiplier={1} combo={0} />
          <div style={{ width: 280 }}><Slider value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value) || 0)} min={0} max={100} label="Simular pontos" /></div>
        </Story>
      </Page>
    );

    if (activeDoc === 'gear') return (
      <Page title="GearDisplay" description="Indicador circular de marcha com zonas de RPM, neutro, reverso e redline.">
        <Story title="Marchas e RPM" minHeight={320} snippets={[{ label: 'Drive', code: '<GearDisplay gear="4" rpm={72} />' }, { label: 'Reverse', code: '<GearDisplay gear="R" rpm={20} />' }, { label: 'XL', code: '<GearDisplay gear="5" rpm={92} size="xl" />' }]}>
          <GearDisplay gear="N" rpm={0} size="sm" />
          <GearDisplay gear={sliderVal > 80 ? '5' : sliderVal > 50 ? '4' : '3'} rpm={sliderVal} />
          <GearDisplay gear="R" rpm={22} size="lg" />
          <div style={{ width: 280 }}><Slider value={sliderVal} onChange={(e) => setSliderVal(parseInt(e.target.value) || 0)} min={0} max={100} label="Simular RPM" /></div>
        </Story>
      </Page>
    );
    if (activeDoc === 'game') return (
      <Page title="Game UI" description="Componentes interativos para cenas FiveM/NUI.">
        <Story title="KeyboardVisualizer" snippets={[{ label: 'WASD', code: '<KeyboardVisualizer activeKeys={["W", "D"]} layout="wasd" />' }, { label: 'Utility', code: '<KeyboardVisualizer activeKeys={["E", "ESC"]} layout="utility" />' }, { label: 'Empty', code: '<KeyboardVisualizer activeKeys={[]} />' }]}>
          <KeyboardVisualizer activeKeys={['W', 'D']} layout="wasd" />
          <KeyboardVisualizer activeKeys={['E', 'ESC']} layout="utility" />
        </Story>
        <Story title="SkillCheck e RadialMenu" minHeight={360} snippets={[{ label: 'Skill', code: '<SkillCheck onSuccess={fn} onFailure={fn} />' }, { label: 'Radial', code: '<RadialMenu isOpen={open} options={options} />' }, { label: 'Toggle', code: '<Button onClick={() => setOpen(!open)}>Radial</Button>' }]}>
          <SkillCheck onSuccess={() => {}} onFailure={() => {}} />
          <div style={{ position: 'relative', width: 320, height: 300, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Button onClick={() => setRadialOpen(!radialOpen)}>{radialOpen ? 'Fechar Radial' : 'Abrir Radial'}</Button>
            <RadialMenu isOpen={radialOpen} centerLabel="Acoes" options={[{ id: '1', label: 'Consertar', icon: <Icon name="settings" /> }, { id: '2', label: 'Limpar', icon: <Icon name="store" /> }, { id: '3', label: 'Abrir', icon: <Icon name="packages" /> }, { id: '4', label: 'Fechar', icon: <Icon name="bell" /> }]} onSelect={() => setRadialOpen(false)} onClose={() => setRadialOpen(false)} />
          </div>
        </Story>
        <Story title="Nitro, Drift e Marcha" minHeight={320} snippets={[{ label: 'Nitro', code: '<NitroBar value={72} active />' }, { label: 'Drift', code: '<DriftPoints points={18420} multiplier={3} active />' }, { label: 'Gear', code: '<GearDisplay gear="4" rpm={82} />' }]}>
          <div style={{ width: 280 }}><NitroBar value={sliderVal} active={sliderVal > 35} /></div>
          <DriftPoints points={18420 + sliderVal * 30} multiplier={3} combo={4} active />
          <GearDisplay gear={sliderVal > 80 ? '5' : sliderVal > 50 ? '4' : '3'} rpm={sliderVal} />
        </Story>
      </Page>
    );

    if (activeDoc === 'topbar') return (
      <Page title="Topbar" description="Barra superior com marca, acoes e usuario.">
        <Story title="Default" minHeight={260} snippets={[{ label: 'Default', code: '<Topbar title="Forgebox Panel" user={{ name:"Spacer Dev", status:"online" }} />' }, { label: 'Actions', code: '<Topbar actions={<Button>Salvar</Button>} />' }, { label: 'No user', code: '<Topbar user={null} />' }]}>
          <div style={{ width: '100%', border: '1px solid var(--space-border-color)', borderRadius: 8, overflow: 'hidden' }}><Topbar title="Forgebox Panel" user={{ name: 'Spacer Dev', status: 'online' }} actions={<><Button variant="secondary" size="sm">Logs</Button><Button size="sm">Modulo</Button></>} /></div>
        </Story>
      </Page>
    );

    if (activeDoc === 'layout') return (
      <Page title="Sidebar/Layout" description="Navegacao lateral e layout de painel sem cortes no preview.">
        <Story title="Sidebar" minHeight={380} snippets={[{ label: 'Sidebar', code: '<Sidebar items={items} activeId={active} onChange={setActive} />' }, { label: 'Footer', code: '<Sidebar footer={<span>v1.0</span>} />' }, { label: 'Active', code: '<Sidebar activeId="players" />' }]}>
          <div style={{ width: '100%', height: 320, display: 'flex', border: '1px solid var(--space-border-color)', borderRadius: 8, overflow: 'hidden' }}>
            <Sidebar items={sidebarItems} activeId={sidebarActive} onChange={setSidebarActive} footer={<span style={{ color: 'var(--space-text-muted)', fontSize: 11 }}>Forgebox UI Kit</span>} />
            <main style={{ flex: 1, padding: 24, color: 'white', background: 'var(--space-bg-darkest)' }}>Secao ativa: {sidebarActive}</main>
          </div>
        </Story>
        <Story title="PageHeader" snippets={[{ label: 'Header', code: '<PageHeader title="Dashboard" subtitle="Resumo" />' }, { label: 'Actions', code: '<PageHeader actions={<Button>Novo</Button>} />' }, { label: 'Tabs', code: '<PageHeader tabs={tabs} />' }]}>
          <div style={{ width: '100%' }}><PageHeader title="Dashboard" subtitle="Painel administrativo" actions={<Button size="sm">Novo modulo</Button>} /></div>
        </Story>
      </Page>
    );
    if (activeDoc === 'navigation') return (
      <Page title="Navigation e Layout" description="Breadcrumb, Stepper, TreeView, InfiniteScroll e SplitPane para telas densas de painel.">
        <Story title="Breadcrumb e Stepper" snippets={[{ label: 'Breadcrumb', code: '<Breadcrumb items={items} />' }, { label: 'Stepper', code: '<Stepper steps={steps} activeStep={1} />' }]}>
          <div style={{ width: '100%', display: 'grid', gap: 24 }}>
            <Breadcrumb items={[{ label: 'Dashboard' }, { label: 'Recursos' }, { label: 'forgebox_hud' }]} separator=">" />
            <Stepper activeStep={1} steps={[{ label: 'Selecionar' }, { label: 'Configurar' }, { label: 'Publicar' }]} />
          </div>
        </Story>
        <Story title="TreeView e InfiniteScroll" minHeight={360} snippets={[{ label: 'Tree', code: '<TreeView items={items} />' }, { label: 'Infinite', code: '<InfiniteScroll items={events} renderItem={renderEvent} />' }]}>
          <TreeView items={treeItems} />
          <InfiniteScroll items={scrollItems} batchSize={7} renderItem={(item) => (
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 12, borderRadius: 6, border: '1px solid var(--space-border-color)', background: 'var(--space-bg-card)' }}>
              <span style={{ color: 'var(--space-text-white)', fontSize: 13 }}>{item.label}</span>
              <StatusBadge status={item.status} />
            </div>
          )} />
        </Story>
        <Story title="SplitPane" minHeight={360} snippets={[{ label: 'Split', code: '<SplitPane left={<Tree />} right={<Editor />} />' }]}>
          <SplitPane
            left={<div style={{ padding: 16 }}><TreeView items={treeItems} compact /></div>}
            right={<div style={{ padding: 18, color: 'var(--space-text-grey)', fontSize: 13, lineHeight: 1.7 }}><h3 style={{ margin: '0 0 8px', color: 'var(--space-text-white)' }}>resource.cfg</h3><code style={{ display: 'block', whiteSpace: 'pre-wrap', fontFamily: 'var(--font-mono)' }}>ensure forgebox_hud{`\n`}ensure forgebox_garage{`\n`}ensure forgebox_inventory</code></div>}
          />
        </Story>
      </Page>
    );

    if (activeDoc === 'data-viz') return (
      <Page title="Data e Visualizacao" description="Cards, timeline, heatmap e graficos SVG leves para dashboards do Forgebox.">
        <Story title="StatCard e Sparkline" snippets={[{ label: 'Stat', code: '<StatCard label="Online" value="94" />' }, { label: 'Sparkline', code: '<Sparkline data={[12,18,16,24]} />' }]}>
          <StatCard label="Jogadores" value="94/128" trend="12%" description="ultima hora" icon={<Icon name="players" />} tone="green" />
          <StatCard label="Recursos" value="46" trend="2" trendDirection="flat" description="sem erros" icon={<Icon name="packages" />} tone="blue" />
          <div style={{ padding: 16, border: '1px solid var(--space-border-color)', borderRadius: 8, background: 'var(--space-bg-darker)' }}><Sparkline data={[12, 18, 15, 28, 24, 38, 34, 48, 44]} showDots /></div>
        </Story>
        <Story title="Timeline e HeatMap" minHeight={360} snippets={[{ label: 'Timeline', code: '<Timeline items={events} />' }, { label: 'HeatMap', code: '<HeatMap data={activity} />' }]}>
          <Timeline items={timelineItems} />
          <HeatMap data={heatData} />
        </Story>
        <Story title="PieChart e BarChart" minHeight={340} snippets={[{ label: 'Pie', code: '<PieChart data={data} donut />' }, { label: 'Bar', code: '<BarChart data={data} />' }]}>
          <PieChart data={chartData} />
          <BarChart data={chartData} height={220} />
        </Story>
      </Page>
    );
    if (activeDoc === 'calendar') return (
      <Page title="Calendar" description="Calendario com navegacao por mes, ano e decada.">
        <Story title="Dias" minHeight={360} snippets={[{ label: 'Default', code: '<Calendar value={date} onChange={setDate} />' }, { label: 'Range', code: '<Calendar minYear={1990} maxYear={2040} />' }, { label: 'Selected', code: '<Calendar value={new Date("2026-06-27")} />' }]}>
          <Calendar value={new Date(dateVal)} onChange={(d) => setDateVal(d.toISOString().slice(0, 10))} />
          <div style={{ color: 'var(--space-orange-primary)', fontWeight: 800 }}>Selecionada: {dateVal}</div>
        </Story>
        <Story title="Mes, ano e decada" description="Clique no titulo para alternar mes/ano. Use os botoes duplos para pular 10 anos." snippets={[{ label: 'Month view', code: 'Clique no titulo para escolher o mes.' }, { label: 'Year view', code: 'Clique no ano para abrir a grade da decada.' }, { label: 'Decade', code: 'Use os botoes duplos para navegar por decadas.' }]}>
          <Calendar value={new Date(dateVal)} onChange={(d) => setDateVal(d.toISOString().slice(0, 10))} minYear={1980} maxYear={2050} />
        </Story>
      </Page>
    );

    if (activeDoc === 'table') return (
      <Page title="Table" description="Tabela paginada com componentes nas celulas.">
        <Story title="Tabela padrao" minHeight={360} snippets={[{ label: 'Default', code: '<Table headers={headers} data={rows} rowsPerPage={4} />' }, { label: 'Cells', code: '{ status: <StatusBadge status="online" /> }' }, { label: 'Compact', code: '<Table rowsPerPage={3} />' }]}>
          <div style={{ width: '100%' }}><Table headers={tableHeaders} data={tableData} rowsPerPage={4} /></div>
        </Story>
      </Page>
    );

    if (activeDoc === 'frames') return (
      <Page title="Frames e Stream" description="Molduras e displays imersivos para NUI.">
        <Story title="TabletFrame" minHeight={520} snippets={[{ label: 'Tablet', code: '<TabletFrame time="10:42"><App /></TabletFrame>' }, { label: 'Close', code: '<TabletFrame onClose={handleClose} />' }, { label: 'Table', code: '<TabletFrame><Table /></TabletFrame>' }]}>
          <TabletFrame time={timeVal} onClose={() => {}}><div style={{ padding: 24, height: '100%', boxSizing: 'border-box' }}><h3 style={{ color: 'white', marginTop: 0 }}>Aplicativo GPS</h3><Table headers={tableHeaders} data={tableData} rowsPerPage={3} /></div></TabletFrame>
        </Story>
        <Story title="PlayerScreenStream" minHeight={360} snippets={[{ label: 'Online', code: '<PlayerScreenStream playerName="Spacer Dev" status="online" ping={18} />' }, { label: 'Offline', code: '<PlayerScreenStream status="offline" />' }, { label: 'Custom', code: '<PlayerScreenStream playerName="ID 42" />' }]}>
          <PlayerScreenStream playerName="Spacer Dev (ID 42)" status="online" ping={18} />
        </Story>
      </Page>
    );

    if (activeDoc === 'notifications') return (
      <Page title="Notifications" description="Central de notificacoes e demos de chamadas.">
        <Story title="NotificationCenter" minHeight={320} snippets={[{ label: 'Success', code: 'notify({ type:"success", message:"Salvo" })' }, { label: 'Warning', code: 'notify({ type:"warning", message:"Atencao" })' }, { label: 'Error', code: 'notify({ type:"error", message:"Falhou" })' }]}>
          <NotificationDemo />
        </Story>
      </Page>
    );

    return null;
  };

  const activeGroup = groups.find((group) => group.items.some(([id]) => id === activeDoc)) || groups[0];
  const activeTitle = activeGroup.items.find(([id]) => id === activeDoc)?.[1] || 'Docs';

  return (
    <div style={{ minHeight: 'calc(100vh - 70px)', background: 'var(--space-bg-dark)', color: 'var(--space-text-white)' }}>
      <div style={{ maxWidth: 1040, margin: '0 auto', padding: '0 0 8px', boxSizing: 'border-box' }}>
        <header style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 20, paddingBottom: 18, borderBottom: '1px solid var(--space-border-color)' }}>
          <div>
            <p style={{ margin: '0 0 8px', color: 'var(--space-orange-primary)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 2, fontWeight: 800 }}>Forgebox UI Kit</p>
            <h1 style={{ margin: 0, color: 'var(--space-text-white)', fontFamily: 'var(--font-heading)', fontSize: 30, lineHeight: 1.1 }}>Componentes de UI</h1>
            <p style={{ margin: '8px 0 0', color: 'var(--space-text-muted)', fontSize: 13 }}>Navegue por grupo e abra uma tela por componente.</p>
          </div>
          <Badge variant="ativo">{activeTitle}</Badge>
        </header>

        <nav style={{ marginTop: 16, background: 'var(--space-bg-darkest)', border: '1px solid var(--space-border-color)', borderRadius: 8, padding: 10 }}>
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', paddingBottom: 10, borderBottom: '1px solid var(--space-border-color)' }}>
            {groups.map((group) => {
              const active = group.title === activeGroup.title;
              return (
                <button
                  key={group.title}
                  type="button"
                  onClick={() => setActiveDoc(group.items[0][0])}
                  style={{
                    minHeight: 30,
                    padding: '6px 11px',
                    borderRadius: 6,
                    border: `1px solid ${active ? 'rgba(255,122,26,0.5)' : 'transparent'}`,
                    background: active ? 'rgba(255,122,26,0.12)' : 'transparent',
                    color: active ? 'var(--space-orange-primary)' : 'var(--space-text-muted)',
                    cursor: 'pointer',
                    fontSize: 11,
                    fontWeight: 800,
                    textTransform: 'uppercase',
                    letterSpacing: 1.1
                  }}
                >
                  {group.title}
                </button>
              );
            })}
          </div>
          <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', paddingTop: 10 }}>
            {activeGroup.items.map(([id, label]) => {
              const active = activeDoc === id;
              return (
                <button
                  key={id}
                  type="button"
                  onClick={() => setActiveDoc(id)}
                  style={{
                    minHeight: 32,
                    padding: '7px 12px',
                    borderRadius: 6,
                    border: `1px solid ${active ? 'rgba(255,122,26,0.5)' : 'var(--space-border-color)'}`,
                    background: active ? 'var(--space-orange-subtle)' : 'var(--space-bg-card)',
                    color: active ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                    cursor: 'pointer',
                    fontSize: 12,
                    fontWeight: active ? 800 : 650,
                    fontFamily: 'var(--font-body)'
                  }}
                >
                  {label}
                </button>
              );
            })}
          </div>
        </nav>
      </div>

      <main style={{ minWidth: 0, overflowX: 'hidden' }} aria-label={activeTitle}>
        {renderDoc()}
      </main>
    </div>
  );
}
