<template>
  <div
    class="app-wrapper tracking-tight min-h-screen bg-theme-bg text-theme-fg selection:bg-theme-fg selection:text-theme-bg"
  >
    <VitePwaManifest />

    <NuxtRouteAnnouncer />
    <GridHelper />

    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<script setup lang="ts">
import { useRoute } from "vue-router";
import { siteConfig } from "~/utils/site";
import { useAppStore } from "~/stores/app";
import { watch } from "vue";

const store = useAppStore();
const route = useRoute();

// Scroll-To-Top Hack
watch(
  () => route.path,
  () => {
    if (process.client) {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  },
);

// =========================================================================
// 1. GLOBAL HEAD & META & BOT KONTROLÜ
// =========================================================================
useHead({
  htmlAttrs: {
    lang: siteConfig.lang,
    translate: "no",
    class: () => (store.isBot ? "is-bot-agent" : ""),
  },
  titleTemplate: (titleChunk) => {
    if (
      !titleChunk ||
      titleChunk === "Home" ||
      titleChunk === siteConfig.name
    ) {
      return siteConfig.name;
    }
    return `${titleChunk} | ${siteConfig.shortName}`;
  },
  meta: [
    { "http-equiv": "X-UA-Compatible", content: "IE=edge" },
    { name: "color-scheme", content: "dark light" },
    { name: "google", content: "notranslate" },
    { name: "robots", content: "index, follow, notranslate" },
    { "http-equiv": "Content-Language", content: siteConfig.lang },
    {
      name: "google-site-verification",
      content: siteConfig.verification.google,
    },
    { name: "yandex-verification", content: siteConfig.verification.yandex },
    { name: "msvalidate.01", content: siteConfig.verification.bing },
    {
      name: "viewport",
      content:
        "width=device-width, initial-scale=1, viewport-fit=cover",
    },
  ],
  link: [
    { rel: "canonical", href: () => `${siteConfig.url}${route.path}` },
    { rel: "help", href: "/llms.txt", type: "text/plain" },
    {
      rel: "alternate",
      type: "application/rss+xml",
      title: "RSS Feed",
      href: "/rss.xml",
    },
    { rel: "dns-prefetch", href: "https://www.googletagmanager.com" },
    { rel: "dns-prefetch", href: "https://www.google-analytics.com" },
    { rel: "preconnect", href: "https://www.googletagmanager.com" },
    { rel: "preconnect", href: "https://www.google-analytics.com" },
  ],
  // 🔥 ÇÖZÜM: noscript etiketi Vue Template'i yerine Head kısmına taşındı.
  // JavaScript kapalıysa animasyon sınıfları (invisible) zorla görünür yapılır.
  noscript: [
    {
      innerHTML:
        "<style>.invisible { visibility: visible !important; opacity: 1 !important; }</style>",
    },
  ],
});

// =========================================================================
// 2. GLOBAL SEO FALLBACK (ZEMİN SEO)
// =========================================================================
useSeoMeta({
  title: siteConfig.name,
  description: siteConfig.description,
  keywords: siteConfig.keywords.join(", "),
  author: siteConfig.creator,

  ogLocale: "tr_TR",
  ogType: "website",
  ogSiteName: siteConfig.name,
  ogTitle: siteConfig.name,
  ogDescription: siteConfig.description,
  ogImage: siteConfig.ogImage,
  ogImageWidth: siteConfig.ogImageWidth,
  ogImageHeight: siteConfig.ogImageHeight,
  ogUrl: () => `${siteConfig.url}${route.path}`,

  twitterCard: "summary_large_image",
  twitterSite: siteConfig.twitterHandle,
  twitterCreator: siteConfig.twitterHandle,
  twitterTitle: siteConfig.name,
  twitterDescription: siteConfig.description,
  twitterImage: siteConfig.ogImage,
});

// =========================================================================
// 3. GLOBAL SCHEMA.ORG (Yapay Zeka Ağacı)
// =========================================================================
useSchemaOrg([
  defineOrganization({
    name: siteConfig.name,
    legalName: siteConfig.name,
    logo: siteConfig.ogImage,
    url: siteConfig.url,
    sameAs: Object.values(siteConfig.links),
    contactPoint: {
      "@type": "ContactPoint",
      email: siteConfig.contactEmail,
      contactType: "Customer Support",
    },
  }),
  defineLocalBusiness({
    name: siteConfig.name,
    address: siteConfig.address,
    geo: {
      "@type": "GeoCoordinates",
      latitude: siteConfig.geo.latitude,
      longitude: siteConfig.geo.longitude,
    },
    image: siteConfig.ogImage,
  }),
  defineWebSite({
    name: siteConfig.shortName,
    url: siteConfig.url,
    inLanguage: siteConfig.lang,
  }),
]);
</script>
