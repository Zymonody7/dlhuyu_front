import ElementPlus from 'unplugin-element-plus/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: ['normalize.css', '@/assets/css/global.scss', '@/assets/css/tailwind.css'],
  build: {
    // 在开发环境dev、生产环境pro使用babel进行语法转换
    transpile: ['element-plus/es']
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: "@use '@/assets/css/variables.scss' as *;"
        }
      }
    },
    plugins: [ElementPlus({})]
  },
  app: {
    head: {
      title: '鼎朗互娱|为内容创作者提供超预期内容变现服务',
      meta: [
        {
          name: 'description',
          content: '鼎朗互娱'
        },
        {
          name: 'keywords',
          content: '鼎朗互娱'
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1'
        }
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
      noscript: [{ children: 'Javascript is required' }]
    }
  },
  modules: ['@pinia/nuxt', '@vueuse/nuxt']
})
