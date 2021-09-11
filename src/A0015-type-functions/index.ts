// importância de ter tipado a função de callback
// assim eu consigo usar todas as funções de string dentro do callback pq ele
// sabe que vai receber uma string
// então o mapStrings sempre sabe que a função callback irá receber um item string

type MapStringsCallback = (item: string) => string;

function mapStrings(array: string[], callbackfn: MapStringsCallback): string[] {
  const newArray: string[] = [];

  for (let index = 0; index < array.length; index++) {
    newArray.push(callbackfn(array[index]));
  }
  return newArray;
}

const abc = ['a', 'b', 'c'];

const abcMapped = mapStrings(abc, (item) => {
  return item.toUpperCase();
});

console.log(abc);
console.log(abcMapped);

export default {
  mapStrings,
  abcMapped,
};
