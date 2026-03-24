<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { visaDatabase } from '~/data/visas'

const route = useRoute()
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)
const isServicesOpen = ref(false)
const isMobileServicesOpen = ref(false)

const handleScroll = () => {
  isScrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

const servicesLinks = Object.entries(visaDatabase).map(([slug, data]) => ({
  name: data.title,
  desc: data.subtitle.length > 35 ? data.subtitle.substring(0, 32) + '...' : data.subtitle,
  path: `/vizeler/${slug}`
}))
</script>

<template>
  <header
    :class="[ 'fixed top-0 left-0 right-0 z-50 ', isScrolled ? 'bg-white py-3' : 'bg-transparent py-5' ]"
    role="banner"
  >
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="flex items-center justify-between">
        
        <!-- Logo -->
        <NuxtLink to="/" class="flex flex-col relative z-20 group" aria-label="Ana Sayfa">
          <span :class="[ 'text-2xl md:text-3xl font-bold tracking-tight ', isScrolled || isMobileMenuOpen ? 'text-[#0f172a]' : 'text-white' ]">
            Champ<span class="text-[#f59e0b]">Vize</span>
          </span>
          <span :class="[ 'text-[0.65rem] tracking-widest font-medium uppercase mt-0.5 ', isScrolled || isMobileMenuOpen ? 'text-gray-500' : 'text-gray-200' ]">
            Kurumsal Danışmanlık
          </span>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden lg:flex items-center gap-8" role="navigation" aria-label="Ana Menü">
          <NuxtLink to="/" :class="['font-medium ', isScrolled ? 'text-gray-800' : 'text-white']">Ana Sayfa</NuxtLink>
          <NuxtLink to="/kurumsal" :class="['font-medium ', isScrolled ? 'text-gray-800' : 'text-white']">Kurumsal</NuxtLink>
          
          <!-- Mega Menu Dropdown -->
          <div 
            class="relative group" 
            @mouseenter="isServicesOpen = true" 
            @mouseleave="isServicesOpen = false"
          >
            <button 
              :class="['flex items-center gap-1 font-medium ', isScrolled ? 'text-gray-800' : 'text-white']"
              aria-haspopup="true"
              :aria-expanded="isServicesOpen"
            >
              Vizeler
              <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
            </button>
            
            <div 
              class="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[800px] opacity-0 invisible origin-top"
            >
              <div class="bg-white rounded-2xl p-8 border border-gray-100 grid grid-cols-3 gap-6 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white">
                <NuxtLink 
                  v-for="visa in servicesLinks" 
                  :key="visa.path" 
                  :to="visa.path" 
                  class="group/item flex flex-col p-3 rounded-lg"
                >
                  <span class="text-gray-900 font-semibold mb-1 group-hover/item:text-[#f59e0b]">{{ visa.name }}</span>
                  <span class="text-xs text-gray-500 leading-relaxed">{{ visa.desc }}</span>
                </NuxtLink>
                
                <div class="col-span-3 pt-6 mt-4 border-t border-gray-100 flex justify-center">
                  <NuxtLink to="/vizeler" class="text-sm font-bold text-[#1e293b] inline-flex items-center gap-2">
                    Tüm Vize Hizmetlerini Görüntüle
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </NuxtLink>
                </div>
              </div>
            </div>
          </div>

          <NuxtLink to="/iletisim" :class="['font-medium ', isScrolled ? 'text-gray-800' : 'text-white']">İletişim</NuxtLink>
        </nav>

        <!-- CTAs Desktop -->
        <div class="hidden lg:flex items-center gap-4 relative z-20">
          <a href="tel:+9008501234567" :class="['flex items-center gap-2 font-semibold text-sm', isScrolled ? 'text-[#0f172a]' : 'text-white']" aria-label="Müşteri Hizmetlerini Ara">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            0850 123 45 67
          </a>
          <NuxtLink to="/iletisim" class="bg-[#f59e0b] text-[#0f172a] px-6 py-2.5 rounded-full font-semibold transform">
            Hemen Başvur
          </NuxtLink>
        </div>

        <!-- Mobile Menu Toggle -->
        <button 
          @click="isMobileMenuOpen = !isMobileMenuOpen" 
          class="lg:hidden relative z-20 p-2 text-2xl"
          :class="isScrolled || isMobileMenuOpen ? 'text-gray-900' : 'text-white'"
          :aria-expanded="isMobileMenuOpen"
          aria-label="Mobil Menüyü Aç/Kapat"
        >
          <svg v-if="!isMobileMenuOpen" xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/></svg>
          <svg v-else xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
        </button>
      </div>
    </div>

    <!-- Mobile Navigation Overlay -->
    <div 
      class="fixed inset-0 bg-white z-10 lg:hidden max-h-screen overflow-y-auto"
      :class="isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'"
    >
      <div class="pt-24 px-6 pb-12 flex flex-col h-full">
        <nav class="flex flex-col gap-6 text-xl font-medium text-[#0f172a]" role="navigation" aria-label="Mobil Menü">
          <NuxtLink to="/" @click="isMobileMenuOpen = false" class="border-b border-gray-100 pb-4">Ana Sayfa</NuxtLink>
          <NuxtLink to="/kurumsal" @click="isMobileMenuOpen = false" class="border-b border-gray-100 pb-4">Kurumsal</NuxtLink>
          
          <div class="flex flex-col gap-4 border-b border-gray-100 pb-4">
            <span class="text-gray-400 text-sm uppercase tracking-wider font-bold">Vize Kategorileri</span>
            <NuxtLink 
              v-for="visa in servicesLinks" 
              :key="visa.path" 
              :to="visa.path" 
              @click="isMobileMenuOpen = false" 
              class="pl-4 text-base font-medium text-gray-700"
            >
              {{ visa.name }}
            </NuxtLink>
            <NuxtLink to="/vizeler" @click="isMobileMenuOpen = false" class="pl-4 text-sm font-semibold text-[#f59e0b] mt-2">
              Tüm Vizeler &rarr;
            </NuxtLink>
          </div>
          
          <NuxtLink to="/iletisim" @click="isMobileMenuOpen = false" class="border-b border-gray-100 pb-4">İletişim</NuxtLink>
        </nav>
        
        <div class="mt-auto pt-8 flex flex-col gap-4">
          <a href="tel:+9008501234567" class="flex items-center justify-center gap-2 bg-gray-50 text-[#0f172a] py-3 rounded-lg font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            0850 123 45 67
          </a>
          <NuxtLink to="/iletisim" @click="isMobileMenuOpen = false" class="bg-[#f59e0b] text-[#0f172a] text-center py-3 rounded-lg font-bold">
            Hemen Başvur
          </NuxtLink>
        </div>
      </div>
    </div>
  </header>
</template>
