### Exercício 01 

#### 'crie um diretório chamado unix_tests e navegue até ele.'

##### mkdir unix_texts 
##### cd unix_tests

### Exercício 02 

#### 'Crie um arquivo de texto com o nome trybe.txt.'

##### touch trybe.txt 

### Exercício 03

#### 'Crie uma cópia do arquivo trybe.txt com o nome trybe_backup.txt.'

##### cp trybe.txt trybe_backup.txt

### Exercício 04

#### 'Renomeie o arquivo trybe.txt'

##### mv trybe.txt trybeversao02.txt

### Exercício 05

#### 'Dentro de unix_tests, crie um novo diretório chamado backup'

##### mkdir backup

### Exercício 06

#### 'Mova o arquivo trybe_backup.txt para o diretório backup'

##### mv trybe_backup.txt /backup

### Exercicio 07

#### 'Dentro de unix_tests, crie um novo diretório chamado backup2.'

##### cd unix_tests
##### mkdir backup2

### Exercicio 08

#### 'Mova o arquivo trybe_backup.txt da pasta backup para a pasta backup2.'

##### mv bckup/trybe_backup.txt /backup2

### Exercicio 09

#### 'Apague a pasta backup.'

##### rmdir backup

### Exercicio 10

#### 'Renomeie a pasta backup2 para backup.'

##### mv backup2 backup

### Exercicio 11

#### 'Veja qual o path completo do diretório atual e liste todos os arquivos dentro dele.'

##### pwd
##### ls -a

### Exercicio 12

#### 'Apague o diretório backup.'

##### rm -rf backup2

### Exercicio 13

#### 'Limpe o terminal.'

##### clear

#### 'crie, de forma manual, na parte gráfica do seu sistema operacional (através do mouse), um arquivo de texto com o conteúdo abaixo, chamado skills.txt
Internet
Unix
Bash
HTML
CSS
JavaScript
React
SQL'

### Exercício 14. 

#### 'Mostre na tela as 5 primeiras skills do arquivo skills.txt'

##### head -5 skills.txt

### Exercício 15

#### 'Mostre na tela as 4 últimas skills do arquivo skills.txt.'

##### tail -4 skiils.txt

### Exercício 16

#### 'Apague todos os arquivos que terminem em .txt.'

##### rm *.txt

### Exercício 17

#### 'Crie um novo diretório chamado unix_tests_search e entre nele. 

##### mkdir unix_texts_search

### Exercício 18

#### 'Na pasta unix_tests_search, baixe um arquivo com os nomes de todos os países do mundo utilizando o comando curl abaixo:'
mkdir unix_tests_search
cd unix_tests_search
curl -o countries.txt "https://gist.githubusercontent.com/kalinchernev/486393efcca01623b18d/raw/daa24c9fea66afb7d68f8d69f0c4b8eeb9406e83/countries" 

Mostre todo o conteúdo do arquivo countries.txt na tela.'

##### cat countries.txt

### Exercício 19

#### 'Mostre o conteúdo de countries.txt, página por página, até encontrar a Zambia.' 

##### less countries.txt
##### (space bar 10 times)

### Exercício 20 

#### 'Mostre novamente o conteúdo de countries.txt página por página, mas agora utilize um comando para buscar por Zambia.'

##### less countries.txt
##### /Zambia

### Exercício 21

#### 'Busque por Brazil no countries.txt'

##### less countries
##### /Brazil

### Exercício 22

#### 'Busque novamente por brazil, mas agora utilizando o lower case.'

##### grep -i brazil countries.txt

### Exercício 23

#### 'Crie um novo arquivo chamado phrases.txt e adicione algumas frases à sua escolha. Não precisa criar o arquivo pelo terminal.'

##### cat >> phrases.txt
##### 'Lover never fails.
##### Você é fraco. Te falta ódio.
##### Sopa de maçã não existe.

### Exercício 24

#### 'Busque pelas frases que não contenham a palavra fox'

##### grep -iv fox phrases.txt

### Exercício 25 

#### 'Conte o número de palavras do arquivo phrases.txt'

##### wc -w phrases.txt

### Exercício 26

#### 'Conte o número de linhas do arquivo phrases.txt'

##### wc -l phrases.txt

### Exercício 27

#### 'Crie os arquivos empty.tbt e empty.pdf.'

##### touch empty.tbt 
##### touch empty.pdf

### Exercício 28

#### 'Liste todos os arquivos do diretório unix_tests_search'

##### ls *

### Exercício 29

#### 'Liste todos os arquivos que terminem com txt'

##### ls *txt

### Exercício 30

#### 'Liste todos os arquivos que terminem com tbt ou txt'

##### ls *{txt,tbt}

### Exercício 31

#### 'Acesse o manual do comando ls.'

##### man ls