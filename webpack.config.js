// @flow
var DashboardPlugin = require('webpack-dashboard/plugin')
var FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')
var webpack = require('webpack')

var plugins = []
if (process.env.DASH) {
  plugins = [
    new webpack.NoEmitOnErrorsPlugin(),
    new DashboardPlugin(),
    new FlowStatusWebpackPlugin({failOnError: true}),
  ]
}

module.exports = {
  target: 'node',
  plugins: plugins,
  entry: './lib/entry.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  // devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env'],
              plugins: ['transform-flow-strip-types'],
            }
          }
        ],
      }
    ],
  },
}
