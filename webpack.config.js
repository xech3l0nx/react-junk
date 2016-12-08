"use strict";
const debug = process.env.NODE_ENV !== "production";

const webpack = require('webpack');
const path = require('path');

module.exports = {
  devtool: debug ? 'inline-sourcemap' : null,
  entry: path.join(__dirname, 'src/js', 'client.js'),
  devServer: {
    inline: true,
    contentBase: "./dist/",
    historyApiFallback: {
      index: '/dist/index.html'
    }
  },
  output: {
    path: path.join(__dirname, 'dist/js'),
    publicPath: "/js/",
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      test: path.join(__dirname, 'src/js'),
      loader: ['babel-loader'],
      query: {
        cacheDirectory: 'babel_cache',
        presets: debug ? ['react', 'es2015', 'react-hmre'] : ['react', 'es2015']
      }
    }]
  },
  plugins: debug ? [] : [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    }),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      mangle: true,
      sourcemap: false,
      beautify: false,
      dead_code: true
    }),
  ]
};





























// var debug = process.env.NODE_ENV !== "production";
// var webpack = require('webpack');
// var path = require('path');

// module.exports = {
//   context: path.join(__dirname, "src"),
//   devtool: debug ? "inline-sourcemap" : null,
//   entry: "./js/client.js",
//   module: {
//     loaders: [
//       {
//         test: /\.jsx?$/,
//         exclude: /(node_modules|bower_components)/,
//         loader: 'babel-loader',
//         query: {
//           presets: ['react', 'es2015', 'stage-0'],
//           plugins: ['react-html-attrs', 'transform-class-properties', 'transform-decorators-legacy'],
//         }
//       }
//     ]
//   },
//   output: {
//     path: path.join(__dirname, "dist/js"),
//     filename: "bundle.js"
//   },
//   plugins: debug ? [] : [
//     new webpack.optimize.DedupePlugin(),
//     new webpack.optimize.OccurenceOrderPlugin(),
//     new webpack.optimize.UglifyJsPlugin({ mangle: false, sourcemap: false }),
//   ],
// };
