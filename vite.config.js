import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  ssgOptions: {
    script: 'async',
    formatting: 'none',
  },
  build: {
    rollupOptions: {
      output: {
        // Function form required by Vite 8 / Rolldown (object form throws TypeError)
        manualChunks(id) {
          if (id.includes('node_modules/react/') || id.includes('node_modules/react-dom/')) {
            return 'vendor-react'
          }
          if (id.includes('node_modules/react-router-dom/') || id.includes('node_modules/react-router/')) {
            return 'vendor-router'
          }
          if (id.includes('node_modules/framer-motion/') || id.includes('node_modules/motion/')) {
            return 'vendor-motion'
          }
          if (id.includes('node_modules/lucide-react/')) {
            return 'vendor-icons'
          }
        },
      },
    },
    chunkSizeWarningLimit: 600,
  },
})
