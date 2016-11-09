/**
 * Webpack config
 */

const webpack = require('webpack')
const path = require('path')

// Regexs
const node_modules = /node_modules/

module.exports = {

  devtool: 'eval',
  entry: './app.jsx',

  output: {
    filename: 'bundle.js',         // We are gonna produce
    path: __dirname + '/build' // we put all in build
  },

//Loaders are kind of like “tasks” are in other build tools, and provide a powerful way to handle frontend build steps.
// Loaders can transform files from a different language like, CoffeeScript to JavaScript, or inline images as data URLs.

  module: {
    //    preLoaders: [ // Execute ESLint on js / jsx
    //      {test: [js, jsx], loader: 'eslint', exclude: node_modules}
    //    ],
    loaders: [
      {
        test: /\.jsx$/,
        loader: 'babel',
        query: {
          "presets": ["es2015", "stage-0", "react"],
          "plugins": ["react-hot-loader/babel"]
        },
        include: path.join(__dirname)
      }
    ]
  },

  devServer: {
    colors: true,
    historyApiFallback: true,
    inline: false,
    port: 3000,
    hot: true
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]

}
