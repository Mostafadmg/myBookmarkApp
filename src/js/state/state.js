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
