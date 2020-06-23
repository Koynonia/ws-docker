import express from "express";
import mongoose from "mongoose";
import cookieParser from "cookie-parser";
import logger from "morgan";
import authRouter from "./routes/authRouter";

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

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/login", authRouter);

export default app;
