// 5 - Crie uma classe ContaBancaria com os atributos saldo e numeroConta e metodos para depositar, sacar e verificar o saldo

class ContaBancaria {
    saldo:number;
    numeroConta:number;
    constructor(saldo:number, numeroConta:number){
        this.saldo = saldo;
        this.numeroConta = numeroConta;
    }
    get verificarSaldo():number{
        return this.saldo;
    }
    set depositar(valor:number){
        this.saldo+=valor;
    }

    set sacar(valor:number){
        this.saldo-=valor;
    }
}

const cliente1 = new ContaBancaria(0,444);
console.log(cliente1.verificarSaldo);
cliente1.depositar=50;
console.log(cliente1.verificarSaldo);
cliente1.depositar=3.5;
console.log(cliente1.verificarSaldo);
cliente1.sacar=10;
console.log(cliente1.verificarSaldo);
