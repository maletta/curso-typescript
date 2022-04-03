/**
 * Overload das funções / Sobrecarga das funções
 *
 * Overload não é nativo no typescript, então é preciso fazer validações do tipo
 * type guard para validação
 *
 * Overload é uma função se comportar diferente de acordo com a quantidade de parâmetros
 */

// crio o type como interface, uso {} blocos
// então assim é possível criar, por exempo,
// um tipo para uma função chamada Adder com mais de uma assinatura, no caso 3

type Adder = {
  (x: number): number;
  (x: number, y: number): number;
  (...arg: number[]): number;
};

// validação type guards para garantir o overload da função
// x sempre é enviado
// y em um momento pode não ser enviado
// ...args sempre é enviado porque é um array de todos os argumentos, mesmo se tiver só 1 argumento que é x
const adder: Adder = (x: number, y?: number, ...args: number[]): number => {
  // só executa se receber array de args, ou seja, 3 parâmetros ou mais
  // se existe ...args, então existe x, e talvez exista y
  // recebo todos os args, somo, depois somo x + (y || 0) // por que y é opcional
  if (args.length > 0) return args.reduce((s, v) => s + v, 0) + x + (y || 0);

  // se não houver 3 parâmetros ou mais, tenta somar só x + y
  // se possuir só 1 parâmetro, então y = null, por isso (y || 0)
  return x + (y || 0);
};

console.log('adder(1) ', adder(1));
console.log('adder(1, 2) ', adder(1, 2));
console.log('adder(1, 2, 3) ', adder(1, 2, 3));

export { adder };
