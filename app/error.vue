<template>
  <div
    class="app-wrapper min-h-screen bg-theme-bg text-theme-fg selection:bg-theme-fg selection:text-theme-bg"
  >
    <main class="page-wrapper pt-safe-top pb-safe-bottom px-page-margin">
      <section
        class="min-h-screen flex flex-col items-center justify-center text-center"
      >
        <h1
          v-reveal
          class="text-8xl md:text-9xl font-light tracking-widest mb-4"
        >
          {{ error?.statusCode || "500" }}
        </h1>

        <p v-reveal class="text-lg md:text-2xl font-light text-gray-400 mb-12">
          {{
            is404
              ? "The page you are looking for has vanished."
              : "An unexpected error occurred."
          }}
        </p>

        <button
          v-reveal
          @click="handleError"
          class="text-sm md:text-base tracking-widest uppercase border-b border-theme-fg pb-1"
        >
          Return to Home
        </button>
      </section>
    </main>
  </div>
</template>

<script setup lang="ts">
import { computed, onMounted } from "vue";
import type { NuxtError } from "#app";
import { clearError } from "#app";
import { siteConfig } from "~/utils/site";
import { useThemeTransition } from "~/composables/useThemeTransition";
// ÇÖZÜM 2: Pinia'yı SSR tarafında çağırmamak için import'u içerde kullanacağız
import { useAppStore } from "~/stores/app";

const props = defineProps({
  error: Object as () => NuxtError,
});

const is404 = computed(() => props.error?.statusCode === 404);

const { setTheme } = useThemeTransition();
setTheme("dark");

useHead({
  meta: [{ name: "theme-color", content: siteConfig.themeColors.dark }],
});

useSeoMeta({
  title: is404.value ? "404 - Page Not Found" : "500 - Server Error",
  robots: "noindex, nofollow",
});

const handleError = () => {
  clearError({ redirect: "/" });
};

onMounted(() => {
  // ÇÖZÜM 2: SSR çökmelerini önlemek için Pinia SADECE Client (Tarayıcı) tarafında tetikleniyor!
  const store = useAppStore();
  if (!store.isBot) {
    setTimeout(() => {
      store.setPreloaderDone();
    }, 100);
  } else {
    store.setPreloaderDone();
  }
});
</script>
