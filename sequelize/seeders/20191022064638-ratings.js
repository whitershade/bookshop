const tableName = 'Ratings';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    bookId: 1,
    rate: 10,
  },
  {
    id: 2,
    bookId: 1,
    rate: 9,
  },
  {
    id: 3,
    bookId: 1,
    rate: 8,
  },
  {
    id: 4,
    bookId: 1,
    rate: 10,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
