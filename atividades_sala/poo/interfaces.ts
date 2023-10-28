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
    constructor( 
        nome: string;
        idade: number;
        nacionalidade: string;
        id: number;
        funcao: string;
        tempo: number;
        matricula: number;
    )
    }

funcionario1 = new funcionario("joao")