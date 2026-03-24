<template>
  <div
    v-if="isVisible"
    class="pointer-events-none fixed inset-0 z-[99999] px-page-margin"
  >
    <div
      class="grid h-full w-full mx-auto grid-cols-6 md:grid-cols-12 gap-grid-gutter"
    >
      <div
        v-for="i in 12"
        :key="i"
        class="h-full w-full bg-[#ff0000]/10"
        :class="i > 6 ? 'hidden md:block' : 'block'"
      ></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const isVisible = ref(false);

const handleKeydown = (e: KeyboardEvent) => {
  // Kullanıcı bir input veya textarea içindeyken "G" yazarsa ızgaranın açılmasını engeller
  const activeEl = document.activeElement?.tagName;
  if (activeEl === "INPUT" || activeEl === "TEXTAREA") return;

  // Shift + G kombinasyonu
  if (e.shiftKey && (e.code === "KeyG" || e.key === "g" || e.key === "G")) {
    e.preventDefault();
    isVisible.value = !isVisible.value;
  }
};

// onMounted zaten sadece tarayıcıda (Client) çalışır, yine de ekstra güvenlik sağladık
onMounted(() => {
  window.addEventListener("keydown", handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", handleKeydown);
});
</script>
