/**
 * o Escritor ele instancia uma Ferramenta, mas ele poderia instanciar uma
 * Caneta ou uma MaquinaEscrever.
 * Então no caso o Escritor fica dependente da classe Ferramenta, e a
 * classe Caneta e MaquinaEscrever ficam dependentes de Ferramenta também.
 *
 * Assim o Escritor não fica dependente de Caneta e nem de MaquinaEscrever.
 *
 * Escritor, Caneta, MaquinaEscrever ficam dependentes de uma abstração, isso
 * é inversão de dependência
 *
 * Escritor não sabe nada sobre Caneta ou MaquinaEscrever, quando menos Escritor
 * precisar saber sobre essas classes, melhor será o nível de abstração e menos
 * dependência. Maiores são as chances de reaproveitamento de código.
 */
