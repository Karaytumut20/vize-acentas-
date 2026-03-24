import { defineNuxtPlugin } from "#app";

export default defineNuxtPlugin(() => {
  // 1. Geliştirme ortamındaysak hiç yorma, direkt geç
  if (import.meta.dev) return;

  // 2. İzin Verilen Domainler (Beyaz Liste)
  // Kendi domainini, vercel'i ve her ihtimale karşı yerel IP'leri ekliyoruz
  const allowedDomains = [
    "le-champ.com",
    "vercel.app",
    "netlify.app",
    "localhost",
    "127.0.0.1",
  ];
  const currentHost = window.location.hostname;

  // 3. Alt domainleri de (subdomain) kapsayacak esnek ve güvenli eşleşme
  const isAuthorized = allowedDomains.some(
    (domain) => currentHost === domain || currentHost.endsWith(`.${domain}`),
  );

  // 4. KORSAN DOMAIN TESPİT EDİLDİ! İMHA PROTOKOLÜ:
  if (!isAuthorized) {
    // Tüm HTML'i (Nuxt'un render ettiği her şeyi) acımasızca silip kendi ekranımızı basıyoruz.
    // Bizim projemizin renk paleti: Zemin Siyah (#000000), Yazı Beyaz (#ffffff) ve Gri (#a1a1aa)
    document.documentElement.innerHTML = `
      <head>
        <title>Legal Warning | Le Champ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #000000;
            color: #ffffff;
            font-family: system-ui, -apple-system, sans-serif;
            display: flex;
            height: 100vh;
            width: 100vw;
            align-items: center;
            justify-content: center;
            text-align: center;
            overflow: hidden;
            flex-direction: column;
          }
          .warning-container {
            max-width: 600px;
            padding: 2rem;
          }
          svg {
            margin-bottom: 2rem;
            opacity: 0.9;
          }
          h1 {
            font-size: 1.2rem;
            letter-spacing: 0.3em;
            text-transform: uppercase;
            margin-bottom: 1rem;
            font-weight: 300;
            color: #ffffff;
          }
          p {
            font-size: 0.9rem;
            line-height: 1.8;
            color: #a1a1aa; /* Şık bir gri tonu */
            font-weight: 300;
          }
        </style>
      </head>
      <body>
        <div class="warning-container">
          <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
          </svg>
          <h1>Legal Warning</h1>
          <p>The content and source code of this website have been illegally cloned. This domain is not authorized to host Le Champ® intellectual property. Legal action will be taken.</p>
        </div>
      </body>
    `;
    // API isteklerini, resim yüklemelerini ve sayfa akışını anında dondur
    window.stop();

    // Tarayıcı konsolunda kırmızı bir hata fırlatıp diğer JS kodlarının çalışmasını kilitle
    throw new Error(
      "Unauthorized Domain Allocation: Le Champ Security Protocol",
    );
  }
});
