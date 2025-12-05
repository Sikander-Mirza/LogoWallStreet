import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    react(),
    tailwindcss({
      config: {
        theme: {
          extend: {
            backgroundImage: {
              'gradient-orange': 'linear-gradient(180deg, #FD7E14 0%, #FB3F3F 100%)',
            },
          },
        },
      },
    }),
  ],
});
