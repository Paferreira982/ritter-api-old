const Sequelize = require("sequelize");
const database = require("../database");
const Role = require("./role");
const bcrypt = require("bcrypt");

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
        allowNull: false,
        set(password) {
          this.setDataValue('password', bcrypt.hashSync(password, this.username));
        }
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

User.belongsToMany(Role, { through: 'users_roles' });
Role.belongsToMany(User, { through: 'users_roles' })

module.exports = User;