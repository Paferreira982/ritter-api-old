const Sequelize = require("sequelize");
const database = require("../database")

const Usuario = database.define("usuario", {
    id: {
        type: Sequelize.BIGINT,
        autoIncrement: true,
        allowNull: false,
        primarykey: true
    },

    nome: {
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
    telefone: Sequelize.STRING
});

module.exports = Usuario;