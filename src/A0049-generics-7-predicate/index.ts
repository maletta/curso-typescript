/**
 * Predicate - predição de tipos
 */

// value is number é um predicate
// quando o valor da função retornada for true
// então value será number
function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

console.log('isNumber(123))', isNumber(123));
console.log('isNumber("teste")', isNumber('teste'));

function soma<T>(...args: T[]): number {
  const retorno = args.reduce((sum, value) => {
    if (isNumber(sum) && isNumber(value)) {
      return sum + value;
    }

    return sum;
  }, 0);

  return retorno;
}

console.log(soma(1, 2, 3));

// não funciona porque o spread operator não funciona aqui
// console.log(soma(1, 2, 3, '2'));

// mas se eu colocar tudo em array funciona
console.log(soma(...[1, 2, 3, '2', 1]));

console.log(soma('a', 'b', 'c'));

export { isNumber, soma };
