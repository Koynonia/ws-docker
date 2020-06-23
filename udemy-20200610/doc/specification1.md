# 13. Planejando a primeira especificação

Conforme os [requisitos](requirements.md), segue o planejamento abaixo.

## Especificação Autenticação de Usuário

- **Qual é o path?**
  /login POST
- **Quais são os parâmetros do request?**
  
- **Qual é o formato da resposta?**
  JSON
- **Qual é  o formato do request?**
  JSON
- **Qual é o request body (corpo da requisição)?**
  email e password
- **Qual é o response body (corpo da resposta)?**
  token, id, email, firstName e lastName
- **Qual é o status da resposta para operação de sucesso?**
  200 - ok
- **Qual é a resposta para operação de erro no request?**
  400 -  Dados request enviados incorretos
- **Quais são as respostas para operações de erro de regra de negógio?**
  401 - Password incorreto
  404 - Usuário não encontrado
- **Qual é a resposta para operação de erro no servidor?**
  500 - Erro no servidor

## Recursos

| Recursos | Descrição |
| :---: | :--- |
|1| [REST: Princípios e boas práticas](https://blog.caelum.com.br/rest-principios-e-boas-praticas/)|
|2|[Métodos de requisição HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Methods)|
|3|[Códigos de status de respostas HTTP](https://developer.mozilla.org/pt-BR/docs/Web/HTTP/Status)
|4|[Link do convite do projeto no Trello](https://trello.com/invite/b/4eTU8iBJ/5ff76a13305f4b06d39fcf4e9c8b7bac/aprenda-a-criar-especifica%C3%A7%C3%B5es-de-apis-com-swagger-e-openap)
|5|[API criada confome a 1ª Especificação](../project-children-progress/especificacao_autenticacao_usuario.yml)

[Voltar](conteudo1.md)
