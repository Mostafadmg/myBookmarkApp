const sorters = {
  "recently-added": (a, b) => b.createdAt - a.createdAt,
  "recently-visited": (a, b) => (b.lastVisited ?? 0) - (a.lastVisited ?? 0),
  "most-visited": (a, b) => b.visitCount - a.visitCount,
};

export function filterAndSortBookmarks(
  bookmarks,
  { searchQuery = "", selectedTags = [], selectedSort = "recently-added" } = {},
) {
  const normalizedSearch = searchQuery.trim().toLowerCase();

  const filtered = bookmarks.filter((bookmark) => {
    const matchesSearch = normalizedSearch
      ? bookmark.title.toLowerCase().includes(normalizedSearch)
      : true;

    const matchesTags = selectedTags.length
      ? selectedTags.every((tag) => bookmark.tags.includes(tag))
      : true;

    return matchesSearch && matchesTags;
  });

  const sorter = sorters[selectedSort] ?? sorters["recently-added"];
  return [...filtered].sort(sorter);
}
