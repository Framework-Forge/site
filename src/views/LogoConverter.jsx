import React, { useCallback, useEffect, useRef, useState } from 'react';
import Card from '../components/ui/Card';
import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Select from '../components/ui/Select';
import Textarea from '../components/ui/Textarea';
import Toggle from '../components/ui/Toggle';
import Slider from '../components/ui/Slider';
import Modal from '../components/ui/Modal';
import PageHeader from '../components/ui/PageHeader';
import { useNotification } from '../components/NotificationContext';

// Logo SVG Padrão da Forgebox para teste rápido
const defaultForgeboxSVG = `<svg viewBox="0 0 200 200" width="200" height="200" xmlns="http://www.w3.org/2000/svg">
  <path d="M100 20 L170 60 L170 140 L100 180 L30 140 L30 60 Z" fill="none" stroke="#FF7A1A" stroke-width="8" stroke-linejoin="round" />
  <path d="M30 60 L100 100 L170 60" fill="none" stroke="#FF7A1A" stroke-width="6" stroke-linejoin="round" />
  <path d="M100 100 L100 180" fill="none" stroke="#FF7A1A" stroke-width="6" />
  <path d="M50 95 L80 95 L80 105 L65 120 L85 120 L85 130 L45 130 L45 120 L55 105 Z" fill="#FF7A1A" opacity="0.85" />
  <path d="M135 90 Q135 110 155 110 Q135 110 135 130 Q135 110 115 110 Q135 110 135 90 Z" fill="#FF7A1A" opacity="0.85" />
</svg>`;

