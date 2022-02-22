const objetoA = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'Outro valor';
// objetoA.chaveC = 'Novo valor'; // dá erro porque a chaveC não é encontrado na inferência durante a criação do objeto

// Record é uma maneira de criar objetos e limitar suas chaves
const objetoB: Record<string, unknown> = {
  2: 12,
  nome: 'mauricio',
  [Symbol('meu-simbolo')]: () => {
    console.log('funcao qualquer');
  },
};
// pode ser vazio, ou com qualquer atributo, pode ter qualquer chave que seja uma string, valor da propriedade é do tipo unknown
// unknown vem antes do any e é muito mais abrangente
// explicação do type Records
// https://stackoverflow.com/questions/51936369/what-is-the-record-type-in-typescript

const objetoC: {
  chaveA: string;
  chaveB?: string; // valor opcional
  [key: string]: unknown; // index signature, pode ser qlqr chave string com qualquer valor atribuído
} = {
  chaveA: 'valor A',
  ['chave-string-qualquer']: 'valor qualquer',
};

objetoC.chaveC = 'Valor em um atributo index signature'; // chaveC não foi definida no tipo, mas pode ser criada

const objetoD: {
  readonly chaveA: string; // valor  não pode ser alteradao
} = {
  chaveA: 'valor A',
};

// const objetoE: {} = {}; // pode gerar bug, o eslint não permite
export { objetoA, objetoB, objetoC, objetoD };
