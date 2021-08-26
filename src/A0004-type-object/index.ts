const objetoA = {
  chaveA: 'valor A',
  chaveB: 'valor B',
};

objetoA.chaveA = 'Outro valor';
// objetoA.chaveC = 'Novo valor'; // dá erro porque a chaveC não é encontrado na inferência durante a criação do objeto

const objetoB: Record<string, unknown> = {}; // pode ser vazio, ou com qualquer atributo
// unknown vem antes do any e é muito mais abrangente

const objetoC: {
  chaveA: string;
  chaveB?: string; // valor opcional
  [key: string]: unknown; // index signature, pode ser qlqr chave string com qualquer valor atribuído
} = {
  chaveA: 'valor A',
};

objetoC.chaveC = 'Valor em um atributo index signature';

const objetoD: {
  readonly chaveA: string; // valor  não pode ser alteradao
} = {
  chaveA: 'valor A',
};

// const objetoE: {} = {}; // pode gerar bug, o eslint não permite
