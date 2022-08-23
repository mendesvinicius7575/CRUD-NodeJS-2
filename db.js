const Sequelize = require('sequelize');

const componenteSequelize = new Sequelize('dbProduto', 'root','pokedx', {
    dialect: 'mysql', host: 'localhost'
});

module.exports = componenteSequelize;