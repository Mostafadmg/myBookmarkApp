import { renderBookmarkItem } from "../components/bookmark";
import { renderSidebar } from "../components/sidebar";
import { createTags } from "../components/sidebar";

export function refreshUI() {
  document.querySelector(".cards__container").innerHTML = renderBookmarkItem();
  document.querySelector(".sidebar__tagList").innerHTML = createTags();
}
