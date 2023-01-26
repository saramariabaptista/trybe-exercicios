// Use o método forEach para exibir a lista de emails com a seguinte frase: O email ${email} está cadastrado em nosso banco de dados!.

const emailListInData = [
    'roberta@email.com',
    'paulo@email.com',
    'anaroberta@email.com',
    'fabiano@email.com',
  ];
  
const registerEmail = (element) => {
    console.log(`O email ${element} está cadastrado em nosso banco de dados!`);
};

emailListInData.forEach(registerEmail);

// Utilize o find para retornar o primeiro número do array que é divisível por 3 e 5, caso ele exista:

const numbers = [19, 21, 30, 3, 45, 22, 15];
console.log(numbers.find((number) => number % 3 === 0 && number % 5 === 0));

// Utilize o find para encontrar o primeiro nome com cinco letras, caso ele exista:

const names = ['João', 'Irene', 'Fernando', 'Maria'];

const nameWithFiveLetters = names.find((name) => name.length === 5);
console.log(nameWithFiveLetters);

// Utilize o find para encontrar a música com id igual a '31031685', caso ela exista:

const musicas = [
    { id: '31031685', title: 'Partita in C moll BWV 997' },
    { id: '31031686', title: 'Toccata and Fugue, BWV 565' },
    { id: '31031687', title: 'Chaconne, Partita No. 2 BWV 1004' },
  ];
  
const findMusic = musicas.find((element) => element.id === '31031685');
console.log(findMusic);

/* Você ficou responsável por conferir a lista de pessoas convidadas de uma festa de casamento e precisa verificar se o nome da pessoa está ou não na lista. Para isso, você deve utilizar o código abaixo e desenvolver sua lógica a partir dele:
- O nome das pessoas convidadas está salvo em um array chamado names;
- A função hasName é responsável por verificar se o nome da pessoa está ou não na lista. Essa função recebe dois parâmetros: arr, que é o array com o nome das pessoas convidadas, e name, que é o nome a ser verificado na lista de convidados (array names).
Caso a pessoa esteja na lista de convidados, o retorno da função hasName deve ser true. Caso contrário, deve ser false. */

const names2 = ['Mateus', 'José', 'Ana', 'Cláudia', 'Bruna'];

const hasName = (arr, name) => {
 return arr.some((element) => element === name);
};

console.log(hasName(names2, 'Ana'));
console.log(hasName(names2, 'Pedro'));

/* Você ficou responsável por criar um sistema que verifica se as pessoas da mesma turma possuem uma determinada faixa de idade. Você deve utilizar o array people e desenvolver a sua lógica a partir dele. Para isso:
Crie uma função que verifica se todas as pessoas do array people possuem a idade mínima especificada;
Retorne true se todas tiverem a idade maior ou igual à mínima e, caso contrário, false. */

const people = [
    { name: 'Mateus', age: 18 },
    { name: 'José', age: 16 },
    { name: 'Ana', age: 23 },
    { name: 'Cláudia', age: 20 },
    { name: 'Bruna', age: 19 },
  ];
  
const verifyAges = (array, age) => {
    return array.every((person) => person.age >= age);
}
  
  console.log(verifyAges(people, 18));
  console.log(verifyAges(people, 14));

// recapitulando 

  const pessoas = [
    { nome: 'Joana', idade: 37 },
    { nome: 'Ana', idade: 25 },
    { nome: 'João', idade: 32 },
    { nome: 'Aline', idade: 28 },
  ];

  // foreEach não tem retorno e não espera retorno 
  const peopleNames = pessoas.forEach((element) => {console.log(element.nome)});

  //