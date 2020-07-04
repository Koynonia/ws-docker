<!-- markdownlint-disable MD033 -->
# Build e Deploy no Heroku

Os procedimentos abaixo devem ser realizados dentro do diretório de cada API's:

- API Criação da conta de usuário
- API Autenticação de usuário
- API Inclusão dos dados de crescimento
- API Relatório de desempenho de crescimento da criança

Abaixo o nome dos recursos servem como exemplo, sendo necessário ser um nome único pois o Heroku não permite o uso de nomes já criados.

|Sequência|Procedimento|
|:--:|:--|
|01|Renomear o arquivo `www` para `www.js` na pasta `bin`|
|02|Editar as cláusulas `build`, `dev`, `start` do arquivo `package.json` <BR /><BR /><ul><li>`"build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log,./Dockerfile --copy-files",`</li><li>`"dev": "nodemon --exec babel-node ./bin/www.js",` </li><li>`"start": "node bin/www.js"`</li></ul>|
|03|Criar o arquivo Dockerfile na raiz da API com o conteúdo: <BR /><BR />`FROM node:10`<BR />`WORKDIR /usr/src/app`<BR />`COPY package*.json ./`<BR />`RUN npm install`<BR />`COPY dist/ ./`<BR />`CMD ["npm", "start"]`|
|04|Executar o comando `npm run build`|
|05|Editar o arquivo `.gitignore` e adicionar `/dist`|
|06|Logar no Heroku no terminal: `heroku login`|
|07|Logar no container Heorku: `heroku container:login`|
|08|Criar um app no Heroku para a API (no diretório de cada API e usar outro nome para app). Exemplo: <BR /><BR /><ul><li>`heroku create --app=api-user-account-creation`</li><li>`heroku create --app=api-user-authentication`</li></ul>|
|09|Criar um Heroku Pipeline para o projeto (escolher outro nome). Exemplo: <BR /><ul><li>`heroku pipelines:create apis-project-children-progress`</li></ul>|
|10|Adicionar cada app à Pipeline do projeto, confirmando o `Stage` para `production` (é necessário já ter criado o app da API). Exemplo:<BR /><ul><li>`heroku pipelines:add apis-project-children-progress --app=api-user-account-creation`</li></ul>|
|11|Criar um Heroku mongolab (escolher outro nome). Exemplo:<BR /><ul><li>`heroku addons:create mongolab --name=app-mongobd`</li><ul>
|12|Adicionar o Mongodb para cada app de API. Exemplo: <BR /><ul><li>`heroku addons:attach app-mongobd --app=api-user-account-creation`</li></ul>|
|13|Configurar as variáveis de ambiente para cada app de API. Exemplo:<BR /><BR /><ul><li>Configurar o token Apigee: <BR />`heroku config:set SECRET=SmVzdXMgw6kgbyDDum5pY28gc2FsdmFkb3Ih --app=api-user-account-creation`</li><BR /><li>Configurar o NODE para o ambiente de Produção: <BR />`heroku config:set NODE_ENV=production --app=api-user-account-creation`</li></ul>|
|14|Deploy do container para cada app de API (necessário o Docker estar on). Exemplo:<BR /><ul><li>`heroku container:push web --app=api-user-account-creation`</li></ul>|
|15|Disponibilizar em produção para cada app de API. Exemplo: <BR /><ul><li>`heroku container:release web --app=api-user-account-creation`</li></ul>|
|16|Validar pelo Postman o funcionamento de cada API usando o link criado pelo Heroku (clicar no botão *Open app*). Exemplo:<BR /><ul><li>`https://api-user-account-creation.herokuapp.com/accounts`</li><li>`https://api-user-authentication.herokuapp.com/login`</li></ul>|

[Voltar](conteudo2.md)
