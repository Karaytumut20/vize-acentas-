<script setup lang="ts">
import { onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { useGsap } from '~/composables/useGsap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const gsapCtx = useGsap()

useSeoMeta({
  title: 'İletişim | Champ Vize Danışmanlık - Bize Ulaşın',
  description: 'Türkiye\'nin Lider Vize Danışmanlık firması Champ Vize ile iletişime geçin. İstanbul, Ankara ve İzmir şubelerimiz, +90 850 123 45 67 müşteri hizmetleri.',
  ogTitle: 'Champ Vize Danışmanlık - İletişim',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "ContactPage",
        "name": "İletişim - Champ Vize Danışmanlık",
        "url": "https://champvize.com.tr/iletisim",
        "mainEntity": {
          "@type": "Organization",
          "name": "Champ Vize Danışmanlık",
          "telephone": "+90-850-123-4567",
          "email": "info@champvize.com.tr"
        }
      })
    }
  ]
})

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger)
    
    gsapCtx.add(() => {
      gsap.from('.contact-hero', {
        y: 40,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        delay: 0.1
      })
      
      gsap.from('.form-block', {
        x: -40,
        opacity: 0,
        duration: 0.8,
        delay: 0.4,
        ease: 'power2.out'
      })
      
      gsap.from('.info-block', {
        x: 40,
        opacity: 0,
        duration: 0.8,
        delay: 0.5,
        ease: 'power2.out'
      })
    })
  }
})

const branches = [
  {
    city: 'İstanbul Merkez Ofis',
    address: 'Levent Mah. Büyükdere Cad. No:199 Kanyon Ofis Şişli/İstanbul',
    phone: '0212 123 45 67'
  },
  {
    city: 'Ankara Şube',
    address: 'Kavaklıdere Mah. Tunalı Hilmi Cad. No:99 Çankaya/Ankara',
    phone: '0312 123 45 67'
  },
  {
    city: 'İzmir Şube',
    address: 'Alsancak Mah. Kıbrıs Şehitleri Cad. No:50 Konak/İzmir',
    phone: '0232 123 45 67'
  }
]
</script>

