const faviconEndpoint = "https://www.google.com/s2/favicons";

export function getFaviconUrl(websiteUrl, size = 64) {
  if (!websiteUrl) {
    return "";
  }

  try {
    const parsedUrl = new URL(websiteUrl);
    return `${faviconEndpoint}?sz=${size}&domain=${parsedUrl.hostname}`;
  } catch {
    return "";
  }
}
