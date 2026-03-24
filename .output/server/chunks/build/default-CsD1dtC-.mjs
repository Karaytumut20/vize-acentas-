import { _ as __nuxt_component_0$1 } from './nuxt-link-mRelJtcF.mjs';
import { defineComponent, mergeProps, ref, watch, withCtx, createVNode, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderSlot, ssrRenderStyle, ssrRenderClass, ssrInterpolate } from 'vue/server-renderer';
import { useRoute } from 'vue-router';
import { _ as _export_sfc } from './_plugin-vue_export-helper-1tPrXgE0.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "Navbar",
  __ssrInlineRender: true,
  setup(__props) {
    const isMobileMenuOpen = ref(false);
    const route = useRoute();
    watch(() => route.path, () => {
      isMobileMenuOpen.value = false;
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0$1;
      _push(`<header${ssrRenderAttrs(mergeProps({ class: "fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300 shadow-sm text-slate-900" }, _attrs))}><div class="px-page-margin h-20 max-w-7xl mx-auto flex items-center justify-between">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "flex flex-col z-50"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span class="text-2xl font-black tracking-tighter text-slate-900 leading-none"${_scopeId}> CHAMP<span class="text-emerald-600"${_scopeId}>.</span></span><span class="text-[0.65rem] font-bold tracking-widest text-slate-500 uppercase mt-1"${_scopeId}>Eğitim Koçluğu</span>`);
          } else {
            return [
              createVNode("span", { class: "text-2xl font-black tracking-tighter text-slate-900 leading-none" }, [
                createTextVNode(" CHAMP"),
                createVNode("span", { class: "text-emerald-600" }, ".")
              ]),
              createVNode("span", { class: "text-[0.65rem] font-bold tracking-widest text-slate-500 uppercase mt-1" }, "Eğitim Koçluğu")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<nav class="hidden lg:flex items-center gap-10">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kurumsal",
        "active-class": "text-emerald-600 border-b-2 border-emerald-600 pb-1",
        class: "text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors uppercase tracking-wide"
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
      _push(`<div class="relative group h-full flex items-center"><button class="text-sm font-bold text-slate-600 group-hover:text-emerald-600 transition-colors uppercase tracking-wide flex items-center gap-1 pb-1"> Üniversiteler <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"></path></svg></button><div class="absolute top-[3rem] left-1/2 -translate-x-1/2 bg-white border border-slate-200 shadow-xl rounded-xl py-3 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform origin-top scale-95 group-hover:scale-100 z-50">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler",
        class: "block px-6 py-3 text-sm font-bold text-slate-600 hover:text-emerald-600 hover:bg-slate-50 transition-colors border-b border-slate-100"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Kuzey Makedonya`);
          } else {
            return [
              createTextVNode("Kuzey Makedonya")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler/goce-delcev-universitesi",
        class: "block px-6 py-3 text-sm font-medium text-slate-500 hover:text-emerald-600 hover:bg-slate-50 transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`- Goce Delcev Üni`);
          } else {
            return [
              createTextVNode("- Goce Delcev Üni")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sss",
        "active-class": "text-emerald-600 border-b-2 border-emerald-600 pb-1",
        class: "text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors uppercase tracking-wide"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`S.S.S`);
          } else {
            return [
              createTextVNode("S.S.S")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/yazilar",
        "active-class": "text-emerald-600 border-b-2 border-emerald-600 pb-1",
        class: "text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors uppercase tracking-wide"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Makaleler`);
          } else {
            return [
              createTextVNode("Makaleler")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        "active-class": "text-emerald-600 border-b-2 border-emerald-600 pb-1",
        class: "text-sm font-bold text-slate-600 hover:text-emerald-600 transition-colors uppercase tracking-wide"
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
      _push(`</nav><a href="https://wa.me/908505577899" target="_blank" class="hidden lg:flex items-center gap-2 bg-slate-900 text-white px-6 py-2.5 rounded-lg font-bold text-sm tracking-wide hover:bg-emerald-600 transition-colors shadow-sm"> Whatsapp Randevu </a><button class="lg:hidden z-50 p-2 text-slate-600 hover:text-slate-900 focus:outline-none" aria-label="Toggle Menu">`);
      if (!isMobileMenuOpen.value) {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"></path></svg>`);
      } else {
        _push(`<svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"><path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"></path></svg>`);
      }
      _push(`</button><div class="fixed inset-0 bg-slate-900/40 backdrop-blur-sm z-40 lg:hidden transition-opacity" style="${ssrRenderStyle(isMobileMenuOpen.value ? null : { display: "none" })}"></div><nav class="${ssrRenderClass([isMobileMenuOpen.value ? "translate-x-0" : "translate-x-full", "fixed top-0 right-0 h-full w-4/5 max-w-sm bg-white shadow-2xl z-40 lg:hidden transform transition-transform duration-300 ease-in-out border-l border-slate-200"])}"><div class="flex flex-col h-full pt-28 px-8 pb-10 overflow-y-auto"><div class="flex flex-col gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/kurumsal",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "text-xl font-bold text-slate-900 border-b border-slate-100 pb-4"
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler/goce-delcev-universitesi",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "text-xl font-bold text-slate-900 border-b border-slate-100 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Goce Delcev Üniversitesi`);
          } else {
            return [
              createTextVNode("Goce Delcev Üniversitesi")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/sss",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "text-xl font-bold text-slate-900 border-b border-slate-100 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`S.S.S.`);
          } else {
            return [
              createTextVNode("S.S.S.")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/yazilar",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "text-xl font-bold text-slate-900 border-b border-slate-100 pb-4"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Makaleler`);
          } else {
            return [
              createTextVNode("Makaleler")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        onClick: ($event) => isMobileMenuOpen.value = false,
        class: "text-xl font-bold text-slate-900 border-b border-slate-100 pb-4"
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
      _push(`</div><div class="mt-auto"><a href="https://wa.me/908505577899" target="_blank" class="flex justify-center items-center py-4 bg-emerald-600 text-white rounded-xl font-bold w-full mt-8 shadow-md"> Whatsapp Danışma Hattı </a></div></div></nav></div></header>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Navbar.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_0 = Object.assign(_sfc_main$2, { __name: "Navbar" });
const _sfc_main$1 = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_NuxtLink = __nuxt_component_0$1;
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "bg-slate-900 text-slate-300 py-20 border-t border-slate-800 relative z-10 selection:bg-emerald-500 selection:text-white" }, _attrs))}><div class="px-page-margin max-w-7xl mx-auto"><div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8"><div class="flex flex-col gap-6 lg:pr-8">`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/",
    class: "flex flex-col"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-3xl font-black tracking-tighter text-white leading-none"${_scopeId}> CHAMP<span class="text-emerald-500"${_scopeId}>.</span></span><span class="text-xs font-bold tracking-widest text-slate-500 uppercase mt-1"${_scopeId}>Eğitim Koçluğu</span>`);
      } else {
        return [
          createVNode("span", { class: "text-3xl font-black tracking-tighter text-white leading-none" }, [
            createTextVNode(" CHAMP"),
            createVNode("span", { class: "text-emerald-500" }, ".")
          ]),
          createVNode("span", { class: "text-xs font-bold tracking-widest text-slate-500 uppercase mt-1" }, "Eğitim Koçluğu")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`<p class="text-sm text-slate-400 leading-relaxed font-medium"> Kuzey Makedonya Goce Delcev Üniversitesi (İştip) Türkiye Resmi Kayıt ve Yaşam Boyu Eğitim Koordinatörü. YKS strese girmeden tıp, hukuk, mühendislik hayallerinize güvenle ulaşın. </p></div><div class="flex flex-col gap-6"><h4 class="text-white font-bold tracking-widest uppercase text-sm border-b border-slate-800 pb-2 inline-block">Makedonya UGD</h4><ul class="flex flex-col gap-3 text-sm font-medium"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/universiteler/goce-delcev-universitesi",
    class: "hover:text-emerald-400 transition-colors flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-emerald-500"${_scopeId}>›</span> Tıp ve Diş Hekimliği`);
      } else {
        return [
          createVNode("span", { class: "text-emerald-500" }, "›"),
          createTextVNode(" Tıp ve Diş Hekimliği")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/universiteler/goce-delcev-universitesi",
    class: "hover:text-emerald-400 transition-colors flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-emerald-500"${_scopeId}>›</span> Yazılım ve Mühendislik`);
      } else {
        return [
          createVNode("span", { class: "text-emerald-500" }, "›"),
          createTextVNode(" Yazılım ve Mühendislik")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/universiteler/goce-delcev-universitesi",
    class: "hover:text-emerald-400 transition-colors flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-emerald-500"${_scopeId}>›</span> Mimarlık ve Ekonomi`);
      } else {
        return [
          createVNode("span", { class: "text-emerald-500" }, "›"),
          createTextVNode(" Mimarlık ve Ekonomi")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/universiteler/goce-delcev-universitesi",
    class: "hover:text-emerald-400 transition-colors flex items-center gap-2"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`<span class="text-emerald-500"${_scopeId}>›</span> Makedonca Dil Hazırlık`);
      } else {
        return [
          createVNode("span", { class: "text-emerald-500" }, "›"),
          createTextVNode(" Makedonca Dil Hazırlık")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="flex flex-col gap-6"><h4 class="text-white font-bold tracking-widest uppercase text-sm border-b border-slate-800 pb-2 inline-block">Hızlı Erişim</h4><ul class="flex flex-col gap-3 text-sm font-medium"><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/kurumsal",
    class: "hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Hakkımızda`);
      } else {
        return [
          createTextVNode("Hakkımızda")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/sss",
    class: "hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Sıkça Sorulan Sorular`);
      } else {
        return [
          createTextVNode("Sıkça Sorulan Sorular")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/garanti-ve-guvence",
    class: "hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Garanti ve Sözleşmeler`);
      } else {
        return [
          createTextVNode("Garanti ve Sözleşmeler")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li><li>`);
  _push(ssrRenderComponent(_component_NuxtLink, {
    to: "/yazilar",
    class: "hover:text-white transition-colors"
  }, {
    default: withCtx((_, _push2, _parent2, _scopeId) => {
      if (_push2) {
        _push2(`Eğitim Makaleleri`);
      } else {
        return [
          createTextVNode("Eğitim Makaleleri")
        ];
      }
    }),
    _: 1
  }, _parent));
  _push(`</li></ul></div><div class="flex flex-col gap-6"><h4 class="text-white font-bold tracking-widest uppercase text-sm border-b border-slate-800 pb-2 inline-block">İletişim &amp; Rezervasyon</h4><ul class="flex flex-col gap-3 text-sm font-medium"><li class="flex items-start gap-3"><span class="text-emerald-500 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg></span><a href="tel:08505577899" class="hover:text-white transition-colors">0850 557 78 99</a></li><li class="flex items-start gap-3"><span class="text-emerald-500 mt-1"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"></path></svg></span><span>İstanbul, Türkiye <br> <a href="/iletisim" class="text-emerald-500 hover:text-emerald-400 transition-colors text-xs underline mt-1 inline-block">Şubelerimizi Görüntüle</a></span></li></ul></div></div><div class="border-t border-slate-800 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-500"><p>© ${ssrInterpolate((/* @__PURE__ */ new Date()).getFullYear())} Champ Eğitim Koçluğu. Tüm Hakları Saklıdır.</p><div class="flex gap-4"><a href="#" class="hover:text-white transition-colors uppercase tracking-widest">KVKK Aydınlatma Metni</a><a href="#" class="hover:text-white transition-colors uppercase tracking-widest">Kullanım Koşulları</a></div></div></div></footer>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/Footer.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_1 = /* @__PURE__ */ Object.assign(_export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender]]), { __name: "Footer" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "default",
  __ssrInlineRender: true,
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Navbar = __nuxt_component_0;
      const _component_Footer = __nuxt_component_1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "layout-wrapper relative w-full pt-safe-top pb-safe-bottom" }, _attrs))}>`);
      _push(ssrRenderComponent(_component_Navbar, null, null, _parent));
      _push(`<main class="page-content min-h-screen pt-24">`);
      ssrRenderSlot(_ctx.$slots, "default", {}, null, _push, _parent);
      _push(`</main>`);
      _push(ssrRenderComponent(_component_Footer, null, null, _parent));
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
//# sourceMappingURL=default-CsD1dtC-.mjs.map
