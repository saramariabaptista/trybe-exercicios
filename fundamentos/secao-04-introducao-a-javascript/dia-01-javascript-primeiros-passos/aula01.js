/* Exercícios de aula 

Crie uma constante chamada myName e atribua a ela o seu nome (Exemplo: Carolina).
Crie uma constante chamada birthCity e atribua a ela a sua cidade natal.
Crie uma variável let chamada birthYear e atribua a ela o ano em que você nasceu.
Utilize o console.log() para imprimir as constantes e variáveis que você criou.
Altere o valor atribuído à variável birthYear para 2030. Faça um console.log(birthYear) novamente para ver o que acontece!
Altere o valor atribuído à constante birthCity. Faça um console.log(birthCity) novamente! Você saberia explicar por que recebemos uma mensagem de erro? */

const myName='Sara';
const birthCity='Rio de Janeiro';
let birthYear=1994;
console.log(myName, birthCity, birthYear);
birthYear=2030;
console.log(birthYear);
/* birthCity='sao paulo'; */

// O erro acontece porque birthCity é uma constante e seu valor não pode ser alterado. // 

//exercicio 02//
// Crie uma constante chamada base e atribua a ela o valor 5. Crie uma constante uma chamada heigth e atribua a ela o valor 8.Crie uma constante chamada area e atribua a ela o resultado da multiplicação da base pela heigth. Dica: lembre-se de usar sempre o console.log() para imprimir as variáveis e checar os resultados das operações! Crie uma constante chamada perimeter e atribua a ela a soma de todos os lados do retângulo.//

const base=5;
const heigth=8;
const area=(base*heigth);
console.log(area);
const perimeter=(2*base) + (heigth*2);
console.log(perimeter);

//exercicio 03
// Crie uma constante que receba a nota de uma pessoa candidata em um desafio técnico, e atribua a ela um valor entre 1 e 100; Implemente uma lógica que verifique se a pessoa candidata foi aprovada, reprovada ou se essa pessoa está na lista de espera. Para isso, considere as seguintes informações: Se a nota for maior ou igual a 80, imprima “Parabéns, você foi aprovada(o)!” Se a nota for menor que 80 e maior ou igual a 60, imprima “Você está na nossa lista de espera”Se a nota for menor que 60, imprima “Você foi reprovada(o)” Crie uma estrutura condicional utilizando o if, else if e else para criar o seu algoritmo, e os operadores lógicos que se aplicam a cada situação. Altere o valor da nota para verificar se as condições que você implementou funcionam.

const notaDoAluno=78;
if (notaDoAluno >=80){
    console.log("Parabéns, você foi aprovada(o)!");
} 
else if (notaDoAluno >=80 && notaDoAluno >=60); {
    console.log("Você está na nossa lista de espera");
} 	
else {
    console.log("Você está reprovada(o)");
}

/* Crie uma variável para armazenar o status da pessoa candidata no processo seletivo, que pode ser: 'aprovada', 'lista' ou 'reprovada';
Crie uma estrutura condicional com o switch/case que irá imprimir as seguintes mensagens:
Caso 'aprovada', imprima “Parabéns, você foi aprovada(o)!”.
Caso 'lista', imprima “Você está na nossa lista de espera”.
Caso 'reprovada', imprima “Você foi reprovada(o)”.
Caso default, imprima a mensagem de “Informação incorreta”. */

let statusCandidato='lista';
switch (statusCandidato){
    case 'aprovada': 
    resultado='Parabéns, você foi aprovada(o)!';
    break;
    case 'lista':
    break;
    resultado='Você está na nossa lista de espera';
    break;
    case 'reprovada':
    resultado= 'Você foi reprovada(o)';
    break;
    case 'default':
    resultado='Informação incorreta';
    break;
}