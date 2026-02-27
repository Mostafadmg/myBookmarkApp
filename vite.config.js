import fs from "node:fs";
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

function copyRuntimeFiles() {
  return {
    name: "copy-runtime-files",
    apply: "build",
    closeBundle() {
      const rootDir = process.cwd();
      const distDir = path.resolve(rootDir, "dist");
      const entries = [
        { from: path.resolve(rootDir, "assets"), to: path.resolve(distDir, "assets") },
        { from: path.resolve(rootDir, "data.json"), to: path.resolve(distDir, "data.json") },
      ];

      entries.forEach(({ from, to }) => {
        if (!fs.existsSync(from)) return;
        fs.cpSync(from, to, { recursive: true, force: true });
      });
    },
  };
}

const repoBase = "/myBookmarkApp/";

export default defineConfig(({ command }) => ({
  base: command === "build" ? repoBase : "/",
  publicDir: false,
  plugins: [reloadOnDataJsonChange(), copyRuntimeFiles()],
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
}));
