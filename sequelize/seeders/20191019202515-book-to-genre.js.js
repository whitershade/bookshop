const tableName = 'BookToGenre';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    genreId: 1,
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  },
  {
    bookId: 2,
    genreId: 1,
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  },
  {
    bookId: 3,
    genreId: 2,
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
