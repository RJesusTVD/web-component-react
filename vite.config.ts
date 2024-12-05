import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

const PORT = 8081;

export default defineConfig({
  server: {
    port: PORT,
  },
  build: {
    outDir: "./dist/app",
  },
  plugins: [react()],
});
