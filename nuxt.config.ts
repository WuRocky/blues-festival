// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    // '@nuxt/content',
    '@nuxt/image',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@unocss/nuxt',
    'nuxt-swiper',
    '@nuxtjs/i18n',
  ],
  i18n: {
    locales: [
      { code: 'zh', file: 'zh.json' },
      { code: 'en', file: 'en.json' }
    ],
    defaultLocale: 'zh'
  },
  unocss: {
    preflight: true,
  },
})