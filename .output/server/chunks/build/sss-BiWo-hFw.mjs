import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderList, ssrInterpolate } from 'vue/server-renderer';
import { a as useSeoMeta, c as useSchemaOrg } from './server.mjs';
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

const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "SchemaOrg",
  __ssrInlineRender: true,
  props: {
    type: {},
    data: {}
  },
  setup(__props) {
    const props = __props;
    if (props.type === "Service") {
      useSchemaOrg([
        {
          "@type": "Service",
          name: props.data.name,
          description: props.data.description,
          provider: {
            "@type": "Organization",
            name: "Vize Acentası"
          },
          areaServed: "TR",
          hasOfferCatalog: {
            "@type": "OfferCatalog",
            name: "Vize Hizmetleri"
          }
        }
      ]);
    } else if (props.type === "BlogPosting") {
      useSchemaOrg([
        {
          "@type": "Article",
          headline: props.data.title,
          description: props.data.description,
          image: props.data.image,
          datePublished: props.data.publishedAt,
          dateModified: props.data.modifiedAt,
          author: {
            "@type": "Organization",
            name: "Vize Acentası",
            url: "https://vize-acentasi.vercel.app"
          }
        }
      ]);
    } else if (props.type === "FAQPage") {
      useSchemaOrg([
        {
          "@type": "FAQPage",
          mainEntity: props.data.questions.map((q) => ({
            "@type": "Question",
            name: q.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: q.answer
            }
          }))
        }
      ]);
    }
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({
        style: { "display": "none" },
        "aria-hidden": "true"
      }, _attrs))}></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/SchemaOrg.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const SchemaOrg = Object.assign(_sfc_main$1, { __name: "SchemaOrg" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "sss",
  __ssrInlineRender: true,
  setup(__props) {
    const faqData = [
      { question: "Schengen vizesi minimum kaç günde çıkar?", answer: "Konsolosluk yoğunluğuna göre değişmekle birlikte ortalama 15-20 iş günü sürmektedir. VIP başvuru ile bazı ülkelerde bu süre öne çekilebilir." },
      { question: "Vize reddi alırsam param iade edilir mi?", answer: "Konsolosluk harçları ve başvuru merkezi ücretleri iade edilmez. Ancak duruma göre itiraz veya yeniden başvuru sürecini başlatabiliriz." },
      { question: "Amerika 10 yıllık vizesi için bankada ne kadar olmalı?", answer: "Net bir rakam olmamakla birlikte, gidiş-dönüş biletini ve oradaki konaklamanızı karşılayacak, aylık gelirinizle orantılı mantıklı bir bakiye olmalıdır (Örn: 2000-3000 USD eşdeğeri)." },
      { question: "Şirket sahibi değilim, sigortasız çalışıyorum. Vize alabilir miyim?", answer: "Sigortasız çalışanlar maalesef turistik vizelerde çok yüksek red riski taşır. Sponsorlu (1. derece akraba) başvuru yapılmalıdır." }
    ];
    useSeoMeta({
      title: "Sık Sorulan Sorular | Vize Acentası",
      description: "Vize başvuruları, süreçler, ücretler ve red durumları hakkında aklınıza takılan tüm soruların cevapları."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-32 pb-20 bg-gray-50" }, _attrs))}>`);
      _push(ssrRenderComponent(SchemaOrg, {
        type: "FAQPage",
        data: { questions: faqData }
      }, null, _parent));
      _push(`<div class="container mx-auto px-4 max-w-4xl"><h1 class="text-4xl lg:text-5xl font-black text-[#0f172a] mb-6 text-center">Sık Sorulan Sorular</h1><p class="text-lg text-gray-600 mb-12 text-center">Aklınıza takılan soruların cevaplarını burada bulabilirsiniz.</p><div class="space-y-4"><!--[-->`);
      ssrRenderList(faqData, (faq, i) => {
        _push(`<details class="group bg-white rounded-2xl p-6 border border-gray-100 shadow-sm cursor-pointer [&amp;_summary::-webkit-details-marker]:hidden"><summary class="flex items-center justify-between font-bold text-lg text-[#0f172a] focus:outline-none">${ssrInterpolate(faq.question)} <span class="transition group-open:rotate-180"><svg fill="none" height="24" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" viewBox="0 0 24 24" width="24"><polyline points="6 9 12 15 18 9"></polyline></svg></span></summary><p class="text-gray-600 mt-4 leading-relaxed font-medium">${ssrInterpolate(faq.answer)}</p></details>`);
      });
      _push(`<!--]--></div></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/sss.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=sss-BiWo-hFw.mjs.map
