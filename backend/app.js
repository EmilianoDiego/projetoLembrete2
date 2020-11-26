const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const Lembrete = require("./models/lembrete");
const User = require("./models/user");
const mongoose = require("mongoose");

const lembretes = [
  {
    id: "1",
    titulo: "Comprar Folhas A4",
    dataCadastro: "",
    dataPrevista: "",
    atividade: "Ir na libraria e comprar folhas A4",
  },
  {
    id: "2",
    titulo: "Fechar conta Itau",
    dataCadastro: "",
    dataPrevista: "",
    atividade: "Ir no banco Itau de Butantâ e fechar a conta 342 31 515151",
  },
  {
    id: "3",
    titulo: "encaminhar e-mail",
    dataCadastro: "",
    dataPrevista: "",
    atividade: "Encaminhar e-mail de cortesia para cliente do supermercado",
  },
];

function initRoutes() {
  //http://localhost:3000/api/lembretes
  app.get("/api/lembretes", (req, res, next) => {
    Lembrete.find().then((documents) => {
      console.log(documents);
      res.status(200).json({
        mensagem: "Tudo ok",
        lembretes: documents,
      });
    });
  });

  app.post("/api/lembretes", (req, res, next) => {
    const lembrete = new Lembrete({
      titulo: req.body.titulo,
      dataCadastro: req.body.dataCadastro,
      dataPrevista: req.body.dataPrevista,
      atividade: req.body.atividade,
    });
    lembrete.save();
    then((lembreteInserido) => {
      res.status(201).json({
        mensagem: "Lembrete inserido",
        id: lembreteInserido._id,
      });
    });
  });

  app.delete("/api/lembretes/:id", (req, res, next) => {
    Lembrete.deleteOne({ _id: req.params.id }).then((resultado) => {
      console.log(req.params);
      res.status(200).json({ mensagem: "Lembrete removido" });
    });
  });

  app.post("/user", async (req, res) => {
    const { email, password } = req.body;
    if (!email) return res.status(400).send("Email é obrigatório.");
    if (!password) return res.status(400).send("Senha é obrigatório.");

    const userExists = await User.findOne({ email })
    if (userExists) return res.status(400).send("Usuário já existe.");

    await User.create({ email, password });

    return res.status(201).json({});
  });

  app.post("/auth", async (req, res) => {
    const { email, password } = req.body;
    if (!email) return res.status(400).send("Email é obrigatório.");
    if (!password) return res.status(400).send("Senha é obrigatório.");

    const user = await User.findOne({ email });

    if (!user) return res.status(400).send("Usuário não encontrado.");

    if (user.password != password)
      return res.status(400).send("Senha incorreta.");

    return res.status(200).json({});
  });
}

async function initSettings() {
  return new Promise((resolve, reject) => {
    app.use(express.json());
    app.use((req, res, next) => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept"
      );
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, DELETE, OPTIONS"
      );
      next();
    });
    console.log("Setting initialized.");
    resolve();
  });
}

async function DBConnection() {
  return new Promise((resolve, reject) => {
    mongoose
      .connect(
        "mongodb+srv://quarentenos:quarentenos1234@cluster0.0t6ty.mongodb.net/Cliente?retryWrites=true&w=majority",
        { useUnifiedTopology: true, useNewUrlParser: true }
      )
      .then(() => {
        console.log("Conexão OK");
        resolve();
      })
      .catch(() => {
        console.log("Conexão NOK");
        reject();
      });
  });
}

async function initServer() {
  app.listen(3000, () => {
    console.log("Server running on port", 3000);
  });
}

async function start() {
  await DBConnection();
  await initSettings();
  initRoutes();
  await initServer();
}

module.exports = start;
