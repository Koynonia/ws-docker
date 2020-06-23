<!-- markdownlint-disable MD033 -->
# API Criação da conta de usuário

[Voltar](conteudo2.md)

|Sequência|Recurso|Detalhe|
|:--:|:--|:--|
|01|Model|Completar o model criado [accountModel.js](../project-children-progress/API-criacao-conta-usuario/model/accountModel.js) seguindo a especificação OpenAPI.|
|02|Data|Criar o diretório `data` e o arquivo de carga de dados ([account.json](../project-children-progress/API-criacao-conta-usuario/data/account.json)) para, ao iniciar o app, se crie a 1ª conta (`admin`).|
|03|App|<ul><li>Atualizar o arquivo [app.js](../project-children-progress/API-criacao-conta-usuario/app.js) com o import do arquivo de carga ([account.json](../project-children-progress/API-criacao-conta-usuario/data/account.json)):<br />`import dataAccount from "./data/account.json";`</li><br /><li>Importa a biblioteca responsável pela encriptação de senha:<br />`import Cryptr from "cryptr";`</li><br /><li> Após a constante de conexão com o banco, criar a variável que irá encriptar a senha:<br />`let securePass = new Cryptr("aes256");`<br />`let password = securePass.encrypt(dataAccount.password);`</li><br /><li>Criar o objeto a ser salvo no banco:<br />`let account = new AccountModel(dataAccount);`<br />`account.save(err => {`<br />`if(err){`<br />`console.error("Erro: " + err);`<br />`} else {`<br />`console.log("Conta admin criada com sucesso!");`<br />`}`<br />`});`</li></ul>|
|04|Routes|<ul><li>Criar as rotas da documentação OpenAPI na pasta `routes`, para o path `/account` no arquivo [accountRouter.js](../project-children-progress/API-criacao-conta-usuario/routes/accountRouter.js).</li><br /><li>O arquivo `index.js` não é necessário neste projeto, por isso pode ser excluído.</li><br />li>O arquivo `users.js` não é necessário neste projeto, por isso pode ser excluído.</li><br /><li>O diretório `public` não é necessário neste projeto, por isso pode ser excluído.</li><br /><li>Editar o arquivo [app.js](../project-children-progress/API-criacao-conta-usuario/app.js) alterando a rota do index.js para a account:<br />`import accountRouter from "./routes/accountRouter";`<br />`app.use('/accounts', accountRouter);`</li></ul>|

[Voltar](conteudo2.md)
