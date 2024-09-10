import antfu from '@antfu/eslint-config'

export default antfu({
  markdown: false,
}, { ignores: ['HeoMusic-2.3/*'] }, { rules: {
  'no-console': 'off',
  'unicorn/consistent-function-scoping': 'off',
  'no-control-regex': 'off',
  'ts/ban-ts-comment': 'off',
  'no-alert': 'off',
} })
