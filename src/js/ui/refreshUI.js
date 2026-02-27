import { renderBookmarkItem } from "../components/bookmark";
import { renderSidebar } from "../components/sidebar";
import { saveToStorage } from "../services/storage";
export function refreshUI() {
  document.querySelector(".cards__container").innerHTML = renderBookmarkItem();
  document.querySelector(".sidebar").outerHTML = renderSidebar();
  saveToStorage();
}
