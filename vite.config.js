import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "0.0.0.0", // Ensure it binds to all network interfaces
    port: 3000, // Default Vite port
    strictPort: true, // Prevents Vite from switching to a different port if 3000 is taken
    allowedHosts: ["react-portfolio-mw.onrender.com"], // Add your Render domain here
  },
  preview: {
    port: 8080, // Adjust if needed for preview mode
  },
});
