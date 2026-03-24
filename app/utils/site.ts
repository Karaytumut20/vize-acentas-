export const siteConfig = {
  name: "Champ Yurt Dışı Eğitim | Sınavsız Üniversite",
  shortName: "Champ Yurt Dışı Eğitim",
  description:
    "Lise diploması ile Avrupa ve dünyadaki partner üniversitelerimize sınavsız kayıt! Makedonya, Bosna Hersek eğitimleri, Work and Travel ve kariyer garantisi.",
  url: "https://champegitim.com.tr",

  ogImage: "https://champegitim.com.tr/og-image.jpg",
  ogImageWidth: 1200,
  ogImageHeight: 630,

  themeColors: {
    dark: "hsl(253 0% 7%)",
    light: "hsl(210 11% 94%)",
  },
  defaultThemeColor: "hsl(253 0% 7%)",

  siteType: "Organization",
  lang: "tr",
  contactEmail: "bilgi@champegitim.com.tr",
  foundedAt: "2014-01-01",

  address: {
    streetAddress: "Eğitim Cd.",
    addressLocality: "İstanbul",
    addressRegion: "İstanbul",
    postalCode: "34000",
    addressCountry: "TR",
  },
  geo: {
    latitude: 41.0082,
    longitude: 28.9784,
  },

  links: {
    twitter: "https://twitter.com/champegitim",
    linkedin: "https://linkedin.com/company/champ-egitim",
    instagram: "https://instagram.com/champegitim",
    tiktok: "https://tiktok.com/@champegitim",
    facebook: "https://facebook.com/champegitim",
  },
  twitterHandle: "@champegitim",

  keywords: [
    "Makedonya üniversite fiyatları",
    "Goce Delcev Üniversitesi",
    "Saraybosna Üniversitesi",
    "Sınavsız üniversite",
    "Yurt dışı eğitim danışmanlığı",
    "Açıktan üniversite okumak",
    "Work and Travel",
    "Makedonya vatandaşlık başvurusu",
    "Bosna Hersek üniversite fiyatları",
    "Makedonya üniversite başvurusu",
    "Bosna Hersek üniversite başvurusu",
    "Makedonya üniversite bölümleri",
    "Bosna Hersek üniversite bölümleri",
  ],
  knowsAbout: [
    "Yurt Dışı Eğitim Danışmanlığı",
    "Sınavsız Üniversite Kabulü",
    "Makedonya ve Bosna Hersek Üniversiteleri",
    "Açıktan Üniversite",
    "Work and Travel",
  ],

  creator: "Champ Yurt Dışı Eğitim",

  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
    bing: "bing-verification-code",
  },
} as const;

export type SiteConfig = typeof siteConfig;
