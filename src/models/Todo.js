const sequelize = require('../database/database.js');
const { DataTypes } = require('sequelize');

// Definir o modelo da tabela
const Todo = sequelize.define('Todo', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING,
        allowNull: false
    },
    completed:{
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
})

module.exports = Todo; // exporta o modelo para ser utilizado em outros arquivos