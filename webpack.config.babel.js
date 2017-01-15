import { resolve } from 'path'
import { optimize } from 'webpack'

export default {
  entry: {
    main: './src/main',
    fiddle: './src/fiddle'
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].js'
  },
  module: {
    loaders: [{
      loader: 'babel',
      test: /\.js$/,
      exclude: /\.(?:babel|es5)\.js$|node_modules|Code\/tweed-router(\/.*)|Code\/tweed(\/.*)?$/
    }, {
      test: /\.css$/,
      loader: 'style-loader!css-loader?modules=true&localIdentName=[hash:base64:5]'
    }]
  },
  plugins: [
    ...(process.env.NODE_ENV === 'production'
      ? [new optimize.UglifyJsPlugin()]
      : [])
  ],
  devServer: { inline: true }
}
