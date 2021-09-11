// undefined normalmente são valores que o compilador define pra gente
// para variáveis que não tiveram seu valor inicializado
// null é um valor que o programador define quando quer atribuir
// um valor nulo a alguma variável

// variável opcional o compilador define como undefined
function factoryPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return {
    firstName,
    lastName,
  };
}

console.log(factoryPerson('Mauricio'));

export default {
  factoryPerson,
};
