<!-- markdownlint-disable MD033 -->
# Build e Deploy no Heroku

- API Criação da conta de usuário
- API Autenticação de usuário
- API Inclusão dos dados de crescimento
- API Relatório de desempenho de crescimento da criança

|Sequência|Procedimento|
|:--:|:--|
|01|Renomear o arquivo `www` para `www.js` na pasta `bin`|
|02|Editar as cláusulas `build`, `dev`, `start` do arquivo `package.json` <BR /><BR /><ul><li>`"build": "rimraf dist/ && babel ./ --out-dir dist/ --ignore ./node_modules,./.babelrc,./package.json,./npm-debug.log,./Dockerfile --copy-files",`</li><li>`"dev": "nodemon --exec babel-node ./bin/www.js",` </li><li>`"start": "node bin/www.js"`</li></ul>|
|03|Criar o arquivo Dockerfile na raiz da API com o conteúdo: <BR /><BR />`FROM node:10`<BR />`WORKDIR /usr/src/app`<BR />`COPY package*.json ./`<BR />`RUN npm install`<BR />`COPY dist/ ./`<BR />`CMD ["npm", "start"]`|
|04|Executar o comando `npm run build`|
|05|Editar o arquivo `.gitignore` e adicionar `/dist`|
|06|Logar no Heroku no terminal: `heroku login`|
|07|Logar no container Heorku: `heroku container:login`|
|08|Criar a app no Heroku: `heroku create --app=api-user-account-creation` (criar outro nome de api)|
|09|Criar as variáveis de ambiente (o banco de dados não é necessário, pois o Heroku gerencia automaticamente):<BR /><BR /><ul><li>Token Apigee: <BR />`heroku config:set SECRET=SmVzdXMgw6kgbyDDum5pY28gc2FsdmFkb3Ih --app=api-user-account-creation`</li><BR /><li>Configurar o NODE para o ambiente de Produção: <BR />`heroku config:set NODE_ENV=production --app=api-user-account-creation`</li><BR /><li>Criar Pipeline: <BR />`heroku pipelines:create apis-project-children-progress --app=api-user-account-creation`</li><BR /><li>Adicionar o Mongodb (criar outro nome para o mongolab): <BR />`heroku addons:create mongolab --name=app-mongobd --app=api-user-account-creation`</li><BR /><li>Deploy do container (necessário o Docker estar on)`heroku container:push web --app=api-user-account-creation`</li><BR /><li>Disponibilizar em produção: `heroku container:release web --app=api-user-account-creation`</li></ul>|
|10|Validar pelo Postman o funcionamento da API usando o link criado pelo Heroku (clicar no botão *Open app*):<BR />`https://api-user-account-creation.herokuapp.com/accounts`|

[Voltar](conteudo2.md)
