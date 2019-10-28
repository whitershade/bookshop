const tableName = 'Ratings';
const date = null;

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    bookId: 1,
    rate: 10,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 2,
    bookId: 1,
    rate: 9,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 3,
    bookId: 1,
    rate: 8,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 4,
    bookId: 1,
    rate: 10,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 5,
    bookId: 2,
    rate: 10,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 6,
    bookId: 2,
    rate: 9,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 7,
    bookId: 2,
    rate: 8,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 8,
    bookId: 3,
    rate: 10,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 9,
    bookId: 3,
    rate: 10,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 10,
    bookId: 3,
    rate: 9,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 11,
    bookId: 3,
    rate: 8,
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 12,
    bookId: 3,
    rate: 10,
    createdAt: date,
    updatedAt: date,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
