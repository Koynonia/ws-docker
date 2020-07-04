# Implementando APIs com Apigee + Node.js + Docker + Heroku

[Voltar](../README.md)

## Conteúdo 2

Implementação de 4 microsserviços, das 4 APIs, continuando o que foi feito no conteúdo 1 "Aprenda a Criar Especificações de APIs com Swagger e OpenAPI".

### Serão apresentados

- Os conceitos de Gerenciamento de APIs
- Os conceitos da arquitetura de Microsserviços
- Utilizar a ferramenta de gerenciamento de APIs Apigee
- Planejar a implementação de APIs
- Implementar APIs usando a especificação OpenAPI
- Criar variáveis, coleções e testes automatizados de APIs no Postman
- Criar microsserviços em containers usando Docker
- Implementar APIs usando Node JS + Framework Express + Mongoose
- Fazer deploy de APIs na PaaS Heroku, usando containers
- Fazer exposição e segurança de APIs usando o Apigee

### O que se pode aprender

- Conhecimento para implementar APIs usando a especificação OpenAPI
- Conhecimento para implementar APIs usando Node JS com framework Express
- Conhecimento para implementar APIs usando container Docker
- Conhecimento para fazer deploy de APIs (containers) na cloud PaaS Heroku
- Conhecimento para gerenciar APIs (acessos, métricas, segurança, etc) usando o Apigee do Google
- Conhecimento para criar testes de APIs automatizados no Postman
  
### Requisitos ou pré-requisitos

- Conhecer o básico de APIs.
- Conhecer a especificação OpenAPI.
- Conhecer o básico de REST.
- Conhecer o básico de Docker e da biblioteca Node JS.
- Conhecer Lógica de Programação.
- Conhecer a linguagem JavaScript.
- Conhecer o básico do banco NoSql Mongo DB

### Seção 1: Introdução

| Item | Descrição |
| :---: | :--- |
|01|Introdução e conhecendo a solução final|
|02|O que vou aprender|
|03|O que não vou aprender|
|04|Dicas gerais - [Conhecer o conteúdo 1](conteudo1.md)|
|05|Dicas gerais - [Ferramentas](services.md)|
|06|Dicas gerais - [Linkedin](general.md)|
|07|Dicas gerais - [Udemy](general.md)|
|08|[Sobre este projeto](about.md)|

### Seção 2: Conceitos

| Item | Descrição |
| :---: | :--- |
|09|[O que é gerenciamento de API?](apirest.md)|
|10|[O que é Microsserviços?](https://medium.com/trainingcenter/microservi%C3%A7os-dos-grandes-mon%C3%B3litos-%C3%A0s-pequenas-rotas-adb70303b6a3)|
|11|[O que é Node.js?](https://medium.com/thdesenvolvedores/node-js-o-que-%C3%A9-por-que-usar-e-primeiros-passos-1118f771b889)|
|12|[O que é Express framework?](https://medium.com/thdesenvolvedores/node-js-o-que-%C3%A9-por-que-usar-e-primeiros-passos-1118f771b889), aqui uma [Introdução](https://developer.mozilla.org/pt-BR/docs/Learn/Server-side/Express_Nodejs/Introdu%C3%A7%C3%A3o)|
|13|[O que é Docker?](https://medium.com/thdesenvolvedores/docker-para-desenvolvedores-que-vantagem-eu-teria-com-docker-ee8eb77cfe8d), aqui as [vantagens](https://medium.com/entria/como-docker-pode-agilizar-sua-vida-8dae7a4f266)|
|14|[O que é Heroku?](http://www.timeraposa.com.br/2017/11/conheca-a-heroku/) e [PAAS](https://pt.wikipedia.org/wiki/Plataforma_como_servi%C3%A7o)|
|15|[O que é Apigee?](https://medium.com/luizalabs/disponibilizando-servi%C3%A7os-por-meio-de-api-proxies-29130fce1968) e [Monitoramento de API](https://www.infoq.com/br/news/2018/12/apigee-gcp-monitoring-extensions/)|
|16|[O que é Postman?](https://medium.com/trainingcenter/indo-al%C3%A9m-com-postman-3f95726e0bb4)|
|17|[O que é MongoDB](https://medium.com/@thaisdalencar/mongodb-como-relacionar-dados-3e6e8f136590), [NoSQL](https://www.devmedia.com.br/comparando-o-nosql-ao-modelo-relacional/30917) e [Mongoose](https://medium.com/@thiagoluiz.nunes/mongoose-criando-queries-d72d38e8fece)|

### Seção 3: Planejando a Implementação das APIs

| Item | Descrição |
| :---: | :--- |
|18|Implementar a criação da conta de usuário - [Link do projeto no Trello](https://trello.com/b/jpXdIVKM)|
|19|Implementar a autenticação do usuário|
|20|Implementar a inclusão dos dados de crescimento da criança|
|21|Implementar o relatório de desenvolvimento de crescimento da criança|

### Seção 4: Implementando no Node.JS + Express + MongoDB

| Item | Descrição |
| :---: | :--- |
|22|[Criando e estruturando o projeto da API](suport.md#comandos)|
|23|[Convertendo o projeto para ECMAScript 06 e iniciando API](suport.md#es6)|
|24|[API Criação da conta de usuário](api-conta-usuario.md)|
|25|[API Autenticação de usuário](api-autenticacao-usuario.md)|
|26|[API Inclusão dos dados de crescimento](api-inclusao-dados-crescimento.md)|
|27|[API relatório de desempenho de crescimento da criança](api-relatorio-desempenho-crescimento.md)

### Seção 5: Implementando os containers no Docker e deploy no Heroku

| Item | Descrição |
| :---: | :--- |
|28|[Iniciando o build e deploy da API Criação da conta de usuário](heroku.md)|

[Voltar](../README.md)
