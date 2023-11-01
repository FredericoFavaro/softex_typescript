///https://pt.stackoverflow.com/questions/25619/composi%C3%A7%C3%A3o-e-agrega%C3%A7%C3%A3o-quais-as-diferen%C3%A7as-e-como-usar

interface Pessoa {
    nome: string;
    idade: number;
    nacionalidade: string;
    id: number;

    respirar(): void;
    comer(): void;
    dormir(): void;
}

interface Funcionario extends Pessoa {
    funcao: string;
    tempo: number;
    matricula: number;

    trabalhar(): void;
    happyHour(): void;
}

export class funcionario implements Funcionario {
   

    respirar(): void{
        console.log("respirando");
    };
    comer(): void{console.log("respirando")};
    dormir(): void{console.log("respirando")};
    trabalhar(): void{console.log("respirando")};
    happyHour(): void{console.log("respirando")};
    constructor(nome: string, idade: number, nacionalidade: string, id: number, funcao: string, tempo: number, matricula: number){}
    }

let funcionario1 = new funcionario("joao",22,"Br",2141,"tester", 2,2424)
