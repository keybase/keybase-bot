import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  input: 'lib/index.js',
  output: {
    file: 'index.js',
    format: 'cjs',
    sourcemap: true,
  },
  plugins: [
    babel({
      exclude: 'node_modules/**',
    }),
    resolve(),
  ],
  external: [
    'child_process',
    'readline',
    'lodash.snakecase',
    'lodash.camelcase',
    'lodash.kebabcase',
    'fs',
    'os',
    'path',
    'util',
    'crypto',
    'tail',
  ],
}
