const { Model, DataTypes } = require('sequelize');
const Author = require('./Author');
const Genre = require('./Genre');
const Rating = require('./Rating');
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

Book.belongsToMany(Author, {
  through: 'BookToAuthor',
  foreignKey: 'bookId',
});

Book.belongsToMany(Genre, {
  through: 'BookToGenre',
  foreignKey: 'bookId',
});

Book.hasMany(Rating, {
  foreignKey: 'bookId',
});

module.exports = Book;
