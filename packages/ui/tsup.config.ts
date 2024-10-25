import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/link/index.tsx", "./src/counter-button/index.tsx", "./src/hello/index.tsx", "./src/components/index.tsx"],
  format: ["cjs", "esm"],
  external: ["react"],
  banner: {
    js: "'use client'",
  },
  ...options,
}));
