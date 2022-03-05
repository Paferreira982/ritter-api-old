const Sequelize = require("sequelize");
const database = require("../database");

const Role = database.define("role", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Role;