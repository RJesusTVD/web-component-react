import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const PORT = 8081;
const NAME = "welcome";

export default defineConfig({
  define: {
    "process.env": {},
  },

  build: {
    outDir: "./dist/lib",
    lib: {
      formats: ["es"],
      cssFileName: NAME,
      entry: "./src/web-component.tsx",
      name: "welcome",
      fileName: (format) => `${NAME}.${format}.js`,
    },
    target: "chrome109",
  },

  server: {
    port: PORT,
  },

  plugins: [react()],
});
