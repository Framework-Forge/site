import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

// Definindo __dirname em ES Modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const projectRoot = path.resolve(__dirname, '..');
const assetsDir = path.join(projectRoot, 'src', 'assets');

// 1. Caminho do Mascote Gerado pelo Gemini no cérebro do agente
const generatedMascotPath = 'C:\\Users\\Spacer dev\\.gemini\\antigravity-ide\\brain\\e94165d3-b5ab-468a-9799-1c3862bd5998\\boxie_mascot_1782506095220.png';
const targetMascotPath = path.join(assetsDir, 'boxie.png');

console.log('--- Spacebox PNG Asset Generator ---');

// Copiar o mascote gerado para a pasta de assets
try {
  if (fs.existsSync(generatedMascotPath)) {
    fs.copyFileSync(generatedMascotPath, targetMascotPath);
    console.log(`[SUCESSO] Mascote Boxie copiado para: ${targetMascotPath}`);
  } else {
    console.warn(`[AVISO] Mascote gerado não encontrado em: ${generatedMascotPath}`);
  }
} catch (error) {
  console.error('[ERRO] Falha ao copiar o mascote Boxie:', error);
}

// 2. Criar ferramenta HTML auto-executável para conversão/geração de logos PNG de alta resolução
// Esta ferramenta desenha os logos da Spacebox em Canvas e permite exportar em qualquer tamanho (PNG transparente).
const htmlToolPath = path.join(projectRoot, 'generate_logos_tool.html');

