import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { u as useSeoMeta, s as siteConfig } from './server.mjs';
import '../_/nitro.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'consola';
import 'node:fs';
import 'node:url';
import 'fast-xml-parser';
import 'ipx';
import 'node:path';
import 'node:crypto';
import 'pinia';
import 'vue-router';
import '@vue/shared';
import '@unhead/schema-org/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "iletisim",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `İletişim | Goce Delcev Kayıt Destek Hattı | ${siteConfig.shortName}`,
      description: "Makedonya Ştip (Goce Delcev UGD) tıp, mühendislik kayıt başvuruları, ücretsiz görüşme sağlamak ve evrak işlemleri için çağrı merkezimizle iletişime geçin."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-slate-50 pt-32 pb-24 selection:bg-emerald-200 selection:text-emerald-900" }, _attrs))}><div class="px-page-margin w-full max-w-7xl mx-auto"><div class="text-center mb-16 max-w-3xl mx-auto"><h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Bizimle İletişime Geçin</h1><p class="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"> Sınavsız Goce Delcev (UGD) Üniversitesi başvuruları, kayıt süreci ve paketler hakkında merak ettikleriniz için uzman danışmanlarımızla hemen ücretsiz görüşün. </p></div><div class="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white border border-slate-200 rounded-3xl p-8 md:p-12 shadow-sm"><div class="flex flex-col justify-center"><h2 class="text-3xl font-bold text-slate-900 mb-8 tracking-tight">VIP Kabul Ofisi</h2><div class="space-y-8"><div class="flex items-start gap-4"><div class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 flex-shrink-0 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg></div><div><p class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Çağrı Merkezi</p><a href="tel:08505577899" class="text-2xl font-bold text-slate-900 hover:text-emerald-600 transition-colors">0850 557 78 99</a></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-emerald-50 border border-emerald-100 rounded-xl flex items-center justify-center text-emerald-600 flex-shrink-0 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M13.601 2.326A7.85 7.85 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c-.003 1.396.366 2.76 1.057 3.965L0 16l4.204-1.102a7.9 7.9 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.9 7.9 0 0 0 13.6 2.326z"></path></svg></div><div><p class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Hızlı WhatsApp Hattı</p><a href="https://wa.me/908505577899" target="_blank" class="text-lg font-bold text-emerald-600 hover:text-emerald-500 transition-colors">Randevu veya Soru Sorun</a></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 flex-shrink-0 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg></div><div><p class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">Merkez Ofis</p><p class="text-slate-700 font-medium">İstanbul, Türkiye<br>(Lütfen gelmeden önce randevu alınız)</p></div></div><div class="flex items-start gap-4"><div class="w-12 h-12 bg-slate-50 border border-slate-100 rounded-xl flex items-center justify-center text-slate-700 flex-shrink-0 shadow-sm"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.708 2.825L15 11.105V5.383zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741zM1 11.105l4.708-2.897L1 5.383v5.722z"></path></svg></div><div><p class="text-sm font-bold uppercase tracking-widest text-slate-500 mb-1">E-Posta</p><a href="mailto:info@champegitim.com" class="text-lg font-bold text-slate-900 hover:text-emerald-600 transition-colors">info@champegitim.com</a></div></div></div></div><div class="bg-slate-50 rounded-2xl p-8 border border-slate-200 shadow-inner"><h3 class="text-2xl font-bold text-slate-900 mb-6">Ön Kayıt ve Detay Formu</h3><form class="flex flex-col gap-5"><div><label for="name" class="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Adınız Soyadınız</label><input type="text" id="name" placeholder="Örn: Ahmet Yılmaz" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"></div><div><label for="phone" class="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Telefon Numaranız</label><input type="tel" id="phone" placeholder="0500 000 00 00" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow"></div><div><label for="department" class="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Hedeflenen Bölüm</label><select id="department" class="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow appearance-none"><option value="">Seçiniz...</option><option value="tip">Genel Tıp (Makedonca / İngilizce)</option><option value="dis">Diş Hekimliği</option><option value="muhendislik">Bilgisayar veya Diğer Mühendislikler</option><option value="hukuk">Hukuk / Mimarlık / Ekonomi</option></select></div><div><label for="message" class="block text-xs font-bold uppercase tracking-widest text-slate-500 mb-2">Özel Mesajınız</label><textarea id="message" rows="3" placeholder="Görüşme öncesi eklemek istedikleriniz..." class="w-full bg-white border border-slate-200 rounded-lg px-4 py-3 text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-shadow resize-none"></textarea></div><button type="submit" class="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-emerald-600 transition-colors shadow-md hover:shadow-lg mt-2"> Bilgilerimi Gönder ve Randevu İste </button></form></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/iletisim.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=iletisim-DdKoJRBl.mjs.map
