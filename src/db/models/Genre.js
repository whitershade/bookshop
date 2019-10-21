const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Genre extends Model {}

Genre.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'Genre' });

module.exports = Genre;
