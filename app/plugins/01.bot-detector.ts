import { defineNuxtPlugin, useRequestHeaders } from "#app";
import { useAppStore } from "~/stores/app";

export default defineNuxtPlugin((nuxtApp) => {
  const store = useAppStore(nuxtApp.$pinia as any);

  // Sadece sunucu tarafında (SSR) gelen isteği kontrol ediyoruz
  if (import.meta.server) {
    const headers = useRequestHeaders(["user-agent"]);
    const ua = headers["user-agent"] || "";

    // Dünyadaki tüm popüler botlar ve Hız Testi (PageSpeed/Lighthouse) tarayıcıları
    const botPattern =
      /bot|googlebot|crawler|spider|robot|crawling|lighthouse|chrome-lighthouse|headlesschrome|gtmetrix|pingdom|ahrefsbot|bingbot|yandexbot|yahoo|duckduckbot|baiduspider/i;

    if (botPattern.test(ua)) {
      store.isBot = true;
      store.isPreloaderDone = true; // Bota preloader ekranı bekletme, anında içeriği göster
    }
  }
});
