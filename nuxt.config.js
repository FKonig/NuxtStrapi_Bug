import { defineNuxtConfig } from "nuxt";
export default defineNuxtConfig({
  typescript: {
    strict: true,
  },
  modules: ['@nuxtjs/strapi'],
})
