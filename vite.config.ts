import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react(),
    dts({
      insertTypesEntry: true,
      include: ["src/lib/**/*", "src/components/**/*"],
      exclude: ["src/main.tsx", "src/App.tsx", "**/*.test.*", "**/*.spec.*"],
      outDir: "dist",
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, "src/lib/index.ts"),
      name: "LiquidGlass",
      formats: ["es", "umd"],
      fileName: (format) =>
        `liquid-glass.${format === "es" ? "js" : "umd.cjs"}`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "gsap", "@gsap/react"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          gsap: "gsap",
          "@gsap/react": "GSAPReact",
        },
      },
    },
    cssCodeSplit: false,
  },
});
