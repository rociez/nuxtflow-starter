import transformerDirectives from '@unocss/transformer-directives'
import { defineConfig, presetWind4 } from 'unocss'

export default defineConfig({
  // ...UnoCSS options
  presets: [
    presetWind4({ prefix: 'un-' }),
  ],    
  transformers: [
    transformerDirectives(),
  ],
})