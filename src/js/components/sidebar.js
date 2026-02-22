import { state, getTagCounts } from "../state/state";

export function renderSidebar() {
  return /*html*/ `
<div class="sidebar">
    <div class="sidebar__header">
        <img class="sidebar__logo sidebar__logo--light" src="/assets/images/logo-light-theme.svg" alt="Bookmark Manager" />
        <img class="sidebar__logo sidebar__logo--dark" src="/assets/images/logo-dark-theme.svg" alt="Bookmark Manager" />
        <button class="sidebar-closeBtn" type="button" data-action="close-sidebar">
            <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                <path d="M10.7998 0.799999L0.799805 10.8M0.799805 0.799999L10.7998 10.8" stroke="#051513" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
        </button>
    </div>
    <section class="sidebar__content">
        <div class="sidebar__navigation text-3">
            <button class="sidebar__homeBtn" type="button" data-action="navigate-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="18" viewBox="0 0 17 18" fill="none" class="nav-icon">
                    <path d="M4.96647 13.0776H11.6331M7.48122 1.21429L1.8293 5.61023C1.45149 5.90408 1.26259 6.05101 1.12649 6.23501C1.00594 6.398 0.916139 6.58161 0.861494 6.77684C0.799805 6.99723 0.799805 7.23654 0.799805 7.71517V13.7443C0.799805 14.6777 0.799805 15.1444 0.98146 15.5009C1.14125 15.8145 1.39622 16.0695 1.70982 16.2293C2.06634 16.4109 2.53305 16.4109 3.46647 16.4109H13.1331C14.0666 16.4109 14.5333 16.4109 14.8898 16.2293C15.2034 16.0695 15.4584 15.8145 15.6181 15.5009C15.7998 15.1444 15.7998 14.6777 15.7998 13.7443V7.71517C15.7998 7.23654 15.7998 6.99723 15.7381 6.77684C15.6835 6.58161 15.5937 6.398 15.4731 6.23501C15.337 6.05101 15.1481 5.90408 14.7703 5.61023L9.11839 1.21429C8.82562 0.986583 8.67924 0.872727 8.51759 0.828962C8.37497 0.790345 8.22464 0.790345 8.08202 0.828962C7.92037 0.872727 7.77399 0.986583 7.48122 1.21429Z" stroke="var(--color-text)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <span>Home</span>
            </button>
            <button class="sidebar__archivedBtn" type="button" data-action="navigate-archived">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" class="nav-icon">
                    <path d="M3.33366 6.66383C3.19699 6.6603 3.09774 6.65239 3.00851 6.63464C2.34736 6.50313 1.83053 5.9863 1.69902 5.32515C1.66699 5.16415 1.66699 4.97055 1.66699 4.58333C1.66699 4.19612 1.66699 4.00251 1.69902 3.84152C1.83053 3.18037 2.34736 2.66354 3.00851 2.53202C3.16951 2.5 3.36311 2.5 3.75033 2.5H16.2503C16.6375 2.5 16.8311 2.5 16.9921 2.53202C17.6533 2.66354 18.1701 3.18037 18.3016 3.84152C18.3337 4.00251 18.3337 4.19612 18.3337 4.58333C18.3337 4.97055 18.3337 5.16415 18.3016 5.32515C18.1701 5.9863 17.6533 6.50313 16.9921 6.63464C16.9029 6.65239 16.8037 6.6603 16.667 6.66383M8.33366 10.8333H11.667M3.33366 6.66667H16.667V13.5C16.667 14.9001 16.667 15.6002 16.3945 16.135C16.1548 16.6054 15.7724 16.9878 15.302 17.2275C14.7672 17.5 14.0671 17.5 12.667 17.5H7.33366C5.93353 17.5 5.23346 17.5 4.69868 17.2275C4.22828 16.9878 3.84583 16.6054 3.60614 16.135C3.33366 15.6002 3.33366 14.9001 3.33366 13.5V6.66667Z" stroke="var(--color-text)" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" />
                </svg><span>Archived</span>
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

function createTags() {
  const tagCounts = getTagCounts();
  return Object.entries(tagCounts)
    .map(([key, value]) => {
      const isSelected = state.selectedTags.includes(key);
      return /* html */ `
<li class="sidebar__tagItem ${isSelected ? " is-selected" : ""}" role="checkbox" aria-checked="${isSelected ? " true" : "false"}" tabindex="0" data-tag="${key}">
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
