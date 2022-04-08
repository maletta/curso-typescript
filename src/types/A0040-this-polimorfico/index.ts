export class Calculadora {
  constructor(public numero: number) {}

  add(n: number): this {
    this.numero += n;

    return this;
  }

  sub(n: number): this {
    this.numero -= n;

    return this;
  }

  div(n: number): this {
    this.numero /= n;

    return this;
  }

  mul(n: number): this {
    this.numero *= n;

    return this;
  }
}

export class SubCalculadora extends Calculadora {
  pow(n: number): this {
    this.numero **= n;

    return this;
  }
}

const calculadora = new Calculadora(10);
// é possível fazer chamadas em cadeia porque cada função retorna o this do
// objeto da classe
calculadora.add(5).mul(2);
console.log('calculadora ', calculadora);

const subCalculadora = new SubCalculadora(10);
subCalculadora.pow(2).add(100);
console.log('subCalculadora ', subCalculadora);
