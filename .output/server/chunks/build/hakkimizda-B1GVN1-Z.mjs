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
  __name: "hakkimizda",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Hakkımızda | Vize Acentası",
      description: "10 yılı aşkın tecrübemizle on binlerce kişinin sınırları aşmasına ve hayallerindeki ülkelere ulaşmasına nasıl yardımcı olduk?"
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-32 pb-20 bg-gray-50" }, _attrs))}><div class="container mx-auto px-4 max-w-5xl"><div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"><div class="space-y-6"><h1 class="text-4xl lg:text-5xl font-black text-[#0f172a] leading-tight">Sınırları Aşan 10 Yıllık Güven.</h1><p class="text-lg text-gray-600 leading-relaxed font-medium">Bürokrasinin yorucu ve hata kabul etmeyen dünyasında, Vize Acentası olarak seyahatinizi garanti altına alıyoruz. Yüksek başarı oranımız, dürüst çalışma prensibimiz ve VIP danışmanlık hizmetlerimizle sektörün lider firmasıyız.</p><p class="text-gray-600 leading-relaxed">Özellikle Schengen ve Amerika mülakatlarındaki uzmanlığımız, karmaşık dosyaları en sade ve inandırıcı dille konsolosluğa sunmamızdan gelir.</p><div class="grid grid-cols-2 gap-6 pt-6 border-t border-gray-200"><div><div class="text-4xl font-black text-[#f59e0b] mb-1">10+</div><div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Yıllık Tecrübe</div></div><div><div class="text-4xl font-black text-[#f59e0b] mb-1">%98</div><div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Onay Oranı</div></div><div><div class="text-4xl font-black text-[#f59e0b] mb-1">3500+</div><div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Başarılı Dosya</div></div><div><div class="text-4xl font-black text-[#f59e0b] mb-1">7/24</div><div class="text-sm font-bold text-gray-500 uppercase tracking-wide">Kesintisiz Destek</div></div></div></div><div class="relative"><div class="absolute inset-0 bg-gradient-to-tr from-[#0f172a] to-[#f59e0b] rounded-[3rem] transform rotate-3 scale-105 opacity-20 blur-xl"></div><img src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;q=80&amp;w=1000" alt="Vize Acentası Ekibi" class="relative rounded-[3rem] shadow-2xl object-cover h-[600px] w-full border-8 border-white"></div></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/hakkimizda.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=hakkimizda-B1GVN1-Z.mjs.map
