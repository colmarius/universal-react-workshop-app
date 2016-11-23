const path = require('path')

module.exports = {
  entry: './client/index.js',
  output: {
    path: './build',
    filename: 'bundle.js',
    publicPath: '/static/'
  },

  module: {
    loaders: [{
      test: /(\.js|\.jsx)/,
      exclude: /node_modules/,
      loader: 'babel',
      include: __dirname,
      query: {
        presets: ['es2015', 'react', 'react-hmre']
      }
    }]
  }
}
