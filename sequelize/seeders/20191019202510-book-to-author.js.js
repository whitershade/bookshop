const tableName = 'BookToAuthor';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    authorId: 1,
    createdAt: null,
    updatedAt: null,
  },
  {
    bookId: 2,
    authorId: 2,
    createdAt: null,
    updatedAt: null,
  },
  {
    bookId: 3,
    authorId: 3,
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
