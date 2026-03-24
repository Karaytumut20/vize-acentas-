import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
import { a as useSeoMeta } from './server.mjs';
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
  __name: "randevu-al",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Ücretsiz Randevu Al | Vize Acentası",
      description: "Hemen ücretsiz randevu formunu doldurun, vize uzmanlarımız dosyanızı ücretsiz ön incelemeye alsın."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-32 pb-20 bg-gray-50 flex items-center justify-center" }, _attrs))}><div class="container mx-auto px-4 max-w-3xl"><div class="bg-white rounded-[2.5rem] p-10 md:p-14 shadow-2xl relative overflow-hidden"><div class="absolute top-0 right-0 w-64 h-64 bg-[#f59e0b]/10 rounded-full blur-3xl"></div><div class="relative z-10"><h1 class="text-4xl font-black text-[#0f172a] mb-4">Ücretsiz Randevu Al</h1><p class="text-gray-600 mb-10">Vize türünüzü seçin ve formumuzdaki adımları tamamlayın. Uzmanlarımız 1 saat içinde size dönüş yapsın.</p><form class="space-y-6"><div class="grid grid-cols-1 md:grid-cols-2 gap-6"><div class="space-y-2"><label class="font-bold text-sm text-gray-700">Ad Soyad</label><input type="text" class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition" placeholder="Ali Yılmaz"></div><div class="space-y-2"><label class="font-bold text-sm text-gray-700">Telefon</label><input type="tel" class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition" placeholder="+90 555 123 45 67"></div></div><div class="space-y-2"><label class="font-bold text-sm text-gray-700">İlgilendiğiniz Vize Türü</label><select class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition appearance-none"><option value="">Lütfen seçin...</option><option>Schengen Vizesi</option><option>Amerika Vizesi</option><option>İngiltere Vizesi</option><option>Kanada Vizesi</option><option>Dubai E-Vizesi</option><option>Diğer</option></select></div><div class="space-y-2"><label class="font-bold text-sm text-gray-700">Kısa Not / Mesaj</label><textarea rows="4" class="w-full bg-gray-50 border border-gray-200 px-5 py-4 rounded-xl focus:border-[#f59e0b] focus:ring-2 focus:ring-[#f59e0b]/20 outline-none transition" placeholder="Mesleğiniz, seyahat tarihiniz vb. detayları belirtebilirsiniz."></textarea></div><button class="w-full bg-[#f59e0b] hover:bg-[#0f172a] text-white py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-xl hover:-translate-y-1"> Randevu Talebi Oluştur </button></form></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/randevu-al.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=randevu-al-DTfcygV-.mjs.map
