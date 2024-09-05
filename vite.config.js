import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/PROJECT_NO2_EMPLOYEE_MANAGER/',
  build: {
    chunkSizeWarningLimit: 1000 // set this to your desired limit in KB
  },
})
