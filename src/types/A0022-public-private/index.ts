class Empresa {
  // é preciso inicializar o valor fora ou dentro do construtor
  // modificador public é o padrão
  public readonly nome: string; // readonly o valor é atribuido na inicialização

  // Classes também são tipos
  // array colaboradores pode ser modificado com push
  // porém array colaboradores não pode ter nova atribuição
  private readonly colaboradores: Colaborador[] = [];

  // array colaboradores2 não pode ser modificado com push
  // porém array colaboradores2 não pode ter nova atribuição
  private readonly colaboradores2: readonly Colaborador[] = [];

  protected readonly cnpj: string;

  constructor(nome: string, cnpj: string) {
    this.nome = nome;
    this.cnpj = cnpj;
  }

  public adicionaColaborador(colaborador: Colaborador): void {
    this.colaboradores.push(colaborador);
  }

  public mostrarColaboradores(): void {
    for (const colaborador of this.colaboradores) {
      console.log(colaborador);
    }
  }
}

class Colaborador {
  // atalhos para criar atributos, no caso modificadores como public ou private
  // precisam ser explícitos
  constructor(
    public readonly nome: string,
    public readonly sobrenome: string,
  ) {}
}

const empresa1 = new Empresa('Facebook', '11.111.111/0001-11');
const colaborador1 = new Colaborador('Mauricio', 'Otávio');
const colaborador2 = new Colaborador('Luiz', 'Miranda');
const colaborador3 = new Colaborador('Maria', 'Vieira');

empresa1.adicionaColaborador(colaborador1);
empresa1.adicionaColaborador(colaborador2);
empresa1.adicionaColaborador(colaborador3);
// Usando structural typing, só poder ter os mesmo atributos que Colaborador
empresa1.adicionaColaborador({
  nome: 'Chave nome',
  sobrenome: 'Chave sobrenome',
});

console.log(empresa1);

empresa1.mostrarColaboradores();

export { Empresa, empresa1 };
