const path = require('path')

module.exports = {
  entry: "./client/index.js",
  output: {
    path: './build', // target dir
    filename: "bundle.js",
    publicPath: "/static/" // path in URL
  },

  module: {
    loaders: [{
      test: /(\.js|\.jsx)$/,
      exclude: /node_modules/,
      loader: "babel",
      include: __dirname,
      query: {
        presets: [ "es2015", "react", "react-hmre" ]
      }
    }]
  }
  
}
