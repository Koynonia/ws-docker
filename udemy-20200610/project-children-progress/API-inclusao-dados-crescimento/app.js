import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logger from "morgan";

import progressRouter from "./routes/progressRouter";
import progressModel from "./model/progressModel";
import dataProgress from "./data/progress.json"

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

/* Verifica se já existe na base progress registros, senão chama a função para iniciar os registros */
db.collection("progresses").findOne({}, function (err, result) {
  if (err) throw err;
  if (!result) {
    init();
  }
});

/** Cria a conta Admin no sistema na primeira execução */
function init() {
   /* Cria o objeto a ser salvo no banco */
  let progress = new progressModel(dataProgress);

  progress.save((err) => {
    if (err) {
      console.error("Erro: " + err);
    } else {
      console.log("[app.js] Progresso para o usuário admin criado com sucesso!");
    }
  });
}

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/progress', progressRouter);

export default app;
