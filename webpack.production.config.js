const webpack = require('webpack')
const path = require('path')
const loaders = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackCleanupPlugin = require('webpack-cleanup-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
// const apiConfig = require(`./config/${process.env.NODE_ENV}`)
// const apiUrl = apiConfig.apiUrl
// const apiSocketUrl = apiConfig.apiSocketUrl

// loaders.push({
//   test: /\.scss$/,
//   loader: ExtractTextPlugin.extract({ fallback: 'style-loader', use: 'css-loader?sourceMap&localIdentName=[local]___[hash:base64:5]!sass-loader?outputStyle=expanded' }),
//   exclude: ['node_modules'],
// })

loaders.push({
  test: /\.scss$/,
  loaders: ['style-loader', 'css-loader?importLoaders=1', 'sass-loader',
    'postcss-loader'
  ],
  exclude: ['node_modules'],
})


module.exports = {
  entry: [
    './src/app/index',
    // './src/app/bundle.scss',
  ],
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: '[chunkhash].js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  plugins: [
    new WebpackCleanupPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        // apiUrl: JSON.stringify(apiUrl),
        // apiSocketUrl: JSON.stringify(apiSocketUrl),
      },
    }),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        drop_console: true,
        drop_debugger: true,
      },
    }),
    new webpack.optimize.OccurrenceOrderPlugin(),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
  ],
}
