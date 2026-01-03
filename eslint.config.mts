import js from '@eslint/js';
import { defineConfig } from 'eslint/config';
import eslintConfigPrettierFlat from 'eslint-config-prettier/flat';
import pluginReact from 'eslint-plugin-react';
import eslintPluginSimpleImportSort from 'eslint-plugin-simple-import-sort';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default defineConfig([
    eslintConfigPrettierFlat,
    tseslint.configs.recommended,
    pluginReact.configs.flat.recommended,

    {
        ignores: ['node_modules/**', 'dist/**', '.idea/**', '.vscode/**'],
    },

    {
        files: ['**/*.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        extends: ['js/recommended'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
            globals: {
                ...globals.browser,
                ...globals.node,
            },
            parserOptions: {
                ecmaFeatures: {
                    jsx: true,
                },
            },
        },
        settings: {
            react: {
                version: 'detect',
            },
        },
        plugins: {
            js,
        },
        rules: {
            'react/react-in-jsx-scope': 'off',
            'arrow-parens': ['error', 'always'],
            'comma-dangle': [
                'error',
                {
                    arrays: 'always-multiline',
                    objects: 'always-multiline',
                    imports: 'always-multiline',
                    exports: 'always-multiline',
                    functions: 'always-multiline',
                },
            ],
            curly: ['error', 'all'],
            semi: ['error', 'always'],
            quotes: ['error', 'single', { avoidEscape: true }],
        },
    },

    {
        plugins: { 'simple-import-sort': eslintPluginSimpleImportSort },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'off',
        },
    },
]);
