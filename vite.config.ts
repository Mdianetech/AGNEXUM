import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    minify: 'esbuild', // Plus rapide et plus léger que terser
    target: 'es2015',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          router: ['react-router-dom'],
          icons: ['lucide-react']
        },
        // Optimiser les noms de fichiers pour le cache
        chunkFileNames: 'js/[name]-[hash].js',
        entryFileNames: 'js/[name]-[hash].js',
        assetFileNames: (assetInfo) => {
          const info = assetInfo.name?.split('.') || [];
          const ext = info[info.length - 1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(ext)) {
            return `img/[name]-[hash].[ext]`;
          }
          if (/css/i.test(ext)) {
            return `css/[name]-[hash].[ext]`;
          }
          return `assets/[name]-[hash].[ext]`;
        }
      }
    },
    // Réduire drastiquement la taille du bundle
    chunkSizeWarningLimit: 500,
    // Optimiser les images et assets
    assetsInlineLimit: 2048, // Réduire la limite pour éviter les gros bundles
    // Optimisations supplémentaires
    reportCompressedSize: false, // Désactiver le rapport de taille pour accélérer le build
    cssCodeSplit: true, // Séparer le CSS pour un meilleur cache
  },
  base: './',
  server: {
    port: 3000,
    host: true
  },
  preview: {
    port: 4173,
    host: true
  },
  // Optimisations pour le développement
  esbuild: {
    drop: ['console', 'debugger'], // Supprimer les console.log en production
  }
});