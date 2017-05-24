import babel from 'rollup-plugin-babel'
import resolve from 'rollup-plugin-node-resolve'

export default {
  entry: 'src/index.js',
  targets: [
    { dest: 'dist/bundle.cjs.js', format: 'cjs' },
    { dest: 'dist/bundle.es.js', format: 'es' },
  ],
  plugins: [
    resolve({
      // module: true, // Default: true
      // jsnext: true, // Default: false
      // main: true, // Default: true
      extensions: ['.js'], // Default: ['.js']
      // Lock the module search in this path (like a chroot). Module defined
      // outside this path will be mark has external
      // jail: './', // Default: '/'
      // If true, inspect resolved files to check that they are
      // ES2015 modules
      // modulesOnly: true, // Default: false
    }),
    babel({}),
  ],
  external: ['path', 'lighthouse/chrome-launcher/chrome-launcher'],
}