<template>
  <main class="min-h-screen bg-gray-50 flex flex-col font-sans pb-20">
    
    <!-- Hero Banner -->
    <section class="relative bg-[#0f172a] pt-32 pb-16 lg:pb-24 text-center contact-hero shadow-lg">
      <div class="absolute inset-0 bg-[#f59e0b]/5"></div>
      <div class="container mx-auto px-4 md:px-6 relative z-10">
        <h1 class="text-4xl md:text-5xl lg:text-5xl font-black text-white mb-4 tracking-tight">Bize Ulaşın</h1>
        <p class="text-xl text-gray-400 font-light max-w-2xl mx-auto">
          Champ Vize Danışmanlık olarak vizyon sıfır red, misyon mutlu seyahat. İstek, şikayet ve yeni başvurularınız için hızla yanıt veriyoruz.
        </p>
      </div>
    </section>

    <!-- Content Section -->
    <section class="container mx-auto px-4 md:px-6 lg:px-8 mt-16">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <!-- Contact Form -->
        <div class="lg:col-span-7 form-block bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100">
          <h2 class="text-3xl font-black text-[#0f172a] mb-2 tracking-tight">Vizenizi Hemen Başlatalım</h2>
          <p class="text-gray-500 mb-8 font-medium">Uzmanlarımız mesai saatleri içerisinde (09:00 - 18:00) 15 dakika içinde geri dönüş yapar.</p>
          
          <form class="space-y-6" @submit.prevent>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Adınız Soyadınız</label>
                <input type="text" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all font-medium" placeholder="Örn: Ahmet Yılmaz" required>
              </div>
              <div class="space-y-2">
                <label class="text-sm font-bold text-gray-700">Telefon Numaranız</label>
                <input type="tel" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all font-medium" placeholder="0555 555 55 55" required>
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">E-Posta Adresiniz</label>
              <input type="email" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all font-medium" placeholder="ornek@mail.com" required>
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Gitmek İstediğiniz Ülke</label>
              <select class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all font-medium text-gray-700" required>
                <option value="" disabled selected>Ülke Seçin</option>
                <option value="Schengen">Schengen Alanı (Avrupa)</option>
                <option value="ABD">Amerika Birleşik Devletleri</option>
                <option value="Ingiltere">İngiltere (Birleşik Krallık)</option>
                <option value="Kanada">Kanada</option>
                <option value="Diger">Diğer</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="text-sm font-bold text-gray-700">Mesajınız (Opsiyonel)</label>
              <textarea rows="4" class="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 transition-all font-medium resize-none" placeholder="Vize geçmişiniz, seyahat amacınız vb. eklemek istedikleriniz..."></textarea>
            </div>
            
            <button type="submit" class="w-full bg-[#f59e0b] hover:bg-[#d97706] text-white py-4 rounded-xl font-bold text-lg transition-all shadow-[0_5px_15px_rgba(245,158,11,0.3)] hover:shadow-[0_8px_25px_rgba(245,158,11,0.4)] transform hover:-translate-y-1">
              Ücretsiz Randevu ve Analiz Talebi Oluştur
            </button>
            <p class="text-xs text-center text-gray-400 mt-4 leading-relaxed">
              * Bu formu doldurarak Kişisel Verilerin Korunması şartlarını kabul etmiş sayılırsınız. Bilgileriniz 3. şahıslarla paylaşılmaz.
            </p>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="lg:col-span-5 info-block space-y-8">
          
          <div class="bg-[#0f172a] text-white p-8 md:p-10 rounded-[2rem] relative overflow-hidden shadow-2xl">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/20 rounded-bl-full blur-2xl"></div>
            <h3 class="text-2xl font-black mb-6 text-[#f59e0b]">Çağrı Merkezi</h3>
            <p class="text-gray-300 font-medium mb-8 text-sm">Türkiye'nin her yerinden bize anında ulaşabilir, ücretsiz vize değerlendirmesi talep edebilirsiniz.</p>
            
            <a href="tel:+9008501234567" class="flex items-center gap-4 group">
              <div class="w-14 h-14 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-[#f59e0b] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              </div>
              <div>
                <span class="block text-xs text-gray-400 font-bold uppercase tracking-wider">Hızlı Destek Hattı</span>
                <span class="text-2xl font-black text-white group-hover:text-[#f59e0b] transition-colors">0850 123 45 67</span>
              </div>
            </a>
            
            <a href="https://wa.me/905551234567" target="_blank" class="flex items-center gap-4 group mt-6">
              <div class="w-14 h-14 bg-[#25D366]/20 text-[#25D366] rounded-full flex items-center justify-center group-hover:bg-[#25D366] group-hover:text-white transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>
              </div>
              <div>
                <span class="block text-xs text-green-400 font-bold uppercase tracking-wider">WhatsApp Canlı Destek</span>
                <span class="text-xl font-black text-white group-hover:text-[#25D366] transition-colors">Mesaj Gönder</span>
              </div>
            </a>
          </div>

          <!-- Ofisler -->
          <div class="bg-white p-8 rounded-[2rem] shadow-[0_10px_30px_rgba(0,0,0,0.03)] border border-gray-100">
            <h3 class="text-2xl font-black mb-6 text-[#0f172a] tracking-tight">Şubelerimiz</h3>
            
            <div class="space-y-6">
              <div v-for="(branch, index) in branches" :key="index" class="pb-6 border-b border-gray-100 last:border-0 last:pb-0">
                <h4 class="font-bold text-lg text-[#0f172a] mb-2 flex items-center gap-2">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  {{ branch.city }}
                </h4>
                <p class="text-sm text-gray-500 mb-2 leading-relaxed ml-7">{{ branch.address }}</p>
                <a :href="`tel:${branch.phone.replace(/\s+/g, '')}`" class="text-sm font-bold text-[#f59e0b] ml-7 hover:underline">{{ branch.phone }}</a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>
