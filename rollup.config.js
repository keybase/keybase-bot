import babel from 'rollup-plugin-babel'

export default {
  input: 'lib/entry.js',
  output: {
    file: 'index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
  ],
  external: ['child_process', 'readline', 'lodash.snakecase'],
}
