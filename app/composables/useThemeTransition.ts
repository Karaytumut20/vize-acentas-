import { siteConfig } from "~/utils/site";

type ThemeType = "dark" | "light";

export const useThemeTransition = () => {
  const setTheme = (theme: ThemeType) => {
    if (typeof document === "undefined") return;

    const root = document.documentElement;

    if (theme === "dark") {
      // ÇÖZÜM: Tailwind bu veriyi hsl() içine alacağı için sadece sayısal değerleri veriyoruz.
      root.style.setProperty("--theme-bg", "0 0% 0%");
      root.style.setProperty("--theme-fg", "0 0% 100%");
    } else {
      root.style.setProperty("--theme-bg", "0 0% 100%");
      root.style.setProperty("--theme-fg", "0 0% 0%");
    }
  };

  return { setTheme };
};
