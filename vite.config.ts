import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/react-todo-app', // 🔁 Replace with your repo name
  plugins: [react()],
  esbuild: {
    loader: "jsx"
  }
})
