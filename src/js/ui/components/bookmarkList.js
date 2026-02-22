import { renderBookmarkCard } from "./bookmarkCard";

export function renderBookmarkList(bookmarks) {
  const list = document.querySelector("[data-bookmark-list]");
  if (!list) {
    return;
  }

  list.innerHTML = bookmarks.map((bookmark) => renderBookmarkCard(bookmark)).join("");
}
