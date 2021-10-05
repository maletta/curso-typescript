// classes abstratas para ter um Tipo, todas as classes que a estenderem
// teram o mesmo tipo em comum
// Todas as classes que a estenderem terão os mesmos métodos

// Classes abstratas não podem ser instanciadas, mas cria um tipo e pode ser extendida
// atributos e métodos abstratos não precisam de valor e nem corpo
abstract class Personagem {
  protected abstract emoji: string;

  constructor(
    protected nome: string,
    protected ataque: number,
    protected vida: number,
  ) {}

  public atacar(personagem: Personagem): void {
    console.log(`${this.nome} está atacando...`);
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
  protected emoji = '\u{1F9DD}';
  public bordao(): void {
    console.log(this.emoji + ' - GUEEERREIRAAAA AO ATAQUE!!');
  }
}

class Monstro extends Personagem {
  protected emoji = '\u{1F9DF}';

  public bordao(): void {
    console.log(this.emoji + ' - ARRRRRRRGHHHHH MONSTERSSS!');
  }
}

const guerreira = new Guerreira('Guerreira', 100, 1000);
const guerreira2 = new Guerreira('Guerreira2', 100, 1000);
const monstro = new Monstro('Monstro', 87, 1000);

guerreira.atacar(monstro);
guerreira.atacar(monstro);
guerreira.atacar(monstro);
monstro.atacar(guerreira);
guerreira.atacar(guerreira2);
guerreira2.atacar(guerreira2);

export default { Personagem, Guerreira, Monstro };
