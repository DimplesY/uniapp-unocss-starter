import uni from '@dcloudio/vite-plugin-uni'
import createAutoImport from './auto-import'

export default function createVitePlugins() {
  const vitePlugins = [uni()]
  vitePlugins.push(createAutoImport())
  return vitePlugins
}
