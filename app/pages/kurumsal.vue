<script setup lang="ts">
import { onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'
import { useGsap } from '~/composables/useGsap'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import SplitText from '~/lib/gsap/SplitText.js'

const gsapCtx = useGsap()

useSeoMeta({
  title: 'Kurumsal | Champ Vize Danışmanlık - Türkiye\'nin En İyi Vize Danışmanlık Merkezi',
  description: 'Schengen, Amerika ve İngiltere vizeleri başta olmak üzere, profesyonel danışmanlık hizmetlerimizle vize reddi riskini ortadan kaldırıyoruz. Hakkımızda detaylı bilgi alın.',
  ogTitle: 'Champ Vize Danışmanlık - Hakkımızda',
  ogDescription: 'Schengen, Amerika ve İngiltere vizelerinde %98 başarı oranıyla çalışan profesyonel vize danışmanlık ajansınız.',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "AboutPage",
        "name": "Hakkımızda - Champ Vize Danışmanlık",
        "url": "https://champvize.com.tr/kurumsal",
        "description": "Champ Vize Merkezi, konsolosluk işlemlerinde aracılık ve profesyonel danışmanlık hizmeti veren Türkiye'nin öncü kurumudur."
      })
    }
  ]
})

onMounted(() => {
  if (import.meta.client) {
    gsap.registerPlugin(ScrollTrigger, SplitText)
    
    gsapCtx.add(() => {
      const heroSplit = new SplitText('.kurumsal-hero h1', { type: 'words, chars' })
      gsap.from(heroSplit.chars, {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.02,
        ease: 'power3.out',
        delay: 0.2
      })
      gsap.from('.kurumsal-hero p', {
        y: 30, opacity: 0, duration: 1, delay: 0.6
      })
      
      gsap.utils.toArray('.reveal-section').forEach((elem: any) => {
        gsap.from(elem, {
          scrollTrigger: {
            trigger: elem,
            start: 'top 85%'
          },
          y: 50,
          opacity: 0,
          duration: 0.8,
          ease: 'power2.out'
        })
      })
      
      gsap.utils.toArray('.stagger-cards').forEach((grid: any) => {
        const items = grid.querySelectorAll('.stagger-item')
        gsap.from(items, {
          scrollTrigger: {
            trigger: grid,
            start: 'top 80%'
          },
          y: 40,
          opacity: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: 'power2.out'
        })
      })
    })
  }
})

const whyUsFeatures = [
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/><path d="m9 15 2 2 4-4"/></svg>',
    title: 'Eksiksiz Belge Hazırlığı',
    desc: 'Küçük bir hata bile vize reddine neden olabilir. Konsoloslukların güncel taleplerini yakından takip ediyor, belgelerinizin eksiksiz ve hatasız olmasını sağlayarak red riskini büyük oranda azaltıyoruz.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
    title: 'Hızlı ve VIP Randevu Yönetimi',
    desc: 'Randevu bulmanın aylar sürdüğü popüler ülkeler için özel sistemlerimizle boşlukları ilk biz yakalıyor, seyahat planınız aksamadan VIP randevu desteği veriyoruz.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    title: 'Güvenilirlik ve Şeffaflık',
    desc: 'Champ Vize olarak konsolosluk işlemlerindeki aracılığımızı şeffaf yürütüyoruz. Yapılamayacak işlere söz vermiyor, durumu kritik olan başvuruları önceden tespit ederek strateji geliştiriyoruz.'
  },
  {
    icon: '<svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
    title: 'Kişiye Özel Analiz',
    desc: 'Her müşterinin ekonomik tablosu ve seyahat geçmişi farklıdır. Standart listeler vermek yerine profilinizi analiz ediyor, konsolosu ikna edecek özel bir dosya yapısı oluşturuyoruz.'
  }
]
</script>

