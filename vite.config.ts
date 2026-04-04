/// <reference types="vitest" />
/// <reference types="vite/client" />

import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    exclude: ["backend/**", "dist/**", "node_modules/**"],
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test/setup.ts",
  },
});
