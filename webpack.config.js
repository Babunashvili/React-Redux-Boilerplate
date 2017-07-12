const webpack = require('webpack')
const path = require('path')
const loaders = require('./webpack.loaders')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || '9000'

process.env.NODE_ENV = process.env.NODE_ENV || 'development'
// const apiConfig = require(`./config/${process.env.NODE_ENV}`)
// const apiUrl = apiConfig.apiUrl
// const apiSocketUrl = apiConfig.apiSocketUrl

loaders.push({
  test: /\.scss$/,
  loaders: [
    'style-loader',
    'css-loader?importLoaders=1',
    'sass-loader',
    'postcss-loader',
  ],
  exclude: ['node_modules'],
})

// TODO here we need to excel file loader
loaders.push({
  test: /\.xlsx$/,
  include: [path.resolve(__dirname, 'src/app/templates')],
  loaders: 'file-loaders',
  exclude: ['node_modules'],
})

module.exports = {
  entry: [
    'react-hot-loader/patch',
    './src/app/index.js', // your app's entry point
  ],
  devtool: process.env.WEBPACK_DEVTOOL || 'eval-source-map',
  output: {
    publicPath: '/',
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  module: {
    loaders,
  },
  devServer: {
    contentBase: './dist',
    // do not print bundle build stats
    noInfo: true,
    // enable HMR
    hot: true,
    // embed the webpack-dev-server runtime into the bundle
    inline: true,
    // serve index.html in place of 404 responses to allow HTML5 history
    historyApiFallback: true,
    port: PORT,
    host: HOST,
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
        // apiUrl: JSON.stringify(apiUrl),
        // apiSocketUrl: JSON.stringify(apiSocketUrl),
      },
    }),
    new ExtractTextPlugin({
      filename: 'style.css',
      allChunks: true,
    }),
    new DashboardPlugin(),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      files: {
        css: ['style.css'],
        js: ['bundle.js'],
      },
    }),
  ],
}