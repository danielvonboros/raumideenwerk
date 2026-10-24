import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTypescript from "eslint-config-next/typescript";

export default defineConfig([
  ...nextVitals,
  ...nextTypescript,
  {
    files: ["src/components/document/Document.tsx"],
    rules: { "@next/next/no-head-element": "off" },
  },
  globalIgnores([".next/**", "out/**", "next-env.d.ts"]),
]);
