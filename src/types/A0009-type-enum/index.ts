// é uma estrutura de dados ou de valor do typescript
// possui valores enumerados e não necessariamente ordenados
// atribui valores para os índices automaticamente incrementando 1
// meu_enum[0] = "elemento0";  //sempre vai ter uma chave e um valor correspondente ao elemento,
// meu_enum["elemento0"] =  0; // e seu o inverso

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

console.log('---------------------------');
console.log('\n enum Cores Ordem Alterada');
console.log(CoresOrdemAlterada);
console.log(CoresOrdemAlterada.VERMELHO);
console.log(CoresOrdemAlterada[0]);
console.log(CoresOrdemAlterada[1]);

export default {
  Cores,
  CoresOrdemAlterada,
};
