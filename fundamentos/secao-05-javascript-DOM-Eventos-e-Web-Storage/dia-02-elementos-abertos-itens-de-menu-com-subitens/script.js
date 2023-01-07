/* Adicione a tag h1 com o texto TrybeTrip - Agência de Viagens como filho da tag body;
Adicione a tag main com a classe main-content como filho da tag body;
Adicione a tag section com a classe center-content como filho da tag main criada no passo 2;
Adicione a tag p como filho do section criado no passo 3 e coloque algum texto;
Adicione a tag section com a classe left-content como filho da tag main criada no passo 2;
Adicione a tag section com a classe right-content como filho da tag main criada no passo 2;
Adicione uma imagem com src configurado para o valor https://picsum.photos/200 e classe small-image. Esse elemento deve ser filho do section criado no passo 5;
Adicione uma lista não ordenada com os valores de 1 a 10 por extenso, ou seja, um, dois, três, … como valores da lista. Essa lista deve ser filha do section criado no passo 6;
Adicione 3 tags h3, todas sendo filhas do main criado no passo 2. */

const h1Text = document.createElement('h1');
h1Text.innerHTML = 'TrybeTrip - Agência de Viagens';
document.body.appendChild(h1Text);

const main = document.createElement('main');
main.className = 'main-content';
document.body.appendChild(main);

const sectionElement = document.createElement('section');
sectionElement.className = 'center-content';
main.appendChild(sectionElement);

const pElement = document.createElement('p');
pElement.innerHTML = 'Esse é o meu elemento P';
sectionElement.appendChild(pElement);

const sectionLeft = document.createElement('section');
sectionLeft.className = 'left-content';
main.appendChild(sectionLeft);

const sectionRight = document.createElement('section');
sectionRight.className = 'right-content';
main.appendChild(sectionRight);

const imageLeftContent = document.createElement('img');
imageLeftContent.src= 'https://picsum.photos/200';
imageLeftContent.className = 'small-image';
sectionLeft.appendChild(imageLeftContent);

const listElement = document.createElement('ul');
sectionRight.appendChild(listElement);
const numbersArray = ['um', 'dois', 'três', 'quatro', 'cinco', 'seis', 'sete', 'oito', 'nove', 'dez'];
for(let index in numbersArray){
    const listNumbers = document.createElement('ul');
    listNumbers.innerHTML = numbersArray[index];
    listElement.appendChild(listNumbers);
}

const h3Elements = document.createElement('h3');
main.appendChild(h3Elements);
const h3content = ['eu tô entendendo', 'Eu tô surpresa', 'Amo esse negócio'];
for(let index in h3content){
    const h3Insert = document.createElement('h3');
    h3Insert.innerHTML = h3content[index];
    h3Elements.appendChild(h3Insert);
}

/* Após criar as tags anteriores, você mostrou para a sua liderança como estava a estrutura inicial da página. Sua liderança então pediu para que você fizesse algumas alterações:
Adicione a classe title na tag h1 criada;
Adicione a classe description nas 3 tags h3 criadas;
Remova a section criada no passo 5 (aquele que possui a classe left-content). Utilize a função .removeChild();
Centralize a section criada no passo 6 (aquele que possui a classe right-content).
Troque a cor de fundo do elemento pai da section criada no passo 3 (aquela que possui a classe center-content) para a cor verde;
Remova os dois últimos elementos (nove e dez) da lista criada no passo 8. */

h1Text.className = 'title';
h3Elements.className = 'description';
main.removeChild(sectionLeft);
sectionRight.style.marginRight = 'auto';
main.style.backgroundColor = 'green';
const ulitems = document.getElementsByTagName('ul')[0];
ulitems.lastChild.remove();
ulitems.lastChild.remove();