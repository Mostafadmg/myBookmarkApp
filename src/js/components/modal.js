export function renderModal() {
  return /* html */ `
     <main>
        <section class="cards">
          <header class="cards__header">
            <h1 class="cards__header-title text-1">All Bookmarks</h1>

            <button class="sort-btn text-3" type="button" data-action="sort">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M14.1667 3.33333V16.6667M14.1667 16.6667L10.8333 13.3333M14.1667 16.6667L17.5 13.3333M5.83333 16.6667V3.33333M5.83333 3.33333L2.5 6.66667M5.83333 3.33333L9.16667 6.66667"
                  stroke="#051513"
                  stroke-width="1.6"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span>Sort by</span>
            </button>
          </header>
          <section class="cards__container">
            <div class="card__item" data-bookmark-id="bookmark-1">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <div class="cardmenu" data-state="closed">
                    <button
                      class="card-btn cardmenu__trigger"
                      type="button"
                      data-bookmark-id="bookmark-1"
                      data-action="toggle-cardmenu"
                      aria-haspopup="menu"
                      aria-expanded="false"
                      aria-controls="cardmenu-panel-1"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </button>

                    <div
                      class="cardmenu__panel"
                      id="cardmenu-panel-1"
                      aria-label="Bookmark actions"
                    >
                      <button
                        class="cardmenu__item"
                        role="menuitem"
                        type="button"
                        data-action="visit-bookmark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M14 6L14 2M14 2H10M14 2L8.66667 7.33333M6.66667 3.33333H5.2C4.0799 3.33333 3.51984 3.33333 3.09202 3.55132C2.71569 3.74307 2.40973 4.04903 2.21799 4.42535C2 4.85318 2 5.41323 2 6.53333V10.8C2 11.9201 2 12.4802 2.21799 12.908C2.40973 13.2843 2.71569 13.5903 3.09202 13.782C3.51984 14 4.0799 14 5.2 14H9.46667C10.5868 14 11.1468 14 11.5746 13.782C11.951 13.5903 12.2569 13.2843 12.4487 12.908C12.6667 12.4802 12.6667 11.9201 12.6667 10.8V9.33333"
                            stroke="#B1B9B9"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Visit</span>
                      </button>

                      <button
                        class="cardmenu__item"
                        role="menuitem"
                        type="button"
                        data-action="copy-bookmark-url"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <g clip-path="url(#clip0_2577_16432)">
                            <path
                              d="M3.3335 10.0002C2.71224 10.0002 2.40161 10.0002 2.15658 9.89867C1.82988 9.76334 1.57032 9.50378 1.43499 9.17707C1.3335 8.93205 1.3335 8.62142 1.3335 8.00016V3.46683C1.3335 2.72009 1.3335 2.34672 1.47882 2.06151C1.60665 1.81063 1.81063 1.60665 2.06151 1.47882C2.34672 1.3335 2.72009 1.3335 3.46683 1.3335H8.00016C8.62142 1.3335 8.93205 1.3335 9.17707 1.43499C9.50378 1.57032 9.76334 1.82988 9.89867 2.15658C10.0002 2.40161 10.0002 2.71224 10.0002 3.3335M8.1335 14.6668H12.5335C13.2802 14.6668 13.6536 14.6668 13.9388 14.5215C14.1897 14.3937 14.3937 14.1897 14.5215 13.9388C14.6668 13.6536 14.6668 13.2802 14.6668 12.5335V8.1335C14.6668 7.38676 14.6668 7.01339 14.5215 6.72818C14.3937 6.47729 14.1897 6.27332 13.9388 6.14549C13.6536 6.00016 13.2802 6.00016 12.5335 6.00016H8.1335C7.38676 6.00016 7.01339 6.00016 6.72818 6.14549C6.47729 6.27332 6.27332 6.47729 6.14549 6.72818C6.00016 7.01339 6.00016 7.38676 6.00016 8.1335V12.5335C6.00016 13.2802 6.00016 13.6536 6.14549 13.9388C6.27332 14.1897 6.47729 14.3937 6.72818 14.5215C7.01339 14.6668 7.38676 14.6668 8.1335 14.6668Z"
                              stroke="#B1B9B9"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2577_16432">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Copy URL</span>
                      </button>

                      <button
                        class="cardmenu__item"
                        role="menuitem"
                        type="button"
                        data-action="toggle-pin-bookmark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M8.00012 10.0002L8.00012 14.6668M5.33346 4.87225V6.29266C5.33346 6.43134 5.33346 6.50068 5.31985 6.567C5.30777 6.62585 5.2878 6.68278 5.26047 6.73628C5.22966 6.79657 5.18635 6.85071 5.09972 6.959L4.0532 8.26715C3.60937 8.82194 3.38746 9.09933 3.38721 9.33278C3.38699 9.5358 3.4793 9.72787 3.63797 9.85452C3.82042 10.0002 4.17566 10.0002 4.88612 10.0002H11.1141C11.8246 10.0002 12.1798 10.0002 12.3623 9.85452C12.5209 9.72787 12.6133 9.5358 12.613 9.33278C12.6128 9.09933 12.3909 8.82194 11.947 8.26715L10.9005 6.959C10.8139 6.85071 10.7706 6.79657 10.7398 6.73628C10.7125 6.68278 10.6925 6.62585 10.6804 6.567C10.6668 6.50068 10.6668 6.43134 10.6668 6.29266V4.87225C10.6668 4.7955 10.6668 4.75713 10.6711 4.71928C10.675 4.68566 10.6814 4.65239 10.6903 4.61974C10.7003 4.58299 10.7146 4.54736 10.7431 4.4761L11.415 2.79631C11.611 2.30625 11.709 2.06123 11.6682 1.86453C11.6324 1.69252 11.5302 1.54157 11.3838 1.4445C11.2163 1.3335 10.9524 1.3335 10.4246 1.3335H5.57563C5.04782 1.3335 4.78391 1.3335 4.61646 1.4445C4.47003 1.54157 4.36783 1.69252 4.33209 1.86453C4.29122 2.06123 4.38923 2.30625 4.58525 2.79631L5.25717 4.4761C5.28567 4.54736 5.29992 4.58299 5.30995 4.61974C5.31886 4.65239 5.32526 4.68566 5.32912 4.71928C5.33346 4.75713 5.33346 4.7955 5.33346 4.87225Z"
                            stroke="#B1B9B9"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Pin</span>
                      </button>

                      <button
                        class="cardmenu__item"
                        role="menuitem"
                        type="button"
                        data-action="edit-bookmark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <g clip-path="url(#clip0_2577_16444)">
                            <path
                              d="M7.3335 2.66666H4.5335C3.41339 2.66666 2.85334 2.66666 2.42552 2.88464C2.04919 3.07639 1.74323 3.38235 1.55148 3.75867C1.3335 4.1865 1.3335 4.74655 1.3335 5.86666V11.4667C1.3335 12.5868 1.3335 13.1468 1.55148 13.5746C1.74323 13.951 2.04919 14.2569 2.42552 14.4487C2.85334 14.6667 3.41339 14.6667 4.5335 14.6667H10.1335C11.2536 14.6667 11.8137 14.6667 12.2415 14.4487C12.6178 14.2569 12.9238 13.951 13.1155 13.5746C13.3335 13.1468 13.3335 12.5868 13.3335 11.4667V8.66666M5.33348 10.6667H6.44984C6.77596 10.6667 6.93902 10.6667 7.09247 10.6298C7.22852 10.5972 7.35858 10.5433 7.47788 10.4702C7.61243 10.3877 7.72773 10.2724 7.95833 10.0418L14.3335 3.66666C14.8858 3.11437 14.8858 2.21894 14.3335 1.66666C13.7812 1.11437 12.8858 1.11437 12.3335 1.66665L5.95832 8.04182C5.72772 8.27242 5.61241 8.38772 5.52996 8.52228C5.45685 8.64157 5.40298 8.77163 5.37032 8.90768C5.33348 9.06113 5.33348 9.22419 5.33348 9.55031V10.6667Z"
                              stroke="#B1B9B9"
                              stroke-width="1.5"
                              stroke-linecap="round"
                              stroke-linejoin="round"
                            />
                          </g>
                          <defs>
                            <clipPath id="clip0_2577_16444">
                              <rect width="16" height="16" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                        <span>Edit</span>
                      </button>

                      <button
                        class="cardmenu__item"
                        role="menuitem"
                        type="button"
                        data-action="archive-bookmark"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          aria-hidden="true"
                        >
                          <path
                            d="M2.66683 5.33106C2.55749 5.32824 2.47809 5.32191 2.40671 5.30771C1.87779 5.2025 1.46432 4.78904 1.35912 4.26012C1.3335 4.13132 1.3335 3.97644 1.3335 3.66667C1.3335 3.3569 1.3335 3.20201 1.35912 3.07321C1.46432 2.54429 1.87779 2.13083 2.40671 2.02562C2.53551 2 2.69039 2 3.00016 2H13.0002C13.3099 2 13.4648 2 13.5936 2.02562C14.1225 2.13083 14.536 2.54429 14.6412 3.07321C14.6668 3.20201 14.6668 3.3569 14.6668 3.66667C14.6668 3.97644 14.6668 4.13132 14.6412 4.26012C14.536 4.78904 14.1225 5.2025 13.5936 5.30771C13.5222 5.32191 13.4428 5.32824 13.3335 5.33106M6.66683 8.66667H9.3335M2.66683 5.33333H13.3335V10.8C13.3335 11.9201 13.3335 12.4802 13.1155 12.908C12.9238 13.2843 12.6178 13.5903 12.2415 13.782C11.8137 14 11.2536 14 10.1335 14H5.86683C4.74672 14 4.18667 14 3.75885 13.782C3.38252 13.5903 3.07656 13.2843 2.88482 12.908C2.66683 12.4802 2.66683 11.9201 2.66683 10.8V5.33333Z"
                            stroke="#B1B9B9"
                            stroke-width="1.5"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                          />
                        </svg>
                        <span>Archive</span>
                      </button>
                    </div>
                  </div>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-2">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-3">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-4">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-5">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-6">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-7">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-8">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
            <div class="card__item" data-bookmark-id="bookmark-9">
              <div class="card__content">
                <div class="card__header">
                  <!-- 1st item header -->
                  <div class="card__topic">
                    <div class="card__favicon">
                      <img src="/assets/images/favicon-codepen.png" alt="codepen" />
                    </div>
                    <!-- 2nd-item header -->
                    <div class="card__title">
                      <h2 class="text-2">Flexbox Zombies</h2>
                      <p class="card__url text-5">mastery/games/flexbox.com</p>
                    </div>
                  </div>

                  <!-- 3rd-item header -->
                  <button
                    class="card-btn"
                    type="button"
                    data-action="toggle-cardmenu"
                    aria-haspopup="menu"
                    aria-expanded="false"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M10.0003 10.8333C10.4606 10.8333 10.8337 10.4602 10.8337 10C10.8337 9.53976 10.4606 9.16667 10.0003 9.16667C9.54009 9.16667 9.16699 9.53976 9.16699 10C9.16699 10.4602 9.54009 10.8333 10.0003 10.8333Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 5C10.4606 5 10.8337 4.6269 10.8337 4.16667C10.8337 3.70643 10.4606 3.33333 10.0003 3.33333C9.54009 3.33333 9.16699 3.70643 9.16699 4.16667C9.16699 4.6269 9.54009 5 10.0003 5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 16.6667C10.4606 16.6667 10.8337 16.2936 10.8337 15.8333C10.8337 15.3731 10.4606 15 10.0003 15C9.54009 15 9.16699 15.3731 9.16699 15.8333C9.16699 16.2936 9.54009 16.6667 10.0003 16.6667Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                </div>
                <div class="card__divider"></div>
                <div class="card__description text-4">
                  Master flexbox layout in CSS by playing a survival game. Use flexbox to
                  position your crossbow and survive the zombie apocalypse.
                </div>
                <div class="card__tags text-5">
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                  <span class="card__tag-items">Learning</span>
                </div>
              </div>
              <div class="card__footer">
                <div class="card__info">
                  <div class="card__views">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <path
                        d="M2.01677 10.5943C1.90328 10.4146 1.84654 10.3248 1.81477 10.1862C1.79091 10.0821 1.79091 9.91792 1.81477 9.81382C1.84654 9.67523 1.90328 9.58538 2.01677 9.40568C2.95461 7.9207 5.74617 4.16667 10.0003 4.16667C14.2545 4.16667 17.0461 7.9207 17.9839 9.40568C18.0974 9.58538 18.1541 9.67523 18.1859 9.81382C18.2098 9.91792 18.2098 10.0821 18.1859 10.1862C18.1541 10.3248 18.0974 10.4146 17.9839 10.5943C17.0461 12.0793 14.2545 15.8333 10.0003 15.8333C5.74617 15.8333 2.95461 12.0793 2.01677 10.5943Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M10.0003 12.5C11.381 12.5 12.5003 11.3807 12.5003 10C12.5003 8.61929 11.381 7.5 10.0003 7.5C8.61962 7.5 7.50034 8.61929 7.50034 10C7.50034 11.3807 8.61962 12.5 10.0003 12.5Z"
                        stroke="#051513"
                        stroke-width="1.6"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      /></svg
                    ><span class="card__views-value text-5">1,284</span>
                  </div>
                  <div class="card__time">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="20"
                      height="20"
                      viewBox="0 0 20 20"
                      fill="none"
                    >
                      <g>
                        <path
                          d="M10.0003 5V10L13.3337 11.6667M18.3337 10C18.3337 14.6024 14.6027 18.3333 10.0003 18.3333C5.39795 18.3333 1.66699 14.6024 1.66699 10C1.66699 5.39763 5.39795 1.66667 10.0003 1.66667C14.6027 1.66667 18.3337 5.39763 18.3337 10Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g></svg
                    ><span class="card__time-value text-5">6 min read</span>
                  </div>
                  <div class="card__date">
                    <span class="card__time-date">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 20 20"
                        fill="none"
                      >
                        <path
                          d="M17.5 8.33333H2.5M13.3333 1.66667V5M6.66667 1.66667V5M6.5 18.3333H13.5C14.9001 18.3333 15.6002 18.3333 16.135 18.0608C16.6054 17.8212 16.9878 17.4387 17.2275 16.9683C17.5 16.4335 17.5 15.7335 17.5 14.3333V7.33333C17.5 5.9332 17.5 5.23314 17.2275 4.69836C16.9878 4.22795 16.6054 3.8455 16.135 3.60582C15.6002 3.33333 14.9001 3.33333 13.5 3.33333H6.5C5.09987 3.33333 4.3998 3.33333 3.86502 3.60582C3.39462 3.8455 3.01217 4.22795 2.77248 4.69836C2.5 5.23314 2.5 5.9332 2.5 7.33333V14.3333C2.5 15.7335 2.5 16.4335 2.77248 16.9683C3.01217 17.4387 3.39462 17.8212 3.86502 18.0608C4.3998 18.3333 5.09987 18.3333 6.5 18.3333Z"
                          stroke="#051513"
                          stroke-width="1.6"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </span>
                    <span class="card__date-value text-5">Aug 12, 2025</span>
                  </div>
                </div>
                <div class="card__pinned">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                    fill="none"
                  >
                    <path
                      d="M10.0005 12.5L10.0005 18.3333M6.66719 6.09011V7.86562C6.66719 8.03897 6.66719 8.12565 6.65017 8.20855C6.63508 8.2821 6.61011 8.35328 6.57595 8.42014C6.53745 8.49551 6.4833 8.56319 6.37501 8.69855L5.06686 10.3337C4.51208 11.0272 4.23469 11.374 4.23438 11.6658C4.2341 11.9196 4.34949 12.1596 4.54783 12.318C4.7759 12.5 5.21994 12.5 6.10802 12.5H13.893C14.7811 12.5 15.2251 12.5 15.4532 12.318C15.6516 12.1596 15.7669 11.9196 15.7667 11.6658C15.7664 11.374 15.489 11.0272 14.9342 10.3337L13.626 8.69855C13.5177 8.56319 13.4636 8.49551 13.4251 8.42014C13.3909 8.35328 13.366 8.2821 13.3509 8.20855C13.3339 8.12565 13.3339 8.03897 13.3339 7.86562V6.09011C13.3339 5.99417 13.3339 5.9462 13.3393 5.8989C13.3441 5.85687 13.3521 5.81528 13.3632 5.77447C13.3758 5.72854 13.3936 5.684 13.4292 5.59492L14.2691 3.49519C14.5141 2.88261 14.6367 2.57633 14.5856 2.33045C14.5409 2.11544 14.4131 1.92676 14.2301 1.80542C14.0208 1.66667 13.6909 1.66667 13.0311 1.66667H6.9699C6.31014 1.66667 5.98026 1.66667 5.77094 1.80542C5.5879 1.92676 5.46016 2.11544 5.41548 2.33045C5.36439 2.57633 5.4869 2.88261 5.73193 3.49519L6.57182 5.59492C6.60745 5.684 6.62527 5.72854 6.6378 5.77447C6.64894 5.81528 6.65695 5.85687 6.66176 5.8989C6.66719 5.9462 6.66719 5.99417 6.66719 6.09011Z"
                      stroke="#051513"
                      stroke-width="1.6"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </section>
        </section>
      </main>
    `;
}
