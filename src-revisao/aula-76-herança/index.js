// Produto
// // camiseta = {cor} , caneca = {material}

function Produto(nome, preco) {
  this.nome = nome;
  this.preco = preco;
}

Produto.prototype.aumento = function (quantia) {
  this.preco += quantia;
};

Produto.prototype.desconto = function (quantia) {
  this.preco -= quantia;
};

function Camiseta(nome, preco, cor) {
  Produto.call(this, nome, preco);
  this.cor = cor;

  // funcao call faz o que o "new" faz, ou seja,
  // cria o objeto e seta a referência do objeto
  // logo a referência da criação do objeto Produto será o objeto atual de Camiseta

  // Porém o objeto Camiseta que está sendo criado não herda a cadeia de prototype Produto
  // logo não herda as funções que criamos para o prototype de Produto

  // é preciso dar o this.cor no objeto atual de Camiseta porque Produto não tem cor
}

// Object.setPrototypeOf(Camiseta.prototype, Produto.prototype);
// agora o prototype de Camiseta herda as características do protoype de Produto
// porém o instrutor não fez assim
// positivamente não define o constructor de Camiseta para o de Produto

// define o prototype de Camiseta para o de Produto
// também define o constructor de Camiseta para o de Produto
Camiseta.prototype = Object.create(Produto.prototype);
// redefine o constructor de Camiseta para Camiseta
Camiseta.prototype.constructor = Camiseta;

const c1 = new Camiseta('Camiseta 1', 50, 'preto');
console.log('Camiseta 1');
console.log(c1);
c1.desconto(10);
console.log(c1);
// O construtor continua sendo Camiseta porque ele tomo como referência o
// primeiro construtor que ele encontra na cadeia de prototype, que é o próprio
// construtor de Camiseta
// A função aumento não existe no prototype Camiseta, mas é encontrado no próximo
// prototype da cadeia, que é o prototype de Produto
// Camiseta -> Produto -> Object é a cadeia atual de prototype
