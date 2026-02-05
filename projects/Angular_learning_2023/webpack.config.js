// 'use strict';

// const TerserPlugin = require("terser-webpack-plugin");
// const path = require('path');

// const webpackConfig = {
//   mode: 'development',
//   devServer: {
//     static: "./dist",
//   },
//   resolve: {
//     extensions: ['.js', '.jsx', '.json']
//   },
//   entry: {
//     app: path.join(__dirname, 'src', 'index.ts')
//   },
//   output: {
//     path: path.join(__dirname, 'dist'),
//     filename: 'index.min.js'
//   },
//   optimization: {
//     minimize: true,
//     minimizer: [new TerserPlugin()],
//   },
//   module: {
//     rules: [
//       {
//         test: /\.css$/,
//         use: [require.resolve('style-loader'), require.resolve('css-loader')]
//       }
//     ]
//   }
// };

// module.exports = webpackConfig;

const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

const webpackConfig = {
  mode: 'development',
  devServer: {
    static: "./dist",
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json']
  },
  entry: {
    app: path.join(__dirname, 'src', 'index.ts')
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'index.min.js'
  },
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [require.resolve('style-loader'), require.resolve('css-loader'),
        require.resolve('sass-loader')]
      }
    ]
  },
  plugins: [
    new CopyWebpackPlugin({ patterns: [{ from: './assets', to: 'assets' }] }),
    new HtmlWebpackPlugin({
      minify: false,
      inject: 'body',
      template: 'assets/index.html',
      hash: true,
      publicPath: 'auto'
    }),
  ]
};

module.exports = webpackConfig;