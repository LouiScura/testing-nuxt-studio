// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  modules: ['@nuxt/content'],
  imports: {
    autoImport: true
  },
  devtools: { enabled: true }
})
