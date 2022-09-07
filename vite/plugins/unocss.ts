import type { VitePluginConfig } from 'unocss/vite'
import UnoCSS from 'unocss/vite'

export default function createUnoCSS(configOrPath?: string | VitePluginConfig<{}> | undefined) {
  return UnoCSS(configOrPath)
}
