// NodeJS modules
const path = require('path');

// Webpack plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

// Access the fields to configure webpack
const pkgVars = require('../package.json');

// Destructure variables from pkgVars.config
const { entry, sourceDir, buildDir } = pkgVars.config;

module.exports = {
  entry: `./${sourceDir}/${entry}.js`,

  module: {
    rules: [
      {
        test: /\.(s[ac]|c)ss$/i,
        use: [
          'style-loader',
          'css-loader',
          //   {
          //     loader: 'postcss-loader',
          //     options: {
          //       postcssOptions: {
          //         plugins: ['autoprefixer'],
          //       },
          //     },
          //   },
          'sass-loader',
        ],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.(?:ico|png|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff(2)?|eot|ttf|otf|svg)$/i,
        type: 'asset/inline',
      },
    ],
  },

  output: {
    path: path.resolve(__dirname, buildDir),
    filename: `${entry}.js`,
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: `./${sourceDir}/index.html`,
    }),
    // new CopyWebpackPlugin({
    //   patterns: [{ from: `./${sourceDir}/img`, to: `${buildDir}/assets` }],
    // }),
  ],
};
