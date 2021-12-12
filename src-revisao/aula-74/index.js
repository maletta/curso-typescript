// métodos úteis para objetos

// Object.assign para copiar objetos

const produto1 = { nome: 'teclado', preco: 90, modelo: 'qwerty' };
const produto2 = { nome: 'mouse', preco: 50, cor: 'preto' };
const produto3 = { nome: 'qualquer', preco: 'qualquer', tamanho: '50cm' };

console.log('produto3', produto3);
const copia1 = Object.assign(produto3, produto2);
const copia2 = Object.assign({}, produto2);

console.log('copia1', copia1);
console.log('copia2', copia2);
console.log('produto3', produto3);
console.log('---------------------- \n');

// Object.keys mostra as chaves
console.log('object keys');
console.log(Object.keys(produto1));
console.log('---------------------- \n');

// Object.freeze impede o objeto de ser alterado
console.log('object freeze');
Object.freeze(produto1);
produto1.nome = 'novo nome';
produto1.modelo = 'novo modelo';
console.log(produto1);
console.log('---------------------- \n');

// Object.getOwnPropertyDescriptor
// pega as configurações do objeto de acordo com Object.defineProperty
console.log('Object.getOwnPropertyDescriptor');
produto1.nome = 'olá';
console.log(Object.getOwnPropertyDescriptor(produto1, 'nome'));
console.log(
  'writable: false, está false porque o objeto está com Object.freeze',
);
console.log(produto1);
console.log('---------------------- \n');

// Object.entries retorna um array com chave-valor para cada atributo do objeto
console.log('Object.entries');
console.log(Object.entries(produto1));
console.log('---------------------- \n');

console.log('for com Object.entries(produto1)');
for (let entry of Object.entries(produto1)) {
  console.log('entry ', entry);
}
console.log('\nfor com Object.entries(produto1) e destructuring');
for (let [chave, valor] of Object.entries(produto1)) {
  console.log(chave, valor);
}

console.log('---------------------- \n');
