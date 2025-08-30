import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  // GitHub Pages configuration for custom domain
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  },
});

