<script setup lang="ts">
import { ref, computed } from 'vue'

const props = defineProps<{
  items: string[]
}>()

const checkedItems = ref<boolean[]>(new Array(props.items.length).fill(false))

const progressPercentage = computed(() => {
  if (props.items.length === 0) return 0
  const checkedCount = checkedItems.value.filter(item => item).length
  return Math.round((checkedCount / props.items.length) * 100)
})

const toggleItem = (index: number) => {
  checkedItems.value[index] = !checkedItems.value[index]
}

const isComplete = computed(() => progressPercentage.value === 100)
</script>

<template>
  <div class="bg-white rounded-2xl overflow-hidden border border-gray-100">
    <div class="p-6 md:p-8 bg-gray-50 border-b border-gray-100">
      <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h3 class="text-xl font-bold text-[#0f172a]">İnteraktif Evrak Listesi</h3>
          <p class="text-sm text-gray-500 mt-1">Hazırladığınız evrakları işaretleyin.</p>
        </div>
        
        <div class="w-full sm:w-1/3 flex flex-col gap-2">
          <div class="flex justify-between items-end">
            <span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Hazırlık</span>
            <span class="text-lg font-black" :class="isComplete ? 'text-green-500' : 'text-[#f59e0b]'">%{{ progressPercentage }}</span>
          </div>
          <div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden">
            <div 
              class="h-full"
              :class="isComplete ? 'bg-green-500' : 'bg-[#f59e0b]'"
              :style="{ width: `${progressPercentage}%` }"
            ></div>
          </div>
        </div>
      </div>
    </div>

    <div class="p-4 md:p-6 space-y-2">
      <label 
        v-for="(item, index) in items" 
        :key="index"
        class="flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer"
        :class="checkedItems[index] ? 'border-green-500/20 bg-green-50/50' : 'border-gray-50 '"
      >
        <div class="relative shrink-0 mt-0.5">
          <input 
            type="checkbox" 
            :checked="checkedItems[index]"
            @change="toggleItem(index)"
            class="peer sr-only"
          >
          <div class="w-6 h-6 rounded-lg border-2 flex items-center justify-center"
               :class="checkedItems[index] ? 'bg-green-500 border-green-500' : 'bg-white border-gray-300 peer-'">
            <svg class="w-4 h-4 text-white transition-opacity" :class="checkedItems[index] ? 'opacity-100 scale-100' : 'opacity-0 scale-50'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
          </div>
        </div>
        <span 
          class="font-medium leading-relaxed"
          :class="checkedItems[index] ? 'text-gray-400 line-through' : 'text-gray-700'"
        >
          {{ item }}
        </span>
      </label>
    </div>

    <!-- Alert / Completion Banner -->
    <div 
      class="bg-green-50 border-t border-green-100 p-6 flex items-start gap-4 overflow-hidden"
      :class="isComplete ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0 overflow-y-hidden p-0 border-transparent'"
    >
      <div class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0">
        <svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
      </div>
      <div>
        <h4 class="font-bold text-green-800">Harika! Tüm evraklarınız hazır.</h4>
        <p class="text-sm text-green-700 mt-1">Dosyanızı konsolosluğa göndermeden önce uzmanlarımız bir kez daha gözden geçirmeli. PDF olarak WhatsApp'tan yollayabilirsiniz.</p>
      </div>
    </div>
  </div>
</template>
