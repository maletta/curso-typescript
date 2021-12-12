/*

Javascript é baseado em protótipos para pasasr propriedades e métodos
de um objeto para o outro.

Definição de protótipo
Protótipo é o termo usado para se referir ao que foi criado pela primeira vez,
servindo de modelo ou molde para futuras produções.

Todos os objetos tem uma referência interna para um protótipo (__proto__)
que vem da propriedade prototype da função construtora que foi usada
para criá-lo. Quando tentamos acessar um membro de um objeto, primeiro o motor
do JS vai tentar enconrar esse membro no próprio objeto e depois a cadeia de
protótipos é usada até a  o topo (null) até encontrar (ou não) tal membro.
*/

// Construtora -> molde (classe)
function Pessoa(nome, sobrenome) {
  this.nome = nome;
  this.sobrenome = sobrenome;
  // ao comentar essa função vai usar o método do prototype
  // ao comentar o método não será criado para cada objeto, será criado só
  //para o prototype, economizando recursos da memória
  this.nomeCompleto = () =>
    'função do método ' + this.nome + ' ' + this.sobrenome;
}

Pessoa.prototype.nomeCompleto = function () {
  return 'função do prototype ' + this.nome + ' ' + this.sobrenome;
};

// instância
const pessoa1 = new Pessoa('Luiz', 'O.'); // <- Pessoa = Função Construtora
const pessoa2 = new Pessoa('Luiz', 'A.'); // <- Pessoa = Função Construtora

console.dir(pessoa1);
console.dir(pessoa2);

console.log('---------\n');
console.log('Prototype');

console.dir(Pessoa.prototype === pessoa1.__proto__);
console.dir(pessoa1.nomeCompleto());
console.dir(pessoa1.__proto__.nomeCompleto());
console.dir(Pessoa.prototype.nomeCompleto());
