import type { ExtendOptions } from 'vite-plugin-vue-setup-extend'
import setupExtend from 'vite-plugin-vue-setup-extend'

export default function createSetupExtend(options?: ExtendOptions | undefined) {
  return [setupExtend(options)]
}
