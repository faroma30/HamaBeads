import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: env.GITHUB_PAGES === 'true' ? '/HamaBeads/' : './',
    plugins: [react(), VitePWA({ registerType: 'autoUpdate', includeAssets: ['icons/icon-192.png'], manifest: { name: 'HamaStock', short_name: 'HamaStock', description: 'Inventario local Hama Beads Midi · 5 mm', lang: 'es', theme_color: '#101114', background_color: '#101114', display: 'standalone', start_url: './', scope: './', icons: [{ src: 'icons/icon-192.png', sizes: '192x192', type: 'image/png' }, { src: 'icons/icon-512.png', sizes: '512x512', type: 'image/png' }] }, workbox: { navigateFallback: 'index.html', globPatterns: ['**/*.{js,css,html,svg,png,woff2}'] } })]
  };
});
