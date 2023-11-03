// Crie uma variavel para cada tipo de dado

let idade: number = 10;

let vazio: null = null;

let nome: string = "Frederico";

let certo: boolean = true;

let indefinido: undefined;

// Arrays podem ser declarafas de diferentes formas:
// Forma generica
let lista1: Array<string> = ["casa", "carro", "moto"];
// Com conchetes
let lista2: string[] = ["casa", "carro", "moto"];
// Definindo mais de um tipo de dado
let lista3: Array<string|number> = ["casa", "carro", 8, "moto", 2, 5];
let lista4: (string|number)[] = ["casa", "carro", 8, "moto", 2, 5];
// Declarando como no javascript, mas assim se perde a tipagem
let lista5 = ["casa", "carro", 8, "moto", 2, 5]

let aluno: object = {nome: "Frederico", idade: 34};




