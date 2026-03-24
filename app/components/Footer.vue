<script setup lang="ts">
import { visaDatabase } from '~/data/visas'

const currentYear = new Date().getFullYear()

const visaLinks = Object.entries(visaDatabase).slice(0, 8).map(([slug, data]) => ({
  name: data.title,
  path: `/vizeler/${slug}`
}))

const corporateLinks = [
  { name: 'Hakkımızda', path: '/kurumsal' },
  { name: 'Vizyon & Misyon', path: '/kurumsal#vizyon-misyon' },
  { name: 'Sıkça Sorulan Sorular', path: '/#sss' },
  { name: 'Müşteri Yorumları', path: '/#yorumlar' },
  { name: 'İletişim ve Şubeler', path: '/iletisim' },
]

const legalLinks = [
  { name: 'Gizlilik ve Güvenlik', path: '/gizlilik-politikasi' },
  { name: 'Kişisel Verilerin Korunması', path: '/gizlilik-politikasi' },
  { name: 'Çerez Politikası', path: '/gizlilik-politikasi' },
  { name: 'Hizmet Sözleşmesi', path: '/gizlilik-politikasi' },
]
</script>

<template>
  <footer class="bg-[#0f172a] text-gray-300 pt-16 md:pt-24 pb-8" role="contentinfo" aria-label="Site Alt Bilgisi">
    <div class="container mx-auto px-4 md:px-6 lg:px-8">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
        
        <!-- Brand Info -->
        <div class="lg:col-span-4">
          <NuxtLink to="/" class="flex flex-col mb-6" aria-label="Ana Sayfa">
            <span class="text-3xl font-bold tracking-tight text-white mb-1">
              Champ<span class="text-[#f59e0b]">Vize</span>
            </span>
            <span class="text-xs tracking-widest font-medium uppercase text-gray-500">
              Kurumsal Danışmanlık
            </span>
          </NuxtLink>
          <p class="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm">
            Türkiye'nin öncü ve en yüksek onay oranına sahip vize danışmanlık firması. Amerika, İngiltere ve Schengen bölgeleri başta olmak üzere tüm dünya için güvenilir çözümler üretiyoruz.
          </p>
          <div class="flex items-center gap-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>

        <!-- Popüler Vizeler -->
        <div class="lg:col-span-2">
          <h3 class="text-white font-bold text-lg mb-6">Popüler Vizeler</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="link in visaLinks" :key="link.path">
              <NuxtLink :to="link.path" class="text-sm text-gray-400 inline-block">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Kurumsal -->
        <div class="lg:col-span-2">
          <h3 class="text-white font-bold text-lg mb-6">Kurumsal</h3>
          <ul class="flex flex-col gap-3">
            <li v-for="link in corporateLinks" :key="link.path">
              <NuxtLink :to="link.path" class="text-sm text-gray-400">
                {{ link.name }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- İletişim & Bülten -->
        <div class="lg:col-span-4">
          <h3 class="text-white font-bold text-lg mb-6">Bize Ulaşın</h3>
          <div class="flex flex-col gap-4 mb-8">
            <a href="tel:+9008501234567" class="flex items-start gap-3 text-sm text-gray-400 group">
              <div class="mt-0.5 text-[#f59e0b]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <strong class="block text-white mb-0.5">Müşteri Destek Hattı</strong>
                0850 123 45 67
              </div>
            </a>
            <div class="flex items-start gap-3 text-sm text-gray-400 cursor-default">
              <div class="mt-0.5 text-[#f59e0b]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
              </div>
              <div>
                <strong class="block text-white mb-0.5">Merkez Ofis</strong>
                Levent Mah. Büyükdere Cad. No:199<br>Şişli, İstanbul
              </div>
            </div>
            <a href="mailto:info@champvize.com.tr" class="flex items-start gap-3 text-sm text-gray-400 group">
              <div class="mt-0.5 text-[#f59e0b]">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              </div>
              <div>
                <strong class="block text-white mb-0.5">E-Posta</strong>
                info@champvize.com.tr
              </div>
            </a>
          </div>

          <h4 class="text-white font-semibold text-sm mb-3">Güncel Duyurular İçin Abone Olun</h4>
          <form class="flex gap-2" @submit.prevent>
            <input 
              type="email" 
              placeholder="E-posta adresiniz" 
              class="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 w-full text-sm text-white focus:outline-none focus:border-[#f59e0b] placeholder:text-gray-600"
              required
            >
            <button type="submit" aria-label="Abone Ol" class="bg-[#f59e0b] text-white px-4 py-2.5 rounded-lg">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"/><path d="M12 19V5"/></svg>
            </button>
          </form>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
        <p class="text-sm text-gray-400">
          &copy; {{ currentYear }} Champ Vize Danışmanlık. Tüm hakları saklıdır.
        </p>
        <ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-4 text-sm text-gray-400">
          <li v-for="link in legalLinks" :key="link.path">
            <NuxtLink :to="link.path" class="py-2 px-1 block">{{ link.name }}</NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>
