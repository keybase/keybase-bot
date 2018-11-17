// @flow
const DashboardPlugin = require('webpack-dashboard/plugin')
const FlowStatusWebpackPlugin = require('flow-status-webpack-plugin')
const webpack = require('webpack')

const plugins = process.env.DASH
  ? [
      new webpack.NoEmitOnErrorsPlugin(),
      new DashboardPlugin(),
      new FlowStatusWebpackPlugin({failOnError: true}),
    ]
  : []

module.exports = {
  target: 'node',
  plugins: plugins,
  entry: './lib/entry.js',
  output: {
    path: __dirname,
    filename: 'index.js',
    libraryTarget: 'umd',
  },
  devtool: 'eval-source-map',
  module: {
    rules: [
      {
        test: /(\.jsx|\.js)$/,
        exclude: /(node_modules)/,
        use: [
          {
            loader: 'babel-loader',
            options: {babelrc: true},
          },
        ],
      },
    ],
  },
}
