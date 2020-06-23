<!-- markdownlint-disable MD033 -->
# Criando e estruturando o projeto da API

[Voltar](conteudo2.md)

## Serviços

|Serviço|Recurso|
|:--|:--|
|Postman| Usar no método GET a url <http://suport-eval-prod.apigee.net/token> para obter o token JWT.|

## Recursos

|Recurso|Descrição|
|:--|:--|
|ES6|A especificação do [JavaScript ES6](https://medium.com/iclinic/es6-es2015-o-que-mudou-c22d9308f52d) (ECMAScript 6)|
|Rimraf|[Rimraf](https://devpleno.com/hands-on-rimraf/) - Remove diretórios inteiros mesmo que eles não estejam vazios|
|Git|[Guia prático](http://rogerdudler.github.io/git-guide/index.pt_BR.html) - apenas um guia prático para começar com git. sem complicação ;)|
|Apigee|Obter o token JWT <http://suport-eval-prod.apigee.net/token>|

<a name="comandos"></a>

## Comandos a serem executados

|Sequência|Recurso|Comando|
|:--:|:--|:--|
|01|<a name="es6"></a>ECMAScript 6|No diretorio raiz do projeto, para criar o diretorio (API-criacao-conta-usuario) pelo Express digitar: <br /><br />`express --git --force --no-view API-criacao-conta-usuario`<br /><br />- Criar a pasta model e o model [accountModel.js](../project-children-progress/API-criacao-conta-usuario/model/accountModel.js).<br />- Alterar os arquivos [www](../project-children-progress/API-criacao-conta-usuario/bin/www) e [app.js](../project-children-progress/API-criacao-conta-usuario/app.js) para o padrão [ES6](https://medium.com/iclinic/es6-es2015-o-que-mudou-c22d9308f52d).|
|02|npm|No diretorio criado pelo Express (API-criacao-conta-usuario), instalar as dependências do package.json, digitando: <br />`npm install`<br /><br />**Dependências de Projeto**: <br />`npm install mongoose mongoose-sequence jsonwebtoken cryptr -s`<br /><br />**Dependências de Desenvolvimento**: <br />`npm install babel-cli babel-preset-es2015 rimraf nodemon --save-dev`|
|03|babel|Na raiz do diretorio criar o arquivo [.babelrc](../project-children-progress/API-criacao-conta-usuario/.babelrc)|
|04|scripts|No [package.json](../project-children-progress/API-criacao-conta-usuario/package.json) alterar a tag `"scripts":` criando `ambiente`s de execução (test, build, dev e start). <br />O recurso `nodemon` permite o node reiniciar autmomaticamente quando aplicada alguma alteração. <br />Para **deploy** no Heroku usaremos o `build`|
|05a|Windows|Usando o Powershell, digitar as váriáveis do ambiente (ao reiniciar são perdidas): <br />- variável de porta: `$env:PORT=3000`<br />- variável do servidor`$env:MONGODB_URI="mongodb://localhost:27017/local"`<br />- variável de debug:`$env:DEBUG="API-criacao-conta-usuario*"`<br />- variável de chave de acesso (Apigee):`$env:SECRET="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9"`<br /><br />Usando o CMD, digitar as variáveis do ambiente (ao reiniciar são perdidas): <br />- variável de porta: `SET PORT=3000`<br />- variável do servidor`SET MONGODB_URI=mongodb://localhost:27017/local`<br />- variável de debug:`SET DEBUG=API-criacao-conta-usuario*`<br />- variável de chave de acesso (Apigee):`SET SECRET=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9`|
|05b|MacOSX|Digitar as variáveis do ambiente (ao reiniciar são perdidas): <br />- variável de porta: `PORT=3000 export PORT`<br />- variável do servidor`MONGODB_URI="mongodb://localhost:27017/local" export MONGODB_URI`<br />- variável de debug:`DEBUG="API-criacao-conta-usuario*" export DEBUG`<br />- variável de chave de acesso (Apigee):`SECRET="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9" export SECRET`|
|06|npm|Executar o ambiente de desenvolvimento: `npm run dev`|

[Voltar](conteudo2.md)
