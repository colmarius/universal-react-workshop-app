module.exports = {

  entry: {
    javascript: "./app.js"
  },

  output: {
    filename: "bundle.js",         // We are gonna produce
    path: __dirname + "/build" // we put all in build
  },

  module: {
    loaders: [
      // babel
      {
          test: /\.jsx?$/,
          loader: 'babel',
          exclude: /node_modules/,
          query: {
              presets: ['react', 'es2015']
          }
      }
    ]
  }

}
