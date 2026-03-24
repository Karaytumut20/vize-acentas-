import { siteConfig } from "./app/utils/site";

export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: false },

  features: {
    inlineStyles: true
  },

  vite: {
    build: {
      rollupOptions: {
        output: {
          manualChunks(id: string) {
            if (id.includes('node_modules')) {
              if (id.includes('vue') || id.includes('nuxt')) {
                return 'core-vendor';
              }
              return 'vendor';
            }
          }
        }
      }
    }
  },

  srcDir: "app/",

  app: {
    head: {
      htmlAttrs: {
        lang: siteConfig.lang,
      },
      charset: "utf-8",
      viewport:
        "width=device-width, initial-scale=1, viewport-fit=cover",
      meta: [
        { name: "theme-color", content: siteConfig.defaultThemeColor },
        { name: "msapplication-TileColor", content: "#000000" },
        { name: "apple-mobile-web-app-capable", content: "yes" },
        {
          name: "apple-mobile-web-app-status-bar-style",
          content: "black-translucent",
        },
        { name: "mobile-web-app-capable", content: "yes" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        { rel: "icon", type: "image/x-icon", href: "/favicon.ico" },
        {
          rel: "icon",
          type: "image/png",
          sizes: "32x32",
          href: "/favicon-32x32.png",
        },
        {
          rel: "icon",
          type: "image/png",
          sizes: "16x16",
          href: "/favicon-16x16.png",
        },
        {
          rel: "apple-touch-icon",
          sizes: "180x180",
          href: "/apple-touch-icon.png",
        },
        { rel: "mask-icon", href: "/safari-pinned-tab.svg", color: "#000000" },
        {
          rel: "preload",
          as: "font",
          type: "font/woff2",
          href: "/fonts/lchmp.woff2",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  runtimeConfig: {
    public: {
      siteUrl: siteConfig.url,
      gtagId: "",
    },
  },

  modules: [
    "@nuxtjs/tailwindcss",
    "@pinia/nuxt",
    "@nuxt/image",
    "@nuxtjs/robots",
    "@nuxtjs/sitemap",
    "@vite-pwa/nuxt",
    "nuxt-schema-org",
  ],

  schemaOrg: {
    identity: "Organization",
  },

  css: ["~/assets/scss/main.scss"],

  nitro: {
    prerender: {
      routes: [
        "/vizeler/schengen-vizesi",
        "/vizeler/amerika-vizesi",
        "/vizeler/ingiltere-vizesi",
        "/vizeler/japonya-vizesi",
        "/vizeler/kanada-vizesi",
        "/vizeler/cin-vizesi",
        "/vizeler/avustralya-vizesi",
        "/vizeler/dubai-vizesi",
        "/vizeler/misir-vizesi",
        "/vizeler/rusya-vizesi"
      ]
    },
    routeRules: {

      // 1. IPX Görüntü Önbellekleme
      "/_ipx/**": {
        headers: {
          "cache-control": "public, max-age=31536000, immutable",
        },
      },
      // 🔥 2. YENİ: Global Güvenlik Başlıkları (Google ve Güvenlik Zafiyeti Taramaları için)
      "/**": {
        headers: {
          "X-Content-Type-Options": "nosniff", // MIME-type sniffing engellemesi
          "X-Frame-Options": "DENY", // Clickjacking (Siteni iframe içinde gösterme) engellemesi
          "X-XSS-Protection": "1; mode=block", // Tarayıcı bazlı XSS filtresi
          "Strict-Transport-Security":
            "max-age=31536000; includeSubDomains; preload", // Zorunlu HTTPS (HSTS)
          "Referrer-Policy": "strict-origin-when-cross-origin", // Referrer sızıntısı engellemesi
        },
      },
    },
  },

  image: {
    format: ["avif", "webp"],
    quality: 75,
    screens: {
      xs: 320,
      sm: 640,
      md: 768,
      lg: 1024,
      xl: 1280,
      "2xl": 1440,
      "3xl": 1600,
      "4xl": 1920,
      "5xl": 2560,
      "6xl": 3840,
    },
  },

  site: {
    url: siteConfig.url,
    name: siteConfig.name,
  },

  sitemap: {
    autoLastmod: true,
    strictNuxtContentPaths: true,
  },

  robots: {
    allow: "*",
    sitemap: `${siteConfig.url}/sitemap.xml`,
  },

  pwa: {
    registerType: "autoUpdate",
    manifest: {
      name: siteConfig.name,
      short_name: siteConfig.shortName,
      description: siteConfig.description,
      theme_color: siteConfig.defaultThemeColor,
      background_color: siteConfig.defaultThemeColor,
      display: "standalone",
      orientation: "portrait",
      id: "/",
      start_url: "/",
      icons: [
        {
          src: "/icon-192x192.png",
          sizes: "192x192",
          type: "image/png",
        },
        {
          src: "/icon-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable",
        },
      ],
    },
    workbox: {
      navigateFallback: "/",
      globPatterns: ["**/*.{js,css,html,png,svg,ico,woff2}"],
    },
    client: {
      installPrompt: true,
      periodicSyncForUpdates: 3600,
    },
    devOptions: {
      enabled: false,
      suppressWarnings: true,
    },
  },
});
