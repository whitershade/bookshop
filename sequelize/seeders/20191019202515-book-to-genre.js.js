const tableName = 'BookToGenre';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    genreId: 1,
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
