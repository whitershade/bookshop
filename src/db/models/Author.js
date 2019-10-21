const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Author extends Model {}

Author.init({
  name: DataTypes.STRING,
}, { sequelize, modelName: 'Author' });

Author.belongsToMany(Author, {
  through: 'BookToAuthor',
  as: 'Author',
  foreignKey: 'authorId',
});

module.exports = Author;
