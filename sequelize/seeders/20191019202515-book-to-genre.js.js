const tableName = 'BookToGenre';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    genreId: 1,
  },
  {
    bookId: 2,
    genreId: 1,
  },
  {
    bookId: 3,
    genreId: 2,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