export default function LogoConverter() {
  const { triggerNotification } = useNotification();
  
  // Estados de Entrada
  const [inputType, setInputType] = useState('image'); // 'image' | 'svg_code'
  const [svgContent, setSvgContent] = useState(defaultForgeboxSVG);
  const [uploadedImage, setUploadedImage] = useState(null); // base64 dataUrl
  const [uploadedFileName, setUploadedFileName] = useState('');
  
  // Estados de Configuração
  const [resolution, setResolution] = useState('1024');
  const [customRes, setCustomRes] = useState('512');
  
  // Estados de Remoção de Fundo
  const [removeBg, setRemoveBg] = useState(false);
  const [bgColorToRemove, setBgColorToRemove] = useState('#FFFFFF');
  const [tolerance, setTolerance] = useState(30);

  // Estados de Exportação Final (Modal)
  const [exportModalOpen, setExportModalOpen] = useState(false);
  const [exportedImageSrc, setExportedImageSrc] = useState('');
  const [exportedSize, setExportedSize] = useState(1024);

  const fileInputRef = useRef(null);
  const canvasRef = useRef(null);
  const previewCanvasRef = useRef(null);

  const getPixelSize = () => {
    return resolution === 'custom' ? parseInt(customRes) || 512 : parseInt(resolution);
  };

  // Cores comuns de fundo para remoção rápida
  const backgroundPresets = [
    '#FFFFFF', // Branco
    '#000000', // Preto
    '#1A1A1A', // Cinza Escuro
    '#00FF00', // Verde Chroma
    '#FF00FF'  // Rosa/Magenta
  ];

  // Processa o upload de arquivos (Imagens JPG, PNG, WEBP ou SVG)
  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setUploadedFileName(file.name);

    // Caso seja SVG
    if (file.type === 'image/svg+xml' || file.name.endsWith('.svg')) {
      setInputType('svg_code');
      const reader = new FileReader();
      reader.onload = (event) => {
        setSvgContent(event.target.result);
        triggerNotification('success', 'Arquivo SVG carregado com sucesso!');
      };
      reader.readAsText(file);
    } else {
      // Outros formatos de imagem (PNG, JPG, JPEG, WEBP)
      setInputType('image');
      const reader = new FileReader();
      reader.onload = (event) => {
        setUploadedImage(event.target.result);
        triggerNotification('success', 'Imagem carregada com sucesso! Você pode remover o fundo abaixo ou clicar na imagem para selecionar a cor.');
      };
      reader.readAsDataURL(file);
    }
  };

  // Filtro de remocao de fundo (Chroma Key) baseada em distancia de cores
  const applyBackgroundRemoval = useCallback((ctx, w, h) => {
    try {
      const imageData = ctx.getImageData(0, 0, w, h);
      const data = imageData.data;

      let hex = bgColorToRemove.replace('#', '').trim();
      if (hex.length === 3) {
        hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
      }
      if (hex.length !== 6) {
        return;
      }

      const rTarget = parseInt(hex.substring(0, 2), 16) || 0;
      const gTarget = parseInt(hex.substring(2, 4), 16) || 0;
      const bTarget = parseInt(hex.substring(4, 6), 16) || 0;
      const threshold = tolerance * 4.42;

      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        const distance = Math.sqrt(
          Math.pow(r - rTarget, 2) +
          Math.pow(g - gTarget, 2) +
          Math.pow(b - bTarget, 2)
        );

        if (distance <= threshold) {
          data[i + 3] = 0;
        }
      }
      ctx.putImageData(imageData, 0, 0);
    } catch (err) {
      console.error('Erro na remocao de fundo:', err);
    }
  }, [bgColorToRemove, tolerance]);

  const renderPreview = useCallback(() => {
    const canvas = previewCanvasRef.current;
    if (!canvas || !uploadedImage) return;
    const ctx = canvas.getContext('2d');
    const img = new Image();

    img.onload = () => {
      const maxPreviewSize = 240;
      let w = img.width;
      let h = img.height;

      if (w > h) {
        h = Math.round((h / w) * maxPreviewSize);
        w = maxPreviewSize;
      } else {
        w = Math.round((w / h) * maxPreviewSize);
        h = maxPreviewSize;
      }

      canvas.width = w;
      canvas.height = h;
      ctx.clearRect(0, 0, w, h);
      ctx.drawImage(img, 0, 0, w, h);

      if (removeBg) {
        applyBackgroundRemoval(ctx, w, h);
      }
    };
    img.src = uploadedImage;
  }, [applyBackgroundRemoval, removeBg, uploadedImage]);

  // Efeito para desenhar o preview interativo quando houver imagem ou filtros alterados
  useEffect(() => {
    if (inputType === 'image' && uploadedImage) {
      renderPreview();
    }
  }, [inputType, renderPreview, uploadedImage]);
  // Clique na imagem para selecionar a cor do fundo (Eyedropper)
  const handleCanvasClick = (e) => {
    const canvas = previewCanvasRef.current;
    if (!canvas || !uploadedImage) return;

    const rect = canvas.getBoundingClientRect();
    const x = Math.floor(((e.clientX - rect.left) / rect.width) * canvas.width);
    const y = Math.floor(((e.clientY - rect.top) / rect.height) * canvas.height);

    const img = new Image();
    img.onload = () => {
      const tempCanvas = document.createElement('canvas');
      tempCanvas.width = canvas.width;
      tempCanvas.height = canvas.height;
      const tempCtx = tempCanvas.getContext('2d');
      tempCtx.drawImage(img, 0, 0, tempCanvas.width, tempCanvas.height);
      
      const pixel = tempCtx.getImageData(x, y, 1, 1).data;
      const r = pixel[0];
      const g = pixel[1];
      const b = pixel[2];

      const rgbToHex = (r, g, b) => {
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase();
      };

      const selectedHex = rgbToHex(r, g, b);
      setBgColorToRemove(selectedHex);
      setRemoveBg(true);
      triggerNotification('success', `Cor capturada com sucesso: ${selectedHex}`);
    };
    img.src = uploadedImage;
  };

  // Executa a rasterização final em alta definição
  const handleExportPNG = () => {
    const size = getPixelSize();
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, size, size);

    if (inputType === 'svg_code') {
      if (!svgContent.trim()) {
        triggerNotification('error', 'O código SVG está vazio!');
        return;
      }

      const parser = new DOMParser();
      const doc = parser.parseFromString(svgContent, 'image/svg+xml');
      const svgEl = doc.querySelector('svg');

      if (!svgEl) {
        triggerNotification('error', 'Código SVG inválido!');
        return;
      }

      svgEl.setAttribute('width', size.toString());
      svgEl.setAttribute('height', size.toString());
      if (!svgEl.getAttribute('viewBox')) {
        svgEl.setAttribute('viewBox', '0 0 200 200');
      }

      const serializedSvg = new XMLSerializer().serializeToString(svgEl);
      const svgBlob = new Blob([serializedSvg], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();

      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
        showExportModal(canvas, size);
        URL.revokeObjectURL(url);
      };
      img.onerror = () => {
        triggerNotification('error', 'Erro ao processar código SVG.');
        URL.revokeObjectURL(url);
      };
      img.src = url;
    } else {
      if (!uploadedImage) {
        triggerNotification('error', 'Nenhuma imagem foi carregada para conversão!');
        return;
      }

      const img = new Image();
      img.onload = () => {
        ctx.drawImage(img, 0, 0, size, size);
        if (removeBg) {
          applyBackgroundRemoval(ctx, size, size);
        }
        showExportModal(canvas, size);
      };
      img.src = uploadedImage;
    }
  };

  // Dispara o download real (backend POST com fallback para Blob URL local)
  const triggerDownload = (base64Data, size) => {
    const filename = `forgebox_logo_${size}x${size}.png`;
    
    // Se estiver rodando no servidor de desenvolvimento local, usa o POST de Form para forçar download físico
    if (window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1') {
      try {
        const form = document.createElement('form');
        form.method = 'POST';
        form.action = '/api/download';
        form.style.display = 'none';

        const base64Input = document.createElement('input');
        base64Input.type = 'hidden';
        base64Input.name = 'base64';
        base64Input.value = base64Data;
        form.appendChild(base64Input);

        const filenameInput = document.createElement('input');
        filenameInput.type = 'hidden';
        filenameInput.name = 'filename';
        filenameInput.value = filename;
        form.appendChild(filenameInput);

        document.body.appendChild(form);
        form.submit();
        document.body.removeChild(form);
        triggerNotification('success', 'Download automático iniciado!');
        return;
      } catch (err) {
        console.warn('Erro ao usar download pelo backend, tentando fallback local...', err);
      }
    }

    // Fallback: usar Blob URL local (para outros ambientes estáticos)
    try {
      const base64DataClean = base64Data.split(';base64,').pop();
      const sliceSize = 1024;
      const byteCharacters = atob(base64DataClean);
      const byteArrays = [];

      for (let offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        const slice = byteCharacters.slice(offset, offset + sliceSize);
        const byteNumbers = new Array(slice.length);
        for (let i = 0; i < slice.length; i++) {
          byteNumbers[i] = slice.charCodeAt(i);
        }
        const byteArray = new Uint8Array(byteNumbers);
        byteArrays.push(byteArray);
      }

      const blob = new Blob(byteArrays, { type: 'image/png' });
      const blobUrl = URL.createObjectURL(blob);
      const downloadLink = document.createElement('a');
      downloadLink.href = blobUrl;
      downloadLink.download = filename;
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
      
      setTimeout(() => {
        URL.revokeObjectURL(blobUrl);
      }, 1000);
      triggerNotification('success', 'Download automático iniciado via Blob local!');
    } catch (err) {
      console.error(err);
      triggerNotification('error', 'Falha ao baixar imagem.');
    }
  };

  // Abre o modal de download com a imagem final real para o usuário poder baixar
  const showExportModal = (canvas, size) => {
    const pngDataUrl = canvas.toDataURL('image/png');
    setExportedImageSrc(pngDataUrl);
    setExportedSize(size);
    setExportModalOpen(true);

    // Tentar o download automático imediatamente
    triggerDownload(pngDataUrl, size);
  };

  const handleCopyImageToClipboard = async () => {
    if (!exportedImageSrc) return;
    try {
      const response = await fetch(exportedImageSrc);
      const blob = await response.blob();
      
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
      triggerNotification('success', 'Imagem copiada para a área de transferência! Você já pode colar (Ctrl+V) no Photoshop, Discord, Paint, etc.');
    } catch (err) {
      console.error(err);
      triggerNotification('error', 'Seu navegador não suporta cópia direta. Use o clique direito do mouse para Salvar.');
    }
  };

  return (
    <div style={{ paddingBottom: '60px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
      <PageHeader
        title="Conversor de Logos & Imagens PNG"
        breadcrumbs={['Forgebox', 'Ferramentas', 'Conversor de Imagens']}
      />

      <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px' }}>
        
        {/* Lado Esquerdo: Inputs */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          
          <Card title="Upload de Arquivo" description="Envie qualquer imagem (JPG, JPEG, PNG, WEBP ou SVG) para remover o fundo e converter para PNG transparente.">
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <input
                  type="file"
                  ref={fileInputRef}
                  onChange={handleFileUpload}
                  accept="image/*,.svg"
                  style={{ display: 'none' }}
                />
                <Button variant="primary" onClick={() => fileInputRef.current.click()}>
                  Selecionar Imagem ou SVG
                </Button>
                {uploadedFileName && (
                  <span style={{ fontSize: '12px', color: 'var(--space-orange-primary)', fontWeight: 'bold' }}>
                    📄 {uploadedFileName}
                  </span>
                )}
              </div>

              <div style={{ display: 'flex', gap: '8px', borderBottom: '1px solid var(--space-border-color)', paddingBottom: '12px' }}>
                <button
                  type="button"
                  onClick={() => setInputType('image')}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: inputType === 'image' ? 'var(--space-orange-subtle)' : 'transparent',
                    border: '1px solid',
                    borderColor: inputType === 'image' ? 'var(--space-orange-primary)' : 'transparent',
                    color: inputType === 'image' ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    transition: 'var(--space-transition)'
                  }}
                >
                  Modo Imagem / Foto
                </button>
                <button
                  type="button"
                  onClick={() => setInputType('svg_code')}
                  style={{
                    padding: '6px 12px',
                    backgroundColor: inputType === 'svg_code' ? 'var(--space-orange-subtle)' : 'transparent',
                    border: '1px solid',
                    borderColor: inputType === 'svg_code' ? 'var(--space-orange-primary)' : 'transparent',
                    color: inputType === 'svg_code' ? 'var(--space-orange-primary)' : 'var(--space-text-grey)',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '12px',
                    fontWeight: 'bold',
                    transition: 'var(--space-transition)'
                  }}
                >
                  Editor de Código SVG
                </button>
              </div>
            </div>
          </Card>

          {inputType === 'svg_code' && (
            <Card title="Editor de Código SVG" description="Edite o código SVG abaixo para rasterizar em PNG de qualidade perfeita.">
              <Textarea
                label="Código XML/SVG"
                value={svgContent}
                onChange={(e) => setSvgContent(e.target.value)}
                rows={12}
                style={{ fontFamily: 'var(--font-mono)', fontSize: '11.5px' }}
              />
            </Card>
          )}

          {inputType === 'image' && uploadedImage && (
            <Card title="Remover Fundo (Chroma Key)" description="Remova fundos pretos, brancos ou coloridos de forma automática.">
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                <Toggle
                  label="Ativar Remoção de Fundo"
                  checked={removeBg}
                  onChange={(e) => setRemoveBg(e.target.checked)}
                />
                
                {removeBg && (
                  <>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                      <span className="form-label">Cor do Fundo para Remover</span>
                      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '8px' }}>
                        {backgroundPresets.map((color) => {
                          const isSelected = bgColorToRemove.toUpperCase() === color.toUpperCase();
                          return (
                            <div
                              key={color}
                              onClick={() => setBgColorToRemove(color)}
                              style={{
                                width: '28px',
                                height: '28px',
                                borderRadius: '50%',
                                backgroundColor: color,
                                border: '2px solid',
                                borderColor: isSelected ? 'var(--space-orange-primary)' : 'var(--space-border-color)',
                                cursor: 'pointer',
                                transition: 'var(--space-transition)',
                                boxShadow: isSelected ? `0 0 6px ${color}` : 'none'
                              }}
                            />
                          );
                        })}
                      </div>
                      <div style={{ width: '150px' }}>
                        <Input
                          label="Hex da Cor"
                          value={bgColorToRemove}
                          onChange={(e) => setBgColorToRemove(e.target.value)}
                        />
                      </div>
                    </div>

                    <Slider
                      label={`Tolerância da Cor (${tolerance}%)`}
                      min={0}
                      max={100}
                      value={tolerance}
                      onChange={(e) => setTolerance(parseInt(e.target.value))}
                    />
                  </>
                )}
              </div>
            </Card>
          )}
        </div>

        {/* Lado Direito: Exportação e Preview */}
        <Card title="Visualização & Exportação" description="Escolha o tamanho, clique na imagem para escolher a cor se desejar e baixe o PNG transparente.">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            <Select
              label="Resolução do PNG de Saída"
              value={resolution}
              onChange={(e) => setResolution(e.target.value)}
              options={[
                { value: '512', label: '512 x 512 px (Ícones NUI/HUD)' },
                { value: '1024', label: '1024 x 1024 px (Padrão de Qualidade)' },
                { value: '2048', label: '2048 x 2048 px (Resolução Ultra)' },
                { value: 'custom', label: 'Tamanho Personalizado' }
              ]}
            />

            {resolution === 'custom' && (
              <Input
                label="Definir Tamanho (px)"
                type="number"
                value={customRes}
                onChange={(e) => setCustomRes(e.target.value)}
                min="64"
                max="4096"
              />
            )}

            <Button
              variant="primary"
              onClick={handleExportPNG}
              style={{ width: '100%', height: '46px', fontSize: '14px', letterSpacing: '0.5px' }}
            >
              Exportar PNG Transparente
            </Button>

            {/* Caixa de Preview */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <span className="form-label" style={{ display: 'flex', justifyContent: 'space-between' }}>
                <span>Resultado do Preview</span>
                {inputType === 'image' && uploadedImage && (
                  <span style={{ fontSize: '10px', color: 'var(--space-orange-primary)' }}>💡 Clique na imagem para obter a cor</span>
                )}
              </span>
              <div
                style={{
                  width: '100%',
                  height: '260px',
                  backgroundColor: 'rgba(0,0,0,0.25)',
                  border: '1px dashed var(--space-border-color)',
                  borderRadius: 'var(--space-radius-md)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  overflow: 'hidden',
                  background: 'repeating-conic-gradient(#1c1c22 0% 25%, #131317 0% 50%) 50% / 16px 16px',
                  position: 'relative'
                }}
              >
                {inputType === 'svg_code' ? (
                  <div
                    dangerouslySetInnerHTML={{ __html: svgContent }}
                    style={{
                      width: '150px',
                      height: '150px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}
                  />
                ) : uploadedImage ? (
                  <canvas
                    ref={previewCanvasRef}
                    onClick={handleCanvasClick}
                    style={{ maxWidth: '100%', maxHeight: '100%', cursor: 'crosshair' }}
                    title="Clique para selecionar a cor do fundo"
                  />
                ) : (
                  <span style={{ fontSize: '12px', color: 'var(--space-text-muted)', textAlign: 'center' }}>
                    Nenhuma imagem carregada para pré-visualização.
                  </span>
                )}
              </div>
            </div>

            {/* Canvas Oculto para Renderização em Alta Definição */}
            <canvas
              ref={canvasRef}
              width={getPixelSize()}
              height={getPixelSize()}
              style={{ display: 'none' }}
            />

          </div>
        </Card>
      </div>

      {/* Modal de Download Final */}
      <Modal
        isOpen={exportModalOpen}
        onClose={() => setExportModalOpen(false)}
        title="Seu PNG está Pronto!"
        actions={
          <>
            <Button variant="secondary" onClick={() => setExportModalOpen(false)}>Fechar</Button>
            <Button variant="success" onClick={handleCopyImageToClipboard}>Copiar Imagem (Ctrl+V)</Button>
            <Button variant="primary" onClick={() => triggerDownload(exportedImageSrc, exportedSize)}>Baixar PNG Novamente</Button>
          </>
        }
      >
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '16px', textAlign: 'center' }}>
          <p style={{ margin: 0, fontSize: '13px', color: 'var(--space-text-grey)', lineHeight: '1.4' }}>
            O seu navegador (Edge/Chrome) pode bloquear downloads locais com extensões quando rodando em <strong>localhost</strong>, salvando-os como arquivos temporários de sistema (UUIDs).
          </p>
          <div style={{ padding: '8px 12px', backgroundColor: 'var(--space-orange-subtle)', border: '1px solid var(--space-orange-primary)', borderRadius: '4px', fontSize: '12px', color: 'var(--space-orange-primary)' }}>
            👉 <strong>Como salvar corretamente:</strong> Clique no botão <strong>"Copiar Imagem"</strong> acima e cole (Ctrl+V) onde quiser, ou <strong>clique com o botão direito na imagem abaixo e selecione "Salvar imagem como..."</strong>.
          </div>
          
          <div
            style={{
              padding: '16px',
              backgroundColor: 'rgba(0,0,0,0.4)',
              border: '1px solid var(--space-border-color)',
              borderRadius: 'var(--space-radius-md)',
              background: 'repeating-conic-gradient(#1c1c22 0% 25%, #131317 0% 50%) 50% / 16px 16px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '300px',
              maxHeight: '300px',
              overflow: 'hidden'
            }}
          >
            <img
              src={exportedImageSrc}
              alt="Logo Exportada"
              style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
            />
          </div>

          <span style={{ fontSize: '11px', color: 'var(--space-orange-primary)', fontWeight: 'bold' }}>
            Resolução: {exportedSize}x{exportedSize}px (PNG Transparente)
          </span>
        </div>
      </Modal>
    </div>
  );
}
