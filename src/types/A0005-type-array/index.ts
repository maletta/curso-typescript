// podemos criar de duas formas, com generics ou com colchetes de array
// Array<T> ou []

function multiplicaArgs(...args: Array<number>) {
  // já infere o retorno como number
  return args.reduce((acc, valor) => acc * valor, 1);
}

const result = multiplicaArgs(1, 2, 3); // infere o valor da variável
console.log('multiplicaArgs', result);

export default {
  multiplicaArgs,
};
