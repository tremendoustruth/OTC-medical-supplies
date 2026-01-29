import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    setupFiles: './tests/setup.js'
  },
  server: {
    proxy: {
      '/inventory': {
        target: 'http://localhost:9876',
        changeOrigin: true,
      },
    }
  }
})
