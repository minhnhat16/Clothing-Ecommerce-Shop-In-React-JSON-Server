const { version } = require("react")

module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
    'prettier'
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh','react','@typescript-eslint','prettier'],
  rules: {
    'react/react-in-jsx-scope' : 'off',
    'prettier/prettier': ['error', {
      tabWidth: 2,
      useTabs: false,
      singleQuote: true,
      semi: true,
      // Add other Prettier preferences as needed
    }],
    'react-refresh/only-export-components': [
      'warn',
      { allowConstantExport: true },
    ],
    'prettier/prettier': 'error',
  },
  settings: {
    react:{
      version: 'detect',
      },
  },
}