const htmlContent = `<!DOCTYPE html>
<html lang="pt-br">
<head>
  <meta charset="UTF-8">
  <title>Spacebox - Gerador de Logos PNG de Alta Resolução</title>
  <style>
    body {
      background-color: #0A0A0C;
      color: #FFFFFF;
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      padding: 40px;
      max-width: 900px;
      margin: 0 auto;
    }
    h1 {
      color: #FF7A1A;
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 8px;
    }
    p {
      color: #8E8E9F;
      font-size: 14px;
      margin-bottom: 30px;
    }
    .grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 30px;
    }
    .card {
      background-color: #121214;
      border: 1px solid #1F1F24;
      border-radius: 12px;
      padding: 24px;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
    .card-title {
      font-size: 18px;
      font-weight: 600;
      align-self: flex-start;
      margin: 0;
    }
    .canvas-container {
      background-color: #050507;
      border: 1px dashed #2D2D35;
      border-radius: 8px;
      padding: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 200px;
      height: 200px;
    }
    canvas {
      max-width: 100%;
      max-height: 100%;
    }
    .controls {
      display: flex;
      flex-direction: column;
      gap: 12px;
      width: 100%;
    }
    .select-size {
      background-color: #0F0F11;
      border: 1px solid #1F1F24;
      color: #white;
      padding: 10px;
      border-radius: 8px;
      outline: none;
      color: white;
    }
    button {
      background-color: #FF7A1A;
      color: white;
      border: none;
      padding: 12px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      box-shadow: 0 0 10px rgba(255, 122, 26, 0.3);
    }
    button:hover {
      background-color: #FF8C2A;
      box-shadow: 0 0 15px rgba(255, 122, 26, 0.5);
    }
  </style>
</head>
<body>
  <h1>Gerador de Logos PNG - Spacebox</h1>
  <p>Esta ferramenta utiliza o Canvas do navegador para renderizar os logotipos vetorizados oficiais da Spacebox em qualquer resolução (com fundo transparente) e exportá-los instantaneamente para PNG.</p>

  <div class="grid">
    <!-- 1. Símbolo Compacto -->
    <div class="card">
      <h3 class="card-title">Símbolo Compacto</h3>
      <div class="canvas-container">
        <canvas id="canvas-simple" width="512" height="512"></canvas>
      </div>
      <div class="controls">
        <select id="size-simple" class="select-size">
          <option value="128">128 x 128 px (Ícone/Tab)</option>
          <option value="256">256 x 256 px (Padrão)</option>
          <option value="512" selected>512 x 512 px (Alta Resolução)</option>
          <option value="1024">1024 x 1024 px (Ultra Resolução)</option>
        </select>
        <button onclick="downloadPNG('simple')">Baixar PNG</button>
      </div>
    </div>

    <!-- 2. Logo Completa (Tagline) -->
    <div class="card">
      <h3 class="card-title">Logo Completa com Tagline</h3>
      <div class="canvas-container" style="width: 100%; height: 200px;">
        <canvas id="canvas-tagline" width="1024" height="400"></canvas>
      </div>
      <div class="controls">
        <select id="size-tagline" class="select-size">
          <option value="256">512 x 200 px</option>
          <option value="512" selected>1024 x 400 px (Alta Resolução)</option>
          <option value="1024">2048 x 800 px (Ultra Resolução)</option>
        </select>
        <button onclick="downloadPNG('tagline')">Baixar PNG</button>
      </div>
    </div>
  </div>

  <script>
    // Desenhar Símbolo Compacto
    function drawSimpleLogo() {
      const canvas = document.getElementById('canvas-simple');
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      const cx = w / 2;
      const cy = h / 2;
      const size = w * 0.38;

      // Desenhar o cubo laranja neon
      ctx.shadowBlur = w * 0.05;
      ctx.shadowColor = '#FF7A1A';
      
      // Face Superior
      ctx.fillStyle = '#FF8C2A';
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx + size * 1.15, cy - size * 0.4);
      ctx.lineTo(cx, cy + size * 0.2);
      ctx.lineTo(cx - size * 1.15, cy - size * 0.4);
      ctx.closePath();
      ctx.fill();

      // Face Esquerda
      ctx.fillStyle = '#FF7A1A';
      ctx.beginPath();
      ctx.moveTo(cx - size * 1.15, cy - size * 0.4);
      ctx.lineTo(cx, cy + size * 0.2);
      ctx.lineTo(cx, cy + size * 1.2);
      ctx.lineTo(cx - size * 1.15, cy + size * 0.6);
      ctx.closePath();
      ctx.fill();

      // Face Direita
      ctx.fillStyle = '#FF9F43';
      ctx.beginPath();
      ctx.moveTo(cx, cy + size * 0.2);
      ctx.lineTo(cx + size * 1.15, cy - size * 0.4);
      ctx.lineTo(cx + size * 1.15, cy + size * 0.6);
      ctx.lineTo(cx, cy + size * 1.2);
      ctx.closePath();
      ctx.fill();

      // Linhas internas (efeito tecnológico)
      ctx.shadowBlur = 0;
      ctx.strokeStyle = 'rgba(10, 10, 12, 0.4)';
      ctx.lineWidth = w * 0.015;
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx, cy + size * 0.2);
      ctx.moveTo(cx - size * 1.15, cy - size * 0.4);
      ctx.lineTo(cx, cy + size * 0.2);
      ctx.lineTo(cx + size * 1.15, cy - size * 0.4);
      ctx.stroke();
    }

    // Desenhar Logo Completa
    function drawTaglineLogo() {
      const canvas = document.getElementById('canvas-tagline');
      const ctx = canvas.getContext('2d');
      const w = canvas.width;
      const h = canvas.height;
      ctx.clearRect(0, 0, w, h);

      // Desenhar símbolo à esquerda
      const size = h * 0.32;
      const cx = h * 0.5;
      const cy = h * 0.5;

      ctx.shadowBlur = h * 0.05;
      ctx.shadowColor = '#FF7A1A';

      // Símbolo isométrico
      ctx.fillStyle = '#FF8C2A';
      ctx.beginPath();
      ctx.moveTo(cx, cy - size);
      ctx.lineTo(cx + size * 1.15, cy - size * 0.4);
      ctx.lineTo(cx, cy + size * 0.2);
      ctx.lineTo(cx - size * 1.15, cy - size * 0.4);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FF7A1A';
      ctx.beginPath();
      ctx.moveTo(cx - size * 1.15, cy - size * 0.4);
      ctx.lineTo(cx, cy + size * 0.2);
      ctx.lineTo(cx, cy + size * 1.2);
      ctx.lineTo(cx - size * 1.15, cy + size * 0.6);
      ctx.closePath();
      ctx.fill();

      ctx.fillStyle = '#FF9F43';
      ctx.beginPath();
      ctx.moveTo(cx, cy + size * 0.2);
      ctx.lineTo(cx + size * 1.15, cy - size * 0.4);
      ctx.lineTo(cx + size * 1.15, cy + size * 0.6);
      ctx.lineTo(cx, cy + size * 1.2);
      ctx.closePath();
      ctx.fill();

      // Escrever Texto "SPACEBOX"
      ctx.shadowBlur = 0;
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold ' + (h * 0.35) + 'px "Space Grotesk", sans-serif';
      ctx.fillText('SPACEBOX', cx + size * 1.5, cy + h * 0.05);

      // Escrever Subtexto / Tagline
      ctx.fillStyle = '#8E8E9F';
      ctx.font = '500 ' + (h * 0.12) + 'px "Inter", sans-serif';
      ctx.fillText('DESIGN SYSTEM & UI KIT', cx + size * 1.55, cy + h * 0.22);
    }

    // Função de Download
    function downloadPNG(type) {
      const sizeSelect = document.getElementById('size-' + type);
      const targetSize = parseInt(sizeSelect.value);
      
      // Criar canvas temporário na resolução de exportação selecionada
      const tempCanvas = document.createElement('canvas');
      const tempCtx = tempCanvas.getContext('2d');
      
      if (type === 'simple') {
        tempCanvas.width = targetSize;
        tempCanvas.height = targetSize;
        
        // Redesenhar no canvas temporário
        const w = targetSize;
        const h = targetSize;
        const cx = w / 2;
        const cy = h / 2;
        const size = w * 0.38;

        tempCtx.shadowBlur = w * 0.05;
        tempCtx.shadowColor = '#FF7A1A';
        
        tempCtx.fillStyle = '#FF8C2A';
        tempCtx.beginPath();
        tempCtx.moveTo(cx, cy - size);
        tempCtx.lineTo(cx + size * 1.15, cy - size * 0.4);
        tempCtx.lineTo(cx, cy + size * 0.2);
        tempCtx.lineTo(cx - size * 1.15, cy - size * 0.4);
        tempCtx.closePath();
        tempCtx.fill();

        tempCtx.fillStyle = '#FF7A1A';
        tempCtx.beginPath();
        tempCtx.moveTo(cx - size * 1.15, cy - size * 0.4);
        tempCtx.lineTo(cx, cy + size * 0.2);
        tempCtx.lineTo(cx, cy + size * 1.2);
        tempCtx.lineTo(cx - size * 1.15, cy + size * 0.6);
        tempCtx.closePath();
        tempCtx.fill();

        tempCtx.fillStyle = '#FF9F43';
        tempCtx.beginPath();
        tempCtx.moveTo(cx, cy + size * 0.2);
        tempCtx.lineTo(cx + size * 1.15, cy - size * 0.4);
        tempCtx.lineTo(cx + size * 1.15, cy + size * 0.6);
        tempCtx.lineTo(cx, cy + size * 1.2);
        tempCtx.closePath();
        tempCtx.fill();

        tempCtx.shadowBlur = 0;
        tempCtx.strokeStyle = 'rgba(10, 10, 12, 0.4)';
        tempCtx.lineWidth = w * 0.015;
        tempCtx.beginPath();
        tempCtx.moveTo(cx, cy - size);
        tempCtx.lineTo(cx, cy + size * 0.2);
        tempCtx.moveTo(cx - size * 1.15, cy - size * 0.4);
        tempCtx.lineTo(cx, cy + size * 0.2);
        tempCtx.lineTo(cx + size * 1.15, cy - size * 0.4);
        tempCtx.stroke();
        
      } else {
        // Tagline
        tempCanvas.width = targetSize;
        tempCanvas.height = targetSize * 0.39; // Mantendo proporção de ~2.5:1
        
        const w = tempCanvas.width;
        const h = tempCanvas.height;
        const size = h * 0.32;
        const cx = h * 0.5;
        const cy = h * 0.5;

        tempCtx.shadowBlur = h * 0.05;
        tempCtx.shadowColor = '#FF7A1A';

        tempCtx.fillStyle = '#FF8C2A';
        tempCtx.beginPath();
        tempCtx.moveTo(cx, cy - size);
        tempCtx.lineTo(cx + size * 1.15, cy - size * 0.4);
        tempCtx.lineTo(cx, cy + size * 0.2);
        tempCtx.lineTo(cx - size * 1.15, cy - size * 0.4);
        tempCtx.closePath();
        tempCtx.fill();

        tempCtx.fillStyle = '#FF7A1A';
        tempCtx.beginPath();
        tempCtx.moveTo(cx - size * 1.15, cy - size * 0.4);
        tempCtx.lineTo(cx, cy + size * 0.2);
        tempCtx.lineTo(cx, cy + size * 1.2);
        tempCtx.lineTo(cx - size * 1.15, cy + size * 0.6);
        tempCtx.closePath();
        tempCtx.fill();

        tempCtx.fillStyle = '#FF9F43';
        tempCtx.beginPath();
        tempCtx.moveTo(cx, cy + size * 0.2);
        tempCtx.lineTo(tempCtx.canvas.width ? cx + size * 1.15 : cx, cy - size * 0.4);
        tempCtx.lineTo(cx + size * 1.15, cy + size * 0.6);
        tempCtx.lineTo(cx, cy + size * 1.2);
        tempCtx.closePath();
        tempCtx.fill();

        tempCtx.shadowBlur = 0;
        tempCtx.fillStyle = '#FFFFFF';
        tempCtx.font = 'bold ' + (h * 0.35) + 'px "Space Grotesk", sans-serif';
        tempCtx.fillText('SPACEBOX', cx + size * 1.5, cy + h * 0.05);

        tempCtx.fillStyle = '#8E8E9F';
        tempCtx.font = '500 ' + (h * 0.12) + 'px "Inter", sans-serif';
        tempCtx.fillText('DESIGN SYSTEM & UI KIT', cx + size * 1.55, cy + h * 0.22);
      }
      
      // Trigger download do canvas temporário
      const link = document.createElement('a');
      link.download = 'spacebox_' + type + '_' + targetSize + '.png';
      link.href = tempCanvas.toDataURL('image/png');
      link.click();
    }

    // Inicializar renders ao carregar
    window.onload = () => {
      // Carregar fonte externa para o canvas
      const font = new FontFace('Space Grotesk', 'url(https://fonts.gstatic.com/s/spacegrotesk/v13/V8mQoQDjQSkFtoMM3T6r8E7mF71Q-g.woff2)');
      font.load().then(() => {
        document.fonts.add(font);
        drawSimpleLogo();
        drawTaglineLogo();
      }).catch(err => {
        console.warn('Erro ao carregar fonte, usando fallback:', err);
        drawSimpleLogo();
        drawTaglineLogo();
      });
    };
  </script>
</body>
</html>`;

try {
  fs.writeFileSync(htmlToolPath, htmlContent);
  console.log(`[SUCESSO] Ferramenta geradora de logos HTML criada em: ${htmlToolPath}`);
  console.log('👉 Basta abrir este arquivo no navegador para exportar os logos da Spacebox em PNG transparentes de qualquer resolução!');
} catch (error) {
  console.error('[ERRO] Falha ao criar a ferramenta HTML de logos:', error);
}
