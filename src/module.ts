import { defineNuxtModule } from '@nuxt/kit'
import Components from 'unplugin-vue-components/vite'
import AutoImport from 'unplugin-auto-import/vite'
import { kebabCase } from 'unplugin-vue-components'

export const TinyVueResolver = (componentName) => {
  if (componentName.startsWith('Tiny') && !componentName.startsWith('TinyIcon')) {
    const importName = `@opentiny/vue-${kebabCase(componentName.slice(4))}`
    return importName
  }
}

export default defineNuxtModule({
  meta: {
    name: '@opentiny/nuxt',
    configKey: 'tiny-vue'
  },

  setup(_options, nuxt) {
    nuxt.hook('vite:extendConfig', (config) => {
      config.plugins.push(
        Components({
          resolvers: [TinyVueResolver]
        }),
        AutoImport({
          resolvers: [TinyVueResolver]
        })
      )
    })
  }
})
