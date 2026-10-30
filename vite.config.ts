import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
export default defineConfig({
  plugins: [react()],
  base: "/chess/",
  server: { proxy: { "/chess/api": "http://127.0.0.1:3000" } },
  build: { outDir: "dist/chess" },
});
