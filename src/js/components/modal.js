import { icons } from "../icons";
import { renderBookmarkItem } from "./bookmark";
import { renderSidebar } from "./sidebar";
import { clearForm } from "../validation/validation";
import { withBase } from "../services/path";

export function renderModal() {
  return /* html */ `
    <div class="modal-root" id="modal-root" >
        <section class="addbookmark" data-state="closed" aria-hidden="true">
          <button
            class="addbookmark__backdrop"
            type="button"
            data-action="close-addbookmark"
            aria-label="Close add bookmark dialog"
          ></button>

          <div
            class="addbookmark__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="addbookmark-title"
            aria-describedby="addbookmark-description"
          >
            <div class="addbookmark__header">
              <div class="addbookmark__heading">
                <h2 class="addbookmark__title" id="addbookmark-title">Add Bookmark</h2>
                <p class="addbookmark__intro" id="addbookmark-description">
                  Update your saved link details - change the title, description, URL, or
                  tags anytime.
                </p>
              </div>

              <button
                class="addbookmark__closeBtn"
                type="button"
                data-action="close-addbookmark"
                aria-label="Close dialog"
              >
                ${icons.modalClose}
              </button>
            </div>

            <form class="addbookmark__form" novalidate>
              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-title-input">
                    Title <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter a valid title</span>
                </div>
                <div class="addbookmark__control">
                  <input
                    class="addbookmark__input"
                    id="addbookmark-title-input"
                    name="title"
                    type="text"
                    placeholder="e.g. Frontend Mentor"
                    required
                  />
                </div>
              </div>

              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-description-input">
                    Description <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter a valid description</span>
                </div>
                <div class="addbookmark__control addbookmark__control--textarea">
                  <textarea
                    class="addbookmark__textarea"
                    id="addbookmark-description-input"
                    name="description"
                    rows="4"
                    maxlength="280"
                    placeholder="e.g. A platform for improving front-end skills by building real projects."
                    aria-describedby="addbookmark-description-count"
                    required
                  ></textarea
                  >
                </div>
                <div class="addbookmark__meta">
                  <span class="addbookmark__counter" id="addbookmark-description-count"
                    >0/280</span
                  >
                </div>
              </div>

              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-url-input">
                    Website URL <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter a valid URL</span>
                </div>
                <div class="addbookmark__control">
                  <input
                    class="addbookmark__input"
                    id="addbookmark-url-input"
                    name="url"
                    type="url"
                    placeholder="e.g. https://www.example.com"
                    required
                  />
                </div>
              </div>

              <div class="addbookmark__field">
                <div class="addbookmark__labelrow">
                  <label class="addbookmark__label" for="addbookmark-tags-input">
                    Tags <span aria-hidden="true">*</span>
                  </label>
                  <span class="addbookmark__error" aria-live="polite">Please enter valid tags</span>
                </div>
                <div class="addbookmark__control">
                  <input
                    class="addbookmark__input"
                    id="addbookmark-tags-input"
                    name="tags"
                    type="text"
                    placeholder="e.g. Design, CSS, Tools"
                    required
                  />
                </div>
              </div>

              <div class="addbookmark__actions">
                <button
                  class="addbookmark__btn addbookmark__btn--ghost"
                  type="button"
                  data-action="cancel-addbookmark"
                >
                  Cancel
                </button>
                <button
                  class="addbookmark__btn addbookmark__btn--primary"
                  type="submit"
                  data-action="save-addbookmark"
                >
                  Add Bookmark
                </button>
              </div>
            </form>
          </div>
        </section>

        <section
          class="authmodal authmodal--signup"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="authmodal__backdrop"
            type="button"
            data-action="close-authmodal"
            aria-label="Close authentication dialog"
          ></button>

          <div
            class="authmodal__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="authmodal-title"
            aria-describedby="authmodal-description"
          >
            <div class="authmodal__brand">
              <img
                class="authmodal__logo authmodal__logo--light"
                src="${withBase("assets/images/logo-light-theme.svg")}"
                alt="Bookmark Manager"
              />
              <img
                class="authmodal__logo authmodal__logo--dark"
                src="${withBase("assets/images/logo-dark-theme.svg")}"
                alt="Bookmark Manager"
              />
            </div>

            <div class="authmodal__header">
              <h2 class="authmodal__title" id="authmodal-title">Create your account</h2>
              <p class="authmodal__intro" id="authmodal-description">
                Join us and start saving your favorite links - organized, searchable, and
                always within reach.
              </p>
            </div>

            <form class="authmodal__form" novalidate>
              <div class="authmodal__field">
                <label class="authmodal__label" for="auth-fullname">
                  Full name <span aria-hidden="true">*</span>
                </label>
                <div class="authmodal__control">
                  <input
                    class="authmodal__input"
                    id="auth-fullname"
                    name="fullName"
                    type="text"
                    placeholder="Sarah Parker"
                    required
                  />
                </div>
              </div>

              <div class="authmodal__field">
                <label class="authmodal__label" for="auth-email">
                  Email address <span aria-hidden="true">*</span>
                </label>
                <div class="authmodal__control">
                  <input
                    class="authmodal__input"
                    id="auth-email"
                    name="email"
                    type="email"
                    placeholder="sarah@example.com"
                    required
                  />
                </div>
              </div>

              <div class="authmodal__field">
                <label class="authmodal__label" for="auth-password">
                  Password <span aria-hidden="true">*</span>
                </label>
                <div class="authmodal__control authmodal__control--password">
                  <input
                    class="authmodal__input"
                    id="auth-password"
                    name="password"
                    type="password"
                    placeholder="Enter your password"
                    required
                  />
                  <button
                    class="authmodal__toggle"
                    type="button"
                    data-action="toggle-password"
                    aria-label="Show password"
                  >
                    Show
                  </button>
                </div>
              </div>

              <div class="authmodal__actions">
                <button
                  class="authmodal__btn authmodal__btn--primary"
                  type="submit"
                  data-action="submit-auth"
                >
                  Create account
                </button>
              </div>
            </form>

            <div class="authmodal__footer">
              <p class="authmodal__footerText">
                Already have an account?
                <button
                  class="authmodal__linkBtn"
                  type="button"
                  data-action="switch-auth-login"
                >
                  Log in
                </button>
              </p>
              <p class="authmodal__footerText authmodal__footerText--secondary">
                <button
                  class="authmodal__linkBtn authmodal__linkBtn--ghost"
                  type="button"
                  data-action="reset-password"
                >
                  Forgot password? Reset it
                </button>
              </p>
            </div>
          </div>
        </section>

        <section
          class="bookmarkconfirm bookmarkconfirm--archive"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="bookmarkconfirm__backdrop"
            type="button"
            data-action="close-archive-confirm"
            aria-label="Close archive confirmation dialog"
          ></button>

          <div
            class="bookmarkconfirm__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="archive-confirm-title"
            aria-describedby="archive-confirm-description"
          >
            <button
              class="bookmarkconfirm__closeBtn"
              type="button"
              data-action="close-archive-confirm"
              aria-label="Close dialog"
            >
              ${icons.modalClose}
            </button>

            <h2 class="bookmarkconfirm__title" id="archive-confirm-title">
              Archive bookmark
            </h2>
            <p class="bookmarkconfirm__description" id="archive-confirm-description">
              Are you sure you want to archive this bookmark?
            </p>

            <div class="bookmarkconfirm__actions">
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--ghost"
                type="button"
                data-action="cancel-archive-confirm"
              >
                Cancel
              </button>
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--primary"
                type="button"
                data-action="archive-bookmark"
              >
                Archive
              </button>
            </div>
          </div>
        </section>

        <section
          class="bookmarkconfirm bookmarkconfirm--unarchive"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="bookmarkconfirm__backdrop"
            type="button"
            data-action="close-unarchive-confirm"
            aria-label="Close unarchive confirmation dialog"
          ></button>

          <div
            class="bookmarkconfirm__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="unarchive-confirm-title"
            aria-describedby="unarchive-confirm-description"
          >
            <button
              class="bookmarkconfirm__closeBtn"
              type="button"
              data-action="close-unarchive-confirm"
              aria-label="Close dialog"
            >
              ${icons.modalClose}
            </button>

            <h2 class="bookmarkconfirm__title" id="unarchive-confirm-title">
              Unarchive bookmark
            </h2>
            <p class="bookmarkconfirm__description" id="unarchive-confirm-description">
              Move this bookmark back to your active list?
            </p>

            <div class="bookmarkconfirm__actions">
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--ghost"
                type="button"
                data-action="cancel-unarchive-confirm"
              >
                Cancel
              </button>
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--primary"
                type="button"
                data-action="unarchive-bookmark"
              >
                Unarchive
              </button>
            </div>
          </div>
        </section>

        <section
          class="bookmarkconfirm bookmarkconfirm--delete"
          data-state="closed"
          aria-hidden="true"
        >
          <button
            class="bookmarkconfirm__backdrop"
            type="button"
            data-action="close-delete-confirm"
            aria-label="Close delete confirmation dialog"
          ></button>

          <div
            class="bookmarkconfirm__dialog"
            role="dialog"
            aria-modal="true"
            aria-labelledby="delete-confirm-title"
            aria-describedby="delete-confirm-description"
          >
            <button
              class="bookmarkconfirm__closeBtn"
              type="button"
              data-action="close-delete-confirm"
              aria-label="Close dialog"
            >
              ${icons.modalClose}
            </button>

            <h2 class="bookmarkconfirm__title" id="delete-confirm-title">
              Delete bookmark
            </h2>
            <p class="bookmarkconfirm__description" id="delete-confirm-description">
              Are you sure you want to delete this bookmark?
            </p>

            <div class="bookmarkconfirm__actions">
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--ghost"
                type="button"
                data-action="cancel-delete-confirm"
              >
                Cancel
              </button>
              <button
                class="bookmarkconfirm__btn bookmarkconfirm__btn--danger"
                type="button"
                data-action="delete-bookmark"
              >
                Delete Permanently
              </button>
            </div>
          </div>
        </section>
    `;
}

export function toggleModal(selector, isOpen) {
  const modal = document.querySelector(selector);
  if (!modal) return;

  if (!isOpen) {
    const focused = modal.querySelector(":focus");
    if (focused) focused.blur();
  }

  modal.setAttribute("data-state", isOpen ? "open" : "closed");
  modal.setAttribute("aria-hidden", String(!isOpen));

  if (isOpen) {
    modal.removeAttribute("inert");
  } else {
    modal.setAttribute("inert", "");
  }
}
