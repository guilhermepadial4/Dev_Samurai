function Conta (agencia, conta, saldo) {
    this.agencia = agencia;
    this.conta = conta;
    this.saldo = saldo;
}

Conta.prototype.sacar = function(valor) {
if (this.saldo < valor) {
    console.log(`Saldo Insuficiente: R$ ${this.saldo}`);
    return;
};

this.saldo -= valor
this.verSaldo();
};

Conta.prototype.depositar = function(valor) {
    this.saldo += valor;
    this.verSaldo();
};

Conta.prototype.verSaldo = function() {
    console.log(`Ag/c: ${this.agencia}/${this.conta} || Saldo: R$ ${this.saldo.toFixed(2)}`);
};

const conta1 = new Conta(133, 25689-8, 250);
const conta2 = new Conta(156, 25486-4, 15000);


function CC(agencia, conta, saldo, limite) {
    Conta.call(this, agencia, conta, saldo);
    this.limite = limite;
}

CC.prototype = Object.create(Conta.prototype);
CC.prototype.constructor = CC;

CC.prototype.sacar = function(valor) {
    if(valor > (this.saldo + this.limite)) {
        console.log(`Saldo insuficiente: ${this.saldo}`);
        return;
    }

    this.saldo -= valor;
    this.verSaldo();
};

const cc = new CC(78, 48415-4, 0, 100);
cc.sacar(110);

function CP(agencia, conta, saldo) {
    Conta.call(this, agencia, conta, saldo);
}
CP.prototype = Object.create(Conta.prototype);
CP.prototype.constructor = CP;

const cp = new CP(12, 33, 0)