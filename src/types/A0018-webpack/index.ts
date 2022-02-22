import './modulo';
// passar arquivos para um bundle (ex: webpack)
// que vai uní-los em um único de arquivo de saída
// esse arquivo vai ser importado no front end

// yarn add ts-loader -D
// loader para arquivos typescript

// yarn add webpack webpack-cli -D

// crio o arquivo webpack.config.js na raíz da pasta /src

console.log('Olá mundo');

/**
 *
 *  para executar
 *
 *  npx webpack ou npx webpack -w para ficar assistindo as alterações
 *
 *  cada vez que é executado não deleta a pasta /frontend, mas só modifica os arquivos compilados
 *
 * */
