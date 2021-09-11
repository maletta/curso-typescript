// tipo never é um não valor para principalmente funções que nunca
// vão retornar nada
// pode ser usado em laços de repetições também

// geralmente essa função é uma função que pode quebrar uma aplicação
// também poderia retornar void
function criaErro(): never {
  throw new Error('Qualquer error');
}

criaErro();

export default {};
