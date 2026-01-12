// vite.config.js
import { defineConfig } from 'vite';
import { resolve } from 'path';
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  build: {
    outDir: 'dist', // Where to output build files
    emptyOutDir: true, // Clean dist before building
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        brand: resolve(__dirname, 'brand.html'),
      },
    },
  },

  assetsInclude: ['**/*.js'],
  publicDir: 'public',

  server: {
    port: 3000,
    open: true, // Set to true if you want the browser to open on `npm run dev`
    strictPort: true, // Fail if 3000 is in use
  },
});