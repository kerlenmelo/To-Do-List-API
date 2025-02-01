const { Sequelize, Model } = require('sequelize');

// Configuração de conexão com o SQLite
const sequelize = new Sequelize({
    dialect: 'sqlite',      // dito ao sequelize que será utilizado o sqlite
    storage: './database/database.sqlite'       // dito o caminho do arquivo do banco de dados
})

module.exports = sequelize;  // exportado para ser utilizado em outros arquivos