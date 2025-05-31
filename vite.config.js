import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/Time-Tracking-Dashboard/",
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "/src/sass/helpers" as *;`,
      },
    },
  },
  plugins: [react()],
})
