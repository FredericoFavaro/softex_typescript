// Exemplo 1: Funcoes sem parametros e sem retorno
function fun01(): void {
    console.log("Boa tarde ");
}
fun01();

// Exemplo 2: Funcoes com parametros e sem retorno
function fun02(nome: number): void {
    console.log("Boa tarde " + nome);
}
fun02("Claudio");

// Exemplo 3: Funcoes sem parametros e com retorno
function fun03(): number {
    return 10;
}

let valor = fun03();
console.log(valor);


// Exemplo 4: Funcoes com parametros e com retorno
function fun04(num1:number, num2:number) {
    return num1 + num2 + "teste";
}
console.log(fun04);

function fun05(num1:number, num2:number): number {
    return num1 + num2;
}
console.log(fun05);