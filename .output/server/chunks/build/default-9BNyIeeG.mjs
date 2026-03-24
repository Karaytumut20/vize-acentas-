import { _ as __nuxt_component_0$1 } from './nuxt-link-CRYofgM8.mjs';
import { defineComponent, mergeProps, ref, withCtx, createVNode, createTextVNode, unref, toDisplayString, openBlock, createBlock, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderClass, ssrRenderAttr, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { v as visaDatabase } from './visas-DtAfswUs.mjs';
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
import './server.mjs';
import 'pinia';
import '@vue/shared';
import '@unhead/schema-org/vue';
import '../routes/renderer.mjs';
import 'vue-bundle-renderer/runtime';
import 'unhead/server';
import 'devalue';
import 'unhead/plugins';
import 'unhead/utils';

const _sfc_main$3 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    useRoute();
    const isScrolled = ref(false);
    const isMobileMenuOpen = ref(false);
    const isServicesOpen = ref(false);
    ref(false);
    const servicesLinks = Object.entries(visaDatabase).map(([slug, data]) => ({
      name: data.title,
      desc: data.subtitle.length > 35 ? data.subtitle.substring(0, 32) + "..." : data.subtitle,
      path: `/vizeler/${slug}`
    }));
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({
        class: [
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled.value ? "bg-white shadow-md py-3" : "bg-transparent py-5"
        ],
        role: "banner"
      }, _attrs))}><div class="container mx-auto px-4 md:px-6 lg:px-8"><div class="flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex flex-col relative z-20 group",
        "aria-label": "Ana Sayfa"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="${ssrRenderClass([
              "text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
              isScrolled.value || isMobileMenuOpen.value ? "text-[#0f172a]" : "text-white"
            ])}"${_scopeId}> Champ<span class="text-[#f59e0b]"${_scopeId}>Vize</span></span><span class="${ssrRenderClass([
              "text-[0.65rem] tracking-widest font-medium uppercase mt-0.5 transition-colors duration-300",
              isScrolled.value || isMobileMenuOpen.value ? "text-gray-500" : "text-gray-200"
            ])}"${_scopeId}> Kurumsal Danışmanlık </span>`);
          } else {
            return [
              createVNode("span", {
                class: [
                  "text-2xl md:text-3xl font-bold tracking-tight transition-colors duration-300",
                  isScrolled.value || isMobileMenuOpen.value ? "text-[#0f172a]" : "text-white"
                ]
              }, [
                createTextVNode(" Champ"),
                createVNode("span", { class: "text-[#f59e0b]" }, "Vize")
              ], 2),
              createVNode("span", {
                class: [
                  "text-[0.65rem] tracking-widest font-medium uppercase mt-0.5 transition-colors duration-300",
                  isScrolled.value || isMobileMenuOpen.value ? "text-gray-500" : "text-gray-200"
                ]
              }, " Kurumsal Danışmanlık ", 2)
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-8" role="navigation" aria-label="Ana Menü">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: ["font-medium transition-colors hover:text-[#f59e0b]", isScrolled.value ? "text-gray-800" : "text-white"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ana Sayfa`);
          } else {
            return [
              createTextVNode("Ana Sayfa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kurumsal",
        class: ["font-medium transition-colors hover:text-[#f59e0b]", isScrolled.value ? "text-gray-800" : "text-white"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kurumsal`);
          } else {
            return [
              createTextVNode("Kurumsal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="relative group"><button class="${ssrRenderClass(["flex items-center gap-1 font-medium transition-colors hover:text-[#f59e0b]", isScrolled.value ? "text-gray-800" : "text-white"])}" aria-haspopup="true"${ssrRenderAttr("aria-expanded", isServicesOpen.value)}> Vizeler <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg></button><div class="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[800px] opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top"><div class="bg-white rounded-2xl shadow-2xl p-8 border border-gray-100 grid grid-cols-3 gap-6 relative before:absolute before:-top-2 before:left-1/2 before:-translate-x-1/2 before:border-8 before:border-transparent before:border-b-white"><!--[-->`);
      ssrRenderList(unref(servicesLinks), (visa) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: visa.path,
          to: visa.path,
          class: "group/item flex flex-col p-3 rounded-lg hover:bg-gray-50 transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`<span class="text-gray-900 font-semibold mb-1 group-hover/item:text-[#f59e0b] transition-colors"${_scopeId}>${ssrInterpolate(visa.name)}</span><span class="text-xs text-gray-500 leading-relaxed"${_scopeId}>${ssrInterpolate(visa.desc)}</span>`);
            } else {
              return [
                createVNode("span", { class: "text-gray-900 font-semibold mb-1 group-hover/item:text-[#f59e0b] transition-colors" }, toDisplayString(visa.name), 1),
                createVNode("span", { class: "text-xs text-gray-500 leading-relaxed" }, toDisplayString(visa.desc), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]--><div class="col-span-3 pt-6 mt-4 border-t border-gray-100 flex justify-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vizeler",
        class: "text-sm font-bold text-[#1e293b] hover:text-[#f59e0b] inline-flex items-center gap-2 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tüm Vize Hizmetlerini Görüntüle <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="M5 12h14"${_scopeId}></path><path d="m12 5 7 7-7 7"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Tüm Vize Hizmetlerini Görüntüle "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                class: "w-4 h-4",
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
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: ["font-medium transition-colors hover:text-[#f59e0b]", isScrolled.value ? "text-gray-800" : "text-white"]
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`İletişim`);
          } else {
            return [
              createTextVNode("İletişim")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="hidden lg:flex items-center gap-4 relative z-20"><a href="tel:+9008501234567" class="${ssrRenderClass(["flex items-center gap-2 font-semibold text-sm transition-colors", isScrolled.value ? "text-[#0f172a]" : "text-white"])}" aria-label="Müşteri Hizmetlerini Ara"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 0850 123 45 67 </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "bg-[#f59e0b] hover:bg-[#d97706] text-white px-6 py-2.5 rounded-full font-semibold transition-all transform hover:scale-105 shadow-lg shadow-amber-500/30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hemen Başvur `);
          } else {
            return [
              createTextVNode(" Hemen Başvur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><button class="${ssrRenderClass([isScrolled.value || isMobileMenuOpen.value ? "text-gray-900" : "text-white", "lg:hidden relative z-20 p-2 text-2xl"])}"${ssrRenderAttr("aria-expanded", isMobileMenuOpen.value)} aria-label="Mobil Menüyü Aç/Kapat">`);
      if (!isMobileMenuOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>`);
      }
      _push(`</button></div></div><div class="${ssrRenderClass([isMobileMenuOpen.value ? "translate-x-0" : "translate-x-full", "fixed inset-0 bg-white z-10 lg:hidden transition-transform duration-500 max-h-screen overflow-y-auto"])}"><div class="pt-24 px-6 pb-12 flex flex-col h-full"><nav class="flex flex-col gap-6 text-xl font-medium text-[#0f172a]" role="navigation" aria-label="Mobil Menü">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "border-b border-gray-100 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Ana Sayfa`);
          } else {
            return [
              createTextVNode("Ana Sayfa")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kurumsal",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "border-b border-gray-100 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kurumsal`);
          } else {
            return [
              createTextVNode("Kurumsal")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="flex flex-col gap-4 border-b border-gray-100 pb-4"><span class="text-gray-400 text-sm uppercase tracking-wider font-bold">Vize Kategorileri</span><!--[-->`);
      ssrRenderList(unref(servicesLinks), (visa) => {
        _push(ssrRenderComponent(_component_NuxtLink, {
          key: visa.path,
          to: visa.path,
          onClick: ($event) => isMobileMenuOpen.value = false,
          class: "pl-4 text-base font-medium text-gray-700 hover:text-[#f59e0b]"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(visa.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(visa.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
      });
      _push(`<!--]-->`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vizeler",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "pl-4 text-sm font-semibold text-[#f59e0b] mt-2"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Tüm Vizeler → `);
          } else {
            return [
              createTextVNode(" Tüm Vizeler → ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "border-b border-gray-100 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`İletişim`);
          } else {
            return [
              createTextVNode("İletişim")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav><div class="mt-auto pt-8 flex flex-col gap-4"><a href="tel:+9008501234567" class="flex items-center justify-center gap-2 bg-gray-50 text-[#0f172a] py-3 rounded-lg font-bold"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-gray-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 0850 123 45 67 </a>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "bg-[#f59e0b] text-white text-center py-3 rounded-lg font-bold shadow-lg shadow-amber-500/30"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hemen Başvur `);
          } else {
            return [
              createTextVNode(" Hemen Başvur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></header>`);
    };
  }
});
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$3, { __name: "Navbar" });
const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  __ssrInlineRender: true,
  setup(__props) {
    const currentYear = (/* @__PURE__ */ new Date()).getFullYear();
    const visaLinks = Object.entries(visaDatabase).slice(0, 8).map(([slug, data]) => ({
      name: data.title,
      path: `/vizeler/${slug}`
    }));
    const corporateLinks = [
      { name: "Hakkımızda", path: "/kurumsal" },
      { name: "Vizyon & Misyon", path: "/kurumsal#vizyon-misyon" },
      { name: "Sıkça Sorulan Sorular", path: "/#sss" },
      { name: "Müşteri Yorumları", path: "/#yorumlar" },
      { name: "İletişim ve Şubeler", path: "/iletisim" }
    ];
    const legalLinks = [
      { name: "Gizlilik ve Güvenlik", path: "/gizlilik-politikasi" },
      { name: "Kişisel Verilerin Korunması", path: "/gizlilik-politikasi" },
      { name: "Çerez Politikası", path: "/gizlilik-politikasi" },
      { name: "Hizmet Sözleşmesi", path: "/gizlilik-politikasi" }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<footer${ssrRenderAttrs(mergeProps({
        class: "bg-[#0f172a] text-gray-300 pt-16 md:pt-24 pb-8",
        role: "contentinfo",
        "aria-label": "Site Alt Bilgisi"
      }, _attrs))}><div class="container mx-auto px-4 md:px-6 lg:px-8"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16"><div class="lg:col-span-4">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex flex-col mb-6",
        "aria-label": "Ana Sayfa"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-3xl font-bold tracking-tight text-white mb-1"${_scopeId}> Champ<span class="text-[#f59e0b]"${_scopeId}>Vize</span></span><span class="text-xs tracking-widest font-medium uppercase text-gray-500"${_scopeId}> Kurumsal Danışmanlık </span>`);
          } else {
            return [
              createVNode("span", { class: "text-3xl font-bold tracking-tight text-white mb-1" }, [
                createTextVNode(" Champ"),
                createVNode("span", { class: "text-[#f59e0b]" }, "Vize")
              ]),
              createVNode("span", { class: "text-xs tracking-widest font-medium uppercase text-gray-500" }, " Kurumsal Danışmanlık ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<p class="text-sm text-gray-400 leading-relaxed mb-6 max-w-sm"> Türkiye&#39;nin öncü ve en yüksek onay oranına sahip vize danışmanlık firması. Amerika, İngiltere ve Schengen bölgeleri başta olmak üzere tüm dünya için güvenilir çözümler üretiyoruz. </p><div class="flex items-center gap-4"><a href="https://facebook.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f59e0b] hover:text-white transition-colors aria-label=&#39;Facebook&#39;"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f59e0b] hover:text-white transition-colors aria-label=&#39;Instagram&#39;"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#f59e0b] hover:text-white transition-colors aria-label=&#39;LinkedIn&#39;"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect width="4" height="12" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a></div></div><div class="lg:col-span-2"><h3 class="text-white font-bold text-lg mb-6">Popüler Vizeler</h3><ul class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(unref(visaLinks), (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "text-sm text-gray-400 hover:text-[#f59e0b] hover:translate-x-1 inline-block transition-transform"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="lg:col-span-2"><h3 class="text-white font-bold text-lg mb-6">Kurumsal</h3><ul class="flex flex-col gap-3"><!--[-->`);
      ssrRenderList(corporateLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "text-sm text-gray-400 hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div><div class="lg:col-span-4"><h3 class="text-white font-bold text-lg mb-6">Bize Ulaşın</h3><div class="flex flex-col gap-4 mb-8"><a href="tel:+9008501234567" class="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"><div class="mt-0.5 text-[#f59e0b] group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></div><div><strong class="block text-white mb-0.5">Müşteri Destek Hattı</strong> 0850 123 45 67 </div></a><div class="flex items-start gap-3 text-sm text-gray-400 cursor-default"><div class="mt-0.5 text-[#f59e0b]"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg></div><div><strong class="block text-white mb-0.5">Merkez Ofis</strong> Levent Mah. Büyükdere Cad. No:199<br>Şişli, İstanbul </div></div><a href="mailto:info@champvize.com.tr" class="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors group"><div class="mt-0.5 text-[#f59e0b] group-hover:scale-110 transition-transform"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></svg></div><div><strong class="block text-white mb-0.5">E-Posta</strong> info@champvize.com.tr </div></a></div><h4 class="text-white font-semibold text-sm mb-3">Güncel Duyurular İçin Abone Olun</h4><form class="flex gap-2"><input type="email" placeholder="E-posta adresiniz" class="bg-white/5 border border-white/10 rounded-lg px-4 py-2.5 w-full text-sm text-white focus:outline-none focus:border-[#f59e0b] transition-colors placeholder:text-gray-600" required><button type="submit" class="bg-[#f59e0b] hover:bg-[#d97706] text-white px-4 py-2.5 rounded-lg transition-colors aria-label=&#39;Abone Ol&#39;"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg></button></form></div></div><div class="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"><p class="text-xs text-gray-500"> © ${ssrInterpolate(unref(currentYear))} Champ Vize Danışmanlık. Tüm hakları saklıdır. </p><ul class="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-gray-500"><!--[-->`);
      ssrRenderList(legalLinks, (link) => {
        _push(`<li>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: link.path,
          class: "hover:text-white transition-colors"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(`${ssrInterpolate(link.name)}`);
            } else {
              return [
                createTextVNode(toDisplayString(link.name), 1)
              ];
            }
          }),
          _: 2
        }, _parent));
        _push(`</li>`);
      });
      _push(`<!--]--></ul></div></div></footer>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_1 = Object.assign(_sfc_main$2, { __name: "Footer" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "FloatingWhatsApp",
  __ssrInlineRender: true,
  setup(__props) {
    const isVisible = ref(false);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        class: ["fixed bottom-6 right-6 z-[9999] transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] transform origin-bottom-right", isVisible.value ? "scale-100 opacity-100 translate-y-0" : "scale-0 opacity-0 translate-y-10"]
      }, _attrs))}><div class="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full z-10 animate-pulse border-2 border-white"></div><div class="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30"></div><a href="https://wa.me/908501234567?text=Merhaba,%20vize%20işlemleri%20hakkında%20bilgi%20almak%20istiyorum." target="_blank" rel="noopener noreferrer" class="relative flex items-center justify-center w-16 h-16 bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full shadow-2xl transition-all duration-300 hover:scale-110 group" aria-label="WhatsApp Canlı Destek"><svg xmlns="http://www.w3.org/2000/svg" class="w-8 h-8 transform group-hover:-rotate-6 transition-transform" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51a12.8 12.8 0 0 0-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"></path></svg></a></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/FloatingWhatsApp.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$1, { __name: "FloatingWhatsApp" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      const _component_FloatingWhatsApp = __nuxt_component_2;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-wrapper relative w-full pt-safe-top pb-safe-bottom" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main class="page-content min-h-screen">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
      _push(ssrRenderComponent(_component_FloatingWhatsApp, null, null, _parent));
      _push(`</div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("layouts/default.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=default-9BNyIeeG.mjs.map
