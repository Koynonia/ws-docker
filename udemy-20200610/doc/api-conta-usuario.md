<!-- markdownlint-disable MD033 -->
# API Criação da conta de usuário

[Voltar](conteudo2.md)

|Sequência|Recurso|Detalhe|
|:--:|:--|:--|
|01|Express|<ul><li>No diretório raiz executar o comando:<br />`express --git --force --no-view API-autenticacao-usuario`</li><li>Acessar o novo diretório criado:<br />`cd API-autenticacao-usuario/`</li><li>Executar o comando:<br />`npm install`</li></ul>|
|02|Model|Completar o model criado [accountModel.js](../project-children-progress/API-criacao-conta-usuario/model/accountModel.js) seguindo a especificação OpenAPI.|
|03|Data|Criar o diretório `data` e o arquivo de carga de dados ([account.json](../project-children-progress/API-criacao-conta-usuario/data/account.json)) para, ao iniciar o app, se crie a 1ª conta (`admin`).|
|04|App|<ul><li>Atualizar o arquivo [app.js](../project-children-progress/API-criacao-conta-usuario/app.js) com o import do arquivo de carga ([account.json](../project-children-progress/API-criacao-conta-usuario/data/account.json)):<br />`import dataAccount from "./data/account.json";`</li><br /><li>Importa a biblioteca responsável pela encriptação de senha:<br />`import Cryptr from "cryptr";`</li><br /><li> Após a constante de conexão com o banco, criar a variável que irá encriptar a senha:<br />`let securePass = new Cryptr("aes256");`<br />`let password = securePass.encrypt(dataAccount.password);`</li><br /><li>Criar o objeto a ser salvo no banco:<br />`let account = new AccountModel(dataAccount);`<br />`account.save(err => {`<br />`if(err){`<br />`console.error("Erro: " + err);`<br />`} else {`<br />`console.log("Conta admin criada com sucesso!");`<br />`}`<br />`});`</li></ul>|
|05|Routes|<ul><li>Criar as rotas da documentação OpenAPI na pasta `routes`, para o path `/account` no arquivo [accountRouter.js](../project-children-progress/API-criacao-conta-usuario/routes/accountRouter.js).</li><br /><li>O arquivo `index.js` não é necessário neste projeto, por isso pode ser excluído.</li><br />li>O arquivo `users.js` não é necessário neste projeto, por isso pode ser excluído.</li><br /><li>O diretório `public` não é necessário neste projeto, por isso pode ser excluído.</li><br /><li>Editar o arquivo [app.js](../project-children-progress/API-criacao-conta-usuario/app.js) alterando a rota do index.js para a account:<br />`import accountRouter from "./routes/accountRouter";`<br />`app.use('/accounts', accountRouter);`</li></ul>|
|06|Npm|<ul><li>Executar os comandos para configurar as variáveis de ambiente conforme demonstrado [aqui](suport.md)<br /><li>Executar o ambiente de desenvolvimento::</li>`npm run dev`|
|07|Browser|Ao acessar o endereço <http://localhost:8081> se terá acesso à ferramenta `mongo-express` pelo Docker através do [docker-compose](../project-children-progress/docker-compose.yml), um gerenciador simples para o Mongodb|
|08|Postman|Executar os testes nos verbos HTTP nas rotas implementadas, informando o token do serviço Apigee (GET): <http://suport-eval-prod.apigee.net/token>, e informando o Body quando necessário.|

[Voltar](conteudo2.md)
