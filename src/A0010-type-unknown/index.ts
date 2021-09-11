// é um tipo parecido com o any, mas mais seguro
// é o pai de todos os tipos, vem antes de todos os tipos

let x: any;
x = 100;
x = 'Mauricio';
x = 900;
x = '10';

const y = 800;

// com o x valendo any é possível realizar esse cálculo
console.log(x + y);

let a: unknown;
a = 100;
a = 'Mauricio';
a = 900;
a = '10';

// dá erro porque typescript não permite operador + com tipo unknown
// por isso unknown é mais seguro
// console.log(a + y);

// com a validação de 'a' é possível fazer operações
// porém 'a' no momento é string
if (typeof a === 'number') console.log('a === number', a + y);

a = 70;
if (typeof a === 'number') console.log('a === number', a + y);

export default {
  x,
  y,
  a,
};
