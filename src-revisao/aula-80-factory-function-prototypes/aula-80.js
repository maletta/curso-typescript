// factory function

// é uma função factory, logo não um construtor
// cada vez que criar um objeto vai criar as funções e isso é oneroso,
// não é muito performático porque consome muitos recursos
function criaPessoa(nome, sobrenome) {
  const pessoaPrototype = {
    falar() {
      console.log(`${this.nome} está falando.`);
    },

    comer() {
      console.log(`${this.nome} está comendo.`);
    },

    beber() {
      console.log(`${this.nome} está bebendo.`);
    },
  };

  // dessa forma não criamos as funções para cada objeto
  // as funções são aclopadas no prototype
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
