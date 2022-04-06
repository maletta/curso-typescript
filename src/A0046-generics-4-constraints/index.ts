/**
 * Fazer restrições com generics - constraints
 */

// extends significa uma restrição, K é no MÁXIMO uma chave de O
// os generics depois do sinal de " = " possibilita o typescript já tentar,
// inferir os valores dos parâmetros da função

type ObterChaveFn = <O, K extends keyof O>(objeto: O, chave: K) => O[K];

const obterChave: ObterChaveFn = (objeto, chave) => objeto[chave];

const animal = {
  cor: 'rosa',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 10,
};

const vacinas = obterChave(animal, 'vacinas');
const cor = obterChave(animal, 'cor');

console.log('animal 1 ', vacinas, cor, obterChave(animal, 'idade'));

/**
 * Mesmo exemplo com type sem a inferência
 * Não fica possível inferir os tipos dos parâmetros da função se eu definir
 * os generics antes do sinal de atribuição " = "
 */

type ObterChaveFn2<O, K extends keyof O> = (objeto: O, chave: K) => O[K];

type AnimalType = {
  cor: string;
  vacinas: string[];
  idade: number;
};

type ChaveAnimalType = keyof AnimalType;

// é preciso mandar os tipos como argumentos pois a inferência não foi possível
const obterChave2: ObterChaveFn2<AnimalType, ChaveAnimalType> = (
  objeto,
  chave,
) => objeto[chave];

const animal2 = {
  cor: 'marrom',
  vacinas: ['vacina 1', 'vacina 2'],
  idade: 25,
};

const vacinas2 = obterChave2(animal2, 'vacinas');
const cor2 = obterChave2(animal2, 'cor');

console.log('animal 2 ', vacinas2, cor2, obterChave2(animal2, 'idade'));
