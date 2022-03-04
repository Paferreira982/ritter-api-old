(async () => {
    const database = require("./database/database");
    const User = require("./database/model/user");
    await database.sync();
})();