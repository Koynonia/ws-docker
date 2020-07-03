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

[Voltar](conteudo2.md)
