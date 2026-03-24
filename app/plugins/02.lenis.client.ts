import { defineNuxtPlugin } from "#app";
import Lenis from "lenis";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useAppStore } from "~/stores/app";

export default defineNuxtPlugin((nuxtApp) => {
  const store = useAppStore(nuxtApp.$pinia as any);

  // Sadece tarayıcının native scroll hatırlamasını kapatalım (Vue Router'ı yukarıda çözdük)
  if (typeof window !== "undefined" && "scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }

  // BOT KONTROLÜ
  if (store.isBot) {
    return {
      provide: { lenis: null as Lenis | null },
    };
  }

  // GERÇEK KULLANICI
  gsap.registerPlugin(ScrollTrigger);

  const lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    orientation: "vertical",
    gestureOrientation: "vertical",
    smoothWheel: true,
    // ÇÖZÜM: Mobilde native (yerel) kaydırmaya geri dönmek için
    // syncTouch ve touchMultiplier ayarları bilerek kaldırıldı!
    // Lenis dokunmatik ekranlarda varsayılan olarak native kaydırmayı kullanacaktır.
  });

  // Lenis motoru uyandığı an onu dışarıdan değil, kendi içinden en tepeye sabitliyoruz
  lenis.scrollTo(0, { immediate: true });

  lenis.on("scroll", ScrollTrigger.update);

  gsap.ticker.add((time) => {
    lenis.raf(time * 1000);
  });

  gsap.ticker.lagSmoothing(0);

  return {
    provide: { lenis: lenis as Lenis | null },
  };
});
