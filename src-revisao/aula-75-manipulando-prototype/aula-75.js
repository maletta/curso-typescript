function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.desconto = function (percentual) {
  this.preco = this.preco - this.preco * (percentual / 100);
};

Produto.prototype.aumento = function (percentual) {
  this.preco = this.preco + this.preco * (percentual / 100);
};

const p1 = new Produto('Camiseta', 50);
console.log('produto 1 = objeto tendo como construtor Produto');
console.log(p1);
p1.aumento(50);
console.log(p1, '\n');

const p2 = {
  nome: 'Teclado',
  preco: 500,
};

Object.setPrototypeOf(p2, Produto.prototype);
console.log('produto 2 = objeto literal herdando o prototype de Produto');
console.log(p2);
p2.desconto(50);
console.log(p2);
console.log();

// criação de objeto com a função create
// primeiro parâmetro é o objeto q ele vai usar como referência
const p3 = Object.create(Object.prototype);
console.log('objeto p3 vazio como literal');
console.log(p3);
console.log();

const p4 = Object.create(Produto.prototype);
console.log('objeto p4 vazio como um objeto de Produto');
console.log(p4);
p4.preco = 200;
p4.desconto(10);
console.log(p4);
console.log();

const p5 = Object.create(Produto.prototype, {
  preco: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 300,
  },
  outraChave: {
    writable: true,
    configurable: true,
    enumerable: true,
    value: 'meu valor',
  },
});
console.log('objeto p5 vazio como um objeto de Produto');
console.log(p5);
p5.desconto(10);
console.log(p5);
console.log();
