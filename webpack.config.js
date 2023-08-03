let path = require('path');

const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: './application.js',
  mode: 'development',
  output: {
    filename: "main.js",
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new Dotenv()
  ]
};