export function applyTheme(theme = "light") {
  document.documentElement.setAttribute("data-theme", theme);
}

export function toggleTheme(currentTheme) {
  const nextTheme = currentTheme === "dark" ? "light" : "dark";
  applyTheme(nextTheme);
  return nextTheme;
}
