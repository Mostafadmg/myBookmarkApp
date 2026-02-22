import { defineConfig } from "vite";

export default defineConfig({
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
