const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/App.jsx',
    worker: './src/serviceWorker.jsx',
    theme: './src/Theme.jsx',
    components: './src/components/**/*.jsx'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'static/[name].[contenthash].bundle.js',
  },
};