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
  __name: "garanti-ve-guvence",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: `Garanti ve Güvence | ${siteConfig.shortName}`,
      description: "Öğrencilerimiz için sunduğumuz ücretsiz belge çevirisi, ücretsiz dil kursları ve baştan sona eğitim koçluğu garantilerimiz."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full tracking-tight min-h-screen" }, _attrs))}><section class="relative w-full px-page-margin pt-40 pb-16 bg-slate-900 text-white rounded-b-[40px]"><div class="grid w-full grid-cols-12 gap-grid-gutter"><div class="col-span-12 md:col-span-8"><h1 class="text-5xl md:text-6xl font-semibold tracking-tighter mb-4"> Eğitim Koçluğu <br>Garantilerimiz </h1><p class="text-xl font-normal tracking-tight text-slate-300 mt-6 leading-relaxed max-w-3xl"> Öğrenci hayatınız boyunca sadece okul kayıtlarında değil, her adımınızda şeffaf ve güvenilir bir kurumsal güç arkanızda olacak. </p></div></div></section><section class="w-full px-page-margin py-section-gap bg-slate-50 min-h-[50vh]"><div class="grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 -mt-24 relative z-10"><div class="p-8 bg-white shadow-lg shadow-slate-200/50 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform"><div class="w-14 h-14 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center text-2xl mb-6">📝</div><h3 class="text-xl font-bold tracking-tight text-slate-900 mb-4">Ücretsiz Çeviri</h3><p class="text-slate-600 tracking-tight leading-relaxed"> Eğitim süreniz boyunca hangi amaçla veya nerede kullanmak isterseniz isteyin, belgelerinizin çevirisini tamamen ücretsiz yapıyoruz. </p></div><div class="p-8 bg-white shadow-lg shadow-slate-200/50 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform"><div class="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center text-2xl mb-6">🗣️</div><h3 class="text-xl font-bold tracking-tight text-slate-900 mb-4">Dil Eğitim Desteği</h3><p class="text-slate-600 tracking-tight leading-relaxed"> Dil yetersizliği durumunda, üniversitenin hazırlık dönemi süresince sizlere ek ve özel yabancı dil eğitimlerini ücretsiz veriyoruz. </p></div><div class="p-8 bg-white shadow-lg shadow-slate-200/50 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform"><div class="w-14 h-14 bg-orange-50 text-orange-600 rounded-full flex items-center justify-center text-2xl mb-6">✈️</div><h3 class="text-xl font-bold tracking-tight text-slate-900 mb-4">Havalimanı Transferi</h3><p class="text-slate-600 tracking-tight leading-relaxed"> Sizi ülkeye ilk attığınız anda, özel havalimanı ekibimiz doğrudan terminalde bekliyor olacak. Kayıtlı konaklamanıza güvenle taşınırsınız. </p></div><div class="p-8 bg-white shadow-lg shadow-slate-200/50 rounded-3xl border border-slate-100 hover:-translate-y-1 transition-transform"><div class="w-14 h-14 bg-purple-50 text-purple-600 rounded-full flex items-center justify-center text-2xl mb-6">🎓</div><h3 class="text-xl font-bold tracking-tight text-slate-900 mb-4">Final / Vize Desteği</h3><p class="text-slate-600 tracking-tight leading-relaxed"> Sadece sosyal açıdan değil, akademik anlamda zora düştüğünüz vizelerde veya final haftalarında o alana tahsis edilmiş ek koçluk yardımı sunulur. </p></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/garanti-ve-guvence.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=garanti-ve-guvence-DrotFt_0.mjs.map
