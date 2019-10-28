const tableName = 'BookToGenre';
const date = null;

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    genreId: 1,
    createdAt: date,
    updatedAt: date,
  },
  {
    bookId: 2,
    genreId: 1,
    createdAt: date,
    updatedAt: date,
  },
  {
    bookId: 3,
    genreId: 2,
    createdAt: date,
    updatedAt: date,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
