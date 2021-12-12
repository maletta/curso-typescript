// objetos literais, arrays literais e funções literais
// são mais intuitivos de usar e não usam construtores

// objeto literal
const pessoa1 = {
  nome: 'Mauricio',
  idade: 24,
};

// array literal
const list = [];

// construtores usam new
// new Array(), new Object ()

const pessoa2 = new Object();
pessoa2.nome = 'Mauricio';
pessoa2.idade = 24;

// algumas vantagens de funções e métodos dentro do objeto é ter acesso
// as propriedades do objeto com o thus

pessoa2.falarNome = function () {
  return `${this.nome} está falando o seu nome.`;
};

pessoa2.getDataNascimento = function () {
  const dataAtual = new Date();
  return dataAtual.getFullYear() - this.idade;
};

console.log(pessoa2.falarNome());
console.log(pessoa2.getDataNascimento());

for (let chave in pessoa1) {
  console.log('chave ' + chave);
  console.log('valor ' + pessoa1[chave]);
}

// caso eu queira criar sempre um objeto é com usar padrões
// Factory functions / Constructor functions
console.log('-----------------------------------------');
console.log('Factory functions / Constructor functions');
console.log('-----------------------------------------');

// com getters e setters protejemos nosso objeto
// com get não é possível setar o atributo nomeCompleto
// nomeCompleto é apenas uma propriedade que pode ser acessada

// Factory Function
function criarPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
    get nomeCompleto() {
      return `${this.nome} ${this.sobrenome}`;
    },
  };
}

const p1 = criarPessoa('Luiz', 'Otávio');

console.log('Factory function');
console.log('p1', p1, p1.nomeCompleto);
console.log();

// Constructor Object
// muda o comportamento da função com a palavra reservada new
// faz muitas coisas por baixo dos panos

// palavra new cria um objeto vazio {} e atrela o this dessa função ao objeto
// {} <- this
// new também já faz a função retornar esse this

function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;

  // trava os valores do objeto
  // não é possível alterar os valores do atributo nem add/deletar atributos
  Object.freeze(this);
}

const p2 = new Pessoa('Luiz', 'Miranda');

console.log('Constructor function');
console.log(p2);
// no log também é possível ver a descrição do construtor do objeto
