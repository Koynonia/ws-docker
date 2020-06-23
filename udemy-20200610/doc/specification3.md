# 15. Planejando a terceira especificação

Conforme os [requisitos](requirements.md), segue o planejamento abaixo.

## Especificação para a Inclusão dos dados de crescimento da criança

- **Qual é o path?**
  /progress GET
  /progress POST
  /progress/{id} GET
  /progress/{id} PUT
  /progress/{id} DELETE
- **Quais são os parâmetros do request?**
  token JWT HEADER
  {id} progress PATH, quando necessário
- **Qual é o formato da resposta?**
  JSON
- **Qual é  o formato do request?**
  JSON
- **Qual é o request body (corpo da requisição)?**
  id, height, weight, headCircumference, dateProgress e account(id, email, firstName,dateBirth, gender  e lastName)
- **Qual é o response body (corpo da resposta)?**
  id, height, weight, headCircumference, dateProgress e account(id, email, firstName,dateBirth, gender  e lastName)
- **Qual é o status da resposta para operação de sucesso?**
  200 - ok GET
  201 - Criado POST
  202 - Aceito PUT
  204 - Sem conteúdo DELETE
- **Qual é a resposta para operação de erro no request?**
  400 -  Dados request enviados incorretos
- **Quais são as respostas para operações de erro de regra de negógio?**
  401 - Token invalido, inexistente ou expirado
  404 - Recurso {id} não encontrado
- **Qual é a resposta para operação de erro no servidor?**
  500 - Erro no servidor

## Recursos

| Recursos | Descrição |
| :---: | :--- |
|1| [REST: Princípios e boas práticas](https://blog.caelum.com.br/rest-principios-e-boas-praticas/)|
|2|[Métodos de requisição HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)|
|3|[Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
|4|[Link do convite do projeto no Trello](https://trello.com/invite/b/4eTU8iBJ/5ff76a13305f4b06d39fcf4e9c8b7bac/aprenda-a-criar-especifica%C3%A7%C3%B5es-de-apis-com-swagger-e-openap)
|5|[API criada da 2ª Especificação](../project-children-progress/expecificacao_inclusao_dados_crianca.yml)|

[Voltar](conteudo1.md)
