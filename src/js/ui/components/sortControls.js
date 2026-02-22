export function renderSortControls(selectedSort = "recently-added") {
  const select = document.querySelector("[data-sort-select]");
  if (select) {
    select.value = selectedSort;
  }
}
