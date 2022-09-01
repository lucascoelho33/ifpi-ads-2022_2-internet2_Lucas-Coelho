const Sequelize = require('sequelize');
const database = require('./banco');

const Usuario = database.define('usuario', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,  // não permite nulo
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    login: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    telefone: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    conta_ativa: {
        type: Sequelize.BOOLEAN,
        allowNull: false
    }
})

module.exports = Usuario;