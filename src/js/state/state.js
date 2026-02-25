import { fetchData } from "../api/api";
import { createBookmark } from "./bookmarkFactory";
import { refreshUI } from "../ui/refreshUI";

export const state = {
  theme: "light",
  isMobileSidebarOpen: false,
  currentUser: {
    name: "",
    email: "",
    avatar: "",
  },
  selectedTags: [],
  selectedSort: "recently-added",
  searchQuery: "",
  activeView: "main",
  bookmarks: [],
};

export function getTagCounts() {
  let tagCounts = {};

  state.bookmarks.forEach((bookmark) => {
    bookmark.tags.forEach((tag) => {
      if (tagCounts[tag]) {
        tagCounts[tag]++;
      } else {
        tagCounts[tag] = 1;
      }
    });
  });

  return tagCounts;
}
export async function initState() {
  const data = await fetchData();
  state.bookmarks = data.bookmarks;
}

export function getSortedBookmarks() {
  const filteredBookmarks =
    state.selectedTags.length === 0
      ? [...state.bookmarks]
      : [...state.bookmarks].filter((bookmark) =>
          bookmark.tags.some((tag) => state.selectedTags.includes(tag)),
        );

  const sortedBookmarks = filteredBookmarks.sort((a, b) => {
    if (a.pinned !== b.pinned) return a.pinned ? -1 : 1;

    switch (state.selectedSort) {
      case "recently-added":
        return new Date(b.createdAt) - new Date(a.createdAt);

      case "recently-visited":
        return new Date(b.lastVisited) - new Date(a.lastVisited);

      case "most-visited":
        return b.visitCount - a.visitCount;
    }
  });

  return sortedBookmarks;
}

export function formatDates(date) {
  const dateObj = new Date(date);
  const formatter = new Intl.DateTimeFormat("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });
  const formattedDate = formatter.format(dateObj);
  return formattedDate;
}
