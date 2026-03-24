import { _ as __nuxt_component_0 } from './nuxt-link-mRelJtcF.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, useSSRContext } from 'vue';
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
      title: `Programlar & Açık Üniversite | ${siteConfig.shortName}`,
      description: "Açıktan üniversite okumak, WAT ve kariyer programları listemiz."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full tracking-tight min-h-screen" }, _attrs))}><section class="relative w-full px-page-margin pt-40 pb-16 border-b border-slate-200"><div class="grid w-full grid-cols-12 gap-grid-gutter"><div class="col-span-12 md:col-span-8"><h1 class="text-5xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6"> Eğitim Programları </h1><p class="text-xl font-normal tracking-tight text-slate-600 mt-4 leading-relaxed max-w-2xl"> Yalnızca standart üniversite bölümleri değil; tamamen online, pratik tecrübeye dayalı veya transfer süreçlerine göre modüler çözüm üreten program seçeneklerimiz. </p></div></div></section><section class="w-full px-page-margin py-16 bg-slate-50/50"><div class="grid w-full grid-cols-1 md:grid-cols-2 gap-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/programlar/aciktan-universite-okumak",
        class: "group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full aspect-[2/1] bg-slate-100 border-b border-slate-200 flex items-center justify-center"${_scopeId}><span class="text-slate-400 font-semibold tracking-tight text-sm"${_scopeId}>[Görsel Alanı - Laptop/Açıktan Öğrenim]</span></div><div class="p-8"${_scopeId}><h3 class="text-3xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors"${_scopeId}>Açıktan Üniversite Okumak</h3><p class="text-slate-600 tracking-tight leading-relaxed mb-6"${_scopeId}>Çalışırken örgün eğitimin stresini taşımadan, tamamen online ders alarak Avrupa diploması kazanma fırsatı (2026 güncel yönergesiyle).</p><span class="inline-block text-sm font-bold tracking-tight text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full"${_scopeId}>Programı İncele</span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full aspect-[2/1] bg-slate-100 border-b border-slate-200 flex items-center justify-center" }, [
                createVNode("span", { class: "text-slate-400 font-semibold tracking-tight text-sm" }, "[Görsel Alanı - Laptop/Açıktan Öğrenim]")
              ]),
              createVNode("div", { class: "p-8" }, [
                createVNode("h3", { class: "text-3xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors" }, "Açıktan Üniversite Okumak"),
                createVNode("p", { class: "text-slate-600 tracking-tight leading-relaxed mb-6" }, "Çalışırken örgün eğitimin stresini taşımadan, tamamen online ders alarak Avrupa diploması kazanma fırsatı (2026 güncel yönergesiyle)."),
                createVNode("span", { class: "inline-block text-sm font-bold tracking-tight text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full" }, "Programı İncele")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/programlar/work-and-travel",
        class: "group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full aspect-[2/1] bg-slate-100 border-b border-slate-200 flex items-center justify-center"${_scopeId}><span class="text-slate-400 font-semibold tracking-tight text-sm"${_scopeId}>[Görsel Alanı - New York/Work &amp; Travel]</span></div><div class="p-8"${_scopeId}><h3 class="text-3xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors"${_scopeId}>Work And Travel (WAT)</h3><p class="text-slate-600 tracking-tight leading-relaxed mb-6"${_scopeId}>Amerika&#39;da hem çalışıp, hem kültür edinip hem de dil yeteneklerinizi pratik ile mükemmelleştirdiğiniz efsane programın detayları.</p><span class="inline-block text-sm font-bold tracking-tight text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full"${_scopeId}>Programı İncele</span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full aspect-[2/1] bg-slate-100 border-b border-slate-200 flex items-center justify-center" }, [
                createVNode("span", { class: "text-slate-400 font-semibold tracking-tight text-sm" }, "[Görsel Alanı - New York/Work & Travel]")
              ]),
              createVNode("div", { class: "p-8" }, [
                createVNode("h3", { class: "text-3xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors" }, "Work And Travel (WAT)"),
                createVNode("p", { class: "text-slate-600 tracking-tight leading-relaxed mb-6" }, "Amerika'da hem çalışıp, hem kültür edinip hem de dil yeteneklerinizi pratik ile mükemmelleştirdiğiniz efsane programın detayları."),
                createVNode("span", { class: "inline-block text-sm font-bold tracking-tight text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full" }, "Programı İncele")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/programlar/yatay-gecis",
        class: "group relative bg-white border border-slate-200 rounded-3xl overflow-hidden shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-full aspect-[2/1] bg-slate-100 border-b border-slate-200 flex items-center justify-center"${_scopeId}><span class="text-slate-400 font-semibold tracking-tight text-sm"${_scopeId}>[Görsel Alanı - Öğrenci Evrak Devri]</span></div><div class="p-8"${_scopeId}><h3 class="text-3xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors"${_scopeId}>Yurt Dışına Yatay Geçiş</h3><p class="text-slate-600 tracking-tight leading-relaxed mb-6"${_scopeId}>Türkiye&#39;deki üniversite eğitiminiz esnasında sahip olduğunuz AKTS kredilerinizi hedef Avrupa üniversitesine güvenle aktarma süreci.</p><span class="inline-block text-sm font-bold tracking-tight text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full"${_scopeId}>Detayları Gör</span></div>`);
          } else {
            return [
              createVNode("div", { class: "w-full aspect-[2/1] bg-slate-100 border-b border-slate-200 flex items-center justify-center" }, [
                createVNode("span", { class: "text-slate-400 font-semibold tracking-tight text-sm" }, "[Görsel Alanı - Öğrenci Evrak Devri]")
              ]),
              createVNode("div", { class: "p-8" }, [
                createVNode("h3", { class: "text-3xl font-bold tracking-tight text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors" }, "Yurt Dışına Yatay Geçiş"),
                createVNode("p", { class: "text-slate-600 tracking-tight leading-relaxed mb-6" }, "Türkiye'deki üniversite eğitiminiz esnasında sahip olduğunuz AKTS kredilerinizi hedef Avrupa üniversitesine güvenle aktarma süreci."),
                createVNode("span", { class: "inline-block text-sm font-bold tracking-tight text-emerald-600 bg-emerald-50 px-4 py-2 rounded-full" }, "Detayları Gör")
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/programlar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-Bs5KbDlP.mjs.map
