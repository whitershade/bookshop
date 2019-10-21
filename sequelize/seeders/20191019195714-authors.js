const tableName = 'Authors';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Joanne Rowling',
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
