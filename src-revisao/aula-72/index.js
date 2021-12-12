// defineProperty - Getters e Setters

// Podem ser usados pra simular atributos dentro dos objetos
// Também são usados para proteger os objetos

function Produto(nome, preco, estoque) {
  this.nome = nome; // atributo público
  this.preco = preco; // atributo público
  let estoquePrivado = estoque;

  Object.defineProperty(
    this, // indica que quero alterar as configurações deste objeto
    'estoque', // indica a propriedade que estou alterando
    {
      enumerable: true, // define se o atributo é visível (for in, Object.keys, console.log)
      // value: estoque, // indica o valor inicial do atributo
      // writable: true, // indica se o valor pode ser alterado
      configurable: true, // indica se pode apagar a chave
      // e se pode reconfigurar com outro Object.definePropety
      get: function () {
        return estoquePrivado;
      },
      set: function (valor) {
        if (typeof valor !== 'number') {
          throw new TypeError('Valor inesperado para estoque');
        }

        estoquePrivado = valor;
      },
    },
  );
}

const p1 = new Produto('Camiseta', 20, 3);

console.log('Usando defineProperty');
console.log(p1);
console.log('estoque ', p1.estoque); // agora é preciso executar o Getter pra apresentar o valor
p1.estoque = 11;

try {
  p1.estoque = 'Um texto para o estoque';
} catch (e) {
  console.log(e.message);
}

console.log('estoque ', p1.estoque);

console.log('----------------------');
console.log();
