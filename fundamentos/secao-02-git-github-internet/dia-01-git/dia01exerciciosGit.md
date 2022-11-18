
### Exercícios propostos Git - Criando um repositório

- Crie uma pasta no seu computador;
> mkdir trybe-dia01-secao02

- Acesse a pasta que você acabou de criar;
> cd trybe-dia01-secao02

-Inicie o versionamento com o comando git init;
> git init

- Abra a pasta no VSCode com o comando code .;
> code .

- Crie um arquivo chamado README.md;
> touch README.md

- Adicione o arquivo novo em staging e realize um commit. Por exemplo: git add . e git commit -m "Descreva a alteração realizada";
> git add .
> git commit -m 'adiciona arquivo README'

- Crie uma nova branch com o comando git checkout -b. Por exemplo: git checkout -b adiciona-readme;
> git chekout -b versao1

- Faça uma alteração no README.md e retorne para a branch main, em seguida realize o merge das alterações com o comando git merge nome-da-branch. Por exemplo: git merge adiciona-readme.
> cat >> README.md
Meu primeiro README.
> git merge versao1

- Acesse a branch main e crie uma branch nova chamada atualiza-readme;
> git checkout main
> git checkou -b atualiza-readme

- Acesse a branch atualiza-readme e crie um arquivo chamado infos.txt;
> touch infos.txt

- Adicione as alterações em staging e realize um commit;
> git add .
> git commit -m 'Cria nova branch, adiciona ReadMe, cria arquivo infos.

- Adicione seu nome e sobrenome no arquivo infos.txt;
> cat >> infos.txt
Sara Baptista

- Adicione novamente as alterações em staging e realize um commit;
> git add . 
> git commit -m 'Adiciona nome e sobrenome ao arquivo infos'

- Crie uma branch nova a partir da branch atualiza-readme. A nova branch deve se chamar adiciona-infos;
> git checkout -b adiciona-infos

- Acesse a branch adiciona-infos e utilize sua criatividade para escrever o passo a passo de como o versionamento funciona no README.md. Por exemplo: “O primeiro passo é ter uma pasta versionada e criar um estrutura inicial e fazemos isso utilizando o comando git init. O segundo passo é criar uma branch nova com o comando git checkout nome-da-branch ou git checkout -b nome-da-branch“, etc. Você também pode utilizar esse momento para escrever e responder as dúvidas que voce ainda tem sobre versionamento.
> cat >> README.md
> 'Primeiro versionamos o diretorio ao utilizar o comando git init. Depois, inserimos as branches, ou seja, as ramificações com o comando git checkout -b nome da branch.'


- Adicione as alterações em staging, realize o commit;
> git add .
> git commit -m 'adiciona descrição sobre versionamento ao README'

- Volte para a branch atualiza-readme e realize o merge das alterações feitas na branch adiciona-infos;
> git checkout atualiza-readme
> git merge adiciona-infos

- Retorne para a branch main e realize o merge das alterações.
> git checkout main
> git merge atualiza-readme
