const Sequelize = require("sequelize");
const database = require("../database")

const User = database.define("user", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },

    name: {
        type: Sequelize.STRING,
        allowNull: false
    },

    username: {
        type: Sequelize.STRING,
        allowNull: false
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: Sequelize.STRING,
    telephone: Sequelize.STRING
});

module.exports = User;