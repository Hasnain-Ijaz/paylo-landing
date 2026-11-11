import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base './' makes the build work on GitHub Pages (any repo name) and any static host
export default defineConfig({
  plugins: [react()],
  base: './',
})
