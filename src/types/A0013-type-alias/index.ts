// type alias são apelidos para tipos, para facilitar o reaproveitamento de código

type Idade = number;
type CorRGB = 'Vermelho' | 'Amarelo' | 'Azul';
type CorCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type CorPreferida = CorRGB | CorCMYK;

type Pessoa = {
  nome: string;
  idade: Idade;
  salario: number;
  corPreferida?: CorPreferida;
};

const pessoa: Pessoa = {
  idade: 24,
  nome: 'Mauricio',
  salario: 200_000, // 200000 separando por underline pra ficar visualmente melhor
};

function setCorPreferida(pessoa: Pessoa, cor: CorPreferida): Pessoa {
  return { ...pessoa, corPreferida: cor };
}

const novaPessoa = setCorPreferida(pessoa, 'Vermelho');

console.log('pessoa original ', pessoa);
console.log('pessoa deep copy ', novaPessoa);

export default {
  pessoa,
  setCorPreferida,
};
