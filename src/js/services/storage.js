import { state } from "../state/state";
export function saveToStorage() {
  const { bookmarks, theme } = state;
  localStorage.setItem("bookmarkApp", JSON.stringify({ bookmarks, theme }));
}

export function loadFromStorage() {
  const data = localStorage.getItem("bookmarkApp");
  return data ? JSON.parse(data) : null;
}
