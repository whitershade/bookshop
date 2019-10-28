const tableName = 'Books';
const date = Date.now();

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Harry Potter',
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 2,
    name: 'The Hobbit',
    createdAt: date,
    updatedAt: date,
  },
  {
    id: 3,
    name: 'The wind from the Sun',
    createdAt: date,
    updatedAt: date,
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
