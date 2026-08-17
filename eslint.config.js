import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import globals from "globals";

export default tseslint.config(
  {
    // Apply this configuration to your TypeScript and TSX files
    files: ["**/*.{ts,tsx}"],
    extends: [
      js.configs.recommended,
      ...tseslint.configs.recommended, // Adds TypeScript-specific rules
    ],
    plugins: {
      react: reactPlugin,
      "react-hooks": reactHooksPlugin,
    },
    languageOptions: {
      parserOptions: {
        ecmaFeatures: {
          jsx: true, // Enable JSX processing
        },
      },
      globals: {
        ...globals.browser, // Provide browser globals like 'window'
      },
    },
    rules: {
      ...reactPlugin.configs.recommended.rules,
      ...reactHooksPlugin.configs.recommended.rules,
      "react/react-in-jsx-scope": "off",
      
      // 1. Allow literal apostrophes and quotes in text
      "react/no-unescaped-entities": "off", 

      // 2. Change unused variables from an Error to a Warning, and ignore variables starting with an underscore
      "@typescript-eslint/no-unused-vars": ["warn", { 
        "argsIgnorePattern": "^_",
        "varsIgnorePattern": "^_" 
      }],
    },
    settings: {
      react: {
        version: "detect", // Automatically detect your installed React version
      },
    },
  }
);
