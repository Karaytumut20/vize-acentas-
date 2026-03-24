export default defineEventHandler((event) => {
  // 1. İstek atılan asıl host'u (domaini) yakala.
  // x-forwarded-host: Vercel, Cloudflare gibi aracıları (proxy) kullanan sunucular için hayati önem taşır.
  const host =
    getRequestHeader(event, "x-forwarded-host") ||
    getRequestHeader(event, "host");

  // 2. Eğer host yoksa veya 'www.' ile BAŞLAMIYORSA hiçbir şey yapma, sistemi meşgul etme.
  if (!host || !host.startsWith("www.")) return;

  // 3. İstek 'www.' ile gelmiş. Hemen URL detaylarını al.
  const url = getRequestURL(event);

  // 4. 'www.' kısmını URL'den tamamen temizle.
  const newHost = host.replace(/^www\./, "");

  // 5. Protokolü (http/https) güvenli bir şekilde belirle.
  const protocol =
    getRequestHeader(event, "x-forwarded-proto") ||
    (import.meta.dev ? "http" : "https");

  // 6. Modern ve SEO Uyumlu Yönlendirme (308)
  // 308, eski 301'in aksine GET dışındaki istekleri (POST, PUT) bozmadan aynı methodla yönlendirir.
  return sendRedirect(
    event,
    `${protocol}://${newHost}${url.pathname}${url.search}`,
    308,
  );
});
