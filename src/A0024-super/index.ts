/**
 * link do arquivo UML
 */

//  https://www.yworks.com/yed-live/?file=https://gist.githubusercontent.com/maletta/e453d79772773bcfaf1bb8d3d9dc92dd/raw/fb4a330de2afcb1af913b5ef3fe4d6ede9851af2/uml-classes

// A base class, parent class, ou super class é a classe que é o Pai, classe que é herdada

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
  // sobrescrevendo o construtor de Pessoa
  // porém Aluno recebe um parâmetro a mais
  // e de forma curta já criamos o atribulo 'sala'
  constructor(
    nome: string,
    sobrenome: string,
    idade: number,
    cpf: string,
    public sala: string, // atributo só de Aluno
  ) {
    super(nome, sobrenome, idade, cpf);
  }

  public getNomeCompleto(): string {
    console.log('Fazendo algo antes no método de Aluno');
    const result = super.getNomeCompleto();
    return `Sou o aluno ${result} da ${this.sala}`;
  }
}

class Cliente extends Pessoa {
  public getNomeCompleto(): string {
    return `Sou o cliente ${this.nome} ${this.sobrenome}`;
  }
}

const pessoa = new Pessoa('Mauricio', 'Maletta', 24, '000.000.000-00');
const aluno = new Aluno(
  'Mauricio',
  'Maletta',
  24,
  '000.000.000-00',
  'sala de Física',
);
const cliente = new Cliente('Mauricio', 'Maletta', 24, '000.000.000-00');

console.log(pessoa);
console.log(pessoa.getNomeCompleto());
console.log(aluno);
console.log(aluno.getNomeCompleto());
console.log(cliente);
console.log(cliente.getNomeCompleto());

export { Pessoa, Aluno, Cliente };
