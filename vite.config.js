import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const base = env.VITE_BASE_PATH || "/";
  if (!base.startsWith("/") || !base.endsWith("/")) {
    throw new Error(
      "VITE_BASE_PATH must start and end with /, for example /portfolio/",
    );
  }
  return { plugins: [react()], base };
});
