export function renderSidebar(selectedTags = []) {
  const sidebar = document.querySelector("[data-sidebar]");
  if (!sidebar) {
    return;
  }

  sidebar.setAttribute("data-selected-tags", selectedTags.join(","));
}
