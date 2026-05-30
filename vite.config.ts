import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig(({ isSsrBuild }) => ({
  plugins: isSsrBuild ? [react()] : [react(), tailwindcss()],
  build: {
    outDir: isSsrBuild ? 'dist/server' : 'dist/client',
    rollupOptions: isSsrBuild
      ? { output: { format: 'es' } }
      : undefined,
  },
}))
