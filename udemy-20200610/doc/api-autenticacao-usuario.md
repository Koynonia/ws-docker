<!-- markdownlint-disable MD033 -->
# API Autenticação de usuário

[Voltar](conteudo2.md)

A implementação segue praticamente os mesmos moldes da [API Criação da conta de usuário](api-conta-usuario.md)).

|Sequência|Recurso|Detalhe|
|:--:|:--|:--|
|01|Express|<ul><li>No diretório raiz executar o comando:<br />`express --git --force --no-view API-autenticacao-usuario`</li><li>Acessar o novo diretório criado:<br />`cd API-autenticacao-usuario/`</li><li>Executar o comando:<br />`npm install`</li></ul>|
|02|API|Implementação da API Autenticação de usuário:<br /><ul><li>[www](../project-children-progress/API-autenticacao-usuario/bin/www)</li><li>[app.js](.../project-children-progress/API-autenticacao-usuario/app.js)</li><li>[authRouter](../project-children-progress/API-autenticacao-usuario/routes/authRouter.js)</li></ul>|
|03|Npm|<ul><li>Executar os comandos para configurar as variáveis de ambiente conforme demonstrado [aqui](suport.md)<br /><li>Executar o ambiente de desenvolvimento:</li>`npm run dev`|
|04|Browser|Ao acessar o endereço <http://localhost:8081> se terá acesso à ferramenta `mongo-express` pelo Docker através do [docker-compose](../project-children-progress/docker-compose.yml), um gerenciador simples para o Mongodb|
|05|Postman|Executar os testes nos verbos HTTP nas rotas implementadas, informando o token do serviço Apigee (GET): <http://suport-eval-prod.apigee.net/token>, e informando o Body quando necessário.|

[Voltar](conteudo2.md)
