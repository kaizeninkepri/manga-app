// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['vuetify/lib/styles/main.sass','@mdi/font/css/materialdesignicons.min.css','~/assets/css/main.css'],
    build: {
        transpile: ['vuetify'],
   },
   image: {
    baseURL: 'https://upload.mangadex.org/covers'
  },
   buildModules: [
    '@nuxt/image',
  ]
   
})
