/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/components/**/*.{js,vue,ts}",
    "./app/layouts/**/*.vue",
    "./app/pages/**/*.vue",
    "./app/plugins/**/*.{js,ts}",
    "./app/utils/**/*.{js,ts}",
    "./app/app.vue",
    "./app/error.vue",
  ],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1600px",
      "4xl": "1920px",
      "5xl": "2560px",
      "6xl": "3840px",
    },
    extend: {
      colors: {
        white: "hsl(var(--color-white) / <alpha-value>)",
        black: "hsl(var(--color-black) / <alpha-value>)",
        light: "hsl(var(--color-light) / <alpha-value>)",
        dark: "hsl(var(--color-dark) / <alpha-value>)",

        "theme-bg": "hsl(var(--theme-bg) / <alpha-value>)",
        "theme-fg": "hsl(var(--theme-fg) / <alpha-value>)",
      },
      fontSize: {
        xs: "var(--text-xs)",
        sm: "var(--text-sm)",
        base: "var(--text-base)",
        xl: "var(--text-xl)",
        "2xl": "var(--text-2xl)",
        "3xl": "var(--text-3xl)",
        "4xl": "var(--text-4xl)",
        "5xl": "var(--text-5xl)",
        "6xl": "var(--text-6xl)",
        "7xl": "var(--text-7xl)",
        "8xl": "var(--text-8xl)",
        "9xl": "var(--text-9xl)",
      },
      spacing: {
        "page-margin": "var(--page-margin)",
        "grid-gutter": "var(--grid-gutter)",
        "section-gap": "var(--section-gap)",
        "header-height": "var(--header-height)",
        "safe-top": "env(safe-area-inset-top)",
        "safe-bottom": "env(safe-area-inset-bottom)",
        "safe-left": "env(safe-area-inset-left)",
        "safe-right": "env(safe-area-inset-right)",
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
        lg: "var(--radius-lg)",
      },
      fontFamily: {
        sans: ["lchmp", "sans-serif"],
      },
      // 🔥 GÜNCELLEME: Tailwind fontWeight değerleri 300-600 aralığına ve standart kademelere uyumlu hale getirildi.
      fontWeight: {
        light: "300",
        book: "350", // veya 400
        normal: "400", // Standart gövde metni
        medium: "500",
        semibold: "600", // Navbar'da kullandığımız tok değer
      },
    },
  },
  plugins: [],
};
