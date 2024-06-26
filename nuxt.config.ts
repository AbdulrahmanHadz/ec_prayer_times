// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  // builder: 'webpack',
  vite: {
    define: {
      'GOOGLE_API_KEY': JSON.stringify(process.env.GOOGLE_API_KEY)
    }
  },
  modules: ['nuxt-swiper', 'nuxt3-notifications', "@vueuse/nuxt", '@nuxt/ui'],
  nitro: {
    prerender: {
      autoSubfolderIndex: false
    }
  }

})