// dessa forma eu NÃO PRECISO enviar os tipos para definir o generics de T,U
interface PessoaProtocolo<T = string, U = number> {
  nome: T;
  sobrenome: T;
  matricula: U;
}

// dessa forma PRECISO enviar os tipos para definir o generics de T,U
interface PessoaProtocolo2<T, U> {
  nome: T;
  sobrenome: T;
  matricula: U;
}

// dessa forma na sintaxe de type alias
type PessoaProtocolo3<T, U> = {
  nome: T;
  sobrenome: T;
  matricula: U;
};

// dessa forma eu NÃO PRECISO enviar os tipos para definir o generics de T,U
const aluno1: PessoaProtocolo = {
  nome: 'Mauricio',
  sobrenome: 'Maletta',
  matricula: 10002022,
};

// dessa forma PRECISO enviar os tipos para definir o generics de T,U
const aluno2: PessoaProtocolo2<string, string> = {
  nome: 'Mauricio',
  sobrenome: 'Maletta',
  matricula: '10002022',
};

const aluno3: PessoaProtocolo3<string, number> = {
  nome: 'Mauricio',
  sobrenome: 'Maletta',
  matricula: 10002022,
};

export { aluno1, aluno2, aluno3 };
