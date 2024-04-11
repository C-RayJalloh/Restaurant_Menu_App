import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // AVOID CORS ISSUE
  server: {
    proxy: {
      '/api': 'https://resto-api-wxln.onrender.com'
    }
  },
  plugins: [react()],
})
