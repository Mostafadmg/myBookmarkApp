import { state } from "../state/state";
import { createBookmark } from "../state/bookmarkFactory";
import { refreshUI } from "../ui/refreshUI";
import { getFavicon } from "../services/favicon";

export function validateForm() {
  const title = document.querySelector(".addbookmark__input");
  const description = document.querySelector(".addbookmark__textarea");
  const url = document.getElementById("addbookmark-url-input");
  const tags = document.getElementById("addbookmark-tags-input");

  let isValid = true;

  if (!title || !description || !url || !tags) return;

  const fields = [
    { input: title, validate: (val) => val.trim() !== "" },
    { input: description, validate: (val) => val.trim() !== "" },
    {
      input: url,
      validate: (val) => {
        try {
          new URL(val);
          return true; // if we get here, URL is valid
        } catch {
          return false; // URL threw an error = invalid
        }
      },
    },
    { input: tags, validate: (val) => val.trim() !== "" },
  ];

  fields.forEach(({ input, validate }) => {
    if (!validate(input.value)) {
      setError(input);
      isValid = false;
    } else {
      clearError(input);
    }
  });
  return isValid;
}

export function addNewBookMark() {
  const title = document.querySelector(".addbookmark__input");
  const description = document.querySelector(".addbookmark__textarea");
  const url = document.getElementById("addbookmark-url-input");
  const tags = document.getElementById("addbookmark-tags-input");

  const isValid = validateForm();
  if (!isValid) return;

  const newbookmark = createBookmark({
    title: title.value,
    description: description.value,
    url: url.value,
    tags: tags.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== ""),
    favicon: getFavicon(url.value),
  });

  const toUpdateBookmark = state.bookmarks.find(
    (bookmark) => bookmark.id === state.editingBookmarkId,
  );

  if (toUpdateBookmark) {
    toUpdateBookmark.title = title.value;
    toUpdateBookmark.description = description.value;
    toUpdateBookmark.url = url.value;
    toUpdateBookmark.tags = tags.value
      .split(",")
      .map((tag) => tag.trim())
      .filter((tag) => tag !== "");
    toUpdateBookmark.favicon = getFavicon(url.value);
  } else {
    state.bookmarks.push(newbookmark);
  }

  refreshUI();
  clearForm();
}
export function clearForm() {
  const title = document.querySelector(".addbookmark__input");
  const description = document.querySelector(".addbookmark__textarea");
  const url = document.getElementById("addbookmark-url-input");
  const tags = document.getElementById("addbookmark-tags-input");
  title.value = "";
  description.value = "";
  url.value = "";
  tags.value = "";
  state.editingBookmarkId = null;
  document
    .querySelectorAll(".addbookmark__field")
    .forEach((field) => field.classList.remove("error"));
}
function setError(input) {
  const field = input.closest(".addbookmark__field");
  field.classList.add("error");
}

function clearError(input) {
  const field = input.closest(".addbookmark__field");
  field.classList.remove("error");
}
