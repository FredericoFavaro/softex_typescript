// Crie uma classe Circulo com o atributo raio e metodo para calcular a area e a circunferencia

class Circulo {
    raio:number;
    constructor(raio:number){
        this.raio = raio;
    }
    area(){
        return 3.14*(this.raio**2);
    }
    circunferencia(){
        return 3.14*(this.raio*2);
    }
}

const circulo = new Circulo(5);
console.log(circulo.area(), circulo.circunferencia());