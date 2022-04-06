const arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]; // arreay number por inferência
const arrayNumberOrString = [1, 2, 3, 4, 5, 6, 7, 'texto']; // array number | string por inferência

// por inferênca já sabe que value é do tipo number
const arrayFiltrado = arrayNumber.filter((value) => value < 5);
console.log('array filtrado original', arrayFiltrado);

/**
 * Criação de um filter genérico
 */

// vou receber um tipo genérico U de algum lugar
type FilterCallback<U> = (value: U, index?: number, array?: U[]) => boolean;

// vou receber o tipo genérico T de algum lugar
// o valor genérico T será definido pelo valor do parâmetro "array"
// FilterCallback recebe um valor genérico dependendo do tipo do "array",
// FilterCallback em sua criação utiliza o tipo do array T como um tipo U,
// o nomes dos generics pouco importam
function meuFiltro<T>(array: T[], callbackfn: FilterCallback<T>): T[] {
  const novoArray = [];

  for (let i = 0; i < array.length; i++) {
    if (callbackfn(array[i])) {
      novoArray.push(array[i]);
    }
  }

  return novoArray;
}

const arrayNumber2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const arrayFiltrado2 = meuFiltro(arrayNumber2, (value) => {
  return value < 5;
});

console.log('array filtrado meu filtro ', arrayFiltrado2);

export { arrayNumber, arrayNumberOrString, meuFiltro };
