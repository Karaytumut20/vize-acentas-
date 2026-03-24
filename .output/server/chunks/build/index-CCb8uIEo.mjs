import { _ as __nuxt_component_0 } from './nuxt-link-CRYofgM8.mjs';
import { defineComponent, mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useSeoMeta, s as siteConfig } from './server.mjs';
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
      title: `Yurtdışı Eğitim Makaleleri | ${siteConfig.shortName}`,
      description: "Avrupa'da sınavsız tıp ve mühendislik eğitimi almak isteyen öğrenciler için hazırlanmış detaylı rehberler ve vize şartları blogu."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-slate-50 pt-32 pb-24 selection:bg-emerald-200 selection:text-emerald-900" }, _attrs))}><div class="px-page-margin max-w-7xl mx-auto"><div class="text-center mb-16 max-w-3xl mx-auto"><h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6">Uluslararası Eğitim Makaleleri</h1><p class="text-lg md:text-xl text-slate-600 font-medium leading-relaxed"> Kuzey Makedonya eğitim prosedürleri, sınavsız Mavi Diploma almanın yolları ve Avrupa&#39;da öğrencilik hayatı hakkında rehber içerikler. </p></div><div class="flex flex-wrap justify-center gap-4 mb-16"><button class="bg-slate-900 text-white px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase shadow-sm">Tümü</button><button class="bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-colors">Goce Delcev UGD</button><button class="bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-colors">Sınavsız Geçiş</button><button class="bg-white text-slate-600 border border-slate-200 hover:bg-slate-50 px-6 py-2 rounded-full text-sm font-bold tracking-widest uppercase transition-colors">Oturum İzmi</button></div><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><article class="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 group flex flex-col">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/yazilar/turkiyede-universite-kazanamadim-demeyin-neden-sinavsiz-goce-delcev",
        class: "block h-56 bg-slate-100 overflow-hidden border-b border-slate-100 relative"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10"${_scopeId}></div><span class="absolute inset-0 flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs z-0"${_scopeId}>[Sınav Stresi Analiz Görseli]</span><span class="absolute bottom-4 left-4 z-20 bg-emerald-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md"${_scopeId}>VİZYON YAZISI</span>`);
          } else {
            return [
              createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" }),
              createVNode("span", { class: "absolute inset-0 flex items-center justify-center text-slate-400 font-bold tracking-widest uppercase text-xs z-0" }, "[Sınav Stresi Analiz Görseli]"),
              createVNode("span", { class: "absolute bottom-4 left-4 z-20 bg-emerald-600 text-white text-[10px] uppercase tracking-widest font-bold px-3 py-1 rounded-md" }, "VİZYON YAZISI")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="p-8 flex flex-col flex-1"><div class="flex items-center gap-3 text-xs font-bold text-slate-400 uppercase tracking-widest mb-4"><span>Güncel Kayıt Rehberi</span><span class="w-1 h-1 bg-slate-300 rounded-full"></span><span>5 Dk Okuma</span></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/yazilar/turkiyede-universite-kazanamadim-demeyin-neden-sinavsiz-goce-delcev",
        class: "block"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<h2 class="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-4 tracking-tight leading-tight"${_scopeId}> Türkiye&#39;de Üniversite Kazanamadım Demeyin: Neden Sınavsız Goce Delcev&#39;i Seçmelisiniz? </h2>`);
          } else {
            return [
              createVNode("h2", { class: "text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors mb-4 tracking-tight leading-tight" }, " Türkiye'de Üniversite Kazanamadım Demeyin: Neden Sınavsız Goce Delcev'i Seçmelisiniz? ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-slate-600 font-medium mb-6 line-clamp-3"> Milyonlarca adayın girdiği YKS stresi, mezuna kalma kaygısı sömürüsüne son. Avrupa kapılarını lise diploması ile sonuna kadar açan Goce Delcev... </p><div class="mt-auto border-t border-slate-100 pt-6 flex items-center justify-between"><span class="text-xs font-bold text-slate-500 uppercase tracking-widest">Champ Analiz</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/yazilar/turkiyede-universite-kazanamadim-demeyin-neden-sinavsiz-goce-delcev",
        class: "text-slate-900 group-hover:text-emerald-600 font-bold text-sm tracking-wide transition-colors flex items-center gap-1"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Makaleyi Oku <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Makaleyi Oku "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "16",
                height: "16",
                fill: "currentColor",
                viewBox: "0 0 16 16"
              }, [
                createVNode("path", {
                  "fill-rule": "evenodd",
                  d: "M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"
                })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></article></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/yazilar/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CCb8uIEo.mjs.map
