const Sequelize = require('sequelize');
const sequelize = new Sequelize('database','nome_usuario','senha_usuario', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize;