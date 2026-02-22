export function renderHeader() {
  return /* html */ `
 <header class="header" id="header">
          <div class="header__container">
            <div class="header__btn">
              <button class="header__menuBtn" type="button" data-action="toggle-sidebar">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="17"
                  height="12"
                  viewBox="0 0 17 12"
                  fill="none"
                >
                  <path
                    d="M0.799805 5.8H15.7998M0.799805 0.799999H15.7998M0.799805 10.8H15.7998"
                    stroke="black"
                    stroke-width="1.6"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </button>
            </div>
            <form class="header__form" role="search" aria-label="Search bookmarks">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M17.5 17.5L13.875 13.875M15.8333 9.16667C15.8333 12.8486 12.8486 15.8333 9.16667 15.8333C5.48477 15.8333 2.5 12.8486 2.5 9.16667C2.5 5.48477 5.48477 2.5 9.16667 2.5C12.8486 2.5 15.8333 5.48477 15.8333 9.16667Z"
                  stroke="#4C5C59"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M10.0003 4.16667V15.8333M4.16699 10H15.8337"
                  stroke="#051513"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
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
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                        fill="none"
                        aria-hidden="true"
                      >
                        <g clip-path="url(#clip0_2577_3456)">
                          <path
                            d="M1.3335 8.00004C1.3335 11.6819 4.31826 14.6667 8.00016 14.6667C9.10473 14.6667 10.0002 13.7713 10.0002 12.6667V12.3334C10.0002 12.0238 10.0002 11.869 10.0173 11.739C10.1354 10.8415 10.8416 10.1353 11.7391 10.0172C11.8691 10 12.0239 10 12.3335 10H12.6668C13.7714 10 14.6668 9.10461 14.6668 8.00004C14.6668 4.31814 11.6821 1.33337 8.00016 1.33337C4.31826 1.33337 1.3335 4.31814 1.3335 8.00004Z"
                            stroke="#4C5C59"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M4.66683 8.66671C5.03502 8.66671 5.3335 8.36823 5.3335 8.00004C5.3335 7.63185 5.03502 7.33337 4.66683 7.33337C4.29864 7.33337 4.00016 7.63185 4.00016 8.00004C4.00016 8.36823 4.29864 8.66671 4.66683 8.66671Z"
                            stroke="#4C5C59"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M10.6668 6.00004C11.035 6.00004 11.3335 5.70156 11.3335 5.33337C11.3335 4.96518 11.035 4.66671 10.6668 4.66671C10.2986 4.66671 10.0002 4.96518 10.0002 5.33337C10.0002 5.70156 10.2986 6.00004 10.6668 6.00004Z"
                            stroke="#4C5C59"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                          <path
                            d="M6.66683 5.33337C7.03502 5.33337 7.3335 5.0349 7.3335 4.66671C7.3335 4.29852 7.03502 4.00004 6.66683 4.00004C6.29864 4.00004 6.00016 4.29852 6.00016 4.66671C6.00016 5.0349 6.29864 5.33337 6.66683 5.33337Z"
                            stroke="#4C5C59"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_2577_3456">
                            <rect width="16" height="16" fill="white" />
                          </clipPath>
                        </defs>
                      </svg>
                      <span class="text-4">Theme</span>
                    </div>

                    <div class="accountmenu__themeToggle" role="group" aria-label="Theme">
                      <button
                        class="accountmenu__themeBtn is-active"
                        type="button"
                        data-action="set-theme-light"
                        aria-pressed="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="14"
                          height="14"
                          viewBox="0 0 14 14"
                          fill="none"
                          aria-hidden="true"
                        >
                          <g clip-path="url(#clip0_2577_3462)">
                            <path
                              d="M7.00033 1.16663V2.33329M7.00033 11.6666V12.8333M2.33366 6.99996H1.16699M3.68356 3.68319L2.8586 2.85824M10.3171 3.68319L11.142 2.85824M3.68356 10.3191L2.8586 11.1441M10.3171 10.3191L11.142 11.1441M12.8337 6.99996H11.667M9.91699 6.99996C9.91699 8.61079 8.61116 9.91663 7.00033 9.91663C5.38949 9.91663 4.08366 8.61079 4.08366 6.99996C4.08366 5.38913 5.38949 4.08329 7.00033 4.08329C8.61116 4.08329 9.91699 5.38913 9.91699 6.99996Z"
                              stroke="#051513"
                              stroke-width="1.3"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2577_3462">
                              <rect width="14" height="14" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </button>

                      <button
                        class="accountmenu__themeBtn"
                        type="button"
                        data-action="set-theme-dark"
                        aria-pressed="false"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="13"
                          height="13"
                          viewBox="0 0 13 13"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M12.2902 7.01504C11.487 8.42396 9.97106 9.37387 8.23324 9.37387C5.65591 9.37387 3.56657 7.28453 3.56657 4.7072C3.56657 2.96924 4.51663 1.45317 5.92573 0.650024C2.96559 0.930692 0.649902 3.42345 0.649902 6.45706C0.649902 9.67872 3.26157 12.2904 6.48324 12.2904C9.51669 12.2904 12.0093 9.97496 12.2902 7.01504Z"
                            stroke="#051513"
                            stroke-width="1.3"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>

                <div class="accountmenu__section">
                  <button class="accountmenu__menuBtn" type="button" data-action="logout">
                    <span class="accountmenu__rowLabel">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M14.25 16.5L18.75 12M18.75 12L14.25 7.5M18.75 12H9.75"
                          stroke="#051513"
                          stroke-width="1.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.5 4.5H7.5A2.25 2.25 0 0 0 5.25 6.75v10.5A2.25 2.25 0 0 0 7.5 19.5h3"
                          stroke="#051513"
                          stroke-width="1.75"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
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
