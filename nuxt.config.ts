const baseURL = "/Ensome/"

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: false },

  srcDir: "app",

  modules: ["@nuxt/eslint", "@pinia/nuxt"],

  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: "en" },
      title: "Ensome",
      titleTemplate: "Ensome | %s",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1.0" },
        { name: "theme-color", content: "#ffffff" },
      ],
      link: [{ rel: "icon", type: "image/svg+xml", href: `${baseURL}favicon.svg` }],
    },
  },

  css: ["~/assets/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: '@use "~/assets/scss/mixins/index" as *;',
        },
      },
    },
  },

  devServer: {
    host: "0.0.0.0",
    port: 5174,
  },
})
