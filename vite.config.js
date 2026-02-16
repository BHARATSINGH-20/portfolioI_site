import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  optimizeDeps: {
    include: ["react-icons/si", "react-icons/ri"],
  },
  plugins: [react()],
  server: {
    host: true,      // 👈 Ye important hai
    port: 5173
  }
})
