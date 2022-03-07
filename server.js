// INICIA CONFIGURAÇÕES NA BASE DE DADOS //
(async () => {
    const { initDB, generateDatabase } = require("./server/infra/ConfigDatabase");
    await generateDatabase();
    await initDB();
})();

const express = require("express");
const app = express();

app.use(express.json());
app.use("/users", require("./server/route/UserRoute"));

app.listen(3000);