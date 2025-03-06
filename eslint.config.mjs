import globals from 'globals';
// import jsPlugin from '@eslint/js';
import tsEslint from 'typescript-eslint';
import parser from '@typescript-eslint/parser';
import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

// import tailwindcss from 'eslint-plugin-tailwindcss';

// import style from 'eslint-config-airbnb-base/rules/style';
// import bestPractices from 'eslint-config-airbnb-base/rules/best-practices';
// import variables from "eslint-config-airbnb-base/rules/variables";

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      // jsPlugin.configs.recommended,
      // ...tsEslint.configs.recommended,
      // ...tailwindcss.configs['flat/recommended'],
    ],
    files: ['**/*.{ts,tsx,js,mjs}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.jest,
      },
      parser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      import: importPlugin,
    },
    rules: {
      // ...reactHooks.configs.recommended.rules,
      // ...tsEslint.configs.recommended.rules,
      // ...bestPractices.rules,
      // ...variables.rules,
      // ...style.rules,
      /* 'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ], */
    },
  },
);
