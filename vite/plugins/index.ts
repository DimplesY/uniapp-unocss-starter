import uni from '@dcloudio/vite-plugin-uni'
import createUnoCSS from './unocss'
import createAutoImport from './auto-import'
import createSetupExtend from './setup-extend'

export default function createVitePlugins() {
  const vitePlugins = [uni()]
  vitePlugins.push(createUnoCSS())
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSetupExtend())
  return vitePlugins
}
