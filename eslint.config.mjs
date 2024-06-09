import antfu from '@antfu/eslint-config'

export default antfu({
  typescript: true,
  ignores: ['dist/*', 'dist/*/**', '.cache', '**/.cache/**', 'public', '**/public/**', 'node_modules', '**/node_modules/**', '*.esm.js', '**/*.esm.js/**'],
})
