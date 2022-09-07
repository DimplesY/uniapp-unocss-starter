import type { Options } from 'unplugin-auto-import/types'
import autoImport from 'unplugin-auto-import/vite'

export default function createAutoImport(options?: Options | undefined) {
  return autoImport({
    imports: ['uni-app', 'vue', 'pinia'],
    dts: 'src/types/auto-imports.d.ts',
    eslintrc: {
      enabled: true, // Default `false`
      filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
      globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
    },
    ...options,
  })
}
