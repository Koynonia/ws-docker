import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logger from "morgan";
import Cryptr from "cryptr";

import accountRouter from "./routes/accountRouter";
import AccountModel from "./model/accountModel";
import dataAccount from "./data/account.json";

const app = express();

/* Conexão com o Banco de Dados */
mongoose.connect(process.env.MONGODB_URI, {
  /* Adicionado para resolver DeprecationWarnings */
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false,
});
const db = mongoose.connection;
db.on("error", console.error.bind(console, "[app.js] Erro de conexão!"));

/* Verifica se já existe na base accounts registros, senão chama a função para iniciar os registros */
db.collection("accounts").findOne({}, function (err, result) {
  if (err) throw err;
  if (!result) {
    init();
  }
});

/** Cria a conta Admin no sistema na primeira execução */
function init() {
  /* Encripta a senha com o algoritmo AES256 */
  let securePass = new Cryptr("aes256");
  let password = securePass.encrypt(dataAccount.password);
  dataAccount.password = password;

  /* Cria o objeto a ser salvo no banco */
  let account = new AccountModel(dataAccount);

  account.save((err) => {
    if (err) {
      console.error("Erro: " + err);
    } else {
      console.log("[app.js] Conta admin criada com sucesso!");
    }
  });
}

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/accounts", accountRouter);

export default app;
