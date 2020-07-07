<!-- markdownlint-disable MD033 -->
# Criando Apigee proxy

|Sequência|Procedimento|
|:--:|:--|
|01|Se registrar e logar no Apigee <https://apigee.com>|
|02|Em `Developer` acessar a opção `API Proxies` e escolher `Reverse proxy`|
|03|**Proxy Name**. Exemplo: <BR />`api-user-authentication`|
|04|**Proxy Base Path**. Exemplo (`\v1` é a versão): <BR />`api-user-authentication\v1`|
|05|**Existing API**. Exemplo (são os *targets endpoints*): <BR />`https://api-user-authentication.herokuapp.com`|
|06|**Description**. Exemplo: <BR />`API para autenticar usuário usando login e senha. A API vai gerar um token JWT, se tiver sucesso, e retornar o token no corpo da resposta da requisição http.`|
|07|Avançar para **Policies** e selecionar a opção `Pass through (no authorization)`|
|08|Avançar para **Virtual hosts** e selecionar as opções `VIRTUAL HOST`, `secure` e `default`|
|09|Avançar para **Sumary** e selecionar as opções `prod` e `test`|
|10|Avançar para gerar as URLs. Exemplo:<BR /><BR />Default:<BR /><ul><li>test: `http://devextremis-eval-test.apigee.net/api-user-authentication/v1`</li><li>prod: `http://devextremis-eval-prod.apigee.net/api-user-authentication/v1`</li></ul>Secure:<BR /><ul><li>test: `https://devextremis-eval-test.apigee.net/api-user-authentication/v1`</li><li>prod: `https://devextremis-eval-prod.apigee.net/api-user-authentication/v1`</li></ul>|
|11|Retorar para *Developer*, acessar *API Proxies* e clicar em na API. Exemplo: `api-user-authentication`|
|12|Selecionar a guia *DEVELOP* para a criação das políticas de acesso clicando no `+` em `Policies`|
|13|Adicionar Políticas:<br /><br /><ol><li>Tipo *Assign Message* : `Definir Chave Privada JWT`</li><li>Tipo *Assign Message* : `Incluir JWT Token Header`</li><li>Tipo *Generate JWT* : `Gerar JWT Token`</li></ol>|
|14|Clicar em `Save` para salvar as políticas criadas. Este procedimento realiza uma `Save Revision`|
|15|Clicar em *PreFlow*, e depois: <br /><ol><li>Clicar em *+ Step*. Selecionar a aba *Existing* e adicionar a politica criada `Definir Chave Privada JWT`</li><li>Clicar em *+ Step*. Selecionar a aba *Existing* e adicionar a politica criada `Incluir JWT Token Header`</li><li>Clicar em *+ Step*. Selecionar a aba *Existing* e adicionar a politica criada `Gerar JWT Token`</li></ol>|
|16|Adicionar outro Proxy Endpoint clicando no `+` em default. Na nova janela *New Conditional Flow*, digitamos:<br /><ul><li>Flow Name: `Autenticação e autorização`</li><li>Condition Type: `Path and Verb`</li><li>Path: `/login`</li><li>Verb: `POST`</li></ul>|
|17|Testar o proxy clicando na aba *Trace*, selecionar em *Deployment to Trace*, `Environment prod, Revision 1`, e clicar em *Start Trace Session*|
|18|Validar no Postman usando `/login` na url da API, usando o Body para enviar o email e senha (o token será validado pelo Apigee)|

## Policies

### Definir Chave Privada JWT

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AssignMessage async="false" continueOnError="false" enabled="true" name="Definir-Chave-Privada-JWT">
    <DisplayName>Definir Chave Privada JWT</DisplayName>
    <Properties/>
    <AssignVariable>
        <Name>private.key</Name>
        <Value>SmVzdXMgw6kgbyDDum5pY28gc2FsdmFkb3Ih</Value>
    </AssignVariable>
    <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables>
    <AssignTo createNew="false" transport="http" type="request"/>
</AssignMessage>
```

### Incluir JWT Token Header

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<AssignMessage async="false" continueOnError="false" enabled="true" name="Incluir-JWT-Token-Header">
    <DisplayName>Incluir JWT Token Header</DisplayName>
    <Properties/>
    <Add>
        <Headers>
            <Header name="token">{jwt-variable}</Header>
        </Headers>
    </Add>
    <IgnoreUnresolvedVariables>true</IgnoreUnresolvedVariables>
    <AssignTo createNew="false" transport="http" type="request"/>
</AssignMessage>
```

### Generate JWT

```xml
<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<GenerateJWT async="false" continueOnError="false" enabled="true" name="Gerar-JWT-Token">
    <DisplayName>Gerar JWT Token</DisplayName>
    <Algorithm>HS256</Algorithm>
    <SecretKey>
        <Value ref="private.key"/>
    </SecretKey>
    <Subject>subject-subject</Subject>
    <Issuer>urn://apigee-edge-JWT-policy-test</Issuer>
    <Audience>audience1,audience2</Audience>
    <ExpiresIn>8h</ExpiresIn>
    <AdditionalClaims>
        <Claim name="extremis" type="string">project</Claim>
    </AdditionalClaims>
    <OutputVariable>jwt-variable</OutputVariable>
</GenerateJWT>
```

[Voltar](conteudo2.md)
