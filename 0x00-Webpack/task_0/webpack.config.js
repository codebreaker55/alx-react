const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point for your application
  output: {
    filename: 'main.js', // Output filename
    path: path.resolve(__dirname, 'dist'), // Output directory
  },
  mode: 'development', // Mode can be 'development' or 'production'
};
