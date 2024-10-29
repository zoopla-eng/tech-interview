import { defineConfig, type Options } from "tsup";

export default defineConfig((options: Options) => ({
  entry: ["./src/hello/index.tsx", "./src/link/index.tsx"],
  format: ["cjs", "esm"],
  external: ["react"],
  banner: {
    js: "'use client'",
  },
  ...options,
}));
