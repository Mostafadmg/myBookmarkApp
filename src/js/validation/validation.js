function isValidHttpUrl(value) {
  try {
    const parsed = new URL(value);
    return parsed.protocol === "http:" || parsed.protocol === "https:";
  } catch {
    return false;
  }
}

export function validateBookmarkInput({ title = "", url = "", tags = [] } = {}) {
  const errors = {};

  if (!title.trim()) {
    errors.title = "Title is required.";
  }

  if (!url.trim() || !isValidHttpUrl(url)) {
    errors.url = "Valid URL is required.";
  }

  if (tags.length > 8) {
    errors.tags = "Use 8 tags or fewer.";
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors,
  };
}
