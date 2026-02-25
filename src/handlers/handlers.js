import { getSortedBookmarks, state } from "../js/state/state";
import { renderApp } from "../js/components/app";
import { syncThemeButtons, setTheme, setAccountMenuOpen } from "../js/ui/theme";
import { toggleModal } from "../js/components/modal";
import { renderBookmarkItem } from "../js/components/bookmark";

import { validateForm, addNewBookMark } from "../js/validation/validation";
import { refreshUI } from "../js/ui/refreshUI";
import { icons } from "../js/icons";

function setSidebarOpen(isOpen) {
  state.isMobileSidebarOpen = isOpen;

  const sidebar = document.querySelector(".sidebar");
  if (sidebar) {
    sidebar.classList.toggle("open", isOpen);
    sidebar.setAttribute("aria-hidden", String(!isOpen));
  } else {
    // Fallback if handlers fire before initial render (shouldn't happen, but safe).
    renderApp();
  }

  const menuBtn = document.querySelector('[data-action="toggle-sidebar"]');
  if (menuBtn) {
    menuBtn.setAttribute("aria-expanded", String(isOpen));
  }
}

export function initHandlers() {
  document.addEventListener("click", (e) => {
    const action = e.target.closest("[data-action]")?.dataset.action;
    const clickedBtn = e.target.closest("[data-action]");
    closeAllOutsideClick(e);
    if (!action) return;

    if (action === "toggle-sidebar") {
      setSidebarOpen(true);
    }

    if (action === "close-sidebar") {
      setSidebarOpen(false);
    }

    if (action === "toggle-accountmenu") {
      setAccountMenuOpen();
    }

    if (action === "set-theme-light") {
      state.theme = "light";
      setTheme();
    }

    if (action === "set-theme-dark") {
      state.theme = "dark";
      setTheme();
    }

    if (action === "addbookmark") {
      toggleModal(".addbookmark", true);
    }

    if (action === "close-addbookmark") {
      toggleModal(".addbookmark", false);
    }

    if (action === "cancel-addbookmark") {
      toggleModal(".addbookmark", false);
    }

    if (action === "sort") {
      toggleSortMenu();
    }

    if (action === "toggle-cardmenu") {
      const cardMenu = clickedBtn.closest(".cardmenu").querySelector(".cardmenu__panel");
      cardMenu.classList.toggle("open");
    }

    if (action === "set-sort") {
      const sortBtns = document.querySelectorAll("[data-action='set-sort']");
      sortBtns.forEach((btn) => {
        btn.classList.remove("is-active");
      });
      clickedBtn.classList.add("is-active");
      const value = clickedBtn.dataset.sortValue;
      state.selectedSort = value;
      const cardsContainer = document.querySelector(".cards__container");
      cardsContainer.innerHTML = renderBookmarkItem();
    }

    if (action === "save-addbookmark") {
      toggleModal(".addbookmark", false);
      addNewBookMark();
    }

    if (action === "filter-tag") {
      const tag = clickedBtn.dataset.tag;

      if (state.selectedTags.includes(tag)) {
        state.selectedTags = state.selectedTags.filter((t) => t !== tag);
      } else {
        state.selectedTags.push(tag);
      }

      refreshUI();
    }

    if (action === "visit-bookmark") {
      const id = clickedBtn.closest("[data-bookmark-id]").dataset.bookmarkId;
      const selectedBookmark = state.bookmarks.find((bookmark) => bookmark.id === id);
      selectedBookmark.visitCount++;
      selectedBookmark.lastVisited = Date.now();
      const url = selectedBookmark.url;
      window.open(url, "_blank");
      refreshUI();
    }

    if (action === "copy-bookmark-url") {
      const id = clickedBtn.closest("[data-bookmark-id]").dataset.bookmarkId;
      const selectedBookmark = state.bookmarks.find((bookmark) => bookmark.id === id);
      if (!selectedBookmark) return;
      const url = selectedBookmark.url;
      navigator.clipboard.writeText(url).then(() => {
        clickedBtn.querySelector("span").textContent = "Copied";
        setTimeout(() => {
          clickedBtn.querySelector("span").textContent = "Copy URL";
        }, 2000);
      });
    }
  });

  document.addEventListener("submit", (e) => {
    const form = e.target;
    if (!(form instanceof HTMLFormElement)) return;

    if (form.matches(".addbookmark__form")) {
      e.preventDefault();
      addNewBookMark();
    }

    if (form.matches(".authmodal__form")) {
      e.preventDefault();
    }
  });
}

function toggleSortMenu() {
  const sortMenu = document.querySelector(".sortmenu__panel");
  sortMenu.classList.toggle("open");
}

function closeIfOutside(e, selector) {}

const OUTSIDE_CLICK_TARGETS = [
  { container: ".accountmenu", panel: ".accountmenu__panel" },
  { container: ".sortmenu", panel: ".sortmenu__panel" },
  { container: ".cardmenu", panel: ".cardmenu__panel" },
  { container: ".sidebar", panel: ".sidebar" },
];

function closeAllOutsideClick(e) {
  OUTSIDE_CLICK_TARGETS.forEach(({ container, panel }) => {
    const el = document.querySelector(panel);
    if (!el) return;

    if (!e.target.closest(container) && el.classList.contains("open")) {
      el.classList.remove("open");
    }
  });
}
