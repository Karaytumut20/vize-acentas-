<script setup lang="ts">
import { useSeoMeta, useRoute } from '#imports'
import SchemaOrg from '~/components/SchemaOrg.vue'

const faqData = [
  { question: 'Schengen vizesi minimum kaç günde çıkar?', answer: 'Konsolosluk yoğunluğuna göre değişmekle birlikte ortalama 15-20 iş günü sürmektedir. VIP başvuru ile bazı ülkelerde bu süre öne çekilebilir.' },
  { question: 'Vize reddi alırsam param iade edilir mi?', answer: 'Konsolosluk harçları ve başvuru merkezi ücretleri iade edilmez. Ancak duruma göre itiraz veya yeniden başvuru sürecini başlatabiliriz.' },
  { question: 'Amerika 10 yıllık vizesi için bankada ne kadar olmalı?', answer: 'Net bir rakam olmamakla birlikte, gidiş-dönüş biletini ve oradaki konaklamanızı karşılayacak, aylık gelirinizle orantılı mantıklı bir bakiye olmalıdır (Örn: 2000-3000 USD eşdeğeri).' },
  { question: 'Şirket sahibi değilim, sigortasız çalışıyorum. Vize alabilir miyim?', answer: 'Sigortasız çalışanlar maalesef turistik vizelerde çok yüksek red riski taşır. Sponsorlu (1. derece akraba) başvuru yapılmalıdır.' }
]

useSeoMeta({
  title: 'Sık Sorulan Sorular | Vize Acentası',
  description: 'Vize başvuruları, süreçler, ücretler ve red durumları hakkında aklınıza takılan tüm soruların cevapları.',
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 bg-gray-50">
    <SchemaOrg type="FAQPage" :data="{ questions: faqData }" />
    
    <div class="container mx-auto px-4 max-w-4xl">
      <h1 class="text-4xl lg:text-5xl font-black text-[#0f172a] mb-6 text-center">Sık Sorulan Sorular</h1>
      <p class="text-lg text-gray-600 mb-12 text-center">Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.</p>
      
      <div class="space-y-4">
        <details v-for="(faq, i) in faqData" :key="i" class="group bg-white rounded-2xl p-6 border border-gray-100 cursor-pointer [&_summary::-webkit-details-marker]:hidden">
          <summary class="flex items-center justify-between font-bold text-lg text-[#0f172a] focus:outline-none">
            {{ faq.question }}
            <span class="transition group-open:rotate-180">
              <svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </summary>
          <p class="text-gray-600 mt-4 leading-relaxed font-medium">
            {{ faq.answer }}
          </p>
        </details>
      </div>
    </div>
  </main>
</template>
