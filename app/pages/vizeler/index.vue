<script setup lang="ts">
import { useSeoMeta, useHead } from '#imports'
import { useRouter } from 'vue-router'
import { visaDatabase } from '~/data/visas'

const router = useRouter()

const popularVisas = Object.entries(visaDatabase).map(([slug, data]) => ({
  name: data.title,
  path: `/vizeler/${slug}`,
  img: data.heroImage
}))

useSeoMeta({
  title: 'Tüm Dünya Vizeleri | Champ Global Seyahat Stratejisi',
  description: 'Amerika, Schengen ve İngiltere dahil olmak üzere sunduğumuz tüm danışmanlık hizmetlerini keşfedin.',
})
</script>

<template>
  <main class="min-h-screen bg-gray-50 flex flex-col font-sans pb-24">
    <!-- Hero Banner -->
    <section class="relative bg-[#0f172a] pt-40 pb-24 lg:pb-32 text-center">
      <div class="absolute inset-0 bg-[#f59e0b]/5"></div>
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <h1 class="text-4xl md:text-5xl font-black text-white mb-6">Tüm Vize Hizmetlerimiz</h1>
        <p class="text-lg text-gray-300 max-w-2xl mx-auto">Başvurmak istediğiniz ülkeyi seçin, ihtiyacınız olan evrak listesini ve profesyonel destek detaylarını görün.</p>
      </div>
    </section>

    <div class="container mx-auto px-4 lg:px-8 mt-16 md:mt-24">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink v-for="visa in popularVisas" :key="visa.path" :to="visa.path" class="group relative rounded-2xl overflow-hidden border border-gray-100 h-[350px] block backdrop-blur-sm transform">
          <NuxtImg :src="visa.img" :alt="visa.name" class="absolute inset-0 w-full h-full object-cover" format="webp" loading="lazy" />
          <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"></div>
          
          <div class="absolute bottom-0 left-0 right-0 p-8">
            <h2 class="text-2xl font-bold text-white mb-2">{{ visa.name }}</h2>
            <span class="inline-flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-wider">
              Detayları İncele
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </span>
          </div>
        </NuxtLink>
      </div>
    </div>
  </main>
</template>
