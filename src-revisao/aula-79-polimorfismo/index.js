// exemplo de método polimórfico por sobrescrita
// não é possível fazer método polimórfico por sobrecarga

// Superclass

function Conta(agencia, conta, saldo) {
  this.agencia = agencia;
  this.conta = conta;
  this.saldo = saldo;
}

Conta.prototype.sacar = function (valor) {
  if (valor <= this.saldo) {
    this.saldo -= valor;
    this.verSaldo();
    return;
  }

  console.log(
    `Conta ${this.agencia}/${this.conta} possui saldo insuficiente: ${this.saldo}`,
  );
};

// método depositar
Conta.prototype.depositar = function (valor) {
  this.saldo += valor;
  this.verSaldo();
};

Conta.prototype.verSaldo = function () {
  console.log(
    `
    Ag/c ${this.agencia}/${this.conta} | Saldo: R$ ${this.saldo.toFixed(2)}
    `,
  );
};

const conta1 = new Conta(11, 22, 10);
console.log('conta 1');
conta1.depositar(11);
conta1.sacar(10);
conta1.sacar(10);
conta1.sacar(10);

// Criando novo modelo
// Conta Corrente possui sobrescrita de método, herdando Conta

function ContaCorrente(agencia, conta, saldo, limite) {
  Conta.call(this, agencia, conta, saldo);
  this.limite = limite;
}

ContaCorrente.prototype = Object.create(Conta.prototype);
ContaCorrente.prototype.constructor = ContaCorrente;

// override ou sobrescrita de método
// estamos sobrescrevendo o método sacar do prototype, polimorfismo por sobrescrita
ContaCorrente.prototype.sacar = function (valor) {
  if (valor <= this.saldo + this.limite) {
    this.saldo -= valor;
    this.verSaldo();
    return;
  }

  console.log(
    `Conta ${this.agencia}/${this.conta} possui saldo insuficiente: ${this.saldo}`,
  );
};

const cc = new ContaCorrente('bra', 'ccorrente-01', 0, 100);
cc.depositar(100);
cc.sacar(100);
cc.sacar(100);
cc.sacar(1);

// Criando novo modelo
// Conta Poupanca possui polimorfismo, herdando Conta

function ContaPoupanca(agencia, conta, saldo) {
  Conta.call(this, agencia, conta, saldo);
}

ContaPoupanca.prototype = Object.create(Conta.prototype);
ContaPoupanca.prototype.constructor = ContaPoupanca;

const cp = new ContaPoupanca('bra', 'cpoupança-99', 0);
cp.depositar(100);
cp.sacar(88);
cp.sacar(100);
cp.sacar(1);
