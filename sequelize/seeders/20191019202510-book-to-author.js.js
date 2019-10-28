const tableName = 'BookToAuthor';
const date = null;

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    authorId: 1,
    createdAt: date,
    updatedAt: date,
  },
  {
    bookId: 2,
    authorId: 2,
    createdAt: date,
    updatedAt: date,
  },
  {
    bookId: 3,
    authorId: 3,
    createdAt: date,
    updatedAt: date,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
