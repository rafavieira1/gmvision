import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Separar vendor libraries em chunks específicos
          'react-vendor': ['react', 'react-dom'],
          'router-vendor': ['react-router-dom'],
          'motion-vendor': ['framer-motion'],
          'ui-vendor': ['lucide-react', '@radix-ui/react-accordion', '@radix-ui/react-navigation-menu'],
          'query-vendor': ['@tanstack/react-query'],
          'form-vendor': ['@emailjs/browser'],
        },
      },
    },
    // Aumentar o limite de warning para 600KB (opcional)
    chunkSizeWarningLimit: 600,
  },
});
