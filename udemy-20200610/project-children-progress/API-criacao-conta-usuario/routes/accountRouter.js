import express from "express";
import AccountModel from "../model/accountModel";
import Cryptr from "cryptr";
import jwt from "jsonwebtoken";

const accountRouter = express.Router();

/* Encripta a senha com o algoritmo AES256 */
let securePass = new Cryptr("aes256");

/* Verbos HTTP para a rota raiz */
accountRouter
  .route("/")
  .get((req, resp) => {
    try {
      /* Capturar o token do Header e trativas */
      let token = req.headers["token"];
      if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
          if (err) {
            resp.statusMessage = "Unauthorized";
            resp.status(401).json({
              condigo: "2",
              mensagem: "Token inválido, inexistente ou expirado!",
            });
          } else if (decoded) {
            AccountModel.find(
              {},
              {
                firstName: 1,
                lastName: 1,
                email: 1,
                phoneNumber: 1,
                dateBirth: 1,
                gender: 1,
              },
              (err, account) => {
                if (err) {
                  resp.statusMessage = "Bad request";
                  resp.status(400).json({
                    condigo: "3",
                    mensagem: "Dados request enviados incorretos!",
                  });
                } else {
                  resp.statusMessage = "OK";
                  resp.status(200).json(account);
                }
              }
            );
          }
        });
      } else {
        resp.statusMessage = "Unauthorized";
        resp.status(401).json({
          condigo: "2",
          mensagem: "Token inválido, inexistente ou expirado!",
        });
      }
    } catch (error) {
      console.error(error);
      resp.statusMessage = "Internal error";
      resp.status(500).json({
        condigo: "1",
        mensagem: "Erro no servidor!",
      });
    }
  })
  .post((req, resp) => {
    try {
      /* Capturar o token do Header e trativas */
      let token = req.headers["token"];
      if (token) {
        jwt.verify(token, process.env.SECRET, function (err, decoded) {
          if (err) {
            resp.statusMessage = "Unauthorized";
            resp.status(401).json({
              condigo: "2",
              mensagem: "Token inválido, inexistente ou expirado!",
            });
          } else if (decoded) {
            /* Encripta a senha recebida no Body*/
            let password = securePass.encrypt(req.body.password);
            req.body.password = password;

            /* Cria o objeto a ser salvo no banco */
            let account = new AccountModel(req.body);
            /* Salva na base após tratativa */
            account.save((err) => {
              if (err) {
                console.error(err);
                resp.statusMessage = "Bad request";
                resp.status(400).json({
                  condigo: "3",
                  mensagem: "Dados request enviados incorretos!",
                });
              } else {
                resp.statusMessage = "Criado";
                /* Deletado o atributo password do objeto account */
                let accountAux = account.toObject();
                delete accountAux["password"];
                resp.status(201).json(accountAux);
              }
            });
          }
        });
      } else {
        resp.statusMessage = "Unauthorized";
        resp.status(401).json({
          condigo: "2",
          mensagem: "Token inválido, inexistente ou expirado!",
        });
      }
    } catch (error) {
      console.error(error);
      resp.statusMessage = "Internal error";
      resp.status(500).json({
        condigo: "1",
        mensagem: "Erro no servidor!",
      });
    }
  });

/* Cria validações para o next() para a rota Id e redireciona para o verbo HTTP correto */
accountRouter.use("/:id", (req, resp, next) => {
  try {
    /* Capturar o token do Header e trativas */
    let token = req.headers["token"];
    if (token) {
      jwt.verify(token, process.env.SECRET, function (err, decoded) {
        if (err) {
          resp.statusMessage = "Unauthorized";
          resp.status(401).json({
            condigo: "2",
            mensagem: "Token inválido, inexistente ou expirado!",
          });
        } else if (decoded) {
          /* Busca pelo Id */
          AccountModel.findById(req.params.id, (err, account) => {
            if (err || !account) {
              console.error(err);
              resp.statusMessage = "Not found";
              resp.status(404).json({
                condigo: "4",
                mensagem: `Recurso ${req.params.id} não encontrado!`,
              });
            } else {
              /* Permite continuar o processamento */
              req.account = account;
              next();
            }
          });
        }
      });
    } else {
      resp.statusMessage = "Unauthorized";
      resp.status(401).json({
        condigo: "2",
        mensagem: "Token inválido, inexistente ou expirado!",
      });
    }
  } catch (error) {
    console.error(error);
    resp.statusMessage = "Internal error";
    resp.status(500).json({
      condigo: "1",
      mensagem: "Erro no servidor!",
    });
  }
});

/* Verbos HTTP para a rota Id */
accountRouter
  .route("/:id")
  .get((req, resp) => {
    resp.statusMessage = "OK";
    /* Deletado o atributo password do objeto account */
    let accountAux = req.account.toObject();
    delete accountAux["password"];
    resp.status(200).json(accountAux);
  })
  .put((req, resp) => {
    /* Encripta a senha recebida no Body*/
    let password = securePass.encrypt(req.body.password);
    req.account.password = password;
    req.account.firstName = req.body.firstName;
    req.account.lastName = req.body.lastName;
    req.account.email = req.body.email;
    req.account.dateBirth = req.body.dateBirth;
    req.account.phoneNumber = req.body.phoneNumber;
    req.account.gender = req.body.gender;
    /* Salva na base após tratativa */
    req.account.save((err) => {
      if (err) {
        console.error(err);
        resp.statusMessage = "Bad request";
        resp.status(400).json({
          condigo: "3",
          mensagem: "Dados request enviados incorretos!",
        });
      } else {
        resp.statusMessage = "Aceito";
        resp.status(201).send("");
      }
    });
  })
  .delete((req, resp) => {
    req.account.remove((err) => {
      if (err) {
        console.error(err);
        resp.statusMessage = "Bad request";
        resp.status(400).json({
          condigo: "3",
          mensagem: "Dados request enviados incorretos!",
        });
      } else {
        resp.statusMessage = "Sem conteúdo";
        resp.status(204).send("");
      }
    });
  });

/* Exportando para uso no sistema */
export default accountRouter;
