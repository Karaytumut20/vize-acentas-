<script setup lang="ts">
import { ref, computed, onMounted } from 'vue'
import { useRoute, useSeoMeta, useHead } from '#imports'
import { useGsap } from '~/composables/useGsap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '~/lib/gsap/SplitText.js'

const route = useRoute()
const slug = route.params.slug as string
const gsapCtx = useGsap()

import { visaDatabase } from '~/data/visas'

// Varsayılan Data (Eğer slug bulunmazsa anasayfaya veya genel bir şablona düşmesini önlemek için)
const defaultData = visaDatabase['schengen-vizesi']
const data = computed(() => visaDatabase[slug] || defaultData)

useSeoMeta({
  title: `${data.value.title} Danışmanlığı | Champ Vize`,
  description: `${data.value.title} işlemlerinizde ${data.value.processingTime} içinde, profesyonel dosya hazırlığı ve VIP randevu hizmeti.`,
  ogTitle: `${data.value.title} Başvurusu - Champ Vize`,
  ogImage: data.value.heroImage,
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Service",
        "serviceType": "Visa Application Processing",
        "provider": {
          "@type": "LocalBusiness",
          "name": "Champ Vize Danışmanlık"
        },
        "name": `${data.value.title} Danışmanlığı`,
        "description": data.value.description
      })
    }
  ]
})

const activeReqCategory = ref<number | null>(0)
const toggleReq = (index: number) => {
  activeReqCategory.value = activeReqCategory.value === index ? null : index
}

const activeFaqIndex = ref<number | null>(null)
const toggleFaq = (index: number) => {
  activeFaqIndex.value = activeFaqIndex.value === index ? null : index
}

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    
    gsapCtx.add(() => {
      const heroSplit = new SplitText('.visa-hero-content h1', { type: 'words, chars' })
      gsap.from(heroSplit.chars, {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.03,
        ease: 'power3.out'
      })
      gsap.from('.visa-hero-content p, .visa-hero-content a', {
        y: 30, opacity: 0, duration: 1, delay: 0.5, stagger: 0.1
      })
      
      gsap.utils.toArray('.slide-up').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%'
          },
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        })
      })
    })
  }
})
</script>

