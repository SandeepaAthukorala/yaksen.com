import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/offers/*', // Your HTML file
          dest: 'offers',              // Will be accessible at /offers/
        },
      ],
    }),
  ],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
