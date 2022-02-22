/**
 * associação relação mais fraca, apenas usa
 *
 * agregação relação mais forte, precisa da classe
 *
 * composição relação muito mais forte, classe vai fazer parte da outra
 */

// herança é um tipo de ligação, ligação "é um"
// ex: se Aluno extende Pessoa, então aluno é uma pessoa

// associação é uma espécie de contrato onde a ligação é feita através da
// implementação dos métodos de uma interface
// sua relação ou ligação é uma associação é tipo "tem um"
// ex: se um escritor implementa uma ferramenta, escritor tem uma ferramentas

// é uma associação fraca
// ps: estudar mais do porque ser uma associação fraca. Será q é pq o programa não quebra ?
// acho que é uma ligação fraca porque Escritor não implementa Ferramenta, apenas tem um

type FerramentaType = Ferramenta | null;

export class Escritor {
  private _ferramenta: FerramentaType = null;
  constructor(private _nome: string) {}

  set ferramenta(ferramenta: FerramentaType) {
    this._ferramenta = ferramenta;
  }

  get ferramenta(): FerramentaType {
    return this._ferramenta;
  }

  escrever(): void {
    if (this.ferramenta === null) {
      console.log('Não posso escrever sem ferramenta...');
      return;
    }
    this.ferramenta.escrever();
  }
}

export abstract class Ferramenta {
  constructor(private _nome: string) {}
  abstract escrever(): void;

  get nome(): string {
    return this._nome;
  }
}

export class Caneta extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está escrevendo à tinta...`);
  }
}

export class MaquinaEscrever extends Ferramenta {
  escrever(): void {
    console.log(`${this.nome} está digitando...`);
  }
}

const caneta = new Caneta('caneta azul ');
const maquinaEscrever = new MaquinaEscrever('notebook dell');

// escritor não depende das ferramentas para ser criado
const escritor = new Escritor('Mauricio');

escritor.escrever(); // sem ferramenta associada, mas o escritor ainda funciona
console.log('\ntrocando ferramenta');
escritor.ferramenta = caneta; // escritor pode ser associado a uma ferramenta
escritor.escrever();
console.log('\ntrocando ferramenta');
escritor.ferramenta = maquinaEscrever; // escritor pode ser associado a uma ferramenta
escritor.escrever();
