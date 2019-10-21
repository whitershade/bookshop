const { Model, DataTypes } = require('sequelize');
const Author = require('./Author');
const Genre = require('./Genre');
const sequelize = require('../sequelize');

class Book extends Model {}

Book.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'Book' });

Book.belongsToMany(Author, {
  through: 'BookToAuthor',
  foreignKey: 'bookId',
});

Book.belongsToMany(Genre, {
  through: 'BookToGenre',
  foreignKey: 'bookId',
});

module.exports = Book;
