// Parte I

/* ```🚀 Altere o tipo das variáveis (var) para let ou const para que respeitem o escopo em que foram declaradas.
🚀 Modifique a variável para que respeite o escopo onde está sendo declarada. ```
 */
/* function imprimeIdade() {
  for (let idade = 30; idade <= 40; idade += 1) {
    console.log('Idade dentro do for:', idade)
  }
}
imprimeIdade() */

// 🚀 Altere o valor das propriedades do objeto, para que respeite as características da variável do tipo const;
// Executando esse código iremos receber um erro `TypeError: Assignment to constant variable.`
/*```const pessoa = {
  nome: 'Henri',
  idade: 20
}
pessoa.nome ='Luna';
pessoa.idade = 19
console.log('Nome:', pessoa.nome);
console.log('Idade:', pessoa.idade);```*/

/* 🚀 Modifique a variável para que não ocorra Erro;
const favoriteFood = 'Lasanha';
favoriteFood = 'Hamburguer';
console.log(favoriteFood);
 */

//🚀 Modifique as concatenações para template literals.
/* 
const name = 'Adriana';
const lastName = 'Soares';
console.log(`Olá ${name} ${lastName}!`);
function soma(a,b) {
  let resultado = a + b;
  return resultado;
}
let a = 3;
let b = 5;
console.log(`O resultado da soma de  a + b  é: ${soma(a,b)}`); */
/* 
Modifique a estrutura das funções a seguir para que elas sejam arrow functions;

🚀 Transforme a função numeroAleatorio em uma arrow function; */

/* const numeroAleatorio = () => Math.random(); 
console.log(numeroAleatorio());
 */

// 🚀 Transforme a função hello em uma arrow function;
/* const hello = nome => `Olá, ${nome}!`;
let nome = 'Ivan';
console.log(hello(nome)); */

// 🚀 Altere a expressão if/else utilizando ternary operator;

/* let speed = 90;
const speedCar = (speed) => speed >= 120 ? `Você ultrapassou o limite de velocidade` : `Você está na velocidade permitida`;
console.log(speedCar(speed)); */

// Parte II
/* 
Crie uma função que ligue e desligue um motor de um carro.
Crie a função ligarDesligar utilizando arrow functions. 
Crie a lógica para ligar e desligar o motor;
Imprima no terminal “O motor está ligado“ e “O motor está desligado“ (lembre-se de utilizar o template literals nesse momento).
Bônus (opcional): tente fazer o mesmo exercício utilizando ternary operator. */

/* let motorStatus = 'Off';
const turnOnTurnOffCar = () => motorStatus === 'On' ? 'O motor está ligado' : 'O motor está desligado';
console.log(turnOnTurnOffCar()); */
/* 
Crie uma função que calcule a área de um círculo.
Na matemática, a fórmula para calcular a área de um círculo é: área = PI vezes o raio elevado ao quadrado.
Com base nessa informação:
Crie a função circleArea, que recebe o valor do raio como parâmetro, utilizando arrow functions;
Crie uma variável para armazenar o valor de PI (lembre-se de armazenar o tipo de variável da forma correta);
Crie a lógica para retornar a área do círculo;
Imprima no terminal “Essa é a área do círculo: resultado da função“ (lembre-se de utilizar o template literals nesse momento). */

/* const circleArea = raio => {
let valueoPI = 3.14;
  let result = valueoPI * (raio ** 2)
  return `Essa é a área do círculo: ${result}` }

console.log(circleArea(5)); */

// 🚀 Crie uma função que receba uma frase como parâmetro e retorne a maior palavra da frase.
// longestWord('Antônio foi no banheiro e não sabemos o que aconteceu') // retorna 'aconteceu'
/* 
const longestWord = (phrase) => {
const array = phrase.split(' ');
let maxlength = 0;
let result = '';
for (const index of array){
  if(index.length > maxlength){
    maxlength = index.length
    result = index;
  }
}
return result;
}

console.log(longestWord('Antônio foi no banheiro e não sabemos o que aconteceu')); */

