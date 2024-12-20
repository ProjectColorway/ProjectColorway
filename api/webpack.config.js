const path = require('path');

module.exports = {
  entry: './src/index.ts',
  mode: "production",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      "@api": path.resolve(__dirname, 'src/api/'),
      "constants": path.resolve(__dirname, 'src/constants.ts'),
      "HTMLColorwayElement": path.resolve(__dirname, 'src/HTMLColorwayElement.ts')
    },
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
  },
};