const tableName = 'Genres';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Fantasy Fiction',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  },
  {
    id: 2,
    name: 'Science Fiction',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
