// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Daily Manga - Read, Watch and News Manga",
      meta: [
        {
          name: "description",
          content: "Read and watch your Favorite Manga Anime Online",
        },
      ],
    },
  },
  css: [
    "vuetify/lib/styles/main.sass",
    "@mdi/font/css/materialdesignicons.min.css",
    "~/assets/css/main.css",
  ],
  build: {
    transpile: ["vuetify"],
  },

  modules: ["@nuxtjs/device", "nuxt-time"],
  device: {
    refreshOnResize: true,
  },
});
