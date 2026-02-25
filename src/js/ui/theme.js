import { state } from "../state/state";

export function setTheme() {
  const theme = state.theme;
  const root = document.documentElement;

  if (theme === "light") {
    root.setAttribute("data-theme", "light");
  } else {
    root.setAttribute("data-theme", "dark");
  }

  syncThemeButtons(theme);
}

export function syncThemeButtons(theme) {
  const lightBtn = document.querySelector('[data-action="set-theme-light"]');
  const darkBtn = document.querySelector('[data-action="set-theme-dark"]');

  if (!lightBtn || !darkBtn) return;

  const isLight = theme === "light";

  lightBtn.classList.toggle("is-active", isLight);
  lightBtn.setAttribute("aria-pressed", String(isLight));

  darkBtn.classList.toggle("is-active", !isLight);
  darkBtn.setAttribute("aria-pressed", String(!isLight));
}

export function setAccountMenuOpen() {
  const accountmenu = document.querySelector(".accountmenu__panel");
  const accountMenuBtn = document.querySelector("[data-action='toggle-accountmenu']");

  if (!accountmenu) return;
  accountMenuBtn.classList.toggle("active");
  accountmenu.classList.toggle("open");
}
