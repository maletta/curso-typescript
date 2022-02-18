/* eslint-disable @typescript-eslint/no-unused-vars */

/**
 * uso de interfaces para modelar objetos
 * bem semelhante ao type-alias
 *
 *
 */

interface TipoNome {
  nome: string;
  sobrenome: string;
}

type TipoIdentidade = {
  rg: string;
  cpf: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string; // nomeCompleto : () => string
};

// significa a mesma coisa, com sintaxe diferente, somando o conjunto de elementos
type TipoPessoa = TipoNome & TipoIdentidade & TipoNomeCompleto;
interface TipoPessoa2 extends TipoNome, TipoIdentidade, TipoNomeCompleto {}

export class Pessoa implements TipoPessoa2 {
  // construtor não precisa mais de super
  constructor(
    public nome: string,
    public sobrenome: string,
    public rg: string,
    public cpf: string,
  ) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoaClasse = new Pessoa('Mauricio', 'Maletta', 'meu rg', 'meu cpf');
console.log(pessoaClasse.nomeCompleto());

const pessoaObjeto: TipoPessoa2 = {
  nome: 'meu nome',
  sobrenome: 'meu sobrenome',
  cpf: 'meu cpf',
  rg: 'meu rg',
  nomeCompleto: function () {
    return `${this.nome} ${this.sobrenome}`;
  },
};

console.log(pessoaObjeto.nomeCompleto());
