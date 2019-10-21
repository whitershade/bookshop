const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Rating extends Model {}

Rating.init({
  value: DataTypes.NUMBER,
}, { sequelize, modelName: 'Rating' });

module.exports = Rating;
