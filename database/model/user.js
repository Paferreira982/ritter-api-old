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
        allowNull: false,
        unique: true
    },
    
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },

    email: {
        type: Sequelize.STRING,
        unique: true
    },

    telephone: {
        type: Sequelize.STRING,
        unique: true
    }
});

module.exports = User;