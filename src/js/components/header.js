import { icons } from "../icons";
import { state } from "../state/state";

export function renderHeader() {
  const lightActive = state.theme === "light" ? "is-active" : "";
  const darkActive = state.theme === "dark" ? "is-active" : "";
  const isLightPressed = state.theme === "light";
  const isDarkPressed = state.theme === "dark";

  return /* html */ `
 <header class="header" id="header">
          <div class="header__container">
            <div class="header__btn">
              <button
                class="header__menuBtn"
                type="button"
                data-action="toggle-sidebar"
                aria-expanded="false"
                aria-controls="sidebar-panel"
              >
                ${icons.menu}
              </button>
            </div>
            <form class="header__form" role="search" aria-label="Search bookmarks">
              ${icons.search}
              <input
                type="text"
                required
                id="header__input"
                class="header__input"
                name="query"
                placeholder="Search by title..."
                aria-label="Search bookmarks"
              />
            </form>
          </div>

          <div class="header__btnGroup">
            <button class="header__addBtn text-3" type="button" data-action="addbookmark">
              ${icons.add}
              <span class="header__addBookmark-text">Add Bookmark</span>
            </button>

            <div class="accountmenu" data-state="closed">
              <button
                class="header__userNameBtn accountmenu__trigger"
                type="button"
                data-action="toggle-accountmenu"
                aria-expanded="false"
                aria-controls="accountmenu-panel"
              >
                <img src="/assets/images/image-avatar.webp" alt="Emily Carter profile" />
              </button>

              <div
                class="accountmenu__panel"
                id="accountmenu-panel"
                aria-label="Account menu"
              >
                <div class="accountmenu__profile">
                  <div class="accountmenu__avatar">
                    <img src="/assets/images/image-avatar.webp" alt="" />
                  </div>

                  <div class="accountmenu__profileText">
                    <p class="accountmenu__name text-4">Emily Carter</p>
                    <p class="accountmenu__email text-4">emily101@email.com</p>
                  </div>
                </div>

                <div class="accountmenu__section">
                  <div class="accountmenu__row">
                    <div class="accountmenu__rowLabel">
                      ${icons.palette}
                      <span class="text-4">Theme</span>
                    </div>

                    <div class="accountmenu__themeToggle" role="group" aria-label="Theme">
                      <button
                        class="accountmenu__themeBtn ${lightActive}"
                        type="button"
                        data-action="set-theme-light"
                        aria-pressed="${isLightPressed}"
                      >
                        ${icons.sun}
                      </button>

                      <button
                        class="accountmenu__themeBtn ${darkActive}"
                        type="button"
                        data-action="set-theme-dark"
                        aria-pressed="${isDarkPressed}"
                      >
                        ${icons.moon}
                      </button>
                    </div>
                  </div>
                </div>

                <div class="accountmenu__section">
                  <button class="accountmenu__menuBtn" type="button" data-action="logout">
                    <span class="accountmenu__rowLabel">
                      ${icons.logout}
                      <span class="text-4">Logout</span>
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </header>
    `;
}
