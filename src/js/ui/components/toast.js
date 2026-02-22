export function showToast(message) {
  const liveRegion = document.querySelector("[data-toast]");
  if (!liveRegion) {
    return;
  }

  liveRegion.textContent = message;
}
