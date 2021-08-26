/* eslint-disable @typescript-eslint/no-unused-vars */

function semRetorno(...args: string[]): void {
  console.log(args.join(' '));
}

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Otavio',

  exibirNome(): void {
    console.log(this.nome + ' ' + this.sobrenome);
  },
};

semRetorno('Mauricio', 'Maletta');
pessoa.exibirNome();

export { pessoa };
