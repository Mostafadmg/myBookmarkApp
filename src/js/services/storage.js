const bookmarksStorageKey = "bookmark-manager:bookmarks";

export function loadBookmarks() {
  try {
    const raw = localStorage.getItem(bookmarksStorageKey);
    if (!raw) {
      return [];
    }

    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveBookmarks(bookmarks) {
  localStorage.setItem(bookmarksStorageKey, JSON.stringify(bookmarks));
}
