const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class BookToAuthor extends Model {}

BookToAuthor.init({
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Book',
      key: 'id',
    },
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Author',
      key: 'id',
    },
  },
}, { sequelize, modelName: 'BookToAuthor' });
