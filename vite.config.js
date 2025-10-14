import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/Creaciones-Gabriela/',  
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
  }
})

