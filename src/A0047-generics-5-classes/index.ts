export class Pessoa<T, U> {
  constructor(public nome: T, public idade: U) {}
}

// já fez a inferência automaticamente
const pessoa1 = new Pessoa('Mauricio', 25);
const pessoa2 = new Pessoa(['Mauricio'], 25);
const pessoa3 = new Pessoa(['Mauricio'], { idade: 30 });

const pessoa4 = new Pessoa<string, number>('Mauricio', 25);

/**
 * Estrutura de pilha, stack
 */

export class Pilha<T> {
  private contador = 0;
  // key signature
  private elementos: { [k: number]: T } = {};

  estaVazia(): boolean {
    return this.contador === 0;
  }

  push(elemento: T): Pilha<T> {
    this.elementos[this.contador] = elemento;
    this.contador += 1;

    return this;
  }

  pop(): T | null {
    if (!this.estaVazia()) {
      this.contador -= 1;
      const elementoRetornado = this.elementos[this.contador];
      delete this.elementos[this.contador];
      return elementoRetornado;
    }

    return null;
  }

  tamanho(): number {
    return this.contador;
  }

  mostrarPilha(nome?: string): void {
    if (nome) console.log(`Pilha ${nome} `);
    for (const chave in this.elementos) {
      console.log(this.elementos[chave]);
    }
  }
}

// assim não tem inferência, fica uma pilha do tipo unknown
const pilha1 = new Pilha();
pilha1.push(1).push(2).push(3).push(4);
pilha1.mostrarPilha('pilha1 ');
const elemento1 = pilha1.pop();
console.log('pilha1.pop() - tipo unknown', elemento1);

console.log('\n');

// agora o typescript entende que é uma pilha de number
const pilha2 = new Pilha<number | string>();
pilha2.push(1).push(2).push(3).push('penta campeão').push('vai Brasil').push(4);
pilha2.mostrarPilha('pilha2 ');
const elemento2 = pilha2.pop();
console.log('pilha2.pop() => tipo number | string => ', elemento2);

while (!pilha2.estaVazia()) {
  console.log('Esvaziando pilha ', pilha2.pop());
}

export { pessoa1, pessoa2, pessoa3, pessoa4 };
