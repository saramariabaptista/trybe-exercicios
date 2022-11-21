### HTML E CSS 

##### AULA 1 

- Internet: É a rede global de computadores.

- Web: Conjunto de seviços que utilizam a internet.

- Cliente: Firefox, mozila, Chrome. É uma aplicação que está conectada a internet. Sua função é receber a interação da pessoa usuária e traduzi-la em uma requisição para outro computador, também conectado à internet chamado Servidor.

- Servidor: é um computador conectado à internet com capacidade de armazenamento e processamento acima da média, com objetivo de conectar outros computadores em uma rede. Sua tarefa se resume a esperar por requisições de outros computadores (Clientes), processar as requisições e fornecer os resultados desse processamento de volta para seus Clientes. Diferente do seu computador pessoal, um Servidor tem um software específico em execução que irá dizer como ele deve responder a uma requisição do seu navegador.

- Endereço IP: Identidade do computador, como se fosse o nome. A sigla IP refere-se a Internet Protocol. O endereço IP é um identificador numérico para um dispositivo.

- TCP/IP: De forma simples, o TCP/IP é o principal protocolo de envio e recebimento de dados na internet. TCP significa Transmission Control Protocol (Protocolo de Controle de Transmissão). 

- ISP: ISP ou Internet Service Provider é o seu provedor de internet. É qualquer empresa que nos fornece acesso ao maravilhoso mundo Web. Sem os seus serviços, não conseguiríamos fazer a nossa busca por www.google.com, pois não estaríamos conectados à internet.

- DNS: DNS ou Domain Name System é um dispositivo com uma base de dados distribuída que gerencia os nomes de serviços, computadores ou qualquer dispositivo conectado à internet. Ele é usado para relacionar o endereço nominal (google.com) com o endereço IP (142.250.190.78). Os servidores DNS são responsáveis por localizar e traduzir para números (um endereço IP) as buscas por sites que digitamos no navegador.

- Port Number: O número de porta é um número de 16 bits utilizado para identificar uma porta específica no servidor, e está sempre associado ao endereço IP. O Port number é uma forma de identificar um processo específico encaminhado para o servidor.

- Host: O Host é qualquer dispositivo conectado à rede que pode transmitir ou receber pacotes IP, seja como cliente, seja como servidor ou qualquer outro tipo de modelo, sendo que cada host tem um endereço IP único. Dentre esses dispositivos temos computadores, tablets, smarts TV, smartphones, entre outros. Para o site que estamos buscando, www.google.com, o host é o servidor web que hospeda a página na web.

- HTTP: Hyper-text Transfer Protocol é o protocolo utilizado para a comunicação entre navegadores e servidores na internet.

- URL: É a sigla para Uniform Resource Locators e identifica um recurso web específico. Podemos, como exemplo, mudar a nossa busca para https://www.google.com/travel/flights para pesquisar por preços de passagens aéreas. O URL identifica o protocolo que será utilizado para nos comunicarmos com o servidor (https), o nome do host (google.com) e o recurso que queremos acessar (travel/flights).

#### O modelo Cliente-Servidor e a estrutura de uma aplicação web

- A estrutura da sua página é definida por uma linguagem de marcação de texto chamada HTML, que é a sigla para Hyper text markup language. Quando uma pessoa usuária digita uma URL e pressiona Enter, o servidor processa a solicitação e envia o arquivo HTML de volta ao cliente. Os arquivos HTML contêm o conteúdo de um site e também links para quaisquer ativos ou códigos adicionais necessários para exibir o site corretamente.

- A aparência da página é definida por uma linguagem de estilização chamada CSS, que significa Cascading Style Sheets. O CSS é uma linguagem que te permite descrever como os elementos definidos pelo HTML devem ser estilizados. O CSS te permite alterar a fonte, a cor, o tamanho e até mesmo incluir recursos como animações e áudio.

- As interações com a pessoa usuária são definidas por uma terceira linguagem: o JavaScript. É o JavaScript que confere à página um comportamento dinâmico.

#### **HTML**

- É uma linguagem de marcação de texto. (*NÃO* é uma linguagem de programação.)
- Esqueleto de uma página WEB
- Estrutura primária, com diversas tags para representar as informações que queremos transmitir.

##### 1. Tags

:light: "Tags podem ou não conter um fechamento."

<nomeTag atributo="valor">
 conteudo da tag 
 </nomeTag>
 
 <p id="texto">
  Olá mundo
  </p>

head: onde ficam as configurações ocultas.
body: Todas as tags visiveis. 
html lang: idioma da página
title: título da tab
h1: título
h2: título inferior ao 1
p: parágrafo
br: quebra de linha. 
em: itálico
img: imagem. Fonte: url ou local. 
alt: descrição da imagem caso não carregue.

##### [em]Links[/em]
- Link externo
<br><a href=> (href é o url do link que quer colocar)
target é para abrir em uma nova aba.
- Link Interno<br>
<a (href)= 'O+nome+do+link'>
<a (href)=Nome+Do+Link+Para+Este+Local>
