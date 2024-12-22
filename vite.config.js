import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from "path";
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({

  plugins: [react(), svgr()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src/"),
       "@components": path.resolve(__dirname, "./src/components"),
      '@lib': path.resolve(__dirname, './src/lib'),
      '@icons': path.resolve(__dirname, './src/assets/icons'),
      '@features': path.resolve(__dirname, './src/features'),
      '@home': path.resolve(__dirname, './src/features/home'),
      '@pages': path.resolve(__dirname, './src/features/pages'),
      '@images': path.resolve(__dirname, "./src/assets/images")
     
    },
  },
  optimizeDeps: {
    include: ["firebase/app", "firebase/firestore"],
  },


})
