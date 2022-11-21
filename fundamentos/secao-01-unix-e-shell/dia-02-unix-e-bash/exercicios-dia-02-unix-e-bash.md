### Welcome 

01. Crie a pasta unix_tests_skills e navegue até ela.

>mkdir unix_texts_skills<br>
cd unix_texts_skills

02. Crie um arquivo texto pelo terminal com o nome skills2.txt e adicione os valores Internet, Unix e Bash, um em cada linha.

>cat > skills2.txt <br>
Internet<br>
Unix<br>
Bash

03. Adicione mais 5 itens à sua lista de skills e depois imprima a lista ordenada no terminal. 

>cat >> skills2.txt <br>
git<br>
github<br>
html<br>
css<br>
arroz<br>
sort < skills2.txt 

04. Conte quantas linhas tem o arquivo skills2.txt.

>wc -l skills2.txt

05. Crie um arquivo chamado top_skills.txt usando o skills2.txt, contendo as 3 primeiras skills em ordem alfabética.

>sort < skills2.txt > top_skills.txt

06. Crie um novo arquivo chamado phrases2.txt pelo terminal e adicione algumas frases de sua escolha.

>cat >> phrases2.txt<br>
La vie in rose<br>
Love never fails <br>
Just be true with who you are <br>
Life is priceless

07. Conte o número de linhas que contêm as letras br.

>grep br phrases2.txt | wc -l

08. Conte o número de linhas que não contêm as letras br.

>grep -br phrases2.txt | wc -l

09. Adicione dois nomes de países ao final do arquivo phrases2.txt.

>cat >> phrases2.txt <br>
Portugal <br>
Finlândia

10. Crie um novo arquivo chamado bunch_of_things.txt com os conteúdos dos arquivos phrases2.txt e countries.txt

>cp phrases2.txt > bunch_of_things.txt | cp countries.txt >> bunch_of_things.txt

11. Ordene o arquivo bunch_of_things.txt.

>sort buch_of_things.txt

12. Crie a pasta unix_tests_permissions e navegue até ela.

>mkdir unix_texts_permission

13. Rode o comando ls -l e veja quais as permissões dos arquivos.

>ls -l

14. Crie o arquivo arquivo_teste.txt.

>touch arquivo_teste.txt

15. Mude a permissão do arquivo arquivo_teste.txt para que todas as pessoas usuárias possam ter acesso à leitura e escrita, e verifique se está correto com o comando ls -l;

>chmod a=rw arquivo_teste.txt

16. Tire a permissão de escrita do arquivo arquivo_teste.txt para todas as pessoas usuárias, verifique se está correto com o comando ls -l;

>chmod a-w arquivo_teste.txt

17. Volte à permissão do arquivo arquivo_teste.txt para a listada inicialmente utilizando o comando chmod 644 arquivo_teste.txt.

>chmod u+w arquivo_teste.txt

18. Liste todos os processos.

>ps

19. Agora use o comando sleep 30 &.

>sleep 30 &

20. Use a listagem de processos para encontrar o PID do processo que está executando o comando sleep 30 e termine a sua execução (mate o processo).

>jobs <br>
kill %1

23. Execute novamente o comando sleep 30, mas agora sem o &. Depois, faça com que ele continue executando em background.

>sleep 30 <br>
(ctrl + z) <br>
bg 