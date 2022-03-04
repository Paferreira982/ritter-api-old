const Sequelize = require("sequelize");
const sequelize = new Sequelize("ritter", "root", "admin123", {
    dialect: "mariadb",
    host: "localhost",
    port: 3306
})

module.exports = sequelize;