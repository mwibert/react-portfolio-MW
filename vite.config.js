import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "./", // Ensures correct asset paths for deployment
  build: {
    outDir: "dist", // This ensures the build output is placed in `dist/`
    emptyOutDir: true, // Clears old files before building
  },
});
