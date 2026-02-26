import { state, getSortedBookmarks, formatDates } from "../state/state";
import { icons } from "../icons";

const SORT_OPTIONS = [
  {
    value: "recently-added",
    label: "Recently added",
  },
  {
    value: "recently-visited",
    label: "Recently visited",
  },
  {
    value: "most-visited",
    label: "Most visited",
  },
];

export function renderBookmarks() {
  return /*html*/ `
<section class="cards">
    <header class="cards__header">
        <h1 class="cards__header-title text-1">All Bookmarks</h1>

        <div class="sortmenu" data-state="closed">
            <button class="sort-btn text-3 sortmenu__trigger" type="button" data-action="sort" aria-haspopup="true" aria-expanded="false" aria-controls="sortmenu-panel">
                ${icons.sort}
                <span>Sort by</span>
            </button>

            <div class="sortmenu__panel" id="sortmenu-panel" data-state="closed" aria-label="Sort bookmarks">
                ${renderSortOptions()}
            </div>
        </div>
    </header>

    <!-- cards start here -->
    <section class="cards__container">
        ${renderBookmarkItem()}
    </section>
</section>
`;
}

function renderSortOptions() {
  return SORT_OPTIONS.map((option) => {
    const isActive = state.selectedSort === option.value;

    return /* html */ `
<button class="sortmenu__option text-3${isActive ? " is-active" : ""}" type="button" data-action="set-sort" data-sort-value="${option.value}" aria-pressed="${isActive}">
    <span>${option.label}</span>
    <span class="sortmenu__tick">${icons.tick}</span>
</button>
`;
  }).join("");
}

export function renderBookmarkItem() {
  const bookmarks = getSortedBookmarks();
  return bookmarks
    .map((bookmark) => {
      const panelId = `cardmenu-panel-${bookmark.id}`;

      return /* html */ `
<div class="card__item" data-bookmark-id="${bookmark.id}">
    <div class="card__content">
        <div class="card__header">
            <!-- 1st item header -->
            <div class="card__topic">
                <div class="card__favicon">
                    <img src="${bookmark.favicon}" alt="codepen" />
                </div>
                <!-- 2nd-item header -->
                <div class="card__title">
                    <h2 class="text-2">${bookmark.title}</h2>
                    <p class="card__url text-5">${bookmark.url}</p>
                </div>
            </div>

            <!-- 3rd-item header -->
            <div class="cardmenu" data-state="closed">
                <button class="card-btn cardmenu__trigger" type="button" data-bookmark-id="${bookmark.id}" data-action="toggle-cardmenu" aria-haspopup="menu" aria-expanded="false" aria-controls="${panelId}">
                    ${icons.dots}
                </button>

                <div class="cardmenu__panel" id="${panelId}" aria-label="Bookmark actions">
                    <button class="cardmenu__item" role="menuitem" type="button" data-action="visit-bookmark">
                        ${icons.visit}
                        <span>Visit</span>
                    </button>

                    <button class="cardmenu__item" role="menuitem" type="button" data-action="copy-bookmark-url">
                        ${icons.copy}
                        <span>Copy URL</span>
                    </button>

                    <button class="cardmenu__item" role="menuitem" type="button" data-action="toggle-pin-bookmark">
                        ${icons.pinSmall}
                        <span>${bookmark.pinned ? "Unpin" : "Pin"}</span>
                    </button>

                    <button class="cardmenu__item" role="menuitem" type="button" data-action="edit-bookmark">
                        ${icons.edit}
                        <span>Edit</span>
                    </button>

                    <button class="cardmenu__item" role="menuitem" type="button" data-action="open-archive-confirm">
                        ${icons.archiveSmall}
                        <span>Archive</span>
                    </button>
                </div>
            </div>
        </div>

        <div class="card__divider"></div>

        <div class="card__description text-4">
            ${bookmark.description}
        </div>

        <div class="card__tags text-5">

            ${bookmark.tags
              .map((tag) => `<span class="card__tag-items">${tag}</span>`)
              .join("")}

        </div>
    </div>

    <div class="card__footer">
        <div class="card__info">
            <div class="card__views card-info" data-tooltip="Visited ${bookmark.visitCount} times">
                ${icons.views}<span class="card__views-value text-5">${bookmark.visitCount}</span>
            </div>

            <div class="card__time card-info" data-tooltip="Created on ${formatDates(bookmark.createdAt)}">
                ${icons.time}<span class="card__time-value text-5">${formatDates(bookmark.createdAt)}</span>
            </div>

            <div class="card__date card-info" data-tooltip="${bookmark.lastVisited ? `Last visited on ${formatDates(bookmark.lastVisited)}` : " Never visited"}">
                <span class="card__time-date">
                    ${icons.date}
                </span>
                <span class="card__date-value text-5">${bookmark.lastVisited ? formatDates(bookmark.lastVisited) : "Never visited"}</span>
            </div>
        </div>

        ${
          bookmark.pinned
            ? ` <div class="card__pinned">
            ${icons.pin}
        </div>`
            : ""
        }

    </div>
</div>

`;
    })
    .join("");
}
