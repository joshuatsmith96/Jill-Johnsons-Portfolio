// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    plugins: [react()],
    base: '/Jill-Johnsons-Portfolio/',
  }

  if (command !== 'serve') {
    config.base = '/Jill-Johnsons-Portfolio/'
  }

  return config
})