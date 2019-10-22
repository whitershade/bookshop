const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Rating extends Model {}

Rating.init({
  rate: {
    type: DataTypes.NUMBER,
    allowNull: false,
  },
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Book',
      key: 'id',
    },
  },
}, { sequelize, modelName: 'Rating' });

module.exports = Rating;
