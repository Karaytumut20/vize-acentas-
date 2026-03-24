import { c as defineEventHandler, e as appendHeader } from '../_/nitro.mjs';
import { Feed } from 'feed';
import { s as siteConfig } from '../_/site.mjs';
import 'node:http';
import 'node:https';
import 'node:events';
import 'node:buffer';
import 'vue';
import 'consola';
import 'node:fs';
import 'node:url';
import 'fast-xml-parser';
import 'ipx';
import 'node:path';
import 'node:crypto';

const rss_xml = defineEventHandler((event) => {
  const feed = new Feed({
    title: siteConfig.name,
    description: siteConfig.description,
    id: siteConfig.url,
    link: siteConfig.url,
    language: siteConfig.lang,
    image: siteConfig.ogImage,
    favicon: `${siteConfig.url}/favicon.ico`,
    copyright: `All rights reserved ${(/* @__PURE__ */ new Date()).getFullYear()}, ${siteConfig.creator}`,
    author: {
      name: siteConfig.creator,
      email: siteConfig.contactEmail,
      link: siteConfig.url
    }
  });
  feed.addItem({
    title: "Welcome to Le Champ\xAE Studio",
    id: `${siteConfig.url}/`,
    link: `${siteConfig.url}/`,
    description: siteConfig.description,
    content: `We are a premium interactive development studio specializing in high-end web experiences, Awwwards-winning animations, and modern frontend architecture. Contact us at ${siteConfig.contactEmail}`,
    date: new Date(siteConfig.foundedAt),
    // Yayınlanma tarihi
    image: siteConfig.ogImage
  });
  appendHeader(event, "Content-Type", "application/xml; charset=utf-8");
  return feed.rss2();
});

export { rss_xml as default };
//# sourceMappingURL=rss.xml.mjs.map
