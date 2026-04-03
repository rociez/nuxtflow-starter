// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: false },
  modules: [
    'nuxt-lodash',
    'vuetify-nuxt-module',
    '@unocss/nuxt',
    '@element-plus/nuxt',
    '@pinia/nuxt',
  ],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  },
  elementPlus: { 
    defaultLocale:'zh-cn',
    importStyle: 'scss',  
    globalConfig : {zIndex: 3000}  
  },
  lodash: {
    prefix: "loUse",    
  },
  typescript: {
    typeCheck: true
  },
  imports: {
    dirs: [
      // pinia 使用
      'stores',
      // 扫描当前目录及所有子目录      
      'api/**',      
    ],    
  },
  css: [
    'remixicon/fonts/remixicon.css'   
  ],
  app: {
    head: {
      title: 'nuxtflow',      
    }
  },
  ssr: false,
})