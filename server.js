(async () => {
    const { initDB } = require("./server/infra/config");
    await initDB();
})();