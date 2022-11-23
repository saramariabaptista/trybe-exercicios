/* Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b)Elabore alguns códigos e imprima o resultado no console usando o console.log, um para cada operação aritmética básica. Seu código deve ter duas constantes, a e b, definidas no começo com os valores que serão operados. Escreva códigos para:
Adição (a + b)
Subtração (a - b)
Multiplicação (a * b)
Divisão (a / b)
Módulo (a % b) */

const alunosA= 150;
const alunosB= 150;

let resultado= alunosA+alunosB*(alunosA-alunosB)/(alunosB/alunosA);
console.log(resultado)
let resultado2=resultado%alunosB;
console.log(resultado2);

/*Utilize if/else para escrever um código que retorne o maior de três números. Defina, no começo do seu código, três constantes com os valores que serão comparados..*/

const alturadeSara=170;
const alturadeMarcela=170;
const alturadeIsabel=170;

if (alturadeMarcela<alturadeSara && alturadeMarcela<alturadeIsabel){
    console.log('Marcela é a menor das meninas')
} else if (alturadeIsabel> alturadeMarcela && alturadeIsabel>alturadeSara){
    console.log("Isabel é a maior das meninas")
} else if (alturadeSara>alturadeIsabel && alturadeSara>alturadeMarcela){
    console.log('Sara é a maior das meninas')
} else {
    console.log('Todas são da mesma altura')
}

/* Utilize if/else para escrever um código que, dado um valor recebido como parâmetro, retorne “positive” se esse valor for positivo, “negative” se for negativo, e caso não seja nem positivo e nem negativo retorne “zero”.*/

const number=-36;

if (number>0){
    console.log('Positive')
} else if (number<0){
    console.log('Negative')
} else {
    console.log ('zero')
}

/*Utilize if/else para escrever um código que defina três constantes com os valores dos três ângulos internos de um triângulo. Retorne true se os ângulos representarem os ângulos de um triângulo e false, caso contrário. Se algum ângulo for inválido, você deve retornar uma mensagem de erro.
Para os ângulos serem de um triângulo válido, a soma dos três deve ser 180 graus.
Um ângulo será considerado inválido se não tiver um valor positivo.*/

const ab=45;
const bc=45;
const cA=90;

if (ab+bc+cA===180){
    console.log(true)
}
else if (ab+bc+cA<180) {
    console.log(false)
}
else {
    console.log('Informação inválida.')
}

/*Utilize switch/case para escrever um código que receba o nome de uma peça de xadrez e retorne os movimentos que ela faz. Como desafio, escreva um código para funcionar tanto se receber o nome de uma peça com letras maiúsculas quanto com letras minúsculas, sem aumentar a quantidade de condicionais.
Como dica, você pode pesquisar uma função que faz uma string ficar com todas as letras minúsculas (lower case).
Se a peça passada for inválida, o código deve retornar uma mensagem de erro.
Exemplo: bishop (bispo) -> diagonals (diagonais)*/

let chessPeace='BISPO';

switch(chessPeace.toLowerCase()){
    case 'bispo':
        console.log("Diagonal")
        break;
    case 'torre':
        console.log("linha reta, tanto na vertical quanto na horizontal, quantas casas quiser")
        break;
    case 'cavalo':
        console.log("O movimento executado pelo Cavalo é conhecido por um-dois ou em L.")
        break;
    case 'peao':
        console.log("Move-se sempre uma casa para frente, exceto no primeiro movimento, quando pode mover-se duas casas")
        break;
    case 'dama':
        console.log("pode mover-se em qualquer direção.")
        break;
    case 'rei':
        console.log("Pode mover-se em qualquer direção, porém apenas uma casa por vez")
        break;
    default:
        console.log("Peça não encontrada.")
}

/*Utilize if/else para escrever um código que converta uma nota dada em porcentagem (de 0 a 100) em conceitos de A a F. Siga essas regras:
Porcentagem >= 90 -> A
Porcentagem >= 80 -> B
Porcentagem >= 70 -> C
Porcentagem >= 60 -> D
Porcentagem >= 50 -> E
Porcentagem < 50 -> F
O código deve retornar uma mensagem de erro e encerrar se a nota passada for menor que 0 ou maior que 100.*/

let notaEmPorcentagem=101;

if (notaEmPorcentagem <=100 && notaEmPorcentagem>=90){
    console.log("Sua nota é A")
} else if (notaEmPorcentagem <=100 && notaEmPorcentagem >=80){
    console.log("Sua nota é B")
}else if (notaEmPorcentagem <=100 && notaEmPorcentagem >=70){
    console.log("Sua nota é C")
}else if (notaEmPorcentagem <=100 && notaEmPorcentagem >=60){
    console.log("Sua nota é D")
}else if (notaEmPorcentagem <=100 && notaEmPorcentagem >=50){
    console.log("Sua nota é E")
}else if (notaEmPorcentagem <=100 && notaEmPorcentagem <50){
    console.log("Sua nota é F")
} else if (notaEmPorcentagem<0){
    console.log("Valor incorreto, verifique a sua nota.")
} else if (notaEmPorcentagem>100){
    console.log("Valor incorreto, verifique a sua nota.")
}

/*
Utilize if/else para escrever um código que defina três números em constantes e retorne true se pelo menos uma das três for par. Caso contrário, ele deve retornar false.
Bonus: use somente um if.*/

