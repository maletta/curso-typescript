// assertions são types coertions
// ou também conhecido como type casting

const body1 = document.querySelector('body');
// body pode ser um objeto do tipo HTMLBodyElement ou null
// então é preciso fazer uma verificação antes de usar o objeto

/* Recomendado - Validação condicional */
// Condicional - verfica se não é null e nem undefined
if (body1) body1.style.background = 'red';

/* Não Recomendado - Non-null assertion (!) */
// esse assertion diz que o valor dele não será null
// elimina null e undefined como possíveis valores
// neste caso não é aconselhável usar
// Non-null assertion (!) - programdor afirma que não é null e nem undefined, pode quebrar caso o programador erre
const body2 = document.querySelector('body')!;

/* Recomendado */
// Type Assertion
// é utlizado quando tenho certeza que o objeto existe e que vai ser desse tipo
const body3 = document.querySelector('body') as HTMLBodyElement;
body3.style.background = 'red';

/* Recomendado */
// HTMLElement
// por padrão ele não sabe que tipo de elemento é então posso usar um Assertion Type
// caso eu tenha certeza do tipo de elemento que vai ser eu faço um Assertion Type
const input = document.querySelector('.input');
const inputWithAssert = input as HTMLInputElement; // Assertion Type para HTMLInputElement
inputWithAssert.value = 'Qualquer valor';
inputWithAssert.focus();
// Estou fazendo um Assertion Type para HTMLInputElement que é tipo derivado de HTMLInputElement

/* Não Recomendado */
// Assertions muito improvável, subimos o tipo do elemento pra unknown para depois convertê-lo para number
// neste caso generalizamos body4 para unknown que é o pai de todos os tipos
// depois especificamos o body4 para um tipo específico que é o number
const body4 = document.querySelector('body') as unknown as number;

export default {
  body1,
  body2,
  body3,
  body4,
  input,
  inputWithAssert,
};
