/**
 * associação relação mais fraca, apenas usa
 *
 * agregação relação mais forte, precisa da classe
 *
 * composição relação muito mais forte, classe vai fazer parte da outra
 */

/**
 * agregação de classes é um tipo de ligação entre classes
 * é uma relação mais forte, onde a classe que possui a classe agregada
 * precisa conhecer mais métodos da classe agregada, ele precisa mais da classe
 * agregada para funcionar
 *
 * A classe pode ter 1..N objetos da classe agregada
 *
 * Ex: CarrinhoDeCompras pode agregar 1..N Produtos
 */

export class CarrinhoDeCOmpras {
  private readonly produtos: Produto[] = [];

  inserirProdutos(...produtos: Array<Produto>): void {
    for (const produto of produtos) {
      this.produtos.push(produto);
    }
  }

  quantidadeProdutos(): number {
    return this.produtos.length;
  }

  valorTotal(): number {
    return this.produtos.reduce(
      (soma, produto): number => soma + produto.preco,
      0,
    );
  }
}

export class Produto {
  constructor(public nome: string, public preco: number) {}
}

const produto1 = new Produto('Camiseta', 49.9);
const produto2 = new Produto('Caneca', 20);
const produto3 = new Produto('Caneta', 2);

const carrinhoDeCompras = new CarrinhoDeCOmpras();
carrinhoDeCompras.inserirProdutos(produto1, produto2, produto3);

console.log(carrinhoDeCompras);
console.log('Quantidade produtos ', carrinhoDeCompras.quantidadeProdutos());
console.log('Valor total ', carrinhoDeCompras.valorTotal());
