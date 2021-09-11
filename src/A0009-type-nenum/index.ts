// é uma estrutura de dados ou de valor do typescript
// possui valores enumerados e não necessariamente ordenados
// atribui valores para os índices automaticamente incrementando 1

enum Cores {
  VERMELHO, // 0
  AZUL, // 1
  AMARELO, // 2
}

enum CoresOrdemAlterada {
  VERMELHO = 1, // 0
  AZUL, // 1
  AMARELO, // 2
  ROXO = 'ROXO',
  ROSA = 201, // não consegue definir um valor porque ROXO não tem valor number
  LILAS, // consegue inferir valor para 202 por que ROSA tem valor number
}

console.log('enum Cores');
console.log(Cores);
console.log(Cores.VERMELHO);
console.log(Cores[0]);

console.log('enum Cores Ordem Alterada');
console.log(CoresOrdemAlterada);

export default {
  Cores,
  CoresOrdemAlterada,
};
