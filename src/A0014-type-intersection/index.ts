// faz a interseção de tipos, para ficarem enxutos e reutilizáveis
// em alguns casos pode ler lido como operador AND

type TemNome = { nome: string };
type TemSobrenome = { sobrenome: string };
type TemIdade = { idade: number };

// nesse caso eu não obtenho o resultado que eu quero, pois a pessoa pode ou não
// ter cada um dos atributos, sendo neste caso, ela precisa ter só 1 dos atributos
// para ser válido
type Pessoa1 = TemNome | TemSobrenome | TemIdade;

// só adicionei o nome, mas queria que todos os atributos fossem required
const pessoa1: Pessoa1 = {
  nome: 'Mauricio',
};

type Pessoa2 = TemNome & TemSobrenome & TemIdade;

// agora fui obrigado a adicionar todos os atributos de tipo de Pessoa2
const pessoa2: Pessoa2 = {
  nome: 'Mauricio',
  sobrenome: 'Maletta',
  idade: 24,
};

// ----------------- outro exemplo -----------------

type AB = 'A' | 'B';
type AC = 'A' | 'C';

type Intersecao = AB & AC;

// o resultado da interseção é o tipo A, porque ele é a interseção dos tipos
// porque ele é o atributo em comum  nesses conjuntos de tipo

// ----------------- outro exemplo -----------------

type portugues = { nome: string; cpf: number };
type portgues2 = { nome: string; sobrenome: string };

type gringo = portugues & portgues2;

const novaPessoa: gringo = {
  nome: 'mauricio',
  sobrenome: 'maletta',
  cpf: 123,
};

export default {
  pessoa1,
  pessoa2,
  novaPessoa,
};
