export const useSEO = (options: {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  type?: string;
  publishedAt?: string;
  modifiedAt?: string;
  author?: string;
}) => {
  const config = useRuntimeConfig();
  const route = useRoute();
  
  const siteUrl = config.public.siteUrl || 'https://vize-acentasi.vercel.app';
  
  // SEO 580px (yaklaşık 55-60 karakter) kuralı ve kelime tekrarı engelleme
  const cleanTitle = options.title.replace(/\| Vize Acentası|\| Champ Vize/g, '').trim();
  const suffix = cleanTitle.length > 45 ? '' : ' | Champ Vize';
  let fullTitle = `${cleanTitle}${suffix}`;
  
  if (fullTitle.length > 60) {
    fullTitle = fullTitle.substring(0, 57) + '...';
  }

  const fullUrl = `${siteUrl}${route.path}`;
  const defaultImage = `${siteUrl}/images/og-default.jpg`;
  
  useHead({
    title: fullTitle,
    meta: [
      { name: 'description', content: options.description },
      { name: 'keywords', content: options.keywords || '' },
      // Open Graph
      { property: 'og:title', content: fullTitle },
      { property: 'og:description', content: options.description },
      { property: 'og:image', content: options.image || defaultImage },
      { property: 'og:url', content: fullUrl },
      { property: 'og:type', content: options.type || 'website' },
      // Twitter Card
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: fullTitle },
      { name: 'twitter:description', content: options.description },
      { name: 'twitter:image', content: options.image || defaultImage },
      // Article specific
      ...(options.type === 'article' ? [
        { property: 'article:published_time', content: options.publishedAt || '' },
        { property: 'article:modified_time', content: options.modifiedAt || '' },
        { property: 'article:author', content: options.author || 'Vize Acentası' }
      ] : [])
    ],
    link: [
      { rel: 'canonical', href: fullUrl }
    ]
  });
};
