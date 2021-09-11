// tipos literais é como usar valores como tipos

let x = 10; // eslint-disable-line
// x é inferido como number
x = 0b1010; // alterei o valor pra outro tipo de number

// tipo literal
const y = 10;
// além de ser tipo number, ele é ums subtipo de number
// ele é um subtipo de number com valor 10 que não pode ser alterado, nunca

// é possível declarar um let com subtipo também, de modo que não é possível
// alterar seu valor, mas não é aconselhável
// transformei o let em um tipo literal
let a: 100 = 100; // eslint-disable-line

// posso usar let com tipo literal deste outro modo
let b = 100 as const; // eslint-disable-line

// outro exemplo

const pessoa = {
  nome: 'Mauricio' as const, // asserção
  sobrenome: 'Maletta',
};

// pessoa.nome possui o valor literal

pessoa.sobrenome = 'Montes';
// pessoa.nome = 'Marecelo'; não é possível alterar o valor literal pessoa.nome

// não confundir cor: 'Vermelho' | 'Amarelo' | 'Azul' com valor
// porque cor: 'Vermelho' | 'Amarelo' | 'Azul' representa um tipo
// são tipos literais substring
function escolhaACor(cor: 'Vermelho' | 'Amarelo' | 'Azul'): string {
  return cor;
}

enum cores {
  Vermelho = 'Vermelho',
  Azul = 'Azul',
  Amarelo = 'Cinza', // este vai dar erro
}

console.log('escolha a cor ', escolhaACor('Amarelo'));
console.log('escolha a cor + enum', escolhaACor(cores.Vermelho));

// Module mode, assim eu uso as variáveis declaradas nesse contexto, no contexto
// deste arquivo
export default {
  x,
  y,
  a,
  b,
  escolhaACor,
};
