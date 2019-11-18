const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Rating extends Model {}

Rating.init({
  rate: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
}, { sequelize, modelName: 'Rating' });

module.exports = Rating;
