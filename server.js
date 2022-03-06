// INICIA CONFIGURAÇÕES NA BASE DE DADOS
(async () => {
    const { initDB } = require("./server/infra/config");
    await initDB();
})();

const express = require("express");
const app = express();

app.use(express.json());
app.use("/users", require("./server/route/userRoute"));

app.listen(3000);