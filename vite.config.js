import path from "node:path";
import { defineConfig } from "vite";

function reloadOnDataJsonChange() {
  const dataFile = path.resolve(process.cwd(), "data.json");

  return {
    name: "reload-on-data-json-change",
    handleHotUpdate(ctx) {
      if (ctx.file === dataFile) {
        ctx.server.ws.send({ type: "full-reload" });
      }
    },
  };
}

export default defineConfig({
  plugins: [reloadOnDataJsonChange()],
  server: {
    open: true,
  },
  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        sourceMap: true,
        loadPaths: ["src/scss"],
        additionalData: (content, filename) => {
          if (/[\\/]abstracts[\\/]_mixins\.scss$/.test(filename)) {
            return content;
          }
          return `@use "abstracts/mixins" as *;\n${content}`;
        },
      },
    },
  },
  build: {
    sourcemap: true,
  },
});
