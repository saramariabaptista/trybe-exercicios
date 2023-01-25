const verifyIsNumber = (value1, value2) => {
    if (typeof value1 !== 'number' || typeof value2 !== 'number') {
      throw new Error('Os valores devem ser numéricos'); // através do construtor `new Error` já sabemos que será lançada a mensagem se algo der errado.
    }
  };
  
  const sum = (value1, value2) => {
    // o `try` vai executar a função verifyNumber e retornar a soma caso os parâmetros sejam números
    try { 
      verifyIsNumber(value1, value2);
      return value1 + value2;
    // se o bloco `try` apresentar erro, o `catch` vai capturar esse erro e retornar a mensagem já criada através da propriedade `.message` nativa do objeto Error.
    } catch (error) {
      return error.message;
    }
  };
  
  console.log(sum(2, '3'));

  // object.keys

  const student1 = {
    html: 'Muito Bom',
    css: 'Bom',
    javascript: 'Ótimo',
    softskills: 'Ótimo',
  };
  
  const student2 = {
    html: 'Bom',
    css: 'Ótimo',
    javascript: 'Ruim',
    softskills: 'Ótimo',
    git: 'Bom', // chave adicionada
  };
  
  const listSkills = (student) => {
    const arrayOfSkills = Object.keys(student);
    for (const index in arrayOfSkills) {
      console.log(`${arrayOfSkills[index]}, Nível: ${student[arrayOfSkills[index]]}`);
    }
  };
  
  console.log('Estudante 1');
  listSkills(student1);
  
  console.log('Estudante 2');
  listSkills(student2);

  // Object Entries

  var obj = { foo: 'bar', baz: 42 };
console.log(Object.entries(obj)); // [ ['foo', 'bar'], ['baz', 42] ]

// objeto array-like
var obj = { 0: 'a', 1: 'b', 2: 'c' };
console.log(Object.entries(obj)); // [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ]

// objeto array-like com ordenação aleatória de chave (key)
var an_obj = { 100: 'a', 2: 'b', 7: 'c' };
console.log(Object.entries(an_obj)); // [ ['2', 'b'], ['7', 'c'], ['100', 'a'] ]

// getFoo é uma propriedade que não é enumerável
var my_obj = Object.create({}, { getFoo: { value: function() { return this.foo; } } });
my_obj.foo = 'bar';
console.log(Object.entries(my_obj)); // [ ['foo', 'bar'] ]

// argumento não-objeto será convertido (conversão implícita) para um objeto
console.log(Object.entries('foo')); // [ ['0', 'f'], ['1', 'o'], ['2', 'o'] ]

// itera graciosamente através de chave-valor (key-value)
var obj = {a: 5, b: 7, c: 9};
for (var [key, value] of Object.entries(obj)) {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
}

// Ou, usando array extras
Object.entries(obj).forEach(([key, value]) => {
    console.log(key + ' ' + value); // "a 5", "b 7", "c 9"
});
