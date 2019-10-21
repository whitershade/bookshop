const tableName = 'Genres';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Fantasy Fiction',
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
