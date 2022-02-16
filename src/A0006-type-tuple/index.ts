// não existe no javascript
// uma espécie de array com valores específicios
// com os índices com valores específicos e tamanho fixo
// em python tupla é um valor imutável

const dadosCliente1: [number, string] = [1, 'Mauricio'];
dadosCliente1[0] = 100;
dadosCliente1[1] = 'Carlos';

const dadosCliente2: [number, string, string?] = [1, 'Mauricio']; // terceiro valor é opcional

const dadosCliente3: [number, string, ...string[]] = [
  1,
  'Mauricio',
  'vai virar rest 1',
  'vai virar rest 2',
]; // a partir do terceiro valor todos os elementos serão string
// interessante para determinar o tipo de dado dos dois primeiros índices e o restante tudo como string
console.log('dados do cliente 3', dadosCliente3);

// Array imutáveis com readonly
const imutavel1: readonly string[] = ['Mauricio', 'Maletta '];
const imutavel2: ReadonlyArray<string> = ['Mauricio', 'Maletta '];

// Não é permitido dar pop ou push porque são variáveis readonly
// imutavel1.pop("Novo valor")
// imutavel2.pop("Novo valor")

export default {
  dadosCliente1,
  dadosCliente2,
  dadosCliente3,
  imutavel1,
  imutavel2,
};
