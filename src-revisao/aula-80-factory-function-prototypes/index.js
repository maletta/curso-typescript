// factory function

// é uma função factory, logo não um construtor
// cada vez que criar um objeto vai criar as funções e isso é oneroso,
// não é muito performático porque consome muitos recursos
function criaPessoa(nome, sobrenome) {
  return {
    nome,
    sobrenome,
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
}

const p1 = criaPessoa('Mauricio', 'Maletta');
console.log(p1);
p1.falar();
p1.comer();
p1.beber();
