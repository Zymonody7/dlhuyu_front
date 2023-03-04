import ElementPlus from 'unplugin-element-plus/vite'
// https://nuxt.com/docs/api/configuration/nuxt-config
const lifecycle = process.env.npm_lifecycle_event
export default defineNuxtConfig({
  nitro: {
    storage: {
      redis: {
        driver: 'redis',
        /* redis connector options */
        port: 6379, // Redis port
        host: '127.0.0.1', // Redis host
        username: '', // needs Redis >= 6
        password: '',
        db: 0, // Defaults to 0
        tls: {} // tls/ssl
      }
    }
  },
  postcss: {
    plugins: {
      'postcss-import': {},
      'tailwindcss/nesting': {},
      tailwindcss: {},
      autoprefixer: {}
    }
  },
  css: [
    'normalize.css',
    '@/assets/css/global.scss',
    '@/assets/css/tailwind.css',
    'element-plus/dist/index.css'
  ],
  build: {
    transpile: lifecycle === 'build' ? ['element-plus'] : []
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
