const ENV = require("../server/infra/ConfigEnviroment");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(ENV.DB_NAME, ENV.DB_USER, ENV.DB_PASSWORD, {
    dialect: "mariadb",
    host: ENV.DB_URL,
    port: ENV.DB_PORT,
    timezone: ENV.DB_TZ
});

module.exports = sequelize;