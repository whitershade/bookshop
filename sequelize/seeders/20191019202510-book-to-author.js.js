const tableName = 'BookToAuthor';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    authorId: 1,
  },
  {
    bookId: 2,
    authorId: 1,
  },
  {
    bookId: 3,
    authorId: 1,
  },
  {
    bookId: 4,
    authorId: 2,
  },
  {
    bookId: 5,
    authorId: 3,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
