/* Testando o uso e metodos do tipo de dado array
 push()    - Add um ou mais elementos ao fim do array
 pop()     - Remove e retorna o ultimo elemento do array
 shift()   - Remove e retorna o primeiro elemento do array
 unshift() - Add um ou mais elementos ao inicio do array
 concat()  - Combina dois ou mais arrays, criando um novo array
 join()    - Converte todos os olementos do array em uma unica string separados por um limitador
 slice()   - Retorna uma copia de parte do array, definida por indices de inicio e fim
*/

// Sintaxe para declaração de um array: var|let|const nome_var:tipo_dado[] = [valor];

// cria um array de strings vazia
const nomes:string[] = [];

// cria um array de strings com valores
const cidades:string[] = ["Recife", "João Pessoa", "Campina Grande"];

// o TS consegue definir o tipo de dados do array com base nos valores inseridos
const numeros = [2,5,11,53];
numeros.push(4);
console.log(numeros);
//numeros.push("4");
