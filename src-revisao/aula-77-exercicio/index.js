// 705.484.450-52 070.987.720-03
/*
7x  0x 5x 4x 8x 4x 4x 5x 0x
10  9  8  7  6  5  4  3  2
70  0  40 28 48 20 16 15 0 = 237

11 - (237 % 11) = 5 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.

7x  0x 5x 4x 8x 4x 4x 5x 0x 5x
11 10  9  8  7  6  5  4  3  2
77  0  45 32 56 24 20 20 0  10 = 284

11 - (284 % 11) = 2 (Primeiro dígito)
Se o número digito for maior que 9, consideramos 0.
*/

// minha resolução  de criar uma solução para validar cpf
const cpf = '705.484.450-52';
const cpfLimpo = cpf.replace(/\D+/g, '');
const cpfArray = Array.from(cpfLimpo);

function obtemSoma(array = []) {
  const soma = array.reduce((acc, val, index) => {
    return acc + Number(val) * (array.length + 1 - index);
  }, 0);

  const digitoCalculado = 11 - (soma % 11);

  return digitoCalculado > 9 ? 0 : digitoCalculado;
}

function validaCpf(array = []) {
  const cpfSemDigitosValidadores = array.slice(0, -2); // (inicio, fim) === (0, array.lenght - 2)
  const primeiroDigito = obtemSoma(cpfSemDigitosValidadores);
  const segundoDigito = obtemSoma([
    ...cpfSemDigitosValidadores,
    primeiroDigito,
  ]);

  const digitosValidadores = array.slice(-2).join('');

  const digitosGerados = `${primeiroDigito}${segundoDigito}`;

  return Number(digitosValidadores) === Number(digitosGerados);
}

console.log(validaCpf(cpfArray));
