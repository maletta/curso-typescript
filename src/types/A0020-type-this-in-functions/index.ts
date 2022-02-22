// para usar o this é preciso tipá-lo
// para dar um tipo aos this dentro de uma função é preciso
// usar a palavra reservada this como primeiro argumento da função

function funcao(this: any, argumento1: string, argumento2: number): void {
  console.log('this', this);
  console.log('argumento1', argumento1);
  console.log('argumento2', argumento2);
}

const objeto = {
  name: 'mauricio',
  lastName: 'maletta',
  age: 24,
};

funcao('Mauricio', 12); // não é possível mais chamar a função assim, seu this ficaria undefined
console.log('----------------------------');
funcao.call(objeto, 'Mauricio', 2021);
console.log('----------------------------');
funcao.apply(new Date(), ['Mauricio', 2021]);
