module.exports = {
  parser: '@typescript-eslint/parser', // Specifies the ESLint parser
  extends: [
    'plugin:@typescript-eslint/recommended', // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    'prettier/@typescript-eslint', // Uses eslint-config-prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    'plugin:prettier/recommended', // Enables eslint-plugin-prettier and displays prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  parserOptions: {
    ecmaVersion: 2018, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module', // Allows for the use of imports
    files: ['*.tsx', '**/*.ts', '*.d.ts'],
    exclude: ['lib/'],
  },
  rules: {
    'no-var': 'error',
    'prefer-const': 'error',
    'no-duplicate-imports': 0,
    'comma-dangle': [2, 'always-multiline'],
    strict: [2, 'global'],
    '@typescript-eslint/prefer-interface': 0,
  },
  settings: {},
  overrides: [
    {
      files: ['src/**/*.ts', '__tests__/*.ts'],
      env: {
        jest: true,
      },
    },
  ],
}
