/**
 * associação relação mais fraca, apenas usa
 *
 * agregação relação mais forte, precisa da classe
 *
 * composição relação muito mais forte, classe vai fazer parte da outra
 *
 * No exemplo, se Carro deixar de existir, motor deixa de existir,
 * no caso Motor vai ser instanciado dentro de Carro
 */

export class Carro {
  private readonly motor: Motor = new Motor();

  ligar(): void {
    this.motor.ligar();
  }

  acelerar(): void {
    this.motor.acelerar();
  }

  parar(): void {
    this.motor.parar();
  }

  desligar(): void {
    this.motor.desligar();
  }
}

export class Motor {
  ligar(): void {
    console.log('Motor está ligado...');
  }

  acelerar(): void {
    console.log('Motor está acelerando...');
  }

  parar(): void {
    console.log('Motor está parando...');
  }

  desligar(): void {
    console.log('Motor está desligando...');
  }
}

// ao limpar o objeto Carro da memória, o objeto Motor será limpado também

const carro = new Carro();
carro.ligar();
carro.acelerar();
carro.parar();
carro.parar();