<template>
  <main class="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-[#f59e0b] selection:text-white pb-20">
    
    <!-- Hero Banner -->
    <section class="relative min-h-[60vh] pt-40 pb-32 flex flex-col justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <NuxtImg :src="data.heroImage" :alt="data.title" class="w-full h-full object-cover" format="webp" preload loading="eager" />
        <div class="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-transparent"></div>
      </div>

      <div class="container relative z-10 px-4 max-w-7xl mx-auto visa-hero-content">
        <div class="flex items-center gap-2 text-sm text-[#f59e0b] font-bold tracking-widest uppercase mb-6">
          <NuxtLink to="/" class="hover:text-white transition-colors">Ana Sayfa</NuxtLink>
          <span>/</span>
          <NuxtLink to="/vizeler" class="hover:text-white transition-colors">Vizeler</NuxtLink>
          <span>/</span>
          <span class="text-white">{{ data.title }}</span>
        </div>
        
        <h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight">
          {{ data.title }}
        </h1>
        <p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">
          {{ data.subtitle }}
        </p>
        
        <NuxtLink to="/iletisim" class="inline-flex items-center justify-center px-8 py-4 bg-[#f59e0b] hover:bg-white hover:text-[#0f172a] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(245,158,11,0.4)]">
          Ücretsiz Randevu Oluştur
        </NuxtLink>
      </div>
    </section>

    <!-- Content Sections -->
    <section class="container mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        
        <!-- Main Article -->
        <article class="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 slide-up">
          <h2 class="text-3xl font-black text-[#0f172a] mb-6 tracking-tight">{{ data.title }} Kapsamlı Rehberi</h2>
          <div class="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed mb-10 font-medium" v-html="data.content"></div>
          
          <div class="bg-gray-50 border-l-4 border-[#f59e0b] p-6 rounded-r-xl mb-12">
            <h3 class="text-xl font-bold text-[#0f172a] mb-3">Uzman Stratejisi</h3>
            <p class="text-gray-700 leading-relaxed text-sm">
              {{ data.howToApply }}
            </p>
          </div>

          <h3 class="text-2xl font-black text-[#0f172a] mb-6 tracking-tight" id="gerekli-evraklar">Gerekli Evraklar (Statüye Göre)</h3>
          <p class="text-gray-500 mb-6 text-sm">Konsolosluk kuralları gereği hazırlamanız gereken asgari belgeler aşağıdaki gibidir. Bize ulaştığınızda durumunuza özel tam liste iletilecektir.</p>
          
          <!-- Evraklar Accordion -->
          <div class="space-y-4 mb-12">
            <div 
              v-for="(req, index) in data.requirements" 
              :key="index"
              class="border-2 rounded-xl overflow-hidden transition-all duration-300"
              :class="activeReqCategory === index ? 'border-[#f59e0b] bg-white shadow-lg' : 'border-gray-100 bg-white hover:border-gray-200'"
            >
              <button 
                @click="toggleReq(index)"
                class="w-full text-left px-6 py-5 flex items-center justify-between font-black text-[#0f172a] focus:outline-none"
              >
                <span class="text-lg" :class="activeReqCategory === index ? 'text-[#f59e0b]' : ''">{{ req.category }}</span>
                <div 
                  class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"
                  :class="activeReqCategory === index ? 'bg-[#f59e0b]/10' : 'bg-gray-50'"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform duration-300" :class="activeReqCategory === index ? 'rotate-180 text-[#f59e0b]' : 'text-gray-400'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              
              <div 
                class="overflow-hidden transition-all duration-300 ease-in-out"
                :style="{ maxHeight: activeReqCategory === index ? '500px' : '0px', opacity: activeReqCategory === index ? 1 : 0 }"
              >
                <div class="px-6 pb-6 pt-2 border-t border-gray-50">
                  <ul class="space-y-3">
                    <li v-for="(item, i) in req.items" :key="i" class="flex items-start gap-3 text-sm text-gray-600 font-medium">
                      <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#25D366] shrink-0 mt-0.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                      {{ item }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- FAQ (Spesifik) -->
          <h3 class="text-2xl font-black text-[#0f172a] mb-6 tracking-tight">Merak Edilenler</h3>
          <div class="space-y-4 mb-12">
            <div v-for="(q, index) in data.faq" :key="index" class="bg-white border rounded-xl overflow-hidden transition-all duration-200" :class="activeFaqIndex === index ? 'border-[#f59e0b] shadow-[0_4px_20px_rgba(245,158,11,0.08)]' : 'border-gray-100 hover:border-gray-200'">
              <button @click="toggleFaq(index)" class="w-full text-left px-5 md:px-7 py-5 flex items-center justify-between font-bold focus:outline-none transition-colors" :class="activeFaqIndex === index ? 'bg-white' : 'bg-gray-50/50 hover:bg-gray-50'">
                <span class="text-[1.05rem] pr-6 leading-snug transition-colors" :class="activeFaqIndex === index ? 'text-[#f59e0b]' : 'text-[#0f172a]'">{{ q.q }}</span>
                <div class="w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300" :class="activeFaqIndex === index ? 'bg-[#f59e0b]/10' : 'bg-white shadow-sm border border-gray-100'">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300" :class="activeFaqIndex === index ? 'rotate-180 text-[#f59e0b]' : 'text-gray-400'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg>
                </div>
              </button>
              <div class="overflow-hidden transition-all duration-300 ease-in-out" :style="{ maxHeight: activeFaqIndex === index ? '500px' : '0px', opacity: activeFaqIndex === index ? 1 : 0 }">
                <div class="px-5 md:px-7 pb-6 pt-2 text-gray-600 leading-relaxed text-[0.95rem] bg-white border-t border-gray-50/80">
                  {{ q.a }}
                </div>
              </div>
            </div>
          </div>
        </article>
        
        <!-- Sidebar -->
        <aside class="lg:col-span-4 space-y-8 slide-up lg:sticky lg:top-32 lg:h-max mb-12">
          
          <!-- Info Widget -->
          <div class="bg-[#0f172a] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-white">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/20 rounded-bl-full blur-2xl"></div>
            <h3 class="text-xl font-black mb-6 text-[#f59e0b]">Hızlı Özet</h3>
            
            <div class="space-y-6 relative z-10">
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                </div>
                <div>
                  <div class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">İşlem Süresi</div>
                  <div class="font-bold text-sm">{{ data.processingTime }}</div>
                </div>
              </div>
              
              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/><path d="M8 14h.01"/><path d="M12 14h.01"/><path d="M16 14h.01"/><path d="M8 18h.01"/><path d="M12 18h.01"/><path d="M16 18h.01"/></svg>
                </div>
                <div>
                  <div class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Vize Süresi</div>
                  <div class="font-bold text-sm">{{ data.validity }}</div>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                </div>
                <div>
                  <div class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Vize Ücretleri</div>
                  <div class="font-bold text-sm">{{ data.fees }}</div>
                </div>
              </div>
            </div>
            
            <div class="mt-8 pt-8 border-t border-white/10 text-center relative z-10">
              <a href="tel:+9008501234567" class="inline-flex items-center gap-2 font-black text-2xl hover:text-[#f59e0b] transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                0850 123 45 67
              </a>
              <p class="text-xs text-gray-400 mt-2">Hemen Arayın, İşlemlere Başlayalım</p>
            </div>
          </div>

          <!-- Brochure/Support Widget -->
          <div class="bg-[#f59e0b] p-8 rounded-[2rem] shadow-xl text-center text-[#0f172a] relative overflow-hidden group">
            <div class="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div>
            <h3 class="text-2xl font-black mb-2 relative z-10">Dosyanız Hazır Mı?</h3>
            <p class="text-sm font-medium opacity-90 mb-6 relative z-10">
              Vize redlerinin %70'i eksik veya yanlış beyan edilmiş çevrilmiş belgeler sebebiyle olmaktadır. Risk almayın.
            </p>
            <NuxtLink to="/iletisim" class="inline-block bg-[#0f172a] hover:bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 relative z-10">
              Ücretsiz Kontrol Ettir
            </NuxtLink>
          </div>

          <!-- Trust/Google Reviews Widget -->
          <div class="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden text-center group">
            <div class="flex justify-center mb-4">
              <div class="flex gap-1 text-[#f59e0b]">
                <svg v-for="i in 5" :key="i" class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              </div>
            </div>
            <h3 class="text-xl font-black text-[#0f172a] mb-2">4.9/5 Memnuniyet</h3>
            <p class="text-sm text-gray-500 font-medium mb-6">Sayısız başarılı {{ data.title }} dosyası ve binlerce mutlu seyahat rotası.</p>
            <div class="p-6 rounded-2xl text-left relative bg-gray-50/80 border border-gray-100 transition-colors hover:bg-white hover:shadow-lg">
              <span class="text-6xl text-gray-200 absolute -top-4 -left-2 font-serif opacity-50">"</span>
              <p class="text-[0.95rem] text-gray-700 italic relative z-10 font-medium leading-relaxed">
                Asla alamam dedikleri redli dosyayı toparlayıp kusursuz bir İngilizce ile niyet mektubumu yazdılar. Randevuyu haftalar sürmeden erkene çektiler, süperdi!
              </p>
              <div class="mt-5 flex items-center gap-3 border-t border-gray-200 pt-4">
                <div class="w-10 h-10 bg-[#0f172a] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-inner shrink-0">A.K.</div>
                <div>
                  <div class="text-sm font-bold text-[#f59e0b] leading-tight">{{ data.title }} Onayı</div>
                  <div class="text-xs text-green-600 font-bold flex items-center gap-1 mt-1">
                    <svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" /></svg> Doğrulanmış Profil
                  </div>
                </div>
              </div>
            </div>
          </div>

        </aside>

      </div>
    </section>

  </main>
</template>
