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
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Açıktan Üniversite Okumak İçin Ne Yapmalıyım ? | ${siteConfig.shortName}`,
      description: "Champ Eğitim Koçluğu özel içeriğinde: Makedonya ve Bosna Hersek'te açıktan uzaktan eğitim lisans programı detayları ve lise kayıt şartları."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full tracking-tight min-h-screen" }, _attrs))}><section class="relative w-full h-[60vh] bg-slate-100 border-b border-slate-200 flex items-center justify-center overflow-hidden"><span class="text-slate-400 font-semibold tracking-widest z-0">[Görsel Alanı - Bilgisayar Başında Öğrenci, Açıktan Eğitim]</span><div class="absolute inset-0 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div><div class="absolute bottom-0 left-0 w-full px-page-margin pb-16 z-20"><h1 class="text-4xl md:text-7xl font-bold tracking-tighter text-slate-900 mb-4">Açıktan Üniversite<br>Okumak (2026 Rehberi)</h1><p class="text-xl text-slate-600 tracking-tight max-w-3xl">Çalışırken örgün eğitim diploma prestijine ulaşmanın garantili yolu.</p></div></section><section class="w-full px-page-margin py-section-gap"><div class="grid w-full grid-cols-12 gap-12 lg:gap-grid-gutter"><div class="col-span-12 lg:col-span-8 flex flex-col gap-10"><div><h2 class="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Açıktan Üniversite Okumak İçin Ne Yapmalıyım?</h2><p class="text-lg text-slate-600 leading-relaxed tracking-tight mb-4"> Özellikle Makedonya ve Bosna Hersek üniversitelerinin sunduğu uluslararası açıktan üniversite, (veya Open University / Distance Learning) öğrencinin çalıştığı için örgün eğitime devam edemediği durumlarda can kurtaran bir müfredata sahiptir. </p><p class="text-lg text-slate-600 leading-relaxed tracking-tight"> Sizlere Champ Eğitim Koçluğu çerçevesinde sunduğumuz online eğitim modülleri kapsamında, yalnızca sınav dönemlerinde üniversiteye giderek diplomanızı alabilirsiniz. Mavi Diploma avantajı, kampüse kayıtlı olan diğer öğrencilerle birebir aynıdır. </p></div><div><h3 class="text-2xl font-bold tracking-tight text-slate-900 mb-4">Açıktan Okumanın Sağladığı Olanaklar</h3><ul class="list-disc pl-5 text-slate-600 leading-relaxed tracking-tight space-y-2"><li>Belirli ülkeler için yaş veya lise bitirme zorunluluğu gibi katı kriterlerin esnemesi.</li><li>Türkiye&#39;deki iş yaşantınızı veya diğer örgün eğitiminizi aksatmadan çift diploma yetkisi.</li><li>Ekonomik olarak konaklama / yaşam maliyeti (Makedonya, Saraybosna vb.) yapmaksızın eğitim harcınızı ödeyip kurtulabilmek.</li></ul></div></div><div class="col-span-12 lg:col-span-4"><div class="sticky top-32 p-8 border border-slate-200 rounded-3xl bg-white shadow-lg shadow-slate-200/50 flex flex-col gap-6"><h3 class="text-2xl font-bold tracking-tight text-slate-900 border-b border-slate-100 pb-4">Champ Eğitim Farkı</h3><p class="text-slate-600 tracking-tight text-sm leading-relaxed"> Tüm uzaktan kayıt prosedürleriniz, denklik belgeleriniz ve apostillendirilmiş sınav kağıtlarınız resmi yetkililerimiz aracılığıyla üniversiteye iletilir. Sizin tek yapmanız gereken evinizde online sisteme giriş sağlamaktır. </p><div class="mt-4 pt-6 border-t border-slate-100">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "block w-full text-center bg-slate-900 text-white shadow-md hover:-translate-y-1 hover:shadow-lg transition-all py-4 rounded-xl font-bold tracking-tight"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Açıktan Kayıt Başvurusu `);
          } else {
            return [
              createTextVNode(" Açıktan Kayıt Başvurusu ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/programlar/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-PBdWFj50.mjs.map
