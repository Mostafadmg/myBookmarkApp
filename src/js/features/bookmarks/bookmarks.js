import { createBookmark } from "../../state/bookmarkFactory";

export function addBookmark(bookmarks, payload) {
  return [...bookmarks, createBookmark(payload)];
}

export function updateBookmark(bookmarks, id, updates) {
  return bookmarks.map((bookmark) =>
    bookmark.id === id ? { ...bookmark, ...updates } : bookmark,
  );
}

export function removeBookmark(bookmarks, id) {
  return bookmarks.filter((bookmark) => bookmark.id !== id);
}

export function togglePinned(bookmarks, id) {
  return bookmarks.map((bookmark) =>
    bookmark.id === id ? { ...bookmark, pinned: !bookmark.pinned } : bookmark,
  );
}

export function toggleArchived(bookmarks, id) {
  return bookmarks.map((bookmark) =>
    bookmark.id === id
      ? { ...bookmark, isArchived: !bookmark.isArchived }
      : bookmark,
  );
}
