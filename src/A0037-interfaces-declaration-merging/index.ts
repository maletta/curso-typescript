/**
 *  declaration mergin - distinguindo interface de types
 *
 *  Não é possível ter um type com o mesmo nome de uma interface
 *
 *  Mas é possível ter mais de uma interface com o mesmo nome e as declarções
 *  que são feitas nessas interfaces de mesmo nome são mergeadas como no exemplo.
 *
 *  As interfaces de mesmo nome possuem suas declarações mergeadas em uam só.
 *
 */

// type Pessoa = {
//   nome: string;
// };

interface Pessoa {
  sobrenome: string;
}

interface Pessoa {
  readonly profissao: string;
}

interface Pessoa {
  hobby: string;
}

const pessoa: Pessoa = {
  sobrenome: 'maletta',
  profissao: 'desenvolvedor',
  hobby: 'comportamento humano',
};

console.log(pessoa);

export { pessoa };
