import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Plugin customizado para interceptar downloads locais e forçar cabeçalhos HTTP reais
const downloadPlugin = () => ({
  name: 'download-plugin',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      if (req.url.startsWith('/api/download') && req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
          body += chunk;
        });
        req.on('end', () => {
          try {
            const params = new URLSearchParams(body);
            const base64 = params.get('base64');
            const filename = params.get('filename') || 'forgebox_logo.png';

            if (!base64) {
              res.statusCode = 400;
              res.end('Missing base64 data');
              return;
            }

            // Converter base64 de volta para buffer de imagem
            const base64Data = base64.split(';base64,').pop();
            const buffer = Buffer.from(base64Data, 'base64');

            // Setar cabeçalhos de download do arquivo físico para o navegador
            res.setHeader('Content-Type', 'image/png');
            res.setHeader('Content-Disposition', `attachment; filename="${filename}"`);
            res.end(buffer);
          } catch {
            res.statusCode = 500;
            res.end('Internal Server Error');
          }
        });
      } else {
        next();
      }
    });
  }
});

// https://vite.dev/config/
export default defineConfig({
  base: './',
  plugins: [react(), downloadPlugin()],
})
