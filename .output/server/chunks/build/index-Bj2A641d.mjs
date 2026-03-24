import { _ as __nuxt_component_0 } from './nuxt-link-mRelJtcF.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Kuzey Makedonya Goce Delcev Üniversiteleri | ${siteConfig.shortName}`,
      description: "YÖK onaylı, uygun fiyatlı devlet üniversiteleri. Makedonya Ştip'te Sınavsız Mavi Diploma alarak kariyerinizi inşa edin."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900 pt-32 pb-24" }, _attrs))}><div class="px-page-margin w-full max-w-7xl mx-auto"><header class="mb-16"><h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-4"> Kuzey Makedonya Üniversiteleri </h1><p class="text-lg text-slate-600 font-medium max-w-2xl leading-relaxed"> Avrupa Birliği standartlarında eğitim veren, Türkiye YÖK denkliği güvencesine sahip üniversiteleri inceleyin. Şüphesiz ki en rasyonel yatırım, köklü devlet üniversitelerinden alınan Mavi Diplomalardır. </p></header><section class="w-full rounded-2xl border border-slate-200 bg-white overflow-hidden shadow-sm flex flex-col lg:flex-row relative group hover:shadow-xl transition-all duration-300"><div class="w-full lg:w-2/5 min-h-[300px] lg:min-h-auto bg-slate-100 flex items-center justify-center relative border-b lg:border-b-0 lg:border-r border-slate-200 overflow-hidden"><div class="absolute inset-0 bg-gradient-to-tr from-slate-200 to-slate-50"></div><span class="text-slate-400 font-bold uppercase tracking-widest z-10 text-xs">[UGD İştip Panoramik Görsel]</span></div><div class="w-full lg:w-3/5 p-10 lg:p-14 flex flex-col justify-center"><div class="flex flex-wrap gap-3 mb-6"><span class="px-3 py-1 bg-emerald-100 text-emerald-800 rounded-md text-xs font-bold uppercase tracking-widest border border-emerald-200">Devlet Üniversitesi</span><span class="px-3 py-1 bg-slate-100 text-slate-700 rounded-md text-xs font-bold uppercase tracking-widest border border-slate-200">Kuzey Makedonya (Shtip)</span></div><h2 class="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-4 group-hover:text-emerald-700 transition-colors"> Goce Delcev (UGD) Üniversitesi </h2><p class="text-slate-600 font-medium leading-relaxed mb-8"> Uygun eğitim harçları (Makedonca Tıp 1500 Euro) ve son derece ucuz yaşam masraflarıyla (İştip bölgesinde aylık 300 Euro) Türkiye sınırları dışındaki en güvenilir ve prestijli devlet üniversitesi alternatifiniz. YKS sınav şartsız doğrudan lise diploması ile Avrupa standartlarında Tıp, Diş Hekimliği veya Mühendislik tahsili. </p><div class="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 pt-6 border-t border-slate-100"><div class="flex flex-col"><span class="text-2xl font-black text-slate-900 leading-none">1500€</span><span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Başlangıç</span></div><div class="flex flex-col"><span class="text-2xl font-black text-slate-900 leading-none">Mavi</span><span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Diploma</span></div><div class="flex flex-col"><span class="text-2xl font-black text-slate-900 leading-none">15+</span><span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Fakülte</span></div><div class="flex flex-col"><span class="text-2xl font-black text-slate-900 leading-none">YÖK</span><span class="text-xs font-bold text-slate-500 uppercase tracking-widest mt-1">Denkliği</span></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler/goce-delcev-universitesi",
        class: "mt-auto self-start bg-slate-900 text-white px-8 py-4 rounded-xl font-bold shadow-md hover:bg-emerald-600 hover:shadow-lg transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Kayıt Şartları ve Tüm Fiyatları İncele `);
          } else {
            return [
              createTextVNode(" Kayıt Şartları ve Tüm Fiyatları İncele ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><div class="mt-16 bg-white border border-slate-200 rounded-2xl p-10 text-center flex flex-col items-center justify-center max-w-3xl mx-auto shadow-sm"><h3 class="text-2xl font-bold text-slate-900 mb-4">Sadece Goce Delcev Odaklı Kurumsal Destek</h3><p class="text-slate-600 font-medium mb-8">Eksiksiz evrak tercümesi, resmi kabulün alınması ve tüm öğrenim süresine yayılan oturum izni garantörlüğünü uzman kadromuza bırakın.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "border border-emerald-600 text-emerald-700 font-bold px-8 py-3 rounded-xl hover:bg-emerald-600 hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Bizimle İletişime Geçin `);
          } else {
            return [
              createTextVNode(" Bizimle İletişime Geçin ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/universiteler/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bj2A641d.mjs.map
