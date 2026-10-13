const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',             // bundle legible, ideal para desarrollar
  entry: './src/index.js',         // punto de partida: desde aquí Webpack sigue todos los import
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true                    // limpia dist/ antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'] // enseña a Webpack a procesar archivos .css
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'  // genera dist/index.html insertando el bundle automáticamente
    })
  ],
  devServer: {
    static: './dist',
    open: true                      // abre el navegador automáticamente con "npm start"
  }
};
