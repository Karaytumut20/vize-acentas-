import { defineComponent, mergeProps, useSSRContext } from 'vue';
import { ssrRenderAttrs } from 'vue/server-renderer';
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
  __name: "gizlilik-politikasi",
  __ssrInlineRender: true,
  setup(__props) {
    useSeoMeta({
      title: "Gizlilik Politikası ve KVKK | Vize Acentası",
      description: "Vize Acentası kişisel verilerinizin korunmasına yönelik aydınlatma metni ve yasal bildiriler."
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<main${ssrRenderAttrs(mergeProps({ class: "min-h-screen pt-32 pb-20 bg-white" }, _attrs))}><div class="container mx-auto px-4 max-w-4xl prose prose-lg prose-blue"><h1 class="text-4xl font-black text-[#0f172a] mb-8">Gizlilik Politikası ve KVKK Aydınlatma Metni</h1><p>Son Güncelleme: 1 Ocak 2026</p><h3>1. Veri Sorumlusunun Kimliği</h3><p>Vize Acentası olarak kişisel verilerinizin güvenliğine en üst düzeyde önem veriyoruz. 6698 sayılı Kişisel Verilerin Korunması Kanunu (&quot;KVKK&quot;) uyarınca hazırlanan bu metinle sizleri bilgilendiriyoruz.</p><h3>2. İşlenen Kişisel Verileriniz</h3><p>Vize başvuru işlemlerinizin konsolosluklar nezdinde yürütülebilmesi amacıyla; kimlik, pasaport, finansal dökümler, biyometrik fotoğraflar, iletişim ve mesleki verileriniz işlenmektedir.</p><h3>3. Kişisel Verilerinizin Aktarımı</h3><p>Verileriniz <strong>yalnızca</strong> ilgili ülke başkonsoloslukları, yetkili aracı kurumlar (VFS Global, iDATA, Kosmos vb.) ve sigorta acenteleri ile vize işlem zorunlulukları ölçüsünde paylaşılmaktadır. 3. party reklam/pazarlama kuruluşlarına hiçbir şekilde satılmaz veya aktarılmaz.</p><h3>4. Haklarınız</h3><p>KVKK 11. madde uyarınca verilerinizin silinmesini, düzeltilmesini veya işlenip işlenmediğini öğrenme hakkına sahipsiniz. Taleplerinizi info@vize-acentasi.vercel.app üzerinden bize iletebilirsiniz.</p></div></main>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/gizlilik-politikasi.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=gizlilik-politikasi-CG49ktMQ.mjs.map
