const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class BookToGenre extends Model {}

BookToGenre.init({
  bookId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Book',
      key: 'id',
    },
  },
  genreId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: 'Genre',
      key: 'id',
    },
  },
}, { sequelize, modelName: 'BookToGenre' });
