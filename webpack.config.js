const { resolve } = require('path')

module.exports = {
  entry: {
    main: './src/main',
    fiddle: './src/fiddle'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /\.(?:babel|es5)\.js$|node_modules|tweed-router|tweed\b/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules=true&localIdentName=[hash:base64:5]'
    }]
  },
  devServer: { inline: true }
}
