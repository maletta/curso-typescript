type Veiculo = {
  marca: string;
  ano: string;
};

// Objetivo de Car é espelhar os mesmo atributos de Veiculo (no caso marca e ano)
// assim eu pego o tipo da propriedade entre as chaves
// ao mudar o tipo em Veículo, muda em Car também
type Car = {
  brand: Veiculo['marca'];
  year: Veiculo['ano'];
  name: string;
};

const carro: Car = {
  brand: 'Ford',
  year: '2022',
  name: 'KA',
};

console.log(carro);
