import { defineConfig, globalIgnores } from 'eslint/config'
import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import react from 'eslint-plugin-react'
import prettier from 'eslint-config-prettier'

export default defineConfig([
  globalIgnores(['dist/**', 'build/**', '.wrangler/**']),
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        jsx: true,
        project: './tsconfig.json'
      }
    },
    plugins: {
      react,
      '@typescript-eslint': tseslint.plugin
    },
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      react.configs.flat.recommended,
      prettier
    ],
    settings: {
      react: { version: 'detect' }
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-unused-vars': 'off'
    }
  }
])
