<script setup lang="ts">
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Başarı Hikayeleri | Vize Acentası',
  description: 'Bizimle çalışıp zorlu vize süreçlerini aşan yüzlerce müşterimizin gerçek hikayeleri ve referansları.',
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 bg-[#0f172a] text-white">
    <div class="container mx-auto px-4">
      <div class="text-center max-w-3xl mx-auto mb-16">
        <h1 class="text-4xl lg:text-5xl font-black text-white mb-6">Başarı Hikayeleri</h1>
        <p class="text-lg text-gray-400">Her vize etiketinin arkasında bir hayal, bir kariyer ve aşılmış binlerce zorluk var. Ailemize katılan yolcularımızın gerçek deneyimleri.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div v-for="i in 6" :key="i" class="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:bg-white/10 transition-colors backdrop-blur-sm relative">
          <div class="absolute -top-6 -left-2 text-8xl text-[#f59e0b] opacity-20 font-serif">"</div>
          <p class="text-gray-300 mb-8 relative z-10 leading-relaxed italic">"Amerika vizemin ikinci reddinden sonra burayla tanıştım. DS-160 formunu yeniden doldururken sordukları detaylı sorular beni bile şaşırttı. Sonuç mu? 10 Yıllık B1/B2 ve hayallerime uçuyorum."</p>
          <div class="flex items-center gap-4 border-t border-white/10 pt-6">
            <div class="w-12 h-12 rounded-full bg-gradient-to-tr from-[#f59e0b] to-yellow-300 flex items-center justify-center font-black text-[#0f172a] shadow-inner text-lg">HY</div>
            <div>
              <div class="font-bold">Hasan Yıldırım</div>
              <div class="text-sm text-[#f59e0b] flex items-center gap-1 mt-0.5">
                <svg class="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> ABD Vizesi Onayı
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
