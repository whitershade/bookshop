const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Genre extends Model {}

Genre.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [2, 100],
    trim: true,
  },
}, { sequelize, modelName: 'Genre' });

module.exports = Genre;
