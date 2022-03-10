// INICIA CONFIGURAÇÕES NA BASE DE DADOS //
const { initDB } = require("./server/infra/ConfigDatabase");
initDB();

const express = require("express");
const app = express();

app.use(express.json());
app.use("/users", require("./server/route/UserRoute"));
app.use("/auth", require("./server/route/AuthRoute"));

app.listen(3000);