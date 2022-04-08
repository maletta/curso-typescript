/**
 * Generics padrão que já existem no TypeScript
 */

import { Pessoa } from '../types/A0023-inheritance';

// Tipo record é um tipo usado pra criar objetos
// Primeiro argumento de generics é para o tipo da chave string
// Segundo argumento é para o valor do atributo da chave string | number
const objeto1: Record<string, string | number> = {
  nome: 'Mauricio',
  sobrenome: 'Maletta',
  idade: 30,
};

type PessoaProtocol = {
  nome?: string;
  sobrenome?: string;
  idade?: number;
};

type PessoaProtocolRequired = Required<PessoaProtocol>;
// Nesse caso, todos os atributos do objeto que eram opcional se tornam required
const objeto2: PessoaProtocolRequired = {
  nome: 'Mauricio',
  sobrenome: 'Maletta',
  idade: 30,
};

type PessoaProtocolPartial = Partial<PessoaProtocolRequired>;
// Nesse caso, todos os atributos do objeto que eram required se tornam opcional
const objeto3: PessoaProtocolPartial = {
  nome: 'Mauricio',
  sobrenome: 'Maletta',
  idade: 30,
};

// Neste caso, torna todos os atributos readonly e não é possível mudar os valores
// dos atributos
type PessoaProtocolReadonly = Readonly<PessoaProtocol>;

type PessoaProtocolPick = Pick<PessoaProtocolReadonly, 'nome' | 'sobrenome'>;

// Extract e Exclude

type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

// computado todos os tipos que estão em ABC, mas não estão em CDE
// no caso só o A | B
type TipoExclude = Exclude<ABC, CDE>;

// computado todos os tipos que estão em ABC e em CDE
// no caso ó C
type TipoExtract = Extract<ABC, CDE>;

type AccountFromMongo = {
  _id: string;
  nome: string;
  idade: number;
};

type AccountApi = {
  id: string;
  nome: string;
  idade: number;
};

// remove a chave "_id" e insere a chave id
// assim eu evito de duplicar as propriedades em AccountApi2, sendo que se mudar AccountFromMongo,
// não preciso alterar AccountApi2 porque já herda todos os atributos não excluídos de AccountFromMongo
type AccountApi2 = Pick<
  AccountFromMongo,
  Exclude<keyof AccountFromMongo, '_id'> & {
    id: string;
  }
>;

const accountMongo: AccountFromMongo = {
  _id: 'asdasd090-asdasdasdas123-asdasdasdasd',
  nome: 'Mauricio',
  idade: 25,
};

// mapeando objeto que vem do mondo, retirando _id
function mapAccount(account: AccountFromMongo): AccountApi {
  const { _id, ...accountData } = account;
  return { ...accountData, id: _id };
}

function mapAccount2(account: AccountFromMongo): AccountApi2 {
  const { _id, ...accountData } = account;
  return { ...accountData, id: _id };
}

console.log('mapAccount ', mapAccount(accountMongo));
console.log('mapAccount2 ', mapAccount2(accountMongo));

export { objeto1, objeto2, objeto3, mapAccount };
