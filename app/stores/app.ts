import { defineStore } from "pinia";
import { useNuxtApp } from "#app";
// TypeScript'in start/stop metodlarını tanıması için Lenis tipini import ediyoruz
import type Lenis from "lenis";

export const useAppStore = defineStore("app", {
  state: () => ({
    isBot: false,
    isPreloaderDone: false,
    isTransitioning: false,
  }),
  getters: {
    isPageReady: (state) => state.isPreloaderDone && !state.isTransitioning,
  },
  actions: {
    // 1. EKSİK HALKA: Bot dedektör eklentimizin bu değeri güncelleyebilmesi için gereken tetikleyici
    setBotStatus(status: boolean) {
      this.isBot = status;
    },

    // 2. SCROLL YÖNETİMİ
    toggleScroll(status: boolean) {
      // Eğer bir botsa (Lighthouse, Googlebot), Lenis hiçbir zaman çalışmamalı
      if (this.isBot) return;

      const nuxtApp = useNuxtApp();
      // Nuxt'un $lenis değişkeninin "boş obje" değil, Lenis olduğunu belirtiyoruz
      const lenis = nuxtApp.$lenis as Lenis | null;

      if (!lenis) return;

      if (status) {
        lenis.start();
      } else {
        lenis.stop();
      }
    },

    // 3. PRELOADER YÖNETİMİ
    setPreloaderDone() {
      this.isPreloaderDone = true;
      this.toggleScroll(true); // Preloader bitince scroll'u aç
    },

    // 4. SAYFA GEÇİŞ (TRANSITION) YÖNETİMİ
    startTransition() {
      this.isTransitioning = true;
      this.toggleScroll(false); // Sayfa değişirken kaydırmayı kilitle (Sayfa ortasında kalmayı önler)
    },

    endTransition() {
      this.isTransitioning = false;

      // ÇÖZÜM: Yeni sayfa yüklendiğinde Lenis'i kesin olarak en tepeye (0 noktasına) sıfırla
      const nuxtApp = useNuxtApp();
      const lenis = nuxtApp.$lenis as Lenis | null;
      if (lenis && !this.isBot) {
        lenis.scrollTo(0, { immediate: true });
      }

      this.toggleScroll(true); // Yeni sayfa yüklenince kaydırmayı tekrar aç
    },
  },
});
