// como manipular configurações do objeto
// para manipular regras para o objeto

// defineProperty

function Produto(nome, preco, estoque) {
  this.nome = nome; // atributo público
  this.preco = preco; // atributo público

  Object.defineProperty(
    this, // indica que quero alterar as configurações deste objeto
    'estoque', // indica a propriedade que estou alterando
    {
      enumerable: true, // define se o atributo é visível (for in, Object.keys, console.log)
      value: estoque, // indica o valor inicial do atributo
      writable: false, // indica se o valor pode ser alterado
      configurable: false, // indica se pode apagar a chave
      // e se pode reconfigurar com outro Object.definePropety
    },
  );
}

const p1 = new Produto('Camiseta', 20, 3);

p1.estoque = 100; // se writable for false não será alterado
delete p1.estoque; // se configurable for false não surte efeito

console.log('Usando defineProperty');
console.log(p1);
console.log('----------------------');
console.log();

// defineProperties

function Produto2(nome, preco, estoque) {
  // agora tranfomei o atributo estoque em uma função
  Object.defineProperty(
    this, // indica que quero alterar as configurações deste objeto
    'estoque', // indica a propriedade que estou alterando
    {
      enumerable: true, // define se o atributo é visível (for in, Object.keys, console.log)
      value: () => estoque, // indica o valor inicial do atributo
      writable: false, // indica se o valor pode ser alterado
      configurable: false, // indica se pode apagar a chave
      // e se pode reconfigurar com outro Object.definePropety
    },
  );

  // diferença é que é possível configurar mais de um atributo por ver dentro de chaves { }
  Object.defineProperties(
    this, // indica que quero alterar as configurações deste objeto
    {
      nome: {
        enumerable: true, // define se o atributo é visível (for in, Object.keys, console.log)
        value: nome, // indica o valor inicial do atributo
        writable: false, // indica se o valor pode ser alterado
        configurable: false, // indica se pode apagar a chave
        // e se pode reconfigurar com outro Object.definePropety
      },
      preco: {
        enumerable: true, // define se o atributo é visível (for in, Object.keys, console.log)
        value: preco, // indica o valor inicial do atributo
        writable: false, // indica se o valor pode ser alterado
        configurable: false, // indica se pode apagar a chave
        // e se pode reconfigurar com outro Object.definePropety
      },
    },
  );
}

const p2 = new Produto2('Camiseta', 20, 3);

console.log('Usando defineProperty');
console.log(p2);
console.log(p2.estoque());
console.log('----------------------');
console.log();
