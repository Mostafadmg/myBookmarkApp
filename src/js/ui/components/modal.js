export function renderModal({ title = "", description = "" } = {}) {
  return `
    <div class="modal" role="dialog" aria-modal="true">
      <h2>${title}</h2>
      <p>${description}</p>
    </div>
  `;
}
