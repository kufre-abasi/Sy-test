// https://nuxt.com/docs/api/configuration/nuxt-config
import tailwindcss from "@tailwindcss/vite";

export default defineNuxtConfig({
  modules: [
   "@nuxt/eslint",
   "@nuxt/ui",
   "@nuxt/a11y",
   "@nuxt/content",
   "@nuxt/hints",
   "@nuxt/image",
   "@nuxt/scripts",
   "@nuxt/test-utils",
   "motion-v/nuxt",
   "nuxt-lucide-icons",
   "@pinia/nuxt",
  ],
 lucide: {
    namePrefix: 'Icon'
  },
  devtools: {
    enabled: true,
  },
  vite: {
    plugins: [tailwindcss()],
  },
  css: ["~/assets/css/main.css"],

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  eslint: {
    config: {
      stylistic: {
        commaDangle: "never",
        braceStyle: "1tbs",
      },
    },
  },
});