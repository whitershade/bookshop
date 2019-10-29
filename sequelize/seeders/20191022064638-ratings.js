const tableName = 'Ratings';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    rate: 10,
  },
  {
    bookId: 1,
    rate: 10,
  },
  {
    bookId: 1,
    rate: 10,
  },
  {
    bookId: 1,
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
    bookId: 2,
    rate: 8,
  },
  {
    bookId: 3,
    rate: 7,
  },
  {
    bookId: 3,
    rate: 8,
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
    rate: 7,
  },
  {
    bookId: 4,
    rate: 10,
  },
  {
    bookId: 5,
    rate: 9,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
