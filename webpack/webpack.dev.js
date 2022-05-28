const ReactRefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');
// Access the fields to configure webpack
const pkgVars = require('../package.json');

// Destructure variables from pkgVars.config
const { port } = pkgVars.config;
module.exports = {
  mode: 'development',
  devServer: {
    hot: true,
    port,
  },
  devtool: 'cheap-module-source-map',
  plugins: [new ReactRefreshWebpackPlugin()],
};
