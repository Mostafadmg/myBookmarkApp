// Single source of truth for application UI and bookmark data.
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
