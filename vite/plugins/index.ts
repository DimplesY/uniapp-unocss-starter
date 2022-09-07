import uni from '@dcloudio/vite-plugin-uni'
import { defaultAttributes, defaultIgnoreNonValuedAttributes, presetAttributifyWechat } from 'unplugin-unocss-attributify-wechat/vite'
import createUnoCSS from './unocss'
import createAutoImport from './auto-import'
import createSetupExtend from './setup-extend'
import createTransformWeClass from './transform-class'

export default function createVitePlugins() {
  const vitePlugins = [uni()]
  vitePlugins.push(
    presetAttributifyWechat({
      attributes: [...defaultAttributes],
      ignoreNonValuedAttributes: [...defaultIgnoreNonValuedAttributes],
    }),
  )
  process.env.UNI_COMPILER !== 'nvue' && vitePlugins.push(createUnoCSS())
  vitePlugins.push(createTransformWeClass())
  vitePlugins.push(createAutoImport())
  vitePlugins.push(createSetupExtend())
  return vitePlugins
}
