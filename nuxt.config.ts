// https://nuxt.com/docs/api/configuration/nuxt-config
import { compression } from "vite-plugin-compression2";
import dotenv from "dotenv";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

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
        { property: "og:url", content: `${process.env.BASE_URL}` },
        {
          property: "og:image",
          content: `https://imagedelivery.net/KHaby7r0MOA4Gt7v7Yk1jg/cd815c4e-4692-4051-392c-d9c992537e00/2K`,
        },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: "@gatewaycityhomes" },
        { name: "twitter:title", content: "Gatewaycity Homes" },
        { name: "twitter:description", content: "Gatewaycity Homes" },
        {
          name: "twitter:image",
          content: `https://imagedelivery.net/KHaby7r0MOA4Gt7v7Yk1jg/cd815c4e-4692-4051-392c-d9c992537e00/2K`,
        },
      ],
    },
  },

  modules: [
    '@nuxtjs/i18n',
    '@nuxt/image',
    '@nuxtjs/sitemap',
    '@nuxtjs/robots',
    '@nuxt/fonts',
    '@pinia/nuxt',
  ],

  plugins: [],

  i18n: {
    locales: [
      { code: 'fr-CA', file: 'fr-CA.json' },
      { code: 'de-CH', file: 'de-CH.json' },
      { code: 'zh-CN', file: 'zh-CN.json' },
      { code: 'ja-JP', file: 'ja-JP.json' },
      { code: 'vi-VN', file: 'vi-VN.json' },
      { code: 'en-US', file: 'en-US.json' },
    ],
    detectBrowserLanguage: {
      useCookie: false,
      cookieKey: "i18n_redirected",
    },
    defaultLocale: 'en-US',
    strategy: 'no_prefix',
    lazy: true,
    langDir: 'locales',
    vueI18n: '../i18n/i18n.config.ts',
    bundle: {
      optimizeTranslationDirective: false,
    },
  },

  robots: {
    groups: [
      {
        userAgent: "*",
        allow: ["/"],
      },
    ],
    metaTag: true,
    mergeWithRobotsTxtPath: true,
    blockNonSeoBots: true,
    sitemap: `${process.env.BASE_URL}/sitemap_index.xml`,
  },

  imports: {
    dirs: ["store"],
    autoImport: true,
  },

  appConfig: {
    auth: {
      jwtSecret: process.env.JWT_SECRET,
    },
  },

  runtimeConfig: {
    public: {
      baseUrl: process.env.BASE_URL,
      apiBase: process.env.API_BASE,
      env: process.env.ENV,
    },
  },

  ssr: true,

  vite: {
    plugins: [compression()],
  },

  nitro: {
    preset: 'cloudflare-pages',
    storage: {
      db: {
        driver: 'cloudflare-kv-binding',
      },
    },
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

  site: {
    url: process.env.BASE_URL,
    name: "Gatewaycity Homes",
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
