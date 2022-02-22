const path = require('path');

module.exports = {
  // webpack executa mais rápido pq não minifica os arquivos
  mode: 'development',

  // arquivo de entrada é uma das aulas do módulo
  entry: './src/types/A0019-exercicio/index.ts',

  // altero qual vai ser arquivo de entrada para configuração do typescript
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          configFile: 'tsconfig.frontend.json',
        },
      },
    ],
  },

  // para resolução de módulos
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },

  // preciso definir o output no tsconfig.json, no caso tsconfig.fronted.json
  output: {
    filename: 'bundles.js',
    path: path.resolve(__dirname, 'frontend', 'assets', 'js'),
  },

  // add source-map
  // mapeia os scripts typescript gerados pelo webpack para a saída do dist
  devtool: 'source-map',
};
