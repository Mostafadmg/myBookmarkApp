export function renderSearchBar(value = "") {
  const input = document.querySelector("[data-search-input]");
  if (input) {
    input.value = value;
  }
}
