import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/vetsight/', // 👈 MUY IMPORTANTE para GitHub Pages
  plugins: [react()],
})
