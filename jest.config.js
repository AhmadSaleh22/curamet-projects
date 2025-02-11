import { defaults } from 'jest-config';

export default {
  // Specifies the test environment
  testEnvironment: 'node',

  // Specifies the pattern for finding test files
  testMatch: ['**/?(*.)+(spec|test).ts?(x)'],

  // Transforms TypeScript files using ts-jest
  transform: {
    '^.+\\.tsx?$': 'ts-jest',
  },

  // Specifies the files to be excluded from testing
  testPathIgnorePatterns: ['/node_modules/', '/dist/'],

  // Coverage configuration
  collectCoverage: true,
  coverageDirectory: 'coverage',
  coverageProvider: 'v8',
  collectCoverageFrom: [
    '**/*.{ts,tsx}', // Collect coverage from all TypeScript files
    '!**/node_modules/**', // Ignore node_modules folder
    '!**/dist/**', // Ignore dist folder
  ],

  // Optional: Configuration for debugging
  verbose: true,

  // You can add other Jest config defaults if you like
  ...defaults,
};
