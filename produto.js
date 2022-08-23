//Chamando Sequelize
const Sequelize = require('sequelize');
//Instanciando o banco de dados
const database = require('./db');

const Produto  = database.define('Produto',
    {
        Id: 
        {
            type: Sequelize.INTEGER,
            autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        Nome: 
        {
            type: Sequelize.STRING,
            allowNull: false
        },
        DataCriacao:
        {
            type: Sequelize.DATE,
            allowNull: false,
        }
    }
)

module.exports = Produto;