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
