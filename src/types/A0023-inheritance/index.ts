/**
 * link do arquivo UML
 */

//  https://www.yworks.com/yed-live/?file=https://gist.githubusercontent.com/maletta/e453d79772773bcfaf1bb8d3d9dc92dd/raw/fb4a330de2afcb1af913b5ef3fe4d6ede9851af2/uml-classes

class Pessoa {
  constructor(
    public nome: string,
    public sobrenome: string,
    private idade: number,
    protected cpf: string,
  ) {}

  public getIdade(): number {
    return this.idade;
  }

  public getCpf(): string {
    return this.cpf;
  }

  public getNomeCompleto(): string {
    return `${this.nome} ${this.sobrenome}`;
  }
}

class Aluno extends Pessoa {
  public getNomeCompleto(): string {
    return `Sou o aluno ${this.nome} ${this.sobrenome}`;
  }
}

class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return `Sou o cliente ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Mauricio', 'Maletta', 24, '000.000.000-00');
const aluno = new Aluno('Mauricio', 'Maletta', 24, '000.000.000-00');
const cliente = new Cliente('Mauricio', 'Maletta', 24, '000.000.000-00');

console.log(pessoa.getNomeCompleto());
console.log(aluno.getNomeCompleto());
console.log(cliente.getNomeCompleto());

export { Pessoa, Aluno, Cliente };
