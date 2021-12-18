// classes são iguais funções construtoras

// os métodos das classes são registrados diretos no __proto__
// não precisa fazer o mesmo processo que as funções construtoras precisam
// já que deixar os métodos no prototype é mais performático

class Pessoa {
  constructor(nome, sobrenome) {
    this.nome = nome;
    this.sobrenome = sobrenome;
  }

  falar() {
    console.log(`${this.nome} está falando`);
  }

  comer() {
    console.log(`${this.nome} está comendo`);
  }

  beber() {
    console.log(`${this.nome} está bebendo`);
  }
}

const p1 = new Pessoa('Pessoa 1 ', 'Carvalho');
p1.falar();

function Pessoa2(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
}

Pessoa2.prototype.falar = function () {
  console.log(`${this.nome} está falando`);
};

const p2 = new Pessoa('Pessoa 2', 'Miranda');
p2.falar();
