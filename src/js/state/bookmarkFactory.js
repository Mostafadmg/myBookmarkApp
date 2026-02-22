export function createBookmark(overrides = {}) {
  return {
    id: crypto.randomUUID(),
    title: "",
    description: "",
    url: "",
    tags: [],
    pinned: false,
    isArchived: false,
    favicon: "",
    createdAt: Date.now(),
    visitCount: 0,
    lastVisited: null,
    ...overrides,
  };
}
