var DashboardPlugin = require('webpack-dashboard/plugin')

module.exports = {
    target: 'node',
    plugins: [new DashboardPlugin()],
    entry: './es6_src/entry.js',
    output: {
        path:           __dirname,
        filename:       'index.js',
        libraryTarget:  'umd' /* this makes sure we actually export for npm */
    },
    // devtool: 'eval-source-map',
    module: {
      loaders: [
        {
          loader:  'babel-loader',
          test:    /(\.jsx|\.js)$/,
          exclude: /(node_modules)/,
          query: {
            presets: ['es2015'],
            plugins: ['transform-flow-strip-types']
          }
        }
      ]
    }
};
