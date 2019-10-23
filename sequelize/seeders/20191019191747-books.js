const tableName = 'Books';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Harry Potter',
    createdAt: null,
    updatedAt: null,
  },
  {
    id: 2,
    name: 'The Hobbit',
    createdAt: null,
    updatedAt: null,
  },
  {
    id: 3,
    name: 'The wind from the Sun',
    createdAt: null,
    updatedAt: null,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
