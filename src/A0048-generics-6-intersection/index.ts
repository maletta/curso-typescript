// definição do generics depois do sinal de atribuição " = ", porque isso permite que
// a função possa inferir os tipos de dados
type Funcao = <T, U>(obj1: T, obj2: U) => T & U;

function unirObjetos<OB1, OB2>(obj1: OB1, obj2: OB2): OB1 & OB2 {
  return Object.assign({}, obj1, obj2);
}

// não passo os tipos de dados porque o typescript vai ser capaz de inferir a partir
// dos parâmetros passados
const unirObjetos2: Funcao = (o1, o2) => ({ ...o1, ...o2 });

const obj1 = {
  cidade: 'Osasco',
  estado: 'São Paulo',
  pais: 'Brasil',
};

const obj2 = {
  nome: 'Mauricio',
  idade: 25,
};

const arrayNumber = [1, 2, 3, 4];

console.log('unirObjetos() => ', unirObjetos(obj1, obj2));
console.log('unirObjetos2() => ', unirObjetos2(obj1, arrayNumber));

export { unirObjetos, unirObjetos2 };
