import { defineConfig } from 'vite';
import tailwindcss from 'tailwindcss';
import react from '@vitejs/plugin-react-swc';
import autoprefixer from 'autoprefixer';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
  ],
  css: {
    postcss: {
      // Le prof avait mis autoprefixer, si un bug lié à tailwindcss, étudier cette possibilité
      plugins: [tailwindcss, autoprefixer],
    },
  },
});
