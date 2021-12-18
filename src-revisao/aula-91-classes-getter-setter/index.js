// Symbol geral uma chave aleatória toda vez que é executado
// tem a aparência de uma função construtura por ser iniciado com maiúscula,
// mas não usa new

// Symbol é um tipo primitivo

// faz se uso de get para deixar o atributo privado
// faz uso do set para controlar a alteração deste atributo privado

const _velocidade = Symbol('velocidade');

class Carro {
  constructor(nome) {
    this.nome = nome;
    this[_velocidade] = 0;
  }

  set velocidade(valor) {
    console.log('SETTER');
    if (typeof valor !== 'number') return;
    if (valor >= 100 || valor <= 0) return;

    this[_velocidade] = valor;
  }

  get velocidade() {
    console.log('GETTER');
    return this[_velocidade];
  }

  acelerar() {
    if (this[_velocidade] >= 100) return;
    this[_velocidade]++;
  }

  freiar() {
    if (this[_velocidade] <= 0) return;
    this[_velocidade]--;
  }
}

const c1 = new Carro('Fusca');
c1.velocidade = 55;
console.log(c1.velocidade);

for (let i = 0; i <= 200; i++) {
  c1.acelerar();
}

console.log(c1.velocidade);
