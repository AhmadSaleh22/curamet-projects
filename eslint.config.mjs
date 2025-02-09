import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { 
    files: ["**/*.{js,mjs,cjs,ts}"],
   },
  {
    languageOptions: { 
      globals: globals.node,
    }
  },
  pluginJs.configs.recommended,
  {
    rules: {
      "no-undef": "error",
      "no-unused-vars": "warn",
    }
  },
  ...tseslint.configs.recommended,
];