import { defineConfig } from 'vite';

export default defineConfig({
  // The existing assets folder is the source of public portfolio media.
  publicDir: 'assets',
  build: { outDir: 'dist', emptyOutDir: true }
});
