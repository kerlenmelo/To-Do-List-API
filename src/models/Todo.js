const sequelize = require('../database/database.js');
const { DataTypes } = require('sequelize');
const User = require('./User.js')

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
    },

    userId: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
})

// Associações
Todo.belongsTo(User, { foreignKey: 'userId' })
User.hasMany(Todo, { foreignKey: 'userId' })

module.exports = Todo;
