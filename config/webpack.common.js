var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
  entry: {
    'polyfills': './src/polyfills.ts',
    'vendor': './src/vendor.ts',
    'app': './src/main.ts'
  },

  resolve: {
    extensions: ['', '.ts', '.js']
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader']
      },
      {
        test: /\.html$/,
        loader: 'html'
      },
      {
        // test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
        test: /\.(png|jpe?g|gif|svg|woff)$/,
        loader: 'file?name=assets/[name].[ext]'
        // loader: 'url',
        // query: {
        //   limit: 1000,
        //   name: helpers.root('[name].[hash:7].[ext]')
        // }
      },
      {
        test: /\.(woff2?|ttf|eot|svg|ico)$/, loader: 'url-loader?limit=100000000000'
      },
      {
        test: /\.css$/,
        exclude: helpers.root('src', 'app'),
        loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
      },
      {
        test: /\.css$/,
        include: helpers.root('src', 'app'),
        loader: 'raw'
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: ['app', 'vendor', 'polyfills']
    }),
    new webpack.ProvidePlugin({
        jQuery: 'jquery',
        $: 'jquery',
        jquery: 'jquery'
    }),
    new HtmlWebpackPlugin({
      template: 'src/index.html'
    })
  ]
};