<script setup lang="ts">
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Blog & Güncel Vize Haberleri | Vize Acentası',
  description: 'Schengen, Amerika, İngiltere vizeleri hakkında en güncel ipuçları, haberler ve rehberler. Vize reddi çözümleri ve başvuru taktikleri.',
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 bg-gray-50">
    <div class="container mx-auto px-4">
      <h1 class="text-4xl lg:text-5xl font-black text-[#0f172a] mb-6">Blog & Güncel Rehberler</h1>
      <p class="text-lg text-gray-600 mb-12 max-w-2xl">Vize süreçlerindeki en son değişiklikler, uzman tüyoları ve adım adım başvuru rehberleri.</p>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <!-- Placeholder for actual blog posts -->
        <article v-for="i in 6" :key="i" class="bg-white rounded-[2rem] overflow-hidden group">
          <div class="h-64 bg-gray-200 relative overflow-hidden">
            <div class="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
            <div class="absolute bottom-4 left-4 z-20">
              <span class="px-3 py-1 bg-[#f59e0b] text-white text-xs font-bold rounded-full">Schengen Vizesi</span>
            </div>
          </div>
          <div class="p-8">
            <h3 class="text-xl font-bold text-[#0f172a] mb-3">Schengen Vizesi Başvuru Rehberi 2026: Adım Adım Süreç</h3>
            <p class="text-gray-600 mb-6 text-sm line-clamp-3">Avrupa turunuz için ilk adım olan Schengen vizesi başvurusunda dikkat etmeniz gereken kritik evraklar ve mülakat tüyoları.</p>
            <div class="flex items-center justify-between">
              <span class="text-sm font-bold text-gray-400">24 Mart 2026</span>
              <NuxtLink to="/blog/schengen-vizesi-rehberi-2026" class="text-[#f59e0b] font-bold text-sm">Devamını Oku &rarr;</NuxtLink>
            </div>
          </div>
        </article>
      </div>
    </div>
  </main>
</template>
