import express from "express";
import AccountModel from "../model/accountModel";
import Cryptr from "cryptr";
import jwt from "jsonwebtoken";

const authRouter = express.Router();

/* Encripta a senha com o algoritmo AES256 */
let securePass = new Cryptr("aes256");

authRouter.route("/").post((req, resp) => {
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
          AccountModel.findOne(
            {
              email: req.body.email,
            },
            (err, account) => {
              if (err) {
                resp.statusMessage = "Bad request";
                console.error(err);
                resp.status(400).json({
                  condigo: "3",
                  mensagem: "Dados request enviados incorretos!",
                });
              } else if (!account) {
                resp.statusMessage = "Not Found";
                resp.status(404).json({
                  condigo: "4",
                  mensagem: "Usuário não encontrado!",
                });
              } else if (
                req.body.password != securePass.decrypt(account.password)
              ) {
                resp.statusMessage = "Unauthorized";
                resp.status(401).json({
                  condigo: "5",
                  mensagem: "Password incorreto!",
                });
              } else {
                resp.statusMessage = "OK";
                resp.status(200).json({
                  'token': token,
                  'account': {
                    id: account._id,
                    email: account.email,
                    lastNmae: account.lastNmae,
                    lastNmae: account.lastNmae,
                  },
                });
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
});

export default authRouter;
