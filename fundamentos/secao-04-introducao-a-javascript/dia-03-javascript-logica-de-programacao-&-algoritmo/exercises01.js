/* O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero. Por exemplo:
O fatorial é representado pelo sinal !
4! = 4 x 3 x 2 x 1 = 24
Com base nessas informações, crie um algoritmo que imprima na tela o fatorial de 10.
let fatorial = 1;
for (let index = 10; index > 0; index -= 1) {
  fatorial *= index;
}
console.log(fatorial); 

Utilize a estrutura de repetição for para desenvolver um algoritmo que seja capaz de inverter uma palavra. Por exemplo, a palavra “banana” seria invertida para “ananab”. Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.*/
/* let word = 'maria';
let reverseWord = '';

reverseWord = word.split('').reverse().join('');

console.log(reverseWord); */
/* Considere o array de strings abaixo:
let array = ['java', 'javascript', 'python', 'html', 'css'];
Utilize a estrutura de repetição for para escrever dois algoritmos: um que imprima no console a maior palavra desse array e outro que imprima a menor. Considere o número de caracteres de cada palavra.*/
/* let array = ['java', 'javascript', 'python', 'html', 'css'];
let biggerword = array[0];
for(let index = 0; index < array.length; index +=1 ){
  if(array[index].length > biggerword.length) {
    biggerword = array[index];
  }
}
let smallestword = array[0];
for(let index = 0; index < array.length; index +=1 ){
  if(array[index].length < smallestword.length) {
    smallestword = array[index];
  }
}
console.log(biggerword);
console.log(smallestword); */
/* Um número primo é um número inteiro maior do que 1 que possui somente dois divisores, ou seja, é divisível por 1 e por ele mesmo. Sabendo disso, escreva um algoritmo que imprima no console o maior número primo entre 2 e 50. */

let maiorNumeroPrimo = 0;
  for(let numeroatual = 2; numeroatual <= 50; numeroatual += 1){
    let numeroprimo = true;
    for(let divisor = 2; divisor < numeroatual; divisor +=1){
      if(numeroatual % divisor === 0) {
        numeroprimo = false;
      }
    }
 if(numeroprimo) {
    maiorNumeroPrimo = numeroatual; 
  }
}
console.log(maiorNumeroPrimo);