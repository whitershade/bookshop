const Author = require('./Author');
const Book = require('./Book');
const Genre = require('./Genre');
const Rating = require('./Rating');
const User = require('./User');

// Book
Book.belongsToMany(Author, {
  through: 'BookToAuthor',
});

Book.belongsToMany(Genre, {
  through: 'BookToGenre',
});

Book.hasMany(Rating, {
  foreignKey: 'bookId',
});

// Author
Author.belongsToMany(Book, {
  through: 'BookToAuthor',
  foreignKey: 'authorId',
});

// Genre
Genre.belongsToMany(Book, {
  through: 'BookToGenre',
});

// Rating
Rating.belongsTo(Book, {
  foreignKey: 'bookId',
});

Rating.belongsTo(User, {
  foreignKey: 'userId',
});

// User
User.hasMany(Rating, {
  foreignKey: 'userId',
});

module.exports = {
  Author,
  Book,
  Genre,
  Rating,
  User,
};
