<template>
  <main class="w-full min-h-screen bg-slate-50 pt-32 pb-24 selection:bg-emerald-200 selection:text-emerald-900">
    <div class="px-page-margin max-w-7xl mx-auto">
      
      <!-- Başlık (Corporate) -->
      <div class="text-center mb-16 max-w-3xl mx-auto">
        <h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Uluslararası Eğitim Makaleleri</h1>
        <p class="text-lg md:text-xl text-slate-600 font-medium leading-relaxed">
          Kuzey Makedonya eğitim prosedürleri, sınavsız Mavi Diploma almanın yolları ve Avrupa'da öğrencilik hayatı hakkında rehber içerikler.
        </p>
      </div>

      <!-- Kategori Filtresi (Fake UX Element for Professionalism) -->
      <div class="flex flex-wrap justify-center gap-4 mb-16">
        <button class="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">Tümü</button>
        <button class="bg-white text-slate-600 border border-slate-200 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">Goce Delcev UGD</button>
        <button class="bg-white text-slate-600 border border-slate-200 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">Sınavsız Geçiş</button>
        <button class="bg-white text-slate-600 border border-slate-200 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase">Oturum İzmi</button>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <!-- Dev SEO Makalesi Kartı -->
        <article class="bg-white rounded-2xl border border-slate-200 overflow-hidden group flex flex-col">
          <NuxtLink to="/yazilar/turkiyede-universite-kazanamadim-demeyin-neden-sinavsiz-goce-delcev" class="block h-56 bg-slate-100 overflow-hidden border-b border-slate-100 relative">
             <div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"></div>
             <span class="absolute inset-0 flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs z-0">[Sınav Stresi Analiz Görseli]</span>
             <span class="absolute bottom-4 left-4 z-20 bg-emerald-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md">VİZYON YAZISI</span>
          </NuxtLink>
          <div class="p-8 flex flex-col flex-1">
            <div class="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
              <span>Güncel Kayıt Rehberi</span>
              <span class="w-1 h-1 bg-slate-300 rounded-full"></span>
              <span>5 Dk Okuma</span>
            </div>
            <NuxtLink to="/yazilar/turkiyede-universite-kazanamadim-demeyin-neden-sinavsiz-goce-delcev" class="block">
              <h2 class="text-2xl font-bold text-slate-900 mb-4 tracking-tight leading-tight">
                Türkiye'de Üniversite Kazanamadım Demeyin: Neden Sınavsız Goce Delcev'i Seçmelisiniz?
              </h2>
            </NuxtLink>
            <p class="text-slate-600 font-medium mb-6 line-clamp-3">
              Milyonlarca adayın girdiği YKS stresi, mezuna kalma kaygısı sömürüsüne son. Avrupa kapılarını lise diploması ile sonuna kadar açan Goce Delcev...
            </p>
            <div class="mt-auto border-t border-slate-100 pt-6 flex items-center justify-between">
              <span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Champ Analiz</span>
              <NuxtLink to="/yazilar/turkiyede-universite-kazanamadim-demeyin-neden-sinavsiz-goce-delcev" class="text-slate-900 font-bold text-sm tracking-wide flex items-center gap-1">
                Makaleyi Oku <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>
              </NuxtLink>
            </div>
          </div>
        </article>

      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import { useSeoMeta } from "#imports";
import { siteConfig } from "~/utils/site";

useSeoMeta({
  title: `Yurtdışı Eğitim Makaleleri | ${siteConfig.shortName}`,
  description: "Avrupa'da sınavsız tıp ve mühendislik eğitimi almak isteyen öğrenciler için hazırlanmış detaylı rehberler ve vize şartları blogu.",
});
</script>
