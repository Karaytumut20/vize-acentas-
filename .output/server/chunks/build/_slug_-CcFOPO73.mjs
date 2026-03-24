import { _ as __nuxt_component_1 } from './NuxtImg-Guqt9Q5m.mjs';
import { _ as __nuxt_component_0 } from './nuxt-link-CRYofgM8.mjs';
import { defineComponent, computed, ref, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent, ssrInterpolate, ssrRenderList, ssrRenderClass, ssrRenderStyle, ssrIncludeBooleanAttr, ssrLooseEqual } from 'vue/server-renderer';
import { v as visaDatabase } from './visas-DtAfswUs.mjs';
import { u as useRoute, a as useSeoMeta, b as useHead } from './server.mjs';
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

const _sfc_main$2 = /* @__PURE__ */ defineComponent({
  __name: "VisaCalculator",
  __ssrInlineRender: true,
  setup(__props) {
    const step = ref(1);
    const answers = ref({
      history: "",
      finance: "",
      job: "",
      family: ""
    });
    const isCalculating = ref(false);
    const showResult = ref(false);
    const score = ref(0);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-3xl shadow-2xl overflow-hidden max-w-2xl mx-auto border border-gray-100 relative" }, _attrs))}><div class="bg-gradient-to-r from-[#0f172a] to-gray-800 p-8 text-white relative overflow-hidden"><div class="absolute -right-10 -top-10 w-40 h-40 bg-[#f59e0b]/20 rounded-full blur-2xl"></div><h3 class="text-2xl font-black mb-2 relative z-10">Vize Onay İhtimali Hesaplayıcı</h3><p class="text-gray-300 text-sm relative z-10">Yapay zeka destekli ön analiz aracımızla profilinizin gücünü test edin.</p></div>`);
      if (!showResult.value && !isCalculating.value) {
        _push(`<div class="p-8"><div class="flex gap-2 mb-8"><!--[-->`);
        ssrRenderList(4, (i) => {
          _push(`<div class="${ssrRenderClass([step.value >= i ? "bg-[#f59e0b]" : "bg-gray-100", "h-2 rounded-full flex-1 transition-colors duration-300"])}"></div>`);
        });
        _push(`<!--]--></div>`);
        if (step.value === 1) {
          _push(`<div class="animate-in fade-in slide-in-from-right-4 duration-300"><h4 class="text-xl font-bold text-[#0f172a] mb-6">1. Seyahat Geçmişiniz</h4><div class="space-y-3"><label class="${ssrRenderClass([answers.value.history === "yes" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.history, "yes")) ? " checked" : ""} value="yes" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Daha önce Schengen veya ABD / UK vizem var.</span></label><label class="${ssrRenderClass([answers.value.history === "some" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.history, "some")) ? " checked" : ""} value="some" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Sadece Balkanlar veya vizesiz ülkelere gittim.</span></label><label class="${ssrRenderClass([answers.value.history === "no" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.history, "no")) ? " checked" : ""} value="no" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Pasaportum bembeyaz, hiç yurt dışına çıkmadım.</span></label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (step.value === 2) {
          _push(`<div class="animate-in fade-in slide-in-from-right-4 duration-300"><h4 class="text-xl font-bold text-[#0f172a] mb-6">2. Finansal Durumunuz</h4><div class="space-y-3"><label class="${ssrRenderClass([answers.value.finance === "high" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.finance, "high")) ? " checked" : ""} value="high" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Düzenli yüksek gelirim ve bankada iyi birikimim var.</span></label><label class="${ssrRenderClass([answers.value.finance === "medium" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.finance, "medium")) ? " checked" : ""} value="medium" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Asgari veya ortalama maaşım var.</span></label><label class="${ssrRenderClass([answers.value.finance === "low" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.finance, "low")) ? " checked" : ""} value="low" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Şu an resmi belgelenebilir bir gelirim yok.</span></label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (step.value === 3) {
          _push(`<div class="animate-in fade-in slide-in-from-right-4 duration-300"><h4 class="text-xl font-bold text-[#0f172a] mb-6">3. Çalışma Durumunuz</h4><div class="space-y-3"><label class="${ssrRenderClass([answers.value.job === "fulltime" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.job, "fulltime")) ? " checked" : ""} value="fulltime" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Sigortalı Çalışan / Devlet Memuru / Şirket Sahibi</span></label><label class="${ssrRenderClass([answers.value.job === "student" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.job, "student")) ? " checked" : ""} value="student" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Öğrenci (Ailem sponsor olacak)</span></label><label class="${ssrRenderClass([answers.value.job === "freelance" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.job, "freelance")) ? " checked" : ""} value="freelance" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Freelance / Serbest Meslek (Resmi şahıs şirketi yok)</span></label><label class="${ssrRenderClass([answers.value.job === "none" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.job, "none")) ? " checked" : ""} value="none" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Çalışmıyorum</span></label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        if (step.value === 4) {
          _push(`<div class="animate-in fade-in slide-in-from-right-4 duration-300"><h4 class="text-xl font-bold text-[#0f172a] mb-6">4. Aile Eğilimi</h4><div class="space-y-3"><label class="${ssrRenderClass([answers.value.family === "married" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.family, "married")) ? " checked" : ""} value="married" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Evliyim / Çocuğum var.</span></label><label class="${ssrRenderClass([answers.value.family === "single" ? "border-[#f59e0b] bg-[#f59e0b]/5" : "border-gray-100 hover:border-gray-200", "flex items-center gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all"])}"><input type="radio"${ssrIncludeBooleanAttr(ssrLooseEqual(answers.value.family, "single")) ? " checked" : ""} value="single" class="w-5 h-5 text-[#f59e0b] focus:ring-[#f59e0b]"><span class="font-medium text-gray-700">Bekarım.</span></label></div></div>`);
        } else {
          _push(`<!---->`);
        }
        _push(`<div class="mt-8 flex justify-between items-center">`);
        if (step.value > 1) {
          _push(`<button class="text-gray-500 font-bold px-4 py-2 hover:text-[#0f172a]">Geri</button>`);
        } else {
          _push(`<div></div>`);
        }
        _push(`<button class="bg-[#0f172a] text-white px-8 py-3 rounded-xl font-bold hover:bg-[#1e293b] transition-colors disabled:opacity-50"${ssrIncludeBooleanAttr(step.value === 1 && !answers.value.history || step.value === 2 && !answers.value.finance || step.value === 3 && !answers.value.job || step.value === 4 && !answers.value.family) ? " disabled" : ""}>${ssrInterpolate(step.value === 4 ? "Sonuçları Gör" : "İleri")}</button></div></div>`);
      } else {
        _push(`<!---->`);
      }
      if (isCalculating.value) {
        _push(`<div class="p-16 text-center animate-in fade-in duration-300 flex flex-col items-center"><div class="w-16 h-16 border-4 border-gray-100 border-t-[#f59e0b] rounded-full animate-spin mb-6"></div><h4 class="text-xl font-bold text-[#0f172a]">Profiliniz Analiz Ediliyor...</h4><p class="text-gray-500 text-sm mt-2">Konsolosluk algoritmalarına göre başarı puanınız hesaplanıyor.</p></div>`);
      } else {
        _push(`<!---->`);
      }
      if (showResult.value) {
        _push(`<div class="p-12 text-center animate-in zoom-in-95 duration-500"><div class="${ssrRenderClass([score.value >= 70 ? "border-green-500 text-green-500" : score.value > 40 ? "border-[#f59e0b] text-[#f59e0b]" : "border-red-500 text-red-500", "inline-flex items-center justify-center w-32 h-32 rounded-full border-8 mb-6 relative"])}"><span class="text-5xl font-black">%${ssrInterpolate(score.value)}</span></div><h4 class="text-3xl font-black text-[#0f172a] mb-4">${ssrInterpolate(score.value >= 80 ? "Harika Bir Profil!" : score.value >= 50 ? "Geliştirilebilir Profil" : "Riskli Profil")}</h4><p class="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">${ssrInterpolate(score.value >= 80 ? "Vize onay ihtimaliniz çok yüksek. Sadece prodesürleri ve evrak listesini hatasız eşleştirerek rahat bir mülakat süreci geçirebilirsiniz." : score.value >= 50 ? "Profilinizin vize onayı alması için Niyet Mektubunun (Cover Letter) çok iyi yazılması ve sponsorluk desteği gerekiyor." : "Konsolosluk beklentilerine göre şu an başvuru yapmanız red almanıza neden olabilir. Lütfen bir uzmandan finansal planlama stratejisi alınız.")}</p><div class="flex flex-col sm:flex-row items-center justify-center gap-4"><button class="w-full sm:w-auto px-6 py-3 border-2 border-gray-200 text-gray-700 font-bold rounded-xl hover:bg-gray-50 transition-colors"> Yeniden Hesapla </button>`);
        _push(ssrRenderComponent(_component_NuxtLink, {
          to: "/iletisim",
          class: "w-full sm:w-auto px-8 py-3 bg-[#f59e0b] hover:bg-[#0f172a] text-white font-bold rounded-xl transition-colors shadow-lg shadow-[#f59e0b]/30"
        }, {
          default: withCtx((_, _push2, _parent2, _scopeId) => {
            if (_push2) {
              _push2(` Ücretsiz Danışmana Sor `);
            } else {
              return [
                createTextVNode(" Ücretsiz Danışmana Sor ")
              ];
            }
          }),
          _: 1
        }, _parent));
        _push(`</div></div>`);
      } else {
        _push(`<!---->`);
      }
      _push(`</div>`);
    };
  }
});
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/VisaCalculator.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : void 0;
};
const __nuxt_component_2 = Object.assign(_sfc_main$2, { __name: "VisaCalculator" });
const _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "DocumentChecklist",
  __ssrInlineRender: true,
  props: {
    items: {}
  },
  setup(__props) {
    const props = __props;
    const checkedItems = ref(new Array(props.items.length).fill(false));
    const progressPercentage = computed(() => {
      if (props.items.length === 0) return 0;
      const checkedCount = checkedItems.value.filter((item) => item).length;
      return Math.round(checkedCount / props.items.length * 100);
    });
    const isComplete = computed(() => progressPercentage.value === 100);
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100" }, _attrs))}><div class="p-6 md:p-8 bg-gray-50 border-b border-gray-100"><div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"><div><h3 class="text-xl font-bold text-[#0f172a]">İnteraktif Evrak Listesi</h3><p class="text-sm text-gray-500 mt-1">Hazırladığınız evrakları işaretleyin.</p></div><div class="w-full sm:w-1/3 flex flex-col gap-2"><div class="flex justify-between items-end"><span class="text-xs font-bold text-gray-500 uppercase tracking-widest">Hazırlık</span><span class="${ssrRenderClass([isComplete.value ? "text-green-500" : "text-[#f59e0b]", "text-lg font-black"])}">%${ssrInterpolate(progressPercentage.value)}</span></div><div class="h-3 w-full bg-gray-200 rounded-full overflow-hidden"><div class="${ssrRenderClass([isComplete.value ? "bg-green-500" : "bg-[#f59e0b]", "h-full transition-all duration-700 ease-out"])}" style="${ssrRenderStyle({ width: `${progressPercentage.value}%` })}"></div></div></div></div></div><div class="p-4 md:p-6 space-y-2"><!--[-->`);
      ssrRenderList(__props.items, (item, index) => {
        _push(`<label class="${ssrRenderClass([checkedItems.value[index] ? "border-green-500/20 bg-green-50/50" : "border-gray-50 hover:border-gray-200", "flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300"])}"><div class="relative shrink-0 mt-0.5"><input type="checkbox"${ssrIncludeBooleanAttr(checkedItems.value[index]) ? " checked" : ""} class="peer sr-only"><div class="${ssrRenderClass([checkedItems.value[index] ? "bg-green-500 border-green-500" : "bg-white border-gray-300 peer-hover:border-[#f59e0b]", "w-6 h-6 rounded-lg border-2 flex items-center justify-center transition-colors"])}"><svg class="${ssrRenderClass([checkedItems.value[index] ? "opacity-100 scale-100" : "opacity-0 scale-50", "w-4 h-4 text-white transition-opacity"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg></div></div><span class="${ssrRenderClass([checkedItems.value[index] ? "text-gray-400 line-through" : "text-gray-700", "font-medium leading-relaxed transition-all duration-300"])}">${ssrInterpolate(item)}</span></label>`);
      });
      _push(`<!--]--></div><div class="${ssrRenderClass([isComplete.value ? "max-h-40 opacity-100" : "max-h-0 opacity-0 overflow-y-hidden p-0 border-transparent", "bg-green-50 border-t border-green-100 p-6 flex items-start gap-4 overflow-hidden transition-all duration-500"])}"><div class="w-10 h-10 rounded-full bg-green-500 text-white flex items-center justify-center shrink-0"><svg class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg></div><div><h4 class="font-bold text-green-800">Harika! Tüm evraklarınız hazır.</h4><p class="text-sm text-green-700 mt-1">Dosyanızı konsolosluğa göndermeden önce uzmanlarımız bir kez daha gözden geçirmeli. PDF olarak WhatsApp&#39;tan yollayabilirsiniz.</p></div></div></div>`);
    };
  }
});
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/DocumentChecklist.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const __nuxt_component_3 = Object.assign(_sfc_main$1, { __name: "DocumentChecklist" });
const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "[slug]",
  __ssrInlineRender: true,
  setup(__props) {
    const route = useRoute();
    const slug = route.params.slug;
    const defaultData = visaDatabase["schengen-vizesi"];
    const data = computed(() => visaDatabase[slug] || defaultData);
    useSeoMeta({
      title: `${data.value.title} Danışmanlığı | Champ Vize`,
      description: `${data.value.title} işlemlerinizde ${data.value.processingTime} içinde, profesyonel dosya hazırlığı ve VIP randevu hizmeti.`,
      ogTitle: `${data.value.title} Başvurusu - Champ Vize`,
      ogImage: data.value.heroImage
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          children: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "serviceType": "Visa Application Processing",
            "provider": {
              "@type": "LocalBusiness",
              "name": "Champ Vize Danışmanlık"
            },
            "name": `${data.value.title} Danışmanlığı`,
            "description": data.value.description
          })
        }
      ]
    });
    const activeReqCategory = ref(0);
    const activeFaqIndex = ref(null);
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtImg = __nuxt_component_1;
      const _component_NuxtLink = __nuxt_component_0;
      const _component_VisaCalculator = __nuxt_component_2;
      const _component_DocumentChecklist = __nuxt_component_3;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen bg-gray-50 flex flex-col font-sans selection:bg-[#f59e0b] selection:text-white pb-20" }, _attrs))}><section class="relative min-h-[60vh] pt-40 pb-32 flex flex-col justify-center overflow-hidden"><div class="absolute inset-0 z-0">`);
      _push(ssrRenderComponent(_component_NuxtImg, {
        src: data.value.heroImage,
        alt: data.value.title,
        class: "w-full h-full object-cover",
        format: "webp",
        preload: "",
        loading: "eager"
      }, null, _parent));
      _push(`<div class="absolute inset-0 bg-gradient-to-r from-[#0f172a]/95 via-[#0f172a]/80 to-transparent"></div></div><div class="container relative z-10 px-4 max-w-7xl mx-auto visa-hero-content"><div class="flex items-center gap-2 text-sm text-[#f59e0b] font-bold tracking-widest uppercase mb-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/",
        class: "hover:text-white transition-colors"
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
      _push(`<span>/</span>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/vizeler",
        class: "hover:text-white transition-colors"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`Vizeler`);
          } else {
            return [
              createTextVNode("Vizeler")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<span>/</span><span class="text-white">${ssrInterpolate(data.value.title)}</span></div><h1 class="text-5xl md:text-6xl lg:text-7xl font-black text-white leading-tight mb-4 tracking-tight">${ssrInterpolate(data.value.title)}</h1><p class="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl font-light">${ssrInterpolate(data.value.subtitle)}</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "inline-flex items-center justify-center px-8 py-4 bg-[#f59e0b] hover:bg-white hover:text-[#0f172a] text-white rounded-full font-bold text-lg transition-transform hover:scale-105 shadow-[0_10px_30px_rgba(245,158,11,0.4)]"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ücretsiz Randevu Oluştur `);
          } else {
            return [
              createTextVNode(" Ücretsiz Randevu Oluştur ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="container mx-auto px-4 md:px-6 lg:px-8 mt-16 md:mt-24"><div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"><article class="lg:col-span-8 bg-white p-8 md:p-12 rounded-[2rem] shadow-sm border border-gray-100 slide-up"><h2 class="text-3xl font-black text-[#0f172a] mb-6 tracking-tight">${ssrInterpolate(data.value.title)} Kapsamlı Rehberi</h2><div class="prose prose-lg prose-gray max-w-none text-gray-600 leading-relaxed mb-10 font-medium">${data.value.content ?? ""}</div><div class="bg-gray-50 border-l-4 border-[#f59e0b] p-6 rounded-r-xl mb-8"><h3 class="text-xl font-bold text-[#0f172a] mb-3">Uzman Stratejisi</h3><p class="text-gray-700 leading-relaxed text-sm">${ssrInterpolate(data.value.howToApply)}</p></div><div class="mb-12">`);
      _push(ssrRenderComponent(_component_VisaCalculator, null, null, _parent));
      _push(`</div><h3 class="text-2xl font-black text-[#0f172a] mb-6 tracking-tight" id="gerekli-evraklar">Gerekli Evraklar (Statüye Göre)</h3><p class="text-gray-500 mb-6 text-sm">Konsolosluk kuralları gereği hazırlamanız gereken asgari belgeler aşağıdaki gibidir. Bize ulaştığınızda durumunuza özel tam liste iletilecektir.</p><div class="space-y-4 mb-12"><!--[-->`);
      ssrRenderList(data.value.requirements, (req, index) => {
        _push(`<div class="${ssrRenderClass([activeReqCategory.value === index ? "border-[#f59e0b] bg-white shadow-lg" : "border-gray-100 bg-white hover:border-gray-200", "border-2 rounded-xl overflow-hidden transition-all duration-300"])}"><button class="w-full text-left px-6 py-5 flex items-center justify-between font-black text-[#0f172a] focus:outline-none"><span class="${ssrRenderClass([activeReqCategory.value === index ? "text-[#f59e0b]" : "", "text-lg"])}">${ssrInterpolate(req.category)}</span><div class="${ssrRenderClass([activeReqCategory.value === index ? "bg-[#f59e0b]/10" : "bg-gray-50", "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors"])}"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeReqCategory.value === index ? "rotate-180 text-[#f59e0b]" : "text-gray-400", "w-5 h-5 transition-transform duration-300"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg></div></button><div class="overflow-hidden transition-all duration-300 ease-in-out" style="${ssrRenderStyle({ maxHeight: activeReqCategory.value === index ? "1000px" : "0px", opacity: activeReqCategory.value === index ? 1 : 0 })}">`);
        if (req.category) {
          _push(ssrRenderComponent(_component_DocumentChecklist, {
            items: req.items,
            key: index
          }, null, _parent));
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div>`);
      });
      _push(`<!--]--></div><h3 class="text-2xl font-black text-[#0f172a] mb-6 tracking-tight">Merak Edilenler</h3><div class="space-y-4 mb-12"><!--[-->`);
      ssrRenderList(data.value.faq, (q, index) => {
        _push(`<div class="${ssrRenderClass([activeFaqIndex.value === index ? "border-[#f59e0b] shadow-[0_4px_20px_rgba(245,158,11,0.08)]" : "border-gray-100 hover:border-gray-200", "bg-white border rounded-xl overflow-hidden transition-all duration-200"])}"><button class="${ssrRenderClass([activeFaqIndex.value === index ? "bg-white" : "bg-gray-50/50 hover:bg-gray-50", "w-full text-left px-5 md:px-7 py-5 flex items-center justify-between font-bold focus:outline-none transition-colors"])}"><span class="${ssrRenderClass([activeFaqIndex.value === index ? "text-[#f59e0b]" : "text-[#0f172a]", "text-[1.05rem] pr-6 leading-snug transition-colors"])}">${ssrInterpolate(q.q)}</span><div class="${ssrRenderClass([activeFaqIndex.value === index ? "bg-[#f59e0b]/10" : "bg-white shadow-sm border border-gray-100", "w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300"])}"><svg xmlns="http://www.w3.org/2000/svg" class="${ssrRenderClass([activeFaqIndex.value === index ? "rotate-180 text-[#f59e0b]" : "text-gray-400", "w-4 h-4 transition-transform duration-300"])}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg></div></button><div class="overflow-hidden transition-all duration-300 ease-in-out" style="${ssrRenderStyle({ maxHeight: activeFaqIndex.value === index ? "500px" : "0px", opacity: activeFaqIndex.value === index ? 1 : 0 })}"><div class="px-5 md:px-7 pb-6 pt-2 text-gray-600 leading-relaxed text-[0.95rem] bg-white border-t border-gray-50/80">${ssrInterpolate(q.a)}</div></div></div>`);
      });
      _push(`<!--]--></div></article><aside class="lg:col-span-4 space-y-8 slide-up lg:sticky lg:top-32 lg:h-max mb-12"><div class="bg-[#0f172a] p-8 rounded-[2rem] shadow-2xl relative overflow-hidden text-white"><div class="absolute top-0 right-0 w-32 h-32 bg-[#f59e0b]/20 rounded-bl-full blur-2xl"></div><h3 class="text-xl font-black mb-6 text-[#f59e0b]">Hızlı Özet</h3><div class="space-y-6 relative z-10"><div class="flex items-start gap-4"><div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg></div><div><div class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">İşlem Süresi</div><div class="font-bold text-sm">${ssrInterpolate(data.value.processingTime)}</div></div></div><div class="flex items-start gap-4"><div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg></div><div><div class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Vize Süresi</div><div class="font-bold text-sm">${ssrInterpolate(data.value.validity)}</div></div></div><div class="flex items-start gap-4"><div class="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0"><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v20"></path><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path></svg></div><div><div class="text-xs text-gray-400 font-bold uppercase tracking-wider mb-1">Vize Ücretleri</div><div class="font-bold text-sm">${ssrInterpolate(data.value.fees)}</div></div></div></div><div class="mt-8 pt-8 border-t border-white/10 text-center relative z-10"><a href="tel:+9008501234567" class="inline-flex items-center gap-2 font-black text-2xl hover:text-[#f59e0b] transition-colors"><svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg> 0850 123 45 67 </a><p class="text-xs text-gray-400 mt-2">Hemen Arayın, İşlemlere Başlayalım</p></div></div><div class="bg-[#f59e0b] p-8 rounded-[2rem] shadow-xl text-center text-[#0f172a] relative overflow-hidden group"><div class="absolute inset-0 bg-white/10 group-hover:bg-white/20 transition-colors"></div><h3 class="text-2xl font-black mb-2 relative z-10">Dosyanız Hazır Mı?</h3><p class="text-sm font-medium opacity-90 mb-6 relative z-10"> Vize redlerinin %70&#39;i eksik veya yanlış beyan edilmiş çevrilmiş belgeler sebebiyle olmaktadır. Risk almayın. </p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "inline-block bg-[#0f172a] hover:bg-black text-white px-8 py-3 rounded-full font-bold shadow-lg transition-transform hover:scale-105 relative z-10"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ücretsiz Kontrol Ettir `);
          } else {
            return [
              createTextVNode(" Ücretsiz Kontrol Ettir ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div><div class="bg-white p-8 rounded-[2rem] shadow-xl border border-gray-100 relative overflow-hidden text-center group"><div class="flex justify-center mb-4"><div class="flex gap-1 text-[#f59e0b]"><!--[-->`);
      ssrRenderList(5, (i) => {
        _push(`<svg class="w-6 h-6 fill-current" viewBox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>`);
      });
      _push(`<!--]--></div></div><h3 class="text-xl font-black text-[#0f172a] mb-2">4.9/5 Memnuniyet</h3><p class="text-sm text-gray-500 font-medium mb-6">Sayısız başarılı ${ssrInterpolate(data.value.title)} dosyası ve binlerce mutlu seyahat rotası.</p><div class="p-6 rounded-2xl text-left relative bg-gray-50/80 border border-gray-100 transition-colors hover:bg-white hover:shadow-lg"><span class="text-6xl text-gray-200 absolute -top-4 -left-2 font-serif opacity-50">&quot;</span><p class="text-[0.95rem] text-gray-700 italic relative z-10 font-medium leading-relaxed"> Asla alamam dedikleri redli dosyayı toparlayıp kusursuz bir İngilizce ile niyet mektubumu yazdılar. Randevuyu haftalar sürmeden erkene çektiler, süperdi! </p><div class="mt-5 flex items-center gap-3 border-t border-gray-200 pt-4"><div class="w-10 h-10 bg-[#0f172a] text-white rounded-full flex items-center justify-center font-bold text-sm shadow-inner shrink-0">A.K.</div><div><div class="text-sm font-bold text-[#f59e0b] leading-tight">${ssrInterpolate(data.value.title)} Onayı</div><div class="text-xs text-green-600 font-bold flex items-center gap-1 mt-1"><svg class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg> Doğrulanmış Profil </div></div></div></div></div></aside></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/vizeler/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-CcFOPO73.mjs.map
