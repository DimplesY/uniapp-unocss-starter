import type { Options } from 'unplugin-auto-import/types'
import AutoImport from 'unplugin-auto-import/vite'

export default function createAutoImport(options?: Options) {
  return AutoImport({
    imports: ['uni-app', 'vue', 'pinia'],
    dts: 'src/types/auto-imports.d.ts',
    vueTemplate: true,
    ...options,
  })
}
