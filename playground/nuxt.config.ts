export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  // modules: ['../src/module']
  build: {
    transpile: ["@opentiny"],
  },
});
