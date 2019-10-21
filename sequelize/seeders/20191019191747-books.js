const tableName = 'Books';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Harry Potter',
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
