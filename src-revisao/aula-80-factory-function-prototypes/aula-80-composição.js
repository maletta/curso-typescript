// compor um objeto com vários objetos chaamados isso de mixin ou composição

const falar = {
  falar() {
    console.log(`${this.nome} está falando.`);
  },
};

const comer = {
  comer() {
    console.log(`${this.nome} está comendo.`);
  },
};

const beber = {
  beber() {
    console.log(`${this.nome} está bebendo.`);
  },
};

// compor um objeto com vários objetos chaamados isso de mixin ou composição
// criando um objeto que descreve prototype com object literals
// const pessoaPrototype = {
//   ...falar,
//   ...comer,
//   ...beber,
// };

// compor um objeto com vários objetos chaamados isso de mixin ou composição
// criando um objeto que descreve prototype com object assign
const pessoaPrototype = Object.assign({}, falar, comer, beber);

// é uma função factory, logo não um construtor
// cada vez que criar um objeto vai criar as funções e isso é oneroso,
// não é muito performático porque consome muitos recursos

function criaPessoa(nome, sobrenome) {
  return Object.create(pessoaPrototype, {
    nome: { value: nome },
    sobrenome: { value: sobrenome },
  });
}

const p1 = criaPessoa('Mauricio', 'Maletta');
console.log(p1);
p1.falar();
p1.comer();
p1.beber();

console.log();

const p2 = criaPessoa('Maria', 'Charmosa');
console.log(p2);
p2.falar();
p2.comer();
p2.beber();
