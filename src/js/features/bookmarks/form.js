import { validateBookmarkInput } from "../../validation/validation";

export function normalizeBookmarkFormData(formData) {
  return {
    title: String(formData.title ?? "").trim(),
    description: String(formData.description ?? "").trim(),
    url: String(formData.url ?? "").trim(),
    tags: Array.isArray(formData.tags)
      ? formData.tags.map((tag) => String(tag).toLowerCase().trim()).filter(Boolean)
      : [],
  };
}

export function buildBookmarkPayload(formData) {
  const normalized = normalizeBookmarkFormData(formData);
  const validation = validateBookmarkInput(normalized);

  if (!validation.isValid) {
    return { payload: null, errors: validation.errors };
  }

  return { payload: normalized, errors: {} };
}
