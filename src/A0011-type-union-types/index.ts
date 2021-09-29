// usar tipos literais é como usar valores como tipos
// utilizando o sinal de pipe quando tenho mais um tipo de valor, de parâmetro
// exemplo string | number | bool

function add(a: number, b: number): number {
  return a + b;
}

function addOrConcat(a: number | string, b: number | string): number | string {
  // return a + b;  typescript não aceita, ele quer que provemos o valor pra ele
  // por mais que no jascript puro seja aceito

  if (typeof a === 'number' && typeof b === 'number') return a + b;

  return `${a}${b}`;
}

console.log(addOrConcat(10, 20));
console.log(addOrConcat('10', '20'));
console.log(addOrConcat('10', 20));
console.log(addOrConcat(10, '20'));

export default {
  add,
  addOrConcat,
};
