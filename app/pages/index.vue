<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useSeoMeta, useHead } from '#imports'

useSeoMeta({
  title: 'Champ Vize - Türkiye\'nin En Güvenilir Vize Danışmanlık Şirketi',
  description: 'Amerika, Schengen, İngiltere ve Kanada vizesi başvurularınızda uzman danışmanlık hizmeti. %98 başarı oranıyla vizenizi hemen alın.',
  ogTitle: 'Champ Vize Danışmanlık - %98 Onay Oranı',
  ogDescription: 'Amerika, Schengen, İngiltere ve Kanada vizesi başvurularınızda uzman danışmanlık hizmeti.',
  ogImage: 'https://Champvize.com.tr/og-image.jpg',
  twitterCard: 'summary_large_image',
})

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Organization",
            "name": "Champ Vize Danışmanlık",
            "url": "https://Champvize.com.tr",
            "logo": "https://Champvize.com.tr/logo.png",
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+90-850-123-4567",
              "contactType": "customer service"
            }
          },
          {
            "@type": "LocalBusiness",
            "name": "Champ Vize Danışmanlık Şişli",
            "image": "https://Champvize.com.tr/office.jpg",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Levent Mah. Büyükdere Cad. No:199",
              "addressLocality": "Şişli",
              "addressRegion": "İstanbul",
              "postalCode": "34394",
              "addressCountry": "TR"
            },
            "telephone": "+90-850-123-4567",
            "priceRange": "$$"
          },
          {
            "@type": "FAQPage",
            "mainEntity": [
              {
                "@type": "Question",
                "name": "Vize başvurusu kaç gün sürer?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Ülkeye ve başvuru türüne göre değişiklik göstermekle birlikte, ortalama 15-30 gün içinde sonuçlanmaktadır."
                }
              },
              {
                "@type": "Question",
                "name": "Schengen vizesi için hesapta ne kadar para olmalı?",
                "acceptedAnswer": {
                  "@type": "Answer",
                  "text": "Gideceğiniz ülke ve kalınacak gün sayısına göre değişir ancak günlük minimum 100-150 Euro karşılığı bakiye önerilir."
                }
              }
            ]
          }
        ]
      })
    }
  ]
})



const activeFaq = ref<number | null>(null)
const toggleFaq = (index: number) => {
  activeFaq.value = activeFaq.value === index ? null : index
}

const faqs = [
  { q: "Vize işlemleri ortalama ne kadar sürer?", a: "Başvurulan ülkeye ve konsolosluk yoğunluğuna göre değişmekle birlikte, Schengen vizeleri ortalama 15-20 gün, ABD vizeleri ise randevu tarihinden itibaren 3-5 iş günü içerisinde sonuçlanmaktadır." },
  { q: "Danışmanlık hizmetinize neler dahil?", a: "Evraklarınızın incelenmesi, eksiksiz dosya hazırlığı, online formların doldurulması, randevu alımı, seyahat sağlık sigortası, uçak/otel rezervasyonları ve mülakat provası hizmetlerimize dahildir." },
  { q: "Vize reddi alırsam ücret iadesi yapıyor musunuz?", a: "Vize kararı tamamen konsoloslukların inisiyatifindedir. Ancak uzman kadromuz, dosyanızı riske atacak en ufak bir pürüzde bile sizi uyarır. Red garantisi verilemez, ancak %98 onay oranımızla çalışıyoruz." },
  { q: "Öğrenci vizeleri için yaş sınırı var mı?", a: "Öğrenci vizelerinde genel bir yaş sınırı bulunmaz, ancak niyet mektubunda eğitim amacının inandırıcı ve net bir şekilde belirtilmesi gerekir. Danışmanlarımız niyet mektubu yazımında size tam destek sağlamaktadır." }
]

