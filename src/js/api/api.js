import { withBase } from "../services/path";

export async function fetchData() {
  try {
    const url = import.meta.env.DEV
      ? withBase(`data.json?t=${Date.now()}`)
      : withBase("data.json");
    const response = await fetch(url, { cache: "no-store" });

    if (!response.ok) {
      throw new Error(`Failed to load data.json (${response.status})`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(error);
    return { bookmarks: [] };
  }
}
