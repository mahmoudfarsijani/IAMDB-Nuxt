// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    '~/plugins/localStorage.js'
  ],
  css: ['~/assets/css/tailwind.css'],
  modules: [
    '@pinia/nuxt',
  ],
  pinia: {
    autoImports: [
      // Automatically imports `defineStore`
      'defineStore',
      // Automatically imports `storeToRefs`
      'storeToRefs'
    ]
  },
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
