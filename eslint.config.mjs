import js from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import prettier from 'eslint-plugin-prettier';
import globals from 'globals';

import { FlatCompat } from '@eslint/eslintrc';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default [
  js.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ignores: ['**/*.test.ts', '**/*.spec.ts', '**/tests/**'], // Add this line to ignore test files
    languageOptions: {
      parser: tsParser,
      globals: globals.node,
    },
    plugins: {
      '@typescript-eslint': tseslint,
      prettier,
    },
    rules: {
      'no-undef': 'error',
      'no-unused-vars': 'warn',
      'consistent-return': 'error',
      eqeqeq: 'error',
      curly: 'error',
      'arrow-body-style': ['error', 'as-needed'],
      'no-var': 'error',
      'prefer-const': 'error',
      'max-lines-per-function': ['warn', { max: 50 }],
      '@typescript-eslint/semi': ['error', 'always'],
      'prettier/prettier': 'error',
    },
  },
  ...compat.config(prettier.configs.recommended),
];
