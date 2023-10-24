// Crie uma classe Aluno que herda da classe Pessoa e tenha um atributo adicional matricula

import {Pessoa} from "./pessoa"

class Aluno extends Pessoa{
    matricula: number;
    notas:number[]; 
    constructor(nome:string, idade:number, email:string, matricula:number, notas:number[]) {
        super(nome, idade, email);
        this.matricula = matricula;
        this.notas = notas;
    }
    calculaMedia():number {
        let media:number=0;
        for (let nota of this.notas){
            media += nota;
        }
        return media/this.notas.length
    }
    get alunoNome(){
        return this.nome;
    }
}

const aluno1 = new Aluno("Frederico", 34, "fred@email.com", 532422,[4,5,3,3]);

console.log(aluno1);
console.log(aluno1.calculaMedia());

