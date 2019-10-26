const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Book extends Model {}

Book.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [2, 100],
    trim: true,
  },
}, { sequelize, modelName: 'Book' });

module.exports = Book;
