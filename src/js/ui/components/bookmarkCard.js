export function renderBookmarkCard(bookmark) {
  return `
    <article class="card bookmark-card" data-bookmark-id="${bookmark.id}">
      <h3>${bookmark.title}</h3>
      <p>${bookmark.description}</p>
    </article>
  `;
}
