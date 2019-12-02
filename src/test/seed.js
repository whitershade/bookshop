const models = require('../db/models');
const sequelize = require('../db/sequelize');

const DATETIME = '2019-11-12T08:19:13.000Z';

const usersSeed = [{
  firstName: 'admin',
  lastName: 'user',
  password: 'password',
  email: 'admin@email.com',
  role: 'admin',
}, {
  firstName: 'just',
  lastName: 'user',
  password: 'password',
  email: 'user@email.com',
  role: 'user',
}];

const authorNames = [
  'Joanne Rowling',
  'John Ronald Reuel Tolkien',
  'Sir Arthur Charles Clarke',
];

const genreNames = [
  'Fantasy Fiction',
  'Science Fiction',
];

const bookNames = [
  'Harry Potter and the Philosopher\'s Stone',
  'Harry Potter and the Chamber of Secrets',
  'Harry Potter and the Prisoner of Azkaban',
  'The Hobbit',
  'The wind from the Sun',
];

const ratingsSeed = [
  {
    rate: 10,
    bookId: 1,
    userId: 1,
  },
  {
    rate: 10,
    bookId: 1,
    userId: 1,
  },
  {
    rate: 10,
    bookId: 1,
    userId: 1,
  },
  {
    rate: 10,
    bookId: 1,
    userId: 1,
  },
  {
    rate: 9,
    bookId: 2,
    userId: 1,
  },
  {
    rate: 8,
    bookId: 2,
    userId: 1,
  },
  {
    rate: 8,
    bookId: 2,
    userId: 1,
  },
  {
    rate: 7,
    bookId: 3,
    userId: 1,
  },
  {
    rate: 8,
    bookId: 3,
    userId: 1,
  },
  {
    rate: 9,
    bookId: 3,
    userId: 1,
  },
  {
    rate: 8,
    bookId: 3,
    userId: 1,
  },
  {
    rate: 7,
    bookId: 3,
    userId: 1,
  },
  {
    rate: 10,
    bookId: 4,
    userId: 1,
  },
  {
    rate: 9,
    bookId: 5,
    userId: 1,
  },
];

const seedDb = async () => {
  await models.User.bulkCreate(usersSeed.map((user) => ({
    ...user,
    createdAt: DATETIME,
    updatedAt: DATETIME,
  })));

  const [books, genres, authors] = await Promise.all([
    models.Book.bulkCreate(bookNames.map((bookName) => ({
      name: bookName,
      createdAt: DATETIME,
      updatedAt: DATETIME,
    }))),
    models.Genre.bulkCreate(genreNames.map((genreName) => ({
      name: genreName,
      createdAt: DATETIME,
      updatedAt: DATETIME,
    }))),
    models.Author.bulkCreate(authorNames.map((authorName) => ({
      name: authorName,
      createdAt: DATETIME,
      updatedAt: DATETIME,
    }))),
    models.Rating.bulkCreate(ratingsSeed.map((rating) => ({
      ...rating,
      createdAt: DATETIME,
      updatedAt: DATETIME,
    }))),
  ]);

  await Promise.all([
    books[0].addAuthor(authors[0]),
    books[1].addAuthor(authors[0]),
    books[2].addAuthor(authors[0]),
    books[3].addAuthor(authors[1]),
    books[4].addAuthor(authors[2]),

    books[0].addGenre(genres[0]),
    books[1].addGenre(genres[0]),
    books[2].addGenre(genres[0]),
    books[3].addGenre(genres[0]),
    books[4].addGenre(genres[1]),
  ]);
};

const clearDb = async () => {
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 0', null, { raw: true });
  await models.Book.destroy({ where: {}, truncate: true, cascade: true });
  await models.Author.destroy({ where: {}, truncate: true, cascade: true });
  await models.Genre.destroy({ where: {}, truncate: true, cascade: true });
  await models.User.destroy({ where: {}, truncate: true, cascade: true });
  await models.Rating.destroy({ where: {}, truncate: true, cascade: true });
  await sequelize.query('SET FOREIGN_KEY_CHECKS = 1', null, { raw: true });
};

module.exports = {
  DATETIME, seedDb, clearDb,
};
