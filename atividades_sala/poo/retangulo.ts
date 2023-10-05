// 3 - Crie uma classe Retangulo com os atributos largura e altura e metodos para calcular a area e o perimetro

class Retangulo {
    largura: number;
    altura: number;
    constructor(largura:number, altura:number){
        this.largura = largura;
        this.altura = altura;
    }
    get area() {
        return `A área do retângulo é de ${this.largura*this.altura} metros quadrados`;
    }
}

const area1 = new Retangulo(2,2);
console.log(area1.area);