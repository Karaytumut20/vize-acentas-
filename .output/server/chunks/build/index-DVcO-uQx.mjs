import { _ as __nuxt_component_0 } from './nuxt-link-CRYofgM8.mjs';
import { _ as __nuxt_component_1 } from './NuxtImg-Guqt9Q5m.mjs';
import { defineComponent, mergeProps, unref, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';
import { useRouter } from 'vue-router';
import { v as visaDatabase } from './visas-DtAfswUs.mjs';
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
    useRouter();
    const popularVisas = Object.entries(visaDatabase).map(([slug, data]) => ({
      name: data.title,
      path: `/vizeler/${slug}`,
      img: data.heroImage
    }));
    useSeoMeta({
      title: "Tüm Vizeler | Champ Vize Danışmanlık",
      description: "Amerika, Schengen ve İngiltere vizeleri dahil olmak üzere sunduğumuz tüm danışmanlık hizmetlerini keşfedin."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      const _component_NuxtImg = __nuxt_component_1;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col font-sans pb-24" }, _attrs))}><section class="relative bg-[#0f172a] pt-40 pb-24 lg:pb-32 text-center shadow-lg"><div class="absolute inset-0 bg-[#f59e0b]/5"></div><div class="container mx-auto px-4 md:px-6 relative z-10"><h1 class="text-4xl md:text-5xl font-black text-white mb-6">Tüm Vize Hizmetlerimiz</h1><p class="text-lg text-gray-300 max-w-2xl mx-auto">Başvurmak istediğiniz ülkeyi seçin, ihtiyacınız olan evrak listesini ve profesyonel destek detaylarını görün.</p></div></section><div class="container mx-auto px-4 lg:px-8 mt-16 md:mt-24"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"><!--[-->`);
      ssrRenderList(unref(popularVisas), (visa) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: visa.path,
          to: visa.path,
          class: "group relative rounded-2xl overflow-hidden shadow-lg border border-gray-100 h-[350px] block backdrop-blur-sm transform hover:-translate-y-2 transition-transform duration-300"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(ssrRenderComponent(_component_NuxtImg, {
                src: visa.img,
                alt: visa.name,
                class: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
                format: "webp",
                loading: "lazy"
              }, null, _parent2, _scopeId));
              _push2(`<div class="absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent"${_scopeId}></div><div class="absolute bottom-0 left-0 right-0 p-8"${_scopeId}><h2 class="text-2xl font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors"${_scopeId}>${ssrInterpolate(visa.name)}</h2><span class="inline-flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-wider"${_scopeId}> Detayları İncele <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover:translate-x-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg></span></div>`);
            } else {
              return [
                createVNode(_component_NuxtImg, {
                  src: visa.img,
                  alt: visa.name,
                  class: "absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110",
                  format: "webp",
                  loading: "lazy"
                }, null, 8, ["src", "alt"]),
                createVNode("div", { class: "absolute inset-0 bg-gradient-to-t from-[#0f172a] via-[#0f172a]/60 to-transparent" }),
                createVNode("div", { class: "absolute bottom-0 left-0 right-0 p-8" }, [
                  createVNode("h2", { class: "text-2xl font-bold text-white mb-2 group-hover:text-[#f59e0b] transition-colors" }, toDisplayString(visa.name), 1),
                  createVNode("span", { class: "inline-flex items-center gap-2 text-sm font-bold text-[#f59e0b] uppercase tracking-wider" }, [
                    createTextVNode(" Detayları İncele "),
                    (openBlock(), createBlock("svg", {
                      xmlns: "http://www.w3.org/2000/svg",
                      class: "w-4 h-4 transition-transform duration-300 group-hover:translate-x-2",
                      viewBox: "0 0 24 24",
                      fill: "none",
                      stroke: "currentColor",
                      "stroke-width": "2",
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round"
                    }, [
                      createVNode("path", { d: "M5 12h14" }),
                      createVNode("path", { d: "m12 5 7 7-7 7" })
                    ]))
                  ])
                ])
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vizeler/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-DVcO-uQx.mjs.map
