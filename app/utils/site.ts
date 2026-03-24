export const siteConfig = {
  name: "Vize Acentası | Profesyonel Vize Danışmanlık",
  shortName: "Vize Acentası",
  description:
    "Türkiye'nin en güvenilir vize danışmanlık firması. Schengen, Amerika, İngiltere, Kanada ve diğer ülke vizesi başvurularınızda uzman desteği ile yanınızdayız.",
  url: "https://vize-acentasi.vercel.app",

  ogImage: "https://vize-acentasi.vercel.app/images/og-default.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,

  themeColors: {
    dark: "hsl(253 0% 7%)",
    light: "hsl(210 11% 94%)",
  },
  defaultThemeColor: "hsl(253 0% 7%)",

  siteType: "Organization",
  lang: "tr",
  contactEmail: "bilgi@vize-acentasi.vercel.app",
  foundedAt: "2014-01-01",

  address: {
    streetAddress: "Şişli Merkez",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    postalCode: "34360",
    addressCountry: "TR",
  },
  geo: {
    latitude: 41.0625,
    longitude: 28.9897,
  },

  links: {
    twitter: "https://twitter.com/vizeacentasi",
    linkedin: "https://linkedin.com/company/vizeacentasi",
    instagram: "https://instagram.com/vizeacentasi",
    youtube: "https://youtube.com/@vizeacentasi",
    facebook: "https://facebook.com/vizeacentasi",
  },
  twitterHandle: "@vizeacentasi",

  keywords: [
    "schengen vizesi",
    "amerika vizesi",
    "vize danışmanlık",
    "istanbul vize",
    "vize başvurusu",
    "ingiltere vizesi",
    "kanada vizesi",
    "vize acentesi",
    "schengen vizesi danışmanlık",
    "amerika vizesi mülakatı",
    "turistik vize",
  ],
  knowsAbout: [
    "Schengen Vizesi Danışmanlığı",
    "Amerika Vizesi",
    "İngiltere Vizesi",
    "Kanada Vizesi",
    "Vize Başvuru Süreç Takibi",
  ],

  creator: "Vize Acentası",

  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
} as const;

export type SiteConfig = typeof siteConfig;
