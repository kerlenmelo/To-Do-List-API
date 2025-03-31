require('dotenv').config()
const { Sequelize, Model } = require('sequelize');

// Configuração de conexão com o SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: process.env.DB_STORAGE
})

module.exports = sequelize;