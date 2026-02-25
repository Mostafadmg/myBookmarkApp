import { renderSearchBar } from "./components/searchBar";
import { renderSidebar } from "./components/sidebar";
import { renderSortControls } from "./components/sortControls";

export function renderApp(state) {
  renderSearchBar(state.searchQuery);
  renderSidebar(state.selectedTags);
  renderSortControls(state.selectedSort);
  renderBookmarkList(state.bookmarks);
}
