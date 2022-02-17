const HtmlWebpackPlugin = require('html-webpack-plugin');

const path = require('path');   

module.exports = {
  mode: 'production',
  entry: {
    main: './src/App.jsx',
    worker: './src/serviceWorker.jsx',
    theme: './src/Theme.jsx',
    components: './src/components/**/*.jsx'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `public/index.html`,
      favicon: `public/favicon.ico`,
    }),
  ],
  optimization: {
   splitChunks: {
       chunks: "all",
   },
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].bundle.js',
  },
};