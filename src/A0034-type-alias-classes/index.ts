/**
 * Usar type para definir regras para classes, estabelecer contrato
 * de atributos e funções, mas sem modificadores de acesso
 */

export abstract class TipoPessoa {
  protected abstract nome: string;
  protected abstract sobrenome: string;
  protected abstract nomeCompleto(): string;
}

// a classe Pessoa está com nível de acesso public dos seus atributos
// enquanto TipoPessoa está com nível protected
// então eu abri os níveis de acesso

// mas descer o nível de protected para private não seria possível
export class Pessoa extends TipoPessoa {
  constructor(public nome: string, public sobrenome: string) {
    super();
  }

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

// criando tipos
// não dá pra definir níveis de acesso como protected ou private
// define um contrato que sua classe implementa e deve seguir

type TipoNome = {
  nome: string;
  sobrenome: string;
};

type TipoNomeCompleto = {
  nomeCompleto(): string; // nomeCompleto : () => string
};

// é possível implementar mais de um type
export class Pessoa2 implements TipoNome, TipoNomeCompleto {
  // construtor não precisa mais de super
  constructor(public nome: string, public sobrenome: string) {}

  public nomeCompleto(): string {
    return this.nome + ' ' + this.sobrenome;
  }
}

const pessoa = new Pessoa('Mauricio', 'Maletta');
console.log(pessoa.nomeCompleto());
console.log('----------------------------------');
const pessoa2 = new Pessoa2('Malettinha', 'Brabo');
console.log(pessoa2.nomeCompleto());
