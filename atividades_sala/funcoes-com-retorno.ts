// 1 - Crie uma funcao chamada somar que aceite dois numeros como parametro e retorne a soma deles.
function somar(num1:number,num2:number): number {
    return num1+num2;
}
console.log(somar(3,55));

// 2 - Escreva uma funcao chamada ehPar que aceite um numero como parametro e retorne true se o numero for par e false caso contrario.
function ehPar(num1:number):boolean {
    if (num1%2==0){
        return true;
    } else{
        return false;
    }
}
console.log(ehPar(8));
console.log(ehPar(55));

// 3 - Crie uma funca chamda maiorNumero que receba tres numeros como parametros e retorne o maior deles.

// 4 - Crie uma funcao chamada calcularIMC que receba o peso e a altura de uma pessoa como parametro e retorne o indice de massa corporal (IMC) calculado.