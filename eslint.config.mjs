import stylisticPlugin from '@stylistic/eslint-plugin'
import typescriptParser from '@typescript-eslint/parser'

export default [
  {
    languageOptions: {
      parser: typescriptParser,
    },
    plugins: {
      '@stylistic': stylisticPlugin,
    },
    files: ['**/*.{js,ts}'],
    rules: {
      '@stylistic/quotes': ['error', 'single', { avoidEscape: true }],
      '@stylistic/semi': ['error', 'always'],
      '@stylistic/indent': ['error', 2],
      '@stylistic/indent-binary-ops': ['error', 2],
      '@stylistic/comma-dangle': ['error', 'always-multiline'],
      '@stylistic/array-bracket-newline': ['error', 'consistent'],
      '@stylistic/array-bracket-spacing': ['error', 'never'],
      '@stylistic/block-spacing': ['error', 'always'],
      '@stylistic/comma-style': ['warn', 'last'],
      '@stylistic/dot-location': ['error', 'property'],
      '@stylistic/function-call-spacing': ['error', 'never'],
      '@stylistic/eol-last': ['error', 'always'],

      '@stylistic/key-spacing': ['error', { 'beforeColon': false, 'afterColon': true }],

      'prefer-const': 'error',
    },
  },
]
