const tableName = 'Books';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    name: 'Harry Potter',
  },
  {
    name: 'The Hobbit',
  },
  {
    name: 'The wind from the Sun',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
