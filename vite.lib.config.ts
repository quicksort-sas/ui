// Library build for npm: ES modules per component (tree-shakeable), types, and theme.css.
import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import pkg from "./package.json"

const external = [...Object.keys(pkg.peerDependencies ?? {}), ...Object.keys(pkg.dependencies ?? {})]
export default defineConfig({
  plugins: [react()],
  resolve: { alias: { "@": path.resolve(__dirname, "./src") } },
  build: {
    outDir: "dist",
    emptyOutDir: true,
    copyPublicDir: false,
    lib: { entry: path.resolve(__dirname, "src/index.ts"), formats: ["es"] },
    rolldownOptions: {
      external: (id) => external.some((e) => id === e || id.startsWith(e + "/")),
      output: { preserveModules: true, preserveModulesRoot: "src", entryFileNames: "[name].js" },
    },
  },
})
