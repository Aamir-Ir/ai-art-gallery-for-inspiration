import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/ai-art-gallery-for-inspiration/',  // 👈 add this (repo name)
})
