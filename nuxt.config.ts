// https://nuxt.com/docs/api/configuration/nuxt-config
import { compression } from "vite-plugin-compression2";
export default defineNuxtConfig({
  compatibilityDate: '2025-11-13',
  devtools: { enabled: false },
  devServer: {
    port: 6767,
  },
  app: {
    head: {
      htmlAttrs: {
        lang: "en",
        class: "h-full",
      },
      bodyAttrs: {
        class: "h-full",
      },
      title: "Gatewaycity Homes",
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "32x32", href: "/favicon.ico" },
        { rel: "icon", type: "image/png", sizes: "16x16", href: "/favicon.ico" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
        { name: "description", content: "Gatewaycity Homes" },
        { name: "keywords", content: "Gatewaycity, Homes" },
        { name: "author", content: "Gatewaycity Homes" },
        { name: "robots", content: "index, follow" },
        { name: "theme-color", content: "#FFFFFF" },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "apple-mobile-web-app-status-bar-style", content: "default" },
        { name: "apple-mobile-web-app-title", content: "Gatewaycity Homes" },
        { property: "og:title", content: "Gatewaycity Homes" },
        { property: "og:description", content: "Gatewaycity Homes" },
        { property: "og:type", content: "website" },
        { property: "og:url", content: `https://gatewaycityhomes.com` },
        {
          property: "og:image",
          content: ``,
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@gatewaycityhomes" },
        { name: "twitter:title", content: "Gatewaycity Homes" },
        { name: "twitter:description", content: "Gatewaycity Homes" },
        {
          name: "twitter:image",
          content: ``,
        },
      ],
    },
  },

  modules: [
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/fonts',
    '@pinia/nuxt',
  ],

  plugins: [],

  imports: {
    dirs: ["store"],
    autoImport: true,
  },

  ssr: true,

  vite: {
    plugins: [compression()],
  },

  nitro: {
    serveStatic: true,
    prerender: {},
    routeRules: {
      "/api/**": { headers: { "Cache-Control": "public, max-age=86400, must-revalidate" } },
      "/_nuxt/**": { headers: { "Cache-Control": "public, max-age=31536000, immutable" } },
      "/**/*.webp": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
      "/**": { headers: { "Cache-Control": "public, max-age=604800, must-revalidate" } },
      "/image/**": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
      "/_ipx/**": { headers: { "Cache-Control": "public, max-age=2592000, immutable" } },
    },
    compressPublicAssets: true,
  },

  css: [
    "@/assets/css/main.css",
    "@/assets/scss/style.scss",
    "bootstrap-icons/font/bootstrap-icons.css",
  ],

  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
      "@fullhuman/postcss-purgecss": {
        content: [
          "./components/**/*.{vue,js}",
          "./layouts/**/*.vue",
          "./pages/**/*.vue",
          "./plugins/**/*.{js,ts}",
          "./app.vue",
          "./error.vue",
          "./nuxt.config.{js,ts}",
          "./index.html",
          "./src/**/*.{vue,js,ts,jsx,tsx}",
        ],
        safelist: [
          "aos-init",
          "aos-animate",
          /^aos-/,
          /^data-aos-/,
          /^data-aos/,
          /^v3dp__/,
          /^e-/,
        ],
        defaultExtractor: (content: string) =>
          content.match(/[\w-/:]+(?<!:)/g) || [],
      },
    },
  },

  sitemap: {
    sitemaps: {
      pages: {
        includeAppSources: true,
        exclude: ["/news/**"],
      },
      posts: {
        includeAppSources: true,
        include: ["/news/**"],
      },
    },
  },
});
