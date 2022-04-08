type CoresObj = {
  vermelho: string;
  verde: string;
  azul: string;
};

const coresObj: CoresObj = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

function traduzirCor1(cor: string, cores: CoresObj): string {
  // dá erro porque parâmetro cor é uma string, valor muito ampo
  // sendo que o objeto cores do tipo CoresObj só aceita três strings,
  // ela são: vermelho, verde, azul
  // return cores[cor]; // retorno dá erro
  return 'função com erro, parâmetro cor é visto como any. muito amplo'; // retorno aleatório qualquer
}

function traduzirCor2(
  cor: 'vermelho' | 'verde' | 'azul',
  cores: CoresObj,
): string {
  // agora não dá erro porque especifiquei que o parâmetro cor só pode ter três tipos possíveis
  // e esses tipos possíveis são as mesmas chaves especificadas em CoresObj
  return cores[cor];
}

/* ---------------------------------------------------------------------------------- */

/**
 * Agora crio um objeto literal chamado coresObj2 e o typescrip infere um tipo para ele
 *
 * Agora eu uso typeof para receber os tipos de um objeto definido literalmente
 *
 * Agora uso keyof para pegar as chaves de um type e criar um novo type apartir delas
 *
 * Como resultado meu código ficou mais dinâmico
 *
 */

const coresObj2 = {
  vermelho: 'red',
  verde: 'green',
  azul: 'blue',
};

type CoresObj2 = typeof coresObj2;
type CoresChaves = keyof CoresObj2;

function traduzirCor3(cor: CoresChaves, cores: CoresObj2): string {
  return cores[cor];
}

console.log(traduzirCor1('vermelho', coresObj));
console.log(traduzirCor2('vermelho', coresObj));
console.log(traduzirCor3('verde', coresObj));
// console.log(traduzirCor3('preto', coresObj)); // dá erro porque preto não é chave de CoresObj2

export { traduzirCor1, traduzirCor2 };
