import { _ as __nuxt_component_0 } from './nuxt-link-mRelJtcF.mjs';
import { defineComponent, mergeProps, withCtx, createTextVNode, useSSRContext } from 'vue';
import { ssrRenderAttrs, ssrRenderComponent } from 'vue/server-renderer';
import { u as useSeoMeta, s as siteConfig, a as useHead } from './server.mjs';
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
      title: `Sınavsız Üniversite & YÖK Denkliği Rehberi | ${siteConfig.shortName}`,
      description: "Türkiye'de üniversite kazanamamak bir son mu? Goce Delcev'de sınavsız Tıp ve Mühendislik okuyarak Avrupa'da Mavi Diploma almanın yolları."
    });
    useHead({
      script: [
        {
          type: "application/ld+json",
          innerHTML: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            "headline": "Türkiye'de Üniversite Kazanamadım Demeyin: Neden Sınavsız Goce Delcev?",
            "description": "Goce Delcev (UGD) sınavsız üniversite kabulü ve YÖK denkliği hakkında kapsamlı öğrenci rehberi.",
            "author": {
              "@type": "Organization",
              "name": "Champ Eğitim"
            }
          })
        }
      ]
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_NuxtLink = __nuxt_component_0;
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "w-full min-h-screen bg-slate-50 pt-32 pb-24 selection:bg-emerald-200 selection:text-emerald-900" }, _attrs))}><header class="w-full px-page-margin mb-12 max-w-4xl mx-auto text-center"><div class="inline-flex items-center gap-2 py-1 px-3 bg-emerald-100 text-emerald-800 font-bold uppercase tracking-widest text-[10px] rounded-md mb-6 border border-emerald-200"> Eğitim ve Gelecek Vizyonu </div><h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight"> Türkiye&#39;de Üniversite Kazanamadım Demeyin:<br>Neden Sınavsız Goce Delcev? </h1><div class="flex items-center justify-center gap-4 text-sm font-bold text-slate-500 uppercase tracking-widest"><span>Kuzey Makedonya Masası</span><span class="w-1.5 h-1.5 bg-slate-300 rounded-full"></span><span>Ağustos 2026 Güncellemesi</span></div></header><section class="w-full px-page-margin max-w-7xl mx-auto"><div class="grid w-full grid-cols-12 gap-12"><article class="col-span-12 lg:col-span-8 bg-white border border-slate-200 rounded-[2rem] p-8 md:p-14 shadow-sm prose prose-lg prose-slate text-slate-600 leading-relaxed mx-auto max-w-none"><p class="lead text-xl text-slate-700 font-medium">Büyük bir stresle geçen aylar, özel ders ve dershanelere ödenen binlerce lira ve ardından gelen &quot;Barajı geçemedim, istediğim bölüm gelmedi, mezuna kaldım&quot; cümlesi... Türkiye&#39;de YKS ve türevi sınav sistemleri, genç beyinleri henüz hayatın başında kronik bir başarısızlık hissine mahkum ediyor. <strong>Peki ya bu bir son değil de, vizyonunuzu değiştirecek harika bir Avrupa başlangıcıysa?</strong></p><h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-100 pb-4">YKS Bir Kader Değildir</h2><p>Yıllardır öğrencilerimize aşılanan &quot;Sınavı geçemezsen hayatın biter&quot; algısı aslında tamamen Türkiye sınırları içerisindeki kapasite (kontenjan) yetersizliğinden kaynaklanan bir illüzyondur. Avrupa&#39;nın modern ve saygın kurumları, öğrencilerin potansiyelini 120 dakikalık bir stres testine bağlamaz; lise hayatı boyunca gösterdiğiniz çabanın simgesi olan <strong>Lise Diplomanızı</strong> başlı başına bir yeterlilik kabul eder.</p><blockquote class="bg-slate-50 border-l-4 border-emerald-500 p-8 rounded-r-xl text-slate-700 font-medium italic my-8 shadow-inner"> &quot;Kendinizi başarısız hissetmeyin. Devlet üniversitesine girebilmek için yıllarınızı harcamaktansa, Kuzey Makedonya Goce Delcev Üniversitesinde (UGD) sınavsız şekilde Tıp veya Mühendislik fakültelerine doğrudan başlayın.&quot; </blockquote><h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-100 pb-4">Neden Başka Şehir Değil de İştip (Goce Delcev)?</h2><p>Goce Delcev Üniversitesi (UGD), Kuzey Makedonya&#39;nın İştip (Shtip) şehrinde yer alan prestijli bir devlet üniversitesidir. Özellikle Türkiye&#39;den gelen öğrencilerin UGD&#39;yi bir vizyon yuvası haline getirmesinin devasa sebepleri var:</p><ol class="space-y-6 mt-8"><li class="pl-4"><strong class="text-slate-900 text-xl block mb-2">1. Kesintisiz YÖK Denkliği ve &#39;Mavi Diploma&#39;</strong> Bir öğrenci için en kıymetli hazine, dünyanın neresine giderse gitsin mesleğini icra edebilmesidir. Goce Delcev Üniversitesinden mezun olduğunuzda alacağınız diploma <strong>Bologna Süreci</strong> kapsamında tüm Avrupa Birliğinde &quot;Mavi Diploma&quot; standartlarında karşılık görür. YÖK tarafından resmen tanindigi icin, mezuniyetiniz sonrası STS (Seviye Tespit Sınavı) ile Türkiye&#39;deki doktor/mühendis statünüzü anında onaylatırsınız. </li><li class="pl-4"><strong class="text-slate-900 text-xl block mb-2">2. Komik Denilebilecek Harç ve Yaşam Giderleri</strong> Türkiye&#39;de özel (vakıf) üniversitelerinin yıllık harç tutarları ebeveynleri kredi batağına sürüklerken; UGD&#39;de <strong>Tıp Eğitimi yıllık 1.500 Euro</strong>, <strong>Yazılım/Bilgisayar Mühendisliği ise 1.000 Euro</strong> bandındadır. Ayrıca İştip (Shtip) o kadar öğrenci dostu bir şehirdir ki, bir öğrencinin aylık konaklama ve lüks gıda masrafı bile 300-350 Euro&#39;yu aşmaz. </li><li class="pl-4"><strong class="text-slate-900 text-xl block mb-2">3. Avrupa Disipliniyle Klinik Laboratuvar Pratiği</strong> Türkiye&#39;de amfilere sıkışan binlerce öğrencinin aksine UGD size küçük, elit laboratuvar grupları sunar. Kliniklerde profesörlerle 1&#39;e 1 deneme yapar, stajlarınızı Avrupa hastaneleri ve şirketlerinde kolayca ayarlama şansı bulursunuz. </li></ol><h2 class="text-3xl font-bold text-slate-900 mt-12 mb-6 border-b border-slate-100 pb-4">Champ Eğitim Neden Yaşam Boyu Garantörünüz?</h2><p>Elbette 18-19 yaşındaki bir gencin sınırları aşıp yeni bir devlette tek başına bürokratik engelleri (Banka, SİM, Öğrenci Vizesi, Polis Oturum Onayı) çözmesi kaotiktir. <strong>Champ Eğitim Koçluğu</strong> tam bu kaosu sıfırlamak için var.</p><p>Sizi havalimanında karşılıyor, İştip&#39;teki evinize bizzat yerleştiriyoruz. Emniyet Müdürlüğünden yıllık Oturum İzninizi (Resident Permit) biz takip ediyor, Lise diplomanızın Apostilli Makedonca yeminli tercümesini hazırlayıp üniversite sekreterliğinden Kabul Mektubunuzu (Acceptance) ellerinize teslim ediyoruz.</p><hr class="my-12 border-slate-200"><div class="bg-emerald-600 text-white rounded-2xl p-8 lg:p-10 shadow-lg text-center"><h3 class="text-2xl font-bold mb-4 text-white">Gençler Sınava Değil, Kariyere Odaklanmalı</h3><p class="text-emerald-50 mb-8 font-medium">Lise diplomanız duruyorsa, doktor veya mühendis olamamanız için hiçbir neden yok. Karar verin ve Champ rehberliğine güvenin.</p>`);
      _push(ssrRenderComponent(_component_NuxtLink, {
        to: "/iletisim",
        class: "inline-block bg-white text-emerald-800 font-bold px-8 py-4 rounded-xl shadow-md hover:shadow-xl hover:bg-slate-50 transition-all"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(` Hemen Kayıt Süreçlerini Öğrenin `);
          } else {
            return [
              createTextVNode(" Hemen Kayıt Süreçlerini Öğrenin ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></article><aside class="col-span-12 lg:col-span-4 hidden lg:block"><div class="sticky top-32 flex flex-col gap-6"><div class="bg-white border border-slate-200 rounded-xl p-8 shadow-sm"><h4 class="font-bold text-slate-900 mb-6 tracking-tight uppercase text-xs">Yazar &amp; Koordinasyon</h4><div class="flex items-center gap-4"><div class="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center font-black text-slate-400 text-xl border border-slate-200"> CE </div><div><h5 class="font-bold text-slate-900 text-lg">Champ Akademik Kurul</h5><p class="text-sm text-slate-500 font-medium">Balkanlar UGD Kayıt Koordinatörlüğü</p></div></div></div><div class="bg-slate-900 border border-slate-800 rounded-xl p-8 flex flex-col relative w-full shadow-lg"><div class="flex items-center gap-4 mb-4"><span class="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center"><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="text-white" viewBox="0 0 16 16"><path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"></path><path d="M8 13A5 5 0 1 1 8 3a5 5 0 0 1 0 10zm0 1A6 6 0 1 0 8 2a6 6 0 0 0 0 12z"></path><path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0 1a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path></svg></span><div><h3 class="text-lg font-bold text-white leading-none">Mavi Diploma Hareketi</h3><p class="text-slate-400 text-xs mt-1">Acil Telefon Desteği</p></div></div><p class="text-slate-300 text-sm leading-relaxed mb-6 mt-2">Bu yıl mezuna kalmayı düşünüyorsanız bize 5 dakikanızı ayırın. Geleceğinizi nasıl şekillendirebileceğimizi anlatalım.</p><a href="tel:08505577899" class="w-full bg-emerald-600 font-bold text-white py-3 px-4 rounded-lg hover:bg-emerald-500 transition-colors text-center text-sm shadow-md"> Görüşme Talebi: 0850 557 78 99 </a></div></div></aside></div></section></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/yazilar/[slug].vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=_slug_-BI6O1Uuy.mjs.map
