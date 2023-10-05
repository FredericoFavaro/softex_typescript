// Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula

import {Pessoa} from "./pessoa"

class Aluno extends Pessoa{
    matricula: number;
    constructor(nome:string, idade:number, email:string, matricula:number) {
        super(nome, idade, email);
        this.matricula = matricula;
    }
}

const aluno1 = new Aluno("Frederico", 34, "fred@email.com", 532422);

console.log(aluno1);