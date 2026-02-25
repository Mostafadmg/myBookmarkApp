import "../scss/main.scss";
import { renderSidebar } from "./components/sidebar.js";
import { renderApp } from "./components/app.js";
import { initState } from "./state/state.js";
import { initHandlers } from "../handlers/handlers.js";

async function init() {
  await initState();
  renderApp();
  initHandlers(); // add this
}

init();
