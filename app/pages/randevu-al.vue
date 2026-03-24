<script setup lang="ts">
import { useSeoMeta } from '#imports'

useSeoMeta({
  title: 'Ücretsiz Randevu Al | Vize Acentası',
  description: 'Hemen ücretsiz randevu formunu doldurun, vize uzmanlarımız dosyanızı ücretsiz ön incelemeye alsın.',
})
</script>

<template>
  <main class="min-h-screen pt-32 pb-20 bg-gray-50 flex items-center justify-center">
    <div class="container mx-auto px-4 max-w-3xl">
      <div class="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden">
        <div class="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl"></div>
        <div class="relative z-10">
          <h1 class="text-4xl font-black text-[#0f172a] mb-4">Ücretsiz Randevu Al</h1>
          <p class="text-gray-600 mb-10">Vize türünüzü seçin ve formumuzdaki adımları tamamlayın. Uzmanlarımız 1 saat içinde size dönüş yapsın.</p>
          
          <form class="space-y-6" @submit.prevent>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div class="space-y-2">
                <label class="font-bold text-sm text-gray-700">Ad Soyad</label>
                <input type="text" class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition" placeholder="Ali Yılmaz">
              </div>
              <div class="space-y-2">
                <label class="font-bold text-sm text-gray-700">Telefon</label>
                <input type="tel" class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition" placeholder="+90 555 123 45 67">
              </div>
            </div>
            
            <div class="space-y-2">
              <label class="font-bold text-sm text-gray-700">İlgilendiğiniz Vize Türü</label>
              <select class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition appearance-none">
                <option value="">Lütfen seçin...</option>
                <option>Schengen Vizesi</option>
                <option>Amerika Vizesi</option>
                <option>İngiltere Vizesi</option>
                <option>Kanada Vizesi</option>
                <option>Dubai E-Vizesi</option>
                <option>Diğer</option>
              </select>
            </div>
            
            <div class="space-y-2">
              <label class="font-bold text-sm text-gray-700">Kısa Not / Mesaj</label>
              <textarea rows="4" class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition" placeholder="Mesleğiniz, seyahat tarihiniz vb. detayları belirtebilirsiniz."></textarea>
            </div>
            
            <button class="w-full bg-[#f59e0b] hover:bg-[#d97706] text-[#0f172a] py-4 rounded-xl font-bold transition-all shadow-sm">
              Randevu Talebi Oluştur
            </button>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
