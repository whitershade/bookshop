const tableName = 'Books';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Harry Potter',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  },
  {
    id: 2,
    name: 'The Hobbit',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  },
  {
    id: 3,
    name: 'The wind from the Sun',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
