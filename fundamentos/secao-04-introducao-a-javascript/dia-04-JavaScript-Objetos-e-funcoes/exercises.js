// Usando o objeto abaixo, faça os exercícios a seguir: 

/* let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
  }; */

// Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome. Use a sintaxe meuObjeto.chave. Valor esperado no console:

// console.log('Bem-vinda, ' + info.personagem)

// Insira no objeto uma nova propriedade com o nome de chave ‘recorrente’ e o valor ‘Sim’ e, em seguida, imprima o objeto no console. Use a sintaxe meuObjeto['chave'] = valor.

// info['recorrente'] = 'sim';
// console.log(info);

// Faça um for/in que mostre todas as chaves do objeto. 

/* for (keys in info){
  console.log(keys);
} */

// Faça um novo for/in, mas agora mostre todos os valores das chaves do objeto. Valor esperado no console:
/* for (values in info){
  console.log(info[values]);
} */

// Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: ‘Tio Patinhas’, ‘Christmas on Bear Mountain, Dell’s Four Color Comics #178’, ‘O último MacPatinhas’, ‘Sim’. Então, imprima os valores de cada objeto juntos, de acordo com cada uma das chaves.
/* 
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell’s Four Color Comics #178",
  nota: "O último MacPatinhas",
  recorrente: 'sim',
}

for (keys in info) {
  if(keys === 'recorrente' && info[keys] === 'sim' && info2[keys] === 'sim'){
    console.log('Ambos recorrentes');
  } else {
    console.log( info[keys] + ' e ' + info2[keys]);
  }
} */

// 🚀 Leitura de Objetos
// Usando o objeto abaixo, faça os exercícios a seguir:

/* let leitor = {
  nome: 'Julia',
  sobrenome: 'Pessoa',
  idade: 21,
  livrosFavoritos: [
    {
      titulo: 'O Pior Dia de Todos',
      autor: 'Daniela Kopsch',
      editora: 'Tordesilhas',
    },
  ],
}; */

// Acesse as chaves nome, sobrenome e titulo, que está dentro da chave livrosFavoritos, e faça um console.log no seguinte formato: “O livro favorito de Julia Pessoa se chama ‘O Pior Dia de Todos’”

// console.log('O livro favorito de ' + leitor.nome + ' ' + leitor.sobrenome + ' se chama "' + leitor['livrosFavoritos'][0]['titulo'] + '"');

/* Adicione um novo livro favorito na chave livrosFavoritos, que é um array. Atribua a essa chave um objeto contendo as seguintes informações:
{
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
} */

/* leitor.livrosFavoritos.push({
  titulo: 'Harry Potter e o Prisioneiro de Azkaban',
  autor: 'JK Rowling',
  editora: 'Rocco',
});

console.log(leitor); */

// Acesse as chaves nome e livrosFavoritos e faça um console.log no seguinte formato: “Julia tem <quantidade> livros favoritos”, onde “<quantidade>” é um número gerado automaticamente pelo seu código.

// console.log( '" ' + leitor.nome + ' tem ' + leitor.livrosFavoritos.length + ' livros favoritos".');

// 🚀 Exercícios - funções

/* ```Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.
Exemplo de palíndromo: arara

verificaPalindrome('arara')

Retorno esperado: true
verificaPalindrome('desenvolvimento')

Retorno esperado: false``` */

/* function verificaPalindrome (param1) {
  for(index in param1){
    if(param1[index] != param1[(param1.length - 1) - index]){
      return false;
    } 
    return true;
  }
} */
/*
Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

Array de teste: [2, 3, 6, 7, 10, 1];.

Valor esperado no retorno da função: 4.*/


/* function indiceComMaiorValor(array){
  let indiceAtualComMaiorValor = 0;
  for(let index in array){
    if(array[index] > array[indiceAtualComMaiorValor]){
      indiceAtualComMaiorValor = index;
    }
  }
  return indiceAtualComMaiorValor;
}
console.log(indiceComMaiorValor([2, 3, 6, 7, 10, 1]));

Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

Array de teste: [2, 4, 6, 7, 10, 0, -3];.

Valor esperado no retorno da função: 6. 

function IndiceDoMenorValor(array) {
  let indiceAtualComMenorValor = 0;
  for(let index of array){
    if(array[index] < array[indiceAtualComMenorValor]){
      indiceAtualComMenorValor = index;
    }
  }
  return indiceAtualComMenorValor;
}*/

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];.*/
/* 
function maisCaracteres(array){
let maiorPalavraAtual = array[0];
  for(let index in array){
    if(array[index].length > maiorPalavraAtual.length){
      maiorPalavraAtual = array[index];
    }
  }
  return maiorPalavraAtual
}
console.log(maisCaracteres(['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'])); */

/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

Array de teste: [2, 3, 2, 5, 8, 2, 3];.

Valor esperado no retorno da função: 2.*/

function maisRepetido(numeros) {
  let num = {};
  for (let index = 0; index < numeros.length; index += 1) {
    let valor = numeros[index];
    if (num[valor] === undefined) {
      num[valor] = 1;
    } else {
      num[valor] = num[valor] + 1;
    }
  }

  let contRepetido = 0;
  let contNumero = 0;

  for (let prop in num) {
    if (contRepetido < num[prop]) {
      contRepetido = num[prop];
      contNumero = prop;
    }
  }

  return contNumero;
}

console.log(maisRepetido([2, 3, 2, 5, 8, 2, 3]));

