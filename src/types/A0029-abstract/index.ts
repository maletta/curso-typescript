// classes abstratas para ter um Tipo, todas as classes que a estenderem
// teram o mesmo tipo em comum
// Todas as classes que a estenderem terão os mesmos métodos

// Classes abstratas não podem ser instanciadas, mas cria um tipo e pode ser extendida
// atributos e métodos abstratos não precisam de valor e nem corpo
abstract class Personagem {
  protected abstract emoji: string;

  // classe não é instanciada, mas as regras do construtor podem ser definidas
  // classes que extenderem Personagem vão utilizar de seu construtor
  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  public atacar(personagem: Personagem): void {
    console.log(
      `${this.emoji} - ${this.nome} está atacando ${personagem.emoji} - ${personagem.nome}`,
    );
    this.bordao();
    if (this !== personagem) {
      personagem.perderVida(this.ataque);
    } else {
      console.log('Não pode atacar a si');
    }
  }

  public perderVida(forcaAtaque: number): void {
    this.vida -= forcaAtaque;
    console.log(
      `${this.emoji} - ${this.nome} agora tem ${this.vida} de vida...`,
    );
  }

  public abstract bordao(): void;
}

class Guerreira extends Personagem {
  public bordao(): void {
    console.log(this.emoji + ` - ${this.nome} AO ATAQUE`);
  }

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
    protected emoji: string,
  ) {
    super(nome, ataque, vida);
    this.emoji = emoji;

    // por possuir construtor precisa chamar o super
    // por chamar o super. é preciso mandar os 3 parâmetros que super classe necessita
    // precisa também em algum momento definir o atributo emoji que é o único abstrato
  }
}

class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}'; // é preciso implementar atributo abstrato emoji

  // atributos nome, ataque e vida já são solicitados no new pelo construtor da super classe

  // por não possuir construtor, usa o construtor da super classe

  public bordao(): void {
    console.log(this.emoji + ' - ARRGHHH MONSTRO AO ATAQUE!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000, '\u{1F478}');
const guerreira2 = new Guerreira('Guerreira2', 100, 1000, '\u{1F483}');
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(guerreira2);
guerreira2.atacar(guerreira2);

console.log('--------------------');
console.log(guerreira);
console.log(guerreira2);
console.log(monstro);
export default { Personagem, Guerreira, Monstro };
