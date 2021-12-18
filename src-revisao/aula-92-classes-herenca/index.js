class DispositivoEletronico {
  constructor(nome) {
    this.nome = nome;
    this.ligado = false;
  }

  ligar() {
    if (this.ligado) {
      console.log(this.nome + ' já ligado');
      return;
    }

    this.ligado = true;
  }

  desligar() {
    if (!this.ligado) {
      console.log(this.nome + ' já desligado');
      return;
    }

    this.ligado = false;
  }
}

// const d1 = new DispositivoEletronico('Smartphone');
// d1.ligar();
// d1.ligar();
// d1.desligar();

// console.log(d1);

// quando vc utiliza herança
// você está transformando uma classe mais genérica
// em uma classe mais específica

class Smartphone extends DispositivoEletronico {
  constructor(nome, cor) {
    super(nome);
    this.cor = cor;
  }
}

const s1 = new Smartphone('iPhone', 'preto');
console.log(s1);
