import { renderBookmarks } from "./bookmark";
import { renderModal } from "./modal";
import { renderHeader } from "./header";
import { renderSidebar } from "./sidebar";

export function renderApp() {
  const app = document.getElementById("app");

  const html = `

${renderSidebar()}
  <main>${renderHeader()}
  ${renderBookmarks()}
  </main>
  `;

  app.innerHTML = html;
}
