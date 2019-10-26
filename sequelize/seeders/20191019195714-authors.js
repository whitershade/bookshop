const tableName = 'Authors';

module.exports = {
  up: (queryInterface) => queryInterface.bulkInsert(tableName, [{
    id: 1,
    name: 'Joanne Rowling',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  },
  {
    id: 2,
    name: 'John Ronald Reuel Tolkien',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  },
  {
    id: 3,
    name: 'Sir Arthur Charles Clarke',
    createdAt: '2019-10-26T21:24:24.000Z',
    updatedAt: '2019-10-26T21:24:24.000Z',
  }], {}),

  down: (queryInterface) => queryInterface.bulkDelete(tableName, null, {}),
};
