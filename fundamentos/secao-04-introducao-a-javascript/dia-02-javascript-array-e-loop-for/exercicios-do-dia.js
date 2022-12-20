/*  Iremos utilizar esse array para realizar os próximos exercícios. */

/*  let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27]; */

/*Exercicio 01 - Percorra o array imprimindo todos os valores nele contidos com a função console.log(); */

/* let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
for (let index=0; index<numbers.length; index +=1){
    console.log(numbers[index]);
}  
 */
/* Exercicio 02 - Some todos os valores contidos no array e imprima o resultado;  */

/* let result=0;
for (let index=0; index<numbers.length; index+=1){
    result += numbers[index];
} console.log(result) */

/* Exercicio 03 - Calcule e imprima a média aritmética dos valores contidos no array; 
- A média aritmética é o resultado da soma de todos os elementos dividido pelo número total de elementos.*/
/* let sum = 0;
for (let index=0; index<numbers.length; index +=1){
    sum += numbers[index];
}
let average= sum/numbers.length; */

/* Exercicio 04 - Com base no código que acabou de gerar, faça com que, caso o valor final seja maior que 20, imprima a mensagem: “valor maior que 20”. Caso não seja, imprima a mensagem: “valor menor ou igual a 20”;  */

/* let mensagem;
if (average > 20){
    mensagem= 'valor maior que 20'
} if (average <= 20) {
    mensagem= 'valor menor ou igual a 20'
}
console.log(mensagem); 
 */
/* Exercicio 05 - Utilizando for, descubra qual o maior valor contido no array e imprima-o;
 */
/* let maiorNumero = 0;
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] > maiorNumero) {
      maiorNumero = numbers[index];
    }
  }
  
  console.log(maiorNumero) */;
/* 
Exercicio 06 - Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: “nenhum valor ímpar encontrado”;  */

/* let resultado = 0;

for (let index=0; index<numbers.length; index+=1){
    if (numbers[index] % 2 !== 0) {
        resultado += 1;
      }
    }
if (resultado === 0) {
      console.log('nenhum valor ímpar encontrado');
    } else {
      console.log(resultado);
    }
/*  */
/* Exercício 07 -  Utilizando for, descubra qual o menor valor contido no array e imprima-o; */

/*let menorNumero = numbers[0];
for (let index = 1; index < numbers.length; index += 1) {
    if (numbers[index] < menorNumero) {
      menorNumero = numbers[index];
    }
  }
  
  console.log(menorNumero);  */

/* Exercício 08 - Utilizando for, crie um array que vá de 1 até 25 e imprima o resultado.

  let arraynumbers = [];

for (let index = 1; index <= 25; index += 1) {
  arraynumbers.push(index);
}

 Exercício 09 - Utilizando o array que acabou de criar, imprima o resultado da divisão de cada um dos elementos por 2. 

for (let index = 0; index < numbers.length; index += 1) {
    console.log( 'O resultado da divisão é ' + numbers[index] / 2);
  };*/


