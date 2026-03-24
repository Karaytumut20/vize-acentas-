import { _ as __nuxt_component_0 } from './nuxt-link-mRelJtcF.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, openBlock, createBlock, createVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { a as useHead, s as siteConfig, u as useSeoMeta } from './server.mjs';
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
    useHead({
      meta: [{ name: "theme-color", content: siteConfig.themeColors.light }]
    });
    useSeoMeta({
      title: `Sınavsız Goce Delcev Üniversitesi Kayıt Ofisi | ${siteConfig.name}`,
      description: "Türkiye'deki sınav stresine son! Sadece lise diplomanızla YÖK denklikli Goce Delcev Üniversitesinde (UGD) Avrupa standartlarında Tıp ve Mühendislik okuyun."
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-slate-50 selection:bg-emerald-200 selection:text-emerald-900" }, _attrs))}><section class="relative min-h-[85vh] w-full flex flex-col justify-center px-page-margin overflow-hidden bg-white border-b border-slate-200"><div class="absolute inset-0 bg-[url(&#39;https://www.transparenttextures.com/patterns/cubes.png&#39;)] opacity-[0.03] pointer-events-none"></div><div class="grid w-full grid-cols-12 gap-grid-gutter pt-24 relative z-10"><div class="col-span-12 xl:col-span-10 max-w-5xl"><div class="inline-flex items-center gap-2 py-1.5 px-4 bg-slate-100 border border-slate-200 text-slate-700 font-bold uppercase tracking-widest text-xs rounded-full mb-8 shadow-sm"><span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Kuzey Makedonya Resmi Kayıt Ofisi </div><h1 class="text-5xl md:text-7xl xl:text-[5.5rem] font-bold leading-[1.05] tracking-tight text-slate-900 mb-8"> Türkiye&#39;de Eğitim Sistemine Takılmayın.<br><span class="text-emerald-600 block mt-2">Avrupa&#39;da Sınavsız Okuyun.</span></h1><p class="text-xl md:text-2xl font-medium tracking-normal text-slate-600 max-w-3xl mt-8 leading-relaxed"> YKS stresi, taban puan engeli ve mezuna kalma kaygısı bitti. Sadece lise diplomanız ile Avrupa Birliği standartlarında, YÖK denklikli Goce Delcev Üniversitesi&#39;nde hayalinizdeki Tıp veya Mühendislik bölümüne hemen başlayın. </p><div class="mt-12 flex flex-wrap gap-4 items-center">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "inline-flex justify-center items-center gap-2 rounded-xl bg-slate-900 text-white shadow-md hover:shadow-xl hover:bg-slate-800 transition-all duration-300 px-8 py-4 font-semibold text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Ücretsiz Ön Görüşme Başlat <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"${_scopeId}></path></svg>`);
          } else {
            return [
              createTextVNode(" Ücretsiz Ön Görüşme Başlat "),
              (openBlock(), createBlock("svg", {
                xmlns: "http://www.w3.org/2000/svg",
                width: "20",
                height: "20",
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
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler/goce-delcev-universitesi",
        class: "inline-flex justify-center items-center gap-2 rounded-xl border border-slate-300 px-8 py-4 font-semibold text-slate-700 hover:bg-slate-50 hover:border-slate-400 transition-colors duration-300 text-lg"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Fiyatları ve Detayları Görüntüle `);
          } else {
            return [
              createTextVNode(" Fiyatları ve Detayları Görüntüle ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="w-full block md:w-auto md:ml-4 text-sm font-medium text-slate-500 mt-4 md:mt-0"> Türkiye&#39;den her yıl +500 öğrenci referansı. </div></div></div></div></section><section class="w-full px-page-margin py-24 bg-slate-50"><div class="grid w-full grid-cols-12 gap-12 lg:gap-grid-gutter my-12"><div class="col-span-12 lg:col-span-4 flex flex-col justify-center mb-8 lg:mb-0"><h2 class="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.15]">Eğitimde <br>Sınırları Kaldırın.</h2><p class="mt-8 text-lg md:text-xl text-slate-600 font-medium leading-relaxed max-w-md border-l-4 border-emerald-500 pl-6"> Eğitim sistemindeki barajlar vizyonunuzu kısıtlamasın. Sizi lise başarınızla değerlendiren köklü Avrupa üniversitelerinde Mavi Diploma ile uluslararası kariyere adım atın. </p></div><div class="col-span-12 lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-8"><div class="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"><div class="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M11 1a2 2 0 0 0-2 2v4a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5V3a3 3 0 0 1 6 0v4a.5.5 0 0 1-1 0V3a2 2 0 0 0-2-2zM3 8a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1H3z"></path></svg></div><h3 class="text-xl font-bold text-slate-900">Doğrudan Sınavsız Geçiş</h3><p class="text-slate-600 font-medium leading-relaxed">Milyonlarca adayın yarıştığı sınavlarda zaman kaybetmek yerine, MEB onaylı Lise Diplomanız ile tıp ve mühendislik fakültelerine anında kayıt hakkı.</p></div><div class="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"><div class="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path><path d="M9.5 8a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path></svg></div><h3 class="text-xl font-bold text-slate-900">YÖK Denkliği &amp; Küresel Gelecek</h3><p class="text-slate-600 font-medium leading-relaxed">Bologna sürecine dahil devlet üniversitelerinden alacağınız diploma, tüm Avrupa Birliği ülkelerinde &quot;Mavi Diploma&quot; olarak doğrudan geçerlidir.</p></div><div class="p-8 border border-slate-200 rounded-2xl bg-white shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"><div class="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M4 10.781c.148 1.667 1.513 2.85 3.591 3.003V15h1.043v-1.216c2.27-.179 3.678-1.438 3.678-3.3 0-1.59-.947-2.51-2.956-3.028l-.722-.187V3.467c1.122.11 1.879.714 2.07 1.616h1.47c-.166-1.6-1.54-2.748-3.54-2.875V1H7.591v1.233c-1.939.23-3.27 1.472-3.27 3.156 0 1.454.966 2.483 2.661 2.917l.61.162v4.031c-1.149-.17-1.94-.8-2.131-1.718H4zm3.391-3.836c-1.043-.263-1.6-.825-1.6-1.616 0-.944.704-1.641 1.8-1.828v3.495l-.2-.05zm1.591 1.872c1.287.323 1.852.859 1.852 1.769 0 1.097-.826 1.828-2.2 1.939V8.73l.348.086z"></path></svg></div><h3 class="text-xl font-bold text-slate-900">Ekonomik Yaşam (Aylık 300€)</h3><p class="text-slate-600 font-medium leading-relaxed">Güvenli Avrupa şehirlerinde, Türkiye&#39;deki büyükşehirlerde yaşayacağınız temel barınma maliyetinin çok daha altına yaşama imkânı.</p></div><div class="p-8 border border-emerald-100 rounded-2xl bg-emerald-50 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col gap-4"><div class="w-12 h-12 bg-emerald-100 text-emerald-700 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M10.854 7.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L7.5 9.793l2.646-2.647a.5.5 0 0 1 .708 0z"></path><path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"></path></svg></div><h3 class="text-xl font-bold text-emerald-900">Yaşam Boyu Garantörlük</h3><p class="text-emerald-800 font-medium leading-relaxed">Sadece kayıtta değil; oturum izni çıkarma, ev kiralama ve eğitim hayatınız (6 Yıl) boyunca acil durumlarda daima yanınızdayız.</p></div></div></div></section><section class="w-full px-page-margin py-24 bg-white"><div class="mb-16 flex justify-between items-end pb-8"><div><h2 class="text-3xl md:text-5xl font-bold tracking-tight text-slate-900">En Çok Tercih Edilen Fakülteler</h2><p class="text-lg md:text-xl text-slate-500 font-medium tracking-normal mt-4">Kuzey Makedonya Goce Delcev Üniversitesindeki prestijli eğitim programları.</p></div></div><div class="grid w-full grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler/goce-delcev-universitesi",
        class: "group block p-10 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-16 h-16 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-8 border border-slate-100"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"${_scopeId}></path></svg></div><h3 class="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4"${_scopeId}>Tıp &amp; Diş Hekimliği</h3><p class="text-slate-600 font-medium leading-relaxed"${_scopeId}>İngilizce veya Makedonca (Yıllık 1500€&#39;dan başlayan) tıp eğitimi. Bologna standartlarında klinik uygulamalar.</p><div class="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"${_scopeId}> Detayları İncele <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-16 h-16 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-8 border border-slate-100" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "28",
                  height: "28",
                  fill: "currentColor",
                  viewBox: "0 0 16 16"
                }, [
                  createVNode("path", { d: "M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z" })
                ]))
              ]),
              createVNode("h3", { class: "text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4" }, "Tıp & Diş Hekimliği"),
              createVNode("p", { class: "text-slate-600 font-medium leading-relaxed" }, "İngilizce veya Makedonca (Yıllık 1500€'dan başlayan) tıp eğitimi. Bologna standartlarında klinik uygulamalar."),
              createVNode("div", { class: "mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors" }, [
                createTextVNode(" Detayları İncele "),
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler/goce-delcev-universitesi",
        class: "group block p-10 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-16 h-16 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-8 border border-slate-100"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path d="M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z"${_scopeId}></path></svg></div><h3 class="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4"${_scopeId}>Bilgisayar Mühendisliği</h3><p class="text-slate-600 font-medium leading-relaxed"${_scopeId}>Modern laboratuvarlarda yazılım mimarisi, yapay zeka ve sistem ağları üzerine derinlemesine eğitim (Yıllık 1000€).</p><div class="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"${_scopeId}> Detayları İncele <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-16 h-16 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-8 border border-slate-100" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "28",
                  height: "28",
                  fill: "currentColor",
                  viewBox: "0 0 16 16"
                }, [
                  createVNode("path", { d: "M13.5 3a.5.5 0 0 1 .5.5V11H2V3.5a.5.5 0 0 1 .5-.5h11zm-11-1A1.5 1.5 0 0 0 1 3.5V12h14V3.5A1.5 1.5 0 0 0 13.5 2h-11zM0 12.5h16a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5z" })
                ]))
              ]),
              createVNode("h3", { class: "text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4" }, "Bilgisayar Mühendisliği"),
              createVNode("p", { class: "text-slate-600 font-medium leading-relaxed" }, "Modern laboratuvarlarda yazılım mimarisi, yapay zeka ve sistem ağları üzerine derinlemesine eğitim (Yıllık 1000€)."),
              createVNode("div", { class: "mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors" }, [
                createTextVNode(" Detayları İncele "),
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/universiteler/goce-delcev-universitesi",
        class: "group block p-10 bg-white rounded-2xl border border-slate-200 hover:border-slate-300 shadow-sm hover:shadow-xl transition-all duration-300"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="w-16 h-16 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-8 border border-slate-100"${_scopeId}><svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"${_scopeId}></path></svg></div><h3 class="text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4"${_scopeId}>Hukuk &amp; Mimarlık</h3><p class="text-slate-600 font-medium leading-relaxed"${_scopeId}>Uluslararası hukuk (AB Hukuku) veya modern mimari üzerine saygın akademik kadrolarla geleceğinizi inşa edin.</p><div class="mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors"${_scopeId}> Detayları İncele <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"${_scopeId}><path fill-rule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"${_scopeId}></path></svg></div>`);
          } else {
            return [
              createVNode("div", { class: "w-16 h-16 bg-slate-50 text-slate-700 rounded-xl flex items-center justify-center mb-8 border border-slate-100" }, [
                (openBlock(), createBlock("svg", {
                  xmlns: "http://www.w3.org/2000/svg",
                  width: "28",
                  height: "28",
                  fill: "currentColor",
                  viewBox: "0 0 16 16"
                }, [
                  createVNode("path", { d: "M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z" })
                ]))
              ]),
              createVNode("h3", { class: "text-2xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors mb-4" }, "Hukuk & Mimarlık"),
              createVNode("p", { class: "text-slate-600 font-medium leading-relaxed" }, "Uluslararası hukuk (AB Hukuku) veya modern mimari üzerine saygın akademik kadrolarla geleceğinizi inşa edin."),
              createVNode("div", { class: "mt-8 flex items-center gap-2 text-sm font-bold text-slate-900 group-hover:text-emerald-600 transition-colors" }, [
                createTextVNode(" Detayları İncele "),
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
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></section><section class="flex flex-col items-center justify-center px-page-margin py-32 bg-slate-900 border-t border-slate-800 relative overflow-hidden"><div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-emerald-500 rounded-full blur-[150px] opacity-10 pointer-events-none"></div><div class="text-center px-4 relative z-10 max-w-3xl"><p class="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-500">Kayıt Dönemi Başladı</p><h2 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-10 leading-tight">Yıllarınızı Kaybetmeyin,<br>Geleceğinizi Kazanın.</h2><div class="flex flex-col sm:flex-row items-center justify-center gap-6">`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "inline-block bg-emerald-600 text-white shadow-md hover:shadow-lg hover:bg-emerald-500 transition-all duration-300 py-4 px-10 rounded-xl font-bold text-lg w-full sm:w-auto"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Görüşme Randevusu Al `);
          } else {
            return [
              createTextVNode(" Görüşme Randevusu Al ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<a href="tel:08505577899" class="inline-flex items-center justify-center gap-3 text-white border border-slate-700 bg-slate-800 hover:bg-slate-700 transition-colors py-4 px-10 rounded-xl font-bold text-lg w-full sm:w-auto"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M1.885.511a1.745 1.745 0 0 1 2.61.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"></path></svg> 0850 557 78 99 </a></div></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-BiexHjL6.mjs.map
