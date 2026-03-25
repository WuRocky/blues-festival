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
    langDir: 'locales',
    strategy: 'prefix_except_default',
    locales: [
      { code: 'zh', name: '繁體中文', file: 'zh.json' },
      { code: 'en', name: 'English', file: 'en.json' },
      { code: 'ko', name: '한국어', file: 'ko.json' },
    ],
    defaultLocale: 'zh',
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      redirectOn: 'root',
      alwaysRedirect: false,
    },
  },
  unocss: {
    preflight: true,
  },
})
