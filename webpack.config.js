const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WorkboxPlugin = require('workbox-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    index:{
        import: './src/index.jsx',
        dependOn: 'shared',
    shared: 'lodash',
    }
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Output Management',
    }),
    new WorkboxPlugin.GenerateSW({
      // these options encourage the ServiceWorkers to get in there fast
      // and not allow any straggling "old" SWs to hang around
      clientsClaim: true,
      skipWaiting: true,
      pathinfo: false,
    }),
  ],
  output: {
    filename: '[name].[id].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true,
  }, 
  module: {
    rules: [
      {
        test: /\.jsx$/,
        include: path.resolve(__dirname, 'src'),
        loader: 'babel-loader',
      },
    ],
  },
  optimization:{
    runtimeChunk: true,
    removeAvailableModules: false,
    removeEmptyChunks: true,
    chunkIds: 'named',
    concatenateModules: true,
    flagIncludedChunks: true,
    innerGraph: false,
    mangleExports: true,
    mangleWasmImports: true,
    mergeDuplicateChunks: false,
    moduleIds: 'named',
    nodeEnv: 'production',
    splitChunks: {
      cacheGroups:{
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        }
      }
    },
  },
}