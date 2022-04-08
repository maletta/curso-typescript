/**
 * Exemplo de type guardian
 * fazendo soma com segurança quando for number
 * e fazerndo uma concatenação quando não for number
 *
 * Para a função mostrarNome eu refino o tipo através de validação
 * type guards
 */

/**
 *
 * @param a
 * @param b
 * @returns string or number
 */

function add(a: unknown, b: unknown): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;

  return `${a}${b}`;
}

// a propriedade tipo estática para definir um tipo literal
// propriedade pessoa é do tipo literal pessoa
// propriedade animal e do tipo literal animal
// proppriedades nome e cor são do tipo string
type Pessoa = { tipo: 'pessoa'; nome: string };
type Animal = { tipo: 'animal'; cor: string };
type PessoaOuAnimal = Pessoa | Animal;

class Aluno implements Pessoa {
  constructor(public nome: string) {}
  tipo: 'pessoa' = 'pessoa'; // tipo literal chamado pessoa
}

class Aracnideo implements Animal {
  constructor(public cor: string) {}
  tipo: 'animal' = 'animal'; // tipo literal chamado animal
}

/**
 *
 * @param objeto
 */

function mostraNome(objeto: PessoaOuAnimal) {
  // checa se existe a propriedade 'nome' no objeto
  // if ('nome' in objeto) console.log(objeto.nome);

  // checa se objeto é uma instância de Aluno
  // if (objeto instanceof Aluno) console.log('O meu nome é ', objeto.nome);
  //  else console.log('Não possui nome');

  switch (objeto.tipo) {
    case 'pessoa':
      console.log('O meu nome é ', objeto.nome);
      break;
    case 'animal':
      console.log('Isso é um animal de cor ', objeto.cor);
      break;
    default:
      console.log('Nem é uma pessoa e nem um animal');
  }
}

mostraNome(new Aluno('Mauricio'));
mostraNome(new Aracnideo('Marrom'));

export { add };
