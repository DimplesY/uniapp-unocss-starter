import { defineConfig } from 'unocss'
import presetWeapp from 'unocss-preset-weapp'
import { extractorAttributify, transformerClass } from 'unocss-preset-weapp/transformer'

const { transformerAttributify } = extractorAttributify()

export default defineConfig({
  presets: [
    // https://github.com/MellowCo/unocss-preset-weapp
    presetWeapp() as any,
  ],
  transformers: [
    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerAttributify
    transformerAttributify() as any,

    // https://github.com/MellowCo/unocss-preset-weapp/tree/main/src/transformer/transformerClass
    transformerClass() as any,
  ],
})
