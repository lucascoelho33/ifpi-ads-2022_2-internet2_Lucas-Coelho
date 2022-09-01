const Sequelize = require('sequelize');
const sequelize = new Sequelize('crud', 'nome', 'senha', {
    dialect: 'postgres',
    host: 'localhost',
    port: 5432
})

module.exports = sequelize;