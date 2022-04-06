/**
 *  Generics com promises
 */

import { resolve } from 'path';

// automatiacamente já infere como Promise<number> porque retorna 1
async function promiseAsyncNumber() {
  return 1;
}

promiseAsyncNumber().then((resultado) =>
  console.log('retorno promiseAsyncNumber + 1 = ', resultado + 1),
);

// Promise de api não tipada
function promiseDeAPI() {
  // value da promise é do tipo unknown porque não é possível inferir o valor que vem de uma api
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
}

promiseDeAPI().then((resultado) => {
  // value da promise é do tipo unknown porque não é possível inferir o valor que vem de uma api
  // então fazemos type guard
  if (typeof resultado === 'number') {
    console.log('retorno promiseDeAPI + 1 = ', resultado + 1);
  }
});

// Promise de api tipada
function promiseComTipo(): Promise<number> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, 1500);
  });
}

// não é preciso fazer type guard pois o resultado foi tipada com Promise<number>
promiseComTipo().then((resultado) =>
  console.log('retorno promiseComTipo + 1 = ', resultado + 1),
);
