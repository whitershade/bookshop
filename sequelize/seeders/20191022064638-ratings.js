const tableName = 'Ratings';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    rate: 10,
  },
  {
    bookId: 1,
    rate: 9,
  },
  {
    bookId: 1,
    rate: 8,
  },
  {
    bookId: 1,
    rate: 10,
  },
  {
    bookId: 2,
    rate: 10,
  },
  {
    bookId: 2,
    rate: 9,
  },
  {
    bookId: 2,
    rate: 8,
  },
  {
    bookId: 3,
    rate: 10,
  },
  {
    bookId: 3,
    rate: 10,
  },
  {
    bookId: 3,
    rate: 9,
  },
  {
    bookId: 3,
    rate: 8,
  },
  {
    bookId: 3,
    rate: 10,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
