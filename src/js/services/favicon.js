export function getFavicon(urlString) {
  const url = new URL(urlString);

  return `https://www.google.com/s2/favicons?domain=${url.hostname}&sz=64`;
}
