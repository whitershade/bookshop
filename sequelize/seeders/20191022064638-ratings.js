const tableName = 'Ratings';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    userId: 1,
    rate: 10,
  },
  {
    bookId: 1,
    userId: 1,
    rate: 10,
  },
  {
    bookId: 1,
    userId: 1,
    rate: 10,
  },
  {
    bookId: 1,
    userId: 1,
    rate: 10,
  },
  {
    bookId: 2,
    userId: 1,
    rate: 9,
  },
  {
    bookId: 2,
    userId: 1,
    rate: 8,
  },
  {
    bookId: 2,
    userId: 1,
    rate: 8,
  },
  {
    bookId: 3,
    userId: 1,
    rate: 7,
  },
  {
    bookId: 3,
    userId: 1,
    rate: 8,
  },
  {
    bookId: 3,
    userId: 1,
    rate: 9,
  },
  {
    bookId: 3,
    userId: 1,
    rate: 8,
  },
  {
    bookId: 3,
    userId: 1,
    rate: 7,
  },
  {
    bookId: 4,
    userId: 1,
    rate: 10,
  },
  {
    bookId: 5,
    userId: 1,
    rate: 9,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
