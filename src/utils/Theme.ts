// Theme.ts

export type ThemeColor = string;

export function updateThemeColor(color: ThemeColor) {
  const themeColorMeta = document.querySelector('meta[name="theme-color"]');
  if (themeColorMeta) {
    themeColorMeta.setAttribute("content", color);
  }
  console.log("Theme color updated:", color);
}
