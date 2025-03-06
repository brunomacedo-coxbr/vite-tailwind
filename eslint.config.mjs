import globals from 'globals';
import jsPlugin from '@eslint/js';
import tsEslint from 'typescript-eslint';
import parser from '@typescript-eslint/parser';

import importPlugin from 'eslint-plugin-import';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';

import airbnbBestPractices from 'eslint-config-airbnb-base/rules/best-practices';
import airbnbErrors from 'eslint-config-airbnb-base/rules/errors';
import airbnbNode from 'eslint-config-airbnb-base/rules/node';
import airbnbStyle from 'eslint-config-airbnb-base/rules/style';
import airbnbVariables from 'eslint-config-airbnb-base/rules/variables';
import airbnbEs6 from 'eslint-config-airbnb-base/rules/es6';
import airbnbStrict from 'eslint-config-airbnb-base/rules/strict';

export default tsEslint.config(
  { ignores: ['dist'] },
  {
    extends: [
      jsPlugin.configs.recommended,
      ...tsEslint.configs.recommended,
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
      ...reactHooks.configs.recommended.rules,
      ...tsEslint.configs.recommended.rules,
      ...airbnbBestPractices.rules,
      ...airbnbErrors.rules,
      ...airbnbNode.rules,
      ...airbnbStyle.rules,
      ...airbnbVariables.rules,
      ...airbnbEs6.rules,
      ...airbnbStrict.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
);
