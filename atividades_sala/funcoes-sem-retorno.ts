// 01 - Crie uma funcao chamada saudacao que exiba a mensagem "Olá, mundo!" no console quando for chamada.
function saudacao(): void {
    console.log("Olá, mundo!");
}
saudacao();

// 02 - Escreva uma funcao chamada dobro que aceite um parametro num e exiba o dobro desse numero no console.
function dobro(num:number):void{
    console.log(num*2);
}
dobro(5)

// 03 - Crie uma funcao chamada mostrarNumeros que receba dois parametros, inicio e fim. Essa funcao deve exibir todos os numeros inteiros no intervalo de inicio a fim (inclusive) no console.
function mostrarNumeros(inicio:number, fim:number):void {
    let numeros:number[] = []
    for (let i = inicio; i <= fim; i++) {
        numeros.push(i);
    }
    console.log(numeros);
}
mostrarNumeros(3,10);

// 04 - Escreva uma funcao chamada verificarPar que aceite um numero como entrada e exiba no console se o numero e par ou nao.
function verificarPar(num:number):void {
    if (num%2 == 0){
        console.log(`O número ${num} é par`);
    } else{
        console.log(`O número ${num} não é par`);
    }
}
verificarPar(4);
verificarPar(415);

// 05 - Crie uma funcao chamada imprimirLista que aceite um array como parametro e exiba cada elemento desse array no console um por um.
function imprimirLista(lista:number[]) {
    for (let i of lista){
        console.log(i);
    }
}
let listinha:number[] = [2,3,5,66,7];
imprimirLista(listinha);