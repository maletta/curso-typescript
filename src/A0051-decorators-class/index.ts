/**
 * Decorator introdução
 */

// pode ser chamado de objeto impostor,fingi ser seu objeto,
// pode observar o que seu objeto faz, pode modificar o seu objeto,
// substituir ele por completo

// nada mais são do que funções que são chamadas no meio da execução do código

export class Animal {
  constructor(public nome: string, public cor: string) {}
}

@meuDecorator2
export class Animal2 {
  constructor(public nome: string, public cor: string) {}
}

// decorator de classe
// recebo minha classe e retorno minha classe
// função decoradora
function meuDecorator<T>(target: T): T {
  // faço coisas antes de entregar o objeto
  console.log('Oie do meuDecorator');
  return target;
}
// decorator de classe
// extends new quer dizer que eu estou me referindo ao constructor
function meuDecorator2<T extends new (...args: any[]) => any>(target: T) {
  // esse T pode ser muito mais coisa além de uma classe
  console.log('Oie do meuDecorator2');
  // retornando clase anônima
  return class extends target {
    nome: string;
    cor: string;
    constructor(...args: any[]) {
      super(...args);
      this.nome = this.inverter(args[0]);
      this.cor = this.inverter(args[1]);
    }

    inverter(valor: string): string {
      return valor.split('').reverse().join('');
    }
  };
}

const AnimalDecorado = meuDecorator(Animal);
const animal = new AnimalDecorado('Animal1', 'laranja');
console.log('\nanimal1 ', animal);

const AnimalDecorado2 = meuDecorator2(Animal);
const animal2 = new AnimalDecorado2('Animal2', 'preto');
console.log('\n animal2 ', animal2);

const animal3 = new Animal2('Animal3', 'amarelo');
console.log('\n animal3 ', animal3);
