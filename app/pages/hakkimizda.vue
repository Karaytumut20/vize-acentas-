<script setup lang="ts">
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Hakkımızda | Vize Acentası',
  description: '10 yılı aşkın tecrübemizle on binlerce kişinin sınırları aşmasına ve hayallerindeki ülkelere ulaşmasına nasıl yardımcı olduk?',
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 bg-gray-50">
    <div class="container mx-auto px-4 max-w-5xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div class="space-y-6">
          <h1 class="text-4xl lg:text-5xl font-black text-[#0f172a] leading-tight">Sınırları Aşan 10 Yıllık Güven.</h1>
          <p class="text-lg text-gray-600 leading-relaxed font-medium">Bürokrasinin yorucu ve hata kabul etmeyen dünyasında, Vize Acentası olarak seyahatinizi garanti altına alıyoruz. Yüksek başarı oranımız, dürüst çalışma prensibimiz ve VIP danışmanlık hizmetlerimizle sektörün lider firmasıyız.</p>
          <p class="text-gray-600 leading-relaxed">Özellikle Schengen ve Amerika mülakatlarındaki uzmanlığımız, karmaşık dosyaları en sade ve inandırıcı dille konsolosluğa sunmamızdan gelir.</p>
          
          <div class="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200">
            <div>
              <div class="text-4xl font-black text-[#f59e0b] mb-1">10+</div>
              <div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Yıllık Tecrübe</div>
            </div>
            <div>
              <div class="text-4xl font-black text-[#f59e0b] mb-1">%98</div>
              <div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Onay Oranı</div>
            </div>
            <div>
              <div class="text-4xl font-black text-[#f59e0b] mb-1">3500+</div>
              <div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Başarılı Dosya</div>
            </div>
            <div>
              <div class="text-4xl font-black text-[#f59e0b] mb-1">7/24</div>
              <div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Kesintisiz Destek</div>
            </div>
          </div>
        </div>
        
        <div class="relative">
          <div class="absolute inset-0 bg-gradient-to-tr from-[#0f172a] to-[#f59e0b] rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div>
          <NuxtImg src="/img/champ-ekibi.jpg" alt="Vize Acentası Ekibi" class="relative rounded-[3rem] object-cover h-[600px] w-full border-8 border-white" format="webp" loading="lazy" />
        </div>
      </div>
    </div>
  </main>
</template>
