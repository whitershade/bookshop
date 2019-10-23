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
  },
  {
    id: 5,
    bookId: 2,
    rate: 10,
  },
  {
    id: 6,
    bookId: 2,
    rate: 9,
  },
  {
    id: 7,
    bookId: 2,
    rate: 8,
  },
  {
    id: 8,
    bookId: 3,
    rate: 10,
  },
  {
    id: 9,
    bookId: 3,
    rate: 10,
  },
  {
    id: 10,
    bookId: 3,
    rate: 9,
  },
  {
    id: 11,
    bookId: 3,
    rate: 8,
  },
  {
    id: 12,
    bookId: 3,
    rate: 10,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
