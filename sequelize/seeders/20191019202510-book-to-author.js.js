const tableName = 'BookToAuthor';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    bookId: 1,
    authorId: 1,
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
