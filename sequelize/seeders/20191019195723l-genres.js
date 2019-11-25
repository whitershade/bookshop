const tableName = 'Genres';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    name: 'Fantasy Fiction',
  },
  {
    name: 'Science Fiction',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
