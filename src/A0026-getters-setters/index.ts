/**
 * link do arquivo UML
 */

//  https://www.yworks.com/yed-live/?file=https://gist.githubusercontent.com/maletta/e453d79772773bcfaf1bb8d3d9dc92dd/raw/fb4a330de2afcb1af913b5ef3fe4d6ede9851af2/uml-classes

// A base class, parent class, ou super class é a classe que é o Pai, classe que é herdada

class Pessoa {
  constructor(
    private _nome: string, // já criei o atributo 'nome' com get e set
    private sobrenome: string,
    private idade: number,
    private cpf: string,
  ) {}

  /** Maneira antiga de usar getter e setter no javascript */
  public setCpf(valor: string): void {
    this.cpf = valor;
  }

  public getCpf(): string {
    return this.cpf.replace(/\D/g, '');
  }

  /** Maneira mais atual de getter e setter no javascript */

  set nome(valor: string) {
    this._nome = valor;
  }

  get nome(): string {
    return this._nome;
  }
}

const pessoa = new Pessoa('Mauricio', 'Maletta', 24, '123.000.000-99');

console.log(pessoa);
console.log('---------');
pessoa.nome = 'Novo Nome';
console.log(pessoa.nome);

export { Pessoa };
