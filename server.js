// INICIA CONFIGURAÇÕES NA BASE DE DADOS
(async () => {
    const { initDB, generateDatabase } = require("./server/infra/config");
    await generateDatabase();
    await initDB();
})();

const express = require("express");
const app = express();

app.use(express.json());
app.use("/users", require("./server/route/userRoute"));

app.listen(3000);