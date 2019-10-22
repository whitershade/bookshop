const { Model, DataTypes } = require('sequelize');
const sequelize = require('../sequelize');

class Author extends Model {}

Author.init({
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    len: [2, 100],
    trim: true,
  },
}, { sequelize, modelName: 'Author' });

Author.belongsToMany(Author, {
  through: 'BookToAuthor',
  as: 'Author',
  foreignKey: 'authorId',
});

module.exports = Author;