const services = [
  { title: 'Schengen Vizesi', image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&q=80&w=800', desc: 'Fransa, Almanya, İtalya ve 24 Avrupa ülkesine sorunsuz giriş yapın.', path: '/vizeler/schengen-vizesi' },
  { title: 'Amerika Vizesi', image: 'https://images.unsplash.com/photo-1485738422979-f5c462d49f74?auto=format&fit=crop&q=80&w=800', desc: '10 yıllık B1/B2 turist vizesi veya F1 öğrenci vizeleri için profesyonel destek.', path: '/vizeler/amerika-vizesi' },
  { title: 'İngiltere Vizesi', image: 'https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&q=80&w=800', desc: '6 aylık standart turist vizesinden, uzun süreli ticari vizelere kadar yanınızdayız.', path: '/vizeler/ingiltere-vizesi' },
  { title: 'Kanada Vizesi', image: 'https://images.unsplash.com/photo-1503614472-8c93d56e92ce?auto=format&fit=crop&q=80&w=800', desc: 'Öğrenim, çalışma veya turistik seyahatlerinizde Kanada rüyanızı ertelemeyin.', path: '/vizeler/kanada-vizesi' }
]

const testimonials = [
  { name: 'Ayşe Yılmaz', role: 'Öğrenci (Kanada F1 Vizesi)', text: '"Daha önce 2 kez red aldığım Kanada vizemi, Champ Vize ekibinin titiz çalışması sayesinde tek seferde onaylattım. Kesinlikle tavsiye ediyorum!"', rating: 5 },
  { name: 'Mehmet Demir', role: 'İş İnsanı (Schengen Vizesi)', text: '"Ticari vizelerimde sürekli zaman kaybediyordum. Champ Vize ile evrakları yolluyorum, gerisini onlar hallediyor. Zaman benim için nakit, çok teşekkürler."', rating: 5 },
  { name: 'Zeynep & Burak', role: 'Turist (ABD B1/B2 Vizesi)', text: '"Mülakat provası yapmamız o kadar işe yaradı ki, konsolosun sorduğu tüm sorulara hazırlıklıydık. 10 yıllık vizemizi aldık!"', rating: 5 }
]
</script>

<template>
  <main class="min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-[#f59e0b] selection:text-white">
    
    <!-- Hero Section -->
    <section class="relative min-h-[100svh] pt-32 pb-32 flex flex-col justify-center overflow-hidden">
      <!-- Background Image -->
      <div class="absolute inset-0 z-0">
        <NuxtImg src="https://images.unsplash.com/photo-1542296332-2e4473faf563?auto=format&fit=crop&q=80&w=2500" alt="Vize Danışmanlık ve Seyahat" class="w-full h-full object-cover" format="webp" preload fetchpriority="high" />
        <div class="absolute inset-0 bg-gradient-to-b from-[#0f172a]/90 via-[#0f172a]/70 to-[#0f172a]/95 backdrop-blur-[2px]"></div>
      </div>

      <div class="container relative z-10 px-4 mt-8 md:mt-12 text-center max-w-5xl mx-auto flex-1 flex flex-col justify-center">
        <span class="hero-subtitle inline-block py-1.5 px-5 rounded-full bg-white/10 border border-white/20 text-[#f59e0b] text-xs font-bold tracking-widest uppercase mb-8 backdrop-blur-md shadow-xl">
          Türkiye'nin 1 Numaralı Vize Merkezi
        </span>
        <h1 class="hero-title text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white leading-[1.1] mb-8 overflow-hidden">
          <span class="block">Dünyanın Kapılarını</span>
          <span class="block mt-2 text-transparent bg-clip-text bg-gradient-to-r from-[#f59e0b] to-amber-300">Güvenle Aralayın</span>
        </h1>
        <p class="hero-subtitle text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto font-medium leading-relaxed">
          Kusursuz dosya hazırlığı, %98 onay oranı ve kişisel stratejilerimiz ile vize süreçlerinizdeki stres ve belirsizliğe son veriyoruz.
        </p>
        
        <div class="hero-cta flex flex-col items-center justify-center gap-6 mb-16 w-full max-w-2xl mx-auto">
          <!-- Quick Search Bar -->
          <div class="relative w-full group">
            <div class="absolute -inset-1 bg-gradient-to-r from-[#f59e0b] to-amber-300 rounded-full blur opacity-25 group-hover:opacity-50 transition duration-500"></div>
            <div class="relative w-full">
              <input type="text" placeholder="Hangi vizeyi arıyorsunuz? (Örn: Schengen, Amerika...)" class="w-full bg-[#0f172a]/60 border border-white/20 backdrop-blur-xl text-white placeholder-gray-400 px-8 py-5 rounded-full outline-none focus:bg-[#0f172a]/80 focus:border-[#f59e0b] transition-all text-[15px] sm:text-lg shadow-sm">
              <button aria-label="Arama Yap" class="absolute right-2 top-2 bottom-2 bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] px-6 sm:px-8 rounded-full font-bold transition-all flex items-center gap-2 shadow-sm">
                <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 hidden sm:block" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
                Vize Bul
              </button>
            </div>
          </div>

          <div class="flex flex-col sm:flex-row items-center justify-center gap-4 w-full mt-4">
            <NuxtLink aria-label="Ücretsiz Analiz Formuna Git" to="/iletisim" class="px-8 py-4 bg-white hover:bg-gray-100 text-[#0f172a] rounded-full font-bold transition-all shadow-sm w-full sm:w-auto relative group overflow-hidden">
              <span class="relative z-10">Ücretsiz Analiz Alın</span>
            </NuxtLink>
            <a href="tel:+9008501234567" class="px-8 py-4 bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white rounded-full font-bold transition-colors w-full sm:w-auto flex items-center justify-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-[#f59e0b]" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              0850 123 45 67
            </a>
          </div>
        </div>

        <!-- Trust Badges -->
        <div class="hero-stats flex flex-wrap items-center justify-center gap-8 md:gap-16 border-t border-white/10 pt-10 mt-16 md:mt-20">
          <div class="text-center group">
            <span class="block text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#f59e0b] transition-colors">%98</span>
            <span class="text-xs text-gray-400 font-bold uppercase tracking-widest">Onay Oranı</span>
          </div>
          <div class="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
          <div class="text-center group">
            <span class="block text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#f59e0b] transition-colors">15+</span>
            <span class="text-xs text-gray-400 font-bold uppercase tracking-widest">Yıllık Tecrübe</span>
          </div>
          <div class="w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent hidden md:block"></div>
          <div class="text-center group">
            <span class="block text-4xl md:text-5xl font-black text-white mb-2 group-hover:text-[#f59e0b] transition-colors">20B+</span>
            <span class="text-xs text-gray-400 font-bold uppercase tracking-widest">Mutlu Müşteri</span>
          </div>
        </div>
      </div>
      
      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
      </div>
    </section>

    <!-- Popular Visas Section -->
    <section class="py-24 bg-white" aria-labelledby="popular-visas-heading">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span class="text-[#f59e0b] font-bold tracking-widest uppercase text-sm mb-4 block">Gideceğiniz Ülkeyi Seçin</span>
          <h2 id="popular-visas-heading" class="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 tracking-tight">En Çok Tercih Edilen Vizeler</h2>
          <p class="text-lg text-gray-600 leading-relaxed">
            Amerika'dan Avrupa'ya, İngiltere'den Kanada'ya kadar en popüler destinasyonlar için tüm vize sürecinizi biz yönetiyoruz. Güvenli ve hızlı başvuru için doğru adrestesiniz.
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 stagger-grid">
          <NuxtLink v-for="(service, index) in services" :key="index" :to="service.path" class="stagger-item group relative rounded-2xl overflow-hidden shadow-sm border border-gray-100 h-[380px] md:h-[420px] block backdrop-blur-sm">
            <NuxtImg :src="service.image" :alt="service.title" class="absolute inset-0 w-full h-full object-cover transition-transform duration-[10s] ease-out group-hover:scale-110" format="webp" loading="lazy" />
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-[#0f172a]/10"></div>
            
            <div class="absolute bottom-0 left-0 right-0 p-8 transform transition-transform duration-500">
              <h3 class="text-2xl font-bold text-white mb-3 group-hover:text-[#f59e0b] transition-colors">{{ service.title }}</h3>
              <p class="text-gray-300 text-sm mb-6 leading-relaxed opacity-0 -translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-100">{{ service.desc }}</p>
              <span class="inline-flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-wider">
                Detaylı Bilgi
                <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
              </span>
            </div>
            <!-- Focus Ring on Hover -->
            <div class="absolute inset-0 border-2 border-transparent group-hover:border-[#f59e0b]/50 rounded-2xl transition-colors duration-500"></div>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Why Us Section -->
    <section class="py-28 bg-[#0f172a] text-white relative overflow-hidden">
      <!-- Background pattern -->
      <div class="absolute inset-0 opacity-[0.03]" style="background-image: url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');"></div>
      
      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <div class="reveal-up order-2 lg:order-1">
            <span class="text-[#f59e0b] font-bold tracking-widest uppercase text-sm mb-4 block">Neden Champ Vize?</span>
            <h2 class="text-4xl md:text-5xl font-black mb-6 leading-tight tracking-tight">Vize Sürecinde <br><span class="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-500">Sıfır Risk, Maksimum Konfor</span></h2>
            <p class="text-gray-400 text-lg mb-10 leading-relaxed font-light">
              Konsoloslukların karmaşık ve sürekli değişen prosedürleri arasında kaybolmayın. Biz, dosyanızı ince eleyip sık dokuyarak red riskini minimize ediyor; eksiksiz başvuru ile zaman ve para kaybının önüne geçiyoruz.
            </p>
            
            <div class="space-y-8">
              <div class="flex gap-5 items-start">
                <div class="w-14 h-14 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0 text-[#f59e0b] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-white">Uzman Kadro ile Ön Analiz</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">Dosyanız konsolosluğa gitmeden önce deneyimli uzmanlarımız tarafından "Red Önleyici" filtrelere tabi tutulur. Başarı şansınız maksimuma çıkartılır.</p>
                </div>
              </div>
              
              <div class="flex gap-5 items-start">
                <div class="w-14 h-14 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0 text-[#f59e0b] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" x2="8" y1="13" y2="13"/><line x1="16" x2="8" y1="17" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-white">Eksiksiz Evrak Yönetimi</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">Tüm formlar hatasız doldurulur; otel, uçak ve seyahat sigortası gibi bürokratik detaylar tarafımızca halledilir.</p>
                </div>
              </div>

              <div class="flex gap-5 items-start">
                <div class="w-14 h-14 rounded-2xl bg-[#f59e0b]/10 border border-[#f59e0b]/20 flex items-center justify-center shrink-0 text-[#f59e0b] shadow-sm">
                  <svg xmlns="http://www.w3.org/2000/svg" class="w-7 h-7" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="m9 12 2 2 4-4"/></svg>
                </div>
                <div>
                  <h3 class="text-xl font-bold mb-2 text-white">Birebir Mülakat Provaları</h3>
                  <p class="text-gray-400 text-sm leading-relaxed">ABD, İngiltere gibi mülakat gerektiren ülkeler için gerçekçi konsolosluk simülasyonları ile sizi psikolojik olarak hazırlarız.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div class="relative reveal-up order-1 lg:order-2 h-[400px] md:h-[500px] lg:h-[700px] rounded-[2.5rem] overflow-hidden shadow-2xl">
            <NuxtImg src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=1200" alt="Vize Danışmanlık Ekibi" class="absolute inset-0 w-full h-full object-cover" format="webp" loading="lazy" />
            <div class="absolute inset-0 bg-[#0f172a]/20 mix-blend-multiply"></div>
            <div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/40 to-transparent"></div>
            
            <!-- Float UI Element -->
            <div class="absolute bottom-10 left-10 right-10 bg-white/10 backdrop-blur-xl rounded-3xl p-6 border border-white/20 shadow-2xl transform hover:-translate-y-2 transition-transform duration-500">
              <div class="flex items-center gap-5">
                <div class="flex -space-x-4">
                  <img class="w-12 h-12 rounded-full border-2 border-[#0f172a]" src="https://i.pravatar.cc/100?img=1" alt="Müşteri">
                  <img class="w-12 h-12 rounded-full border-2 border-[#0f172a]" src="https://i.pravatar.cc/100?img=2" alt="Müşteri">
                  <img class="w-12 h-12 rounded-full border-2 border-[#0f172a]" src="https://i.pravatar.cc/100?img=3" alt="Müşteri">
                  <div class="w-12 h-12 rounded-full border-2 border-[#0f172a] bg-[#f59e0b] flex items-center justify-center text-sm font-bold text-[#0f172a]">+5K</div>
                </div>
                <div>
                  <div class="text-base font-bold text-white">Sadece bu yıl mutlu edilen müşteri</div>
                  <div class="flex items-center gap-1 text-[#f59e0b] mt-1">
                    <svg v-for="i in 5" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Testimonials -->
    <section class="py-24 bg-gray-50 overflow-hidden relative" id="yorumlar">
      <div class="container mx-auto px-4 md:px-6 lg:px-8">
        <div class="text-center max-w-3xl mx-auto mb-16 reveal-up">
          <span class="text-[#f59e0b] font-bold tracking-widest uppercase text-sm mb-4 block">Başarı Hikayeleri</span>
          <h2 class="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 tracking-tight">Müşterilerimiz Neler Söylüyor?</h2>
          <p class="text-lg text-gray-600">Onlarca ülkeye, binlerce mutlu yolcu. Vizesine kavuşan misafirlerimizin deneyimlerini okuyun.</p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 stagger-grid relative z-10">
          <div v-for="(review, index) in testimonials" :key="index" class="stagger-item bg-white p-10 rounded-[2rem] shadow-[0_15px_40px_rgba(0,0,0,0.04)] border border-gray-100 relative group hover:-translate-y-2 transition-transform duration-500">
            <svg class="absolute top-8 right-8 w-12 h-12 text-gray-100 group-hover:text-[#f59e0b]/10 transition-colors duration-500" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/></svg>
            
            <div class="flex items-center gap-1 mb-6 text-[#f59e0b]">
              <svg v-for="i in review.rating" :key="i" xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            </div>
            
            <p class="text-gray-700 font-medium mb-10 text-lg leading-relaxed z-10 relative">
              {{ review.text }}
            </p>
            
            <div class="flex items-center gap-4 mt-auto border-t border-gray-100 pt-6">
              <div class="w-14 h-14 rounded-full bg-gradient-to-br from-[#0f172a] to-gray-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                {{ review.name.charAt(0) }}
              </div>
              <div>
                <h3 class="font-bold text-[#0f172a] text-lg">{{ review.name }}</h3>
                <p class="text-sm text-[#f59e0b] font-medium">{{ review.role }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-24 bg-white" aria-labelledby="faq-heading" id="sss">
      <div class="container mx-auto px-4 md:px-6 lg:px-8 max-w-4xl">
        <div class="text-center mb-10 md:mb-16 reveal-up">
          <span class="text-[#f59e0b] font-bold tracking-widest uppercase text-sm mb-4 block">Merak Edilenler</span>
          <h2 id="faq-heading" class="text-4xl md:text-5xl font-black text-[#0f172a] mb-6 tracking-tight">Sıkça Sorulan Sorular</h2>
          <p class="text-lg text-gray-600">Vize süreciyle ilgili aklınıza takılan tüm soruları şeffaflıkla yanıtlıyoruz.</p>
        </div>

        <div class="space-y-4 stagger-grid">
          <div 
            v-for="(faq, index) in faqs" 
            :key="index"
            class="stagger-item border-2 rounded-2xl overflow-hidden transition-colors duration-300"
            :class="activeFaq === index ? 'border-[#f59e0b] bg-white shadow-lg' : 'border-gray-100 bg-white hover:border-gray-200'"
          >
            <button 
              @click="toggleFaq(index)"
              class="w-full text-left px-6 py-6 flex items-center justify-between font-bold text-[#0f172a] focus:outline-none"
              :aria-expanded="activeFaq === index"
            >
              <span class="text-lg" :class="activeFaq === index ? 'text-[#f59e0b]' : ''">{{ faq.q }}</span>
              <div 
                class="w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-colors"
                :class="activeFaq === index ? 'bg-[#f59e0b]/10' : 'bg-gray-50'"
              >
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  class="w-5 h-5 transition-transform duration-300"
                  :class="activeFaq === index ? 'rotate-180 text-[#f59e0b]' : 'text-gray-400'"
                  viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                >
                  <path d="m6 9 6 6 6-6"/>
                </svg>
              </div>
            </button>
            <div 
              class="overflow-hidden transition-all duration-300 ease-in-out"
              :style="{ maxHeight: activeFaq === index ? '300px' : '0px', opacity: activeFaq === index ? 1 : 0 }"
            >
              <div class="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t border-gray-50 pt-4">
                {{ faq.a }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="text-center mt-12 reveal-up">
          <NuxtLink to="/iletisim" class="inline-flex items-center gap-2 text-[#0f172a] font-bold text-lg hover:text-[#f59e0b] transition-colors group">
            Daha fazla sorunuz mu var? Bizimle iletişime geçin
            <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 transition-transform group-hover:translate-x-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </NuxtLink>
        </div>
      </div>
    </section>

    <!-- Call to Action Banner -->
    <section class="py-24 bg-[#0f172a] text-white overflow-hidden relative">
      <!-- Decor -->
      <div class="absolute -right-20 -top-40 w-96 h-96 bg-[#f59e0b]/20 rounded-full blur-[100px]"></div>
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-full border border-white/5 rounded-[4rem] transform rotate-3 -z-0"></div>
      
      <div class="container mx-auto px-4 md:px-6 lg:px-8 relative z-10">
        <div class="bg-gradient-to-br from-[#f59e0b] to-[#c27803] rounded-[3rem] p-10 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden">
          <div class="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'20\' height=\'20\' viewBox=\'0 0 20 20\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'%23ffffff\' fill-opacity=\'0.05\' fill-rule=\'evenodd\'%3E%3Ccircle cx=\'3\' cy=\'3\' r=\'3\'/%3E%3Cg%3E%3C/svg%3E')]"></div>
          
          <div class="text-center md:text-left reveal-up relative z-10">
            <h2 class="text-3xl md:text-4xl lg:text-5xl font-black mb-6 tracking-tight">Ücretsiz Ön Analiz İçin <br>Hazır mısınız?</h2>
            <p class="text-amber-50 text-lg md:text-xl opacity-90 max-w-xl font-medium">
              Hemen form doldurun veya bizi arayın. Vize uzmanlarımız dosyanızı ücretsiz değerlendirip, başarı rotanızı çizsin.
            </p>
          </div>
          
          <div class="shrink-0 reveal-up relative z-10">
            <NuxtLink to="/iletisim" class="inline-flex items-center justify-center px-10 py-5 bg-[#0f172a] hover:bg-white hover:text-[#0f172a] text-white rounded-full font-black text-xl transition-all duration-300 hover:scale-105 shadow-[0_10px_30px_rgba(15,23,42,0.4)] md:whitespace-nowrap w-full sm:w-auto">
              Hemen Başvuruyu Başlat
            </NuxtLink>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
