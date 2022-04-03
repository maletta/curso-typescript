/**
 * Encadeamento opcional e operador de coalescência nula
 *
 */

type Documento = {
  titulo: string;
  texto: string;
  data?: Date;
};

const documento: Documento = {
  titulo: 'O titulo',
  texto: 'O texto,',
};

// encadeamento opcional do js
// não chama método de dentro de undefined, já retorna undefined e evita o erro
console.log('atributo undefined ', documento.data?.toDateString());

// operador de coalescência nula, validar se o termo na esquerda é um não valor
// os não valores são null e undefined
// se existe valor, executa o que tem na esquerda de ??, caso contrário, executa a direita de ??
console.log(
  'atributo undefined ',
  documento.data?.toDateString() ?? 'Ixi, não existe data.',
);

console.log('\n ------------------ \n');

console.log(undefined ?? 'undefined é um não valor'); // não valor
console.log(null ?? 'null é um não valor');
console.log(0 ?? '0 é um não valor');
console.log(false ?? 'false é um não valor');
console.log('' ?? "'' é um não valor");
