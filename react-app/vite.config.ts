import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
// @ts-ignore
import federationConfig from "./federation.config.json";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), federation(federationConfig)],
  server: {
    port: 3000,
  },
  build: {
    modulePreload: false,
    target: "esnext",
    minify: false,
    cssCodeSplit: false,
  },
});