<template>
  <main class="min-h-screen bg-gray-50 flex flex-col font-sans">
    
    <!-- Hero Banner -->
    <section class="relative bg-[#0f172a] pt-32 pb-20 lg:pb-32 overflow-hidden kurumsal-hero">
      <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1572013898687-0b1981cd1b00?auto=format&fit=crop&q=80&w=2000')] bg-cover bg-center opacity-10"></div>
      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10 text-center max-w-4xl">
        <span class="text-[#f59e0b] font-bold tracking-widest uppercase text-sm mb-4 block">Hakkımızda</span>
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tight">Vize Danışmanlığında Türkiye'nin Lider Kurumu: <span class="text-[#f59e0b]">Champ Vize</span></h1>
        <p class="text-xl text-gray-300 font-light leading-relaxed">
          Uluslararası seyahatlerin önündeki bürokratik engelleri yıkıyor; profesyonel ekibimiz ve yenilikçi altyapımızla 15 yılı aşkın süredir hayallerinize giden yolda size rehberlik ediyoruz.
        </p>
      </div>
    </section>

    <!-- Biz Kimiz Section -->
    <section class="py-20 lg:py-32 reveal-section">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div class="relative rounded-3xl overflow-hidden shadow-2xl h-[500px] group">
            <NuxtImg src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80&w=1200" alt="Champ Vize Ekibi" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" format="webp" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a]/80 via-[#0f172a]/20 to-transparent"></div>
            <div class="absolute bottom-8 left-8 right-8">
              <div class="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20">
                <span class="text-4xl font-black text-[#f59e0b] block mb-1">15+ Yıl</span>
                <span class="text-white font-medium text-lg">Sektörde aralıksız güvenilir hizmet.</span>
              </div>
            </div>
          </div>
          
          <div class="space-y-6 text-gray-600 leading-relaxed text-lg">
            <h2 class="text-3xl md:text-4xl font-black text-[#0f172a] mb-6 tracking-tight">Kusursuz Hizmet Anlayışı</h2>
            <p>
              <strong>Champ Vize Danışmanlık</strong>, karmaşıklaşan vize prosedürlerini bireyler ve kurumlar için en basit, anlaşılır ve güvenli hale getirmek amacıyla kurulmuştur. Başvurunun ilk aşamasından, pasaportunuzun elinize ulaştığı son ana kadar sürecin her detayını büyük bir titizlikle yönetiriz.
            </p>
            <p>
              Konsolosluklar doğrudan herhangi bir vize danışmanı atamasa da, yetkilendirdikleri aracı kurumlara evrak hazırlamanın tüm detaylarını en ince ayrıntısına kadar biliriz. Tıpkı saygın ve bilinen diğer vize merkezleri gibi, biz de müşterilerimizin zaman ve para kaybını önlemeyi temel prensibimiz sayıyoruz. 
            </p>
            <p>
              Küçük bir çeviri hatasının veya yanlış beyanın vize reddine ve sicilinizin bozulmasına sebep olduğu bu süreçte; Ankara, İstanbul ve İzmir'deki güçlü operasyon ağımızla her daim yanınızdayız.
            </p>
            <div class="pt-6 border-t border-gray-200 flex items-center gap-6">
              <div class="flex items-center gap-2 font-bold text-[#0f172a] text-xl">
                <span class="w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center text-2xl">✓</span>
                Şeffaflık
              </div>
              <div class="flex items-center gap-2 font-bold text-[#0f172a] text-xl">
                <span class="w-12 h-12 rounded-full bg-[#f59e0b] text-white flex items-center justify-center text-2xl">✓</span>
                Güvenilirlik
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Neden Biz / Avantajlarımız -->
    <section class="py-20 lg:py-32 bg-white reveal-section">
      <div class="container mx-auto px-4 md:px-6 lg:px-8 text-center max-w-3xl mb-16">
        <h2 class="text-3xl md:text-4xl font-black text-[#0f172a] mb-6 tracking-tight" id="neden-biz">Neden Bizi Tercih Etmelisiniz?</h2>
        <p class="text-lg text-gray-600">
          Vize başvuru sürecinin stresiyle baş başa kalmayın. Rakiplerimizin uyguladığı standart formüllere karşın, Champ Vize size tamamen size özel analizlerle yaklaşır.
        </p>
      </div>

      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 stagger-cards">
          <div v-for="(feature, index) in whyUsFeatures" :key="index" class="stagger-item p-8 rounded-3xl bg-gray-50 border border-gray-100 hover:border-[#f59e0b]/30 hover:shadow-xl transition-all duration-300 group">
            <div class="w-16 h-16 rounded-2xl bg-[#0f172a] text-[#f59e0b] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg" v-html="feature.icon"></div>
            <h3 class="text-xl font-bold text-[#0f172a] mb-4">{{ feature.title }}</h3>
            <p class="text-gray-600 leading-relaxed text-sm">{{ feature.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Misyon & Vizyon -->
    <section class="py-20 lg:py-32 bg-[#0f172a] text-white reveal-section" id="vizyon-misyon">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div class="p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
            <div class="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/20 rounded-bl-full blur-2xl group-hover:bg-[#f59e0b]/40 transition-colors"></div>
            <h3 class="text-3xl font-black mb-6 text-[#f59e0b] tracking-tight">Misyonumuz</h3>
            <p class="text-gray-300 text-lg leading-relaxed font-light relative z-10">
              Uluslararası dolaşım özgürlüğünüzü güvence altına alarak, seyahat planlarınızın bürokratik engellere takılmasını önlemek. Müşterilerimiz için karmaşık, yorucu ve stresli olan konsolosluk işlemlerini; profesyonel ekibimiz ve online altyapımızla hızlı, hatasız ve konforlu bir deneyime dönüştürmek için aralıksız çalışıyoruz.
            </p>
          </div>
          <div class="p-10 md:p-14 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-sm relative overflow-hidden group hover:bg-white/10 transition-colors">
            <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-bl-full blur-2xl group-hover:bg-blue-500/40 transition-colors"></div>
            <h3 class="text-3xl font-black mb-6 text-[#f59e0b] tracking-tight">Vizyonumuz</h3>
            <p class="text-gray-300 text-lg leading-relaxed font-light relative z-10">
              Türkiye'de vize danışmanlığı sektörünü teknoloji ile birleştirip "Online Vize Merkezi" kavramını standartlaştırmak. Yalnızca bireysel yolculara değil, kurumsal firmalara, seyahat acentelerine ve holdinglere %100 memnuniyet garantili, Türkiye'nin en inovatif ve en güvenilor kurumsal vize departmanı olmak.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to action -->
    <section class="py-20 bg-[#f59e0b] text-white text-center reveal-section relative overflow-hidden">
      <!-- Decor -->
      <div class="absolute -right-20 -top-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
      <div class="absolute -left-20 -bottom-40 w-96 h-96 bg-black/10 rounded-full blur-3xl"></div>
      
      <div class="container mx-auto px-4 relative z-10">
        <h2 class="text-3xl md:text-5xl font-black mb-6 tracking-tight text-[#0f172a]">Champ Vize ile Uçuşa Hazır mısınız?</h2>
        <p class="text-xl opacity-90 mb-10 max-w-2xl mx-auto font-medium text-[#0f172a]/80">
          Güvenilir ellerde, stres yaşamadan vizenizi alın. Ücretsiz dosya analizi ve randevu takvimi kontrolü için hemen iletişime geçin.
        </p>
        <NuxtLink to="/iletisim" class="inline-block bg-[#0f172a] hover:bg-black text-white px-10 py-5 rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-2xl">
          Uzmanımızla Görüşün
        </NuxtLink>
      </div>
    </section>
  </main>
</template>
