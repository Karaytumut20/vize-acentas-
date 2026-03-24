import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin((nuxtApp) => {
  // Sadece sunucu (SSR) tarafında çalışacak 'kalkan' direktifimiz
  nuxtApp.vueApp.directive("reveal", {
    getSSRProps() {
      return {
        // Sunucu HTML'i çizerken elementleri baştan "invisible" yapar.
        // Bu sayede sayfa tarayıcıya inip GSAP devreye girene kadar ekranda
        // çirkin bir stil sıçraması (FOUC - Flash of Unstyled Content) olmaz.
        class: "invisible",
        // ÇÖZÜM: Vue'nun "Hydration class mismatch" hatası fırlatmasını engeller.
        // Vue'ya, "Merak etme, bu class'ı bilerek sunucuda ekledim" deriz.
        "data-allow-mismatch": "class",
      };
    },
  });
});
