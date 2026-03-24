import { defineComponent, ref, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderClass, ssrRenderStyle } from 'vue/server-renderer';
import { a as useHead, u as useSeoMeta, s as siteConfig } from './server.mjs';
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
  __name: "sss",
  __ssrInlineRender: true,
  setup(__props) {
    const openFaq = ref(0);
    const faqData = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Neden Türkiye'de sınava girmek yerine Goce Delcev'i tercih etmeliyim?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Türkiye'de YKS sistemi büyük bir zaman kaybıdır. Goce Delcev Üniversitesi lise diplomanızı kabul eder ve Mavi Diploma verir."
          }
        },
        {
          "@type": "Question",
          "name": "Makedonya UGD diplomaları Türkiye'de (YÖK) geçerli mi?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Evet, Goce Delcev (UGD) YÖK tarafından tanınmaktadır. STS ve TUS ile Türkiye'de çalışabilirsiniz."
          }
        }
      ]
    };
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify(faqData)
        }
      ]
    });
    useSeoMeta({
      title: `Sıkça Sorulan Sorular | Goce Delcev Kayıt Şartları | ${siteConfig.shortName}`,
      description: "YÖK denkliği var mı? Eğitim ücretleri ne kadar? Makedonya İştip yaşam masrafları nelerdir? En çok sorulan kayıt sorularının resmi cevapları."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-slate-50 pt-32 pb-24 selection:bg-emerald-200 selection:text-emerald-900" }, _attrs))} data-v-f1f385d1><div class="px-page-margin max-w-4xl mx-auto" data-v-f1f385d1><div class="text-center mb-16" data-v-f1f385d1><h1 class="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 mb-6" data-v-f1f385d1> Sıkça Sorulan Sorular </h1><p class="text-lg md:text-xl text-slate-600 font-medium max-w-2xl mx-auto leading-relaxed" data-v-f1f385d1> Kuzey Makedonya eğitim sistemi, Goce Delcev (UGD) Üniversitesi sınavsız kabul şartları ve Ştip yaşantısı hakkında merak edilen her şey. </p></div><div class="bg-white border border-slate-200 rounded-2xl shadow-sm overflow-hidden" data-v-f1f385d1><div class="border-b border-slate-100 last:border-0 p-6 md:p-8 hover:bg-slate-50 transition-colors cursor-pointer group" data-v-f1f385d1><div class="flex items-start justify-between gap-4" data-v-f1f385d1><h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors pr-8" data-v-f1f385d1> Neden Türkiye&#39;de sınava girmek yerine Goce Delcev&#39;i tercih etmeliyim? </h3><span class="${ssrRenderClass([{ "rotate-180": openFaq.value === 0 }, "text-emerald-600 flex-shrink-0 mt-1 transition-transform duration-300"])}" data-v-f1f385d1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-f1f385d1><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" data-v-f1f385d1></path></svg></span></div><div class="mt-4 text-slate-600 font-medium leading-relaxed pr-8 animate-fadeIn" style="${ssrRenderStyle(openFaq.value === 0 ? null : { display: "none" })}" data-v-f1f385d1> Türkiye&#39;de milyonlarca adayın yarıştığı YKS sistemi büyük bir zaman ve psikoloji kaybıdır. Goce Delcev Üniversitesi (Goce Delčev University of Štip) lise diplomanızı doğrudan kabul eder. Yıllar boyunca dershaneye ödeyeceğiniz ücretlerle Avrupa&#39;da Mavi Diplomalı bir doktor veya mühendis olarak yetişebilir, tüm AB ülkelerinde geçerli bir akredite eğitim alabilirsiniz. </div></div><div class="border-b border-slate-100 last:border-0 p-6 md:p-8 hover:bg-slate-50 transition-colors cursor-pointer group" data-v-f1f385d1><div class="flex items-start justify-between gap-4" data-v-f1f385d1><h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors pr-8" data-v-f1f385d1> Makedonya UGD diplomaları Türkiye&#39;de (YÖK) geçerli mi? </h3><span class="${ssrRenderClass([{ "rotate-180": openFaq.value === 1 }, "text-emerald-600 flex-shrink-0 mt-1 transition-transform duration-300"])}" data-v-f1f385d1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-f1f385d1><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" data-v-f1f385d1></path></svg></span></div><div class="mt-4 text-slate-600 font-medium leading-relaxed pr-8 animate-fadeIn" style="${ssrRenderStyle(openFaq.value === 1 ? null : { display: "none" })}" data-v-f1f385d1> Evet, Goce Delcev Üniversitesi (UGD) Türkiye Cumhuriyeti Yükseköğretim Kurulu (YÖK) tarafından resmi olarak tanınmaktadır. Mezuniyet sonrası YÖK&#39;ün belirlediği Seviye Tespit Sınavı (STS) veya Tıp mezunları için TUS girerek Türkiye&#39;de mesleğinizi icra edebilirsiniz. Şeffaf ve garanti bir sistemdir. </div></div><div class="border-b border-slate-100 last:border-0 p-6 md:p-8 hover:bg-slate-50 transition-colors cursor-pointer group" data-v-f1f385d1><div class="flex items-start justify-between gap-4" data-v-f1f385d1><h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors pr-8" data-v-f1f385d1> İştip (Shtip) şehrinde öğrenci olarak yaşamak pahalı mı? </h3><span class="${ssrRenderClass([{ "rotate-180": openFaq.value === 2 }, "text-emerald-600 flex-shrink-0 mt-1 transition-transform duration-300"])}" data-v-f1f385d1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-f1f385d1><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" data-v-f1f385d1></path></svg></span></div><div class="mt-4 text-slate-600 font-medium leading-relaxed pr-8 animate-fadeIn" style="${ssrRenderStyle(openFaq.value === 2 ? null : { display: "none" })}" data-v-f1f385d1> Avrupa standartlarında olmasına rağmen İştip, Türkiye&#39;deki büyükşehirlere oranla bile oldukça ucuzdur. Öğrenci dostu bu şehirde 100-150 Euro&#39;ya öğrenci evlerinde kalabilir, yeme-içme ve sosyal aktiviteler dahil aylık toplam 300 - 350 Euro gibi bir bütçeyle son derece rahat ve modern bir üniversite hayatı sürebilirsiniz. </div></div><div class="border-b border-slate-100 last:border-0 p-6 md:p-8 hover:bg-slate-50 transition-colors cursor-pointer group" data-v-f1f385d1><div class="flex items-start justify-between gap-4" data-v-f1f385d1><h3 class="text-lg md:text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors pr-8" data-v-f1f385d1> Eğitim dili nedir ve Hazırlık okumam zorunlu mu? </h3><span class="${ssrRenderClass([{ "rotate-180": openFaq.value === 3 }, "text-emerald-600 flex-shrink-0 mt-1 transition-transform duration-300"])}" data-v-f1f385d1><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16" data-v-f1f385d1><path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z" data-v-f1f385d1></path></svg></span></div><div class="mt-4 text-slate-600 font-medium leading-relaxed pr-8 animate-fadeIn" style="${ssrRenderStyle(openFaq.value === 3 ? null : { display: "none" })}" data-v-f1f385d1> Goce Delcev Üniversitesinde eğitim dilleri Makedonca ve İngilizce&#39;dir. Eğer İngilizce okumak istiyorsanız ve IELTS/TOEFL gibi uluslararası belgeye sahip değilseniz muafiyet sınavı yapılır. Makedonca okuyacaksanız, devlet üniversiteleri kuralı gereği ilk yıl A1-A2 (iki sömestr) Makedonca dil hazırlık sınıflarına katılmanız zorunludur. Makedonca oldukça hızlı öğrenilen bir Slav dilidir. </div></div></div><div class="mt-12 bg-emerald-50 border border-emerald-100 p-8 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm" data-v-f1f385d1><div data-v-f1f385d1><h4 class="text-xl font-bold text-emerald-900 mb-2" data-v-f1f385d1>Başka Bir Sorunuz Mu Var?</h4><p class="text-emerald-700 font-medium" data-v-f1f385d1>Uzman eğitim koordinatörlerimiz size özel analiz yapmak için hazır.</p></div><a href="https://wa.me/908505577899" target="_blank" class="w-full md:w-auto bg-emerald-600 text-white font-bold py-3 px-8 rounded-xl hover:bg-emerald-700 transition-colors shadow-md text-center whitespace-nowrap" data-v-f1f385d1> WhatsApp&#39;tan Sor </a></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const sss = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-f1f385d1"]]);

export { sss as default };
//# sourceMappingURL=sss-yJoIzU_P.mjs.map
