const Sequelize = require('sequelize');

const connection = new Sequelize('guiapress', 'root', '6991Lara03',{
    host: 'localhost',
    dialect: 'mysql'
})

module.exports = connection;