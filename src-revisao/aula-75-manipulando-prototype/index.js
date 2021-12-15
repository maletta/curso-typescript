// Ao criar objeto literal o javascript usa o o construtor em new Object
// todas as funções contrutoras tem um prototype
// no caso Object.prototype, vem em uma chava implícita __proto__
// essa chave é visível pelo navegador: __proto__: Object.prototype,
// essa propriedade não tem __proto__

const objetoA = {
  chaveA: 'A',
  //__proto__: Object.protoype
};

console.log(objetoA.__proto__ === Object.prototype);

const objetoB = {
  chaveB: 'B',
  //__proto__: Object.protoype
};

// setar o prototype de um objeto faz com que ele herde as característica de
// outro prototype
// agora o objetoB tem a propriedade chaveA
Object.setPrototypeOf(objetoB, objetoA);
console.log(
  'Chave oculta de objetoB é a chaveA, porque está sendo hedada do prototype',
);
console.log(objetoB, objetoB.chaveA, '\n');
console.log('prototype de objeto B depois de herdar objetoA');
console.log(objetoB.__proto__, '\n');

const objetoC = new Object();
objetoC.chaveC = 'C';

Object.setPrototypeOf(objetoC, objetoB);
// objetoC herda todas as características do objetoB
// objetoB herda todas as características do objetoA
// logo temos umas herança em cadeia

/** ----------- */
// acessar a propriedade implícita __proto__ diretamente é muito honeroso
// e não é muito elegante

// melhor forma de acessar o prototype de um objeto
// essa função é como se fosse um getter
console.log('prototype do objeto C');
console.log(Object.getPrototypeOf(objetoC));
