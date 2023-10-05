// 6 - Crie uma classe Produto com os atributos nome, preco e quantidade e metodos para calcular o valor total(preco*quantidade)

class Produto{
    nome:string;
    preco:number;
    quantidade:number;
    constructor(nome:string, preco:number, quantidade:number){
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }
    valorStock(){
        console.log(`${this.nome}\nValor: ${this.preco}\nQuantidade: ${this.quantidade}\nValor total: ${this.preco*this.quantidade}`);
    }
}

new Produto("janela", 400,50).valorStock();

const produto1 = new Produto("Tijolo", 4,150);
produto1.valorStock()