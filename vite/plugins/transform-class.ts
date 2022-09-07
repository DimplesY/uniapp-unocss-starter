import type { Options } from 'unplugin-transform-we-class/types'
import transformWeClass from 'unplugin-transform-we-class/vite'

export default function createTransformWeClass(options?: Options) {
  return transformWeClass(options)
}
