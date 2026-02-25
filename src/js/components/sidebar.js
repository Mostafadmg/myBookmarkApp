import { state, getTagCounts } from "../state/state";
import { icons } from "../icons";

export function renderSidebar() {
  return /*html*/ `
<div id="sidebar-panel" class="sidebar${state.isMobileSidebarOpen ? " open" : ""}" aria-hidden="${String(!state.isMobileSidebarOpen)}">
    <div class="sidebar__header">
        <img class="sidebar__logo sidebar__logo--light" src="/assets/images/logo-light-theme.svg" alt="Bookmark Manager" />
        <img class="sidebar__logo sidebar__logo--dark" src="/assets/images/logo-dark-theme.svg" alt="Bookmark Manager" />
        <button class="sidebar-closeBtn" type="button" data-action="close-sidebar">
            ${icons.close}
        </button>
    </div>
    <section class="sidebar__content">
        <div class="sidebar__navigation text-3">
            <button class="sidebar__homeBtn" type="button" data-action="navigate-home">
                ${icons.home}
                <span>Home</span>
            </button>
            <button class="sidebar__archivedBtn" type="button" data-action="navigate-archived">
                ${icons.archived}<span>Archived</span>
            </button>
        </div>
        <div class="sidebar_tag text-5">
            <div class="sidebar__tag-subheading text-5">TAGS</div>
            <button class="reset-btn" type="button" data-action="reset-tag">Reset</button>
        </div>
        <ul class="sidebar__tagList text-3">
            ${createTags()}
        </ul>
    </section>
</div>
`;
}

export function createTags() {
  const tagCounts = getTagCounts();
  return Object.entries(tagCounts)
    .map(([key, value]) => {
      const isSelected = state.selectedTags.includes(key);
      return /* html */ `
<li class="sidebar__tagItem ${isSelected ? " is-selected" : ""}" role="checkbox" data-action="filter-tag" aria-checked="${isSelected ? " true" : "false"}" data-tag="${key}">
    <div class="sidebar__container">
        <div class="sidebar__icon"></div>
        <p class="sidebar__text">${key}</p>
    </div>
    <div class="sidebar__badge text-5">${value}</div>
</li>
`;
    })
    .join("");
}

export function filterTags() {
  const tags = state.selectedTags; //array of the selected tags
}

export function addSelectedTag(tag) {}
