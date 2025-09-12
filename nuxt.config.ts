// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },

  modules: [
    '@nuxt/content',
    '@nuxt/eslint',
    '@nuxt/image',
    '@nuxt/scripts',
    '@nuxt/ui',
    '@unocss/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/i18n',
    '@vueuse/nuxt',
  ],
  i18n: {
    strategy: 'no_prefix',
    locales: [
      {
        code: 'zh-TW',
        file: 'zh-TW.json',
      },
      {
        code: 'en-US',
        file: 'en-US.json',
      },
      {
        code: 'en',
        file: 'en.json',
      },
    ],
    langDir: 'locales',
    defaultLocale: 'en',
    detectBrowserLanguage: false,
    // detectBrowserLanguage: {
    //   useCookie: true,
    //   cookieKey: 'i18n_redirected',
    //   alwaysRedirect: false,
    // },
  },
  css: ['@unocss/reset/tailwind.css'],
  nitro: { preset: 'static' },
})
