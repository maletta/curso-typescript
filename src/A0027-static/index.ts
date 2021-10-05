/**
 * link do arquivo UML
 */

//  https://www.yworks.com/yed-live/?file=https://gist.githubusercontent.com/maletta/e453d79772773bcfaf1bb8d3d9dc92dd/raw/fb4a330de2afcb1af913b5ef3fe4d6ede9851af2/uml-classes

// A base class, parent class, ou super class é a classe que é o Pai, classe que é herdada

class Pessoa {
  static idadePadrao = 18;
  static cpfPadrao = '000.000.000-00';

  constructor(
    public nome: string,
    public sobrenome: string,
    public idade: number,
    public cpf: string,
  ) {}

  public exibirValoresPadrao(): void {
    console.log('Idade padrão :', Pessoa.idadePadrao);
    console.log('Cpf padrão :', Pessoa.cpfPadrao);
  }

  static criarPessoaPadrao(nome: string, sobrenome: string): Pessoa {
    return new Pessoa(nome, sobrenome, Pessoa.idadePadrao, Pessoa.cpfPadrao);
  }
}

const pessoa = new Pessoa('Mauricio', 'Maletta', 24, '123.000.000-99');

console.log(pessoa);
pessoa.exibirValoresPadrao();
console.log('\n---------\n');
console.log(Pessoa.idadePadrao, ' - ', Pessoa.cpfPadrao);
console.log('\n---------\n');

const pessoaPadrao = Pessoa.criarPessoaPadrao('Fulano', 'da Silva Padrão');
console.log(pessoaPadrao);

export { Pessoa };
