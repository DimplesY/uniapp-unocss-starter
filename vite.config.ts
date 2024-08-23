import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCSS = await import('unocss/vite').then(i => i.default)
  return {
    plugins: [
      ...createVitePlugins(),
      UnoCSS(),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
      ],
    },
  }
})
