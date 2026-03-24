<script setup lang="ts">
import { ref, computed } from 'vue'

const step = ref(1)
const answers = ref({
  history: '',
  finance: '',
  job: '',
  family: ''
})

const isCalculating = ref(false)
const showResult = ref(false)
const score = ref(0)

const calculateScore = () => {
  isCalculating.value = true
  // Fake calculation delay
  setTimeout(() => {
    let total = 0
    if (answers.value.history === 'yes') total += 30
    else if (answers.value.history === 'some') total += 15
    
    if (answers.value.finance === 'high') total += 30
    else if (answers.value.finance === 'medium') total += 15
    
    if (answers.value.job === 'fulltime') total += 30
    else if (answers.value.job === 'freelance') total += 20
    else if (answers.value.job === 'student') total += 15
    
    if (answers.value.family === 'married') total += 10
    
    score.value = Math.min(Math.max(total, 15), 98) // Between 15% and 98%
    isCalculating.value = false
    showResult.value = true
  }, 1500)
}

const nextStep = () => {
  if (step.value === 4) calculateScore()
  else step.value++
}

const reset = () => {
  step.value = 1
  showResult.value = false
  answers.value = { history: '', finance: '', job: '', family: '' }
}
</script>

<template>
  <div class="bg-white rounded-3xl overflow-hidden max-w-2xl mx-auto border border-gray-100 relative">
    <!-- Header -->
    <div class="bg-gradient-to-r from-[#0f172a] to-gray-800 p-8 text-white relative overflow-hidden">
      <div class="absolute -right-10 -top-10 w-40 h-40 bg-[#f59e0b]/20 rounded-full blur-2xl"></div>
      <h3 class="text-2xl font-black mb-2 relative z-10">Vize Onay İhtimali Hesaplayıcı</h3>
      <p class="text-gray-300 text-sm relative z-10">Yapay zeka destekli ön analiz aracımızla profilinizin gücünü test edin.</p>
    </div>

    <!-- Body -->
    <div class="p-8" v-if="!showResult && !isCalculating">
      <!-- Progress -->
      <div class="flex gap-2 mb-8">
        <div v-for="i in 4" :key="i" class="h-2 rounded-full flex-1" :class="step >= i ? 'bg-[#f59e0b]' : 'bg-gray-100'"></div>
      </div>

      <!-- Step 1 -->
      <div v-if="step === 1" class="">
        <h4 class="text-xl font-bold text-[#0f172a] mb-6">1. Seyahat Geçmişiniz</h4>
        <div class="space-y-3">
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.history === 'yes' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.history" value="yes" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Daha önce Schengen veya ABD / UK vizem var.</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.history === 'some' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.history" value="some" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Sadece Balkanlar veya vizesiz ülkelere gittim.</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.history === 'no' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.history" value="no" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Pasaportum bembeyaz, hiç yurt dışına çıkmadım.</span>
          </label>
        </div>
      </div>

      <!-- Step 2 -->
      <div v-if="step === 2" class="">
        <h4 class="text-xl font-bold text-[#0f172a] mb-6">2. Finansal Durumunuz</h4>
        <div class="space-y-3">
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.finance === 'high' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.finance" value="high" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Düzenli yüksek gelirim ve bankada iyi birikimim var.</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.finance === 'medium' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.finance" value="medium" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Asgari veya ortalama maaşım var.</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.finance === 'low' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.finance" value="low" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Şu an resmi belgelenebilir bir gelirim yok.</span>
          </label>
        </div>
      </div>

      <!-- Step 3 -->
      <div v-if="step === 3" class="">
        <h4 class="text-xl font-bold text-[#0f172a] mb-6">3. Çalışma Durumunuz</h4>
        <div class="space-y-3">
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.job === 'fulltime' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.job" value="fulltime" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Sigortalı Çalışan / Devlet Memuru / Şirket Sahibi</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.job === 'student' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.job" value="student" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Öğrenci (Ailem sponsor olacak)</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.job === 'freelance' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.job" value="freelance" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Freelance / Serbest Meslek (Resmi şahıs şirketi yok)</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.job === 'none' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.job" value="none" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Çalışmıyorum</span>
          </label>
        </div>
      </div>

      <!-- Step 4 -->
      <div v-if="step === 4" class="">
        <h4 class="text-xl font-bold text-[#0f172a] mb-6">4. Aile Eğilimi</h4>
        <div class="space-y-3">
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.family === 'married' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.family" value="married" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Evliyim / Çocuğum var.</span>
          </label>
          <label class="flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer" :class="answers.family === 'single' ? 'border-[#f59e0b] bg-[#f59e0b]/5' : 'border-gray-100 '">
            <input type="radio" v-model="answers.family" value="single" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]">
            <span class="font-medium text-gray-700">Bekarım.</span>
          </label>
        </div>
      </div>

      <div class="mt-8 flex justify-between items-center">
        <button v-if="step > 1" @click="step--" class="text-gray-500 font-bold px-4 py-2">Geri</button>
        <div v-else></div>
        <button 
          @click="nextStep" 
          class="bg-[#0f172a] text-white px-8 py-3 rounded-xl font-bold disabled:opacity-50"
          :disabled="(step === 1 && !answers.history) || (step === 2 && !answers.finance) || (step === 3 && !answers.job) || (step === 4 && !answers.family)"
        >
          {{ step === 4 ? 'Sonuçları Gör' : 'İleri' }}
        </button>
      </div>
    </div>

    <!-- Calculating State -->
    <div v-if="isCalculating" class="p-16 text-center flex flex-col items-center">
      <div class="w-16 h-16 border-4 border-gray-100 border-t-[#f59e0b] rounded-full animate-spin mb-6"></div>
      <h4 class="text-xl font-bold text-[#0f172a]">Profiliniz Analiz Ediliyor...</h4>
      <p class="text-gray-500 text-sm mt-2">Konsolosluk algoritmalarına göre başarı puanınız hesaplanıyor.</p>
    </div>

    <!-- Result State -->
    <div v-if="showResult" class="p-12 text-center">
      <div class="inline-flex items-center justify-center w-32 h-32 rounded-full border-8 mb-6 relative" :class="score >= 70 ? 'border-green-500 text-green-500' : (score > 40 ? 'border-[#f59e0b] text-[#f59e0b]' : 'border-red-500 text-red-500')">
        <span class="text-5xl font-black">%{{ score }}</span>
      </div>
      <h4 class="text-3xl font-black text-[#0f172a] mb-4">
        {{ score >= 80 ? 'Harika Bir Profil!' : (score >= 50 ? 'Geliştirilebilir Profil' : 'Riskli Profil') }}
      </h4>
      <p class="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
        {{ score >= 80 ? 'Vize onay ihtimaliniz çok yüksek. Sadece prodesürleri ve evrak listesini hatasız eşleştirerek rahat bir mülakat süreci geçirebilirsiniz.' : (score >= 50 ? 'Profilinizin vize onayı alması için Niyet Mektubunun (Cover Letter) çok iyi yazılması ve sponsorluk desteği gerekiyor.' : 'Konsolosluk beklentilerine göre şu an başvuru yapmanız red almanıza neden olabilir. Lütfen bir uzmandan finansal planlama stratejisi alınız.') }}
      </p>
      
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button @click="reset" class="w-full sm:w-auto px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl">
          Yeniden Hesapla
        </button>
        <NuxtLink to="/iletisim" class="w-full sm:w-auto px-8 py-3 bg-[#f59e0b] text-white font-bold rounded-xl">
          Ücretsiz Danışmana Sor
        </NuxtLink>
      </div>
    </div>
  </div>
</template>
