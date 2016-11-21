module.exports = {
    entry: "./es6_src/entry.js",
    output: {
        path:           __dirname,
        filename:       "index.js",
        libraryTarget:  "umd" /* this makes sure we actually export for npm */
    },
    module: {
      loaders: [
        {
          loader: 'babel-loader',
          test: /(\.jsx|\.js)$/,
          exclude: /(node_modules)/,
          query: {
            presets: ['es2015']
          }
        }
      ]
    }
};
