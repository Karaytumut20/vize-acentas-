import { Feed } from "feed";
import { siteConfig } from "~/utils/site";

export default defineEventHandler((event) => {
  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: siteConfig.lang,
    image: siteConfig.ogImage,
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${new Date().getFullYear()}, ${siteConfig.creator}`,
    author: {
      name: siteConfig.creator,
      email: siteConfig.contactEmail,
      link: siteConfig.url,
    },
  });

  // Buraya ileride CMS'den (örneğin blog yazıları veya projeler) gelen verileri bir döngüyle ekleyebilirsin.
  // Şimdilik sitemizin ana tanıtımını (AEO destekli) varsayılan bir içerik olarak basıyoruz.
  feed.addItem({
    title: "Welcome to Le Champ® Studio",
    id: `${siteConfig.url}/`,
    link: `${siteConfig.url}/`,
    description: siteConfig.description,
    content: `We are a premium interactive development studio specializing in high-end web experiences, Awwwards-winning animations, and modern frontend architecture. Contact us at ${siteConfig.contactEmail}`,
    date: new Date(siteConfig.foundedAt), // Yayınlanma tarihi
    image: siteConfig.ogImage,
  });

  // XML formatında çıktı veriyoruz
  appendHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return feed.rss2();
});
