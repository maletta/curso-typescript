/* eslint-disable @typescript-eslint/no-unused-vars */

// Tipos básicos (aqui ocorre inferência de tipos)
const nome = 'Mauricio'; // qualquer tipo de strings: '' "" ``
const idade = 30; // 10, 1.75, -5.55, 0xf00d, 0b1010, 0o7744
const adulto = true; // true ou false
const simbolo = Symbol('qualquer-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
const arrayDeNumeros: Array<number> = [1, 2, 3];
const arrayDeNumeros2: number[] = [1, 2, 3];
const arrayDeString: Array<string> = ['1', '2', '3'];

// Objetos
const pessoa: { nome: string; idade: number; adulto?: boolean } = {
  nome: 'Mauricio',
  idade: 0,
};

// Funções
function soma(x: number, y: number): number {
  return x + y;
}

const soma2: (x: number, y: number) => number = (x, y) => x + y;

type somaType = (x: number, y: number) => number;

const soma3: somaType = (x, y) => x + y;

export default {
  nome,
  idade,
  adulto,
  simbolo,
  arrayDeNumeros,
  arrayDeNumeros2,
  arrayDeString,
  pessoa,
  soma,
  soma2,
  soma3,
};
